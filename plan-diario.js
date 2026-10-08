(function (root) {
  'use strict';

  const KEY = 'universae_gs_plan_v1';
  const week = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const dayKey = date => root.RepasoEspaciado.dayKey(date);
  const parseDay = value => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day, 12);
    return dayKey(date) === value ? date : null;
  };
  const nextDay = date => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 12);
  const isTopic = item => !item.nombre.startsWith('⭐') && Array.isArray(item.data) && item.data.length > 0;

  function studyDays(settings, today = dayKey()) {
    const exam = parseDay(settings?.examDate);
    const start = parseDay(today);
    if (!exam || !start || exam <= start) return 0;
    const selected = new Set(settings.weekdays || []);
    let count = 0;
    for (let day = start; day < exam; day = nextDay(day)) {
      if (selected.has(day.getDay())) count++;
    }
    return count;
  }

  function validate(settings, today = dayKey()) {
    if (!parseDay(settings?.examDate) || settings.examDate <= today) return 'Indica una fecha de examen futura.';
    if (!Array.isArray(settings.weekdays) || !settings.weekdays.every(day => Number.isInteger(day) && day >= 0 && day <= 6) || !settings.weekdays.length) return 'Elige al menos un día de estudio.';
    if (!Number.isInteger(settings.minutes) || settings.minutes < 10 || settings.minutes > 240) return 'Elige entre 10 y 240 minutos diarios.';
    return null;
  }

  function summarize(config, db, failures, cases, workshopProgress, today = dayKey()) {
    const failSet = new Set(failures || []);
    const topics = [];
    for (const block of config) {
      block.asignaturas.forEach((item, idx) => {
        if (!isTopic(item)) return;
        const state = db[item.nombre] || {};
        const srs = state.srs || {};
        const ids = new Set(item.data.map(q => q.id));
        const due = item.data.filter(q => root.RepasoEspaciado.isDue(srs[q.id], today) || (!srs[q.id] && (state.dom || []).includes(q.id))).length;
        const failed = [...failSet].filter(id => ids.has(id)).length;
        const unseen = item.data.filter(q => !srs[q.id] && !(state.dom || []).includes(q.id)).length;
        const mastered = item.data.filter(q => srs[q.id]?.mastered || (!srs[q.id] && (state.dom || []).includes(q.id))).length;
        topics.push({ bid: block.bloque, subject: block.titulo_boton, idx, topic: item.nombre, due, failed, unseen, mastered, total: item.data.length });
      });
    }
    const practical = (cases || []).filter(item => Number(workshopProgress?.[item.id] || 0) < 3)
      .map(item => ({ bid: item.bid, caseId: item.id, title: item.title }));
    return { topics, practical };
  }

  function buildPlan(settings, data, today = dayKey()) {
    const error = validate(settings, today);
    if (error) return { error, tasks: [] };
    const left = studyDays(settings, today);
    const active = settings.weekdays.includes(parseDay(today).getDay());
    if (!active) return { tasks: [], studyDaysLeft: left, restDay: true };

    const topics = data.topics || [];
    const available = settings.minutes;
    const count = available < 20 ? 1 : available < 35 ? 2 : available < 60 ? 3 : 4;
    const offset = Number(today.replaceAll('-', '')) % Math.max(1, topics.length);
    const score = item => item.due * 4 + item.failed * 3 + item.unseen + (item.total - item.mastered) / Math.max(1, item.total);
    const order = items => [...items].sort((a, b) => score(b) - score(a) ||
      ((topics.indexOf(a) - offset + topics.length) % topics.length) - ((topics.indexOf(b) - offset + topics.length) % topics.length));
    const selected = [];
    const used = new Set();
    const pick = (kind, pool) => {
      const eligible = pool.filter(topic => !used.has(`${topic.bid}:${topic.idx}`));
      const otherSubject = eligible.filter(topic => !selected.some(task => task.bid === topic.bid));
      const item = order(otherSubject.length ? otherSubject : eligible)[0];
      if (!item) return false;
      used.add(`${item.bid}:${item.idx}`);
      selected.push({ id: `${kind}:${item.bid}:${item.idx}`, kind, bid: item.bid, idx: item.idx, subject: item.subject, topic: item.topic,
        count: kind === 'repaso' ? item.due : kind === 'fallos' ? item.failed : item.unseen });
      return true;
    };

    if (!pick('repaso', topics.filter(item => item.due > 0))) pick('fallos', topics.filter(item => item.failed > 0));
    if (count >= 4 && selected.length < count) pick('fallos', topics.filter(item => item.failed > 0));
    if (selected.length < count) pick('nuevo', topics.filter(item => item.unseen > 0));
    if (selected.length < count && available >= 35) {
      const practical = (data.practical || []).find(item => !selected.some(task => task.bid === item.bid)) || data.practical?.[0];
      if (practical) selected.push({ id: `practica:${practical.caseId}`, kind: 'practica', bid: practical.bid, caseId: practical.caseId,
        subject: topics.find(item => item.bid === practical.bid)?.subject || practical.bid, topic: practical.title, count: 1 });
    }
    while (selected.length < count) {
      if (!pick('nuevo', topics.filter(item => item.unseen > 0)) &&
          !pick('fallos', topics.filter(item => item.failed > 0)) &&
          !pick('repaso', topics.filter(item => item.due > 0))) break;
    }
    if (!selected.length && topics.length) pick('consolidar', topics.filter(item => item.mastered < item.total));
    if (!selected.length) return { tasks: [], studyDaysLeft: left, complete: true };

    const attention = [...new Map(topics.map(item => [item.bid, item.subject])).entries()].map(([bid, subject]) => {
      const items = topics.filter(item => item.bid === bid);
      return { subject, due: items.reduce((total, item) => total + item.due, 0), failed: items.reduce((total, item) => total + item.failed, 0),
        remaining: items.reduce((total, item) => total + item.total - item.mastered, 0) };
    }).sort((a, b) => (b.due * 4 + b.failed * 3 + b.remaining) - (a.due * 4 + a.failed * 3 + a.remaining)).slice(0, 3);
    const weights = selected.map(task => ({ repaso: 1, fallos: 1, nuevo: 2, practica: 1.5, consolidar: 1 }[task.kind]));
    const sum = weights.reduce((a, b) => a + b, 0);
    let remaining = available;
    selected.forEach((task, idx) => {
      task.minutes = idx === selected.length - 1 ? remaining : Math.max(5, Math.round(available * weights[idx] / sum));
      remaining -= task.minutes;
    });
    return { tasks: selected, studyDaysLeft: left, attention };
  }

  const api = { KEY, dayKey, studyDays, validate, summarize, buildPlan };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.PlanDiario = api;
  if (!root.document) return;

  const read = () => {
    try { return JSON.parse(root.localStorage.getItem(KEY)) || {}; } catch (_) { return {}; }
  };
  const write = state => root.localStorage.setItem(KEY, JSON.stringify(state));
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  let activeTask = null;

  function todayPlan() {
    const state = read();
    const today = dayKey();
    if (validate(state.settings, today)) return { state, error: validate(state.settings, today) };
    if (!state.day || state.day.date !== today) {
      let workshop = {};
      try { workshop = JSON.parse(root.localStorage.getItem('universae_gs_taller_v1')) || {}; } catch (_) { /* Sin avance. */ }
      const data = summarize(CONFIGURACION_CURSO, loadDatabase(), loadFailures(), root.TALLER_GS_CASOS, workshop, today);
      state.day = { date: today, ...buildPlan(state.settings, data, today), done: [] };
      write(state);
    }
    return { state, day: state.day };
  }

  function render() {
    const host = root.document.getElementById('pantalla-plan-diario');
    const { state, day } = todayPlan();
    const settings = state.settings || {};
    const today = dayKey();
    const checklist = (day?.tasks || []).map((task, index) => {
      const done = day.done.includes(task.id);
      const label = { repaso: 'Repaso pendiente', fallos: 'Revisar fallos', nuevo: 'Contenido nuevo', practica: 'Ejercicio práctico', consolidar: 'Consolidar' }[task.kind];
      return `<li class="plan-task ${done ? 'done' : ''}"><span class="plan-check" aria-hidden="true">${done ? '✓' : index + 1}</span><div class="plan-task-body"><strong>${label}</strong><span>${escape(task.subject)} · ${escape(task.topic)}</span><small>${task.minutes} min${task.count > 1 ? ` · ${task.count} preguntas` : ''}</small></div><button type="button" data-task="${index}" ${done ? 'disabled' : ''}>${done ? 'Hecho' : 'Empezar'}</button></li>`;
    }).join('');
    const selected = new Set(settings.weekdays || [1, 2, 3, 4, 5]);
    host.innerHTML = `<div class="plan-head"><div><h1>Plan diario</h1><p>${day ? `${day.studyDaysLeft} días de estudio hasta el examen` : 'Configura tu calendario'}</p></div><button type="button" id="plan-back">Volver</button></div>
      <form id="plan-settings"><label>Fecha del examen<input name="examDate" type="date" min="${today}" value="${escape(settings.examDate || '')}" required></label><label>Minutos por día<input name="minutes" type="number" min="10" max="240" step="5" value="${Number.isInteger(settings.minutes) ? settings.minutes : 45}" required></label>
      <fieldset><legend>Días de estudio</legend><div class="plan-week">${week.map((name, idx) => `<label><input type="checkbox" name="weekday" value="${idx}" ${selected.has(idx) ? 'checked' : ''}><span>${name}</span></label>`).join('')}</div></fieldset><div class="plan-form-actions"><button type="submit">Guardar plan</button>${day ? '<button type="button" id="plan-remove">Quitar plan</button>' : ''}</div></form>
      <div id="plan-message" role="status">${day ? (day.restDay ? 'Hoy es un día libre. Tu plan continuará el próximo día elegido.' : day.complete ? 'No quedan tareas pendientes en el banco actual.' : `${day.done.length} de ${day.tasks.length} sesiones completadas hoy`) : 'Indica cuándo te examinas para crear el plan.'}</div>
      ${day?.attention?.length ? `<div class="plan-attention"><strong>Asignaturas que necesitan más atención</strong><ul>${day.attention.map(item => `<li>${escape(item.subject)} <span>${item.due} repasos · ${item.failed} fallos · ${item.remaining} por dominar</span></li>`).join('')}</ul></div>` : ''}
      ${checklist ? `<ol class="plan-list">${checklist}</ol>` : ''}`;
    host.querySelector('#plan-back').addEventListener('click', () => { filtrarBloque(root.currentBid || CONFIGURACION_CURSO[0].bloque); mostrarPantalla('pantalla-inicio'); });
    host.querySelector('#plan-settings').addEventListener('submit', event => {
      event.preventDefault();
      const form = event.currentTarget;
      const next = { examDate: form.elements.examDate.value, minutes: Number(form.elements.minutes.value),
        weekdays: [...form.querySelectorAll('[name="weekday"]:checked')].map(input => Number(input.value)) };
      const error = validate(next);
      if (error) { host.querySelector('#plan-message').textContent = error; return; }
      write({ settings: next });
      render();
    });
    host.querySelector('#plan-remove')?.addEventListener('click', () => { root.localStorage.removeItem(KEY); activeTask = null; render(); });
    host.querySelectorAll('[data-task]').forEach(button => button.addEventListener('click', () => {
      const task = day.tasks[Number(button.dataset.task)];
      activeTask = { date: day.date, task };
      if (task.kind === 'practica') root.abrirTallerGS(task.bid, task.caseId);
      else jugar(({ repaso: 'repaso_espaciado', fallos: 'plan_fallos', nuevo: 'plan_nuevo', consolidar: 'carrera' })[task.kind], task.idx, task.bid);
    }));
  }

  function complete(task) {
    const state = read();
    if (state.day?.date !== dayKey() || !state.day.tasks.some(item => item.id === task.id)) return false;
    if (!state.day.done.includes(task.id)) state.day.done.push(task.id);
    write(state);
    activeTask = null;
    return true;
  }

  api.open = () => { render(); mostrarPantalla('pantalla-plan-diario'); };
  api.completeTest = (mode, bid, idx, answered, total) => {
    if (!activeTask || activeTask.date !== dayKey() || activeTask.task.bid !== bid || activeTask.task.idx !== idx || answered !== total) return false;
    const expected = { repaso: 'repaso_espaciado', fallos: 'plan_fallos', nuevo: 'plan_nuevo', consolidar: 'carrera' }[activeTask.task.kind];
    return mode === expected && complete(activeTask.task);
  };
  api.completeWorkshop = caseId => {
    if (activeTask?.date === dayKey() && activeTask.task.kind === 'practica' && activeTask.task.caseId === caseId) complete(activeTask.task);
  };
  root.abrirPlanDiario = api.open;
})(typeof window !== 'undefined' ? window : globalThis);
