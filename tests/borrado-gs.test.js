const test = require('node:test');
const assert = require('node:assert/strict');
const { confirmAndClear } = require('../borrado-gs.js');

function setup() {
  const data = new Map([['universae_gs_ubicacion_v1', 'guardada'], ['universae_pdf_annotations:documentacion_tecnica_gs:8', 'marca']]);
  let reloads = 0;
  return {
    data,
    storage: { clear: () => data.clear() },
    reload: () => { reloads++; },
    reloads: () => reloads
  };
}

test('cancelar o escribir otra cosa conserva todos los datos y no recarga', () => {
  for (const answer of [null, '', 'borrar', 'BORRAR ', 'BORRADO']) {
    const state = setup();
    assert.equal(confirmAndClear(state.storage, () => answer, state.reload), false);
    assert.equal(state.data.size, 2);
    assert.equal(state.reloads(), 0);
  }
});

test('solo BORRAR exacto limpia el almacenamiento y recarga', () => {
  const state = setup();
  assert.equal(confirmAndClear(state.storage, message => {
    assert.match(message, /Grado Superior/);
    assert.match(message, /BORRAR/);
    return 'BORRAR';
  }, state.reload), true);
  assert.equal(state.data.size, 0);
  assert.equal(state.reloads(), 1);
});
