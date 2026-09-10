// EXAMEN SEMESTRAL: EMPLEABILIDAD - 40 PREGUNTAS REALES (Usuario 75% Score)
const EXAMEN_SEMESTRAL_EMPLEABILIDAD_DATA = [
  {
    id: 1,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿Cuál de las siguientes es una tendencia actual relativa a la comunicación interna?:",
    opciones: ["Motor de digitalización.", "Employer Branding.", "Apps internas.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "Las tendencias actuales en comunicación interna incluyen la digitalización, el Employer Branding y las aplicaciones internas."
  },
  {
    id: 2,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿Cuál de las siguientes no es una de las 5 fuerzas de Porter?:",
    opciones: ["El flujo del proceso de compraventa.", "La amenaza de productos sustitutivos.", "El poder de negociación de los proveedores.", "Las barreras de entrada."],
    correctaTexto: "El flujo del proceso de compraventa.",
    explicacion: "Las 5 Fuerzas de Porter no incluyen el flujo del proceso de compraventa."
  },
  {
    id: 3,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿Cuál de las siguientes no sería una estrategia del plan de marketing en función del producto?:",
    opciones: ["Estrategia de penetración.", "Estrategia de desarrollo de producto.", "Estrategia de enraizamiento.", "Estrategia de diversificación."],
    correctaTexto: "Estrategia de enraizamiento.",
    explicacion: "El enraizamiento no es una estrategia estándar de marketing en función del producto."
  },
  {
    id: 4,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿Cuál es el objetivo principal del marketing relacional?:",
    opciones: ["Incrementar las ventas a corto plazo.", "Mantener una relación significativa a largo plazo con el público objetivo.", "Realizar promociones y descuentos.", "Atraer nuevos clientes a través de la publicidad masiva."],
    correctaTexto: "Mantener una relación significativa a largo plazo con el público objetivo.",
    explicacion: "El marketing relacional busca construir relaciones duraderas con los clientes."
  },
  {
    id: 5,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿Cuál es la definición más completa de marketing?:",
    opciones: ["El proceso de ventas de bienes y servicios.", "El estudio de la competencia y el comportamiento del consumidor.", "La actividad de publicidad y análisis de mercado.", "La planificación y ejecución de la concepción del producto, fijación de precios, promoción y distribución de ideas, bienes y servicios para crear relaciones de intercambio que satisfagan objetivos individuales y organizacionales."],
    correctaTexto: "La planificación y ejecución de la concepción del producto, fijación de precios, promoción y distribución de ideas, bienes y servicios para crear relaciones de intercambio que satisfagan objetivos individuales y organizacionales.",
    explicacion: "Esta es la definición más completa de marketing que incluye los 4 pilares del marketing mix."
  },
  {
    id: 6,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿Cuál es la principal diferencia entre marketing estratégico y marketing operativo?:",
    opciones: ["El marketing estratégico se centra en el corto plazo, mientras que el operativo se centra en el largo plazo.", "El marketing estratégico se ocupa de la implementación de acciones, mientras que el operativo se ocupa del análisis de necesidades del público objetivo.", "El marketing estratégico se ocupa de la publicidad, mientras que el marketing operativo se centra en las ventas.", "El marketing estratégico se centra en el análisis continuo y la identificación de necesidades del público objetivo, mientras que el marketing operativo se focaliza en la puesta en marcha de medidas para aprovechar oportunidades."],
    correctaTexto: "El marketing estratégico se centra en el análisis continuo y la identificación de necesidades del público objetivo, mientras que el marketing operativo se focaliza en la puesta en marcha de medidas para aprovechar oportunidades.",
    explicacion: "El marketing estratégico define la dirección a largo plazo; el operativo ejecuta las tácticas."
  },
  {
    id: 7,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿Cuál es la principal herramienta del marketing estratégico?:",
    opciones: ["Análisis DAFO.", "Plan de marketing.", "Investigación de mercado.", "Estrategia de precios."],
    correctaTexto: "Plan de marketing.",
    explicacion: "El plan de marketing es el documento que recoge la estrategia y los objetivos del marketing."
  },
  {
    id: 8,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿En qué se basa la decisión que se toma para cubrir necesidades?:",
    opciones: ["En un impulso.", "En una comparativa.", "En una encuesta.", "En una imitación de lo que hace la sociedad."],
    correctaTexto: "En una comparativa.",
    explicacion: "Las decisiones se basan en comparar opciones disponibles."
  },
  {
    id: 9,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿Qué análisis no forma parte del análisis de la situación en el plan de marketing?:",
    opciones: ["Análisis de la demanda.", "Análisis de la competencia.", "Análisis del producto.", "Análisis interno de la empresa."],
    correctaTexto: "Análisis del producto.",
    explicacion: "El análisis del producto no forma parte del análisis de la situación en el plan de marketing."
  },
  {
    id: 10,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "¿Qué herramienta permite analizar las debilidades, amenazas, fortalezas y oportunidades de una empresa??:",
    opciones: ["Análisis PEST.", "Análisis DAFO.", "Investigación de mercado.", "Matriz de crecimiento."],
    correctaTexto: "Análisis DAFO.",
    explicacion: "El DAFO (o SWOT en inglés) es la herramienta para analizar Debilidades, Amenazas, Fortalezas y Oportunidades."
  },
  {
    id: 11,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "A las personas que, sin haber sido dotadas de autoridad, tienen la capacidad de influenciar sobre los demás por su carisma y personalidad, se les denomina:",
    opciones: ["Líderes.", "Directores.", "Jefes.", "Mandos."],
    correctaTexto: "Líderes.",
    explicacion: "Los líderes tienen capacidad de influencia basada en carisma y cualidades personales."
  },
  {
    id: 12,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Al responsable de recursos humanos se le presuponen varias habilidades, entre ellas:",
    opciones: ["Tener motivación y ser capaz de trasmitirla al equipo.", "Comunicar efectivamente.", "Ser resolutivo y determinado en la toma de decisiones.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "El responsable de RRHH debe poseer todas estas habilidades."
  },
  {
    id: 13,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Cuando hablamos de segmentación, la estrategia de expansión de mercado:",
    opciones: ["Se centrará en más de un segmento, pero con un solo producto.", "Actuará en un solo segmento con un solo producto.", "Ofrecerá distintos productos a un solo segmento.", "Adaptará el producto a las particularidades de cada segmento."],
    correctaTexto: "Se centrará en más de un segmento, pero con un solo producto.",
    explicacion: "La expansión de mercado implica llegar a más segmentos con el mismo producto."
  },
  {
    id: 14,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Dentro de las teorías del liderazgo, la teoría del gran hombre afirma que:",
    opciones: ["Los rasgos del líder son innatos y no se pueden adquirir ni con entrenamiento ni con experiencia.", "El comportamiento del líder depende de la percepción que tenga de la naturaleza de sus subordinados,", "Solo puede existir un líder en la organización, que ejercerá su mando con mano de hierro.", "El líder teje una malla gerencial para desarrollar sus funciones."],
    correctaTexto: "Los rasgos del líder son innatos y no se pueden adquirir ni con entrenamiento ni con experiencia.",
    explicacion: "La teoría del gran hombre sostiene que los líderes nacen, no se hacen."
  },
  {
    id: 15,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Documento formal que incorpora una orden de pago, por la que una persona ordena pagar una determinada cantidad de dinero al poseedor de esta a su vencimiento:",
    opciones: ["Cheque.", "Letra de cambio.", "Recibo normalizado.", "Transferencia bancaria."],
    correctaTexto: "Letra de cambio.",
    explicacion: "La letra de cambio es un documento de pago con una orden diferida."
  },
  {
    id: 16,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "El Estado puede conseguir los ingresos públicos de:",
    opciones: ["Las donaciones y la deuda pública.", "La extracción o expropiación.", "Los ingresos contractuales.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "El Estado obtiene ingresos públicos de múltiples fuentes."
  },
  {
    id: 17,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "El estilo de liderazgo en el que el líder interviene solo cuando lo cree conveniente, dejando máxima libertad a sus empleados y controlando lo mínimo imprescindible, se denomina:",
    opciones: ["Liderazgo laissez faire.", "Liderazgo democrático.", "Liderazgo paternalista.", "Liderazgo visionario."],
    correctaTexto: "Liderazgo laissez faire.",
    explicacion: "El liderazgo laissez faire se caracteriza por la máxima libertad y mínimo control."
  },
  {
    id: 18,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "El estilo de liderazgo en el que el líder tiene claro dónde quiere ir e intenta que el equipo visualice su meta y la comparta, se denomina:",
    opciones: ["Liderazgo laissez faire.", "Liderazgo democrático.", "Liderazgo paternalista.", "Liderazgo visionario."],
    correctaTexto: "Liderazgo visionario.",
    explicacion: "El liderazgo visionario inspira a través de una visión clara y compartida."
  },
  {
    id: 19,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "El factor que impulsa a las personas a iniciar, mantener o terminar una actividad, un comportamiento o una actitud se denomina:",
    opciones: ["Motivación.", "Pirámide de necesidades.", "Autoestima.", "Higiénico."],
    correctaTexto: "Motivación.",
    explicacion: "La motivación es el factor impulsor de acciones y comportamientos."
  },
  {
    id: 20,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "El impuesto que se encarga de gravar el consumo es:",
    opciones: ["El IVA.", "El IRPF.", "El Impuesto sobre Sociedades.", "La declaración censal."],
    correctaTexto: "El IVA.",
    explicacion: "El IVA (Impuesto sobre el Valor Añadido) grava el consumo de bienes y servicios."
  },
  {
    id: 21,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "El Impuesto sobre Sociedades:",
    opciones: ["Tiene carácter indirecto.", "Grava la ganancia de rentas por parte de personas físicas y entidades públicas.", "Es de naturaleza personal porque tiene en cuenta determinadas circunstancias particulares de cada contribuyente.", "Ninguna es correcta."],
    correctaTexto: "Es de naturaleza personal porque tiene en cuenta determinadas circunstancias particulares de cada contribuyente.",
    explicacion: "El Impuesto sobre Sociedades es de naturaleza personal en algunos aspectos."
  },
  {
    id: 22,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "El presupuesto familiar se compone de:",
    opciones: ["Gastos fijos.", "Gastos corrientes.", "Gastos ocasionales.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "Un presupuesto familiar incluye gastos fijos, corrientes y ocasionales."
  },
  {
    id: 23,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Engloba todas las tareas dirigidas a la obtención y transformación de los recursos que permiten desarrollar la actividad de la empresa y aprovechar las oportunidades de mercado, delimitando el plan de actuación que llevará a la generación de beneficios económicos:",
    opciones: ["Ciclo de explotación.", "Sistema de mercado.", "Aprovisionamiento.", "Marketing relacional."],
    correctaTexto: "Ciclo de explotación.",
    explicacion: "El ciclo de explotación engloba todas las tareas de obtención y transformación de recursos."
  },
  {
    id: 24,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Entre los objetivos del análisis de los puestos de trabajo se encuentra:",
    opciones: ["Ayudar al reclutamiento y selección de personal.", "Detectar necesidades de formación.", "Prever los costes salariales.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "El análisis de puestos de trabajo sirve para varios objetivos."
  },
  {
    id: 25,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Es una modificación de la jerarquía de Maslow que clasifica las necesidades básicas en tres subgrupos (existencia, relación y crecimiento):",
    opciones: ["Teoría de McGregor.", "Pirámide de las tres esquinas.", "Teoría ERG.", "Jerarquía de Adams."],
    correctaTexto: "Teoría ERG.",
    explicacion: "La Teoría ERG de Alderfer es una modificación de la pirámide de Maslow en tres niveles."
  },
  {
    id: 26,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "La Agencia Tributaria:",
    opciones: ["Es una entidad de derecho público adscrita al Ministerio de Hacienda.", "Se misión es aplicar el sistema tributario y hacer cumplir el artículo 31 de la Constitución.", "Se creó en 1992.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "Todas las afirmaciones sobre la Agencia Tributaria son correctas."
  },
  {
    id: 27,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "La demanda dependerá, entre otros, de:",
    opciones: ["El comportamiento del consumidor.", "El precio del producto.", "La renta disponible y su distribución.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "La demanda depende de múltiples factores."
  },
  {
    id: 28,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "La organización formal:",
    opciones: ["Es aquella donde la estructura organizativa la definen los directivos y se refleja en un organigrama con los puestos de trabajo, relaciones jerárquicas y funciones.", "Es aquella donde la estructura organizativa está conformada según las relaciones personales que surgen de forma natural entre los trabajadores.", "Es aquella que procura que su estructura esté en todo momento provista de personal, en sentido tanto cuantitativo como cualitativo.", "Es aquella que impulsa la transformación digital implicando a todos los integrantes en el uso de la tecnología para fomentar un ecosistema abierto y digitalizado."],
    correctaTexto: "Es aquella donde la estructura organizativa la definen los directivos y se refleja en un organigrama con los puestos de trabajo, relaciones jerárquicas y funciones.",
    explicacion: "La organización formal tiene estructura definida y documentada."
  },
  {
    id: 29,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "La organización informal:",
    opciones: ["Es aquella donde la estructura organizativa la define la dirección y se refleja en un organigrama con los puestos de trabajo, relaciones jerárquicas y funciones.", "Es aquella donde la estructura organizativa está conformada según las relaciones personales que surgen de forma natural entre los trabajadores.", "Es aquella que procura que su estructura esté en todo momento provista de personal, en sentido tanto cuantitativo como cualitativo.", "Es aquella que impulsa la transformación digital implicando a todos los integrantes en el uso de la tecnología para fomentar un ecosistema abierto y digitalizado."],
    correctaTexto: "Es aquella donde la estructura organizativa está conformada según las relaciones personales que surgen de forma natural entre los trabajadores.",
    explicacion: "La organización informal surge de las relaciones naturales entre trabajadores."
  },
  {
    id: 30,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "La planificación para establecer el personal de una organización se realiza en dos direcciones:",
    opciones: ["Expansión laboral y fusión de centros.", "Aumento de personal y reducción de personal.", "Renovación de puestos y reciclaje de puestos actuales.", "Ninguna empresa realiza ya planificaciones de los recursos humanos."],
    correctaTexto: "Aumento de personal y reducción de personal.",
    explicacion: "La planificación de RRHH se realiza considerando aumentos y reducciones."
  },
  {
    id: 31,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "La T.A.E. (Tasa Anual Equivalente) es la suma de:",
    opciones: ["Comisión de apertura, comisión de estudio y comisión por cancelación.", "Interés nominal, comisiones y gastos.", "Amortización fija, amortización permanente e impuestos.", "Préstamos, créditos y sus correspondientes tipos de interés."],
    correctaTexto: "Interés nominal, comisiones y gastos.",
    explicacion: "La TAE incluye el interés nominal, comisiones y gastos del préstamo."
  },
  {
    id: 32,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Las normas internas que son establecidas por la dirección para determinar objetivos y prácticas de comunicación comunes para toda la empresa son lo que se denomina:",
    opciones: ["Planificación de RRHH.", "Política de comunicación.", "Comunicación vertical.", "Flujo comunicativo."],
    correctaTexto: "Política de comunicación.",
    explicacion: "La política de comunicación establece normas y objetivos de comunicación empresarial."
  },
  {
    id: 33,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Las prestaciones pecuniarias exigidas por una Administración pública, como consecuencia de la realización del supuesto de hecho al que la ley vincula el deber de contribuir, se denominan:",
    opciones: ["Tesorerías.", "Recibos.", "Tributos.", "Letras de cambio."],
    correctaTexto: "Tributos.",
    explicacion: "Los tributos son prestaciones pecuniarias obligatorias exigidas por la administración."
  },
  {
    id: 34,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Los grupos profesionales se definen por:",
    opciones: ["Las características del trabajador.", "La titulación del trabajador.", "Las aptitudes del trabajador.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "Los grupos profesionales se definen por características, titulación y aptitudes."
  },
  {
    id: 35,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Los indicadores más habituales en el balance social son:",
    opciones: ["Las variables, los tipos y las consecuencias.", "La eficiencia, la eficacia y el impacto.", "Inputs, outputs e insiders.", "Locales, regionales, nacionales e internacionales."],
    correctaTexto: "La eficiencia, la eficacia y el impacto.",
    explicacion: "Los indicadores del balance social incluyen eficiencia, eficacia e impacto."
  },
  {
    id: 36,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Los préstamos personales:",
    opciones: ["Suelen tener un plazo máximo de amortización de hasta 15 años.", "Sus intereses siempre son inferiores a los de los créditos hipotecarios.", "Se conocen normalmente como préstamos al consumo.", "Todas son correctas."],
    correctaTexto: "Se conocen normalmente como préstamos al consumo.",
    explicacion: "Los préstamos personales se denominan también préstamos al consumo."
  },
  {
    id: 37,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Los recursos humanos se conciben desde tres enfoques:",
    opciones: ["Político-legal, socioeconómico y laboral.", "Personal, empresarial y social.", "Administrativo-legal, contable-costes y de gestión.", "Actitudinal, competencial y aptitudinal."],
    correctaTexto: "Administrativo-legal, contable-costes y de gestión.",
    explicacion: "Los RRHH se abordan desde enfoques administrativo-legal, contable y de gestión."
  },
  {
    id: 38,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Para la planificación de los recursos humanos:",
    opciones: ["Es necesario plantear constantes aumentos de personal.", "Se marcan objetivos logísticos y estratégicos.", "Las desviaciones tienen siempre motivos extraordinarios.", "Todas son correctas."],
    correctaTexto: "Se marcan objetivos logísticos y estratégicos.",
    explicacion: "La planificación de RRHH marca objetivos logísticos y estratégicos."
  },
  {
    id: 39,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Para poder elaborar un presupuesto familiar lo más fiel posible a la realidad, el primer paso es:",
    opciones: ["Identificar gastos e ingresos.", "Contactar con un asesor fiscal.", "Establecer el ahorro con un ingreso fijo.", "Descargar el programa Excel."],
    correctaTexto: "Identificar gastos e ingresos.",
    explicacion: "El primer paso es identificar todos los gastos e ingresos disponibles."
  },
  {
    id: 40,
    tema: "Empleabilidad",
    tipo: "opción múltiple",
    texto: "Renunciar a consumir hoy para consumir más en el futuro, ¿a qué concepto hace referencia?:",
    opciones: ["Consumo.", "Financiación.", "Planificación.", "Ahorro."],
    correctaTexto: "Ahorro.",
    explicacion: "El ahorro es diferir el consumo presente para consumir en el futuro."
  }
];
