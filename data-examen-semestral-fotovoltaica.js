// EXAMEN SEMESTRAL FOTOVOLTAICA - 40 preguntas con respuestas reales del usuario (90.83% - 36.33/40)
const EXAMEN_SEMESTRAL_FOTOVOLTAICA_DATA = [
  {
    id: 60001,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "¿Cuál de las siguientes operaciones de mantenimiento será aquella que permita reducir las pérdidas y por tanto maximizar la producción fotovoltaica en mayor medida?",
    opciones: ["Revisar las conexiones entre los módulos fotovoltaicos.", "Revisar y ajustar la estructura con los módulos fotovoltaicos.", "Revisar y limpiar las canalizaciones por donde se encuentra tendido el cableado.", "Limpiar los módulos fotovoltaicos, retirando la suciedad sobre los mismos."],
    correctaTexto: "Limpiar los módulos fotovoltaicos, retirando la suciedad sobre los mismos.",
    explicacion: "La limpieza regular de los módulos fotovoltaicos es fundamental para maximizar la producción, ya que la suciedad, polvo y otros depósitos reducen la radiación incidente."
  },
  {
    id: 60002,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "¿Cuál es el elemento encargado de convertir la energía en corriente continua procedente de los módulos fotovoltaicos en energía en corriente alterna?",
    opciones: ["Módulo Fotovoltaico.", "Regulador.", "Inversor.", "Variador."],
    correctaTexto: "Inversor.",
    explicacion: "El inversor es el dispositivo fundamental que convierte la corriente continua (DC) generada por los módulos en corriente alterna (AC) compatible con la red."
  },
  {
    id: 60003,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "¿Por qué se instala el inversor lo más cerca posible del circuito de baterías en una instalación solar fotovoltaica?",
    opciones: ["Porque así lo establece la normativa contra incendios.", "Para reducir la caída de tensión.", "Para poder conectar ambos a un ordenador de control.", "Ninguna respuesta es correcta."],
    correctaTexto: "Para reducir la caída de tensión.",
    explicacion: "Al reducir la distancia de cableado entre el inversor y las baterías, se minimiza la caída de tensión y las pérdidas eléctricas en la instalación."
  },
  {
    id: 60004,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Calcula el número máximo de módulos fotovoltaicos a conectar formando un String si tenemos un inversor con tensión máxima de entrada de 800V, además el módulo fotovoltaico es de 500Wp y una Voc=47v.",
    opciones: ["24", "20", "15", "17"],
    correctaTexto: "17",
    explicacion: "800V / 47V ≈ 17 módulos máximo en serie. Este cálculo es crítico para evitar daños al inversor por sobretensión."
  },
  {
    id: 60005,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Cuando se realiza la medición del voltaje entre el terminal positivo y terminal negativo del inversor y se obtiene una medida de 0V, ¿de qué avería se trata?",
    opciones: ["Funciona correctamente.", "Hay un cortocircuito entre terminal positivo y negativo.", "Se ha producido una fuga de corriente a tierra.", "La resistencia de puesta a tierra es muy baja."],
    correctaTexto: "Hay un cortocircuito entre terminal positivo y negativo.",
    explicacion: "Una medición de 0V entre positivo y negativo indica la existencia de un cortocircuito que debe ser reparado inmediatamente."
  },
  {
    id: 60006,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "De las siguientes señala cual NO es una operación de mantenimiento realizada en cuadros eléctricos:",
    opciones: ["Reapriete de tornillería y terminales de conexión.", "Comprobación y verificación de los elementos de protección.", "Revisión de temperatura por medio de cámara termográfica.", "Revisión de oxidaciones en la estructura de suportación."],
    correctaTexto: "Revisión de oxidaciones en la estructura de suportación.",
    explicacion: "El mantenimiento de cuadros eléctricos se enfoca en los componentes internos y conexiones, no en la estructura de soporte externa."
  },
  {
    id: 60007,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "El inversor cuenta con sistemas de protección a través de los cuales se desconectará si:",
    opciones: ["Se producen pérdidas de tensión.", "Se producen pérdidas de resistencia de aislamiento.", "Se producen pérdidas de frecuencia.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "El inversor moderno cuenta con protecciones múltiples para detectar anomalías en tensión, aislamiento y frecuencia para garantizar la seguridad de la instalación."
  },
  {
    id: 60008,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "El valor máximo de intensidad que puede circular por la célula en condiciones de corto es:",
    opciones: ["Tensión a circuito abierto.", "Corriente de oscuridad.", "Corriente de cortocircuito.", "Corriente de iluminación."],
    correctaTexto: "Corriente de cortocircuito.",
    explicacion: "La corriente de cortocircuito (Isc) es el máximo valor de intensidad que puede generar una célula solar cuando está en condiciones de cortocircuito."
  },
  {
    id: 60009,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "En la elaboración de un presupuesto que costes deberán tenerse en cuenta:",
    opciones: ["Costes materiales.", "Costes de mano de obra.", "Costes de legalización de la instalación.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "Un presupuesto completo de una instalación fotovoltaica debe incluir materiales, trabajo, y todos los trámites legales necesarios para la legalización."
  },
  {
    id: 60010,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "En la sala de baterías deberemos tener en cuenta:",
    opciones: ["No fumar en el interior.", "No emplear ropa que se cargue con electricidad estática.", "Acondicionar la sala con botiquines de emergencia.", "Todas las respuestas son correctas."],
    correctaTexto: "Todas las respuestas son correctas.",
    explicacion: "Las salas de baterías requieren múltiples precauciones de seguridad debido a los riesgos químicos, eléctricos y de incendio."
  },
  {
    id: 60011,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "En la zona de corriente continua dentro de instalaciones fotovoltaicas en relación con la seguridad y protecciones, se recomienda:",
    opciones: ["Instalar descargadores de sobretensión o varistores.", "Instalar manguitos.", "Instalar de compensadores de reactiva.", "No se tiene ninguna recomendación en especial."],
    correctaTexto: "Instalar descargadores de sobretensión o varistores.",
    explicacion: "Los descargadores de sobretensión protegen los equipos sensibles de picos de tensión que pueden ocurrir en sistemas fotovoltaicos."
  },
  {
    id: 60012,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "En un esquema de una instalación solar fotovoltaica este símbolo representa:",
    imagen: "img/pregunta 12 esquema de una intalacion.png",
    opciones: ["El inversor.", "La célula fotovoltaica.", "La batería.", "El contador."],
    correctaTexto: "La célula fotovoltaica.",
    explicacion: "En esquemas eléctricos normalizados, el símbolo de célula fotovoltaica tiene un diseño específico que la distingue de otros componentes."
  },
  {
    id: 60013,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "En viviendas habituales que cuenten con instalaciones fotovoltaicas con conexión a la red, ¿qué tipo de corriente se empleará de carácter general?",
    opciones: ["Corriente Continua.", "Corriente Alterna.", "Corriente Pulsante.", "Ninguna respuesta es correcta."],
    correctaTexto: "Corriente Alterna.",
    explicacion: "Las viviendas habituales funcionan con corriente alterna (CA), por lo que el inversor convierte la corriente continua de los paneles a corriente alterna."
  },
  {
    id: 60014,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Generalmente la autonomía de las instalaciones solares fotovoltaicas sin conexión a una red debe ser de:",
    opciones: ["Menos de 24 horas.", "Entre 3 y 10 días.", "Mayor de 3 meses.", "Cercana a 1 año."],
    correctaTexto: "Entre 3 y 10 días.",
    explicacion: "Para instalaciones aisladas, la autonomía típica es de 3-10 días para poder soportar períodos sin radiación solar."
  },
  {
    id: 60015,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "La elección del regulador se realizará a partir de la corriente de cortocircuito de los módulos fotovoltaicos. Si tenemos una instalación fotovoltaica con dos ramas de 10 cadenas de módulos fotovoltaicos en serie cada una y sabemos que cada módulo tiene una Isc de 12A. ¿Qué regulador deberemos de elegir?",
    opciones: ["Regulador con corriente nominal de 10 A.", "Regulador con corriente nominal de 15 A.", "Regulador con corriente nominal de 30 A.", "Ninguna de las anteriores."],
    correctaTexto: "Regulador con corriente nominal de 30 A.",
    explicacion: "2 ramas x 12A = 24A, pero se debe sobredimensionar, por lo que 30A es la opción correcta con margen de seguridad."
  },
  {
    id: 60016,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "La energía generada en una instalación fotovoltaica conectada a red:",
    opciones: ["Se transmite a la red mediante corriente continua.", "Es vertida a la red para venderse o como aporte de energía.", "Siempre se almacena en baterías.", "Todas las respuestas son correctas."],
    correctaTexto: "Es vertida a la red para venderse o como aporte de energía.",
    explicacion: "Las instalaciones conectadas a red inyectan la energía generada a la red pública, sin necesidad de almacenamiento en baterías."
  },
  {
    id: 60017,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Las estructuras de los paneles solares recibirán menos fuerza del viento cuando se instalan en:",
    opciones: ["Fachadas.", "Cubiertas planas.", "Cubiertas inclinadas.", "Suelo."],
    correctaTexto: "Fachadas.",
    explicacion: "Las fachadas verticales reciben menos carga de viento que las cubiertas planas o inclinadas debido a la geometría y exposición."
  },
  {
    id: 60018,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Las estructuras para montaje de paneles fotovoltaicos sobre suelo suelen ser:",
    opciones: ["Mediante zapatas o tornillos para tierra.", "Mediante clavos o contrapesos.", "Mediante correas de sujeción o mediante bloques de hormigón.", "Ninguna de las anteriores."],
    correctaTexto: "Mediante zapatas o tornillos para tierra.",
    explicacion: "Las estructuras sobre suelo requieren cimentación adecuada mediante zapatas o anclajes profundos en tierra."
  },
  {
    id: 60019,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Las instalaciones fotovoltaicas pueden agruparse en función de su conexión, ¿cómo se denominan a las instalaciones que NO se conectan a la red?",
    opciones: ["Instalaciones fotovoltaicas permanentes.", "Instalaciones fotovoltaicas Aisladas.", "Instalaciones fotovoltaicas de apoyo.", "Ninguna de las anteriores."],
    correctaTexto: "Instalaciones fotovoltaicas Aisladas.",
    explicacion: "Las instalaciones aisladas funcionan de forma independiente sin conexión a la red eléctrica pública."
  },
  {
    id: 60020,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Las señales de obligación llevan el fondo de color:",
    opciones: ["Blanco.", "Rojo.", "Amarillo.", "Azul."],
    correctaTexto: "Azul.",
    explicacion: "Según normativa de señalización de seguridad, las señales de obligación tienen fondo azul con símbolo blanco."
  },
  {
    id: 60021,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Los daños eléctricos en un cuerpo generalmente se producen:",
    opciones: ["Porque el cuerpo actúa como conductor.", "Porque nuestro cuerpo no puede aguantar ningún tipo de electricidad.", "Porque los músculos dejan de funcionar cuando reciben una descarga.", "Porque el circuito toma toda la energía de nuestro cuerpo."],
    correctaTexto: "Porque el cuerpo actúa como conductor.",
    explicacion: "El cuerpo humano es un buen conductor de electricidad, lo que permite que la corriente circule a través de él causando daño."
  },
  {
    id: 60022,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Los diodos de protección de bypass se instalan:",
    opciones: ["En el módulo solar.", "En el inversor.", "En la caja de conexiones.", "En el acumulador."],
    correctaTexto: "En la caja de conexiones.",
    explicacion: "Los diodos de bypass se instalan en la caja de conexiones para proteger los módulos de corrientes inversas."
  },
  {
    id: 60023,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Los factores atmosféricos que hay que tener en cuenta para llevar a cabo un estudio de radiación solar son:",
    opciones: ["Dispersión, reflexión, difracción y absorción.", "Dispersión, trayectoria solar y absorción.", "Únicamente la reflexión y difracción.", "Ninguna de las anteriores es correcta."],
    correctaTexto: "Dispersión, reflexión, difracción y absorción.",
    explicacion: "Todos estos factores atmosféricos afectan la cantidad de radiación solar que llega a los paneles."
  },
  {
    id: 60024,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Los módulos fotovoltaicos bifaciales se caracterizan por:",
    opciones: ["Contar con potencias como máximo de 300Wp.", "Ser de módulos de silicio policristalino.", "Solo aprovechar la radiación directa.", "Aprovechar la radiación reflejada."],
    correctaTexto: "Aprovechar la radiación reflejada.",
    explicacion: "Los módulos bifaciales tienen células en ambos lados, permitiendo captar radiación reflejada desde el suelo o superficies cercanas."
  },
  {
    id: 60025,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Los paneles fotovoltaicos empleados en la integración arquitectónica de los edificios deben asegurar:",
    opciones: ["Las mismas condiciones que el material de construcción que sustituye.", "Únicamente la generación de electricidad.", "La visibilidad en el interior del edificio.", "Su viabilidad económica."],
    correctaTexto: "Las mismas condiciones que el material de construcción que sustituye.",
    explicacion: "Los BIPV (Building-Integrated Photovoltaics) deben mantener las características térmicas, estructurales y de impermeabilidad del material que reemplazan."
  },
  {
    id: 60026,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Los seguidores solares son empleados mayoritariamente en:",
    opciones: ["Viviendas unifamiliares.", "Señales de tráfico.", "Huertos Solares.", "Ninguna de las anteriores."],
    correctaTexto: "Huertos Solares.",
    explicacion: "Los seguidores solares (tracking systems) se justifican económicamente en instalaciones de gran escala como los huertos solares."
  },
  {
    id: 60027,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "No es un tipo de EPI:",
    opciones: ["Guantes con protección aislante.", "Pantalla facial.", "Ropa conductora de electricidad.", "Fusible."],
    correctaTexto: "Fusible.",
    explicacion: "Un fusible es un componente eléctrico de protección, no un equipo de protección individual (EPI)."
  },
  {
    id: 60028,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "No es un tipo de plano o esquema de una instalación solar fotovoltaica sin conexión a red:",
    opciones: ["Diagrama de bloques.", "Esquema unifilar de la instalación.", "Esquema eléctrico de la instalación.", "Esquema de aprovechamiento energético."],
    correctaTexto: "Esquema de aprovechamiento energético.",
    explicacion: "Los esquemas técnicos estándar son diagramas de bloques, esquemas unifilares y esquemas eléctricos detallados."
  },
  {
    id: 60029,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Normalmente el mantenimiento en instalaciones fotovoltaicas:",
    opciones: ["Debe ser muy riguroso y con asiduidad.", "Necesitan poco mantenimiento ya que no suelen presentar partes móviles.", "Siempre se debe realizar cada 3 meses.", "Solo se realiza mantenimiento preventivo."],
    correctaTexto: "Necesitan poco mantenimiento ya que no suelen presentar partes móviles.",
    explicacion: "Una de las ventajas de las instalaciones fotovoltaicas es que requieren muy poco mantenimiento debido a la falta de partes móviles."
  },
  {
    id: 60030,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Para determinar el número de módulos fotovoltaicos a emplear, se deberá:",
    opciones: ["Dividir la Potencia Pico Total entre la Potencia Pico Unitaria del módulo.", "Multiplicar la potencia del módulo fotovoltaico por la potencia pico.", "Sumar la Potencia nominal a la potencia pico de los módulos.", "Ninguna de las anteriores es correcta."],
    correctaTexto: "Dividir la Potencia Pico Total entre la Potencia Pico Unitaria del módulo.",
    explicacion: "El número de módulos se calcula dividiendo la potencia total requerida entre la potencia unitaria de cada módulo."
  },
  {
    id: 60031,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Para el montaje de los paneles solares sobre cubiertas de teja inclinadas en una instalación fotovoltaica, ¿qué protecciones se instalan generalmente en el lado de Corriente Alterna para proteger el tramo Inversor - Cargas CA?",
    opciones: ["Interruptor Magnetotérmico y Protector frente a sobretensiones.", "Interruptor Magnetotérmico y PIAS.", "Interruptor Magnetotérmico, Interruptor diferencial y protector frente a sobretensiones.", "Interruptor diferencial y protector frente a sobretensiones."],
    correctaTexto: "Interruptor Magnetotérmico, Interruptor diferencial y protector frente a sobretensiones.",
    explicacion: "La protección completa del lado de CA requiere magnetotermia para sobrecorriente, diferencial para fugas y varistores para sobretensiones."
  },
  {
    id: 60032,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Para estimar el rendimiento total de la instalación se tendrán en cuenta una serie de pérdidas, entre las que se incluyen:",
    opciones: ["Pérdidas en la batería y regulador.", "Coeficientes de autodescarga de baterías.", "Pérdidas en el cableado.", "Todas las anteriores son correctas."],
    correctaTexto: "Todas las anteriores son correctas.",
    explicacion: "El rendimiento global de una instalación debe considerar todas las pérdidas: equipos, baterías, cableado y autodescarga."
  },
  {
    id: 60033,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Para la agrupación de módulos fotovoltaicos en serie y paralelo se deberá cumplir el siguiente criterio:",
    opciones: ["Imax entrada inversor < Imax String.", "Vmax entrada inversor < Vmax String.", "Vmax entrada inversor > Vmax String.", "Ninguna es correcta."],
    correctaTexto: "Vmax entrada inversor > Vmax String.",
    explicacion: "La tensión máxima de entrada del inversor debe ser superior a la tensión máxima del string para operación segura."
  },
  {
    id: 60034,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Para verter a la red la corriente continua generada en el panel se debe adecuar esta corriente para:",
    opciones: ["Ser transformada en alterna.", "Tener únicamente la mismas características de tensión que la red eléctrica.", "Tener únicamente las mismas características de frecuencia que la red eléctrica.", "Transformarla en alterna y contar con las mismas características de tensión y frecuencia que la red eléctrica."],
    correctaTexto: "Transformarla en alterna y contar con las mismas características de tensión y frecuencia que la red eléctrica.",
    explicacion: "Para vertir a la red, la energía debe convertirse a CA con la tensión y frecuencia exactas de la red (230V, 50Hz en España)."
  },
  {
    id: 60035,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Qué tipo de lesión está asociada a riesgos eléctricos:",
    opciones: ["Choque eléctrico.", "Fibrilación ventricular.", "Caída a distinto nivel.", "Envenenamiento."],
    correctaTexto: "Fibrilación ventricular.",
    explicacion: "La fibrilación ventricular es una lesión grave causada por corriente eléctrica que afecta el corazón."
  },
  {
    id: 60036,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Señala la respuesta correcta:",
    opciones: ["Cuanto mayor sea la longitud del cableado, menor sección se necesitará.", "La caída de tensión será menor en grandes distancias de cableado.", "Se aumentará la sección del cableado para reducir la caída de tensión y las pérdidas en el cableado.", "Ninguna de las anteriores es correcta."],
    correctaTexto: "Se aumentará la sección del cableado para reducir la caída de tensión y las pérdidas en el cableado.",
    explicacion: "Para minimizar pérdidas en distancias largas, se debe aumentar la sección del conductor según la intensidad y longitud del circuito."
  },
  {
    id: 60037,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Si se realiza una instalación fotovoltaica en una cubierta inclinada con línea de vida. Señala que equipo de protección se deberá emplear obligatoriamente para este trabajo en altura:",
    opciones: ["Guantes Aislantes Clase 4.", "Protectores Auditivos.", "Arnés de Seguridad.", "Pantalla de protección facial."],
    correctaTexto: "Arnés de Seguridad.",
    explicacion: "El trabajo en altura requiere obligatoriamente el uso de arnés de seguridad conectado a un punto de anclaje."
  },
  {
    id: 60038,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Teniendo en cuenta los niveles de tensión de la parte de continua que tipo de cableado se empleará:",
    opciones: ["Cableado de corriente alterna AT (AL RH5Z1-OL).", "Cableado de corriente continua BT, 1/1,8 kV (H1Z2Z2-K).", "Cableado de alterna BT, RZ1-K.", "Cableado de control RV-K."],
    correctaTexto: "Cableado de corriente continua BT, 1/1,8 kV (H1Z2Z2-K).",
    explicacion: "El cable H1Z2Z2-K está específicamente diseñado para aplicaciones de corriente continua a baja tensión en instalaciones fotovoltaicas."
  },
  {
    id: 60039,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Una ventaja del uso de la radiación solar como recurso energético es:",
    opciones: ["Su disponibilidad en todo el mundo.", "Que es constante a lo largo del año.", "Su baja dispersión.", "Sabemos cómo se va a comportar en el futuro."],
    correctaTexto: "Su disponibilidad en todo el mundo.",
    explicacion: "La radiación solar es accesible globalmente, aunque con variaciones según la latitud y condiciones climáticas locales."
  },
  {
    id: 60040,
    tema: "Fotovoltaica",
    tipo: "opción múltiple",
    texto: "Uno de los inconvenientes del uso de la radiación solar incidente como recurso energético es:",
    opciones: ["Que no es un recurso renovable.", "Su escasa disponibilidad.", "Su elevada variabilidad (noche, día, época del año, etc.)", "Ninguna es correcta."],
    correctaTexto: "Su elevada variabilidad (noche, día, época del año, etc.)",
    explicacion: "La principal limitación del solar es su variabilidad temporal, requiriendo sistemas de almacenamiento o conexión a red para garantizar suministro continuo."
  }
];
