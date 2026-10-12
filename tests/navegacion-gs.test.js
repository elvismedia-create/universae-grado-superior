const test = require('node:test');
const assert = require('node:assert/strict');
const { initialBlock } = require('../navegacion-gs.js');

const blocks = [
  { bloque: 'sistemas_gs', trimestre: 'B1' },
  { bloque: 'gestion_gs', trimestre: 'B1' },
  { bloque: 'futuro_gs', trimestre: 'B2' }
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
