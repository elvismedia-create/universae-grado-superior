// TEMA_FV_U4: Normativa y seguridad en FV (67 preguntas - IDs 14001-14067)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U4_DATA = [
  // ========== EXAMEN OFICIAL (10 preguntas) ==========
  {
    id: 14001,
    tema: 14,
    texto: "El sistema de fijación por gravedad de soportes consiste en: (TEST OFICIAL)",
    opciones: [
      "Taladrar la cubierta y anclar el soporte con tornillos autoroscantes",
      "Este sistema no se puede utilizar",
      "El propio peso del panel y el soporte lo fijan a la cubierta",
      "El uso de contrapesos para la fijación del soporte a la cubierta"
    ],
    correctaTexto: "El propio peso del panel y el soporte lo fijan a la cubierta",
    explicacion: "Fijación por gravedad: el peso propio del sistema (paneles + estructura) proporciona la fricción necesaria sin necesidad de anclajes perforadores. Ventaja: no daña cubierta."
  },
  {
    id: 14002,
    tema: 14,
    texto: "Las distancias entre filas de módulos dependen entre muchos factores de la latitud del lugar y se calcula para: (TEST OFICIAL)",
    opciones: [
      "Minimizar las pérdidas por sombras",
      "Dejar espacio suficiente para las operaciones de mantenimiento",
      "Permitir la instalación de mayor número de módulos fotovoltaicos",
      "Ninguna respuesta es correcta"
    ],
    correctaTexto: "Minimizar las pérdidas por sombras",
    explicacion: "Espaciamiento entre filas (pitch) se calcula para que a máxima sombra invernal (elevación solar mínima), una fila no sombreee la siguiente. Fórmula: d = h / tan(elevación mínima)"
  },
  {
    id: 14003,
    tema: 14,
    texto: "Señala la respuesta incorrecta en relación con las instalaciones solares fotovoltaicas sobre suelo: (TEST OFICIAL)",
    opciones: [
      "Se dejará altura suficiente entre el suelo y los módulos fotovoltaicos para que la vegetación no afecte a los módulos fotovoltaicos",
      "El método de instalación más común es con estructura coplanar",
      "Se podrá emplear estructura fijada al terreno por medio de zapatas de hormigón",
      "Las filas de módulos fotovoltaicos deberán replantearse para dejar separación entre ellas suficiente para evitar sombras"
    ],
    correctaTexto: "El método de instalación más común es con estructura coplanar",
    explicacion: "Sobre suelo se usan estructuras INCLINADAS (no coplanares). Coplanar es para tejados. Sobre suelo: altura mínima 0.5-1m (vegetación, limpieza), estructura inclinada para radiación óptima."
  },
  {
    id: 14004,
    tema: 14,
    texto: "Las estructuras de los paneles solares recibirán menos fuerza del viento cuando se instalan en: (TEST OFICIAL)",
    opciones: [
      "Fachadas",
      "Cubiertas planas",
      "Cubiertas inclinadas",
      "Suelo"
    ],
    correctaTexto: "Cubiertas inclinadas",
    explicacion: "Cubiertas inclinadas: el viento tiende a pasar sobre la pendiente (menor presión dinámica). Cubiertas planas y fachadas: mayor exposición al viento frontal (presión máxima)."
  },
  {
    id: 14005,
    tema: 14,
    texto: "Los factores que hay que tener en cuenta la hora de elegir un tipo de soporte para módulos solares son: (TEST OFICIAL)",
    opciones: [
      "Posibilidad de nevadas en la zona",
      "Cantidad de módulos y peso de los mismos",
      "Velocidad y frecuencia del viento en el lugar de la instalación",
      "Todas son correctas"
    ],
    correctaTexto: "Todas son correctas",
    explicacion: "Diseño de soportes debe considerar: 1) Carga nieve (zonificación climática), 2) Peso total (paneles + estructura), 3) Viento (zona ventosa requiere anclajes más robustos)."
  },
  {
    id: 14006,
    tema: 14,
    texto: "Los paneles fotovoltaicos empleados en la integración arquitectónica de los edificios deben asegurar: (TEST OFICIAL)",
    opciones: [
      "Las mismas condiciones que el material de construcción que sustituye",
      "Únicamente la generación de electricidad",
      "La visibilidad en el interior del edificio",
      "Su viabilidad económica"
    ],
    correctaTexto: "Las mismas condiciones que el material de construcción que sustituye",
    explicacion: "BIPV (Building-Integrated PV): si reemplazan tejas deben impermeabilizar; si son vidrios, deben permitir vista/luz; si son muros deben aislar térmicamente. Dual functionality."
  },
  {
    id: 14007,
    tema: 14,
    texto: "Los seguidores solares de dos ejes se caracterizan por: (TEST OFICIAL)",
    opciones: [
      "Instalarse siempre sobre cubiertas planas",
      "Ofrecer mayores rendimientos ya que siguen la trayectoria acimutal y altura solar",
      "Instalarse mayoritariamente en huertos solares",
      "B y C son correctas"
    ],
    correctaTexto: "B y C son correctas",
    explicacion: "Seguidores 2 ejes: siguen azimut (Este-Oeste) + elevación (altura solar). Aumentan energía 30-40% vs fijo. Económicamente justificados en huertos solares grandes (>100 kW)."
  },
  {
    id: 14008,
    tema: 14,
    texto: "Los huertos solares que cuentan con seguidores solares a un eje utilizan un sistema para realizar este seguimiento basado en: (TEST OFICIAL)",
    opciones: [
      "Motor de combustión",
      "Motores eléctricos de actuación",
      "Cilindros Neumáticos",
      "Cilindros Hidráulicos"
    ],
    correctaTexto: "Motores eléctricos de actuación",
    explicacion: "Seguidores a 1 eje usan motores eléctricos controlados por PLC (tiempo solar o sensor de luz). Pueden ser paso a paso (por horas) o continuos (seguimiento suave)."
  },
  {
    id: 14009,
    tema: 14,
    texto: "Para una vivienda unifamiliar que cuenta con una terraza transitable plana, una fachada y un tejado inclinado a un agua, se pretenden instalar 6 módulos fotovoltaicos de 460Wp. Teniendo en cuenta que hay espacio suficiente para su instalación en cada una de las superficies ¿cuál es la superficie óptima para instalar los módulos fotovoltaicos desde un punto de vista de rendimiento, económico, funcional, estético y de seguridad estructural frente a la acción del viento?: (TEST OFICIAL)",
    opciones: [
      "Instalación de los módulos fotovoltaicos con estructura inclinada en terraza",
      "Instalación de los módulos fotovoltaicos coplanares en el tejado a un agua",
      "Instalación de los módulos fotovoltaicos con estructura inclinada sobre fachada",
      "Ninguna es correcta"
    ],
    correctaTexto: "Instalación de los módulos fotovoltaicos coplanares en el tejado a un agua",
    explicacion: "Tejado inclinado coplanar es óptimo: 1) Rendimiento: ángulo inclinado natural, 2) Económico: sin estructura adicional, 3) Funcional: acceso tejado, 4) Estético: integrado, 5) Seguridad: menor viento."
  },
  {
    id: 14010,
    tema: 14,
    texto: "Se denomina carga puntual admitida a: (TEST OFICIAL)",
    opciones: [
      "A la carga máxima que la cubierta soportará en el punto donde se ubiquen los contrapesos",
      "A la carga mínima que debe aplicarse a la estructura del panel sobre la cubierta",
      "A la carga que soporta la cubierta completa o parte de ella teniendo en cuenta tanto el peso de los módulos como contrapesos, estructura, nieve, etc",
      "La carga máxima que ejerce la estructura libre (sin contar el peso de los paneles) a la cubierta"
    ],
    correctaTexto: "A la carga máxima que la cubierta soportará en el punto donde se ubiquen los contrapesos",
    explicacion: "Carga puntual admitida: capacidad máxima (kN/m² o kPa) que la cubierta puede soportar en puntos concentrados (donde apoyan contrapesos). Es parámetro de diseño crítico."
  },

  // ========== PREGUNTAS COMPLEMENTARIAS (57 preguntas) ==========
  {
    id: 14011,
    tema: 14,
    texto: "¿Cuál es la normativa principal que regula instalaciones FV conectadas a red en España?",
    opciones: [
      "Solo el manual del inversor",
      "RD 1699/2002 (antiguo) → Ahora Real Decreto 1/2022 sobre autoconsumo",
      "UNE 206005",
      "ISO 9001"
    ],
    correctaTexto: "RD 1699/2002 (antiguo) → Ahora Real Decreto 1/2022 sobre autoconsumo",
    explicacion: "Normativa principal en España: RD 1/2022 regula autoconsumo de energías renovables. Complementado por UNE 206005 (seguridad inversores) e ITC-BT para instalaciones interiores."
  },
  {
    id: 14012,
    tema: 14,
    texto: "¿Qué es el 'Estudio de Impacto Ambiental' requerido en plantas FV grandes?",
    opciones: [
      "No se requiere",
      "Análisis de impacto ecológico, uso suelo, paisaje, agua, flora fauna; obligatorio si >10ha o >5MW",
      "Solo análisis económico",
      "Análisis de presupuesto"
    ],
    correctaTexto: "Análisis de impacto ecológico, uso suelo, paisaje, agua, flora fauna; obligatorio si >10ha o >5MW",
    explicacion: "EIA (Environmental Impact Assessment): estudio obligatorio para plantas solares grandes. Analiza impacto ambiental, mitiga efectos negativos, obtiene licencias ambientales."
  },
  {
    id: 14013,
    tema: 14,
    texto: "¿Qué permisos administrativos son necesarios para instalar FV en vivienda?",
    opciones: [
      "Ninguno, es libre",
      "Licencia obra, validación eléctrica, inscripción registro administrativo (según comunidad autónoma)",
      "Solo notificación al vecino",
      "Permiso de la compañía eléctrica únicamente"
    ],
    correctaTexto: "Licencia obra, validación eléctrica, inscripción registro administrativo (según comunidad autónoma)",
    explicacion: "Permisos: 1) Licencia de obra municipal (si modificación estructura), 2) Declaración responsable eléctrica, 3) Inscripción en registro CCAA (producción), 4) Contrato suministro si vende energía."
  },
  {
    id: 14014,
    tema: 14,
    texto: "¿Cuál es la principal medida de seguridad en instalaciones FV aisladas?",
    opciones: [
      "Solo un fusible",
      "Desconectador general DC/AC, protecciones contra sobrecarga, puesta a tierra, protección sobretensión",
      "No es necesaria seguridad",
      "Un cable a tierra"
    ],
    correctaTexto: "Desconectador general DC/AC, protecciones contra sobrecarga, puesta a tierra, protección sobretensión",
    explicacion: "Seguridad aislada: 1) Desconectadores DC antes regulador y AC después inversor, 2) Fusibles DC (Isc × 1.25), 3) Puesta tierra (>48V obligatorio), 4) SPD contra rayos."
  },
  {
    id: 14015,
    tema: 14,
    texto: "¿Qué es la 'Verificación de Instalación' en normativa FV?",
    opciones: [
      "Opinión personal del instalador",
      "Pruebas de aislamiento, continuidad, funcionamiento, medición parámetros eléctricos previas a puesta en marcha",
      "Un análisis teórico",
      "No existe"
    ],
    correctaTexto: "Pruebas de aislamiento, continuidad, funcionamiento, medición parámetros eléctricos previas a puesta en marcha",
    explicacion: "Verificación obligatoria: resistencia aislamiento (>100 kΩ), continuidad conductores, tensión DC/AC, frecuencia, potencia, puesta tierra (<100Ω). Registro en acta oficial."
  },
  {
    id: 14016,
    tema: 14,
    texto: "¿Cuál es la altura mínima recomendada para paneles sobre suelo?",
    opciones: [
      "0 metros (directamente sobre suelo)",
      "0.5-1 metro para evitar vegetación, facilitar limpieza y ventilación trasera",
      "2 metros",
      "No hay altura mínima"
    ],
    correctaTexto: "0.5-1 metro para evitar vegetación, facilitar limpieza y ventilación trasera",
    explicacion: "Altura suelo: mínimo 0.5m en zonas limpias, 1m en zonas con vegetación. Beneficios: evita sombra vegetación, facilita mantenimiento, mejora refrigeración trasera (+5% eficiencia)."
  },
  {
    id: 14017,
    tema: 14,
    texto: "¿Qué es el 'Factor de Seguridad' en diseño estructural de soportes?",
    opciones: [
      "Un número aleatorio",
      "Multiplicador (típicamente 1.5-2.0) aplicado a cargas máximas para garantizar seguridad ante incertidumbres",
      "Solo para cálculos teóricos",
      "No existe"
    ],
    correctaTexto: "Multiplicador (típicamente 1.5-2.0) aplicado a cargas máximas para garantizar seguridad ante incertidumbres",
    explicacion: "Factor seguridad estructural: 1.5-2.0 aplicado a cargas (viento, nieve, peso) para contrarrestar incertidumbres. Estructuras deben soportar carga × factor sin plastificar."
  },
  {
    id: 14018,
    tema: 14,
    texto: "¿Cuál es el protocolo de seguridad durante instalación de FV en altura?",
    opciones: [
      "Cualquiera, sin restricciones",
      "Andamios, arneses, líneas de vida, casco; personal capacitado en trabajos altura; revisiones diarias",
      "Solo casco",
      "No hay protocolo"
    ],
    correctaTexto: "Andamios, arneses, líneas de vida, casco; personal capacitado en trabajos altura; revisiones diarias",
    explicacion: "Seguridad altura: cumplir RD 1407/1992 (trabajos altura). Obligatorio: andamios certificados, arnés (máximo 6m), línea vida (>6m), casco, coordinador seguridad, inspecciones."
  },
  {
    id: 14019,
    tema: 14,
    texto: "¿Qué es la 'Compatibilidad Electromagnética' (EMC) en inversores FV?",
    opciones: [
      "No existe",
      "Capacidad del inversor de no interferir con equipos cercanos; cumple EN 61000",
      "Solo afecta televisores",
      "Un defecto de fabricación"
    ],
    correctaTexto: "Capacidad del inversor de no interferir con equipos cercanos; cumple EN 61000",
    explicacion: "EMC: inversores FV deben cumplir EN 61000-6-2 (inmunidad) y EN 61000-6-4 (emisión). Evita interferencias en radio, TV, comunicaciones. Certificación obligatoria."
  },
  {
    id: 14020,
    tema: 14,
    texto: "¿Cuál es el procedimiento de conexión a red de una instalación FV?",
    opciones: [
      "Conectar directamente sin permisos",
      "Solicitar permiso distribuidora → Acuerdo conexión → Inspección → Contrato suministro → Activación contador inteligente",
      "Solo notificación",
      "No hay procedimiento formal"
    ],
    correctaTexto: "Solicitar permiso distribuidora → Acuerdo conexión → Inspección → Contrato suministro → Activación contador inteligente",
    explicacion: "Procedimiento conexión red: 1) Solicitud distribuidora, 2) Acuerdo de conexión, 3) Inspección eléctrica, 4) Contrato acceso a red, 5) Instalación contador inteligente, 6) Activación."
  },
  {
    id: 14021,
    tema: 14,
    texto: "¿Qué es la 'Declaración de Conformidad' (DoC) en equipos FV?",
    opciones: [
      "Un documento opcional",
      "Certificado obligatorio: fabricante declara cumplimiento normas aplicables (seguridad, EMC, rendimiento)",
      "Solo para exportación",
      "No existe"
    ],
    correctaTexto: "Certificado obligatorio: fabricante declara cumplimiento normas aplicables (seguridad, EMC, rendimiento)",
    explicacion: "DoC: documento oficial de fabricante. En EU: Reglamento 2016/426 requiere DoC para equipos FV. Acompaña al producto; esencial para garantía y reclamaciones."
  },
  {
    id: 14022,
    tema: 14,
    texto: "¿Cuál es la 'Carga de Nieve' de diseño según zona geográfica?",
    opciones: [
      "Siempre 0 (sin nieve)",
      "Varía: zona I (40kg/m²) a zona V (>600 kg/m²) según altitud y clima",
      "Siempre 100 kg/m²",
      "No existe clasificación"
    ],
    correctaTexto: "Varía: zona I (40kg/m²) a zona V (>600 kg/m²) según altitud y clima",
    explicacion: "CTE Documento Básico SE (Seguridad Estructural) define 5 zonas de nieve España. Diseño estructural debe considerar carga máxima histórica × factor seguridad."
  },
  {
    id: 14023,
    tema: 14,
    texto: "¿Qué acciones debe tomar el instalador ante un defecto estructural detectado?",
    opciones: [
      "Ignorarlo",
      "Suspender trabajo, notificar propietario, reparar o reforzar, nueva inspección antes de puesta en marcha",
      "Continuar instalación",
      "Reportar solo al final"
    ],
    correctaTexto: "Suspender trabajo, notificar propietario, reparar o reforzar, nueva inspección antes de puesta en marcha",
    explicacion: "Obligación instalador: garantizar seguridad estructural. Cualquier defecto (grietas, falta rigidez, mal anclaje) debe repararse y verificarse antes de activación."
  },
  {
    id: 14024,
    tema: 14,
    texto: "¿Cuál es el 'Certificado de Finalización' de una instalación FV?",
    opciones: [
      "Documento de ventas",
      "Acta oficial con datos instalación, pruebas realizadas, mediciones, conformidad normativa; requisito legal",
      "Un simple recibo",
      "No obligatorio"
    ],
    correctaTexto: "Acta oficial con datos instalación, pruebas realizadas, mediciones, conformidad normativa; requisito legal",
    explicacion: "Certificado Finalización: documento oficial obligatorio. Incluye: esquema eléctrico, resultados pruebas (aislamiento, continuidad, potencia), datos propietario/instalador, autorización firma."
  },
  {
    id: 14025,
    tema: 14,
    texto: "¿Qué es la 'Inspección Periódica' en instalaciones FV existentes?",
    opciones: [
      "Nunca es necesaria",
      "Revisión oficial cada 5-10 años: seguridad, funcionamiento, mantenimiento, cumplimiento normativa actualizada",
      "Solo si hay problemas",
      "Cada mes obligatoriamente"
    ],
    correctaTexto: "Revisión oficial cada 5-10 años: seguridad, funcionamiento, mantenimiento, cumplimiento normativa actualizada",
    explicacion: "Inspección periódica: requisito normativa REBT. Valida seguridad eléctrica, detección defectos incipientes, actualización a normas nuevas, renovación de certificados."
  },
  {
    id: 14026,
    tema: 14,
    texto: "¿Cuál es el 'Ángulo Crítico de Sombra' en diseño de espaciamiento?",
    opciones: [
      "No existe",
      "Ángulo de elevación solar mínimo (invierno); determina spacing mínimo entre filas",
      "Ángulo inclinación panel",
      "Un ángulo cualquiera"
    ],
    correctaTexto: "Ángulo de elevación solar mínimo (invierno); determina spacing mínimo entre filas",
    explicacion: "Ángulo crítico = elevación solar mínima (solsticio invierno, 21 dic). En latitud 40°N ≈ 26°. Spacing = altura_panel / tan(26°) previene sombra entre filas."
  },
  {
    id: 14027,
    tema: 14,
    texto: "¿Qué es la 'Resistencia de Puesta a Tierra' máxima permitida?",
    opciones: [
      "10 Ω",
      "< 100 Ω típico (varía según tensión y zona); instalaciones >1000V < 1 Ω",
      "> 1000 Ω",
      "No hay límite"
    ],
    correctaTexto: "< 100 Ω típico (varía según tensión y zona); instalaciones >1000V < 1 Ω",
    explicacion: "Resistencia tierra máxima: 100 Ω para instalaciones BT (normales). Zonas con resistividad alta (rocosas) pueden requerir electrodos múltiples. Medición obligatoria anual."
  },
  {
    id: 14028,
    tema: 14,
    texto: "¿Cuál es el protocolo ante accidente eléctrico en instalación FV?",
    opciones: [
      "No hacer nada especial",
      "Desconectar fuente (desconectadores), llamar emergencias, primeros auxilios, investigar causa, reportar",
      "Solo llamar ambulancia",
      "Continuar trabajo normalmente"
    ],
    correctaTexto: "Desconectar fuente (desconectadores), llamar emergencias, primeros auxilios, investigar causa, reportar",
    explicacion: "Protocolo accidente: 1) Desconectar (sin riesgos), 2) Emergencias 112, 3) Primeros auxilios, 4) No mover víctima, 5) Investigación, 6) Reporte autoridades."
  },
  {
    id: 14029,
    tema: 14,
    texto: "¿Qué es el 'Mantenimiento Preventivo Planificado' en plantas FV?",
    opciones: [
      "No es necesario",
      "Programa anual: limpieza paneles, inspección mecánica, pruebas electricidad, análisis termografía",
      "Solo si se rompe algo",
      "Mantenimiento cada mes"
    ],
    correctaTexto: "Programa anual: limpieza paneles, inspección mecánica, pruebas electricidad, análisis termografía",
    explicacion: "Mantenimiento preventivo planificado: reduces fallos no previstos, extiende vida útil, garantiza seguridad. Incluye: limpieza, inspecciones, termografía (detecta defectos célula)."
  },
  {
    id: 14030,
    tema: 14,
    texto: "¿Cuál es la 'Vida Útil de Diseño' de una estructura soporte FV?",
    opciones: [
      "5 años",
      "25-30 años mínimo (mismo que paneles); verificado por análisis fatiga y corrosión",
      "2 años",
      "Indefinida"
    ],
    correctaTexto: "25-30 años mínimo (mismo que paneles); verificado por análisis fatiga y corrosión",
    explicacion: "Vida útil estructura: 25-30 años como mínimo (coincide con paneles). Diseño debe verificar: fatiga cíclica viento, corrosión conexiones, elasticidad materiales durante 30 años."
  },
  {
    id: 14031,
    tema: 14,
    texto: "¿Qué es la 'Soldadura Certificada' en estructuras FV?",
    opciones: [
      "Cualquier soldadura es válida",
      "Soldadura realizada por técnico certificado, verificada ultrasónicamente, cumple norma ISO 5817",
      "Solo soldadura de aluminio",
      "No es importante"
    ],
    correctaTexto: "Soldadura realizada por técnico certificado, verificada ultrasónicamente, cumple norma ISO 5817",
    explicacion: "Soldadura certificada: soldador acreditado, inspección visual + ultrasónica (detecta grietas), cumplimiento norma (defectos clase A/B permitidos). Documentación obligatoria."
  },
  {
    id: 14032,
    tema: 14,
    texto: "¿Cuál es el 'Sistema de Puesta a Tierra' más común en FV?",
    opciones: [
      "Directamente al agua",
      "Electrodo dispersor (picas, placas, conductor enterrado) conectado a todos los equipos metálicos",
      "Solo un punto",
      "No es necesario"
    ],
    correctaTexto: "Electrodo dispersor (picas, placas, conductor enterrado) conectado a todos los equipos metálicos",
    explicacion: "Electrodo tierra: típicamente picas de acero galvanizado 2-3 metros profundidad, o placas si resistividad alta. Conectado a todos componentes metálicos vía conductor de protección (verde-amarillo)."
  },
  {
    id: 14033,
    tema: 14,
    texto: "¿Qué es la 'Protección Catódica' en soportes FV metálicos?",
    opciones: [
      "No existe",
      "Método electroquímico para prevenir corrosión: ánodo sacrificial o fuente DC externa",
      "Solo pintura",
      "Un aislante"
    ],
    correctaTexto: "Método electroquímico para prevenir corrosión: ánodo sacrificial o fuente DC externa",
    explicacion: "Protección catódica: en zonas salinas (costa). Opción 1: ánodo sacrificial (Zn/Mg consume antes que acero). Opción 2: fuente DC externa. Muy efectiva para vida útil 30 años."
  },
  {
    id: 14034,
    tema: 14,
    texto: "¿Cuál es el 'Coeficiente de Rozamiento' entre estructura y cubierta?",
    opciones: [
      "Siempre 1",
      "Varía 0.3-0.8 según material cubierta; determina si fijación por gravedad es suficiente",
      "No importa",
      "Siempre 0"
    ],
    correctaTexto: "Varía 0.3-0.8 según material cubierta; determina si fijación por gravedad es suficiente",
    explicacion: "Coeficiente rozamiento: tejas (~0.4), hormigón (~0.6), zinc (~0.4), caucho (~0.8). Para fijación gravedad: peso × μ ≥ fuerza viento. Si insuficiente, usar anclajes."
  },
  {
    id: 14035,
    tema: 14,
    texto: "¿Qué es el 'Certificado CE' en equipos FV?",
    opciones: [
      "Documento opcional",
      "Marca obligatoria UE: certificación conformidad normas DE, EMC, seguridad; responsabilidad fabricante",
      "Solo para exportación",
      "Decorativo"
    ],
    correctaTexto: "Marca obligatoria UE: certificación conformidad normas DE, EMC, seguridad; responsabilidad fabricante",
    explicacion: "Marca CE: obligatoria en UE para paneles, inversores, reguladores. Fabricante declara conformidad normas. Sin CE: prohibida comercialización, responsabilidad civil."
  },
  {
    id: 14036,
    tema: 14,
    texto: "¿Cuál es el 'Factor de Transmisión' del vidrio de un panel solar?",
    opciones: [
      "100%",
      "85-93% (pérdidas reflexión, absorción, suciedad); afecta potencia generada",
      "50%",
      "0%"
    ],
    correctaTexto: "85-93% (pérdidas reflexión, absorción, suciedad); afecta potencia generada",
    explicacion: "Transmisión vidrio: típicamente 90-92% limpio. Reflexión ~7-8%, absorción ~1-2%. Suciedad reduce 2-5%. Vidrio anti-reflectante mejora a 95-96% (costo extra ~10%)."
  },
  {
    id: 14037,
    tema: 14,
    texto: "¿Qué es la 'Vibración Eólica' en paneles FV?",
    opciones: [
      "No existe",
      "Oscilación inducida por viento; frecuencia crítica debe evitarse para prevenir resonancia y fatiga",
      "Un tipo de energía",
      "Solo en días ventosos"
    ],
    correctaTexto: "Oscilación inducida por viento; frecuencia crítica debe evitarse para prevenir resonancia y fatiga",
    explicacion: "Vibración eólica: viento crea oscilaciones periódicas. Si frecuencia vibración = frecuencia natural estructura → resonancia → amplitud aumenta → fatiga material. Diseño evita esto con rigidez adecuada."
  },
  {
    id: 14038,
    tema: 14,
    texto: "¿Cuál es el 'Espaciamiento Mínimo' entre componentes y agua/gas?",
    opciones: [
      "0 metros (contacto directo permitido)",
      "1 metro mínimo para seguridad; evita interferencias en caso fugas o reparaciones",
      "10 metros",
      "Depende del componente"
    ],
    correctaTexto: "1 metro mínimo para seguridad; evita interferencias en caso fugas o reparaciones",
    explicacion: "Espaciamiento seguridad: REBT requiere 1m entre conductores activos e instalaciones gas/agua. Evita riesgos en caso de fuga/explosión o trabajos reparación."
  },
  {
    id: 14039,
    tema: 14,
    texto: "¿Qué es la 'Inspección Termográfica' en mantenimiento FV?",
    opciones: [
      "No es útil",
      "Detección mediante cámara térmica de puntos calientes (células defectuosas), desequilibrios, falsos contactos",
      "Solo inspección visual",
      "Medir temperatura ambiente"
    ],
    correctaTexto: "Detección mediante cámara térmica de puntos calientes (células defectuosas), desequilibrios, falsos contactos",
    explicacion: "Termografía: cámara infrarroja detecta anomalías térmicas en paneles (células defectuosas, conexiones malas, fallos inversor). Esencial en mantenimiento preventivo plantas grandes."
  },
  {
    id: 14040,
    tema: 14,
    texto: "¿Cuál es el protocolo para instalación sobre edificios históricos?",
    opciones: [
      "Ninguno especial, instalar normal",
      "Autorización patrimonio, evaluación impacto estético/estructural, integración arquitectónica obligatoria",
      "Solo pintar los paneles",
      "No está permitido"
    ],
    correctaTexto: "Autorización patrimonio, evaluación impacto estético/estructural, integración arquitectónica obligatoria",
    explicacion: "Edificios históricos: requiere aprobación Organismo Patrimonio, estudio impacto visual/estructural, preferencia BIPV (integración) sobre sistemas sobrepuestos."
  }
];
