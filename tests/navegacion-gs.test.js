const test = require('node:test');
const assert = require('node:assert/strict');
const { initialBlock, readLocation, saveLocation, KEY } = require('../navegacion-gs.js');

const blocks = [
  { bloque: 'sistemas_gs', trimestre: 'B1', asignaturas: [{}, {}] },
  { bloque: 'gestion_gs', trimestre: 'B1', asignaturas: [{}, {}, {}] },
  { bloque: 'futuro_gs', trimestre: 'B2', asignaturas: [{}] }
];

test('restaura un bloque guardado solo si pertenece al trimestre activo', () => {
  assert.equal(initialBlock(blocks, 'B1', '{"bid":"gestion_gs"}').bloque, 'gestion_gs');
  assert.equal(initialBlock(blocks, 'B1', '{"bid":"futuro_gs"}').bloque, 'sistemas_gs');
  assert.equal(initialBlock(blocks, 'B2', '{"bid":"sistemas_gs"}').bloque, 'futuro_gs');
});

test('usa el primer bloque del trimestre ante un contexto antiguo o inválido', () => {
  for (const context of [null, '{', '{}', '{"bid":"desconocido"}']) {
    assert.equal(initialBlock(blocks, 'B1', context).bloque, 'sistemas_gs');
  }
  assert.equal(initialBlock([], 'B1', null), null);
});

test('recuerda trimestre, pestaña y asignatura sin guardar un test que se reinicie', () => {
  const map = new Map();
  const storage = { getItem: key => map.get(key) || null, setItem: (key, value) => map.set(key, value) };
  assert.equal(saveLocation(blocks, storage, 'gestion_gs', 2), true);
  assert.deepEqual(readLocation(blocks, storage), { trimester: 'B1', bid: 'gestion_gs', idx: 2 });
  assert.deepEqual(JSON.parse(map.get(KEY)), { trimester: 'B1', bid: 'gestion_gs', idx: 2 });
  assert.equal(saveLocation(blocks, storage, 'futuro_gs', 0), true);
  assert.deepEqual(readLocation(blocks, storage), { trimester: 'B2', bid: 'futuro_gs', idx: 0 });
  assert.equal(saveLocation(blocks, storage, 'desconocido', 0), false);
  assert.deepEqual(readLocation(blocks, storage), { trimester: 'B2', bid: 'futuro_gs', idx: 0 });
});

test('descarta ubicaciones obsoletas sin recuperar otro trimestre por un contexto de test', () => {
  const storage = { getItem: () => '{"trimester":"B2","bid":"gestion_gs","idx":99}' };
  assert.deepEqual(readLocation(blocks, storage), { trimester: 'B1', bid: 'sistemas_gs', idx: 0 });
});
