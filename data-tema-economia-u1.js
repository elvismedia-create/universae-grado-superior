// Economía y administración: nociones básicas - Unit 1
// Tema: Economía y administración básicas
// 20 preguntas de estudio

const TEMA_ECONOMIA_U1_ESTUDIO_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la definición de economía según el documento?",
    opciones: [
      "Una ciencia social presente en la mayoría de acciones cotidianas relacionadas con gastos y ahorros",
      "Una rama de la física que estudia el movimiento del dinero",
      "Una disciplina matemática exclusivamente",
      "Un conjunto de leyes y normas comerciales"
    ],
    correctaTexto: "Una ciencia social presente en la mayoría de acciones cotidianas relacionadas con gastos y ahorros",
    explicacion: "La economía es una ciencia social que está presente en prácticamente todas las acciones que realizamos en la vida cotidiana, desde las decisiones de consumo hasta las de ahorro."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿En qué se fundamenta la toma de decisiones económicas según el documento?",
    opciones: [
      "En el análisis del costo-beneficio",
      "En las recomendaciones de amigos",
      "En el azar y la suerte",
      "En las leyes del gobierno"
    ],
    correctaTexto: "En el análisis del costo-beneficio",
    explicacion: "El proceso se fundamenta en realizar un análisis de relación costo-beneficio, donde cada decisión reporta beneficios y costos que deben compararse de manera racional."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Qué es el costo de oportunidad?",
    opciones: [
      "Aquello a lo que se renuncia o que ya no se puede obtener como consecuencia de una decisión",
      "El beneficio que siempre se obtiene al tomar una decisión",
      "El costo que genera gastar dinero en forma inmediata",
      "El precio de un producto en el mercado"
    ],
    correctaTexto: "Aquello a lo que se renuncia o que ya no se puede obtener como consecuencia de una decisión",
    explicacion: "El costo de oportunidad es lo que se sacrifica o pierde al tomar una decisión. Se mide como el valor de la mejor alternativa a la que se renuncia."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la definición de costo irrecuperable?",
    opciones: [
      "Los costos del pasado que no deben influir en decisiones futuras porque ya se han producido",
      "El costo que se recupera con el tiempo",
      "El dinero que se gasta en el presente",
      "Las deudas que se adeudan al banco"
    ],
    correctaTexto: "Los costos del pasado que no deben influir en decisiones futuras porque ya se han producido",
    explicacion: "Son costos ya incurridos que no pueden cambiar. No deben influir en la decisión futura, ya que se han producido de manera irreversible."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Qué son los incentivos según el documento?",
    opciones: [
      "Factores positivos o negativos que motivan a individuos o empresas a actuar de una manera concreta",
      "Dinero que se otorga sin ningún propósito",
      "Leyes que obligan a gastar dinero",
      "Beneficios que no tienen relación con las decisiones"
    ],
    correctaTexto: "Factores positivos o negativos que motivan a individuos o empresas a actuar de una manera concreta",
    explicacion: "Los incentivos son factores que motivan comportamientos. Su variación puede suponer cambios en la conducta de las personas, afectando costos y beneficios."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el factor principal que condiciona el consumo individual?",
    opciones: [
      "El nivel de ingresos, que determina la capacidad de adquirir productos",
      "El deseo de tener todos los productos del mercado",
      "La obligación legal de consumir",
      "La recomendación de publicidad"
    ],
    correctaTexto: "El nivel de ingresos, que determina la capacidad de adquirir productos",
    explicacion: "El consumo individual está principalmente condicionado por el nivel de ingresos, que determina la capacidad de acceso a bienes y servicios."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los principales componentes de las decisiones económicas individuales?",
    opciones: [
      "El consumo, el ahorro y el establecimiento del presupuesto familiar",
      "Solo el ahorro y la inversión",
      "Solo el gasto en consumo inmediato",
      "Las decisiones políticas del gobierno"
    ],
    correctaTexto: "El consumo, el ahorro y el establecimiento del presupuesto familiar",
    explicacion: "Las decisiones económicas individuales más importantes incluyen el consumo, el ahorro y el establecimiento de presupuestos familiares."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el propósito del ahorro según el documento?",
    opciones: [
      "Reservar parte de los ingresos para usarlos en un futuro y establecer un fondo de emergencia",
      "Gastar todo el dinero en el presente",
      "Invertir en productos de lujo",
      "Prestar dinero a otros sin intereses"
    ],
    correctaTexto: "Reservar parte de los ingresos para usarlos en un futuro y establecer un fondo de emergencia",
    explicacion: "El ahorro permite reservar parte de los ingresos para usos futuros y es importante para contar con un fondo de emergencia ante situaciones imprevistas."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Cuántos meses de gastos se recomienda tener en el fondo de emergencia?",
    opciones: [
      "Entre 6 y 12 meses de gastos",
      "Solo 1 mes de gastos",
      "Solo 3 meses de gastos",
      "No se necesita fondo de emergencia"
    ],
    correctaTexto: "Entre 6 y 12 meses de gastos",
    explicacion: "La cantidad recomendada para un fondo de emergencia varía según circunstancias personales, pero se considera una buena cifra la que permite cubrir gastos durante 6 a 12 meses."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué es un presupuesto familiar?",
    opciones: [
      "Una herramienta básica de planificación financiera que sirve para prever y anticipar ingresos y gastos",
      "Un documento que solo controla los gastos fijos",
      "Una lista de compras para el supermercado",
      "Un plan de inversión en la bolsa"
    ],
    correctaTexto: "Una herramienta básica de planificación financiera que sirve para prever y anticipar ingresos y gastos",
    explicacion: "El presupuesto es una herramienta fundamental para la planificación financiera que permite prever y anticipar ingresos y gastos, verificando si se cumplen objetivos."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los tipos de gastos incluidos en un presupuesto familiar?",
    opciones: [
      "Gastos fijos, gastos corrientes y gastos ocasionales",
      "Solo gastos de alimentación",
      "Solo gastos de entretenimiento",
      "Solo gastos de transporte"
    ],
    correctaTexto: "Gastos fijos, gastos corrientes y gastos ocasionales",
    explicacion: "El presupuesto incluye gastos fijos (obligatorios como hipoteca), gastos corrientes (necesarios como comida) y gastos ocasionales (imprevistos como reparaciones)."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Qué son los gastos fijos en un presupuesto?",
    opciones: [
      "Aquellos que son obligatorios y derivan de un contrato, sin poder superar problemas legales",
      "Gastos que varían cada mes",
      "Gastos que solo se hacen una vez al año",
      "Gastos que se pueden eliminar fácilmente"
    ],
    correctaTexto: "Aquellos que son obligatorios y derivan de un contrato, sin poder superar problemas legales",
    explicacion: "Los gastos fijos son obligatorios y están vinculados a contratos (como hipoteca, servicios). No pueden ser suprimidos sin consecuencias legales."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los pasos recomendados para elaborar un presupuesto efectivo?",
    opciones: [
      "Identificar gastos e ingresos, priorizar, fijar ahorro como gasto obligatorio, hacer seguimiento y revisar ajustes",
      "Solo anotar los gastos más grandes",
      "Gastar todo sin control",
      "No hacer ningún plan"
    ],
    correctaTexto: "Identificar gastos e ingresos, priorizar, fijar ahorro como gasto obligatorio, hacer seguimiento y revisar ajustes",
    explicacion: "Los pasos son: 1) Identificar gastos e ingresos 2) Priorizar gastos 3) Fijar ahorro como gasto obligatorio 4) Hacer seguimiento 5) Revisar y ajustar."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Qué son las decisiones económicas colectivas?",
    opciones: [
      "Decisiones que se toman de manera individual pero que influyen en otras personas, generando acciones conjuntas",
      "Decisiones que solo toma el gobierno",
      "Decisiones que afectan a un país completo",
      "Decisiones de gastos compartidos"
    ],
    correctaTexto: "Decisiones que se toman de manera individual pero que influyen en otras personas, generando acciones conjuntas",
    explicacion: "Las decisiones económicas colectivas son aquellas que, aunque se toman individualmente, contribuyen a conformar decisiones de mayor envergadura con efectos conjuntos."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los principios de interacción económica mencionados en el documento?",
    opciones: [
      "Principio de intercambio, principio de eficiencia y principio de bienestar social",
      "Principio de igualdad total",
      "Principio de competencia destructiva",
      "Principio de monopolio obligatorio"
    ],
    correctaTexto: "Principio de intercambio, principio de eficiencia y principio de bienestar social",
    explicacion: "Los tres principios fundamentales son: intercambio (obtener bienes y servicios), eficiencia (maximizar resultados) y bienestar social (justicia y equidad)."
  },
  {
    id: 16,
    imagen: false,
    svg: false,
    texto: "¿Quiénes son los agentes económicos principales en una economía?",
    opciones: [
      "Familias, empresas, Estado y sector bancario",
      "Solo las personas ricas",
      "Solo los bancos",
      "Solo las grandes corporaciones"
    ],
    correctaTexto: "Familias, empresas, Estado y sector bancario",
    explicacion: "Los cuatro agentes económicos principales son: familias (consumidoras), empresas (productoras), Estado (regulador) y sector bancario (regulador de dinero)."
  },
  {
    id: 17,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el papel de las familias en la economía?",
    opciones: [
      "Tomar decisiones que afectan la economía a través del consumo, ahorro y gestión de patrimonio",
      "Solo trabajar para las empresas",
      "Controlar los precios del mercado",
      "Establecer leyes comerciales"
    ],
    correctaTexto: "Tomar decisiones que afectan la economía a través del consumo, ahorro y gestión de patrimonio",
    explicacion: "Las familias son fundamentales en la economía, tomando decisiones sobre consumo de bienes y servicios, ahorro e inversión, y gestión de patrimonio."
  },
  {
    id: 18,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función principal de las empresas en la economía?",
    opciones: [
      "Producir bienes y servicios utilizando trabajo y capital para satisfacer necesidades y generar ingresos",
      "Consumir todos los recursos disponibles",
      "Establecer los precios del gobierno",
      "Controlar la educación de la población"
    ],
    correctaTexto: "Producir bienes y servicios utilizando trabajo y capital para satisfacer necesidades y generar ingresos",
    explicacion: "Las empresas son personas jurídicas cuya actividad fundamental es la producción de bienes y servicios, utilizando factores como trabajo y capital."
  },
  {
    id: 19,
    imagen: false,
    svg: false,
    texto: "¿Qué es el flujo circular de la renta?",
    opciones: [
      "La representación esquemática de las relaciones de intercambio entre agentes económicos que favorecen la actividad económica",
      "Un impuesto que cobra el gobierno",
      "Un tipo de inversión bancaria",
      "Un ciclo de producción que dura un mes"
    ],
    correctaTexto: "La representación esquemática de las relaciones de intercambio entre agentes económicos que favorecen la actividad económica",
    explicacion: "El flujo circular de la renta es la representación esquemática de las relaciones de intercambio entre familias, empresas, Estado y sector bancario."
  },
  {
    id: 20,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los dos mercados principales en el flujo circular de la renta?",
    opciones: [
      "El mercado de productos y el mercado de factores productivos",
      "El mercado de acciones y el mercado de bonos",
      "El mercado europeo y el mercado americano",
      "El mercado negro y el mercado legal"
    ],
    correctaTexto: "El mercado de productos y el mercado de factores productivos",
    explicacion: "El flujo circular de la renta incluye el mercado de productos (donde se intercambian bienes y servicios) y el mercado de factores productivos (trabajo, tierra y capital)."
  }
];
