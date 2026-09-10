// EXAMEN SEMESTRAL: Instalaciones Eléctricas Interiores - 40 PREGUNTAS REALES (Usuario 90% Score)
const EXAMEN_SEMESTRAL_INSTALACIONES_DATA = [
  {
    id: 1,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "¿Cuál de las siguientes operaciones de mantenimiento NO corresponden al mantenimiento preventivo?",
    opciones: ["Comprobar la tensión de la red de alimentación", "Identificar las canalizaciones y sustituirla o repararla", "Comprobar el reglaje de los dispositivos de protección", "Revisar el apriete de toda la tornillería"],
    correctaTexto: "Identificar las canalizaciones y sustituirla o repararla",
    explicacion: "El mantenimiento preventivo es el que se realiza antes de que aparezca una avería. Identificar y sustituir canalizaciones dañadas es una tarea de mantenimiento correctivo."
  },
  {
    id: 2,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "A la hora del cálculo de secciones no se tiene en cuenta:",
    opciones: ["La caída de tensión que se produce en la línea.", "La capacidad térmica del conductor.", "La intensidad que circula por la línea.", "La parte del país donde se quiere hacer la instalación."],
    correctaTexto: "La parte del país donde se quiere hacer la instalación.",
    explicacion: "En el cálculo de secciones se considera: caída de tensión, capacidad térmica e intensidad. La ubicación geográfica no es un parámetro de cálculo."
  },
  {
    id: 3,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Con respecto a la resistividad:",
    opciones: ["El cobre es el material con menor resistividad.", "El cobre tiene menor resistividad que el aluminio, pero es más caro.", "El aluminio tiene menor resistividad que el cobre.", "Cuanto mayor sea, mejor conductor es."],
    correctaTexto: "El cobre tiene menor resistividad que el aluminio, pero es más caro.",
    explicacion: "El cobre tiene mejor conductividad que el aluminio, pero su mayor costo lo hace menos económico."
  },
  {
    id: 4,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Cuando el síntoma de una avería es el disparo del magnetotérmico de un circuito:",
    opciones: ["Se trata de una sobrecarga o cortocircuito", "Se trata de que falsean sus conexiones o no está protegida su intensidad nominal", "Es un contacto directo o indirecto", "Ninguna de las anteriores es correcta"],
    correctaTexto: "Se trata de una sobrecarga o cortocircuito",
    explicacion: "El magnetotérmico dispara ante sobrecargas o cortocircuitos. El diferencial protege contactos directos e indirectos."
  },
  {
    id: 5,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Cuando un diferencial se quema o sobrecalienta se han de aplicar medidas de:",
    opciones: ["Emergencia", "Mantenimiento correctivo", "Mantenimiento predictivo", "Mantenimiento preventivo"],
    correctaTexto: "Mantenimiento correctivo",
    explicacion: "Cuando un dispositivo está dañado, se requiere mantenimiento correctivo para repararlo o reemplazarlo."
  },
  {
    id: 6,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "El circuito 2 de una electrificación básica:",
    opciones: ["Alimenta la instalación.", "Alimenta el horno.", "Alimenta las tomas de corriente de uso general.", "Alimenta la corriente de los aseos."],
    correctaTexto: "Alimenta las tomas de corriente de uso general.",
    explicacion: "En electrificación básica, el circuito 2 está dedicado a las tomas de corriente de uso general."
  },
  {
    id: 7,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Un aspecto a tener en cuenta a la hora de instalar un cuadro de distribución es",
    opciones: ["Ambiente en el que se encuentra", "La previsibilidad de que se alojen bases de corriente en él", "Tener en cuenta el grado de protección IP-IK requerido", "Todas las anteriores son correctas"],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "Todos estos aspectos son cruciales para correcta instalación del cuadro de distribución."
  },
  {
    id: 8,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "El primer elemento que se encuentra en un cuadro de mando y protección de la siguiente lista es:",
    opciones: ["Interruptor general automático", "Interruptor diferencial", "Protector de cortocircuito", "Interruptores automáticos"],
    correctaTexto: "Interruptor general automático",
    explicacion: "El interruptor general automático es el primer elemento de protección en la entrada del cuadro."
  },
  {
    id: 9,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "El REBT se encarga de:",
    opciones: ["Establecer los puntos mínimos que debemos encontrar en una vivienda.", "Indicar la función del circuito eléctrico.", "Establecer los puntos máximos que debemos encontrar en una vivienda.", "No tiene por qué coincidir con la sección real del conductor del circuito."],
    correctaTexto: "Establecer los puntos mínimos que debemos encontrar en una vivienda.",
    explicacion: "El REBT establece los requisitos mínimos para instalaciones seguras."
  },
  {
    id: 10,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "El siguiente dispositivo es un:",
    imagen: "img/transformador.png",
    opciones: ["Distribuidor", "Separador", "Transformador", "Modificador"],
    correctaTexto: "Transformador",
    explicacion: "Un transformador transforma la tensión y corriente de una instalación eléctrica."
  },
  {
    id: 11,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "El siguiente empalme es:",
    imagen: "img/empalme western.png",
    opciones: ["Empalme Western", "Empalme Duplex", "Empalme tipo T", "Empalme trenzado o cola de rata"],
    correctaTexto: "Empalme Western",
    explicacion: "El empalme Western es un tipo de empalme utilizado en instalaciones eléctricas."
  },
  {
    id: 12,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "El siguiente símbolo hace referencia a:",
    imagen: "img/conmutador.png",
    opciones: ["Interruptor", "Conmutador", "Punto de luz", "Pulsador"],
    correctaTexto: "Conmutador",
    explicacion: "El símbolo representa un conmutador que controla un circuito desde dos puntos."
  },
  {
    id: 13,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "En caso de que el aislamiento del cable de fase y el cable de tierra se haya deteriorado y ambos conductores de cobre se encuentren en contacto, al medir la resistencia de aislamiento que valor deberíamos obtener:",
    opciones: ["Un alto valor de resistencia de aislamiento entre conductores", "Un bajo valor de resistencia de aislamiento entre conductores", "No habrá diferencia de resistencia entre el estado con aislamiento deteriorado y estado normal", "Ninguna es correcta"],
    correctaTexto: "Un bajo valor de resistencia de aislamiento entre conductores",
    explicacion: "Cuando hay contacto directo entre conductores, la resistencia es muy baja o casi nula."
  },
  {
    id: 14,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "En cuanto a la sección de un conductor:",
    opciones: ["Los fabricantes suelen elaborar las secciones conforme quieren los clientes.", "Cuanto mayor es la sección, mayor es la intensidad que soporta.", "El tipo de aislamiento no varía la intensidad que soporta.", "Todas las anteriores son correctas."],
    correctaTexto: "Cuanto mayor es la sección, mayor es la intensidad que soporta.",
    explicacion: "A mayor sección, mayor intensidad puede soportar sin sobrecalentarse."
  },
  {
    id: 15,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "En cuanto a los controles automáticos es cierto que:",
    opciones: ["Están formados por un único piloto automático", "Están formados por un arrancador electromagnético o contactor", "Miden los valores de temperatura y luz", "Controlan el funcionamiento de dispositivos eléctricos de forma automática"],
    correctaTexto: "Están formados por un arrancador electromagnético o contactor",
    explicacion: "Los controles automáticos utilizan contactores para automatizar dispositivos."
  },
  {
    id: 16,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "En la imagen se muestra:",
    imagen: "img/telerruptor.png",
    opciones: ["Interruptor de control de potencia", "Telerruptor", "Timbre", "Zumbador"],
    correctaTexto: "Telerruptor",
    explicacion: "El telerruptor permite controlar circuitos desde múltiples puntos."
  },
  {
    id: 17,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "En relación al alumbrado de emergencia es cierto que:",
    opciones: ["Dentro del alumbrado de seguridad hay 3 tipos: evacuación, antipánico y alto riesgo", "Solo existe un tipo de alumbrado de emergencia y es el de reemplazamiento", "Las instalaciones se realizan sin tener en cuenta factores físicos como la temperatura", "No hay diferencias respecto a un local húmedo de otro seco"],
    correctaTexto: "Dentro del alumbrado de seguridad hay 3 tipos: evacuación, antipánico y alto riesgo",
    explicacion: "El alumbrado de emergencia se divide en tres tipos según su función específica."
  },
  {
    id: 18,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Las instalaciones eléctricas en locales de pública concurrencia deberán contar con una serie de características. Señala la respuesta incorrecta:",
    opciones: ["Se emplearán cables propagadores de llama", "Contarán con alumbrado de emergencia", "El cuadro eléctrico no estará accesible al público", "Se garantizará la separación entre los diferentes circuitos"],
    correctaTexto: "Se emplearán cables propagadores de llama",
    explicacion: "Se usan cables que NO propaguen la llama (resistentes al fuego) en locales de pública concurrencia."
  },
  {
    id: 19,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Es cierto respecto al aparato de la imagen que:",
    imagen: "img/polimetro-todas son correctas.png",
    opciones: ["Permite comprobar una instalación eléctrica de baja tensión", "Se denomina polímetro", "Miden magnitudes de resistencia, voltaje e intensidad de corriente", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "El polímetro es fundamental para verificar instalaciones eléctricas."
  },
  {
    id: 20,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Es una magnitud luminosa:",
    opciones: ["Flujo", "Intensidad", "Rendimiento", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "Flujo, intensidad y rendimiento son magnitudes de medición de luz."
  },
  {
    id: 21,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Escoge la opción correcta:",
    imagen: "img/circuito derecha paralelo.png",
    opciones: ["La imagen de la derecha muestra un circuito en paralelo", "La imagen de la derecha hace referencia a un circuito en serie", "La imagen de la izquierda es de un circuito en paralelo.", "Ninguna es correcta"],
    correctaTexto: "La imagen de la derecha muestra un circuito en paralelo",
    explicacion: "Identificar circuitos en serie y paralelo es fundamental."
  },
  {
    id: 22,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "El enlace de la red de distribución pública a la caja de protección se realiza mediante:",
    opciones: ["La línea repartidora", "La acometida", "El contador", "La derivación individual"],
    correctaTexto: "La acometida",
    explicacion: "La acometida une la red pública con la instalación de la vivienda."
  },
  {
    id: 23,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Indica la afirmación correcta:",
    opciones: ["Una lámpara puede albergar dos o más luminarias.", "Una luminaria puede albergar dos o más lámparas.", "Las dos son correctas.", "Ninguna es correcta."],
    correctaTexto: "Una luminaria puede albergar dos o más lámparas.",
    explicacion: "Una luminaria alberga lámparas y dirige la luz."
  },
  {
    id: 24,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Indica la característica con la que debe contar una vivienda para ser considerada de electrificación elevada:",
    opciones: ["Superficie de la vivienda superior a 160m2", "Si hay previsión de más de 30 puntos de alumbrado", "Si el número de tomas de corriente de uso general supera los 20", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "Electrificación elevada cumple varios requisitos."
  },
  {
    id: 25,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Indica que apartado se corresponde con el contenido de un proyecto:",
    opciones: ["La memoria descriptiva", "Los planos y esquemas necesarios", "El presupuesto", "Todas las respuestas anteriores son correctas"],
    correctaTexto: "Todas las respuestas anteriores son correctas",
    explicacion: "Un proyecto completo incluye memoria, planos y presupuesto."
  },
  {
    id: 26,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Indica que elemento no corresponde a la instalación de enlace:",
    opciones: ["La caja general de protección.", "La línea general de alimentación.", "La derivación individual.", "El cuadro general de mando y protección."],
    correctaTexto: "El cuadro general de mando y protección.",
    explicacion: "El cuadro general es parte de la instalación interior, no de enlace."
  },
  {
    id: 27,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "La electrificación básica...",
    opciones: ["Se crea para viviendas de nueva construcción con una previsión de potencia elevada.", "Hace referencia al sistema mínimo e indispensable para poder satisfacer las necesidades primarias.", "Alberga todos los dispositivos de protección, tanto para las personas, como para la instalación eléctrica.", "Se encarga de desconectar la instalación eléctrica de una vivienda en caso de que haya algún problema para protegerla."],
    correctaTexto: "Hace referencia al sistema mínimo e indispensable para poder satisfacer las necesidades primarias.",
    explicacion: "La electrificación básica es el nivel mínimo requerido por normativa."
  },
  {
    id: 28,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "La intensidad máxima que un interruptor magnetotérmico puede soportar se llama:",
    opciones: ["Poder de corte.", "Intensidad nominal o calibre", "Curva de disparo.", "Tiempo de disparo."],
    correctaTexto: "Poder de corte.",
    explicacion: "El poder de corte es la intensidad máxima que el dispositivo puede interrumpir."
  },
  {
    id: 29,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "La siguiente imagen es de una herramienta, indica cuál:",
    imagen: "img/pelacables.png",
    opciones: ["Pasacables", "Alicates", "Tijeras de electricistas", "Pelacables"],
    correctaTexto: "Pelacables",
    explicacion: "El pelacables retira el aislamiento de los conductores."
  },
  {
    id: 30,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "La siguiente imagen hace referencia a:",
    imagen: "img/interruptor diferencial.png",
    opciones: ["Interruptor magnetotérmico tetrapolar", "Interruptor de control de potencia", "Interruptor diferencial", "Interruptor cuádruple"],
    correctaTexto: "Interruptor diferencial",
    explicacion: "El interruptor diferencial protege contra contactos directos e indirectos."
  },
  {
    id: 31,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "La siguiente imagen muestra:",
    imagen: "img/interruptor magnetotermico tetrapolar.png",
    opciones: ["Interruptor magnetotérmico tetrapolar", "Interruptor de control de potencia", "Interruptor automático diferencial", "Interruptor quíntuple"],
    correctaTexto: "Interruptor magnetotérmico tetrapolar",
    explicacion: "El magnetotérmico tetrapolar protege los cuatro conductores."
  },
  {
    id: 32,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Las sobretensiones pueden ser:",
    opciones: ["Suaves o intensas.", "Fuertes o flojas.", "Transitorias o permanentes.", "De tensión o intensidad."],
    correctaTexto: "Transitorias o permanentes.",
    explicacion: "Las sobretensiones se clasifican por su duración: transitorias o permanentes."
  },
  {
    id: 33,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Los servicios de seguridad:",
    opciones: ["Tienen la misma alimentación que la instalación normal", "No son necesarios en instalaciones de locales especiales.", "Deben tener una segunda fuente de alimentación", "No funcionan si se produce un corte de electricidad"],
    correctaTexto: "Deben tener una segunda fuente de alimentación",
    explicacion: "Los servicios de seguridad requieren una alimentación de respaldo."
  },
  {
    id: 34,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "No es una fuente de alimentación de los servicios de seguridad:",
    opciones: ["Baterías acumuladoras", "Generadores independientes", "Línea de distribución externa", "Línea de alimentación normal"],
    correctaTexto: "Línea de alimentación normal",
    explicacion: "La línea normal no es una fuente de respaldo; se usan baterías o generadores."
  },
  {
    id: 35,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Se quiere encender una lámpara desde tres puntos diferentes, ¿qué elemento resulta esencial para llevar a cabo esta maniobra?",
    opciones: ["Interruptor.", "Conmutador de Cruce.", "Pulsador.", "Zumbador"],
    correctaTexto: "Conmutador de Cruce.",
    explicacion: "El conmutador de cruce permite controlar desde tres o más puntos."
  },
  {
    id: 36,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Se realiza con condensadores fijos en bornes del receptor inductivo.:",
    opciones: ["Compensación individual", "Compensación colectiva", "Compensación global", "Compensación simultánea"],
    correctaTexto: "Compensación individual",
    explicacion: "La compensación individual se realiza directamente en el receptor."
  },
  {
    id: 37,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Suministro capaz de mantener un servicio mayor del 50% del suministro normal:",
    opciones: ["Suministro duplicado", "Suministro de socorro", "Suministro de reserva", "Suministro de seguridad"],
    correctaTexto: "Suministro duplicado",
    explicacion: "El suministro duplicado mantiene más del 50% de la potencia principal."
  },
  {
    id: 38,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Un componente destacable de la resistencia de puesta a tierra es:",
    opciones: ["Resistencia del electrodo", "Resistencia del contacto entre el electrodo y el suelo", "Resistencia de la tierra circundante", "Las respuestas anteriores son correctas"],
    correctaTexto: "Las respuestas anteriores son correctas",
    explicacion: "La resistencia de puesta a tierra incluye todos estos componentes."
  },
  {
    id: 39,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Un equipo formado por una o varias lámparas para la distribución, filtración y transformación de la luz emitida por las lámparas se conoce como:",
    opciones: ["Luminaria", "Alumbrado", "Lámpara", "Diodo"],
    correctaTexto: "Luminaria",
    explicacion: "La luminaria contiene lámparas y elementos de distribución de luz."
  },
  {
    id: 40,
    tema: "U1-U6: Instalaciones Eléctricas",
    tipo: "opción múltiple",
    texto: "Un interruptor automático magnetotérmico protege contra:",
    opciones: ["Contactos directos e indirectos.", "Incendios.", "Derroche de potencia.", "Sobrecargas y cortocircuitos."],
    correctaTexto: "Sobrecargas y cortocircuitos.",
    explicacion: "El magnetotérmico protege contra sobrecargas y cortocircuitos específicamente."
  }
];
