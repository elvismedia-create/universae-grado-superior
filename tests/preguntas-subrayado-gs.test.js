const test = require('node:test');
const assert = require('node:assert/strict');
const questions = require('../preguntas-subrayado-gs.js');
const handler = require('../api/preguntas-subrayado.js');

function storage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) };
}
const context = { bid: 'sistemas_gs', idx: 1, pagina: 4, tema: 'U1: Conceptos básicos',
  fragmento: 'La resistencia se mide en ohmios y limita la intensidad de corriente.', marcaId: 'mark-1' };
const proposal = { texto: '¿Qué magnitud se mide en ohmios?', correctaTexto: 'Resistencia',
  incorrectas: ['Potencia', 'Frecuencia', 'Energía'], explicacion: 'El fragmento dice que la resistencia se mide en ohmios.' };

test('no guarda propuestas hasta confirmar y descartar todas mantiene el banco intacto', () => {
  const db = storage({ [questions.KEY]: '[]', 'universae_pdf_annotations:sistemas_gs:1': '{"4":[{"type":"highlight"}]}' });
  assert.equal(questions.validate(proposal).opciones.length, 4);
  assert.deepEqual(questions.read(db), []);
  assert.equal(db.getItem(questions.KEY), '[]');
  assert.equal(db.getItem('universae_pdf_annotations:sistemas_gs:1'), '{"4":[{"type":"highlight"}]}');
});

test('solo añade la pregunta confirmada con su página, fragmento y cuatro opciones', () => {
  const db = storage({ mastertest_db: '{"U1: Conceptos básicos":{"active":[1]}}' });
  const result = questions.confirm(db, context, proposal);
  assert.equal(result.ok, true);
  assert.equal(result.question.origen, 'ia');
  assert.deepEqual(result.question.opciones, ['Resistencia', 'Potencia', 'Frecuencia', 'Energía']);
  assert.deepEqual(result.question.fuente, { bid: context.bid, idx: context.idx, pagina: 4,
    fragmento: context.fragmento, marcaId: 'mark-1' });
  assert.equal(questions.read(db).length, 1);
  assert.equal(db.getItem('mastertest_db'), '{"U1: Conceptos básicos":{"active":[1]}}');
});

test('rechaza opciones repetidas, preguntas duplicadas y enunciados ya presentes en el tema', () => {
  const db = storage();
  assert.equal(questions.confirm(db, context, { ...proposal, incorrectas: ['Potencia', 'potencia', 'Energía'] }).ok, false);
  assert.equal(questions.confirm(db, context, { ...proposal, incorrectas: ['Potencia', 'Frecuencia'] }).ok, false);
  assert.equal(questions.confirm(db, context, proposal, [{ texto: proposal.texto }]).ok, false);
  assert.equal(questions.confirm(db, context, proposal).ok, true);
  assert.equal(questions.confirm(db, context, { ...proposal, texto: ' ¿QUÉ magnitud se mide en ohmios? ' }).ok, false);
  assert.equal(questions.read(db).length, 1);
});

test('API exige página real y devuelve como máximo cinco propuestas, sin guardarlas', async () => {
  const oldKey = process.env.ANTHROPIC_API_KEY;
  const oldFetch = global.fetch;
  process.env.ANTHROPIC_API_KEY = 'test-key';
  global.fetch = async () => ({ ok: true, json: async () => ({ content: [{ type: 'text', text: JSON.stringify({
    preguntas: Array.from({ length: 7 }, (_, i) => ({ ...proposal, texto: `${proposal.texto} ${i}` }))
  }) }] }) });
  const call = async body => {
    const res = { statusCode: 200, setHeader() {}, status(code) { this.statusCode = code; return this; }, json(data) { this.body = data; return this; } };
    return handler({ method: 'POST', body }, res);
  };
  try {
    assert.equal((await call({ ...context, pagina: 999 })).statusCode, 400);
    const result = await call(context);
    assert.equal(result.statusCode, 200);
    assert.equal(result.body.preguntas.length, 5);
    assert.equal(result.body.preguntas[0].opciones.length, 4);
  } finally {
    global.fetch = oldFetch;
    if (oldKey === undefined) delete process.env.ANTHROPIC_API_KEY;
    else process.env.ANTHROPIC_API_KEY = oldKey;
  }
});
