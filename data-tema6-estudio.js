// Tema 6: Configuración de Instalaciones de Enlace
const TEMA_6_ESTUDIO_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Qué es una instalación de enlace en el contexto de distribución eléctrica?",
    opciones: [
      "Una conexión temporal entre dos transformadores",
      "La instalación que conecta la red pública de distribución con la instalación interior del usuario",
      "Un cable de comunicación entre edificios",
      "La conexión entre dos fases"
    ],
    correctaTexto: "La instalación que conecta la red pública de distribución con la instalación interior del usuario",
    explicacion: "La instalación de enlace es el conjunto de elementos que conectan la red pública de distribución con la instalación interior, incluyendo línea de acometida, caja de protección y centralización de contadores."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son las partes principales de una instalación de enlace?",
    opciones: [
      "Solo el contador",
      "Línea de acometida, dispositivos de protección, centralización de contadores y dispositivos de mando",
      "Un transformador y un fusible",
      "Únicamente el interruptor general"
    ],
    correctaTexto: "Línea de acometida, dispositivos de protección, centralización de contadores y dispositivos de mando",
    explicacion: "Una instalación de enlace completa incluye acometida, caja de protección y maniobra, centralización de contadores, y protecciones generales."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Qué es una caja de protección y maniobra (CPM) en una instalación de enlace?",
    opciones: [
      "Un armario que solo contiene el contador",
      "Un elemento que contiene fusibles de protección y permite desconectar la instalación",
      "Una caja para guardar herramientas",
      "Un regulador de voltaje"
    ],
    correctaTexto: "Un elemento que contiene fusibles de protección y permite desconectar la instalación",
    explicacion: "La CPM alberga fusibles de protección contra cortocircuitos de la acometida y un dispositivo de desconexión que permite aislar la instalación."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función principal de los fusibles en una instalación de enlace?",
    opciones: [
      "Medir el consumo de energía",
      "Proteger la acometida contra cortocircuitos de la instalación interior",
      "Regular la temperatura",
      "Aumentar la potencia disponible"
    ],
    correctaTexto: "Proteger la acometida contra cortocircuitos de la instalación interior",
    explicacion: "Los fusibles de enlace protegen la línea de acometida ante fallos en la instalación interior, desconectando automáticamente en caso de cortocircuito."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Qué es la línea de acometida en una instalación de enlace?",
    opciones: [
      "El cable que conecta el contador con el interruptor diferencial",
      "El tramo de red pública que alimenta la instalación",
      "El cable que une dos contadores",
      "La línea de conexión a tierra"
    ],
    correctaTexto: "El tramo de red pública que alimenta la instalación",
    explicacion: "La acometida es la parte de la instalación que conecta la red pública de distribución con la propiedad del usuario, incluyendo los conductores desde el punto de derivación."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la sección mínima permitida para conductores de acometida en baja tensión?",
    opciones: [
      "0,5 mm²",
      "1,5 mm²",
      "6 mm²",
      "10 mm²"
    ],
    correctaTexto: "6 mm²",
    explicacion: "La sección mínima de conductores de acometida es de 6 mm² de cobre para asegurar suficiente resistencia mecánica y capacidad de corriente."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Qué incluye la centralización de contadores?",
    opciones: [
      "Solo los contadores de energía activa",
      "Contadores de energía activa, reactiva y dispositivos de maniobra para cada usuario",
      "Un único contador para todo el edificio",
      "Transformadores de potencia"
    ],
    correctaTexto: "Contadores de energía activa, reactiva y dispositivos de maniobra para cada usuario",
    explicacion: "La centralización de contadores es un conjunto de elementos que permite medir el consumo de cada usuario y desconectar individualmente su instalación."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función del interruptor general de mando en una instalación de enlace?",
    opciones: [
      "Regular la frecuencia de la corriente",
      "Permitir desconectar toda la instalación desde un único punto",
      "Aumentar el voltaje de la red",
      "Compensar el factor de potencia"
    ],
    correctaTexto: "Permitir desconectar toda la instalación desde un único punto",
    explicacion: "El interruptor general permite desconectar de forma segura toda la instalación para mantenimiento o en caso de emergencia."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Dónde debe ubicarse la centralización de contadores en un edificio de viviendas?",
    opciones: [
      "En la terraza",
      "En un lugar accesible, bien iluminado, ventilado y protegido de la intemperie",
      "En el sótano sin importar condiciones",
      "En cualquier lugar del edificio"
    ],
    correctaTexto: "En un lugar accesible, bien iluminado, ventilado y protegido de la intemperie",
    explicacion: "La ubicación debe cumplir condiciones mínimas de accesibilidad, iluminación y protección para permitir lecturas seguras y manteniemento."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué es un contador de doble tarifa o multitarifa?",
    opciones: [
      "Un contador que mide solo energía reactiva",
      "Un contador que registra consumo en diferentes períodos horarios con precios distintos",
      "Un contador que mide dos viviendas",
      "Un contador que regula el voltaje"
    ],
    correctaTexto: "Un contador que registra consumo en diferentes períodos horarios con precios distintos",
    explicacion: "Los contadores multitarifa miden el consumo discriminando por períodos horarios (pico, valle, llano) para aplicar diferentes tarifas."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la diferencia entre un contador de energía activa y otro de energía reactiva?",
    opciones: [
      "No hay diferencia, son lo mismo",
      "El activo mide potencia real (kWh) y el reactivo mide potencia inductiva (kVArh)",
      "El reactivo es más preciso que el activo",
      "El activo solo mide en corriente continua"
    ],
    correctaTexto: "El activo mide potencia real (kWh) y el reactivo mide potencia inductiva (kVArh)",
    explicacion: "El contador activo mide energía real consumida; el reactivo mide energía reactiva (componente inductiva) para calcular penalizaciones por bajo factor de potencia."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Qué es un TI (transformador de intensidad) en una instalación de enlace?",
    opciones: [
      "Un transformador que aumenta la tensión",
      "Un transformador que reduce la corriente para que el contador pueda medirla con seguridad",
      "Un transformador que cambia la frecuencia",
      "Un transformador para comunicaciones"
    ],
    correctaTexto: "Un transformador que reduce la corriente para que el contador pueda medirla con seguridad",
    explicacion: "El TI (Toroid de Intensidad) reduce la corriente de acometida a niveles seguros para el contador cuando la intensidad es muy elevada."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la relación de transformación más común en un TI de 100/5?",
    opciones: [
      "Reduce 100 veces la tensión",
      "Reduce 20 veces la corriente (100A → 5A)",
      "Aumenta 100 veces la intensidad",
      "No tiene relación de transformación"
    ],
    correctaTexto: "Reduce 20 veces la corriente (100A → 5A)",
    explicacion: "Un TI 100/5 tiene relación 20:1, reduciendo una corriente de 100A en la acometida a 5A en el secundario para el contador."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Qué es un dispositivo de protección contra sobreintensidades en una instalación de enlace?",
    opciones: [
      "Un condensador para mejora del factor de potencia",
      "Un fusible o interruptor magnetotérmico que desconecta ante sobrecarga o cortocircuito",
      "Un transformador de tensión",
      "Un contador especial"
    ],
    correctaTexto: "Un fusible o interruptor magnetotérmico que desconecta ante sobrecarga o cortocircuito",
    explicacion: "Los dispositivos de protección contra sobreintensidades detectan corrientes anormales y desconectan automáticamente la instalación."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la capacidad de corte mínima recomendada para el interruptor general de una instalación de enlace?",
    opciones: [
      "3 kA",
      "6 kA",
      "25 kA",
      "100 kA"
    ],
    correctaTexto: "6 kA",
    explicacion: "El interruptor general de enlace debe tener capacidad de corte mínima de 6 kA para soportar corrientes de cortocircuito típicas en baja tensión."
  },
  {
    id: 16,
    imagen: false,
    svg: false,
    texto: "¿Qué es un fusible limitador de corriente?",
    opciones: [
      "Un fusible que cambia el voltaje",
      "Un fusible que actúa en milisegundos, limitando la corriente de cortocircuito",
      "Un fusible que regula la temperatura",
      "Un tipo de contador"
    ],
    correctaTexto: "Un fusible que actúa en milisegundos, limitando la corriente de cortocircuito",
    explicacion: "Los fusibles limitadores de corriente actúan muy rápidamente para reducir la energía de cortocircuito, protegiendo equipos aguas abajo."
  },
  {
    id: 17,
    imagen: false,
    svg: false,
    texto: "¿Qué requisitos debe cumplir la canalización de la acometida en una instalación de enlace?",
    opciones: [
      "No hay requisitos especiales",
      "Protección mecánica, resistencia al fuego y accesibilidad para mantenimiento",
      "Solo ser hermética",
      "Tener color verde"
    ],
    correctaTexto: "Protección mecánica, resistencia al fuego y accesibilidad para mantenimiento",
    explicacion: "La acometida debe estar adecuadamente protegida mecánicamente, contar con resistencia al fuego y ser accesible para inspección y mantenimiento."
  },
  {
    id: 18,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la distancia máxima permitida entre el punto de entrada y la centralización de contadores?",
    opciones: [
      "No hay límite de distancia",
      "No especificado; debe minimizarse por razones económicas y de seguridad",
      "Exactamente 10 metros",
      "100 metros"
    ],
    correctaTexto: "No especificado; debe minimizarse por razones económicas y de seguridad",
    explicacion: "Aunque no hay límite normativo específico, se deben minimizar las distancias para reducir pérdidas y facilitar el acceso a protecciones."
  },
  {
    id: 19,
    imagen: false,
    svg: false,
    texto: "¿Qué precauciones se deben tomar en la instalación de una centralización de contadores en ambientes corrosivos?",
    opciones: [
      "No hay precauciones especiales",
      "Usar materiales resistentes a la corrosión, mejorar ventilación y proteger contra la intemperie",
      "Solo usar materiales de plástico",
      "Duplicar el espesor del acero"
    ],
    correctaTexto: "Usar materiales resistentes a la corrosión, mejorar ventilación y proteger contra la intemperie",
    explicacion: "En ambientes corrosivos (costas, industrias químicas), se requieren materiales especiales y protecciones adicionales contra la corrosión."
  },
  {
    id: 20,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la documentación obligatoria que debe acompañar una instalación de enlace?",
    opciones: [
      "No se requiere documentación",
      "Proyecto o declaración responsable, esquema unifilar, y certificado de conformidad",
      "Solo el recibo de la compra de materiales",
      "Un dibujo a mano"
    ],
    correctaTexto: "Proyecto o declaración responsable, esquema unifilar, y certificado de conformidad",
    explicacion: "Toda instalación de enlace debe tener documentación de proyecto, esquema unifilar del circuito, y certificado de conformidad según normativa."
  }
];
