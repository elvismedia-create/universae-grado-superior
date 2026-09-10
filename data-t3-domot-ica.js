// T3: Instalaciones Domóticas
const TEMA_T3_DOMOT_ICA_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el objetivo principal de una instalación domótica?",
    opciones: ["Aumentar el consumo de energía", "Automatizar y controlar sistemas de la vivienda", "Reducir la capacidad instalada", "Complicar el manejo de dispositivos"],
    correcta: 1,
    explicacion: "La domótica busca automatizar y controlar los sistemas de iluminación, climatización, seguridad y otros aparatos del hogar para mejorar la calidad de vida."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los beneficios principales de la domótica?",
    opciones: ["Mayor confort, ahorro energético y seguridad", "Solo confort", "Solo ahorro energético", "Ningún beneficio relevante"],
    correcta: 0,
    explicacion: "La domótica proporciona confort mejorado, eficiencia energética (ahorro 20-40%), seguridad avanzada y facilita la vida de personas con movilidad reducida."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Qué tipos de redes de comunicación se utilizan en domótica?",
    opciones: ["Cableadas (KNX, X-10) e inalámbricas (WiFi, Zigbee, Z-Wave)", "Solo cableadas", "Solo inalámbricas", "Solo línea telefónica"],
    correcta: 0,
    explicacion: "La domótica utiliza protocolos de comunicación cableados como KNX y X-10, e inalámbricos como WiFi, Zigbee y Z-Wave."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Qué es el protocolo KNX?",
    opciones: ["Estándar europeo abierto para automatización de viviendas e inmuebles", "Un router WiFi", "Un tipo de fusible", "Una marca de televisión"],
    correcta: 0,
    explicacion: "KNX es un protocolo de comunicación estandarizado internacionalmente (EN 50090) para aplicaciones de domótica y automatización de edificios."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función principal de un módulo de control domótico?",
    opciones: ["Recibir datos de sensores, procesarlos según la lógica programada y enviar órdenes a los actuadores", "Solo medir temperatura", "Solo encender luces", "Servir como repetidor de WiFi"],
    correcta: 0,
    explicacion: "El módulo de control (PLC o controlador) es el cerebro del sistema: recopila información de sensores y ejecuta acciones automáticas."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Qué es un actuador en un sistema domótico?",
    opciones: ["Dispositivo que ejecuta acciones físicas (encender luz, abrir persiana, calentar agua)", "Un sensor de movimiento", "Un procesador central", "Un panel de control"],
    correcta: 0,
    explicacion: "Los actuadores son dispositivos que realizan acciones: relés para luces, motores para persianas, válvulas para calefacción, etc."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Qué es un sensor en un sistema domótico?",
    opciones: ["Dispositivo que detecta condiciones ambientales (temperatura, luz, movimiento) y envía datos al controlador", "Un botón de pulsación", "Un interruptor manual", "Un dispositivo de salida"],
    correcta: 0,
    explicacion: "Los sensores son dispositivos de entrada que capturan información del entorno: sensores de luz, temperatura, movimiento, humedad, etc."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el consumo típico de energía ahorrado con domótica en calefacción y climatización?",
    opciones: ["15-30% mediante control inteligente de temperatura", "0% (no ahorra energía)", "50% siempre", "100% (sin gasto)"],
    correcta: 0,
    explicacion: "La gestión automática de temperatura según ocupación y horarios permite ahorros entre 15-30% en climatización, uno de los mayores gastos energéticos."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Qué aplicaciones de seguridad ofrece la domótica?",
    opciones: ["Vigilancia con cámaras, detección de intrusos, simulación de presencia cuando está vacía la vivienda", "Solo cámaras", "Solo alarmas", "Solo cerraduras"],
    correcta: 0,
    explicacion: "La domótica integra cámaras de vigilancia, sensores de intrusión, cerraduras inteligentes y sistemas que simulan presencia encendiendo luces aleatoriamente."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué es la iluminación inteligente en domótica?",
    opciones: ["Control automático de intensidad y color según luz natural, ocupación y horarios", "Solo encender y apagar", "Solo control de intensidad", "Solo cambio de color"],
    correcta: 0,
    explicacion: "La iluminación inteligente ajusta automáticamente brillo y temperatura de color, ahorrando energía y mejorando el confort visual."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Qué es una escena o perfil en domótica?",
    opciones: ["Conjunto predefinido de acciones que se ejecutan simultáneamente con un comando (ej: 'salir de casa')", "Un sensor", "Un tipo de red", "Un protocolo de comunicación"],
    correcta: 0,
    explicacion: "Una escena permite agrupar múltiples acciones (apagar luces, cerrar persianas, activar alarma) y ejecutarlas con un solo comando."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la diferencia entre domótica centralizada y distribuida?",
    opciones: ["Centralizada usa un controlador central; distribuida usa múltiples controladores independientes conectados en red", "No hay diferencia", "Distribuida es más antigua", "Centralizada es más lenta"],
    correcta: 0,
    explicacion: "En un sistema centralizado, un PLC controla todo. En distribuida, hay múltiples nodos inteligentes que se comunican entre sí."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Qué es Zigbee en domótica?",
    opciones: ["Protocolo inalámbrico de bajo consumo basado en IEEE 802.15.4 para redes de sensores", "Un tipo de cable", "Un receptor de TV", "Un panel de control"],
    correcta: 0,
    explicacion: "Zigbee es un estándar inalámbrico para comunicaciones de corta distancia con bajo consumo energético, ideal para redes de sensores domóticas."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función del módulo de interfaz o pasarela (gateway) en un sistema domótico?",
    opciones: ["Conectar el sistema domótico con internet y permitir control remoto desde smartphone o tablet", "Solo encender luces", "Solo detectar movimiento", "Solo calentar agua"],
    correcta: 0,
    explicacion: "El gateway es la interfaz que permite comunicar el sistema domótico local con servidores en internet para control remoto y acceso desde cualquier lugar."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Qué es la automatización de persianas inteligentes en domótica?",
    opciones: ["Control automático según luz natural, horarios y temperatura para optimizar climatización y privacidad", "Solo subir y bajar persianas", "Solo control manual", "Solo en invierno"],
    correcta: 0,
    explicacion: "Las persianas inteligentes se abren/cierran automáticamente según la hora, luz exterior y temperatura, optimizando ahorro energético y privacidad."
  }
];
