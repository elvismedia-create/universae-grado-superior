const test = require('node:test');
const assert = require('node:assert/strict');
require('../repaso-espaciado.js');
const plan = require('../plan-diario.js');

const q = id => ({ id });
const config = [
  { bloque: 'a', titulo_boton: 'Circuitos', asignaturas: [
    { nombre: '⭐ Simulacro', data: [q(99)] },
    { nombre: 'U1', data: [q(1), q(2)] },
    { nombre: 'U2', data: [q(3), q(4)] }
  ] },
  { bloque: 'b', titulo_boton: 'Documentacion', asignaturas: [
    { nombre: 'U3', data: [q(5), q(6)] }
  ] }
];

test('valida fecha exacta, minutos y dias disponibles', () => {
  const settings = { examDate: '2026-10-12', minutes: 45, weekdays: [1, 4, 5] };
  assert.equal(plan.validate(settings, '2026-10-08'), null);
  assert.equal(plan.studyDays(settings, '2026-10-08'), 2);
  assert.match(plan.validate({ ...settings, examDate: '2026-10-08' }, '2026-10-08'), /futura/);
  assert.match(plan.validate({ ...settings, weekdays: [] }, '2026-10-08'), /día/);
  assert.match(plan.validate({ ...settings, minutes: 5 }, '2026-10-08'), /minutos/);
});

test('el resumen excluye simulacros y usa repasos, fallos y talleres reales', () => {
  const db = { U1: { dom: [1], srs: { 1: { streak: 3, mastered: true, dueDate: '2026-10-08' } } } };
  const cases = [{ id: 'trifasica', bid: 'a', title: 'Trifasica' }, { id: 'simbolos', bid: 'b', title: 'Simbolos' }];
  const data = plan.summarize(config, db, [2, 99], cases, { simbolos: 3 }, '2026-10-08');
  assert.equal(data.topics.length, 3);
  assert.deepEqual([data.topics[0].due, data.topics[0].failed, data.topics[0].unseen], [1, 1, 1]);
  assert.deepEqual(data.practical.map(item => item.caseId), ['trifasica']);
  assert.equal(data.practical[0].caseId, 'trifasica');
});

test('prioriza repaso, contenido nuevo y practica sin exceder tiempo', () => {
  const data = plan.summarize(config, { U1: { dom: [1], srs: { 1: { dueDate: '2026-10-08', mastered: true } } } },
    [2], [{ id: 'trifasica', bid: 'a', title: 'Trifasica' }], {}, '2026-10-08');
  const settings = { examDate: '2027-05-15', minutes: 45, weekdays: [0, 1, 2, 3, 4, 5, 6] };
  const today = plan.buildPlan(settings, data, '2026-10-08');
  assert.deepEqual(today.tasks.map(item => item.kind), ['repaso', 'nuevo', 'practica']);
  assert.equal(today.tasks.reduce((total, item) => total + item.minutes, 0), 45);
  assert.equal(today.attention[0].subject, 'Circuitos');
});

test('los dias libres no generan sesiones', () => {
  const settings = { examDate: '2026-10-12', minutes: 30, weekdays: [1] };
  const result = plan.buildPlan(settings, { topics: [] }, '2026-10-08');
  assert.equal(result.restDay, true);
  assert.deepEqual(result.tasks, []);
});
