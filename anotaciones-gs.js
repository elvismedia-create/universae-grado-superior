(function (root) {
  'use strict';
  const PREFIX = 'universae_pdf_annotations:';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const parse = value => { try { return JSON.parse(value || '{}'); } catch (_) { return {}; } };
  let pendingRelink = null;
  let review = null;

  function idFor(stroke) {
    if (!stroke.id) stroke.id = root.crypto?.randomUUID?.() || `mark-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    return stroke.id;
  }

  function extractText(layer, rects, pageRect) {
    if (!layer || !rects?.length) return '';
    const areas = rects.map(rect => ({ left: pageRect.left + rect.x * pageRect.width,
      right: pageRect.left + (rect.x + rect.width) * pageRect.width,
      top: pageRect.top + rect.y * pageRect.height,
      bottom: pageRect.top + (rect.y + rect.height) * pageRect.height }));
    const words = [];
    for (const span of layer.querySelectorAll('span')) {
      const content = span.firstChild;
      if (!content || content.nodeType !== 3) continue;
      const bounds = span.getBoundingClientRect();
      if (!areas.some(area => bounds.right >= area.left && bounds.left <= area.right && bounds.bottom >= area.top && bounds.top <= area.bottom)) continue;
      let selected = '';
      for (let index = 0; index < content.textContent.length; index++) {
        const range = layer.ownerDocument.createRange();
        range.setStart(content, index); range.setEnd(content, index + 1);
        const box = range.getBoundingClientRect();
        const cx = (box.left + box.right) / 2, cy = (box.top + box.bottom) / 2;
        if (areas.some(area => cx >= area.left - 2 && cx <= area.right + 2 && cy >= area.top - 2 && cy <= area.bottom + 2)) selected += content.textContent[index];
      }
      if (selected.trim()) words.push(selected);
      if (words.join(' ').length > 1800) break;
    }
    return words.join(' ').replace(/\s+/g, ' ').trim().slice(0, 1800);
  }

  function list(storage, config) {
    const notes = [];
    for (const block of config) for (let idx = 0; idx < block.asignaturas.length; idx++) {
      const topic = block.asignaturas[idx];
      const key = `${PREFIX}${block.bloque}:${idx}`;
      const pages = parse(storage.getItem(key));
      for (const [page, strokes] of Object.entries(pages)) {
        if (!Array.isArray(strokes)) continue;
        strokes.forEach((stroke, index) => {
          if (stroke.type !== 'highlight') return;
          notes.push({ key, bid: block.bloque, idx, subject: block.titulo_boton,
            topic: topic.nombre, page: Number(page), index, stroke });
        });
      }
    }
    return notes;
  }

  function update(storage, item, patch) {
    const pages = parse(storage.getItem(item.key));
    const stroke = pages[item.page]?.[item.index];
    if (!stroke || stroke.type !== 'highlight') return false;
    Object.assign(stroke, patch);
    storage.setItem(item.key, JSON.stringify(pages));
    Object.assign(item.stroke, patch);
    return true;
  }

  function relinkIfPending(key, page, text, annotations, save) {
    if (!pendingRelink || pendingRelink.key !== `${PREFIX}${key}` || pendingRelink.page !== Number(page) || !text.trim()) return null;
    const stroke = annotations[page]?.[pendingRelink.index];
    if (!stroke || stroke.type !== 'highlight') return null;
    const index = pendingRelink.index;
    stroke.text = text.trim().slice(0, 1800);
    idFor(stroke);
    save();
    pendingRelink = null;
    return { stroke, index };
  }

  const api = { PREFIX, idFor, extractText, list, update, relinkIfPending };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.AnotacionesGS = api;
  if (!root.document) return;

  function showComposer(shell, item, save) {
    shell.querySelector('.pdf-study-composer')?.remove();
    const panel = document.createElement('section');
    panel.className = 'pdf-study-composer';
    panel.setAttribute('aria-label', 'Estudiar subrayado');
    const quoted = item.stroke.text || '';
    panel.innerHTML = `<div class="study-head"><strong>Página ${item.page} · ${escape(item.topic)}</strong><button type="button" data-close aria-label="Cerrar">×</button></div>
      <blockquote>${quoted ? escape(quoted) : 'No se pudo recuperar el texto. Puedes volver a seleccionarlo desde Anotaciones PDF.'}</blockquote>
      <div class="study-actions"><button type="button" data-kind="card" ${quoted ? '' : 'disabled'}>Crear tarjeta</button><button type="button" data-kind="doubt" ${quoted ? '' : 'disabled'}>Guardar duda</button><button type="button" data-kind="question" ${quoted ? '' : 'disabled'}>Escribir pregunta</button><button type="button" data-kind="tutor" ${quoted ? '' : 'disabled'}>Pedir pregunta al tutor</button></div>
      <form hidden><label class="study-prompt-label">Pregunta<textarea name="prompt" required maxlength="500"></textarea></label><button type="submit">Guardar</button></form>`;
    shell.append(panel);
    panel.querySelector('[data-close]').onclick = () => panel.remove();
    panel.querySelectorAll('[data-kind]').forEach(button => button.onclick = () => {
      const kind = button.dataset.kind;
      if (kind === 'tutor') {
        if (!quoted) return;
        shell.querySelector('[data-action="close"]').click();
        root.abrirTutorFragmento?.(item.bid, item.idx, item.page, quoted);
        return;
      }
      const form = panel.querySelector('form');
      form.hidden = false;
      form.dataset.kind = kind;
      panel.querySelector('.study-prompt-label').firstChild.textContent = kind === 'doubt' ? 'Tu duda' : 'Pregunta para repasar';
      form.elements.prompt.value = item.stroke.note?.prompt || '';
      form.elements.prompt.focus();
    });
    panel.querySelector('form').onsubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;
      const prompt = form.elements.prompt.value.trim();
      if (!prompt) return;
      item.stroke.note = { ...(item.stroke.note || {}), kind: form.dataset.kind, prompt };
      save();
      panel.remove();
    };
  }

  function onHighlight(shell, key, info, page, index, stroke, save) {
    const item = { key: `${PREFIX}${key}`, bid: info.bid, idx: info.idx, topic: info.topic, page: Number(page), index, stroke };
    showComposer(shell, item, save);
  }
  api.onHighlight = onHighlight;

  function open() {
    const host = document.getElementById('pantalla-anotaciones-gs');
    const items = list(localStorage, CONFIGURACION_CURSO);
    host.innerHTML = `<div class="study-head"><h1>Anotaciones PDF</h1><button type="button" id="notes-back">Volver</button></div>
      <div class="study-filters"><label>Buscar por tema o texto<input id="notes-search" type="search"></label>
      <label>Asignatura<select id="notes-subject"><option value="">Todas</option>${CONFIGURACION_CURSO.map(block => `<option value="${escape(block.bloque)}">${escape(block.titulo_boton)}</option>`).join('')}</select></label></div>
      <div class="study-actions"><button type="button" id="notes-review">Iniciar repaso</button></div><div id="notes-list" class="study-list"></div>`;
    const listHost = host.querySelector('#notes-list');
    const filtered = () => {
      const query = host.querySelector('#notes-search').value.toLocaleLowerCase('es');
      const bid = host.querySelector('#notes-subject').value;
      return items.filter(item => (!bid || item.bid === bid) && `${item.topic} ${item.stroke.text || ''} ${item.stroke.note?.prompt || ''}`.toLocaleLowerCase('es').includes(query));
    };
    const render = () => {
      const shown = filtered();
      listHost.innerHTML = shown.length ? shown.map((item, offset) => `<article class="study-item" data-offset="${offset}">
        <div class="study-meta">${escape(item.subject)} · ${escape(item.topic)} · Página ${item.page}</div>
        <p>${escape(item.stroke.text || 'Texto no recuperado')}</p>${item.stroke.note?.prompt ? `<strong>${escape(item.stroke.note.prompt)}</strong>` : ''}
        <div class="study-actions"><button type="button" data-action="pdf">Abrir PDF</button><button type="button" data-action="edit">${item.stroke.note ? 'Editar' : item.stroke.text ? 'Crear tarjeta o nota' : 'Transcribir o añadir nota'}</button>
        ${item.stroke.text ? '' : '<button type="button" data-action="relink">Volver a seleccionar</button>'}</div></article>`).join('') : '<p>No hay anotaciones con estos filtros.</p>';
      listHost.querySelectorAll('.study-item').forEach(article => {
        const item = shown[Number(article.dataset.offset)];
        article.querySelector('[data-action="pdf"]').onclick = () => abrirPdfTema(item.bid, item.idx, item.page);
        article.querySelector('[data-action="edit"]').onclick = () => editNote(item, render);
        const relink = article.querySelector('[data-action="relink"]');
        if (relink) relink.onclick = async () => {
          pendingRelink = { key: item.key, page: item.page, index: item.index };
          await abrirPdfTema(item.bid, item.idx, item.page);
          document.querySelector('.pdf-viewer-shell [data-tool="highlight"]')?.click();
        };
      });
    };
    host.querySelector('#notes-back').onclick = () => {
      const location = NavegacionGS.readLocation(CONFIGURACION_CURSO, localStorage);
      filtrarBloque(location.bid, location.idx, true);
      mostrarPantalla('pantalla-inicio');
    };
    host.querySelectorAll('.study-filters input, .study-filters select').forEach(control => control.addEventListener('input', render));
    host.querySelector('#notes-review').disabled = !items.some(item => item.stroke.text);
    host.querySelector('#notes-review').onclick = () => startReview(filtered().filter(item => item.stroke.text));
    render(); mostrarPantalla('pantalla-anotaciones-gs');
  }

  function editNote(item, refresh) {
    const host = document.getElementById('pantalla-anotaciones-gs');
    host.querySelector('.study-editor')?.remove();
    const editor = document.createElement('form');
    editor.className = 'study-editor';
    editor.innerHTML = `<h2>${escape(item.topic)} · Página ${item.page}</h2><p>${escape(item.stroke.text || 'Puedes volver a seleccionar el texto en el PDF o transcribirlo aquí.')}</p>
      ${item.stroke.text ? '' : '<label>Texto del fragmento<textarea name="fragment" required maxlength="1800"></textarea></label>'}
      <label>Tipo<select name="kind"><option value="card">Tarjeta</option><option value="doubt">Duda</option><option value="question">Pregunta</option></select></label>
      <label>Pregunta o duda<textarea name="prompt" required maxlength="500"></textarea></label><div class="study-actions"><button type="submit">Guardar</button><button type="button" data-cancel>Cancelar</button></div>`;
    editor.elements.kind.value = item.stroke.note?.kind || 'card';
    editor.elements.prompt.value = item.stroke.note?.prompt || '';
    editor.onsubmit = event => {
      event.preventDefault();
      const prompt = editor.elements.prompt.value.trim();
      const text = (editor.elements.fragment?.value || item.stroke.text || '').trim();
      if (!prompt || !text) return;
      update(localStorage, item, { text, note: { ...(item.stroke.note || {}), kind: editor.elements.kind.value, prompt } });
      editor.remove(); refresh();
    };
    editor.querySelector('[data-cancel]').onclick = () => editor.remove();
    host.prepend(editor);
    editor.elements.prompt.focus();
  }

  function startReview(items) {
    if (!items.length) return;
    review = { items, current: 0, answer: '' };
    renderReview();
  }
  function renderReview(revealed = false) {
    const item = review.items[review.current];
    const host = document.getElementById('pantalla-anotaciones-gs');
    host.innerHTML = `<div class="study-head"><h1>Repaso de anotaciones</h1><button type="button" id="review-exit">Salir</button></div>
      <p class="study-meta">${review.current + 1}/${review.items.length} · ${escape(item.topic)} · Página ${item.page}</p>
      <h2>${escape(item.stroke.note?.prompt || 'Explica el contenido que subrayaste en esta página')}</h2>
      <label>Tu explicación<textarea id="review-answer" rows="5" ${revealed ? 'readonly' : ''}></textarea></label>
      ${revealed ? `<blockquote class="study-reveal">${escape(item.stroke.text)}</blockquote><div class="study-actions"><button type="button" id="review-next">${review.current + 1 === review.items.length ? 'Terminar' : 'Siguiente'}</button><button type="button" id="review-pdf">Abrir página</button></div>` : '<button type="button" id="review-reveal" disabled>Ver fragmento</button>'}`;
    const answer = host.querySelector('#review-answer');
    answer.value = review.answer;
    host.querySelector('#review-exit').onclick = open;
    if (!revealed) {
      answer.oninput = () => { review.answer = answer.value; host.querySelector('#review-reveal').disabled = !answer.value.trim(); };
      host.querySelector('#review-reveal').onclick = () => renderReview(true);
    } else {
      host.querySelector('#review-pdf').onclick = () => abrirPdfTema(item.bid, item.idx, item.page);
      host.querySelector('#review-next').onclick = () => {
        if (++review.current === review.items.length) { review = null; open(); }
        else { review.answer = ''; renderReview(); }
      };
    }
  }
  api.open = open;
  root.abrirAnotacionesGS = open;
})(typeof window !== 'undefined' ? window : globalThis);
