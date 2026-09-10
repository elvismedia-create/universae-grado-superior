// Tema 5: Montaje y Mantenimiento de Baja Tensión
const TEMA_5_ESTUDIO_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son las herramientas básicas necesarias para el montaje de instalaciones de baja tensión?",
    opciones: [
      "Martillo, destornillador y cinta de aislar",
      "Destornillador, alicates, pelacables, cinta de aislar y multímetro",
      "Taladro, sierra y nivel",
      "Sólo un destornillador y un martillo"
    ],
    correctaTexto: "Destornillador, alicates, pelacables, cinta de aislar y multímetro",
    explicacion: "El equipo básico de montaje incluye herramientas manuales de precisión y un multímetro para verificar continuidad y tensiones."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento correcto para pelar un cable de baja tensión?",
    opciones: [
      "Usar un cuchillo afilado con presión controlada",
      "Usar un pelacables ajustado al diámetro del cable para evitar dañar el conductor",
      "Quemar el aislamiento con fuego",
      "Usar solamente los dientes para pelar el aislamiento"
    ],
    correctaTexto: "Usar un pelacables ajustado al diámetro del cable para evitar dañar el conductor",
    explicacion: "El pelacables debe tener el tamaño adecuado para el conductor, aplicando presión controlada sin dañar los hilos de cobre."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Qué es el empalme de conductores y cuál es el método más seguro para realizarlo?",
    opciones: [
      "La unión de dos cables; el método más seguro es usar cinta de aislar",
      "La unión de dos cables; el método más seguro es usar conectores de compresión o soldadura",
      "La separación de dos cables",
      "El cruzamiento de dos cables"
    ],
    correctaTexto: "La unión de dos cables; el método más seguro es usar conectores de compresión o soldadura",
    explicacion: "Los empalmes deben realizarse con conectores de compresión, regletas de conexión o soldadura, nunca solamente con cinta de aislar."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la tensión de prueba típica para verificar el aislamiento de un cable de baja tensión?",
    opciones: [
      "100 voltios",
      "500 voltios",
      "1.000 voltios",
      "5.000 voltios"
    ],
    correctaTexto: "500 voltios",
    explicacion: "La prueba de aislamiento en baja tensión se realiza habitualmente a 500V con un megóhmetro para detectar posibles deficiencias de aislamiento."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Qué resistencia de aislamiento mínima es aceptable en un circuito de baja tensión?",
    opciones: [
      "0,5 MΩ",
      "1 MΩ",
      "5 MΩ",
      "10 MΩ"
    ],
    correctaTexto: "1 MΩ",
    explicacion: "Según normativa, la resistencia de aislamiento mínima debe ser de 1 MΩ (1 megaohmio) entre conductores activos y tierra."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento correcto para tomar tierra en una instalación de baja tensión?",
    opciones: [
      "Clavar una varilla de cobre o acero galvanizado en el terreno a una profundidad mínima",
      "Conectar un cable directamente al agua del grifo",
      "No es necesario tomar tierra en baja tensión",
      "Usar el neutro como conductor de protección"
    ],
    correctaTexto: "Clavar una varilla de cobre o acero galvanizado en el terreno a una profundidad mínima",
    explicacion: "La toma de tierra se realiza con una pica o varilla enterrada a una profundidad mínima de 2 metros, con buen contacto con el terreno."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el valor máximo de resistencia de tierra permitido en una instalación residencial?",
    opciones: [
      "10 ohmios",
      "20 ohmios",
      "50 ohmios",
      "100 ohmios"
    ],
    correctaTexto: "40 ohmios",
    explicacion: "El valor máximo recomendado es de 40 ohmios para instalaciones ordinarias; para instalaciones con diferencial de 30mA se requiere Rt≤1.200/I"
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Cómo se comprueba el correcto funcionamiento de un diferencial?",
    opciones: [
      "Observando el indicador visual",
      "Presionando el botón de prueba (botón T) para simular una fuga",
      "Usando un megóhmetro",
      "Midiendo la tensión con un multímetro"
    ],
    correctaTexto: "Presionando el botón de prueba (botón T) para simular una fuga",
    explicacion: "Todo diferencial tiene un botón T de prueba que simula una corriente de fuga; si funciona correctamente, desconectará el circuito."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la frecuencia mínima de mantenimiento preventivo en una instalación de baja tensión?",
    opciones: [
      "Cada semana",
      "Cada mes",
      "Cada seis meses",
      "Una vez al año como mínimo"
    ],
    correctaTexto: "Una vez al año como mínimo",
    explicacion: "Se recomienda realizar inspecciones y pruebas de seguridad al menos anualmente, aunque algunas instalaciones requieren frecuencia mayor."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué incluye una inspección visual en el mantenimiento de una instalación de baja tensión?",
    opciones: [
      "Cambiar todos los fusibles automáticamente",
      "Revisar conductores, conectores, tableros, aislamiento y ausencia de daños mecánicos",
      "Solo cambiar los cables defectuosos",
      "No es necesario realizar inspecciones visuales"
    ],
    correctaTexto: "Revisar conductores, conectores, tableros, aislamiento y ausencia de daños mecánicos",
    explicacion: "La inspección visual identifica deterioros, daños mecánicos, corrosión y otros problemas evidentes que podrían comprometer la seguridad."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Cuándo se debe sustituir un cable de baja tensión?",
    opciones: [
      "Nunca, los cables son permanentes",
      "Cuando presente daños mecánicos, aislamiento deteriorado o muestre signos de envejecimiento",
      "Solo cuando no conduzca electricidad",
      "Cada 5 años obligatoriamente"
    ],
    correctaTexto: "Cuando presente daños mecánicos, aislamiento deteriorado o muestre signos de envejecimiento",
    explicacion: "Los cables deben reemplazarse antes de que fallen, cuando muestren signos de deterioro en el aislamiento o dañados por compresión o roce."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento correcto para desconectar una instalación antes de realizar mantenimiento?",
    opciones: [
      "Simplemente desenchufar los aparatos",
      "Apagar el interruptor principal y bloquear la fuente, verificando con un probador de tensión que no hay electricidad",
      "Pedir al usuario que apague la llave de paso",
      "No es necesario desconectar nada"
    ],
    correctaTexto: "Apagar el interruptor principal y bloquear la fuente, verificando con un probador de tensión que no hay electricidad",
    explicacion: "Se debe seguir el procedimiento LOTO (Lockout-Tagout): desconectar, bloquear, poner etiqueta y verificar la ausencia de tensión."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Qué es la soldadura de cables y cuál es su aplicación en baja tensión?",
    opciones: [
      "Un método para unir cables usando calor; se usa para empalmes críticos en instalaciones de baja tensión",
      "Un método de reparación de aislamiento",
      "Una forma de hacer más cortos los cables",
      "No se usa soldadura en baja tensión"
    ],
    correctaTexto: "Un método para unir cables usando calor; se usa para empalmes críticos en instalaciones de baja tensión",
    explicacion: "La soldadura fuerte o blanda es un método seguro de empalme que crea una unión eléctrica y mecánica robusta cuando se realiza correctamente."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función de la cinta de aislar en el mantenimiento de cables?",
    opciones: [
      "Reforzar la estructura del cable",
      "Aumentar la conductividad",
      "Sellar temporalmente pequeños daños en el aislamiento y proteger empalmes",
      "Cambiar el color del cable"
    ],
    correctaTexto: "Sellar temporalmente pequeños daños en el aislamiento y proteger empalmes",
    explicacion: "La cinta de aislar (cinta aislante) es una solución temporal para proteger empalmes y pequeños daños, aunque no sustituye un verdadero aislamiento."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Qué equipos de protección personal (EPP) son obligatorios al trabajar en baja tensión?",
    opciones: [
      "No se requiere ninguno porque la tensión es baja",
      "Guantes aislantes, gafas de seguridad, herramientas aisladas y ropa de trabajo",
      "Solo un casco",
      "Ropa de algodón nada más"
    ],
    correctaTexto: "Guantes aislantes, gafas de seguridad, herramientas aisladas y ropa de trabajo",
    explicacion: "El EPP es esencial: guantes aislantes, ropa de trabajo adecuada, gafas de seguridad y herramientas con aislamiento."
  },
  {
    id: 16,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la profundidad mínima de enterramiento para cables de baja tensión bajo tierra?",
    opciones: [
      "Nada, deben estar al nivel del suelo",
      "5 centímetros",
      "30 centímetros",
      "100 centímetros"
    ],
    correctaTexto: "30 centímetros",
    explicacion: "Los cables enterrados de baja tensión deben estar a una profundidad mínima de 30 cm para protección contra daños mecánicos y climáticos."
  },
  {
    id: 17,
    imagen: false,
    svg: false,
    texto: "¿Qué precauciones se deben tomar al trabajar con cables en ambientes húmedos?",
    opciones: [
      "No hay precauciones especiales necesarias",
      "Usar herramientas aisladas, EPP adecuado y asegurar buen aislamiento y puesta a tierra",
      "Trabajar rápido para evitar mojarse",
      "Secar todo con un paño antes de tocar"
    ],
    correctaTexto: "Usar herramientas aisladas, EPP adecuado y asegurar buen aislamiento y puesta a tierra",
    explicacion: "En ambientes húmedos, el riesgo eléctrico aumenta. Se deben usar herramientas aisladas, ropa de protección y verificar especialmente la puesta a tierra."
  },
  {
    id: 18,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento correcto para enroscar una bombilla en una base E27?",
    opciones: [
      "Enroscar fuerte para asegurar buen contacto",
      "Enroscar suavemente hasta que haga tope, girando media vuelta atrás",
      "Simplemente encajar sin enroscar",
      "Usar pinzas para apretarlo"
    ],
    correctaTexto: "Enroscar suavemente hasta que haga tope, girando media vuelta atrás",
    explicacion: "La bombilla debe enroscarse hasta hacer contacto, luego girarse media vuelta atrás para evitar sobretensiones y facilitar el cambio futuro."
  },
  {
    id: 19,
    imagen: false,
    svg: false,
    texto: "¿Cómo se reconoce un conductor de protección deteriorado durante el mantenimiento?",
    opciones: [
      "Observando si tiene el color verde-amarillo",
      "Verificando continuidad, observando signos de oxidación, roturas o daños en el aislamiento",
      "Solo por su olor",
      "Los conductores de protección no se deterioran"
    ],
    correctaTexto: "Verificando continuidad, observando signos de oxidación, roturas o daños en el aislamiento",
    explicacion: "El PE debe verificarse para continuidad con un multímetro y visualmente se inspeccionan daños en el aislamiento o corrosión del cobre."
  },
  {
    id: 20,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la vida útil típica de los cables de baja tensión en condiciones normales?",
    opciones: [
      "1-2 años",
      "5-10 años",
      "20-50 años o más, depende de las condiciones ambientales",
      "Los cables son permanentes"
    ],
    correctaTexto: "20-50 años o más, depende de las condiciones ambientales",
    explicacion: "Los cables bien instalados pueden durar décadas en condiciones normales, pero la exposición a UV, calor extremo o humedad reduce su vida útil."
  }
];
