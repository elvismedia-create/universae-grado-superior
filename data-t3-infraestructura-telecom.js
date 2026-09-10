// T3: Infraestructuras Comunes de Telecomunicación en Viviendas y Edificios
const TEMA_T3_INFRAESTRUCTURA_TELECOM_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Qué son las infraestructuras comunes de telecomunicación (ICT)?",
    opciones: ["Sistemas compartidos de comunicación en edificios que distribuyen servicios a todas las viviendas", "Solo instalación de telefonía", "Solo internet", "Sistemas individuales de cada vivienda"],
    correcta: 0,
    explicacion: "Las ICT son infraestructuras comunes que permiten la distribución de servicios de telecomunicación a todas las viviendas y locales del edificio."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los servicios que puede distribuir una ICT?",
    opciones: ["Telefonía, televisión e internet", "Solo televisión", "Solo telefonía", "Solo internet"],
    correcta: 0,
    explicacion: "Una ICT puede distribuir servicios de telefonía, televisión por cable, radiodifusión y acceso a internet a todas las unidades del edificio."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los elementos principales de una ICT?",
    opciones: ["Red de alimentación, red interior de usuario, puntos de acceso (PAU), ductos y canalizaciones", "Solo cables", "Solo antenas", "Solo enchufes"],
    correcta: 0,
    explicacion: "Una ICT incluye la red exterior de alimentación, canalizaciones, puntos de acceso a usuario (PAU), red interior, tomas y dispositivos terminales."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Qué es un Punto de Acceso de Usuario (PAU)?",
    opciones: ["Punto de conexión en la vivienda donde el usuario accede a los servicios de la ICT", "Un servidor central", "Una antena exterior", "Un amplificador de señal"],
    correcta: 0,
    explicacion: "El PAU es el punto de distribución en cada vivienda o local desde el que se derivan los servicios de telecomunicación."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función de una centralización?",
    opciones: ["Punto centralizado donde se interconectan los servicios antes de distribuirse a los PAU", "Conectar la red exterior", "Distribuir electricidad", "Amplificar señales"],
    correcta: 0,
    explicacion: "La centralización es el punto técnico donde se concentran y procesan los servicios de telecomunicación antes de distribuirse internamente."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Qué tipo de cableado se utiliza típicamente en una ICT?",
    opciones: ["Cables coaxiales para TV, pares trenzados para telefonía e internet, y fibra óptica", "Solo cable coaxial", "Solo pares trenzados", "Solo fibra óptica"],
    correcta: 0,
    explicacion: "Las ICT utilizan diferentes tipos de cables según el servicio: coaxial (TV), pares trenzados (telefonía/internet) y fibra óptica para largas distancias."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la diferencia entre una ICT y una ICTS?",
    opciones: ["ICTS incluye servicios de satélite además de los servicios de ICT básica", "No hay diferencia", "ICTS es más antigua", "ICTS es solo para viviendas"],
    correcta: 0,
    explicacion: "ICTS (Infraestructura común de telecomunicación en satélite) añade la capacidad de recibir servicios de radiodifusión por satélite a los servicios básicos."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Qué son los conductos o canalizaciones en una ICT?",
    opciones: ["Tubos o espacios que contienen y protegen el cableado de telecomunicación", "Cables de alimentación", "Puntos de conexión", "Antenas exteriores"],
    correcta: 0,
    explicacion: "Los conductos son tubos protectores que alojan los cables de telecomunicación, permitiendo flexibilidad y protección."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la impedancia característica típica de un cable coaxial para televisión?",
    opciones: ["75 ohmios", "50 ohmios", "120 ohmios", "300 ohmios"],
    correcta: 0,
    explicacion: "Los cables coaxiales para distribución de televisión tienen una impedancia de 75 ohmios, optimizada para transmisión de video."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué es la atenuación en un cable de telecomunicación?",
    opciones: ["La pérdida de amplitud de la señal conforme recorre el cable", "El aumento de voltaje", "La reflexión de la señal", "El ruido eléctrico"],
    correcta: 0,
    explicacion: "La atenuación es la reducción progresiva de la amplitud de la señal a medida que se propaga por el cable, aumentando con la distancia y frecuencia."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Cuánto es la distancia máxima recomendada para la red interior de usuario en una ICT?",
    opciones: ["Máximo 50 metros desde el PAU hasta las tomas interiores", "100 metros", "10 metros", "500 metros"],
    correcta: 0,
    explicacion: "La normativa establece que la red interior de usuario no debe exceder 50 metros desde el PAU para mantener la calidad de la señal."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Qué es una toma de usuario (o enchufe RJ) en una ICT?",
    opciones: ["Punto de conexión en la vivienda donde el usuario conecta sus equipos (teléfono, TV, internet)", "Un fusible", "Un interruptor", "Una antena"],
    correcta: 0,
    explicacion: "Las tomas de usuario (RJ45, RJ11, etc.) son conectores donde el usuario accede a los servicios de telecomunicación dentro de su vivienda."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el ancho de banda típico para internet en una ICT por cableado coaxial?",
    opciones: ["Desde 5 MHz a 862 MHz (o superior)", "1 GHz", "10 MHz", "100 kHz"],
    correcta: 0,
    explicacion: "Los sistemas HFC (Hybrid Fiber-Coaxial) utilizan el rango de frecuencia 5-862 MHz para proporcionar internet, TV y telefonía."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Qué es la red de fibra óptica en una ICT?",
    opciones: ["Red de transporte de alta capacidad desde la centralización hasta los nodos de distribución", "Solo conexión a internet", "Solo para TV", "Un tipo de cable coaxial"],
    correcta: 0,
    explicacion: "La red de fibra óptica es la red troncal de distribución que permite transmisión de alta velocidad y capacidad desde la centralización a los usuarios."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la responsabilidad del propietario del edificio respecto a la ICT?",
    opciones: ["Proporcionar la ICT (infraestructura pasiva) accesible a todos los operadores de telecomunicación", "Contratar el servicio de internet", "Instalar las antenas", "Pagar todos los servicios"],
    correcta: 0,
    explicacion: "La normativa obliga al propietario a proporcionar acceso a una infraestructura de telecomunicación neutral para que los operadores puedan prestar servicios."
  }
];
