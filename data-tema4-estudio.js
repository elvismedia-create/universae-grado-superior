// Tema 4: Configuración de Redes de Distribución de Baja Tensión
const TEMA_4_ESTUDIO_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la tensión nominal de una red de distribución de baja tensión según la normativa española?",
    opciones: [
      "Hasta 1.000 voltios",
      "Hasta 500 voltios",
      "Hasta 250 voltios",
      "Hasta 1.500 voltios"
    ],
    correctaTexto: "Hasta 1.000 voltios",
    explicacion: "Según la normativa española, la baja tensión se define como la tensión cuyo valor eficaz no excede los 1.000 voltios en corriente alterna."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el sistema de distribución de baja tensión más común en España?",
    opciones: [
      "Sistema TT (Tierra-Tierra)",
      "Sistema IT (Aislado-Tierra)",
      "Sistema TN (Tierra-Neutro)",
      "Sistema TR (Tierra-Referencia)"
    ],
    correctaTexto: "Sistema TN (Tierra-Neutro)",
    explicacion: "El sistema TN es el más utilizado en distribuciones de baja tensión urbanas. Se caracteriza por tener el neutro conectado a tierra en la fuente y el conductor de protección conectado al neutro."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Qué significa TN-C en sistemas de distribución de baja tensión?",
    opciones: [
      "El neutro y conductor de protección están separados",
      "El neutro y conductor de protección son el mismo conductor",
      "El transformador tiene contacto con neutro",
      "La tierra y neutro están conectados en el centro de transformación"
    ],
    correctaTexto: "El neutro y conductor de protección son el mismo conductor",
    explicacion: "En el sistema TN-C, el conductor neutro y el conductor de protección (PE) son el mismo conductor desde la fuente hasta los equipos de utilización."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la sección mínima recomendada para el conductor de protección en circuitos de baja tensión?",
    opciones: [
      "2,5 mm²",
      "1,5 mm²",
      "6 mm²",
      "10 mm²"
    ],
    correctaTexto: "2,5 mm²",
    explicacion: "La sección mínima del conductor de protección debe ser de 2,5 mm² para circuitos estándar, aunque en algunos casos puede reducirse a 1,5 mm² con protecciones especiales."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Qué tipo de aislamiento se utiliza generalmente en los cables de distribución de baja tensión?",
    opciones: [
      "Aislamiento de papel",
      "Aislamiento de PVC o polietileno reticulado (XLPE)",
      "Aislamiento de caucho natural",
      "Aislamiento de mica"
    ],
    correctaTexto: "Aislamiento de PVC o polietileno reticulado (XLPE)",
    explicacion: "El PVC y el XLPE son los materiales más comunes para aislar conductores de baja tensión debido a su versatilidad, durabilidad y propiedades dieléctricas."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función principal de los magnetotérmicos en una instalación de baja tensión?",
    opciones: [
      "Regular el voltaje de la red",
      "Proteger contra sobreintensidades y cortocircuitos",
      "Mejorar el factor de potencia",
      "Reducir armónicos en la red"
    ],
    correctaTexto: "Proteger contra sobreintensidades y cortocircuitos",
    explicacion: "Los magnetotérmicos combinan protección térmica (contra sobrecargas) y magnética (contra cortocircuitos), siendo elementos de seguridad esenciales en cualquier instalación."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Qué es un diferencial o interruptor por corriente residual (RCD)?",
    opciones: [
      "Un dispositivo que regula la frecuencia de la corriente",
      "Un dispositivo que detecta fugas de corriente a tierra y desconecta el circuito",
      "Un dispositivo que aumenta la capacidad de carga",
      "Un dispositivo que transforma corriente alterna en continua"
    ],
    correctaTexto: "Un dispositivo que detecta fugas de corriente a tierra y desconecta el circuito",
    explicacion: "El diferencial es fundamental para la protección de personas, ya que detecta corrientes de fuga hacia tierra y desconecta el circuito en milisegundos."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la sensibilidad estándar de un diferencial para protección de personas?",
    opciones: [
      "10 mA",
      "30 mA",
      "100 mA",
      "500 mA"
    ],
    correctaTexto: "30 mA",
    explicacion: "La norma europea establece 30 mA como sensibilidad estándar para diferenciales que protejan a personas en circuitos ordinarios."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la caída de tensión máxima permitida entre el origen de la instalación y el punto de utilización?",
    opciones: [
      "5%",
      "3%",
      "10%",
      "15%"
    ],
    correctaTexto: "3%",
    explicacion: "Según la normativa, la caída de tensión máxima en la instalación de baja tensión no debe exceder el 3% desde el origen hasta el punto de utilización más lejano."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué es el factor de potencia y por qué es importante en distribuciones de baja tensión?",
    opciones: [
      "La relación entre potencia real y aparente; importante para reducir pérdidas",
      "La velocidad de variación del voltaje; importante para evitar oscilaciones",
      "La resistencia total del circuito; importante para calcular caídas de tensión",
      "La capacidad de carga máxima del transformador; importante para no sobrecargarlo"
    ],
    correctaTexto: "La relación entre potencia real y aparente; importante para reducir pérdidas",
    explicacion: "El factor de potencia indica la eficiencia de una instalación. Un factor bajo aumenta las pérdidas en conductores y genera sobrecostes."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Qué dispositivos se utilizan para mejorar el factor de potencia en instalaciones de baja tensión?",
    opciones: [
      "Condensadores de potencia",
      "Transformadores elevadores",
      "Resistencias de carga",
      "Diodos rectificadores"
    ],
    correctaTexto: "Condensadores de potencia",
    explicacion: "Los condensadores de potencia (bancos de condensadores) se instalan para compensar el carácter inductivo de muchas cargas y mejorar el factor de potencia."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la distancia máxima recomendada para las canalizaciones abiertas de cables en baja tensión?",
    opciones: [
      "10 metros",
      "25 metros",
      "50 metros",
      "100 metros"
    ],
    correctaTexto: "50 metros",
    explicacion: "Las canalizaciones abiertas deben limitarse en longitud para facilitar el mantenimiento, la reparación y evitar daños mecánicos a los cables."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Qué tipo de protección mecánica requieren los cables en áreas de gran tránsito?",
    opciones: [
      "Tubo rígido metálico",
      "Sólo aislamiento adicional",
      "Protección con tableros de madera",
      "No requieren protección especial si están etiquetados"
    ],
    correctaTexto: "Tubo rígido metálico",
    explicacion: "En áreas de tránsito frecuente, los cables deben estar protegidos mecánicamente mediante tubería rígida metálica u otros sistemas robustos."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la temperatura máxima permitida en un conductor de cobre en funcionamiento normal?",
    opciones: [
      "50°C",
      "65°C",
      "90°C",
      "120°C"
    ],
    correctaTexto: "90°C",
    explicacion: "La temperatura máxima en el conductor es de 90°C para cables con aislamiento de PVC en funcionamiento continuo, lo que afecta su capacidad de carga."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Qué es la impedancia de bucle y para qué se utiliza en el cálculo de instalaciones?",
    opciones: [
      "Es la suma de resistencias e inductancias del circuito; se usa para calcular corrientes de cortocircuito",
      "Es la capacidad del circuito para absorber energía reactiva",
      "Es la velocidad de propagación de la onda en el conductor",
      "Es el tiempo de respuesta del diferencial"
    ],
    correctaTexto: "Es la suma de resistencias e inductancias del circuito; se usa para calcular corrientes de cortocircuito",
    explicacion: "La impedancia de bucle es fundamental para determinar la corriente de cortocircuito y seleccionar correctamente los dispositivos de protección."
  },
  {
    id: 16,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función de los fusibles en una red de distribución de baja tensión?",
    opciones: [
      "Regular el voltaje automáticamente",
      "Proteger contra cortocircuitos mediante fusión del elemento",
      "Mejorar la calidad de la onda sinusoidal",
      "Distribuir la carga entre fases"
    ],
    correctaTexto: "Proteger contra cortocircuitos mediante fusión del elemento",
    explicacion: "Los fusibles son dispositivos de protección simple que se funden ante corrientes de cortocircuito, interrumpiendo el circuito y protegiendo la instalación."
  },
  {
    id: 17,
    imagen: false,
    svg: false,
    texto: "¿Qué significa el código de colores en los conductores de baja tensión según la normativa actual?",
    opciones: [
      "Marrón (L1), Negro (L2), Gris (L3), Azul (N), Verde-Amarillo (PE)",
      "Rojo (L1), Amarillo (L2), Azul (L3), Negro (N), Verde-Amarillo (PE)",
      "Rojo (L1), Negro (L2), Azul (L3), Marrón (N), Verde-Amarillo (PE)",
      "Los colores son opcionales y dependen del instalador"
    ],
    correctaTexto: "Marrón (L1), Negro (L2), Gris (L3), Azul (N), Verde-Amarillo (PE)",
    explicacion: "La norma actual UNE establece: Marrón, Negro y Gris para fases; Azul claro para neutro; y Verde-Amarillo para conductor de protección."
  },
  {
    id: 18,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el cometido principal de una centralización de contadores en baja tensión?",
    opciones: [
      "Medir y registrar el consumo de energía de los usuarios",
      "Aumentar la eficiencia del transformador",
      "Reducir la resistencia de los conductores",
      "Mejorar el aislamiento de la instalación"
    ],
    correctaTexto: "Medir y registrar el consumo de energía de los usuarios",
    explicacion: "La centralización de contadores permite la medición centralizada del consumo de electricidad y facilita la lectura y el control de la distribución."
  },
  {
    id: 19,
    imagen: false,
    svg: false,
    texto: "¿Qué precauciones se deben tomar al trabajar cerca de instalaciones de baja tensión?",
    opciones: [
      "No es necesario tomar precauciones especiales",
      "Usar equipo de protección, evitar contacto con conductores activos y verificar que esté desconectado",
      "Solo usar guantes de algodón",
      "Mantener distancia mayor a 2 metros"
    ],
    correctaTexto: "Usar equipo de protección, evitar contacto con conductores activos y verificar que esté desconectado",
    explicacion: "Aunque el voltaje de baja tensión es menor que en alta tensión, sigue siendo peligroso. Se deben tomar precauciones: EPP adecuado, bloqueo de fuentes y procedimientos de seguridad."
  },
  {
    id: 20,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la finalidad del cálculo de cortocircuito en el diseño de una red de baja tensión?",
    opciones: [
      "Determinar el voltaje mínimo del sistema",
      "Seleccionar correctamente los dispositivos de protección con capacidad adecuada",
      "Calcular el factor de potencia de la instalación",
      "Determinar la temperatura máxima de funcionamiento"
    ],
    correctaTexto: "Seleccionar correctamente los dispositivos de protección con capacidad adecuada",
    explicacion: "El cálculo de cortocircuito es esencial para dimensionar magnetotérmicos y otros dispositivos de protección que sean capaces de soportar la corriente de falta."
  }
];
