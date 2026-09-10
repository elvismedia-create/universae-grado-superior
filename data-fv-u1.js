// TEMA_FV_U1: Componentes de una instalación solar fotovoltaica (67 preguntas - IDs 11001-11067)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U1_DATA = [
  // ========== EXAMEN OFICIAL (10 preguntas) ==========
  {
    id: 11001,
    tema: 11,
    texto: "El elemento que se suele emplear para cortocircuitar una parte del módulo que esté dañado o en sombra y que no afecte al resto del panel es: (TEST OFICIAL)",
    opciones: [
      "Bastidor",
      "Caja de conexiones",
      "Encapsulante",
      "Diodos de paso o bypass"
    ],
    correctaTexto: "Diodos de paso o bypass",
    explicacion: "Los diodos de paso (bypass) permiten cortocircuitar una parte defectuosa o sombreada del panel sin afectar el resto de células, evitando sobrecalentamientos y pérdidas de rendimiento."
  },
  {
    id: 11002,
    tema: 11,
    texto: "El tipo de batería más empleado en instalaciones solares fotovoltaicas es: (TEST OFICIAL)",
    opciones: [
      "Ni-Cd",
      "Plomo-ácido",
      "Ni-Mh",
      "Ninguna es correcta"
    ],
    correctaTexto: "Plomo-ácido",
    explicacion: "Las baterías de plomo-ácido son las más comúnmente empleadas en instalaciones solares aisladas por su bajo costo, robustez y disponibilidad. Tienen una vida útil de 5-7 años con mantenimiento adecuado."
  },
  {
    id: 11003,
    tema: 11,
    texto: "El valor máximo de intensidad que puede circular por la célula en condiciones de corto es: (TEST OFICIAL)",
    opciones: [
      "Tensión a circuito abierto",
      "Corriente de oscuridad",
      "Corriente de cortocircuito",
      "Corriente de iluminación"
    ],
    correctaTexto: "Corriente de cortocircuito",
    explicacion: "La corriente de cortocircuito (Isc - Short Circuit Current) es el máximo valor de intensidad que puede circular en una célula solar cuando sus terminales están cortocircuitados. Es un parámetro fundamental de la célula."
  },
  {
    id: 11004,
    tema: 11,
    texto: "La instalación fotovoltaica conocida como 'huerto solar' es un tipo de instalación: (TEST OFICIAL)",
    opciones: [
      "Indirecta",
      "Aislada",
      "Aislada e indirecta",
      "Conectada a red"
    ],
    correctaTexto: "Conectada a red",
    explicacion: "Los huertos solares son grandes instalaciones fotovoltaicas conectadas a la red eléctrica que generan energía para inyectarla directamente en la red de distribución pública."
  },
  {
    id: 11005,
    tema: 11,
    texto: "Los inversores en instalaciones conectadas a red deben inyectar la corriente alterna (en España): (TEST OFICIAL)",
    opciones: [
      "En forma de onda senoidal a una tensión eficaz de 230 V y 50 Hz",
      "En forma de onda cuadrada a una tensión eficaz de 230 V y 50 Hz",
      "No es necesario contar con inversor en este tipo de instalaciones",
      "En cualquier forma de onda siempre que se suministre a 230 v y 50 Hz"
    ],
    correctaTexto: "En forma de onda senoidal a una tensión eficaz de 230 V y 50 Hz",
    explicacion: "La normativa española (UNE-EN 60038) establece que los inversores deben inyectar corriente alterna en forma de onda senoidal a 230 V ± 10% y 50 Hz ± 0.5 Hz para garantizar la compatibilidad con la red."
  },
  {
    id: 11006,
    tema: 11,
    texto: "Se conoce como método directo de aprovechamiento del sol para la producción de energía solar: (TEST OFICIAL)",
    opciones: [
      "Cuando la luz incide de manera directa en las células solares generando electricidad",
      "No se puede obtener energía eléctrica de forma directa a través del sol",
      "Calentando un fluido que se transforma en vapor generando energía eléctrica",
      "Solo puede obtenerse en instalaciones conectadas a red"
    ],
    correctaTexto: "Cuando la luz incide de manera directa en las células solares generando electricidad",
    explicacion: "El método directo de aprovechamiento solar es la conversión fotovoltaica, donde los fotones inciden directamente en las células generando electricidad mediante el efecto fotoeléctrico."
  },
  {
    id: 11007,
    tema: 11,
    texto: "Si se tienen 10 células conectadas en serie con una intensidad de 3 A cuál será la intensidad a la salida: (TEST OFICIAL)",
    opciones: [
      "3 A",
      "30 A",
      "1,5 A",
      "3,5 A"
    ],
    correctaTexto: "3 A",
    explicacion: "En una conexión en serie, la intensidad es la misma en todos los puntos del circuito. Por lo tanto, si cada célula recibe 3 A, la salida también será 3 A independientemente del número de células."
  },
  {
    id: 11008,
    tema: 11,
    texto: "Las células solares fotovoltaicas de las que están compuestos los módulos fotovoltaicos se encargan de: (TEST OFICIAL)",
    opciones: [
      "Transformar la energía de los fotones de la luz en electricidad",
      "Aprovechar la temperatura ambiente para generar electricidad",
      "Aprovechar la radiación solar para calentar un fluido caloportador",
      "Convertir la energía química en energía eléctrica"
    ],
    correctaTexto: "Transformar la energía de los fotones de la luz en electricidad",
    explicacion: "La función principal de las células fotovoltaicas es convertir la radiación solar (fotones) en energía eléctrica mediante el efecto fotoeléctrico en materiales semiconductores."
  },
  {
    id: 11009,
    tema: 11,
    texto: "¿Cuál es el elemento encargado de convertir la energía en corriente continua procedente de los módulos fotovoltaicos en energía en corriente alterna? (TEST OFICIAL)",
    opciones: [
      "Módulo Fotovoltaico",
      "Regulador",
      "Inversor",
      "Variador"
    ],
    correctaTexto: "Inversor",
    explicacion: "El inversor es el dispositivo que convierte la corriente continua (DC) generada por los paneles solares en corriente alterna (AC) compatible con la red eléctrica y los electrodomésticos."
  },
  {
    id: 11010,
    tema: 11,
    texto: "Se tiene una instalación fotovoltaica aislada en una vivienda unifamiliar que cuenta con un sistema de baterías que permite dotar de autonomía a la vivienda. ¿Qué elemento será necesario para controlar la carga de la batería? (TEST OFICIAL)",
    opciones: [
      "El inversor",
      "El regulador",
      "El controlador de respuesta",
      "Ninguna es correcta"
    ],
    correctaTexto: "El regulador",
    explicacion: "El regulador de carga (controlador MPPT o PWM) es el elemento esencial que controla la carga de las baterías, regulando la intensidad y tensión para evitar sobrecargas y prolongar la vida útil de las baterías."
  },

  // ========== PREGUNTAS COMPLEMENTARIAS (57 preguntas) ==========
  {
    id: 11011,
    tema: 11,
    texto: "¿Cuál es la principal ventaja de la energía solar fotovoltaica respecto a otras energías renovables?",
    opciones: [
      "Es más cara que otras fuentes",
      "No tiene partes móviles, requiere poco mantenimiento",
      "Solo funciona en días nublados",
      "Produce mucho ruido"
    ],
    correctaTexto: "No tiene partes móviles, requiere poco mantenimiento",
    explicacion: "La ausencia de partes móviles en los paneles fotovoltaicos hace que requieran muy poco mantenimiento, lo que es una gran ventaja frente a aerogeneradores u otras instalaciones con movimiento mecánico."
  },
  {
    id: 11012,
    tema: 11,
    texto: "¿Qué es el efecto fotoeléctrico?",
    opciones: [
      "La capacidad de un material de emitir luz",
      "La generación de corriente eléctrica cuando la luz incide sobre un material",
      "La absorción de luz por el material",
      "La reflexión de la luz en una superficie"
    ],
    correctaTexto: "La generación de corriente eléctrica cuando la luz incide sobre un material",
    explicacion: "El efecto fotoeléctrico es el fenómeno físico fundamental que permite que los fotones (luz) generen electrones libres en materiales semiconductores, creando así el flujo de corriente eléctrica."
  },
  {
    id: 11013,
    tema: 11,
    texto: "¿Cuál es la clasificación principal de las instalaciones solares fotovoltaicas?",
    opciones: [
      "Por el tipo de inversor",
      "Por su conexión a red y almacenamiento (conectadas a red, aisladas, híbridas)",
      "Por el color del panel",
      "Por el voltaje utilizado"
    ],
    correctaTexto: "Por su conexión a red y almacenamiento (conectadas a red, aisladas, híbridas)",
    explicacion: "Las instalaciones FV se clasifican en: conectadas a red (inyectan energía), aisladas (con baterías para autoconsumo sin red) e híbridas (combinan ambas características)."
  },
  {
    id: 11014,
    tema: 11,
    texto: "¿Qué es el autoconsumo en instalaciones solares fotovoltaicas?",
    opciones: [
      "Vender toda la energía a la red",
      "Consumir la energía generada por los paneles solares en el propio edificio",
      "Guardar energía en baterías indefinidamente",
      "Usar solo energía solar sin ninguna otra fuente"
    ],
    correctaTexto: "Consumir la energía generada por los paneles solares en el propio edificio",
    explicacion: "El autoconsumo es la utilización directa de la energía generada por la instalación fotovoltaica para satisfacer las necesidades energéticas del edificio donde está instalada."
  },
  {
    id: 11015,
    tema: 11,
    texto: "¿Cuáles son los tipos principales de células fotovoltaicas?",
    opciones: [
      "Solo células de silicio monocristalino",
      "Monocristalinas, policristalinas y amorfas",
      "Células de cobre y zinc",
      "Células de oro y plata"
    ],
    correctaTexto: "Monocristalinas, policristalinas y amorfas",
    explicacion: "Los tres tipos principales son: monocristalinas (~20% eficiencia), policristalinas (~15% eficiencia) y células amorfas (~10% eficiencia). Cada una tiene diferentes aplicaciones y rendimientos."
  },
  {
    id: 11016,
    tema: 11,
    texto: "¿Qué representa la eficiencia de una célula solar?",
    opciones: [
      "La durabilidad de la célula",
      "El porcentaje de radiación solar convertido en energía eléctrica",
      "El voltaje máximo que puede producir",
      "El color que emite la célula"
    ],
    correctaTexto: "El porcentaje de radiación solar convertido en energía eléctrica",
    explicacion: "La eficiencia es la relación entre la potencia eléctrica generada y la potencia solar incidente sobre la célula. Una eficiencia del 20% significa que convierte el 20% de la radiación solar en electricidad."
  },
  {
    id: 11017,
    tema: 11,
    texto: "¿Qué es Vmp en las características de un panel solar?",
    opciones: [
      "Voltaje máximo posible",
      "Tensión de Máxima Potencia",
      "Voltaje mínimo de protección",
      "Variación de potencia mensual"
    ],
    correctaTexto: "Tensión de Máxima Potencia",
    explicacion: "Vmp (Voltage Maximum Power) es la tensión a la que el panel genera su máxima potencia bajo condiciones estándar. Es un parámetro crítico para el diseño del inversor y reguladores."
  },
  {
    id: 11018,
    tema: 11,
    texto: "¿Qué es Imp en las características de un panel solar?",
    opciones: [
      "Intensidad máxima posible",
      "Corriente en Máxima Potencia",
      "Intensidad mínima de protección",
      "Impedancia del módulo"
    ],
    correctaTexto: "Corriente en Máxima Potencia",
    explicacion: "Imp (Current at Maximum Power) es la intensidad a la que el panel genera su máxima potencia. Junto con Vmp define el punto de operación óptimo (MPP) del panel."
  },
  {
    id: 11019,
    tema: 11,
    texto: "¿Qué es Voc en un panel solar?",
    opciones: [
      "Voltaje Óptico Comercial",
      "Tensión a Circuito Abierto",
      "Voltaje Operacional Controlado",
      "Variación de corriente operativa"
    ],
    correctaTexto: "Tensión a Circuito Abierto",
    explicacion: "Voc (Voltage Open Circuit) es la máxima tensión que un panel puede generar cuando sus terminales no están conectados (circuito abierto). Es mayor que Vmp."
  },
  {
    id: 11020,
    tema: 11,
    texto: "¿Qué es Isc en un panel solar?",
    opciones: [
      "Intensidad de Seguridad Certificada",
      "Corriente a Circuito Cerrado",
      "Corriente de Cortocircuito",
      "Intensidad Sensible Controlada"
    ],
    correctaTexto: "Corriente de Cortocircuito",
    explicacion: "Isc (Current Short Circuit) es la máxima intensidad que un panel puede generar cuando sus terminales están cortocircuitados. Es mayor que Imp y define la capacidad de corriente del panel."
  },
  {
    id: 11021,
    tema: 11,
    texto: "¿Qué es el Factor de Forma (FF) en un panel solar?",
    opciones: [
      "La forma física del panel",
      "Relación entre potencia máxima y potencia teórica",
      "El factor de seguridad",
      "La frecuencia de resonancia"
    ],
    correctaTexto: "Relación entre potencia máxima y potencia teórica",
    explicacion: "El Factor de Forma (Fill Factor) expresa qué tan cuadrada es la curva I-V del panel. Un FF alto (~0.8-0.85) indica un panel de buena calidad con mínimas pérdidas internas."
  },
  {
    id: 11022,
    tema: 11,
    texto: "¿Qué es el Punto de Máxima Potencia (MPP)?",
    opciones: [
      "El voltaje máximo del panel",
      "La corriente máxima del panel",
      "El punto donde potencia = voltaje × corriente es máxima",
      "El punto de funcionamiento a oscuridad"
    ],
    correctaTexto: "El punto donde potencia = voltaje × corriente es máxima",
    explicacion: "El MPP (Maximum Power Point) es el punto de operación donde el panel genera su máxima potencia, ubicado entre los puntos de circuito abierto (Voc, 0A) y cortocircuito (0V, Isc)."
  },
  {
    id: 11023,
    tema: 11,
    texto: "¿Cuál es la diferencia entre reguladores MPPT y PWM?",
    opciones: [
      "No hay diferencia",
      "MPPT es más eficiente (30% más) al seguir el MPP; PWM es más simple y económico",
      "PWM es más eficiente que MPPT",
      "MPPT solo funciona con baterías"
    ],
    correctaTexto: "MPPT es más eficiente (30% más) al seguir el MPP; PWM es más simple y económico",
    explicacion: "Los reguladores MPPT (Maximum Power Point Tracking) siguen constantemente el punto de máxima potencia obteniendo mayor rendimiento (~20-30% más). PWM (Pulse Width Modulation) es más simple pero menos eficiente."
  },
  {
    id: 11024,
    tema: 11,
    texto: "¿Qué eficiencia típica tienen los reguladores MPPT?",
    opciones: [
      "50-60%",
      "70-80%",
      "90-99%",
      "Más del 100%"
    ],
    correctaTexto: "90-99%",
    explicacion: "Los reguladores MPPT de buena calidad tienen eficiencias del 95-99%, con algunas pérdidas mínimas por conversión. Son más eficientes que los PWM (75-90%)."
  },
  {
    id: 11025,
    tema: 11,
    texto: "¿Qué es un inversor en una instalación fotovoltaica?",
    opciones: [
      "Un dispositivo que invierte el flujo de corriente",
      "Un convertidor de corriente continua a corriente alterna",
      "Un regulador de voltaje",
      "Una batería de respaldo"
    ],
    correctaTexto: "Un convertidor de corriente continua a corriente alterna",
    explicacion: "El inversor transforma la corriente continua (DC) de los paneles en corriente alterna (AC) de 230V/50Hz compatible con la red y los electrodomésticos convencionales."
  },
  {
    id: 11026,
    tema: 11,
    texto: "¿Cuál es la eficiencia típica de los inversores fotovoltaicos?",
    opciones: [
      "50-60%",
      "70-80%",
      "90-98%",
      "Menos del 50%"
    ],
    correctaTexto: "90-98%",
    explicacion: "Los inversores modernos tienen eficiencias del 90-98%, con inversores de buena calidad alcanzando el 95-98%. Esto significa mínimas pérdidas en la conversión DC/AC."
  },
  {
    id: 11027,
    tema: 11,
    texto: "¿Cuáles son los tipos de inversores según su forma de onda?",
    opciones: [
      "Solo onda senoidal",
      "Onda cuadrada, modificada y senoidal",
      "Onda triangular y cuadrada",
      "Solo onda triangular"
    ],
    correctaTexto: "Onda cuadrada, modificada y senoidal",
    explicacion: "Los inversores se clasifican en: onda cuadrada (básicos, bajo costo), onda modificada (intermedio), y onda senoidal pura (mejor calidad, compatible con todo)."
  },
  {
    id: 11028,
    tema: 11,
    texto: "¿Qué es una batería en una instalación solar aislada?",
    opciones: [
      "Un dispositivo que genera electricidad",
      "Un acumulador que almacena energía eléctrica para uso posterior",
      "Un inversor de corriente",
      "Un regulador de voltaje"
    ],
    correctaTexto: "Un acumulador que almacena energía eléctrica para uso posterior",
    explicacion: "Las baterías almacenan la energía generada durante el día para usarla en la noche o días nublados, proporcionando autonomía a las instalaciones aisladas."
  },
  {
    id: 11029,
    tema: 11,
    texto: "¿Qué representa la capacidad de una batería en Ah (Amperios-hora)?",
    opciones: [
      "La tensión máxima",
      "La cantidad de energía que puede almacenar",
      "El tiempo de carga",
      "La potencia máxima"
    ],
    correctaTexto: "La cantidad de energía que puede almacenar",
    explicacion: "La capacidad en Ah es la carga total que puede almacenar una batería. Por ejemplo, una batería de 100Ah puede suministrar 100A durante 1 hora, o 10A durante 10 horas."
  },
  {
    id: 11030,
    tema: 11,
    texto: "¿Qué es la Profundidad de Descarga (DoD) en una batería?",
    opciones: [
      "La profundidad física de la batería",
      "El porcentaje de capacidad que se puede usar sin dañar la batería",
      "La velocidad de descarga",
      "La temperatura máxima"
    ],
    correctaTexto: "El porcentaje de capacidad que se puede usar sin dañar la batería",
    explicacion: "La DoD (Depth of Discharge) indica el porcentaje máximo recomendado de descarga. Baterías plomo-ácido: 50-80% DoD; Baterías Li: 80-100% DoD."
  },
  {
    id: 11031,
    tema: 11,
    texto: "¿Cuál es la lifespan típica de una batería plomo-ácido?",
    opciones: [
      "1-2 años",
      "3-4 años",
      "5-7 años",
      "15-20 años"
    ],
    correctaTexto: "5-7 años",
    explicacion: "Las baterías plomo-ácido tradicionales tienen una vida útil de 5-7 años con mantenimiento apropiado. Las baterías de litio duran 10-20 años pero son más caras."
  },
  {
    id: 11032,
    tema: 11,
    texto: "¿Qué tipos de baterías son adecuadas para instalaciones fotovoltaicas?",
    opciones: [
      "Solo baterías de automoción",
      "Plomo-ácido, níquel-cadmio, litio",
      "Solo baterías alcalinas",
      "Cualquier batería de bajo costo"
    ],
    correctaTexto: "Plomo-ácido, níquel-cadmio, litio",
    explicacion: "Las baterías para FV deben soportar ciclos profundos. Las plomo-ácido son las más comunes por costo; níquel-cadmio por robustez; y litio por rendimiento (aunque más caras)."
  },
  {
    id: 11033,
    tema: 11,
    texto: "¿Cuál es la función principal del sistema de montaje en una instalación solar?",
    opciones: [
      "Decorar los paneles",
      "Sujetar firmemente los paneles y optimizar su orientación al sol",
      "Almacenar energía",
      "Convertir DC a AC"
    ],
    correctaTexto: "Sujetar firmemente los paneles y optimizar su orientación al sol",
    explicacion: "El sistema de montaje proporciona la estructura de sujeción y permite ajustar la orientación (azimut) y la inclinación (elevación) de los paneles para máximo rendimiento."
  },
  {
    id: 11034,
    tema: 11,
    texto: "¿Cuál es la orientación óptima para paneles solares en el hemisferio norte?",
    opciones: [
      "Hacia el norte",
      "Hacia el sur",
      "Hacia el este",
      "Hacia el oeste"
    ],
    correctaTexto: "Hacia el sur",
    explicacion: "En el hemisferio norte, la orientación óptima es hacia el sur (azimut 180°) para maximizar la radiación solar incidente a lo largo del día."
  },
  {
    id: 11035,
    tema: 11,
    texto: "¿Cuál es el ángulo de inclinación óptimo de los paneles solares?",
    opciones: [
      "0° (paneles horizontales)",
      "Aproximadamente igual a la latitud del lugar",
      "90° (paneles verticales)",
      "Siempre 45°"
    ],
    correctaTexto: "Aproximadamente igual a la latitud del lugar",
    explicacion: "Para máxima captación anual, el ángulo de inclinación debe ser aproximadamente igual a la latitud geográfica. Por ejemplo, a 40° latitud norte, 40° de inclinación es óptimo."
  },
  {
    id: 11036,
    tema: 11,
    texto: "¿Qué es la irradiancia solar?",
    opciones: [
      "La radiación infrarroja",
      "La potencia de radiación solar por unidad de área (W/m²)",
      "La temperatura del sol",
      "La velocidad de la luz solar"
    ],
    correctaTexto: "La potencia de radiación solar por unidad de área (W/m²)",
    explicacion: "La irradiancia es la potencia solar incidente por unidad de superficie, medida en W/m². Los paneles se especifican a 1000 W/m² (Condiciones Estándar de Prueba)."
  },
  {
    id: 11037,
    tema: 11,
    texto: "¿Qué efecto tiene la temperatura en la potencia de un panel solar?",
    opciones: [
      "Aumenta la potencia con la temperatura",
      "La potencia disminuye (~0.4-0.5% por °C de aumento)",
      "La temperatura no afecta",
      "Solo afecta en paneles antiguos"
    ],
    correctaTexto: "La potencia disminuye (~0.4-0.5% por °C de aumento)",
    explicacion: "Los paneles tienen un coeficiente térmico negativo: por cada grado Celsius de aumento de temperatura, la potencia disminuye ~0.4-0.5%. Un panel a 70°C produce ~13% menos que a 25°C."
  },
  {
    id: 11038,
    tema: 11,
    texto: "¿Cuál es el cableado adecuado para conexiones en instalaciones solares?",
    opciones: [
      "Cableado de construcción convencional",
      "Cableado especial PV-rated resistente a UV y temperaturas extremas",
      "Cableado de telefónica",
      "Cableado de aluminio"
    ],
    correctaTexto: "Cableado especial PV-rated resistente a UV y temperaturas extremas",
    explicacion: "El cableado debe ser PV-rated (específico para fotovoltaica) con aislamiento resistente a UV, temperaturas (hasta 90°C) y con sección adecuada para minimizar pérdidas."
  },
  {
    id: 11039,
    tema: 11,
    texto: "¿Cuál es el conector estándar más usado en paneles solares?",
    opciones: [
      "Conector USB",
      "Conector MC4 (Multi-Contact 4mm)",
      "Conector RJ45",
      "Conector Jack"
    ],
    correctaTexto: "Conector MC4 (Multi-Contact 4mm)",
    explicacion: "El conector MC4 es el estándar de la industria fotovoltaica. Soporta hasta 30A en instalaciones residenciales, es resistente a intemperie y garantiza buen contacto."
  },
  {
    id: 11040,
    tema: 11,
    texto: "¿Cuál es la función de los fusibles en una instalación solar?",
    opciones: [
      "Embellecer la instalación",
      "Proteger cables y equipos contra sobrecorrientes",
      "Generar energía adicional",
      "Regular la temperatura"
    ],
    correctaTexto: "Proteger cables y equipos contra sobrecorrientes",
    explicacion: "Los fusibles protegen la instalación contra cortocircuitos y sobrecorrientes. Se dimensionan con un factor de seguridad de 1.25-1.5 sobre la Isc del panel."
  },
  {
    id: 11041,
    tema: 11,
    texto: "¿Qué es un interruptor-desconectador en una instalación solar?",
    opciones: [
      "Un componente decorativo",
      "Un dispositivo que permite desconectar rápidamente la instalación para mantenimiento",
      "Un regulador de tensión",
      "Una batería de respaldo"
    ],
    correctaTexto: "Un dispositivo que permite desconectar rápidamente la instalación para mantenimiento",
    explicacion: "Los desconectadores permiten aislar partes de la instalación para trabajos de mantenimiento con seguridad, siendo obligatorios en normativa de seguridad eléctrica."
  },
  {
    id: 11042,
    tema: 11,
    texto: "¿Cuál es el propósito de un inversor de aislamiento galvánico?",
    opciones: [
      "Aumentar la tensión",
      "Separar galvánicamente la entrada (DC) de la salida (AC) por seguridad",
      "Reducir la corriente",
      "Calentar la batería"
    ],
    correctaTexto: "Separar galvánicamente la entrada (DC) de la salida (AC) por seguridad",
    explicacion: "El aislamiento galvánico previene conexiones directas entre los circuitos DC y AC, mejorando la seguridad y evitando fugas de corriente peligrosas."
  },
  {
    id: 11043,
    tema: 11,
    texto: "¿Qué es la autodescarga en una batería?",
    opciones: [
      "Cuando se carga demasiado",
      "La pérdida gradual de carga sin carga conectada",
      "Cuando hay un cortocircuito",
      "Cuando hace mucho calor"
    ],
    correctaTexto: "La pérdida gradual de carga sin carga conectada",
    explicacion: "La autodescarga es la pérdida de carga que experimenta una batería incluso sin consumo externo. Las baterías de litio tienen baja autodescarga (~2-3% anual); plomo-ácido mayor (~10-15% anual)."
  },
  {
    id: 11044,
    tema: 11,
    texto: "¿Cuál es la capacidad de carga de un panel solar de 400W en condiciones estándar?",
    opciones: [
      "100W",
      "200W",
      "400W",
      "800W"
    ],
    correctaTexto: "400W",
    explicacion: "A 1000 W/m² (Condiciones Estándar de Prueba), un panel de 400Wp genera exactamente 400W. En condiciones reales (irradiancia menor), genera menos potencia."
  },
  {
    id: 11045,
    tema: 11,
    texto: "¿Qué significa el sufijo 'p' en 'Wp' (vatios pico)?",
    opciones: [
      "Potencia promedio",
      "Potencia en condiciones de pico (1000 W/m², 25°C)",
      "Potencia de prueba",
      "Potencia de punta máxima"
    ],
    correctaTexto: "Potencia en condiciones de pico (1000 W/m², 25°C)",
    explicacion: "Wp (vatios pico) es la potencia nominal del panel en Condiciones Estándar de Prueba: 1000 W/m² de irradiancia y 25°C de temperatura de célula."
  },
  {
    id: 11046,
    tema: 11,
    texto: "¿Cuál es la vida útil típica de un panel solar?",
    opciones: [
      "5 años",
      "10 años",
      "25-30 años",
      "2 años"
    ],
    correctaTexto: "25-30 años",
    explicacion: "Los paneles solares modernos tienen una vida útil de 25-30 años, con garantías de 25 años manteniendo al menos el 80% de su potencia inicial."
  },
  {
    id: 11047,
    tema: 11,
    texto: "¿Qué es la degradación de un panel solar?",
    opciones: [
      "Cuando el panel se rompe",
      "La pérdida gradual de potencia (~0.5-0.8% anual)",
      "Cuando deja de generar energía",
      "Un defecto de fabricación"
    ],
    correctaTexto: "La pérdida gradual de potencia (~0.5-0.8% anual)",
    explicacion: "La degradación es la pérdida normal de eficiencia a lo largo del tiempo, típicamente del 0.5-0.8% anual por efectos de UV y factores ambientales. Después de 25 años, un panel mantiene ~80% de su potencia."
  },
  {
    id: 11048,
    tema: 11,
    texto: "¿Cuál es la función principal de un descargador de sobretensiones (SPD)?",
    opciones: [
      "Aumentar la tensión",
      "Proteger contra picos de tensión por rayos o conmutaciones",
      "Reducir la corriente",
      "Almacenar energía"
    ],
    correctaTexto: "Proteger contra picos de tensión por rayos o conmutaciones",
    explicacion: "Los descargadores de sobretensiones (surge protectors) protegen los equipos contra sobretensiones transitorias causadas por rayos, maniobras de red o cargas inductivas."
  },
  {
    id: 11049,
    tema: 11,
    texto: "¿Qué es un acumulador de inercia térmica en instalaciones solares?",
    opciones: [
      "Un panel extra",
      "Un depósito de agua que acumula calor para suavizar variaciones de temperatura",
      "Una batería de litio",
      "Un inversor"
    ],
    correctaTexto: "Un depósito de agua que acumula calor para suavizar variaciones de temperatura",
    explicacion: "En sistemas híbridos, los acumuladores térmicos de agua (boiler) almacenan el exceso de energía solar térmica para uso posterior, mejorando la autonomía del sistema."
  },
  {
    id: 11050,
    tema: 11,
    texto: "¿Cuál es el factor de capacidad típico de una instalación solar fotovoltaica?",
    opciones: [
      "90-100%",
      "15-25%",
      "50-60%",
      "5-10%"
    ],
    correctaTexto: "15-25%",
    explicacion: "El factor de capacidad es la razón entre la energía generada real y la teórica máxima. Para FV es típicamente 15-25% (varía con latitud, clima y radiación local)."
  },
  {
    id: 11051,
    tema: 11,
    texto: "¿Qué es el valor kWh/kWp?",
    opciones: [
      "El tiempo de carga de batería",
      "La energía anual generada por cada kW instalado",
      "La tensión máxima",
      "La corriente de cortocircuito"
    ],
    correctaTexto: "La energía anual generada por cada kW instalado",
    explicacion: "kWh/kWp indica la productividad específica del sistema. Una instalación en el sur de España genera ~1.400 kWh/kWp/año; en el norte ~1.100 kWh/kWp/año."
  },
  {
    id: 11052,
    tema: 11,
    texto: "¿Cuál es la tensión estándar en instalaciones monofásicas conectadas a red?",
    opciones: [
      "110V",
      "230V",
      "400V",
      "600V"
    ],
    correctaTexto: "230V",
    explicacion: "La tensión estándar monofásica en España (según UNE 50160) es 230V ± 10% con frecuencia 50Hz ± 0.5Hz para alimentación de viviendas residenciales."
  },
  {
    id: 11053,
    tema: 11,
    texto: "¿Cuál es la tensión estándar en instalaciones trifásicas conectadas a red?",
    opciones: [
      "230V entre fases",
      "400V entre fases",
      "110V entre fases",
      "600V entre fases"
    ],
    correctaTexto: "400V entre fases",
    explicacion: "La tensión estándar trifásica en España es 400V ± 10% entre fases (230V entre fase y neutro) con frecuencia 50Hz ± 0.5Hz para instalaciones industriales y comerciales."
  },
  {
    id: 11054,
    tema: 11,
    texto: "¿Qué es la compensación de energía reactiva en instalaciones solares?",
    opciones: [
      "Vender energía a mayor precio",
      "Usar condensadores para compensar la potencia reactiva inductiva",
      "Cargar las baterías rápidamente",
      "Reducir el voltaje"
    ],
    correctaTexto: "Usar condensadores para compensar la potencia reactiva inductiva",
    explicacion: "La compensación de reactiva mejora el factor de potencia (cosφ) del sistema, reduciendo penalizaciones de la compañía eléctrica y mejorando la eficiencia de transmisión."
  },
  {
    id: 11055,
    tema: 11,
    texto: "¿Cuál es el factor de potencia (cosφ) recomendado en instalaciones fotovoltaicas conectadas a red?",
    opciones: [
      "0.5",
      "0.8",
      "0.95-1.0",
      "1.5"
    ],
    correctaTexto: "0.95-1.0",
    explicacion: "Las normativas requieren un factor de potencia mínimo de 0.95 (capacitivo o inductivo) en instalaciones fotovoltaicas conectadas a red para optimizar la transmisión."
  },
  {
    id: 11056,
    tema: 11,
    texto: "¿Qué es el balance neto (net metering) en instalaciones solares?",
    opciones: [
      "El pago fijo por energía",
      "La compensación de energía excedente inyectada en la red",
      "El costo de mantenimiento",
      "La garantía del panel"
    ],
    correctaTexto: "La compensación de energía excedente inyectada en la red",
    explicacion: "El balance neto permite que el propietario compense el consumo nocturno/nublado con la energía excedente inyectada durante el día, reduciendo la factura eléctrica."
  },
  {
    id: 11057,
    tema: 11,
    texto: "¿Cuál es la distancia mínima de seguridad respecto a tuberías de agua en la instalación?",
    opciones: [
      "0.1 m",
      "0.3 m",
      "1 m",
      "No hay restricción"
    ],
    correctaTexto: "1 m",
    explicacion: "Por normativa de seguridad, debe mantenerse una distancia mínima de 1 metro entre conductores activos e instalaciones de agua, gas u otros servicios."
  },
  {
    id: 11058,
    tema: 11,
    texto: "¿Qué certificación debe tener un instalador profesional de sistemas fotovoltaicos?",
    opciones: [
      "Solo experiencia práctica",
      "Certificado de curso básico",
      "Certificado profesional específico en instalaciones fotovoltaicas",
      "Ninguna certificación es necesaria"
    ],
    correctaTexto: "Certificado profesional específico en instalaciones fotovoltaicas",
    explicacion: "Para realizar instalaciones profesionales, se requiere certificación específica en sistemas fotovoltaicos, validada por organismos competentes como AENOR o equivalentes."
  },
  {
    id: 11059,
    tema: 11,
    texto: "¿Cuál es el documento de responsabilidad civil que debe firmar el propietario?",
    opciones: [
      "Garantía de 1 año",
      "Certificado de puesta en marcha y declaración de responsabilidad",
      "Factura de compra",
      "Manual del usuario"
    ],
    correctaTexto: "Certificado de puesta en marcha y declaración de responsabilidad",
    explicacion: "El instalador debe proporcionar un certificado de puesta en marcha con pruebas de funcionamiento y una declaración de responsabilidad civil profesional."
  },
  {
    id: 11060,
    tema: 11,
    texto: "¿Cuál es la potencia mínima para una instalación de autoconsumo en vivienda unifamiliar?",
    opciones: [
      "0.1 kW",
      "1-2 kW",
      "5-10 kW",
      "20-30 kW"
    ],
    correctaTexto: "1-2 kW",
    explicacion: "Para viviendas unifamiliares, típicamente se instalan sistemas de 1-5 kW de potencia peak, siendo 1-2 kW una instalación pequeña básica."
  },
  {
    id: 11061,
    tema: 11,
    texto: "¿Cuántos paneles de 400W aproximadamente se necesitan para una instalación de 5 kW?",
    opciones: [
      "5 paneles",
      "10 paneles",
      "13-14 paneles",
      "30 paneles"
    ],
    correctaTexto: "13-14 paneles",
    explicacion: "Para 5 kW con paneles de 400Wp se necesitan: 5000W ÷ 400W = 12.5, redondeando a 13-14 paneles con pequeño sobredimensionamiento."
  },
  {
    id: 11062,
    tema: 11,
    texto: "¿Cuál es el tiempo típico de amortización de una instalación solar residencial?",
    opciones: [
      "1-2 años",
      "5-7 años",
      "15-20 años",
      "30+ años"
    ],
    correctaTexto: "5-7 años",
    explicacion: "El tiempo medio de amortización es 5-7 años (ROI), variando según región, radiación solar local, precio de electricidad y ayudas disponibles. Luego genera ahorro puro."
  },
  {
    id: 11063,
    tema: 11,
    texto: "¿Qué mantenimiento preventivo requiere un panel solar?",
    opciones: [
      "Limpieza diaria",
      "Limpieza 2-3 veces al año y revisión anual",
      "Cambio de piezas cada 5 años",
      "No requiere mantenimiento"
    ],
    correctaTexto: "Limpieza 2-3 veces al año y revisión anual",
    explicacion: "El mantenimiento básico incluye limpieza suave (agua y trapo) 2-3 veces anualmente, revisión de conexiones y validación de funcionamiento anualmente."
  },
  {
    id: 11064,
    tema: 11,
    texto: "¿Cuál es la mejor época del año para limpiar paneles solares?",
    opciones: [
      "Verano",
      "Otoño e invierno cuando hay más suciedad",
      "Primavera y otoño",
      "No importa la época"
    ],
    correctaTexto: "Primavera y otoño",
    explicacion: "Se recomienda limpiar en primavera (polvo invernal) y otoño (polen y hojas). Evitar temperaturas extremas que causen choques térmicos en el vidrio."
  },
  {
    id: 11065,
    tema: 11,
    texto: "¿Qué medida de seguridad es obligatoria en instalaciones de más de 10 kW?",
    opciones: [
      "Solo un fusible",
      "Aparamenta de seguridad, magnetotérmicos, diferenciales e interruptores de fugas a tierra (RCD)",
      "Un inversor simple",
      "No se requieren medidas especiales"
    ],
    correctaTexto: "Aparamenta de seguridad, magnetotérmicos, diferenciales e interruptores de fugas a tierra (RCD)",
    explicacion: "Las instalaciones > 10 kW requieren protecciones completas: magnetotérmicos, interruptores diferenciales sensibles (30mA), protección contra cortocircuitos y sobrecargas."
  },
  {
    id: 11066,
    tema: 11,
    texto: "¿Cuál es la última normativa europea que regula sistemas fotovoltaicos conectados a red?",
    opciones: [
      "EN 50160",
      "UNE 206005 y EN 50530",
      "DIN 48001",
      "ISO 9001"
    ],
    correctaTexto: "UNE 206005 y EN 50530",
    explicacion: "En España, la UNE 206005 y EN 50530 regulan los requisitos de seguridad, interconexión y eficiencia de inversores fotovoltaicos conectados a red."
  },
  {
    id: 11067,
    tema: 11,
    texto: "¿Cuál es el ROI esperado (retorno de inversión) en una instalación solar residencial bien diseñada?",
    opciones: [
      "Nunca se recupera la inversión",
      "Solo 2-3% anual",
      "8-15% anual en los primeros años",
      "Menos del 1% anual"
    ],
    correctaTexto: "8-15% anual en los primeros años",
    explicacion: "Una instalación bien diseñada puede generar retornos del 8-15% anual inicialmente (según ahorros en factura eléctrica), mejorando conforme baja el precio de la electricidad."
  }
];
