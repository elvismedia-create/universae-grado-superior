/* SÍMBOLO MASTER v67.24 - SIMPLE PERO BONITO */

const SIMBOLOS_SIMPLE = {
  protecciones: [
    { emoji: '🔌', nombre: 'ICP', desc: 'Interruptor Control Potencia - Limita la potencia contratada', norm: 'ITC-BT-17' },
    { emoji: '⚡', nombre: 'IGA', desc: 'Interruptor General Automático - Protección general instalación', norm: 'ITC-BT-17' },
    { emoji: '🔒', nombre: 'PIA', desc: 'Magnetotérmico - Protege contra sobrecargas y cortocircuitos', norm: 'ITC-BT-22' },
    { emoji: '🛡️', nombre: 'ID', desc: 'Interruptor Diferencial - Protege contra fugas a tierra', norm: 'ITC-BT-24' }
  ],
  receptores: [
    { emoji: '💡', nombre: 'Lámpara', desc: 'Punto de luz - Circuito C1-C5', potencia: '15-100W' },
    { emoji: '🔌', nombre: 'Enchufe', desc: 'Toma corriente 16A - Circuito C6-C9', potencia: '3.680W máx' },
    { emoji: '⚙️', nombre: 'Motor', desc: 'Motor eléctrico - Monofásico o trifásico', potencia: 'Variable' },
    { emoji: '🌡️', nombre: 'Termo', desc: 'Acumulador agua caliente - Circuito C12', potencia: '1.500-3.000W' }
  ],
  cableado: [
    { emoji: '⚫', nombre: 'Fase', desc: 'Conductor activo - Marrón, negro o gris', tension: '230V/400V' },
    { emoji: '🔵', nombre: 'Neutro', desc: 'Conductor retorno - Azul claro obligatorio', tension: '0V' },
    { emoji: '🟢', nombre: 'Tierra', desc: 'Protección - Amarillo-verde obligatorio', tension: '0V' },
    { emoji: '〰️', nombre: 'H07V-K', desc: 'Cable flexible - Para interior cuadros', tipo: 'Clase 5' }
  ],
  instalacion: [
    { emoji: '📦', nombre: 'CPM', desc: 'Cuadro Principal - Contiene ICP, IGA, IDs, PIAs', norm: 'ITC-BT-17' },
    { emoji: '📦➡️', nombre: 'CS', desc: 'Cuadro Secundario - Para zonas alejadas', norm: 'ITC-BT-17' },
    { emoji: '⚡➗', nombre: 'Caja', desc: 'Caja derivación - Para empalmes', norm: 'ITC-BT-21' }
  ],
  mando: [
    { emoji: '🔘', nombre: 'Interruptor', desc: 'ON/OFF desde 1 punto', puntos: '1' },
    { emoji: '🔀', nombre: 'Conmutador', desc: 'ON/OFF desde 2 puntos', puntos: '2' },
    { emoji: '✖️', nombre: 'Cruzamiento', desc: 'Para 3+ puntos con conmutadores', puntos: '3+' },
    { emoji: '⏺️', nombre: 'Pulsador', desc: 'Contacto momentáneo - Timbre o teleruptor', puntos: 'Múltiples' }
  ]
};

const QUIZ_PREGUNTAS = [
  { p: '¿Cuál es la función del ICP?', ops: ['Proteger contra fugas', 'Limitar potencia contratada', 'Proteger cortocircuitos', 'Medir consumo'], c: 1, exp: 'El ICP limita la potencia contratada. Es propiedad de la compañía.' },
  { p: '¿Qué normativa regula el ID?', ops: ['ITC-BT-17', 'ITC-BT-22', 'ITC-BT-24', 'ITC-BT-25'], c: 2, exp: 'La ITC-BT-24 regula las protecciones contra contactos indirectos (diferenciales).' },
  { p: '¿Color del conductor neutro?', ops: ['Marrón', 'Negro', 'Azul claro', 'Amarillo-verde'], c: 2, exp: 'El neutro debe ser azul claro obligatoriamente (ITC-BT-19).' },
  { p: '¿Qué protege un PIA?', ops: ['Solo sobrecargas', 'Solo cortocircuitos', 'Sobrecargas y cortocircuitos', 'Fugas a tierra'], c: 2, exp: 'El PIA (magnetotérmico) protege contra sobrecargas (térmico) y cortocircuitos (magnético).' },
  { p: '¿Sensibilidad diferencial en baños?', ops: ['10 mA', '30 mA', '100 mA', '300 mA'], c: 1, exp: 'Los baños requieren diferencial de 30 mA máximo (ITC-BT-25).' },
  { p: '¿Desde cuántos puntos controlan 2 conmutadores?', ops: ['1', '2', '3', '4'], c: 1, exp: 'Dos conmutadores permiten controlar desde 2 puntos (típico en pasillos).' },
  { p: '¿Qué conductor va a tierra?', ops: ['Fase', 'Neutro', 'Protección', 'Piloto'], c: 2, exp: 'El conductor de protección (amarillo-verde) conecta masas a tierra.' },
  { p: '¿Intensidad toma corriente estándar?', ops: ['10A', '16A', '25A', '32A'], c: 1, exp: 'Las tomas Schuko estándar son de 16A (3.680W a 230V).' },
  { p: '¿Qué NO va en el CPM?', ops: ['ICP', 'IGA', 'Contador', 'Diferenciales'], c: 2, exp: 'El contador NO va en el CPM. Va en centralización o caja específica.' },
  { p: '¿Sección mínima alumbrado?', ops: ['1 mm²', '1,5 mm²', '2,5 mm²', '4 mm²'], c: 1, exp: 'Circuitos alumbrado: mínimo 1,5 mm² (ITC-BT-25).' }
];

let state = {
  vista: 'protecciones',
  pregunta: 0,
  respuesta: null,
  correctas: 0,
  total: 0,
  quizFin: false
};

function abrirSimboloMaster() {
  state.vista = 'protecciones';
  render();
  mostrarPantalla("pantalla-simbolo-master");
}

function render() {
  const p = document.getElementById("pantalla-simbolo-master");
  if (!p) return;
  
  p.innerHTML = `
    <div class="header-flex" style="margin-bottom:20px;">
      <h1>📖 Símbolo Master</h1>
      <button class="btn-outline" onclick="volverAlMenu()">⬅ Volver</button>
    </div>
    
    ${renderTabs()}
    ${renderContenido()}
  `;
}

function renderTabs() {
  const tabs = [
    { id: 'protecciones', label: '🛡️ Protecciones', color: '#3b82f6' },
    { id: 'receptores', label: '🔌 Receptores', color: '#10b981' },
    { id: 'cableado', label: '⚡ Cableado', color: '#f59e0b' },
    { id: 'instalacion', label: '📦 Instalación', color: '#8b5cf6' },
    { id: 'mando', label: '🎛️ Mando', color: '#ec4899' },
    { id: 'quiz', label: '🎯 Quiz', color: '#dc2626' }
  ];
  
  return `
    <div style="display:flex; gap:8px; margin-bottom:20px; overflow-x:auto; padding-bottom:10px;">
      ${tabs.map(t => `
        <button onclick="cambiarVista('${t.id}')" style="
          padding:12px 20px;
          border-radius:8px;
          border:2px solid ${state.vista === t.id ? t.color : '#e5e7eb'};
          background:${state.vista === t.id ? t.color : 'white'};
          color:${state.vista === t.id ? 'white' : '#374151'};
          font-weight:600;
          cursor:pointer;
          white-space:nowrap;
        ">${t.label}</button>
      `).join('')}
    </div>
  `;
}

function renderContenido() {
  if (state.vista === 'quiz') return renderQuiz();
  
  const items = SIMBOLOS_SIMPLE[state.vista] || [];
  const titulos = {
    protecciones: '🛡️ Protecciones Eléctricas',
    receptores: '🔌 Receptores',
    cableado: '⚡ Conductores y Cables',
    instalacion: '📦 Elementos de Instalación',
    mando: '🎛️ Mecanismos de Mando'
  };
  
  return `
    <div style="max-width:900px; margin:0 auto;">
      <h2 style="margin-bottom:20px;">${titulos[state.vista]}</h2>
      <div style="display:grid; gap:15px;">
        ${items.map(item => `
          <div style="background:white; padding:20px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
            <div style="display:flex; align-items:center; gap:15px;">
              <div style="font-size:2.5rem;">${item.emoji}</div>
              <div style="flex:1;">
                <h3 style="margin:0 0 5px 0; font-size:1.1rem;">${item.nombre}</h3>
                <p style="margin:0 0 8px 0; color:#666;">${item.desc}</p>
                ${item.norm ? `<p style="margin:0; font-size:0.85rem; color:var(--primary);">📋 ${item.norm}</p>` : ''}
                ${item.potencia ? `<p style="margin:0; font-size:0.85rem; color:#10b981;">⚡ ${item.potencia}</p>` : ''}
                ${item.tension ? `<p style="margin:0; font-size:0.85rem; color:#f59e0b;">⚡ ${item.tension}</p>` : ''}
                ${item.tipo ? `<p style="margin:0; font-size:0.85rem; color:#8b5cf6;">📏 ${item.tipo}</p>` : ''}
                ${item.puntos ? `<p style="margin:0; font-size:0.85rem; color:#ec4899;">🎯 ${item.puntos} puntos</p>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderQuiz() {
  if (state.quizFin) return renderResultados();
  
  const q = QUIZ_PREGUNTAS[state.pregunta];
  const prog = ((state.pregunta + 1) / QUIZ_PREGUNTAS.length) * 100;
  
  return `
    <div style="max-width:800px; margin:0 auto;">
      <h2 style="margin-bottom:10px;">🎯 Quiz de Símbolos</h2>
      <p style="color:#666; margin-bottom:20px;">Pregunta ${state.pregunta + 1} de ${QUIZ_PREGUNTAS.length}</p>
      
      <div style="width:100%; background:#e5e7eb; border-radius:10px; height:8px; margin-bottom:20px;">
        <div style="width:${prog}%; background:var(--primary); height:100%; border-radius:10px;"></div>
      </div>
      
      <div style="background:white; padding:30px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:20px;">
        <p style="font-size:1.1rem; font-weight:600; margin-bottom:20px;">${q.p}</p>
        
        <div style="display:grid; gap:12px;">
          ${q.ops.map((op, i) => {
            let bg = '#fff', border = '#e5e7eb';
            if (state.respuesta !== null) {
              if (i === q.c) { bg = '#d1fae5'; border = '#10b981'; }
              else if (state.respuesta === i) { bg = '#fee2e2'; border = '#dc2626'; }
            }
            return `
              <button onclick="${state.respuesta === null ? `responder(${i})` : ''}" 
                      style="background:${bg}; border:2px solid ${border}; padding:15px; border-radius:10px; text-align:left; cursor:${state.respuesta === null ? 'pointer' : 'default'};"
                      ${state.respuesta !== null ? 'disabled' : ''}>
                <strong>${String.fromCharCode(65 + i)}.</strong> ${op}
              </button>
            `;
          }).join('')}
        </div>
      </div>
      
      ${state.respuesta !== null ? `
        <div style="background:${state.respuesta === q.c ? '#d1fae5' : '#fee2e2'}; padding:20px; border-radius:12px; margin-bottom:20px;">
          <p style="font-weight:700; margin-bottom:10px;">${state.respuesta === q.c ? '✅ ¡Correcto!' : '❌ Incorrecto'}</p>
          <p style="margin:0;">${q.exp}</p>
        </div>
        <button class="btn-primary" onclick="siguiente()" style="width:100%; padding:15px;">
          ${state.pregunta + 1 >= QUIZ_PREGUNTAS.length ? 'Ver resultados 🎯' : 'Siguiente →'}
        </button>
      ` : ''}
    </div>
  `;
}

function renderResultados() {
  const pct = Math.round((state.correctas / state.total) * 100);
  let emoji = '📚', msg = 'Sigue estudiando', color = '#f59e0b';
  
  if (pct >= 90) { emoji = '🏆'; msg = '¡Excelente!'; color = '#10b981'; }
  else if (pct >= 70) { emoji = '🎉'; msg = '¡Muy bien!'; color = '#3b82f6'; }
  else if (pct >= 50) { emoji = '👍'; msg = 'Aprobado'; color = '#8b5cf6'; }
  
  return `
    <div style="max-width:600px; margin:0 auto; text-align:center;">
      <div style="background:white; padding:40px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        <div style="font-size:5rem; margin-bottom:20px;">${emoji}</div>
        <h2>Quiz completado</h2>
        <p style="font-size:3rem; font-weight:700; color:${color}; margin:20px 0;">${pct}%</p>
        <p style="font-size:1.1rem; color:#666; margin-bottom:30px;">${msg}</p>
        
        <div style="background:#f9fafb; padding:20px; border-radius:10px; margin-bottom:30px;">
          <p style="font-size:2rem; font-weight:700; margin:0;">${state.correctas} / ${state.total}</p>
        </div>
        
        <div style="display:grid; gap:10px;">
          <button class="btn-primary" onclick="reiniciarQuiz()" style="padding:15px;">🔄 Repetir quiz</button>
          <button class="btn-outline" onclick="cambiarVista('protecciones')" style="padding:15px;">📚 Volver a estudiar</button>
        </div>
      </div>
    </div>
  `;
}

function cambiarVista(v) {
  state.vista = v;
  render();
}

function responder(r) {
  if (state.respuesta !== null) return;
  state.respuesta = r;
  state.total++;
  if (r === QUIZ_PREGUNTAS[state.pregunta].c) state.correctas++;
  render();
}

function siguiente() {
  if (state.pregunta + 1 >= QUIZ_PREGUNTAS.length) {
    state.quizFin = true;
  } else {
    state.pregunta++;
    state.respuesta = null;
  }
  render();
}

function reiniciarQuiz() {
  state.pregunta = 0;
  state.respuesta = null;
  state.correctas = 0;
  state.total = 0;
  state.quizFin = false;
  render();
}
