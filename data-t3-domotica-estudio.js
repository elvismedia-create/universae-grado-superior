// Instalaciones Domóticas - Módulo de Estudio
// 40 preguntas basadas en U1-U8

const DATA_T3_DOMOTICA_ESTUDIO = [
  // ===== UNIDAD 1: La Domótica =====
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la definición de domótica según el material?",
    opciones: [
      "Conjunto de sistemas que automatizan las diferentes instalaciones de una vivienda",
      "Solo la instalación de luces inteligentes",
      "El control manual de electrodomésticos",
      "La reparación de sistemas eléctricos"
    ],
    correctaTexto: "Conjunto de sistemas que automatizan las diferentes instalaciones de una vivienda",
    explicacion: "La domótica es el conjunto de sistemas que automatizan las diferentes instalaciones de una vivienda, proporcionando confort y eficiencia energética."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuál es un beneficio principal de la domótica?",
    opciones: [
      "Automatización de tareas repetitivas y ahorro energético",
      "Aumentar el consumo de energía",
      "Complicar el uso de la vivienda",
      "Reducir la seguridad del hogar"
    ],
    correctaTexto: "Automatización de tareas repetitivas y ahorro energético",
    explicacion: "Entre los principales beneficios de la domótica están la comodidad, seguridad, ahorro energético y facilidad de comunicaciones."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son las principales áreas de control en un sistema domótico?",
    opciones: [
      "Seguridad, eficiencia energética, control del entorno, ocio y comunicaciones",
      "Solo iluminación",
      "Solo climatización",
      "Solo vigilancia"
    ],
    correctaTexto: "Seguridad, eficiencia energética, control del entorno, ocio y comunicaciones",
    explicacion: "Las áreas de actuación de la domótica incluyen seguridad, eficiencia energética, control del entorno, ocio/entretenimiento y comunicaciones."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Qué se entiende por 'hogar digital' o 'hogar inteligente'?",
    opciones: [
      "Una vivienda automatizada con sistemas de control integrados y comunicación remota",
      "Una vivienda con muchos electrodomésticos",
      "Una vivienda con televisor inteligente",
      "Una vivienda sin instalaciones eléctricas"
    ],
    correctaTexto: "Una vivienda automatizada con sistemas de control integrados y comunicación remota",
    explicacion: "El hogar digital o inteligente es aquel que integra sistemas domóticos permitiendo control automático y remoto de las instalaciones."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la diferencia entre domótica e inmótica?",
    opciones: [
      "Domótica en viviendas, inmótica en edificios comerciales",
      "Domótica es más cara que inmótica",
      "No hay diferencia",
      "Inmótica solo controla luces"
    ],
    correctaTexto: "Domótica en viviendas, inmótica en edificios comerciales",
    explicacion: "La domótica se aplica a viviendas, mientras que la inmótica es la automatización de edificios comerciales e industriales."
  },

  // ===== UNIDAD 2: Elementos - Sensores y Actuadores =====
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función principal de un sensor en un sistema domótico?",
    opciones: [
      "Captar las condiciones del entorno (temperatura, luz, presencia, etc.)",
      "Enviar órdenes a los dispositivos",
      "Almacenar información",
      "Amplificar señales eléctricas"
    ],
    correctaTexto: "Captar las condiciones del entorno (temperatura, luz, presencia, etc.)",
    explicacion: "Los sensores captan información del entorno como temperatura, luminosidad, presencia de intrusos, humedad, etc."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función de un actuador en un sistema domótico?",
    opciones: [
      "Ejecutar acciones físicas basadas en órdenes del sistema de control",
      "Medir condiciones del ambiente",
      "Almacenar datos",
      "Procesar información"
    ],
    correctaTexto: "Ejecutar acciones físicas basadas en órdenes del sistema de control",
    explicacion: "Los actuadores son dispositivos que realizan acciones físicas como abrir persianas, encender luces, activar sistemas de climatización, etc."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son ejemplos de sensores en una instalación domótica?",
    opciones: [
      "Sensores de movimiento, temperatura, humedad, luz, gas y agua",
      "Solo sensores de luz",
      "Solo sensores de temperatura",
      "Sensores de ruido solamente"
    ],
    correctaTexto: "Sensores de movimiento, temperatura, humedad, luz, gas y agua",
    explicacion: "La instalación domótica incluye diversos tipos de sensores para detectar diferentes condiciones ambientales."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son ejemplos de actuadores en una instalación domótica?",
    opciones: [
      "Motores, relés, electroválvulas, lámparas, sistemas de climatización",
      "Solo lámparas",
      "Solo motores",
      "Solo sensores"
    ],
    correctaTexto: "Motores, relés, electroválvulas, lámparas, sistemas de climatización",
    explicacion: "Los actuadores incluyen diversos dispositivos capaces de realizar acciones controladas por el sistema domótico."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué es un relé en el contexto de la domótica?",
    opciones: [
      "Un actuador electromagnético que abre o cierra circuitos",
      "Un sensor de temperatura",
      "Un sistema de comunicación",
      "Un tipo de cable de conexión"
    ],
    correctaTexto: "Un actuador electromagnético que abre o cierra circuitos",
    explicacion: "El relé es un dispositivo electromagnético que funciona como un interruptor controlado, permitiendo abrir o cerrar circuitos eléctricos."
  },

  // ===== UNIDAD 3: Sistemas X10 (Corrientes Portadoras) =====
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Qué es la tecnología X10 en sistemas domóticos?",
    opciones: [
      "Sistema de control que utiliza las líneas eléctricas existentes como medio de transmisión",
      "Un tipo de sensor de movimiento",
      "Un protocolo de internet",
      "Un sistema de almacenamiento de datos"
    ],
    correctaTexto: "Sistema de control que utiliza las líneas eléctricas existentes como medio de transmisión",
    explicacion: "X10 es un estándar que permite la comunicación usando las líneas de corriente eléctrica existentes en la vivienda."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la ventaja principal del sistema X10?",
    opciones: [
      "No requiere instalación de nuevo cableado, usa las líneas existentes",
      "Es el más rápido en comunicación",
      "Es el más caro del mercado",
      "Solo funciona en edificios modernos"
    ],
    correctaTexto: "No requiere instalación de nuevo cableado, usa las líneas existentes",
    explicacion: "La principal ventaja de X10 es la reutilización de la instalación eléctrica existente, evitando costosas obras."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Cuál es una limitación del sistema X10?",
    opciones: [
      "Baja velocidad de transmisión de datos",
      "Costo muy elevado",
      "Solo funciona en corriente continua",
      "Requiere cableado especializado"
    ],
    correctaTexto: "Baja velocidad de transmisión de datos",
    explicacion: "X10 tiene limitaciones como baja velocidad de transmisión, susceptibilidad a interferencias y cobertura limitada."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el código de dirección máximo en el protocolo X10?",
    opciones: [
      "256 dispositivos (16 casas x 16 unidades)",
      "100 dispositivos",
      "50 dispositivos",
      "Sin límite"
    ],
    correctaTexto: "256 dispositivos (16 casas x 16 unidades)",
    explicacion: "El protocolo X10 permite direccionar hasta 256 dispositivos mediante la combinación de códigos de casa y unidad."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿En qué frecuencia opera el sistema X10?",
    opciones: [
      "A través de la frecuencia de la red eléctrica (50/60 Hz)",
      "A 2.4 GHz",
      "A 868 MHz",
      "A frecuencia ultrasonora"
    ],
    correctaTexto: "A través de la frecuencia de la red eléctrica (50/60 Hz)",
    explicacion: "X10 modula señales sobre la frecuencia fundamental de la red eléctrica (50 Hz en Europa, 60 Hz en América)."
  },

  // ===== UNIDAD 4: Sistema KNX (Bus de Campo) =====
  {
    id: 16,
    imagen: false,
    svg: false,
    texto: "¿Qué es KNX?",
    opciones: [
      "Estándar europeo de bus de campo para automatización de edificios",
      "Un fabricante de sensores",
      "Un tipo de cable especial",
      "Un sistema de corrientes portadoras"
    ],
    correctaTexto: "Estándar europeo de bus de campo para automatización de edificios",
    explicacion: "KNX es el estándar europeo para la automatización de viviendas y edificios mediante un bus de comunicación dedicado."
  },
  {
    id: 17,
    imagen: false,
    svg: false,
    texto: "¿Cuál es una ventaja del sistema KNX sobre X10?",
    opciones: [
      "Mayor velocidad de transmisión y confiabilidad",
      "Es más barato",
      "Usa la red eléctrica",
      "No necesita cableado"
    ],
    correctaTexto: "Mayor velocidad de transmisión y confiabilidad",
    explicacion: "KNX ofrece mayor velocidad, fiabilidad y capacidad de direccionamiento respecto a X10."
  },
  {
    id: 18,
    imagen: false,
    svg: false,
    texto: "¿Cuántos dispositivos puede direccionar KNX?",
    opciones: [
      "Hasta 65.536 dispositivos",
      "256 dispositivos",
      "1.000 dispositivos",
      "Sin límite teórico"
    ],
    correctaTexto: "Hasta 65.536 dispositivos",
    explicacion: "KNX permite direccionar hasta 65.536 dispositivos mediante una estructura de grupos y direcciones."
  },
  {
    id: 19,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el medio de transmisión del sistema KNX?",
    opciones: [
      "Cable de par trenzado, líneas de energía, radiofrecuencia o fibra óptica",
      "Solo líneas de corriente eléctrica",
      "Solo radiofrecuencia",
      "Solo fibra óptica"
    ],
    correctaTexto: "Cable de par trenzado, líneas de energía, radiofrecuencia o fibra óptica",
    explicacion: "KNX es flexible en cuanto a medios de transmisión, permitiendo múltiples opciones según la necesidad."
  },
  {
    id: 20,
    imagen: false,
    svg: false,
    texto: "¿Qué certificación garantiza la compatibilidad entre dispositivos KNX?",
    opciones: [
      "Certificación KNX International",
      "Certificación ISO",
      "Certificación CE",
      "Certificación del fabricante"
    ],
    correctaTexto: "Certificación KNX International",
    explicacion: "Los dispositivos KNX certificados por KNX International garantizan interoperabilidad entre diferentes fabricantes."
  },

  // ===== UNIDAD 5: Sistemas con Autómatas Programables =====
  {
    id: 21,
    imagen: false,
    svg: false,
    texto: "¿Qué es un autómata programable en el contexto domótico?",
    opciones: [
      "Dispositivo electrónico que ejecuta un programa para controlar automatismos",
      "Un sensor que detecta movimiento",
      "Una lámpara inteligente",
      "Un cable de comunicación"
    ],
    correctaTexto: "Dispositivo electrónico que ejecuta un programa para controlar automatismos",
    explicacion: "Un autómata programable (PLC) es un controlador que ejecuta programas para automatizar procesos y sistemas."
  },
  {
    id: 22,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función principal de un autómata programable en domótica?",
    opciones: [
      "Procesar entradas de sensores y tomar decisiones para controlar actuadores",
      "Solo medir temperaturas",
      "Solo enviar notificaciones",
      "Solo guardar datos"
    ],
    correctaTexto: "Procesar entradas de sensores y tomar decisiones para controlar actuadores",
    explicacion: "El PLC recibe información de sensores, la procesa según la lógica programada y controla los actuadores."
  },
  {
    id: 23,
    imagen: false,
    svg: false,
    texto: "¿Cuál es una ventaja de usar autómatas programables en domótica?",
    opciones: [
      "Flexibilidad para programar lógicas complejas de control",
      "Son más económicos que otros sistemas",
      "No requieren instalación de cableado",
      "Funcionan sin alimentación eléctrica"
    ],
    correctaTexto: "Flexibilidad para programar lógicas complejas de control",
    explicacion: "Los autómatas permiten programar lógicas complejas y adaptables según las necesidades específicas."
  },
  {
    id: 24,
    imagen: false,
    svg: false,
    texto: "¿Qué lenguajes de programación se utilizan típicamente en autómatas domóticos?",
    opciones: [
      "Ladder, texto estructurado, diagramas de bloques funcionales",
      "Solo Python",
      "Solo Java",
      "Solo C++"
    ],
    correctaTexto: "Ladder, texto estructurado, diagramas de bloques funcionales",
    explicacion: "Los autómatas utilizan lenguajes estandarizados como Ladder (esquema de contactos) según IEC 61131-3."
  },
  {
    id: 25,
    imagen: false,
    svg: false,
    texto: "¿Cuál es un ejemplo de aplicación de autómata programable en vivienda?",
    opciones: [
      "Control de riego automático con sensores de humedad y horarios programados",
      "Solo encender y apagar luces manualmente",
      "Medir temperatura sin hacer nada",
      "Almacenar datos sin procesarlos"
    ],
    correctaTexto: "Control de riego automático con sensores de humedad y horarios programados",
    explicacion: "Los autómatas pueden implementar lógicas complejas como riego automático basado en condiciones y horarios."
  },

  // ===== UNIDAD 6: Arduino (Electrónica) =====
  {
    id: 26,
    imagen: false,
    svg: false,
    texto: "¿Qué es Arduino en el contexto de domótica?",
    opciones: [
      "Plataforma electrónica de código abierto para crear sistemas de control automatizados",
      "Un tipo de sensor",
      "Un protocolo de comunicación",
      "Un sistema de almacenamiento"
    ],
    correctaTexto: "Plataforma electrónica de código abierto para crear sistemas de control automatizados",
    explicacion: "Arduino es una plataforma de hardware y software abiertos que facilita la creación de sistemas de automatización."
  },
  {
    id: 27,
    imagen: false,
    svg: false,
    texto: "¿Cuál es una ventaja principal de Arduino para domótica?",
    opciones: [
      "Bajo costo, facilidad de programación y amplia comunidad de desarrolladores",
      "Es muy caro",
      "Difícil de programar",
      "No tiene comunidad de soporte"
    ],
    correctaTexto: "Bajo costo, facilidad de programación y amplia comunidad de desarrolladores",
    explicacion: "Arduino es accesible económicamente y tiene gran documentación y comunidad de usuarios disponible."
  },
  {
    id: 28,
    imagen: false,
    svg: false,
    texto: "¿Cuántas entradas/salidas digitales típicamente tiene una placa Arduino Uno?",
    opciones: [
      "14 entradas/salidas digitales (6 PWM) y 6 analógicas",
      "8 entradas/salidas",
      "32 entradas/salidas",
      "256 entradas/salidas"
    ],
    correctaTexto: "14 entradas/salidas digitales (6 PWM) y 6 analógicas",
    explicacion: "Arduino Uno tiene 14 pines digitales y 6 analógicos, lo que permite conectar múltiples sensores y actuadores."
  },
  {
    id: 29,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el lenguaje de programación utilizado en Arduino?",
    opciones: [
      "C/C++ (Arduino IDE)",
      "Python",
      "Java",
      "JavaScript"
    ],
    correctaTexto: "C/C++ (Arduino IDE)",
    explicacion: "Arduino utiliza un dialecto simplificado de C/C++ mediante el Arduino IDE, facilitando la curva de aprendizaje."
  },
  {
    id: 30,
    imagen: false,
    svg: false,
    texto: "¿Qué aplicación domótica se puede implementar fácilmente con Arduino?",
    opciones: [
      "Sistema de riego automático, control de luces, alarma de temperatura, etc.",
      "Solo medir temperatura",
      "Solo contar visitantes",
      "Solo almacenar datos"
    ],
    correctaTexto: "Sistema de riego automático, control de luces, alarma de temperatura, etc.",
    explicacion: "Arduino permite implementar diversos proyectos domóticos desde simples a moderadamente complejos."
  },

  // ===== UNIDAD 7: Asistentes Virtuales - Alexa =====
  {
    id: 31,
    imagen: false,
    svg: false,
    texto: "¿Qué es Amazon Alexa en el contexto de domótica?",
    opciones: [
      "Asistente virtual basado en inteligencia artificial para control por voz de dispositivos domóticos",
      "Un sensor de temperatura",
      "Un tipo de cableado",
      "Un protocolo de comunicación"
    ],
    correctaTexto: "Asistente virtual basado en inteligencia artificial para control por voz de dispositivos domóticos",
    explicacion: "Alexa es un asistente virtual que permite controlar dispositivos domóticos mediante comandos de voz."
  },
  {
    id: 32,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la principal ventaja de usar Alexa en domótica?",
    opciones: [
      "Control por voz natural, sin necesidad de interfaces complicadas",
      "Es más barato que otros sistemas",
      "No requiere conexión a internet",
      "Solo controla luces"
    ],
    correctaTexto: "Control por voz natural, sin necesidad de interfaces complicadas",
    explicacion: "Alexa permite una interacción natural mediante comandos de voz para controlar múltiples dispositivos."
  },
  {
    id: 33,
    imagen: false,
    svg: false,
    texto: "¿Qué dispositivos Amazon Alexa están disponibles?",
    opciones: [
      "Echo, Echo Dot, Echo Show, Echo Studio, etc.",
      "Solo Echo",
      "Solo Echo Dot",
      "Solo un modelo"
    ],
    correctaTexto: "Echo, Echo Dot, Echo Show, Echo Studio, etc.",
    explicacion: "Amazon ofrece varios dispositivos con Alexa de diferentes tamaños y capacidades."
  },
  {
    id: 34,
    imagen: false,
    svg: false,
    texto: "¿Cuál es un requisito para usar Alexa en domótica?",
    opciones: [
      "Conexión a internet (WiFi) y dispositivos domóticos compatibles",
      "Solo electricidad",
      "Solo Bluetooth",
      "Sin requisitos especiales"
    ],
    correctaTexto: "Conexión a internet (WiFi) y dispositivos domóticos compatibles",
    explicacion: "Alexa requiere conexión a internet y dispositivos domóticos certificados o compatibles para funcionar."
  },
  {
    id: 35,
    imagen: false,
    svg: false,
    texto: "¿Qué tareas puede realizar Alexa en una instalación domótica?",
    opciones: [
      "Controlar luces, temperatura, cerraduras, cámaras, electrodomésticos, etc.",
      "Solo encender luces",
      "Solo ajustar temperatura",
      "Solo reproducir música"
    ],
    correctaTexto: "Controlar luces, temperatura, cerraduras, cámaras, electrodomésticos, etc.",
    explicacion: "Alexa es capaz de controlar múltiples categorías de dispositivos domóticos mediante integración con sus servicios."
  },

  // ===== UNIDAD 8: Nuevas Tecnologías =====
  {
    id: 36,
    imagen: false,
    svg: false,
    texto: "¿Cuál es una de las últimas tendencias en domótica?",
    opciones: [
      "Integración de IoT, inteligencia artificial y aprendizaje automático",
      "Usar solo tecnología del siglo XX",
      "Evitar la automatización",
      "Controles completamente manuales"
    ],
    correctaTexto: "Integración de IoT, inteligencia artificial y aprendizaje automático",
    explicacion: "Las tendencias actuales incluyen IoT, IA para predicción de necesidades y automatización más inteligente."
  },
  {
    id: 37,
    imagen: false,
    svg: false,
    texto: "¿Qué es IoT (Internet of Things) en domótica?",
    opciones: [
      "Red de dispositivos conectados a internet que se comunican entre sí",
      "Solo sensores de temperatura",
      "Un protocolo de comunicación antiguo",
      "Un tipo de cable"
    ],
    correctaTexto: "Red de dispositivos conectados a internet que se comunican entre sí",
    explicacion: "IoT permite que dispositivos compartan datos y se controlen remotamente a través de internet."
  },
  {
    id: 38,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el beneficio de usar aprendizaje automático en domótica?",
    opciones: [
      "Adaptarse automáticamente a patrones de uso y optimizar consumo energético",
      "Complicar el sistema",
      "Aumentar costos",
      "Reducir funcionalidades"
    ],
    correctaTexto: "Adaptarse automáticamente a patrones de uso y optimizar consumo energético",
    explicacion: "El aprendizaje automático permite que el sistema aprenda patrones y optimice automáticamente recursos."
  },
  {
    id: 39,
    imagen: false,
    svg: false,
    texto: "¿Qué es la seguridad cibernética en domótica?",
    opciones: [
      "Protección de sistemas domóticos contra accesos no autorizados y ataques informáticos",
      "Solo instalar sensores de seguridad física",
      "No usar internet",
      "No usar contraseñas"
    ],
    correctaTexto: "Protección de sistemas domóticos contra accesos no autorizados y ataques informáticos",
    explicacion: "La seguridad cibernética es crucial en domótica moderna para proteger dispositivos y datos del usuario."
  },
  {
    id: 40,
    imagen: false,
    svg: false,
    texto: "¿Cuál es una tendencia futura importante en domótica?",
    opciones: [
      "Sistemas interoperables, estándares abiertos y privacidad de datos garantizada",
      "Sistemas más cerrados y propietarios",
      "Menos automatización",
      "Volver a controles manuales"
    ],
    correctaTexto: "Sistemas interoperables, estándares abiertos y privacidad de datos garantizada",
    explicacion: "El futuro de la domótica apunta hacia mayor interoperabilidad entre fabricantes y protección de la privacidad."
  }
];
