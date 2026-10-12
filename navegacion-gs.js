(function (root) {
  'use strict';

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

  const api = { initialBlock };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.NavegacionGS = api;
})(typeof window !== 'undefined' ? window : globalThis);
