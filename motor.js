/* =========================================================
   MOTOR PRO v60 (CON DASHBOARD + LOGROS + FAVORITOS)
   ========================================================= */

let preguntasJuego = [];
let respuestasUsuario = [];
let indice = 0;
let modoActual = "";
let asignaturaActualObj = null;
let lastContext = null;

// VARIABLES DE GAMIFICACIÓN
let rachaActual = 0;
let recordActual = 0; 

// MODO TURBO (Persistente)
let modoTurbo = localStorage.getItem("mastertest_turbo") === "true";

/* =========================================================
   SISTEMA DE VALIDACIÓN Y VERSIONADO (SEGURIDAD v67.24)
   ========================================================= */
const SCHEMA_VERSION = 1;

// Estructura por defecto para la base de datos
function getDefaultDatabase() {
  return {};
}

// Validar que la estructura de datos sea correcta
function validateDatabaseSchema(db) {
  if (typeof db !== 'object' || db === null) return false;
  for (const asigName in db) {
    const asig = db[asigName];
    if (!Array.isArray(asig.active) || !Array.isArray(asig.dom) || typeof asig.master_index !== 'number') {
      return false;
    }
  }
  return true;
}

// Cargar base de datos con validación
function loadDatabase() {
  try {
    const raw = localStorage.getItem("mastertest_db");
    if (!raw) return getDefaultDatabase();

    const db = JSON.parse(raw);

    // Validar estructura
    if (!validateDatabaseSchema(db)) {
      console.warn("⚠️ Base de datos corrupta, reiniciando...");
      localStorage.removeItem("mastertest_db");
      return getDefaultDatabase();
    }

    return db;
  } catch (e) {
    console.error("❌ Error cargando base de datos:", e);
    localStorage.removeItem("mastertest_db");
    return getDefaultDatabase();
  }
}

// Guardar base de datos con validación
function saveDatabase(db) {
  try {
    if (!validateDatabaseSchema(db)) {
      console.error("❌ Intento de guardar datos inválidos");
      return false;
    }
    localStorage.setItem("mastertest_db", JSON.stringify(db));
    return true;
  } catch (e) {
    console.error("❌ Error guardando base de datos:", e);
    return false;
  }
}

// Cargar array de fallos con validación
function loadFailures() {
  try {
    const raw = localStorage.getItem("mastertest_fails");
    if (!raw) return [];
    const fails = JSON.parse(raw);
    return Array.isArray(fails) ? fails : [];
  } catch (e) {
    console.error("❌ Error cargando fallos:", e);
    return [];
  }
}

// Cargar favoritos con validación
function loadFavorites() {
  try {
    const raw = localStorage.getItem("mastertest_favs");
    if (!raw) return [];
    const favs = JSON.parse(raw);
    return Array.isArray(favs) ? favs : [];
  } catch (e) {
    console.error("❌ Error cargando favoritos:", e);
    return [];
  }
}

// FUNCIÓN SHOWTOAST (v67.24 SEGURO - XSS FIX)
function showToast(tipo, titulo, detalle) {
  console.log(`🔔 Toast [${tipo}]: ${titulo} - ${detalle}`);

  // Crear toast visual - SEGURO contra XSS
  const toastId = 'toast-' + Date.now();
  const color = tipo === 'error' ? '#ef4444' : tipo === 'success' ? '#10b981' : '#3b82f6';
  const icon = tipo === 'error' ? '❌' : tipo === 'success' ? '✅' : 'ℹ️';

  // Crear elementos con DOM API en lugar de insertAdjacentHTML
  const toast = document.createElement('div');
  toast.id = toastId;
  toast.style.cssText = 'position:fixed; top:20px; right:20px; z-index:99999; background:white; padding:16px 20px; border-radius:12px; box-shadow:0 10px 40px rgba(0,0,0,0.2); max-width:400px; border-left:4px solid ' + color + '; animation:slideIn 0.3s ease;';

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'display:flex; align-items:flex-start; gap:12px;';

  const iconDiv = document.createElement('div');
  iconDiv.style.fontSize = '1.5rem';
  iconDiv.textContent = icon;

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;';

  const tituloDiv = document.createElement('div');
  tituloDiv.style.cssText = 'font-weight:700; color:#1f2937; margin-bottom:4px;';
  tituloDiv.textContent = titulo; // Seguro - sin HTML

  const detalleDiv = document.createElement('div');
  detalleDiv.style.cssText = 'font-size:0.9rem; color:#6b7280;';
  detalleDiv.textContent = detalle; // Seguro - sin HTML

  const btn = document.createElement('button');
  btn.textContent = '×';
  btn.style.cssText = 'background:none; border:none; font-size:1.2rem; color:#9ca3af; cursor:pointer; padding:0; line-height:1;';
  btn.onclick = () => toast.remove();

  content.appendChild(tituloDiv);
  content.appendChild(detalleDiv);
  wrapper.appendChild(iconDiv);
  wrapper.appendChild(content);
  wrapper.appendChild(btn);
  toast.appendChild(wrapper);

  // Inyectar estilos una sola vez si no existen
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = '@keyframes slideIn { from { transform: translateX(400px); opacity: 0; } to { transform: translateX(0); opacity: 1; } } @keyframes slideOut { from { opacity: 1; } to { opacity: 0; transform: translateX(400px); } }';
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  // Auto-cerrar después de 5 segundos
  setTimeout(() => {
    if (toast && toast.parentElement) {
      toast.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }
  }, 5000);
}

// --- INICIALIZACIÓN ---
setTimeout(() => actualizarBotonTurbo(), 100);

// --- AUTO-REPARACIÓN AL INICIO (CON VALIDACIÓN) ---
(function sanearBaseDeDatos() {
    try {
        let db = loadDatabase();
        let cambio = false;
        const idsReales = new Set();
        if (typeof CONFIGURACION_CURSO !== 'undefined') {
            CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => a.data.forEach(p => idsReales.add(p.id))));
            for (const asigName in db) {
                if (db[asigName] && Array.isArray(db[asigName].dom)) {
                    const longAntes = db[asigName].dom.length;
                    db[asigName].dom = db[asigName].dom.filter(id => idsReales.has(id));
                    db[asigName].dom = [...new Set(db[asigName].dom)];
                    if (db[asigName].dom.length !== longAntes) cambio = true;
                }
            }
            if (cambio) saveDatabase(db);
        }
    } catch (e) { console.error("❌ Error saneando DB:", e); }
})();

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

/* --- SISTEMA DE CAMBIO DE MODO (TURBO/NORMAL) --- */
function toggleTurbo() {
    modoTurbo = !modoTurbo;
    localStorage.setItem("mastertest_turbo", modoTurbo);
    actualizarBotonTurbo();
}

function actualizarBotonTurbo() {
    const btn = document.getElementById("btn-turbo");
    if (btn) {
        if (modoTurbo) {
            btn.innerText = "🚀"; 
            btn.style.borderColor = "var(--orange)";
            btn.style.background = "#fff7ed";
        } else {
            btn.innerText = "🐢"; 
            btn.style.borderColor = "var(--border)";
            btn.style.background = "var(--bg)";
        }
    }
}

/* --- SISTEMA DE AUDIO --- */
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function reproducirSonido(tipo) {
  if (modoActual !== "muerte_subita") return; 
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (tipo === "win") {
    osc.type = "sine"; osc.frequency.setValueAtTime(600, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.start(); osc.stop(audioCtx.currentTime + 0.3);
  } else {
    osc.type = "sawtooth"; osc.frequency.setValueAtTime(150, audioCtx.currentTime); osc.frequency.linearRampToValueAtTime(50, audioCtx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
    osc.start(); osc.stop(audioCtx.currentTime + 0.4);
  }
}

/* --- RELOJ --- */
let tiempoLimite = 0; let intervaloReloj = null;
function iniciarReloj(minutos) {
  detenerReloj(); tiempoLimite = minutos * 60;
  intervaloReloj = setInterval(() => {
    tiempoLimite--;
    const divReloj = document.getElementById("reloj-flotante");
    if (divReloj) {
       const m = Math.floor(tiempoLimite / 60).toString().padStart(2, '0');
       const s = (tiempoLimite % 60).toString().padStart(2, '0');
       divReloj.innerText = `⏱️ ${m}:${s}`;
       if(tiempoLimite < 60) { divReloj.style.color = "var(--danger)"; divReloj.style.animation = "parpadeo 1s infinite"; }
    }
    if (tiempoLimite <= 0) { detenerReloj(); alert("⏰ ¡TIEMPO AGOTADO!"); finalizar(); }
  }, 1000);
}
function detenerReloj() { if (intervaloReloj) clearInterval(intervaloReloj); intervaloReloj = null; }

/* =========================================================
   1. ARRANQUE DEL JUEGO
   ========================================================= */
function jugar(modo, idx, bid, limit) {
  if (modo === 'global' && typeof idx === 'number') limit = idx;
  lastContext = { modo, idx, bid, limit };
  modoActual = modo; 
  indice = 0; 
  
  // === GESTIÓN DE RACHA INICIAL ===
  if (modo === 'muerte_subita') {
      rachaActual = 0;
      recordActual = parseInt(localStorage.getItem("mastertest_record_arcade")) || 0;
  } else {
      rachaActual = parseInt(localStorage.getItem("mastertest_racha_viva")) || 0;
      recordActual = parseInt(localStorage.getItem("mastertest_record_normal")) || 0;
  }

  preguntasJuego = []; respuestasUsuario = []; asignaturaActualObj = null;

  if (modo === "letras_identificacion") {
    if (typeof LETRAS_TEST_DATA !== 'undefined') preguntasJuego = shuffle([...LETRAS_TEST_DATA]).slice(0, 10);
    else { alert("⚠️ Faltan datos de letras."); return; }
    detenerReloj(); 
  } 
  else if (modo === "taller_planos") {
    if (typeof TALLER_PLANOS_DATA !== 'undefined') preguntasJuego = shuffle([...TALLER_PLANOS_DATA]).slice(0, 10);
    else { alert("⚠️ Faltan datos de Planos."); return; }
    detenerReloj();
  }
  else if (modo === "rebt_memorizacion") {
    if (typeof REBT_ESTRUCTURA_DATA !== 'undefined') preguntasJuego = shuffle([...REBT_ESTRUCTURA_DATA]).slice(0, 10);
    else { alert("⚠️ Faltan datos de REBT."); return; }
    detenerReloj();
  }
  else if (modo === "carrera") {
    const bloque = CONFIGURACION_CURSO.find(b => b.bloque === bid);
    if (!bloque) return;
    const asig = bloque.asignaturas[idx];
    asignaturaActualObj = asig;
    const db = loadDatabase(); // ✅ Con validación
    const failsGlobal = loadFailures(); // ✅ Con validación
    
    if (!db[asig.nombre]) db[asig.nombre] = { active: [], master_index: 0, stats: {}, dom: [] };
    const estado = db[asig.nombre];

    estado.active = estado.active.filter(id => asig.data.some(p => p.id === id));
    estado.dom = estado.dom.filter(id => asig.data.some(p => p.id === id));
    estado.active = estado.active.filter(id => !estado.dom.includes(id) && !failsGlobal.includes(id));

    let seleccion = [];
    const fallosAsig = failsGlobal.filter(id => asig.data.some(p => p.id === id));
    seleccion.push(...fallosAsig.slice(0, 4));
    
    let intentos = 0;
    while(seleccion.length < 10 && estado.master_index < asig.data.length && intentos < asig.data.length + 5) {
        const nextId = asig.data[estado.master_index].id;
        if(!estado.dom.includes(nextId) && !failsGlobal.includes(nextId) && !estado.active.includes(nextId)) {
            if (!seleccion.includes(nextId)) { seleccion.push(nextId); estado.active.push(nextId); }
        }
        estado.master_index++; intentos++;
    }
    
    if(seleccion.length < 10) {
        const huecos = 10 - seleccion.length;
        let disponibles = asig.data.map(p=>p.id).filter(id => !seleccion.includes(id) && !estado.dom.includes(id));
        if (disponibles.length < huecos) {
             const dominadas = estado.dom.filter(id => !seleccion.includes(id));
             disponibles = disponibles.concat(dominadas);
        }
        const extra = shuffle(disponibles).slice(0, huecos);
        seleccion.push(...extra);
    }
    const mixIds = [...new Set(seleccion)];
    saveDatabase(db); // ✅ Con validación
    preguntasJuego = mixIds.map(id => asig.data.find(p => p.id === id)).filter(Boolean);
    
    // v67.24: PRIORIDAD 50/50 PARA PREGUNTAS IA
    const preguntasIAStorage = JSON.parse(localStorage.getItem("mastertest_ia_preguntas")) || [];
    const preguntasIATema = preguntasIAStorage.filter(p => p.tema === asig.nombre);
    
    if (preguntasIATema.length > 0) {
      console.log(`🤖 Preguntas IA disponibles para ${asig.nombre}: ${preguntasIATema.length}`);
      
      // Separar preguntas normales e IA
      const preguntasNormales = preguntasJuego;
      
      // Calcular mitad (50%)
      const mitad = Math.floor(10 / 2); // 5 preguntas
      
      // Mezclar 50% IA + 50% normales
      preguntasJuego = [
        ...shuffle(preguntasIATema).slice(0, mitad),      // 5 IA
        ...shuffle(preguntasNormales).slice(0, mitad)     // 5 normales
      ];
      
      // v67.24: Mezclar todo junto para que no salgan agrupadas
      preguntasJuego = shuffle(preguntasJuego);
      
      // Si no hay suficientes IA, rellenar con normales
      if (preguntasJuego.length < 10) {
        const faltantes = 10 - preguntasJuego.length;
        const extras = shuffle(preguntasNormales).slice(0, faltantes);
        preguntasJuego.push(...extras);
      }
      
      console.log(`✅ Test final: ${preguntasJuego.filter(p => p.origen === 'ia').length} IA + ${preguntasJuego.filter(p => p.origen !== 'ia').length} normales`);
    }
  }
  else if (modo === "global") {
    CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => { if (a.data) preguntasJuego.push(...a.data); }));
    preguntasJuego = shuffle(preguntasJuego); if (limit) preguntasJuego = preguntasJuego.slice(0, limit);
  }
  else if (modo === "personalizado") { if (preguntasJuego.length === 0) { alert("Error: Selecciona temas."); return; } }
  else if (modo === "purgatorio") {
    const fails = loadFailures(); // ✅ Con validación
    if(fails.length === 0) { alert("¡Purgatorio vacío!"); return; }
    let pool = []; CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => pool.push(...a.data)));
    preguntasJuego = pool.filter(p => fails.includes(p.id));
    preguntasJuego = shuffle(preguntasJuego).slice(0, 20);
  }
  else if (modo === "muerte_subita") {
    CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => preguntasJuego.push(...a.data)));
    preguntasJuego = shuffle(preguntasJuego);
  }
  else if (modo === "favoritos") {
    const favs = loadFavorites(); // ✅ Con validación
    if(favs.length === 0) { alert("No tienes preguntas favoritas aún"); return; }
    let pool = []; CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => pool.push(...a.data)));
    preguntasJuego = pool.filter(p => favs.includes(p.id));
    preguntasJuego = shuffle(preguntasJuego);
  }

  if (preguntasJuego.length === 0) { alert("No hay preguntas disponibles."); return; }
  
  preguntasJuego = preguntasJuego.map(p => ({ ...p, opciones: shuffle([...p.opciones]) }));
  
  respuestasUsuario = new Array(preguntasJuego.length).fill(null);

  if (modo === "global" || modo === "personalizado") iniciarReloj(preguntasJuego.length); else detenerReloj();
  mostrarPantalla("pantalla-test"); renderPregunta();
}

/* =========================================================
   2. RENDERIZADO
   ========================================================= */
function renderPregunta() {
  // FIX v67.24: Limpieza simple (sin hover = sin problemas)
  document.querySelectorAll('.opcion').forEach(op => {
    op.classList.remove('seleccionada', 'correcta', 'incorrecta');
  });
  
  const p = preguntasJuego[indice];
  let titulo = "TEST"; let subtitulo = ""; let badge = `<span class="badge badge-oficial">PREGUNTA</span>`; let relojHtml = "";
  let barraProgresoHtml = "";

  if (modoActual === "global" || modoActual === "personalizado") relojHtml = `<div id="reloj-flotante" style="background:var(--text);color:#fff;padding:5px 12px;border-radius:20px;font-weight:bold;">⏱️ --:--</div>`;

  if (modoActual === "carrera" && asignaturaActualObj) {
    const bloquePadre = CONFIGURACION_CURSO.find(b => b.bloque === lastContext.bid);
    titulo = bloquePadre ? bloquePadre.titulo_boton : "Tema"; subtitulo = asignaturaActualObj.nombre;
    const db = JSON.parse(localStorage.getItem("mastertest_db"));
    const estado = db[asignaturaActualObj.nombre];
    if (estado.dom.includes(p.id)) badge = `<span class="badge badge-repaso">🟣 REPASO</span>`;
    else if (asignaturaActualObj.data.slice(0,10).some(x=>x.id===p.id)) badge = `<span class="badge badge-oficial">🔵 OFICIAL</span>`;
    else badge = `<span class="badge badge-nuevo">🟠 NUEVA</span>`;
    
    // v67.24: Badge GENERADA para preguntas IA (prioridad sobre otros)
    if (p.origen === 'ia') {
      badge = `<span class="badge badge-generada">🟣 GENERADA</span>`;
    }
    
    const totalPreg = asignaturaActualObj.data.length; const numDominadas = estado.dom.length; const porcentaje = totalPreg > 0 ? (numDominadas / totalPreg) * 100 : 0;
    
    const claseCompleta = Math.round(porcentaje) >= 100 ? "full" : "";
    barraProgresoHtml = `<div style="margin-bottom:20px;"><div style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text-light);margin-bottom:4px;font-weight:600;"><span>Progreso del Tema</span><span>${Math.round(porcentaje)}%</span></div><div class="barra-fondo" style="height:6px;margin-top:0;"><div class="barra-relleno ${claseCompleta}" style="width:${porcentaje}%"></div></div></div>`;
  }
  else if (modoActual==="muerte_subita") { titulo="💀 MUERTE SÚBITA"; badge=`<span class="badge" style="background:var(--danger);color:white">ARCADE</span>`; }
  else if (modoActual==="letras_identificacion") { titulo="🆔 LETRAS IEC"; badge=`<span class="badge" style="background:#8b5cf6;color:white">NORMA</span>`; }
  else if (modoActual==="taller_planos") { titulo="🏗️ PLANOS"; badge=`<span class="badge" style="background:#06b6d4;color:white">PRÁCTICO</span>`; }
  else if (modoActual==="rebt_memorizacion") { titulo="⚖️ REBT"; badge=`<span class="badge" style="background:#06b6d4;color:white">NORMA</span>`; }
  else if (modoActual==="favoritos") { titulo="⭐ FAVORITOS"; badge=`<span class="badge" style="background:#fbbf24;color:white">GUARDADOS</span>`; }
  
  let visual = "";
  if (p.imagen) visual = `<div style="text-align:center;margin-bottom:20px;"><img src="${p.imagen}" style="max-width:100%;max-height:250px;border-radius:12px;border:1px solid var(--border);" onclick="window.open(this.src)"></div>`;
  else if (p.svg) visual = `<div style="text-align:center;margin-bottom:20px;padding:20px;background:white;border-radius:12px;border:1px solid var(--border);display:flex;justify-content:center;">${p.svg}</div>`;

  // BOTÓN FAVORITO
  const favs = JSON.parse(localStorage.getItem("mastertest_favs")) || [];
  const esFavorito = favs.includes(p.id);
  const btnFav = `<button id="btn-fav-${indice}" style="background:none;border:none;font-size:1.5rem;cursor:pointer;padding:0;margin-left:10px;" title="Marcar como favorito">${esFavorito ? '⭐' : '☆'}</button>`;

  let rachaHtml = "";
  if (rachaActual >= 2) {
      let claseNivel = "lvl-1"; 
      if (rachaActual >= 5) claseNivel = "lvl-2"; 
      if (rachaActual >= 10) claseNivel = "lvl-3"; 
      rachaHtml = `<div id="racha-float" class="${claseNivel}"><div class="flame-icon">🔥</div><div class="racha-info"><span class="racha-count">x${rachaActual}</span><span class="racha-record">RÉCORD: ${recordActual}</span></div></div>`;
  }

  document.getElementById("pantalla-test").innerHTML = `
    ${rachaHtml} 
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
        <div><h3 style="color:var(--primary);margin:0;">${titulo}</h3><div style="color:var(--text-light);font-size:0.9rem;">${subtitulo}</div></div>
        ${relojHtml}
    </div>
    ${barraProgresoHtml}
    <div class="badges-container">
        <div style="display:flex;align-items:center;">${badge}${btnFav}</div>
        <span style="color:var(--text-light);font-weight:600;">${indice + 1} / ${preguntasJuego.length}</span>
    </div>
    ${visual}
    <div class="pregunta-box">${p.texto}</div>
    <div id="opciones-grid">
      ${p.opciones.map((op, i) => renderOpcionHtml(p, op, i)).join("")}
    </div>
    <div class="botones-navegacion">
      <button class="btn-outline" onclick="anterior()" ${indice===0?'disabled':''}>⬅ Atrás</button>
      <button class="btn-outline" style="border-color:var(--danger);color:var(--danger);" onclick="salir()">🏁 Salir</button>
      <button class="btn-orange" onclick="siguiente()">${indice===preguntasJuego.length-1 ? 'Finalizar' : 'Siguiente ➡'}</button>
    </div>
  `;
  
  // Añadir event listener al botón de favoritos después de renderizar
  setTimeout(() => {
    const btnFav = document.getElementById(`btn-fav-${indice}`);
    if (btnFav) {
      btnFav.onclick = (e) => {
        e.stopPropagation();
        toggleFavorito(p.id);
      };
    }
  }, 0);
}

function renderOpcionHtml(p, op, i) {
  const imagen = p.opcionImagenes && p.opcionImagenes[op];
  const imagenHtml = imagen ? `<img class="opcion-img" src="${imagen}" alt="${op}" loading="lazy">` : "";
  return `
    <div class="opcion ${respuestasUsuario[indice] === i ? 'seleccionada' : ''}" onclick="clickOpcion(${i})">
      <div class="opcion-contenido">
        <span class="opcion-texto">${op}</span>
        ${imagenHtml}
      </div>
    </div>
  `;
}

/* =========================================================
   3. SISTEMA DE FAVORITOS
   ========================================================= */
function toggleFavorito(id) {
  let favs = JSON.parse(localStorage.getItem("mastertest_favs")) || [];
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }
  localStorage.setItem("mastertest_favs", JSON.stringify(favs));
  renderPregunta(); // Refrescar para actualizar la estrella
}

/* =========================================================
   4. INTERACCIÓN (CHECK RESPUESTA)
   ========================================================= */
function clickOpcion(i) {
  if (respuestasUsuario[indice] !== null) return;
  const p = preguntasJuego[indice];
  const esCorrecta = p.opciones[i] === p.correctaTexto;

  if (esCorrecta) {
      rachaActual++;
      if (modoActual !== 'muerte_subita') localStorage.setItem("mastertest_racha_viva", rachaActual);
      if (rachaActual > recordActual) {
          recordActual = rachaActual;
          localStorage.setItem(modoActual==='muerte_subita'?"mastertest_record_arcade":"mastertest_record_normal", recordActual);
      }
      if (modoActual === "muerte_subita") reproducirSonido("win");
  } else {
      rachaActual = 0;
      if (modoActual !== 'muerte_subita') localStorage.setItem("mastertest_racha_viva", 0);
      if (modoActual === "muerte_subita") reproducirSonido("lose");
  }

  if (modoActual === "muerte_subita" && !esCorrecta) {
      respuestasUsuario[indice] = i;
      // 🔥 AQUÍ SE QUITA LA LÍNEA QUE AÑADÍA FALLOS AL PURGATORIO EN ARCADE 🔥
      renderPregunta();
      setTimeout(() => { 
          alert(`💀 GAME OVER\nHas sobrevivido a ${indice} preguntas.\nRacha final: ${rachaActual}`);
          preguntasJuego = preguntasJuego.slice(0, indice + 1); 
          finalizar(); 
      }, 500);
      return;
  }

  respuestasUsuario[indice] = i;
  renderPregunta();
  
  // AGREGAR ANIMACIONES v67.24
  setTimeout(() => {
    const opciones = document.querySelectorAll('.opcion');
    if (esCorrecta) {
      opciones[i].classList.add('correcta');
    } else {
      opciones[i].classList.add('incorrecta');
    }
  }, 50);
  
  setTimeout(() => { if (indice < preguntasJuego.length - 1) { indice++; renderPregunta(); } else finalizar(); }, 800);
}

function finalizar() {
  detenerReloj(); 
  let aciertos = 0; let html = "";
  let db = JSON.parse(localStorage.getItem("mastertest_db")) || {};
  let fails = JSON.parse(localStorage.getItem("mastertest_fails")) || [];

  preguntasJuego.forEach((p, i) => {
    const respIdx = respuestasUsuario[i];
    const respTexto = respIdx !== null ? p.opciones[respIdx] : "---";
    const esCorrecta = (respTexto === p.correctaTexto);

    if (esCorrecta) { 
        aciertos++; 
        // Si aciertas, se borra del purgatorio (sea cual sea el modo)
        fails = fails.filter(id => String(id) !== String(p.id)); 
    } else { 
        // 🔥 LÓGICA ESTRICTA: SOLO "carrera" (Test Normales) AÑADE FALLOS 🔥
        if (modoActual === "carrera") {
            if (!fails.some(id => String(id) === String(p.id))) fails.push(p.id); 
        }
    }

    if (modoActual === "carrera" && asignaturaActualObj) {
      const estado = db[asignaturaActualObj.nombre];
      if (esCorrecta) {
        estado.stats[p.id] = (estado.stats[p.id] || 0) + 1;
        const umbralNecesario = modoTurbo ? 1 : 3;
        if (estado.stats[p.id] >= umbralNecesario && !estado.dom.includes(p.id)) estado.dom.push(p.id);
        
        // v67.24: Guardar dominadas IA por separado
        if (p.origen === 'ia' && estado.stats[p.id] >= umbralNecesario) {
          let dominadasIA = JSON.parse(localStorage.getItem("mastertest_ia_dominadas")) || {};
          if (!dominadasIA[asignaturaActualObj.nombre]) dominadasIA[asignaturaActualObj.nombre] = [];
          if (!dominadasIA[asignaturaActualObj.nombre].includes(p.id)) {
            dominadasIA[asignaturaActualObj.nombre].push(p.id);
            localStorage.setItem("mastertest_ia_dominadas", JSON.stringify(dominadasIA));
          }
        }
      } else {
        estado.stats[p.id] = 0;
        if (estado.dom.includes(p.id)) { 
            estado.dom = estado.dom.filter(id => id !== p.id); 
            if (!estado.active.includes(p.id)) estado.active.push(p.id); 
        }
        
        // v67.24: Quitar de dominadas IA si falla
        if (p.origen === 'ia') {
          let dominadasIA = JSON.parse(localStorage.getItem("mastertest_ia_dominadas")) || {};
          if (dominadasIA[asignaturaActualObj.nombre]) {
            dominadasIA[asignaturaActualObj.nombre] = dominadasIA[asignaturaActualObj.nombre].filter(id => id !== p.id);
            localStorage.setItem("mastertest_ia_dominadas", JSON.stringify(dominadasIA));
          }
        }
      }
    }
  });

  localStorage.setItem("mastertest_fails", JSON.stringify(fails));
  if (modoActual === "carrera") localStorage.setItem("mastertest_db", JSON.stringify(db));

  // Verificar logros después de finalizar
  verificarLogros();

  // BOTÓN SALIDA RÁPIDA (Solo Arcade)
  let botonSalidaRapida = "";
  if (modoActual === "muerte_subita") {
      botonSalidaRapida = `
        <div style="margin-bottom: 20px;">
            <button class="btn-outline" style="width:100%; border-color:var(--danger); color:var(--danger); border-width:2px; font-weight:800;" onclick="volverAlMenu()">🚪 SALIR AL MENÚ</button>
        </div>
      `;
  }
  
  // RENDERIZADO DE RESULTADOS
  if (modoActual === "muerte_subita") {
      // Muerte súbita: Muestra la última (fallada)
      const ultimaP = preguntasJuego[preguntasJuego.length - 1];
      const i = preguntasJuego.length - 1;
      const respIdx = respuestasUsuario[i];
      const respTexto = respIdx !== null ? ultimaP.opciones[respIdx] : "---";
      
      html += `<div style="background:#fef2f2; border:2px solid var(--danger); padding:20px; border-radius:15px; text-align:center; margin-bottom:20px;">
                  <h3 style="margin:0; color:var(--danger);">💥 GAME OVER 💥</h3>
                  <p style="color:var(--text-light); font-size:0.9rem;">(Aquí terminó tu racha de ${rachaActual})</p>
               </div>`;

      html += `<div style="margin-bottom:15px;padding:15px;border-left:5px solid var(--danger);background:var(--bg); border-radius:10px;">
        <div style="font-weight:bold; margin-bottom:10px;">${i+1}. ${ultimaP.texto}</div>
        <div style="color:var(--danger);">❌ <b>${respTexto}</b></div>
        <div style="color:var(--success); margin-top:5px;">💡 Era: <b>${ultimaP.correctaTexto}</b></div>
        <div style="margin-top:10px; font-size:0.85rem; color:var(--text-light); border-top:1px solid rgba(0,0,0,0.05); padding-top:5px;">${ultimaP.explicacion || ""}</div>
      </div>`;
  } else {
      // Modos normales: Muestra todas
      preguntasJuego.forEach((p, i) => {
        const respIdx = respuestasUsuario[i];
        const respTexto = respIdx !== null ? p.opciones[respIdx] : "---";
        const esCorrecta = (respTexto === p.correctaTexto);
        const color = esCorrecta ? "var(--success)" : "var(--danger)";
        const feedback = esCorrecta 
           ? `<div style="color:var(--success);">✅ <b>${p.correctaTexto}</b></div>` 
           : `<div style="color:var(--danger);">❌ <b>${respTexto}</b></div><div style="color:var(--success); margin-top:5px;">💡 Era: <b>${p.correctaTexto}</b></div>`;

        // Panel de explicación mejorada
        let explicacionHTML = "";
        if (p.explicacion) {
          explicacionHTML = `
            <div style="margin-top:10px; font-size:0.85rem; color:var(--text-light); border-top:1px solid rgba(0,0,0,0.05); padding-top:10px;">
              <div style="font-weight:700; color:var(--text); margin-bottom:5px;">💡 Explicación:</div>
              <div style="line-height:1.5;">${p.explicacion}</div>
            </div>`;
        }
        
        // Conceptos clave si existen
        let conceptosHTML = "";
        if (p.conceptos_clave) {
          conceptosHTML = `
            <div style="margin-top:10px; padding:8px; background:${esCorrecta ? 'var(--success-bg)' : 'var(--danger-bg)'}; border-radius:8px;">
              <div style="font-weight:700; font-size:0.8rem; margin-bottom:5px;">🎯 Conceptos Clave:</div>
              <div style="font-size:0.8rem; display:flex; flex-wrap:wrap; gap:5px;">
                ${p.conceptos_clave.map(c => `<span style="background:white; padding:3px 8px; border-radius:12px; border:1px solid ${color};">${c}</span>`).join('')}
              </div>
            </div>`;
        }
        
        // Truco mnemotécnico si existe
        let trucoHTML = "";
        if (p.truco) {
          trucoHTML = `
            <div style="margin-top:10px; padding:8px; background:#fef3c7; border-left:3px solid #f59e0b; border-radius:5px;">
              <div style="font-weight:700; font-size:0.8rem; color:#92400e; margin-bottom:3px;">🧠 Truco para recordar:</div>
              <div style="font-size:0.8rem; color:#78350f; font-style:italic;">"${p.truco}"</div>
            </div>`;
        }

        // Botón de estudio profundo
        const btnEstudioProfundo = `
          <button class="btn-outline" onclick="generarExplicacionProfunda('${p.texto.replace(/'/g, "\\'")}', '${p.tema}', '${p.correctaTexto.replace(/'/g, "\\'")}', '${(p.explicacion || '').replace(/'/g, "\\'")}');" style="width:100%; margin-top:10px; background:linear-gradient(135deg, #f59e0b 0%, #f97316 100%); color:white; border:none; font-weight:600; padding:12px;">
            📚 Estudiar a fondo
          </button>
        `;

        html += `
          <div style="margin-bottom:15px;padding:15px;border-left:5px solid ${color};background:var(--bg); border-radius:10px;">
            <div style="font-weight:bold; margin-bottom:10px;">${i+1}. ${p.texto}</div>
            ${feedback}
            ${explicacionHTML}
            ${conceptosHTML}
            ${trucoHTML}
            ${btnEstudioProfundo}
          </div>`;
      });
  }

  document.getElementById("pantalla-resultados").innerHTML = `
    <div style="text-align:center;padding:30px;"><h2>Resultado</h2><div style="font-size:4rem;color:var(--primary);">${((aciertos/preguntasJuego.length)*10).toFixed(1)}</div><p>${aciertos}/${preguntasJuego.length}</p></div>
    ${botonSalidaRapida}
    ${html}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><button class="btn-outline" onclick="volverAlMenu()">🏠 Menú</button><button class="btn-orange" onclick="repetirTest()">🔁 Repetir</button></div>
  `;
  mostrarPantalla("pantalla-resultados");
}

function salir() { const haContestado = respuestasUsuario.some(r => r !== null); if (!haContestado) volverAlMenu(); else if (confirm("¿Terminar?")) finalizar(); }

function verEstadisticas() { 
  let totalP=0; let totalD=0; 
  const db = JSON.parse(localStorage.getItem("mastertest_db"))||{}; 
  const fails = JSON.parse(localStorage.getItem("mastertest_fails"))||[];
  const favs = JSON.parse(localStorage.getItem("mastertest_favs"))||[];
  const recNormal = localStorage.getItem("mastertest_record_normal") || 0;
  const recArcade = localStorage.getItem("mastertest_record_arcade") || 0;

  CONFIGURACION_CURSO.forEach(b=>b.asignaturas.forEach(a=>{ totalP+=a.data.length; if(db[a.nombre]) totalD+=db[a.nombre].dom.length; }));
  
  document.getElementById("pantalla-estadisticas").innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <h1 style="margin:0;">📊 Stats</h1>
      <div style="background:#10b981; color:white; padding:8px 16px; border-radius:20px; font-weight:900; font-size:0.9rem; box-shadow:0 2px 8px rgba(16,185,129,0.3);">
        v67.24
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-num">${totalP}</div>Total</div>
      <div class="stat-card"><div class="stat-num">${totalD}</div>Dominadas</div>
      <div class="stat-card"><div class="stat-num" style="color:var(--danger)">${fails.length}</div>Purgatorio</div>
      <div class="stat-card"><div class="stat-num" style="color:#fbbf24">${favs.length}</div>⭐ Favoritos</div>
    </div>
    <h3 style="margin-top:20px;">🏆 Récords</h3>
    <div class="stats-grid">
        <div class="stat-card" style="border:1px solid var(--orange); background:#fff7ed;"><div class="stat-num" style="color:var(--orange)">${recNormal}</div><div class="stat-label">Normal</div></div>
        <div class="stat-card" style="border:1px solid var(--danger); background:#fef2f2;"><div class="stat-num" style="color:var(--danger)">${recArcade}</div><div class="stat-label">Arcade 🔥</div></div>
    </div>
    <div class="gestion-grid" style="margin-top:20px; opacity:0; animation: fadeInGrid 0.3s ease forwards;">
      <button class="btn-outline" onclick="abrirDashboard()">📊 Dashboard</button>
      <button class="btn-outline" onclick="abrirLogros()">🏆 Logros</button>
      <button class="btn-outline" onclick="abrirMapaMental()">🗺️ Mapa Mental</button>
      <button class="btn-outline" onclick="abrirAyuda()">❓ Ayuda</button>
      <button class="btn-outline" onclick="buscarActualizaciones()">🔄 Actualizar</button>
      <button class="btn-outline" onclick="verEstadisticasIA()">🤖 Preguntas IA</button>
      <button class="btn-outline" onclick="verEstadisticasExplicaciones()">📚 Estudios</button>
      <button class="btn-outline" onclick="descargarProgreso()">⬇️ Backup</button>
      <button class="btn-upload" onclick="document.getElementById('input-carga').click()">⬆️ Cargar</button>
      <input type="file" id="input-carga" style="display:none" onchange="cargarProgreso(this)">
    </div>
    <button class="btn-outline" onclick="volverAlMenu()" style="width:100%;margin-top:20px;">⬅ Volver</button>
  `;
  mostrarPantalla("pantalla-estadisticas");
}

function descargarProgreso() {
  const data = { 
    db: JSON.parse(localStorage.getItem("mastertest_db")), 
    fails: JSON.parse(localStorage.getItem("mastertest_fails")), 
    favs: JSON.parse(localStorage.getItem("mastertest_favs")),
    logros: JSON.parse(localStorage.getItem("mastertest_logros")),
    recN: localStorage.getItem("mastertest_record_normal"), 
    recA: localStorage.getItem("mastertest_record_arcade"),
    turbo: localStorage.getItem("mastertest_turbo")
  };
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const a = document.createElement("a"); 
  a.href = URL.createObjectURL(blob); 
  a.download = "progreso_mastertest.json"; 
  a.click();
  
  // Registrar timestamp del backup
  localStorage.setItem("mastertest_ultimo_backup", Date.now().toString());
  
  // Quitar badge si existe
  const badge = document.getElementById('backup-badge');
  if (badge) badge.remove();
  
  // Mostrar confirmación
  setTimeout(() => {
    alert("✅ Backup descargado\n\nGuarda este archivo en un lugar seguro.\nPara restaurar: Stats → ⬆️ Cargar");
  }, 100);
}
function cargarProgreso(input) {
  const reader = new FileReader();
  reader.onload = (e) => { 
    try {
        const data = JSON.parse(e.target.result); 
        localStorage.setItem("mastertest_db", JSON.stringify(data.db || {})); 
        localStorage.setItem("mastertest_fails", JSON.stringify(data.fails || [])); 
        localStorage.setItem("mastertest_favs", JSON.stringify(data.favs || []));
        localStorage.setItem("mastertest_logros", JSON.stringify(data.logros || {}));
        if(data.recN) localStorage.setItem("mastertest_record_normal", data.recN);
        if(data.recA) localStorage.setItem("mastertest_record_arcade", data.recA);
        if(data.turbo) localStorage.setItem("mastertest_turbo", data.turbo);
        alert("✅ Progreso restaurado."); location.reload(); 
    } catch(err) { alert("❌ Error de archivo."); }
  };
  reader.readAsText(input.files[0]);
}

function abrirGestion() { 
    let opciones = `<option value="">-- Selecciona Tema --</option>`;
    CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => opciones += `<option value="${a.nombre}">${a.nombre}</option>`));
    document.getElementById("lista-gestion").innerHTML = `<div style="background:var(--card); padding:20px; border-radius:12px; margin-bottom:20px;"><select id="filtro-gestion" onchange="cargarPreguntasGestion(this.value)" style="width:100%; padding:12px; border-radius:8px;">${opciones}</select></div><div id="contenedor-preguntas-gestion"></div>`;
    mostrarPantalla("pantalla-gestion");
}
function cargarPreguntasGestion(nombreAsig) {
    const divLista = document.getElementById("contenedor-preguntas-gestion"); divLista.innerHTML = ""; let preguntas = [];
    CONFIGURACION_CURSO.forEach(b => { const f = b.asignaturas.find(a => a.nombre === nombreAsig); if(f) preguntas = f.data; });
    preguntas.forEach(p => {
        const div = document.createElement("div"); div.className = "gestion-item";
        const visual = p.svg ? `<div style="width:60px;">${p.svg}</div>` : (p.imagen ? `<img src="${p.imagen}" style="max-width:100px;">` : "Sin img");
        div.innerHTML = `<div class="gestion-img-box">${visual}</div><div class="gestion-info"><span class="gestion-id">ID: ${p.id}</span><div>${p.texto}</div></div>`;
        divLista.appendChild(div);
    });
}
function abrirConfiguradorPersonalizado() {
    const c = document.getElementById("lista-seleccion-temas"); c.innerHTML = "";
    CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => {
        const div = document.createElement("div"); div.innerHTML = `<label style="display:flex;gap:10px;padding:10px;"><input type="checkbox" class="check-tema" value="${a.nombre}"> ${a.nombre} (${a.data.length})</label>`;
        c.appendChild(div);
    }));
    mostrarPantalla("pantalla-configurador");
}
function iniciarTestPersonalizado(n) {
    const sel = Array.from(document.querySelectorAll(".check-tema:checked")).map(e => e.value);
    if (sel.length === 0) return alert("Selecciona temas.");
    preguntasJuego = [];
    CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => { if(sel.includes(a.nombre)) preguntasJuego.push(...a.data); }));
    preguntasJuego = shuffle(preguntasJuego).slice(0, n);
    preguntasJuego = preguntasJuego.map(p => ({ ...p, opciones: shuffle([...p.opciones]) }));
    modoActual = "personalizado"; indice = 0; respuestasUsuario = new Array(preguntasJuego.length).fill(null);
    iniciarReloj(n); mostrarPantalla("pantalla-test"); renderPregunta();
}
function iniciarTestSemestral(n) {
    iniciarModoAcademia(EXAMEN_SEMESTRAL_INSTALACIONES_DATA, n, "⭐ Simulacro Semestral - Instalaciones Eléctricas");
}
function iniciarTestSemestralFotovoltaica(n) {
    iniciarModoAcademia(EXAMEN_SEMESTRAL_FOTOVOLTAICA_DATA, n, "⭐ Simulacro Semestral - Fotovoltaica");
}
function iniciarTestSemestralEmpleabilidad(n) {
    iniciarModoAcademia(EXAMEN_SEMESTRAL_EMPLEABILIDAD_DATA, n, "⭐ Simulacro Semestral - Empleabilidad");
}
function iniciarTestSemestralIngles(n) {
    iniciarModoAcademia(EXAMEN_SEMESTRAL_INGLES_PROFESIONAL_DATA, n, "⭐ Simulacro Semestral - Inglés Profesional");
}
function iniciarTestSemestralDomotica(n) {
    iniciarModoAcademia(EXAMEN_SEMESTRAL_DOMOTICA_DATA, n, "⭐ Simulacro Semestral - Instalaciones Domóticas");
}
function iniciarTestSemestralDistribucion(n) {
    iniciarModoAcademia(EXAMEN_SEMESTRAL_DISTRIBUCION_DATA, n, "⭐ Simulacro Semestral - Instalaciones de Distribución");
}
function iniciarTestSemestralTelecom(n) {
    iniciarModoAcademia(EXAMEN_SEMESTRAL_TELECOM_DATA, n, "⭐ Simulacro Semestral - Infraestructuras de Telecomunicación");
}
function iniciarTestSemestralMaquinas(n) {
    iniciarModoAcademia(EXAMEN_SEMESTRAL_MAQUINAS_DATA, n, "⭐ Simulacro Semestral - Máquinas Eléctricas");
}
function volverAlMenu() { 
  detenerReloj(); 
  
  // Guardar contexto solo si tiene un bloque válido
  if (lastContext && lastContext.bid) {
    localStorage.setItem("mastertest_lastcontext", JSON.stringify(lastContext));
  } else {
    // Si no hay bloque válido, limpiar cualquier contexto guardado
    localStorage.removeItem("mastertest_lastcontext");
  }
  
  mostrarPantalla("pantalla-inicio"); 
  location.reload(); 
}
function mostrarPantalla(id) { document.querySelectorAll(".card").forEach(c => c.classList.remove("active")); document.getElementById(id).classList.add("active"); window.scrollTo(0,0); }
function borrarDatosGlobales() { if (confirm("¿Borrar todo?")) { localStorage.clear(); location.reload(); } }
function anterior() { if (indice > 0) { indice--; renderPregunta(); } }
function siguiente() { if (indice < preguntasJuego.length - 1) { indice++; renderPregunta(); } else finalizar(); }
function repetirTest() { if(lastContext) jugar(lastContext.modo, lastContext.idx, lastContext.bid, lastContext.limit); }

/* =========================================================
   5. DICCIONARIO DE LETRAS IEC
   ========================================================= */
const DICCIONARIO_LETRAS = {
  "A": { 
    titulo: "Conjuntos Funcionales", 
    desc: "Amplificadores, reguladores, autómatas.", 
    items: [
      {nombre:"Amplificador", imagen:"img/amplificador.jpeg"},
      {nombre:"Regulador", imagen:"img/regulador.jpg"},
      {nombre:"Autómata (PLC)", imagen:"img/plc.webp"}
    ] 
  },
  "B": { 
    titulo: "Transductores", 
    desc: "Sensores y convertidores de magnitudes físicas.", 
    items: [
      {nombre:"Termopar", imagen:"img/termopar.jpg"},
      {nombre:"Fotocélula", imagen:"img/fotocelula.jpg"},
      {nombre:"Sensor", imagen:"img/sensor.jpeg"}
    ] 
  },
  "C": { 
    titulo: "Condensadores", 
    desc: "Almacenamiento de energía eléctrica.", 
    items: [
      {nombre:"Condensador", imagen:"img/condensador.jpg"},
      {nombre:"Batería de condensadores", imagen:"img/bateria_condensadores.jpg"}
    ] 
  },
  "D": { 
    titulo: "Binarios / Memoria / Retardo", 
    desc: "Elementos de temporización y memorización.", 
    items: [
      {nombre:"Temporizador", imagen:"img/temporizador.jpg"},
      {nombre:"Memoria", imagen:"img/memoria.png"},
      {nombre:"Retardo", imagen:"img/retardo.jpg"}
    ] 
  },
  "E": { 
    titulo: "Materiales Diversos", 
    desc: "Elementos de calefacción, refrigeración, iluminación.", 
    items: [
      {nombre:"Lámpara", imagen:"img/lampara.jpg"},
      {nombre:"Calefactor", imagen:"img/calefactor.jpg"},
      {nombre:"Ventilador", imagen:"img/ventilador.jpg"}
    ] 
  },
  "F": { 
    titulo: "Protecciones", 
    desc: "Dispositivos contra sobrecargas y cortocircuitos.", 
    items: [
      {nombre:"Fusible", imagen:"img/fusible.jpeg"},
      {nombre:"Relé Térmico", imagen:"img/rele_termico.jpeg"},
      {nombre:"Pararrayos", imagen:"img/pararrayos.jpeg"},
      {nombre:"Limitador", imagen:"img/limitador.jpeg"}
    ] 
  },
  "G": { 
    titulo: "Generadores", 
    desc: "Fuentes de energía eléctrica.", 
    items: [
      {nombre:"Batería", imagen:"img/bateria.jpg"},
      {nombre:"Generador", imagen:"img/generador.jpg"},
      {nombre:"Alternador", imagen:"img/alternador.jpg"}
    ] 
  },
  "H": { 
    titulo: "Señalización", 
    desc: "Dispositivos ópticos y acústicos de aviso.", 
    items: [
      {nombre:"Piloto luminoso", imagen:"img/piloto.jpg"},
      {nombre:"Zumbador", imagen:"img/zumbador.jpg"},
      {nombre:"Sirena", imagen:"img/sirena.jpg"}
    ] 
  },
  "K": { 
    titulo: "Relés y Contactores", 
    desc: "Dispositivos de maniobra automática.", 
    items: [
      {nombre:"Contactor", imagen:"img/contactor.jpg"},
      {nombre:"Relé auxiliar", imagen:"img/rele_auxiliar.jpg"}
    ] 
  },
  "L": { 
    titulo: "Inductancias", 
    desc: "Bobinas y reactancias.", 
    items: [
      {nombre:"Bobina", imagen:"img/bobina.jpg"},
      {nombre:"Reactancia", imagen:"img/reactancia.jpg"}
    ] 
  },
  "M": { 
    titulo: "Motores", 
    desc: "Conversión de energía eléctrica en mecánica.", 
    items: [
      {nombre:"Motor eléctrico", imagen:"img/motor.jpg"},
      {nombre:"Servomotor", imagen:"img/servomotor.jpg"}
    ] 
  },
  "N": { 
    titulo: "Amplificadores / Subconjuntos", 
    desc: "Circuitos amplificadores y reguladores.", 
    items: [
      {nombre:"Amplificador operacional", imagen:"img/amplificador.jpeg"},
      {nombre:"Regulador híbrido", imagen:"img/regulador.jpg"}
    ] 
  },
  "P": { 
    titulo: "Medida y Prueba", 
    desc: "Instrumentos de medición eléctrica.", 
    items: [
      {nombre:"Amperímetro / Pinza", imagen:"img/t4_pinza.jpg"},
      {nombre:"Voltímetro / Multímetro", imagen:"img/t4_multimetro.jpg"},
      {nombre:"Contador", imagen:"img/t3_simb_contador.jpg"},
      {nombre:"Vatímetro", imagen:"img/t4_vatimetro.jpg"}
    ] 
  },
  "Q": { 
    titulo: "Aparatos de Potencia (Corte)", 
    desc: "Interruptores automáticos y seccionadores.", 
    items: [
      {nombre:"Magnetotérmico", imagen:"img/magnetotermico.jpg"},
      {nombre:"Diferencial", imagen:"img/diferencial.jpg"},
      {nombre:"Seccionador", imagen:"img/seccionador.jpg"}
    ] 
  },
  "R": { 
    titulo: "Resistencias", 
    desc: "Elementos que limitan la corriente eléctrica.", 
    items: [
      {nombre:"Resistencia fija", imagen:"img/resistencia.jpg"},
      {nombre:"Potenciómetro", imagen:"img/potenciometro.jpg"},
      {nombre:"Shunt", imagen:"img/t4_shunt.jpg"}
    ] 
  },
  "S": { 
    titulo: "Mando Manual", 
    desc: "Interruptores, pulsadores y selectores.", 
    items: [
      {nombre:"Pulsador", imagen:"img/pulsador.jpg"},
      {nombre:"Interruptor", imagen:"img/t3_simb_interruptor.jpg"},
      {nombre:"Selector", imagen:"img/selector.jpg"}
    ] 
  },
  "T": { 
    titulo: "Transformadores", 
    desc: "Conversión de tensión e intensidad.", 
    items: [
      {nombre:"Transformador de tensión", imagen:"img/trafo.jpg"},
      {nombre:"Transformador de intensidad", imagen:"img/trafo_intensidad.jpg"}
    ] 
  },
  "U": { 
    titulo: "Moduladores / Convertidores", 
    desc: "Variadores de frecuencia y convertidores.", 
    items: [
      {nombre:"Variador de frecuencia", imagen:"img/variador.jpg"},
      {nombre:"Convertidor", imagen:"img/convertidor.jpg"}
    ] 
  },
  "V": { 
    titulo: "Semiconductores", 
    desc: "Diodos, transistores, tiristores.", 
    items: [
      {nombre:"Diodo", imagen:"img/diodo.jpg"},
      {nombre:"Transistor", imagen:"img/transistor.jpg"},
      {nombre:"Tiristor", imagen:"img/tiristor.jpg"}
    ] 
  },
  "W": { 
    titulo: "Vías de Transmisión", 
    desc: "Cables, guías de onda, antenas.", 
    items: [
      {nombre:"Cable", imagen:"img/cable.jpg"},
      {nombre:"Fibra óptica", imagen:"img/fibra.jpg"},
      {nombre:"Antena", imagen:"img/antena.jpg"}
    ] 
  },
  "X": { 
    titulo: "Bornes / Conexiones", 
    desc: "Elementos de conexión y terminales.", 
    items: [
      {nombre:"Regleta de bornes", imagen:"img/regleta.jpg"},
      {nombre:"Enchufe", imagen:"img/t3_simb_enchufe.jpg"},
      {nombre:"Clavija", imagen:"img/clavija.jpg"}
    ] 
  },
  "Y": { 
    titulo: "Dispositivos Mecánicos Accionados Eléctricamente", 
    desc: "Electroválvulas, frenos, embragues.", 
    items: [
      {nombre:"Electroválvula", imagen:"img/electrovalvula.jpg"},
      {nombre:"Freno electromagnético", imagen:"img/freno.jpg"},
      {nombre:"Electroimán", imagen:"img/electroiman.jpg"}
    ] 
  },
  "Z": { 
    titulo: "Filtros / Limitadores", 
    desc: "Dispositivos de filtrado y limitación.", 
    items: [
      {nombre:"Filtro", imagen:"img/filtro.jpg"},
      {nombre:"Limitador de sobretensión", imagen:"img/limitador.jpeg"}
    ] 
  }
};

function abrirDiccionario() { mostrarPantalla("pantalla-diccionario"); renderTecladoLetras(); }
function renderTecladoLetras() {
  const t = document.getElementById("teclado-letras"); t.innerHTML = "";
  "ABCDEFGHKLMNPQRSTUVWXYZ".split("").forEach(l => {
    const b = document.createElement("div"); b.className = "tecla"; b.innerText = l;
    b.onclick = () => { document.querySelectorAll(".tecla").forEach(x=>x.classList.remove("active")); b.classList.add("active"); mostrarLetra(l); };
    t.appendChild(b);
  });
}
function mostrarLetra(l) {
  const d = DICCIONARIO_LETRAS[l]; const v = document.getElementById("visor-letra");
  if(!d) { v.innerHTML = `<div style="text-align:center;padding:20px;color:#aaa;">Sin datos</div>`; return; }
  let html = "";
  if(d.items) d.items.forEach(it => {
      let img = it.imagen ? `<img src="${it.imagen}" class="img-comp" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : "";
      html += `<div class="card-componente">${img}<div class="icono-comp" style="${it.imagen?'display:none':''}">${it.icono||'📦'}</div><div class="nombre-comp">${it.nombre}</div></div>`;
  });
  v.innerHTML = `<div class="info-letra"><div style="display:flex;align-items:center;gap:25px;margin-bottom:20px;border-bottom:1px solid rgba(0,0,0,0.05);padding-bottom:15px;"><div style="background:#7c3aed;color:white;width:60px;height:60px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-weight:900;">${l}</div><div><div style="font-weight:800;color:#5b21b6;font-size:1.2rem;">${d.titulo}</div><div style="color:var(--text-light);font-size:0.9rem;">${d.desc}</div></div></div><div class="grid-componentes">${html}</div></div>`;
}

/* =========================================================
   6. SISTEMA DE LOGROS
   ========================================================= */
const LOGROS_DEFINICION = [
  { id: "primeros_pasos", nombre: "🎯 Primeros Pasos", desc: "Domina tu primera pregunta", check: () => { let t=0; let db=JSON.parse(localStorage.getItem("mastertest_db"))||{}; for(let k in db) t+=db[k].dom?.length||0; return t>=1; } },
  { id: "estudiante", nombre: "📚 Estudiante", desc: "Domina 50 preguntas", check: () => { let t=0; let db=JSON.parse(localStorage.getItem("mastertest_db"))||{}; for(let k in db) t+=db[k].dom?.length||0; return t>=50; } },
  { id: "experto", nombre: "🎓 Experto", desc: "Domina 200 preguntas", check: () => { let t=0; let db=JSON.parse(localStorage.getItem("mastertest_db"))||{}; for(let k in db) t+=db[k].dom?.length||0; return t>=200; } },
  { id: "maestro", nombre: "👑 Maestro", desc: "Domina 500 preguntas", check: () => { let t=0; let db=JSON.parse(localStorage.getItem("mastertest_db"))||{}; for(let k in db) t+=db[k].dom?.length||0; return t>=500; } },
  { id: "racha_5", nombre: "🔥 En Llamas", desc: "Consigue racha de 5", check: () => { return parseInt(localStorage.getItem("mastertest_record_normal")||0) >= 5; } },
  { id: "racha_20", nombre: "🚀 Imparable", desc: "Consigue racha de 20", check: () => { return parseInt(localStorage.getItem("mastertest_record_normal")||0) >= 20; } },
  { id: "racha_50", nombre: "⚡ Legendario", desc: "Consigue racha de 50", check: () => { return parseInt(localStorage.getItem("mastertest_record_normal")||0) >= 50; } },
  { id: "arcade_10", nombre: "💀 Superviviente", desc: "Sobrevive 10 en Arcade", check: () => { return parseInt(localStorage.getItem("mastertest_record_arcade")||0) >= 10; } },
  { id: "arcade_30", nombre: "🎮 Campeón Arcade", desc: "Sobrevive 30 en Arcade", check: () => { return parseInt(localStorage.getItem("mastertest_record_arcade")||0) >= 30; } },
  { id: "purgatorio_limpio", nombre: "✨ Purgatorio Limpio", desc: "Vacía el purgatorio", check: () => { return (JSON.parse(localStorage.getItem("mastertest_fails"))||[]).length === 0; } },
  { id: "perfeccionista", nombre: "💯 Perfeccionista", desc: "Completa un tema al 100%", check: () => { let db=JSON.parse(localStorage.getItem("mastertest_db"))||{}; let total=0; CONFIGURACION_CURSO.forEach(b=>b.asignaturas.forEach(a=>{if(db[a.nombre]&&db[a.nombre].dom.length>=a.data.length) total++;})); return total>=1; } },
  { id: "coleccionista", nombre: "⭐ Coleccionista", desc: "Marca 20 preguntas favoritas", check: () => { return (JSON.parse(localStorage.getItem("mastertest_favs"))||[]).length >= 20; } }
];

function verificarLogros() {
  let logros = JSON.parse(localStorage.getItem("mastertest_logros")) || {};
  let nuevos = [];
  
  LOGROS_DEFINICION.forEach(l => {
    if (!logros[l.id] && l.check()) {
      logros[l.id] = { desbloqueado: true, fecha: new Date().toISOString() };
      nuevos.push(l.nombre);
    }
  });
  
  localStorage.setItem("mastertest_logros", JSON.stringify(logros));
  
  if (nuevos.length > 0) {
    setTimeout(() => {
      alert("🎉 ¡LOGRO DESBLOQUEADO!\n\n" + nuevos.join("\n"));
    }, 1000);
  }
}

function abrirLogros() {
  let logros = JSON.parse(localStorage.getItem("mastertest_logros")) || {};
  let html = '<div style="display:grid;gap:15px;">';
  
  LOGROS_DEFINICION.forEach(l => {
    const desbloqueado = logros[l.id];
    const clase = desbloqueado ? 'logro-card desbloqueado' : 'logro-card bloqueado';
    const fecha = desbloqueado ? `<div style="font-size:0.75rem;color:var(--text-light);margin-top:5px;">Conseguido: ${new Date(desbloqueado.fecha).toLocaleDateString()}</div>` : '';
    
    html += `
      <div class="${clase}">
        <div style="font-size:2rem;margin-bottom:8px;">${l.nombre.split(' ')[0]}</div>
        <div style="font-weight:700;font-size:1rem;">${l.nombre.substring(l.nombre.indexOf(' ')+1)}</div>
        <div style="font-size:0.85rem;color:var(--text-light);">${l.desc}</div>
        ${fecha}
      </div>
    `;
  });
  
  html += '</div>';
  
  const totalLogros = LOGROS_DEFINICION.length;
  const desbloqueadosCount = Object.keys(logros).length;
  const porcentaje = Math.round((desbloqueadosCount / totalLogros) * 100);
  
  document.getElementById("pantalla-logros").innerHTML = `
    <h1>🏆 Logros</h1>
    <div style="background:var(--card);padding:20px;border-radius:16px;margin-bottom:20px;text-align:center;border:2px solid var(--primary);">
      <div style="font-size:3rem;font-weight:900;color:var(--primary);">${desbloqueadosCount}/${totalLogros}</div>
      <div style="color:var(--text-light);margin-top:5px;">Logros desbloqueados (${porcentaje}%)</div>
      <div class="barra-fondo" style="margin-top:15px;"><div class="barra-relleno" style="width:${porcentaje}%"></div></div>
    </div>
    ${html}
    <button class="btn-outline" onclick="verEstadisticas()" style="width:100%;margin-top:20px;">⬅ Volver</button>
  `;
  mostrarPantalla("pantalla-logros");
}

/* =========================================================
   7. GUÍA REBT (ITC)
   ========================================================= */

// PALETA DE 8 COLORES
const PALETA_COLORES = [
    { nombre: "Azul", main: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
    { nombre: "Granate", main: "#9f1239", bg: "#fff1f2", border: "#fda4af" },
    { nombre: "Verde", main: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
    { nombre: "Marrón", main: "#854d0e", bg: "#fefce8", border: "#fef08a" },
    { nombre: "Violeta", main: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
    { nombre: "Naranja", main: "#ea580c", bg: "#fff7ed", border: "#fed7aa" },
    { nombre: "Rojo/Fucsia", main: "#db2777", bg: "#fdf2f8", border: "#fbcfe8" },
    { nombre: "Oliva", main: "#65a30d", bg: "#f7fee7", border: "#d9f99d" }
];

function obtenerColorITC(n) {
    const index = (n - 1) % 8;
    return PALETA_COLORES[index];
}

function abrirGuiaREBT() {
    mostrarPantalla("pantalla-rebt-guia");
    const grid = document.getElementById("grid-itc");
    grid.innerHTML = "";
    
    for (let i = 1; i <= 52; i++) {
        const numStr = i.toString().padStart(2, '0');
        const hayDatos = typeof REBT_INDICE_DATA !== 'undefined' && REBT_INDICE_DATA[numStr] !== undefined;
        const tema = obtenerColorITC(i);
        
        const btn = document.createElement("div");
        
        let estilo = `
            border-radius: 12px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 1.1rem;
            transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
        `;

        if (hayDatos) {
            estilo += `
                background: ${tema.bg};
                border: 2px solid ${tema.main};
                color: ${tema.main};
                cursor: pointer;
                box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            `;
            btn.onclick = () => verDetalleITC(numStr);
            
            btn.onmouseenter = () => { 
                btn.style.background = tema.main; 
                btn.style.color = "white"; 
                btn.style.transform = "translateY(-3px)";
                btn.style.boxShadow = "0 8px 15px rgba(0,0,0,0.1)";
            };
            btn.onmouseleave = () => { 
                btn.style.background = tema.bg; 
                btn.style.color = tema.main; 
                btn.style.transform = "translateY(0)";
                btn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
            };

        } else {
            estilo += `
                background: #f8fafc; 
                border: 2px solid ${tema.border}; 
                color: #cbd5e1;
                cursor: default;
                opacity: 0.6;
            `;
        }
        
        btn.style.cssText = estilo;
        btn.innerText = numStr;
        grid.appendChild(btn);
    }
}

function verDetalleITC(num) {
    if (typeof REBT_INDICE_DATA === 'undefined') return;
    const data = REBT_INDICE_DATA[num];
    const tema = obtenerColorITC(parseInt(num));
    
    const visor = document.getElementById("visor-itc");
    const titulo = document.getElementById("titulo-itc");
    const lista = document.getElementById("lista-itc");
    
    visor.style.background = tema.bg;
    visor.style.borderColor = tema.main;
    visor.style.boxShadow = `0 10px 25px -5px ${tema.main}30`; 
    
    titulo.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
            <div style="background:${tema.main}; color:white; padding:5px 12px; border-radius:8px; font-size:1.2rem; font-weight:900;">ITC-${num}</div>
        </div>
        <div style="color:${tema.main}; font-size:1.1rem; line-height:1.3; font-weight:700;">${data.t}</div>
    `;
    
    lista.style.color = "#334155"; 
    lista.innerHTML = "";
    data.c.forEach(item => {
        lista.innerHTML += `<li style="margin-bottom:8px; list-style-type:none; position:relative; padding-left:15px;">
            <span style="position:absolute; left:0; top:8px; width:6px; height:6px; border-radius:50%; background:${tema.main};"></span>
            ${item}
        </li>`;
    });
    
    const btnCerrar = visor.querySelector("button");
    if(btnCerrar) {
        btnCerrar.style.borderColor = tema.main;
        btnCerrar.style.color = tema.main;
        btnCerrar.style.background = "white";
        btnCerrar.onmouseenter = () => { btnCerrar.style.background = tema.main; btnCerrar.style.color = "white"; };
        btnCerrar.onmouseleave = () => { btnCerrar.style.background = "white"; btnCerrar.style.color = tema.main; };
    }

    visor.style.display = "block";
    visor.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cerrarDetalleITC() {
    document.getElementById("visor-itc").style.display = "none";
}

/* =========================================================
   8. DASHBOARD AVANZADO
   ========================================================= */
function abrirDashboard() {
  const db = JSON.parse(localStorage.getItem("mastertest_db")) || {};
  
  // Calcular datos por tema
  let temasData = [];
  CONFIGURACION_CURSO.forEach(b => {
    b.asignaturas.forEach(a => {
      const total = a.data.length;
      const dominadas = db[a.nombre]?.dom?.length || 0;
      const porcentaje = total > 0 ? (dominadas / total) * 100 : 0;
      temasData.push({
        nombre: a.nombre,
        total: total,
        dominadas: dominadas,
        porcentaje: Math.round(porcentaje)
      });
    });
  });
  
  // Ordenar por progreso
  temasData.sort((a, b) => b.porcentaje - a.porcentaje);
  
  // Top 5 mejores y peores
  const mejores = temasData.slice(0, 5);
  const peores = temasData.slice(-5).reverse();
  
  let htmlMejores = mejores.map(t => `
    <div style="padding:12px;background:var(--success-bg);border-radius:10px;border-left:4px solid var(--success);">
      <div style="font-weight:700;margin-bottom:5px;">${t.nombre}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div class="barra-fondo" style="flex:1;margin-right:10px;height:8px;">
          <div class="barra-relleno" style="width:${t.porcentaje}%;background:var(--success);"></div>
        </div>
        <span style="font-weight:700;color:var(--success);">${t.porcentaje}%</span>
      </div>
      <div style="font-size:0.75rem;color:var(--text-light);margin-top:3px;">${t.dominadas}/${t.total} dominadas</div>
    </div>
  `).join('');
  
  let htmlPeores = peores.map(t => `
    <div style="padding:12px;background:var(--danger-bg);border-radius:10px;border-left:4px solid var(--danger);">
      <div style="font-weight:700;margin-bottom:5px;">${t.nombre}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div class="barra-fondo" style="flex:1;margin-right:10px;height:8px;">
          <div class="barra-relleno" style="width:${t.porcentaje}%;background:var(--danger);"></div>
        </div>
        <span style="font-weight:700;color:var(--danger);">${t.porcentaje}%</span>
      </div>
      <div style="font-size:0.75rem;color:var(--text-light);margin-top:3px;">${t.dominadas}/${t.total} dominadas</div>
    </div>
  `).join('');
  
  // Stats globales
  let totalP = 0, totalD = 0;
  temasData.forEach(t => { totalP += t.total; totalD += t.dominadas; });
  const progresoGlobal = totalP > 0 ? Math.round((totalD / totalP) * 100) : 0;
  
  document.getElementById("pantalla-dashboard").innerHTML = `
    <h1>📊 Dashboard</h1>
    
    <div style="background:linear-gradient(135deg,var(--primary),#60a5fa);color:white;padding:25px;border-radius:16px;margin-bottom:20px;text-align:center;">
      <div style="font-size:0.9rem;opacity:0.9;margin-bottom:5px;">Progreso Global</div>
      <div style="font-size:3.5rem;font-weight:900;">${progresoGlobal}%</div>
      <div style="margin-top:15px;background:rgba(255,255,255,0.2);height:10px;border-radius:20px;overflow:hidden;">
        <div style="height:100%;background:white;width:${progresoGlobal}%;transition:width 1s ease;"></div>
      </div>
      <div style="margin-top:10px;font-size:0.85rem;opacity:0.9;">${totalD} de ${totalP} preguntas dominadas</div>
    </div>
    
    <h3 style="color:var(--success);margin-bottom:15px;">🔥 Top 5 - Mejor Dominio</h3>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:25px;">${htmlMejores}</div>
    
    <h3 style="color:var(--danger);margin-bottom:15px;">⚠️ Top 5 - Necesitan Refuerzo</h3>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:25px;">${htmlPeores}</div>
    
    <button class="btn-outline" onclick="verEstadisticas()" style="width:100%;">⬅ Volver</button>
  `;
  mostrarPantalla("pantalla-dashboard");
}

/* =========================================================
   9. SISTEMA DE FLASHCARDS
   ========================================================= */
let flashcardsActuales = [];
let flashcardIndex = 0;

function abrirFlashcards() {
  mostrarPantalla("pantalla-flashcards");
  renderSelectorFlashcards();
}

function renderSelectorFlashcards() {
  const fails = JSON.parse(localStorage.getItem("mastertest_fails")) || [];
  const db = JSON.parse(localStorage.getItem("mastertest_db")) || {};
  
  let temasHTML = "";
  
  // Opción: Fallos
  const numFallos = fails.length;
  temasHTML += `
    <div class="strip-card" style="border-left:5px solid var(--danger); cursor:pointer;" onclick="iniciarFlashcardsTema('fallos')">
      <div>
        <div class="strip-header" style="color:var(--danger)">💀 Purgatorio</div>
        <div class="strip-meta">${numFallos} preguntas falladas</div>
      </div>
      <button class="btn-pill-right" style="background:var(--danger);">🎴 Estudiar</button>
    </div>
  `;
  
  // Opción: Aleatorias
  temasHTML += `
    <div class="strip-card" style="border-left:5px solid var(--primary); cursor:pointer;" onclick="iniciarFlashcardsTema('aleatorias')">
      <div>
        <div class="strip-header" style="color:var(--primary)">🎲 Aleatorias</div>
        <div class="strip-meta">10 preguntas al azar</div>
      </div>
      <button class="btn-pill-right" style="background:var(--primary);">🎴 Estudiar</button>
    </div>
  `;
  
  // Opciones: Por tema
  CONFIGURACION_CURSO.forEach(bloque => {
    bloque.asignaturas.forEach(asig => {
      const total = asig.data.length;
      const dominadas = db[asig.nombre]?.dom?.length || 0;
      const porcentaje = total > 0 ? Math.round((dominadas / total) * 100) : 0;
      
      let color = "var(--danger)";
      if (porcentaje >= 80) color = "var(--success)";
      else if (porcentaje >= 30) color = "var(--orange)";
      
      temasHTML += `
        <div class="strip-card" style="border-left:5px solid ${color}; cursor:pointer;" onclick="iniciarFlashcardsTema('${asig.nombre}')">
          <div>
            <div class="strip-header" style="color:${color}">${asig.nombre}</div>
            <div class="strip-meta">${total} preguntas · ${porcentaje}% dominado</div>
          </div>
          <button class="btn-pill-right" style="background:${color};">🎴 Estudiar</button>
        </div>
      `;
    });
  });
  
  document.getElementById("pantalla-flashcards").innerHTML = `
    <div class="header-flex" style="margin-bottom:30px;">
      <h1>🎴 Flashcards</h1>
      <button class="btn-outline" onclick="volverAlMenu()">⬅ Volver</button>
    </div>
    
    <div style="margin-bottom:20px; padding:15px; background:var(--primary-light); border-radius:12px; border-left:4px solid var(--primary);">
      <div style="font-weight:700; color:var(--primary); margin-bottom:5px;">💡 ¿Cómo funcionan?</div>
      <div style="font-size:0.9rem; color:var(--text-light);">
        Elige un tema → Estudia 10 flashcards → Voltea para ver respuesta → Repaso rápido en 5-10 min
      </div>
    </div>
    
    <h3 style="margin-bottom:15px;">📚 Selecciona tema para estudiar:</h3>
    <div style="display:grid; gap:12px;">
      ${temasHTML}
    </div>
  `;
}

function iniciarFlashcardsTema(tema) {
  const fails = JSON.parse(localStorage.getItem("mastertest_fails")) || [];
  let pool = [];
  
  if (tema === 'fallos') {
    // Solo preguntas falladas
    CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => {
      pool.push(...a.data.filter(p => fails.includes(p.id)));
    }));
    if (pool.length === 0) {
      alert("🎉 ¡No tienes preguntas en el purgatorio!\n\nSigue practicando para mantenerlo limpio.");
      return;
    }
  } else if (tema === 'aleatorias') {
    // Aleatorias de todo
    CONFIGURACION_CURSO.forEach(b => b.asignaturas.forEach(a => pool.push(...a.data)));
  } else {
    // Tema específico
    CONFIGURACION_CURSO.forEach(b => {
      const asig = b.asignaturas.find(a => a.nombre === tema);
      if (asig) pool.push(...asig.data);
    });
  }
  
  // Limitar a 10 y mezclar
  flashcardsActuales = shuffle(pool).slice(0, Math.min(10, pool.length));
  flashcardIndex = 0;
  
  renderFlashcard();
}

function renderFlashcard() {
  const p = flashcardsActuales[flashcardIndex];
  
  document.getElementById("pantalla-flashcards").innerHTML = `
    <div class="header-flex" style="margin-bottom:20px;">
      <h1>🎴 Flashcards</h1>
      <button class="btn-outline" onclick="abrirFlashcards()">⬅ Cambiar tema</button>
    </div>
    
    <div style="text-align:center; margin-bottom:15px; color:var(--text-light); font-weight:600;">
      Tarjeta ${flashcardIndex + 1} de ${flashcardsActuales.length}
    </div>
    
    <div class="flashcard" id="flashcard-actual">
      <div class="flashcard-inner" id="flashcard-inner">
        <div class="flashcard-front">
          <div>${p.texto}</div>
        </div>
        <div class="flashcard-back">
          <div>
            <div style="font-size:1.1rem; color:var(--success); margin-bottom:15px;">✅ ${p.correctaTexto}</div>
            ${p.explicacion ? `<div style="font-size:0.9rem; color:var(--text-light); margin-top:15px; line-height:1.5;">${p.explicacion}</div>` : ''}
          </div>
        </div>
      </div>
    </div>
    
    <div style="text-align:center; color:var(--text-light); font-size:0.9rem; margin-bottom:10px;">
      👆 Click en la tarjeta para voltear
    </div>
    
    <div class="flashcard-controls">
      <button class="btn-outline" onclick="flashcardAnterior()" ${flashcardIndex === 0 ? 'disabled' : ''}>⬅ Anterior</button>
      <button class="btn-orange" onclick="flashcardSiguiente()">${flashcardIndex === flashcardsActuales.length - 1 ? 'Finalizar' : 'Siguiente ➡'}</button>
    </div>
  `;
  
  // Añadir event listener después de renderizar
  setTimeout(() => {
    const flashcard = document.getElementById('flashcard-actual');
    if (flashcard) {
      flashcard.onclick = voltearFlashcard;
    }
  }, 0);
}

function voltearFlashcard() {
  const flashcard = document.getElementById('flashcard-actual');
  if (flashcard) {
    flashcard.classList.toggle('flipped');
  }
}

function flashcardAnterior() {
  if (flashcardIndex > 0) {
    flashcardIndex--;
    renderFlashcard();
  }
}

function flashcardSiguiente() {
  if (flashcardIndex < flashcardsActuales.length - 1) {
    flashcardIndex++;
    renderFlashcard();
  } else {
    alert("🎉 ¡Has completado todas las flashcards!\n\nSigue practicando para mejorar tu retención.");
    volverAlMenu();
  }
}

/* =========================================================
   10. MAPA MENTAL INTERACTIVO
   ========================================================= */
function abrirMapaMental() {
  const db = JSON.parse(localStorage.getItem("mastertest_db")) || {};
  
  // Calcular estado de cada tema
  let nodos = [];
  CONFIGURACION_CURSO.forEach((bloque, idx) => {
    bloque.asignaturas.forEach((asig, aidx) => {
      const total = asig.data.length;
      const dominadas = db[asig.nombre]?.dom?.length || 0;
      const porcentaje = total > 0 ? (dominadas / total) * 100 : 0;
      
      let estado = 'pendiente';
      if (porcentaje >= 80) estado = 'dominado';
      else if (porcentaje >= 30) estado = 'en-progreso';
      
      nodos.push({
        nombre: asig.nombre,
        estado: estado,
        porcentaje: Math.round(porcentaje),
        x: 100 + (idx * 200),
        y: 80 + (aidx * 100),
        bloque: bloque.titulo_boton
      });
    });
  });
  
  // Generar HTML del mapa
  let nodosHTML = nodos.map((n, i) => `
    <div class="nodo ${n.estado}" style="left:${n.x}px; top:${n.y}px;" onclick="verDetalleNodo('${n.nombre}')">
      <div style="font-size:0.85rem;">${n.nombre}</div>
      <div style="font-size:0.75rem; margin-top:5px; opacity:0.8;">${n.porcentaje}%</div>
    </div>
  `).join('');
  
  document.getElementById("pantalla-mapa-mental").innerHTML = `
    <div class="header-flex" style="margin-bottom:20px;">
      <h1>🗺️ Mapa Mental</h1>
      <button class="btn-outline" onclick="verEstadisticas()">⬅ Volver</button>
    </div>
    
    <div style="display:flex; gap:20px; margin-bottom:20px; flex-wrap:wrap;">
      <div style="display:flex; align-items:center; gap:8px;">
        <div style="width:20px; height:20px; background:var(--success-bg); border:2px solid var(--success); border-radius:6px;"></div>
        <span style="font-size:0.85rem;">Dominado (≥80%)</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <div style="width:20px; height:20px; background:#fff7ed; border:2px solid var(--orange); border-radius:6px;"></div>
        <span style="font-size:0.85rem;">En progreso (30-79%)</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <div style="width:20px; height:20px; background:var(--danger-bg); border:2px solid var(--danger); border-radius:6px;"></div>
        <span style="font-size:0.85rem;">Pendiente (<30%)</span>
      </div>
    </div>
    
    <div class="mapa-container" style="overflow:auto;">
      ${nodosHTML}
    </div>
    
    <div style="text-align:center; margin-top:15px; color:var(--text-light); font-size:0.9rem;">
      👆 Click en cualquier tema para ver preguntas o estudiar
    </div>
  `;
  
  mostrarPantalla("pantalla-mapa-mental");
}

function verDetalleNodo(nombreAsig) {
  // Encontrar el tema y lanzar el test
  CONFIGURACION_CURSO.forEach((bloque, bidx) => {
    const idx = bloque.asignaturas.findIndex(a => a.nombre === nombreAsig);
    if (idx !== -1) {
      jugar('carrera', idx, bloque.bloque);
    }
  });
}

/* =========================================================
   11. SISTEMA DE ACTUALIZACIÓN Y AYUDA
   ========================================================= */

function buscarActualizaciones() {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    // Forzar verificación de actualización
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg) {
        reg.update().then(() => {
          alert("🔄 Verificando actualizaciones...\n\nSi hay una nueva versión, se descargará en segundo plano.\n\nRecarga la app (F5 o pull-down) para aplicarla.");
        });
      }
    });
  } else {
    alert("✅ Ya estás usando la última versión\n\nMasterTest BT v66");
  }
}

function abrirAyuda() {
  document.getElementById("pantalla-estadisticas").innerHTML = `
    <div class="header-flex" style="margin-bottom:20px;">
      <h1>❓ Ayuda</h1>
      <button class="btn-outline" onclick="verEstadisticas()">⬅ Volver</button>
    </div>
    
    <div style="background:var(--primary-light); padding:20px; border-radius:12px; border-left:4px solid var(--primary); margin-bottom:20px;">
      <h3 style="margin:0 0 15px 0; color:var(--primary);">📱 Cómo actualizar la app</h3>
      
      <div style="margin-bottom:20px;">
        <div style="font-weight:700; margin-bottom:8px;">📱 EN MÓVIL:</div>
        <ol style="margin:0; padding-left:20px; line-height:1.8;">
          <li><b>Abre la app</b> desde el icono</li>
          <li><b>Arrastra hacia abajo</b> desde la parte superior (pull-to-refresh)</li>
          <li>La app se recarga con la nueva versión ✅</li>
        </ol>
      </div>
      
      <div style="margin-bottom:20px;">
        <div style="font-weight:700; margin-bottom:8px;">💻 EN PC:</div>
        <ol style="margin:0; padding-left:20px; line-height:1.8;">
          <li><b>Abre la app</b> desde el icono</li>
          <li>Presiona <b>F5</b> (o Ctrl+R)</li>
          <li>La app se recarga con la nueva versión ✅</li>
        </ol>
      </div>
      
      <div style="background:var(--danger-bg); padding:15px; border-radius:8px; border-left:4px solid var(--danger);">
        <div style="font-weight:700; color:var(--danger); margin-bottom:5px;">⚠️ MUY IMPORTANTE:</div>
        <div style="font-size:0.9rem; line-height:1.6;">
          <b>NUNCA desinstales</b> la app para actualizarla.<br>
          Si desinstalas → <b>Perderás todo tu progreso</b> (logros, favoritos, estadísticas).
        </div>
      </div>
    </div>
    
    <div style="background:var(--bg); padding:20px; border-radius:12px; margin-bottom:20px;">
      <h3 style="margin:0 0 15px 0;">💾 Backup de tu progreso</h3>
      
      <div style="font-size:0.95rem; line-height:1.7; margin-bottom:15px;">
        Para proteger tu progreso, haz backup regularmente:
      </div>
      
      <ol style="margin:0 0 15px 0; padding-left:20px; line-height:1.8;">
        <li>Ve a <b>Stats → ⬇️ Backup</b></li>
        <li>Se descarga un archivo JSON</li>
        <li>Guárdalo en un lugar seguro</li>
        <li>Para restaurar: <b>Stats → ⬆️ Cargar</b></li>
      </ol>
      
      <div style="background:var(--success-bg); padding:12px; border-radius:8px; font-size:0.9rem;">
        <b>💡 Consejo:</b> Haz backup cada semana o después de sesiones largas de estudio.
      </div>
    </div>
    
    <div style="background:var(--bg); padding:20px; border-radius:12px; margin-bottom:20px;">
      <h3 style="margin:0 0 15px 0;">🎯 Atajos útiles</h3>
      
      <div style="display:grid; gap:10px;">
        <div style="display:flex; justify-content:space-between; padding:10px; background:white; border-radius:8px;">
          <span>🏠 Volver al menú</span>
          <span style="font-weight:700; color:var(--primary);">Click en "Salir"</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:10px; background:white; border-radius:8px;">
          <span>⭐ Marcar favorito</span>
          <span style="font-weight:700; color:var(--primary);">Click en la estrella</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:10px; background:white; border-radius:8px;">
          <span>🚀 Modo Turbo</span>
          <span style="font-weight:700; color:var(--primary);">Click en 🐢</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:10px; background:white; border-radius:8px;">
          <span>🎴 Flashcards</span>
          <span style="font-weight:700; color:var(--primary);">Click en tarjeta</span>
        </div>
      </div>
    </div>
    
    <div style="background:var(--bg); padding:20px; border-radius:12px; text-align:center;">
      <div style="font-size:1.2rem; font-weight:700; margin-bottom:10px;">MasterTest BT v66</div>
      <div style="font-size:0.9rem; color:var(--text-light);">
        Pro (Update System) · Entrenador BT
      </div>
      <div style="margin-top:15px; font-size:0.85rem; color:var(--text-light);">
        ¿Problemas? Haz backup y contacta soporte
      </div>
    </div>
    
    <button class="btn-outline" onclick="verEstadisticas()" style="width:100%; margin-top:20px;">⬅ Volver a Stats</button>
  `;
  mostrarPantalla("pantalla-estadisticas");
}

// Recordatorio de backup
function verificarBackupPendiente() {
  const ultimoBackup = localStorage.getItem("mastertest_ultimo_backup");
  const ahora = Date.now();
  const diasSinBackup = ultimoBackup ? (ahora - parseInt(ultimoBackup)) / (1000 * 60 * 60 * 24) : 999;
  
  if (diasSinBackup > 7) {
    // Mostrar badge en el botón de Stats
    const statsBtn = document.querySelector('[onclick="verEstadisticas()"]');
    if (statsBtn && !document.getElementById('backup-badge')) {
      const badge = document.createElement('span');
      badge.id = 'backup-badge';
      badge.style.cssText = 'position:absolute; top:-5px; right:-5px; background:var(--danger); color:white; border-radius:50%; width:20px; height:20px; font-size:0.7rem; display:flex; align-items:center; justify-content:center; font-weight:700;';
      badge.textContent = '!';
      statsBtn.style.position = 'relative';
      statsBtn.appendChild(badge);
    }
  }
}

// Llamar al cargar la app
setTimeout(verificarBackupPendiente, 2000);

/* =========================================================
   12. SISTEMA DE IA - GENERACIÓN Y ESTUDIO PROFUNDO
   ========================================================= */

// Variables globales para IA
let explicacionesCache = JSON.parse(localStorage.getItem('mastertest_explicaciones_cache')) || {};
let preguntasIAStorage = JSON.parse(localStorage.getItem('mastertest_ia_preguntas')) || [];

// Guardar caché de explicaciones
function guardarExplicacionesCache() {
  localStorage.setItem('mastertest_explicaciones_cache', JSON.stringify(explicacionesCache));
}

// Guardar preguntas IA
function guardarPreguntasIA() {
  localStorage.setItem('mastertest_ia_preguntas', JSON.stringify(preguntasIAStorage));
}

// Obtener preguntas IA de un tema
function obtenerPreguntasIATema(nombreTema) {
  return preguntasIAStorage.filter(p => p.tema === nombreTema);
}

// Generar preguntas con IA
async function generarPreguntasIA(tema, cantidad = 10) {
  console.log('🚀 generarPreguntasIA llamada con:', tema, cantidad);
  try {
    // Mostrar loading
    const loadingHtml = `
      <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:10000; display:flex; align-items:center; justify-content:center;" id="loading-ia">
        <div style="background:white; padding:40px; border-radius:20px; text-align:center; max-width:400px;">
          <div style="font-size:3rem; margin-bottom:20px;">🤖</div>
          <h2 style="margin-bottom:15px;">Generando preguntas...</h2>
          <p style="color:#64748b; margin-bottom:20px;">La IA está creando ${cantidad} preguntas nuevas sobre "${tema}"</p>
          <div style="width:100%; height:6px; background:#e2e8f0; border-radius:10px; overflow:hidden;">
            <div style="width:0%; height:100%; background:var(--primary); border-radius:10px; animation:progress 3s ease-in-out infinite;" id="progress-bar"></div>
          </div>
          <p style="font-size:0.9rem; color:#94a3b8; margin-top:15px;">Esto puede tardar 5-10 segundos...</p>
        </div>
      </div>
      <style>
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 95%; }
        }
      </style>
    `;
    document.body.insertAdjacentHTML('beforeend', loadingHtml);

    // Detectar nivel de dificultad según progreso del tema
    const db = JSON.parse(localStorage.getItem("mastertest_db")) || {};
    const estadoTema = db[tema] || {};
    const porcentaje = estadoTema.dom ? (estadoTema.dom.length / estadoTema.active.length) * 100 : 0;
    
    let dificultad;
    if (porcentaje < 60) dificultad = 'basico';
    else if (porcentaje < 85) dificultad = 'medio';
    else dificultad = 'avanzado';

    // Obtener ejemplos de preguntas existentes del tema
    let preguntasEjemplo = [];
    // Buscar el tema en CONFIGURACION_CURSO
    CONFIGURACION_CURSO.forEach(bloque => {
      const asigEncontrada = bloque.asignaturas.find(a => a.nombre === tema);
      if (asigEncontrada && asigEncontrada.data) {
        preguntasEjemplo = asigEncontrada.data.slice(0, 5);
      }
    });
    
    console.log('📝 Ejemplos de preguntas encontrados:', preguntasEjemplo.length);

    // Llamar a la función de Netlify
    const response = await fetch('/.netlify/functions/generar-preguntas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tema,
        dificultad,
        cantidad,
        preguntasEjemplo
      })
    });

    const data = await response.json();

    // Quitar loading
    document.getElementById('loading-ia')?.remove();
    
    // Logging detallado v67.24
    console.log('📊 Respuesta generar-preguntas:', {
      status: response.status,
      success: data.success,
      error: data.error,
      details: data.details,
      rawContent: data.rawContent
    });

    if (!data.success) {
      const errorText = data.error || 'Error desconocido';
      console.error('❌ Error API generar preguntas:', errorText, 'Status:', response.status);
      console.error('Details:', data.details);
      console.error('Raw content:', data.rawContent);
      
      let titulo = 'Error al generar preguntas';
      let detalle = errorText;
      
      // Diagnóstico específico v67.24
      if (response.status === 401 || errorText.includes('API key') || errorText.includes('Unauthorized')) {
        titulo = '🔑 API key no configurada';
        detalle = 'Ve a Netlify → Site configuration → Environment variables → Agrega ANTHROPIC_API_KEY';
      } else if (response.status === 429 || errorText.includes('quota') || errorText.includes('rate limit')) {
        titulo = '💳 Sin créditos API';
        detalle = 'Tu API key se quedó sin créditos. Recarga en console.anthropic.com';
      } else if (response.status === 500 || response.status === 502 || response.status === 503) {
        titulo = '🔥 Error del servidor';
        detalle = 'Netlify Functions falló. Espera 1 minuto o verifica que se desplegaron correctamente.';
      } else if (errorText.includes('timeout')) {
        titulo = '⏱️ Tiempo agotado';
        detalle = 'La generación tardó demasiado. Intenta con menos preguntas (5 en vez de 10).';
      }
      
      showToast('error', titulo, detalle);
      return null;
    }

    // Guardar preguntas generadas
    preguntasIAStorage = preguntasIAStorage.concat(data.preguntas);
    guardarPreguntasIA();

    // Mostrar confirmación
    const confirmHtml = `
      <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:10000; display:flex; align-items:center; justify-content:center;" id="confirm-ia">
        <div style="background:white; padding:40px; border-radius:20px; text-align:center; max-width:500px;">
          <div style="font-size:3rem; margin-bottom:20px;">✅</div>
          <h2 style="margin-bottom:15px; color:var(--success);">¡Preguntas generadas!</h2>
          <p style="color:#64748b; margin-bottom:20px;">Se han añadido <strong>${data.preguntas.length} preguntas nuevas</strong> al tema "${tema}"</p>
          <p style="font-size:0.9rem; color:#94a3b8; margin-bottom:25px;">Nivel: ${dificultad} • Total en tema: ${estadoTema.active.length + data.preguntas.length}</p>
          <button class="btn-orange" onclick="document.getElementById('confirm-ia').remove(); location.reload();" style="width:100%;">
            ✨ ¡Empezar a estudiarlas!
          </button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', confirmHtml);

    return data.preguntas;

  } catch (error) {
    document.getElementById('loading-ia')?.remove();
    console.error('❌ Error generando preguntas:', error);
    
    // Diagnóstico mejorado
    let errorMsg = 'Error al generar preguntas';
    let errorDetail = '';
    
    if (!navigator.onLine) {
      errorMsg = 'Sin conexión a internet';
      errorDetail = 'Verifica tu conexión WiFi o datos móviles.';
    } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
      errorMsg = 'Error de red';
      errorDetail = 'No se pudo conectar con el servidor. Intenta de nuevo.';
    } else if (error.message && error.message.includes('timeout')) {
      errorMsg = 'Tiempo agotado';
      errorDetail = 'La generación tardó demasiado. Intenta con menos preguntas.';
    } else {
      errorDetail = 'Verifica tu conexión o intenta más tarde.';
      console.error('Detalles:', error);
    }
    
    showToast('error', errorMsg, errorDetail);
    return null;
  }
}

// Generar explicación profunda
async function generarExplicacionProfunda(pregunta, tema, respuestaCorrecta, explicacionCorta) {
  // Generar ID único para caché
  const cacheId = `${tema}_${pregunta.substring(0, 50)}`.replace(/[^a-zA-Z0-9]/g, '_');

  // Verificar si ya está en caché
  if (explicacionesCache[cacheId]) {
    mostrarExplicacionProfunda(explicacionesCache[cacheId], pregunta, tema);
    return;
  }

  try {
    // Mostrar loading
    const loadingHtml = `
      <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:10000; display:flex; align-items:center; justify-content:center; overflow-y:auto; padding:20px;" id="loading-explicacion">
        <div style="background:white; padding:40px; border-radius:20px; text-align:center; max-width:600px; width:100%;">
          <div style="font-size:3rem; margin-bottom:20px;">📚</div>
          <h2 style="margin-bottom:15px;">Generando estudio profundo...</h2>
          <p style="color:#64748b; margin-bottom:20px;">"${pregunta.substring(0, 80)}${pregunta.length > 80 ? '...' : ''}"</p>
          <div style="width:100%; height:6px; background:#e2e8f0; border-radius:10px; overflow:hidden;">
            <div style="width:0%; height:100%; background:linear-gradient(90deg, #f59e0b 0%, #f97316 100%); border-radius:10px; animation:progress 4s ease-in-out infinite;"></div>
          </div>
          <p style="font-size:0.9rem; color:#94a3b8; margin-top:15px;">Preparando explicación completa...</p>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loadingHtml);

    // Llamar a la función
    const response = await fetch('/.netlify/functions/explicacion-profunda', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pregunta,
        tema,
        respuestaCorrecta,
        explicacionCorta
      })
    });

    const data = await response.json();

    // Quitar loading
    document.getElementById('loading-explicacion')?.remove();

    if (!data.success) {
      const errorText = data.error || 'Error desconocido';
      console.error('❌ Error API explicación:', errorText, 'Status:', response.status);
      
      let titulo = 'Error al generar explicación';
      let detalle = errorText;
      
      // Diagnóstico específico v67.24
      if (response.status === 401 || errorText.includes('API key') || errorText.includes('Unauthorized')) {
        titulo = '🔑 API key no configurada';
        detalle = 'Ve a Netlify → Site configuration → Environment variables → Agrega ANTHROPIC_API_KEY';
      } else if (response.status === 429 || errorText.includes('quota') || errorText.includes('rate limit')) {
        titulo = '💳 Sin créditos API';
        detalle = 'Tu API key se quedó sin créditos. Recarga en console.anthropic.com';
      } else if (response.status === 500 || response.status === 502 || response.status === 503) {
        titulo = '🔥 Error del servidor';
        detalle = 'Netlify Functions falló. Espera 1 minuto o verifica Deploy logs.';
      } else if (errorText.includes('timeout')) {
        titulo = '⏱️ Tiempo agotado';
        detalle = 'La generación tardó demasiado. Intenta de nuevo en 30 segundos.';
      }
      
      showToast('error', titulo, detalle);
      return;
    }

    // Guardar en caché
    explicacionesCache[cacheId] = data.explicacion;
    guardarExplicacionesCache();

    // v67.24: Logging si se usaron apuntes
    if (data.usaApuntes) {
      console.log('📚 Explicación generada usando apuntes literales');
    } else {
      console.log('🤖 Explicación generada por IA (sin apuntes)');
    }

    // Mostrar explicación
    mostrarExplicacionProfunda(data.explicacion, pregunta, tema, data.usaApuntes);

  } catch (error) {
    document.getElementById('loading-explicacion')?.remove();
    console.error('❌ Error generando explicación:', error);
    
    let titulo = 'Error de conexión';
    let detalle = 'No se pudo conectar con el servidor.';
    
    if (!navigator.onLine) {
      titulo = 'Sin internet';
      detalle = 'Verifica tu conexión WiFi o datos móviles.';
    } else if (error.message && error.message.includes('fetch')) {
      detalle = 'No se pudo conectar con Netlify Functions. Verifica que estén desplegadas.';
    }
    
    showToast('error', titulo, detalle);
  }
}

// Mostrar explicación profunda
function mostrarExplicacionProfunda(explicacion, pregunta, tema, usaApuntes = false) {
  // Convertir markdown simple a HTML
  let html = explicacion
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/• /g, '<br>• ');

  const fuenteBadge = usaApuntes 
    ? '<span style="background:#10b981; color:white; padding:4px 12px; border-radius:8px; font-size:0.85rem; font-weight:600;">📚 De tus apuntes</span>'
    : '<span style="background:#8b5cf6; color:white; padding:4px 12px; border-radius:8px; font-size:0.85rem; font-weight:600;">🤖 Generado por IA</span>';

  const pantalla = `
    <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:white; z-index:9999; overflow-y:auto; padding:20px;" id="pantalla-explicacion">
      <div style="max-width:800px; margin:0 auto;">
        <div class="header-flex" style="margin-bottom:30px; position:sticky; top:0; background:white; padding:10px 0; z-index:100;">
          <h1 style="font-size:1.5rem;">📚 Estudio Profundo</h1>
          <button class="btn-outline" onclick="document.getElementById('pantalla-explicacion').remove();">✕ Cerrar</button>
        </div>

        <div style="background:var(--primary-light); padding:20px; border-radius:12px; margin-bottom:20px; border-left:4px solid var(--primary);">
          <div style="display:flex; justify-content:space-between; align-items:start; flex-wrap:wrap; gap:10px; margin-bottom:8px;">
            <div style="font-size:0.9rem; font-weight:600; color:var(--primary);">PREGUNTA</div>
            ${fuenteBadge}
          </div>
          <div style="font-size:1.1rem; font-weight:600;">${pregunta}</div>
          <div style="font-size:0.85rem; color:var(--text-light); margin-top:8px;">Tema: ${tema}</div>
        </div>

        <div style="background:var(--bg); padding:30px; border-radius:12px; line-height:1.8; font-size:1rem;">
          ${html}
        </div>

        <div style="margin-top:30px; display:grid; gap:15px;">
          <button class="btn-orange" onclick="document.getElementById('pantalla-explicacion').remove();" style="width:100%;">
            ✅ Entendido, volver
          </button>
          <button class="btn-outline" onclick="alert('Función de exportar PDF próximamente...')" style="width:100%;">
            💾 Guardar como PDF
          </button>
        </div>

        <div style="margin-top:20px; text-align:center; font-size:0.85rem; color:var(--text-light);">
          💡 Esta explicación se ha guardado y estará disponible offline
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', pantalla);
}

// Integrar preguntas IA en el sistema de juego
function obtenerTodasLasPreguntasTema(nombreTema) {
  // Preguntas originales
  const originales = PREGUNTAS_DATA.filter(p => p.tema === nombreTema);
  
  // Preguntas IA
  const ia = obtenerPreguntasIATema(nombreTema);
  
  // Mezclar
  return originales.concat(ia);
}

// Estadísticas de IA
function verEstadisticasIA() {
  const totalIA = preguntasIAStorage.length;
  const porTema = {};
  
  preguntasIAStorage.forEach(p => {
    porTema[p.tema] = (porTema[p.tema] || 0) + 1;
  });

  let listaHtml = '';
  for (const tema in porTema) {
    listaHtml += `
      <div style="display:flex; justify-content:space-between; padding:12px; background:white; border-radius:8px; margin-bottom:8px;">
        <span>${tema}</span>
        <span style="font-weight:700; color:var(--primary);">${porTema[tema]} preguntas</span>
      </div>
    `;
  }

  document.getElementById("pantalla-estadisticas").innerHTML = `
    <div class="header-flex" style="margin-bottom:20px;">
      <h1>🤖 Preguntas Generadas por IA</h1>
      <button class="btn-outline" onclick="verEstadisticas()">⬅ Volver</button>
    </div>

    <div style="background:var(--primary-light); padding:20px; border-radius:12px; border-left:4px solid var(--primary); margin-bottom:30px; text-align:center;">
      <div style="font-size:3rem; font-weight:700; color:var(--primary); margin-bottom:10px;">${totalIA}</div>
      <div style="font-size:1.1rem; font-weight:600;">Preguntas generadas con IA</div>
      <div style="font-size:0.9rem; color:var(--text-light); margin-top:5px;">Integradas en tus temas</div>
    </div>

    ${totalIA > 0 ? `
      <h3 style="margin-bottom:15px;">📊 Por tema:</h3>
      ${listaHtml}

      <div style="margin-top:30px; display:grid; gap:15px;">
        <button class="btn-outline" onclick="if(confirm('¿Eliminar TODAS las preguntas IA?')) { preguntasIAStorage = []; guardarPreguntasIA(); verEstadisticasIA(); }" style="width:100%;">
          🗑️ Eliminar todas las preguntas IA
        </button>
      </div>
    ` : `
      <div style="background:var(--bg); padding:30px; border-radius:12px; text-align:center;">
        <div style="font-size:2rem; margin-bottom:15px;">🎯</div>
        <h3 style="margin-bottom:10px;">Aún no has generado preguntas</h3>
        <p style="color:var(--text-light);">Domina un tema al 100% y aparecerá el botón para generar preguntas nuevas con IA.</p>
      </div>
    `}

    <button class="btn-outline" onclick="verEstadisticas()" style="width:100%; margin-top:20px;">⬅ Volver a Stats</button>
  `;
  
  mostrarPantalla("pantalla-estadisticas");
}

// Estadísticas de explicaciones
function verEstadisticasExplicaciones() {
  const totalExpl = Object.keys(explicacionesCache).length;

  document.getElementById("pantalla-estadisticas").innerHTML = `
    <div class="header-flex" style="margin-bottom:20px;">
      <h1>📚 Mis Estudios Profundos</h1>
      <button class="btn-outline" onclick="verEstadisticas()">⬅ Volver</button>
    </div>

    <div style="background:linear-gradient(135deg, #f59e0b 0%, #f97316 100%); color:white; padding:20px; border-radius:12px; margin-bottom:30px; text-align:center;">
      <div style="font-size:3rem; font-weight:700; margin-bottom:10px;">${totalExpl}</div>
      <div style="font-size:1.1rem; font-weight:600;">Explicaciones guardadas</div>
      <div style="font-size:0.9rem; opacity:0.9; margin-top:5px;">Disponibles offline</div>
    </div>

    ${totalExpl > 0 ? `
      <div style="background:var(--bg); padding:20px; border-radius:12px; margin-bottom:20px;">
        <p style="margin-bottom:15px;">Tus explicaciones profundas están guardadas en caché y disponibles sin conexión.</p>
        <p style="font-size:0.9rem; color:var(--text-light);">Para verlas, busca el botón "📚 Estudiar a fondo" en cualquier pregunta que ya hayas estudiado.</p>
      </div>

      <button class="btn-outline" onclick="if(confirm('¿Limpiar todas las explicaciones del caché?')) { explicacionesCache = {}; guardarExplicacionesCache(); verEstadisticasExplicaciones(); }" style="width:100%;">
        🗑️ Limpiar caché de explicaciones
      </button>
    ` : `
      <div style="background:var(--bg); padding:30px; border-radius:12px; text-align:center;">
        <div style="font-size:2rem; margin-bottom:15px;">📖</div>
        <h3 style="margin-bottom:10px;">Aún no has usado el estudio profundo</h3>
        <p style="color:var(--text-light);">Cuando respondas una pregunta, haz click en "📚 Estudiar a fondo" para obtener una explicación completa.</p>
      </div>
    `}

    <button class="btn-outline" onclick="verEstadisticas()" style="width:100%; margin-top:20px;">⬅ Volver a Stats</button>
  `;

  mostrarPantalla("pantalla-estadisticas");
}

console.log('✅ Sistema de IA cargado');
