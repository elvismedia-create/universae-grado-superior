(function (root) {
  const CACHE_NAME = 'universae-gs-audio-v1';
  const POSITION_KEY = 'universae_gs_audio_positions_v1';
  const SPEED_KEY = 'universae_gs_audio_speed_v1';
  let manifestPromise;
  let current = null;
  let catalog = [];
  let objectUrl = null;
  let lastSave = 0;

  const host = () => root.document.getElementById('pantalla-audio-gs');
  const player = () => host().querySelector('#ags-player');
  const status = message => { host().querySelector('#ags-status').textContent = message; };

  function loadManifest() {
    if (!manifestPromise) {
      manifestPromise = fetch('./audios/manifest.json').then(response => {
        if (!response.ok) throw new Error(`No se encontró el catálogo de audios (${response.status}).`);
        return response.json();
      }).catch(error => { manifestPromise = null; throw error; });
    }
    return manifestPromise;
  }

  function positions() {
    try { return JSON.parse(root.localStorage.getItem(POSITION_KEY) || '{}'); }
    catch { return {}; }
  }

  function savePosition() {
    if (!current || !Number.isFinite(player().currentTime)) return;
    const saved = positions();
    saved[current.id] = player().ended ? 0 : Math.floor(player().currentTime);
    root.localStorage.setItem(POSITION_KEY, JSON.stringify(saved));
  }

  async function isSaved(item) {
    if (!('caches' in root)) return false;
    return Boolean(await caches.open(CACHE_NAME).then(cache => cache.match(item.audio)));
  }

  function updateButtons(saved) {
    const button = host().querySelector('#ags-offline');
    button.textContent = saved ? 'Quitar descarga' : 'Guardar sin conexión';
    button.disabled = !('caches' in root);
    host().querySelector('#ags-file').hidden = !objectUrl;
    if (objectUrl) host().querySelector('#ags-file').href = objectUrl;
  }

  function nextItem(direction) {
    const subject = host().querySelector('#ags-filter').value;
    const queue = catalog.filter(item => !subject || item.bid === subject);
    const index = queue.findIndex(item => item.id === current?.id);
    return queue[index + direction] || null;
  }

  async function move(direction) {
    const item = nextItem(direction);
    if (!item) { status('No hay más temas en esta asignatura.'); return; }
    await select(item);
    renderList(catalog);
    try { await player().play(); }
    catch { status('Tema cargado. Pulsa reproducir para continuar.'); }
  }

  async function select(item) {
    savePosition();
    player().pause();
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    objectUrl = null;
    current = item;
    host().querySelector('#ags-title').textContent = item.topic;
    host().querySelector('#ags-subject').textContent = item.subject;
    host().querySelector('#ags-controls').hidden = false;
    host().querySelector('#ags-file').download = `${item.id.replace(':', '-')}.m4a`;
    status('Cargando audio…');
    try {
      const cached = 'caches' in root && await caches.open(CACHE_NAME).then(cache => cache.match(item.audio));
      const response = cached || await fetch(encodeURI(item.audio));
      if (!response.ok) throw new Error(`No se pudo abrir el audio (${response.status}).`);
      const blob = await response.blob();
      if (current !== item) return;
      objectUrl = URL.createObjectURL(blob);
      player().src = objectUrl;
      player().playbackRate = Number(root.localStorage.getItem(SPEED_KEY)) || 1;
      updateButtons(Boolean(cached));
      host().querySelector('#ags-prev').disabled = !nextItem(-1);
      host().querySelector('#ags-next').disabled = !nextItem(1);
      status(cached ? 'Disponible sin conexión en esta tablet.' : 'Disponible ahora; guárdalo para escucharlo sin conexión.');
      if ('mediaSession' in navigator && typeof MediaMetadata !== 'undefined') {
        navigator.mediaSession.metadata = new MediaMetadata({ title: item.topic, artist: item.subject, album: 'Universae GS · Repaso' });
      }
    } catch (error) {
      if (current === item) status(error.message);
    }
  }

  function renderList(items) {
    const list = host().querySelector('#ags-list');
    const query = host().querySelector('#ags-search').value.trim().toLocaleLowerCase('es');
    const subject = host().querySelector('#ags-filter').value;
    list.replaceChildren();
    for (const item of items.filter(value =>
      (!subject || value.bid === subject) &&
      (!query || `${value.subject} ${value.topic}`.toLocaleLowerCase('es').includes(query)))) {
      const row = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'ags-topic';
      button.setAttribute('aria-current', String(item.id === current?.id));
      button.innerHTML = `<span></span><small></small>`;
      button.querySelector('span').textContent = item.topic;
      button.querySelector('small').textContent = item.subject;
      button.addEventListener('click', () => { select(item); renderList(items); });
      row.append(button);
      list.append(row);
    }
    const count = list.children.length;
    host().querySelector('#ags-count').textContent = `${count} ${count === 1 ? 'tema' : 'temas'}`;
  }

  async function open(bid, idx) {
    root.mostrarPantalla('pantalla-audio-gs');
    host().innerHTML = `<div class="ags-head"><div><h1>Repaso en audio</h1><p>Microrepasos por tema</p></div><button type="button" id="ags-back" class="btn-outline">Volver</button></div>
      <section class="ags-player-area" aria-label="Reproductor"><p id="ags-subject"></p><h2 id="ags-title">Selecciona un tema</h2>
      <audio id="ags-player" controls preload="none"></audio><div id="ags-controls" class="ags-actions" hidden>
      <button type="button" id="ags-prev" aria-label="Tema anterior" title="Tema anterior">⏮</button><button type="button" id="ags-next" aria-label="Tema siguiente" title="Tema siguiente">⏭</button>
      <label>Velocidad <select id="ags-speed"><option value="0.8">0,8×</option><option value="1">1×</option><option value="1.2">1,2×</option><option value="1.5">1,5×</option><option value="2">2×</option></select></label>
      <button type="button" id="ags-offline">Guardar sin conexión</button><a id="ags-file" href="#" download hidden>Descargar archivo</a>
      <button type="button" id="ags-pdf">Ver PDF</button></div><label class="ags-chain"><input id="ags-chain" type="checkbox" checked> Reproducir siguientes temas</label><p id="ags-status" role="status"></p></section>
      <div class="ags-filters"><input id="ags-search" type="search" placeholder="Buscar tema" aria-label="Buscar tema"><select id="ags-filter" aria-label="Filtrar asignatura"><option value="">Todas las asignaturas</option></select></div>
      <button type="button" id="ags-save-subject">Guardar audios de esta asignatura</button>
      <p id="ags-count" class="ags-count"></p><ul id="ags-list" class="ags-list"></ul>`;
    host().querySelector('#ags-back').addEventListener('click', root.volverAlMenu);
    const audio = player();
    audio.addEventListener('loadedmetadata', () => {
      const position = positions()[current?.id] || 0;
      if (position > 0 && position < audio.duration - 10) audio.currentTime = position;
    });
    audio.addEventListener('timeupdate', () => {
      if (Date.now() - lastSave > 5000) { savePosition(); lastSave = Date.now(); }
    });
    audio.addEventListener('pause', savePosition);
    audio.addEventListener('ended', savePosition);
    audio.addEventListener('ended', () => {
      if (host().querySelector('#ags-chain').checked) move(1);
    });
    host().querySelector('#ags-prev').addEventListener('click', () => move(-1));
    host().querySelector('#ags-next').addEventListener('click', () => move(1));
    if ('mediaSession' in navigator && navigator.mediaSession.setActionHandler) {
      for (const [action, direction] of [['previoustrack', -1], ['nexttrack', 1]]) {
        try { navigator.mediaSession.setActionHandler(action, () => move(direction)); }
        catch { /* El navegador conserva los controles de audio normales. */ }
      }
    }
    host().querySelector('#ags-speed').value = root.localStorage.getItem(SPEED_KEY) || '1';
    host().querySelector('#ags-speed').addEventListener('change', event => {
      audio.playbackRate = Number(event.target.value);
      root.localStorage.setItem(SPEED_KEY, event.target.value);
    });
    host().querySelector('#ags-offline').addEventListener('click', async () => {
      if (!current || !('caches' in root)) return;
      const item = current;
      const cache = await caches.open(CACHE_NAME);
      const saved = await cache.match(item.audio);
      try {
        if (saved) {
          await cache.delete(item.audio);
          status('Descarga eliminada de esta tablet.');
        } else {
          status('Guardando audio…');
          const response = await fetch(encodeURI(item.audio));
          if (!response.ok) throw new Error('No se pudo descargar el audio.');
          await cache.put(item.audio, response);
          status('Audio guardado para escucharlo sin conexión.');
        }
        if (item === current) updateButtons(!saved);
      } catch (error) { status(error.message); }
    });
    host().querySelector('#ags-pdf').addEventListener('click', () => {
      if (current) root.abrirPdfTema(current.bid, current.idx);
    });
    try {
      const items = await loadManifest();
      catalog = items;
      const filter = host().querySelector('#ags-filter');
      for (const item of items.filter((value, index) => items.findIndex(other => other.bid === value.bid) === index)) {
        filter.add(new Option(item.subject, item.bid));
      }
      host().querySelector('#ags-search').addEventListener('input', () => renderList(items));
      filter.addEventListener('change', () => {
        renderList(items);
        host().querySelector('#ags-save-subject').disabled = !filter.value || !('caches' in root);
      });
      if (bid) filter.value = bid;
      host().querySelector('#ags-save-subject').disabled = !filter.value || !('caches' in root);
      host().querySelector('#ags-save-subject').addEventListener('click', async event => {
        const selected = items.filter(item => item.bid === filter.value);
        if (!selected.length) return;
        event.target.disabled = true;
        try {
          const cache = await caches.open(CACHE_NAME);
          for (let index = 0; index < selected.length; index++) {
            const item = selected[index];
            status(`Guardando ${index + 1} de ${selected.length}: ${item.topic}`);
            if (await cache.match(item.audio)) continue;
            const response = await fetch(encodeURI(item.audio));
            if (!response.ok) throw new Error(`No se pudo guardar ${item.topic}.`);
            await cache.put(item.audio, response);
          }
          status(`${selected.length} audios disponibles sin conexión.`);
          if (current && selected.some(item => item.id === current.id)) updateButtons(true);
        } catch (error) { status(error.message); }
        finally { event.target.disabled = false; }
      });
      renderList(items);
      const chosen = items.find(item => item.bid === bid && item.idx === idx);
      if (chosen) { await select(chosen); renderList(items); }
    } catch (error) { status(error.message); }
  }

  root.abrirAudioGS = open;
})(window);
