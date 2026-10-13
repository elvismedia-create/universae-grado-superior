(function (root) {
  'use strict';
  const KEY = 'universae_gs_ubicacion_v1';

  function initialBlock(config, trimester, rawContext) {
    const first = config.find(block => block.trimestre === trimester) || config[0] || null;
    if (!rawContext) return first;
    try {
      const { bid } = JSON.parse(rawContext);
      return config.find(block => block.bloque === bid && block.trimestre === trimester) || first;
    } catch (_) {
      return first;
    }
  }

  function readLocation(config, storage) {
    const fallback = initialBlock(config, 'B1', null);
    if (!fallback) return null;
    let saved;
    try { saved = JSON.parse(storage.getItem(KEY)); } catch (_) { saved = null; }
    const block = config.find(item => item.bloque === saved?.bid && item.trimestre === saved?.trimester) || fallback;
    const idx = Number.isInteger(saved?.idx) && saved.idx >= 0 && saved.idx < block.asignaturas.length ? saved.idx : 0;
    return { trimester: block.trimestre, bid: block.bloque, idx };
  }

  function saveLocation(config, storage, bid, idx = 0) {
    const block = config.find(item => item.bloque === bid);
    if (!block) return false;
    const selected = Number.isInteger(idx) && idx >= 0 && idx < block.asignaturas.length ? idx : 0;
    storage.setItem(KEY, JSON.stringify({ trimester: block.trimestre, bid, idx: selected }));
    return true;
  }

  const api = { KEY, initialBlock, readLocation, saveLocation };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.NavegacionGS = api;
})(typeof window !== 'undefined' ? window : globalThis);
