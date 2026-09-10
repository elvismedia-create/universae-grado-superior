// Tema 7: Montaje y Mantenimiento de Instalaciones de Enlace
const TEMA_7_ESTUDIO_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento correcto para instalar una acometida aérea en una vivienda?",
    opciones: [
      "Simplemente clavar el cable sin protección",
      "Utilizar conductores aislados, cables portantes y protección mecánica en su paso por la fachada",
      "Usar cables de baja calidad para ahorrar dinero",
      "No es necesario proteger la acometida"
    ],
    correctaTexto: "Utilizar conductores aislados, cables portantes y protección mecánica en su paso por la fachada",
    explicacion: "Las acometidas aéreas deben estar formadas por conductores aislados, incluir cable portante y contar con protección mecánica en puntos de paso."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la altura mínima recomendada para el tendido de una acometida aérea?",
    opciones: [
      "1 metro del suelo",
      "2 metros del suelo",
      "3,5 metros como mínimo en cruce con vías públicas",
      "Cualquier altura es válida"
    ],
    correctaTexto: "3,5 metros como mínimo en cruce con vías públicas",
    explicacion: "Las acometidas aéreas deben estar a una altura mínima de 3,5 metros en cruce con vías públicas para evitar contactos accidentales."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Qué es una acometida subterránea y cuáles son sus ventajas?",
    opciones: [
      "Un cable enterrado; ventaja: es más económica",
      "Un cable enterrado; ventajas: mayor seguridad, aspecto estético y menor daño por fenómenos climáticos",
      "Una acometida muy profunda; ventaja: imposible de romper",
      "Lo mismo que una acometida aérea"
    ],
    correctaTexto: "Un cable enterrado; ventajas: mayor seguridad, aspecto estético y menor daño por fenómenos climáticos",
    explicacion: "Las acometidas subterráneas ofrecen mayor protección contra daños accidentales, mejor aspecto y menor exposición a condiciones climáticas extremas."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la profundidad mínima de enterramiento para una acometida subterránea?",
    opciones: [
      "10 centímetros",
      "20 centímetros",
      "60 centímetros",
      "1 metro"
    ],
    correctaTexto: "60 centímetros",
    explicacion: "Las acometidas subterráneas deben estar enterradas a una profundidad mínima de 60 cm para protección contra daños mecánicos y cambios climáticos."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Qué precauciones se deben tomar al instalar un tubo de acometida en la pared?",
    opciones: [
      "Ninguna precaución especial es necesaria",
      "Asegurar que sea resistente, que no entre agua, que esté debidamente sujeto y dejando espacio para cables futuros",
      "Solo sujetarlo con un clavo",
      "Usar tubo flexible sin rigidez"
    ],
    correctaTexto: "Asegurar que sea resistente, que no entre agua, que esté debidamente sujeto y dejando espacio para cables futuros",
    explicacion: "El tubo debe ser resistente, contar con protección contra entrada de agua, estar firmemente sujeto y dejar capacidad para conductores adicionales."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento correcto para instalar una caja de protección y maniobra (CPM)?",
    opciones: [
      "Colocarla en cualquier lugar conveniente",
      "Instalarla en un lugar accesible, bien iluminado, ventilado, protegido de la intemperie y con señalización",
      "Esconderla para que no se vea",
      "No es necesario seguir procedimiento especial"
    ],
    correctaTexto: "Instalarla en un lugar accesible, bien iluminado, ventilado, protegido de la intemperie y con señalización",
    explicacion: "La CPM debe ubicarse en lugar accesible, con buena iluminación y ventilación, protegida de la intemperie y claramente señalizada."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Cómo se realiza el montaje de los fusibles en una CPM?",
    opciones: [
      "Con los dedos sin protección",
      "Usando herramientas aislantes, con la instalación desenergizada y verificando la ausencia de tensión",
      "Mientras la instalación está en funcionamiento",
      "De cualquier forma rápidamente"
    ],
    correctaTexto: "Usando herramientas aislantes, con la instalación desenergizada y verificando la ausencia de tensión",
    explicacion: "El montaje de fusibles requiere desenergizar la instalación, verificar la ausencia de tensión con probador y usar herramientas aisladas."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Qué verificaciones se deben realizar después de instalar una CPM?",
    opciones: [
      "No es necesario verificar nada",
      "Verificar continuidad, comprobación de tensiones, prueba de protecciones y ausencia de fugas",
      "Solo contar los fusibles",
      "Confiar en la suerte"
    ],
    correctaTexto: "Verificar continuidad, comprobación de tensiones, prueba de protecciones y ausencia de fugas",
    explicacion: "Después de instalar una CPM se debe verificar continuidad de conductores, tensiones en puntos clave y funcionamiento de protecciones."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento correcto para instalar una centralización de contadores en un edificio?",
    opciones: [
      "Instalarla sin plan previo en cualquier rincón",
      "Planificar ubicación, instalar canalización, montaje de equipos, cableado y puesta a tierra",
      "Solo instalar el contador principal",
      "No requiere procedimiento especial"
    ],
    correctaTexto: "Planificar ubicación, instalar canalización, montaje de equipos, cableado y puesta a tierra",
    explicacion: "La instalación de centralización requiere: planificación, canalización, montaje estructurado de equipos, cableado ordenado y puesta a tierra adecuada."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Cómo se realiza la conexión de un contador monofásico?",
    opciones: [
      "Conectando dos fases al contador",
      "Conectando fase, neutro y tierra en los bornes señalados del contador",
      "Conectando solo la fase",
      "Sin seguir orden específico"
    ],
    correctaTexto: "Conectando fase, neutro y tierra en los bornes señalados del contador",
    explicacion: "Un contador monofásico se conecta en los bornes específicamente señalados: fase en L, neutro en N y protección a tierra (PE)."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la diferencia entre montar un TI (Toroid) en serie o en paralelo?",
    opciones: [
      "No hay diferencia",
      "En serie (correcto): pasa la corriente de acometida; En paralelo: NO debe hacerse, destruiría el TI",
      "En paralelo es más eficiente",
      "En serie rompe el circuito"
    ],
    correctaTexto: "En serie (correcto): pasa la corriente de acometida; En paralelo: NO debe hacerse, destruiría el TI",
    explicacion: "El TI DEBE montarse en serie en la acometida. Nunca en paralelo, pues su resistencia baja haría un cortocircuito."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Qué precaución es esencial al trabajar con un TI (Toroid) montado?",
    opciones: [
      "No hay precauciones especiales",
      "NUNCA dejar el secundario abierto bajo carga; siempre cortocircuitar antes de desconectar",
      "Aumentar la corriente al máximo",
      "Trabajar rápido sin verificaciones"
    ],
    correctaTexto: "NUNCA dejar el secundario abierto bajo carga; siempre cortocircuitar antes de desconectar",
    explicacion: "Si un TI se deja con el secundario abierto bajo carga, genera tensiones peligrosas y se daña. Siempre cortocircuitar el secundario antes de desconectar."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Cómo se realiza el mantenimiento preventivo de una instalación de enlace?",
    opciones: [
      "No requiere mantenimiento",
      "Inspección visual, verificación de tensiones, prueba de protecciones y limpieza periódica",
      "Solo cambiar fusibles cuando se quemen",
      "Esperar a que falle para actuar"
    ],
    correctaTexto: "Inspección visual, verificación de tensiones, prueba de protecciones y limpieza periódica",
    explicacion: "El mantenimiento preventivo incluye: inspecciones visuales regulares, verificación de tensiones, prueba de funcionamiento de protecciones y limpieza."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Qué se debe verificar en un contador durante el mantenimiento?",
    opciones: [
      "Solo leer el número de serie",
      "Funcionamiento correcto, falta de daños, conexiones seguras, ausencia de fugas y calibración si es necesario",
      "Cambiar el contador cada año",
      "No es necesario verificar nada"
    ],
    correctaTexto: "Funcionamiento correcto, falta de daños, conexiones seguras, ausencia de fugas y calibración si es necesario",
    explicacion: "El mantenimiento del contador incluye verificar su funcionamiento, revisar conexiones, detectar daños y, si lo requiere normativa, calibración."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Cómo se sustituye un fusible fundido en una CPM?",
    opciones: [
      "Con un trozo de alambre",
      "Desenergizar la instalación, verificar ausencia de tensión, desmontar el fusible y colocar uno nuevo de la misma intensidad",
      "Sin desconectar nada",
      "Con el fusible de mayor intensidad que se encuentre"
    ],
    correctaTexto: "Desenergizar la instalación, verificar ausencia de tensión, desmontar el fusible y colocar uno nuevo de la misma intensidad",
    explicacion: "La sustitución de fusibles se realiza con procedimiento de seguridad: desenergizar, verificar ausencia de tensión, y usar fusible de igual intensidad."
  },
  {
    id: 16,
    imagen: false,
    svg: false,
    texto: "¿Qué indica la curva de funcionamiento de un fusible (como C60)?",
    opciones: [
      "La tensión máxima soportada",
      "La intensidad nominal (60A) y el tiempo de fusión ante sobrecarga",
      "La longitud del cable",
      "El fabricante del fusible"
    ],
    correctaTexto: "La intensidad nominal (60A) y el tiempo de fusión ante sobrecarga",
    explicacion: "La designación C60 indica intensidad nominal de 60A y curva de funcionamiento C (fusión rápida en sobrecarga)."
  },
  {
    id: 17,
    imagen: false,
    svg: false,
    texto: "¿Cómo se realiza una prueba de funcionamiento del interruptor general de una instalación de enlace?",
    opciones: [
      "Simplemente accionarlo sin verificación",
      "Con carga normal, observar cierre y apertura suave, verificar funcionamiento de protecciones",
      "Jamás probarlo",
      "Realizar una sobrecarga voluntaria"
    ],
    correctaTexto: "Con carga normal, observar cierre y apertura suave, verificar funcionamiento de protecciones",
    explicacion: "La prueba incluye accionar el interruptor con carga normal, verificar operación suave y comprobar el funcionamiento de protecciones asociadas."
  },
  {
    id: 18,
    imagen: false,
    svg: false,
    texto: "¿Qué documentación debe generarse al instalar una instalación de enlace?",
    opciones: [
      "Nada, solo la factura de compra",
      "Proyecto o memoria descriptiva, esquema unifilar, certificado de conformidad y manual de uso",
      "Un simple dibujo a lápiz",
      "Documentación opcional"
    ],
    correctaTexto: "Proyecto o memoria descriptiva, esquema unifilar, certificado de conformidad y manual de uso",
    explicacion: "Toda instalación de enlace requiere: documentación de proyecto, esquema unifilar legible, certificado de conformidad y manual de operación."
  },
  {
    id: 19,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento si se detecta una anomalía en una instalación de enlace?",
    opciones: [
      "Ignorarla y seguir usando la instalación",
      "Desconectar la instalación, informar al usuario, documentar el problema y realizar reparación",
      "Simplemente informar sin desconectar",
      "Reparar sin documentación"
    ],
    correctaTexto: "Desconectar la instalación, informar al usuario, documentar el problema y realizar reparación",
    explicacion: "Ante anomalías: desconectar inmediatamente, informar al usuario, documentar el problema y efectuar reparación apropiada."
  },
  {
    id: 20,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la vida útil esperada de los componentes en una instalación de enlace bien mantenida?",
    opciones: [
      "1-2 años",
      "5-10 años",
      "20-50 años o más, dependiendo del componente y mantenimiento",
      "Los componentes duran indefinidamente"
    ],
    correctaTexto: "20-50 años o más, dependiendo del componente y mantenimiento",
    explicacion: "Con mantenimiento adecuado, los componentes de enlace pueden durar décadas. El mantenimiento preventivo prolonga significativamente su vida útil."
  }
];
