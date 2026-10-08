(function () {
  const DB_NAME = 'universae_local_pdfs';
  const DB_VERSION = 1;
  const STORE_NAME = 'pdfs';
  const MANIFEST_KEY = 'universae_local_pdf_manifest';
  const ANNOTATIONS_PREFIX = 'universae_pdf_annotations:';
  const PDFJS_URL = './vendor/pdfjs/pdf.mjs';
  const PDFJS_WORKER_URL = './vendor/pdfjs/pdf.worker.mjs';
  const PDF_OFFLINE_CACHE = 'universae-gs-pdfs-v1';
  let pdfjsPromise = null;

  const TOPIC_ALIASES = {
    sistemas_gs: ['sistemas', 'circuitos', 'electricos', 'electrico', 'trifasicos', 'transformadores', 'motores'],
    gestion_montaje_gs: ['gestion', 'montaje', 'mantenimiento', 'instalaciones', 'electricas', 'almacen', 'aprovisionamiento'],
    documentacion_tecnica_gs: ['documentacion', 'tecnica', 'instalaciones', 'electricas', 'simbologia', 'proyectos', 'memorias'],
    redes_ct_gs: ['desarrollo', 'redes', 'centros', 'transformacion', 'ct', 'media', 'baja', 'tension'],
    configuracion_instalaciones_gs: ['configuracion', 'instalaciones', 'electricas', 'baja', 'tension', 'bt'],
    domoticas_automaticas_gs: ['configuracion', 'domoticas', 'domotica', 'automaticas', 'automatizacion', 'knx', 'inmoticos'],
    pestana5b: ['domotica', 'domoticas', 'domotica'],
    pestana6: ['distribucion', 'distribucion'],
    pestana7: ['telecom', 'telecomunicacion', 'telecomunicaciones', 'infraestructura', 'infraestructuras', 'ict'],
    pestana8: ['maquinas', 'maquina', 'electricas', 'motores', 'transformadores']
  };

  function normalizeText(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function saveBlob(key, blob) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(blob, key);
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        reject(tx.error);
      };
    });
  }

  async function getBlob(key) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const request = tx.objectStore(STORE_NAME).get(key);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
      tx.oncomplete = () => db.close();
    });
  }

  function loadManifest() {
    try {
      return JSON.parse(localStorage.getItem(MANIFEST_KEY) || '{}');
    } catch (error) {
      console.warn('No se pudo leer el índice local de PDFs:', error);
      return {};
    }
  }

  function saveManifest(manifest) {
    localStorage.setItem(MANIFEST_KEY, JSON.stringify(manifest));
  }

  function annotationKey(key) {
    return `${ANNOTATIONS_PREFIX}${key}`;
  }

  function loadAnnotations(key) {
    try {
      return JSON.parse(localStorage.getItem(annotationKey(key)) || '{}');
    } catch (error) {
      console.warn('No se pudieron leer las anotaciones del PDF:', error);
      return {};
    }
  }

  function saveAnnotations(key, annotations) {
    localStorage.setItem(annotationKey(key), JSON.stringify(annotations));
  }

  function pdfKey(bid, idx) {
    return `${bid}:${idx}`;
  }

  function fileBaseName(path) {
    return String(path || '').split('/').pop() || '';
  }

  function fileNameWithoutExtension(value) {
    return String(value || '').replace(/\.[^.]+$/, '');
  }

  function uniqueValues(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function detectUnit(fileName) {
    const normalized = normalizeText(fileName);
    const match = normalized.match(/\bu\s*([0-9]{1,2})\b/) || normalized.match(/\bunidad\s*([0-9]{1,2})\b/);
    return match ? Number(match[1]) : null;
  }

  function isAnnex(fileName) {
    const normalized = normalizeText(fileName);
    return /\b(anx|anexo)\b/.test(normalized);
  }

  function detectBlock(fileName) {
    const normalized = normalizeText(fileName);
    let best = null;

    Object.entries(TOPIC_ALIASES).forEach(([bid, aliases]) => {
      const score = aliases.reduce((total, alias) => total + (normalized.includes(alias) ? 1 : 0), 0);
      if (score > 0 && (!best || score > best.score)) {
        best = { bid, score };
      }
    });

    return best ? best.bid : null;
  }

  function keywordSet(value) {
    const stopWords = new Set(['u', 'de', 'del', 'la', 'las', 'el', 'los', 'y', 'en', 'a', 'al', 'por', 'para', 'con', 'sus', 'una', 'un']);
    return normalizeText(value)
      .split(/\s+/)
      .filter(word => word.length > 2 && !stopWords.has(word));
  }

  function scoreTopic(fileName, block, unit) {
    const normalizedFileName = normalizeText(fileName);
    const aliases = TOPIC_ALIASES[block.bloque] || [];
    const aliasScore = aliases.reduce((total, alias) => total + (normalizedFileName.includes(alias) ? 4 : 0), 0);
    const topicName = block.asignaturas[unit] ? block.asignaturas[unit].nombre : '';
    const words = keywordSet(`${block.titulo_boton} ${topicName}`);
    const wordScore = words.reduce((total, word) => total + (normalizedFileName.includes(word) ? 1 : 0), 0);
    return aliasScore + wordScore;
  }

  function findBlockForUnit(unit) {
    if (typeof CONFIGURACION_CURSO === 'undefined') return null;
    const candidates = CONFIGURACION_CURSO.filter(b => TOPIC_ALIASES[b.bloque] && b.asignaturas[unit]);
    return candidates.length === 1 ? candidates[0].bloque : null;
  }

  function findBestBlockForFile(fileName, unit) {
    if (typeof CONFIGURACION_CURSO === 'undefined') return null;
    const candidates = CONFIGURACION_CURSO
      .filter(b => TOPIC_ALIASES[b.bloque] && b.asignaturas[unit])
      .map(block => ({ block, score: scoreTopic(fileName, block, unit) }))
      .sort((a, b) => b.score - a.score);

    if (!candidates.length || candidates[0].score < 2) return null;
    if (candidates[1] && candidates[0].score === candidates[1].score) return null;
    return candidates[0].block.bloque;
  }

  function getBlock(bid) {
    return typeof CONFIGURACION_CURSO !== 'undefined'
      ? CONFIGURACION_CURSO.find(b => b.bloque === bid)
      : null;
  }

  function getPdfManifestMatches(fileName) {
    if (typeof PDF_T3_URLS === 'undefined') return [];

    const normalizedFile = normalizeText(fileName);
    const currentBid = window.currentBid || '';

    return Object.entries(PDF_T3_URLS).flatMap(([bid, urls]) => {
      const block = getBlock(bid);
      return Object.entries(urls).map(([idx, url]) => {
        const pdfName = fileBaseName(url);
        const normalizedPdfName = normalizeText(pdfName);
        const normalizedPdfTitle = normalizeText(fileNameWithoutExtension(pdfName));
        const blockWords = keywordSet(block ? block.titulo_boton : bid);
        const pdfWords = keywordSet(pdfName);
        const commonPdfWords = pdfWords.filter(word => normalizedFile.includes(word)).length;
        const commonBlockWords = blockWords.filter(word => normalizedFile.includes(word)).length;
        let score = 0;

        if (normalizedFile === normalizedPdfName || normalizedFile === normalizedPdfTitle) score += 120;
        if (normalizedFile.includes(normalizedPdfTitle)) score += 50;
        score += commonPdfWords * 4;
        score += commonBlockWords * 3;
        if (bid === currentBid) score += 8;

        return {
          bid,
          idx: Number(idx),
          score,
          url,
          block
        };
      });
    }).filter(match => match.score > 0);
  }

  function findBestPdfManifestMatch(fileName) {
    const matches = getPdfManifestMatches(fileName).sort((a, b) => b.score - a.score);
    if (!matches.length || matches[0].score < 12) return null;

    const [best, second] = matches;
    if (second && best.score === second.score && best.bid !== (window.currentBid || '')) return null;
    if (!best.block || !best.block.asignaturas[best.idx]) return null;

    return {
      bid: best.bid,
      idx: best.idx,
      key: pdfKey(best.bid, best.idx),
      subject: best.block.titulo_boton,
      topic: best.block.asignaturas[best.idx].nombre
    };
  }

  function findAnnexIndex(block, fileName) {
    if (!block || !isAnnex(fileName)) return null;
    const annexIndex = block.asignaturas.findIndex(asig => /\b(anx|anexo)\b/.test(normalizeText(asig.nombre)));
    return annexIndex > -1 ? annexIndex : null;
  }

  function identifyPdf(file) {
    const manifestMatch = findBestPdfManifestMatch(file.name);
    if (manifestMatch) return manifestMatch;

    const unit = detectUnit(file.name);

    let bid = detectBlock(file.name);
    if (!bid && window.currentBid) bid = window.currentBid;
    if (!bid && unit) bid = findBestBlockForFile(file.name, unit);
    if (!bid && unit) bid = findBlockForUnit(unit);
    if (!bid) return null;

    const block = getBlock(bid);
    const idx = unit || findAnnexIndex(block, file.name);

    if (!block || !idx || !block.asignaturas[idx]) return null;

    return {
      bid,
      idx,
      key: pdfKey(bid, idx),
      subject: block.titulo_boton,
      topic: block.asignaturas[idx].nombre
    };
  }

  function getLocalPdfInfo(bid, idx) {
    const manifest = loadManifest();
    return manifest[pdfKey(bid, idx)] || null;
  }

  function getPdfButtonHtml(bid, idx) {
    const local = getLocalPdfInfo(bid, idx);
    const fallback = typeof PDF_T3_URLS !== 'undefined' && PDF_T3_URLS[bid] && PDF_T3_URLS[bid][idx];
    if (!local && !fallback) return '';

    const isProjectPdf = typeof fallback === 'string' && fallback.startsWith('pdfs/');
    const label = isProjectPdf ? '📄 Ver PDF del tema' : local ? '📄 Abrir PDF del iPad' : '📄 Ver PDF del tema';
    const title = isProjectPdf ? 'Abrir PDF del proyecto' : local ? `PDF local: ${local.name}` : 'Abrir PDF online';

    return `
      <button class="btn-outline" title="${title}" onclick="abrirPdfTema('${bid}', ${idx})" style="text-align:center; display:block; color:#16a34a; border-color:#16a34a; font-weight:600;">
        ${label}
      </button>
    `;
  }

  function ensureViewerStyles() {
    if (document.getElementById('pdf-local-viewer-styles')) return;

    const style = document.createElement('style');
    style.id = 'pdf-local-viewer-styles';
    style.textContent = `
      .pdf-viewer-shell {
        position: fixed;
        inset: 0;
        z-index: 99999;
        background: #111827;
        color: white;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100dvh;
        padding-top: env(safe-area-inset-top);
        padding-bottom: env(safe-area-inset-bottom);
        overflow: hidden;
      }
      .pdf-viewer-toolbar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px;
        background: #0f172a;
        border-bottom: 1px solid rgba(255,255,255,0.12);
        overflow-x: auto;
        flex-shrink: 0;
      }
      .pdf-viewer-title {
        font-weight: 800;
        font-size: 0.9rem;
        white-space: nowrap;
        max-width: 220px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: auto;
      }
      .pdf-tool-btn, .pdf-color-btn {
        border: 1px solid rgba(255,255,255,0.18);
        border-radius: 8px;
        background: rgba(255,255,255,0.08);
        color: white;
        padding: 0;
        font-weight: 700;
        white-space: nowrap;
        width: 38px;
        height: 38px;
        min-width: 38px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1.05rem;
      }
      .pdf-tool-btn.active {
        background: #2563eb;
        border-color: #60a5fa;
      }
      .pdf-zoom-btn {
        width: 54px;
        min-width: 54px;
        font-size: 0.82rem;
      }
      .pdf-eraser-icon {
        width: 22px;
        height: 22px;
        display: block;
      }
      .pdf-size-btn {
        width: 34px;
        min-width: 34px;
        height: 34px;
      }
      .pdf-size-dot { display: block; border-radius: 999px; background: currentColor; }
      .pdf-pen-settings[hidden] { display: none; }
      .pdf-pen-settings { display: flex; align-items: center; gap: 4px; }
      .pdf-color-btn {
        width: 32px;
        min-width: 32px;
        height: 32px;
      }
      .pdf-color-btn.active {
        outline: 3px solid white;
      }
      .pdf-color-btn { border-radius: 50%; }
      .pdf-color-btn[hidden] { display: none; }
      .pdf-viewer-pages {
        overflow: auto;
        flex: 1;
        min-height: 0;
        padding: 18px 10px 40px;
        -webkit-overflow-scrolling: touch;
        touch-action: pan-x pan-y;
        overscroll-behavior: contain;
      }
      .pdf-pages-zoom {
        width: max-content;
        min-width: 100%;
        margin: 0 auto;
      }
      .pdf-page-wrap {
        position: relative;
        margin: 0 auto 18px;
        background: white;
        box-shadow: 0 12px 35px rgba(0,0,0,0.35);
      }
      .pdf-page-wrap canvas {
        display: block;
      }
      .pdf-draw-layer {
        position: absolute;
        inset: 0;
        touch-action: pan-y;
        cursor: crosshair;
        pointer-events: none;
      }
      .pdf-draw-layer[data-tool="pen"] { pointer-events: auto; }
      .pdf-draw-layer[data-tool="eraser"] {
        pointer-events: auto;
        touch-action: none;
        cursor: cell;
      }
      .pdf-text-layer {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        line-height: 1;
        text-align: initial;
        transform-origin: 0 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
      }
      .pdf-text-layer[data-tool="highlight"] {
        pointer-events: auto;
        touch-action: pan-y;
        user-select: text;
        -webkit-user-select: text;
        cursor: text;
      }
      .pdf-text-layer :is(span, br) {
        color: transparent;
        position: absolute;
        white-space: pre;
        transform-origin: 0 0;
      }
      .pdf-text-layer[data-tool="highlight"] span {
        user-select: text;
        -webkit-user-select: text;
        cursor: text;
      }
      .pdf-text-layer ::selection { background: rgba(45, 107, 204, 0.35); }
      .pdf-viewer-loading {
        padding: 24px;
        text-align: center;
        color: rgba(255,255,255,0.8);
        font-weight: 700;
      }
      @media (max-width: 640px) {
        .pdf-viewer-toolbar {
          flex-wrap: wrap;
          overflow-x: visible;
          gap: 6px;
          padding: 8px;
        }
        .pdf-viewer-title {
          max-width: 120px;
          min-width: 0;
          flex: 1 1 60px;
        }
        .pdf-viewer-toolbar [data-tool] { order: 0; }
        .pdf-viewer-toolbar [data-action="close"] { order: 1; margin-left: auto; }
        .pdf-viewer-toolbar :is(.pdf-pen-settings, .pdf-color-btn, .pdf-zoom-btn) { order: 2; }
        .pdf-viewer-toolbar [data-action="zoom-in"],
        .pdf-viewer-toolbar [data-action="zoom-out"] { display: none; }
        .pdf-tool-btn { font-size: 0.85rem; }
      }
    `;
    document.head.appendChild(style);
  }

  function loadPdfJs() {
    if (!pdfjsPromise) {
      pdfjsPromise = import(PDFJS_URL).then(pdfjs => {
        pdfjs.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL;
        return pdfjs;
      });
    }
    return pdfjsPromise;
  }

  function getPointerPoint(event, canvas) {
    const rect = canvas.getBoundingClientRect();
    const x = rect.width ? (event.clientX - rect.left) / rect.width : 0;
    const y = rect.height ? (event.clientY - rect.top) / rect.height : 0;
    return {
      x: Math.max(0, Math.min(1, x)),
      y: Math.max(0, Math.min(1, y))
    };
  }

  function drawStroke(ctx, stroke, width, height) {
    if (stroke.type === 'highlight') {
      ctx.save();
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = stroke.color;
      (stroke.rects || []).forEach(rect => {
        ctx.fillRect(rect.x * width, rect.y * height, rect.width * width, rect.height * height);
      });
      ctx.restore();
      return;
    }
    if (!stroke.points || stroke.points.length < 2) return;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'multiply';
    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = stroke.width;
    ctx.beginPath();
    stroke.points.forEach((point, index) => {
      const x = point.x * width;
      const y = point.y * height;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.restore();
  }

  function redrawAnnotations(canvas, strokes) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokes.forEach(stroke => drawStroke(ctx, stroke, canvas.width, canvas.height));
  }

  function distanceToSegmentPx(point, start, end, canvas) {
    const px = point.x * canvas.width;
    const py = point.y * canvas.height;
    const sx = start.x * canvas.width;
    const sy = start.y * canvas.height;
    const ex = end.x * canvas.width;
    const ey = end.y * canvas.height;
    const dx = ex - sx;
    const dy = ey - sy;
    const lengthSquared = dx * dx + dy * dy;

    if (!lengthSquared) {
      const pointDx = px - sx;
      const pointDy = py - sy;
      return Math.sqrt(pointDx * pointDx + pointDy * pointDy);
    }

    const t = Math.max(0, Math.min(1, ((px - sx) * dx + (py - sy) * dy) / lengthSquared));
    const closestX = sx + t * dx;
    const closestY = sy + t * dy;
    const closestDx = px - closestX;
    const closestDy = py - closestY;
    return Math.sqrt(closestDx * closestDx + closestDy * closestDy);
  }

  function erasePointFromStrokes(point, strokes, canvas, state) {
    const radiusPx = Math.max(18, state.width * 1.25);
    return strokes.filter(stroke => {
      if (stroke.type === 'highlight') {
        return !(stroke.rects || []).some(rect =>
          point.x >= rect.x - radiusPx / canvas.width &&
          point.x <= rect.x + rect.width + radiusPx / canvas.width &&
          point.y >= rect.y - radiusPx / canvas.height &&
          point.y <= rect.y + rect.height + radiusPx / canvas.height
        );
      }
      const points = stroke.points || [];
      return !points.slice(1).some((end, index) =>
        distanceToSegmentPx(point, points[index], end, canvas) <= radiusPx + (stroke.width || 0) / 2
      );
    });
  }

  function createToolbar(info, state, actions) {
    const toolbar = document.createElement('div');
    toolbar.className = 'pdf-viewer-toolbar';
    toolbar.innerHTML = `
      <div class="pdf-viewer-title">${info.topic || info.name || 'PDF'}</div>
      <button class="pdf-tool-btn active" data-tool="pan" title="Moverse por el PDF" aria-label="Mano">✋</button>
      <button class="pdf-tool-btn" data-tool="pen" title="Dibujar con lápiz" aria-label="Lápiz">✏️</button>
      <button class="pdf-tool-btn" data-tool="highlight" title="Seleccionar texto para subrayar" aria-label="Subrayador">🖍️</button>
      <button class="pdf-tool-btn" data-tool="eraser" title="Borrar" aria-label="Borrar">
        <svg class="pdf-eraser-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m3.3 14.4 8.9-9a2.4 2.4 0 0 1 3.4 0l4.1 4.1a2.4 2.4 0 0 1 0 3.4L11.6 21H8.2l-4.9-4.9a1.2 1.2 0 0 1 0-1.7Z" fill="#f472b6" stroke="white" stroke-width="1.4" stroke-linejoin="round"/>
          <path d="m7.2 10.5 6.3 6.3-4.2 4.2H8.2l-4.9-4.9a1.2 1.2 0 0 1 0-1.7Z" fill="white"/>
          <path d="m7.2 10.5 6.3 6.3" fill="none" stroke="#9d174d" stroke-width="1.2"/>
        </svg>
      </button>
      <span class="pdf-pen-settings" hidden>
        <button class="pdf-tool-btn pdf-size-btn" data-width="8" title="Punta fina"><span class="pdf-size-dot" style="width:6px;height:6px;"></span></button>
        <button class="pdf-tool-btn pdf-size-btn active" data-width="18" title="Punta media"><span class="pdf-size-dot" style="width:12px;height:12px;"></span></button>
        <button class="pdf-tool-btn pdf-size-btn" data-width="30" title="Punta gorda"><span class="pdf-size-dot" style="width:18px;height:18px;"></span></button>
      </span>
      <button class="pdf-color-btn active" data-color="rgba(255,235,59,0.50)" style="background:#fde047;" title="Amarillo intenso" aria-label="Amarillo intenso"></button>
      <button class="pdf-color-btn" data-color="rgba(255,235,59,0.20)" style="background:#fef9c3;" title="Amarillo suave" aria-label="Amarillo suave"></button>
      <button class="pdf-color-btn" data-color="rgba(34,197,94,0.38)" style="background:#22c55e;" title="Verde intenso" aria-label="Verde intenso"></button>
      <button class="pdf-color-btn" data-color="rgba(34,197,94,0.18)" style="background:#bbf7d0;" title="Verde suave" aria-label="Verde suave"></button>
      <button class="pdf-color-btn" data-color="rgba(59,130,246,0.38)" style="background:#3b82f6;" title="Azul intenso" aria-label="Azul intenso"></button>
      <button class="pdf-color-btn" data-color="rgba(59,130,246,0.18)" style="background:#bfdbfe;" title="Azul suave" aria-label="Azul suave"></button>
      <button class="pdf-color-btn" data-color="rgba(239,68,68,0.38)" style="background:#ef4444;" title="Rojo intenso" aria-label="Rojo intenso"></button>
      <button class="pdf-color-btn" data-color="rgba(239,68,68,0.18)" style="background:#fecaca;" title="Rojo suave" aria-label="Rojo suave"></button>
      <button class="pdf-tool-btn" data-action="zoom-out" title="Alejar" aria-label="Alejar">−</button>
      <button class="pdf-tool-btn pdf-zoom-btn" data-action="zoom-reset" title="Restablecer zoom" aria-label="Restablecer zoom">100%</button>
      <button class="pdf-tool-btn" data-action="zoom-in" title="Acercar" aria-label="Acercar">+</button>
      <button class="pdf-tool-btn" data-action="close" title="Cerrar" aria-label="Cerrar">×</button>
    `;

    const updateSettings = () => {
      toolbar.querySelector('.pdf-pen-settings').hidden = state.tool !== 'pen';
      toolbar.querySelectorAll('[data-color]').forEach(btn => {
        btn.hidden = state.tool === 'pan' || state.tool === 'eraser';
      });
    };
    updateSettings();

    toolbar.querySelectorAll('[data-tool]').forEach(button => {
      button.addEventListener('click', () => {
        state.tool = button.dataset.tool;
        toolbar.querySelectorAll('[data-tool]').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        window.getSelection()?.removeAllRanges();
        updateSettings();
        actions.updateToolState();
      });
    });

    toolbar.querySelectorAll('[data-width]').forEach(button => {
      button.addEventListener('click', () => {
        state.width = Number(button.dataset.width);
        toolbar.querySelectorAll('[data-width]').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });

    toolbar.querySelectorAll('[data-color]').forEach(button => {
      button.addEventListener('click', () => {
        state.color = button.dataset.color;
        toolbar.querySelectorAll('[data-color]').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });

    toolbar.querySelector('[data-action="close"]').addEventListener('click', actions.close);
    toolbar.querySelector('[data-action="zoom-in"]').addEventListener('click', () => actions.setZoom(state.zoom + 0.15, actions.getViewportCenter()));
    toolbar.querySelector('[data-action="zoom-out"]').addEventListener('click', () => actions.setZoom(state.zoom - 0.15, actions.getViewportCenter()));
    toolbar.querySelector('[data-action="zoom-reset"]').addEventListener('click', () => actions.setZoom(1, actions.getViewportCenter()));
    return toolbar;
  }

  function clampZoom(value) {
    return Math.max(0.75, Math.min(3, value));
  }

  function distanceBetweenTouches(touchA, touchB) {
    const dx = touchA.clientX - touchB.clientX;
    const dy = touchA.clientY - touchB.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function getTouchCenter(touchA, touchB) {
    return {
      clientX: (touchA.clientX + touchB.clientX) / 2,
      clientY: (touchA.clientY + touchB.clientY) / 2
    };
  }

  function attachPinchZoom(pagesContainer, zoomSurface, state, actions) {
    let startDistance = 0;
    let startZoom = 1;

    pagesContainer.addEventListener('touchstart', event => {
      if (event.touches.length !== 2) return;
      startDistance = distanceBetweenTouches(event.touches[0], event.touches[1]);
      startZoom = state.zoom;
    }, { passive: true });

    pagesContainer.addEventListener('touchmove', event => {
      if (event.touches.length !== 2 || !startDistance) return;
      event.preventDefault();
      const nextDistance = distanceBetweenTouches(event.touches[0], event.touches[1]);
      actions.setZoom(startZoom * (nextDistance / startDistance), getTouchCenter(event.touches[0], event.touches[1]));
    }, { passive: false });

    pagesContainer.addEventListener('touchend', event => {
      if (event.touches.length < 2) startDistance = 0;
    }, { passive: true });

    pagesContainer.addEventListener('wheel', event => {
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      actions.setZoom(state.zoom + (event.deltaY < 0 ? 0.1 : -0.1), {
        clientX: event.clientX,
        clientY: event.clientY
      });
    }, { passive: false });
  }

  function applyPageZoom(zoomSurface, zoom) {
    zoomSurface.querySelectorAll('.pdf-page-wrap').forEach(wrap => {
      const baseWidth = Number(wrap.dataset.baseWidth);
      const baseHeight = Number(wrap.dataset.baseHeight);
      if (!baseWidth || !baseHeight) return;

      const width = Math.round(baseWidth * zoom);
      const height = Math.round(baseHeight * zoom);
      wrap.style.width = `${width}px`;
      wrap.style.height = `${height}px`;

      wrap.querySelectorAll('canvas').forEach(canvas => {
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      });
      const textLayer = wrap.querySelector('.pdf-text-layer');
      if (textLayer) textLayer.style.transform = `scale(${zoom})`;
    });
  }

  function attachDrawing(canvas, pageNumber, state, annotations, key) {
    const save = () => saveAnnotations(key, annotations);

    let activeStroke = null;
    let pointerId = null;
    let pointerStart = null;

    function ensurePage() {
      if (!annotations[pageNumber]) annotations[pageNumber] = [];
      return annotations[pageNumber];
    }

    function discardDraftStroke() {
      if (activeStroke) {
        annotations[pageNumber] = ensurePage().filter(stroke => stroke !== activeStroke);
      }
      activeStroke = null;
      pointerId = null;
      pointerStart = null;
    }

    function isVerticalScrollIntent(start, point, canvas) {
      const dx = Math.abs((point.x - start.x) * canvas.width);
      const dy = Math.abs((point.y - start.y) * canvas.height);
      return dy > 14 && dy > dx * 1.25;
    }

    canvas.addEventListener('pointerdown', event => {
      if (state.tool !== 'pen' && state.tool !== 'eraser') return;
      pointerId = event.pointerId;
      if (state.tool === 'eraser' || event.pointerType !== 'touch') {
        event.preventDefault();
        canvas.setPointerCapture(pointerId);
      }
      state.currentPage = pageNumber;

      const point = getPointerPoint(event, canvas);
      pointerStart = point;
      if (state.tool === 'eraser') {
        annotations[pageNumber] = erasePointFromStrokes(point, ensurePage(), canvas, state);
        redrawAnnotations(canvas, annotations[pageNumber]);
        save();
        return;
      }

      activeStroke = {
        color: state.color,
        width: state.width,
        points: [point]
      };
      ensurePage().push(activeStroke);
    });

    canvas.addEventListener('pointermove', event => {
      if (event.pointerId !== pointerId) return;
      const point = getPointerPoint(event, canvas);

      if (state.tool === 'pen' && event.pointerType === 'touch' && pointerStart && isVerticalScrollIntent(pointerStart, point, canvas)) {
        discardDraftStroke();
        return;
      }

      event.preventDefault();

      if (state.tool === 'eraser') {
        annotations[pageNumber] = erasePointFromStrokes(point, ensurePage(), canvas, state);
        redrawAnnotations(canvas, annotations[pageNumber]);
        save();
        return;
      }

      if (!activeStroke) return;
      activeStroke.points.push(point);
      redrawAnnotations(canvas, annotations[pageNumber]);
    });

    function finish(event) {
      if (event.pointerId !== pointerId) return;
      if (activeStroke && activeStroke.points.length < 2) {
        annotations[pageNumber] = ensurePage().filter(stroke => stroke !== activeStroke);
      }
      activeStroke = null;
      pointerId = null;
      pointerStart = null;
      save();
    }

    canvas.addEventListener('pointerup', finish);
    canvas.addEventListener('pointercancel', finish);
  }

  function attachTextHighlighter(shell, pagesContainer, state, annotations, key) {
    let drag = null;

    function findTextSpan(layer, x, y) {
      let closest = null;
      let closestDistance = Infinity;
      layer.querySelectorAll('span').forEach(span => {
        if (!span.textContent.trim()) return;
        const rect = span.getBoundingClientRect();
        const dx = Math.max(rect.left - x, x - rect.right, 0);
        const dy = Math.max(rect.top - y, y - rect.bottom, 0);
        const distance = dx + dy;
        if (dx <= 8 && dy <= 8 && distance < closestDistance) {
          closest = rect;
          closestDistance = distance;
        }
      });
      return closest;
    }

    function dragRects(clientX) {
      const pageRect = drag.canvas.getBoundingClientRect();
      const lineLeft = Math.min(...drag.lineRects.map(rect => rect.left));
      const lineRight = Math.max(...drag.lineRects.map(rect => rect.right));
      const left = Math.max(pageRect.left, lineLeft, Math.min(drag.x, clientX));
      const right = Math.min(pageRect.right, lineRight, Math.max(drag.x, clientX));
      if (right - left < 3) return [];

      return [{
        x: (left - pageRect.left) / pageRect.width,
        y: (drag.lineRect.top - pageRect.top) / pageRect.height,
        width: (right - left) / pageRect.width,
        height: drag.lineRect.height / pageRect.height
      }];
    }

    function mergeLineRects(rects) {
      const lines = [];
      rects.sort((a, b) => a.y - b.y || a.x - b.x).forEach(rect => {
        const line = lines.find(item => Math.abs((item.y + item.height / 2) - (rect.y + rect.height / 2)) <= Math.min(item.height, rect.height) * 0.4);
        if (!line) {
          lines.push({ ...rect });
          return;
        }
        const right = Math.max(line.x + line.width, rect.x + rect.width);
        const bottom = Math.max(line.y + line.height, rect.y + rect.height);
        line.x = Math.min(line.x, rect.x);
        line.y = Math.min(line.y, rect.y);
        line.width = right - line.x;
        line.height = bottom - line.y;
      });
      return lines;
    }

    function redrawDrag(rects) {
      const saved = annotations[drag.canvas.dataset.page] || [];
      const strokes = rects.length ? [...saved, { type: 'highlight', color: state.color, rects }] : saved;
      redrawAnnotations(drag.canvas, strokes);
    }

    function finishDrag(event, save) {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const rects = save ? dragRects(event.clientX) : [];
      const canvas = drag.canvas;
      if (rects.length) {
        const pageNumber = canvas.dataset.page;
        if (!annotations[pageNumber]) annotations[pageNumber] = [];
        annotations[pageNumber].push({ type: 'highlight', color: state.color, rects });
        state.currentPage = Number(pageNumber);
        saveAnnotations(key, annotations);
      }
      drag = null;
      redrawAnnotations(canvas, annotations[canvas.dataset.page] || []);
    }

    function saveSelection() {
      if (state.tool !== 'highlight') return;
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || !selection.toString().trim()) return;
      const anchor = selection.anchorNode?.parentElement?.closest('.pdf-text-layer');
      const focus = selection.focusNode?.parentElement?.closest('.pdf-text-layer');
      if (!anchor || !focus || !shell.contains(anchor) || !shell.contains(focus)) return;

      const selectedRects = [...selection.getRangeAt(0).getClientRects()];
      let saved = false;
      shell.querySelectorAll('.pdf-draw-layer').forEach(canvas => {
        const pageRect = canvas.getBoundingClientRect();
        const rects = mergeLineRects(selectedRects.map(rect => {
          const left = Math.max(rect.left, pageRect.left);
          const right = Math.min(rect.right, pageRect.right);
          const top = Math.max(rect.top, pageRect.top);
          const bottom = Math.min(rect.bottom, pageRect.bottom);
          if (right - left < 2 || bottom - top < 2) return null;
          return {
            x: (left - pageRect.left) / pageRect.width,
            y: (top - pageRect.top) / pageRect.height,
            width: (right - left) / pageRect.width,
            height: (bottom - top) / pageRect.height
          };
        }).filter(Boolean));
        if (!rects.length) return;

        const pageNumber = canvas.dataset.page;
        if (!annotations[pageNumber]) annotations[pageNumber] = [];
        annotations[pageNumber].push({ type: 'highlight', color: state.color, rects });
        redrawAnnotations(canvas, annotations[pageNumber]);
        state.currentPage = Number(pageNumber);
        saved = true;
      });

      if (saved) {
        saveAnnotations(key, annotations);
        selection.removeAllRanges();
      }
    }

    pagesContainer.addEventListener('pointerup', event => {
      if (state.tool === 'highlight' && event.pointerType === 'mouse') requestAnimationFrame(saveSelection);
    });

    pagesContainer.addEventListener('pointerdown', event => {
      if (state.tool !== 'highlight' || !['touch', 'pen'].includes(event.pointerType)) return;
      if (!event.isPrimary) {
        if (drag) finishDrag({ pointerId: drag.pointerId }, false);
        return;
      }
      const layer = event.target.closest('.pdf-text-layer');
      if (!layer) return;
      const startRect = findTextSpan(layer, event.clientX, event.clientY);
      if (!startRect) return;
      const canvas = layer.parentElement.querySelector('.pdf-draw-layer');
      const lineY = startRect.top + startRect.height / 2;
      const lineRects = [...layer.querySelectorAll('span')]
        .filter(span => span.textContent.trim())
        .map(span => span.getBoundingClientRect())
        .filter(rect => Math.abs(rect.top + rect.height / 2 - lineY) <= Math.max(8, startRect.height * 0.55));
      if (event.pointerType === 'pen') event.preventDefault();
      window.getSelection()?.removeAllRanges();
      drag = { pointerId: event.pointerId, pointerType: event.pointerType, x: event.clientX, y: event.clientY, canvas, lineRects, lineRect: startRect };
    });

    shell.addEventListener('pointermove', event => {
      if (state.tool !== 'highlight' || !drag || event.pointerId !== drag.pointerId) return;
      if (drag.pointerType === 'touch' && Math.abs(event.clientY - drag.y) > 12 &&
          Math.abs(event.clientY - drag.y) > Math.abs(event.clientX - drag.x) * 1.25) {
        finishDrag(event, false);
        return;
      }
      event.preventDefault();
      redrawDrag(dragRects(event.clientX));
    });

    shell.addEventListener('pointerup', event => finishDrag(event, state.tool === 'highlight'));
    shell.addEventListener('pointercancel', event => finishDrag(event, false));
  }

  async function openAnnotatedPdfViewer(key, blob, info) {
    ensureViewerStyles();

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const bodyStyle = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      width: document.body.style.width,
      overflow: document.body.style.overflow
    };
    const rootOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    Object.assign(document.body.style, {
      position: 'fixed',
      top: `${-scrollY}px`,
      left: `${-scrollX}px`,
      width: '100%',
      overflow: 'hidden'
    });

    const shell = document.createElement('div');
    shell.className = 'pdf-viewer-shell';

    const pagesContainer = document.createElement('div');
    pagesContainer.className = 'pdf-viewer-pages';
    pagesContainer.innerHTML = '<div class="pdf-viewer-loading">Cargando PDF...</div>';
    const zoomSurface = document.createElement('div');
    zoomSurface.className = 'pdf-pages-zoom';

    const annotations = loadAnnotations(key);
    const state = {
      tool: 'pan',
      color: 'rgba(255,235,59,0.50)',
      width: 18,
      zoom: 1,
      currentPage: 1
    };

    const actions = {
      close: () => {
        shell.remove();
        Object.assign(document.body.style, bodyStyle);
        document.documentElement.style.overflow = rootOverflow;
        window.scrollTo(scrollX, scrollY);
      },
      updateToolState: () => {
        shell.querySelectorAll('.pdf-draw-layer').forEach(canvas => {
          canvas.dataset.tool = state.tool;
        });
        shell.querySelectorAll('.pdf-text-layer').forEach(layer => {
          layer.dataset.tool = state.tool;
        });
      },
      getViewportCenter: () => {
        const rect = pagesContainer.getBoundingClientRect();
        return {
          clientX: rect.left + rect.width / 2,
          clientY: rect.top + rect.height / 2
        };
      },
      setZoom: (value, anchor) => {
        const previousZoom = state.zoom;
        const nextZoom = clampZoom(value);
        const rect = pagesContainer.getBoundingClientRect();
        const anchorX = anchor ? anchor.clientX - rect.left : rect.width / 2;
        const anchorY = anchor ? anchor.clientY - rect.top : rect.height / 2;
        const scrollAnchorX = pagesContainer.scrollLeft + anchorX;
        const scrollAnchorY = pagesContainer.scrollTop + anchorY;

        state.zoom = nextZoom;
        applyPageZoom(zoomSurface, state.zoom);

        const zoomRatio = previousZoom ? nextZoom / previousZoom : 1;
        pagesContainer.scrollLeft = Math.max(0, scrollAnchorX * zoomRatio - anchorX);
        pagesContainer.scrollTop = Math.max(0, scrollAnchorY * zoomRatio - anchorY);

        const resetButton = shell.querySelector('[data-action="zoom-reset"]');
        if (resetButton) {
          resetButton.textContent = `${Math.round(state.zoom * 100)}%`;
          resetButton.title = `Restablecer zoom (${Math.round(state.zoom * 100)}%)`;
        }
      }
    };

    shell.appendChild(createToolbar(info, state, actions));
    shell.appendChild(pagesContainer);
    document.body.appendChild(shell);
    attachPinchZoom(pagesContainer, zoomSurface, state, actions);
    attachTextHighlighter(shell, pagesContainer, state, annotations, key);

    try {
      const pdfjs = await loadPdfJs();
      const data = await blob.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data }).promise;
      pagesContainer.innerHTML = '';
      pagesContainer.appendChild(zoomSurface);

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const baseViewport = page.getViewport({ scale: 1 });
        const availableWidth = Math.min(pagesContainer.clientWidth - 20, 980);
        const scale = Math.max(0.3, Math.min(1.7, availableWidth / baseViewport.width));
        const viewport = page.getViewport({ scale });

        const wrap = document.createElement('div');
        wrap.className = 'pdf-page-wrap';
        const pageWidth = Math.floor(viewport.width);
        const pageHeight = Math.floor(viewport.height);
        wrap.dataset.baseWidth = String(pageWidth);
        wrap.dataset.baseHeight = String(pageHeight);
        wrap.style.width = `${pageWidth}px`;
        wrap.style.height = `${pageHeight}px`;

        const pdfCanvas = document.createElement('canvas');
        const drawCanvas = document.createElement('canvas');
        const textLayer = document.createElement('div');
        const ratio = window.devicePixelRatio || 1;

        [pdfCanvas, drawCanvas].forEach(canvas => {
          canvas.width = Math.floor(viewport.width * ratio);
          canvas.height = Math.floor(viewport.height * ratio);
          canvas.style.width = `${pageWidth}px`;
          canvas.style.height = `${pageHeight}px`;
        });

        drawCanvas.className = 'pdf-draw-layer';
        drawCanvas.dataset.page = String(pageNumber);
        drawCanvas.dataset.tool = state.tool;
        textLayer.className = 'pdf-text-layer textLayer';
        textLayer.dataset.tool = state.tool;
        textLayer.style.width = `${pageWidth}px`;
        textLayer.style.height = `${pageHeight}px`;
        textLayer.style.setProperty('--scale-factor', String(viewport.scale));

        const renderContext = {
          canvasContext: pdfCanvas.getContext('2d'),
          viewport
        };
        if (ratio !== 1) renderContext.transform = [ratio, 0, 0, ratio, 0, 0];
        await page.render(renderContext).promise;

        wrap.appendChild(pdfCanvas);
        wrap.appendChild(drawCanvas);
        wrap.appendChild(textLayer);
        zoomSurface.appendChild(wrap);

        redrawAnnotations(drawCanvas, annotations[pageNumber] || []);
        attachDrawing(drawCanvas, String(pageNumber), state, annotations, key);
        try {
          await new pdfjs.TextLayer({
            textContentSource: page.streamTextContent(),
            container: textLayer,
            viewport
          }).render();
        } catch (error) {
          console.warn('No se pudo activar la selección de texto en esta página:', error);
          textLayer.remove();
        }
      }
    } catch (error) {
      console.error('Error abriendo visor PDF:', error);
      pagesContainer.innerHTML = `
        <div class="pdf-viewer-loading">
          No se pudo abrir el visor editable. Revisa la conexión e inténtalo otra vez.
        </div>
      `;
      if (typeof showToast === 'function') {
        showToast('error', 'No se pudo abrir el PDF', 'El visor necesita cargar el motor PDF la primera vez.');
      }
    }
  }

  async function openLocalPdf(bid, idx) {
    const key = pdfKey(bid, idx);
    const blob = await getBlob(key);
    if (!blob) return false;

    const info = getLocalPdfInfo(bid, idx) || {};
    await openAnnotatedPdfViewer(key, blob, info);
    return true;
  }

  async function openProjectPdf(bid, idx, url) {
    const offlineKey = offlinePdfKey(url);
    const urlCandidates = uniqueValues([
      url,
      String(url).normalize('NFC'),
      String(url).normalize('NFD')
    ]);

    let response = null;
    let lastStatus = 'sin respuesta';
    for (const candidate of urlCandidates) {
      response = await fetch(encodeURI(candidate));
      if (response.ok) {
        url = candidate;
        break;
      }
      lastStatus = response.status;
    }

    if (!response || !response.ok) throw new Error(`PDF del proyecto no encontrado: ${lastStatus}`);

    if (navigator.onLine && 'caches' in window) {
      try {
        const cache = await caches.open(PDF_OFFLINE_CACHE);
        await cache.put(offlineKey, response.clone());
        refreshOfflinePdfStatus().catch(() => {});
      } catch (error) {
        console.warn('No se pudo guardar este PDF sin conexión:', error);
      }
    }

    const blob = await response.blob();
    const block = getBlock(bid);
    const topic = block && block.asignaturas[idx] ? block.asignaturas[idx].nombre : 'PDF del tema';

    await openAnnotatedPdfViewer(pdfKey(bid, idx), blob, {
      name: url.split('/').pop() || 'PDF',
      subject: block ? block.titulo_boton : '',
      topic
    });
  }

  async function abrirPdfTema(bid, idx) {
    const fallback = typeof PDF_T3_URLS !== 'undefined' && PDF_T3_URLS[bid] && PDF_T3_URLS[bid][idx];
    if (fallback) {
      try {
        await openProjectPdf(bid, idx, fallback);
        return;
      } catch (error) {
        console.error('No se pudo abrir el PDF del proyecto:', error);
      }
    }

    try {
      const openedLocal = await openLocalPdf(bid, idx);
      if (openedLocal) return;
    } catch (error) {
      console.warn('No se pudo abrir el PDF local:', error);
    }

    if (typeof showToast === 'function') {
      showToast('error', 'PDF no encontrado', 'Importa los PDFs desde el iPad para este tema.');
    }
  }

  async function importLocalPdfs(files) {
    const list = Array.from(files || []).filter(file => file.type === 'application/pdf' || /\.pdf$/i.test(file.name));
    const manifest = loadManifest();
    const result = { imported: [], skipped: [] };

    for (const file of list) {
      const match = identifyPdf(file);
      if (!match) {
        result.skipped.push(file.name);
        continue;
      }

      await saveBlob(match.key, file);
      manifest[match.key] = {
        bid: match.bid,
        idx: match.idx,
        name: file.name,
        size: file.size,
        topic: match.topic,
        updatedAt: new Date().toISOString()
      };
      result.imported.push({ fileName: file.name, topic: match.topic });
    }

    saveManifest(manifest);
    return result;
  }

  function formatImportDetail(result) {
    const importedTopics = result.imported
      .slice(0, 4)
      .map(item => item.topic)
      .join(' · ');
    const skippedNames = result.skipped
      .slice(0, 3)
      .join(' · ');

    if (result.imported.length && result.skipped.length) {
      return `${result.imported.length} importados: ${importedTopics}. ${result.skipped.length} sin identificar: ${skippedNames}.`;
    }

    if (result.imported.length) {
      return `${result.imported.length} PDFs locales guardados: ${importedTopics}.`;
    }

    if (result.skipped.length) {
      return `No se identificaron. Abre primero la pestaña de la asignatura y vuelve a seleccionar: ${skippedNames}.`;
    }

    return 'No se seleccionó ningún PDF.';
  }

  function ensurePdfInput() {
    let input = document.getElementById('input-pdfs-locales');
    if (input) return input;

    input = document.createElement('input');
    input.id = 'input-pdfs-locales';
    input.type = 'file';
    input.accept = 'application/pdf,.pdf';
    input.multiple = true;
    input.style.display = 'none';
    input.addEventListener('change', async () => {
      const button = document.getElementById('btn-importar-pdfs');
      const originalText = button ? button.textContent : '';
      if (button) {
        button.disabled = true;
        button.textContent = 'Importando...';
      }

      try {
        const result = await importLocalPdfs(input.files);
        const detail = formatImportDetail(result);

        if (typeof showToast === 'function') {
          showToast(result.imported.length ? 'success' : 'error', 'Importación de PDFs', detail);
        } else {
          alert(detail);
        }

        if (window.currentBid && typeof filtrarBloque === 'function') filtrarBloque(window.currentBid);
      } catch (error) {
        console.error('Error importando PDFs locales:', error);
        if (typeof showToast === 'function') showToast('error', 'Error importando PDFs', error.message);
      } finally {
        input.value = '';
        if (button) {
          button.disabled = false;
          button.textContent = originalText;
        }
      }
    });

    document.body.appendChild(input);
    return input;
  }

  function abrirImportadorPdfs() {
    ensurePdfInput().click();
  }

  let offlineDownloadRunning = false;

  function projectPdfUrls() {
    if (typeof PDF_T3_URLS === 'undefined') return [];
    return [...new Set(Object.values(PDF_T3_URLS).flatMap(urls => Object.values(urls)))];
  }

  function offlinePdfKey(url) {
    return new URL(encodeURI(url), location.href).href;
  }

  async function refreshOfflinePdfStatus(message) {
    const button = document.getElementById('btn-offline-pdfs');
    const status = document.getElementById('offline-pdf-status');
    const progress = document.getElementById('offline-pdf-progress');
    if (!button || !status || !progress) return;

    const urls = projectPdfUrls();
    if (!('caches' in window) || !urls.length) {
      button.disabled = true;
      status.textContent = 'La descarga sin conexión no está disponible en este navegador.';
      status.hidden = false;
      return;
    }

    const cache = await caches.open(PDF_OFFLINE_CACHE);
    const matches = await Promise.all(urls.map(url => cache.match(offlinePdfKey(url))));
    const saved = matches.filter(Boolean).length;
    button.disabled = offlineDownloadRunning || !navigator.onLine;
    button.textContent = saved === urls.length ? '✓ PDFs guardados' : '⬇ PDFs sin conexión';
    progress.max = urls.length;
    progress.value = saved;
    progress.hidden = !offlineDownloadRunning;
    status.textContent = message || (saved === urls.length
      ? `${saved} PDFs listos sin conexión`
      : !navigator.onLine
        ? `${saved}/${urls.length} PDFs guardados. Conéctate para descargar el resto.`
        : saved ? `${saved}/${urls.length} PDFs guardados` : '');
    status.hidden = !status.textContent;
  }

  async function prepararPdfsOffline() {
    if (offlineDownloadRunning) return;
    if (!navigator.onLine) {
      await refreshOfflinePdfStatus();
      return;
    }

    offlineDownloadRunning = true;
    const urls = projectPdfUrls();
    let failed = 0;
    let storageFull = false;
    try {
      const cache = await caches.open(PDF_OFFLINE_CACHE);
      for (let index = 0; index < urls.length; index += 1) {
        const url = urls[index];
        const key = offlinePdfKey(url);
        await refreshOfflinePdfStatus(`Guardando PDFs: ${index + 1}/${urls.length}`);
        if (await cache.match(key)) continue;

        try {
          let response = null;
          for (const candidate of uniqueValues([url, url.normalize('NFC'), url.normalize('NFD')])) {
            const result = await fetch(encodeURI(candidate), { cache: 'no-store' });
            if (result.ok && result.headers.get('content-type')?.includes('pdf')) {
              response = result;
              break;
            }
          }
          if (!response) throw new Error(`PDF no disponible: ${url}`);
          await cache.put(key, response);
        } catch (error) {
          console.warn('No se pudo guardar el PDF:', url, error);
          failed += 1;
          if (error.name === 'QuotaExceededError') {
            storageFull = true;
            break;
          }
        }
      }
    } catch (error) {
      console.error('Error preparando PDFs sin conexión:', error);
      failed += 1;
      storageFull = error.name === 'QuotaExceededError';
    } finally {
      offlineDownloadRunning = false;
      await refreshOfflinePdfStatus(storageFull ? 'Sin espacio suficiente para guardar todos los PDFs.' : '');
      if (typeof showToast === 'function') {
        showToast(failed ? 'error' : 'success', failed ? 'Descarga incompleta' : 'PDFs guardados',
          storageFull ? 'Libera espacio en el iPad y vuelve a intentarlo.'
            : failed ? `No se pudieron guardar ${failed} PDFs. Vuelve a intentarlo con internet.`
              : 'Ya puedes abrir los PDFs sin conexión.');
      }
    }
  }

  window.addEventListener('online', () => refreshOfflinePdfStatus());
  window.addEventListener('offline', () => refreshOfflinePdfStatus());
  refreshOfflinePdfStatus().catch(error => console.warn('Estado offline no disponible:', error));

  window.PDF_LOCAL_STORE = {
    getLocalPdfInfo,
    getPdfButtonHtml,
    importLocalPdfs,
    identifyPdf,
    abrirPdfTema,
    abrirImportadorPdfs,
    prepararPdfsOffline
  };

  window.getPdfButtonHtml = getPdfButtonHtml;
  window.abrirPdfTema = abrirPdfTema;
  window.abrirImportadorPdfs = abrirImportadorPdfs;
  window.prepararPdfsOffline = prepararPdfsOffline;
})();
