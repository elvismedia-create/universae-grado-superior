(function (root) {
  'use strict';
  const KEY = 'mastertest_ia_preguntas';
  const clean = value => typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
  const identity = value => clean(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');

  function read(storage) {
    try {
      const value = JSON.parse(storage.getItem(KEY) || '[]');
      return Array.isArray(value) ? value : [];
    } catch (_) { return []; }
  }

  function list(storage, tema = null, onlyHighlights = false) {
    return read(storage).filter(question => (!tema || question.tema === tema) &&
      (!onlyHighlights || Boolean(question.fuente?.fragmento)));
  }

  function validateDraft(proposal) {
    const texto = clean(proposal?.texto);
    const correctaTexto = clean(proposal?.correctaTexto);
    return texto.length >= 12 && texto.length <= 500 && correctaTexto.length >= 1 && correctaTexto.length <= 300
      ? { texto, correctaTexto } : null;
  }

  function validate(proposal) {
    const draft = validateDraft(proposal);
    if (!draft) return null;
    const { texto, correctaTexto } = draft;
    const incorrectas = Array.isArray(proposal?.incorrectas)
      ? proposal.incorrectas.map(clean)
      : Array.isArray(proposal?.opciones) ? proposal.opciones.filter(option => identity(option) !== identity(correctaTexto)).map(clean) : [];
    const opciones = [correctaTexto, ...incorrectas];
    if (opciones.length !== 4 || opciones.some(option => !option || option.length > 300) ||
      new Set(opciones.map(identity)).size !== 4) return null;
    return { texto, correctaTexto, opciones, explicacion: clean(proposal.explicacion).slice(0, 700) };
  }

  function confirm(storage, context, proposal, baseQuestions = []) {
    const question = validate(proposal);
    if (!question || !context || !clean(context.tema) || !clean(context.fragmento) ||
      !clean(context.bid) || !Number.isInteger(context.idx) || !Number.isInteger(context.pagina) || context.pagina < 1) {
      return { ok: false, error: 'Completa el enunciado, una respuesta correcta y tres incorrectas distintas.' };
    }
    const saved = read(storage);
    const sameTopic = [...baseQuestions, ...saved.filter(item => item.tema === context.tema)];
    if (sameTopic.some(item => identity(item.texto) === identity(question.texto))) {
      return { ok: false, error: 'Esta pregunta ya existe en el tema.' };
    }
    const ids = new Set(saved.map(item => String(item.id)));
    let id;
    do { id = `gs-highlight-${root.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`}`; }
    while (ids.has(id));
    const entry = { ...question, id, tema: context.tema, origen: 'ia', generada_ia: true,
      fecha_generacion: new Date().toISOString(), fuente: {
        bid: context.bid, idx: context.idx, pagina: context.pagina,
        fragmento: clean(context.fragmento).slice(0, 1800), marcaId: context.marcaId || ''
      } };
    storage.setItem(KEY, JSON.stringify([...saved, entry]));
    return { ok: true, question: entry };
  }

  const api = { KEY, read, list, validateDraft, validate, confirm, identity };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.PreguntasSubrayadoGS = api;
})(typeof window !== 'undefined' ? window : globalThis);
