(function (root) {
  'use strict';

  function confirmAndClear(storage, ask, reload) {
    const answer = ask('Se borrarán el progreso, las anotaciones y los ajustes locales de Grado Superior en este dispositivo. Para confirmar, escribe exactamente BORRAR:');
    if (answer !== 'BORRAR') return false;
    storage.clear();
    reload();
    return true;
  }

  const api = { confirmAndClear };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.BorradoGS = api;
})(typeof window !== 'undefined' ? window : globalThis);
