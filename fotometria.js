/* =========================================================
   MÓDULO FOTOMETRÍA - v67.24
   Lumen, Candela, Lux y Luminancia
   ========================================================= */

const FOTOMETRIA_DATA = {
  conceptos: [
    {
      id: 'lumen',
      nombre: 'LUMEN',
      simbolo: 'lm',
      magnitud: 'Flujo Luminoso',
      letra: 'Φ',
      color: 'bg-amber',
      emoji: '💡',
      analogia: 'Litros por minuto del grifo',
      analogiaDetalle: 'Caudal TOTAL de agua que sale del grifo',
      pregunta: '¿Cuánta luz TOTAL emite la fuente?',
      punto: 'Desde la FUENTE de luz (la bombilla)',
      definicion: 'La cantidad TOTAL de luz visible que emite una fuente en todas las direcciones.',
      formula: 'Φ = I × Ω',
      formulaExplicacion: 'Flujo = Intensidad × Ángulo sólido',
      ejemplos: [
        { item: 'Bombilla LED 9W', valor: '~800 lm' },
        { item: 'Bombilla incandescente 60W', valor: '~800 lm' },
        { item: 'Tubo fluorescente 36W', valor: '~3.350 lm' },
        { item: 'Foco halógeno 500W', valor: '~9.000 lm' },
      ],
      truco: 'LUMen = LUz Mensurable total',
      nota: 'Mismo lumen con menos vatios = más eficiencia'
    },
    {
      id: 'candela',
      nombre: 'CANDELA',
      simbolo: 'cd',
      magnitud: 'Intensidad Luminosa',
      letra: 'I',
      color: 'bg-green',
      emoji: '🔦',
      analogia: 'Presión del chorro de agua',
      analogiaDetalle: 'Fuerza con que el agua sale en UNA dirección específica',
      pregunta: '¿Con qué fuerza sale la luz hacia un punto concreto?',
      punto: 'Desde la FUENTE, pero en una dirección concreta',
      definicion: 'La intensidad de luz emitida en UNA dirección específica (por ángulo sólido).',
      formula: 'I = Φ / Ω',
      formulaExplicacion: 'Intensidad = Flujo / Ángulo sólido (lumen por estereorradián)',
      ejemplos: [
        { item: 'Vela común', valor: '~1 cd' },
        { item: 'Linterna potente', valor: '~1.000-10.000 cd' },
        { item: 'Faro de coche (cruce)', valor: '~20.000 cd' },
        { item: 'Faro de coche (carretera)', valor: '~100.000 cd' },
      ],
      truco: 'CANDELA = Como una VELA (de ahí el nombre)',
      esBase: true,
      nota: '¡Es la unidad BASE del SI para luz! Las demás derivan de ella.'
    },
    {
      id: 'lux',
      nombre: 'LUX',
      simbolo: 'lx',
      magnitud: 'Iluminancia',
      letra: 'E',
      color: 'bg-blue',
      emoji: '📖',
      analogia: 'Agua que llega al cubo',
      analogiaDetalle: 'Cuánta agua RECIBE realmente el cubo por segundo',
      pregunta: '¿Cuánta luz RECIBE esta superficie?',
      punto: 'Desde la SUPERFICIE que recibe la luz',
      definicion: 'La cantidad de luz que LLEGA a una superficie (lúmenes por metro cuadrado).',
      formula: 'E = Φ / A',
      formulaExplicacion: '1 lux = 1 lumen / m²',
      ejemplos: [
        { item: 'Noche de luna llena', valor: '~0,25 lx' },
        { item: 'Alumbrado emergencia', valor: '≥1 lx' },
        { item: 'Pasillo/escalera', valor: '100-150 lx' },
        { item: 'Oficina normal', valor: '300-500 lx' },
        { item: 'Quirófano', valor: '10.000-100.000 lx' },
        { item: 'Día soleado exterior', valor: '~100.000 lx' },
      ],
      truco: 'LUX = LUz en X superficie',
      nota: 'Regla práctica: A mayor distancia = menos lux (ley del cuadrado inverso)'
    },
    {
      id: 'luminancia',
      nombre: 'LUMINANCIA',
      simbolo: 'cd/m²',
      magnitud: 'Brillo Percibido',
      letra: 'L',
      color: 'bg-purple',
      emoji: '👁️',
      analogia: 'Brillo del charco mojado',
      analogiaDetalle: 'Lo brillante que VES la superficie mojada al reflejar',
      pregunta: '¿Cómo de brillante VEO esta superficie?',
      punto: 'Desde el OJO del observador',
      definicion: 'La intensidad luminosa que EMITE o REFLEJA una superficie por unidad de área.',
      formula: 'L = I / A',
      formulaExplicacion: 'Luminancia = candelas / m²',
      ejemplos: [
        { item: 'Pantalla de móvil', valor: '300-600 cd/m²' },
        { item: 'Monitor de ordenador', valor: '250-350 cd/m²' },
        { item: 'Cielo nublado', valor: '~2.000 cd/m²' },
        { item: 'Sol a mediodía', valor: '~1.600.000.000 cd/m²' },
      ],
      truco: 'LUMINANCIA = Lo que tu ojo realmente VE',
      nota: 'Depende del material: mate absorbe, brillante refleja más'
    }
  ],

  nivelesREBT: [
    { zona: 'Alumbrado de emergencia (vías de evacuación)', valor: '≥ 1 lux', ref: 'ITC-BT-28', critico: true, detalle: 'En el eje central, a nivel del suelo' },
    { zona: 'Alumbrado antipánico (eje central)', valor: '≥ 0,5 lux', ref: 'ITC-BT-28', critico: true, detalle: 'Hasta 1m de altura desde el suelo' },
    { zona: 'Puntos de primeros auxilios', valor: '≥ 5 lux', ref: 'ITC-BT-28', critico: true, detalle: 'Señalización y equipos de seguridad' },
    { zona: 'Cuadros de distribución eléctrica', valor: '≥ 5 lux', ref: 'ITC-BT-28', critico: true, detalle: 'Para poder operar en emergencia' },
    { zona: 'Equipos contra incendios', valor: '≥ 5 lux', ref: 'ITC-BT-28', critico: true, detalle: 'Extintores, BIEs, pulsadores' },
    { zona: 'Pasillos y escaleras', valor: '100-150 lux', ref: 'UNE-EN 12464', critico: false, detalle: 'Zonas de circulación' },
    { zona: 'Oficinas - trabajo general', valor: '300-500 lux', ref: 'UNE-EN 12464', critico: false, detalle: 'Lectura, escritura, trabajo con ordenador' },
    { zona: 'Trabajo de precisión', valor: '500-1000 lux', ref: 'UNE-EN 12464', critico: false, detalle: 'Dibujo técnico, electrónica' },
  ],

  relaciones: [
    { formula: '1 cd × 1 sr = 1 lm', explicacion: 'Una candela emitiendo uniformemente en un estereorradián produce un lumen' },
    { formula: '1 lm ÷ 1 m² = 1 lx', explicacion: 'Un lumen repartido en un metro cuadrado da un lux' },
    { formula: 'Esfera = 4π sr ≈ 12,57 sr', explicacion: 'Una esfera completa tiene aproximadamente 12,57 estereorradianes' },
    { formula: 'E = I / d²', explicacion: 'Ley del cuadrado inverso: la iluminancia disminuye con el cuadrado de la distancia' },
  ],

  preguntas: [
    { pregunta: '¿Qué mide el LUMEN?', opciones: ['Luz total emitida', 'Luz recibida en superficie', 'Brillo percibido', 'Intensidad en una dirección'], correcta: 0, explicacion: 'El lumen mide el flujo luminoso total que emite una fuente.' },
    { pregunta: '¿Cuál es la unidad BASE del SI para magnitudes luminosas?', opciones: ['Lumen', 'Lux', 'Candela', 'cd/m²'], correcta: 2, explicacion: 'La candela es la unidad base del SI. Las demás derivan de ella.' },
    { pregunta: '1 lux equivale a...', opciones: ['1 cd/sr', '1 lm/m²', '1 cd/m²', '1 lm×sr'], correcta: 1, explicacion: '1 lux = 1 lumen por metro cuadrado. Es luz recibida en superficie.' },
    { pregunta: '¿Qué magnitud mide la ILUMINANCIA?', opciones: ['Luz emitida por la fuente', 'Intensidad en una dirección', 'Luz que llega a una superficie', 'Brillo percibido por el ojo'], correcta: 2, explicacion: 'La iluminancia (lux) mide cuánta luz recibe una superficie.' },
    { pregunta: 'Alumbrado de emergencia en vías de evacuación requiere mínimo:', opciones: ['0,5 lux', '1 lux', '5 lux', '10 lux'], correcta: 1, explicacion: 'ITC-BT-28 establece mínimo 1 lux en vías de evacuación.' },
    { pregunta: 'Puntos de primeros auxilios y cuadros eléctricos requieren mínimo:', opciones: ['0,5 lux', '1 lux', '5 lux', '10 lux'], correcta: 2, explicacion: 'ITC-BT-28 establece mínimo 5 lux en estos puntos críticos.' },
    { pregunta: '¿Desde qué punto de vista se mide la LUMINANCIA?', opciones: ['Desde la fuente de luz', 'Desde la superficie iluminada', 'Desde el ojo del observador', 'Desde todas las direcciones'], correcta: 2, explicacion: 'La luminancia es lo que percibe el ojo, el brillo aparente.' },
    { pregunta: 'El estereorradián (sr) es...', opciones: ['Una unidad de área', 'Un ángulo plano en 2D', 'Un ángulo sólido en 3D', 'Una medida de brillo'], correcta: 2, explicacion: 'El estereorradián es el ángulo sólido, como un cono 3D.' },
    { pregunta: 'Una esfera completa tiene...', opciones: ['2π sr', '4π sr ≈ 12,57 sr', 'π sr', '8π sr'], correcta: 1, explicacion: 'Una esfera completa abarca 4π estereorradianes, aproximadamente 12,57 sr.' },
    { pregunta: 'Si alejas una lámpara al doble de distancia, la iluminancia...', opciones: ['Se reduce a la mitad', 'Se reduce a 1/4', 'Se mantiene igual', 'Se duplica'], correcta: 1, explicacion: 'Ley del cuadrado inverso: E = I/d². Al duplicar d, E se divide por 4.' },
    { pregunta: '¿Qué símbolo representa el flujo luminoso?', opciones: ['I', 'E', 'Φ', 'L'], correcta: 2, explicacion: 'Φ (phi) representa el flujo luminoso en lúmenes.' },
    { pregunta: '¿Qué símbolo representa la intensidad luminosa?', opciones: ['I', 'E', 'Φ', 'L'], correcta: 0, explicacion: 'I representa la intensidad luminosa en candelas.' },
    { pregunta: 'Una bombilla LED de 9W produce ~800 lm. Una incandescente de 60W también. ¿Cuál es más eficiente?', opciones: ['La incandescente', 'La LED', 'Son iguales', 'Depende del color'], correcta: 1, explicacion: 'La LED produce los mismos lúmenes con mucha menos potencia = más eficiente.' },
    { pregunta: '¿Cuál es el nivel de iluminación típico en una oficina?', opciones: ['50-100 lux', '150-200 lux', '300-500 lux', '1000-2000 lux'], correcta: 2, explicacion: 'Las oficinas requieren típicamente 300-500 lux según UNE-EN 12464.' },
    { pregunta: 'El alumbrado antipánico requiere mínimo:', opciones: ['0,5 lux', '1 lux', '5 lux', '10 lux'], correcta: 0, explicacion: 'ITC-BT-28 establece mínimo 0,5 lux para alumbrado antipánico.' },
  ]
};

// Estado del módulo de fotometría
let fotometriaState = {
  vistaActiva: 'tarjetas',
  conceptoExpandido: null,
  preguntaActual: 0,
  respuestaQuiz: null,
  puntuacion: { correctas: 0, total: 0 },
  quizTerminado: false
};

// Abrir módulo de fotometría
function abrirFotometria() {
  fotometriaState = {
    vistaActiva: 'tarjetas',
    conceptoExpandido: null,
    preguntaActual: 0,
    respuestaQuiz: null,
    puntuacion: { correctas: 0, total: 0 },
    quizTerminado: false
  };
  renderFotometria();
  mostrarPantalla("pantalla-fotometria");
}

// Render principal del módulo
function renderFotometria() {
  const pantalla = document.getElementById("pantalla-fotometria");
  if (!pantalla) return;

  pantalla.innerHTML = `
    <div class="header-flex" style="margin-bottom:20px;">
      <div>
        <h1>📐 Fotometría</h1>
        <p style="font-size:0.9rem; color:var(--text-light); margin-top:5px;">Lumen, Candela, Lux y Luminancia</p>
      </div>
      <button class="btn-outline" onclick="volverAlMenu()">⬅ Volver</button>
    </div>

    <!-- Tabs de navegación -->
    <div style="display:flex; gap:8px; margin-bottom:20px; flex-wrap:wrap; justify-content:center;">
      ${renderTabs()}
    </div>

    <!-- Contenido según vista activa -->
    <div id="fotometria-contenido">
      ${renderContenido()}
    </div>
  `;
}

// Render tabs de navegación
function renderTabs() {
  const tabs = [
    { id: 'tarjetas', icon: '📚', label: 'Conceptos' },
    { id: 'analogia', icon: '🚿', label: 'Analogía' },
    { id: 'diagrama', icon: '🔄', label: 'Relaciones' },
    { id: 'ejemplo', icon: '💡', label: 'Ejemplo' },
    { id: 'tabla', icon: '📋', label: 'REBT' },
    { id: 'quiz', icon: '🎯', label: 'Quiz' },
  ];

  return tabs.map(tab => `
    <button 
      class="${fotometriaState.vistaActiva === tab.id ? 'btn-primary' : 'btn-outline'}" 
      onclick="cambiarVistaFotometria('${tab.id}')"
      style="font-size:0.9rem; padding:10px 15px;">
      ${tab.icon} ${tab.label}
    </button>
  `).join('');
}

// Cambiar vista activa
function cambiarVistaFotometria(vista) {
  fotometriaState.vistaActiva = vista;
  renderFotometria();
}

// Render contenido según vista activa
function renderContenido() {
  switch (fotometriaState.vistaActiva) {
    case 'tarjetas': return renderTarjetas();
    case 'analogia': return renderAnalogia();
    case 'diagrama': return renderDiagrama();
    case 'ejemplo': return renderEjemplo();
    case 'tabla': return renderTabla();
    case 'quiz': return renderQuiz();
    default: return '';
  }
}

// ===== VISTA TARJETAS =====
function renderTarjetas() {
  return `
    <div style="margin-bottom:20px;">
      ${FOTOMETRIA_DATA.conceptos.map(c => renderTarjeta(c)).join('')}
    </div>
    
    <!-- Resumen rápido -->
    <div style="background:linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%); color:white; padding:20px; border-radius:12px; text-align:center; margin-top:20px;">
      <p style="font-weight:600; font-size:1.1rem; margin-bottom:10px;">Secuencia de la luz:</p>
      <p style="font-size:1.3rem;">💡 LUMEN sale → 🔦 CANDELA apunta → 📖 LUX llega → 👁️ LUMINANCIA se ve</p>
    </div>
  `;
}

function renderTarjeta(concepto) {
  const expandido = fotometriaState.conceptoExpandido === concepto.id;
  const colorClasses = {
    'bg-amber': 'background:#fef3c7; border-color:#f59e0b;',
    'bg-green': 'background:#d1fae5; border-color:#10b981;',
    'bg-blue': 'background:#dbeafe; border-color:#3b82f6;',
    'bg-purple': 'background:#f3e8ff; border-color:#8b5cf6;'
  };
  const colorStyle = colorClasses[concepto.color] || '';
  
  return `
    <div style="${colorStyle} border:2px solid; border-radius:12px; margin-bottom:15px; overflow:hidden;">
      <!-- Cabecera -->
      <div style="padding:15px; cursor:pointer;" onclick="toggleConceptoFotometria('${concepto.id}')">
        <div style="display:flex; align-items:start; gap:10px;">
          <span style="font-size:2.5rem;">${concepto.emoji}</span>
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
              <h3 style="font-size:1.3rem; font-weight:700; margin:0;">${concepto.nombre}</h3>
              <span style="background:rgba(255,255,255,0.7); padding:4px 10px; border-radius:6px; font-family:monospace; font-weight:600;">(${concepto.simbolo})</span>
              ${concepto.esBase ? '<span style="background:#fbbf24; color:#78350f; padding:3px 8px; border-radius:12px; font-size:0.75rem; font-weight:600;">Unidad base SI</span>' : ''}
            </div>
            <p style="font-size:0.9rem; color:#666; margin:5px 0 0 0;">${concepto.magnitud} · Símbolo: <span style="font-family:monospace; font-weight:700;">${concepto.letra}</span></p>
          </div>
          <span style="color:#999; font-size:1.5rem;">${expandido ? '▲' : '▼'}</span>
        </div>
        
        <div style="margin-top:12px;">
          <p style="font-weight:600; color:#d97706; margin-bottom:5px;">🎯 ${concepto.pregunta}</p>
          <p style="font-size:0.9rem; margin:0;"><span style="font-weight:600;">📍 Punto de vista:</span> ${concepto.punto}</p>
        </div>
      </div>

      <!-- Contenido expandido -->
      ${expandido ? `
        <div style="background:rgba(255,255,255,0.6); padding:15px; border-top:2px solid rgba(0,0,0,0.1);">
          <div style="margin-bottom:15px;">
            <p style="font-weight:600; margin-bottom:5px;">📖 Definición:</p>
            <p style="font-size:0.95rem;">${concepto.definicion}</p>
          </div>

          <div style="margin-bottom:15px;">
            <p style="font-weight:600; margin-bottom:5px;">🔢 Fórmula:</p>
            <code style="background:white; padding:8px 15px; border-radius:6px; display:inline-block; font-size:1.1rem; font-weight:600;">${concepto.formula}</code>
            <p style="font-size:0.85rem; color:#666; margin-top:5px;">${concepto.formulaExplicacion}</p>
          </div>

          <div style="margin-bottom:15px;">
            <p style="font-weight:600; margin-bottom:8px;">📊 Ejemplos típicos:</p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:8px;">
              ${concepto.ejemplos.map(ej => `
                <div style="background:rgba(255,255,255,0.8); padding:8px; border-radius:6px; font-size:0.9rem;">
                  <span style="color:#666;">${ej.item}:</span>
                  <span style="font-weight:600; margin-left:5px;">${ej.valor}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="background:rgba(255,255,255,0.9); padding:12px; border-radius:8px; margin-bottom:10px;">
            <p style="font-weight:600; margin-bottom:5px;">🧠 Truco para recordar:</p>
            <p style="font-size:1.05rem; font-weight:600;">${concepto.truco}</p>
          </div>

          ${concepto.nota ? `<p style="font-size:0.9rem; font-style:italic; color:#555;">💡 ${concepto.nota}</p>` : ''}
        </div>
      ` : ''}
    </div>
  `;
}

function toggleConceptoFotometria(id) {
  fotometriaState.conceptoExpandido = fotometriaState.conceptoExpandido === id ? null : id;
  renderFotometria();
}

// ===== VISTA ANALOGÍA =====
function renderAnalogia() {
  return `
    <div style="background:white; padding:20px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:20px;">
      <h2 style="text-align:center; font-size:1.5rem; margin-bottom:10px;">🚿 La Analogía del Grifo de Agua</h2>
      <p style="text-align:center; color:#666; margin-bottom:20px;">Imagina la luz como agua saliendo de un grifo hacia un cubo</p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-bottom:25px;">
        ${FOTOMETRIA_DATA.conceptos.map(c => {
          const colorClasses = {
            'bg-amber': 'background:#fef3c7; border-color:#f59e0b;',
            'bg-green': 'background:#d1fae5; border-color:#10b981;',
            'bg-blue': 'background:#dbeafe; border-color:#3b82f6;',
            'bg-purple': 'background:#f3e8ff; border-color:#8b5cf6;'
          };
          return `
            <div style="${colorClasses[c.color]} border:2px solid; border-radius:12px; padding:15px; text-align:center;">
              <span style="font-size:2.5rem; display:block; margin-bottom:8px;">${c.emoji}</span>
              <h3 style="font-weight:700; font-size:1.1rem; margin-bottom:5px;">${c.nombre}</h3>
              <p style="font-size:0.85rem; color:#666; margin-bottom:10px;">(${c.simbolo})</p>
              <div style="background:rgba(255,255,255,0.7); padding:10px; border-radius:8px;">
                <p style="font-weight:600; font-size:0.95rem; margin-bottom:5px;">= ${c.analogia}</p>
                <p style="font-size:0.85rem; color:#666;">${c.analogiaDetalle}</p>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div style="background:#f3f4f6; padding:20px; border-radius:12px;">
        <h3 style="font-weight:700; margin-bottom:15px; text-align:center;">🎬 La historia completa:</h3>
        <div style="max-width:700px; margin:0 auto;">
          <p style="margin-bottom:12px;"><span style="color:#f59e0b; font-weight:700;">1. LUMEN:</span> Abres el grifo. El caudal total de agua que sale es como los lúmenes - toda la luz que produce la bombilla.</p>
          <p style="margin-bottom:12px;"><span style="color:#10b981; font-weight:700;">2. CANDELA:</span> Si pones el dedo parcialmente, el chorro sale con más presión en una dirección. Es la candela - intensidad concentrada hacia un punto.</p>
          <p style="margin-bottom:12px;"><span style="color:#3b82f6; font-weight:700;">3. LUX:</span> El agua cae en un cubo. La cantidad de agua que recibe el cubo por segundo es como los lux - la luz que realmente llega a la superficie.</p>
          <p style="margin:0;"><span style="color:#8b5cf6; font-weight:700;">4. LUMINANCIA:</span> Miras el charco de agua en el suelo. Según brille (material del suelo), lo ves más o menos brillante. Es la luminancia - lo que percibe tu ojo.</p>
        </div>
      </div>
    </div>
  `;
}

// ===== VISTA DIAGRAMA =====
function renderDiagrama() {
  return `
    <div style="background:white; padding:20px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:20px;">
      <h2 style="text-align:center; font-size:1.5rem; margin-bottom:20px;">🔄 Flujo de la Luz: De la Fuente al Ojo</h2>
      
      <div style="display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:30px; flex-wrap:wrap;">
        ${FOTOMETRIA_DATA.conceptos.map((c, idx) => {
          const colorClasses = {
            'bg-amber': 'background:#fef3c7; border-color:#f59e0b;',
            'bg-green': 'background:#d1fae5; border-color:#10b981;',
            'bg-blue': 'background:#dbeafe; border-color:#3b82f6;',
            'bg-purple': 'background:#f3e8ff; border-color:#8b5cf6;'
          };
          return `
            ${idx > 0 ? '<span style="font-size:2rem; color:#999;">→</span>' : ''}
            <div style="${colorClasses[c.color]} border:2px solid; border-radius:12px; padding:12px; text-align:center; min-width:120px;">
              <span style="font-size:2rem;">${c.emoji}</span>
              <p style="font-weight:700; font-size:0.9rem; margin:5px 0 0 0;">${c.nombre}</p>
              <p style="font-size:0.75rem; color:#666; margin:0;">${c.simbolo}</p>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Estereorradián -->
      <div style="background:#fef3c7; border:2px solid #f59e0b; border-radius:12px; padding:20px; margin-bottom:25px;">
        <h3 style="font-weight:700; font-size:1.2rem; margin-bottom:10px; text-align:center;">📐 El ESTEREORRADIÁN (sr) - La clave de todo</h3>
        <p style="text-align:center; margin-bottom:15px;">El estereorradián es el <strong>ángulo sólido</strong>, como un cono 3D que sale de un punto.</p>
        <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
          <div style="background:white; padding:15px; border-radius:8px; text-align:center; min-width:150px;">
            <p style="font-size:2rem; margin-bottom:5px;">🔵</p>
            <p style="font-family:monospace; font-weight:700; font-size:1.1rem;">1 sr</p>
            <p style="font-size:0.85rem; color:#666;">Un "cono" de luz</p>
          </div>
          <div style="background:white; padding:15px; border-radius:8px; text-align:center; min-width:150px;">
            <p style="font-size:2rem; margin-bottom:5px;">🌐</p>
            <p style="font-family:monospace; font-weight:700; font-size:1.1rem;">4π sr ≈ 12,57 sr</p>
            <p style="font-size:0.85rem; color:#666;">Esfera completa</p>
          </div>
        </div>
      </div>

      <!-- Relaciones -->
      <div style="background:linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); padding:20px; border-radius:12px;">
        <h3 style="font-weight:700; font-size:1.2rem; text-align:center; margin-bottom:15px;">⚡ Relaciones Fundamentales</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:15px;">
          ${FOTOMETRIA_DATA.relaciones.map(rel => `
            <div style="background:white; padding:15px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              <code style="display:block; text-align:center; font-size:1.1rem; font-weight:700; color:#3b82f6; margin-bottom:8px;">${rel.formula}</code>
              <p style="font-size:0.9rem; text-align:center; color:#666; margin:0;">${rel.explicacion}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Ley cuadrado inverso -->
    <div style="background:white; padding:20px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
      <h3 style="font-weight:700; font-size:1.2rem; margin-bottom:15px; text-align:center;">📉 Ley del Cuadrado Inverso</h3>
      <div style="max-width:600px; margin:0 auto;">
        <div style="background:#dbeafe; padding:15px; border-radius:12px; text-align:center; margin-bottom:15px;">
          <code style="font-size:1.8rem; font-weight:700; color:#3b82f6;">E = I / d²</code>
          <p style="font-size:0.95rem; margin-top:8px;">La iluminancia disminuye con el cuadrado de la distancia</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; text-align:center;">
          <div style="background:#d1fae5; padding:15px; border-radius:8px;">
            <p style="font-weight:700; margin-bottom:5px;">d = 1m</p>
            <p style="font-size:1.2rem; font-weight:700; color:#10b981;">E = 100%</p>
          </div>
          <div style="background:#fef3c7; padding:15px; border-radius:8px;">
            <p style="font-weight:700; margin-bottom:5px;">d = 2m</p>
            <p style="font-size:1.2rem; font-weight:700; color:#f59e0b;">E = 25%</p>
          </div>
          <div style="background:#fecaca; padding:15px; border-radius:8px;">
            <p style="font-weight:700; margin-bottom:5px;">d = 3m</p>
            <p style="font-size:1.2rem; font-weight:700; color:#dc2626;">E = 11%</p>
          </div>
        </div>
        <p style="text-align:center; font-size:0.9rem; color:#666; margin-top:12px;">💡 Al duplicar la distancia, la luz se reparte en 4 veces más área</p>
      </div>
    </div>
  `;
}

// ===== VISTA EJEMPLO =====
function renderEjemplo() {
  return `
    <div style="background:white; padding:20px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
      <h2 style="text-align:center; font-size:1.5rem; margin-bottom:10px;">💡 Ejemplo Práctico</h2>
      <p style="text-align:center; color:#666; margin-bottom:25px;">Una bombilla LED de 800 lm a 2 metros del suelo</p>

      <div style="max-width:600px; margin:0 auto;">
        <!-- Escenario -->
        <div style="background:#f3f4f6; padding:20px; border-radius:12px; text-align:center; margin-bottom:20px;">
          <div style="font-size:4rem; margin-bottom:10px;">💡</div>
          <p style="font-weight:600; font-size:1.1rem;">Bombilla LED: <span style="color:#f59e0b; font-weight:700;">800 lm</span></p>
          <p style="font-size:0.9rem; color:#666;">Altura: 2 metros sobre el suelo</p>
          <div style="font-size:3rem; margin:10px 0;">↓</div>
          <div style="font-size:3rem;">📋</div>
          <p style="font-size:0.9rem; color:#666;">Mesa/Suelo</p>
        </div>

        <!-- Cálculos -->
        <div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:15px; border-radius:0 8px 8px 0; margin-bottom:15px;">
          <div style="display:flex; align-items:start; gap:12px;">
            <span style="font-size:2rem;">💡</span>
            <div>
              <p style="font-weight:700; margin-bottom:5px;">Flujo Luminoso (Φ)</p>
              <p style="font-family:monospace; font-size:1.2rem; font-weight:700; margin-bottom:5px;">800 lm</p>
              <p style="font-size:0.9rem; color:#666; margin:0;">Es la luz TOTAL que emite la bombilla en todas direcciones</p>
            </div>
          </div>
        </div>

        <div style="background:#d1fae5; border-left:4px solid #10b981; padding:15px; border-radius:0 8px 8px 0; margin-bottom:15px;">
          <div style="display:flex; align-items:start; gap:12px;">
            <span style="font-size:2rem;">🔦</span>
            <div>
              <p style="font-weight:700; margin-bottom:5px;">Intensidad Luminosa (I)</p>
              <p style="font-family:monospace; font-size:1.1rem; margin-bottom:5px;">I = 800 / (4π) ≈ <span style="color:#10b981; font-weight:700;">64 cd</span></p>
              <p style="font-size:0.9rem; color:#666; margin:0;">Si emite uniformemente en todas direcciones (4π sr ≈ 12,57 sr)</p>
            </div>
          </div>
        </div>

        <div style="background:#dbeafe; border-left:4px solid #3b82f6; padding:15px; border-radius:0 8px 8px 0; margin-bottom:15px;">
          <div style="display:flex; align-items:start; gap:12px;">
            <span style="font-size:2rem;">📖</span>
            <div>
              <p style="font-weight:700; margin-bottom:5px;">Iluminancia (E)</p>
              <p style="font-family:monospace; font-size:1.1rem; margin-bottom:5px;">E = I / d² = 64 / 4 = <span style="color:#3b82f6; font-weight:700;">16 lux</span></p>
              <p style="font-size:0.9rem; color:#666; margin:0;">Luz que llega justo debajo, a 2m de distancia</p>
            </div>
          </div>
        </div>

        <div style="background:#f3e8ff; border-left:4px solid #8b5cf6; padding:15px; border-radius:0 8px 8px 0; margin-bottom:20px;">
          <div style="display:flex; align-items:start; gap:12px;">
            <span style="font-size:2rem;">👁️</span>
            <div>
              <p style="font-weight:700; margin-bottom:5px;">Luminancia (L)</p>
              <p style="font-family:monospace; font-size:1.1rem; margin-bottom:5px;">L ≈ E × ρ / π = 16 × 0,8 / π ≈ <span style="color:#8b5cf6; font-weight:700;">4 cd/m²</span></p>
              <p style="font-size:0.9rem; color:#666; margin:0;">Brillo percibido del papel blanco (reflectancia ρ ≈ 0,8)</p>
            </div>
          </div>
        </div>

        <!-- Conclusión -->
        <div style="background:#1f2937; color:white; padding:20px; border-radius:12px; text-align:center;">
          <p style="font-weight:700; margin-bottom:10px;">📌 Conclusión del ejemplo:</p>
          <p style="font-size:0.95rem; line-height:1.6;">
            Una bombilla de 800 lm a 2m de altura solo proporciona ~16 lux directamente debajo. 
            ¡Para una oficina (300-500 lux) necesitarías muchas más lámparas o más cerca!
          </p>
        </div>
      </div>
    </div>
  `;
}

// ===== VISTA TABLA REBT =====
function renderTabla() {
  return `
    <div style="background:white; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); overflow:hidden; margin-bottom:20px;">
      <div style="background:linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color:white; padding:20px;">
        <h2 style="font-size:1.3rem; font-weight:700; margin-bottom:5px;">📋 Niveles de Iluminación - REBT</h2>
        <p style="font-size:0.9rem; opacity:0.9;">Valores importantes para el examen (ITC-BT-28 y UNE-EN 12464)</p>
      </div>
      
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse;">
          <thead style="background:#f3f4f6;">
            <tr>
              <th style="padding:12px; text-align:left; font-weight:700;">Zona / Actividad</th>
              <th style="padding:12px; text-align:center; font-weight:700;">Nivel mínimo</th>
              <th style="padding:12px; text-align:center; font-weight:700;">Referencia</th>
              <th style="padding:12px; text-align:left; font-weight:700;">Detalle</th>
            </tr>
          </thead>
          <tbody>
            ${FOTOMETRIA_DATA.nivelesREBT.map((nivel, idx) => `
              <tr style="border-top:1px solid #e5e7eb; ${nivel.critico ? 'background:#fef2f2;' : idx % 2 === 0 ? 'background:#f9fafb;' : ''}">
                <td style="padding:12px;">
                  ${nivel.critico ? '<span style="color:#dc2626; margin-right:5px;">⚠️</span>' : ''}
                  ${nivel.zona}
                </td>
                <td style="padding:12px; text-align:center;">
                  <span style="font-weight:700; font-size:1.1rem; color:${nivel.critico ? '#dc2626' : '#3b82f6'};">${nivel.valor}</span>
                </td>
                <td style="padding:12px; text-align:center; font-size:0.9rem; color:#666;">${nivel.ref}</td>
                <td style="padding:12px; font-size:0.9rem; color:#666;">${nivel.detalle}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Resumen emergencia -->
    <div style="background:#fef2f2; border:2px solid #dc2626; border-radius:12px; padding:20px; margin-bottom:20px;">
      <h3 style="font-weight:700; color:#991b1b; margin-bottom:15px; text-align:center;">🚨 VALORES DE EMERGENCIA (ITC-BT-28) - MEMORIZA ESTOS</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:15px; text-align:center;">
        <div style="background:white; padding:15px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <p style="font-size:2rem; font-weight:700; color:#dc2626; margin-bottom:5px;">0,5 lx</p>
          <p style="font-weight:600; font-size:0.9rem;">Antipánico</p>
        </div>
        <div style="background:white; padding:15px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <p style="font-size:2rem; font-weight:700; color:#dc2626; margin-bottom:5px;">1 lx</p>
          <p style="font-weight:600; font-size:0.9rem;">Evacuación</p>
        </div>
        <div style="background:white; padding:15px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <p style="font-size:2rem; font-weight:700; color:#dc2626; margin-bottom:5px;">5 lx</p>
          <p style="font-weight:600; font-size:0.9rem;">Puntos críticos</p>
        </div>
      </div>
      <p style="text-align:center; font-size:0.9rem; color:#991b1b; margin-top:15px; font-weight:600;">
        💡 Truco: <strong>0,5 - 1 - 5</strong> (secuencia fácil de recordar)
      </p>
    </div>

    <!-- Autonomía -->
    <div style="background:#fef3c7; border:2px solid #f59e0b; border-radius:12px; padding:15px; text-align:center;">
      <h3 style="font-weight:700; color:#92400e; margin-bottom:10px;">⏱️ Autonomía del alumbrado de emergencia</h3>
      <p style="font-size:2rem; font-weight:700; color:#f59e0b; margin-bottom:5px;">Mínimo 1 hora</p>
      <p style="font-size:0.9rem; color:#666;">Debe alcanzar el 50% de iluminación en 5 segundos y el 100% en 60 segundos</p>
    </div>
  `;
}

// ===== VISTA QUIZ =====
function renderQuiz() {
  if (fotometriaState.quizTerminado) {
    return renderQuizResultados();
  }

  const pregunta = FOTOMETRIA_DATA.preguntas[fotometriaState.preguntaActual];
  const progreso = ((fotometriaState.preguntaActual + 1) / FOTOMETRIA_DATA.preguntas.length) * 100;

  return `
    <div style="background:white; padding:20px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); max-width:700px; margin:0 auto;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
        <span style="font-size:0.9rem; color:#666;">Pregunta ${fotometriaState.preguntaActual + 1} de ${FOTOMETRIA_DATA.preguntas.length}</span>
        <span style="font-weight:600; color:var(--primary);">✓ ${fotometriaState.puntuacion.correctas}/${fotometriaState.puntuacion.total}</span>
      </div>

      <!-- Barra progreso -->
      <div style="width:100%; background:#e5e7eb; border-radius:10px; height:8px; margin-bottom:25px;">
        <div style="width:${progreso}%; background:var(--primary); height:100%; border-radius:10px; transition:width 0.3s;"></div>
      </div>

      <h3 style="font-size:1.2rem; font-weight:600; margin-bottom:20px;">${pregunta.pregunta}</h3>

      <div style="display:grid; gap:10px; margin-bottom:20px;">
        ${pregunta.opciones.map((opcion, idx) => {
          let bgColor = '#f9fafb';
          let borderColor = '#e5e7eb';
          let cursor = 'pointer';
          
          if (fotometriaState.respuestaQuiz !== null) {
            cursor = 'default';
            if (idx === pregunta.correcta) {
              bgColor = '#d1fae5';
              borderColor = '#10b981';
            } else if (fotometriaState.respuestaQuiz === idx) {
              bgColor = '#fee2e2';
              borderColor = '#dc2626';
            } else {
              bgColor = '#f3f4f6';
            }
          }

          return `
            <button 
              onclick="${fotometriaState.respuestaQuiz === null ? `responderQuizFotometria(${idx})` : ''}"
              style="background:${bgColor}; border:2px solid ${borderColor}; padding:15px; border-radius:8px; text-align:left; cursor:${cursor}; transition:all 0.2s; font-size:1rem;"
              ${fotometriaState.respuestaQuiz !== null ? 'disabled' : ''}
            >
              <span style="font-weight:600; margin-right:10px;">${String.fromCharCode(65 + idx)}.</span>
              ${opcion}
            </button>
          `;
        }).join('')}
      </div>

      ${fotometriaState.respuestaQuiz !== null ? `
        <div style="padding:15px; border-radius:8px; margin-bottom:15px; background:${fotometriaState.respuestaQuiz === pregunta.correcta ? '#d1fae5' : '#fee2e2'}; color:${fotometriaState.respuestaQuiz === pregunta.correcta ? '#065f46' : '#991b1b'};">
          <p style="font-weight:700; margin-bottom:8px;">
            ${fotometriaState.respuestaQuiz === pregunta.correcta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
          </p>
          <p style="font-size:0.95rem; line-height:1.6; margin:0;">${pregunta.explicacion}</p>
        </div>

        <button 
          class="btn-primary" 
          onclick="siguientePreguntaFotometria()"
          style="width:100%; padding:15px; font-size:1.05rem;">
          ${fotometriaState.preguntaActual + 1 >= FOTOMETRIA_DATA.preguntas.length ? 'Ver resultados 🎯' : 'Siguiente pregunta →'}
        </button>
      ` : ''}
    </div>
  `;
}

function renderQuizResultados() {
  const total = FOTOMETRIA_DATA.preguntas.length;
  const correctas = fotometriaState.puntuacion.correctas;
  const porcentaje = (correctas / total) * 100;
  
  let emoji = '📚';
  let mensaje = 'Necesitas repasar. ¡Vuelve a las tarjetas!';
  
  if (correctas === total) {
    emoji = '🏆';
    mensaje = '¡Perfecto! Dominas la fotometría.';
  } else if (porcentaje >= 70) {
    emoji = '🎉';
    mensaje = '¡Muy bien! Casi lo tienes.';
  } else if (porcentaje >= 50) {
    emoji = '👍';
    mensaje = 'Bien, pero repasa un poco más.';
  }

  return `
    <div style="background:white; padding:40px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); max-width:500px; margin:0 auto; text-align:center;">
      <div style="font-size:5rem; margin-bottom:20px;">${emoji}</div>
      <h3 style="font-size:1.8rem; font-weight:700; margin-bottom:15px;">Quiz completado</h3>
      <p style="font-size:3rem; font-weight:700; color:var(--primary); margin-bottom:10px;">
        ${correctas} / ${total}
      </p>
      <p style="font-size:1.05rem; color:#666; margin-bottom:30px;">${mensaje}</p>
      <button 
        class="btn-primary" 
        onclick="reiniciarQuizFotometria()"
        style="padding:15px 30px; font-size:1.05rem;">
        🔄 Intentar de nuevo
      </button>
    </div>
  `;
}

function responderQuizFotometria(idx) {
  if (fotometriaState.respuestaQuiz !== null) return;
  
  fotometriaState.respuestaQuiz = idx;
  const pregunta = FOTOMETRIA_DATA.preguntas[fotometriaState.preguntaActual];
  
  if (idx === pregunta.correcta) {
    fotometriaState.puntuacion.correctas++;
  }
  fotometriaState.puntuacion.total++;
  
  renderFotometria();
}

function siguientePreguntaFotometria() {
  if (fotometriaState.preguntaActual + 1 >= FOTOMETRIA_DATA.preguntas.length) {
    fotometriaState.quizTerminado = true;
  } else {
    fotometriaState.preguntaActual++;
    fotometriaState.respuestaQuiz = null;
  }
  renderFotometria();
}

function reiniciarQuizFotometria() {
  fotometriaState.preguntaActual = 0;
  fotometriaState.respuestaQuiz = null;
  fotometriaState.puntuacion = { correctas: 0, total: 0 };
  fotometriaState.quizTerminado = false;
  renderFotometria();
}

