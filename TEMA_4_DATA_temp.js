// TEMA_4_DATA - Montaje de instalaciones eléctricas en viviendas (67 preguntas)
// IDs 4001-4067

const TEMA_4_DATA = [
  // SECCIÓN 4.1 - Procedimiento de mecanizado y montajes básicos
  {
    id: 4001,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el componente fundamental en un punto de luz simple con interruptor?",
    opciones: [
      "El cableado que pasa la fase a través del interruptor antes de conectarse al receptor",
      "La caja de derivación que conecta todos los conductores sin orden",
      "El neutro que se interrumpe con el interruptor",
      "La toma de tierra que se pone después del receptor"
    ],
    correctaTexto: "El cableado que pasa la fase a través del interruptor antes de conectarse al receptor",
    explicacion: "En un punto de luz simple con interruptor, la línea de fase se interrumpe mediante un interruptor antes de conectarse al receptor. El neutro y la toma de tierra se conectan directamente al receptor desde la caja de derivación."
  },
  {
    id: 4002,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función principal de un pulsador en un circuito de timbre?",
    opciones: [
      "Actúa como interruptor cerrado permanentemente",
      "Actúa como interruptor abierto que solo se cierra mientras se pulsa",
      "Amplifica la señal del timbre",
      "Controla la intensidad de la corriente"
    ],
    correctaTexto: "Actúa como interruptor abierto que solo se cierra mientras se pulsa",
    explicacion: "Un pulsador actúa como un interruptor abierto que solo se cierra durante el tiempo que se pulsa. Es el elemento de control en circuitos de timbre y llamadas."
  },
  {
    id: 4003,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuántos interruptores conmutados se necesitan como mínimo para controlar un punto de luz desde dos ubicaciones diferentes?",
    opciones: [
      "Un solo interruptor bidireccional",
      "Dos interruptores conmutados",
      "Tres interruptores de cruce",
      "Cuatro interruptores simples"
    ],
    correctaTexto: "Dos interruptores conmutados",
    explicacion: "Para controlar un punto de luz desde dos ubicaciones diferentes se necesitan dos interruptores conmutados conectados entre sí mediante dos conductores que pasan por la caja de derivación."
  },
  {
    id: 4004,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la diferencia entre un conmutador de dos vías y un conmutador de cruce?",
    opciones: [
      "El de dos vías controla desde dos puntos; el de cruce desde tres o más",
      "El de cruce es más seguro",
      "No hay diferencia, son lo mismo",
      "El de dos vías es más caro"
    ],
    correctaTexto: "El de dos vías controla desde dos puntos; el de cruce desde tres o más",
    explicacion: "Un conmutador de dos vías (conmutador simple) conecta dos puntos de control. Un conmutador de cruce permite el control desde tres o más ubicaciones diferentes."
  },
  {
    id: 4005,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué característica especial tiene una toma de corriente respecto a los montajes de iluminación?",
    opciones: [
      "No se necesita ningún dispositivo de control, la corriente se conecta directamente",
      "Requiere dos interruptores",
      "Debe tener protección adicional contra sobrecargas",
      "Necesita un condensador"
    ],
    correctaTexto: "No se necesita ningún dispositivo de control, la corriente se conecta directamente",
    explicacion: "En una toma de corriente (enchufe), los conductores de fase, neutro y toma de tierra se conectan directamente de la caja de derivación sin necesidad de dispositivos de corte o desviación."
  },
  {
    id: 4006,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el procedimiento correcto para realizar el montaje de un punto de luz simple?",
    opciones: [
      "Fase a través del interruptor → receptor; Neutro y tierra directamente al receptor",
      "Todos los conductores a través del interruptor",
      "Neutro a través del interruptor → receptor; Fase directamente",
      "Toma de tierra a través del interruptor"
    ],
    correctaTexto: "Fase a través del interruptor → receptor; Neutro y tierra directamente al receptor",
    explicacion: "El procedimiento correcto separa el control: la fase se interrumpe en el interruptor, mientras que el neutro y la toma de tierra se conectan directamente al receptor desde la caja de derivación."
  },

  // SECCIÓN 4.2 - Canalizaciones y soportes
  {
    id: 4007,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la distancia máxima permitida entre dos abrazaderas en una canalización?",
    opciones: [
      "100 cm",
      "50 cm",
      "25 cm",
      "75 cm"
    ],
    correctaTexto: "50 cm",
    explicacion: "Las bridas o abrazaderas utilizadas para fijar canalizaciones no deben estar separadas por más de 50 cm. Además, en cruces o curvas deben colocarse abrazaderas en ambos lados."
  },
  {
    id: 4008,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuáles son las principales ventajas de las bridas o abrazaderas en las instalaciones?",
    opciones: [
      "Son económicas y fáciles de instalar",
      "No se corroen y se agarran firmemente",
      "Ocupan mucho menos espacio",
      "Pueden soportar cargas muy altas"
    ],
    correctaTexto: "No se corroen y se agarran firmemente",
    explicacion: "Las bridas o abrazaderas tienen la ventaja de no corroerse y agarrarse firmemente a los tubos y canalizaciones, proporcionando una sujeción segura y duradera."
  },
  {
    id: 4009,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Dónde es obligatorio colocar abrazaderas adicionales en una canalización?",
    opciones: [
      "Solo al principio de la instalación",
      "En los cruces y curvas, en ambos lados",
      "Solo en los cambios de nivel",
      "Cada 30 cm máximo"
    ],
    correctaTexto: "En los cruces y curvas, en ambos lados",
    explicacion: "Las abrazaderas deben colocarse en ambos lados de los cruces o curvas para garantizar una sujeción adecuada en estos puntos de mayor estrés mecánico."
  },
  {
    id: 4010,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función de los carriles de fijación en las instalaciones eléctricas?",
    opciones: [
      "Solo para fines estéticos",
      "Permitir el paso de conductores con mayor protección que otros soportes",
      "Únicamente para separar conductores",
      "Para regular la tensión de los conductores"
    ],
    correctaTexto: "Permitir el paso de conductores con mayor protección que otros soportes",
    explicacion: "Los carriles de fijación proporcionan un soporte por donde pasan los conductores, brindando mayor protección en comparación con abrazaderas o grapas individuales."
  },

  // SECCIÓN 4.3 - Niveles de electrificación
  {
    id: 4011,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "¿Cuál es la función principal del circuito C2 en una instalación de electrificación básica?",
    opciones: [
      "Proporciona iluminación general",
      "Alimenta las tomas de corriente de uso general",
      "Alimenta el horno y la cocina",
      "Alimenta los aseos"
    ],
    correctaTexto: "Alimenta las tomas de corriente de uso general",
    explicacion: "El circuito 2 (C2) en electrificación básica se corresponde con las tomas de corriente de uso general de la vivienda."
  },
  {
    id: 4012,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "¿Cuál es la potencia prevista para un uso de electrificación básica a 230V?",
    opciones: [
      "3680W",
      "5750W",
      "7250W",
      "4500W"
    ],
    correctaTexto: "5750W",
    explicacion: "Una vivienda con electrificación básica tiene una potencia prevista para un uso de 5750W a 230V, aunque el usuario puede contratar menos potencia posteriormente."
  },
  {
    id: 4013,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuántos circuitos independientes mínimos debe tener una electrificación básica?",
    opciones: [
      "3 circuitos",
      "4 circuitos",
      "5 circuitos",
      "6 circuitos"
    ],
    correctaTexto: "5 circuitos",
    explicacion: "Una electrificación básica debe tener 5 circuitos independientes como mínimo: C1 (iluminación), C2 (tomas de uso general), C3 (cocina/horno), C4 (lavadora/lavavajillas/termo) y C5 (aseos/auxiliares cocina)."
  },
  {
    id: 4014,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué características pueden requerir una electrificación elevada en una vivienda?",
    opciones: [
      "Solo la presencia de aire acondicionado",
      "Superficie mayor a 160 m² o presencia de aire acondicionado/calefacción/secadora",
      "Cualquier vivienda de más de 100 m²",
      "Todas las viviendas nuevas obligatoriamente"
    ],
    correctaTexto: "Superficie mayor a 160 m² o presencia de aire acondicionado/calefacción/secadora",
    explicacion: "Una electrificación elevada se requiere si: la vivienda supera 160 m², hay sistemas de aire acondicionado, calefacción eléctrica o secadora, más de 30 puntos de luz, más de 20 tomas de corriente de uso general, o se prevé automatización."
  },
  {
    id: 4015,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "¿Qué es la electrificación elevada?",
    opciones: [
      "Una instalación eléctrica que usa voltaje más alto",
      "Un sistema para viviendas de nueva construcción con previsión de potencia elevada",
      "Una instalación que requiere cables más gruesos",
      "Un sistema que se instala en plantas altas"
    ],
    correctaTexto: "Un sistema para viviendas de nueva construcción con previsión de potencia elevada",
    explicacion: "La electrificación elevada es un sistema diseñado para viviendas de nueva construcción que requieren mayor capacidad de potencia y que cumplen con criterios como superficie, equipos especiales o número de circuitos elevado."
  },

  // SECCIÓN 4.4 - Grados de protección
  {
    id: 4016,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "¿Cuáles son los grados de protección IP e IK?",
    opciones: [
      "Protecciones contra fuego únicamente",
      "IP protege contra sólidos/líquidos; IK contra choques mecánicos",
      "Son sinónimos que indican lo mismo",
      "IP es para interiores; IK para exteriores"
    ],
    correctaTexto: "IP protege contra sólidos/líquidos; IK contra choques mecánicos",
    explicacion: "El código IP (ej. IP54) indica protección contra cuerpos sólidos (primer dígito) y líquidos (segundo dígito). El índice IK indica protección contra choques mecánicos, con valores que representan la energía de impacto que puede absorber el envolvente."
  },
  {
    id: 4017,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué significa el código IP65?",
    opciones: [
      "Protección contra sólidos de 12,5 mm y agua a presión",
      "Protección total contra sólidos y protección contra lanzamiento de agua en todas direcciones",
      "Protección contra polvo e inmersión",
      "Protección contra sólidos de 2,5 mm y agua de lluvia"
    ],
    correctaTexto: "Protección total contra sólidos y protección contra lanzamiento de agua en todas direcciones",
    explicacion: "IP65 significa: 6 (totalmente protegido contra sólidos) y 5 (protección contra lanzamiento de agua en todas direcciones). Es un grado común para equipos en ambientes exteriores o mojados."
  },
  {
    id: 4018,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la diferencia entre el primer dígito y el segundo dígito del código IP?",
    opciones: [
      "Ambos indican lo mismo",
      "El primero indica protección contra sólidos; el segundo contra líquidos",
      "El primero es el modelo; el segundo la versión",
      "No hay diferencia, son redundantes"
    ],
    correctaTexto: "El primero indica protección contra sólidos; el segundo contra líquidos",
    explicacion: "En el código IP xy: la 'x' representa la protección contra cuerpos sólidos (0-6) y la 'y' representa la protección frente a líquidos (0-8). Ambos números se leen de forma separada e independiente."
  },
  {
    id: 4019,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué valor de protección IK es suficiente para soportar un impacto de 0,5 julios?",
    opciones: [
      "IK4",
      "IK3",
      "IK5",
      "IK6"
    ],
    correctaTexto: "IK4",
    explicacion: "Según la escala IK: IK3 = 0,35J, IK4 = 0,50J, IK5 = 0,70J, IK6 = 1J. Por lo tanto, IK4 es suficiente para un impacto de 0,5 julios."
  },

  // SECCIÓN 4.5 - Circuitos eléctricos
  {
    id: 4020,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cómo funcionan las lámparas incandescentes?",
    opciones: [
      "Emiten luz por reacción química",
      "Contienen un filamento metálico que se calienta por corriente eléctrica en una ampolla al vacío",
      "Utilizan descarga de gas ionizado",
      "Funcionan con fluorescencia interna"
    ],
    correctaTexto: "Contienen un filamento metálico que se calienta por corriente eléctrica en una ampolla al vacío",
    explicacion: "Las lámparas incandescentes tienen un filamento metálico espiral que se calienta cuando circula corriente eléctrica. La ampolla está al vacío para evitar que el filamento se queme por oxidación."
  },
  {
    id: 4021,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la característica principal de una conexión de puntos de luz en serie?",
    opciones: [
      "Todos los puntos reciben la misma tensión",
      "La corriente circula a través de todos los puntos secuencialmente",
      "Cada punto funciona de forma independiente",
      "Los puntos se encienden gradualmente"
    ],
    correctaTexto: "La corriente circula a través de todos los puntos secuencialmente",
    explicacion: "En una conexión en serie, la corriente atraviesa todos los puntos de luz uno tras otro. Si uno falla, se interrumpe todo el circuito."
  },
  {
    id: 4022,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la ventaja de una conexión de puntos de luz en paralelo?",
    opciones: [
      "Utilizan menos cable",
      "Cada punto funciona de forma independiente; si uno falla, los otros siguen funcionando",
      "Consumen menos energía",
      "Son más económicos"
    ],
    correctaTexto: "Cada punto funciona de forma independiente; si uno falla, los otros siguen funcionando",
    explicacion: "En conexión en paralelo, cada punto de luz tiene su propio circuito independiente. Si un punto falla, los demás siguen funcionando correctamente."
  },
  {
    id: 4023,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "¿Qué diferencia hay entre un conmutador y un interruptor?",
    opciones: [
      "No hay diferencia, son palabras sinónimas",
      "Un conmutador permite cambiar entre dos opciones; un interruptor solo abre o cierra",
      "Un interruptor es más seguro",
      "Un conmutador consume más potencia"
    ],
    correctaTexto: "Un conmutador permite cambiar entre dos opciones; un interruptor solo abre o cierra",
    explicacion: "Un interruptor simple abre o cierra un circuito en dos posiciones. Un conmutador cambia la dirección de la corriente entre dos opciones, permitiendo controlar desde múltiples ubicaciones."
  },
  {
    id: 4024,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función de un telerruptor en una instalación eléctrica?",
    opciones: [
      "Interrumpe automáticamente en caso de sobrecarga",
      "Acciona y controla puntos de luz desde diferentes lugares mediante pulsadores",
      "Regula la intensidad de la luz",
      "Protege contra cortocircuitos"
    ],
    correctaTexto: "Acciona y controla puntos de luz desde diferentes lugares mediante pulsadores",
    explicacion: "Un telerruptor es un dispositivo que contiene un electroimán y contactos, permitiendo controlar puntos de luz desde múltiples ubicaciones mediante pulsadores. Tiene sistema de enclavamiento para mantener su posición."
  },
  {
    id: 4025,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función del cebador en un circuito de fluorescencia?",
    opciones: [
      "Proporciona corriente continua",
      "Aumenta la temperatura mediante arco eléctrico para que los filamentos se calienten y cierre el contacto",
      "Rectifica la corriente",
      "Divide la tensión de alimentación"
    ],
    correctaTexto: "Aumenta la temperatura mediante arco eléctrico para que los filamentos se calienten y cierre el contacto",
    explicacion: "En un circuito fluorescente, el cebador calienta sus láminas mediante arco eléctrico hasta que se tocan, cerrando el contacto para permitir que circule corriente por los filamentos del tubo."
  },
  {
    id: 4026,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función de la reactancia en una instalación fluorescente?",
    opciones: [
      "Calentar el cebador",
      "Producir una sobretensión que ayuda a provocar la descarga del tubo",
      "Reducir el consumo de energía",
      "Apagar la luz gradualmente"
    ],
    correctaTexto: "Producir una sobretensión que ayuda a provocar la descarga del tubo",
    explicacion: "Cuando el cebador se enfría y desaparece el contacto entre sus láminas, la reactancia genera una sobretensión que ayuda a provocar la descarga luminosa en el tubo fluorescente."
  },
  {
    id: 4027,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función de un automático de escalera?",
    opciones: [
      "Controla la intensidad de la luz",
      "Controla el tiempo que un alumbrado permanece encendido",
      "Detecta la presencia de personas",
      "Regula el consumo de energía"
    ],
    correctaTexto: "Controla el tiempo que un alumbrado permanece encendido",
    explicacion: "Un automático de escalera es un dispositivo que enciende el alumbrado mediante pulsadores y lo desconecta automáticamente después de un tiempo determinado."
  },
  {
    id: 4028,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función principal de los reguladores de luminosidad?",
    opciones: [
      "Ahorrar energía apagando automáticamente",
      "Controlar el nivel de luminosidad automáticamente para adecuar la luz al ambiente",
      "Proteger los circuitos de sobrecarga",
      "Encender y apagar las luces a horas programadas"
    ],
    correctaTexto: "Controlar el nivel de luminosidad automáticamente para adecuar la luz al ambiente",
    explicacion: "Los reguladores de luminosidad (dimers) ajustan automáticamente el nivel de luz según las condiciones ambientales, proporcionando el confort necesario."
  },
  {
    id: 4029,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "¿Cuáles son los programadores y cuál es su función en los sistemas automáticos?",
    opciones: [
      "Dispositivos que cierran circuitos de forma permanente",
      "Herramientas de programación que controlan automáticamente el encendido y apagado en momentos específicos del día",
      "Solo para uso industrial",
      "Únicamente para regular tensión"
    ],
    correctaTexto: "Herramientas de programación que controlan automáticamente el encendido y apagado en momentos específicos del día",
    explicacion: "Los programadores (interruptores horarios) son dispositivos que permiten automatizar el encendido y apagado de circuitos en horarios específicos, proporcionando ahorro de energía y confort. Pueden ser de esfera, digitales, con programación diaria, semanal o anual."
  },
  {
    id: 4030,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuáles son las características principales que definen un interruptor horario?",
    opciones: [
      "Solo el color y el tamaño",
      "Tensión de alimentación, tiempo de reserva de batería, número de contactos, tipo de contacto y carga máxima",
      "Solo la potencia máxima",
      "Únicamente el rango de frecuencia"
    ],
    correctaTexto: "Tensión de alimentación, tiempo de reserva de batería, número de contactos, tipo de contacto y carga máxima",
    explicacion: "Los interruptores horarios se definen por: tensión de alimentación, tiempo de reserva de batería, número de contactos, tipo de contacto (libre o no libre potencial), tipo de programación, y carga máxima del contacto de salida."
  },

  // SECCIÓN 4.6 - Medidas eléctricas
  {
    id: 4031,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué es la resistencia eléctrica?",
    opciones: [
      "La facilidad para que fluya la corriente",
      "La dificultad que opone un material al paso de corriente eléctrica",
      "La capacidad de almacenar energía",
      "La velocidad de los electrones"
    ],
    correctaTexto: "La dificultad que opone un material al paso de corriente eléctrica",
    explicacion: "La resistencia eléctrica es la dificultad u oposición que presenta un material al paso de la corriente eléctrica. Su unidad de medida es el Ohmio (Ω)."
  },
  {
    id: 4032,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuáles son los elementos que ofrecen resistencia en un circuito eléctrico?",
    opciones: [
      "Solo los receptores",
      "Solo los conductores",
      "Receptores y los propios conductores del circuito",
      "Solo los interruptores"
    ],
    correctaTexto: "Receptores y los propios conductores del circuito",
    explicacion: "La resistencia está presente en todos los elementos de un circuito: en los receptores (cargas) y también en los propios conductores que componen la instalación."
  },
  {
    id: 4033,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué es la tensión o voltaje en un circuito eléctrico?",
    opciones: [
      "La cantidad de electrones que fluyen",
      "La energía por unidad de carga que proporciona un generador o fuente de alimentación",
      "La resistencia total del circuito",
      "La velocidad de la corriente"
    ],
    correctaTexto: "La energía por unidad de carga que proporciona un generador o fuente de alimentación",
    explicacion: "La tensión o voltaje es la diferencia de potencial entre dos puntos del circuito, es decir, la energía por unidad de carga. Se mide en voltios (V)."
  },
  {
    id: 4034,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué significa 'diferencia de potencial' en electricidad?",
    opciones: [
      "La diferencia entre dos resistencias",
      "La diferencia de energía entre dos puntos del circuito",
      "La variación de la corriente",
      "La disminución de intensidad"
    ],
    correctaTexto: "La diferencia de energía entre dos puntos del circuito",
    explicacion: "La diferencia de potencial es la diferencia de energía que existe entre dos puntos de un circuito eléctrico, medida en voltios."
  },
  {
    id: 4035,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué es la intensidad de corriente eléctrica?",
    opciones: [
      "La fuerza de la fuente de alimentación",
      "La cantidad de electrones que atraviesa la sección del conductor por unidad de tiempo",
      "La resistencia del conductor",
      "La tensión máxima del circuito"
    ],
    correctaTexto: "La cantidad de electrones que atraviesa la sección del conductor por unidad de tiempo",
    explicacion: "La intensidad de corriente es la cantidad de carga (electrones) que fluye a través de una sección del conductor en una unidad de tiempo. Se mide en amperios (A)."
  },
  {
    id: 4036,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la unidad de medida de la intensidad de corriente?",
    opciones: [
      "Voltio (V)",
      "Ohmio (Ω)",
      "Amperio (A)",
      "Vatio (W)"
    ],
    correctaTexto: "Amperio (A)",
    explicacion: "La intensidad de corriente se mide en amperios (A), representando la cantidad de carga que fluye por unidad de tiempo en un circuito."
  },
  {
    id: 4037,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "¿Qué es el factor de potencia y cómo se calcula?",
    opciones: [
      "La energía total consumida",
      "Una unidad de medida de la eficiencia eléctrica calculada como energía absorbida entre energía útil",
      "Solo la potencia activa",
      "El voltaje máximo del circuito"
    ],
    correctaTexto: "Una unidad de medida de la eficiencia eléctrica calculada como energía absorbida entre energía útil",
    explicacion: "El factor de potencia es la relación entre la energía absorbida y la energía útil de un equipo. Determina el rendimiento y la eficiencia eléctrica, siendo importante para minimizar pérdidas."
  },
  {
    id: 4038,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué es la potencia eléctrica?",
    opciones: [
      "La resistencia total del circuito",
      "La energía consumida en la unidad de tiempo",
      "La tensión del generador",
      "La intensidad máxima"
    ],
    correctaTexto: "La energía consumida en la unidad de tiempo",
    explicacion: "La potencia eléctrica es la cantidad de energía que se consume en la unidad de tiempo. Se mide en vatios (W). Cuanta mayor potencia, mayor consumo de energía."
  },
  {
    id: 4039,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la relación entre potencia, tensión e intensidad?",
    opciones: [
      "P = V / I",
      "P = V × I",
      "P = V + I",
      "No existe relación"
    ],
    correctaTexto: "P = V × I",
    explicacion: "La potencia eléctrica se calcula multiplicando la tensión (V) por la intensidad (I): P = V × I. Esta es la fórmula fundamental para determinar la potencia de un circuito."
  },

  // SECCIÓN 4.7 - Instalaciones de enlace
  {
    id: 4040,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "¿Cuál es el propósito de la instalación de enlace?",
    opciones: [
      "Distribuir la corriente dentro de la vivienda",
      "Conectar todos los conductores de la vivienda",
      "El tramo que va desde la acometida de la calle hasta la derivación individual",
      "Solo proteger contra cortocircuitos"
    ],
    correctaTexto: "El tramo que va desde la acometida de la calle hasta la derivación individual",
    explicacion: "La instalación de enlace es la parte de la instalación que transcurre desde que la corriente entra por la acometida en la calle hasta que llega a la derivación individual de cada vivienda."
  },
  {
    id: 4041,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función de la caja general de protección en una instalación de enlace?",
    opciones: [
      "Distribuir corriente a los circuitos",
      "Contener los elementos de protección y maniobra de la acometida",
      "Solo almacenar conductores",
      "Medir el consumo de energía"
    ],
    correctaTexto: "Contener los elementos de protección y maniobra de la acometida",
    explicacion: "La caja general de protección es el elemento que alberga los aparatos de protección y maniobra de la acometida exterior de la vivienda."
  },
  {
    id: 4042,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué es la línea general de alimentación (LGA)?",
    opciones: [
      "Un interruptor del circuito principal",
      "La conexión entre la caja general de protección y la centralización de contadores",
      "El cable de tierra principal",
      "La acometida exterior"
    ],
    correctaTexto: "La conexión entre la caja general de protección y la centralización de contadores",
    explicacion: "La línea general de alimentación (LGA) es el conjunto de conductores que conecta la caja general de protección con la centralización de contadores."
  },
  {
    id: 4043,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función de la centralización de contadores?",
    opciones: [
      "Distribuir corriente a todos los circuitos",
      "Albergar los contadores de consumo de cada vivienda",
      "Solo proteger contra sobrecargas",
      "Almacenar conductores"
    ],
    correctaTexto: "Albergar los contadores de consumo de cada vivienda",
    explicacion: "La centralización de contadores es el lugar donde se instalan los contadores individuales de consumo de cada vivienda para medir su gasto energético."
  },
  {
    id: 4044,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué es la derivación individual (DI)?",
    opciones: [
      "Un interruptor de la vivienda",
      "La línea que conecta desde la centralización de contadores hasta el cuadro de mando y protección de la vivienda",
      "El cable de acceso a la calle",
      "Solo una conexión de tierra"
    ],
    correctaTexto: "La línea que conecta desde la centralización de contadores hasta el cuadro de mando y protección de la vivienda",
    explicacion: "La derivación individual (DI) es el circuito que parte desde la centralización de contadores y llega hasta el cuadro general de distribución de cada vivienda."
  },

  // SECCIÓN 4.8 - Controles automáticos y sensores
  {
    id: 4045,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué son los controles automáticos en instalaciones eléctricas?",
    opciones: [
      "Solo interruptores simples",
      "Dispositivos que automatizan funciones como encendido/apagado sin intervención manual directa",
      "Cables de conexión",
      "Protecciones contra cortocircuitos"
    ],
    correctaTexto: "Dispositivos que automatizan funciones como encendido/apagado sin intervención manual directa",
    explicacion: "Los controles automáticos son dispositivos que realizan funciones de forma automática, como telerruptores, sensores de movimiento o detectores de luz."
  },
  {
    id: 4046,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "¿Qué características tienen los sensores de movimiento?",
    opciones: [
      "Solo detectan luz",
      "Detectan presencia/movimiento y pueden activar o desactivar circuitos automáticamente",
      "Solo funcionan con corriente continua",
      "Requieren calibración mensual"
    ],
    correctaTexto: "Detectan presencia/movimiento y pueden activar o desactivar circuitos automáticamente",
    explicacion: "Los sensores de movimiento detectan la presencia o movimiento de personas en un área y pueden activar automáticamente circuitos de iluminación u otros dispositivos según sea necesario."
  },
  {
    id: 4047,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuáles son los tipos principales de sensores utilizados en viviendas?",
    opciones: [
      "Solo sensores de temperatura",
      "Sensores de movimiento, luz, presencia, temperatura, humedad y otros según la necesidad",
      "Solo sensores de luz",
      "Sensores acústicos solamente"
    ],
    correctaTexto: "Sensores de movimiento, luz, presencia, temperatura, humedad y otros según la necesidad",
    explicacion: "Las viviendas modernas utilizan diversos tipos de sensores: movimiento, luz natural, presencia, temperatura, humedad, entre otros, para automatizar y mejorar el confort."
  },
  {
    id: 4048,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la ventaja de usar sensores de luz en una instalación eléctrica?",
    opciones: [
      "Aumentan la intensidad de la corriente",
      "Permiten automatizar el encendido/apagado según luz natural, ahorrando energía",
      "Solo cambian el color de la luz",
      "Reducen la tensión de la vivienda"
    ],
    correctaTexto: "Permiten automatizar el encendido/apagado según luz natural, ahorrando energía",
    explicacion: "Los sensores de luz permiten automatizar el encendido y apagado de iluminación basándose en el nivel de luz natural disponible, proporcionando ahorro energético y confort."
  },
  {
    id: 4049,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué beneficios proporciona la automatización en una vivienda?",
    opciones: [
      "Solo aumenta el costo",
      "Ahorro de energía, confort, seguridad y control remoto de sistemas",
      "Solo cambia la apariencia",
      "Requiere mantenimiento constante"
    ],
    correctaTexto: "Ahorro de energía, confort, seguridad y control remoto de sistemas",
    explicacion: "La automatización mediante sensores y programadores proporciona ahorro de energía, mayor confort, mejora de seguridad y la posibilidad de controlar sistemas desde ubicaciones remotas."
  },

  // SECCIÓN 4.9 - Control y previsión de cargas
  {
    id: 4050,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué significa 'control de cargas' en una instalación eléctrica?",
    opciones: [
      "Solo proteger contra cortocircuitos",
      "Calcular y gestionar la potencia total que demandan los aparatos para evitar sobrecargas",
      "Medir solo la tensión",
      "Distribuir conductores"
    ],
    correctaTexto: "Calcular y gestionar la potencia total que demandan los aparatos para evitar sobrecargas",
    explicacion: "El control de cargas consiste en calcular la potencia total que demandan los aparatos eléctricos instalados en la vivienda para asegurar que no se excedan los límites de la instalación."
  },
  {
    id: 4051,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la importancia de la previsión de cargas en una vivienda?",
    opciones: [
      "Solo es un trámite administrativo",
      "Permite calcular la potencia necesaria y dimensionar correctamente la instalación",
      "Solo para cumplir normativas",
      "No tiene importancia real"
    ],
    correctaTexto: "Permite calcular la potencia necesaria y dimensionar correctamente la instalación",
    explicacion: "La previsión de cargas es esencial para calcular la potencia total que requiere la vivienda y dimensionar adecuadamente los elementos de protección, conductores y transformadores."
  },
  {
    id: 4052,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué factores se deben considerar al calcular las cargas de una vivienda?",
    opciones: [
      "Solo el número de habitaciones",
      "Potencia de electrodomésticos, iluminación, sistemas de calefacción/aire acondicionado y potencia de coincidencia",
      "Solo la superficie",
      "Solo los interruptores"
    ],
    correctaTexto: "Potencia de electrodomésticos, iluminación, sistemas de calefacción/aire acondicionado y potencia de coincidencia",
    explicacion: "El cálculo de cargas considera: potencia nominal de todos los aparatos, puntos de iluminación, sistemas de calefacción/refrigeración, y el factor de coincidencia (no todos funcionan simultáneamente)."
  },
  {
    id: 4053,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué es el factor de coincidencia en el cálculo de cargas?",
    opciones: [
      "La resistencia total de la vivienda",
      "La posibilidad de que múltiples aparatos funcionen simultáneamente al máximo",
      "Solo la potencia del contador",
      "La temperatura ambiente"
    ],
    correctaTexto: "La posibilidad de que múltiples aparatos funcionen simultáneamente al máximo",
    explicacion: "El factor de coincidencia considera la probabilidad real de que varios aparatos funcionen simultáneamente a su máxima potencia, permitiendo un cálculo más realista que sumar todas las potencias nominales."
  },

  // PREGUNTAS ADICIONALES DE CONSOLIDACIÓN
  {
    id: 4054,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el orden correcto de los elementos en la instalación de enlace desde la calle hasta la vivienda?",
    opciones: [
      "Acometida → Caja gral. protección → LGA → Centralización contadores → DI",
      "DI → Centralización → LGA → Caja protección → Acometida",
      "Centralización → Acometida → LGA → Caja protección → DI",
      "LGA → Acometida → Centralización → DI → Caja protección"
    ],
    correctaTexto: "Acometida → Caja gral. protección → LGA → Centralización contadores → DI",
    explicacion: "El orden correcto es: la acometida llega a la caja general de protección, luego sigue la línea general de alimentación (LGA) hasta la centralización de contadores, y finalmente la derivación individual (DI) llega al cuadro de mando de la vivienda."
  },
  {
    id: 4055,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función del cuadro general de distribución en una vivienda?",
    opciones: [
      "Recibir la corriente de la acometida",
      "Distribuir la corriente a los circuitos independientes y contener elementos de protección",
      "Solo contadores",
      "Almacenar herramientas"
    ],
    correctaTexto: "Distribuir la corriente a los circuitos independientes y contener elementos de protección",
    explicacion: "El cuadro general de distribución o cuadro de mando y protección (CMP) recibe la corriente de la derivación individual y la distribuye a los circuitos independientes, conteniendo también los elementos de protección (ICP, magnetotérmicos, diferenciales)."
  },
  {
    id: 4056,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la diferencia entre una caja de derivación y una caja de conexiones?",
    opciones: [
      "No hay diferencia, son lo mismo",
      "La caja de derivación distribuye corriente a varios puntos; la de conexiones une conductores",
      "La de conexiones es más grande",
      "Solo importa el color"
    ],
    correctaTexto: "La caja de derivación distribuye corriente a varios puntos; la de conexiones une conductores",
    explicacion: "Una caja de derivación permite distribuir y derivar conductores hacia diferentes puntos de la instalación. Una caja de conexiones es donde se empalman o unen conductores."
  },
  {
    id: 4057,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cómo se designan los circuitos en una instalación de electrificación elevada?",
    opciones: [
      "Solo C1 a C5",
      "C1 a C5 básicos, más circuitos adicionales C6 a C13 según necesidad",
      "Solo números del 1 al 10",
      "Sin designación específica"
    ],
    correctaTexto: "C1 a C5 básicos, más circuitos adicionales C6 a C13 según necesidad",
    explicacion: "La electrificación elevada comienza con los 5 circuitos básicos (C1-C5) y añade circuitos complementarios (C6-C13) según los requisitos específicos de la vivienda."
  },
  {
    id: 4058,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la sección mínima de conductor en una canalización con abrazaderas?",
    opciones: [
      "Depende del voltaje, la intensidad y la longitud del circuito",
      "Siempre 2,5 mm²",
      "Siempre 1,5 mm²",
      "1 mm² para todas"
    ],
    correctaTexto: "Depende del voltaje, la intensidad y la longitud del circuito",
    explicacion: "La sección de conductor no depende solo del tipo de sujeción, sino de factores como la tensión, intensidad máxima del circuito, la caída de tensión permitida y la longitud del recorrido."
  },
  {
    id: 4059,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la ventaja principal de los sistemas de control mediante sensores frente a los manuales?",
    opciones: [
      "Son más baratos",
      "Automatizan procesos, mejoran seguridad y ahorran energía",
      "Solo ocupan menos espacio",
      "Tienen mejor apariencia"
    ],
    correctaTexto: "Automatizan procesos, mejoran seguridad y ahorran energía",
    explicacion: "Los sensores y controles automáticos proporcionan automatización, mejor seguridad (iluminación automática en escaleras), ahorro de energía y mayor confort sin necesidad de intervención manual continua."
  },
  {
    id: 4060,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué normativa regula las instalaciones eléctricas en España?",
    opciones: [
      "La norma ISO 9001",
      "El Reglamento Electrotécnico de Baja Tensión (REBT) e ITC-BT",
      "Solo la norma UNE",
      "No hay normativa específica"
    ],
    correctaTexto: "El Reglamento Electrotécnico de Baja Tensión (REBT) e ITC-BT",
    explicacion: "El Reglamento Electrotécnico de Baja Tensión (REBT) y sus Instrucciones Técnicas Complementarias (ITC-BT) normalizan todas las instalaciones eléctricas en España."
  },
  {
    id: 4061,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la importancia del aislamiento de los conductores en una vivienda?",
    opciones: [
      "Solo evitar pérdidas visuales",
      "Prevenir electrocuciones y cortocircuitos",
      "Solo para cumplir normativas",
      "No tiene importancia"
    ],
    correctaTexto: "Prevenir electrocuciones y cortocircuitos",
    explicacion: "El aislamiento de conductores es crítico para la seguridad eléctrica: evita contactos directos que puedan causar electrocuciones y previene cortocircuitos entre conductores."
  },
  {
    id: 4062,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué función tienen los tubos de protección en una instalación empotrada?",
    opciones: [
      "Solo decorativa",
      "Proteger los conductores de daños mecánicos, humedad y facilitar reemplazos",
      "Aumentar la corriente",
      "Reducir la tensión"
    ],
    correctaTexto: "Proteger los conductores de daños mecánicos, humedad y facilitar reemplazos",
    explicacion: "Los tubos de protección en canalizaciones empotradas protegen los conductores de daños mecánicos durante la instalación y uso, evitan la humedad y permiten reemplazar conductores sin perforar la pared."
  },
  {
    id: 4063,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la diferencia entre una instalación empotrada y una en superficie?",
    opciones: [
      "No hay diferencia",
      "Empotrada: dentro de la pared; en superficie: visible sobre la pared",
      "Solo cambia el color",
      "Empotrada es más barata"
    ],
    correctaTexto: "Empotrada: dentro de la pared; en superficie: visible sobre la pared",
    explicacion: "Una instalación empotrada va integrada dentro de la estructura de la pared (canaleta embutida). Una instalación en superficie va sobre la pared, visible, usando canaletas, molduras o tubos externos."
  },
  {
    id: 4064,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la profundidad mínima recomendada para las canalizaciones empotradas?",
    opciones: [
      "5 mm",
      "10 mm",
      "20 mm",
      "Depende del material y la estructura"
    ],
    correctaTexto: "Depende del material y la estructura",
    explicacion: "La profundidad de empotramiento depende de la estructura del edificio (mampostería, hormigón) y debe permitir una adecuada protección mecánica según las normas REBT."
  },
  {
    id: 4065,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué precaución se debe tomar al instalar canalizaciones en zonas húmedas?",
    opciones: [
      "Ninguna precaución especial",
      "Usar tuberías de mayor diámetro",
      "Utilizar canalizaciones estancas y conductores con aislamiento reforzado",
      "Instalar más abrazaderas"
    ],
    correctaTexto: "Utilizar canalizaciones estancas y conductores con aislamiento reforzado",
    explicacion: "En zonas húmedas (baños, cocinas, exteriores) se deben utilizar canalizaciones con grado de protección IP adecuado y conductores con aislamiento de mayor grosor para evitar la entrada de humedad."
  },
  {
    id: 4066,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la importancia de la toma de tierra en una instalación?",
    opciones: [
      "Solo para apagar dispositivos de seguridad",
      "Proporcionar un camino seguro para la corriente de falta y proteger contra electrocuciones",
      "Solo para medir voltaje",
      "No tiene función crítica"
    ],
    correctaTexto: "Proporcionar un camino seguro para la corriente de falta y proteger contra electrocuciones",
    explicacion: "La toma de tierra es esencial para la seguridad: proporciona un camino de baja resistencia para que circule la corriente de falta, protegiendo a las personas de electrocuciones y trabajando junto con dispositivos de protección diferencial."
  },
  {
    id: 4067,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
    texto: "¿Qué elementos conforman un circuito independiente según el REBT?",
    opciones: [
      "Solo un interruptor",
      "Generador, conductores, receptor y elementos de protección",
      "Solo conductores",
      "Solo la carga"
    ],
    correctaTexto: "Generador, conductores, receptor y elementos de protección",
    explicacion: "Un circuito completo está compuesto por: la fuente de energía (generador), los conductores (fase, neutro, tierra), el receptor (carga) y los elementos de protección (magnetotérmicos, diferenciales)."
  }
];
