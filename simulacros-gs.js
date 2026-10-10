(function (root) {
  'use strict';

  const SETTINGS_KEY = 'universae_gs_simulacro_config_v1';
  const HISTORY_KEY = 'universae_gs_simulacro_history_v1';
  const SEEN_KEY = 'universae_gs_simulacro_seen_v1';

  function poolFrom(config, bid, source = 'practica', officialBanks = {}) {
    const block = config.find(item => item.bloque === bid);
    if (!block) return [];
    const byId = new Map();
    if (source === 'oficial') {
      for (const question of officialBanks[bid] || []) {
        if (question.id == null || !Array.isArray(question.opciones) || !question.correctaTexto) continue;
        byId.set(String(question.id), { ...question, _topic: question.tema || 'Test oficial' });
      }
    } else {
      for (const topic of block.asignaturas) {
        if (topic.nombre.startsWith('⭐')) continue;
        for (const question of topic.data || []) {
          if (question.id == null || byId.has(String(question.id))) continue;
          byId.set(String(question.id), { ...question, _topic: topic.nombre });
        }
      }
    }
    return [...byId.values()];
  }

  function selectQuestions(pool, count, seen = [], random = Math.random) {
    if (!Number.isInteger(count) || count < 1 || count > pool.length) return [];
    const seenIds = new Set(seen.map(String));
    const mix = items => {
      const values = [...items];
      for (let index = values.length - 1; index > 0; index--) {
        const swap = Math.floor(random() * (index + 1));
        [values[index], values[swap]] = [values[swap], values[index]];
      }
      return values;
    };
    return [...mix(pool.filter(item => !seenIds.has(String(item.id)))),
      ...mix(pool.filter(item => seenIds.has(String(item.id))))].slice(0, count);
  }

  function evaluate(questions, answers, penalty = 0) {
    if (!questions.length || !Number.isFinite(penalty) || penalty < 0 || penalty > 1) return null;
    const topics = new Map();
    let correct = 0;
    let wrong = 0;
    let blank = 0;
    questions.forEach((question, index) => {
      const choice = answers[index];
      const topic = question._topic || question.tema || 'Sin tema';
      const row = topics.get(topic) || { topic, total: 0, correct: 0, wrong: 0, blank: 0 };
      row.total++;
      if (choice === undefined || choice === null) { blank++; row.blank++; }
      else if (question.opciones[choice] === question.correctaTexto) { correct++; row.correct++; }
      else { wrong++; row.wrong++; }
      topics.set(topic, row);
    });
    const raw = 10 * (correct - penalty * wrong) / questions.length;
    const weakTopics = [...topics.values()].filter(item => item.wrong || item.blank)
      .sort((a, b) => (b.wrong + b.blank) / b.total - (a.wrong + a.blank) / a.total || b.wrong - a.wrong);
    return { total: questions.length, correct, wrong, blank, score: Math.max(0, Math.min(10, raw)), weakTopics, topics: [...topics.values()] };
  }

  const api = { SETTINGS_KEY, HISTORY_KEY, SEEN_KEY, poolFrom, selectQuestions, evaluate };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.SimulacrosGS = api;
  if (!root.document) return;

  const read = (key, fallback) => {
    try { return JSON.parse(root.localStorage.getItem(key)) || fallback; } catch (_) { return fallback; }
  };
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const host = () => root.document.getElementById('pantalla-simulacro-gs');
  const blockFor = bid => CONFIGURACION_CURSO.find(item => item.bloque === bid);
  const officialBanks = () => root.GS_TESTS_OFICIALES || {};
  let bidActual = null;
  let session = null;
  let timer = null;

  function stopTimer() {
    if (timer) root.clearInterval(timer);
    timer = null;
  }

  function renderSetup() {
    stopTimer();
    session = null;
    const block = blockFor(bidActual);
    if (!block) return;
    const settings = read(SETTINGS_KEY, {})[bidActual] || {};
    const practice = poolFrom(CONFIGURACION_CURSO, bidActual);
    const official = poolFrom(CONFIGURACION_CURSO, bidActual, 'oficial', officialBanks());
    const history = read(HISTORY_KEY, []).filter(item => item.bid === bidActual).slice(-5).reverse();
    host().innerHTML = `<div class="sgs-head"><div><h1>Simulacro configurable</h1><p>${escape(block.titulo_boton)}</p></div><button type="button" id="sgs-back">Volver</button></div>
      <div class="sgs-notice">Formato real pendiente de confirmar. Las ${practice.length} preguntas de práctica proceden de los apuntes; los tests oficiales se cargarán aparte.</div>
      <form id="sgs-settings"><label>Banco de preguntas<select name="source"><option value="practica">Práctica de apuntes</option>${official.length ? `<option value="oficial">Tests oficiales (${official.length})</option>` : ''}</select></label>
        <label>Preguntas<input name="count" type="number" min="1" max="${Math.max(practice.length, official.length)}" value="${settings.count || Math.min(20, practice.length)}" required></label>
        <label>Tiempo (min)<input name="minutes" type="number" min="1" max="240" value="${settings.minutes || 30}" required></label>
        <label>Penalización por fallo<input name="penalty" type="number" min="0" max="1" step="0.01" value="${settings.penalty ?? 0}" required></label>
        <p class="sgs-form-note">Una penalización de 0,33 descuenta 0,33 aciertos por cada error. Las preguntas sin contestar no restan.</p>
        <div id="sgs-error" role="alert"></div><button type="submit">Empezar simulacro</button></form>
      ${history.length ? `<section class="sgs-history"><h2>Últimos intentos</h2><ul>${history.map(item => `<li><span>${escape(item.date)} · ${escape(item.source === 'oficial' ? 'Oficial' : 'Práctica')} · ${item.total} preguntas</span><strong>${item.score.toFixed(2)} / 10</strong></li>`).join('')}</ul></section>` : ''}`;
    const form = host().querySelector('#sgs-settings');
    form.elements.source.value = settings.source === 'oficial' && official.length ? 'oficial' : 'practica';
    host().querySelector('#sgs-back').addEventListener('click', () => { filtrarBloque(bidActual); mostrarPantalla('pantalla-inicio'); });
    form.elements.source.addEventListener('change', () => {
      const size = form.elements.source.value === 'oficial' ? official.length : practice.length;
      form.elements.count.max = size;
      if (Number(form.elements.count.value) > size) form.elements.count.value = size;
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const values = { source: form.elements.source.value, count: Number(form.elements.count.value),
        minutes: Number(form.elements.minutes.value), penalty: Number(form.elements.penalty.value) };
      const pool = values.source === 'oficial' ? official : practice;
      if (!Number.isInteger(values.count) || values.count < 1 || values.count > pool.length ||
          !Number.isInteger(values.minutes) || values.minutes < 1 || values.minutes > 240 ||
          !Number.isFinite(values.penalty) || values.penalty < 0 || values.penalty > 1) {
        host().querySelector('#sgs-error').textContent = `Revisa los valores. Hay ${pool.length} preguntas en ese banco.`;
        return;
      }
      const saved = read(SETTINGS_KEY, {});
      saved[bidActual] = values;
      root.localStorage.setItem(SETTINGS_KEY, JSON.stringify(saved));
      start(values, pool);
    });
  }

  function start(settings, pool) {
    const seenAll = read(SEEN_KEY, {});
    const key = `${bidActual}:${settings.source}`;
    const seen = seenAll[key] || [];
    const questions = selectQuestions(pool, settings.count, seen).map(item => ({ ...item, opciones: selectQuestions(item.opciones.map((text, id) => ({ id, text })), item.opciones.length).map(option => option.text) }));
    session = { bid: bidActual, settings, questions, answers: {}, current: 0, deadline: Date.now() + settings.minutes * 60000,
      repeated: questions.filter(item => seen.map(String).includes(String(item.id))).length };
    renderQuestion();
    timer = root.setInterval(tick, 1000);
  }

  function tick() {
    if (!session) return;
    const left = Math.max(0, Math.ceil((session.deadline - Date.now()) / 1000));
    const clock = host().querySelector('#sgs-clock');
    if (clock) clock.textContent = `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;
    if (left === 0) finish(true);
  }

  function renderQuestion() {
    const { questions, answers, current, settings } = session;
    const question = questions[current];
    host().innerHTML = `<div class="sgs-head"><div><h1>${escape(blockFor(session.bid).titulo_boton)}</h1><p>${settings.source === 'oficial' ? 'Test oficial' : 'Práctica de apuntes'} · ${questions.length} preguntas · ${settings.penalty ? `−${settings.penalty} por fallo` : 'Sin penalización'}</p></div><span id="sgs-clock" class="sgs-clock" role="timer"></span></div>
      <div class="sgs-progress"><span>Pregunta ${current + 1} de ${questions.length}</span><span>${Object.keys(answers).length} contestadas</span></div>
      <div class="sgs-question"><small>${escape(question._topic)}</small><h2>${escape(question.texto)}</h2><div class="sgs-options">${question.opciones.map((option, index) => `<label><input type="radio" name="answer" value="${index}" ${answers[current] === index ? 'checked' : ''}><span>${escape(option)}</span></label>`).join('')}</div></div>
      <div class="sgs-controls"><button type="button" id="sgs-prev" ${current === 0 ? 'disabled' : ''}>Anterior</button><button type="button" id="sgs-next" ${current === questions.length - 1 ? 'disabled' : ''}>Siguiente</button><button type="button" id="sgs-finish">Terminar</button></div><div id="sgs-warning" role="alert"></div>`;
    host().querySelectorAll('[name="answer"]').forEach(input => input.addEventListener('change', () => {
      session.answers[current] = Number(input.value);
      host().querySelector('.sgs-progress span:last-child').textContent = `${Object.keys(session.answers).length} contestadas`;
    }));
    host().querySelector('#sgs-prev').addEventListener('click', () => { session.current--; renderQuestion(); });
    host().querySelector('#sgs-next').addEventListener('click', () => { session.current++; renderQuestion(); });
    host().querySelector('#sgs-finish').addEventListener('click', () => finish(false));
    tick();
  }

  function finish(forced) {
    if (!session) return;
    const { questions, answers, settings } = session;
    const blank = questions.length - Object.keys(answers).length;
    if (!forced && blank) {
      host().querySelector('#sgs-warning').innerHTML = `<span>${blank === 1 ? 'Queda 1 pregunta' : `Quedan ${blank} preguntas`} sin contestar.</span><button type="button" id="sgs-force">Terminar igualmente</button>`;
      host().querySelector('#sgs-force').addEventListener('click', () => finish(true));
      return;
    }
    stopTimer();
    const result = evaluate(questions, answers, settings.penalty);
    const seenAll = read(SEEN_KEY, {});
    const key = `${session.bid}:${settings.source}`;
    seenAll[key] = [...new Set([...(seenAll[key] || []).map(String), ...questions.map(item => String(item.id))])];
    root.localStorage.setItem(SEEN_KEY, JSON.stringify(seenAll));
    const history = read(HISTORY_KEY, []);
    history.push({ bid: session.bid, source: settings.source, date: new Date().toLocaleDateString('es-ES'),
      total: result.total, correct: result.correct, wrong: result.wrong, blank: result.blank, score: result.score,
      topics: result.topics });
    if (history.length > 30) history.splice(0, history.length - 30);
    root.localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    renderResult(result);
  }

  function renderResult(result) {
    const { questions, answers, settings } = session;
    host().innerHTML = `<div class="sgs-head"><div><h1>Resultado del simulacro</h1><p>${escape(blockFor(session.bid).titulo_boton)} · ${settings.source === 'oficial' ? 'Test oficial' : 'Práctica de apuntes'}</p></div><strong class="sgs-score">${result.score.toFixed(2)} / 10</strong></div>
      <div class="sgs-summary"><span>${result.correct} ${result.correct === 1 ? 'acierto' : 'aciertos'}</span><span>${result.wrong} ${result.wrong === 1 ? 'fallo' : 'fallos'}</span><span>${result.blank} en blanco</span><span>Penalización ${settings.penalty}</span></div>
      ${session.repeated ? `<p class="sgs-repeat">${session.repeated} preguntas ya vistas; el banco de esta asignatura empieza a agotarse.</p>` : ''}
      <section class="sgs-diagnosis"><h2>Temas que conviene reforzar</h2>${result.weakTopics.length ? `<ul>${result.weakTopics.slice(0, 5).map(item => `<li><strong>${escape(item.topic)}</strong><span>${item.correct}/${item.total} aciertos · ${item.wrong} ${item.wrong === 1 ? 'fallo' : 'fallos'}</span></li>`).join('')}</ul>` : '<p>No hay temas con fallos en este intento.</p>'}</section>
      <div class="sgs-controls"><button type="button" id="sgs-again">Nuevo simulacro</button><button type="button" id="sgs-home">Volver a asignatura</button></div>
      <section class="sgs-review"><h2>Revisión de respuestas</h2>${questions.map((question, index) => {
        const choice = answers[index];
        const correct = choice !== undefined && question.opciones[choice] === question.correctaTexto;
        return `<div><strong>${index + 1}. ${escape(question.texto)}</strong><p>${choice === undefined ? 'Sin contestar' : `Tu respuesta: ${escape(question.opciones[choice])}`} ${correct ? '✓' : '✕'}</p>${correct ? '' : `<p>Correcta: ${escape(question.correctaTexto)}</p>`}</div>`;
      }).join('')}</section>`;
    host().querySelector('#sgs-again').addEventListener('click', renderSetup);
    host().querySelector('#sgs-home').addEventListener('click', () => { filtrarBloque(bidActual); mostrarPantalla('pantalla-inicio'); });
  }

  api.open = bid => {
    bidActual = blockFor(bid) ? bid : CONFIGURACION_CURSO[0].bloque;
    renderSetup();
    mostrarPantalla('pantalla-simulacro-gs');
  };
  root.abrirSimulacroGS = api.open;
})(typeof window !== 'undefined' ? window : globalThis);
