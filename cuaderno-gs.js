(function (root) {
  'use strict';
  const KEY = 'universae_gs_cuaderno_errores_v1';
  const HIDDEN_KEY = 'universae_gs_cuaderno_ocultos_v1';
  const REASONS = {
    conceptos: 'Confusión de conceptos', formula: 'Fórmula incorrecta', unidades: 'Unidades',
    lectura: 'Lectura apresurada', otro: 'Otro'
  };
  const parse = (storage, key, fallback) => {
    try { return JSON.parse(storage.getItem(key)) ?? fallback; } catch (_) { return fallback; }
  };
  const hiddenKeys = storage => {
    const keys = parse(storage, HIDDEN_KEY, []);
    return new Set(Array.isArray(keys) ? keys : []);
  };
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

  function locate(config, question) {
    for (const block of config) {
      for (let idx = 0; idx < block.asignaturas.length; idx++) {
        const topic = block.asignaturas[idx];
        if (topic.nombre.startsWith('⭐')) continue;
        const match = (topic.data || []).find(item => String(item.id) === String(question.id)) ||
          ((question._topic === topic.nombre || question.tema === topic.nombre) && question.texto ? question : null);
        if (match && (!question._topic || question._topic === topic.nombre)) {
          return { bid: block.bloque, idx, subject: block.titulo_boton, topic: topic.nombre, question: match };
        }
      }
    }
    return null;
  }

  function read(storage, config) {
    const records = parse(storage, KEY, {});
    const hidden = hiddenKeys(storage);
    const fails = parse(storage, 'mastertest_fails', []);
    const bank = parse(storage, 'academia_banco_fallos', {});
    const aiQuestions = parse(storage, 'mastertest_ia_preguntas', []);
    let changed = false;
    for (const key of hidden) {
      if (records[key]) { delete records[key]; changed = true; }
    }
    for (const id of Array.isArray(fails) ? fails : []) {
      const aiQuestion = Array.isArray(aiQuestions) ? aiQuestions.find(item => String(item.id) === String(id)) : null;
      const found = locate(config, { id }) || (aiQuestion && locate(config, aiQuestion));
      if (!found) continue;
      const key = `${found.bid}:${found.idx}:${id}`;
      if (records[key] || hidden.has(key)) continue;
      records[key] = { key, bid: found.bid, idx: found.idx, subject: found.subject, topic: found.topic,
        questionId: id, question: found.question.texto, selected: '', correct: found.question.correctaTexto,
        explanation: found.question.explicacion || '', reason: '', count: 1, source: 'test anterior', updated: null };
      changed = true;
    }
    for (const entry of Object.values(bank && typeof bank === 'object' && !Array.isArray(bank) ? bank : {})) {
      const question = entry?.pregunta;
      if (!question) continue;
      const found = locate(config, question);
      if (!found) continue;
      const key = `${found.bid}:${found.idx}:${question.id}`;
      if (records[key] || hidden.has(key)) continue;
      records[key] = { key, bid: found.bid, idx: found.idx, subject: found.subject, topic: found.topic,
        questionId: question.id, question: found.question.texto, selected: '', correct: found.question.correctaTexto,
        explanation: found.question.explicacion || '', reason: '', count: Math.max(1, Number(entry.fallos) || 1),
        source: 'zona de fallos', updated: null };
      changed = true;
    }
    if (changed) storage.setItem(KEY, JSON.stringify(records));
    return records;
  }

  function record(storage, config, question, selected, source) {
    const found = locate(config, question);
    if (!found) return null;
    const records = read(storage, config);
    const key = `${found.bid}:${found.idx}:${question.id}`;
    const previous = records[key];
    records[key] = { key, bid: found.bid, idx: found.idx, subject: found.subject, topic: found.topic,
      questionId: question.id, question: question.texto, selected: selected || '', correct: question.correctaTexto,
      explanation: question.explicacion || previous?.explanation || '', reason: previous?.reason || '',
      count: (previous?.count || 0) + 1, source, updated: new Date().toISOString() };
    storage.setItem(KEY, JSON.stringify(records));
    const hidden = hiddenKeys(storage);
    if (hidden.delete(key)) storage.setItem(HIDDEN_KEY, JSON.stringify([...hidden]));
    return records[key];
  }

  function setReason(storage, config, key, reason) {
    if (reason && !REASONS[reason]) return false;
    const records = read(storage, config);
    if (!records[key]) return false;
    records[key].reason = reason;
    storage.setItem(KEY, JSON.stringify(records));
    return true;
  }

  function remove(storage, config, keys) {
    const records = read(storage, config);
    const selected = new Set(Array.isArray(keys) ? keys : [keys]);
    const removed = Object.values(records).filter(item => selected.has(item.key));
    if (!removed.length) return 0;
    const hidden = hiddenKeys(storage);
    for (const item of removed) hidden.add(item.key);
    storage.setItem(HIDDEN_KEY, JSON.stringify([...hidden]));
    for (const item of removed) delete records[item.key];
    storage.setItem(KEY, JSON.stringify(records));
    return removed.length;
  }

  function clearAll(storage, config) {
    return remove(storage, config, Object.keys(read(storage, config)));
  }

  function related(config, storage, bid, idx, reason) {
    const topic = config.find(block => block.bloque === bid)?.asignaturas[idx];
    if (!topic) return [];
    const records = read(storage, config);
    const ranked = (topic.data || []).map(question => ({ question, error: records[`${bid}:${idx}:${question.id}`] }))
      .sort((a, b) => Number(!!b.error && b.error.reason === reason) - Number(!!a.error && a.error.reason === reason)
        || (b.error?.count || 0) - (a.error?.count || 0));
    return ranked.slice(0, 10).map(item => item.question);
  }

  const api = { KEY, HIDDEN_KEY, REASONS, locate, read, record, setReason, remove, clearAll, related };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.CuadernoGS = api;
  if (!root.document) return;

  function render() {
    const host = document.getElementById('pantalla-cuaderno-gs');
    let records = Object.values(read(localStorage, CONFIGURACION_CURSO)).sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
    const historic = parse(localStorage, 'universae_gs_simulacro_history_v1', []);
    host.innerHTML = `<div class="study-head"><h1>Cuaderno de errores</h1><button type="button" id="error-back">Volver</button></div>
      <div class="study-filters"><label>Buscar<input id="error-search" type="search" placeholder="Pregunta o tema"></label>
      <label>Asignatura<select id="error-subject"><option value="">Todas</option>${CONFIGURACION_CURSO.map(block => `<option value="${escape(block.bloque)}">${escape(block.titulo_boton)}</option>`).join('')}</select></label>
      <label>Motivo<select id="error-reason"><option value="">Todos</option>${Object.entries(REASONS).map(([value, label]) => `<option value="${value}">${label}</option>`).join('')}</select></label></div>
      <div class="error-list-head"><strong id="error-count"></strong><button type="button" id="error-clear" class="error-delete">Borrar todo</button></div>
      <div id="error-list" class="study-list"></div>
      ${historic.length ? `<details class="study-legacy"><summary>Simulacros anteriores (${historic.length})</summary><p>Estos intentos solo guardaban resultados por tema; no se pueden recuperar las respuestas individuales.</p><ul>${historic.slice(-10).reverse().map(item => `<li>${escape(item.date)} · ${escape(CONFIGURACION_CURSO.find(block => block.bloque === item.bid)?.titulo_boton || item.bid)} · ${item.wrong || 0} fallos${item.topics?.length ? ` · ${item.topics.filter(topic => topic.wrong).map(topic => `${escape(topic.topic)}: ${topic.wrong}`).join(' · ')}` : ''}</li>`).join('')}</ul></details>` : ''}`;
    const list = host.querySelector('#error-list');
    const update = () => {
      const query = host.querySelector('#error-search').value.toLocaleLowerCase('es');
      const subject = host.querySelector('#error-subject').value;
      const reason = host.querySelector('#error-reason').value;
      const filtered = records.filter(item => (!subject || item.bid === subject) && (!reason || item.reason === reason)
        && `${item.question} ${item.topic}`.toLocaleLowerCase('es').includes(query));
      host.querySelector('#error-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'error' : 'errores'}`;
      host.querySelector('#error-clear').disabled = !records.length;
      list.innerHTML = filtered.length ? filtered.map(item => `<article class="study-item error-entry" data-key="${escape(item.key)}" data-reason="${escape(item.reason || 'pendiente')}">
        <div class="study-meta">${escape(item.subject)} · ${escape(item.topic)}</div>
        <h2>${escape(item.question)}</h2>
        <div class="error-entry-fields"><p class="error-answer-wrong"><strong>Tu respuesta</strong><span>${escape(item.selected || 'No se conservó la respuesta anterior')}</span></p>
        <p class="error-answer-right"><strong>Respuesta correcta</strong><span>${escape(item.correct)}</span></p></div>
        ${item.explanation ? `<p class="error-explanation"><strong>Explicación</strong><span>${escape(item.explanation)}</span></p>` : ''}
        <div class="error-entry-footer"><span class="error-count-badge">${item.count} ${item.count === 1 ? 'fallo' : 'fallos'}</span>
        <label>Motivo del fallo<select class="error-item-reason"><option value="">Sin confirmar</option>${Object.entries(REASONS).map(([value, label]) => `<option value="${value}" ${item.reason === value ? 'selected' : ''}>${label}</option>`).join('')}</select></label></div>
        <div class="study-actions"><button type="button" class="error-practice">Practicar relacionados</button><button type="button" class="error-delete error-delete-one" aria-label="Borrar error: ${escape(item.question)}">Borrar</button></div></article>`).join('') : '<p>No hay fallos con estos filtros.</p>';
      list.querySelectorAll('.study-item').forEach(article => {
        const item = records.find(record => record.key === article.dataset.key);
        article.querySelector('select').onchange = event => { setReason(localStorage, CONFIGURACION_CURSO, item.key, event.target.value); item.reason = event.target.value; article.dataset.reason = event.target.value || 'pendiente'; };
        article.querySelector('.error-practice').onclick = () => jugar('cuaderno', item.idx, item.bid, undefined, item.reason);
        article.querySelector('.error-delete-one').onclick = () => {
          if (!confirm('¿Borrar este error del cuaderno? Seguirá disponible en los demás modos de fallos.')) return;
          remove(localStorage, CONFIGURACION_CURSO, item.key);
          records = records.filter(record => record.key !== item.key);
          update();
        };
      });
      host.querySelector('#error-clear').onclick = () => {
        if (!records.length || !confirm(`¿Borrar los ${records.length} errores del cuaderno, incluidos los ocultos por filtros? El progreso y los demás modos de fallos se conservan.`)) return;
        clearAll(localStorage, CONFIGURACION_CURSO);
        records = [];
        update();
      };
    };
    host.querySelector('#error-back').onclick = () => { filtrarBloque(root.currentBid || CONFIGURACION_CURSO[0].bloque); mostrarPantalla('pantalla-inicio'); };
    host.querySelectorAll('.study-filters input, .study-filters select').forEach(control => control.addEventListener('input', update));
    update();
    mostrarPantalla('pantalla-cuaderno-gs');
  }
  api.open = render;
  root.abrirCuadernoGS = render;
})(typeof window !== 'undefined' ? window : globalThis);
