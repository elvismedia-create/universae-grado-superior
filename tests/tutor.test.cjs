const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { retrieve, validateAnswer, version } = require('../lib/tutor');
const corpus = require('../apuntes/tutor-index.json');

function callApi(body, options = {}) {
  const sandbox = { module: { exports: {} }, require: () => require('../lib/tutor'),
    process: { env: options.key ? { [options.keyName || 'ANTHROPIC_API_KEY']: 'test-only' } : {} }, AbortSignal,
    fetch: options.fetch || (() => { throw Error('Unexpected provider call'); }) };
  vm.runInNewContext(fs.readFileSync(require.resolve('../api/explicacion-profunda'), 'utf8'), sandbox);
  const res = { setHeader() {}, status(code) { this.code = code; return this; }, json(value) { this.body = value; return this; } };
  return sandbox.module.exports({ method: options.method || 'POST', body }, res).then(() => res);
}

const request = { bid: 'sistemas_gs', idx: 2, pregunta: 'Diferencia entre estrella y triángulo' };

test('48 PDFs indexed by physical page; frontend cache matches corpus', () => {
  assert.equal(corpus.documents.length, 48);
  assert.equal(new Set(corpus.documents.map(d => d.id)).size, 48);
  assert(fs.readFileSync(require.resolve('../tutor.js'), 'utf8').includes(version));
  for (const doc of corpus.documents) {
    assert(doc.pages.some(p => p.text.length > 100));
    doc.pages.forEach((page, i) => assert.equal(page.number, i + 1));
    const result = retrieve(doc.bid, doc.idx, 'Resume este tema');
    assert(result.sources.length, doc.id);
    result.sources.forEach(s => assert(doc.pages[s.page - 1].text.includes(s.text)));
  }
});

test('retrieval stays in the selected topic and keeps follow-up context', () => {
  const r = retrieve(request.bid, request.idx, request.pregunta);
  assert(r.sources.some(s => s.page === 5));
  assert.equal(r.document.id, 'sistemas_gs:2');
  const follow = retrieve(request.bid, request.idx, 'Más sencillo', [{ role: 'user', content: request.pregunta }]);
  assert(follow.sources.some(s => s.page === 5));
  assert.equal(retrieve('../../etc/passwd', 1, 'hola'), null);
  assert.equal(retrieve(request.bid, request.idx, 'zzzxxyyqqq').sources.length, 0);
});

test('only real source IDs, exact quotes and server-owned page metadata accepted', () => {
  const r = retrieve(request.bid, request.idx, request.pregunta), s = r.sources[0];
  const answer = { encontrado: true, respuesta: 'Explicación [S1]', citas: [{ id: 'S1', cita: s.text.slice(0, 100), pagina: 999, url: 'https://invalid.test' }] };
  const valid = validateAnswer(answer, r.document, r.sources);
  assert(valid.encontrado);
  assert.equal(valid.fuentes[0].pagina, s.page);
  assert.equal(valid.fuentes[0].url, r.document.url);
  assert(!validateAnswer({ ...answer, respuesta: 'Falso [S999]' }, r.document, r.sources).encontrado);
  assert(!validateAnswer({ ...answer, citas: [{ id: 'S1', cita: 'Texto inventado que no está en el documento.' }] }, r.document, r.sources).encontrado);
  assert(!validateAnswer({ ...answer, respuesta: 'Sin cita' }, r.document, r.sources).encontrado);
  const scanned = { ...answer, citas: [{ id: 'S1', cita: 'Las tensiones de fase son iguales entre sí y lo mismo pasa con las tensiones de fase.' }] };
  const ocrSource = { id: 'S1', page: 6, text: 'Las ten- siones de fase son iguales entre sí y lo mismo pasa con las ten- siones de fase.' };
  const verified = validateAnswer(scanned, r.document, [ocrSource]);
  assert.equal(verified.encontrado, true);
  assert(ocrSource.text.includes(verified.fuentes[0].cita));
});

test('API rejects invalid input, abstains on no evidence and exposes missing configuration safely', async () => {
  assert.equal((await callApi(request, { method: 'GET' })).code, 405);
  assert.equal((await callApi({ ...request, idx: '2' })).code, 400);
  assert.equal((await callApi({ ...request, pregunta: 'x'.repeat(1801) })).code, 400);
  assert.equal((await callApi({ ...request, bid: 'unknown' })).code, 404);
  const absent = await callApi({ ...request, pregunta: 'zzzxxyyqqq' });
  assert.equal(absent.body.encontrado, false);
  const missing = await callApi(request);
  assert.equal(missing.code, 503);
  assert.equal(missing.body.code, 'ANTHROPIC_API_KEY_MISSING');
  assert(missing.body.fuentes.length);
});

test('API includes the real exercise and validates the provider response', async () => {
  const result = await callApi({ ...request, modo: 'pista', ejercicio: { pregunta: request.pregunta, respuestaAlumno: 'Mi respuesta' } }, {
    key: true,
    fetch: async (url, options) => {
      assert.equal(url, 'https://api.anthropic.com/v1/messages');
      const input = JSON.parse(options.body), context = JSON.parse(input.messages[0].content);
      assert(input.system.includes('No reveles la respuesta'));
      assert.equal(context.ejercicio.respuestaAlumno, 'Mi respuesta');
      const source = context.fuentes[0];
      return { ok: true, json: async () => ({ content: [{ type: 'text', text: JSON.stringify({ encontrado: true,
        respuesta: 'Pista basada en tus apuntes [S1]', citas: [{ id: 'S1', cita: source.text.slice(0, 100) }] }) }] }) };
    }
  });
  assert.equal(result.code, 200);
  assert(result.body.usaApuntes);
  assert(result.body.fuentes.length);
});

test('API accepts the Vercel secret named Universae', async () => {
  const result = await callApi(request, {
    key: true, keyName: 'Universae',
    fetch: async (_url, options) => {
      assert.equal(options.headers['x-api-key'], 'test-only');
      return { ok: true, json: async () => ({ content: [{ type: 'text', text: '{"encontrado":false}' }] }) };
    }
  });
  assert.equal(result.code, 200);
  assert.equal(result.body.encontrado, false);
});

test('provider failures do not leak credentials or raw provider errors', async () => {
  const failed = await callApi(request, { key: true, fetch: async () => ({ ok: false, status: 401, text: async () => 'secret' }) });
  assert.equal(failed.code, 502);
  assert(!JSON.stringify(failed.body).includes('secret'));
  const malformed = await callApi(request, { key: true, fetch: async () => ({ ok: true, json: async () => ({ content: [{ type: 'text', text: 'not json' }] }) }) });
  assert.equal(malformed.code, 502);
});
