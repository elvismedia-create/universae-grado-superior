const test = require('node:test');
const assert = require('node:assert/strict');
const notes = require('../anotaciones-gs.js');
const errors = require('../cuaderno-gs.js');

const q1 = { id: 1, texto: 'Unidad de resistencia', opciones: ['Ohmio', 'Vatio'], correctaTexto: 'Ohmio', explicacion: 'La resistencia se mide en ohmios.' };
const q2 = { id: 2, texto: 'Potencia trifásica', opciones: ['A', 'B'], correctaTexto: 'B' };
const course = [{ bloque: 'sistemas_gs', titulo_boton: 'Sistemas y circuitos', asignaturas: [
  { nombre: 'U1: Conceptos básicos', data: [q1, q2] }
] }];
function storage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value),
    key: index => [...data.keys()][index], get length() { return data.size; } };
}

test('incorpora fallos previos sin perder la lista original y conserva motivo y recuento', () => {
  const db = storage({ mastertest_fails: '[1]' });
  const legacy = errors.read(db, course);
  const key = 'sistemas_gs:0:1';
  assert.equal(legacy[key].count, 1);
  assert.equal(legacy[key].selected, '');
  assert.equal(errors.setReason(db, course, key, 'conceptos'), true);
  errors.record(db, course, q1, 'Vatio', 'test');
  errors.record(db, course, q1, 'Vatio', 'simulacro');
  const entry = errors.read(db, course)[key];
  assert.equal(entry.count, 3);
  assert.equal(entry.reason, 'conceptos');
  assert.equal(entry.selected, 'Vatio');
  assert.equal(entry.correct, 'Ohmio');
  assert.equal(entry.explanation, q1.explicacion);
  assert.equal(db.getItem('mastertest_fails'), '[1]');
  assert.deepEqual(errors.related(course, db, 'sistemas_gs', 0, 'conceptos').map(q => q.id), [1, 2]);
});

test('incluye preguntas de IA del mismo tema sin mezclarlas con otro bloque', () => {
  const ai = { id: 99, texto: 'Pregunta generada', tema: 'U1: Conceptos básicos', correctaTexto: 'Sí', origen: 'ia' };
  const db = storage({ mastertest_fails: '[99]', mastertest_ia_preguntas: JSON.stringify([ai]) });
  assert.equal(errors.read(db, course)['sistemas_gs:0:99'].question, ai.texto);
  assert.equal(errors.record(db, course, ai, 'No', 'test').count, 2);
  assert.equal(errors.locate(course, { ...ai, tema: 'Otro tema' }), null);
});

test('borra errores del cuaderno y de ambos bancos sin alterar el progreso', () => {
  const progress = '{"U1: Conceptos básicos":{"active":[1]}}';
  const bank = { '1': { pregunta: q1, fallos: 3 }, '2': { pregunta: q2, fallos: 2 } };
  const db = storage({ mastertest_fails: '[1]', academia_banco_fallos: JSON.stringify(bank), mastertest_db: progress });
  const first = errors.read(db, course);
  assert.equal(Object.keys(first).length, 2);
  assert.equal(first['sistemas_gs:0:2'].count, 2);
  assert.equal(errors.remove(db, course, 'sistemas_gs:0:1'), 1);
  assert.deepEqual(JSON.parse(db.getItem('mastertest_fails')), []);
  assert.deepEqual(Object.keys(JSON.parse(db.getItem('academia_banco_fallos'))), ['2']);
  assert.deepEqual(Object.keys(errors.read(db, course)), ['sistemas_gs:0:2']);
  assert.equal(db.getItem('mastertest_db'), progress);
  assert.equal(errors.remove(db, course, ['sistemas_gs:0:2']), 1);
  assert.deepEqual(errors.read(db, course), {});
  assert.equal(errors.remove(db, course, 'sistemas_gs:0:2'), 0);
});

test('mantiene subrayados antiguos al recuperar texto, enlazar una selección y guardar una tarjeta', () => {
  const key = 'universae_pdf_annotations:sistemas_gs:0';
  const old = { 3: [{ type: 'highlight', color: 'yellow', rects: [{ x: .1, y: .2, width: .3, height: .02 }] }] };
  const db = storage({ [key]: JSON.stringify(old) });
  const item = notes.list(db, course)[0];
  assert.equal(item.page, 3);
  notes.idFor(item.stroke);
  assert.equal(notes.update(db, item, { text: 'Ley de Ohm', note: { kind: 'card', prompt: '¿Qué relaciona?' } }), true);
  const saved = JSON.parse(db.getItem(key))[3][0];
  assert.deepEqual(saved.rects, old[3][0].rects);
  assert.equal(saved.text, 'Ley de Ohm');
  assert.equal(saved.note.prompt, '¿Qué relaciona?');
});

test('extrae texto de la geometría y deja intacta una marca si no hay texto', () => {
  const content = { nodeType: 3, textContent: 'AB' };
  let char = 0;
  const layer = { ownerDocument: { createRange: () => ({ setStart: (_, index) => { char = index; }, setEnd() {},
    getBoundingClientRect: () => ({ left: char * 10, right: char * 10 + 10, top: 10, bottom: 20 }) }) },
    querySelectorAll: () => [{ firstChild: content, getBoundingClientRect: () => ({ left: 0, right: 20, top: 10, bottom: 20 }) }] };
  assert.equal(notes.extractText(layer, [{ x: 0, y: .1, width: .1, height: .1 }], { left: 0, top: 0, width: 100, height: 100 }), 'A');
  assert.equal(notes.extractText(null, [{ x: 0, y: 0, width: 1, height: 1 }], {}), '');
});
