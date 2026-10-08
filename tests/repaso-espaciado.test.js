const test = require('node:test');
const assert = require('node:assert/strict');
const srs = require('../repaso-espaciado.js');

test('requiere tres repasos seguros en fechas separadas', () => {
  const first = srs.review(null, true, 'sabia', '2026-10-08');
  assert.deepEqual([first.streak, first.dueDate, first.mastered], [1, '2026-10-09', false]);

  const sameDay = srs.review(first, true, 'sabia', '2026-10-08');
  assert.deepEqual([sameDay.streak, sameDay.dueDate], [1, '2026-10-09']);

  const second = srs.review(sameDay, true, 'sabia', '2026-10-09');
  assert.deepEqual([second.streak, second.dueDate, second.mastered], [2, '2026-10-12', false]);

  const early = srs.review(second, true, 'sabia', '2026-10-10');
  assert.deepEqual([early.streak, early.dueDate], [2, '2026-10-12']);

  const third = srs.review(early, true, 'sabia', '2026-10-12');
  assert.deepEqual([third.streak, third.dueDate, third.mastered], [3, '2026-10-19', true]);
});

test('dudas, descarte y fallos no consolidan el dominio', () => {
  const mastered = srs.review({ streak: 2, dueDate: '2026-10-08' }, true, 'sabia', '2026-10-08');
  const doubt = srs.review(mastered, true, 'duda', '2026-10-19');
  assert.deepEqual([doubt.streak, doubt.dueDate, doubt.mastered], [1, '2026-10-20', false]);

  const guess = srs.review(doubt, true, 'descarte', '2026-10-20');
  assert.deepEqual([guess.streak, guess.confidence, guess.mastered], [0, 'descarte', false]);

  const wrong = srs.review(mastered, false, 'sabia', '2026-10-19');
  assert.deepEqual([wrong.streak, wrong.confidence, wrong.mastered], [0, 'fallo', false]);
});

test('preserva preguntas antiguas dominadas y las cita para revisar', () => {
  const state = { active: [], dom: [41], master_index: 1 };
  assert.equal(srs.dueQuestions(state, [{ id: 41 }, { id: 42 }], '2026-10-08').length, 1);
  srs.ensureState(state, '2026-10-08');
  assert.equal(state.srs[41].streak, 3);
  assert.equal(state.srs[41].dueDate, '2026-10-08');
  assert.equal(srs.dueQuestions(state, [{ id: 41 }, { id: 42 }], '2026-10-08').length, 1);
  assert.equal(srs.dueQuestions(state, [{ id: 41 }], '2026-10-07').length, 0);
});

test('suma dias de calendario local incluso en cambio de hora', () => {
  assert.equal(srs.addDays('2026-03-28', 1), '2026-03-29');
  assert.equal(srs.addDays('2026-03-29', 1), '2026-03-30');
});
