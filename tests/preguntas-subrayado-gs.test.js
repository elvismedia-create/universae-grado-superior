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
  assert.deepEqual(questions.validateDraft({ texto: proposal.texto, correctaTexto: proposal.correctaTexto }),
    { texto: proposal.texto, correctaTexto: proposal.correctaTexto });
  assert.equal(questions.validateDraft({ texto: '', correctaTexto: proposal.correctaTexto }), null);
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

test('API separa enunciados aprobables de las tres opciones incorrectas', async () => {
  const oldKey = process.env.ANTHROPIC_API_KEY;
  const oldFetch = global.fetch;
  process.env.ANTHROPIC_API_KEY = 'test-key';
  const sent = [];
  global.fetch = async (_, options) => {
    const payload = JSON.parse(options.body);
    sent.push(payload);
    const reply = sent.length === 1
      ? { preguntas: Array.from({ length: 7 }, (_, i) => ({ texto: `${proposal.texto} ${i}`, correctaTexto: proposal.correctaTexto })) }
      : { incorrectas: proposal.incorrectas, explicacion: proposal.explicacion };
    return { ok: true, json: async () => ({ content: [{ type: 'text', text: JSON.stringify(reply) }] }) };
  };
  const call = async body => {
    const res = { statusCode: 200, setHeader() {}, status(code) { this.statusCode = code; return this; }, json(data) { this.body = data; return this; } };
    return handler({ method: 'POST', body }, res);
  };
  try {
    assert.equal((await call({ ...context, fase: 'preguntas', pagina: 999 })).statusCode, 400);
    assert.equal((await call({ ...context, fase: 'incorrectas', texto: '' })).statusCode, 400);
    assert.equal((await call({ ...context, fase: 'otra' })).statusCode, 400);
    const drafts = await call({ ...context, fase: 'preguntas' });
    assert.equal(drafts.statusCode, 200);
    assert.equal(drafts.body.preguntas.length, 5);
    assert.deepEqual(Object.keys(drafts.body.preguntas[0]), ['texto', 'correctaTexto']);
    const approved = { texto: '¿Qué magnitud eléctrica se mide en ohmios?', correctaTexto: 'La resistencia' };
    const distractors = await call({ ...context, ...approved, fase: 'incorrectas' });
    assert.equal(distractors.statusCode, 200);
    assert.deepEqual(distractors.body.incorrectas, proposal.incorrectas);
    assert.deepEqual(JSON.parse(sent[1].messages[0].content), {
      tema: context.tema, pagina: context.pagina, fragmento: context.fragmento, ...approved
    });
    assert.equal('opciones' in drafts.body.preguntas[0], false);
  } finally {
    global.fetch = oldFetch;
    if (oldKey === undefined) delete process.env.ANTHROPIC_API_KEY;
    else process.env.ANTHROPIC_API_KEY = oldKey;
  }
});

test('aprobar una fase no altera el progreso ni añade preguntas; solo confirma la segunda', () => {
  const db = storage({ [questions.KEY]: '[]', mastertest_db: '{"U1: Conceptos básicos":{"dom":[1]}}' });
  const approved = questions.validateDraft({ texto: '¿Qué unidad mide la resistencia?', correctaTexto: 'El ohmio' });
  assert.deepEqual(questions.read(db), []);
  const generated = { ...approved, incorrectas: ['Vatio', 'Amperio', 'Voltio'] };
  assert.equal(questions.validate(generated).opciones.length, 4);
  assert.deepEqual(questions.read(db), []);
  assert.equal(questions.confirm(db, context, generated).ok, true);
  assert.equal(questions.read(db).length, 1);
  assert.equal(db.getItem('mastertest_db'), '{"U1: Conceptos básicos":{"dom":[1]}}');
});
