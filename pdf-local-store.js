(function () {
  const DB_NAME = 'universae_local_pdfs';
  const DB_VERSION = 1;
  const STORE_NAME = 'pdfs';
  const MANIFEST_KEY = 'universae_local_pdf_manifest';
  const ANNOTATIONS_PREFIX = 'universae_pdf_annotations:';
  const PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.mjs';
  const PDFJS_WORKER_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.mjs';
  let pdfjsPromise = null;

  const TOPIC_ALIASES = {
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

  function detectUnit(fileName) {
    const normalized = normalizeText(fileName);
    const match = normalized.match(/\bu\s*([0-9]{1,2})\b/) || normalized.match(/\bunidad\s*([0-9]{1,2})\b/);
    return match ? Number(match[1]) : null;
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

  function identifyPdf(file) {
    const unit = detectUnit(file.name);
    if (!unit) return null;

    let bid = detectBlock(file.name);
    if (!bid) bid = findBestBlockForFile(file.name, unit);
    if (!bid) bid = findBlockForUnit(unit);
    if (!bid) return null;

    const block = typeof CONFIGURACION_CURSO !== 'undefined'
      ? CONFIGURACION_CURSO.find(b => b.bloque === bid)
      : null;

    if (!block || !block.asignaturas[unit]) return null;

    return {
      bid,
      idx: unit,
      key: pdfKey(bid, unit),
      subject: block.titulo_boton,
      topic: block.asignaturas[unit].nombre
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
    const label = local ? '📄 Abrir PDF del iPad' : '📄 Ver PDF del tema';
    const title = local ? `PDF local: ${local.name}` : isProjectPdf ? 'Abrir PDF del proyecto' : 'Abrir PDF online';

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
        max-width: 260px;
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
      .pdf-toggle-btn.active {
        background: #16a34a;
        border-color: #86efac;
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
      .pdf-size-dot {
        display: block;
        border-radius: 999px;
        background: currentColor;
      }
      .pdf-color-btn {
        width: 32px;
        min-width: 32px;
        height: 32px;
      }
      .pdf-color-btn.active {
        outline: 3px solid white;
      }
      .pdf-viewer-pages {
        overflow: auto;
        flex: 1;
        padding: 18px 10px 40px;
        -webkit-overflow-scrolling: touch;
        touch-action: pan-x pan-y;
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
      }
      .pdf-draw-layer[data-tool="pan"] {
        pointer-events: none;
        cursor: grab;
      }
      .pdf-draw-layer[data-tool="eraser"] {
        touch-action: none;
        cursor: cell;
      }
      .pdf-viewer-loading {
        padding: 24px;
        text-align: center;
        color: rgba(255,255,255,0.8);
        font-weight: 700;
      }
      @media (max-width: 640px) {
        .pdf-viewer-title {
          max-width: 145px;
        }
        .pdf-tool-btn {
          font-size: 0.85rem;
        }
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

  function redrawWithPreview(canvas, strokes, previewStroke) {
    redrawAnnotations(canvas, strokes);
    if (previewStroke) {
      drawStroke(canvas.getContext('2d'), previewStroke, canvas.width, canvas.height);
    }
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

  function distanceBetweenPointsPx(point, strokePoint, canvas) {
    const dx = (point.x - strokePoint.x) * canvas.width;
    const dy = (point.y - strokePoint.y) * canvas.height;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function getSampledStrokePoints(stroke, canvas) {
    const points = stroke.points || [];
    if (points.length < 2) return points;

    const sampledPoints = [points[0]];
    points.slice(1).forEach((point, index) => {
      const previousPoint = points[index];
      const lengthPx = distanceBetweenPointsPx(previousPoint, point, canvas);
      const steps = Math.max(1, Math.ceil(lengthPx / 6));

      for (let step = 1; step <= steps; step += 1) {
        const t = step / steps;
        sampledPoints.push({
          x: previousPoint.x + (point.x - previousPoint.x) * t,
          y: previousPoint.y + (point.y - previousPoint.y) * t
        });
      }
    });

    return sampledPoints;
  }

  function erasePointFromStrokes(point, strokes, canvas, state) {
    const radiusPx = Math.max(18, state.width * 1.25);
    const remainingStrokes = [];

    strokes.forEach(stroke => {
      const points = getSampledStrokePoints(stroke, canvas);
      let currentPart = [];

      points.forEach(strokePoint => {
        if (distanceBetweenPointsPx(point, strokePoint, canvas) <= radiusPx) {
          if (currentPart.length >= 2) {
            remainingStrokes.push({ ...stroke, points: currentPart });
          }
          currentPart = [];
          return;
        }

        currentPart.push(strokePoint);
      });

      if (currentPart.length >= 2) {
        remainingStrokes.push({ ...stroke, points: currentPart });
      }
    });

    return remainingStrokes;
  }

  function createToolbar(info, state, actions) {
    const toolbar = document.createElement('div');
    toolbar.className = 'pdf-viewer-toolbar';
    toolbar.innerHTML = `
      <div class="pdf-viewer-title">${info.topic || info.name || 'PDF'}</div>
      <button class="pdf-tool-btn active" data-tool="pan" title="Moverse por el PDF" aria-label="Mano">✋</button>
      <button class="pdf-tool-btn" data-tool="pen" title="Subrayar con lápiz" aria-label="Lápiz">✏️</button>
      <button class="pdf-tool-btn" data-tool="eraser" title="Borrar" aria-label="Borrar">
        <svg class="pdf-eraser-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 16.5 13.5 7a2.8 2.8 0 0 1 4 0l1.5 1.5a2.8 2.8 0 0 1 0 4L11.5 20H5.8L4 18.2a1.2 1.2 0 0 1 0-1.7Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="m10 10 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M12 20h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <button class="pdf-tool-btn pdf-toggle-btn" data-action="straight" title="Ayuda de subrayado recto" aria-label="Ayuda recta">📏</button>
      <button class="pdf-tool-btn" data-action="zoom-out" title="Alejar">−</button>
      <button class="pdf-tool-btn pdf-zoom-btn" data-action="zoom-reset" title="Restablecer zoom" aria-label="Restablecer zoom">100%</button>
      <button class="pdf-tool-btn" data-action="zoom-in" title="Acercar">+</button>
      <button class="pdf-tool-btn pdf-size-btn" data-width="8" title="Punta fina"><span class="pdf-size-dot" style="width:6px;height:6px;"></span></button>
      <button class="pdf-tool-btn pdf-size-btn active" data-width="18" title="Punta media"><span class="pdf-size-dot" style="width:12px;height:12px;"></span></button>
      <button class="pdf-tool-btn pdf-size-btn" data-width="30" title="Punta gorda"><span class="pdf-size-dot" style="width:18px;height:18px;"></span></button>
      <button class="pdf-color-btn active" data-color="rgba(255,235,59,0.50)" style="background:#fde047;" title="Amarillo"></button>
      <button class="pdf-color-btn" data-color="rgba(34,197,94,0.38)" style="background:#22c55e;" title="Verde"></button>
      <button class="pdf-color-btn" data-color="rgba(59,130,246,0.38)" style="background:#3b82f6;" title="Azul"></button>
      <button class="pdf-color-btn" data-color="rgba(239,68,68,0.38)" style="background:#ef4444;" title="Rojo"></button>
      <button class="pdf-tool-btn" data-action="clear" title="Limpiar página" aria-label="Limpiar página">🧹</button>
      <button class="pdf-tool-btn" data-action="close" title="Cerrar" aria-label="Cerrar">×</button>
    `;

    toolbar.querySelectorAll('[data-tool]').forEach(button => {
      button.addEventListener('click', () => {
        state.tool = button.dataset.tool;
        toolbar.querySelectorAll('[data-tool]').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
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
        state.tool = 'pen';
        toolbar.querySelectorAll('[data-color]').forEach(btn => btn.classList.remove('active'));
        toolbar.querySelectorAll('[data-tool]').forEach(btn => btn.classList.toggle('active', btn.dataset.tool === 'pen'));
        button.classList.add('active');
        actions.updateToolState();
      });
    });

    const straightButton = toolbar.querySelector('[data-action="straight"]');
    straightButton.addEventListener('click', () => {
      state.straightAssist = !state.straightAssist;
      straightButton.classList.toggle('active', state.straightAssist);
      straightButton.title = state.straightAssist ? 'Ayuda recta activada' : 'Ayuda de subrayado recto';
      if (state.straightAssist && state.tool !== 'pen') {
        state.tool = 'pen';
        toolbar.querySelectorAll('[data-tool]').forEach(btn => btn.classList.toggle('active', btn.dataset.tool === 'pen'));
        actions.updateToolState();
      }
    });

    toolbar.querySelector('[data-action="clear"]').addEventListener('click', actions.clearCurrentPage);
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
    });
  }

  function attachDrawing(canvas, pageNumber, state, annotations, key) {
    const save = () => saveAnnotations(key, annotations);

    let activeStroke = null;
    let pointerId = null;
    let lineStart = null;
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
      lineStart = null;
      pointerId = null;
      pointerStart = null;
    }

    function isVerticalScrollIntent(start, point, canvas) {
      const dx = Math.abs((point.x - start.x) * canvas.width);
      const dy = Math.abs((point.y - start.y) * canvas.height);
      return dy > 14 && dy > dx * 1.25;
    }

    canvas.addEventListener('pointerdown', event => {
      if (state.tool === 'pan') return;
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

      if (state.tool === 'pen' && state.straightAssist) {
        lineStart = point;
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

      if (state.tool === 'pen' && state.straightAssist && lineStart) {
        const preview = {
          color: state.color,
          width: state.width,
          points: [lineStart, point]
        };
        redrawWithPreview(canvas, ensurePage(), preview);
        return;
      }

      if (!activeStroke) return;
      activeStroke.points.push(point);
      redrawAnnotations(canvas, annotations[pageNumber]);
    });

    function finish(event) {
      if (event.pointerId !== pointerId) return;
      if (state.tool === 'pen' && state.straightAssist && lineStart) {
        const end = getPointerPoint(event, canvas);
        ensurePage().push({
          color: state.color,
          width: state.width,
          points: [lineStart, end]
        });
        lineStart = null;
        redrawAnnotations(canvas, annotations[pageNumber]);
      }
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

  async function openAnnotatedPdfViewer(key, blob, info) {
    ensureViewerStyles();

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
      straightAssist: false,
      zoom: 1,
      currentPage: 1
    };

    const actions = {
      close: () => shell.remove(),
      updateToolState: () => {
        shell.querySelectorAll('.pdf-draw-layer').forEach(canvas => {
          canvas.dataset.tool = state.tool;
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
      },
      clearCurrentPage: () => {
        annotations[state.currentPage] = [];
        saveAnnotations(key, annotations);
        const canvas = shell.querySelector(`.pdf-draw-layer[data-page="${state.currentPage}"]`);
        if (canvas) redrawAnnotations(canvas, []);
      }
    };

    shell.appendChild(createToolbar(info, state, actions));
    shell.appendChild(pagesContainer);
    document.body.appendChild(shell);
    attachPinchZoom(pagesContainer, zoomSurface, state, actions);

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
        const scale = Math.max(0.7, Math.min(1.7, availableWidth / baseViewport.width));
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

        const renderContext = {
          canvasContext: pdfCanvas.getContext('2d'),
          viewport
        };
        if (ratio !== 1) renderContext.transform = [ratio, 0, 0, ratio, 0, 0];
        await page.render(renderContext).promise;

        wrap.appendChild(pdfCanvas);
        wrap.appendChild(drawCanvas);
        zoomSurface.appendChild(wrap);

        redrawAnnotations(drawCanvas, annotations[pageNumber] || []);
        attachDrawing(drawCanvas, String(pageNumber), state, annotations, key);
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
    const response = await fetch(encodeURI(url));
    if (!response.ok) {
      throw new Error(`PDF del proyecto no encontrado: ${response.status}`);
    }

    const blob = await response.blob();
    const block = typeof CONFIGURACION_CURSO !== 'undefined'
      ? CONFIGURACION_CURSO.find(item => item.bloque === bid)
      : null;
    const topic = block && block.asignaturas[idx] ? block.asignaturas[idx].nombre : 'PDF del tema';

    await openAnnotatedPdfViewer(pdfKey(bid, idx), blob, {
      name: url.split('/').pop() || 'PDF',
      subject: block ? block.titulo_boton : '',
      topic
    });
  }

  async function abrirPdfTema(bid, idx) {
    try {
      const openedLocal = await openLocalPdf(bid, idx);
      if (openedLocal) return;
    } catch (error) {
      console.warn('No se pudo abrir el PDF local:', error);
    }

    const fallback = typeof PDF_T3_URLS !== 'undefined' && PDF_T3_URLS[bid] && PDF_T3_URLS[bid][idx];
    if (fallback) {
      try {
        await openProjectPdf(bid, idx, fallback);
      } catch (error) {
        console.error('No se pudo abrir el PDF del proyecto:', error);
        if (typeof showToast === 'function') {
          showToast('error', 'PDF no encontrado', 'No se pudo cargar el PDF incluido en el proyecto.');
        }
      }
    } else if (typeof showToast === 'function') {
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
        const detail = result.skipped.length
          ? `${result.imported.length} importados. ${result.skipped.length} sin identificar.`
          : `${result.imported.length} PDFs importados y asignados.`;

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

  window.PDF_LOCAL_STORE = {
    getLocalPdfInfo,
    getPdfButtonHtml,
    importLocalPdfs,
    abrirPdfTema,
    abrirImportadorPdfs
  };

  window.getPdfButtonHtml = getPdfButtonHtml;
  window.abrirPdfTema = abrirPdfTema;
  window.abrirImportadorPdfs = abrirImportadorPdfs;
})();
