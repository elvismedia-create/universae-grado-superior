// T3: Instalaciones de Distribución
const TEMA_T3_DISTRIBUCION_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿A qué corresponde esta definición: 'Intervención concebida para cambiar el estado eléctrico de una instalación'?",
    opciones: ["Maniobra", "Trabajo sin tensión", "Trabajo a distancia", "Trabajo en proximidad"],
    correcta: 0,
    explicacion: "Una maniobra es cualquier intervención realizada para cambiar el estado eléctrico de una instalación, como abrir o cerrar un interruptor."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función del cuadro general de mando y protección (CGMP)?",
    opciones: ["Centralizar el control y protección de todos los circuitos de la vivienda", "Generar energía", "Almacenar energía", "Solo proteger contra rayos"],
    correcta: 0,
    explicacion: "El CGMP centraliza todos los dispositivos de mando y protección de los circuitos de la instalación interior."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Qué es un interruptor diferencial?",
    opciones: ["Dispositivo que protege contra contactos indirectos detectando fugas de corriente", "Un interruptor normal", "Un fusible", "Un timbre"],
    correcta: 0,
    explicacion: "El interruptor diferencial detecta diferencias de corriente entre conductores y desconecta la instalación ante fugas, protegiendo contra contactos indirectos."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la sección mínima de los conductores de fase en una instalación doméstica?",
    opciones: ["1,5 mm² para circuitos de alumbrado y 2,5 mm² para tomas de corriente", "0,5 mm²", "10 mm²", "Cualquier sección vale"],
    correcta: 0,
    explicacion: "La normativa establece 1,5 mm² como sección mínima para alumbrado y 2,5 mm² para tomas de corriente en instalaciones domésticas."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Qué función tiene un fusible en una instalación eléctrica?",
    opciones: ["Proteger contra sobrecargas y cortocircuitos interrumpiendo el circuito", "Distribuir la corriente", "Almacenar energía", "Regular el voltaje"],
    correcta: 0,
    explicacion: "Un fusible es un dispositivo de protección que se funde cuando la intensidad de corriente supera su valor nominal, interrumpiendo el circuito."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la tensión nominal en una instalación doméstica en España?",
    opciones: ["230V en monofásico y 400V en trifásico", "100V", "500V", "120V"],
    correcta: 0,
    explicacion: "En España, la tensión de suministro es de 230V para instalaciones monofásicas y 400V para trifásicas."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Qué es una acometida eléctrica?",
    opciones: ["Línea que une la red de distribución con la instalación interior de la vivienda", "Un circuito interno", "Un interruptor", "Un elemento de iluminación"],
    correcta: 0,
    explicacion: "La acometida es la conexión entre la red de distribución pública y la instalación interior de la vivienda."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el propósito principal de los circuitos independientes en una instalación?",
    opciones: ["Evitar que un fallo en un circuito afecte a los demás y facilitar el mantenimiento", "Ahorrar cable", "Simplificar el cableado", "Aumentar la tensión"],
    correcta: 0,
    explicacion: "Los circuitos independientes permiten que el fallo de uno no interrumpa los otros, mejorando la seguridad y facilitando el mantenimiento."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Qué se entiende por trabajo sin tensión?",
    opciones: ["Intervención en una instalación con corriente interrumpida en todos los puntos de entrada de energía", "Trabajo con baja tensión", "Trabajo con herramientas metálicas", "Trabajo en proximidad a conductores"],
    correcta: 0,
    explicacion: "El trabajo sin tensión es cualquier intervención realizada con la corriente cortada en todos los puntos de entrada de energía de la instalación."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la intensidad máxima protegida por un PIA (Pequeño Interruptor Automático) típico de 16A?",
    opciones: ["16 amperios", "10 amperios", "20 amperios", "32 amperios"],
    correcta: 0,
    explicacion: "Un PIA de 16A desconecta el circuito cuando la intensidad de corriente alcanza o supera 16 amperios."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Qué es la canalización en una instalación eléctrica?",
    opciones: ["Conducto o tubo que contiene y protege los conductores eléctricos", "El contador de energía", "El fusible", "La caja de fusibles"],
    correcta: 0,
    explicacion: "La canalización es el tubo o conducto que alberga y protege los conductores eléctricos de la instalación."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función del conductor de protección (tierra)?",
    opciones: ["Proteger contra contactos indirectos conectando las partes metálicas al potencial 0", "Transportar la corriente principal", "Funcionar como neutro", "Controlar la tensión"],
    correcta: 0,
    explicacion: "El conductor de protección (tierra) conecta las partes metálicas expuestas de la instalación a tierra para proteger contra contactos indirectos."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Qué es un contacto indirecto en una instalación eléctrica?",
    opciones: ["Contacto con una parte metálica normalmente sin tensión pero que se ha puesto bajo tensión por un fallo de aislamiento", "Tocar un cable activo", "Usar un aparato mojado", "Enchufar un dispositivo sin tierra"],
    correcta: 0,
    explicacion: "El contacto indirecto ocurre cuando se toca una parte metálica que ha quedado bajo tensión debido a un defecto de aislamiento."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el calibre típico de un interruptor diferencial de 30mA?",
    opciones: ["30 miliamperios (protección sensible para lugares húmedos)", "30 amperios", "3 amperios", "300 miliamperios"],
    correcta: 0,
    explicacion: "Un diferencial de 30mA desconecta el circuito cuando detecta una fuga de corriente de 30 miliamperios, siendo adecuado para áreas húmedas."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Qué tipos de circuitos independientes debe tener una instalación interior?",
    opciones: ["Alumbrado, tomas de corriente de uso general y tomas especiales para electrodomésticos", "Solo uno general", "Solo alumbrado", "Solo tomas de corriente"],
    correcta: 0,
    explicacion: "Una instalación debe tener circuitos independientes para alumbrado, tomas de uso general, y tomas especiales para electrodomésticos de alto consumo."
  }
];
