const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const srs = require('../repaso-espaciado.js');
const notebook = require('../cuaderno-gs.js');
const navigation = require('../navegacion-gs.js');

const question = {
  id: 410101,
  texto: 'Pregunta de prueba',
  opciones: ['Correcta', 'Incorrecta'],
  correctaTexto: 'Correcta',
  explicacion: 'Explicación'
};
const topic = { nombre: 'U1: Conceptos básicos', data: [question] };
const config = [{ bloque: 'sistemas_gs', trimestre: 'B1', titulo_boton: 'Sistemas y circuitos', asignaturas: [topic] }];

function harness(initial = {}, course = config) {
  const storage = new Map(Object.entries(initial));
  const elements = new Map();
  const element = id => {
    if (!elements.has(id)) elements.set(id, { innerHTML: '', classList: { add() {}, remove() {} } });
    return elements.get(id);
  };
  const context = vm.createContext({
    RepasoEspaciado: srs,
    CuadernoGS: notebook,
    NavegacionGS: navigation,
    CONFIGURACION_CURSO: course,
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, String(value)),
      removeItem: key => storage.delete(key)
    },
    document: { querySelectorAll: () => [], getElementById: element },
    window: { AudioContext: class {}, scrollTo() {} },
    location: { reload() {} },
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

test('el modo rápido llega a dominio con el segundo repaso seguro y conserva la ubicación al salir', () => {
  const prior = { streak: 1, dueDate: '2026-10-01', lastReviewDate: '2026-09-30', mastered: false };
  const initial = {
    [srs.MODE_KEY]: 'rapido',
    mastertest_db: JSON.stringify({ [topic.nombre]: { active: [question.id], master_index: 1, stats: {}, dom: [], srs: { [question.id]: prior } } })
  };
  const { context, storage } = harness(initial);
  context.jugar('carrera', 0, 'sistemas_gs');
  context.clickOpcion(vm.runInContext('preguntasJuego[0].opciones.indexOf("Correcta")', context));
  context.registrarConfianza('sabia');
  const state = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  assert.equal(state.srs[question.id].mastered, true);
  assert.deepEqual(state.dom, [question.id]);
  context.volverAlMenu();
  assert.deepEqual(JSON.parse(storage.get(navigation.KEY)), { trimester: 'B1', bid: 'sistemas_gs', idx: 0 });
  assert.equal(storage.has('mastertest_lastcontext'), false);
});

test('salir de un test guarda solo respuestas incorrectas y omite preguntas sin responder', () => {
  const second = { ...question, id: 410102, texto: 'Pregunta correcta' };
  const third = { ...question, id: 410103, texto: 'Pregunta sin responder' };
  const threeQuestions = [{ ...config[0], asignaturas: [{ ...topic, data: [question, second, third] }] }];
  const { context, storage, elements } = harness({}, threeQuestions);
  context.jugar('carrera', 0, 'sistemas_gs');
  context.clickOpcion(vm.runInContext('preguntasJuego[0].opciones.indexOf("Incorrecta")', context));
  context.siguiente();
  context.clickOpcion(vm.runInContext('preguntasJuego[1].opciones.indexOf("Correcta")', context));
  context.salir();
  const saved = notebook.read(context.localStorage, threeQuestions);
  assert.deepEqual(Object.keys(saved), ['sistemas_gs:0:410101']);
  assert.equal(saved['sistemas_gs:0:410101'].selected, 'Incorrecta');
  assert.deepEqual(JSON.parse(storage.get('mastertest_fails')), [410101]);
  const state = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  assert.ok(state.srs[question.id]);
  assert.ok(state.srs[second.id]);
  assert.equal(state.srs[third.id], undefined);
  assert.ok(elements.get('pantalla-resultados').innerHTML.includes('Resultado'));
  context.finalizar();
  assert.equal(notebook.read(context.localStorage, threeQuestions)['sistemas_gs:0:410101'].count, 1);
});

test('avanza sin valorar un acierto y lo registra como duda, también al finalizar', () => {
  const second = { ...question, id: 410102, texto: 'Segunda pregunta' };
  const twoQuestions = [{ ...config[0], asignaturas: [{ ...topic, data: [question, second] }] }];
  const { context, storage, elements } = harness({}, twoQuestions);
  context.jugar('carrera', 0, 'sistemas_gs');
  context.clickOpcion(vm.runInContext('preguntasJuego[0].opciones.indexOf("Correcta")', context));
  const firstHtml = elements.get('pantalla-test').innerHTML;
  for (const [label, icon] of [['Lo sabía', '🧠'], ['Tenía dudas', '🤔'], ['Por descarte', '✂️']]) {
    assert.ok(firstHtml.includes(`aria-label="${label}" title="${label}"`));
    assert.ok(firstHtml.includes(`>${icon}</button>`));
  }
  context.siguiente();
  assert.equal(vm.runInContext('confianzaUsuario[0]', context), 'duda');
  assert.equal(vm.runInContext('indice', context), 1);
  context.clickOpcion(vm.runInContext('preguntasJuego[1].opciones.indexOf("Correcta")', context));
  context.siguiente();
  const state = JSON.parse(storage.get('mastertest_db'))[topic.nombre];
  for (const item of [question, second]) {
    assert.equal(state.srs[item.id].confidence, 'duda');
    assert.equal(state.srs[item.id].mastered, false);
  }
  assert.deepEqual(state.dom, []);
  assert.ok(elements.get('pantalla-resultados').innerHTML.includes('Tenía dudas'));
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
  const entry = notebook.read({ getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) }, config)['sistemas_gs:0:410101'];
  assert.equal(entry.selected, 'Incorrecta');
  assert.equal(entry.correct, 'Correcta');
  assert.equal(entry.count, 1);
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

test('la sesion de fallos del plan solo usa errores del tema', () => {
  const { context } = harness({ mastertest_fails: JSON.stringify([question.id, 123456]) });
  context.jugar('plan_fallos', 0, 'sistemas_gs');
  assert.equal(vm.runInContext('preguntasJuego.length', context), 1);
  assert.equal(vm.runInContext('preguntasJuego[0].id', context), question.id);
});

test('la sesion nueva del plan excluye preguntas ya trabajadas', () => {
  const next = { ...question, id: 410102, texto: 'Pregunta nueva' };
  const course = [{ ...config[0], asignaturas: [{ ...topic, data: [question, next] }] }];
  const old = { [topic.nombre]: { active: [question.id], dom: [], master_index: 1, stats: {}, srs: {
    [question.id]: { streak: 1, mastered: false, dueDate: srs.dayKey() }
  } } };
  const { context } = harness({ mastertest_db: JSON.stringify(old) }, course);
  context.jugar('plan_nuevo', 0, 'sistemas_gs');
  assert.equal(vm.runInContext('preguntasJuego.length', context), 1);
  assert.equal(vm.runInContext('preguntasJuego[0].id', context), next.id);
});
