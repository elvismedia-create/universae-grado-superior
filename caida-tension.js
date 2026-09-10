/* =========================================================
   MÓDULO CAÍDA DE TENSIÓN - v67.24
   Guía completa según REBT
   ========================================================= */

const CAIDA_TENSION_DATA = {
  conceptosBasicos: [
    {
      id: 'que-es',
      nombre: '¿QUÉ ES LA CAÍDA DE TENSIÓN?',
      emoji: '⚡',
      color: 'bg-red',
      definicion: 'Es la diferencia de potencial (voltaje) que se pierde en un conductor cuando circula corriente eléctrica por él, debido a su resistencia.',
      analogia: 'Como el agua en una manguera: cuanto más larga y estrecha, menos presión llega al final.',
      formula: 'ΔU = I × R = I × (ρ × L) / S',
      importante: 'A mayor longitud o menor sección → Mayor caída de tensión'
    },
    {
      id: 'por-que-importa',
      nombre: '¿POR QUÉ IMPORTA?',
      emoji: '⚠️',
      color: 'bg-amber',
      definicion: 'Si la caída es excesiva, los receptores no funcionan correctamente: las lámparas brillan menos, los motores pierden par, los equipos electrónicos pueden fallar.',
      consecuencias: [
        'Mal funcionamiento de receptores',
        'Sobrecalentamiento de conductores',
        'Pérdida de energía (calor en cables)',
        'Posibles daños en equipos sensibles'
      ]
    },
    {
      id: 'factores',
      nombre: 'FACTORES QUE INFLUYEN',
      emoji: '🔧',
      color: 'bg-blue',
      factores: [
        { factor: 'Intensidad (I)', efecto: '↑ Intensidad = ↑ Caída', icono: '🔌' },
        { factor: 'Longitud (L)', efecto: '↑ Longitud = ↑ Caída', icono: '📏' },
        { factor: 'Sección (S)', efecto: '↑ Sección = ↓ Caída', icono: '⭕' },
        { factor: 'Material (ρ)', efecto: 'Cu mejor que Al', icono: '🥇' },
        { factor: 'Temperatura', efecto: '↑ Temp = ↑ Resistencia', icono: '🌡️' },
      ]
    }
  ],

  limitesREBT: [
    {
      categoria: 'Instalaciones de enlace',
      subtitulo: 'Desde CT o CGP hasta contador',
      color: 'bg-purple',
      items: [
        { tramo: 'Línea General de Alimentación (LGA)', limite: '0,5%', ref: 'ITC-BT-14', nota: 'Para cualquier previsión de carga' },
        { tramo: 'Derivación Individual (DI)', limite: '1%', ref: 'ITC-BT-15', nota: 'Contador en lugar distinto de centralización' },
        { tramo: 'Derivación Individual (DI)', limite: '0,5%', ref: 'ITC-BT-15', nota: 'Contador en centralización' },
      ]
    },
    {
      categoria: 'Instalaciones interiores - Viviendas',
      subtitulo: 'Desde contador hasta receptores',
      color: 'bg-green',
      items: [
        { tramo: 'Circuitos de alumbrado', limite: '3%', ref: 'ITC-BT-25', nota: 'Instalación interior vivienda' },
        { tramo: 'Otros usos (TC, cocina, etc.)', limite: '5%', ref: 'ITC-BT-25', nota: 'Instalación interior vivienda' },
      ]
    },
    {
      categoria: 'Instalaciones interiores - Otros',
      subtitulo: 'Locales, industrias, etc.',
      color: 'bg-blue',
      items: [
        { tramo: 'Circuitos de alumbrado', limite: '3%', ref: 'ITC-BT-19', nota: 'Con contador en CT' },
        { tramo: 'Circuitos de alumbrado', limite: '4,5%', ref: 'ITC-BT-19', nota: 'Con contador fuera de CT' },
        { tramo: 'Otros usos (fuerza)', limite: '5%', ref: 'ITC-BT-19', nota: 'Con contador en CT' },
        { tramo: 'Otros usos (fuerza)', limite: '6,5%', ref: 'ITC-BT-19', nota: 'Con contador fuera de CT' },
      ]
    },
    {
      categoria: 'Casos especiales',
      subtitulo: 'Situaciones particulares',
      color: 'bg-amber',
      items: [
        { tramo: 'Instalación de enlace única', limite: '1,5%', ref: 'ITC-BT-15', nota: 'Un solo usuario desde CT' },
        { tramo: 'Motores arranque', limite: '+5%', ref: 'Guía BT', nota: 'Adicional en arranque de motores' },
      ]
    }
  ],

  formulas: [
    {
      id: 'monofasica',
      titulo: 'MONOFÁSICA',
      emoji: '1️⃣',
      color: '#3b82f6',
      formula: 'ΔU = (2 × I × L × cosφ) / (γ × S)',
      formulaSimple: 'ΔU = (2 × P × L) / (γ × S × U)',
      porcentaje: 'e% = (ΔU / U) × 100',
      variables: [
        { var: 'ΔU', desc: 'Caída de tensión (V)' },
        { var: 'I', desc: 'Intensidad (A)' },
        { var: 'L', desc: 'Longitud (m) - solo ida' },
        { var: 'P', desc: 'Potencia (W)' },
        { var: 'U', desc: 'Tensión de línea (230V)' },
        { var: 'γ', desc: 'Conductividad (m/Ω·mm²)' },
        { var: 'S', desc: 'Sección (mm²)' },
        { var: 'cosφ', desc: 'Factor de potencia' },
      ],
      nota: 'El factor 2 es porque la corriente va y vuelve (ida + retorno)'
    },
    {
      id: 'trifasica',
      titulo: 'TRIFÁSICA',
      emoji: '3️⃣',
      color: '#10b981',
      formula: 'ΔU = (√3 × I × L × cosφ) / (γ × S)',
      formulaSimple: 'ΔU = (P × L) / (γ × S × U)',
      porcentaje: 'e% = (ΔU / U) × 100',
      variables: [
        { var: 'ΔU', desc: 'Caída de tensión (V)' },
        { var: 'I', desc: 'Intensidad (A)' },
        { var: 'L', desc: 'Longitud (m) - solo ida' },
        { var: 'P', desc: 'Potencia (W)' },
        { var: 'U', desc: 'Tensión de línea (400V)' },
        { var: 'γ', desc: 'Conductividad (m/Ω·mm²)' },
        { var: 'S', desc: 'Sección (mm²)' },
        { var: 'cosφ', desc: 'Factor de potencia' },
      ],
      nota: 'En trifásica equilibrada, el neutro no lleva corriente'
    }
  ],

  conductividades: [
    { material: 'Cobre (Cu)', valor20: 56, valor70: 48, valor90: 44, color: '#fed7aa', emoji: '🥇' },
    { material: 'Aluminio (Al)', valor20: 35, valor70: 30, valor90: 28, color: '#e5e7eb', emoji: '🥈' },
  ],

  tablaSecciones: [
    { seccion: 1.5, usoTipico: 'Alumbrado', iMax: 15 },
    { seccion: 2.5, usoTipico: 'TC generales', iMax: 21 },
    { seccion: 4, usoTipico: 'Lavadora, lavavajillas', iMax: 27 },
    { seccion: 6, usoTipico: 'Cocina, horno, secadora', iMax: 36 },
    { seccion: 10, usoTipico: 'Derivación individual', iMax: 50 },
    { seccion: 16, usoTipico: 'Derivación individual', iMax: 66 },
    { seccion: 25, usoTipico: 'LGA pequeña', iMax: 84 },
    { seccion: 35, usoTipico: 'LGA media', iMax: 104 },
  ],

  ejemplosPracticos: [
    {
      id: 'vivienda',
      titulo: 'Circuito de alumbrado en vivienda',
      emoji: '🏠',
      datos: {
        potencia: '2.200 W',
        tension: '230 V',
        longitud: '25 m',
        material: 'Cobre',
        fp: '1',
        limitePermitido: '3%'
      },
      pasos: [
        { paso: 'Calcular intensidad', formula: 'I = P / U = 2.200 / 230 = 9,57 A' },
        { paso: 'Elegir sección inicial', valor: '1,5 mm² (mínimo alumbrado)' },
        { paso: 'Calcular caída (γ=56)', formula: 'ΔU = (2×9,57×25×1) / (56×1,5) = 5,7 V' },
        { paso: 'Calcular porcentaje', formula: 'e% = (5,7 / 230) × 100 = 2,48%' },
        { paso: 'Verificar', resultado: '2,48% < 3% ✅ CUMPLE' },
      ],
      conclusion: 'Con 1,5 mm² cumplimos. Si no cumpliera, subir a 2,5 mm².'
    },
    {
      id: 'trifasico',
      titulo: 'Línea trifásica a motor',
      emoji: '🏭',
      datos: {
        potencia: '15.000 W',
        tension: '400 V',
        longitud: '50 m',
        material: 'Cobre',
        fp: '0,85',
        limitePermitido: '5%'
      },
      pasos: [
        { paso: 'Calcular intensidad', formula: 'I = P / (√3×U×cosφ) = 15.000 / (1,732×400×0,85) = 25,5 A' },
        { paso: 'Elegir sección inicial', valor: '6 mm² (por intensidad)' },
        { paso: 'Calcular caída (γ=48)', formula: 'ΔU = (√3×25,5×50×0,85) / (48×6) = 6,52 V' },
        { paso: 'Calcular porcentaje', formula: 'e% = (6,52 / 400) × 100 = 1,63%' },
        { paso: 'Verificar', resultado: '1,63% < 5% ✅ CUMPLE' },
      ],
      conclusion: 'Con 6 mm² cumplimos tanto por intensidad como por caída de tensión.'
    }
  ],

  trucosMemoria: [
    { truco: 'LGA = 0,5%', explicacion: 'La LGA es el tramo más corto, límite más estricto', emoji: '🔴' },
    { truco: 'DI = 0,5% o 1%', explicacion: '0,5% si centralización, 1% si contador individual', emoji: '🟠' },
    { truco: 'Alumbrado = 3%', explicacion: 'Siempre 3% para alumbrado interior (viviendas)', emoji: '💡' },
    { truco: 'Fuerza = 5%', explicacion: 'Otros usos en vivienda siempre 5%', emoji: '🔌' },
    { truco: 'Fuera CT = +1,5%', explicacion: 'Si contador fuera de CT, sumar 1,5% al límite', emoji: '📦' },
    { truco: 'Total enlace = 1,5%', explicacion: 'LGA + DI nunca puede superar 1,5%', emoji: '➕' },
  ],

  preguntas: [
    { pregunta: '¿Cuál es la caída de tensión máxima permitida en la LGA?', opciones: ['0,5%', '1%', '1,5%', '3%'], correcta: 0, explicacion: 'ITC-BT-14 establece 0,5% máximo para la Línea General de Alimentación.' },
    { pregunta: '¿Cuál es la caída máxima en Derivación Individual con centralización de contadores?', opciones: ['0,5%', '1%', '1,5%', '3%'], correcta: 0, explicacion: 'Con centralización de contadores, la DI tiene límite de 0,5%.' },
    { pregunta: '¿Cuál es la caída máxima en circuitos de alumbrado en vivienda?', opciones: ['1%', '3%', '5%', '6,5%'], correcta: 1, explicacion: 'ITC-BT-25 establece 3% para circuitos de alumbrado en viviendas.' },
    { pregunta: '¿Cuál es la caída máxima en circuitos de fuerza (TC) en vivienda?', opciones: ['1%', '3%', '5%', '6,5%'], correcta: 2, explicacion: 'ITC-BT-25 establece 5% para otros usos en viviendas.' },
    { pregunta: 'En la fórmula monofásica, ¿por qué aparece el factor 2?', opciones: ['Por el neutro', 'Por ida y retorno', 'Por seguridad', 'Por el cosφ'], correcta: 1, explicacion: 'El factor 2 representa la ida y el retorno de la corriente.' },
    { pregunta: 'En la fórmula trifásica, ¿qué factor sustituye al 2?', opciones: ['1', '√2', '√3', '3'], correcta: 2, explicacion: 'En trifásica se usa √3 (1,732) en lugar del factor 2.' },
    { pregunta: '¿Qué conductividad tiene el cobre a 70°C?', opciones: ['56 m/Ω·mm²', '48 m/Ω·mm²', '44 m/Ω·mm²', '35 m/Ω·mm²'], correcta: 1, explicacion: 'El cobre tiene γ = 48 m/Ω·mm² a 70°C (temperatura de servicio).' },
    { pregunta: '¿Qué conductividad tiene el aluminio a 20°C?', opciones: ['56 m/Ω·mm²', '48 m/Ω·mm²', '35 m/Ω·mm²', '30 m/Ω·mm²'], correcta: 2, explicacion: 'El aluminio tiene γ = 35 m/Ω·mm² a 20°C.' },
    { pregunta: 'Si el contador está FUERA del CT, ¿cuánto se suma al límite de alumbrado?', opciones: ['0,5%', '1%', '1,5%', '2%'], correcta: 2, explicacion: 'Con contador fuera del CT, se suma 1,5% (3% + 1,5% = 4,5%).' },
    { pregunta: '¿Cuál es el límite total de caída en instalación de enlace (LGA + DI)?', opciones: ['1%', '1,5%', '2%', '3%'], correcta: 1, explicacion: 'La suma de LGA + DI no debe superar 1,5%.' },
    { pregunta: 'Para una línea más larga con la misma potencia, ¿qué ocurre con la caída?', opciones: ['Disminuye', 'Aumenta', 'Se mantiene', 'Depende del material'], correcta: 1, explicacion: 'La caída es proporcional a la longitud: más distancia = más caída.' },
    { pregunta: 'Para reducir la caída de tensión sin cambiar la potencia, ¿qué hacemos?', opciones: ['Aumentar sección', 'Reducir sección', 'Aumentar longitud', 'Reducir tensión'], correcta: 0, explicacion: 'Aumentar la sección reduce la resistencia y por tanto la caída.' },
    { pregunta: '¿Qué sección mínima se usa para circuitos de alumbrado?', opciones: ['1 mm²', '1,5 mm²', '2,5 mm²', '4 mm²'], correcta: 1, explicacion: 'La sección mínima para circuitos de alumbrado es 1,5 mm².' },
    { pregunta: '¿Cuál es la tensión de referencia en un circuito monofásico?', opciones: ['230 V', '400 V', '220 V', '380 V'], correcta: 0, explicacion: 'La tensión normalizada monofásica es 230 V.' },
    { pregunta: '¿Cuál es la tensión de referencia en un circuito trifásico?', opciones: ['230 V', '400 V', '220 V', '380 V'], correcta: 1, explicacion: 'La tensión normalizada trifásica (entre fases) es 400 V.' },
  ]
};

// Estado del módulo
let caidaTensionState = {
  vistaActiva: 'conceptos',
  conceptoExpandido: null,
  formulaActiva: 'monofasica',
  ejemploActivo: 'vivienda',
  preguntaActual: 0,
  respuestaQuiz: null,
  puntuacion: { correctas: 0, total: 0 },
  quizTerminado: false
};

// Abrir módulo
function abrirCaidaTension() {
  caidaTensionState = {
    vistaActiva: 'conceptos',
    conceptoExpandido: null,
    formulaActiva: 'monofasica',
    ejemploActivo: 'vivienda',
    preguntaActual: 0,
    respuestaQuiz: null,
    puntuacion: { correctas: 0, total: 0 },
    quizTerminado: false
  };
  renderCaidaTension();
  mostrarPantalla("pantalla-caida-tension");
}

// Render principal
function renderCaidaTension() {
  const pantalla = document.getElementById("pantalla-caida-tension");
  if (!pantalla) return;

  pantalla.innerHTML = `
    <div class="header-flex" style="margin-bottom:20px;">
      <div>
        <h1>⚡ Caída de Tensión</h1>
        <p style="font-size:0.9rem; color:var(--text-light); margin-top:5px;">Guía completa según REBT</p>
      </div>
      <button class="btn-outline" onclick="volverAlMenu()">⬅ Volver</button>
    </div>

    <!-- Tabs de navegación -->
    <div style="display:flex; gap:8px; margin-bottom:20px; flex-wrap:wrap; justify-content:center;">
      ${renderTabsCaida()}
    </div>

    <!-- Contenido según vista activa -->
    <div id="caida-contenido">
      ${renderContenidoCaida()}
    </div>
  `;
}

// Render tabs
function renderTabsCaida() {
  const tabs = [
    { id: 'conceptos', icon: '📚', label: 'Conceptos' },
    { id: 'limites', icon: '📏', label: 'Límites REBT' },
    { id: 'formulas', icon: '🔢', label: 'Fórmulas' },
    { id: 'ejemplos', icon: '✏️', label: 'Ejemplos' },
    { id: 'trucos', icon: '🧠', label: 'Trucos' },
    { id: 'quiz', icon: '🎯', label: 'Quiz' },
  ];

  return tabs.map(tab => `
    <button 
      class="${caidaTensionState.vistaActiva === tab.id ? 'btn-primary' : 'btn-outline'}" 
      onclick="cambiarVistaCaida('${tab.id}')"
      style="font-size:0.9rem; padding:10px 15px;">
      ${tab.icon} ${tab.label}
    </button>
  `).join('');
}

// Cambiar vista
function cambiarVistaCaida(vista) {
  caidaTensionState.vistaActiva = vista;
  renderCaidaTension();
}

// Render contenido
function renderContenidoCaida() {
  switch (caidaTensionState.vistaActiva) {
    case 'conceptos': return renderConceptosCaida();
    case 'limites': return renderLimitesCaida();
    case 'formulas': return renderFormulasCaida();
    case 'ejemplos': return renderEjemplosCaida();
    case 'trucos': return renderTrucosCaida();
    case 'quiz': return renderQuizCaida();
    default: return '';
  }
}

// Vista: CONCEPTOS
function renderConceptosCaida() {
  return `
    <div style="margin-bottom:20px;">
      ${CAIDA_TENSION_DATA.conceptosBasicos.map(c => renderConceptoCaidaCard(c)).join('')}
    </div>
    
    <!-- Resumen visual -->
    <div style="background:linear-gradient(135deg, #dc2626 0%, #f97316 100%); color:white; padding:20px; border-radius:12px; text-align:center;">
      <p style="font-weight:700; font-size:1.1rem; margin-bottom:10px;">Recuerda:</p>
      <p style="font-size:1.5rem; margin-bottom:5px;">ΔU ∝ <u>I × L</u> / <u>S</u></p>
      <p style="font-size:0.95rem;">Caída aumenta con Intensidad y Longitud, disminuye con Sección</p>
    </div>
  `;
}

function renderConceptoCaidaCard(concepto) {
  const expandido = caidaTensionState.conceptoExpandido === concepto.id;
  const colorStyles = {
    'bg-red': 'background:#fee2e2; border-color:#dc2626;',
    'bg-amber': 'background:#fef3c7; border-color:#f59e0b;',
    'bg-blue': 'background:#dbeafe; border-color:#3b82f6;'
  };
  const colorStyle = colorStyles[concepto.color] || '';
  
  return `
    <div style="${colorStyle} border:2px solid; border-radius:12px; margin-bottom:15px; overflow:hidden;">
      <div style="padding:15px; cursor:pointer;" onclick="toggleConceptoCaida('${concepto.id}')">
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="font-size:2.5rem;">${concepto.emoji}</span>
          <h3 style="font-size:1.2rem; font-weight:700; flex:1; margin:0;">${concepto.nombre}</h3>
          <span style="color:#999; font-size:1.5rem;">${expandido ? '▲' : '▼'}</span>
        </div>
      </div>

      ${expandido ? `
        <div style="background:rgba(255,255,255,0.6); padding:15px; border-top:2px solid rgba(0,0,0,0.1);">
          ${concepto.definicion ? `<p style="margin-bottom:12px;">${concepto.definicion}</p>` : ''}
          
          ${concepto.analogia ? `
            <div style="background:rgba(255,255,255,0.7); padding:12px; border-radius:8px; margin-bottom:12px;">
              <p style="font-weight:600; margin-bottom:5px;">🚿 Analogía:</p>
              <p style="font-size:0.95rem;">${concepto.analogia}</p>
            </div>
          ` : ''}
          
          ${concepto.formula ? `
            <div style="background:rgba(255,255,255,0.7); padding:12px; border-radius:8px; margin-bottom:12px;">
              <p style="font-weight:600; margin-bottom:5px;">🔢 Fórmula básica:</p>
              <code style="font-size:1.1rem; font-weight:600;">${concepto.formula}</code>
            </div>
          ` : ''}
          
          ${concepto.importante ? `
            <div style="background:#fef3c7; padding:12px; border-radius:8px; margin-bottom:12px; border-left:4px solid #f59e0b;">
              <p style="font-weight:700;">⚠️ ${concepto.importante}</p>
            </div>
          ` : ''}
          
          ${concepto.consecuencias ? `
            <div>
              <p style="font-weight:600; margin-bottom:8px;">Consecuencias de caída excesiva:</p>
              <ul style="margin:0; padding-left:0; list-style:none;">
                ${concepto.consecuencias.map(cons => `
                  <li style="display:flex; align-items:center; gap:8px; margin-bottom:5px; font-size:0.95rem;">
                    <span style="color:#dc2626;">✗</span> ${cons}
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
          
          ${concepto.factores ? `
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:10px;">
              ${concepto.factores.map(f => `
                <div style="background:rgba(255,255,255,0.7); padding:12px; border-radius:8px; text-align:center;">
                  <span style="font-size:2rem; display:block; margin-bottom:5px;">${f.icono}</span>
                  <p style="font-weight:600; font-size:0.9rem; margin-bottom:3px;">${f.factor}</p>
                  <p style="font-size:0.8rem; color:#666; margin:0;">${f.efecto}</p>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      ` : ''}
    </div>
  `;
}

function toggleConceptoCaida(id) {
  caidaTensionState.conceptoExpandido = caidaTensionState.conceptoExpandido === id ? null : id;
  renderCaidaTension();
}

// Vista: LÍMITES REBT
function renderLimitesCaida() {
  return `
    <div style="margin-bottom:20px;">
      ${CAIDA_TENSION_DATA.limitesREBT.map((cat, idx) => renderCategoriaLimite(cat, idx)).join('')}
    </div>

    <!-- Diagrama de tramos -->
    <div style="background:white; padding:20px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:20px;">
      <h3 style="font-weight:700; font-size:1.1rem; margin-bottom:15px; text-align:center;">📊 Esquema de Caídas Máximas</h3>
      <div style="display:flex; align-items:center; justify-content:center; gap:10px; flex-wrap:wrap; text-align:center;">
        <div style="background:#1f2937; color:white; padding:12px; border-radius:8px; min-width:70px;">
          <p style="font-size:0.75rem; margin-bottom:3px;">Centro</p>
          <p style="font-weight:700; margin:0;">CT</p>
        </div>
        <span style="font-size:1.5rem;">→</span>
        <div style="background:#f3e8ff; border:2px solid #8b5cf6; padding:12px; border-radius:8px; min-width:70px;">
          <p style="font-size:0.75rem; margin-bottom:3px;">LGA</p>
          <p style="font-weight:700; color:#dc2626; margin:0;">0,5%</p>
        </div>
        <span style="font-size:1.5rem;">→</span>
        <div style="background:#fed7aa; border:2px solid #f97316; padding:12px; border-radius:8px; min-width:70px;">
          <p style="font-size:0.75rem; margin-bottom:3px;">DI</p>
          <p style="font-weight:700; color:#dc2626; margin:0;">0,5-1%</p>
        </div>
        <span style="font-size:1.5rem;">→</span>
        <div style="background:#d1fae5; border:2px solid #10b981; padding:12px; border-radius:8px; min-width:80px;">
          <p style="font-size:0.75rem; margin-bottom:3px;">Alumbrado</p>
          <p style="font-weight:700; color:#dc2626; margin:0;">3%</p>
        </div>
        <span style="font-size:1.5rem;">|</span>
        <div style="background:#dbeafe; border:2px solid #3b82f6; padding:12px; border-radius:8px; min-width:70px;">
          <p style="font-size:0.75rem; margin-bottom:3px;">Fuerza</p>
          <p style="font-weight:700; color:#dc2626; margin:0;">5%</p>
        </div>
      </div>
      <p style="text-align:center; font-size:0.9rem; color:#666; margin-top:15px;">
        💡 Total instalación de enlace (LGA + DI) ≤ 1,5%
      </p>
    </div>

    <!-- Tabla resumen -->
    <div style="background:#fee2e2; border:2px solid #dc2626; padding:20px; border-radius:12px;">
      <h3 style="font-weight:700; color:#991b1b; margin-bottom:15px; text-align:center;">🚨 VALORES CLAVE PARA EL EXAMEN</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(100px, 1fr)); gap:12px; text-align:center;">
        <div style="background:white; padding:15px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <p style="font-size:2rem; font-weight:700; color:#dc2626; margin:0 0 5px 0;">0,5%</p>
          <p style="font-size:0.9rem; font-weight:600; margin:0;">LGA</p>
        </div>
        <div style="background:white; padding:15px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <p style="font-size:2rem; font-weight:700; color:#dc2626; margin:0 0 5px 0;">1%</p>
          <p style="font-size:0.9rem; font-weight:600; margin:0;">DI (ind.)</p>
        </div>
        <div style="background:white; padding:15px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <p style="font-size:2rem; font-weight:700; color:#dc2626; margin:0 0 5px 0;">3%</p>
          <p style="font-size:0.9rem; font-weight:600; margin:0;">Alumbrado</p>
        </div>
        <div style="background:white; padding:15px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <p style="font-size:2rem; font-weight:700; color:#dc2626; margin:0 0 5px 0;">5%</p>
          <p style="font-size:0.9rem; font-weight:600; margin:0;">Fuerza</p>
        </div>
      </div>
    </div>
  `;
}

function renderCategoriaLimite(cat, idx) {
  const colorStyles = {
    'bg-purple': 'background:#f3e8ff; border-color:#8b5cf6;',
    'bg-green': 'background:#d1fae5; border-color:#10b981;',
    'bg-blue': 'background:#dbeafe; border-color:#3b82f6;',
    'bg-amber': 'background:#fef3c7; border-color:#f59e0b;'
  };
  const colorStyle = colorStyles[cat.color] || '';
  
  return `
    <div style="${colorStyle} border:2px solid; border-radius:12px; overflow:hidden; margin-bottom:15px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
      <div style="padding:15px; border-bottom:2px solid rgba(0,0,0,0.1);">
        <h3 style="font-size:1.2rem; font-weight:700; margin:0 0 5px 0;">${cat.categoria}</h3>
        <p style="font-size:0.9rem; color:#666; margin:0;">${cat.subtitulo}</p>
      </div>
      <div style="background:rgba(255,255,255,0.5); overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse;">
          <thead style="background:#f3f4f6;">
            <tr>
              <th style="padding:10px; text-align:left; font-size:0.9rem; font-weight:700;">Tramo</th>
              <th style="padding:10px; text-align:center; font-size:0.9rem; font-weight:700;">Límite</th>
              <th style="padding:10px; text-align:center; font-size:0.9rem; font-weight:700;">Ref.</th>
              <th style="padding:10px; text-align:left; font-size:0.9rem; font-weight:700;">Nota</th>
            </tr>
          </thead>
          <tbody>
            ${cat.items.map((item, i) => `
              <tr style="border-top:1px solid #e5e7eb;">
                <td style="padding:10px; font-size:0.9rem;">${item.tramo}</td>
                <td style="padding:10px; text-align:center;">
                  <span style="font-weight:700; font-size:1.1rem; color:#dc2626;">${item.limite}</span>
                </td>
                <td style="padding:10px; text-align:center; font-size:0.8rem; color:#666;">${item.ref}</td>
                <td style="padding:10px; font-size:0.85rem; color:#666;">${item.nota}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Vista: FÓRMULAS
function renderFormulasCaida() {
  const formulas = CAIDA_TENSION_DATA.formulas;
  
  return `
    <!-- Selector de fórmula -->
    <div style="display:flex; justify-content:center; gap:15px; margin-bottom:20px; flex-wrap:wrap;">
      ${formulas.map(f => `
        <button
          onclick="cambiarFormulaCaida('${f.id}')"
          style="padding:15px 25px; border-radius:12px; font-weight:700; font-size:1.05rem; border:none; cursor:pointer; transition:all 0.2s; box-shadow:0 2px 8px rgba(0,0,0,0.1); ${
            caidaTensionState.formulaActiva === f.id 
              ? `background:${f.color}; color:white; transform:scale(1.05);` 
              : 'background:white; color:#666;'
          }"
        >
          ${f.emoji} ${f.titulo}
        </button>
      `).join('')}
    </div>

    <!-- Fórmula seleccionada -->
    ${formulas.filter(f => f.id === caidaTensionState.formulaActiva).map(f => `
      <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:20px;">
        <h2 style="font-size:1.5rem; font-weight:700; text-align:center; margin-bottom:20px;">${f.emoji} Fórmula ${f.titulo}</h2>
        
        <div style="background:#f3f4f6; padding:20px; border-radius:12px; margin-bottom:15px;">
          <p style="font-size:0.85rem; color:#666; margin-bottom:8px; text-align:center;">Con intensidad:</p>
          <p style="font-size:1.5rem; font-family:monospace; font-weight:700; text-align:center; color:#3b82f6; margin:0;">
            ${f.formula}
          </p>
        </div>

        <div style="background:#f3f4f6; padding:20px; border-radius:12px; margin-bottom:15px;">
          <p style="font-size:0.85rem; color:#666; margin-bottom:8px; text-align:center;">Con potencia:</p>
          <p style="font-size:1.5rem; font-family:monospace; font-weight:700; text-align:center; color:#10b981; margin:0;">
            ${f.formulaSimple}
          </p>
        </div>

        <div style="background:#fef3c7; padding:15px; border-radius:12px; margin-bottom:20px;">
          <p style="font-size:0.85rem; color:#666; margin-bottom:8px; text-align:center;">Porcentaje de caída:</p>
          <p style="font-size:1.2rem; font-family:monospace; font-weight:700; text-align:center; margin:0;">
            ${f.porcentaje}
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:10px; margin-bottom:15px;">
          ${f.variables.map(v => `
            <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px; border-radius:8px;">
              <span style="font-family:monospace; font-weight:700; color:#3b82f6; min-width:40px;">${v.var}</span>
              <span style="font-size:0.9rem;">${v.desc}</span>
            </div>
          `).join('')}
        </div>

        <div style="background:#dbeafe; padding:12px; border-radius:8px; text-align:center;">
          <p style="font-size:0.95rem; margin:0;"><strong>💡 Nota:</strong> ${f.nota}</p>
        </div>
      </div>
    `).join('')}

    <!-- Tabla conductividades -->
    <div style="background:white; padding:20px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:20px;">
      <h3 style="font-weight:700; font-size:1.2rem; margin-bottom:15px; text-align:center;">🔧 Conductividad (γ) según material y temperatura</h3>
      <table style="width:100%; border-collapse:collapse;">
        <thead style="background:#f3f4f6;">
          <tr>
            <th style="padding:12px; text-align:left; font-weight:700;">Material</th>
            <th style="padding:12px; text-align:center; font-weight:700;">20°C</th>
            <th style="padding:12px; text-align:center; font-weight:700;">70°C</th>
            <th style="padding:12px; text-align:center; font-weight:700;">90°C</th>
          </tr>
        </thead>
        <tbody>
          ${CAIDA_TENSION_DATA.conductividades.map((c, i) => `
            <tr style="background:${c.color};">
              <td style="padding:12px; font-weight:600;">${c.emoji} ${c.material}</td>
              <td style="padding:12px; text-align:center; font-family:monospace; font-weight:700;">${c.valor20}</td>
              <td style="padding:12px; text-align:center; font-family:monospace; font-weight:700; color:#3b82f6;">${c.valor70}</td>
              <td style="padding:12px; text-align:center; font-family:monospace;">${c.valor90}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <p style="text-align:center; font-size:0.9rem; color:#666; margin-top:12px;">
        💡 Para cálculos se usa normalmente <strong>70°C</strong> (temperatura de servicio): Cu = 48, Al = 30
      </p>
    </div>

    <!-- Tabla secciones -->
    <div style="background:white; padding:20px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
      <h3 style="font-weight:700; font-size:1.2rem; margin-bottom:15px; text-align:center;">📏 Secciones típicas y usos</h3>
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse;">
          <thead style="background:#f3f4f6;">
            <tr>
              <th style="padding:10px; text-align:center; font-weight:700;">Sección (mm²)</th>
              <th style="padding:10px; text-align:left; font-weight:700;">Uso típico</th>
              <th style="padding:10px; text-align:center; font-weight:700;">I máx aprox. (A)</th>
            </tr>
          </thead>
          <tbody>
            ${CAIDA_TENSION_DATA.tablaSecciones.map((s, i) => `
              <tr style="${i % 2 === 0 ? 'background:#f9fafb;' : ''}">
                <td style="padding:10px; text-align:center; font-weight:700;">${s.seccion}</td>
                <td style="padding:10px;">${s.usoTipico}</td>
                <td style="padding:10px; text-align:center;">${s.iMax}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function cambiarFormulaCaida(id) {
  caidaTensionState.formulaActiva = id;
  renderCaidaTension();
}

// Vista: EJEMPLOS
function renderEjemplosCaida() {
  const ejemplos = CAIDA_TENSION_DATA.ejemplosPracticos;
  
  return `
    <!-- Selector de ejemplo -->
    <div style="display:flex; justify-content:center; gap:15px; margin-bottom:20px; flex-wrap:wrap;">
      ${ejemplos.map(ej => `
        <button
          onclick="cambiarEjemploCaida('${ej.id}')"
          style="padding:12px 20px; border-radius:10px; font-weight:600; border:none; cursor:pointer; transition:all 0.2s; ${
            caidaTensionState.ejemploActivo === ej.id 
              ? 'background:#10b981; color:white; box-shadow:0 4px 12px rgba(16,185,129,0.3);' 
              : 'background:white; color:#666; box-shadow:0 2px 8px rgba(0,0,0,0.1);'
          }"
        >
          ${ej.emoji} ${ej.titulo.split(' ').slice(0, 3).join(' ')}
        </button>
      `).join('')}
    </div>

    <!-- Ejemplo seleccionado -->
    ${ejemplos.filter(ej => ej.id === caidaTensionState.ejemploActivo).map(ej => `
      <div style="background:white; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); overflow:hidden;">
        <div style="background:#10b981; color:white; padding:20px;">
          <h2 style="font-size:1.3rem; font-weight:700; margin:0;">${ej.emoji} ${ej.titulo}</h2>
        </div>
        
        <!-- Datos -->
        <div style="padding:20px; background:#f9fafb; border-bottom:1px solid #e5e7eb;">
          <h3 style="font-weight:700; margin-bottom:12px;">📋 Datos:</h3>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:10px;">
            ${Object.entries(ej.datos).map(([key, val]) => `
              <div style="background:white; padding:10px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <span style="font-size:0.8rem; color:#666; display:block; margin-bottom:2px;">${key}:</span>
                <span style="font-weight:700;">${val}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Pasos -->
        <div style="padding:20px;">
          <h3 style="font-weight:700; margin-bottom:15px;">📝 Resolución paso a paso:</h3>
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${ej.pasos.map((p, i) => `
              <div style="padding:15px; border-radius:10px; ${
                i === ej.pasos.length - 1 
                  ? 'background:#d1fae5; border:2px solid #10b981;' 
                  : 'background:#f3f4f6;'
              }">
                <div style="display:flex; align-items:start; gap:12px;">
                  <span style="background:#3b82f6; color:white; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.9rem; flex-shrink:0;">
                    ${i + 1}
                  </span>
                  <div style="flex:1;">
                    <p style="font-weight:600; margin-bottom:${p.formula || p.valor || p.resultado ? '5px' : '0'};">${p.paso}</p>
                    ${p.formula ? `<code style="font-size:0.9rem; background:white; padding:6px 10px; border-radius:6px; display:inline-block; margin-top:5px;">${p.formula}</code>` : ''}
                    ${p.valor ? `<p style="font-size:0.9rem; color:#666; margin:5px 0 0 0;">${p.valor}</p>` : ''}
                    ${p.resultado ? `<p style="font-weight:700; color:#059669; margin-top:8px; font-size:1.05rem;">${p.resultado}</p>` : ''}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Conclusión -->
        <div style="padding:20px; background:#dbeafe;">
          <p style="font-weight:600; text-align:center; margin:0;">
            <strong>📌 Conclusión:</strong> ${ej.conclusion}
          </p>
        </div>
      </div>
    `).join('')}

    <!-- Proceso general -->
    <div style="background:#fef3c7; border:2px solid #f59e0b; padding:20px; border-radius:12px; margin-top:20px;">
      <h3 style="font-weight:700; color:#92400e; margin-bottom:15px; text-align:center;">🔄 Proceso General de Cálculo</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(100px, 1fr)); gap:10px; text-align:center;">
        ${['1️⃣\nCalcular I', '2️⃣\nElegir S por I', '3️⃣\nCalcular ΔU', '4️⃣\nCalcular e%', '5️⃣\nVerificar límite'].map(texto => `
          <div style="background:white; padding:12px; border-radius:8px;">
            <p style="font-size:0.9rem; white-space:pre-line; margin:0;">${texto}</p>
          </div>
        `).join('')}
      </div>
      <p style="text-align:center; font-size:0.85rem; color:#666; margin-top:10px;">Si no cumple → Aumentar sección y repetir</p>
    </div>
  `;
}

function cambiarEjemploCaida(id) {
  caidaTensionState.ejemploActivo = id;
  renderCaidaTension();
}

// Vista: TRUCOS
function renderTrucosCaida() {
  return `
    <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:20px;">
      <h2 style="font-size:1.5rem; font-weight:700; text-align:center; margin-bottom:25px;">🧠 Trucos para Memorizar</h2>
      
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:15px;">
        ${CAIDA_TENSION_DATA.trucosMemoria.map(t => `
          <div style="background:#f9fafb; border-left:4px solid #3b82f6; padding:15px; border-radius:0 10px 10px 0;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="font-size:2rem;">${t.emoji}</span>
              <div>
                <p style="font-weight:700; font-size:1.05rem; margin-bottom:5px;">${t.truco}</p>
                <p style="font-size:0.9rem; color:#666; margin:0;">${t.explicacion}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Regla de oro -->
    <div style="background:linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%); color:white; padding:25px; border-radius:12px; text-align:center; margin-bottom:20px; box-shadow:0 4px 12px rgba(139,92,246,0.3);">
      <h3 style="font-weight:700; font-size:1.3rem; margin-bottom:15px;">📐 Regla de Oro</h3>
      <p style="font-size:2.5rem; font-weight:700; margin-bottom:10px;">0,5 - 1 - 3 - 5</p>
      <p style="font-size:1.2rem;">LGA → DI → Alumbrado → Fuerza</p>
    </div>

    <!-- Fórmulas simplificadas -->
    <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:20px;">
      <h3 style="font-weight:700; font-size:1.2rem; margin-bottom:20px; text-align:center;">🎯 Fórmulas Simplificadas para Examen</h3>
      
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:15px; margin-bottom:15px;">
        <div style="background:#dbeafe; padding:20px; border-radius:10px; text-align:center;">
          <p style="font-weight:700; margin-bottom:10px;">MONOFÁSICA</p>
          <code style="font-size:1.3rem; font-family:monospace; background:white; padding:10px 15px; border-radius:8px; display:block; font-weight:600;">
            S = 2·P·L / (γ·e·U)
          </code>
          <p style="font-size:0.8rem; color:#666; margin-top:8px;">Despejada para calcular sección</p>
        </div>
        <div style="background:#d1fae5; padding:20px; border-radius:10px; text-align:center;">
          <p style="font-weight:700; margin-bottom:10px;">TRIFÁSICA</p>
          <code style="font-size:1.3rem; font-family:monospace; background:white; padding:10px 15px; border-radius:8px; display:block; font-weight:600;">
            S = P·L / (γ·e·U)
          </code>
          <p style="font-size:0.8rem; color:#666; margin-top:8px;">Despejada para calcular sección</p>
        </div>
      </div>

      <div style="background:#fef3c7; padding:15px; border-radius:10px;">
        <p style="font-weight:700; text-align:center; margin-bottom:8px;">⚠️ Donde:</p>
        <p style="text-align:center; font-size:0.95rem; margin:0;">
          e = caída en voltios (no en %) → e = (e% × U) / 100
        </p>
      </div>
    </div>

    <!-- Comparación monofásica vs trifásica -->
    <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
      <h3 style="font-weight:700; font-size:1.2rem; margin-bottom:20px; text-align:center;">⚡ Monofásica vs Trifásica</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:15px;">
        <div style="background:#dbeafe; padding:20px; border-radius:10px;">
          <h4 style="font-weight:700; text-align:center; margin-bottom:15px;">1️⃣ MONOFÁSICA</h4>
          <ul style="list-style:none; padding:0; margin:0; font-size:0.95rem;">
            <li style="margin-bottom:8px;">• Factor: <strong>2</strong> (ida + retorno)</li>
            <li style="margin-bottom:8px;">• Tensión: <strong>230 V</strong></li>
            <li style="margin-bottom:8px;">• Cables: Fase + Neutro</li>
            <li style="margin-bottom:0;">• Uso: Viviendas, pequeños consumos</li>
          </ul>
        </div>
        <div style="background:#d1fae5; padding:20px; border-radius:10px;">
          <h4 style="font-weight:700; text-align:center; margin-bottom:15px;">3️⃣ TRIFÁSICA</h4>
          <ul style="list-style:none; padding:0; margin:0; font-size:0.95rem;">
            <li style="margin-bottom:8px;">• Factor: <strong>√3</strong> (1,732)</li>
            <li style="margin-bottom:8px;">• Tensión: <strong>400 V</strong></li>
            <li style="margin-bottom:8px;">• Cables: 3 Fases (+ Neutro)</li>
            <li style="margin-bottom:0;">• Uso: Motores, industria</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// Vista: QUIZ
function renderQuizCaida() {
  if (caidaTensionState.quizTerminado) {
    return renderQuizCaidaResultados();
  }

  const pregunta = CAIDA_TENSION_DATA.preguntas[caidaTensionState.preguntaActual];
  const progreso = ((caidaTensionState.preguntaActual + 1) / CAIDA_TENSION_DATA.preguntas.length) * 100;

  return `
    <div style="background:white; padding:25px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); max-width:700px; margin:0 auto;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
        <span style="font-size:0.9rem; color:#666;">Pregunta ${caidaTensionState.preguntaActual + 1} de ${CAIDA_TENSION_DATA.preguntas.length}</span>
        <span style="font-weight:600; color:var(--primary);">✓ ${caidaTensionState.puntuacion.correctas}/${caidaTensionState.puntuacion.total}</span>
      </div>

      <!-- Barra progreso -->
      <div style="width:100%; background:#e5e7eb; border-radius:10px; height:8px; margin-bottom:25px; overflow:hidden;">
        <div style="width:${progreso}%; background:var(--primary); height:100%; border-radius:10px; transition:width 0.3s;"></div>
      </div>

      <h3 style="font-size:1.2rem; font-weight:600; margin-bottom:20px;">${pregunta.pregunta}</h3>

      <div style="display:grid; gap:10px; margin-bottom:20px;">
        ${pregunta.opciones.map((opcion, idx) => {
          let bgColor = '#f9fafb';
          let borderColor = '#e5e7eb';
          let cursor = 'pointer';
          
          if (caidaTensionState.respuestaQuiz !== null) {
            cursor = 'default';
            if (idx === pregunta.correcta) {
              bgColor = '#d1fae5';
              borderColor = '#10b981';
            } else if (caidaTensionState.respuestaQuiz === idx) {
              bgColor = '#fee2e2';
              borderColor = '#dc2626';
            } else {
              bgColor = '#f3f4f6';
            }
          }

          return `
            <button 
              onclick="${caidaTensionState.respuestaQuiz === null ? `responderQuizCaida(${idx})` : ''}"
              style="background:${bgColor}; border:2px solid ${borderColor}; padding:15px; border-radius:10px; text-align:left; cursor:${cursor}; transition:all 0.2s; font-size:1rem;"
              ${caidaTensionState.respuestaQuiz !== null ? 'disabled' : ''}
            >
              <span style="font-weight:600; margin-right:10px;">${String.fromCharCode(65 + idx)}.</span>
              ${opcion}
            </button>
          `;
        }).join('')}
      </div>

      ${caidaTensionState.respuestaQuiz !== null ? `
        <div style="padding:15px; border-radius:10px; margin-bottom:15px; background:${caidaTensionState.respuestaQuiz === pregunta.correcta ? '#d1fae5' : '#fee2e2'}; color:${caidaTensionState.respuestaQuiz === pregunta.correcta ? '#065f46' : '#991b1b'};">
          <p style="font-weight:700; margin-bottom:8px;">
            ${caidaTensionState.respuestaQuiz === pregunta.correcta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
          </p>
          <p style="font-size:0.95rem; line-height:1.6; margin:0;">${pregunta.explicacion}</p>
        </div>

        <button 
          class="btn-primary" 
          onclick="siguientePreguntaCaida()"
          style="width:100%; padding:15px; font-size:1.05rem;">
          ${caidaTensionState.preguntaActual + 1 >= CAIDA_TENSION_DATA.preguntas.length ? 'Ver resultados 🎯' : 'Siguiente pregunta →'}
        </button>
      ` : ''}
    </div>
  `;
}

function renderQuizCaidaResultados() {
  const total = CAIDA_TENSION_DATA.preguntas.length;
  const correctas = caidaTensionState.puntuacion.correctas;
  const porcentaje = (correctas / total) * 100;
  
  let emoji = '📚';
  let mensaje = 'Necesitas repasar. ¡Vuelve a los conceptos!';
  
  if (correctas === total) {
    emoji = '🏆';
    mensaje = '¡Perfecto! Dominas la caída de tensión.';
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
        onclick="reiniciarQuizCaida()"
        style="padding:15px 30px; font-size:1.05rem;">
        🔄 Intentar de nuevo
      </button>
    </div>
  `;
}

function responderQuizCaida(idx) {
  if (caidaTensionState.respuestaQuiz !== null) return;
  
  caidaTensionState.respuestaQuiz = idx;
  const pregunta = CAIDA_TENSION_DATA.preguntas[caidaTensionState.preguntaActual];
  
  if (idx === pregunta.correcta) {
    caidaTensionState.puntuacion.correctas++;
  }
  caidaTensionState.puntuacion.total++;
  
  renderCaidaTension();
}

function siguientePreguntaCaida() {
  if (caidaTensionState.preguntaActual + 1 >= CAIDA_TENSION_DATA.preguntas.length) {
    caidaTensionState.quizTerminado = true;
  } else {
    caidaTensionState.preguntaActual++;
    caidaTensionState.respuestaQuiz = null;
  }
  renderCaidaTension();
}

function reiniciarQuizCaida() {
  caidaTensionState.preguntaActual = 0;
  caidaTensionState.respuestaQuiz = null;
  caidaTensionState.puntuacion = { correctas: 0, total: 0 };
  caidaTensionState.quizTerminado = false;
  renderCaidaTension();
}

