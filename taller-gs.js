/* Taller determinista: los ejercicios y sus fuentes pertenecen al Bloque 1 de GS. */
(function (root) {
  'use strict';

  const fases = ['Ejemplo resuelto', 'Con pistas', 'Independiente'];
  const opcion = (label, options, answer) => {
    const shift = Math.floor(Math.random() * options.length);
    return {
      label,
      options: options.slice(shift).concat(options.slice(0, shift)),
      answer: (answer - shift + options.length) % options.length
    };
  };
  const eleccion = (label, options, answer) => ({ label, kind: 'choice', options, answer });
  const numero = (label, answer, unit, units, tolerance = 0.02) =>
    ({ label, kind: 'number', answer, unit, units, tolerance });
  const etapa = (enunciado, checks, response, solution, hint, visual = null) =>
    ({ enunciado, checks, response, solution, hint, visual });

  const trifasico = (u, i, fp) => {
    const kw = Math.sqrt(3) * u * i * fp / 1000;
    return etapa(
      `Una carga trifásica equilibrada consume ${i} A a ${u} V de tensión de línea, con cos φ = ${fp}. Calcula la potencia activa en kW.`,
      [
        opcion('Expresión de partida', ['P = √3 · Uₗ · Iₗ · cos φ', 'P = Uₗ · Iₗ', 'P = 3 · Uₗ / Iₗ'], 0),
        opcion('Conversión final', ['Dividir los vatios entre 1000', 'Multiplicar los vatios por 1000', 'No convertir: W y kW son iguales'], 0)
      ],
      numero('Potencia activa', kw, 'kW', ['kW', 'W', 'kVA']),
      `P = √3 × ${u} V × ${i} A × ${fp} = ${(kw * 1000).toFixed(1)} W = ${kw.toFixed(2)} kW.`,
      'Usa los valores de línea y convierte de W a kW al final.'
    );
  };

  const transformador = (u1, n1, n2) => {
    const u2 = u1 * n2 / n1;
    return etapa(
      `Transformador ideal: ${u1} V en el primario, ${n1} espiras primarias y ${n2} secundarias. Calcula la tensión secundaria.`,
      [
        opcion('Relación de transformación', ['U₁ / U₂ = N₁ / N₂', 'U₁ · U₂ = N₁ / N₂', 'U₁ / U₂ = N₂ / N₁'], 0),
        opcion('Despeje de U₂', ['U₂ = U₁ · N₂ / N₁', 'U₂ = U₁ · N₁ / N₂', 'U₂ = N₁ / (U₁ · N₂)'], 0)
      ],
      numero('Tensión secundaria', u2, 'V', ['V', 'A', 'kV'], 0.005),
      `U₂ = ${u1} V × ${n2} / ${n1} = ${u2.toFixed(2)} V. La relación de espiras es adimensional.`,
      'Compara las espiras: si N₂ es menor que N₁, U₂ también debe ser menor que U₁.'
    );
  };

  const caida = (l, i, s) => {
    const delta = 2 * l * i / (56 * s);
    return etapa(
      `Circuito monofásico de cobre: ${l} m de longitud de ida, ${i} A y sección de ${s} mm². Con γ = 56 m/(Ω·mm²), calcula la caída aproximada de tensión.`,
      [
        opcion('Longitud que interviene', ['Ida y vuelta: 2L', 'Solo ida: L', 'La sección sustituye a la longitud'], 0),
        opcion('Expresión de cálculo', ['ΔU = 2 · L · I / (γ · S)', 'ΔU = γ · S / (2 · L · I)', 'ΔU = 2 · L · γ / (I · S)'], 0)
      ],
      numero('Caída de tensión', delta, 'V', ['V', '%', 'A']),
      `ΔU = 2 × ${l} m × ${i} A / (56 × ${s} mm²) = ${delta.toFixed(2)} V. Es una caída absoluta; para obtener el porcentaje habría que dividir por la tensión nominal.`,
      'En monofásica la corriente recorre el conductor de ida y el de retorno.'
    );
  };

  const cadenaCT = (titulo, pasos, pregunta, answer, visual) => etapa(
    titulo,
    [
      opcion('Primera comprobación', ['Identificar si el tramo es de MT o de BT', 'Calcular iluminancia', 'Elegir el color del plano'], 0),
      opcion('Criterio del esquema', ['Situar transformación entre celdas de MT y cuadro de BT', 'Situar el cuadro BT antes de la MT', 'Omitir la protección de MT'], 0)
    ],
    eleccion(pregunta, pasos, answer),
    `Orden funcional: celda de MT → transformador → cuadro de BT. ${pasos[answer]}.`,
    'Localiza el punto donde cambia el nivel de tensión.',
    visual
  );

  const simbolo = (enunciado, visual, significado, opciones, respuesta, funcion, funciones, respuestaFuncion) => etapa(
    enunciado,
    [
      opcion('Cómo interpretarlo', ['Consultar la representación del anexo, no deducirla por el aspecto', 'Suponer que todos los contactos son normalmente abiertos', 'Interpretarlo como un valor de tensión'], 0),
      opcion('Función en el circuito', funciones, respuestaFuncion)
    ],
    eleccion('Identificación del símbolo', opciones, respuesta),
    `${significado}. ${funcion}. La identificación se contrasta con el anexo de simbología.`,
    'Compara la forma y los contactos con la tabla de la página indicada del anexo.',
    visual
  );

  const documento = (enunciado, criterio, opciones, respuesta, solucion, hint) => etapa(
    enunciado,
    [
      opcion('Primer paso', ['Identificar finalidad y alcance de la instalación', 'Elegir un documento por su nombre sin revisar el alcance', 'Omitir el esquema'], 0),
      opcion('Revisión técnica', ['Comprobar coherencia entre esquema, cálculos y mediciones', 'Revisar solo la portada', 'Sustituir los cálculos por una fotografía'], 0)
    ],
    eleccion(criterio, opciones, respuesta), solucion, hint
  );

  const mantenimiento = (enunciado, opciones, respuesta, solucion, hint) => etapa(
    enunciado,
    [
      opcion('Antes de intervenir', ['Registrar incidencia y aplicar las medidas de seguridad', 'Intervenir sin identificar el equipo', 'Cerrar la orden antes de verificar'], 0),
      opcion('Cierre del trabajo', ['Documentar medidas, actuación y prueba de funcionamiento', 'Anotar solo el tiempo empleado', 'Eliminar el historial del equipo'], 0)
    ],
    eleccion('Tipo de actuación', opciones, respuesta), solucion, hint
  );

  const automatizacion = (p, o, b) => {
    const salida = Number(Boolean(p && o && !b));
    return etapa(
      `Relé programable: presencia P=${p}, oscuridad O=${o} y bloqueo manual B=${b}. La luz se gobierna con L = P ∧ O ∧ ¬B. ¿Cuál es la salida L?`,
      [
        opcion('Asignación de señales', ['P, O y B son entradas; L es salida', 'L es entrada y P es salida', 'Todas son salidas'], 0),
        opcion('Tratamiento de B', ['Negar B antes de aplicar la función AND', 'Sumar B al resultado', 'Ignorar B siempre'], 0)
      ],
      eleccion('Estado de la salida (sin unidad)', ['0 · apagada', '1 · encendida'], salida),
      `L = ${p} ∧ ${o} ∧ ¬${b} = ${salida}. Es un estado lógico, sin unidad física.`,
      'Evalúa primero ¬B y después las tres condiciones con AND.'
    );
  };

  const casos = [
    {
      id: 'trifasica', bid: 'sistemas_gs', title: 'Sistemas trifásicos', source: { idx: 2, page: 9, label: 'U2 · Sistemas trifásicos' },
      stages: [trifasico(400, 10, 0.8), trifasico(400, 16, 0.85), trifasico(400, 25, 0.9)]
    },
    {
      id: 'transformador', bid: 'sistemas_gs', title: 'Transformadores', source: { idx: 3, page: 6, label: 'U3 · Transformadores eléctricos' },
      stages: [transformador(230, 1000, 100), transformador(400, 800, 200), transformador(1200, 600, 150)]
    },
    {
      id: 'mantenimiento', bid: 'gestion_montaje_gs', title: 'Plan de mantenimiento', source: { idx: 7, page: 2, label: 'U7 · Organización del mantenimiento' },
      stages: [
        mantenimiento('En la revisión programada se limpia y ajusta un cuadro eléctrico antes de que aparezca una avería. ¿Qué actuación corresponde?', ['Correctiva', 'Preventiva', 'Sin mantenimiento'], 1, 'Es mantenimiento preventivo: se actúa según planificación y se registran medidas y resultados.', 'La intervención está prevista antes del fallo.'),
        mantenimiento('Un interruptor se avería y se sustituye para restablecer el servicio. ¿Qué actuación corresponde?', ['Predictiva', 'Correctiva', 'De oportunidad'], 1, 'Es mantenimiento correctivo: la reparación responde a una avería ya ocurrida.', 'El fallo ya se ha producido.'),
        mantenimiento('El análisis periódico de temperatura y vibración anticipa una anomalía en un motor. ¿Qué actuación corresponde?', ['Correctiva', 'Predictiva', 'Ninguna'], 1, 'Es mantenimiento predictivo: el estado medido permite anticipar la intervención.', 'Los datos de condición, no el calendario, disparan la intervención.')
      ]
    },
    {
      id: 'simbologia', bid: 'documentacion_tecnica_gs', title: 'Simbología del anexo', source: { idx: 8, page: 6, label: 'ANX · Simbología eléctrica' },
      stages: [
        simbolo('Identifica el símbolo del anexo y su uso en un circuito de mando.', { page: 6, row: 0 }, 'Pulsador normalmente abierto', ['Pulsador normalmente abierto', 'Pulsador normalmente cerrado', 'Contactor tripolar'], 0, 'Cierra el contacto mientras se acciona', ['Da una orden de mando momentánea', 'Transforma la tensión', 'Mide la corriente'], 0),
        simbolo('Elige la designación y la función del elemento mostrado.', { page: 6, row: 5 }, 'Contactor tripolar (multifilar)', ['Fusible', 'Contactor tripolar (multifilar)', 'Interruptor unipolar'], 1, 'Maniobra tres polos de potencia mediante su mando', ['Se usa solo como tierra de protección', 'Maniobra tres polos de potencia', 'Convierte CA en CC'], 1),
        simbolo('Ahora sin pistas: identifica el conductor señalado en el anexo.', { page: 2, row: 4 }, 'Conductor de protección PE', ['Conductor de fase L', 'Conductor neutro N', 'Conductor de protección PE'], 2, 'Se destina a protección, no al transporte normal de corriente de carga', ['Es retorno normal de carga', 'Une masas con la red de protección', 'Es una fase adicional'], 1)
      ]
    },
    {
      id: 'documentacion', bid: 'documentacion_tecnica_gs', title: 'Documentación de proyecto', source: { idx: 2, page: 7, label: 'U2 · Proyectos y memorias técnicas' },
      stages: [
        documento('Preparas el expediente técnico de una instalación. ¿Qué pieza describe la solución adoptada y justifica sus cálculos?', 'Documento principal', ['Memoria del proyecto', 'Factura de compra', 'Orden de almacén'], 0, 'La memoria explica la solución técnica y justifica las decisiones; planos, cálculos y presupuesto deben concordar.', 'Piensa en el documento que explica el proyecto.'),
        documento('Las cantidades del presupuesto no coinciden con las del plano. ¿Qué haces antes de presentar la documentación?', 'Acción prioritaria', ['Presentar igualmente', 'Conciliar mediciones, plano y presupuesto', 'Borrar las mediciones'], 1, 'Se corrigen las mediciones y se verifica la coherencia entre planos, cálculos y presupuesto.', 'Una magnitud discrepante debe resolverse antes de tramitar.'),
        documento('Un cambio de sección modifica el esquema y el anexo de cálculos. ¿Qué documentación actualizas?', 'Alcance de la revisión', ['Solo el dibujo', 'Solo la portada', 'Esquema, cálculos y documentos afectados'], 2, 'El expediente debe mantenerse coherente: esquema, cálculo y documentos vinculados se revisan juntos.', 'No dejes dos versiones técnicas contradictorias.')
      ]
    },
    {
      id: 'esquema-ct', bid: 'redes_ct_gs', title: 'Esquema de centro de transformación', source: { idx: 3, page: 4, label: 'U3 · Centros de transformación' },
      stages: [
        cadenaCT('Completa el recorrido funcional de energía en un centro de transformación.', ['Celda de MT → transformador → cuadro de BT', 'Cuadro de BT → celda de MT → transformador', 'Transformador → celda de MT → cuadro de BT'], 'Orden correcto', 0, 'MT → ? → BT'),
        cadenaCT('En el esquema de un CT falta el elemento entre las celdas de MT y el cuadro de BT.', ['Contador de alumbrado', 'Transformador MT/BT', 'Pulsador NA'], 'Elemento que falta', 1, 'Celdas MT → ? → Cuadro BT'),
        cadenaCT('Comprueba si el diagrama de entrega de energía mantiene el orden funcional.', ['BT → transformador → MT', 'MT → cuadro de BT → transformador', 'MT → transformador → BT'], 'Secuencia válida', 2, 'Celda MT → Transformador → Cuadro BT')
      ]
    },
    {
      id: 'caida', bid: 'configuracion_instalaciones_gs', title: 'Cálculo de caída de tensión', source: { idx: 4, page: 8, label: 'U4 · Cálculo de instalaciones eléctricas' },
      stages: [caida(20, 10, 2.5), caida(30, 16, 4), caida(45, 20, 6)]
    },
    {
      id: 'automatizacion', bid: 'domoticas_automaticas_gs', title: 'Lógica de automatización', source: { idx: 4, page: 4, label: 'U4 · Relés programables' },
      stages: [automatizacion(1, 1, 0), automatizacion(1, 0, 0), automatizacion(1, 1, 1)]
    }
  ];

  function evaluar(stage, values) {
    const checks = stage.checks.map((check, index) =>
      values.checks[index] !== '' && Number(values.checks[index]) === check.answer);
    const response = stage.response;
    const unitCorrect = response.kind !== 'number' || values.unit === response.unit;
    let resultCorrect;
    if (response.kind === 'number') {
      const input = Number(String(values.result).trim().replace(',', '.'));
      resultCorrect = String(values.result).trim() !== '' && Number.isFinite(input) &&
        Math.abs(input - response.answer) <= Math.max(response.tolerance, Math.abs(response.answer) * 0.005);
    } else {
      resultCorrect = values.result !== '' && Number(values.result) === response.answer;
    }
    return { checks, resultCorrect, unitCorrect, allCorrect: checks.every(Boolean) && resultCorrect && unitCorrect };
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { casos, evaluar };
  root.TALLER_GS_CASOS = casos;
  if (!root.document) return;

  const storageKey = 'universae_gs_taller_v1';
  const state = { bid: 'sistemas_gs', caseId: 'trifasica', attempts: 0 };
  let progress = {};
  try { progress = JSON.parse(root.localStorage.getItem(storageKey)) || {}; } catch (_) { progress = {}; }
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const current = () => casos.find(item => item.id === state.caseId);
  const level = () => Math.min(Number(progress[state.caseId]) || 0, 3);
  const save = (id, value) => {
    progress[id] = value;
    root.localStorage.setItem(storageKey, JSON.stringify(progress));
    if (value >= 3) root.PlanDiario?.completeWorkshop(id);
  };

  function select(name, values, selected = '') {
    return `<select name="${name}" ${name === 'unit' ? 'aria-label="Unidad"' : ''} required><option value="" ${selected === '' ? 'selected' : ''}>Selecciona</option>${values.map((value, index) => `<option value="${index}">${value}</option>`).join('')}</select>`;
  }

  function render() {
    const host = root.document.getElementById('pantalla-taller-gs');
    if (!host) return;
    const list = casos.filter(item => item.bid === state.bid);
    if (!list.some(item => item.id === state.caseId)) state.caseId = list[0].id;
    const item = current();
    const step = Math.min(level(), 2);
    const stage = item.stages[step];
    const solved = step === 0;
    host.innerHTML = `
      <div class="tgs-top"><div><p class="tgs-eyebrow">Taller práctico · Bloque 1</p><h1>${escape(item.title)}</h1></div><button type="button" class="tgs-quiet" id="tgs-back">Volver a asignatura</button></div>
      <div class="tgs-subjects" role="group" aria-label="Asignaturas">${CONFIGURACION_CURSO.map(block => `<button type="button" data-bid="${block.bloque}" class="${block.bloque === state.bid ? 'active' : ''}">${escape(block.titulo_boton)}</button>`).join('')}</div>
      <div class="tgs-layout"><nav class="tgs-cases" aria-label="Prácticas de la asignatura">${list.map(entry => `<button type="button" data-case="${entry.id}" class="${entry.id === item.id ? 'active' : ''}"><strong>${escape(entry.title)}</strong><span>${Number(progress[entry.id]) >= 3 ? 'Completada' : `${Math.min(Number(progress[entry.id]) || 0, 2)}/3 fases`}</span></button>`).join('')}</nav>
      <section class="tgs-work"><div class="tgs-phases">${fases.map((label, index) => `<span class="${index === step ? 'active' : ''} ${index < step || level() === 3 ? 'done' : ''}">${index + 1}. ${label}</span>`).join('')}</div>
      <div class="tgs-source"><span>${escape(item.source.label)} · pág. ${stage.visual?.page || item.source.page}</span><button type="button" id="tgs-source">Ver PDF del tema</button></div>
      <h2>${escape(stage.enunciado)}</h2>${stage.visual ? renderVisual(stage.visual) : ''}
      ${solved || level() === 3 ? `<div class="tgs-solution"><strong>Procedimiento</strong><ol>${stage.checks.map(check => `<li>${check.options[check.answer]}</li>`).join('')}</ol><strong>Resultado</strong><p>${escape(stage.solution)}</p></div>` : renderForm(stage, step)}
      ${solved ? '<button type="button" class="tgs-primary" id="tgs-next">Pasar a la práctica con pistas</button>' : ''}
      ${level() === 3 ? '<p class="tgs-complete">Práctica completada. Puedes repetirla o elegir otra.</p><button type="button" class="tgs-quiet" id="tgs-restart">Repetir práctica</button>' : ''}
      </section></div>`;
    const tabs = host.querySelector('.tgs-subjects');
    const activeTab = tabs.querySelector('button.active');
    const activeLeft = activeTab.offsetLeft - tabs.offsetLeft;
    if (activeLeft < tabs.scrollLeft || activeLeft + activeTab.clientWidth > tabs.scrollLeft + tabs.clientWidth) {
      tabs.scrollLeft = activeLeft - 16;
    }
    host.querySelector('#tgs-back').addEventListener('click', () => { state.bid = current().bid; filtrarBloque(state.bid); mostrarPantalla('pantalla-inicio'); });
    host.querySelectorAll('[data-bid]').forEach(button => button.addEventListener('click', () => {
      state.bid = button.dataset.bid; state.caseId = casos.find(entry => entry.bid === state.bid).id; state.attempts = 0; render();
    }));
    host.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => { state.caseId = button.dataset.case; state.attempts = 0; render(); }));
    host.querySelector('#tgs-source').addEventListener('click', () => abrirPdfTema(item.bid, item.source.idx, stage.visual?.page || item.source.page, { projectOnly: true }));
    host.querySelector('#tgs-next')?.addEventListener('click', () => { save(item.id, 1); state.attempts = 0; render(); });
    host.querySelector('#tgs-restart')?.addEventListener('click', () => { save(item.id, 0); state.attempts = 0; render(); });
    host.querySelector('#tgs-form')?.addEventListener('submit', event => { event.preventDefault(); correct(event.currentTarget, stage, step); });
    host.querySelector('#tgs-advance')?.addEventListener('click', () => { save(item.id, step + 1); state.attempts = 0; render(); });
  }

  function renderVisual(visual) {
    if (typeof visual === 'string') {
      return `<div class="tgs-diagram" role="img" aria-label="Esquema: ${escape(visual)}">${visual.split('→').map((part, index) => `${index ? '<span class="tgs-connector" aria-hidden="true">→</span>' : ''}<span class="tgs-node">${escape(part.trim())}</span>`).join('')}</div>`;
    }
    const offset = 424.5 + visual.row * 83.1;
    return `<div class="tgs-symbol-frame"><span>Fragmento del anexo · pág. ${visual.page}</span><div class="tgs-symbol page-${visual.page}" style="background-position: -231px -${offset}px" role="img" aria-label="Símbolo eléctrico para identificar"></div></div>`;
  }

  function renderForm(stage, step) {
    const result = stage.response;
    return `<form id="tgs-form" novalidate><p class="tgs-section-label">Procedimiento</p>
      ${stage.checks.map((check, index) => `<label class="tgs-field"><span>${escape(check.label)}</span>${select(`check-${index}`, check.options)}</label>`).join('')}
      <p class="tgs-section-label">Resultado${result.kind === 'number' ? ' y unidades' : ''}</p><label class="tgs-field"><span>${escape(result.label)}</span>${result.kind === 'number' ? `<div class="tgs-number"><input name="result" type="text" inputmode="decimal" autocomplete="off" placeholder="Valor" aria-label="Valor numérico">${select('unit', result.units)}</div>` : select('result', result.options)}</label>
      ${step === 1 ? `<details class="tgs-hint"><summary>Ver pista</summary><p>${escape(stage.hint)}</p></details>` : ''}
      <div id="tgs-feedback" aria-live="polite"></div><button type="submit" class="tgs-primary">Corregir ejercicio</button><button type="button" class="tgs-primary tgs-next" id="tgs-advance" hidden>${step === 1 ? 'Pasar al ejercicio independiente' : 'Terminar práctica'}</button>
    </form>`;
  }

  function correct(form, stage, step) {
    const values = {
      checks: stage.checks.map((_, index) => form.elements[`check-${index}`].value),
      result: form.elements.result.value,
      unit: stage.response.kind === 'number' && form.elements.unit.value !== ''
        ? stage.response.units[Number(form.elements.unit.value)] : null
    };
    const result = evaluar(stage, values);
    state.attempts += 1;
    const feedback = form.querySelector('#tgs-feedback');
    const lines = result.checks.map((correct, index) => `<li class="${correct ? 'ok' : 'bad'}">${escape(stage.checks[index].label)}: ${correct ? 'correcto' : 'revisa la elección'}</li>`);
    lines.push(`<li class="${result.resultCorrect ? 'ok' : 'bad'}">Resultado: ${result.resultCorrect ? 'correcto' : 'revisa el cálculo o la elección'}</li>`);
    if (stage.response.kind === 'number') lines.push(`<li class="${result.unitCorrect ? 'ok' : 'bad'}">Unidad: ${result.unitCorrect ? 'correcta' : `debe ser ${escape(stage.response.unit)}`}</li>`);
    feedback.innerHTML = `<div class="tgs-feedback ${result.allCorrect ? 'success' : 'retry'}"><strong>${result.allCorrect ? 'Bien resuelto' : 'Aún hay pasos por revisar'}</strong><ul>${lines.join('')}</ul>${!result.allCorrect && state.attempts >= 2 ? `<p>${escape(stage.solution)}</p>` : ''}</div>`;
    if (result.allCorrect) {
      form.querySelector('[type="submit"]').hidden = true;
      form.querySelector('#tgs-advance').hidden = false;
    }
  }

  root.abrirTallerGS = (bid, caseId) => {
    state.bid = casos.some(item => item.bid === bid) ? bid : 'sistemas_gs';
    state.caseId = casos.some(item => item.bid === state.bid && item.id === caseId) ? caseId : casos.find(item => item.bid === state.bid).id;
    state.attempts = 0;
    render();
    mostrarPantalla('pantalla-taller-gs');
  };
})(typeof window !== 'undefined' ? window : globalThis);
