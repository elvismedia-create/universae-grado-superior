// T3: Configuración de Centros de Transformación
// Grado Medio - Instalaciones de Distribución
// 60 Preguntas de Test Completas

const TEMA_T3_CENTROS_TRANSFORMACION_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Qué es un Centro de Transformación (CT)?",
    opciones: ["Instalación que transforma la tensión de distribución (Media Tensión) a la tensión de utilización (Baja Tensión)", "Un almacén de materiales eléctricos", "Una oficina de cálculos técnicos", "Un punto de venta de electricidad"],
    correcta: 0,
    explicacion: "Un Centro de Transformación es la instalación que contiene uno o más transformadores, destinada a transformar la energía de Media Tensión (generalmente 10-25 kV) a Baja Tensión (230/400 V) para su distribución a usuarios finales."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los tipos principales de Centros de Transformación según su ubicación?",
    opciones: ["Intemperie, Superficie, Subterráneo y Prefabricado", "Solo Interior y Exterior", "Solo en viviendas", "Solo industriales"],
    correcta: 0,
    explicacion: "Según la RBT ITC 40 y 41, los CT se clasifican en: Intemperie (postes), Superficie (casetas), Subterráneo (bajo tierra) y Prefabricados (transformadores envolventes tipo compacto)."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Qué tensiones típicas maneja un Centro de Transformación?",
    opciones: ["Media Tensión: 10-25 kV y Baja Tensión: 230/400 V", "Solo 230 V", "Solo 400 V", "6-15 kV y 110 V"],
    correcta: 0,
    explicacion: "Los CT españoles típicamente transforman de Media Tensión (10 kV o 25 kV según la zona) a Baja Tensión (230/400 V) según norma UNE EN 60038."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función principal del transformador en un Centro de Transformación?",
    opciones: ["Transformar la tensión y la intensidad manteniendo la potencia (P = V·I)", "Almacenar energía eléctrica", "Proteger contra sobretensiones", "Distribuir la energía a todos los usuarios"],
    correcta: 0,
    explicacion: "El transformador es el componente central que modifica la tensión manteniendo aproximadamente la misma potencia (con pérdidas pequeñas). Permite elevar o reducir tensión según el cociente de espiras del transformador."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Qué tipos de transformadores existen en un CT según el número de fases?",
    opciones: ["Monofásicos (para baja potencia) y Trifásicos (para mayor potencia)", "Solo trifásicos", "Solo monofásicos", "Ninguno de los anteriores"],
    correcta: 0,
    explicacion: "Los transformadores monofásicos (generalmente 10-25 kVA) se usan en pequeños CT o zonas rurales. Los trifásicos (50-2500 kVA) son los más comunes en distribución urbana e industrial."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son las partes principales de un Centro de Transformación?",
    opciones: ["Celdas de Media Tensión, Transformador, Celdas de Baja Tensión, Sistemas de protección y puesta a tierra", "Solo el transformador", "Solo cables de distribución", "Solo contadores"],
    correcta: 0,
    explicacion: "Un CT completo contiene: Celdas MT (seccionamiento, medida, protección), Transformador(es), Celdas BT (protecciones, cuadros), Sistemas de puesta a tierra, Canalizaciones, Ventilación y Sistema de extinción."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Qué es una celda de Media Tensión?",
    opciones: ["Modulo de maniobra que contiene interruptor, seccionador, protecciones y mecanismos de MT", "Un condensador de energía", "Un transformador pequeño", "Un dispositivo de almacenamiento"],
    correcta: 0,
    explicacion: "Las celdas MT son módulos metálicos independientes que contienen: interruptor general, seccionadores, transformadores de medida (TA, TT), relés de protección y conexiones para conexión/desconexión del transformador."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función del seccionador en Media Tensión?",
    opciones: ["Desconectar físicamente el circuito MT para trabajos de mantenimiento (sin carga)", "Proteger contra cortocircuitos", "Medir la energía consumida", "Reducir la tensión"],
    correcta: 0,
    explicacion: "El seccionador MT es un dispositivo de maniobra que NO puede abrir bajo carga. Su función es aislar completamente el CT de la red para trabajos seguros. Siempre se abre después del interruptor."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Qué es un Transformador de Intensidad (TA) en Media Tensión?",
    opciones: ["Dispositivo que reduce la corriente de MT (ej: 400A→5A) para alimentar relés y amperímetros de protección", "Un transformador de potencia grande", "Un dispositivo de almacenamiento de energía", "Un reductor de tensión"],
    correcta: 0,
    explicacion: "El TA (Transformador de Intensidad) es un instrumento que transforma corrientes altas de MT a valores bajos y seguros (normalmente a 5A) para protecciones, medida y control. Es esencial para la operación segura del CT."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué es un Transformador de Tensión (TT) en Media Tensión?",
    opciones: ["Dispositivo que reduce la tensión de MT (ej: 25kV→110V) para alimentar relés de protección y voltímetros", "Un transformador monofásico de potencia", "Un dispositivo de protección contra rayos", "Un regulador de tensión"],
    correcta: 0,
    explicacion: "El TT (Transformador de Tensión) reduce la tensión de MT a valores seguros y medibles (generalmente 110V secundario) para el funcionamiento de relés de protección, voltímetros y sistemas de sincronización."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la estructura básica de un transformador de potencia?",
    opciones: ["Núcleo ferromagnético, bobinados primario y secundario, aislamiento y sistema de refrigeración", "Solo bobinados", "Solo núcleo", "Solo sistema de refrigeración"],
    correcta: 0,
    explicacion: "Un transformador contiene: Núcleo de hierro laminado (para conducir flujo magnético), Bobinado primario (MT), Bobinado secundario (BT), Aislamiento (papel-aceite o resina), Carcasa, Sistema de refrigeración (Aceite/Air, ONAN, ONAF, etc.)."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Qué tipos de refrigeración existen en transformadores de CT?",
    opciones: ["ONAN (Aceite Natural-Aire Natural), ONAF (Aceite Natural-Aire Forzado), OFAN (Aceite Forzado-Aire Natural)", "Solo ONAN", "Solo ONAF", "Sin refrigeración"],
    correcta: 0,
    explicacion: "Según la potencia y ambiente: ONAN (hasta ~300 kVA, bajo coste, sin mantenimiento), ONAF (300-1500 kVA, con ventiladores), OFAN (grandes potencias). El tipo se elige según disipación térmica requerida."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el rendimiento típico de un transformador de CT?",
    opciones: ["95-99% (pérdidas 1-5% en forma de calor)", "50%", "85%", "99.9% (sin pérdidas)"],
    correcta: 0,
    explicacion: "Los transformadores modernos tienen rendimientos entre 96-99% dependiendo de la potencia. Las pérdidas ocurren en el cobre (I²R) y en el hierro (histéresis, corrientes parásitas), disipándose como calor en el aceite/aire."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Qué es la impedancia de cortocircuito (Zcc) de un transformador?",
    opciones: ["Parámetro que define la caída de tensión y el nivel de cortocircuito que el transformador puede soportar", "La resistencia del cobre", "El número de espiras", "La frecuencia de trabajo"],
    correcta: 0,
    explicacion: "La Zcc (típicamente 4-6% en CT) determina: 1) Caída de tensión en carga, 2) Corriente de cortocircuito resultante (Icc = Sn/(√3·U·Zcc)). Mayor Zcc = menor Icc pero mayor caída de tensión."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función del depósito de expansión (conservador) en un transformador?",
    opciones: ["Permitir la dilatación/contracción del aceite sin contacto con humedad del aire", "Almacenar aceite extra", "Enfriar el transformador", "Proteger contra cortocircuitos"],
    correcta: 0,
    explicacion: "El conservador es un depósito auxiliar conectado al transformador que compensa los cambios de volumen del aceite por temperatura, evitando que entre aire húmedo que degrade el aislamiento."
  },
  {
    id: 16,
    imagen: false,
    svg: false,
    texto: "¿Qué es el Cuadro General de Distribución (CGD) o Cuadro BT en un CT?",
    opciones: ["Instalación que contiene interruptores, diferenciales y protecciones para distribuir BT a los usuarios", "Solo un contador de energía", "Una caja de fusibles", "Un transformador pequeño"],
    correcta: 0,
    explicacion: "El CGD es el elemento central de BT que contiene: Interruptor General Automático (IGA), Interruptores Diferenciales (ID) por circuito/zona, Pequeños Interruptores Automáticos (PIA), Contadores de energía, Protecciones contra sobretensiones."
  },
  {
    id: 17,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función del Interruptor General Automático (IGA) en un CT?",
    opciones: ["Desconectar automáticamente el CT de la red BT ante cortocircuito o sobrecarga crítica", "Medir la energía consumida", "Reducir la tensión", "Detectar armonicos"],
    correcta: 0,
    explicacion: "El IGA es el interruptor de entrada que protege todo el CT. Abre automáticamente ante corrientes de cortocircuito superiores a su calibre, aislando el CT y protegiendo los circuitos de distribución y usuarios."
  },
  {
    id: 18,
    imagen: false,
    svg: false,
    texto: "¿Qué es un Interruptor Diferencial (ID) en un CT?",
    opciones: ["Dispositivo que protege contra contactos indirectos detectando fugas a tierra (≤30mA para uso general)", "Protector contra rayos", "Medidor de tensión", "Contador de energía"],
    correcta: 0,
    explicacion: "El ID protege contra electrocución detectando desequilibrios entre fase y neutro (corrientes de fuga). En CT se instalan ID de 100-300mA por zona (distribución) con ID de 30mA en circuitos críticos como baños/cocinas."
  },
  {
    id: 19,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la sensibilidad típica de los Interruptores Diferenciales en un CT?",
    opciones: ["300mA (distribución), 100mA (zonas húmedas), 30mA (circuitos específicos)", "Solo 1A", "Solo 100A", "Sin sensibilidad diferencial"],
    correcta: 0,
    explicacion: "Según RBT: ID de 300mA para protección de línea (distribución general), ID de 100mA para zonas comunes, ID de 30mA para baños, cocinas, garajes. Cada nivel protege mejor contra riesgos específicos."
  },
  {
    id: 20,
    imagen: false,
    svg: false,
    texto: "¿Qué información debe incluir un Cuadro de Baja Tensión en un CT?",
    opciones: ["Esquema unifilar, instrucciones de operación, datos de potencia, protecciones, contactos de emergencia", "Solo el número de circuitos", "Solo marcas comerciales", "Sin información"],
    correcta: 0,
    explicacion: "Por normativa RBT, el CGD debe tener: placa identificativa, esquema unifilar, instrucciones de maniobra, aviso de peligro eléctrico, datos técnicos, teléfono de emergencia, y plano de locales de riesgo especial."
  },
  {
    id: 21,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son las protecciones principales en Media Tensión de un CT?",
    opciones: ["Protección diferencial (Merz-Price), protección de sobrecorriente, protección de sobretensión, protección térmica", "Solo fusibles", "Solo interruptores", "Sin protecciones automáticas"],
    correcta: 0,
    explicacion: "Las protecciones MT incluyen: Relé diferencial de línea (detecta cortocircuitos en alimentación), Relé de sobrecorriente (cortocircuito en secundario), Relé térmico (sobretemperatura), Pararrayos (sobretensiones), Limitadores de corriente."
  },
  {
    id: 22,
    imagen: false,
    svg: false,
    texto: "¿Qué es la protección diferencial (Merz-Price) en Media Tensión?",
    opciones: ["Sistema que compara la corriente de entrada y salida mediante TA; si hay diferencia significa cortocircuito en el circuito protegido", "Un transformador diferencial", "Un seccionador", "Un medidor de potencia"],
    correcta: 0,
    explicacion: "La protección diferencial (Merz-Price) es el sistema más sensible. Usa dos TA (entrada y salida) que alimentan un relé diferencial. Si Ientrada ≠ Isalida, hay un defecto y abre el interruptor MT instantáneamente."
  },
  {
    id: 23,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el tiempo de desconexión típico de protecciones en un CT?",
    opciones: ["Diferencial: <100ms, Sobrecorriente: 0.3-1s, Termostato: 2-10min según ajuste", "Todas: 10 segundos", "Sin tiempo definido", "Más de 1 minuto"],
    correcta: 0,
    explicacion: "Tiempos de protección: Diferencial MT (instantáneo <100ms) para detectar faltas internas, Sobrecorriente temporizado (0.3-1s) por selectividad con aguas abajo, Térmico lento (2-10min) para sobrecargas continuadas."
  },
  {
    id: 24,
    imagen: false,
    svg: false,
    texto: "¿Qué son los pararrayos en un Centro de Transformación?",
    opciones: ["Dispositivos que limitan sobretensiones transitorias (rayos, maniobras) a niveles seguros para el aislamiento", "Protectores contra rayos directos", "Medidores de humedad", "Ventiladores"],
    correcta: 0,
    explicacion: "Los pararrayos (descargadores de sobretensión tipo ZnO) se instalan en la entrada MT del CT. Limitan la sobretensión a ~1.5-2 veces la tensión nominal, protegiendo transformador y aislamientos contra rayos y maniobras."
  },
  {
    id: 25,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función de los limitadores de corriente en Media Tensión?",
    opciones: ["Limitar la corriente de cortocircuito a valores manejables por interruptores y permitir selectividad de protecciones", "Elevar la tensión", "Medir el flujo de potencia", "Proteger contra sobretemperatura"],
    correcta: 0,
    explicacion: "Los limitadores de corriente (inductancias limitadoras) en MT reducen dI/dt durante cortocircuitos, limitando la Icc. Esto permite que interruptores de menor capacidad rompan la corriente y mejora selectividad de protecciones."
  },
  {
    id: 26,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función de la puesta a tierra en un Centro de Transformación?",
    opciones: ["Limitar tensiones de contacto, descargar corrientes de defecto y asegurar funcionamiento de protecciones", "Solo decorativa", "Aumentar la tensión", "Almacenar energía"],
    correcta: 0,
    explicacion: "La puesta a tierra del CT es crítica para: 1) Limitar tensión de contacto ante defectos (<50V), 2) Descargar rápidamente corrientes de falta a tierra, 3) Asegurar disparo de relés y diferenciales."
  },
  {
    id: 27,
    imagen: false,
    svg: false,
    texto: "¿Qué elementos constituyen la puesta a tierra de un Centro de Transformación?",
    opciones: ["Electrodo (pica/anillo), línea de enlace (cable CU), punto de tierra (borna), conductores de protección en BT", "Solo una pica", "Solo cables", "Sin necesidad de especificación"],
    correcta: 0,
    explicacion: "Sistema completo de tierra: 1) Electrodo (pica >2m profundidad o anillo enterrado), 2) Línea de enlace (cable CU ≥35mm² típicamente), 3) Borna de tierra (punto de conexión), 4) Conductores PE en toda la instalación BT."
  },
  {
    id: 28,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el valor de resistencia de tierra máximo recomendado en un CT?",
    opciones: ["Máximo 10-20 ohmios para CT urbanos, máximo 40 ohmios para CT rurales según disponibilidad", "100 ohmios", "1000 ohmios", "Sin límite"],
    correcta: 0,
    explicacion: "RBT establece: Rt ≤ 10-20Ω (CT urbanos, zona conductiva), Rt ≤ 40Ω (CT rurales, zona resistiva). La resistencia baja es crítica para descargar rápidamente defectos y limitar tensión de contacto V = Rt × Ifalta."
  },
  {
    id: 29,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la diferencia entre tierra de servicio y tierra de protección en un CT?",
    opciones: ["Tierra de servicio: punto neutro de transformador; Tierra de protección: masas y conductores PE (pueden separadas o conectadas)", "No hay diferencia", "Solo una es necesaria", "Se usan en diferentes épocas"],
    correcta: 0,
    explicacion: "En esquema TN: Tierra de servicio (neutro transformador) se conecta a tierra. Tierra de protección (masas) también a tierra. En esquema TT: Son independientes. Ambas deben cumplir requisitos de resistencia según RBT."
  },
  {
    id: 30,
    imagen: false,
    svg: false,
    texto: "¿Qué es una equipotencialidad suplementaria en un Centro de Transformación?",
    opciones: ["Conexión de todos los elementos metálicos (carcasa transformador, celdas, estructura) a potencial similar para evitar tensiones de contacto peligrosas", "Una protección contra rayos", "Un medidor de potencia", "Un sistema de refrigeración"],
    correcta: 0,
    explicacion: "Conectando todas las masas metálicas a la borna de tierra común (equipotencialidad), se evita diferencias de potencial peligrosas. Si alguien toca simultáneamente dos elementos, la tensión entre ellos es ~0V, eliminando riesgo."
  },
  {
    id: 31,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los requisitos de acceso y ventilación en un Centro de Transformación?",
    opciones: ["Acceso fácil para mantenimiento, puerta con cerradura, ventilación natural (mínimo 2 m²/100kVA) o forzada, desagüe, iluminación", "Sin ventilación", "Sin puertas", "Sin acceso necesario"],
    correcta: 0,
    explicacion: "Normas de CT (RBT ITC-40): Puertas de acceso (cierre automático, con cerradura), Ventilación (rejillas a N y S o Este-Oeste), Desagüe de aceite, Iluminación (sin enchufes, luz de emergencia >50lux), Espacio de trabajo alrededor del transformador."
  },
  {
    id: 32,
    imagen: false,
    svg: false,
    texto: "¿Qué distancia mínima debe mantener un Centro de Transformación de viviendas?",
    opciones: ["Sin distancia mínima (puede estar en planta baja), pero con protecciones de aislamiento acústico y separación de circuitos", "Mínimo 100 metros", "Mínimo 50 metros", "Mínimo 10 metros"],
    correcta: 0,
    explicacion: "Según RBT, el CT puede estar en sótano/planta baja (incluso bajo vivienda) si: Está completamente separado de viviendas, Tiene puertas cortafuegos, Aislamiento acústico, Desagüe de aceite, Sin ventilaciones directas a viviendas."
  },
  {
    id: 33,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son las medidas de seguridad para trabajar en un Centro de Transformación?",
    opciones: ["Identificación de tensión, herramientas aisladas, puesta a tierra del trabajador, prohibición de trabajo solo, equipos de protección, formación", "Sin medidas especiales", "Solo usar herramientas metálicas", "Permitido trabajo en soledad"],
    correcta: 0,
    explicacion: "Seguridad en CT: 1) Identificación clara de circuitos MT/BT, 2) Herramientas aisladas, 3) Equipos de protección (casco, guantes, botas aislantes), 4) Puesta a tierra temporal, 5) Nunca solos, 6) Formación específica obligatoria."
  },
  {
    id: 34,
    imagen: false,
    svg: false,
    texto: "¿Qué precauciones especiales se requieren con el aceite del transformador?",
    opciones: ["Contención de derrames (dique de retención), desagüe controlado, filtrado periódico, recogida responsable en desmantelamiento", "Sin precauciones", "Verter directo a alcantarilla", "Aceite no contaminante"],
    correcta: 0,
    explicacion: "Normas medioambientales: 1) Dique de contención (100% volumen aceite), 2) Desagüe con válvula de cierre, 3) Filtrado cada 5-10 años, 4) Recogida y reciclaje en desmantelamiento, 5) Prohibición de aceite mineral en zonas sensibles (usar bi-fluido)."
  },
  {
    id: 35,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la capacidad de extinción de incendios requerida en un Centro de Transformación?",
    opciones: ["Extintor de polvo seco de potencia mínima, colocado accesible pero fuera de zona de arco; puertas cortafuegos hacia viviendas", "Sin extintor", "Solo agua", "Sin protección específica"],
    correcta: 0,
    explicacion: "Protección contra incendios en CT: 1) Extintor de polvo seco (6kg mínimo), 2) Puertas cortafuegos (EI2 60 mínimo) separando CT de viviendas, 3) Sin sistemas de agua (riesgo eléctrico), 4) Ventilación para gases de combustión."
  },
  {
    id: 36,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son las pruebas iniciales obligatorias en un Centro de Transformación antes de su puesta en servicio?",
    opciones: ["Prueba de aislamiento (voltaje, resistencia), medida de pérdidas, relación de transformación, resistencia de tierra, prueba de protecciones", "Sin pruebas", "Solo medida visual", "Solo encendido"],
    correcta: 0,
    explicacion: "Puesta en servicio de CT (RBT ITC-41): 1) Prueba de aislamiento con megaóhmetro (≥100MΩ típico), 2) Medida de pérdidas en vacío/carga, 3) Relación de transformación, 4) Resistencia de tierra (<20Ω), 5) Disparo de protecciones."
  },
  {
    id: 37,
    imagen: false,
    svg: false,
    texto: "¿Qué mantenimiento periódico es necesario en un Centro de Transformación?",
    opciones: ["Anual: Limpieza, inspección visual, medida de tierra; Cada 5 años: Filtrado de aceite; Cada 10 años: Pruebas completas de aislamiento", "Sin mantenimiento", "Solo cuando falla", "Una vez cada 20 años"],
    correcta: 0,
    explicacion: "Plan de mantenimiento: 1) Revisión anual (limpieza, inspection, tierra), 2) Filtrado de aceite cada 5-10 años, 3) Pruebas de aislamiento cada 10-20 años, 4) Mantenimiento de celdas (contactos, aceites), 5) Revisión de protecciones."
  },
  {
    id: 38,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el ciclo de vida típico de un transformador de potencia en un CT?",
    opciones: ["20-30 años con mantenimiento adecuado; puede extenderse a 40+ años con filtrado de aceite y cuidados", "5 años máximo", "1 año", "Indefinido sin mantenimiento"],
    correcta: 0,
    explicacion: "Vida útil del transformador: Nominal 20-30 años bajo condiciones normales. Puede extenderse con: Filtrado regular de aceite, Control de humedad, Operación dentro de rangos nominales, Mantenimiento preventivo de protecciones."
  },
  {
    id: 39,
    imagen: false,
    svg: false,
    texto: "¿Qué indica una temperatura anormalmente alta en el transformador?",
    opciones: ["Posible falta de refrigeración, sobrecarga, defecto en el aislamiento o ventiladores obstruidos", "Funcionamiento normal", "Necesidad de apagar completamente", "Aumento de potencia"],
    correcta: 0,
    explicacion: "Sobretemperatura del transformador (<80°C es normal): Causas: Ventiladores averiados, Aceite sucio (aislamiento pobre), Sobrecarga continuada, Defecto en núcleo. Requiere: Inspección inmediata, Reducción de carga, Análisis de gases del aceite."
  },
  {
    id: 40,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento seguro para desconectar un Centro de Transformación?",
    opciones: ["1) Abrir Interruptor MT (bajo carga), 2) Abrir Seccionador MT (sin carga), 3) Puesta a tierra de MT, 4) Avisar con letrero, 5) Trabajar solo después de verificación", "Apagar sin procedimiento", "Solo abrir seccionador", "Trabajar con circuito cerrado"],
    correcta: 0,
    explicacion: "Maniobra segura: 1) ABRIR interruptor MT (abre bajo carga), 2) ABRIR seccionador MT (sin carga, aislamiento total), 3) CONECTAR puesta a tierra portátil en MT (antes de tocar), 4) Colocar letrero 'NO ACCIONAR', 5) Verificar con voltímetro antes de trabajar."
  },
  {
    id: 41,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la normativa principal que regula los Centros de Transformación en España?",
    opciones: ["RBT ITC-40 (Centros de Transformación) e ITC-41 (Sistemas de Puesta a Tierra)", "Solo ISO 9001", "Solo UNE 60950", "Decreto de hace 50 años"],
    correcta: 0,
    explicacion: "Normativa de CT en España: RBT ITC-40/41 (Real Decreto 842/2002) implementa Directivas Europeas. ITC-40 cubre diseño, ubicación, seguridad. ITC-41 especifica puesta a tierra. Normas complementarias: UNE EN 61936, UNE EN 60265."
  },
  {
    id: 42,
    imagen: false,
    svg: false,
    texto: "¿Qué es el esquema TN-S en un Centro de Transformación?",
    opciones: ["Sistema donde el neutro está puesto a tierra en origen (CT) y conductores PE y N son separados en toda la instalación", "Un tipo de transformador", "Una celda de MT", "Un medidor de potencia"],
    correcta: 0,
    explicacion: "Esquema TN-S (Tierra-Neutro separados): 1) Neutro del transformador puesto a tierra en CT, 2) Conductores N y PE separados desde CT hasta el usuario, 3) PE conectado a masas del transformador y estructura, 4) Muy común en distribución española."
  },
  {
    id: 43,
    imagen: false,
    svg: false,
    texto: "¿Qué es el esquema TT en un Centro de Transformación?",
    opciones: ["Sistema donde el neutro está puesto a tierra en el CT y las masas en el usuario están conectadas a tierra independiente (electrodo propio)", "Sistema con transformador trifásico", "Un tipo de celda", "Un cable de distribución"],
    correcta: 0,
    explicacion: "Esquema TT (Tierra-Tierra separada): 1) Neutro puesto a tierra en CT, 2) Masas en usuario a tierra propia (electrodo independiente), 3) Necesita protección diferencial 30mA obligatoria, 4) Usado en zonas con tierra deficiente o distribución antigua."
  },
  {
    id: 44,
    imagen: false,
    svg: false,
    texto: "¿Qué distancia debe mantener un Centro de Transformación de un punto de agua superficial?",
    opciones: ["Mínimo 5 metros de aguas superficiales (ríos, lagos), 10 metros de captaciones de agua potable", "Sin distancia mínima", "Mínimo 1 metro", "Sin restricción"],
    correcta: 0,
    explicacion: "Restricciones medioambientales (RBT ITC-40): 5m mínimo de masas de agua superficial, 10m de captaciones de agua potable, 3m de límite de vivienda (en algunos supuestos). Justificación: Evitar contaminación por derrames de aceite."
  },
  {
    id: 45,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la obligación del titular del Centro de Transformación respecto a inspecciones?",
    opciones: ["Inspección inicial previa a puesta en servicio, inspecciones periódicas cada 5-10 años, y mantenimiento según plan", "Sin inspecciones obligatorias", "Solo cuando lo solicite la distribuidora", "Una sola inspección al principio"],
    correcta: 0,
    explicacion: "Obligaciones del propietario (RBT Artículo 16): 1) Inspección inicial por OCA (Organismo de Control Autorizado) antes de puesta en servicio, 2) Inspecciones periódicas (5-10 años según riesgo), 3) Mantenimiento según plan, 4) Documentación disponible."
  },
  {
    id: 46,
    imagen: false,
    svg: false,
    texto: "¿Cómo se calcula la potencia del transformador necesaria para una zona?",
    opciones: ["Sn ≥ Pmax (potencia máxima prevista) + reserva (típicamente 10-20%), considerando simultaneidad", "Sn = Potencia total sin reserva", "Sn = Potencia mínima posible", "Sin cálculo necesario"],
    correcta: 0,
    explicacion: "Dimensionamiento de transformador: 1) Calcular Pmax prevista (viviendas + comercios con coeficientes), 2) Aplicar coeficiente de simultaneidad (típicamente 0.6-0.8), 3) Añadir reserva 10-20%, 4) Elegir potencia comercial inmediata superior (100, 160, 250, 400, 630 kVA)."
  },
  {
    id: 47,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la fórmula para calcular la corriente nominal del transformador?",
    opciones: ["In = Sn / (√3 × Un) para trifásicos; In = Sn / Un para monofásicos", "In = Sn × 3", "In = Un / Sn", "Sin fórmula establecida"],
    correcta: 0,
    explicacion: "Corriente nominal del transformador: Trifásico 400V: In = Sn(kVA) × 1000 / (√3 × 400) = Sn/0.69. Ejemplo: 160 kVA → In = 160/0.69 ≈ 231A lado BT. Esta In dimensiona cables, protecciones, celdas."
  },
  {
    id: 48,
    imagen: false,
    svg: false,
    texto: "¿Cómo se calcula la corriente de cortocircuito en Baja Tensión de un CT?",
    opciones: ["Icc = (Sn × 100) / (√3 × Un × Zcc%) para trifásico; relacionada con impedancia del transformador", "Icc = Un / Sn", "Icc = Frecuencia × Tensión", "Sin relación con transformador"],
    correcta: 0,
    explicacion: "Cálculo de Icc (BT): Ejemplo 160kVA, 400V, Zcc=4%: Icc = (160×100)/(√3×0,4×4) = 18.1 kA aprox. Esta Icc es crítica: determina poder de corte de interruptores (18-20kA típico en CT), cables, bornas, protecciones."
  },
  {
    id: 49,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la caída de tensión máxima permitida entre el CT y el usuario más alejado?",
    opciones: ["Máximo 3% en la derivación individual, 3% total en BT, combinado máximo 4-5% desde red de distribución", "Sin límite de caída", "Máximo 10%", "Máximo 0.5%"],
    correcta: 0,
    explicacion: "Caídas de tensión RBT: CT a cuadro usuario máximo 3% (10-15V en 400V típicamente), Derivaciones máximo 3%, Total máximo 4-5% incluyendo red de distribución. Caídas mayores afectan funcionamiento de equipos y pérdidas eléctricas."
  },
  {
    id: 50,
    imagen: false,
    svg: false,
    texto: "¿Cómo se selecciona la sección de los cables de la derivación individual desde CT?",
    opciones: ["Sección = In × 1.25 / (J × 57 para CU ó 35 para AL), donde J es densidad de corriente; típicamente 16-70mm² en CT", "Sección aleatoria", "Mínimo 6mm²", "Sin procedimiento"],
    correcta: 0,
    explicacion: "Selección de cable de derivación: 1) Calcular corriente (In = Sn/Un), 2) Aplicar densidad J (4-5 A/mm² para Cu subterráneo), 3) Verificar caída de tensión Δu = (ρ×L×I)/(S×1000)<3%, 4) Ejemplo: 160kVA → 231A → 50-70mm² CU típico."
  },
  {
    id: 51,
    imagen: false,
    svg: false,
    texto: "¿Qué sucede cuando hay un cortocircuito en Baja Tensión dentro del CT?",
    opciones: ["1) Interruptor MT abre instantáneamente por protección diferencial, 2) Descargan las corrientes de falta a tierra, 3) Se aísla el defecto, 4) Se requiere reparación antes de reinicio", "Nada especial ocurre", "Solo se calienta el cable", "Sigue funcionando normalmente"],
    correcta: 0,
    explicacion: "Cortocircuito en BT del CT: 1) Se genera Icc alta (15-20kA típico), 2) Relé diferencial MT detecta desequilibrio, 3) Abre interruptor MT (<100ms) aislando el transformador, 4) Corriente se descarga a tierra de forma controlada, 5) Circuitos BT quedan sin alimentación."
  },
  {
    id: 52,
    imagen: false,
    svg: false,
    texto: "¿Qué indica si se dispara repetidamente el Interruptor General Automático (IGA) de un CT?",
    opciones: ["Posible sobrecarga continuada, cortocircuito intermitente, defecto en aislamiento, o ajuste incorrecto de protecciones", "Funcionamiento normal", "Necesidad de aumentar potencia", "Sin significado"],
    correcta: 0,
    explicacion: "Disparos repetidos del IGA: 1) Verificar carga total (puede haber sobrecarga), 2) Inspeccionar circuitos BT (posible cortocircuito o aislamiento deficiente), 3) Medir resistencia de aislamiento, 4) Revisar calibración de protecciones, 5) Contactar técnico especializado."
  },
  {
    id: 53,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento si se detecta aceite en la dique de retención del CT?",
    opciones: ["Alertar inmediatamente a gestor ambiental, no verter a alcantarilla, recoger con absorbentes, analizar origen (fuga del transformador)", "Verter a la alcantarilla", "Ignorar el derrame", "Lavar con agua"],
    correcta: 0,
    explicacion: "Protocolo de derrame de aceite: 1) PARAR, no continuar operación (posible defecto grave), 2) Avisar responsable ambiental, 3) Recoger con materiales absorbentes (tierra, sepiolita), 4) Inspeccionado fuga (sellado, cambio de tapa), 5) Reciclar aceite según normativa."
  },
  {
    id: 54,
    imagen: false,
    svg: false,
    texto: "¿Qué indica una fuerte olor a quemado proveniente del transformador?",
    opciones: ["Señal de alerta grave: Posible arco interno, falta de aislamiento, o sobrecalentamiento. Desconectar y evaluar inmediatamente", "Olor normal de operación", "Señal de eficiencia", "Sin importancia"],
    correcta: 0,
    explicacion: "Olor a quemado = EMERGENCIA: Indica arco o defecto grave de aislamiento. Acciones: 1) Desconectar transformador (abrir MT), 2) Avisar inmediatamente a responsable/distribuidora, 3) Evacuar zona, 4) Esperar evaluación técnica antes de reinicio."
  },
  {
    id: 55,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el procedimiento de rescate si alguien sufre contacto eléctrico en un CT?",
    opciones: ["1) Desconectar fuente (MT o BT según sea), 2) NO tocar directamente, 3) Usar palo aislante si es necesario, 4) Llamar 112, 5) RCP si es necesario", "Tocar directamente", "Esperar sin actuar", "Sin protocolo"],
    correcta: 0,
    explicacion: "Protocolo ante electrocución en CT: 1) DESCONECTAR fuente eléctrica (abrir interruptores), 2) NUNCA tocar cuerpo mientras esté en contacto (puede electrocutarte), 3) Usar objeto aislante (palo de madera) para separar si es necesario, 4) Llamar 112, 5) RCP si está inconsciente."
  },
  {
    id: 56,
    imagen: false,
    svg: false,
    texto: "¿Qué es un transformador seco (encapsulado en resina) vs. transformador de aceite?",
    opciones: ["Seco: Aislamiento resina, sin aceite, para interiores/urbano, menos mantenimiento; Aceite: Mejor refrigeración, económico, requiere dique", "Sin diferencia", "Solo uno existe", "Depende de voltaje"],
    correcta: 0,
    explicacion: "Comparativa: Seco (Resina): No requiere mantenimiento de aceite, instalable en edificios (seguridad incendios), pero más caro y menor capacidad de sobrecarga. Aceite: Económico, mejor disipación térmica, requiere mantenimiento y espacios especiales."
  },
  {
    id: 57,
    imagen: false,
    svg: false,
    texto: "¿Qué es un transformador 'eco-transformador' o de aceite bi-fluido?",
    opciones: ["Transformador con aislamiento de aceite sintético biodegradable, reduce riesgo ambiental en zonas ecológicas (próximas a agua, natura protegida)", "Un transformador pequeño", "Un transformador sin aceite", "Un tipo de celda"],
    correcta: 0,
    explicacion: "Eco-transformadores: Utilizan aceite sintético (ésteres) en lugar de mineral: Biodegradable, No tóxico, Mejor comportamiento ambiental. Requerido en zonas protegidas por normativa europea. Coste ~30% mayor, misma vida útil."
  },
  {
    id: 58,
    imagen: false,
    svg: false,
    texto: "¿Qué tecnologías de monitoreo remoto existen para Centros de Transformación?",
    opciones: ["Sensores de temperatura, humedad en aceite, presión de gas; sistemas SCADA; análisis de gases disueltos (DGA); medida remota de energía", "Sin posibilidad de monitoreo", "Solo lectura manual", "Imposible remotamente"],
    correcta: 0,
    explicacion: "Monitoreo moderno de CT: 1) Sensores de temperatura en aceite (detectan anomalías), 2) Sistemas SCADA para telecontrol, 3) Análisis de gases DGA (predice fallas), 4) Medida remota de energía (pérdidasreal-time), 5) Predictive maintenance basada en datos."
  },
  {
    id: 59,
    imagen: false,
    svg: false,
    texto: "¿Cómo contribuye un Centro de Transformación a la transición energética?",
    opciones: ["Integración de energías renovables (solar, eólica), gestión inteligente de carga, almacenamiento de energía, reducción de pérdidas", "No contribuye", "Solo distribución estática", "Sin relación con renovables"],
    correcta: 0,
    explicacion: "CT y transición energética: 1) Integración de generación distribuida (placas solares en edificios), 2) Cargadores vehículos eléctricos, 3) Almacenamiento local (baterías), 4) Smart grids (gestión dinámica de carga), 5) Reducción de pérdidas por distribuida."
  },
  {
    id: 60,
    imagen: false,
    svg: false,
    texto: "¿Qué significa un transformador con especificación 'Low Loss' o 'Baja Pérdida'?",
    opciones: ["Transformador optimizado con núcleo de acero de grano orientado y conductores de Cu de mayor sección, reduce pérdidas 15-20%, mejora eficiencia y disminuye costes de operación", "Un transformador pequeño", "Un transformador sin pérdidas", "Una marca comercial"],
    correcta: 0,
    explicacion: "Low Loss Transformers: 1) Núcleo acero grano orientado (M3, M4 de mejor calidad), 2) Conductores Cu más grandes (reduce resistencia), 3) Diseño optimizado, 4) Reduce pérdidas de ~2-3% a ~1-1.5%, 4) Coste +10-15%, ROI 5-8 años por ahorro energético."
  }
];
