(function () {
  const CACHE_KEY = 'universae_gs_tutor_v1';
  const CORPUS_VERSION = 'b73e9d89522438e5';
  const MODES = { explicar: 'Explicación', sencillo: 'Más sencillo', pista: 'Una pista', pasos: 'Paso a paso', comprobar: 'Comprobar comprensión' };
  let active = null;

  function readCache() {
    try {
      const data = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]');
      return Array.isArray(data) ? data.filter(r => r && r.version === CORPUS_VERSION && Array.isArray(r.messages)) : [];
    } catch { return []; }
  }

  function persist(session) {
    const records = readCache().filter(r => r.id !== session.id);
    records.unshift({ id: session.id, version: CORPUS_VERSION, bid: session.bid, idx: session.idx,
      exercise: session.exercise, messages: session.messages.slice(-24), title: session.messages.find(m => m.role === 'user')?.content || session.topic,
      updated: Date.now() });
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(records.slice(0, 60))); return true; }
    catch { return false; }
  }

  function node(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text != null) el.textContent = text;
    return el;
  }

  function status(session, text, error = false) {
    session.status.textContent = text;
    session.status.dataset.error = String(error);
  }

  function render(session) {
    session.log.replaceChildren();
    for (const message of session.messages) {
      const article = node('article', 'tutor-message');
      article.dataset.role = message.role;
      article.append(node('h3', '', message.role === 'user' ? 'Tú' : 'Tutor · ' + (message.result?.encontrado ? 'Referencias en tus apuntes' : 'Consulta de apuntes')));
      // Plain text prevents both student input and model output from injecting markup.
      article.append(node('p', '', message.content));
      if (message.result?.fuentes?.length) {
        const sources = node('div', 'tutor-sources');
        for (const source of message.result.fuentes) {
          if (source.bid !== session.bid || source.idx !== session.idx || !Number.isInteger(source.pagina) || source.pagina < 1) continue;
          const block = node('div', 'tutor-source');
          const button = node('button', '', `[${source.id}] ${source.tema} · Página ${source.pagina} del PDF`);
          button.type = 'button';
          button.addEventListener('click', () => abrirPdfTema(source.bid, source.idx, source.pagina, { projectOnly: true }));
          block.append(button, node('blockquote', '', source.cita));
          sources.append(block);
        }
        article.append(sources);
      }
      if (message.result?.comprobacion) article.append(node('p', 'tutor-check', message.result.comprobacion));
      session.log.append(article);
    }
    session.log.scrollTop = session.log.scrollHeight;
  }

  function refreshSaved(session) {
    session.saved.replaceChildren(new Option('Consultas guardadas', ''));
    for (const record of readCache().filter(r => r.bid === session.bid && r.idx === session.idx)) {
      session.saved.add(new Option(record.title.slice(0, 95), record.id));
    }
  }

  async function send(session) {
    if (session.busy) return;
    const pregunta = session.input.value.trim();
    if (pregunta.length < 3) { status(session, 'Escribe una consulta de al menos tres caracteres.', true); return; }
    const historial = session.messages.filter(m => !m.failed).slice(-6).map(m => ({ role: m.role, content: m.content.slice(0, 2200) }));
    const payload = { bid: session.bid, idx: session.idx, pregunta, modo: session.mode.value, historial, ejercicio: session.exercise };
    // Reuse the full request, including context and mode, rather than a truncated question.
    const cacheId = JSON.stringify(payload);
    const cached = readCache().flatMap(r => r.messages).find(m => m.request === cacheId && m.result?.success);
    if (cached) {
      session.messages.push({ role: 'user', content: pregunta }, { ...cached });
      session.input.value = '';
      const saved = persist(session);
      render(session); refreshSaved(session);
      status(session, saved ? 'Respuesta guardada · sin nueva consulta a la IA' : 'Respuesta recuperada; no se pudo guardar la conversación.', !saved);
      return;
    }
    if (!navigator.onLine) { status(session, 'Sin conexión. Las consultas guardadas siguen disponibles.', true); return; }
    session.busy = true;
    session.abort = new AbortController();
    session.send.disabled = true;
    session.saved.disabled = true;
    session.fresh.disabled = true;
    session.mode.disabled = true;
    session.messages.push({ role: 'user', content: pregunta });
    session.input.value = '';
    render(session);
    status(session, 'Consultando los apuntes…');
    const timeout = setTimeout(() => session.abort.abort(), 50000);
    try {
      const response = await fetch('/api/explicacion-profunda', { method: 'POST',
        headers: { 'Content-Type': 'application/json' }, signal: session.abort.signal, body: JSON.stringify(payload) });
      const data = await response.json();
      if (active !== session) return;
      if (!response.ok || !data.success) {
        if (data.fuentes?.length) session.messages.push({ role: 'assistant', content: data.error, result: data, failed: true });
        throw new Error(data.error || 'No se pudo obtener la respuesta.');
      }
      session.messages.push({ role: 'assistant', content: data.explicacion, result: data, request: cacheId });
      const saved = persist(session);
      status(session, saved ? 'Consulta guardada en este dispositivo' : 'Respuesta disponible; no hay espacio para guardarla sin conexión.', !saved);
      refreshSaved(session);
    } catch (error) {
      if (active !== session) return;
      session.input.value = pregunta;
      const lastUser = session.messages.findLast(m => m.role === 'user');
      if (lastUser) lastUser.failed = true;
      status(session, error.name === 'AbortError' ? 'La consulta ha tardado demasiado. Inténtalo de nuevo.' : error.message, true);
    } finally {
      clearTimeout(timeout);
      session.busy = false;
      session.send.disabled = false;
      session.saved.disabled = false;
      session.fresh.disabled = false;
      session.mode.disabled = false;
      if (active === session) render(session);
    }
  }

  function close() {
    if (!active) return;
    const session = active;
    active = null;
    session.abort?.abort();
    session.shell.remove();
    session.background.forEach(([element, inert]) => { element.inert = inert; });
    document.body.style.overflow = session.bodyOverflow;
    session.focusBefore?.focus({ preventScroll: true });
  }

  function open(bid, idx, exercise = null) {
    const block = CONFIGURACION_CURSO.find(b => b.bloque === bid);
    const topic = block?.asignaturas[idx];
    if (!topic || !PDF_T3_URLS[bid]?.[idx]) return;
    close();
    const shell = node('section', 'tutor-shell');
    shell.setAttribute('role', 'dialog'); shell.setAttribute('aria-modal', 'true'); shell.setAttribute('aria-label', 'Tutor de apuntes');
    const header = node('header', 'tutor-header');
    const heading = node('div', 'tutor-heading');
    heading.append(node('h2', '', 'Tutor de apuntes'), node('p', '', `${block.titulo_boton} · ${topic.nombre}`));
    const exit = node('button', 'tutor-icon', '×'); exit.type = 'button'; exit.title = 'Cerrar tutor'; exit.setAttribute('aria-label', 'Cerrar tutor'); exit.onclick = close;
    header.append(heading, exit);
    const controls = node('div', 'tutor-controls');
    const modeLabel = node('label', '', 'Consulta');
    const mode = node('select'); mode.setAttribute('aria-label', 'Tipo de consulta');
    for (const [value, label] of Object.entries(MODES)) mode.add(new Option(label, value));
    modeLabel.append(mode);
    const savedLabel = node('label', '', 'Historial del tema');
    const saved = node('select'); saved.setAttribute('aria-label', 'Historial del tema'); savedLabel.append(saved);
    const fresh = node('button', 'tutor-icon', '+'); fresh.type = 'button'; fresh.title = 'Nueva conversación'; fresh.setAttribute('aria-label', 'Nueva conversación');
    controls.append(modeLabel, savedLabel, fresh);
    const log = node('div', 'tutor-log'); log.setAttribute('role', 'log'); log.setAttribute('aria-live', 'polite');
    const state = node('div', 'tutor-status'); state.setAttribute('role', 'status');
    const form = node('form', 'tutor-composer');
    const input = node('textarea'); input.maxLength = 1800; input.placeholder = 'Tu pregunta sobre este tema'; input.setAttribute('aria-label', 'Pregunta al tutor');
    const submit = node('button', '', 'Preguntar'); submit.type = 'submit';
    form.append(input, submit); shell.append(header, controls, log, state, form);
    const session = { bid, idx, topic: topic.nombre, exercise, id: crypto.randomUUID(), shell, log, mode, saved, fresh, input,
      send: submit, status: state, busy: false, messages: [], bodyOverflow: document.body.style.overflow, focusBefore: document.activeElement,
      background: [...document.body.children].map(element => [element, element.inert]) };
    active = session;
    const reset = () => {
      session.id = crypto.randomUUID(); session.messages = []; session.exercise = null; input.value = ''; saved.value = ''; render(session); status(session, ''); input.focus();
    };
    fresh.onclick = reset;
    saved.onchange = () => {
      const record = readCache().find(r => r.id === saved.value && r.bid === bid && r.idx === idx);
      if (!record) return;
      session.id = record.id; session.exercise = record.exercise; session.messages = record.messages; input.value = '';
      render(session); status(session, 'Consulta guardada en este dispositivo');
    };
    form.onsubmit = event => { event.preventDefault(); send(session); };
    shell.addEventListener('keydown', event => {
      if (document.querySelector('.pdf-viewer-shell')) return;
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') {
        const elements = [...shell.querySelectorAll('button,select,textarea')].filter(el => !el.disabled);
        const first = elements[0], last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    session.background.forEach(([element]) => { element.inert = true; });
    document.body.style.overflow = 'hidden'; document.body.append(shell);
    refreshSaved(session);
    if (exercise) input.value = `Explícame ${exercise.respuestaAlumno && !exercise.acierto && exercise.respuestaAlumno !== exercise.respuestaCorrecta ? 'mi error' : 'este ejercicio'}: ${exercise.pregunta}`.slice(0, 1800);
    status(session, navigator.onLine ? '' : 'Sin conexión · consultas guardadas disponibles');
    input.focus();
  }

  function openExercise(question, answer) {
    if (!question) return;
    const candidates = CONFIGURACION_CURSO.flatMap(block => block.asignaturas.flatMap((topic, idx) =>
      PDF_T3_URLS[block.bloque]?.[idx] && topic.data.some(p => p.id === question.id || p.texto === question.texto)
        ? [{ bid: block.bloque, idx }] : []));
    if (!candidates.length && question.origen === 'ia') {
      CONFIGURACION_CURSO.forEach(block => block.asignaturas.forEach((topic, idx) => {
        if (topic.nombre === question.tema && PDF_T3_URLS[block.bloque]?.[idx]) candidates.push({ bid: block.bloque, idx });
      }));
    }
    if (candidates.length !== 1) {
      if (typeof showToast === 'function') showToast('info', 'Selecciona el tema', 'Abre el tutor desde el tema al que pertenece esta pregunta.');
      return;
    }
    const { bid, idx } = candidates[0];
    open(bid, idx, { pregunta: question.texto, respuestaCorrecta: question.correctaTexto,
      respuestaAlumno: answer || '', explicacionCorta: question.explicacion || '',
      acierto: typeof esRespuestaCorrecta === 'function' && esRespuestaCorrecta(question, answer) });
  }

  window.abrirTutorTema = open;
  window.abrirTutorError = (index, academia = false) => {
    const questions = academia ? academiaPreguntasJuego : preguntasJuego;
    const answers = academia ? academiaRespuestas : respuestasUsuario;
    const question = questions[index];
    openExercise(question, question?.opciones[answers[index]]);
  };
  window.TUTOR_APUNTES = { open, openExercise, close };
})();
