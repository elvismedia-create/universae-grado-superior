const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const srs = require('../repaso-espaciado.js');

const question = {
  id: 410101,
  texto: 'Pregunta de prueba',
  opciones: ['Correcta', 'Incorrecta'],
  correctaTexto: 'Correcta',
  explicacion: 'Explicación'
};
const topic = { nombre: 'U1: Conceptos básicos', data: [question] };
const config = [{ bloque: 'sistemas_gs', titulo_boton: 'Sistemas y circuitos', asignaturas: [topic] }];

function harness(initial = {}) {
  const storage = new Map(Object.entries(initial));
  const elements = new Map();
  const element = id => {
    if (!elements.has(id)) elements.set(id, { innerHTML: '', classList: { add() {}, remove() {} } });
    return elements.get(id);
  };
  const context = vm.createContext({
    RepasoEspaciado: srs,
    CONFIGURACION_CURSO: config,
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, String(value)),
      removeItem: key => storage.delete(key)
    },
    document: { querySelectorAll: () => [], getElementById: element },
    window: { AudioContext: class {}, scrollTo() {} },
    setTimeout() {},
    clearInterval() {},
    console: { log() {}, warn() {}, error() {} },
    alert() {},
    confirm: () => true
  });
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'motor.js'), 'utf8'), context);
  return { context, storage, elements };
}

test('el test normal guarda fecha y exige dias distintos para dominar', () => {
  const { context, storage, elements } = harness();
  context.jugar('carrera', 0, 'sistemas_gs');
  assert.ok(elements.get('pantalla-test').innerHTML.includes('Pregunta de prueba'));
  const correctIndex = vm.runInContext('preguntasJuego[0].opciones.indexOf("Correcta")', context);
  context.clickOpcion(correctIndex);
  assert.ok(elements.get('pantalla-test').innerHTML.includes('Lo sabía'));
  context.registrarConfianza('sabia');
  let state = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  assert.equal(state.srs[question.id].streak, 1);
  assert.equal(state.dom.length, 0);
  assert.ok(elements.get('pantalla-resultados').innerHTML.includes('Próximo repaso'));

  context.jugar('carrera', 0, 'sistemas_gs');
  context.clickOpcion(vm.runInContext('preguntasJuego[0].opciones.indexOf("Correcta")', context));
  context.registrarConfianza('sabia');
  state = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  assert.equal(state.srs[question.id].streak, 1);
  assert.equal(state.dom.length, 0);
});

test('las preguntas antiguas dominadas aparecen en el repaso de hoy', () => {
  const old = { [topic.nombre]: { active: [], dom: [question.id], master_index: 1, stats: {} } };
  const { context, storage } = harness({ mastertest_db: JSON.stringify(old) });
  assert.equal(context.contarRepasosTema(topic, old[topic.nombre]), 1);
  context.jugar('repaso_espaciado', 0, 'sistemas_gs');
  assert.equal(vm.runInContext('preguntasJuego.length', context), 1);
  const migrated = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  assert.equal(migrated.dom.length, 1);
  assert.equal(migrated.srs[question.id].streak, 3);
});

test('un acierto por descarte queda pendiente para manana', () => {
  const { context, storage } = harness();
  context.jugar('carrera', 0, 'sistemas_gs');
  const correctIndex = vm.runInContext('preguntasJuego[0].opciones.indexOf("Correcta")', context);
  context.clickOpcion(correctIndex);
  context.registrarConfianza('descarte');
  const state = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  assert.equal(state.srs[question.id].streak, 0);
  assert.equal(state.srs[question.id].confidence, 'descarte');
  assert.equal(state.srs[question.id].dueDate, srs.addDays(srs.dayKey(), 1));
  assert.deepEqual(state.dom, []);
});

test('un fallo reinicia la racha y conserva la pregunta en errores', () => {
  const previous = srs.review(null, true, 'sabia', srs.addDays(srs.dayKey(), -1));
  const old = { [topic.nombre]: { active: [question.id], dom: [], master_index: 1, stats: {}, srs: { [question.id]: previous } } };
  const { context, storage } = harness({ mastertest_db: JSON.stringify(old) });
  context.jugar('repaso_espaciado', 0, 'sistemas_gs');
  const wrongIndex = vm.runInContext('preguntasJuego[0].opciones.indexOf("Incorrecta")', context);
  context.clickOpcion(wrongIndex);
  context.finalizar();
  const state = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  assert.equal(state.srs[question.id].streak, 0);
  assert.equal(state.srs[question.id].confidence, 'fallo');
  assert.ok(JSON.parse(storage.get('mastertest_fails')).includes(question.id));
});

test('las preguntas de IA mantienen su dominio separado del progreso base', () => {
  const ai = { ...question, id: 999, origen: 'ia', tema: topic.nombre };
  const old = { [topic.nombre]: { active: [], dom: [ai.id], master_index: 1, stats: {} } };
  const { context, storage } = harness({
    mastertest_db: JSON.stringify(old),
    mastertest_ia_preguntas: JSON.stringify([ai]),
    mastertest_ia_dominadas: JSON.stringify({ [topic.nombre]: [ai.id] })
  });
  context.jugar('repaso_espaciado', 0, 'sistemas_gs');
  const selectedId = vm.runInContext('preguntasJuego[0].id', context);
  assert.equal(selectedId, ai.id);
  const state = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  assert.deepEqual(state.dom, []);
  assert.equal(state.srs[ai.id].streak, 3);

  const correctIndex = vm.runInContext('preguntasJuego[0].opciones.indexOf("Correcta")', context);
  context.clickOpcion(correctIndex);
  context.registrarConfianza('sabia');
  const updated = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  assert.deepEqual(updated.dom, []);
  assert.equal(updated.srs[ai.id].streak, 4);
  assert.deepEqual(JSON.parse(storage.get('mastertest_ia_dominadas'))[topic.nombre], [ai.id]);
});
