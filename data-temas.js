/* =========================================================
   TEMA 1: CONDUCTORES Y HERRAMIENTAS ELÉCTRICAS (v2.0)
   100+ preguntas: cobertura completa del temario
   Basado en material oficial Universae
   ========================================================= */

const TEMA_1_DATA = [
  // ========== EXAMEN OFICIAL (10 preguntas) ==========
  {
    id: 100101,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "Con respecto a la resistividad:",
    opciones: ["El cobre es el material con menor resistividad.", "El cobre tiene menor resistividad que el aluminio, pero es más caro.", "El aluminio tiene menor resistividad que el cobre.", "Cuanto mayor sea, mejor conductor es."],
    correctaTexto: "El cobre tiene menor resistividad que el aluminio, pero es más caro.",
    explicacion: "El cobre tiene una resistividad de 1,72×10⁻⁸ Ω·m, menor que el aluminio (2,63×10⁻⁸ Ω·m), pero su mayor coste hace que el aluminio se use en líneas de distribución."
  },
  {
    id: 100102,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "En cuanto a la sección de un conductor:",
    opciones: ["Los fabricantes suelen elaborar las secciones conforme quieren los clientes.", "Cuanto mayor es la sección, mayor es la intensidad que soporta.", "El tipo de aislamiento no varía la intensidad que soporta.", "Todas las anteriores son correctas."],
    correctaTexto: "Cuanto mayor es la sección, mayor es la intensidad que soporta.",
    explicacion: "A mayor sección transversal del conductor, mayor es la intensidad admisible, ya que hay más superficie para el paso de corriente y menor resistencia."
  },
  {
    id: 100103,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "La conductividad:",
    opciones: ["Se ve afectada por la luz incidente.", "Se ve afectada por los efectos mecánicos sobre el cable.", "Se ve afectada por la temperatura del conductor.", "Ninguna de las anteriores es cierta."],
    correctaTexto: "Se ve afectada por la temperatura del conductor.",
    explicacion: "La conductividad de los metales disminuye al aumentar la temperatura, ya que las vibraciones atómicas dificultan el movimiento de los electrones libres."
  },
  {
    id: 100104,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "La principal característica en una herramienta eléctrica ha de ser:",
    opciones: ["Que tenga gran parte de su cuerpo recubierto de aislante y sea segura.", "Que sea pequeña para operar en espacios pequeños.", "Que tenga luces incorporadas para operar en lugares oscuros.", "Que sea de color rojo para que se sepa que está habilitada para trabajar con electricidad."],
    correctaTexto: "Que tenga gran parte de su cuerpo recubierto de aislante y sea segura.",
    explicacion: "La seguridad es la característica principal. Las herramientas eléctricas deben tener el cuerpo aislado para proteger al operario de contactos eléctricos accidentales."
  },
  {
    id: 100105,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "¿Cuál es la función de la armadura en un conductor?",
    opciones: ["Conducir más electricidad.", "Aislar térmicamente al cableado.", "Aumentar el ruido en la señal eléctrica.", "Otorgar al conductor una mayor protección mecánica."],
    correctaTexto: "Otorgar al conductor una mayor protección mecánica.",
    explicacion: "La armadura es una capa de protección mecánica (normalmente de hilos de acero) que protege el cable contra aplastamientos, rozamientos y daños externos."
  },
  {
    id: 100106,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "Los aislamientos se dividen según la tensión capaz de soportar en:",
    opciones: ["220/380 V y 0,6/1 kV.", "450/750 V y 0,6/1 V.", "450/750 V y 0,6/1 kV.", "220/380 V y 450/750 V."],
    correctaTexto: "450/750 V y 0,6/1 kV.",
    explicacion: "Según la norma UNE, los aislamientos se clasifican en dos categorías de tensión: 450/750 V (cables de instalaciones interiores) y 0,6/1 kV (cables de distribución y acometidas)."
  },
  {
    id: 100107,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "Los bornes y conectores sirven para:",
    opciones: ["Calcular la sección del conductor.", "Para conducir la electricidad.", "Unir cables entre sí o con dispositivos eléctricos.", "Ninguna de las anteriores es cierta."],
    correctaTexto: "Unir cables entre sí o con dispositivos eléctricos.",
    explicacion: "Los bornes y conectores son elementos de conexión que permiten unir conductores entre sí o conectarlos a aparatos eléctricos de forma segura y desmontable."
  },
  {
    id: 100108,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "Los guantes o pantallas de seguridad:",
    opciones: ["Son herramientas básicas.", "Son herramientas especiales.", "Son herramientas de comprobación de baja tensión.", "Ninguna de las anteriores es correcta."],
    correctaTexto: "Son herramientas especiales.",
    explicacion: "Los guantes y pantallas de seguridad se clasifican como herramientas especiales de protección individual (EPI), diseñadas para proteger al electricista de contactos eléctricos."
  },
  {
    id: 100109,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "Para la designación de cables:",
    opciones: ["Se usa la norma UNE.", "No existe la designación de cables.", "Se usan letras griegas.", "No está normalizada."],
    correctaTexto: "Se usa la norma UNE.",
    explicacion: "La designación de cables en España se realiza conforme a la norma UNE, que establece un código de letras y números que identifican el material, aislamiento, tensión y sección del cable."
  },
  {
    id: 100110,
    tema: "U1: Conductores y herramientas eléctricas (TEST OFICIAL)",
    texto: "Una manguera:",
    opciones: ["Está constituido por varios conductores.", "Tienen un recubrimiento de material semiconductor.", "Está constituido por un solo hilo conductor.", "Todas las anteriores son ciertas."],
    correctaTexto: "Está constituido por varios conductores.",
    explicacion: "Una manguera es un cable flexible formado por varios conductores aislados reunidos bajo una cubierta común, a diferencia del cable unipolar que tiene un solo conductor."
  },

  // ========== SECCIÓN 1.1: CONDUCTORES ELÉCTRICOS ==========
  // Subsección 1.1.1: Resistencia de un conductor

  {
    id: 1001,
    tema: "Resistencia - Definición",
    texto: "¿Cuál es la definición correcta de resistencia de un conductor?",
    opciones: ["La facilidad para conducir electricidad.", "La oposición que presenta un material al paso de la corriente eléctrica.", "La capacidad de almacenar energía.", "La velocidad de propagación de la corriente."],
    correctaTexto: "La oposición que presenta un material al paso de la corriente eléctrica.",
    explicacion: "La resistencia es la propiedad de los materiales de oponerse al paso de corriente. Se mide en ohmios (Ω) y depende del material, su sección y temperatura."
  },

  {
    id: 1002,
    tema: "Resistividad - Concepto",
    texto: "La resistividad (ρ) es:",
    opciones: ["Una propiedad que varía según la sección del conductor.", "Una propiedad característica del material que no depende de su forma.", "Una propiedad que disminuye con el aumento de temperatura.", "Lo mismo que la resistencia eléctrica."],
    correctaTexto: "Una propiedad característica del material que no depende de su forma.",
    explicacion: "La resistividad es intrínseca al material. Cada material tiene su valor característico. No depende de la forma, tamaño o longitud. La resistencia sí depende de estos factores."
  },

  {
    id: 1003,
    tema: "Resistividad - Cobre vs Aluminio",
    texto: "Con respecto a la resistividad del cobre y aluminio:",
    opciones: ["El cobre es el material con menor resistividad.", "El cobre tiene menor resistividad que el aluminio, pero es más caro.", "El aluminio tiene menor resistividad que el cobre.", "Son iguales en resistividad."],
    correctaTexto: "El cobre tiene menor resistividad que el aluminio, pero es más caro.",
    explicacion: "Cobre: ρ = 1.72 × 10⁻⁴ Ω·mm²/m. Aluminio: ρ = 2.63 × 10⁻⁴ Ω·mm²/m. El cobre es mejor conductor pero más caro, por eso el aluminio se usa en líneas de distribución de larga distancia."
  },

  {
    id: 1004,
    tema: "Resistividad - Tabla de Materiales",
    texto: "¿Cuál es el material conductor más frecuente entre los que aparecen en la tabla de resistividades?",
    opciones: ["La plata.", "El cobre.", "El acero.", "El carbón."],
    correctaTexto: "El cobre.",
    explicacion: "Aunque la plata tiene menor resistividad, el cobre es el material más usado en instalaciones eléctricas por su excelente conductividad, disponibilidad y relación costo-beneficio."
  },

  {
    id: 1005,
    tema: "Fórmula de Resistencia",
    texto: "¿Cuál es la fórmula para calcular la resistencia de un conductor?",
    opciones: ["R = ρ · L / S", "R = ρ · S / L", "R = L · S / ρ", "R = L / (ρ · S)"],
    correctaTexto: "R = ρ · L / S",
    explicacion: "Donde: R = resistencia (Ω), ρ = resistividad del material, L = longitud del conductor (m), S = sección (mm²). A mayor longitud, mayor resistencia; a mayor sección, menor resistencia."
  },

  {
    id: 1006,
    tema: "Temperatura - Efecto en Resistencia",
    texto: "¿Cómo afecta la temperatura a la resistividad del cobre?",
    opciones: ["Disminuye la resistividad al aumentar la temperatura.", "No tiene efecto sobre la resistividad.", "Aumenta la resistividad al aumentar la temperatura.", "El efecto es aleatorio."],
    correctaTexto: "Aumenta la resistividad al aumentar la temperatura.",
    explicacion: "En los metales, la resistividad aumenta con la temperatura. Esto es crítico en cables: por eso se especifica temperatura máxima (70°C en PVC, 90°C en XLPE, 125°C en silicona)."
  },

  // Subsección 1.1.2: Partes que componen un cable

  {
    id: 1007,
    tema: "Partes del Cable - Conductor",
    texto: "¿Cuál es la función del conductor eléctrico en un cable?",
    opciones: ["Aislar la corriente eléctrica.", "Transportar la energía eléctrica.", "Proteger mecánicamente el cable.", "Reflejar la luz."],
    correctaTexto: "Transportar la energía eléctrica.",
    explicacion: "El conductor es la parte central del cable, generalmente de cobre o aluminio. Su función es permitir el flujo de corriente eléctrica desde la fuente al receptor con mínimas pérdidas."
  },

  {
    id: 1008,
    tema: "Partes del Cable - Aislante",
    texto: "¿Cuál es la función del aislante en un cable?",
    opciones: ["Conducir electricidad.", "Aumentar la flexibilidad.", "Evitar cortocircuitos protegiendo el conductor.", "Reducir el peso."],
    correctaTexto: "Evitar cortocircuitos protegiendo el conductor.",
    explicacion: "El aislante rodea el conductor de forma continua. Impide que la corriente escape y evita contactos peligrosos. Puede ser PVC, XLPE, goma natural, etc., según la aplicación."
  },

  {
    id: 1009,
    tema: "Partes del Cable - Cubierta",
    texto: "¿Cuál es la función de la cubierta (funda) externa de un cable?",
    opciones: ["Conducir la corriente de fuga.", "Aumentar la conductividad.", "Proteger al aislante contra daños mecánicos, humedad y luz.", "Facilitar la soldadura."],
    correctaTexto: "Proteger al aislante contra daños mecánicos, humedad y luz.",
    explicacion: "La cubierta es la capa más externa. Protege el aislante de roces, cortes, aplastamientos, humedad, luz UV y productos químicos. Puede ser PVC, goma, policloropreno, etc."
  },

  {
    id: 1010,
    tema: "Partes del Cable - Armadura",
    texto: "¿Cuál es la función de la armadura en un cable subterráneo?",
    opciones: ["Conducir mejor la corriente.", "Otorgar mayor protección mecánica contra daños externos.", "Mejorar el aislamiento.", "Aumentar la flexibilidad."],
    correctaTexto: "Otorgar mayor protección mecánica contra daños externos.",
    explicacion: "La armadura es una trenza de hilos de acero que protege contra aplastamientos, roces y cortes. Se usa en cables subterráneos donde hay riesgo mecánico. No tiene función eléctrica directa."
  },

  // Subsección 1.1.3: Materiales conductores

  {
    id: 1011,
    tema: "Materiales Conductores - Cobre",
    texto: "¿Por qué el cobre es el material más utilizado en cables de instalaciones eléctricas interiores?",
    opciones: ["Porque es el más barato.", "Porque tiene la menor resistividad después de la plata y es económicamente viable.", "Porque es el más ligero.", "Porque no necesita aislamiento."],
    correctaTexto: "Porque tiene la menor resistividad después de la plata y es económicamente viable.",
    explicacion: "Cobre: excelente conductor, resistividad muy baja, buena ductilidad, fácil de soldar, disponible. Aluminio se usa en líneas de distribución por su menor coste a pesar de mayor resistividad."
  },

  {
    id: 1012,
    tema: "Materiales Conductores - Aluminio",
    texto: "¿Cuál es la principal ventaja del aluminio frente al cobre en líneas de distribución?",
    opciones: ["Mayor conductividad.", "Menor resistividad.", "Menor coste económico y menor peso.", "Mayor facilidad de soldadura."],
    correctaTexto: "Menor coste económico y menor peso.",
    explicacion: "Aunque tiene mayor resistividad (1.5 veces más que cobre), el aluminio es más ligero, más barato y suficiente para líneas de distribución. Para secciones equivalentes, se debe usar mayor sección de aluminio."
  },

  {
    id: 1013,
    tema: "Conductores - Conductividad",
    texto: "¿De qué factores depende la conductividad de un material?",
    opciones: ["Solo de la temperatura.", "De la estructura atómica del material y de la temperatura.", "De la longitud del conductor.", "De la tensión aplicada."],
    correctaTexto: "De la estructura atómica del material y de la temperatura.",
    explicacion: "La conductividad es inversa a la resistividad. Depende de cómo los electrones pueden moverse libremente en el material. La temperatura afecta: en metales aumenta la resistencia con calor."
  },

  {
    id: 1014,
    tema: "Conductores - Tablas de Referencia",
    texto: "Según la tabla de resistividades, ¿cuál es el material más conductor?",
    opciones: ["El aluminio.", "El cobre.", "La plata.", "El hierro."],
    correctaTexto: "La plata.",
    explicacion: "La plata tiene la menor resistividad (1.6 × 10⁻⁴ Ω·mm²/m), incluso menor que el cobre. Pero su alto coste la reserva para aplicaciones especiales. El cobre es el equilibrio óptimo."
  },

  // Subsección 1.1.4: Materiales aislantes

  {
    id: 1015,
    tema: "Aislamientos - Definición",
    texto: "¿Qué es un material aislante?",
    opciones: ["Un material que conduce bien la electricidad.", "Un material donde no se produce libre flujo de electrones.", "Un material que se calienta fácilmente.", "Un material flexible."],
    correctaTexto: "Un material donde no se produce libre flujo de electrones.",
    explicacion: "Los aislantes tienen pocos electrones libres, impidiendo el flujo de corriente. Se colocan alrededor del conductor para evitar contactos peligrosos y cortocircuitos."
  },

  {
    id: 1016,
    tema: "Aislamientos - Clasificación",
    texto: "¿Cuál es la principal clasificación de los aislamientos utilizados en cables?",
    opciones: ["Por color.", "Por diámetro.", "En termoplásticos y termoestables.", "En rígidos y flexibles."],
    correctaTexto: "En termoplásticos y termoestables.",
    explicacion: "Termoplásticos: PVC, polietileno (PE). Pierden propiedades al calentarse, se pueden remoldearse. Termoestables: XLPE, EPR, silicona. Mantienen propiedades a mayor temperatura, no se remoldeables."
  },

  {
    id: 1017,
    tema: "Aislamientos Termoplásticos - Ejemplos",
    texto: "¿Cuál es un ejemplo de aislamiento termoplástico?",
    opciones: ["XLPE (Polietileno reticulado).", "EPR (Etileno Propileno).", "PVC (Policloruro de vinilo).", "Silicona."],
    correctaTexto: "PVC (Policloruro de vinilo).",
    explicacion: "El PVC es termoplástico. A 70°C es muy usado en instalaciones interiores (cables H07V-U). El XLPE y EPR son termoestables, permitiendo mayores temperaturas de trabajo (hasta 90-125°C)."
  },

  {
    id: 1018,
    tema: "Aislamientos Termoestables - Ejemplos",
    texto: "¿Cuál es un ejemplo de aislamiento termoestable?",
    opciones: ["Polietileno (PE) lineal.", "Teflón (PTFE).", "XLPE (Polietileno reticulado).", "Poliuretano (PU)."],
    correctaTexto: "XLPE (Polietileno reticulado).",
    explicacion: "XLPE, EPR y silicona son termoestables. Mantienen propiedades a temperaturas más altas (90°C), permitiendo mayor intensidad de corriente. Se usan en instalaciones con mayor demanda térmicas."
  },

  {
    id: 1019,
    tema: "Aislamientos - Tensión de Aislamiento",
    texto: "¿Qué significa 450/750 V en la designación de un aislamiento?",
    opciones: ["450 V es la tensión máxima, 750 V es la mínima.", "450 V es la tensión entre conductores, 750 V es la tensión máxima de servicio.", "Ambas son la misma cosa, solo diferentes países.", "Es un rango de funcionamiento seguro."],
    correctaTexto: "450 V es la tensión entre conductores, 750 V es la tensión máxima de servicio.",
    explicacion: "En cables de 450/750 V: el primer valor (450 V) es la tensión nominal entre conductores activos. El segundo (750 V) es la máxima entre conductor y tierra. Se usa en instalaciones interiores hasta 230/400V."
  },

  // Subsección 1.1.5: Designaciones de cables

  {
    id: 1020,
    tema: "Designación de Cables - Norma",
    texto: "¿Por qué norma están reguladas las designaciones de cables?",
    opciones: ["Por la norma ISO.", "Por las normas UNE/EN.", "Por la norma DIN.", "No están normalizadas."],
    correctaTexto: "Por las normas UNE/EN.",
    explicacion: "La designación de cables sigue las normas UNE (españolas) y EN (europeas). Ejemplo: H07V-U, H07Z1-K. Estas normas definen caractéristicamente: tipo de aislamiento, tensión, flexibilidad, etc."
  },

  {
    id: 1021,
    tema: "Designación - Código H",
    texto: "¿Qué significa el primer símbolo 'H' en la designación de un cable?",
    opciones: ["Cable de alta tensión.", "Cable según normas armonizadas.", "Cable resistente al calor.", "Cable de uso doméstico."],
    correctaTexto: "Cable según normas armonizadas.",
    explicacion: "'H' = Cable según normas armonizadas (UNE-EN). Sinónimo de cumplimiento de estándares europeos. Es obligatorio en toda Europa."
  },

  {
    id: 1022,
    tema: "Designación - Códigos de Tensión",
    texto: "En la designación H07V-K, ¿qué indica '07'?",
    opciones: ["7 conductores.", "Tensión nominal 0.7 kV.", "Tensión de 450/750 V.", "7 milímetros de diámetro."],
    correctaTexto: "Tensión de 450/750 V.",
    explicacion: "'07' siempre significa 450/750 V en designaciones de cable. Es el código de tensión estándar para instalaciones interiores en Europa."
  },

  {
    id: 1023,
    tema: "Designación - Código V",
    texto: "¿Qué aislamiento corresponde al código 'V' en una designación de cable?",
    opciones: ["Goma de estireno-butadieno (R).", "Policloruro de vinilo (PVC).", "Polietileno reticulado (XLPE).", "Etileno propileno (EPR)."],
    correctaTexto: "Policloruro de vinilo (PVC).",
    explicacion: "'V' = PVC (policloruro de vinilo). Es el aislamiento más común en instalaciones interiores. H07V-U es rígido (para ductos), H07V-K es flexible (para mangueras)."
  },

  {
    id: 1024,
    tema: "Designación - Código K",
    texto: "¿Qué significa el código 'K' al final de H07V-K?",
    opciones: ["Cable de acero.", "Cable flexible para servicios móviles.", "Cable Keystone.", "Ninguna de las anteriores."],
    correctaTexto: "Cable flexible para servicios móviles.",
    explicacion: "'K' indica flexibilidad. H07V-K es la manguera flexible (cable con múltiples finos conductores) usada en herramientas portátiles. H07V-U es rígido (usado en instalaciones fijas)."
  },

  {
    id: 1025,
    tema: "Designación - Ejemplo Completo",
    texto: "¿Qué características tiene un cable H07Z1-K?",
    opciones: ["PVC rígido, 450/750 V, para instalaciones fijas.", "XLPE flexible, 450/750 V, mezcladora termoplástica, para servicios móviles.", "PVC flexible, 0.6/1 kV, no propagador de llama.", "Cobre blindado, alta tensión."],
    correctaTexto: "XLPE flexible, 450/750 V, mezcladora termoplástica, para servicios móviles.",
    explicacion: "H07Z1-K: H=armonizado, 07=450/750V, Z1=mezcla termoplástica sin halógenos (bajo humo), K=flexible. Se usa en máquinas, herramientas que requieren movimiento."
  },

  // Subsección 1.1.6: Secciones normalizadas

  {
    id: 1026,
    tema: "Secciones - Normalización",
    texto: "¿Cuál es la sección mínima normalizada para cables de instalaciones interiores?",
    opciones: ["1 mm².", "1.5 mm².", "2 mm².", "2.5 mm²."],
    correctaTexto: "1.5 mm².",
    explicacion: "La sección mínima normalizada es 1.5 mm². Se usa para circuitos de iluminación. Para circuitos de fuerza se usa 2.5 mm² o superior según carga. El REBT especifica estas mínimas."
  },

  {
    id: 1027,
    tema: "Secciones - Relación con Intensidad",
    texto: "¿Cuál es la relación entre la sección del conductor y la intensidad máxima admisible?",
    opciones: ["Son inversamente proporcionales.", "No tienen relación.", "Son directamente proporcionales.", "Dependen solo de la temperatura."],
    correctaTexto: "Son directamente proporcionales.",
    explicacion: "A mayor sección de conductor, mayor es la intensidad máxima que puede circular sin que se deteriore el aislamiento. Esto es fundamental en el cálculo de instalaciones."
  },

  {
    id: 1028,
    tema: "Secciones - Métodos de Instalación",
    texto: "En la tabla de intensidades, ¿qué significa 'DI/D2'?",
    opciones: ["Diámetro interno/externo.", "Método de instalación en conductos.", "Diferencia de intensidad.", "Código de designación."],
    correctaTexto: "Método de instalación en conductos.",
    explicacion: "DI/D2 es un método de instalación REBT (Reglamento Electrotécnico de Baja Tensión): cables bajo tubo enterrados. Otros métodos: B1 (bandejas), B2 (canales), C (embutidos en pared), etc."
  },

  {
    id: 1029,
    tema: "Secciones - Tabla de Intensidades Cobre",
    texto: "Según la tabla de intensidades normalizadas, ¿cuál es aproximadamente la intensidad máxima para un cable de cobre de 6 mm² en método B2?",
    opciones: ["22 A", "37 A", "44 A", "53 A"],
    correctaTexto: "44 A",
    explicacion: "Para cobre de 6 mm² en método B2 (bandeja perforada): 44 A. En B1 sería 37 A. En DI/D2 (conducto) sería 37 A. El método de instalación afecta el calentamiento del cable."
  },

  {
    id: 1030,
    tema: "Secciones - Tabla de Intensidades Aluminio",
    texto: "¿Por qué la intensidad máxima del aluminio es menor que la del cobre para la misma sección?",
    opciones: ["Porque pesa más.", "Porque tiene mayor resistividad, genera más calor.", "Porque es más frágil.", "Porque es más flexible."],
    correctaTexto: "Porque tiene mayor resistividad, genera más calor.",
    explicacion: "Resistividad del aluminio > cobre. Para igual corriente, el aluminio genera más pérdidas (I²R), más calor. Por eso admite menos intensidad. Para igual intensidad, se necesita mayor sección."
  },

  // ========== SECCIÓN 1.2: TIPOS DE EMPALMES ==========

  {
    id: 1031,
    tema: "Empalmes - Definición",
    texto: "¿Qué es un empalme en instalaciones eléctricas?",
    opciones: ["Un corte de cable.", "Una unión de dos o más conductores para continuar la conducción de corriente.", "Una derivación de circuito.", "Un tipo de aislante."],
    correctaTexto: "Una unión de dos o más conductores para continuar la conducción de corriente.",
    explicacion: "El empalme une conductores manteniendo continuidad eléctrica y mecánica. Debe ser seguro, fiable y duradero. Existen varios tipos según su uso: Western, Duplex, Derivación simple, etc."
  },

  {
    id: 1032,
    tema: "Empalmes - Tipos Principales",
    texto: "¿Cuáles son los principales tipos de empalmes?",
    opciones: ["Solo empalmes aéreos.", "Western (unión), Duplex, Derivación simple (T), Derivación doble (C, H), Trenzado o en cola de rata.", "Solo empalmes subterráneos.", "Solo conectores rápidos."],
    correctaTexto: "Western (unión), Duplex, Derivación simple (T), Derivación doble (C, H), Trenzado o en cola de rata.",
    explicacion: "Cada tipo se elige según la aplicación: Western para unir dos cables con igual sección, Duplex para ahorrar resistencia mecánica, Derivaciones (T) para unir un cable en medio, etc."
  },

  {
    id: 1033,
    tema: "Empalme Western",
    texto: "¿Cuál es la principal característica del empalme Western?",
    opciones: ["Se usa para derivar circuitos.", "Une dos conductores con una sencilla y firme unión mediante entrelazamiento.", "Requiere soldadura obligatoria.", "Se usa solo en tensión."],
    correctaTexto: "Une dos conductores con una sencilla y firme unión mediante entrelazamiento.",
    explicacion: "El empalme Western (unión o prolongación) es el más simple: se entrecruzan los conductores helicoidalmente. Es mecánico y eléctrico si se realiza correctamente. No es lo más usado en instalaciones modernas."
  },

  {
    id: 1034,
    tema: "Empalme Duplex",
    texto: "¿Cuál es la ventaja del empalme Duplex?",
    opciones: ["Es más barato.", "Son dos empalmes Western escalados, lo que evita posibles cortocircuitos entre ellos.", "No necesita aislante.", "Se usa solo en interiores."],
    correctaTexto: "Son dos empalmes Western escalados, lo que evita posibles cortocircuitos entre ellos.",
    explicacion: "El Duplex es un escalonamiento del Western. Los dos puntos de unión están desplazados, mejorando la distribución de fuerzas y seguridad. Más robusto que Western simple."
  },

  {
    id: 1035,
    tema: "Empalme Derivación Simple (T)",
    texto: "¿Para qué se usa el empalme en derivación simple tipo T?",
    opciones: ["Para unir dos cables de igual tamaño.", "Para conectar un conductor desde el medio de otro (derivación).", "Para alta tensión solo.", "Para cables armados."],
    correctaTexto: "Para conectar un conductor desde el medio de otro (derivación).",
    explicacion: "La derivación T permite conectar un cable desde un punto intermedio de otro cable ya existente. Se usa para tomar alimentación en un punto de línea sin interrumpirla."
  },

  {
    id: 1036,
    tema: "Empalme Derivación Doble",
    texto: "¿Qué tipos de derivación doble existen?",
    opciones: ["Solo tipo C.", "Tipo C (cruz simple) y tipo H (cruz con nudo de seguridad).", "Solo tipo H.", "Tipo T y tipo S."],
    correctaTexto: "Tipo C (cruz simple) y tipo H (cruz con nudo de seguridad).",
    explicacion: "Derivación doble básica (C): dos cables salen del conductor recto. Derivación doble tipo H: incluye un nudo de seguridad que aumenta resistencia mecánica. Se usan en redes aéreas."
  },

  {
    id: 1037,
    tema: "Empalme Trenzado",
    texto: "¿Cuál es la característica principal del empalme trenzado o en cola de rata?",
    opciones: ["Es el más simple.", "Es el empalme más usado porque permite unir hasta 4 conductores.", "Se usa solo en baja tensión.", "Se realiza obligatoriamente con soldadura."],
    correctaTexto: "Es el empalme más usado porque permite unir hasta 4 conductores.",
    explicacion: "El empalme trenzado (o cola de rata) consiste en entrelazar múltiples conductores helicoidalmente. Permite unir hasta 4 conductores. Es el más versátil y frecuente en instalaciones, aunque modernas prefieren conectores."
  },

  {
    id: 1038,
    tema: "Empalmes - Seguridad Mecánica",
    texto: "¿Qué es importante para garantizar la seguridad de un empalme mecánico?",
    opciones: ["Solo la limpieza.", "Que sea sencillo de hacer.", "Una correcta realización que garantice resistencia mecánica y continuidad eléctrica, además de adecuado aislamiento posterior.", "El color del aislante."],
    correctaTexto: "Una correcta realización que garantice resistencia mecánica y continuidad eléctrica, además de adecuado aislamiento posterior.",
    explicacion: "Un buen empalme requiere: 1) Resistencia mecánica (aguante tracción), 2) Continuidad eléctrica (baja resistencia de transición), 3) Aislamiento correcto. El reglamento lo especifica en ITC-BT-23."
  },

  // ========== SECCIÓN 1.2.2: BORNES Y CONECTORES ==========

  {
    id: 1039,
    tema: "Bornes - Definición",
    texto: "¿Qué es un borne en una instalación eléctrica?",
    opciones: ["Un tipo de empalme especial.", "Un punto de conexión que facilita la unión de conductores entre sí o con dispositivos.", "Una herramienta de trabajo.", "Un tipo de aislante."],
    correctaTexto: "Un punto de conexión que facilita la unión de conductores entre sí o con dispositivos.",
    explicacion: "Los bornes (borneras) son elementos de conexión eléctrica que permiten unir conductores de forma segura, repetible y reversible (si es desmontable). Muy usados en cuadros eléctricos modernos."
  },

  {
    id: 1040,
    tema: "Bornes - Ventajas",
    texto: "¿Cuál es la principal ventaja del uso de bornes frente a empalmes mecánicos?",
    opciones: ["Son más baratos siempre.", "Permiten conexiones seguras, repetibles y fáciles de desconectar si es necesario.", "No necesitan aislamiento.", "Se pueden usar en alta tensión."],
    correctaTexto: "Permiten conexiones seguras, repetibles y fáciles de desconectar si es necesario.",
    explicacion: "Los bornes ofrecen: contacto presionado confiable, repetibilidad (mismo contacto cada vez), reversibilidad (desconectable), aspecto profesional. Por eso son estándar en cuadros modernos."
  },

  {
    id: 1041,
    tema: "Bornes - Regletas",
    texto: "¿Qué son las regletas de bornes?",
    opciones: ["Herramientas para cortar cable.", "Conjuntos de bornes dispuestos linealmente para conexión múltiple.", "Tipos de empalmes.", "Materiales aislantes."],
    correctaTexto: "Conjuntos de bornes dispuestos linealmente para conexión múltiple.",
    explicacion: "Las regletas son filas de bornes montadas en riel DIN. Permiten conexiones organizadas de múltiples conductores en cuadros eléctricos, facilitando mantenimiento y identificación."
  },

  {
    id: 1042,
    tema: "Conectores - Definición",
    texto: "¿Qué función tienen los conectores en instalaciones eléctricas?",
    opciones: ["Aislar cables.", "Permitir conexiones rápidas y desmontables entre cables o entre cable y dispositivo.", "Solo estéticos.", "Proteger contra cortocircuitos."],
    correctaTexto: "Permitir conexiones rápidas y desmontables entre cables o entre cable y dispositivo.",
    explicacion: "Los conectores (enchufes, fichas) permiten uniones rápidas sin herramientas. Existen tipos: macho-hembra, de distintos voltajes, estanco (IP67), etc. Muy comunes en equipos y herramientas."
  },

  {
    id: 1043,
    tema: "Conectores - Cable-Placa",
    texto: "¿Cuál es la función de los conectores cable-placa?",
    opciones: ["Unir dos cables.", "Unir cables a circuitos impresos o placas de control.", "Derivar circuitos.", "Solo proteger."],
    correctaTexto: "Unir cables a circuitos impresos o placas de control.",
    explicacion: "Los conectores cable-placa (o cable-PCB) unen la zona de cableado con la electrónica. Comunes en electrodomésticos, máquinas, etc. Facilitan desmontaje y reparación."
  },

  {
    id: 1044,
    tema: "Conectores - Tipos de Pines",
    texto: "En los conectores cable-placa, ¿cuáles son los dos tipos de pines más comunes?",
    opciones: ["Redondos y cuadrados.", "Roscados y lisos.", "Tiras (terminales planas) y cilíndricos (circulares).", "Machos y con tuerca."],
    correctaTexto: "Tiras (terminales planas) y cilíndricos (circulares).",
    explicacion: "Los pines de conectores pueden ser: tiras planas (más usadas, se insertan en ranuras de PCB) o cilíndricos (se encajan en orificios). La elección depende del diseño del equipo."
  },

  // ========== SECCIÓN 1.2.2 (continuación): SOLDADURA ==========

  {
    id: 1045,
    tema: "Soldadura - Uso en Electrónica",
    texto: "¿Cuándo se usa la soldadura en lugar de bornes o conectores?",
    opciones: ["Siempre, porque es la mejor opción.", "En equipos electrónicos para conexiones permanentes y fiables.", "Nunca en cables.", "Solo en alta tensión."],
    correctaTexto: "En equipos electrónicos para conexiones permanentes y fiables.",
    explicacion: "La soldadura se usa en electrónica para uniones permanentes de componentes (transistores, resistencias, etc.) en PCBs y en cables de equipos donde se requiere alta fiabilidad (soldadura baja potencia)."
  },

  {
    id: 1046,
    tema: "Soldadura - Potencia Baja",
    texto: "¿Por qué se recomienda usar soldadores de baja potencia para cables en equipos electrónicos?",
    opciones: ["Porque son más baratos.", "Porque no dañan el aislamiento del cable ni los componentes electrónicos sensibles.", "Porque son más rápidos.", "Porque duran más años."],
    correctaTexto: "Porque no dañan el aislamiento del cable ni los componentes electrónicos sensibles.",
    explicacion: "Los soldadores de baja potencia (25-40 W) aplican calor controlado, evitando que se funda el aislamiento de PVC (temperatura de fusión ~80°C). Los soldadores de alta potencia pueden destruir cables y componentes."
  },

  // ========== SECCIÓN 1.3: HERRAMIENTAS ==========
  // Subsección 1.3.1: Herramientas básicas

  {
    id: 1047,
    tema: "Herramientas - Necesidad en Instalaciones",
    texto: "¿Por qué son necesarias herramientas específicas en instalaciones eléctricas?",
    opciones: ["Por estética.", "Para realizar conexiones seguras y correctas de conductores, empalmes y derivaciones con máxima seguridad del operario.", "Solo para trabajos de mantenimiento.", "Cualquier herramienta sirve."],
    correctaTexto: "Para realizar conexiones seguras y correctas de conductores, empalmes y derivaciones con máxima seguridad del operario.",
    explicacion: "Las herramientas homologadas y certificadas para trabajo eléctrico garantizan: aislamiento adecuado, precisión, durabilidad. El REBT exige herramientas certificadas para baja tensión."
  },

  {
    id: 1048,
    tema: "Destornilladores - Tipos",
    texto: "¿Cuál es la principal característica que deben tener los destornilladores para trabajo eléctrico?",
    opciones: ["Deben ser magnéticos.", "Deben tener mango de material aislante y espesor suficiente en la hoja.", "Deben ser de acero inoxidable obligatoriamente.", "No hay requisitos especiales."],
    correctaTexto: "Deben tener mango de material aislante y espesor suficiente en la hoja.",
    explicacion: "Los destornilladores eléctricos certificados tienen: mango aislante (PVC, goma), hoja de acero templado con espesor adecuado. Hay varios tipos de punta: ranura, Phillips, Torx, etc. Todos deben ser homologados."
  },

  {
    id: 1049,
    tema: "Destornilladores - Tipos de Punta",
    texto: "¿Cuál es el destornillador más común para trabajo eléctrico en tornillos de baja tensión?",
    opciones: ["Torx (estrella).", "Phillips (cruz).", "Ranura (plana).", "Hexagonal."],
    correctaTexto: "Ranura (plana).",
    explicacion: "En instalaciones eléctricas, el más frecuente es de ranura (plana) para bornes en cuadros. También hay Phillips (cruz), cada vez más comunes. Torx se usa menos en baja tensión, más en automoción."
  },

  {
    id: 1050,
    tema: "Buscapolos - Función",
    texto: "¿Cuál es la función de un buscapolos?",
    opciones: ["Buscar cables perdidos.", "Indicar la presencia de tensión en un conductor mediante una lámpara o LED.", "Medir la intensidad exacta.", "Comprobar la resistencia de aislamiento."],
    correctaTexto: "Indicar la presencia de tensión en un conductor mediante una lámpara o LED.",
    explicacion: "El buscapolos es un detector simple de tensión. Indica presencia/ausencia de tensión (220V, 380V) mediante una pequeña lámpara o LED. No mide valores, solo detecta."
  },

  {
    id: 1051,
    tema: "Buscapolos - Seguridad",
    texto: "¿Cuáles son las características de seguridad de un buscapolos?",
    opciones: ["Deben ser simples.", "Deben tener aislante en toda la sonda y rango de tensión clara (no confundir buscapolos de 220V con polímetro).", "No necesitan certificación.", "Solo importa el tamaño."],
    correctaTexto: "Deben tener aislante en toda la sonda y rango de tensión clara (no confundir buscapolos de 220V con polímetro).",
    explicacion: "Un buscapolos certificado tiene: aislante en toda la sonda (protección del operario), indicación clara del rango (evita confusión con aparatos de mayor rango), resistencia interna limitada para seguridad."
  },

  // Subsección 1.3.2: Herramientas especiales

  {
    id: 1052,
    tema: "Alicates - Propósito General",
    texto: "¿Cuál es el propósito principal de los alicates en trabajo eléctrico?",
    opciones: ["Solo cortante.", "Cortar, doblar, sujetar y formar conductores en empalmes y conexiones.", "Solo doblar.", "Soldar."],
    correctaTexto: "Cortar, doblar, sujetar y formar conductores en empalmes y conexiones.",
    explicacion: "Los alicates son herramientas versátiles: alicates universales (de corte + múltiple), de corte (para cables), de punta (para doblar), de presa (agarre). La boca debe ser aislada."
  },

  {
    id: 1053,
    tema: "Alicates - Tipos",
    texto: "¿Cuál es la diferencia entre alicates universales y alicates de corte?",
    opciones: ["El tamaño.", "Universales: boca múltiple para agarrar y cortar. Corte: boca especializada solo para cortar conductores de pequeña sección.", "Universales solo cortan.", "Los de corte son más antiguos."],
    correctaTexto: "Universales: boca múltiple para agarrar y cortar. Corte: boca especializada solo para cortar conductores de pequeña sección.",
    explicacion: "Alicates universales (tipo 'pico de loro'): múltiples funciones. Alicates de electricista (corte): boca más pequeña, filo afilado para cortar cable fino. Cada uno tiene su uso específico."
  },

  {
    id: 1054,
    tema: "Tijeras de Electricista",
    texto: "¿Cuál es la ventaja de las tijeras de electricista frente a otros cortadores?",
    opciones: ["Son más baratas.", "Están diseñadas específicamente para cortar conductores pequeños de forma limpia y con mango aislante.", "Duran más años.", "Pueden cortar cualquier material."],
    correctaTexto: "Están diseñadas específicamente para cortar conductores pequeños de forma limpia y con mango aislante.",
    explicacion: "Las tijeras de electricista (o navajas) tienen hoja afilada especializada, mango aislante (PVC/goma), y son más precisas que alicates para cortes limpios de conductores finos sin dañar el aislamiento adyacente."
  },

  {
    id: 1055,
    tema: "Navaja de Electricista",
    texto: "¿Cuál es el propósito de una navaja de electricista?",
    opciones: ["Herramienta de corte para conductores de mayor sección que las tijeras.", "Herramienta de corte para cables muy finos.", "Solo para cortar papel.", "Herramienta decorativa."],
    correctaTexto: "Herramienta de corte para conductores de mayor sección que las tijeras.",
    explicacion: "La navaja de electricista tiene hoja más robusta que las tijeras, permitiendo cortar conductores de sección mayor (hasta 10 mm² aproximadamente) sin esfuerzo excesivo. Mango aislante."
  },

  {
    id: 1056,
    tema: "Pelacables",
    texto: "¿Cuál es la función de un pelacables?",
    opciones: ["Cortar cables enteros.", "Remover el aislamiento de un cable sin dañar el conductor.", "Medir la sección del cable.", "Etiquetar cables."],
    correctaTexto: "Remover el aislamiento de un cable sin dañar el conductor.",
    explicacion: "Los pelacables (útil de desforración) retiran el aislamiento de forma controlada. Pueden ser ajustables (para varias secciones) o de sección única. Evitan dañar el conductor con cortes accidentales."
  },

  {
    id: 1057,
    tema: "Pelacables - Limitación",
    texto: "¿Cuál es la limitación de uso de un pelacables?",
    opciones: ["Solo funciona con PVC.", "Solo en cables de hasta 2.5 mm² de sección máxima.", "No puede usarse en mangueras.", "Todos los anteriores son falsos."],
    correctaTexto: "Solo en cables de hasta 2.5 mm² de sección máxima.",
    explicacion: "Los pelacables estándar están diseñados para secciones pequeñas (máx. 2.5 mm²). Para secciones mayores, hay que usar método manual (cuchilla) o pelacables especiales de mayor tamaño."
  },

  {
    id: 1058,
    tema: "Guantes de Seguridad",
    texto: "¿Cuáles son los guantes de seguridad recomendados para trabajo eléctrico?",
    opciones: ["Cualquier guante de algodón.", "Guantes aislantes de goma certificados de alta resistencia, para proteger ante contactos accidentales.", "Guantes de cuero únicamente.", "Los guantes son innecesarios."],
    correctaTexto: "Guantes aislantes de goma certificados de alta resistencia, para proteger ante contactos accidentales.",
    explicacion: "Los guantes aislantes (clase 00: hasta 500V, clase 0: hasta 1kV, clase 1: hasta 7.5kV) protegen ante choque eléctrico. Deben ser de goma vulcanizada o similares, resistencia mecánica probada."
  },

  {
    id: 1059,
    tema: "Pantalla Protectora",
    texto: "¿Cuál es la función de la pantalla protectora de seguridad en trabajo eléctrico?",
    opciones: ["Solo estética.", "Proteger la cara y ojos contra posibles arcos eléctricos.", "Mejorar la visibilidad.", "Proteger del ruido."],
    correctaTexto: "Proteger la cara y ojos contra posibles arcos eléctricos.",
    explicacion: "La pantalla protectora (con visera de policarbonato resistente al impacto térmico) protege contra quemaduras por arco eléctrico. Obligatoria cuando hay riesgo de arco (maniobras en carga, cortocircuitos)."
  },

  {
    id: 1060,
    tema: "Empuñadura de Seguridad",
    texto: "¿Qué es una empuñadura de seguridad?",
    opciones: ["Un mango especial de herramienta.", "Una adaptación a guantes para sustituir fusibles de tipo NH con mayor seguridad.", "Un tipo de borne.", "Un aislante de cable."],
    correctaTexto: "Una adaptación a guantes para sustituir fusibles de tipo NH con mayor seguridad.",
    explicacion: "Las empuñaduras de seguridad se adaptan a los guantes aislantes. Son asideras que permiten manipular fusibles de forma segura, aislando la mano del contacto directo con partes activas o producto de arc flash."
  },

  {
    id: 1061,
    tema: "Llaves de Seguridad",
    texto: "¿Para qué se utilizan las llaves hexagonales aisladas de seguridad?",
    opciones: ["Solo para tuercas hexagonales de todo tipo.", "Para ajustar tornillos de los que tienen cabeza hexagonal, con aislante en la hoja para protección.", "No tienen función específica.", "Para cortar cables."],
    correctaTexto: "Para ajustar tornillos de los que tienen cabeza hexagonal, con aislante en la hoja para protección.",
    explicacion: "Las llaves hexagonales aisladas (aislante sobre acero templado) permiten ajustar conexiones de bornes hexagonales con seguridad. Muy comunes en bornes de puesta a tierra y neutro."
  },

  // Subsección 1.3.3: Herramientas de comprobación

  {
    id: 1062,
    tema: "Polímetro - Función",
    texto: "¿Cuáles son las principales funciones de un polímetro?",
    opciones: ["Solo medir tensión.", "Medir tensión, intensidad, resistencia y otras magnitudes eléctricas.", "Solo para instalar cables.", "Detectar presencia de tensión."],
    correctaTexto: "Medir tensión, intensidad, resistencia y otras magnitudes eléctricas.",
    explicacion: "Un multímetro (polímetro) digital mide: tensión (AC/DC), intensidad (con pinza o derivación), resistencia (ohmios), continuidad, capacidad, frecuencia, temperatura (modelos avanzados). Herramienta esencial de diagnóstico."
  },

  {
    id: 1063,
    tema: "Polímetro - Medición de Resistencia",
    texto: "¿Cómo debe estar el circuito para medir resistencia con un polímetro?",
    opciones: ["El circuito puede estar energizado.", "El circuito DEBE estar desconectado (sin tensión).", "La resistencia se mide en carga.", "Da igual el estado del circuito."],
    correctaTexto: "El circuito DEBE estar desconectado (sin tensión).",
    explicacion: "Nunca medir resistencia en circuito energizado. El polímetro envía su propia corriente para medir Ω. Si hay tensión externa, puede dañar el aparato o dar lecturas falsas. Desconectar siempre antes."
  },

  {
    id: 1064,
    tema: "Megohmetro",
    texto: "¿Cuál es el propósito específico de un megohmetro?",
    opciones: ["Medir tensión.", "Verificar la resistencia de aislamiento de cables e instalaciones (resistencia muy alta en megaohmios).", "Medir intensidad.", "Detectar fugas."],
    correctaTexto: "Verificar la resistencia de aislamiento de cables e instalaciones (resistencia muy alta en megaohmios).",
    explicacion: "El megohmetro (telurómetro) mide resistencias muy altas (MΩ). Se usa para comprobar que el aislamiento de cables, motores, máquinas cumple la norma (típicamente > 1 MΩ). El REBT requiere esta verificación en nuevas instalaciones."
  },

  {
    id: 1065,
    tema: "Megohmetro - Procedimiento",
    texto: "¿Cuál es el primer paso al medir aislamiento con un megohmetro?",
    opciones: ["Conectarlo directamente con tensión.", "DESCONECTAR COMPLETAMENTE la tensión de servicio.", "Medir a través del interruptor.", "No es necesario ningún paso previo."],
    correctaTexto: "DESCONECTAR COMPLETAMENTE la tensión de servicio.",
    explicacion: "Primero: desconectar toda tensión. Esperar a que descarguen condensadores (si los hay). Luego: aislar el conductor del resto de circuito. Conectar el megohmetro entre conductor y tierra/neutro. Medir."
  },

  {
    id: 1066,
    tema: "Tenaza Amperimétrica",
    texto: "¿Cuál es la ventaja de usar una tenaza amperimétrica (pinza amperimétrica)?",
    opciones: ["Puede medir sin desconectar el circuito.", "Permite medir corriente sin abrir el circuito (alrededor del conductor).", "Es obligatoria por ley.", "No tiene ninguna ventaja especial."],
    correctaTexto: "Permite medir corriente sin abrir el circuito (alrededor del conductor).",
    explicacion: "La pinza amperimétrica rodea el conductor sin interrumpir el circuito. Genera campo magnético proporcional a la corriente. Muy segura (no hay contacto) y práctica. Modelos modernos miden también tensión (2 en 1)."
  },

  {
    id: 1067,
    tema: "Verificación de Continuidad",
    texto: "¿Cómo se verifica la continuidad de un conductor con un polímetro?",
    opciones: ["En posición de voltaje.", "En posición de resistencia (Ω) o continuidad (símbolo de onda sonora): resistencia muy baja indica continuidad, muy alta (∞) indica rotura.", "En posición de corriente.", "No se puede medir continuidad."],
    correctaTexto: "En posición de resistencia (Ω) o continuidad (símbolo de onda sonora): resistencia muy baja indica continuidad, muy alta (∞) indica rotura.",
    explicacion: "Continuidad: colocar polímetro en Ω o ♪ (continuidad, emite sonido si hay continuidad). Si mide ~0 Ω = conductor íntegro. Si ∞ = circuito abierto/rotura. Siempre en circuito desconectado."
  }
];

// Exportar para uso en motor.js
// Si el navegador soporta módulos ES6:
// export { TEMA_1_DATA };
// Para navegadores que no soportan módulos (versión actual):
// TEMA_1_DATA está disponible globalmente

// ========================================================
// PLACEHOLDERS PARA TEMAS 2-11 (EN DESARROLLO)
// ========================================================


const TEMA_2_DATA =
[
  // ========== EXAMEN OFICIAL (10 preguntas) ==========
  {
    id: 100201,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "¿Qué artículo del REBT se aplica a las instalaciones eléctricas interiores?",
    opciones: ["El 5.", "El 13.", "El 16.", "El 34."],
    correctaTexto: "El 16.",
    explicacion: "El artículo 16 del REBT (Reglamento Electrotécnico para Baja Tensión) regula las instalaciones eléctricas de interior en viviendas y locales."
  },
  {
    id: 100202,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "A la hora del cálculo de secciones no se tiene en cuenta:",
    opciones: ["La caída de tensión que se produce en la línea.", "La capacidad térmica del conductor.", "La intensidad que circula por la línea.", "La parte del país donde se quiere hacer la instalación."],
    correctaTexto: "La parte del país donde se quiere hacer la instalación.",
    explicacion: "El cálculo de secciones se basa en criterios técnicos: caída de tensión, capacidad térmica e intensidad. La ubicación geográfica no es un parámetro de cálculo de secciones."
  },
  {
    id: 100203,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "Con respecto a la fórmula para calcular la sección, ¿Qué parámetro de los siguientes no interviene?",
    opciones: ["La energía eléctrica.", "La resistividad.", "La caída de tensión.", "La longitud del conductor."],
    correctaTexto: "La energía eléctrica.",
    explicacion: "La fórmula de cálculo de sección (S = 2·ρ·L·I / ΔU) incluye resistividad, longitud, intensidad y caída de tensión. La energía eléctrica no interviene directamente."
  },
  {
    id: 100204,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "Cuando se calcula una sección:",
    opciones: ["Hay que buscar un conductor con dicha tensión.", "Hay que ver cuáles son las opciones comerciales y escoger la sección inmediatamente inferior.", "Hay que ver cuáles son las opciones comerciales y escoger la sección inmediatamente superior.", "Ninguna de las anteriores es correcta."],
    correctaTexto: "Hay que ver cuáles son las opciones comerciales y escoger la sección inmediatamente superior.",
    explicacion: "Al calcular una sección teórica, siempre se escoge la sección comercial inmediatamente superior para garantizar seguridad y cumplir la normativa."
  },
  {
    id: 100205,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "El CGMP es:",
    opciones: ["El interruptor diferencial.", "El interruptor general automático.", "El cuadro genérico y mapa potencial.", "El cuadro general de mando y protección."],
    correctaTexto: "El cuadro general de mando y protección.",
    explicacion: "El CGMP (Cuadro General de Mando y Protección) es el conjunto de dispositivos que protegen y controlan los circuitos de una instalación eléctrica interior."
  },
  {
    id: 100206,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "El enlace de la red de distribución pública a la caja de protección se realiza mediante:",
    opciones: ["La línea repartidora.", "La acometida.", "El contador.", "La derivación individual."],
    correctaTexto: "La acometida.",
    explicacion: "La acometida es la parte de la instalación que enlaza la red de distribución pública con la caja general de protección (CGP) del usuario."
  },
  {
    id: 100207,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "El factor de potencia depende de:",
    opciones: ["La potencia aparente.", "La potencia reactiva y activa.", "La tensión.", "El trabajo."],
    correctaTexto: "La potencia reactiva y activa.",
    explicacion: "El factor de potencia (cos φ) es el cociente entre la potencia activa (W) y la potencia aparente (VA). Depende de la relación entre potencia activa y reactiva del circuito."
  },
  {
    id: 100208,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "Indica cuál de las siguientes no es una instalación eléctrica:",
    opciones: ["Abierta.", "Sin conductores.", "Oculta.", "Ahogada."],
    correctaTexto: "Sin conductores.",
    explicacion: "Los tipos de instalación eléctrica según su montaje son: abierta, empotrada (oculta) y ahogada. 'Sin conductores' no es un tipo de instalación eléctrica."
  },
  {
    id: 100209,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "La derivación individual:",
    opciones: ["Puede ser monofásica.", "Puede ser trifásica.", "En suministros para un único usuario solo la caída de tensión máxima permitida es del 1,5%.", "Todas son correctas."],
    correctaTexto: "Todas son correctas.",
    explicacion: "La derivación individual puede ser monofásica o trifásica según la potencia del suministro. En suministros para un único usuario, la caída de tensión máxima es del 1,5%."
  },
  {
    id: 100210,
    tema: "U2: Circuitos eléctricos básicos en interiores (TEST OFICIAL)",
    texto: "La intensidad que circula por un conductor de una determinada sección depende también:",
    opciones: ["Del color del aislante.", "De la altura del lugar con respecto al mar.", "De las dos respuestas anteriores.", "Del material del aislante."],
    correctaTexto: "Del material del aislante.",
    explicacion: "La intensidad máxima admisible por un conductor depende de su sección, pero también del material del aislante (PVC, XLPE, etc.), ya que cada material tiene una temperatura máxima de servicio diferente."
  },

  // ========== SECCIÓN 2.1: INTRODUCCIÓN A LAS INSTALACIONES ==========

  {
    id: 2001,
    tema: "Definición de instalación eléctrica",
    texto: "¿Cuál es la definición correcta de una instalación eléctrica?",
    opciones: ["Un conjunto aleatorio de conductores sin propósito específico.", "Un conjunto de elementos que permite transportar y distribuir la electricidad desde donde se suministra hasta los equipos apropiados.", "Solo un sistema de protección.", "Un cable enterrado bajo tierra."],
    correctaTexto: "Un conjunto de elementos que permite transportar y distribuir la electricidad desde donde se suministra hasta los equipos apropiados.",
    explicacion: "Una instalación eléctrica es un sistema integrado que transporta y distribuye energía eléctrica de forma segura, desde la fuente (red pública o generador) hasta los receptores (electrodomésticos, iluminación, etc.)."
  },

  {
    id: 2002,
    tema: "Tipos de instalaciones - Abiertas",
    texto: "¿Qué caracteriza a una instalación eléctrica abierta?",
    opciones: ["Los conductores están ocultos en muro.", "Los conductores son visibles en la superficie.", "Solo se usa en exteriores.", "Requiere armadura metálica obligatoria."],
    correctaTexto: "Los conductores son visibles en la superficie.",
    explicacion: "En instalaciones abiertas, los conductores son visibles y están montados sobre la pared, techo o cualquier superficie aparente, facilitando su inspección y mantenimiento."
  },

  {
    id: 2003,
    tema: "Tipos de instalaciones - Aparentes",
    texto: "¿Cuál es la diferencia entre instalación aparente y abierta?",
    opciones: ["No hay diferencia, son sinónimos.", "Aparente utiliza canales o bandejas visibles, abierta tiene conductores directamente en la pared.", "Aparente es subterránea, abierta es aérea.", "Aparente requiere tubo, abierta no."],
    correctaTexto: "Aparente utiliza canales o bandejas visibles, abierta tiene conductores directamente en la pared.",
    explicacion: "La instalación aparente emplea canales, bandejas o molduras visibles para conducir los cables. La abierta es más simple: conductores fijados directamente sobre superficies."
  },

  {
    id: 2004,
    tema: "Tipos de instalaciones - Ocultas",
    texto: "¿Cómo se realiza una instalación eléctrica oculta?",
    opciones: ["Los conductores se pintan de color oscuro.", "Se utilizan paneles o falsos plafones para disimular.", "Los conductores se introducen en tubos o canaletas dentro de muros, pisos o techos.", "Se entierra toda la instalación."],
    correctaTexto: "Los conductores se introducen en tubos o canaletas dentro de muros, pisos o techos.",
    explicacion: "En instalaciones ocultas, los conductores están protegidos dentro de tuberías, canaletas o conductos embebidos en la estructura del edificio, quedando invisibles desde el exterior."
  },

  {
    id: 2005,
    tema: "Tipos de instalaciones - Ahogadas",
    texto: "¿Qué se entiende por instalación eléctrica ahogada?",
    opciones: ["La instalación que está sumergida en agua.", "Los conductores están protegidos por hormigón o material similar embebidos en muros, pisos u hormigón.", "Una instalación defectuosa que requiere reparación inmediata.", "Instalación temporal de emergencia."],
    correctaTexto: "Los conductores están protegidos por hormigón o material similar embebidos en muros, pisos u hormigón.",
    explicacion: "En instalaciones ahogadas, los conductores se instalan antes de que se viertan muros o pisos, quedando embebidos en el hormigón o material de construcción, ofreciendo máxima protección mecánica."
  },

  // ========== SECCIÓN 2.2: MAGNITUDES Y UNIDADES ELÉCTRICAS ==========

  {
    id: 2006,
    tema: "Magnitud - Resistencia",
    texto: "¿Cuál es la unidad de medida de la resistencia eléctrica?",
    opciones: ["Voltio (V).", "Amperio (A).", "Ohmio (Ω).", "Vatio (W)."],
    correctaTexto: "Ohmio (Ω).",
    explicacion: "La resistencia se mide en ohmios (Ω). Representa la oposición que presenta un material al paso de la corriente eléctrica. Un ohmio es la resistencia que permite el paso de 1 amperio bajo 1 voltio de tensión."
  },

  {
    id: 2007,
    tema: "Magnitud - Tensión",
    texto: "¿Qué es la tensión eléctrica y cuál es su unidad?",
    opciones: ["La cantidad de corriente que circula; se mide en amperios.", "La diferencia de potencial eléctrico entre dos puntos; se mide en voltios.", "La resistencia total del circuito; se mide en ohmios.", "La energía consumida; se mide en vatios."],
    correctaTexto: "La diferencia de potencial eléctrico entre dos puntos; se mide en voltios.",
    explicacion: "La tensión (voltaje) es la diferencia de potencial que impulsa el flujo de corriente. Se mide en voltios (V). En viviendas españolas es típicamente 230V en monofásico y 400V en trifásico."
  },

  {
    id: 2008,
    tema: "Magnitud - Intensidad",
    texto: "¿Qué mide la intensidad eléctrica y cuál es su unidad?",
    opciones: ["La cantidad de carga que fluye por unidad de tiempo; se mide en amperios.", "La resistencia del conductor; se mide en ohmios.", "El voltaje disponible; se mide en voltios.", "La energía total usada; se mide en julios."],
    correctaTexto: "La cantidad de carga que fluye por unidad de tiempo; se mide en amperios.",
    explicacion: "La intensidad es la cantidad de corriente que circula. Se mide en amperios (A). Es fundamental para seleccionar conductores adecuados y dispositivos de protección."
  },

  {
    id: 2009,
    tema: "Magnitud - Potencia",
    texto: "¿Cuál es la definición y unidad de potencia eléctrica?",
    opciones: ["La resistencia al paso de corriente; en ohmios.", "La energía total disponible; en julios.", "La velocidad de consumo de energía eléctrica; en vatios.", "La duración del suministro; en segundos."],
    correctaTexto: "La velocidad de consumo de energía eléctrica; en vatios.",
    explicacion: "La potencia (P) es la velocidad a la que se consume energía. Se mide en vatios (W). Se calcula como P = U × I. También se usan kilovatios (kW) = 1000 W."
  },

  {
    id: 2010,
    tema: "Magnitud - Energía",
    texto: "¿Qué es la energía eléctrica y cuál es su unidad más común?",
    opciones: ["La velocidad de gasto de potencia; en vatios.", "La cantidad total de corriente que fluye; en amperios.", "La energía total consumida a lo largo del tiempo; en kilovatio-hora (kWh).", "La resistencia del circuito; en ohmios."],
    correctaTexto: "La energía total consumida a lo largo del tiempo; en kilovatio-hora (kWh).",
    explicacion: "La energía es potencia multiplicada por tiempo: E = P × t. Se mide en kilovatio-hora (kWh) en el contexto doméstico. 1 kWh = 1000 W × 1 hora = 3,600,000 julios."
  },

  {
    id: 2011,
    tema: "Magnitud - Frecuencia",
    texto: "¿Cuál es la frecuencia de la corriente eléctrica en España?",
    opciones: ["50 Hz (hertzios).", "60 Hz (hertzios).", "100 Hz (hertzios).", "30 Hz (hertzios)."],
    correctaTexto: "50 Hz (hertzios).",
    explicacion: "La frecuencia de la red eléctrica española es de 50 Hz, lo que significa que la corriente alterna cambia de dirección 50 veces por segundo. Europa utiliza 50 Hz; América usa 60 Hz."
  },

  // ========== SECCIÓN 2.3: ASOCIACIONES EN LOS CIRCUITOS ==========

  {
    id: 2012,
    tema: "Circuito en serie - Definición",
    texto: "¿Cuál es la característica principal de un circuito en serie?",
    opciones: ["Los elementos están conectados en paralelo.", "El terminal de salida de un elemento se conecta al terminal de entrada del siguiente.", "Todos los elementos comparten la misma tensión.", "No existe camino único para la corriente."],
    correctaTexto: "El terminal de salida de un elemento se conecta al terminal de entrada del siguiente.",
    explicacion: "En serie, los elementos forman una cadena: la salida de uno es la entrada del siguiente. La corriente es la misma en todos, pero la tensión se distribuye entre ellos."
  },

  {
    id: 2013,
    tema: "Circuito en serie - Resistencia equivalente",
    texto: "¿Cómo se calcula la resistencia equivalente en un circuito en serie?",
    opciones: ["Req = R1 + R2 + R3 + ... (suma todas).", "Req = (R1 × R2) / (R1 + R2).", "Req = 1/(1/R1 + 1/R2 + 1/R3).", "Req = √(R1² + R2²)."],
    correctaTexto: "Req = R1 + R2 + R3 + ... (suma todas).",
    explicacion: "En serie, la resistencia equivalente es la suma de todas las resistencias. Si tienes R1=10Ω, R2=20Ω, R3=30Ω, la resistencia total será Req=60Ω."
  },

  {
    id: 2014,
    tema: "Circuito en paralelo - Definición",
    texto: "¿Cuál es la característica principal de un circuito en paralelo?",
    opciones: ["Los elementos forman una cadena secuencial.", "Los terminales de entrada de todos los elementos están conectados juntos, y los de salida también.", "Solo permite un camino para la corriente.", "La corriente es idéntica en todos los elementos."],
    correctaTexto: "Los terminales de entrada de todos los elementos están conectados juntos, y los de salida también.",
    explicacion: "En paralelo, todos los elementos comparten la misma tensión (están en los mismos puntos). La corriente total se divide entre los elementos."
  },

  {
    id: 2015,
    tema: "Circuito en paralelo - Resistencia equivalente",
    texto: "¿Cómo se calcula la resistencia equivalente en un circuito en paralelo?",
    opciones: ["Req = R1 + R2 + R3 + ...", "Req = (R1 × R2) / (R1 + R2) para 2 resistencias.", "Req = 1 / (1/R1 + 1/R2 + 1/R3)", "Ambas opciones b) y c) son correctas."],
    correctaTexto: "Ambas opciones b) y c) son correctas.",
    explicacion: "En paralelo: Req = 1/(1/R1 + 1/R2 + 1/R3...). Para solo 2 resistencias, se simplifica: Req = (R1×R2)/(R1+R2). La resistencia equivalente es siempre menor que la más pequeña."
  },

  {
    id: 2016,
    tema: "Circuito mixto",
    texto: "¿Qué es un circuito mixto?",
    opciones: ["Un circuito que solo usa corriente continua.", "Un circuito que mezcla elementos en serie y en paralelo.", "Un circuito sin resistencias.", "Un circuito conectado a dos fuentes de tensión."],
    correctaTexto: "Un circuito que mezcla elementos en serie y en paralelo.",
    explicacion: "Un circuito mixto combina asociaciones en serie y en paralelo. Para resolverlo, primero se calculan las resistencias equivalentes de las secciones en paralelo, luego se suman las series."
  },

  // ========== SECCIÓN 2.4: CÁLCULO DE LÍNEAS ==========

  {
    id: 2017,
    tema: "Capacidad térmica",
    texto: "¿Qué es la capacidad térmica en el contexto de conductores eléctricos?",
    opciones: ["La temperatura ambiente de la instalación.", "La intensidad máxima de corriente que puede circular sin que el conductor se deteriore.", "La resistencia mecánica del cable.", "La velocidad de conductancia."],
    correctaTexto: "La intensidad máxima de corriente que puede circular sin que el conductor se deteriore.",
    explicacion: "La capacidad térmica define la intensidad máxima admisible de un conductor. Depende del tipo de aislante (PVC=70°C, XLPE=90°C) y del método de instalación."
  },

  {
    id: 2018,
    tema: "Temperatura ambiente en instalaciones interiores",
    texto: "¿Cuál es la temperatura ambiente estándar considerada en cálculos de instalaciones interiores?",
    opciones: ["30°C.", "40°C.", "50°C.", "60°C."],
    correctaTexto: "40°C.",
    explicacion: "En el REBT se asume una temperatura ambiente de 40°C para instalaciones interiores en viviendas. Para líneas subterráneas se asume 25°C. Estos valores son referencias de cálculo."
  },

  {
    id: 2019,
    tema: "Caída de tensión - Definición",
    texto: "¿Qué significa caída de tensión en una línea?",
    opciones: ["La energía convertida en calor por la resistencia de la línea.", "La pérdida de tensión en el camino desde la fuente hasta el receptor.", "Un cortocircuito en la instalación.", "La disminución de frecuencia."],
    correctaTexto: "La pérdida de tensión en el camino desde la fuente hasta el receptor.",
    explicacion: "La caída de tensión es ΔU = I × R. Conforme fluye corriente por un conductor con resistencia, se pierde tensión. El REBT establece límites (3% en circuitos interiores, 5% en distribución)."
  },

  {
    id: 2020,
    tema: "Caída de tensión - Límites REBT",
    texto: "¿Cuál es el límite máximo de caída de tensión permitido por el REBT en circuitos interiores?",
    opciones: ["1%.", "2%.", "3%.", "5%."],
    correctaTexto: "3%.",
    explicacion: "El REBT especifica que la caída de tensión en circuitos interiores de viviendas no debe exceder 3%. En derivaciones individuales y líneas repartidoras, el límite es 1.5%."
  },

  {
    id: 2021,
    tema: "Fórmula de sección por caída de tensión",
    texto: "¿Cuál es la fórmula correcta para calcular la sección de un conductor por caída de tensión en corriente monofásica?",
    opciones: ["S = ρ × L / R", "S = (2 × ρ × L × P) / (ΔU × U)", "S = I / (ρ × L)", "S = U / (I × R)"],
    correctaTexto: "S = (2 × ρ × L × P) / (ΔU × U)",
    explicacion: "Donde: S=sección (mm²), ρ=resistividad del material, L=longitud (m), P=potencia (W), ΔU=caída de tensión permitida (V), U=tensión de alimentación (V)."
  },

  {
    id: 2022,
    tema: "Fórmula para corriente trifásica",
    texto: "¿Cuál es la fórmula de sección por caída de tensión en corriente trifásica?",
    opciones: ["S = (2 × ρ × L × P) / (ΔU × U)", "S = (√3 × ρ × L × P) / (ΔU × U)", "S = (ρ × L × P) / (ΔU × U)", "S = (4 × ρ × L × P) / (ΔU × U)"],
    correctaTexto: "S = (√3 × ρ × L × P) / (ΔU × U)",
    explicacion: "Para trifásica, aparece √3 (≈1.732) en lugar de 2. Esto refleja que en trifásica, la caída es menor que en monofásica para la misma potencia."
  },

  {
    id: 2023,
    tema: "Factor de potencia",
    texto: "¿Qué representa el factor de potencia (cos φ)?",
    opciones: ["La resistencia del conductor.", "La relación entre potencia activa y potencia aparente.", "La intensidad máxima de corriente.", "La eficiencia del transformador."],
    correctaTexto: "La relación entre potencia activa y potencia aparente.",
    explicacion: "El cos φ varía de 0 a 1. Indica qué porcentaje de la potencia aparente se convierte en trabajo útil. Motores y equipos inductivos tienen cos φ < 1 (típicamente 0.8-0.9)."
  },

  {
    id: 2024,
    tema: "Triángulo de potencias",
    texto: "¿Qué magnitudes conforman el triángulo de potencias?",
    opciones: ["Solo potencia activa P.", "Potencia activa (P), potencia reactiva (Q) y potencia aparente (S).", "Voltaje, corriente e intensidad.", "Resistencia, reactancia e impedancia."],
    correctaTexto: "Potencia activa (P), potencia reactiva (Q) y potencia aparente (S).",
    explicacion: "El triángulo de potencias muestra: P (vatios, trabajo útil), Q (VAR reactivos, energía reactiva), S (VA aparentes). S² = P² + Q². El ángulo φ se obtiene: cos φ = P/S."
  },

  // ========== SECCIÓN 2.5: ELEMENTOS Y MECANISMOS ==========

  {
    id: 2025,
    tema: "Acometida",
    texto: "¿Qué es la acometida en una instalación eléctrica?",
    opciones: ["El interruptor general de la vivienda.", "El enlace entre la red de distribución pública y la caja general de protección del cliente.", "El conductor neutro de la instalación.", "El punto de conexión entre el medidor y los circuitos."],
    correctaTexto: "El enlace entre la red de distribución pública y la caja general de protección del cliente.",
    explicacion: "La acometida está compuesta por tres cables (fase, neutro y protección/tierra) que unen la red de distribución pública con la caja general de protección en la vivienda del usuario."
  },

  {
    id: 2026,
    tema: "Caja general de protección",
    texto: "¿Cuál es la función de la caja general de protección?",
    opciones: ["Medir el consumo de electricidad.", "Contener los fusibles o protecciones de la línea repartidora.", "Regular la tensión de entrada.", "Convertir la corriente trifásica en monofásica."],
    correctaTexto: "Contener los fusibles o protecciones de la línea repartidora.",
    explicacion: "La caja general de protección contiene tres fusibles (uno por fase en trifásica) que protegen la línea repartidora. Está ubicada en la entrada de la vivienda, accesible para el distribuidor."
  },

  {
    id: 2027,
    tema: "Línea repartidora",
    texto: "¿Qué es la línea repartidora en una instalación?",
    opciones: ["El cable que va desde la caja general de protección hasta el contador.", "La línea que distribuye electricidad a todos los circuitos de la vivienda.", "El cable de puesta a tierra.", "El conductor neutro de la acometida."],
    correctaTexto: "El cable que va desde la caja general de protección hasta el contador.",
    explicacion: "La línea repartidora transporta la energía desde la caja general de protección hasta el contador de energía. Esta línea está protegida por los fusibles de la caja general."
  },

  {
    id: 2028,
    tema: "Contador de energía",
    texto: "¿Cuál es la función del contador en una instalación eléctrica?",
    opciones: ["Proteger contra sobrecargas.", "Medir la energía eléctrica consumida por la vivienda.", "Regular la tensión de entrada.", "Desconectar automáticamente en caso de fuga."],
    correctaTexto: "Medir la energía eléctrica consumida por la vivienda.",
    explicacion: "El contador registra el consumo de energía en kWh. Es responsabilidad de la empresa distribuidora. Proporciona los datos para facturación al usuario."
  },

  {
    id: 2029,
    tema: "Derivación individual",
    texto: "¿Qué es la derivación individual?",
    opciones: ["Un circuito de iluminación de una habitación.", "El cable que une el contador con el cuadro general de mando y protección (CGMP).", "Un cable de puesta a tierra.", "La línea hacia un dispositivo específico."],
    correctaTexto: "El cable que une el contador con el cuadro general de mando y protección (CGMP).",
    explicacion: "La derivación individual es la línea privada que parte del contador y llega al cuadro general de mando y protección (CGMP) de la vivienda. En ella se instalan los interruptores de control de potencia (ICP)."
  },

  {
    id: 2030,
    tema: "Interruptor de control de potencia (ICP)",
    texto: "¿Cuál es la función del interruptor de control de potencia?",
    opciones: ["Proteger contra cortocircuitos.", "Limitar la potencia contratada, desconectando si se supera.", "Medir la energía consumida.", "Convertir corriente alterna en continua."],
    correctaTexto: "Limitar la potencia contratada, desconectando si se supera.",
    explicacion: "El ICP es un dispositivo automático que desconecta la instalación si la potencia demandada supera la contratada. Protege la instalación de sobrecargas y está regulado por la compañía suministradora."
  },

  {
    id: 2031,
    tema: "Cuadro general de mando y protección",
    texto: "¿Qué componentes típicos contiene un cuadro general de mando y protección (CGMP)?",
    opciones: ["Solo fusibles.", "Interruptor general automático, pequeños interruptores automáticos (PIAs) y diferenciales.", "Solo un transformador.", "Solo receptores eléctricos."],
    correctaTexto: "Interruptor general automático, pequeños interruptores automáticos (PIAs) y diferenciales.",
    explicacion: "El CGMP contiene: IGA (interruptor general automático), diferenciales para protección contra fugas a tierra, PIAs para proteger cada circuito, y a veces relés de control."
  },

  {
    id: 2032,
    tema: "Protección diferencial",
    texto: "¿Cuál es la función de un diferencial?",
    opciones: ["Proteger contra cortocircuitos.", "Detectar fugas de corriente a tierra y desconectar automáticamente.", "Limitar la tensión de entrada.", "Filtrar armónicos."],
    correctaTexto: "Detectar fugas de corriente a tierra y desconectar automáticamente.",
    explicacion: "El diferencial compara la corriente que entra con la que sale. Si hay diferencia (fuga a tierra), desconecta en milisegundos. Protege contra contactos accidentales (electrocución)."
  },

  {
    id: 2033,
    tema: "Pequeño interruptor automático (PIA)",
    texto: "¿Cuál es la función de un pequeño interruptor automático (PIA)?",
    opciones: ["Detectar fugas a tierra.", "Proteger cada circuito contra cortocircuitos y sobrecargas.", "Limitar la potencia total contratada.", "Medir energía consumida."],
    correctaTexto: "Proteger cada circuito contra cortocircuitos y sobrecargas.",
    explicacion: "Cada circuito (iluminación, enchufes, cocina, etc.) está protegido por un PIA dimensionado a su corriente nominal. Si la corriente supera ese valor, el PIA se abre."
  },

  // ========== SECCIÓN 2.6: CANALIZACIONES Y TUBOS ==========

  {
    id: 2034,
    tema: "Canalizaciones bajo tubos",
    texto: "¿Cuál es la función de los tubos de canalización?",
    opciones: ["Decorar la instalación.", "Proteger mecánicamente los conductores y permitir su reemplazo futuro.", "Mejorar la conductividad eléctrica.", "Medir la tensión de la instalación."],
    correctaTexto: "Proteger mecánicamente los conductores y permitir su reemplazo futuro.",
    explicacion: "Los tubos canalización (generalmente PVC) protegen los conductores contra daños mecánicos. El diámetro del tubo debe elegirse de forma que los cables ocupen menos del 40% de su sección."
  },

  {
    id: 2035,
    tema: "Tipos de tubos",
    texto: "¿Cuáles son los tipos principales de tubos utilizados en instalaciones interiores?",
    opciones: ["Solo tubos metálicos rígidos.", "Tubos rígidos (PVC) y tubos flexibles (corrugados).", "Solo tubos de papel.", "Tubos cerámicos únicamente."],
    correctaTexto: "Tubos rígidos (PVC) y tubos flexibles (corrugados).",
    explicacion: "Tubos rígidos (PVC): usados en paredes, suelos, techos. Tubos flexibles (corrugados): para zonas con curvas o cambios de dirección. Tubos metálicos: para instalaciones especiales."
  },

  {
    id: 2036,
    tema: "Bandejas portacables",
    texto: "¿En qué situaciones se utilizan bandejas portacables en lugar de tubos?",
    opciones: ["Solo en instalaciones industriales nunca en viviendas.", "En instalaciones visibles (aparentes) donde se desea facilitar el acceso y el mantenimiento de múltiples cables.", "En instalaciones subterráneas únicamente.", "Como sustituto obligatorio del tubo en todas partes."],
    correctaTexto: "En instalaciones visibles (aparentes) donde se desea facilitar el acceso y el mantenimiento de múltiples cables.",
    explicacion: "Las bandejas portacables se montan en paredes o techos aparentes, permitiendo organizar múltiples conductores. Son muy utilizadas en talleres, garajes y fachadas."
  },

  // ========== SECCIÓN 2.7-2.8: RECEPTORES Y MECANISMOS ==========

  {
    id: 2037,
    tema: "Receptores eléctricos",
    texto: "¿Qué es un receptor eléctrico?",
    opciones: ["Un dispositivo que genera electricidad.", "Un aparato que transforma la energía eléctrica en otro tipo de energía útil.", "Un cable de distribución.", "Un dispositivo de protección."],
    correctaTexto: "Un aparato que transforma la energía eléctrica en otro tipo de energía útil.",
    explicacion: "Los receptores convierten energía eléctrica en energía útil: bombillas (luz), motores (movimiento), resistencias (calor), etc. Son los \"consumidores\" de la instalación."
  },

  {
    id: 2038,
    tema: "Tipos de enchufes",
    texto: "¿Cuál es la diferencia entre un enchufe con toma de tierra y sin toma de tierra?",
    opciones: ["El enchufe con tierra es más caro.", "El enchufe con tierra tiene una tercera conexión para protección, el otro solo tiene fase y neutro.", "No hay diferencia eléctrica.", "El sin tierra es más seguro."],
    correctaTexto: "El enchufe con tierra tiene una tercera conexión para protección, el otro solo tiene fase y neutro.",
    explicacion: "Enchufes con toma de tierra (3 contactos): fase, neutro y tierra. Enchufes sin tierra (2 contactos): solo fase y neutro. La tierra proporciona protección contra contactos indirectos."
  },

  {
    id: 2039,
    tema: "Interruptores convencionales",
    texto: "¿Cuál es la función de un interruptor convencional?",
    opciones: ["Proteger contra cortocircuitos.", "Abrir o cerrar un circuito manualmente para encender/apagar receptores.", "Medir la energía consumida.", "Limitar la potencia de entrada."],
    correctaTexto: "Abrir o cerrar un circuito manualmente para encender/apagar receptores.",
    explicacion: "Los interruptores permiten el control manual de circuitos. Tienen dos posiciones: abierto (corta el circuito) y cerrado (permite el paso de corriente)."
  },

  {
    id: 2040,
    tema: "Conmutadores",
    texto: "¿Cuál es la diferencia entre un interruptor y un conmutador?",
    opciones: ["Son lo mismo, solo cambio de nombre.", "El interruptor apaga/enciende desde un punto; el conmutador permite controlar desde dos puntos diferentes.", "El conmutador es más caro.", "El conmutador protege contra sobrecarga."],
    correctaTexto: "El interruptor apaga/enciende desde un punto; el conmutador permite controlar desde dos puntos diferentes.",
    explicacion: "Conmutador simple: controla una luz desde dos lugares. Conmutador doble (o cruzado): permite control desde 3 o más puntos. Muy usado en escaleras y pasillos."
  },

  {
    id: 2041,
    tema: "Pulsadores",
    texto: "¿Cuál es la función de un pulsador en instalaciones eléctricas?",
    opciones: ["Encender una luz permanentemente.", "Activar un circuito de forma temporal mientras se mantiene pulsado.", "Proteger contra sobrecargas.", "Medir intensidad de corriente."],
    correctaTexto: "Activar un circuito de forma temporal mientras se mantiene pulsado.",
    explicacion: "Los pulsadores son interruptores momentáneos: solo permiten paso de corriente mientras están pulsados. Al soltarlos, se abre el circuito. Se usan en timbres, pilotos de control, etc."
  },

  {
    id: 2042,
    tema: "Interruptores reguladores",
    texto: "¿Qué permite hacer un interruptor regulador o atenuador (dimmer)?",
    opciones: ["Solo encender o apagar.", "Variar la intensidad luminosa de una bombilla de forma continua.", "Proteger contra cortocircuitos.", "Amplificar la señal eléctrica."],
    correctaTexto: "Variar la intensidad luminosa de una bombilla de forma continua.",
    explicacion: "Los reguladores o dimmers varían la tensión suministrada a la bombilla, controlando su intensidad luminosa. Son útiles para crear ambientes y ahorrar energía."
  },

  // ========== SECCIÓN 2.9-2.12: SIMBOLOGÍA Y ESQUEMAS ==========

  {
    id: 2043,
    tema: "Simbología eléctrica - Función",
    texto: "¿Cuál es la importancia de la simbología eléctrica normalizada?",
    opciones: ["Es solo decorativa.", "Permite la comunicación clara y universal entre técnicos al interpretar esquemas eléctricos.", "Cambia según cada país.", "No es necesaria en instalaciones modernas."],
    correctaTexto: "Permite la comunicación clara y universal entre técnicos al interpretar esquemas eléctricos.",
    explicacion: "La simbología normalizada (según normas UNE, IEC) permite que cualquier técnico entienda un esquema. Usa símbolos estándar para cada componente (interruptores, lámparas, fusibles, etc.)."
  },

  {
    id: 2044,
    tema: "Símbolo de interruptor",
    texto: "En un esquema eléctrico, ¿cómo se representa un interruptor?",
    opciones: ["Como un círculo.", "Como una línea cortada perpendicular.", "Como una onda.", "Como una espiral."],
    correctaTexto: "Como una línea cortada perpendicular.",
    explicacion: "El símbolo del interruptor es una línea rota con una pequeña línea inclinada que indica el sentido de accionamiento. El símbolo varía ligeramente según el tipo (simple, conmutador, etc.)."
  },

  {
    id: 2045,
    tema: "Símbolo de resistencia",
    texto: "¿Cuál es el símbolo normalizado para una resistencia en un esquema eléctrico?",
    opciones: ["Un círculo relleno.", "Un rectángulo o un zig-zag.", "Una espiral.", "Una línea ondulada continua."],
    correctaTexto: "Un rectángulo o un zig-zag.",
    explicacion: "La resistencia se representa como un rectángulo (según norma europea IEC) o como un zig-zag (según norma americana). Ambos son válidos internacionalmente."
  },

  {
    id: 2046,
    tema: "Símbolo de fuente de tensión",
    texto: "¿Cómo se representa una fuente de tensión (batería) en un esquema?",
    opciones: ["Un círculo con una cruz.", "Dos líneas paralelas de diferente longitud.", "Un rectángulo.", "Una espiral cerrada."],
    correctaTexto: "Dos líneas paralelas de diferente longitud.",
    explicacion: "La batería o fuente de tensión se dibuja como dos líneas paralelas: una larga (terminal positivo) y una corta (terminal negativo). La tensión se especifica en voltios (V)."
  },

  {
    id: 2047,
    tema: "Símbolo de bombilla",
    texto: "En esquemas eléctricos, ¿cómo se representa una bombilla?",
    opciones: ["Como un rectángulo.", "Como un círculo con una cruz en el interior.", "Como una onda.", "Como una letra L."],
    correctaTexto: "Como un círculo con una cruz en el interior.",
    explicacion: "La bombilla (lámpara incandescente) se representa como un círculo con una cruz. Las bombillas fluorescentes y LED tienen símbolos ligeramente diferentes según la norma."
  },

  {
    id: 2048,
    tema: "Esquema funcional vs esquema unifila",
    texto: "¿Cuál es la diferencia entre un esquema funcional y un esquema unifila?",
    opciones: ["No hay diferencia, son sinónimos.", "El esquema funcional muestra el comportamiento del circuito; el unifila muestra cada conductor como una línea.", "El unifila es más antiguo.", "El funcional tiene más símbolos."],
    correctaTexto: "El esquema funcional muestra el comportamiento del circuito; el unifila muestra cada conductor como una línea.",
    explicacion: "Esquema funcional: muestra la función del circuito sin preocuparse por el aspecto físico. Esquema unifila: cada conductor es una línea; refleja la instalación real con todos sus detalles."
  },

  {
    id: 2049,
    tema: "Esquema multifila",
    texto: "¿Qué es un esquema multifila?",
    opciones: ["Un esquema que usa múltiples símbolos.", "Un esquema donde cada conductor (fase, neutro, tierra) se dibuja como una línea separada.", "Un esquema que solo muestra protecciones.", "Lo mismo que un esquema unifila."],
    correctaTexto: "Un esquema donde cada conductor (fase, neutro, tierra) se dibuja como una línea separada.",
    explicacion: "En esquema multifila se representan todos los conductores: fase, neutro, tierra, retorno, etc., como líneas separadas. Proporciona máximo detalle de la instalación."
  },

  {
    id: 2050,
    tema: "Interpretación de esquemas",
    texto: "¿Cuál es el primer paso para interpretar un esquema eléctrico?",
    opciones: ["Identificar los símbolos utilizados y su significado.", "Seguir aleatoriamente cada línea.", "Contar el número de símbolos.", "Medir las líneas del diagrama."],
    correctaTexto: "Identificar los símbolos utilizados y su significado.",
    explicacion: "Para interpretar un esquema: 1) Reconocer símbolos, 2) Identificar fuentes de energía, 3) Seguir el flujo de corriente, 4) Entender protecciones, 5) Comprender funcionamiento global."
  },

  {
    id: 2051,
    tema: "REBT - Reglamento Electrotécnico",
    texto: "¿Cuál es el propósito del Reglamento Electrotécnico de Baja Tensión (REBT)?",
    opciones: ["Decorar las instalaciones eléctricas.", "Establecer los requisitos técnicos y de seguridad para instalaciones de baja tensión.", "Solo aplica a industrias.", "Es opcional en viviendas."],
    correctaTexto: "Establecer los requisitos técnicos y de seguridad para instalaciones de baja tensión.",
    explicacion: "El REBT es una normativa de obligado cumplimiento en España que establece: requisitos de seguridad, métodos de cálculo, valores máximos de caída de tensión, protecciones necesarias, etc."
  },

  {
    id: 2052,
    tema: "ITC-BT (Instrucciones técnicas)",
    texto: "¿Qué son las ITC-BT en el contexto del REBT?",
    opciones: ["Normas opcionales para instalaciones.", "Instrucciones técnicas complementarias que detallan los requisitos del REBT.", "Solo aplican a instalaciones industriales.", "Son recomendaciones, no obligatorias."],
    correctaTexto: "Instrucciones técnicas complementarias que detallan los requisitos del REBT.",
    explicacion: "Las ITC-BT (Instrucciones Técnicas Complementarias de Baja Tensión) especifican detalles de cumplimiento del REBT. Ej: ITC-BT-19 (intensidades máximas), ITC-BT-23 (canalizaciones)."
  },

  {
    id: 2053,
    tema: "Documentación de una instalación",
    texto: "¿Qué documentación debe acompañar a una instalación eléctrica nueva?",
    opciones: ["Solo el recibo de pago.", "Proyectos, esquemas eléctricos, certificados de conformidad, manual de funcionamiento.", "Solo un dibujo del plano.", "No se necesita documentación."],
    correctaTexto: "Proyectos, esquemas eléctricos, certificados de conformidad, manual de funcionamiento.",
    explicacion: "Documentación obligatoria: memoria técnica, esquemas unifilares, certificado de conformidad del instalador, certificado de la compañía distribuidora, instrucciones de uso y mantenimiento."
  },

  {
    id: 2054,
    tema: "Continuidad de servicios",
    texto: "¿Por qué es importante diseñar instalaciones eléctricas con opciones de continuidad de servicios?",
    opciones: ["Es costumbre sin aplicación práctica.", "Asegura que los servicios esenciales funcionen incluso con averías parciales en la instalación.", "Solo para instalaciones comerciales.", "Aumenta innecesariamente los costos."],
    correctaTexto: "Asegura que los servicios esenciales funcionen incluso con averías parciales en la instalación.",
    explicacion: "Mediante derivaciones independientes, un corte en un circuito no afecta otros servicios. Ejemplo: que falle la iluminación de una estancia sin afectar enchufes o cocina."
  },

  {
    id: 2055,
    tema: "Previsión de carga",
    texto: "¿Qué es la previsión de carga en una instalación?",
    opciones: ["Guardar dinero para mantenimiento.", "Calcular la potencia máxima que se espera consumir para dimensionar adecuadamente la instalación.", "Medir el peso de los cables.", "Contar el número de dispositivos."],
    correctaTexto: "Calcular la potencia máxima que se espera consumir para dimensionar adecuadamente la instalación.",
    explicacion: "La previsión de carga estima: potencia para iluminación, enchufes (cocina, baños), climatización, etc. El REBT establece mínimos (100W/m² en viviendas). Esta potencia determina el diámetro de cables y protecciones."
  },

  {
    id: 2056,
    tema: "PIA - Protecci­ón de Sobrecarga",
    texto: "¿Cuál es la función principal de un PIA (Pequeño Interruptor Automático)?",
    opciones: ["Medir voltaje.", "Desconectar automáticamente ante sobrecargas o cortocircuitos.", "Aumentar la corriente del circuito.", "Controlar el brillo de la iluminación."],
    correctaTexto: "Desconectar automáticamente ante sobrecargas o cortocircuitos.",
    explicacion: "El PIA es un dispositivo automático que interrumpe el circuito cuando: 1) Hay sobrecarga (corriente supera su calibre) 2) Hay cortocircuito. Protege conductores y receptores de daños."
  },

  {
    id: 2057,
    tema: "Diferencial - Protección contra fugas",
    texto: "¿Cuál es la función de un interruptor diferencial?",
    opciones: ["Cambiar la velocidad de la corriente.", "Detectar fugas de corriente y desconectar el circuito para evitar electrocuciones.", "Aumentar la potencia disponible.", "Reducir el consumo energético."],
    correctaTexto: "Detectar fugas de corriente y desconectar el circuito para evitar electrocuciones.",
    explicacion: "El diferencial (RCD/DDV) compara la corriente que entra y sale. Si hay diferencia (fuga a tierra), asume contacto accidental y desconecta. Es esencial para seguridad personal."
  },

  {
    id: 2058,
    tema: "Calibre y sensibilidad diferencial",
    texto: "¿Cuál es la sensibilidad típica de un interruptor diferencial en viviendas?",
    opciones: ["0,01 A", "0,03 A (30 mA)", "1 A", "100 A"],
    correctaTexto: "0,03 A (30 mA)",
    explicacion: "En viviendas: diferenciales de 30 mA (sensibilidad media) para protección general. En locales mojados o ducha: 10 mA (alta sensibilidad). En circuitos de fuerza: pueden ser de 300 mA."
  },

  {
    id: 2059,
    tema: "Toma de tierra - Función",
    texto: "¿Cuál es la función principal de un sistema de toma de tierra en una instalación?",
    opciones: ["Mejorar la estética.", "Conducir corrientes de fuga a tierra para evitar voltajes peligrosos en las carcasas de los equipos.", "Aumentar la resistencia eléctrica.", "Eliminar el neutro."],
    correctaTexto: "Conducir corrientes de fuga a tierra para evitar voltajes peligrosos en las carcasas de los equipos.",
    explicacion: "La toma de tierra crea un camino de baja resistencia (< 40 Ω en viviendas) para que las corrientes de fuga retornen a tierra sin pasar por las personas. Es complementaria al diferencial."
  },

  {
    id: 2060,
    tema: "Sistemas TN, TT e IT",
    texto: "¿Cuál es la diferencia fundamental entre un sistema TN y un sistema TT?",
    opciones: ["No hay diferencia.", "En TN, el neutro y tierra están unidos en origen; en TT, son independientes con toma de tierra separada.", "TN es antiguo, TT es moderno.", "TT no necesita diferenciales."],
    correctaTexto: "En TN, el neutro y tierra están unidos en origen; en TT, son independientes con toma de tierra separada.",
    explicacion: "Sistema TN: neutro y tierra unidos en la fuente. Usado en redes trifásicas. Sistema TT: cada usuario tiene su toma de tierra independiente. Usado en España (más seguro ante falta de neutro)."
  },

  {
    id: 2061,
    tema: "Instalación de enchufes - Distancia al agua",
    texto: "¿Cuál es la distancia mínima recomendada desde un enchufe a una fuente de agua (ducha, bañera)?",
    opciones: ["0 cm", "30 cm", "60 cm", "1 metro"],
    correctaTexto: "60 cm",
    explicacion: "En baños y locales mojados, los enchufes deben estar a mínimo 60 cm de fuentes de agua para reducir riesgos de electrocución. Se recomienda instalarlos fuera del local mojado o usar protecciones especiales."
  },

  {
    id: 2062,
    tema: "Capacidad de ruptura de PIAs",
    texto: "¿Qué es la capacidad de ruptura de un PIA?",
    opciones: ["El tiempo que tarda en apagar el interruptor.", "La máxima corriente de cortocircuito que puede interrumpir sin dañarse.", "La potencia que puede suministrar.", "La resistencia del conductor."],
    correctaTexto: "La máxima corriente de cortocircuito que puede interrumpir sin dañarse.",
    explicacion: "La capacidad de ruptura (poder de corte) se expresa en kA. Un PIA de 10 kA puede interrumpir cortocircuitos hasta 10,000 A. Si se supera, el PIA se daña y no protege."
  },

  {
    id: 2063,
    tema: "Mantenimiento de la instalación",
    texto: "¿Cuál es el mantenimiento básico recomendado para una instalación eléctrica doméstica?",
    opciones: ["No requiere mantenimiento.", "Inspeccionar anualmente, probar diferenciales, limpiar polvo, revisar enchufes y cables.", "Solo reparar cuando falle algo.", "Cambiar todos los cables cada 5 años."],
    correctaTexto: "Inspeccionar anualmente, probar diferenciales, limpiar polvo, revisar enchufes y cables.",
    explicacion: "Mantenimiento preventivo: 1) Limpiar polvo de enchufes, 2) Prueba anual del botón test del diferencial, 3) Revisar cables dañados, 4) Reapretarpernos, 5) Verificar puesta a tierra."
  },

  {
    id: 2064,
    tema: "Carga de una línea - Fórmula monofásica",
    texto: "¿Cuál es la fórmula para calcular la caída de tensión en una línea monofásica?",
    opciones: ["U = I × L", "U = (2 × ρ × L × I) / S", "U = I / S", "U = L × S"],
    correctaTexto: "U = (2 × ρ × L × I) / S",
    explicacion: "Caída de tensión monofásica: U = (2 × ρ × L × I) / S. Donde ρ = resistividad, L = longitud, I = intensidad, S = sección. Máximo permitido por REBT: 3% (iluminación) o 5% (fuerza)."
  },

  {
    id: 2065,
    tema: "Interruptor-pulsador - Diferencia",
    texto: "¿Cuál es la diferencia entre un interruptor y un pulsador?",
    opciones: ["No hay diferencia.", "El interruptor mantiene su estado al soltarlo; el pulsador vuelve a su estado de reposo al soltarlo.", "El pulsador es más caro.", "El interruptor no tiene contactos."],
    correctaTexto: "El interruptor mantiene su estado al soltarlo; el pulsador vuelve a su estado de reposo al soltarlo.",
    explicacion: "Interruptor: permanece en la posición en que lo dejamos (ON/OFF). Pulsador: vuelve a su estado de reposo al soltar (típico de timbres, ascensores, aperturas de puerta)."
  },

  {
    id: 2066,
    tema: "Conmutador - Aplicación típica",
    texto: "¿Dónde se instala típicamente un sistema de conmutadores?",
    opciones: ["Solo en escaleras.", "En escaleras y pasillos para controlar una luz desde múltiples puntos.", "En la cocina exclusivamente.", "En circuitos de alta tensión."],
    correctaTexto: "En escaleras y pasillos para controlar una luz desde múltiples puntos.",
    explicacion: "El conmutador permite encender/apagar un receptor (luz) desde dos o más ubicaciones diferentes. Común en pasillos largos, escaleras y sótanos. Usa dos conmutadores y conductores adicionales."
  },

  {
    id: 2067,
    tema: "Fusible - Función y tipos",
    texto: "¿Cuál es la función principal de un fusible?",
    opciones: ["Mejorar la velocidad de la corriente.", "Proteger un circuito interrumpiéndolo cuando la corriente supera un valor predeterminado.", "Almacenar energía.", "Aumentar la voltaje."],
    correctaTexto: "Proteger un circuito interrumpiéndolo cuando la corriente supera un valor predeterminado.",
    explicacion: "El fusible es un dispositivo de protección que se funde (rompe) cuando la corriente supera su calibre, interrumpiendo el circuito. Más antiguos que PIAs, menos prácticos (no reutilizables)."
  }
];
const TEMA_3_DATA = [

  // ========== SECCIÓN 3.1: CUADRO GENERAL DE DISTRIBUCIÓN (CGMP) ==========

  {
    id: 3001,
    tema: "CGMP - Nombre completo",
    texto: "El Cuadro General de Distribución también se conoce como:",
    opciones: ["Central General de Maniobra y Potencia.", "Cuadro General de Mando y Protección (CGMP).", "Caja General de Protección (CGP).", "Centro General de Medida y Potencia."],
    correctaTexto: "Cuadro General de Mando y Protección (CGMP).",
    explicacion: "El Cuadro General de Distribución es el mismo que el Cuadro General de Mando y Protección (CGMP). En él se ubican todos los dispositivos de protección de la instalación."
  },

  {
    id: 3002,
    tema: "CGMP - Dispositivos que contiene",
    texto: "¿Cuáles son los dispositivos que se pueden encontrar en el CGMP?",
    opciones: ["Solo el contador y el fusible principal.", "IGA, interruptores diferenciales (ID), PIAs, ICP y dispositivos contra sobretensiones.", "Únicamente los fusibles de la acometida.", "Solo el interruptor diferencial y el contador."],
    correctaTexto: "IGA, interruptores diferenciales (ID), PIAs, ICP y dispositivos contra sobretensiones.",
    explicacion: "Dentro del CGMP podemos encontrar: el Interruptor General Automático (IGA), interruptores diferenciales (ID), Pequeños Interruptores Automáticos (PIAs), el Interruptor de Control de Potencia (ICP) y dispositivos de protección contra sobretensiones."
  },

  {
    id: 3003,
    tema: "CGMP - Qué protege",
    texto: "La protección que ofrece el CGMP va destinada a:",
    opciones: ["Solo a la instalación y los conductores.", "Solo a las personas.", "A la instalación, los conductores y también a las personas.", "Solo a los electrodomésticos."],
    correctaTexto: "A la instalación, los conductores y también a las personas.",
    explicacion: "La protección que ofrece el CGMP no va solo destinada a la instalación y a los conductores, sino que también ofrece una protección para las personas."
  },

  {
    id: 3004,
    tema: "CGMP - ITC-BT-17 ubicación",
    texto: "Según la ITC-BT-17, ¿dónde deben situarse los dispositivos generales de mando y protección en una vivienda?",
    opciones: ["En la cocina, junto a los electrodomésticos.", "Lo más cerca posible del punto de entrada de la derivación individual, junto a la puerta de entrada.", "En el dormitorio principal.", "En cualquier lugar cómodo para el usuario."],
    correctaTexto: "Lo más cerca posible del punto de entrada de la derivación individual, junto a la puerta de entrada.",
    explicacion: "Según la ITC-BT-17, en viviendas, los dispositivos generales de mando y protección se situarán lo más cerca posible del punto de entrada de la derivación individual, junto a la puerta de entrada. No podrán colocarse en dormitorios, baños ni aseos."
  },

  {
    id: 3005,
    tema: "CGMP - Altura de montaje en viviendas",
    texto: "¿A qué altura deben situarse los dispositivos generales de mando y protección en una vivienda?",
    opciones: ["Entre 0,5 y 1 m desde el nivel del suelo.", "Entre 1,4 y 2 m desde el nivel del suelo.", "Entre 2 y 3 m desde el nivel del suelo.", "A más de 3 m para evitar el acceso de niños."],
    correctaTexto: "Entre 1,4 y 2 m desde el nivel del suelo.",
    explicacion: "La altura a la cual se situarán los dispositivos generales e individuales de mando y protección de los circuitos, medida desde el nivel del suelo, estará comprendida entre 1,4 y 2 m para viviendas. En locales comerciales la altura mínima es de 1 m."
  },

  {
    id: 3006,
    tema: "CGMP - Locales comerciales altura",
    texto: "En locales comerciales, ¿cuál es la altura mínima de montaje para los dispositivos del CGMP?",
    opciones: ["0,5 m desde el nivel del suelo.", "1 m desde el nivel del suelo.", "1,4 m desde el nivel del suelo.", "2 m desde el nivel del suelo."],
    correctaTexto: "1 m desde el nivel del suelo.",
    explicacion: "En locales comerciales, la altura mínima para los dispositivos de mando y protección será de 1 m desde el nivel del suelo. En viviendas, la altura está comprendida entre 1,4 y 2 m."
  },

  {
    id: 3007,
    tema: "CGMP - Otros elementos",
    texto: "¿Cuáles de los siguientes elementos también pueden encontrarse en un cuadro de distribución?",
    opciones: ["Enchufes Schuko y bases de corriente.", "Temporizadores, contactores, relés, fusibles, pilotos y autómatas.", "Canalizaciones y tubos de PVC.", "Cables de tensión y neutro exclusivamente."],
    correctaTexto: "Temporizadores, contactores, relés, fusibles, pilotos y autómatas.",
    explicacion: "Otros elementos que podemos encontrar en el cuadro de distribución son: temporizador, contactor, relé, fusibles, pilotos, autómatas, etc. Estos complementan a los dispositivos principales de protección."
  },

  {
    id: 3008,
    tema: "CGMP - Locales de pública concurrencia",
    texto: "En locales de uso común o de pública concurrencia, ¿qué precaución específica deben cumplir los dispositivos del CGMP?",
    opciones: ["Deben estar pintados de color rojo para identificarlos.", "No ser accesibles al público en general.", "Deben estar a más de 3 m de altura.", "Ser de mayor tamaño que en viviendas."],
    correctaTexto: "No ser accesibles al público en general.",
    explicacion: "En locales de uso común o de pública concurrencia, deberán tomarse las precauciones necesarias para que los dispositivos de mando y protección no sean accesibles al público en general."
  },

  // ========== SECCIÓN 3.2: INTERRUPTOR DE CONTROL DE POTENCIA (ICP) ==========

  {
    id: 3009,
    tema: "ICP - Función",
    texto: "¿Cuál es la función del Interruptor de Control de Potencia (ICP)?",
    opciones: ["Proteger contra contactos eléctricos directos.", "Cortar el flujo de electricidad cuando se supera la potencia contratada.", "Proteger contra sobrecargas de los circuitos interiores.", "Medir el consumo de energía eléctrica."],
    correctaTexto: "Cortar el flujo de electricidad cuando se supera la potencia contratada.",
    explicacion: "El ICP es un sistema automático que corta el flujo de electricidad en un local cuando se supera la potencia contratada con la compañía eléctrica."
  },

  {
    id: 3010,
    tema: "ICP - Quién lo ajusta",
    texto: "¿Quién ajusta y precinta el Interruptor de Control de Potencia (ICP)?",
    opciones: ["El usuario propietario de la vivienda.", "El instalador eléctrico autorizado.", "La compañía eléctrica, que es la única que puede certificar su correcta instalación.", "Cualquier técnico cualificado."],
    correctaTexto: "La compañía eléctrica, que es la única que puede certificar su correcta instalación.",
    explicacion: "El ICP viene ajustado por la compañía eléctrica y está precintado para que el usuario no pueda acceder a él. Por ello, la compañía es la única que puede certificar la correcta instalación y funcionamiento."
  },

  {
    id: 3011,
    tema: "ICP - Solución cuando salta frecuentemente",
    texto: "Si el ICP salta frecuentemente porque la potencia utilizada es mayor que la contratada, ¿cuál es la única solución?",
    opciones: ["Cambiar el ICP por uno de mayor calibre.", "Desconectar el ICP y conectar directamente.", "Aumentar la potencia contratada (pagar más en la factura).", "Instalar un diferencial de mayor sensibilidad."],
    correctaTexto: "Aumentar la potencia contratada (pagar más en la factura).",
    explicacion: "Si el ICP salta con frecuencia porque la potencia utilizada es mayor que la contratada, la única solución es aumentar la potencia contratada, lo que implica pagar más en la factura eléctrica."
  },

  {
    id: 3012,
    tema: "ICP - Ubicación en el cuadro",
    texto: "Según la ITC-BT-17, ¿dónde se coloca el ICP respecto a los demás dispositivos del cuadro?",
    opciones: ["Al final del cuadro, después de los PIAs.", "En compartimento independiente y precintable, inmediatamente antes de los demás dispositivos.", "Junto al contador, fuera del CGMP.", "No importa su posición en el cuadro."],
    correctaTexto: "En compartimento independiente y precintable, inmediatamente antes de los demás dispositivos.",
    explicacion: "En viviendas y locales comerciales e industriales, se colocará una caja para el ICP, en compartimento independiente y precintable, inmediatamente antes de los demás dispositivos, según ITC-BT-17."
  },

  // ========== SECCIÓN 3.3: INTERRUPTORES AUTOMÁTICOS MAGNETOTÉRMICOS ==========

  {
    id: 3013,
    tema: "Magnetotérmico - Protección principal (TEST OFICIAL)",
    texto: "Un interruptor automático magnetotérmico protege contra:",
    opciones: ["Contactos directos e indirectos.", "Incendios.", "Derroche de potencia.", "Sobrecargas y cortocircuitos."],
    correctaTexto: "Sobrecargas y cortocircuitos.",
    explicacion: "Los interruptores automáticos magnetotérmicos protegen contra sobrecargas y cortocircuitos. Cuando el interruptor detecta algún fallo, por ejemplo, por sobreintensidad, este interruptor se abre para interrumpir el paso de corriente."
  },

  {
    id: 3014,
    tema: "Magnetotérmico - Partes del dispositivo",
    texto: "¿De qué dos partes consta el interruptor automático magnetotérmico?",
    opciones: ["Una parte eléctrica y otra mecánica.", "Una parte magnética y otra térmica.", "Una parte digital y otra analógica.", "Una parte de potencia y otra de control."],
    correctaTexto: "Una parte magnética y otra térmica.",
    explicacion: "Como su nombre indica, el dispositivo consta de dos partes: una magnética (disparador electromagnético) y otra térmica (lámina bimetálica). Cada una actúa ante un tipo diferente de fallo."
  },

  {
    id: 3015,
    tema: "Magnetotérmico - Corte magnético función",
    texto: "¿Para qué tipo de fallo actúa el corte magnético de un magnetotérmico?",
    opciones: ["Para sobrecargas lentas y progresivas.", "Para cortocircuitos, actuando muy rápido cuando la intensidad es 3 a 20 veces mayor a la nominal.", "Para variaciones de tensión.", "Para fallos de aislamiento a tierra."],
    correctaTexto: "Para cortocircuitos, actuando muy rápido cuando la intensidad es 3 a 20 veces mayor a la nominal.",
    explicacion: "El corte magnético actúa contra cortocircuitos porque el interruptor actúa muy rápido cuando llega una intensidad entre 3 y 20 veces mayor a la nominal. En un cortocircuito se produce un aumento muy brusco y cuantitativo de la intensidad."
  },

  {
    id: 3016,
    tema: "Magnetotérmico - Corte térmico función",
    texto: "¿Para qué tipo de fallo actúa el corte térmico de un magnetotérmico?",
    opciones: ["Para cortocircuitos instantáneos.", "Para sobrecargas, mediante una lámina bimetálica que se calienta y deforma.", "Para sobretensiones de la red.", "Para fallos de frecuencia."],
    correctaTexto: "Para sobrecargas, mediante una lámina bimetálica que se calienta y deforma.",
    explicacion: "El corte térmico actúa contra sobrecargas. Consta de una lámina bimetálica que se calienta cuando hay un paso de corriente mayor al debido, llegándose a deformar. Al deformarse se produce la apertura del circuito."
  },

  {
    id: 3017,
    tema: "Magnetotérmico - Lámina bimetálica",
    texto: "¿Cuál es el componente clave del disparador térmico en un magnetotérmico?",
    opciones: ["Un fusible de hilo metálico.", "Una lámina bimetálica que se deforma con el calor.", "Un electroimán.", "Un condensador electrolítico."],
    correctaTexto: "Una lámina bimetálica que se deforma con el calor.",
    explicacion: "El disparador térmico consta de una lámina bimetálica que se calienta cuando la corriente supera el valor debido. Al calentarse se deforma y al deformarse produce la apertura del circuito, protegiendo contra sobrecargas."
  },

  {
    id: 3018,
    tema: "Magnetotérmico - Tipos comerciales",
    texto: "¿Cómo se comercializan los interruptores magnetotérmicos según el número de polos?",
    opciones: ["Solo unipolares o bipolares.", "Unipolares, bipolares, tripolares o tetrapolares.", "Solo tripolares o tetrapolares para trifásica.", "Monofásicos de 220V o trifásicos de 380V."],
    correctaTexto: "Unipolares, bipolares, tripolares o tetrapolares.",
    explicacion: "Los interruptores magnetotérmicos se comercializan como: unipolares (1 polo), bipolares (2 polos), tripolares (3 polos) o tetrapolares (4 polos), según la aplicación monofásica o trifásica."
  },

  {
    id: 3019,
    tema: "Magnetotérmico - Poder de corte (TEST OFICIAL)",
    texto: "La intensidad máxima que un interruptor puede cortar se llama:",
    opciones: ["Poder de corte.", "Intensidad nominal o calibre.", "Curva de disparo.", "Tiempo de disparo."],
    correctaTexto: "Poder de corte.",
    explicacion: "El poder de corte es la intensidad máxima (en kA) que el interruptor puede cortar. En los magnetotérmicos esta intensidad se encuentra entre 4 y 20 kA. Por eso deben ir acompañados de un fusible que tiene mayor poder de corte."
  },

  {
    id: 3020,
    tema: "Magnetotérmico - Poder de corte 6 kA (TEST OFICIAL)",
    texto: "¿Qué implica que el poder de corte de un interruptor magnetotérmico es de 6 kA?",
    opciones: ["La intensidad nominal asociada al interruptor magnetotérmico.", "La intensidad mínima de funcionamiento.", "Que como máximo podrá actuar ante intensidades de 6 kA.", "Que no es apropiado para instalaciones residenciales."],
    correctaTexto: "Que como máximo podrá actuar ante intensidades de 6 kA.",
    explicacion: "El poder de corte indica la intensidad máxima que puede interrumpir el dispositivo. Si es de 6 kA, significa que como máximo podrá actuar ante intensidades de 6.000 A. Si se supera, el dispositivo podría dañarse."
  },

  {
    id: 3021,
    tema: "Magnetotérmico - Intensidad nominal",
    texto: "¿Qué es la intensidad nominal o calibre de un magnetotérmico?",
    opciones: ["La intensidad máxima que puede cortar en un cortocircuito.", "La intensidad máxima que puede soportar antes de que corte el flujo de electricidad.", "La intensidad mínima necesaria para que funcione.", "La intensidad de arranque del disparador magnético."],
    correctaTexto: "La intensidad máxima que puede soportar antes de que corte el flujo de electricidad.",
    explicacion: "La intensidad nominal o calibre es la intensidad máxima que el interruptor puede soportar antes de que corte el flujo de electricidad (se abra). Esta intensidad nominal está normalizada y aparece marcada en el dispositivo (ej: 10A, 16A, 25A)."
  },

  {
    id: 3022,
    tema: "Magnetotérmico - Curvas de disparo",
    texto: "¿Qué relacionan las curvas de disparo de un magnetotérmico?",
    opciones: ["La tensión y la potencia del circuito.", "La intensidad que circula con el tiempo que tardará en realizar el corte.", "La temperatura ambiente y la intensidad nominal.", "La sección del cable y el calibre del interruptor."],
    correctaTexto: "La intensidad que circula con el tiempo que tardará en realizar el corte.",
    explicacion: "Las curvas relacionan la intensidad que circula con el tiempo que tardará en realizar el corte. El eje relacionado con la intensidad se expresa como la intensidad que circula en función del calibre del automático (I/In)."
  },

  {
    id: 3023,
    tema: "Magnetotérmico - Rango poder de corte",
    texto: "¿Entre qué valores se encuentra el poder de corte de los interruptores magnetotérmicos?",
    opciones: ["Entre 1 y 3 kA.", "Entre 4 y 20 kA.", "Entre 20 y 100 kA.", "Entre 100 y 1000 kA."],
    correctaTexto: "Entre 4 y 20 kA.",
    explicacion: "El poder de corte de los magnetotérmicos está entre 4 y 20 kA, que no es muy grande. Por eso deben ir acompañados de fusibles, que tienen mayor poder de corte para proteger ante cortocircuitos muy elevados."
  },

  {
    id: 3024,
    tema: "Magnetotérmico - Símbolo (TEST OFICIAL)",
    texto: "¿A qué hace referencia el siguiente símbolo?",
    imagen: "img/interruptor magnetotermico tetrapolar.png",
    opciones: ["Interruptor general automático.", "Interruptor diferencial.", "Interruptor magnetotérmico.", "Toma a tierra."],
    correctaTexto: "Interruptor magnetotérmico.",
    explicacion: "El símbolo del interruptor magnetotérmico incluye los elementos gráficos del disparador térmico (lámina bimetálica) y el disparador magnético (electroimán). Representa la doble protección: térmica (sobrecargas) y magnética (cortocircuitos). (TEST OFICIAL)"
  },

  // ========== SECCIÓN 3.4: INTERRUPTOR AUTOMÁTICO DIFERENCIAL (ID) ==========

  {
    id: 3025,
    tema: "Diferencial - Funciones principales",
    texto: "¿Cuáles son las funciones principales del interruptor automático diferencial (ID)?",
    opciones: ["Solo proteger la instalación contra sobrecargas.", "Proteger la instalación ante aislamientos defectuosos, proteger personas contra contactos directos/indirectos y proteger contra incendios.", "Solo medir la corriente de fuga.", "Únicamente proteger contra cortocircuitos."],
    correctaTexto: "Proteger la instalación ante aislamientos defectuosos, proteger personas contra contactos directos/indirectos y proteger contra incendios.",
    explicacion: "El diferencial tiene varias funciones: 1) Protección de la instalación si un aislamiento es defectuoso; 2) Protección de personas contra contactos directos e indirectos; 3) Protección contra incendios."
  },

  {
    id: 3026,
    tema: "Diferencial - Lo que NO protege",
    texto: "¿Qué NO están diseñados para proteger los interruptores diferenciales?",
    opciones: ["Las personas contra contactos eléctricos.", "Los conductores (cables) de la instalación.", "La instalación contra fallos de aislamiento.", "Contra riesgo de incendio."],
    correctaTexto: "Los conductores (cables) de la instalación.",
    explicacion: "Los diferenciales NO están diseñados para proteger a los conductores. Esta es una diferencia clave con los magnetotérmicos. El diferencial protege personas e instalación, pero la protección de conductores la realiza el magnetotérmico."
  },

  {
    id: 3027,
    tema: "Diferencial - Sensibilidad IDn",
    texto: "¿Cómo se clasifica la sensibilidad (IDn) de un diferencial?",
    opciones: ["Alta (10 mA), media (30 mA), baja (100 mA).", "Muy alta (10 mA), alta (30 mA), baja (300 mA, 500 mA o 1 A).", "Normal (30 mA), elevada (60 mA), máxima (100 mA).", "Estándar (25 mA), reforzada (50 mA), industrial (300 mA)."],
    correctaTexto: "Muy alta (10 mA), alta (30 mA), baja (300 mA, 500 mA o 1 A).",
    explicacion: "La sensibilidad (IDn) del diferencial puede ser: muy alta (10 mA) para locales mojados, alta (30 mA) para viviendas en general, y baja (300 mA, 500 mA o 1 A) para circuitos industriales o de fuerza."
  },

  {
    id: 3028,
    tema: "Diferencial - Clases",
    texto: "¿Cuáles son las clases de interruptores diferenciales según el tipo de corriente residual?",
    opciones: ["Tipo 1, Tipo 2, Tipo 3.", "Clase P, Q y R.", "Clase AC, A, B, F y S (selectivo).", "Clase monofásico y trifásico."],
    correctaTexto: "Clase AC, A, B, F y S (selectivo).",
    explicacion: "Las clases de diferenciales son: AC (corriente residual alterna), A (alterna pulsante), B (alterna hasta 1kHz, pulsante y pura continua), F (alterna hasta 1kHz y pulsante), S (selectivo). Cada clase detecta un tipo de corriente residual."
  },

  {
    id: 3029,
    tema: "Diferencial - Clase AC",
    texto: "¿Qué tipo de corriente residual detecta el diferencial de clase AC?",
    opciones: ["Corriente residual alterna pulsante.", "Corriente residual alterna.", "Corriente residual continua pura.", "Corriente residual hasta 1 kHz."],
    correctaTexto: "Corriente residual alterna.",
    explicacion: "El diferencial de clase AC detecta la corriente residual alterna (sinusoidal). Es el tipo más básico y estándar. Para instalaciones con electrónica de potencia o variadores de frecuencia se necesitan clases más avanzadas (A, B, F)."
  },

  {
    id: 3030,
    tema: "Diferencial - Tiempo de disparo",
    texto: "¿Por qué es importante el tiempo de disparo de un diferencial?",
    opciones: ["Porque determina el consumo eléctrico del diferencial.", "Porque una respuesta rápida puede salvar la vida de una persona en caso de electrocución.", "Porque influye en el coste del dispositivo.", "Porque determina la clase de diferencial."],
    correctaTexto: "Porque una respuesta rápida puede salvar la vida de una persona en caso de electrocución.",
    explicacion: "El tiempo de disparo es el tiempo que tarda en cortar el suministro de corriente ante una anomalía. Es muy importante porque una respuesta rápida puede salvar la vida de una persona que sufra un contacto eléctrico."
  },

  {
    id: 3031,
    tema: "Diferencial - Número de polos",
    texto: "¿En cuántos polos se comercializan los interruptores diferenciales?",
    opciones: ["Solo de 1 polo.", "De 2 o 4 polos.", "De 1, 2, 3 o 4 polos.", "Solo de 3 polos para uso trifásico."],
    correctaTexto: "De 2 o 4 polos.",
    explicacion: "Los interruptores diferenciales existen en dos versiones según el número de polos: de 2 polos (para instalaciones monofásicas: fase + neutro) y de 4 polos (para instalaciones trifásicas: 3 fases + neutro)."
  },

  {
    id: 3032,
    tema: "Diferencial - Intensidad nominal",
    texto: "¿Qué ocurre si por el diferencial circula una intensidad mayor a su calibre?",
    opciones: ["Dispara inmediatamente por diferencia de corriente.", "El diferencial se quemaría.", "No pasa nada, el diferencial no protege contra sobrecargas.", "Activa una alarma sonora."],
    correctaTexto: "El diferencial se quemaría.",
    explicacion: "La intensidad nominal o calibre es la intensidad máxima que el diferencial puede soportar. En caso de que por el diferencial circule una intensidad mayor a la que soporta el calibre, este se quemaría. Por eso se dimensiona correctamente."
  },

  {
    id: 3033,
    tema: "Diferencial - Diferencia con magnetotérmico",
    texto: "¿Cuál es la diferencia fundamental entre un diferencial y un magnetotérmico?",
    opciones: ["El diferencial es más barato.", "El diferencial detecta corrientes de fuga y protege personas; el magnetotérmico protege contra sobrecargas y cortocircuitos.", "El magnetotérmico protege personas y el diferencial protege conductores.", "No hay diferencia, son equivalentes."],
    correctaTexto: "El diferencial detecta corrientes de fuga y protege personas; el magnetotérmico protege contra sobrecargas y cortocircuitos.",
    explicacion: "El diferencial detecta desequilibrios entre corriente de entrada y salida (fugas) y protege a las personas. El magnetotérmico protege contra sobrecargas y cortocircuitos. Ambos son necesarios y complementarios en toda instalación."
  },

  {
    id: 3034,
    tema: "Diferencial - Sensibilidad para viviendas",
    texto: "¿Cuál es la sensibilidad habitual del diferencial en instalaciones domésticas?",
    opciones: ["10 mA (muy alta sensibilidad).", "30 mA (alta sensibilidad).", "300 mA (baja sensibilidad).", "1 A (muy baja sensibilidad)."],
    correctaTexto: "30 mA (alta sensibilidad).",
    explicacion: "En viviendas, el diferencial habitual tiene una sensibilidad de 30 mA (alta). Para locales con riesgo de humedad (cuartos de baño) se puede usar 10 mA (muy alta sensibilidad). Los de 300 mA se usan más en industria."
  },

  // ========== SECCIÓN 3.5: PROTECCIONES EN ELECTRIFICACIÓN BÁSICA ==========

  {
    id: 3035,
    tema: "Electrificación básica - Nº de circuitos (TEST OFICIAL)",
    texto: "Una electrificación básica consta de:",
    opciones: ["3 circuitos.", "4 circuitos.", "5 circuitos.", "6 circuitos."],
    correctaTexto: "5 circuitos.",
    explicacion: "Una electrificación básica tiene 5 circuitos independientes: C1 (alumbrado), C2 (tomas de uso general), C3 (cocina y horno), C4 (lavadora, lavavajillas y termo), C5 (tomas de baño y cocina). Además de una potencia prevista de 5750 W a 230 V."
  },

  {
    id: 3036,
    tema: "Electrificación básica - Potencia prevista",
    texto: "¿Cuál es la potencia prevista en una electrificación básica?",
    opciones: ["2300 W a 230 V.", "3450 W a 230 V.", "5750 W a 230 V.", "9200 W a 230 V."],
    correctaTexto: "5750 W a 230 V.",
    explicacion: "Una electrificación básica tiene una potencia prevista de 5750 W a 230 V. Esto no significa que el usuario tenga contratada esa potencia, pero la instalación está dimensionada para soportarla."
  },

  {
    id: 3037,
    tema: "Electrificación básica - Circuito C1",
    texto: "¿A qué corresponde el circuito C1 en una electrificación básica y cuál es su sección y calibre PIA?",
    opciones: ["Tomas de corriente generales, 2x2,5 mm², 16 A.", "Cocina y horno, 2x6 mm², 25 A.", "Alumbrado, 2x1,5 mm², 10 A.", "Lavadora y lavavajillas, 2x4 mm², 20 A."],
    correctaTexto: "Alumbrado, 2x1,5 mm², 10 A.",
    explicacion: "El circuito C1 corresponde al alumbrado. Sus características son: sección del conductor 2x1,5 mm² + T (tierra), y PIA de 10 A."
  },

  {
    id: 3038,
    tema: "Electrificación básica - Circuito C2",
    texto: "¿A qué corresponde el circuito C2 en una electrificación básica?",
    opciones: ["Cocina y horno.", "Tomas de corriente de uso general, 2x2,5 mm², 16 A.", "Alumbrado.", "Tomas de baño y cocina."],
    correctaTexto: "Tomas de corriente de uso general, 2x2,5 mm², 16 A.",
    explicacion: "El circuito C2 corresponde a las tomas de corriente de uso general. Sus características son: sección 2x2,5 mm² + T y PIA de 16 A."
  },

  {
    id: 3039,
    tema: "Electrificación básica - Circuito C3",
    texto: "¿Cuál es el calibre del PIA y la sección del circuito C3 (cocina y horno) en electrificación básica?",
    opciones: ["PIA 10 A, sección 2x1,5 mm².", "PIA 16 A, sección 2x2,5 mm².", "PIA 25 A, sección 2x6 mm².", "PIA 20 A, sección 2x4 mm²."],
    correctaTexto: "PIA 25 A, sección 2x6 mm².",
    explicacion: "El circuito C3 alimenta la cocina y el horno, que son los electrodomésticos de mayor potencia. Por eso requiere el mayor calibre de PIA (25 A) y la mayor sección de cable (2x6 mm² + T)."
  },

  {
    id: 3040,
    tema: "Electrificación básica - Circuito C4",
    texto: "¿Qué electrodomésticos alimenta el circuito C4 en una electrificación básica?",
    opciones: ["Iluminación y enchufes generales.", "Cocina y horno.", "Lavadora, lavavajillas y calentador eléctrico, 2x4 mm², 20 A.", "Tomas de baño y cocina."],
    correctaTexto: "Lavadora, lavavajillas y calentador eléctrico, 2x4 mm², 20 A.",
    explicacion: "El circuito C4 alimenta la lavadora, el lavavajillas y el calentador eléctrico (termo). Su sección es 2x4 mm² + T y el PIA es de 20 A."
  },

  {
    id: 3041,
    tema: "Electrificación básica - Circuito C5",
    texto: "¿A qué corresponde el circuito C5 en una electrificación básica?",
    opciones: ["Alumbrado de emergencia.", "Cocina de inducción.", "Tomas de corriente de baños y tomas auxiliares en cocina, 2x2,5 mm², 16 A.", "Calefacción eléctrica."],
    correctaTexto: "Tomas de corriente de baños y tomas auxiliares en cocina, 2x2,5 mm², 16 A.",
    explicacion: "El circuito C5 lleva la corriente a los baños (aseos) y a las tomas auxiliares en cocina. Su sección es 2x2,5 mm² + T y el PIA es de 16 A."
  },

  {
    id: 3042,
    tema: "Electrificación básica - Definición",
    texto: "¿Qué es una electrificación básica?",
    opciones: ["El sistema máximo de electrificación para viviendas de lujo.", "El sistema mínimo e indispensable para satisfacer las necesidades primarias sin obras posteriores.", "Solo aplicable en locales comerciales.", "Un sistema provisional de conexión."],
    correctaTexto: "El sistema mínimo e indispensable para satisfacer las necesidades primarias sin obras posteriores.",
    explicacion: "La electrificación básica es el sistema mínimo e indispensable para poder satisfacer las necesidades primarias, permitiendo instalar y usar los electrodomésticos de uso básico sin necesidad de obras posteriores."
  },

  {
    id: 3043,
    tema: "Electrificación básica - Esquema unifilar",
    texto: "En el esquema unifilar de una electrificación básica, ¿qué dispositivos preceden a los 5 PIAs?",
    opciones: ["Solo el IGA.", "El ICP y el IGA directamente.", "El IGA (Interruptor General Automático) y el IDif (Interruptor Diferencial).", "Solo el diferencial sin IGA."],
    correctaTexto: "El IGA (Interruptor General Automático) y el IDif (Interruptor Diferencial).",
    explicacion: "En el esquema unifilar de electrificación básica, la secuencia es: IGA → IDif (Diferencial) → 5 PIAs (C1 a C5). Cada PIA protege un circuito independiente."
  },

  // ========== SECCIÓN 3.6: ELECTRIFICACIÓN ELEVADA ==========

  {
    id: 3044,
    tema: "Electrificación elevada - Cuándo se aplica",
    texto: "¿Cuándo se aplica una electrificación elevada en una vivienda?",
    opciones: ["Siempre en viviendas de nueva construcción.", "Cuando la superficie supera 160 m² o se prevé aire acondicionado, automatización u otras condiciones específicas.", "Solo en pisos de más de 10 plantas.", "Cuando el usuario lo solicita voluntariamente."],
    correctaTexto: "Cuando la superficie supera 160 m² o se prevé aire acondicionado, automatización u otras condiciones específicas.",
    explicacion: "La electrificación elevada se aplica cuando: superficie útil > 160 m², se prevé aire acondicionado, calefacción eléctrica, automatización, o cuando el nº de puntos de alumbrado supera 30, las tomas generales superan 20, o las tomas en baños/cocina son más de 6."
  },

  {
    id: 3045,
    tema: "Electrificación elevada - Circuito C8 y C9",
    texto: "En una electrificación elevada, ¿a qué se destinan los circuitos C8 y C9?",
    opciones: ["C8 al aire acondicionado y C9 a la calefacción.", "C8 a la calefacción eléctrica y C9 al aire acondicionado.", "C8 a la lavadora y C9 a la secadora.", "C8 a puntos de luz adicionales y C9 a enchufes adicionales."],
    correctaTexto: "C8 a la calefacción eléctrica y C9 al aire acondicionado.",
    explicacion: "En la electrificación elevada: C8 está destinado a la instalación de calefacción eléctrica y C9 a la instalación de aire acondicionado."
  },

  {
    id: 3046,
    tema: "Electrificación elevada - Circuito C10 y C13",
    texto: "¿A qué corresponden los circuitos C10 y C13 en una electrificación elevada?",
    opciones: ["C10 a calefacción y C13 a automatización.", "C10 a la secadora y C13 a la recarga de vehículos eléctricos.", "C10 a tomas adicionales y C13 a iluminación exterior.", "C10 al horno de microondas y C13 a la videoportería."],
    correctaTexto: "C10 a la secadora y C13 a la recarga de vehículos eléctricos.",
    explicacion: "En la electrificación elevada: C10 está destinado a la instalación de la secadora y C13 para la recarga de vehículos eléctricos."
  },

  {
    id: 3047,
    tema: "Electrificación elevada - Circuito C6 y C7",
    texto: "¿Para qué se añaden los circuitos C6 y C7 en la electrificación elevada?",
    opciones: ["C6 para cada 30 puntos de luz adicionales y C7 para cada 20 tomas de corriente de uso general adicionales.", "C6 para la cocina y C7 para el baño.", "C6 para el garaje y C7 para el trastero.", "C6 para iluminación exterior y C7 para el ascensor."],
    correctaTexto: "C6 para cada 30 puntos de luz adicionales y C7 para cada 20 tomas de corriente de uso general adicionales.",
    explicacion: "Se añade un circuito C6 por cada 30 puntos de luz y un circuito C7 por cada 20 tomas de corriente de uso general, cuando se superan los límites de la electrificación básica."
  },

  {
    id: 3048,
    tema: "Electrificación elevada - Circuito C11",
    texto: "¿A qué está destinado el circuito C11 en una electrificación elevada?",
    opciones: ["A la recarga de vehículos eléctricos.", "Al sistema de automatización, gestión técnica de energía y de seguridad.", "A la iluminación exterior.", "A la cocina de inducción."],
    correctaTexto: "Al sistema de automatización, gestión técnica de energía y de seguridad.",
    explicacion: "El circuito C11 está destinado a la instalación del sistema de automatización, gestión técnica de energía y de seguridad del hogar (domótica)."
  },

  {
    id: 3049,
    tema: "Electrificación elevada - Base de ampliación",
    texto: "¿En qué se basa la electrificación elevada respecto a la básica?",
    opciones: ["Sustituye completamente a la electrificación básica.", "Se crean circuitos adicionales a los 5 circuitos principales para satisfacer mayores necesidades.", "Es igual a la básica pero con cables de mayor sección.", "Solo cambia el número de diferenciales."],
    correctaTexto: "Se crean circuitos adicionales a los 5 circuitos principales para satisfacer mayores necesidades.",
    explicacion: "La electrificación elevada se crea a partir de la básica: se mantienen los 5 circuitos principales (C1-C5) y se añaden circuitos adicionales (C6-C13) para satisfacer las necesidades de viviendas con mayores prestaciones."
  },

  // ========== SECCIÓN 3.7: FUSIBLES ==========

  {
    id: 3050,
    tema: "Fusible - Ventaja sobre magnetotérmico (TEST OFICIAL)",
    texto: "La ventaja de un fusible con respecto a un interruptor automático magnetotérmico es:",
    opciones: ["Su mejor curva de disparo.", "Su intensidad nominal.", "Su poder de corte.", "Su tensión nominal."],
    correctaTexto: "Su poder de corte.",
    explicacion: "La principal ventaja del fusible respecto al magnetotérmico es su mayor poder de corte. El fusible tiene material extintor del arco eléctrico que le da un poder de corte muy elevado, mayor que el de los magnetotérmicos (4-20 kA)."
  },

  {
    id: 3051,
    tema: "Fusible - Funcionamiento",
    texto: "¿Cómo funciona un fusible cuando se supera su intensidad nominal?",
    opciones: ["Activa una alarma y espera la intervención del operario.", "El hilo metálico interior se funde por calor, abriendo el circuito e interrumpiendo el paso de corriente.", "Dispara el magnetotérmico asociado.", "Eleva la impedancia del circuito para limitar la corriente."],
    correctaTexto: "El hilo metálico interior se funde por calor, abriendo el circuito e interrumpiendo el paso de corriente.",
    explicacion: "Un fusible consta de un cartucho con un hilo metálico que soporta una determinada intensidad. Cuando la intensidad supera esa capacidad, el hilo se funde por calor y abre el circuito. El fusible es un elemento no reutilizable."
  },

  {
    id: 3052,
    tema: "Fusible - Material extintor",
    texto: "¿Por qué tiene un fusible mayor poder de corte que un magnetotérmico?",
    opciones: ["Porque es más grande.", "Porque está fabricado de materiales superconductores.", "Porque contiene material que actúa como extintor del arco eléctrico.", "Porque trabaja a temperatura más alta."],
    correctaTexto: "Porque contiene material que actúa como extintor del arco eléctrico.",
    explicacion: "El fusible consta de un material que actúa como extintor del arco eléctrico, lo que le confiere un gran poder de corte. Esto lo hace superior al magnetotérmico en este aspecto, aunque tiene el inconveniente de no ser reutilizable."
  },

  {
    id: 3053,
    tema: "Fusible - Curvas de fusión",
    texto: "¿Qué representan las curvas de fusión de un fusible?",
    opciones: ["La relación entre temperatura ambiente y corriente máxima.", "Una representación gráfica que relaciona la intensidad-tiempo (cuándo se funde).", "El comportamiento del fusible ante sobretensiones.", "La relación entre tensión y resistencia del hilo fusible."],
    correctaTexto: "Una representación gráfica que relaciona la intensidad-tiempo (cuándo se funde).",
    explicacion: "Las curvas de fusión de un fusible son una representación gráfica que relaciona la intensidad con el tiempo que tardará en fundirse. Permiten saber el tiempo de actuación ante distintos valores de corriente."
  },

  {
    id: 3054,
    tema: "Fusible - Inconveniente principal",
    texto: "¿Cuál es el principal inconveniente de los fusibles frente a los magnetotérmicos?",
    opciones: ["Tienen menor poder de corte.", "No protegen contra cortocircuitos.", "No son reutilizables, deben reemplazarse tras actuar.", "Son más voluminosos y caros."],
    correctaTexto: "No son reutilizables, deben reemplazarse tras actuar.",
    explicacion: "El principal inconveniente del fusible es que no es reutilizable: una vez que se funde el hilo metálico debe reemplazarse. Los magnetotérmicos, en cambio, pueden rearmarse simplemente accionando la palanca."
  },

  // ========== SECCIÓN 3.8: CONTACTOS DIRECTOS E INDIRECTOS ==========

  {
    id: 3055,
    tema: "Contacto directo - Definición",
    texto: "¿Qué es un contacto directo en una instalación eléctrica?",
    opciones: ["El contacto con una masa metálica que tiene fallo de aislamiento.", "El contacto de una persona con una parte activa de la instalación (conductores, bornes, etc.).", "El contacto con el cable de puesta a tierra.", "El contacto con el interruptor diferencial."],
    correctaTexto: "El contacto de una persona con una parte activa de la instalación (conductores, bornes, etc.).",
    explicacion: "El contacto directo se produce cuando alguien entra en contacto con una parte activa de la instalación, es decir, con conductores en tensión, bornes, etc. Es el contacto más peligroso."
  },

  {
    id: 3056,
    tema: "Contacto indirecto - Definición",
    texto: "¿Cuándo se produce un contacto indirecto?",
    opciones: ["Cuando se toca un conductor en tensión directamente.", "Cuando se entra en contacto con una masa que no debería tener tensión, pero la tiene por un fallo de aislamiento.", "Cuando se toca el neutro de la instalación.", "Cuando se usa un aparato eléctrico sin guantes."],
    correctaTexto: "Cuando se entra en contacto con una masa que no debería tener tensión, pero la tiene por un fallo de aislamiento.",
    explicacion: "El contacto indirecto ocurre cuando alguien entra en contacto con una masa (carcasa metálica de un aparato) que no debería tener tensión pero que, por un fallo de aislamiento, sí la tiene. Ej: tocar la lavadora cuando hay un fallo interno."
  },

  {
    id: 3057,
    tema: "Contactos - ITC que los regula",
    texto: "¿Qué ITC del REBT define las medidas de protección contra los choques eléctricos por contacto directo e indirecto?",
    opciones: ["ITC-BT-17.", "ITC-BT-21.", "ITC-BT-22.", "ITC-BT-24."],
    correctaTexto: "ITC-BT-24.",
    explicacion: "Las medidas de protección contra los choques eléctricos vienen definidas por la ITC-BT-24 del REBT. Esta instrucción trata tanto los contactos directos como los contactos indirectos."
  },

  {
    id: 3058,
    tema: "Contactos directos - Medidas de protección",
    texto: "¿Cuáles son las medidas de protección contra los contactos directos?",
    opciones: ["Solo el uso de guantes y calzado aislante.", "Aislamiento de partes activas, barreras/envolventes, obstáculos, alejamiento y diferencial residual.", "Solo el interruptor magnetotérmico.", "Únicamente la puesta a tierra."],
    correctaTexto: "Aislamiento de partes activas, barreras/envolventes, obstáculos, alejamiento y diferencial residual.",
    explicacion: "Las medidas contra contactos directos incluyen: aislamiento de las partes activas, barreras o envolventes, obstáculos, puesta fuera de alcance por alejamiento, y protección complementaria por dispositivos de corriente diferencial residual."
  },

  {
    id: 3059,
    tema: "Contactos - Sistema de distribución en España",
    texto: "¿Cuál es el sistema de distribución predominante en España para instalaciones de baja tensión?",
    opciones: ["Sistema IT.", "Sistema TN.", "Sistema TT.", "Sistema TR."],
    correctaTexto: "Sistema TT.",
    explicacion: "Las redes de distribución en España están formadas principalmente por el sistema TT, aunque también existen los sistemas IT y TN. En el sistema TT, el centro de transformación y todas las masas constan de una toma a tierra independiente."
  },

  // ========== SECCIÓN 3.9: SOBRETENSIONES ==========

  {
    id: 3060,
    tema: "Sobretensiones - Tipos (TEST OFICIAL)",
    texto: "Las sobretensiones pueden ser:",
    opciones: ["Suaves o intensas.", "Fuertes o flojas.", "Transitorias o permanentes.", "De tensión o de intensidad."],
    correctaTexto: "Transitorias o permanentes.",
    explicacion: "Existen dos tipos de sobretensiones: transitorias (corta duración, medidas en ms, causadas por conmutaciones, maniobras en la red o rayos) y permanentes (cuando se rompe el neutro, derivando en una descompensación de la línea)."
  },

  {
    id: 3061,
    tema: "Sobretensiones transitorias - Causas",
    texto: "¿Cuáles son las causas de las sobretensiones transitorias?",
    opciones: ["La rotura del neutro de la línea.", "Corrosión de los conductores o envejecimiento del aislamiento.", "Conmutaciones, maniobras en la red o impacto de un rayo.", "Sobrecargas prolongadas en la instalación."],
    correctaTexto: "Conmutaciones, maniobras en la red o impacto de un rayo.",
    explicacion: "Las sobretensiones transitorias tienen poca duración (ms) y son producidas por conmutaciones, maniobras en la red eléctrica o por el impacto de un rayo. Provocan un pico de tensión que el equipo puede no soportar."
  },

  {
    id: 3062,
    tema: "Sobretensiones permanentes - Causa",
    texto: "¿Cuál es la causa de las sobretensiones permanentes?",
    opciones: ["El impacto de rayos sobre la línea.", "La rotura del neutro, que deriva en una descompensación de la línea.", "El uso simultáneo de muchos aparatos.", "La variación de frecuencia de la red."],
    correctaTexto: "La rotura del neutro, que deriva en una descompensación de la línea.",
    explicacion: "Las sobretensiones permanentes suceden cuando se rompe el neutro. El valor pico es menor que en la transitoria, pero deriva en una descompensación de la línea que reduce la vida útil de los equipos o provoca su rotura."
  },

  {
    id: 3063,
    tema: "Sobretensiones - Transistores/varistores",
    texto: "¿Cómo funciona un transistor/varistor para proteger contra sobretensiones transitorias?",
    opciones: ["Interrumpe el circuito cuando detecta sobretensión.", "Se conecta en serie en la línea para absorber la sobretensión.", "Se conecta en paralelo y deriva la corriente de sobretensión a tierra cuando hay un pico de tensión.", "Aumenta la resistencia del circuito para limitar la tensión."],
    correctaTexto: "Se conecta en paralelo y deriva la corriente de sobretensión a tierra cuando hay un pico de tensión.",
    explicacion: "El transistor/varistor se conecta a la línea en paralelo y tiene una toma a tierra. Cuando todo funciona bien, no actúa. Cuando se produce un pico de tensión, baja la frecuencia de la línea y deriva la corriente a tierra, protegiendo los equipos."
  },

  // ========== SECCIÓN 3.10: PUESTA A TIERRA ==========

  {
    id: 3064,
    tema: "Puesta a tierra - Función (TEST OFICIAL)",
    texto: "Una puesta a tierra:",
    opciones: ["Envía electricidad de la tierra al circuito.", "Deriva una corriente de fuga del circuito a la tierra.", "No sirve para nada.", "Tiene un cable rojo y azul."],
    correctaTexto: "Deriva una corriente de fuga del circuito a la tierra.",
    explicacion: "La puesta a tierra deriva una posible corriente de fuga a tierra, de forma que una persona que entre en contacto con la parte metálica no se electrocute. El cable de tierra es de color verde y amarillo."
  },

  {
    id: 3065,
    tema: "Puesta a tierra - Color del cable",
    texto: "¿De qué color es el cable de la puesta a tierra?",
    opciones: ["Rojo y negro.", "Azul y blanco.", "Verde y amarillo.", "Naranja y gris."],
    correctaTexto: "Verde y amarillo.",
    explicacion: "El cable de puesta a tierra es de color verde y amarillo. Este color es obligatorio y normalizado para identificar el conductor de protección (tierra) en toda instalación eléctrica de baja tensión."
  },

  {
    id: 3066,
    tema: "Puesta a tierra - Electrodo o pica",
    texto: "¿Qué es el electrodo de tierra o pica?",
    opciones: ["El cable verde-amarillo que une los aparatos.", "La barra de conexión en la caja de contadores.", "Un elemento de material metálico enterrado bajo tierra.", "El borne principal de puesta a tierra."],
    correctaTexto: "Un elemento de material metálico enterrado bajo tierra.",
    explicacion: "El electrodo de tierra o pica es un elemento de material metálico que está enterrado bajo tierra. Es el elemento que hace el contacto con el terreno y establece la conexión física de la instalación con la tierra."
  },

  {
    id: 3067,
    tema: "REBT - ITCs de protección (TEST OFICIAL)",
    texto: "Las ITC que explican los métodos de protección son:",
    opciones: ["De la ITC-BT-21 a la 24.", "De la ITC-BT-15 a la 19.", "La ITC-BT-25.", "Todo el REBT."],
    correctaTexto: "De la ITC-BT-21 a la 24.",
    explicacion: "Las Instrucciones Técnicas Complementarias que tratan sobre los equipos de protección van desde la ITC-BT-21 a la ITC-BT-24: ITC-BT-21 (tubos y canales protectoras), ITC-BT-22 (sobreintensidades), ITC-BT-23 (sobretensiones), ITC-BT-24 (contactos directos e indirectos)."
  },

  {
    id: 3068,
    tema: "U3: Protección de las instalaciones eléctricas (TEST OFICIAL)",
    texto: "Los elementos de protección se encuentran en:",
    opciones: ["La acometida.", "El contador.", "Cuadro General de Mando y Protección", "Ninguna de las anteriores es correcta."],
    correctaTexto: "Cuadro General de Mando y Protección",
    explicacion: "El Cuadro General de Mando y Protección (CGMP) es donde se alojan todos los dispositivos de protección de la instalación: el IGA, los diferenciales y los magnetotérmicos de cada circuito. (TEST OFICIAL)"
  }

];

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
    tema: "U4: Montaje de instalaciones eléctricas en viviendas",
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
  },

  {
    id: 4099,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "Las abrazaderas y colgadores sirven para:",
    opciones: [
      "Sujetar los cables a la pared y techo.",
      "Sujetar los fusibles del cuadro de mando.",
      "Mejorar el rendimiento de la instalación.",
      "Todas las anteriores son ciertas."
    ],
    correctaTexto: "Sujetar los cables a la pared y techo.",
    explicacion: "Las abrazaderas y colgadores son elementos de fijación mecánica que se utilizan para sujetar y fijar los cables y canalizaciones a la pared, techo u otras superficies de la instalación. (TEST OFICIAL)"
  },

  {
    id: 4098,
    tema: "U4: Montaje de instalaciones eléctricas en viviendas (TEST OFICIAL)",
    texto: "Indica cuál no es una característica de los sensores:",
    opciones: [
      "Tensión de alimentación.",
      "Índice de refracción.",
      "Tipo de contacto.",
      "Tiempo de actuación."
    ],
    correctaTexto: "Índice de refracción.",
    explicacion: "Las características típicas de los sensores son: tensión de alimentación, tipo de contacto, tiempo de actuación, alcance de detección, etc. El índice de refracción es una propiedad óptica de materiales, no una característica de sensores eléctricos. (TEST OFICIAL)"
  }
];

// IDs 5001-5067

const TEMA_5_DATA = [
  // SECCIÓN 5.1 - Naturaleza de la luz
  {
    id: 5001,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la naturaleza física de la luz según la física moderna?",
    opciones: ["Ondas electromagnéticas que no necesitan medio material", "Corpúsculos que viajan en línea recta", "Radiación térmica solamente", "Partículas de energía pura"],
    correctaTexto: "Ondas electromagnéticas que no necesitan medio material",
    explicacion: "La luz tiene naturaleza ondulatoria y corpuscular. Como onda electromagnética se propaga sin necesidad de medio material."
  },
  {
    id: 5002,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "La longitud de onda del espectro visible:",
    opciones: ["Comprende entre los 380 y 780 nm", "Es mayor que la de los rayos infrarrojos", "Es menor que los rayos X", "Es menor que los rayos ultravioletas"],
    correctaTexto: "Comprende entre los 380 y 780 nm",
    explicacion: "La luz visible percibida por el ojo humano está comprendida entre 380 nm (violeta) y 780 nm (rojo). (TEST OFICIAL)"
  },
  {
    id: 5003,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "En cuanto a la longitud de onda:",
    opciones: ["Se formula como λ = v/f", "Cuanto menor sea la longitud, menor energía tendrá la onda", "Se mide en segundos", "Todas las anteriores son correctas"],
    correctaTexto: "Se formula como λ = v/f",
    explicacion: "La longitud de onda se calcula dividiendo la velocidad de propagación entre la frecuencia. Cuanto mayor sea la longitud de onda, menor energía tendrá. (TEST OFICIAL)"
  },
  {
    id: 5004,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué fenómeno ocurre cuando la luz incide sobre una superficie reflectante?",
    opciones: ["Reflexión", "Refracción", "Absorción", "Dispersión"],
    correctaTexto: "Reflexión",
    explicacion: "La reflexión es el fenómeno donde la luz rebota en una superficie. La relación entre luz reflejada e incidente se llama reflectancia."
  },
  {
    id: 5005,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es la refracción de la luz?",
    opciones: ["Desviación de la luz al atravesar una superficie que separa dos medios", "Rebote de la luz en una superficie", "Absorción completa", "Cambio de frecuencia"],
    correctaTexto: "Desviación de la luz al atravesar una superficie que separa dos medios",
    explicacion: "La refracción ocurre cuando la luz pasa de un medio a otro, desviándose de su dirección original."
  },
  {
    id: 5006,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "Cuando un objeto no es capaz de absorber la longitud de onda correspondiente al color verde:",
    opciones: ["Verás ese objeto de color verde", "Verás ese objeto de color blanco", "Verás ese objeto de color negro", "No se puede dar esta situación"],
    correctaTexto: "Verás ese objeto de color verde",
    explicacion: "Los colores que vemos son aquellos que el objeto NO absorbe, sino que refleja. Si no absorbe verde, lo veremos verde. (TEST OFICIAL)"
  },
  {
    id: 5007,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo se transmite la luz en el vacío?",
    opciones: ["Como ondas electromagnéticas sin necesidad de medio material", "Mediante aire ionizado", "A través de partículas sólidas", "Por contacto directo"],
    correctaTexto: "Como ondas electromagnéticas sin necesidad de medio material",
    explicacion: "La luz es una onda electromagnética que puede propagarse en el vacío a aproximadamente 300,000 km/s."
  },
  {
    id: 5008,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es la transmisión difusa de luz?",
    opciones: ["Paso de luz dispersándose en múltiples direcciones", "Transmisión directa sin cambios", "Absorción total", "Reflexión especular"],
    correctaTexto: "Paso de luz dispersándose en múltiples direcciones",
    explicacion: "En transmisión difusa, la luz se dispersa en todas direcciones al pasar a través del material."
  },

  // SECCIÓN 5.2 - Magnitudes luminosas
  {
    id: 5009,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "El flujo luminoso se mide en:",
    opciones: ["Lúmenes", "Lux", "Candelas", "Lúmenes/metro"],
    correctaTexto: "Lúmenes",
    explicacion: "El lumen es la unidad de medida del flujo luminoso en el Sistema Internacional. (TEST OFICIAL)"
  },
  {
    id: 5010,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es el rendimiento luminoso o eficiencia luminosa?",
    opciones: ["La relación entre flujo luminoso y potencia alimentada", "La intensidad máxima de una lámpara", "El brillo total emitido", "La durabilidad de la lámpara"],
    correctaTexto: "La relación entre flujo luminoso y potencia alimentada",
    explicacion: "Rendimiento = Flujo luminoso / Potencia alimentada. Indica qué porcentaje de energía se convierte en luz visible."
  },
  {
    id: 5011,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿En qué unidad se mide el rendimiento luminoso?",
    opciones: ["Lúmenes por vatio (lm/W)", "Candelas por metro", "Lux por segundo", "Kilovatios"],
    correctaTexto: "Lúmenes por vatio (lm/W)",
    explicacion: "El rendimiento luminoso se expresa en lm/W, indicando cuántos lúmenes se producen por cada vatio consumido."
  },
  {
    id: 5012,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "La frecuencia:",
    opciones: ["Es la inversa del periodo", "Se mide en segundos", "Aumenta al aumentar la longitud de onda", "Es una propiedad de los corpúsculos"],
    correctaTexto: "Es la inversa del periodo",
    explicacion: "La frecuencia (f) se define como el número de periodos por unidad de tiempo, f = 1/T. Se mide en Hercios (Hz). (TEST OFICIAL)"
  },
  {
    id: 5013,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "Indica cuál de las siguientes no es una magnitud luminosa:",
    opciones: ["Flujo eléctrico que alimenta la lámpara", "Flujo luminoso", "Intensidad luminosa", "Iluminancia"],
    correctaTexto: "Flujo eléctrico que alimenta la lámpara",
    explicacion: "El flujo eléctrico es una magnitud eléctrica, no luminosa. Las magnitudes luminosas son: flujo, intensidad, iluminancia y luminancia. (TEST OFICIAL)"
  },
  {
    id: 5014,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es la intensidad luminosa?",
    opciones: ["La cantidad de luz emitida en una dirección específica", "La potencia total consumida", "El brillo reflejado", "La luz visible total"],
    correctaTexto: "La cantidad de luz emitida en una dirección específica",
    explicacion: "La intensidad luminosa (I) es el flujo luminoso dividido por el ángulo sólido, medido en candelas (cd)."
  },
  {
    id: 5015,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué muestran las curvas fotométricas?",
    opciones: ["La distribución luminosa de una luminaria", "Solo la potencia consumida", "El costo de la lámpara", "El color de la luz"],
    correctaTexto: "La distribución luminosa de una luminaria",
    explicacion: "Las curvas fotométricas representan gráficamente cómo una luminaria emite luz en diferentes direcciones. (TEST OFICIAL)"
  },
  {
    id: 5016,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es la iluminancia?",
    opciones: ["El flujo luminoso recibido por una superficie, dividido por su área", "El brillo emitido por una fuente", "La intensidad máxima", "El consumo energético"],
    correctaTexto: "El flujo luminoso recibido por una superficie, dividido por su área",
    explicacion: "Iluminancia (E) = Flujo / Área. Mide el nivel de iluminación en una superficie específica."
  },
  {
    id: 5017,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la unidad de medida de la iluminancia?",
    opciones: ["Lux (lx)", "Lúmenes (lm)", "Candelas (cd)", "Vatios (W)"],
    correctaTexto: "Lux (lx)",
    explicacion: "El lux es la unidad SI de iluminancia, equivalente a 1 lumen por metro cuadrado (lm/m²)."
  },
  {
    id: 5018,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es la luminancia?",
    opciones: ["El brillo percibido de una fuente de luz o superficie iluminada", "La potencia total emitida", "El flujo en una dirección", "El consumo energético"],
    correctaTexto: "El brillo percibido de una fuente de luz o superficie iluminada",
    explicacion: "Luminancia (L) mide el brillo tal como lo percibe el ojo humano desde una dirección específica."
  },

  // SECCIÓN 5.3 - Tipos de lámparas
  {
    id: 5019,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la vida útil promedio de una lámpara incandescente?",
    opciones: ["Aproximadamente 1000 horas", "5000 horas", "10000 horas", "50000 horas"],
    correctaTexto: "Aproximadamente 1000 horas",
    explicacion: "Las lámparas incandescentes tienen una vida útil corta de alrededor de 1000 horas de funcionamiento."
  },
  {
    id: 5020,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es el rendimiento energético de una lámpara incandescente?",
    opciones: ["Aproximadamente 15% (pierde 85% en forma de calor)", "50%", "85%", "95%"],
    correctaTexto: "Aproximadamente 15% (pierde 85% en forma de calor)",
    explicacion: "Las incandescentes son muy ineficientes: solo el 15% de la energía se convierte en luz visible."
  },
  {
    id: 5021,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo funcionan las lámparas incandescentes?",
    opciones: ["Un filamento metálico se calienta por corriente y emite luz", "Gas excitado que produce emisión", "Semiconductor que emite fotones", "Reacción química"],
    correctaTexto: "Un filamento metálico se calienta por corriente y emite luz",
    explicacion: "El filamento espiral se calienta a alta temperatura (alrededor de 2700K) y emite luz visible."
  },
  {
    id: 5022,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es una lámpara halógena?",
    opciones: ["Lámpara incandescente con gas halogenado para mejorar durabilidad", "Lámpara de descarga de mercurio", "Lámpara LED de baja potencia", "Lámpara fluorescente"],
    correctaTexto: "Lámpara incandescente con gas halogenado para mejorar durabilidad",
    explicacion: "Las lámparas halógenas contienen gas halogenado que regenera el filamento y aumentan su vida útil."
  },
  {
    id: 5023,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿En qué consiste el funcionamiento de las lámparas de descarga?",
    opciones: ["Un gas (vapor de mercurio o sodio) se excita por energía eléctrica", "Calentamiento de filamentos metálicos", "Reacción nuclear controlada", "Fluorescencia química"],
    correctaTexto: "Un gas (vapor de mercurio o sodio) se excita por energía eléctrica",
    explicacion: "En lámparas de descarga, la energía eléctrica excita el gas, que emite radiación luminosa."
  },
  {
    id: 5024,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la vida útil típica de una lámpara de descarga?",
    opciones: ["6000 a 8000 horas aproximadamente", "1000 horas", "3000 horas", "20000 horas"],
    correctaTexto: "6000 a 8000 horas aproximadamente",
    explicacion: "Las lámparas de descarga tienen mayor vida útil que incandescentes (6000-8000 horas)."
  },
  {
    id: 5025,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué componentes principales tiene una lámpara de descarga?",
    opciones: ["Tubo de descarga, electrodos, ampolla exterior y casquillo", "Solo filamento y vidrio", "Semiconductor y circuito integrado", "Solo gas y resistencia"],
    correctaTexto: "Tubo de descarga, electrodos, ampolla exterior y casquillo",
    explicacion: "Las lámparas de descarga requieren estos componentes para funcionar correctamente."
  },
  {
    id: 5026,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Dónde se utilizan típicamente las lámparas de inducción?",
    opciones: ["En túneles, naves industriales y lugares de acceso difícil", "Solo en viviendas residenciales", "En semáforos", "En iluminación decorativa"],
    correctaTexto: "En túneles, naves industriales y lugares de acceso difícil",
    explicacion: "Las lámparas de inducción son ideales para lugares donde el mantenimiento es complicado."
  },
  {
    id: 5027,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la vida útil típica de una lámpara LED moderna?",
    opciones: ["30,000 a 50,000 horas o más", "5,000 horas", "1,000 horas", "100 horas"],
    correctaTexto: "30,000 a 50,000 horas o más",
    explicacion: "Los LEDs modernos tienen una vida útil excepcional, durando mucho más que cualquier otra lámpara."
  },

  // SECCIÓN 5.4 - Luminarias y alumbrado interior
  {
    id: 5028,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "Indica la afirmación correcta:",
    opciones: ["Una luminaria puede albergar dos o más lámparas", "Una lámpara puede albergar dos o más luminarias", "Las dos son correctas", "Ninguna es correcta"],
    correctaTexto: "Una luminaria puede albergar dos o más lámparas",
    explicacion: "Una luminaria es un aparato que puede contener una o varias lámparas. Una lámpara no puede contener luminarias. (TEST OFICIAL)"
  },
  {
    id: 5029,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es una luminaria?",
    opciones: ["Aparato completo que contiene la lámpara y distribuye la luz", "La bombilla sola", "El cable de alimentación", "El interruptor de control"],
    correctaTexto: "Aparato completo que contiene la lámpara y distribuye la luz",
    explicacion: "Una luminaria es la unidad completa de iluminación, incluyendo lámpara, reflectores y difusores."
  },
  {
    id: 5030,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la función de los reflectores en una luminaria?",
    opciones: ["Dirigir y concentrar la luz hacia donde se necesita", "Generar calor adicional", "Cambiar el color de la luz", "Almacenar energía"],
    correctaTexto: "Dirigir y concentrar la luz hacia donde se necesita",
    explicacion: "Los reflectores utilizan principios de reflexión para optimizar la distribución de luz."
  },
  {
    id: 5031,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la función de los difusores en una luminaria?",
    opciones: ["Dispersar la luz de forma uniforme para evitar deslumbramiento", "Concentrar toda la luz en un punto", "Aumentar el brillo máximo", "Cambiar la temperatura de color"],
    correctaTexto: "Dispersar la luz de forma uniforme para evitar deslumbramiento",
    explicacion: "Los difusores distribuyen la luz de forma pareja, mejorando el confort visual."
  },
  {
    id: 5032,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuáles de los siguientes métodos corresponden a métodos de iluminación de interior?",
    opciones: ["General, general localizado y localizado", "Solo alumbrado general", "Solo alumbrado localizado", "Solamente alumbrado decorativo"],
    correctaTexto: "General, general localizado y localizado",
    explicacion: "Estos tres tipos de alumbrado se combinan para lograr confort visual óptimo en interiores. (TEST OFICIAL)"
  },
  {
    id: 5033,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es el deslumbramiento directo?",
    opciones: ["Incomodidad visual por visión directa de una fuente muy brillante", "Falta de iluminación en una zona", "Parpadeo intermitente de lámparas", "Cambio de color de la luz"],
    correctaTexto: "Incomodidad visual por visión directa de una fuente muy brillante",
    explicacion: "El deslumbramiento directo ocurre cuando miramos directamente a una fuente muy luminosa."
  },
  {
    id: 5034,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es la temperatura de color de una lámpara?",
    opciones: ["Medida en Kelvin que caracteriza si la luz es cálida, neutra o fría", "La temperatura física en grados Celsius", "El tiempo de encendido en segundos", "La potencia máxima consumida"],
    correctaTexto: "Medida en Kelvin que caracteriza si la luz es cálida, neutra o fría",
    explicacion: "Temperaturas bajas (2700K) producen luz cálida, altas (6000K+) producen luz fría."
  },
  {
    id: 5035,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es el Índice de Rendimiento de Color (IRC)?",
    opciones: ["Capacidad de una fuente de reproducir fielmente los colores", "La intensidad total de luz emitida", "El consumo de energía anual", "La vida útil de la lámpara"],
    correctaTexto: "Capacidad de una fuente de reproducir fielmente los colores",
    explicacion: "El IRC va de 0 a 100, donde 100 es reproducción perfecta de colores."
  },
  {
    id: 5036,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es el IRC mínimo recomendado para alumbrado de tareas visuales?",
    opciones: ["IRC mayor a 80 (preferible 90+)", "IRC mayor a 50", "IRC mayor a 30", "No importa el valor de IRC"],
    correctaTexto: "IRC mayor a 80 (preferible 90+)",
    explicacion: "Para trabajo que requiere distinción de colores, se recomienda IRC ≥ 80, mejor si es 90+."
  },

  // SECCIÓN 5.5 - Alumbrado exterior
  {
    id: 5037,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál de los siguientes parámetros es el menos importante en el alumbrado exterior?",
    opciones: ["La forma y tipo de luminaria que se dispone", "La relación altura de las luminarias y anchura entre ellas", "El tipo de tramo a iluminar", "La disposición e intensidad en curvas e intersecciones"],
    correctaTexto: "La forma y tipo de luminaria que se dispone",
    explicacion: "Aunque la forma de la luminaria es importante, la geometría de disposición y la uniformidad de iluminancia lo son más. (TEST OFICIAL)"
  },
  {
    id: 5038,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es el objetivo principal del alumbrado exterior?",
    opciones: ["Proporcionar seguridad, orientación y facilitar actividades nocturnas", "Solo proporcionar decoración visual", "Solamente garantizar seguridad", "Disminuir el consumo eléctrico"],
    correctaTexto: "Proporcionar seguridad, orientación y facilitar actividades nocturnas",
    explicacion: "El alumbrado exterior combina seguridad, funcionalidad y estética."
  },
  {
    id: 5039,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es la luminancia media (Lm) en alumbrado exterior?",
    opciones: ["El nivel promedio de brillo aparente de la superficie iluminada", "La potencia total consumida por todas las luminarias", "El número de puntos de iluminación", "El flujo luminoso máximo emitido"],
    correctaTexto: "El nivel promedio de brillo aparente de la superficie iluminada",
    explicacion: "La luminancia media es fundamental para evaluación de calidad en alumbrado vial."
  },
  {
    id: 5040,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es el coeficiente de uniformidad en alumbrado exterior?",
    opciones: ["La relación entre iluminancia mínima e iluminancia media", "La potencia total instalada en el sistema", "El número de luminarias colocadas", "El consumo total anual de energía"],
    correctaTexto: "La relación entre iluminancia mínima e iluminancia media",
    explicacion: "U0 = Emin / Emedia. Valores ≥ 0,5 indican uniformidad aceptable."
  },
  {
    id: 5041,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es el Índice de Deslumbramiento (TI) en vías públicas?",
    opciones: ["Medida de incapacidad de ver provocada por cambios abruptos de brillo", "Medida de falta total de iluminación", "Medida de exceso de color en la luz", "Medida de parpadeo de lámparas"],
    correctaTexto: "Medida de incapacidad de ver provocada por cambios abruptos de brillo",
    explicacion: "TI < 10% es muy bueno. Valores altos (> 50%) indican problemas de deslumbramiento."
  },
  {
    id: 5042,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la causa principal del deslumbramiento en vías públicas?",
    opciones: ["Visibilidad directa de luminarias sin control de brillo aparente", "La falta completa de iluminación", "El mal mantenimiento del asfalto", "El tipo específico de material de carretera"],
    correctaTexto: "Visibilidad directa de luminarias sin control de brillo aparente",
    explicacion: "El deslumbramiento en vías se controla mediante luminarias bien diseñadas."
  },
  {
    id: 5043,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo se limita el deslumbramiento en alumbrado de vías públicas?",
    opciones: ["Mediante correcta disposición de luminarias y equipos de control", "Aumentando significativamente el brillo total", "Usando solo lámparas incandescentes", "Sin medidas de control especiales"],
    correctaTexto: "Mediante correcta disposición de luminarias y equipos de control",
    explicacion: "La altura, inclinación y características de las luminarias son clave para reducir deslumbramiento."
  },
  {
    id: 5044,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué lámparas son más eficientes para alumbrado público actual?",
    opciones: ["LED y descarga (sodio/mercurio de alta presión)", "Lámparas incandescentes", "Solo lámparas halógenas", "Todas tienen eficiencia igual"],
    correctaTexto: "LED y descarga (sodio/mercurio de alta presión)",
    explicacion: "Los LEDs están reemplazando las de descarga por mayor eficiencia y control."
  },
  {
    id: 5045,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la disposición más común de luminarias en vías?",
    opciones: ["Unilateral, bilateral o axial según ancho y características", "Siempre unilateral", "Siempre bilateral", "Distribución aleatoria"],
    correctaTexto: "Unilateral, bilateral o axial según ancho y características",
    explicacion: "La disposición depende del ancho de vía y requerimientos de iluminancia."
  },

  // SECCIÓN 5.6 - Cálculos de iluminación
  {
    id: 5046,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la fórmula básica para calcular iluminancia en un punto?",
    opciones: ["E = F / A (donde F es flujo y A es área)", "E = I × d²", "E = P / V", "E = R / 2π"],
    correctaTexto: "E = F / A (donde F es flujo y A es área)",
    explicacion: "Esta es la fórmula fundamental de iluminancia: flujo dividido por área."
  },
  {
    id: 5047,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo afecta la distancia a la iluminancia según la ley del cuadrado inverso?",
    opciones: ["Disminuye proporcionalmente al cuadrado de la distancia (E ∝ 1/d²)", "Aumenta linealmente con la distancia", "No afecta la iluminancia", "Disminuye linealmente con distancia"],
    correctaTexto: "Disminuye proporcionalmente al cuadrado de la distancia (E ∝ 1/d²)",
    explicacion: "Si duplicas la distancia, la iluminancia se reduce a 1/4."
  },
  {
    id: 5048,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es el método de los lúmenes en cálculo de alumbrado?",
    opciones: ["Método que calcula flujo necesario considerando iluminancia requerida", "Método basado solo en potencia total de lámparas", "Método empírico de prueba y error", "Método teórico pero obsoleto"],
    correctaTexto: "Método que calcula flujo necesario considerando iluminancia requerida",
    explicacion: "Es el método más utilizado para diseño de instalaciones de alumbrado."
  },
  {
    id: 5049,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es el factor de depreciación en cálculo de alumbrado?",
    opciones: ["Pérdida gradual de flujo luminoso con suciedad y envejecimiento", "El consumo anual de energía", "El calor generado por las lámparas", "La variación de voltaje en la red"],
    correctaTexto: "Pérdida gradual de flujo luminoso con suciedad y envejecimiento",
    explicacion: "El factor de depreciación reduce la eficacia inicial de la instalación con el tiempo."
  },
  {
    id: 5050,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es el factor de depreciación típico en instalaciones bien mantenidas?",
    opciones: ["Aproximadamente 0,8 a 0,9", "Aproximadamente 0,5", "Aproximadamente 0,1", "Mayor que 1,0"],
    correctaTexto: "Aproximadamente 0,8 a 0,9",
    explicacion: "En buenas condiciones, se mantiene el 80-90% de la eficacia inicial."
  },
  {
    id: 5051,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es el coeficiente de utilización en cálculo de alumbrado?",
    opciones: ["Proporción del flujo de lámpara que llega realmente a la zona de trabajo", "La potencia total consumida por la instalación", "El número total de lámparas instaladas", "La durabilidad estimada de las lámparas"],
    correctaTexto: "Proporción del flujo de lámpara que llega realmente a la zona de trabajo",
    explicacion: "El coeficiente de utilización (Cu) depende de reflexiones y geometría."
  },
  {
    id: 5052,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo se obtiene la reflectancia de una superficie?",
    opciones: ["Mediante tablas de reflectancia según material y color", "Mediante cálculo matemático puro", "Es siempre el mismo valor", "No es necesario considerarla"],
    correctaTexto: "Mediante tablas de reflectancia según material y color",
    explicacion: "Paredes blancas: ~0,8; paredes claras: ~0,6; paredes oscuras: ~0,3."
  },
  {
    id: 5053,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es el nivel mínimo de iluminancia recomendado para lectura?",
    opciones: ["300-500 lux aproximadamente", "50 lux", "1000 lux", "5000 lux"],
    correctaTexto: "300-500 lux aproximadamente",
    explicacion: "Lectura de documentos requiere 300-500 lux; lectura de libros antiguos puede requerir más."
  },
  {
    id: 5054,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué normas regulan los niveles de iluminación requeridos?",
    opciones: ["Normas CIE, EN e ITC-BT según tipo de espacio", "No existen normas específicas", "Solo recomendaciones voluntarias", "Cada país decide sin coordinación"],
    correctaTexto: "Normas CIE, EN e ITC-BT según tipo de espacio",
    explicacion: "Estas normas internacionales establecen requisitos mínimos de iluminancia."
  },
  {
    id: 5055,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo se calcula el número de lámparas necesarias para alumbrar un área?",
    opciones: ["Considerando iluminancia requerida, flujo de lámpara y factores", "Solo dividiendo el área entre potencia de una lámpara", "Sin realizar cálculos detallados", "Solo por intuición y experiencia"],
    correctaTexto: "Considerando iluminancia requerida, flujo de lámpara y factores",
    explicacion: "Fórmula: N = (E × A) / (Φ × Cu × D), donde N es número de lámparas."
  },
  {
    id: 5056,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo afecta la reflectancia de las paredes al rendimiento del alumbrado?",
    opciones: ["Mayor reflectancia mejora la eficiencia global del sistema", "No tiene efecto en absoluto", "Reduce la eficiencia significativamente", "Solo afecta el color aparente"],
    correctaTexto: "Mayor reflectancia mejora la eficiencia global del sistema",
    explicacion: "Paredes claras reflejan más luz, mejorando la iluminancia total de la zona."
  },
  {
    id: 5057,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué factor de seguridad principal se debe considerar en alumbrado exterior?",
    opciones: ["Visibilidad suficiente para detectar obstáculos y peligros", "Solo reducir costos de energía", "Solo cuidar la estética", "El color específico de la luz"],
    correctaTexto: "Visibilidad suficiente para detectar obstáculos y peligros",
    explicacion: "La seguridad es el objetivo principal de todo alumbrado público."
  },

  // SECCIÓN 5.7 - Planos y esquemas
  {
    id: 5058,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué información debe incluir un plano de instalación de alumbrado?",
    opciones: ["Ubicación de luminarias, circuitos, niveles de iluminancia y tipo de lámparas", "Solo el número de bombillas", "Solo el costo", "Solo el proveedor"],
    correctaTexto: "Ubicación de luminarias, circuitos, niveles de iluminancia y tipo de lámparas",
    explicacion: "Un plano de alumbrado debe contener toda la información necesaria para la ejecución."
  },
  {
    id: 5059,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué simbologías se utilizan en los esquemas de alumbrado?",
    opciones: ["Símbolos normalizados para puntos de luz, luminarias, circuitos", "Símbolos libres sin estándar", "Solo números", "Solo colores"],
    correctaTexto: "Símbolos normalizados para puntos de luz, luminarias, circuitos",
    explicacion: "Los esquemas deben utilizar simbología normalizada según normas UNE."
  },
  {
    id: 5060,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo se representa una luminaria de descarga en un plano?",
    opciones: ["Con símbolo específico según tipo (fluorescente, sodio, etc.)", "Igual que una incandescente", "Con un círculo simple", "No se representa"],
    correctaTexto: "Con símbolo específico según tipo (fluorescente, sodio, etc.)",
    explicacion: "Cada tipo de luminaria tiene su símbolo normalizado diferente."
  },
  {
    id: 5061,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué indica el grosor del conductor en un esquema de alumbrado?",
    opciones: ["La sección o capacidad de corriente del conductor", "La longitud del cable", "El tipo de aislamiento", "El costo"],
    correctaTexto: "La sección o capacidad de corriente del conductor",
    explicacion: "El grosor de línea en un esquema representa la capacidad de corriente del conductor."
  },
  {
    id: 5062,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es la importancia de los esquemas unifilares en alumbrado?",
    opciones: ["Mostrar de forma simplificada la distribución de circuitos", "Mostrar cada conductor individual", "Solo fines decorativos", "Requisito obsoleto"],
    correctaTexto: "Mostrar de forma simplificada la distribución de circuitos",
    explicacion: "Los esquemas unifilares simplifican la representación de instalaciones complejas."
  },
  {
    id: 5063,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué es el símbolo para alumbrado de emergencia en un plano?",
    opciones: ["Símbolo con recuadro rojo o con letras 'E' o 'EMERG'", "Igual que alumbrado normal", "No existe símbolo específico", "Solo texto descriptivo"],
    correctaTexto: "Símbolo con recuadro rojo o con letras 'E' o 'EMERG'",
    explicacion: "El alumbrado de emergencia debe diferenciarse claramente en los planos."
  },
  {
    id: 5064,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo se indica el circuito al que pertenece una luminaria en un plano?",
    opciones: ["Mediante número de circuito junto al símbolo de la luminaria", "No se indica", "Solo con color diferente", "Con etiqueta separada"],
    correctaTexto: "Mediante número de circuito junto al símbolo de la luminaria",
    explicacion: "La identificación del circuito es esencial para la comprensión de planos."
  },
  {
    id: 5065,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Qué información debe incluir una leyenda en un plano de alumbrado?",
    opciones: ["Explicación de símbolos, potencias, tipos de luminarias y circuitos", "Solo nombres de fabricantes", "Solo referencias de precios", "No es necesaria"],
    correctaTexto: "Explicación de símbolos, potencias, tipos de luminarias y circuitos",
    explicacion: "Una leyenda clara es fundamental para la interpretación correcta del plano."
  },
  {
    id: 5066,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cómo se diferencia en plano un punto de luz de un punto de luminaria decorativa?",
    opciones: ["Con símbolos diferentes según la función de la luminaria", "No hay diferencia en la representación", "Solo con colores diferentes", "Con tamaños diferentes de símbolo"],
    correctaTexto: "Con símbolos diferentes según la función de la luminaria",
    explicacion: "La simbología debe reflejar claramente la función de cada elemento."
  },
  {
    id: 5067,
    tema: "U5: Instalaciones de alumbrado, luminotecnia",
    texto: "¿Cuál es el objetivo principal de incluir cotas y dimensiones en un plano de alumbrado?",
    opciones: ["Permitir la ubicación exacta de luminarias y calcular distancias reales", "Solo para fines estéticos", "No son necesarias", "Para indicar solo alturas de montaje"],
    correctaTexto: "Permitir la ubicación exacta de luminarias y calcular distancias reales",
    explicacion: "Las cotas son esenciales para la ejecución correcta de la instalación."
  }
];
// IDs 6001-6067

const TEMA_6_DATA = [
  // SECCIÓN 6.1 - Introducción a instalaciones domésticas
  {
    id: 6001,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuántos niveles o grados podemos encontrar dentro de una instalación de electrificación?",
    opciones: ["Dos", "Uno", "Cuatro", "Nueve"],
    correctaTexto: "Dos",
    explicacion: "Existen dos niveles de electrificación: básica y elevada. (TEST OFICIAL)"
  },
  {
    id: 6002,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "El REBT se encarga de:",
    opciones: ["Establecer los puntos mínimos que debemos encontrar en una vivienda", "Indicar la función del circuito eléctrico", "Establecer los puntos máximos que debemos encontrar", "No tiene por qué coincidir con la sección real del conductor"],
    correctaTexto: "Establecer los puntos mínimos que debemos encontrar en una vivienda",
    explicacion: "El REBT (Reglamento Electrotécnico para Baja Tensión) establece los requisitos mínimos. (TEST OFICIAL)"
  },
  {
    id: 6003,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "Entre las modificaciones más importantes tras la aparición de nuevas tecnologías encontramos:",
    opciones: ["Incrementación del número de circuitos mínimos", "Modificación de las tomas de corriente y puntos de luz", "Introducción de nuevos niveles de electrificación", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "Las tres modificaciones han sido necesarias para adaptarse a nuevas tecnologías. (TEST OFICIAL)"
  },
  {
    id: 6004,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el propósito principal de la electrificación en una vivienda?",
    opciones: ["Ahorrar energía", "Proporcionar seguridad y funcionalidad eléctrica", "Reducir costos iniciales", "Cumplir requisitos estéticos"],
    correctaTexto: "Proporcionar seguridad y funcionalidad eléctrica",
    explicacion: "La electrificación garantiza que la vivienda tenga la capacidad eléctrica necesaria de forma segura."
  },
  {
    id: 6005,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué reglamento actual se utiliza para el diseño de instalaciones eléctricas en viviendas?",
    opciones: ["Reglamento de 1973", "Reglamento de 1996", "Reglamento de 2002", "Reglamento de 2015"],
    correctaTexto: "Reglamento de 2002",
    explicacion: "El REBT vigente es de 2002, que ha sido actualizado desde el de 1973."
  },

  // SECCIÓN 6.2 - Cuadro General de Mando y Protección
  {
    id: 6006,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "El calibre es:",
    opciones: ["La intensidad máxima que puede soportar", "Una característica importante de los interruptores", "La intensidad mínima que puede soportar", "Las respuestas A y C son correctas"],
    correctaTexto: "Las respuestas A y C son correctas",
    explicacion: "El calibre indica tanto la intensidad máxima como es una característica fundamental. (TEST OFICIAL)"
  },
  {
    id: 6007,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué dispositivos alberga el Cuadro General de Mando y Protección (CGMP)?",
    opciones: ["Solo interruptores generales", "IGA, ID, PIA, ICP y dispositivos de protección", "Solo diferenciales", "Solo magnetotérmicos"],
    correctaTexto: "IGA, ID, PIA, ICP y dispositivos de protección",
    explicacion: "El CGMP contiene todos los dispositivos de protección para personas e instalación."
  },
  {
    id: 6008,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función del Interruptor General Automático (IGA)?",
    opciones: ["Proteger a las personas", "Desconectar la instalación en caso de problema", "Medir el consumo de energía", "Controlar la potencia contratada"],
    correctaTexto: "Desconectar la instalación en caso de problema",
    explicacion: "El IGA actúa como interruptor de seguridad general de la instalación."
  },
  {
    id: 6009,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función de los Interruptores Diferenciales (ID)?",
    opciones: ["Proteger circuitos individuales", "Proteger a las personas contra contactos indirectos", "Medir consumo", "Regular voltaje"],
    correctaTexto: "Proteger a las personas contra contactos indirectos",
    explicacion: "Los diferenciales detectan fugas de corriente a tierra y protegen personas."
  },
  {
    id: 6010,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la sensibilidad típica de un interruptor diferencial?",
    opciones: ["100 mA", "30 mA", "500 mA", "1000 mA"],
    correctaTexto: "30 mA",
    explicacion: "La sensibilidad de 30 mA es estándar para protección de personas en viviendas."
  },
  {
    id: 6011,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función de los Pequeños Interruptores Automáticos (PIA)?",
    opciones: ["Proteger la instalación general", "Proteger circuitos individuales contra sobrecargas y cortocircuitos", "Proteger a personas", "Controlar voltaje"],
    correctaTexto: "Proteger circuitos individuales contra sobrecargas y cortocircuitos",
    explicacion: "Cada PIA protege un circuito específico contra sobreintensidades."
  },
  {
    id: 6012,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué es el Interruptor de Control de Potencia (ICP)?",
    opciones: ["Dispositivo propiedad del usuario", "Dispositivo propiedad de la compañía suministradora", "Dispositivo de protección diferencial", "Dispositivo de apagado manual"],
    correctaTexto: "Dispositivo propiedad de la compañía suministradora",
    explicacion: "El ICP controla que no se supere la potencia contratada y es responsabilidad de la distribuidora."
  },
  {
    id: 6013,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "En viviendas se colocará una caja para el ICP, en compartimento:",
    opciones: ["Dependiente y accesible", "Independiente y precintable", "Compartido con otros dispositivos", "Sin compartimento específico"],
    correctaTexto: "Independiente y precintable",
    explicacion: "El ICP debe estar en compartimento independiente y precintado por la compañía. (TEST OFICIAL)"
  },
  {
    id: 6014,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿A qué altura debe estar situado el cuadro de protección en viviendas?",
    opciones: ["0,5 a 1,0 metros", "1,4 a 2,0 metros", "2,0 a 2,5 metros", "Sin restricción de altura"],
    correctaTexto: "1,4 a 2,0 metros",
    explicacion: "La altura de montaje en viviendas debe estar entre 1,4 y 2,0 metros según ITC-BT 17."
  },
  {
    id: 6015,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Dónde debe ubicarse el cuadro general de protección en una vivienda?",
    opciones: ["En el sótano", "Junto a la puerta de entrada", "En el dormitorio principal", "En la cocina"],
    correctaTexto: "Junto a la puerta de entrada",
    explicacion: "El cuadro debe estar lo más cerca posible de la entrada a la vivienda para acceso rápido."
  },

  // SECCIÓN 6.3 - Grados de electrificación
  {
    id: 6016,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué es la electrificación básica?",
    opciones: ["Sistema para viviendas de nueva construcción con potencia elevada", "Sistema mínimo e indispensable para satisfacer necesidades primarias", "Sistema solo para viviendas antiguas", "Sistema únicamente para comercios"],
    correctaTexto: "Sistema mínimo e indispensable para satisfacer necesidades primarias",
    explicacion: "La electrificación básica proporciona la capacidad mínima necesaria. (TEST OFICIAL)"
  },
  {
    id: 6017,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la potencia prevista para electrificación básica a 230V?",
    opciones: ["3680 W", "5750 W", "9200 W", "14490 W"],
    correctaTexto: "5750 W",
    explicacion: "La electrificación básica prevé 5750 W como potencia mínima."
  },
  {
    id: 6018,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuántos circuitos tiene una electrificación básica?",
    opciones: ["3 circuitos", "5 circuitos", "7 circuitos", "9 circuitos"],
    correctaTexto: "5 circuitos",
    explicacion: "C1 (iluminación), C2 (tomas), C3 (cocina/horno), C4 (lavadora/termo), C5 (aseos/auxiliares)."
  },
  {
    id: 6019,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función del circuito C2 en electrificación básica?",
    opciones: ["Iluminación", "Tomas de corriente de uso general y frigorífico", "Cocina y horno", "Lavadora y lavavajillas"],
    correctaTexto: "Tomas de corriente de uso general y frigorífico",
    explicacion: "El C2 alimenta todos los enchufes de uso general de la vivienda."
  },
  {
    id: 6020,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la función del circuito C3 en electrificación básica?",
    opciones: ["Iluminación", "Tomas generales", "Horno y cocina", "Baños"],
    correctaTexto: "Horno y cocina",
    explicacion: "El C3 es específico para electrodomésticos de alto consumo como cocina y horno."
  },
  {
    id: 6021,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué condiciones requiere una electrificación elevada?",
    opciones: ["Vivienda mayor a 160 m²", "Aire acondicionado, calefacción o secadora", "Más de 30 puntos de luz", "Todas las anteriores son correctas"],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "Cualquiera de estas condiciones justifica electrificación elevada."
  },
  {
    id: 6022,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la potencia prevista para electrificación elevada?",
    opciones: ["5750 W", "7360 W", "9200 W", "14490 W"],
    correctaTexto: "9200 W",
    explicacion: "La electrificación elevada prevé 9200 W como potencia mínima."
  },
  {
    id: 6023,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuántos circuitos adicionales tiene la electrificación elevada?",
    opciones: ["2 circuitos", "3 circuitos", "Varios (C6 a C13) según necesidades", "10 circuitos exactos"],
    correctaTexto: "Varios (C6 a C13) según necesidades",
    explicacion: "La electrificación elevada añade circuitos como C6 (adicional cocina), C7 (calefacción), etc."
  },
  {
    id: 6024,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el calibre del IGA para electrificación básica de 5750 W?",
    opciones: ["16 A", "20 A", "25 A", "32 A"],
    correctaTexto: "25 A",
    explicacion: "Para 5750 W a 230V, el calibre del IGA es 25 A."
  },
  {
    id: 6025,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el calibre del IGA para electrificación elevada de 9200 W?",
    opciones: ["25 A", "32 A", "40 A", "50 A"],
    correctaTexto: "40 A",
    explicacion: "Para 9200 W a 230V, el calibre del IGA es 40 A."
  },

  // SECCIÓN 6.4 - Características eléctricas de circuitos
  {
    id: 6026,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "El tipo de toma indica:",
    opciones: ["La intensidad", "El número de polos", "Si hay toma de tierra", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "El tipo de toma especifica intensidad, polos y presencia de tierra. (TEST OFICIAL)"
  },
  {
    id: 6027,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la sección mínima del conductor para el circuito C1 (iluminación)?",
    opciones: ["0,75 mm²", "1,0 mm²", "1,5 mm²", "2,5 mm²"],
    correctaTexto: "1,5 mm²",
    explicacion: "El circuito de iluminación requiere sección mínima de 1,5 mm²."
  },
  {
    id: 6028,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la sección mínima del conductor para el circuito C2 (tomas generales)?",
    opciones: ["1,0 mm²", "1,5 mm²", "2,5 mm²", "4 mm²"],
    correctaTexto: "2,5 mm²",
    explicacion: "El circuito de tomas generales requiere sección mínima de 2,5 mm²."
  },
  {
    id: 6029,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la sección mínima del conductor para el circuito C3 (cocina/horno)?",
    opciones: ["2,5 mm²", "4 mm²", "6 mm²", "10 mm²"],
    correctaTexto: "6 mm²",
    explicacion: "El circuito de cocina/horno requiere sección mínima de 6 mm² por alto consumo."
  },
  {
    id: 6030,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la sección mínima del conductor para el circuito C4 (lavadora/termo)?",
    opciones: ["2,5 mm²", "4 mm²", "6 mm²", "10 mm²"],
    correctaTexto: "4 mm²",
    explicacion: "El circuito de lavadora, lavavajillas y termo requiere 4 mm²."
  },
  {
    id: 6031,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué indica el factor de utilización en instalaciones?",
    opciones: ["La intensidad máxima", "El porcentaje de potencia que se consume en cada punto", "La durabilidad de los cables", "La caída de tensión"],
    correctaTexto: "El porcentaje de potencia que se consume en cada punto",
    explicacion: "El factor de utilización indica el consumo real vs. el nominal. (TEST OFICIAL)"
  },
  {
    id: 6032,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la intensidad máxima de un circuito de iluminación C1?",
    opciones: ["10 A", "15 A", "16 A", "20 A"],
    correctaTexto: "16 A",
    explicacion: "El circuito de iluminación tiene protección de 16 A típicamente."
  },
  {
    id: 6033,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la intensidad máxima de un circuito de tomas generales C2?",
    opciones: ["16 A", "20 A", "25 A", "32 A"],
    correctaTexto: "20 A",
    explicacion: "El circuito de tomas generales tiene protección de 20 A típicamente."
  },
  {
    id: 6034,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la intensidad máxima de un circuito de cocina/horno C3?",
    opciones: ["20 A", "25 A", "32 A", "40 A"],
    correctaTexto: "25 A",
    explicacion: "El circuito de cocina/horno tiene protección de 25 A típicamente."
  },
  {
    id: 6035,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuántos puntos de luz como máximo se pueden conectar a un circuito C1?",
    opciones: ["2 puntos", "5 puntos", "10 puntos", "No hay límite específico"],
    correctaTexto: "No hay límite específico",
    explicacion: "El límite es por intensidad, no por número de puntos. C1 soporta hasta 3680W."
  },

  // SECCIÓN 6.5 - Puntos de utilización
  {
    id: 6036,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué son los puntos de utilización en una vivienda?",
    opciones: ["Solamente los interruptores", "Solo los enchufes", "Interruptores, enchufes y puntos de luz", "Solamente los puntos de luz"],
    correctaTexto: "Interruptores, enchufes y puntos de luz",
    explicacion: "Los puntos de utilización incluyen todos los elementos de acceso a la electricidad."
  },
  {
    id: 6037,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el número mínimo de tomas de corriente en un dormitorio?",
    opciones: ["1 toma", "2 tomas", "3 tomas", "Depende del tamaño"],
    correctaTexto: "3 tomas",
    explicacion: "Cada dormitorio debe tener mínimo 3 tomas de corriente de uso general."
  },
  {
    id: 6038,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el número mínimo de tomas de corriente en la cocina?",
    opciones: ["2 tomas", "3 tomas", "4 tomas", "6 tomas"],
    correctaTexto: "6 tomas",
    explicacion: "La cocina requiere mínimo 6 puntos: 2 en mostrador y 4 distribuidas."
  },
  {
    id: 6039,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué altura debe tener una toma de corriente desde el suelo?",
    opciones: ["10-15 cm", "30-50 cm", "100-150 cm", "Variable según zona"],
    correctaTexto: "30-50 cm",
    explicacion: "Las tomas de corriente deben estar entre 30-50 cm del suelo típicamente."
  },
  {
    id: 6040,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la distancia máxima entre dos puntos de luz en un pasillo?",
    opciones: ["2 metros", "3 metros", "4 metros", "5 metros"],
    correctaTexto: "4 metros",
    explicacion: "Los puntos de luz en pasillos no deben separarse más de 4 metros."
  },

  // SECCIÓN 6.6 - Instalaciones en cuartos de baño
  {
    id: 6041,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la protección diferencial mínima requerida en baños?",
    opciones: ["300 mA", "100 mA", "30 mA", "500 mA"],
    correctaTexto: "30 mA",
    explicacion: "Los baños requieren protección diferencial de alta sensibilidad (30 mA)."
  },
  {
    id: 6042,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el grado de protección mínimo IP recomendado para baños?",
    opciones: ["IP20", "IP44", "IP65", "IP54"],
    correctaTexto: "IP44",
    explicacion: "Los baños requieren grado de protección mínimo IP44 por presencia de agua."
  },
  {
    id: 6043,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Se pueden instalar enchufes dentro de la bañera o ducha?",
    opciones: ["Sí, sin restricciones", "Sí, con protección IP65", "No, está prohibido", "Solo si están elevados"],
    correctaTexto: "No, está prohibido",
    explicacion: "Está prohibida toda instalación de aparatos en volúmenes de prohibición."
  },
  {
    id: 6044,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la distancia mínima de aparatos eléctricos a la bañera?",
    opciones: ["0,5 metros", "1,0 metro", "1,5 metros", "2,0 metros"],
    correctaTexto: "2,0 metros",
    explicacion: "Los aparatos eléctricos deben estar a mínimo 2 metros de la bañera/ducha."
  },
  {
    id: 6045,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Se requiere equipotencialidad suplementaria en baños?",
    opciones: ["No, nunca", "Sí, conectando masas de metal", "Solo si hay ducha", "Solo en baños antiguos"],
    correctaTexto: "Sí, conectando masas de metal",
    explicacion: "Los baños requieren equipotencialidad suplementaria entre elementos metálicos."
  },

  // SECCIÓN 6.7 - Esquemas y representación
  {
    id: 6046,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "La ubicación que debería tener el cuadro de protección viene determinada por:",
    opciones: ["la ITC-BT 9 del REBT", "la ITC-BT 19 del REBT", "la ITC-BT 17 del REBT", "la ITC-BT 13 del REBT"],
    correctaTexto: "la ITC-BT 17 del REBT",
    explicacion: "La ITC-BT 17 establece la ubicación e instalación de dispositivos de protección. (TEST OFICIAL)"
  },
  {
    id: 6047,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "Los esquemas eléctricos más importantes en una vivienda son:",
    opciones: ["Básico y avanzado", "Temporizador y sensor", "Generador de impulsos", "El unifilar del CGMP y el de distribución de planta"],
    correctaTexto: "El unifilar del CGMP y el de distribución de planta",
    explicacion: "Estos dos esquemas unifilares son fundamentales para la instalación. (TEST OFICIAL)"
  },
  {
    id: 6048,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué es un esquema unifilar?",
    opciones: ["Representación detallada con todos los cables", "Representación simplificada en una sola línea", "Esquema solo para cálculos", "Documento obsoleto"],
    correctaTexto: "Representación simplificada en una sola línea",
    explicacion: "El esquema unifilar representa la instalación de forma simplificada con líneas simples."
  },
  {
    id: 6049,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué es un esquema multifilar?",
    opciones: ["Esquema con una sola línea", "Representación detallada con todos los conductores", "Solo para cálculos", "No existe este tipo"],
    correctaTexto: "Representación detallada con todos los conductores",
    explicacion: "El esquema multifilar muestra cada conductor individual de la instalación."
  },
  {
    id: 6050,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué información debe incluir el esquema del CGMP?",
    opciones: ["Solo el IGA", "IGA, ID, PIA con sus calibres e intensidades", "Solo interruptores", "Sin información específica"],
    correctaTexto: "IGA, ID, PIA con sus calibres e intensidades",
    explicacion: "El esquema unifilar del CGMP debe mostrar todos los dispositivos y sus características."
  },
  {
    id: 6051,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cómo se representa un circuito de luz en un esquema unifil ar?",
    opciones: ["Línea continua", "Línea discontinua", "Con símbolo específico", "Con punto"],
    correctaTexto: "Línea discontinua",
    explicacion: "Generalmente los circuitos se representan con diferentes tipos de línea."
  },
  {
    id: 6052,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el propósito principal del esquema de distribución de planta?",
    opciones: ["Mostrar el CGMP", "Ubicar todos los puntos de luz, enchufes e interruptores", "Calcular potencias", "Solo fines decorativos"],
    correctaTexto: "Ubicar todos los puntos de luz, enchufes e interruptores",
    explicacion: "El esquema de planta muestra la distribución espacial de todos los puntos."
  },
  {
    id: 6053,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué simbología se utiliza para representar un punto de luz en plano?",
    opciones: ["Un círculo", "Una cruz", "Un punto", "Una línea"],
    correctaTexto: "Un círculo",
    explicacion: "Convencionalmente, un círculo representa un punto de luz en los planos."
  },
  {
    id: 6054,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué simbología se utiliza para un enchufe de corriente en plano?",
    opciones: ["Un círculo", "Un cuadrado", "Una línea diagonal", "Depende del país"],
    correctaTexto: "Un cuadrado",
    explicacion: "Convencionalmente, un cuadrado representa un enchufe en los planos."
  },
  {
    id: 6055,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cómo se indica el circuito de cada elemento en un plano?",
    opciones: ["Con color diferente", "Con número junto al símbolo", "Sin indicación", "Solo en leyenda"],
    correctaTexto: "Con número junto al símbolo",
    explicacion: "El número de circuito debe estar claramente indicado junto a cada elemento."
  },
  {
    id: 6056,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la importancia de la sección del conductor en una instalación?",
    opciones: ["Solo aspecto estético", "Evitar caída de tensión y sobrecalentamiento", "Reducir costos", "No tiene importancia"],
    correctaTexto: "Evitar caída de tensión y sobrecalentamiento",
    explicacion: "La sección correcta garantiza seguridad y funcionamiento adecuado."
  },
  {
    id: 6057,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la caída de tensión máxima permitida en una instalación interior?",
    opciones: ["1%", "3%", "5%", "10%"],
    correctaTexto: "3%",
    explicacion: "La caída de tensión máxima permitida es del 3% según REBT."
  },
  {
    id: 6058,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cómo se calcula la caída de tensión en un conductor?",
    opciones: ["Depende del color", "Depende de la sección, longitud y corriente", "No se calcula", "Solo en cobre"],
    correctaTexto: "Depende de la sección, longitud y corriente",
    explicacion: "La fórmula es: e = (ρ × L × I) / (s) donde ρ es resistividad, L longitud, I intensidad, s sección."
  },
  {
    id: 6059,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué materiales se pueden usar como tuberías de protección en viviendas?",
    opciones: ["Solo PVC", "Solo acero", "PVC, acero flexible, según normativa", "Cualquier material"],
    correctaTexto: "PVC, acero flexible, según normativa",
    explicacion: "Se pueden usar varios materiales siempre que cumplan los requisitos de protección."
  },
  {
    id: 6060,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el diámetro interior mínimo de un tubo de protección?",
    opciones: ["10 mm", "16 mm", "20 mm", "Depende del número de conductores"],
    correctaTexto: "Depende del número de conductores",
    explicacion: "El diámetro se calcula según número y sección de conductores alojados."
  },
  {
    id: 6061,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué es la derivación individual (DI) en una instalación?",
    opciones: ["Línea desde contador hasta cuadro de protección", "Línea desde caja general hasta contador", "Línea desde calle hasta casa", "No existe en viviendas"],
    correctaTexto: "Línea desde contador hasta cuadro de protección",
    explicacion: "La DI es el circuito individual que distribuye energía dentro de la vivienda."
  },
  {
    id: 6062,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la sección mínima de la derivación individual (DI)?",
    opciones: ["2,5 mm²", "4 mm²", "6 mm²", "10 mm²"],
    correctaTexto: "6 mm²",
    explicacion: "La DI tiene sección mínima de 6 mm² (cobre) según normativa."
  },
  {
    id: 6063,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué color tiene el conductor de protección (tierra) en una instalación?",
    opciones: ["Rojo", "Azul claro", "Verde-amarillo", "Negro"],
    correctaTexto: "Verde-amarillo",
    explicacion: "El conductor de protección (PE) debe ser verde y amarillo rayas alternadas."
  },
  {
    id: 6064,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es el color del conductor neutro en una instalación?",
    opciones: ["Negro", "Azul claro", "Rojo", "Marrón"],
    correctaTexto: "Azul claro",
    explicacion: "El conductor neutro debe ser azul claro según normalización."
  },
  {
    id: 6065,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuántas fases tiene una instalación monofásica de vivienda?",
    opciones: ["1 fase", "2 fases", "3 fases", "4 fases"],
    correctaTexto: "1 fase",
    explicacion: "Las viviendas son instalaciones monofásicas (1 fase + Neutro + Tierra)."
  },
  {
    id: 6066,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Qué voltaje tiene una instalación monofásica doméstica?",
    opciones: ["110 V", "220 V", "230 V", "400 V"],
    correctaTexto: "230 V",
    explicacion: "El voltaje estándar en Europa para viviendas es 230 V monofásicos."
  },
  {
    id: 6067,
    tema: "U6: Instalaciones eléctricas en viviendas",
    texto: "¿Cuál es la frecuencia de la corriente eléctrica en la red doméstica?",
    opciones: ["50 Hz", "60 Hz", "100 Hz", "400 Hz"],
    correctaTexto: "50 Hz",
    explicacion: "La frecuencia estándar en Europa es 50 Hz (60 Hz en América)."
  }
];
// Incluye 10 preguntas del test oficial

const TEMA_7_DATA = [
  // PREGUNTAS DEL TEST OFICIAL (7001-7010)
  {
    id: 7001,
    tema: 7,
    texto: "¿En qué instalaciones puede trabajar un instalador de categoría básica? (TEST OFICIAL)",
    opciones: [
      "En aquellas que no estén establecidas para la categoría especialista",
      "En los sistemas de control distribuido",
      "En quirófanos y salas de intervención",
      "Todas las respuestas anteriores son correctas"
    ],
    correctaTexto: "En aquellas que no estén establecidas para la categoría especialista",
    explicacion: "Un instalador de categoría básica puede trabajar en instalaciones generales de baja tensión que no requieran especialización en áreas especiales como control de procesos, locales de riesgo o sistemas de seguridad avanzada."
  },
  {
    id: 7002,
    tema: 7,
    texto: "El Certificado de Cualificación Individual de Baja Tensión: (TEST OFICIAL)",
    opciones: [
      "Capacita para realizar instalaciones de Baja Tensión",
      "Es un requisito para la adquisición del Certificado de Instalador Autorizado de Baja Tensión",
      "No existe dicho certificado",
      "Todas las respuestas anteriores son incorrectas"
    ],
    correctaTexto: "Es un requisito para la adquisición del Certificado de Instalador Autorizado de Baja Tensión",
    explicacion: "El Certificado de Cualificación Individual es un paso previo obligatorio para obtener la autorización de instalador. Demuestra el conocimiento técnico necesario pero no autoriza directamente a realizar instalaciones comerciales."
  },
  {
    id: 7003,
    tema: 7,
    texto: "Indica cuál de los siguientes ensayos no se realiza en la verificación de una instalación eléctrica: (TEST OFICIAL)",
    opciones: [
      "De continuidad",
      "De protección por separado MBTS",
      "De medida de corriente de fuga",
      "De medida de alumbrado general"
    ],
    correctaTexto: "De medida de alumbrado general",
    explicacion: "Los ensayos de verificación incluyen continuidad, resistencia de aislamiento, protección MBTS y medida de corriente de fuga. La medida de alumbrado general no es un ensayo de verificación eléctrica sino una medición posterior de confort visual."
  },
  {
    id: 7004,
    tema: 7,
    texto: "Indica cuál de los siguientes no es un requisito para adquirir la autorización para realizar instalaciones de Baja Tensión: (TEST OFICIAL)",
    opciones: [
      "Tener subscrito un seguro de responsabilidad civil",
      "Estar dado de alta en el Impuesto de Actividades Económicas (IAE)",
      "Estar constituido como una persona jurídica",
      "Estar incluido en el censo de obligaciones tributarias"
    ],
    correctaTexto: "Estar constituido como una persona jurídica",
    explicacion: "Para obtener la autorización se requiere seguro de responsabilidad civil, estar en el IAE y en el censo tributario, pero no es obligatorio estar constituido como persona jurídica; se puede ser persona física autorizada."
  },
  {
    id: 7005,
    tema: 7,
    texto: "Indica cuál es el límite de tensión para el que se emplea el REBT: (TEST OFICIAL)",
    opciones: [
      "1000 V en CC y 1500 V en CA",
      "2000 V en CC y 1500 V en CA",
      "1500 V en CC y 2000 V en CA",
      "1500 V en CC y 1000 V en CA"
    ],
    correctaTexto: "1500 V en CC y 1000 V en CA",
    explicacion: "El Reglamento Electrotécnico de Baja Tensión (REBT) se aplica a instalaciones con tensiones hasta 1500 V en corriente continua y 1000 V en corriente alterna, definiendo así el límite de baja tensión."
  },
  {
    id: 7006,
    tema: 7,
    texto: "Indica en que instalaciones puede trabajar un instalador con categoría de especialista: (TEST OFICIAL)",
    opciones: [
      "En control de procesos",
      "En locales con riesgo de incendio y explosión",
      "En instalaciones generadoras de Baja Tensión",
      "Todas las anteriores son correctas"
    ],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "Un especialista está autorizado para trabajar en instalaciones de control de procesos, locales con riesgo (ATEX), generadores y sistemas especiales que requieren conocimiento avanzado."
  },
  {
    id: 7007,
    tema: 7,
    texto: "Indica en que ITC se tiene que basar un especialista para realizar una instalación en una empresa que se encarga de realizar explosivos para el ejército: (TEST OFICIAL)",
    opciones: [
      "ITC-BT 44",
      "ITC-BT 29",
      "ITC-BT 40",
      "ITC-BT 06"
    ],
    correctaTexto: "ITC-BT 29",
    explicacion: "La ITC-BT 29 regula las instalaciones en locales de características especiales, incluyendo los destinados a almacenamiento y producción de explosivos y sustancias inflamables."
  },
  {
    id: 7008,
    tema: 7,
    texto: "Indica la característica que se identifica con la verificación por examen: (TEST OFICIAL)",
    opciones: [
      "Se basa en una inspección visual",
      "Se realiza con tensión en la línea",
      "Es lo mismo que la verificación por ensayo",
      "Todas las respuestas anteriores son correctas"
    ],
    correctaTexto: "Se basa en una inspección visual",
    explicacion: "La verificación por examen es una inspección visual de la instalación sin tensión, comprobando características constructivas, materiales, conexiones y disposición general de los componentes."
  },
  {
    id: 7009,
    tema: 7,
    texto: "Indica que apartado se corresponde con el contenido de un proyecto: (TEST OFICIAL)",
    opciones: [
      "La memoria descriptiva",
      "Los planos y esquemas necesarios",
      "El presupuesto",
      "Todas las respuestas anteriores son correctas"
    ],
    correctaTexto: "Todas las respuestas anteriores son correctas",
    explicacion: "Un proyecto técnico completo debe incluir: memoria descriptiva (características técnicas), planos y esquemas (representación gráfica) y presupuesto (estimación económica)."
  },
  {
    id: 7010,
    tema: 7,
    texto: "Indica que ITC hace referencia a las características de los receptores: (TEST OFICIAL)",
    opciones: [
      "De la ITC-01 hasta la ITC-05",
      "De la ITC-06 hasta la ITC-11",
      "De la ITC-43 hasta la ITC-49",
      "De la ITC-30 hasta la ITC-36"
    ],
    correctaTexto: "De la ITC-43 hasta la ITC-49",
    explicacion: "Las Instrucciones Técnicas Complementarias ITC-43 a ITC-49 especifican las características, requisitos técnicos y prescripciones particulares de diversos tipos de receptores eléctricos."
  },

  // PREGUNTAS COMPLEMENTARIAS (7011-7067)
  {
    id: 7011,
    tema: 7,
    texto: "¿Cuál es el organismo responsable de otorgar las autorizaciones de instalador de Baja Tensión en España?",
    opciones: [
      "El Ministerio de Industria, Energía y Turismo",
      "Las Comunidades Autónomas",
      "La CNMC",
      "El Colegio Oficial de Electricistas"
    ],
    correctaTexto: "Las Comunidades Autónomas",
    explicacion: "La competencia para otorgar las autorizaciones de instalador está delegada en las Comunidades Autónomas, aunque dentro de un marco regulatorio estatal establecido por el Ministerio."
  },
  {
    id: 7012,
    tema: 7,
    texto: "¿Qué documento debe acompañar a toda instalación de Baja Tensión nueva o modificada?",
    opciones: [
      "Un certificado de amianto",
      "Un certificado de instalación",
      "Un informe de mantenimiento",
      "Un contrato de seguros"
    ],
    correctaTexto: "Un certificado de instalación",
    explicacion: "El Certificado de Instalación es el documento oficial que acredita que la instalación ha sido realizada conforme a la normativa REBT y debe entregarse al usuario."
  },
  {
    id: 7013,
    tema: 7,
    texto: "¿Cuáles son las tres partes principales de un Certificado de Instalación?",
    opciones: [
      "Descripción, presupuesto y fotografías",
      "Características de la instalación, resultados de verificación y firma del instalador",
      "Planos, memoria y cálculos",
      "Licencia, seguro y autorización"
    ],
    correctaTexto: "Características de la instalación, resultados de verificación y firma del instalador",
    explicacion: "El Certificado debe incluir la descripción completa de la instalación, los resultados de los ensayos y verificaciones realizados, y la firma del instalador autorizado."
  },
  {
    id: 7014,
    tema: 7,
    texto: "¿Qué información debe contener la memoria descriptiva de un proyecto eléctrico?",
    opciones: [
      "Solo los planos y esquemas",
      "Descripción de la obra, características técnicas, cálculos justificativos y normativa aplicable",
      "Únicamente el presupuesto",
      "Solo las características del terreno"
    ],
    correctaTexto: "Descripción de la obra, características técnicas, cálculos justificativos y normativa aplicable",
    explicacion: "La memoria descriptiva es el documento escrito que justifica técnicamente la instalación, explicando la solución adoptada, cálculos realizados y normativa REBT de aplicación."
  },
  {
    id: 7015,
    tema: 7,
    texto: "¿Cuánto tiempo debe conservarse el Certificado de Instalación?",
    opciones: [
      "1 año",
      "3 años",
      "5 años",
      "Indefinidamente"
    ],
    correctaTexto: "Indefinidamente",
    explicacion: "El propietario o responsable debe conservar el Certificado de Instalación durante toda la vida útil de la instalación, siendo un documento legal fundamental para verificaciones y cambios posteriores."
  },
  {
    id: 7016,
    tema: 7,
    texto: "¿Qué es la verificación inicial de una instalación de Baja Tensión?",
    opciones: [
      "Un control realizado únicamente en las primeras horas de funcionamiento",
      "Un examen detallado y ensayos para comprobar que cumple el REBT antes de su puesta en servicio",
      "Una simple revisión visual sin necesidad de equipos de medida",
      "Un proceso que solo realizan los fabricantes"
    ],
    correctaTexto: "Un examen detallado y ensayos para comprobar que cumple el REBT antes de su puesta en servicio",
    explicacion: "La verificación inicial incluye inspección visual (examen) y pruebas con equipos de medida (ensayos) para garantizar que la instalación cumple con todos los requisitos del REBT antes de usar."
  },
  {
    id: 7017,
    tema: 7,
    texto: "¿Cuál es el objetivo principal de la inspección visual en la verificación de una instalación?",
    opciones: [
      "Medir la intensidad de corriente",
      "Verificar que los materiales, conexiones y disposición cumplen la normativa",
      "Calcular el consumo energético",
      "Determinar la vida útil de los componentes"
    ],
    correctaTexto: "Verificar que los materiales, conexiones y disposición cumplen la normativa",
    explicacion: "La inspección visual (examen) comprueba que todos los elementos están correctamente seleccionados, conectados e instalados según el REBT, sin necesidad de equipos de medida."
  },
  {
    id: 7018,
    tema: 7,
    texto: "¿Qué ensayo verifica la ausencia de defectos de aislamiento en los conductores?",
    opciones: [
      "Ensayo de continuidad",
      "Ensayo de resistencia de aislamiento",
      "Ensayo de corriente de fuga",
      "Ensayo de cortocircuito"
    ],
    correctaTexto: "Ensayo de resistencia de aislamiento",
    explicacion: "El ensayo de resistencia de aislamiento mide la oposición del aislamiento de los conductores usando una tensión de prueba para detectar cualquier defecto o degradación del aislante."
  },
  {
    id: 7019,
    tema: 7,
    texto: "¿Qué instrumento se utiliza para medir la resistencia de aislamiento?",
    opciones: [
      "Voltímetro",
      "Amperímetro",
      "Megóhmetro",
      "Óhmetro convencional"
    ],
    correctaTexto: "Megóhmetro",
    explicacion: "El megóhmetro (también llamado telurómetro u óhmetro de aislamiento) es el instrumento específico diseñado para medir valores muy altos de resistencia de aislamiento entre 0.5 y 1000 MΩ."
  },
  {
    id: 7020,
    tema: 7,
    texto: "¿Cuál es el valor mínimo de resistencia de aislamiento entre conductores según el REBT?",
    opciones: [
      "0.5 MΩ",
      "1 MΩ",
      "5 MΩ",
      "10 MΩ"
    ],
    correctaTexto: "1 MΩ",
    explicacion: "El REBT especifica que la resistencia de aislamiento entre conductores debe ser como mínimo de 1 MΩ (1.000.000 Ω), medida a 500 V en corriente continua."
  },
  {
    id: 7021,
    tema: 7,
    texto: "¿Qué es el ensayo de continuidad de las masas metálicas?",
    opciones: [
      "Verificar la continuidad eléctrica de los conductores de protección",
      "Medir la tensión entre fases",
      "Comprobar la resistencia del aislamiento",
      "Verificar la corriente de cortocircuito"
    ],
    correctaTexto: "Verificar la continuidad eléctrica de los conductores de protección",
    explicacion: "El ensayo de continuidad comprueba que existe una conexión eléctrica adecuada entre todas las masas metálicas y el conductor de protección (tierra), asegurando la efectividad del sistema de puesta a tierra."
  },
  {
    id: 7022,
    tema: 7,
    texto: "¿Cuál es el valor máximo de resistencia de continuidad permitida en un circuito de protección?",
    opciones: [
      "0.01 Ω",
      "0.1 Ω",
      "1 Ω",
      "10 Ω"
    ],
    correctaTexto: "0.1 Ω",
    explicacion: "La resistencia de los circuitos de protección no debe exceder 0.1 Ω para garantizar que la corriente de defecto puede activar correctamente los dispositivos de protección."
  },
  {
    id: 7023,
    tema: 7,
    texto: "¿Qué se verifica con el ensayo de la resistencia de puesta a tierra?",
    opciones: [
      "La continuidad de los conductores de fase",
      "La resistencia entre los electrodos de tierra y tierra",
      "La tensión de alimentación de la instalación",
      "La intensidad de corriente máxima"
    ],
    correctaTexto: "La resistencia entre los electrodos de tierra y tierra",
    explicacion: "Este ensayo mide la resistencia del sistema de puesta a tierra, comprobando que el valor sea suficientemente bajo para permitir el paso de corrientes de defecto y asegurar la protección."
  },
  {
    id: 7024,
    tema: 7,
    texto: "¿Cuál es el instrumento típicamente utilizado para medir la resistencia de puesta a tierra?",
    opciones: [
      "Voltímetro digital",
      "Telurómetro (medidor de resistencia de tierra)",
      "Amperímetro de gancho",
      "Megóhmetro"
    ],
    correctaTexto: "Telurómetro (medidor de resistencia de tierra)",
    explicacion: "El telurómetro es el instrumento específico para medir la resistencia de puesta a tierra, utilizando el método de los cuatro puntos (Wenner) o de tres puntos según normativa."
  },
  {
    id: 7025,
    tema: 7,
    texto: "¿Qué es una Inspección Periódica en instalaciones de Baja Tensión?",
    opciones: [
      "Un control realizado solo cuando hay daños",
      "Un examen y ensayos periódicos para verificar el cumplimiento continuado del REBT",
      "Una revisión anual obligatoria para todos los usuarios",
      "Un trámite administrativo sin contenido técnico"
    ],
    correctaTexto: "Un examen y ensayos periódicos para verificar el cumplimiento continuado del REBT",
    explicacion: "Las inspecciones periódicas comprueban que la instalación sigue cumpliendo el REBT, detectando deterioros o cambios no autorizados, siendo especialmente importantes en instalaciones antiguas."
  },
  {
    id: 7026,
    tema: 7,
    texto: "¿Con qué periodicidad debe realizarse la inspección periódica en viviendas?",
    opciones: [
      "Anualmente",
      "Cada 5 años",
      "Cada 10 años",
      "Solo cuando cambiar de propietario"
    ],
    correctaTexto: "Cada 5 años",
    explicacion: "La ITC-BT 05 establece que las inspecciones periódicas en viviendas deben realizarse cada 5 años, aunque en locales especiales o instalaciones especiales puede ser más frecuente."
  },
  {
    id: 7027,
    tema: 7,
    texto: "¿Quién está autorizado para realizar una inspección periódica?",
    opciones: [
      "Cualquier persona técnicamente cualificada",
      "Un instalador de Baja Tensión o un organismo de control autorizado",
      "Solo los fabricantes de materiales eléctricos",
      "Exclusivamente los empleados de la distribuidora"
    ],
    correctaTexto: "Un instalador de Baja Tensión o un organismo de control autorizado",
    explicacion: "Las inspecciones periódicas deben ser realizadas por instaladores autorizados o por organismos de control acreditados (laboratorios de ensayos) para garantizar su validez técnica."
  },
  {
    id: 7028,
    tema: 7,
    texto: "¿Qué debe contener el informe de una inspección periódica?",
    opciones: [
      "Solo el resultado final (aceptable/rechazable)",
      "Descripción del estado de la instalación, ensayos realizados, resultados, deficiencias detectadas y recomendaciones",
      "Únicamente los planos de la instalación",
      "Solo las fotografías de los componentes"
    ],
    correctaTexto: "Descripción del estado de la instalación, ensayos realizados, resultados, deficiencias detectadas y recomendaciones",
    explicacion: "El informe técnico debe ser detallado y documentado, incluyendo todos los aspectos verificados, resultados cuantitativos y recomendaciones para cualquier corrección necesaria."
  },
  {
    id: 7029,
    tema: 7,
    texto: "¿Qué son las Instrucciones Técnicas Complementarias (ITC)?",
    opciones: [
      "Documentos opcionales sin validez legal",
      "Especificaciones detalladas que desarrollan y complementan el REBT para casos particulares",
      "Marcas de conformidad de productos",
      "Guías informativas sin carácter normativo"
    ],
    correctaTexto: "Especificaciones detalladas que desarrollan y complementan el REBT para casos particulares",
    explicacion: "Las ITCs son instrucciones de obligado cumplimiento que especifican requisitos particulares para diferentes tipos de instalaciones, receptores y locales especiales."
  },
  {
    id: 7030,
    tema: 7,
    texto: "¿Cuántas Instrucciones Técnicas Complementarias contiene el REBT?",
    opciones: [
      "20 ITCs",
      "32 ITCs",
      "49 ITCs",
      "50 ITCs"
    ],
    correctaTexto: "49 ITCs",
    explicacion: "El REBT actual está estructurado en 5 artículos y 49 Instrucciones Técnicas Complementarias que abarcan todos los aspectos de las instalaciones de baja tensión."
  },
  {
    id: 7031,
    tema: 7,
    texto: "¿Cuál es la ITC-BT 01?",
    opciones: [
      "Documentación e inspecciones de instalaciones",
      "Definiciones y requisitos generales",
      "Instalaciones de locales especiales",
      "Receptores a motor"
    ],
    correctaTexto: "Documentación e inspecciones de instalaciones",
    explicacion: "La ITC-BT 01 regula toda la documentación técnica requerida, los certificados, inspecciones iniciales y periódicas de las instalaciones de baja tensión."
  },
  {
    id: 7032,
    tema: 7,
    texto: "¿Qué función tienen los planos y esquemas en un proyecto eléctrico?",
    opciones: [
      "Son documentos optativos que solo complementan el presupuesto",
      "Representan gráficamente la distribución, componentes y conexiones de la instalación",
      "Son únicamente para propósitos estéticos",
      "Solo sirven para solicitar licencias municipales"
    ],
    correctaTexto: "Representan gráficamente la distribución, componentes y conexiones de la instalación",
    explicacion: "Los planos y esquemas son imprescindibles para visualizar la instalación, permitiendo al instalador ejecutarla correctamente y a los inspectores verificar su cumplimiento."
  },
  {
    id: 7033,
    tema: 7,
    texto: "¿Cuál es la diferencia entre un plano y un esquema en una instalación eléctrica?",
    opciones: [
      "No hay diferencia, son términos sinónimos",
      "Los planos muestran la distribución física en el espacio; los esquemas muestran las conexiones eléctricas",
      "Los planos son para arquitectura; los esquemas son solo para electricistas",
      "Los esquemas son solo teóricos; los planos son prácticos"
    ],
    correctaTexto: "Los planos muestran la distribución física en el espacio; los esquemas muestran las conexiones eléctricas",
    explicacion: "Los planos arquitectónicos ubicar los puntos y canalizaciones en el espacio; los esquemas unifilares muestran las conexiones eléctricas de forma simplificada y clara."
  },
  {
    id: 7034,
    tema: 7,
    texto: "¿Qué es un esquema unifilar?",
    opciones: [
      "Un esquema que muestra solo una fase de la instalación",
      "Una representación simplificada donde los conductores se representan con una sola línea",
      "Un esquema solo válido para monofásicas",
      "Un tipo de croquis realizado a mano"
    ],
    correctaTexto: "Una representación simplificada donde los conductores se representan con una sola línea",
    explicacion: "El esquema unifilar representa la instalación de forma simplificada usando una línea por cada circuito o conductor, facilitando la comprensión general de la arquitectura eléctrica."
  },
  {
    id: 7035,
    tema: 7,
    texto: "¿Qué información mínima debe incluir un certificado de instalación?",
    opciones: [
      "Solo el precio final",
      "Identificación del instalador, características de la instalación, resultado de verificaciones y datos del usuario",
      "Solo la firma del instalador",
      "Únicamente datos del propietario"
    ],
    correctaTexto: "Identificación del instalador, características de la instalación, resultado de verificaciones y datos del usuario",
    explicacion: "El certificado debe ser un documento completo que identifique claramente todos los actores (instalador, usuario), describa lo instalado y acredite el cumplimiento del REBT mediante los resultados de verificación."
  },
  {
    id: 7036,
    tema: 7,
    texto: "¿Cuál es el propósito principal del certificado de instalación?",
    opciones: [
      "Demostrar que el trabajo fue ejecutado rápidamente",
      "Acreditar que la instalación cumple el REBT y es segura para usar",
      "Justificar el precio cobrado",
      "Solo ser un requisito burocrático"
    ],
    correctaTexto: "Acreditar que la instalación cumple el REBT y es segura para usar",
    explicacion: "El certificado es el documento legal que garantiza al usuario que la instalación es técnicamente correcta y segura, siendo fundamental para compraventas y seguros."
  },
  {
    id: 7037,
    tema: 7,
    texto: "¿Qué se entiende por 'punto de utilización' en una instalación?",
    opciones: [
      "Cualquier punto donde se conecta un dispositivo eléctrico",
      "El lugar donde se mide el consumo eléctrico",
      "Solo los enchufes de la instalación",
      "La entrada principal de la instalación"
    ],
    correctaTexto: "Cualquier punto donde se conecta un dispositivo eléctrico",
    explicacion: "Los puntos de utilización incluyen todos los conectores (enchufes), luminarias, puntos de control y cualquier otra toma de energía en la instalación."
  },
  {
    id: 7038,
    tema: 7,
    texto: "¿Cuál es el espacio de cálculo mínimo entre puntos de utilización en viviendas?",
    opciones: [
      "1 metro",
      "1.5 metros",
      "2 metros",
      "3 metros"
    ],
    correctaTexto: "1.5 metros",
    explicacion: "El REBT especifica un espaciamiento máximo de 1.5 metros entre puntos de utilización en circuitos de electrodomésticos y enchufes de viviendas."
  },
  {
    id: 7039,
    tema: 7,
    texto: "¿Qué información técnica debe contener la memoria de un proyecto?",
    opciones: [
      "Solo el listado de materiales a comprar",
      "Descripción de obra, cálculos de caídas de tensión, corrientes, protecciones y justificación de soluciones adoptadas",
      "Únicamente el cronograma de ejecución",
      "Solo fotos de instalaciones similares"
    ],
    correctaTexto: "Descripción de obra, cálculos de caídas de tensión, corrientes, protecciones y justificación de soluciones adoptadas",
    explicacion: "La memoria técnica justifica todas las decisiones del proyecto mediante cálculos y razonamientos que demuestran el cumplimiento del REBT."
  },
  {
    id: 7040,
    tema: 7,
    texto: "¿Cuál es la tensión de prueba para el ensayo de aislamiento en conductores de 0.6/1 kV?",
    opciones: [
      "250 V en corriente alterna",
      "500 V en corriente alterna",
      "1000 V en corriente continua",
      "1500 V en corriente continua"
    ],
    correctaTexto: "1000 V en corriente continua",
    explicacion: "Para conductores de hasta 1 kV, el ensayo de resistencia de aislamiento se realiza a 500 V en CC, aunque puede usarse 1000 V dependiendo de las características del conductor."
  },
  {
    id: 7041,
    tema: 7,
    texto: "¿Qué es una 'deficiencia' en el contexto de una inspección de instalación?",
    opciones: [
      "Un problema menor que se puede ignorar",
      "Cualquier incumplimiento de la normativa REBT que afecte la seguridad",
      "Solo los daños visibles en los materiales",
      "Las preocupaciones estéticas del inspector"
    ],
    correctaTexto: "Cualquier incumplimiento de la normativa REBT que afecte la seguridad",
    explicacion: "Una deficiencia es cualquier aspecto que no cumple el REBT, desde falta de continuidad de tierra hasta ausencia de protecciones adecuadas, y debe ser corregida."
  },
  {
    id: 7042,
    tema: 7,
    texto: "¿Cómo se clasifican las deficiencias en una instalación?",
    opciones: [
      "Solo como 'aceptables' o 'rechazables'",
      "Como 'importante' o 'secundaria' según su impacto en la seguridad",
      "Como 'visual' o 'técnica'",
      "No se clasifican formalmente"
    ],
    correctaTexto: "Como 'importante' o 'secundaria' según su impacto en la seguridad",
    explicacion: "Las deficiencias importantes ponen en riesgo la seguridad y deben corregirse inmediatamente; las secundarias son menos críticas pero deben solventarse."
  },
  {
    id: 7043,
    tema: 7,
    texto: "¿Qué debe hacer un instalador si encuentra una deficiencia importante durante la verificación?",
    opciones: [
      "Ignorarla si el cliente no la ve",
      "Documentarla y no entregar el certificado hasta que sea subsanada",
      "Reportarla solo a su empresa",
      "Avisarle al cliente para que posteriormente la corrija"
    ],
    correctaTexto: "Documentarla y no entregar el certificado hasta que sea subsanada",
    explicacion: "El instalador autorizado es responsable de asegurar que la instalación cumple el REBT, por lo que las deficiencias importantes deben corregirse antes de entregar el certificado."
  },
  {
    id: 7044,
    tema: 7,
    texto: "¿Cuál es la estructura básica de un Certificado de Instalación válido?",
    opciones: [
      "Solo firma y nombre del instalador",
      "Portada, datos identificativos, descripción técnica, resultados de verificación y conclusiones",
      "Solo un sello de aprobación",
      "Una lista de precios"
    ],
    correctaTexto: "Portada, datos identificativos, descripción técnica, resultados de verificación y conclusiones",
    explicacion: "El certificado debe ser un documento estructurado y formal que incluya todos los elementos necesarios para acreditar la conformidad de la instalación."
  },
  {
    id: 7045,
    tema: 7,
    texto: "¿Qué rol tiene la Comunidad Autónoma en la verificación de instalaciones?",
    opciones: [
      "Autoriza instaladores y puede inspeccionar instalaciones para verificar cumplimiento",
      "Solo cobra impuestos sobre instalaciones",
      "No tiene ningún rol en el control",
      "Solo mantiene estadísticas"
    ],
    correctaTexto: "Autoriza instaladores y puede inspeccionar instalaciones para verificar cumplimiento",
    explicacion: "Las Comunidades Autónomas autorizan instaladores, registran instalaciones y realizan inspecciones de oficio para garantizar el cumplimiento del REBT en su territorio."
  },
  {
    id: 7046,
    tema: 7,
    texto: "¿Qué es el RAATE (Registro Administrativo de Autorizados Técnicos Eléctricos)?",
    opciones: [
      "Un registro de electrodomésticos",
      "Un registro administrativo donde constan los instaladores autorizados de baja tensión",
      "Un registro de accidentes eléctricos",
      "Un documento de garantía de materiales"
    ],
    correctaTexto: "Un registro administrativo donde constan los instaladores autorizados de baja tensión",
    explicacion: "Cada Comunidad Autónoma mantiene el RAATE con datos de todos los instaladores autorizados, permitiendo verificar la validez de las autorizaciones."
  },
  {
    id: 7047,
    tema: 7,
    texto: "¿Cuánto tiempo de validez tiene una autorización de instalador de Baja Tensión?",
    opciones: [
      "1 año",
      "5 años",
      "10 años",
      "Indefinida mientras se cumpla con obligaciones"
    ],
    correctaTexto: "Indefinida mientras se cumpla con obligaciones",
    explicacion: "La autorización es indefinida siempre que el instalador mantenga vigentes sus requisitos (seguro de responsabilidad civil, estar en el censo tributario, etc.)."
  },
  {
    id: 7048,
    tema: 7,
    texto: "¿Qué información debe proporcionar un instalador al entregar una instalación?",
    opciones: [
      "Solo el certificado firmado",
      "Certificado, copia de documentación técnica y guía de mantenimiento recomendado",
      "Solo la factura de pago",
      "Un contrato de garantía solo"
    ],
    correctaTexto: "Certificado, copia de documentación técnica y guía de mantenimiento recomendado",
    explicacion: "El instalador debe proporcionar toda la documentación necesaria para que el usuario pueda operar y mantener la instalación correctamente."
  },
  {
    id: 7049,
    tema: 7,
    texto: "¿Cuál es el documento que acredita las características técnicas de un material eléctrico?",
    opciones: [
      "La factura de venta",
      "El manual de uso",
      "La hoja de datos técnicos (datasheet) y la marcación de conformidad",
      "El certificado de origen"
    ],
    correctaTexto: "La hoja de datos técnicos (datasheet) y la marcación de conformidad",
    explicacion: "Los materiales deben incluir documentación técnica y marcado de conformidad (CE) que acrediten que cumplen las normas técnicas europeas."
  },
  {
    id: 7050,
    tema: 7,
    texto: "¿Qué responsabilidad tiene el instalador sobre los materiales que utiliza?",
    opciones: [
      "Solo la de comprarlos al precio más bajo",
      "Verificar que sean adecuados, de calidad certificada y apropiados para la aplicación",
      "Solo desempacarlos",
      "No tiene responsabilidad, solo la del distribuidor"
    ],
    correctaTexto: "Verificar que sean adecuados, de calidad certificada y apropiados para la aplicación",
    explicacion: "El instalador es responsable de seleccionar y usar materiales apropiados, verificando que cumplan normativas y sean adecuados para cada aplicación."
  },
  {
    id: 7051,
    tema: 7,
    texto: "¿Qué es el marcado CE en materiales eléctricos?",
    opciones: [
      "Una marca decorativa que indica estética",
      "Una declaración de que el producto cumple directivas europeas de seguridad",
      "Un código de precio",
      "Un símbolo de garantía de fábrica"
    ],
    correctaTexto: "Una declaración de que el producto cumple directivas europeas de seguridad",
    explicacion: "El marcado CE indica que el fabricante declara que el producto cumple las directivas europeas aplicables y puede comercializarse en la UE."
  },
  {
    id: 7052,
    tema: 7,
    texto: "¿Qué es una 'Declaración de Conformidad'?",
    opciones: [
      "Un documento publicitario del fabricante",
      "Un documento legal donde el fabricante declara que su producto cumple la normativa aplicable",
      "Solo un papel informativo",
      "Un recibo de compra"
    ],
    correctaTexto: "Un documento legal donde el fabricante declara que su producto cumple la normativa aplicable",
    explicacion: "La Declaración de Conformidad (DoC) es un documento legal que el fabricante debe proporcionar con cada producto, asegurando el cumplimiento normativo."
  },
  {
    id: 7053,
    tema: 7,
    texto: "¿Cuándo debe estar disponible la documentación técnica completa de una instalación?",
    opciones: [
      "Solo durante la ejecución",
      "Solo para venta de la propiedad",
      "En todo momento, para consulta de usuarios, inspectores y durante cualquier modificación",
      "Nunca, es confidencial"
    ],
    correctaTexto: "En todo momento, para consulta de usuarios, inspectores y durante cualquier modificación",
    explicacion: "La documentación debe estar disponible y accesible durante toda la vida útil de la instalación para verificaciones, reparaciones y futuras ampliaciones."
  },
  {
    id: 7054,
    tema: 7,
    texto: "¿Qué debe contener un esquema de distribución de circuitos?",
    opciones: [
      "Solo el nombre de los circuitos",
      "Identificación de circuitos, protecciones asociadas, conductores, secciones y cargas",
      "Solo fotografías de las conexiones",
      "Un diagrama del edificio"
    ],
    correctaTexto: "Identificación de circuitos, protecciones asociadas, conductores, secciones y cargas",
    explicacion: "El esquema de distribución debe especificar claramente cada circuito, sus protecciones, conductores utilizados y la carga estimada de cada uno."
  },
  {
    id: 7055,
    tema: 7,
    texto: "¿Cuál es el objetivo de mantener un registro de las inspecciones periódicas?",
    opciones: [
      "Solo cumplimiento burocrático",
      "Demostrar el estado de conservación de la instalación y la realización oportuna de inspecciones",
      "Justificar los gastos",
      "Impresionar a los visitantes"
    ],
    correctaTexto: "Demostrar el estado de conservación de la instalación y la realización oportuna de inspecciones",
    explicacion: "El registro histórico de inspecciones proporciona evidencia del mantenimiento adecuado, siendo valioso para compraventas y reclamos de seguros."
  },
  {
    id: 7056,
    tema: 7,
    texto: "¿Qué significa la abreviatura 'MBTS' en documentación eléctrica?",
    opciones: [
      "Material Base Técnico de Seguridad",
      "Medida de Baja Tensión y Seguridad",
      "Muy Baja Tensión de Seguridad",
      "Material de Baja Tensión Separado"
    ],
    correctaTexto: "Muy Baja Tensión de Seguridad",
    explicacion: "MBTS se refiere a circuitos de muy baja tensión (máximo 50 V CA o 120 V CC) utilizados para aplicaciones de control y seguridad que no requieren protecciones complejas."
  },
  {
    id: 7057,
    tema: 7,
    texto: "¿Cuál es la importancia de los esquemas eléctricos en el mantenimiento de una instalación?",
    opciones: [
      "Solo son necesarios para la construcción inicial",
      "Permiten localizar averías, realizar ampliaciones seguras y entender la instalación",
      "No tiene importancia después de instalar",
      "Solo interesa a los inspectores"
    ],
    correctaTexto: "Permiten localizar averías, realizar ampliaciones seguras y entender la instalación",
    explicacion: "Los esquemas son fundamentales para cualquier intervención futura, permitiendo a técnicos y usuarios comprender la estructura y diagnosticar problemas."
  },
  {
    id: 7058,
    tema: 7,
    texto: "¿Qué documento debe acompañar obligatoriamente a un nuevo receptor eléctrico?",
    opciones: [
      "Un certificado de instalación general",
      "Instrucciones de funcionamiento, datos técnicos y marcado de conformidad",
      "Un contrato de compra",
      "Una garantía verbal"
    ],
    correctaTexto: "Instrucciones de funcionamiento, datos técnicos y marcado de conformidad",
    explicacion: "Cada aparato eléctrico debe incluir documentación clara sobre su funcionamiento seguro, características técnicas y prueba de conformidad normativa."
  },
  {
    id: 7059,
    tema: 7,
    texto: "¿Quién es responsable de archivar la documentación de la instalación?",
    opciones: [
      "Solo el instalador",
      "El propietario de la instalación (usuario final)",
      "La distribuidora de energía",
      "Solo durante el primer año"
    ],
    correctaTexto: "El propietario de la instalación (usuario final)",
    explicacion: "El propietario debe conservar toda la documentación técnica y certificados de su instalación para futuros usos y verificaciones."
  },
  {
    id: 7060,
    tema: 7,
    texto: "¿Qué información proporciona el certificado de instalación al inspector?",
    opciones: [
      "Solo el aspecto visual de la instalación",
      "Descripción técnica completa, resultados de todos los ensayos y acreditación de cumplimiento del REBT",
      "Solo el nombre del instalador",
      "Información sobre el precio"
    ],
    correctaTexto: "Descripción técnica completa, resultados de todos los ensayos y acreditación de cumplimiento del REBT",
    explicacion: "El certificado es el documento que permite al inspector verificar que la instalación fue ejecutada correctamente sin necesidad de repetir todos los ensayos."
  },
  {
    id: 7061,
    tema: 7,
    texto: "¿Cuántos anexos o apéndices suele tener un proyecto técnico completo?",
    opciones: [
      "Ninguno, es solo un documento",
      "Entre 5 y 10, incluyendo cálculos, esquemas, materiales y especificaciones técnicas",
      "Siempre exactamente 3",
      "Depende del capricho del proyectista"
    ],
    correctaTexto: "Entre 5 y 10, incluyendo cálculos, esquemas, materiales y especificaciones técnicas",
    explicacion: "Un proyecto completo incluye múltiples anexos con detalles técnicos, justificaciones de cálculos, listados de materiales y especificaciones particulares."
  },
  {
    id: 7062,
    tema: 7,
    texto: "¿Qué es un 'defecto de aislamiento latente' en una instalación?",
    opciones: [
      "Un defecto visible",
      "Un defecto interno del aislamiento no detectable visualmente que puede detectarse por ensayos",
      "Un defecto de conexión",
      "Un problema de sobrecarga"
    ],
    correctaTexto: "Un defecto interno del aislamiento no detectable visualmente que puede detectarse por ensayos",
    explicacion: "Los defectos latentes son interiores o microscópicos que no se ven en inspección visual pero se detectan con ensayos de resistencia de aislamiento."
  },
  {
    id: 7063,
    tema: 7,
    texto: "¿Cuál es la responsabilidad civil del instalador autorizando una deficiente instalación?",
    opciones: [
      "No tiene responsabilidad si el cliente no lo reclama",
      "Es total, incluyendo daños materiales y personales causados por la instalación deficiente",
      "Responsabilidad limitada a reparaciones menores",
      "Solo responsable en caso de pago insuficiente"
    ],
    correctaTexto: "Es total, incluyendo daños materiales y personales causados por la instalación deficiente",
    explicacion: "El instalador autorizado es responsable civilmente de cualquier daño causado por su instalación deficiente, siendo este uno de los motivos del requisito de seguro."
  },
  {
    id: 7064,
    tema: 7,
    texto: "¿Qué garantía mínima debe proporcionar un instalador sobre su trabajo?",
    opciones: [
      "No está obligado a dar garantía",
      "Como mínimo que la instalación cumple el REBT en el momento de entrega",
      "Garantía de que nunca falla",
      "Garantía solo de los componentes"
    ],
    correctaTexto: "Como mínimo que la instalación cumple el REBT en el momento de entrega",
    explicacion: "El instalador garantiza implícitamente que la instalación entregada cumple la normativa; posteriormente, el usuario es responsable del mantenimiento."
  },
  {
    id: 7065,
    tema: 7,
    texto: "¿Cómo debe documentarse una modificación realizada a una instalación existente?",
    opciones: [
      "No es necesario documentar pequeñas modificaciones",
      "Debe emitirse un certificado parcial identificando claramente la modificación y verificaciones realizadas",
      "Solo se documenta si es importante",
      "El cliente decide si documentar"
    ],
    correctaTexto: "Debe emitirse un certificado parcial identificando claramente la modificación y verificaciones realizadas",
    explicacion: "Cualquier modificación debe documentarse formalmente para mantener actualizada la documentación técnica de la instalación."
  },
  {
    id: 7066,
    tema: 7,
    texto: "¿Qué diferencia existe entre reparación y modificación en una instalación?",
    opciones: [
      "No hay diferencia",
      "Reparación restaura lo existente; modificación cambia o amplía las características",
      "Reparación es siempre más cara",
      "Modificación es solo cambio de color"
    ],
    correctaTexto: "Reparación restaura lo existente; modificación cambia o amplía las características",
    explicacion: "La reparación simplemente devuelve a estado original; la modificación altera capacidades o características, requiriendo nuevo certificado."
  },
  {
    id: 7067,
    tema: 7,
    texto: "¿Cuál es el documento más importante de una instalación a largo plazo?",
    opciones: [
      "El recibo de pago",
      "La factura inicial",
      "El certificado de instalación y la documentación técnica actualizada",
      "El seguro del instalador"
    ],
    correctaTexto: "El certificado de instalación y la documentación técnica actualizada",
    explicacion: "El certificado y la documentación técnica son los documentos que acreditan la conformidad y permiten futuras intervenciones, siendo fundamentales durante toda la vida de la instalación."
  }
];
// Incluye 10 preguntas del test oficial

const TEMA_8_DATA = [
  // PREGUNTAS DEL TEST OFICIAL (8001-8010)
  {
    id: 8001,
    tema: 8,
    texto: "¿Cuál de las siguientes afirmaciones sobre las instalaciones en locales con baterías de acumuladores NO es correcta? (TEST OFICIAL)",
    opciones: [
      "El equipo eléctrico estará protegido contra los efectos de vapores desprendidos por el electrolito",
      "Las luminarias podrán ser de cualquier tipo de material",
      "Los acumuladores serán instalados de manera que se pueda realizar fácilmente el mantenimiento de cada elemento",
      "El suelo de los pasillos será eléctricamente aislante si el servicio es superior a 75 voltios"
    ],
    correctaTexto: "Las luminarias podrán ser de cualquier tipo de material",
    explicacion: "Las luminarias deben ser especiales, resistentes a vapores corrosivos y materiales ácidos desprendidos por los acumuladores, no de cualquier tipo."
  },
  {
    id: 8002,
    tema: 8,
    texto: "¿Qué tipo de alumbrado debe tener una duración de una hora y 5 lux? (TEST OFICIAL)",
    opciones: [
      "Alumbrado de zonas de alto riesgo",
      "Alumbrado ambiente",
      "Alumbrado de evacuación",
      "Alumbrado de emergencia"
    ],
    correctaTexto: "Alumbrado de evacuación",
    explicacion: "El alumbrado de evacuación debe mantener un nivel mínimo de 5 lux durante al menos 1 hora para permitir la salida segura del local en caso de fallo de alimentación."
  },
  {
    id: 8003,
    tema: 8,
    texto: "En los locales a temperaturas superiores a 50ºC: (TEST OFICIAL)",
    opciones: [
      "No están permitidos los conductores desnudos",
      "Las canalizaciones deben soportar hasta los 50ºC",
      "Son admisibles canalizaciones con conductores desnudos",
      "Los equipos tendrán un grado de protección mínimo"
    ],
    correctaTexto: "No están permitidos los conductores desnudos",
    explicacion: "En ambientes calientes, los conductores desnudos se degradan rápidamente y pueden causar cortocircuitos. Deben usarse conductores aislados con aislamiento especial para alta temperatura."
  },
  {
    id: 8004,
    tema: 8,
    texto: "En los locales húmedos, las cajas de conexión deben tener un grado de protección: (TEST OFICIAL)",
    opciones: [
      "IPX4",
      "IPX3",
      "IPX1",
      "IPX2"
    ],
    correctaTexto: "IPX4",
    explicacion: "El grado IPX4 protege contra proyecciones de agua desde todas las direcciones, siendo el mínimo requerido para locales húmedos donde hay riesgo de salpicaduras."
  },
  {
    id: 8005,
    tema: 8,
    texto: "La ITC-BT 28 corresponde a: (TEST OFICIAL)",
    opciones: [
      "Locales de pública concurrencia",
      "Piscinas y fuentes",
      "Ferias y stands",
      "Máquinas de elevación y transporte"
    ],
    correctaTexto: "Piscinas y fuentes",
    explicacion: "La ITC-BT 28 especifica los requisitos particulares para instalaciones en piscinas, fuentes y locales que contienen agua de manera permanente o frecuente."
  },
  {
    id: 8006,
    tema: 8,
    texto: "La instrucción técnica complementaria correspondiente a los locales de características especiales es: (TEST OFICIAL)",
    opciones: [
      "ITC-BT 28",
      "ITC-BT 30",
      "ITC-BT 35",
      "ITC-BT 29"
    ],
    correctaTexto: "ITC-BT 29",
    explicacion: "La ITC-BT 29 es la instrucción que regula las instalaciones en locales de características especiales como locales mojados, calientes, polvorientos, corrosivos, etc."
  },
  {
    id: 8007,
    tema: 8,
    texto: "Las instalaciones en locales con riesgo de corrosión: (TEST OFICIAL)",
    opciones: [
      "Cumplirán con las prescripciones señaladas para las instalaciones en locales mojados",
      "Deberán tener protegidos la parte exterior de los aparatos y canalizaciones",
      "Se realizan en fábricas de productos químicos o depósitos",
      "Todas las respuestas anteriores son correctas"
    ],
    correctaTexto: "Todas las respuestas anteriores son correctas",
    explicacion: "Las instalaciones en locales corrosivos deben cumplir prescripciones de mojado, proteger externamente equipos y canalizaciones, siendo típicas en industrias químicas y depósitos."
  },
  {
    id: 8008,
    tema: 8,
    texto: "Los servicios de seguridad: (TEST OFICIAL)",
    opciones: [
      "Tienen la misma alimentación que la instalación normal",
      "Debe tener una segunda fuente de alimentación",
      "No son necesarios en instalaciones de locales especiales",
      "No funcionan si se produce un corte de electricidad"
    ],
    correctaTexto: "Debe tener una segunda fuente de alimentación",
    explicacion: "Los servicios de seguridad (iluminación, equipos críticos) deben tener fuente autónoma para funcionar incluso durante fallos de la red principal."
  },
  {
    id: 8009,
    tema: 8,
    texto: "Suministro capaz de mantener un servicio mayor del 50% del suministro normal: (TEST OFICIAL)",
    opciones: [
      "Suministro duplicado",
      "Suministro de socorro",
      "Suministro de reserva",
      "Suministro de seguridad"
    ],
    correctaTexto: "Suministro de reserva",
    explicacion: "El suministro de reserva mantiene más del 50% de la potencia normal; el suministro de socorro mantiene solo servicios esenciales con potencia reducida."
  },
  {
    id: 8010,
    tema: 8,
    texto: "Uno de los locales de características especiales es: (TEST OFICIAL)",
    opciones: [
      "Locales de espectáculos",
      "Locales polvorientos sin riesgo de incendio",
      "Locales de usos sanitarios",
      "Ninguna es correcta"
    ],
    correctaTexto: "Locales de usos sanitarios",
    explicacion: "Los locales sanitarios (baños, duchas, hospitales) son clasificados como locales especiales por los riesgos eléctricos inherentes a la combinación de agua y equipos eléctricos."
  },

  // PREGUNTAS COMPLEMENTARIAS (8011-8067)
  {
    id: 8011,
    tema: 8,
    texto: "¿Cuál es la clasificación de locales según la ITC-BT 29?",
    opciones: [
      "Solo por temperatura ambiente",
      "Por características especiales como humedad, temperatura, corrosión, riesgo de explosión",
      "Solo por tipo de actividad económica",
      "No existe clasificación formal"
    ],
    correctaTexto: "Por características especiales como humedad, temperatura, corrosión, riesgo de explosión",
    explicacion: "La ITC-BT 29 clasifica locales según factores de riesgo ambiental que requieren prescripciones especiales en la instalación eléctrica."
  },
  {
    id: 8012,
    tema: 8,
    texto: "¿Qué se entiende por 'local mojado'?",
    opciones: [
      "Un local donde llueve",
      "Un local donde hay agua en cantidad o permanentemente con riesgo de mojado general",
      "Un local con condensación ocasional",
      "Un local cercano al mar"
    ],
    correctaTexto: "Un local donde hay agua en cantidad o permanentemente con riesgo de mojado general",
    explicacion: "Los locales mojados incluyen baños, cocinas, lavanderías y otros espacios donde el agua es un elemento presente o común."
  },
  {
    id: 8013,
    tema: 8,
    texto: "¿Cuál es el grado de protección IP mínimo requerido en locales mojados?",
    opciones: [
      "IP20",
      "IP44",
      "IP65",
      "IP54"
    ],
    correctaTexto: "IP44",
    explicacion: "IP44 protege contra proyecciones de agua desde todos los ángulos, siendo el mínimo para locales donde hay contacto frecuente con agua."
  },
  {
    id: 8014,
    tema: 8,
    texto: "¿Qué requerimiento especial tienen las tuberías metálicas en locales mojados?",
    opciones: [
      "Pueden ser cualquier tipo de metal",
      "Deben estar aisladas eléctricamente de masas metálicas contiguas",
      "Deben pintarse periódicamente",
      "Solo deben estar en pisos elevados"
    ],
    correctaTexto: "Deben estar aisladas eléctricamente de masas metálicas contiguas",
    explicacion: "En locales mojados, las tuberías metálicas pueden facilitar accesos peligrosos a la corriente eléctrica, por lo que deben estar aisladas."
  },
  {
    id: 8015,
    tema: 8,
    texto: "¿Cuál es la distancia mínima entre puntos de toma de corriente y fuentes de agua en un baño?",
    opciones: [
      "0.5 metros",
      "1 metro",
      "1.5 metros",
      "2 metros"
    ],
    correctaTexto: "2 metros",
    explicacion: "El REBT establece una distancia mínima de 2 metros en baños desde bañeras/duchas hasta tomas de corriente para reducir riesgo de electrocución."
  },
  {
    id: 8016,
    tema: 8,
    texto: "¿Qué significa 'local caliente' en la clasificación de locales especiales?",
    opciones: [
      "Un local con calefacción normal",
      "Un local donde la temperatura ambiente supera regularmente 35ºC",
      "Un local donde hay equipos que emiten calor",
      "Un local expuesto al sol directo"
    ],
    correctaTexto: "Un local donde la temperatura ambiente supera regularmente 35ºC",
    explicacion: "Los locales calientes requieren especificaciones particulares de aislamiento de conductores y disipación térmica en canalizaciones."
  },
  {
    id: 8017,
    tema: 8,
    texto: "¿Cuál es la sección mínima de conductores en locales muy calientes (>50ºC)?",
    opciones: [
      "1.5 mm²",
      "2.5 mm²",
      "4 mm²",
      "6 mm²"
    ],
    correctaTexto: "2.5 mm²",
    explicacion: "En locales muy calientes, se requiere una sección mínima de 2.5 mm² para garantizar resistencia mecánica y térmica del aislamiento."
  },
  {
    id: 8018,
    tema: 8,
    texto: "¿Qué tipos de aislamiento de conductores se permiten en locales a más de 50ºC?",
    opciones: [
      "Cualquier aislamiento de PVC convencional",
      "Aislamiento especial de mayor resistencia térmica como silicona o caucho",
      "Solo conductores desnudos",
      "Aislamiento de papel parafinado"
    ],
    correctaTexto: "Aislamiento especial de mayor resistencia térmica como silicona o caucho",
    explicacion: "El aislamiento convencional pierde propiedades a temperaturas altas, por lo que se requieren materiales con temperaturas de servicio superiores."
  },
  {
    id: 8019,
    tema: 8,
    texto: "¿Qué es un 'local polvoriento'?",
    opciones: [
      "Un local simplemente sucio",
      "Un local donde hay polvo en suspensión permanentemente que puede formar atmósfera explosiva",
      "Un local donde se limpia con polvo",
      "Un local al aire libre"
    ],
    correctaTexto: "Un local donde hay polvo en suspensión permanentemente que puede formar atmósfera explosiva",
    explicacion: "Los locales polvorientos presentan riesgo de explosión cuando el polvo en suspensión entra en contacto con fuentes de ignición eléctrica."
  },
  {
    id: 8020,
    tema: 8,
    texto: "¿Qué requerimiento especial tienen las luminarias en locales polvorientos?",
    opciones: [
      "Pueden ser de cualquier tipo",
      "Deben estar protegidas y con grado IP mínimo para evitar entrada de polvo",
      "No se permiten luminarias",
      "Deben estar en tuberías metálicas"
    ],
    correctaTexto: "Deben estar protegidas y con grado IP mínimo para evitar entrada de polvo",
    explicacion: "Las luminarias pueden ser fuentes de ignición, por lo que deben estar completamente protegidas contra entrada de polvo."
  },
  {
    id: 8021,
    tema: 8,
    texto: "¿Cuál es el grado de protección mínimo en locales polvorientos sin riesgo de explosión?",
    opciones: [
      "IP20",
      "IP44",
      "IP54",
      "IP65"
    ],
    correctaTexto: "IP54",
    explicacion: "IP54 protege contra polvo (no es hermético pero previene entrada de polvo en cantidad dañina) y proyecciones de agua, adecuado para locales con polvo."
  },
  {
    id: 8022,
    tema: 8,
    texto: "¿Qué es la ITC-BT 30?",
    opciones: [
      "Instalaciones en locales mojados",
      "Instalaciones en piscinas",
      "Instalaciones quirúrgicas y sanitarias de alto riesgo",
      "Instalaciones en talleres"
    ],
    correctaTexto: "Instalaciones quirúrgicas y sanitarias de alto riesgo",
    explicacion: "La ITC-BT 30 especifica requisitos particulares para quirófanos y locales donde los pacientes están conectados a equipos eléctricos críticos."
  },
  {
    id: 8023,
    tema: 8,
    texto: "¿Cuál es la ITC-BT 27?",
    opciones: [
      "Locales mojados",
      "Estaciones de servicio con surtidores de combustible",
      "Piscinas",
      "Salas de cine"
    ],
    correctaTexto: "Estaciones de servicio con surtidores de combustible",
    explicacion: "La ITC-BT 27 regula instalaciones en gasolineras y estaciones de servicio donde hay riesgo de atmósfera explosiva por vapores de combustible."
  },
  {
    id: 8024,
    tema: 8,
    texto: "¿Cuál es la ITC-BT 31?",
    opciones: [
      "Locales de espectáculos",
      "Ferias y stands",
      "Instalaciones en invernaderos",
      "Locales de pública concurrencia"
    ],
    correctaTexto: "Ferias y stands",
    explicacion: "La ITC-BT 31 establece requisitos para instalaciones temporales en ferias, mercados y stands comerciales."
  },
  {
    id: 8025,
    tema: 8,
    texto: "¿Qué es un 'sistema de puesta a tierra con conductores en tubería de agua'?",
    opciones: [
      "Un sistema prohibido en todos los casos",
      "Un sistema aceptable en locales secos pero no en locales mojados",
      "Un sistema que no se considera seguro en locales mojados o corrosivos",
      "Un sistema recomendado para máxima efectividad"
    ],
    correctaTexto: "Un sistema que no se considera seguro en locales mojados o corrosivos",
    explicacion: "En locales con agua o corrosión, el contacto entre el conductor de tierra y la tubería puede degradarse, perdiendo efectividad del sistema de protección."
  },
  {
    id: 8026,
    tema: 8,
    texto: "¿Cuál es el grado de protección requerido en piscinas cubiertas?",
    opciones: [
      "IP22",
      "IP44",
      "IP65",
      "IP54"
    ],
    correctaTexto: "IP65",
    explicacion: "Las piscinas cubiertas tienen alta humedad y ambientes agresivos con cloro, requiriendo grado IP65 (hermético al polvo y a chorros de agua)."
  },
  {
    id: 8027,
    tema: 8,
    texto: "¿Qué es un 'local con riesgo de incendio o explosión'?",
    opciones: [
      "Un local que solo corre riesgo durante incendios",
      "Un local donde se almacenan o usan sustancias inflamables que pueden formar atmósferas explosivas",
      "Cualquier local con materiales combustibles",
      "Un local sin sistemas de protección contra incendios"
    ],
    correctaTexto: "Un local donde se almacenan o usan sustancias inflamables que pueden formar atmósferas explosivas",
    explicacion: "Los locales ATEX (atmósferas explosivas) presentan riesgo cuando sustancias inflamables en suspensión pueden entrar en contacto con fuentes de ignición eléctrica."
  },
  {
    id: 8028,
    tema: 8,
    texto: "¿Cuál es la ITC-BT 29 subcapítulo 2.1?",
    opciones: [
      "Locales mojados",
      "Locales con riesgo de corrosión",
      "Locales calientes",
      "Locales polvorientos"
    ],
    correctaTexto: "Locales con riesgo de corrosión",
    explicacion: "La ITC-BT 29.2.1 especifica requisitos para instalaciones en ambientes corrosivos como fábricas químicas, depósitos ácidos y salinas."
  },
  {
    id: 8029,
    tema: 8,
    texto: "¿Qué significan las siglas ATEX?",
    opciones: [
      "Atención a Temperaturas Extremas",
      "Atmósferas Explosivas",
      "Aislamiento Térmico Especial",
      "Aparatos Técnicos Especiales"
    ],
    correctaTexto: "Atmósferas Explosivas",
    explicacion: "ATEX es la directiva europea (94/9/CE) que regula equipos y sistemas de protección en lugares donde pueden existir atmósferas explosivas."
  },
  {
    id: 8030,
    tema: 8,
    texto: "¿Cuál es la clasificación de zonas ATEX?",
    opciones: [
      "Solo zona 0 y zona 1",
      "Zona 0 (presencia continua), zona 1 (presencia ocasional) y zona 2 (presencia improbable)",
      "Zona A y zona B",
      "No existe clasificación formal"
    ],
    correctaTexto: "Zona 0 (presencia continua), zona 1 (presencia ocasional) y zona 2 (presencia improbable)",
    explicacion: "La clasificación ATEX distingue tres niveles según la probabilidad de formación de atmósferas explosivas, determinando los equipos permitidos."
  },
  {
    id: 8031,
    tema: 8,
    texto: "¿Qué equipos se pueden instalar en zona ATEX 0?",
    opciones: [
      "Equipos normales de baja tensión",
      "Solo equipos de grupo I con categoría 1G",
      "Solo equipos de grupo I con categoría 1G o superior",
      "Cualquier equipo certificado ATEX"
    ],
    correctaTexto: "Solo equipos de grupo I con categoría 1G o superior",
    explicacion: "La zona 0 (presencia continua) es la más exigente, permitiendo solo equipos de grupo I (minas de carbón) con máxima categoría de seguridad."
  },
  {
    id: 8032,
    tema: 8,
    texto: "¿Qué es la 'separación de circuitos' en locales con riesgo de incendio?",
    opciones: [
      "Usar diferentes colores de conductores",
      "Separar físicamente circuitos de diferentes servicios para limitar riesgo de propagación de defectos",
      "Colocar cada circuito en diferente tubería",
      "Usar conectores de seguridad"
    ],
    correctaTexto: "Separar físicamente circuitos de diferentes servicios para limitar riesgo de propagación de defectos",
    explicacion: "La separación de circuitos impide que un fallo eléctrico en un circuito afecte a servicios esenciales como la evacuación o los servicios de seguridad."
  },
  {
    id: 8033,
    tema: 8,
    texto: "¿Qué es un 'circuito de seguridad'?",
    opciones: [
      "Cualquier circuito con protección RCD",
      "Un circuito dedicado exclusivamente a servicios esenciales como iluminación de emergencia",
      "Un circuito con disyuntor especial",
      "Un circuito sin protecciones"
    ],
    correctaTexto: "Un circuito dedicado exclusivamente a servicios esenciales como iluminación de emergencia",
    explicacion: "Los circuitos de seguridad no comparten canalización con circuitos ordinarios, asegurando que fallos comunes no afecten servicios críticos."
  },
  {
    id: 8034,
    tema: 8,
    texto: "¿Cuál es la duración mínima requerida para alumbrado de emergencia?",
    opciones: [
      "15 minutos",
      "30 minutos",
      "1 hora",
      "2 horas"
    ],
    correctaTexto: "1 hora",
    explicacion: "El alumbrado de emergencia debe permanecer activo durante mínimo 1 hora con al menos 5 lux de iluminación para permitir evacuación segura."
  },
  {
    id: 8035,
    tema: 8,
    texto: "¿Qué es el 'alumbrado de seguridad'?",
    opciones: [
      "Cualquier alumbrado que proteja contra accidentes",
      "El que ilumina rutas de evacuación y puntos de riesgo durante fallo de alimentación normal",
      "Alumbrado adicional en zonas peligrosas",
      "Iluminación exterior de la instalación"
    ],
    correctaTexto: "El que ilumina rutas de evacuación y puntos de riesgo durante fallo de alimentación normal",
    explicacion: "El alumbrado de seguridad incluye tanto alumbrado de evacuación como el necesario para mantener operación de equipos de seguridad."
  },
  {
    id: 8036,
    tema: 8,
    texto: "¿Cuántas fuentes de alimentación independientes deben tener los servicios de seguridad?",
    opciones: [
      "Una sola es suficiente si es de calidad",
      "Mínimo dos fuentes independientes",
      "Tres fuentes para máxima redundancia",
      "Una fuente es obligatoria, la segunda opcional"
    ],
    correctaTexto: "Mínimo dos fuentes independientes",
    explicacion: "Los servicios de seguridad requieren redundancia: si falla la fuente principal, la fuente de reserva o batería asegura continuidad."
  },
  {
    id: 8037,
    tema: 8,
    texto: "¿Qué es una 'batería de emergencia'?",
    opciones: [
      "Una batería normal de respaldo",
      "Un sistema de acumuladores dimensionado para mantener servicios críticos durante tiempo especificado (mínimo 1 hora)",
      "Solo para equipos de iluminación",
      "Una medida opcional de seguridad"
    ],
    correctaTexto: "Un sistema de acumuladores dimensionado para mantener servicios críticos durante tiempo especificado (mínimo 1 hora)",
    explicacion: "Las baterías de emergencia se dimensionan según consumo de servicios críticos para garantizar funcionamiento mínimo durante el tiempo reglamentario."
  },
  {
    id: 8038,
    tema: 8,
    texto: "¿Cuál es el procedimiento para verificar una instalación en local con riesgo de explosión?",
    opciones: [
      "El mismo que una instalación normal",
      "Incluye inspección visual especial y ensayos según ATEX, verificando grado de seguridad de todos los equipos",
      "Sin ensayos especiales, solo certificado",
      "No requiere verificación adicional"
    ],
    correctaTexto: "Incluye inspección visual especial y ensayos según ATEX, verificando grado de seguridad de todos los equipos",
    explicacion: "Las instalaciones ATEX requieren verificaciones especiales del fabricante/organismos autorizados para certificar seguridad."
  },
  {
    id: 8039,
    tema: 8,
    texto: "¿Qué es el 'marcado ATEX' en un equipo?",
    opciones: [
      "Un simple distintivo informativo",
      "Una declaración legal de que el equipo cumple directivas ATEX y puede usarse en atmósferas explosivas",
      "Un símbolo estético sin validez técnica",
      "Una marca voluntaria"
    ],
    correctaTexto: "Una declaración legal de que el equipo cumple directivas ATEX y puede usarse en atmósferas explosivas",
    explicacion: "El marcado ATEX es obligatorio y certifica que el equipo ha sido diseñado y probado para funcionar seguramente en atmósferas explosivas."
  },
  {
    id: 8040,
    tema: 8,
    texto: "¿Cuál es la ITC-BT 32?",
    opciones: [
      "Locales de pública concurrencia",
      "Máquinas de elevación y transporte",
      "Instalaciones de invernaderos",
      "Talleres de reparación"
    ],
    correctaTexto: "Máquinas de elevación y transporte",
    explicacion: "La ITC-BT 32 regula instalaciones eléctricas en grúas, ascensores y otros equipos de elevación y transporte."
  },
  {
    id: 8041,
    tema: 8,
    texto: "¿Qué requisitos especiales tienen los ascensores eléctricos?",
    opciones: [
      "Los mismos que viviendas",
      "Circuitos de seguridad independientes, sistemas de parada de emergencia y alumbrado de emergencia en cabina",
      "Ninguno especial, son equipos normales",
      "Solo requisitos de confort"
    ],
    correctaTexto: "Circuitos de seguridad independientes, sistemas de parada de emergencia y alumbrado de emergencia en cabina",
    explicacion: "Los ascensores son máquinas especiales con riesgos particulares que requieren sistemas de seguridad redundantes y circuitos dedicados."
  },
  {
    id: 8042,
    tema: 8,
    texto: "¿Cuál es la ITC-BT 40?",
    opciones: [
      "Locales con riesgo de incendio y explosión",
      "Locales de públic concurrencia",
      "Instalaciones con fines especiales",
      "Máquinas elevadoras"
    ],
    correctaTexto: "Locales con riesgo de incendio y explosión",
    explicacion: "La ITC-BT 40 especifica requisitos para instalaciones en locales donde hay sustancias inflamables o atmósferas explosivas."
  },
  {
    id: 8043,
    tema: 8,
    texto: "¿Qué es el 'aislamiento de seguridad' en locales especiales?",
    opciones: [
      "Cualquier aislamiento de mayor espesor",
      "Un sistema de transformador de seguridad que aisla el circuito de la fuente principal",
      "Aislamiento doble de los conductores",
      "Un concepto solo teórico"
    ],
    correctaTexto: "Un sistema de transformador de seguridad que aisla el circuito de la fuente principal",
    explicacion: "El aislamiento de seguridad mediante transformador de separación de circuitos permite usar tensiones menores en zonas críticas sin riesgo de acceso a la red."
  },
  {
    id: 8044,
    tema: 8,
    texto: "¿Cuál es la tensión de muy baja tensión de seguridad (MBTS)?",
    opciones: [
      "Máximo 120 V en corriente continua",
      "Máximo 50 V en CA y 120 V en CC",
      "Máximo 25 V en ambos casos",
      "No existe límite definido"
    ],
    correctaTexto: "Máximo 50 V en CA y 120 V en CC",
    explicacion: "La MBTS se define como 50 V CA o 120 V CC, siendo considerada segura contra riesgo de electrocución incluso en contacto directo."
  },
  {
    id: 8045,
    tema: 8,
    texto: "¿Qué equipamiento de protección es obligatorio en baños según ITC-BT 30?",
    opciones: [
      "Solo diferenciales convencionales",
      "Diferenciales de alta sensibilidad (máximo 30 mA) en zonas cercanas a agua",
      "No es obligatorio ninguno especial",
      "Solo protección térmica"
    ],
    correctaTexto: "Diferenciales de alta sensibilidad (máximo 30 mA) en zonas cercanas a agua",
    explicacion: "En baños y zonas de riesgo elevado, los dispositivos diferenciales deben actuar con corrientes mínimas (30 mA o menos) para proteger contra contactos directos."
  },
  {
    id: 8046,
    tema: 8,
    texto: "¿Cuál es la profundidad máxima de instalación de empotramientos en locales corrosivos?",
    opciones: [
      "La mínima posible",
      "Mínimo 10 mm de profundidad desde la superficie",
      "No debe haber empotramientos en locales corrosivos",
      "No hay límite especificado"
    ],
    correctaTexto: "No debe haber empotramientos en locales corrosivos",
    explicacion: "En locales corrosivos, los empotramientos facilitan acumulación de humedad y corrosión. Preferiblemente las canalizaciones deben ir en superficie y protegidas."
  },
  {
    id: 8047,
    tema: 8,
    texto: "¿Qué revestimiento especial requieren canalizaciones en locales con riesgo de explosión?",
    opciones: [
      "Ninguno especial, cualquier canalización válida",
      "Revestimiento antiestático para prevenir acumulación de cargas eléctricas",
      "Revestimiento de PVC especial",
      "Pintura conductora"
    ],
    correctaTexto: "Revestimiento antiestático para prevenir acumulación de cargas eléctricas",
    explicacion: "En zonas ATEX, las canalizaciones deben ser conductivas para evitar acumulación de cargas estáticas que podrían generar descargas."
  },
  {
    id: 8048,
    tema: 8,
    texto: "¿Cuál es el grado de protección mínimo en locales con riesgo de corrosión?",
    opciones: [
      "IP22",
      "IP44",
      "IP65",
      "IP54"
    ],
    correctaTexto: "IP54",
    explicacion: "IP54 protege contra polvo (corrosión por aire) y proyecciones de agua, siendo el grado mínimo para ambientes corrosivos."
  },
  {
    id: 8049,
    tema: 8,
    texto: "¿Qué es una 'inspección periódica' en instalaciones de locales especiales?",
    opciones: [
      "Solo una revisión visual anual",
      "Un control más frecuente que el normal, con ensayos completos según la naturaleza del riesgo",
      "No es diferente a instalaciones normales",
      "Es opcional"
    ],
    correctaTexto: "Un control más frecuente que el normal, con ensayos completos según la naturaleza del riesgo",
    explicacion: "Las instalaciones en locales especiales requieren inspecciones periódicas más frecuentes y detalladas que las normales."
  },
  {
    id: 8050,
    tema: 8,
    texto: "¿Cuál es la periodicidad de inspección en piscinas?",
    opciones: [
      "Anual",
      "Cada 2 años",
      "Cada 5 años como mínimo, más frecuente si hay deficiencias previas",
      "Sin periodicidad obligatoria"
    ],
    correctaTexto: "Cada 5 años como mínimo, más frecuente si hay deficiencias previas",
    explicacion: "Las piscinas requieren inspecciones periódicas que pueden ser más frecuentes según el estado y tipo de instalación."
  },
  {
    id: 8051,
    tema: 8,
    texto: "¿Qué precaución debe tomarse con masas metálicas en locales mojados?",
    opciones: [
      "Ninguna especial, son aislantes",
      "Deben estar conectadas a tierra para evitar potencial peligroso en caso de defecto",
      "Deben estar recubiertas de plástico",
      "No pueden existir masas metálicas"
    ],
    correctaTexto: "Deben estar conectadas a tierra para evitar potencial peligroso en caso de defecto",
    explicacion: "En locales mojados, cualquier masa metálica puede quedar bajo tensión en caso de defecto, por lo que debe estar puesta a tierra."
  },
  {
    id: 8052,
    tema: 8,
    texto: "¿Qué significa 'zona 1' en clasificación ATEX?",
    opciones: [
      "Zona más segura sin riesgos",
      "Zona donde atmosfera explosiva es probable ocasionalmente pero no de forma permanente",
      "Zona más peligrosa",
      "Zona sin regulación especial"
    ],
    correctaTexto: "Zona donde atmosfera explosiva es probable ocasionalmente pero no de forma permanente",
    explicacion: "Zona 1 es intermedia: requiere equipos grupo II categoría 2G para asegurar seguridad ante presencia ocasional de atmósfera explosiva."
  },
  {
    id: 8053,
    tema: 8,
    texto: "¿Qué equipos se pueden instalar en zona ATEX 2?",
    opciones: [
      "Solo equipos ATEX de máxima seguridad",
      "Equipos normales de baja tensión",
      "Equipos grupo II categoría 3G certificados ATEX",
      "Ninguno"
    ],
    correctaTexto: "Equipos grupo II categoría 3G certificados ATEX",
    explicacion: "Zona 2 es de menor riesgo (presencia improbable), permitiendo equipos categoría 3G con menos restricciones que zonas anteriores."
  },
  {
    id: 8054,
    tema: 8,
    texto: "¿Cuál es la diferencia entre protección 'contra explosión' y 'de seguridad'?",
    opciones: [
      "No hay diferencia",
      "Contra explosión impide la explosión; de seguridad contiene la explosión si ocurre",
      "Solo existe una de las dos",
      "Son términos obsoletos"
    ],
    correctaTexto: "Contra explosión impide la explosión; de seguridad contiene la explosión si ocurre",
    explicacion: "Las medidas contra explosión previenen su ocurrencia; las de seguridad limitan daños si ocurre a pesar de las medidas preventivas."
  },
  {
    id: 8055,
    tema: 8,
    texto: "¿Qué es un 'local de pública concurrencia'?",
    opciones: [
      "Un local donde solo entra público autorizado",
      "Un local donde accede público en general para realizar actividades (cines, restaurantes, oficinas)",
      "Un local privado de uso exclusivo",
      "Un espacio al aire libre"
    ],
    correctaTexto: "Un local donde accede público en general para realizar actividades (cines, restaurantes, oficinas)",
    explicacion: "Los locales de pública concurrencia requieren medidas especiales de seguridad eléctrica por el riesgo a personas no especializadas."
  },
  {
    id: 8056,
    tema: 8,
    texto: "¿Cuál es la ITC-BT 35?",
    opciones: [
      "Piscinas",
      "Ascensores",
      "Locales de pública concurrencia",
      "Instalaciones de riego"
    ],
    correctaTexto: "Locales de pública concurrencia",
    explicacion: "La ITC-BT 35 regula instalaciones eléctricas en locales donde accede público como restaurantes, cines, tiendas y oficinas."
  },
  {
    id: 8057,
    tema: 8,
    texto: "¿Qué requisito especial tiene el alumbrado en locales de pública concurrencia?",
    opciones: [
      "Puede faltar durante periodos cortos",
      "Debe incluir alumbrado de seguridad de emergencia para evacuación",
      "No requiere especificaciones especiales",
      "Solo necesita luz natural"
    ],
    correctaTexto: "Debe incluir alumbrado de seguridad de emergencia para evacuación",
    explicacion: "Los locales de pública concurrencia requieren iluminación de emergencia para permitir evacuación segura en caso de fallo de la red."
  },
  {
    id: 8058,
    tema: 8,
    texto: "¿Cuál es la sección mínima de conductores en circuitos de iluminación de seguridad?",
    opciones: [
      "1 mm²",
      "1.5 mm²",
      "2.5 mm²",
      "4 mm²"
    ],
    correctaTexto: "1.5 mm²",
    explicacion: "Los circuitos de seguridad requieren sección mínima de 1.5 mm² para asegurar continuidad ante corrientes de defecto."
  },
  {
    id: 8059,
    tema: 8,
    texto: "¿Qué es una 'fuente de alimentación de reserva' en servicios de seguridad?",
    opciones: [
      "Una batería pequeña de refuerzo",
      "Una fuente capaz de mantener entre 50-75% de la carga normal durante el tiempo especificado",
      "Una conexión a la red municipal",
      "Una medida opcional"
    ],
    correctaTexto: "Una fuente capaz de mantener entre 50-75% de la carga normal durante el tiempo especificado",
    explicacion: "La fuente de reserva reduce capacidad pero mantiene operación básica de servicios esenciales durante tiempo reglamentario."
  },
  {
    id: 8060,
    tema: 8,
    texto: "¿Qué es una 'batería de acumuladores para servicios de seguridad'?",
    opciones: [
      "Una batería de coche normal",
      "Un sistema dimensionado específicamente para mantener los servicios de seguridad durante 1 hora mínimo",
      "Una batería sin especificaciones particulares",
      "Un componente opcional"
    ],
    correctaTexto: "Un sistema dimensionado específicamente para mantener los servicios de seguridad durante 1 hora mínimo",
    explicacion: "Las baterías de seguridad se dimensionan según el consumo real de iluminación de emergencia y servicios críticos durante el tiempo requerido."
  },
  {
    id: 8061,
    tema: 8,
    texto: "¿Cuál debe ser la tensión de salida de una batería de emergencia?",
    opciones: [
      "Cualquier valor",
      "Debe mantener 90% de la tensión nominal durante todo el período de funcionamiento",
      "No tiene límites",
      "Puede variar libremente"
    ],
    correctaTexto: "Debe mantener 90% de la tensión nominal durante todo el período de funcionamiento",
    explicacion: "La tensión debe ser estable para asegurar funcionamiento correcto de equipos; una caída excesiva puede afectar iluminación de emergencia."
  },
  {
    id: 8062,
    tema: 8,
    texto: "¿Qué periodicidad de mantenimiento requieren las baterías de emergencia?",
    opciones: [
      "Ninguno especial",
      "Pruebas de descarga bajo carga cada 6 meses y mantenimiento anual",
      "Solo cuando visiblemente dañadas",
      "Cada 5 años"
    ],
    correctaTexto: "Pruebas de descarga bajo carga cada 6 meses y mantenimiento anual",
    explicacion: "Las baterías de emergencia requieren mantenimiento periódico para asegurar su disponibilidad en caso de necesidad."
  },
  {
    id: 8063,
    tema: 8,
    texto: "¿Qué documento debe acompañar a una instalación en local especial?",
    opciones: [
      "Solo el certificado general",
      "Certificado especial indicando cumplimiento de ITC particular y resultados de ensayos adicionales requeridos",
      "Ninguno diferente al de instalación normal",
      "Solo el presupuesto"
    ],
    correctaTexto: "Certificado especial indicando cumplimiento de ITC particular y resultados de ensayos adicionales requeridos",
    explicacion: "Las instalaciones en locales especiales requieren documentación que acredite cumplimiento de ITC específica y ensayos particulares."
  },
  {
    id: 8064,
    tema: 8,
    texto: "¿Quién debe realizar la inspección inicial en una instalación de local especial?",
    opciones: [
      "Solo el instalador que ejecutó la obra",
      "Un instalador autorizado o un organismo de control acreditado",
      "Cualquier persona técnicamente cualificada",
      "La administración únicamente"
    ],
    correctaTexto: "Un instalador autorizado o un organismo de control acreditado",
    explicacion: "Las instalaciones especiales requieren verificación por personas o entidades certificadas para garantizar cumplimiento riguroso."
  },
  {
    id: 8065,
    tema: 8,
    texto: "¿Cuál es el certificado requerido para ejecutar instalaciones ATEX?",
    opciones: [
      "Cualquier certificado de instalador de baja tensión",
      "Certificado especial ATEX de categoría 3 como mínimo",
      "No es obligatorio certificado especial",
      "Solo certificado de empresa"
    ],
    correctaTexto: "Certificado especial ATEX de categoría 3 como mínimo",
    explicacion: "Las instalaciones ATEX requieren que el instalador tenga formación y certificación específica en reglamentación de atmósferas explosivas."
  },
  {
    id: 8066,
    tema: 8,
    texto: "¿Qué es una 'deficiencia importante' en local especial?",
    opciones: [
      "Solo un problema cosmético",
      "Cualquier incumplimiento de la ITC particular que cree riesgo inmediato para seguridad",
      "Un problema que puede esperar reparación",
      "No es concepto formal"
    ],
    correctaTexto: "Cualquier incumplimiento de la ITC particular que cree riesgo inmediato para seguridad",
    explicacion: "En locales especiales, las deficiencias son más críticas por la naturaleza de los riesgos, siendo cualquier incumplimiento de la ITC considerado importante."
  },
  {
    id: 8067,
    tema: 8,
    texto: "¿Cuál es la responsabilidad del propietario sobre la documentación de una instalación en local especial?",
    opciones: [
      "No tiene responsabilidad",
      "Conservarla durante toda la vida de la instalación para inspecciones y auditorías",
      "Entregarla solo si la administración la solicita",
      "Destruirla después de 1 año"
    ],
    correctaTexto: "Conservarla durante toda la vida de la instalación para inspecciones y auditorías",
    explicacion: "La documentación de cumplimiento de ITC en locales especiales es crítica para demostrar seguridad continua a reguladores y auditores."
  }
];
// Incluye 10 preguntas del test oficial

const TEMA_9_DATA = [
  // PREGUNTAS DEL TEST OFICIAL (9001-9010)
  {
    id: 9001,
    tema: 9,
    texto: "¿A qué tipo de avería corresponde la solución de comprobar fusibles y conexiones? (TEST OFICIAL)",
    opciones: [
      "Interrupción de una fase por corrosión galvánica en instalaciones trifásicas",
      "Interrupción de una de las fases de un motor trifásico",
      "Alta caída de tensión en la línea de alimentación de un motor monofásico",
      "Mala selectividad en 2 magnetotérmicos"
    ],
    correctaTexto: "Interrupción de una de las fases de un motor trifásico",
    explicacion: "La interrupción de una fase causa funcionamiento anómalo del motor trifásico; comprobar fusibles y conexiones ayuda a identificar si hay cortes en la fase interrumpida."
  },
  {
    id: 9002,
    tema: 9,
    texto: "¿Cómo comprobamos la intensidad de disparo de los diferenciales? (TEST OFICIAL)",
    opciones: [
      "Usamos una pinza amperimétrica en los cuadros de distribución y debe coincidir la corriente de entrada y salida",
      "Conectamos un comprobador a una base de enchufe con la instalación en funcionamiento",
      "A través de un medidor de aislamiento que nos da una tensión continua de ensayo de la tensión nominal, sin tensión de alimentación",
      "A través de un telurómetro con las 2 picas auxiliares"
    ],
    correctaTexto: "Usamos una pinza amperimétrica en los cuadros de distribución y debe coincidir la corriente de entrada y salida",
    explicacion: "La pinza amperimétrica verifica que la corriente que entra al diferencial es igual a la que sale, lo que confirma que el dispositivo no está detectando fugas a tierra."
  },
  {
    id: 9003,
    tema: 9,
    texto: "¿Cuál de las siguientes operaciones de mantenimiento NO corresponden al mantenimiento preventivo? (TEST OFICIAL)",
    opciones: [
      "Comprobar la tensión de la red de alimentación",
      "Identificar las canalizaciones y sustituirla o repararla",
      "Comprobar el reglaje de los dispositivos de protección",
      "Revisar el apriete de toda la tornillería"
    ],
    correctaTexto: "Identificar las canalizaciones y sustituirla o repararla",
    explicacion: "La sustitución o reparación de canalizaciones es una acción correctiva de mantenimiento reactivo, no preventivo. El preventivo busca detectar problemas antes de que causen fallos."
  },
  {
    id: 9004,
    tema: 9,
    texto: "¿Para qué se ejecutan funciones de mantenimiento? (TEST OFICIAL)",
    opciones: [
      "Para reparar problemas en las instalaciones eléctricas",
      "Para evitar problemas graves y repentinos en instalaciones",
      "Para lograr problemas graves y repentinos en instalaciones",
      "Ninguna es correcta"
    ],
    correctaTexto: "Para evitar problemas graves y repentinos en instalaciones",
    explicacion: "El mantenimiento es preventivo: busca identificar y corregir anomalías menores antes de que causen fallos graves que interrumpan servicios."
  },
  {
    id: 9005,
    tema: 9,
    texto: "¿Qué medida consiste en medir la corriente de fuga a través del aislamiento cuando se le aplica una tensión de 1500 V? (TEST OFICIAL)",
    opciones: [
      "Medida de la resistencia de aislamiento de los conductores",
      "Medida de la continuidad de los conductores de protección",
      "Medida de las corrientes de fuga",
      "Medida de la rigidez dieléctrica"
    ],
    correctaTexto: "Medida de las corrientes de fuga",
    explicacion: "Las corrientes de fuga se miden aplicando tensión (usualmente 1500 V CC) entre conductores y tierra, midiendo la corriente que atraviesa el aislamiento defectuoso."
  },
  {
    id: 9006,
    tema: 9,
    texto: "Cuando comprobamos que no hay defectos, cortes u omisiones en los conductores durante la instalación, estamos realizando una medida: (TEST OFICIAL)",
    opciones: [
      "De las corrientes de fuga",
      "De la resistencia de aislamiento de los conductores",
      "De continuidad de los conductores de protección",
      "De la rigidez dieléctrica"
    ],
    correctaTexto: "De continuidad de los conductores de protección",
    explicacion: "La continuidad verifica que el circuito de protección (tierra) está completo sin interrupciones, usando óhmetro a baja tensión."
  },
  {
    id: 9007,
    tema: 9,
    texto: "Cuando el síntoma de una avería es el disparo del magnetotérmico de un circuito: (TEST OFICIAL)",
    opciones: [
      "Se trata de una sobrecarga o cortocircuito",
      "Se trata de que falsean sus conexiones o no está protegida su intensidad nominal",
      "Es un contacto directo o indirecto",
      "Ninguna de las anteriores es correcta"
    ],
    correctaTexto: "Se trata de una sobrecarga o cortocircuito",
    explicacion: "El magnetotérmico dispara por sobrecarga (consumo excesivo) o cortocircuito (contacto entre fases). El disparo es el funcionamiento correcto del dispositivo."
  },
  {
    id: 9008,
    tema: 9,
    texto: "El mantenimiento que trata de detectar posibles averías que se pueden dar en el sistema antes de que sucedan es: (TEST OFICIAL)",
    opciones: [
      "Mantenimiento proactivo",
      "Mantenimiento predictivo",
      "Mantenimiento reactivo",
      "Mantenimiento preventivo"
    ],
    correctaTexto: "Mantenimiento predictivo",
    explicacion: "El mantenimiento predictivo utiliza monitoreo continuo (temperatura, vibraciones, etc.) para predecir fallos antes de que ocurran."
  },
  {
    id: 9009,
    tema: 9,
    texto: "La verificación por examen consiste en: (TEST OFICIAL)",
    opciones: [
      "Constatar que el material cumple las prescripciones de manera visual",
      "Ensayar mediante pruebas que la instalación está hecha correctamente",
      "Medidas como la continuidad de los conductores o de las corrientes de fuga",
      "Todas las anteriores son correctas"
    ],
    correctaTexto: "Constatar que el material cumple las prescripciones de manera visual",
    explicacion: "La verificación por examen es inspección visual sin equipos de medida, comprobando que materiales, conexiones y disposición cumplen el REBT."
  },
  {
    id: 9010,
    tema: 9,
    texto: "Un componente destacable de la resistencia de puesta a tierra es: (TEST OFICIAL)",
    opciones: [
      "Resistencia del electrodo",
      "Resistencia del contacto entre el electrodo y el suelo",
      "Resistencia de la tierra circundante",
      "Las respuestas anteriores son correctas"
    ],
    correctaTexto: "Las respuestas anteriores son correctas",
    explicacion: "La resistencia total de puesta a tierra comprende la resistencia del electrodo, el contacto electrodo-suelo y la resistencia de disipación en tierra."
  },

  // PREGUNTAS COMPLEMENTARIAS (9011-9067)
  {
    id: 9011,
    tema: 9,
    texto: "¿Cuáles son los principales tipos de mantenimiento en instalaciones eléctricas?",
    opciones: [
      "Solo correctivo",
      "Preventivo, predictivo, proactivo y correctivo",
      "Solo preventivo",
      "No existe clasificación formal"
    ],
    correctaTexto: "Preventivo, predictivo, proactivo y correctivo",
    explicacion: "El mantenimiento se clasifica según su enfoque: preventivo (planificado), predictivo (basado en monitoreo), proactivo (mejora continua) y correctivo (reparación)."
  },
  {
    id: 9012,
    tema: 9,
    texto: "¿Qué es el mantenimiento preventivo?",
    opciones: [
      "Reparar averías cuando ocurren",
      "Realizar inspecciones y ajustes planificados para evitar fallos",
      "Modificar la instalación constantemente",
      "No hacer nada hasta que falle"
    ],
    correctaTexto: "Realizar inspecciones y ajustes planificados para evitar fallos",
    explicacion: "El mantenimiento preventivo es programado según calendarios fijos para detectar y corregir anomalías menores antes de causar fallos graves."
  },
  {
    id: 9013,
    tema: 9,
    texto: "¿Cuál es la periodicidad mínima recomendada para inspecciones de mantenimiento en viviendas?",
    opciones: [
      "Cada mes",
      "Cada año",
      "Cada 5 años",
      "Cada 10 años"
    ],
    correctaTexto: "Cada 5 años",
    explicacion: "El REBT establece que las inspecciones periódicas en viviendas deben realizarse cada 5 años para verificar el estado continuado de la instalación."
  },
  {
    id: 9014,
    tema: 9,
    texto: "¿Qué síntomas indican una posible sobrecarga en un circuito?",
    opciones: [
      "Solo disparos del magnetotérmico",
      "Disparos frecuentes del magnetotérmico, calentamiento de conductores, luces parpadeantes",
      "Únicamente caída de tensión",
      "No hay síntomas visibles"
    ],
    correctaTexto: "Disparos frecuentes del magnetotérmico, calentamiento de conductores, luces parpadeantes",
    explicacion: "Una sobrecarga provoca múltiples síntomas: disparos de protección, conductores calientes y fluctuaciones de tensión que afectan equipos sensibles."
  },
  {
    id: 9015,
    tema: 9,
    texto: "¿Cómo se diagnostica un cortocircuito?",
    opciones: [
      "Solo por el olor de quemado",
      "Por disparo inmediato del magnetotérmico, posible daño visible, valores bajos de resistencia de aislamiento",
      "Midiendo la tensión normal de fase",
      "No se puede diagnosticar previamente"
    ],
    correctaTexto: "Por disparo inmediato del magnetotérmico, posible daño visible, valores bajos de resistencia de aislamiento",
    explicacion: "Un cortocircuito causa disparo instantáneo de protecciones (muy rápido) y puede dejar evidencias de arco o quemadura; la resistencia de aislamiento será nula o muy baja."
  },
  {
    id: 9016,
    tema: 9,
    texto: "¿Qué es un contacto indirecto?",
    opciones: [
      "Tocar directamente un conductor de fase",
      "Tocar una masa metálica que ha quedado bajo tensión por defecto de aislamiento",
      "Contacto con tierra",
      "Contacto sin tensión"
    ],
    correctaTexto: "Tocar una masa metálica que ha quedado bajo tensión por defecto de aislamiento",
    explicacion: "El contacto indirecto es accidental, ocurre cuando una persona toca una estructura metálica que ha quedado bajo tensión por un defecto eléctrico."
  },
  {
    id: 9017,
    tema: 9,
    texto: "¿Cuál es el principal dispositivo de protección contra contactos indirectos?",
    opciones: [
      "El magnetotérmico solo",
      "El dispositivo diferencial (RCD) que detecta corrientes de fuga a tierra",
      "El disyuntor",
      "Los fusibles"
    ],
    correctaTexto: "El dispositivo diferencial (RCD) que detecta corrientes de fuga a tierra",
    explicacion: "El diferencial desconecta el circuito cuando detecta corriente de fuga (contacto indirecto), limitando la duración del contacto peligroso."
  },
  {
    id: 9018,
    tema: 9,
    texto: "¿Qué mide el megóhmetro?",
    opciones: [
      "Intensidad de corriente",
      "Voltaje de la red",
      "Resistencia de aislamiento (valores muy altos)",
      "Corriente de fuga exactamente"
    ],
    correctaTexto: "Resistencia de aislamiento (valores muy altos)",
    explicacion: "El megóhmetro (telurómetro) mide resistencias muy altas (megaohmios) entre conductores y tierra, detectando deterioro del aislamiento."
  },
  {
    id: 9019,
    tema: 9,
    texto: "¿Qué significa que la resistencia de aislamiento medida sea menor de 1 MΩ?",
    opciones: [
      "La instalación es perfecta",
      "Hay un defecto de aislamiento que requiere investigación y corrección",
      "Es un valor normal y aceptable",
      "El megóhmetro está defectuoso"
    ],
    correctaTexto: "Hay un defecto de aislamiento que requiere investigación y corrección",
    explicacion: "El REBT especifica que la resistencia de aislamiento debe ser mínimo 1 MΩ. Valores menores indican deterioro del aislamiento."
  },
  {
    id: 9020,
    tema: 9,
    texto: "¿Cuál es el procedimiento correcto para medir la continuidad de un conductor de protección?",
    opciones: [
      "Con el circuito bajo tensión usando voltímetro",
      "Con el circuito sin tensión usando óhmetro (resistencia baja esperada)",
      "Visualmente sin equipos",
      "Midiendo tensión entre puntos del conductor"
    ],
    correctaTexto: "Con el circuito sin tensión usando óhmetro (resistencia baja esperada)",
    explicacion: "La continuidad se mide siempre sin tensión, usando óhmetro para verificar que no hay interrupciones (resistencia debe ser muy baja, típicamente <0.1 Ω)."
  },
  {
    id: 9021,
    tema: 9,
    texto: "¿Qué indica un disparo frecuente del diferencial?",
    opciones: [
      "Que funciona correctamente detectando fugas",
      "Hay corriente de fuga constante por defecto de aislamiento en la instalación",
      "El diferencial es defectuoso",
      "No significa nada importante"
    ],
    correctaTexto: "Hay corriente de fuga constante por defecto de aislamiento en la instalación",
    explicacion: "Un diferencial que dispara repetidamente indica corriente de fuga persistente, requiriendo investigación para localizar el defecto de aislamiento."
  },
  {
    id: 9022,
    tema: 9,
    texto: "¿Cuál es el método para localizar una corriente de fuga en una instalación?",
    opciones: [
      "Desconectar todos los circuitos y volver a conectarlos uno a uno mientras se observa el diferencial",
      "Medir resistencia de aislamiento general sin desconectar",
      "Asumir que es un defecto crónico",
      "No hay forma de localizarla"
    ],
    correctaTexto: "Desconectar todos los circuitos y volver a conectarlos uno a uno mientras se observa el diferencial",
    explicacion: "Este método de 'búsqueda binaria' permite identificar el circuito problemático sin necesidad de equipos especiales de medida."
  },
  {
    id: 9023,
    tema: 9,
    texto: "¿Qué es la caída de tensión?",
    opciones: [
      "Pérdida de tensión en la red por resistencia de conductores y distancia",
      "Fallo total de la alimentación",
      "Aumento de tensión en la línea",
      "Variación debida al cambio de estación"
    ],
    correctaTexto: "Pérdida de tensión en la red por resistencia de conductores y distancia",
    explicacion: "La caída de tensión es la pérdida de voltaje entre el origen y el punto de utilización, causada por la resistencia de conductores bajo carga."
  },
  {
    id: 9024,
    tema: 9,
    texto: "¿Cuál es la caída de tensión máxima permitida en una instalación según el REBT?",
    opciones: [
      "1%",
      "3% en línea principal, 5% total hasta punto de utilización",
      "10%",
      "No existe límite"
    ],
    correctaTexto: "3% en línea principal, 5% total hasta punto de utilización",
    explicacion: "El REBT especifica que la caída no debe exceder 3% desde origen hasta cuadro principal, y 5% hasta el punto más lejano de utilización."
  },
  {
    id: 9025,
    tema: 9,
    texto: "¿Qué síntoma produce una caída de tensión excesiva?",
    opciones: [
      "Disparo del magnetotérmico",
      "Luces parpadeantes, funcionamiento deficiente de motores, aumento de consumo",
      "Cortocircuito",
      "Ningún síntoma"
    ],
    correctaTexto: "Luces parpadeantes, funcionamiento deficiente de motores, aumento de consumo",
    explicacion: "Una caída de tensión excesiva causa funcionamiento deficiente de equipos sensibles: luces parpadean, motores pierden potencia, electrodomésticos consumen más."
  },
  {
    id: 9026,
    tema: 9,
    texto: "¿Cómo se corrige una caída de tensión excesiva?",
    opciones: [
      "Aumentar la tensión de la red (imposible)",
      "Aumentar la sección de conductores para reducir resistencia",
      "Desconectar algunos aparatos",
      "No tiene solución"
    ],
    correctaTexto: "Aumentar la sección de conductores para reducir resistencia",
    explicacion: "La única solución permanente es aumentar la sección de conductores para reducir su resistencia, disminuyendo la caída."
  },
  {
    id: 9027,
    tema: 9,
    texto: "¿Qué es el factor de potencia?",
    opciones: [
      "La potencia total de la instalación",
      "La relación entre potencia real consumida y potencia aparente suministrada",
      "La intensidad de corriente máxima",
      "La tensión nominal"
    ],
    correctaTexto: "La relación entre potencia real consumida y potencia aparente suministrada",
    explicacion: "Factor de potencia = Potencia Real / Potencia Aparente. Valores bajos indican equipos reactivos (motores, transformadores) que consumen sin realizar trabajo útil."
  },
  {
    id: 9028,
    tema: 9,
    texto: "¿Cuál es el factor de potencia mínimo permitido en instalaciones?",
    opciones: [
      "0.5",
      "0.7",
      "0.85 - 0.9",
      "1.0 siempre"
    ],
    correctaTexto: "0.85 - 0.9",
    explicacion: "El REBT requiere factor de potencia mínimo de 0.85-0.9 para evitar sobrecarga de la red y aumentos innecesarios de intensidad."
  },
  {
    id: 9029,
    tema: 9,
    texto: "¿Cómo se mejora el factor de potencia?",
    opciones: [
      "No se puede mejorar",
      "Instalando baterías de condensadores que compensan la reactancia",
      "Aumentando la tensión",
      "Reduciendo los consumidores"
    ],
    correctaTexto: "Instalando baterías de condensadores que compensan la reactancia",
    explicacion: "Los condensadores generan corriente reactiva opuesta a la consumida por equipos inductivos, mejorando el factor de potencia."
  },
  {
    id: 9030,
    tema: 9,
    texto: "¿Qué tipo de avería causa que un motor trifásico funcione débilmente?",
    opciones: [
      "Solo interrupción de fase",
      "Caída de tensión excesiva, desbalance de fases, sobrecarga",
      "Únicamente defecto de aislamiento",
      "No hay causa identificable"
    ],
    correctaTexto: "Caída de tensión excesiva, desbalance de fases, sobrecarga",
    explicacion: "Un motor trifásico funciona débilmente cuando tensión es insuficiente, fases desbalanceadas o se le exige trabajo por encima de su capacidad."
  },
  {
    id: 9031,
    tema: 9,
    texto: "¿Qué es el desbalance de fases?",
    opciones: [
      "Cuando las tres fases tienen tensiones diferentes",
      "Cuando no hay tensión",
      "Cuando falta una fase",
      "Un fenómeno normal"
    ],
    correctaTexto: "Cuando las tres fases tienen tensiones diferentes",
    explicacion: "El desbalance ocurre cuando tensiones de fase son desiguales, causando funcionamiento anómalo de motores trifásicos y equipamiento trifásico."
  },
  {
    id: 9032,
    tema: 9,
    texto: "¿Cuál es el desbalance de tensión máximo permitido?",
    opciones: [
      "Hasta 10%",
      "Máximo 3% entre fases",
      "No hay límite",
      "Debe ser cero"
    ],
    correctaTexto: "Máximo 3% entre fases",
    explicacion: "El REBT especifica que la diferencia máxima entre fases no debe exceder 3% de la tensión nominal para asegurar operación correcta."
  },
  {
    id: 9033,
    tema: 9,
    texto: "¿Cómo se detecta un desbalance de fases?",
    opciones: [
      "Visualmente sin equipos",
      "Midiendo tensión de cada fase respecto a neutro o entre fases",
      "Por sonido del motor",
      "No se puede detectar"
    ],
    correctaTexto: "Midiendo tensión de cada fase respecto a neutro o entre fases",
    explicacion: "Con voltímetro se mide la tensión de cada fase para verificar que son iguales (dentro del 3% permitido)."
  },
  {
    id: 9034,
    tema: 9,
    texto: "¿Qué causa un desbalance de fases en la instalación?",
    opciones: [
      "Nada, es normal",
      "Cargas monoválidas desiguales distribuidas entre fases, defectos en red de distribución",
      "El usuario lo provoca deliberadamente",
      "Fenómeno temporal que desaparece solo"
    ],
    correctaTexto: "Cargas monofásicas desiguales distribuidas entre fases, defectos en red de distribución",
    explicacion: "Si una fase concentra más cargas monofásicas que otras, o hay defectos en la distribución, resulta desbalance de tensión."
  },
  {
    id: 9035,
    tema: 9,
    texto: "¿Qué señales indican problemas en los conductores de protección (tierra)?",
    opciones: [
      "Solo disparo del diferencial",
      "Disparos del diferencial, contacto con masas metálicas produce sensación de hormigueo, medidas de continuidad bajas",
      "Ausencia total de síntomas",
      "Solo corrosión visible"
    ],
    correctaTexto: "Disparos del diferencial, contacto con masas metálicas produce sensación de hormigueo, medidas de continuidad bajas",
    explicacion: "Un conductor de protección defectuoso se detecta por disparo diferencial (hay fuga), sensación de hormigueo al tocar masas, o baja continuidad al medir."
  },
  {
    id: 9036,
    tema: 9,
    texto: "¿Cuál es el procedimiento para verificar la efectividad de la puesta a tierra?",
    opciones: [
      "Solo inspección visual",
      "Medir resistencia de puesta a tierra con telurómetro, verificar continuidad de conductores de protección",
      "Provocar un defecto para ver si actúa diferencial",
      "No se puede verificar"
    ],
    correctaTexto: "Medir resistencia de puesta a tierra con telurómetro, verificar continuidad de conductores de protección",
    explicacion: "La puesta a tierra se verifica midiendo la resistencia de electrodo y la continuidad desde cuadro hasta todas las masas."
  },
  {
    id: 9037,
    tema: 9,
    texto: "¿Cuál es la resistencia de puesta a tierra máxima permitida en viviendas?",
    opciones: [
      "10 Ω",
      "40 Ω",
      "100 Ω",
      "Sin límite"
    ],
    correctaTexto: "40 Ω",
    explicacion: "Para asegurar que el diferencial actúe rápidamente, la resistencia de puesta a tierra no debe exceder 40 Ω en viviendas (puede ser menor en locales especiales)."
  },
  {
    id: 9038,
    tema: 9,
    texto: "¿Qué problemas causa una resistencia de puesta a tierra excesiva?",
    opciones: [
      "Nada importante",
      "Tensión de contacto peligrosa, diferencial no actúa adecuadamente",
      "Solo corrosión de electrodos",
      "Aumento de consumo"
    ],
    correctaTexto: "Tensión de contacto peligrosa, diferencial no actúa adecuadamente",
    explicacion: "Con alta resistencia de tierra, la tensión de contacto puede ser peligrosa incluso con diferencial; además, la corriente de disparo del diferencial puede ser insuficiente."
  },
  {
    id: 9039,
    tema: 9,
    texto: "¿Cómo se mejora una resistencia de puesta a tierra excesiva?",
    opciones: [
      "No se puede mejorar",
      "Aumentando longitud de electrodo, mejorando contacto electrodo-suelo, usando compuestos especiales",
      "Usando cable de mayor sección",
      "Instalando más diferenciales"
    ],
    correctaTexto: "Aumentando longitud de electrodo, mejorando contacto electrodo-suelo, usando compuestos especiales",
    explicacion: "Se mejora extendiendo el electrodo, humedeciendo el suelo, o usando sales especiales que aumentan conductividad del terreno."
  },
  {
    id: 9040,
    tema: 9,
    texto: "¿Qué es la corrosión galvánica en sistemas de puesta a tierra?",
    opciones: [
      "Corrosión normal por envejecimiento",
      "Reacción electroquímica entre metales diferentes en contacto, degradando el electrodo",
      "Corrosión debida al óxido de hierro",
      "Fenómeno que no afecta puesta a tierra"
    ],
    correctaTexto: "Reacción electroquímica entre metales diferentes en contacto, degradando el electrodo",
    explicacion: "Cuando se conectan metales diferentes (cobre y acero) en puesta a tierra, se forma celda galvánica que corroe el metal menos noble."
  },
  {
    id: 9041,
    tema: 9,
    texto: "¿Cómo se previene la corrosión galvánica en puesta a tierra?",
    opciones: [
      "No se puede prevenir",
      "Usando materiales compatibles, asegurar buena conexión, recubrimientos protectores",
      "Reemplazando electrodo frecuentemente",
      "Usando mayor voltaje"
    ],
    correctaTexto: "Usando materiales compatibles, asegurar buena conexión, recubrimientos protectores",
    explicacion: "Usar el mismo material en todo el sistema (cobre con cobre, acero galvanizado con acero), conexiones limpias y ajustadas, y recubrimientos previenen corrosión."
  },
  {
    id: 9042,
    tema: 9,
    texto: "¿Qué es el envejecimiento de una instalación eléctrica?",
    opciones: [
      "Solo paso del tiempo sin efecto",
      "Degradación gradual de aislamiento, corrosión de componentes, aumento de defectos",
      "Concepto que no aplica a instalaciones",
      "Solo problema estético"
    ],
    correctaTexto: "Degradación gradual de aislamiento, corrosión de componentes, aumento de defectos",
    explicacion: "Con el tiempo, aislamiento se vuelve frágil, contactos se corroen, conexiones se aflojan, aumentando riesgos de defectos y averías."
  },
  {
    id: 9043,
    tema: 9,
    texto: "¿Cuál es la vida útil típica de una instalación eléctrica residencial?",
    opciones: [
      "10 años",
      "25-30 años",
      "50 años",
      "Indefinida"
    ],
    correctaTexto: "25-30 años",
    explicacion: "La vida útil típica de conductores aislados en PVC es 25-30 años; después requiere inspección exhaustiva o renovación."
  },
  {
    id: 9044,
    tema: 9,
    texto: "¿Qué medidas de mantenimiento previenen el envejecimiento prematuro?",
    opciones: [
      "Solo reemplazo de componentes",
      "Inspecciones periódicas, control de humedad, ventilación, reparación de defectos menores",
      "No hay medidas preventivas",
      "Cambiar la instalación anualmente"
    ],
    correctaTexto: "Inspecciones periódicas, control de humedad, ventilación, reparación de defectos menores",
    explicacion: "Mantenimiento preventivo detecta problemas temprano; control ambiental reduce corrosión; reparaciones menores evitan cascadas de fallo."
  },
  {
    id: 9045,
    tema: 9,
    texto: "¿Qué es un defecto de aislamiento por punción?",
    opciones: [
      "Un simple rasguño en el aislamiento",
      "Perforación completa del aislamiento por pico de tensión, objeto punzante o degradación localizada",
      "Corrosión general del aislamiento",
      "Problema sin importancia"
    ],
    correctaTexto: "Perforación completa del aislamiento por pico de tensión, objeto punzante o degradación localizada",
    explicacion: "Un defecto por punción es un orificio que permite contacto directo entre conductor y masa, causando potencial peligroso instantáneo."
  },
  {
    id: 9046,
    tema: 9,
    texto: "¿Cómo se localiza un defecto de aislamiento por punción?",
    opciones: [
      "Visualmente sin equipos",
      "Midiendo resistencia de aislamiento, comprobando en qué sección cambia significativamente",
      "Por olor de quemado",
      "Es imposible localizarlo"
    ],
    correctaTexto: "Midiendo resistencia de aislamiento, comprobando en qué sección cambia significativamente",
    explicacion: "Midiendo aislamiento en diferentes puntos de la canalización, se identifica donde cae bruscamente, indicando ubicación aproximada del defecto."
  },
  {
    id: 9047,
    tema: 9,
    texto: "¿Qué es un defecto de aislamiento por humedad?",
    opciones: [
      "Solo condensación superficial",
      "Penetración de humedad en aislamiento causando degradación, reduciendo resistencia de aislamiento",
      "Problema que afecta solo al conductor",
      "Fenómeno transitorio sin riesgo"
    ],
    correctaTexto: "Penetración de humedad en aislamiento causando degradación, reduciendo resistencia de aislamiento",
    explicacion: "La humedad penetra canalizaciones, especialmente en locales mojados, degradando el aislamiento y reduciendo su resistencia dieléctrica."
  },
  {
    id: 9048,
    tema: 9,
    texto: "¿Cómo se previene defecto de aislamiento por humedad?",
    opciones: [
      "Es imposible prevenir",
      "Ventilación, drenaje de canalizaciones, sellado de aberturas, revisiones periódicas",
      "Usando aislamiento de mayor espesor",
      "Pintando la instalación"
    ],
    correctaTexto: "Ventilación, drenaje de canalizaciones, sellado de aberturas, revisiones periódicas",
    explicacion: "Prevención incluye diseño adecuado (drenaje), mantenimiento ambiental (ventilación) y detección temprana por inspecciones."
  },
  {
    id: 9049,
    tema: 9,
    texto: "¿Qué es la termo-degradación del aislamiento?",
    opciones: [
      "Cambio de color del aislamiento",
      "Pérdida de propiedades del aislamiento por exposición a temperaturas excesivas",
      "Defecto superficial sin importancia",
      "Proceso reversible"
    ],
    correctaTexto: "Pérdida de propiedades del aislamiento por exposición a temperaturas excesivas",
    explicacion: "A temperaturas altas, el aislamiento pierde elasticidad, resistencia mecánica y dieléctrica, volviéndose frágil y quebradizo."
  },
  {
    id: 9050,
    tema: 9,
    texto: "¿Cómo se detecta termo-degradación del aislamiento?",
    opciones: [
      "Solo visualmente",
      "Aislamiento quebradizo, cambio de color, baja resistencia de aislamiento, historial de sobrecarga",
      "No se puede detectar",
      "Solo después de fallo"
    ],
    correctaTexto: "Aislamiento quebradizo, cambio de color, baja resistencia de aislamiento, historial de sobrecarga",
    explicacion: "El aislamiento termo-degradado se ve frágil, descolorido, y muestra baja resistencia; se asocia a sobrecargas crónicas previas."
  },
  {
    id: 9051,
    tema: 9,
    texto: "¿Qué es la termo-estabilidad de un aislamiento?",
    opciones: [
      "Capacidad de absorber agua",
      "Capacidad de mantener propiedades dieléctricas a temperaturas elevadas",
      "Capacidad de conducir calor",
      "Propiedad sin importancia"
    ],
    correctaTexto: "Capacidad de mantener propiedades dieléctricas a temperaturas elevadas",
    explicacion: "Aislamientos con buena termo-estabilidad (como silicona) mantienen resistencia dieléctrica incluso a temperaturas cercanas a su límite."
  },
  {
    id: 9052,
    tema: 9,
    texto: "¿Cuál es la temperatura máxima de servicio del aislamiento de PVC?",
    opciones: [
      "40ºC",
      "60ºC",
      "70ºC",
      "100ºC"
    ],
    correctaTexto: "70ºC",
    explicacion: "El PVC convencional tiene temperatura máxima de servicio de 70ºC; a temperaturas mayores se requieren aislamiento especiales."
  },
  {
    id: 9053,
    tema: 9,
    texto: "¿Cómo se verifica si un conductor está sobrecalentado?",
    opciones: [
      "Solo por inspección visual",
      "Por temperatura anormalmente alta (termómetro infrarrojo), aislamiento duro/quebradizo, cambio de color",
      "No se puede verificar",
      "Solo después de cortocircuito"
    ],
    correctaTexto: "Por temperatura anormalmente alta (termómetro infrarrojo), aislamiento duro/quebradizo, cambio de color",
    explicacion: "Medidor térmico infrarrojo permite detectar conductores calientes sin contacto; el aislamiento sobrecalentado muestra cambios evidentes."
  },
  {
    id: 9054,
    tema: 9,
    texto: "¿Qué causa sobrecalentamiento de conductores?",
    opciones: [
      "Solo defectos de aislamiento",
      "Sobrecarga de corriente, mala conexión con alta resistencia, sección insuficiente",
      "Temperatura ambiente alta únicamente",
      "Proceso normal en instalaciones"
    ],
    correctaTexto: "Sobrecarga de corriente, mala conexión con alta resistencia, sección insuficiente",
    explicacion: "El calor en conductores se produce por efecto Joule (I²R): corriente excesiva o conexiones con resistencia alta generan calor excesivo."
  },
  {
    id: 9055,
    tema: 9,
    texto: "¿Cómo se previene sobrecalentamiento de conductores?",
    opciones: [
      "No se puede prevenir",
      "Seleccionar sección correcta, asegurar conexiones ajustadas y limpias, no sobrecargar circuitos",
      "Usar mayor tensión",
      "Aislamiento más grueso"
    ],
    correctaTexto: "Seleccionar sección correcta, asegurar conexiones ajustadas y limpias, no sobrecargar circuitos",
    explicacion: "Diseño correcto (sección adecuada), instalación cuidadosa (conexiones ajustadas) y operación correcta (sin sobrecarga) previenen sobrecalentamiento."
  },
  {
    id: 9056,
    tema: 9,
    texto: "¿Qué es la formación de arco en conexiones defectuosas?",
    opciones: [
      "Un proceso sin riesgo",
      "Formación de descarga eléctrica entre puntos de conexión con mala conductancia, causando calor y posible incendio",
      "Solo un fenómeno visual",
      "Resultado de corriente muy baja"
    ],
    correctaTexto: "Formación de descarga eléctrica entre puntos de conexión con mala conductancia, causando calor y posible incendio",
    explicacion: "El arco causa temperaturas muy altas (>1000ºC) que pueden quemar aislamiento, iniciar incendios y destruir conexiones."
  },
  {
    id: 9057,
    tema: 9,
    texto: "¿Cuáles son las causas de arco en conexiones?",
    opciones: [
      "Causa desconocida",
      "Conexiones flojas, óxido en contactos, materiales incompatibles, sobrecarga repetida",
      "Solo defecto de fabricante",
      "Fenómeno inevitable"
    ],
    correctaTexto: "Conexiones flojas, óxido en contactos, materiales incompatibles, sobrecarga repetida",
    explicacion: "Mala conductancia en contacto causa resistencia alta; al circular corriente, calor interno vaporiza metal creando arco."
  },
  {
    id: 9058,
    tema: 9,
    texto: "¿Cómo se detecta formación de arco en una instalación?",
    opciones: [
      "No se puede detectar",
      "Olor quemado, marcas de quemadura en conexiones, disparo de protecciones, ruido de chisporroteo",
      "Solo después de incendio",
      "Visualmente sin síntomas"
    ],
    correctaTexto: "Olor quemado, marcas de quemadura en conexiones, disparo de protecciones, ruido de chisporroteo",
    explicacion: "El arco produce síntomas característicos: olor a quemado, marcas de fusión en metal, ruido de chasquido, y puede disparar protecciones."
  },
  {
    id: 9059,
    tema: 9,
    texto: "¿Cómo se previene formación de arco en conexiones?",
    opciones: [
      "Es inevitable",
      "Conexiones ajustadas, limpieza de contactos, materiales compatibles, revisiones periódicas",
      "Usando mayores secciones",
      "Sin métodos preventivos"
    ],
    correctaTexto: "Conexiones ajustadas, limpieza de contactos, materiales compatibles, revisiones periódicas",
    explicacion: "Prevención incluye instalación cuidadosa (conexiones firmes), limpieza (sin óxido), selección de materiales compatibles, y mantenimiento."
  },
  {
    id: 9060,
    tema: 9,
    texto: "¿Cuál es la secuencia de diagnóstico de una avería eléctrica?",
    opciones: [
      "Reparar inmediatamente sin investigar",
      "Describir síntomas, verificar seguridad, medir y comprobar, aislar causa, reparar, verificar reparación",
      "Solo inspeccionar visualmente",
      "No hay método sistemático"
    ],
    correctaTexto: "Describir síntomas, verificar seguridad, medir y comprobar, aislar causa, reparar, verificar reparación",
    explicacion: "El diagnóstico sistemático evita daños, identifica la causa verdadera y verifica que la reparación fue exitosa."
  },
  {
    id: 9061,
    tema: 9,
    texto: "¿Cuál es la importancia del registro de averías?",
    opciones: [
      "Solo burocrático",
      "Permite identificar patrones de fallos, planificar mantenimiento, aprender de errores previos",
      "Tiene poca importancia",
      "No es necesario"
    ],
    correctaTexto: "Permite identificar patrones de fallos, planificar mantenimiento, aprender de errores previos",
    explicacion: "El historial de averías revela patrones (mismo circuito repite fallos, estación de mayor riesgo) permitiendo mantenimiento predictivo."
  },
  {
    id: 9062,
    tema: 9,
    texto: "¿Qué información debe contener un registro de avería?",
    opciones: [
      "Solo la fecha",
      "Fecha/hora, síntomas, ubicación, diagnóstico, causa, reparación realizada, tiempo invertido, piezas usadas",
      "Solo el costo",
      "Información no relevante"
    ],
    correctaTexto: "Fecha/hora, síntomas, ubicación, diagnóstico, causa, reparación realizada, tiempo invertido, piezas usadas",
    explicacion: "Registro completo permite seguimiento de patrones, cálculo de confiabilidad, y justificación de decisiones de renovación."
  },
  {
    id: 9063,
    tema: 9,
    texto: "¿Cuál es el rol del instalador autorizado en el mantenimiento?",
    opciones: [
      "No tiene responsabilidad",
      "Realización de mantenimiento, detección de defectos, asesoramiento sobre mejoras, garantía de conformidad REBT",
      "Solo reparaciones de emergencia",
      "Responsabilidad muy limitada"
    ],
    correctaTexto: "Realización de mantenimiento, detección de defectos, asesoramiento sobre mejoras, garantía de conformidad REBT",
    explicacion: "El instalador autorizado es responsable de mantener la seguridad eléctrica a través de mantenimiento planificado e intervenciones correctivas."
  },
  {
    id: 9064,
    tema: 9,
    texto: "¿Cuál es el rol del usuario/propietario en el mantenimiento?",
    opciones: [
      "No tiene ningún rol",
      "Contratar mantenimiento, reportar anomalías, usar instalación correctamente, conservar documentación",
      "Responsabilidad total de todas las reparaciones",
      "Rol secundario sin importancia"
    ],
    correctaTexto: "Contratar mantenimiento, reportar anomalías, usar instalación correctamente, conservar documentación",
    explicacion: "El usuario es responsable de solicitar mantenimiento periódico y reportar cualquier funcionamiento anómalo al instalador."
  },
  {
    id: 9065,
    tema: 9,
    texto: "¿Qué equipo básico debe tener un técnico para diagnosticar averías?",
    opciones: [
      "Solo destornillador",
      "Voltímetro, óhmetro, pinza amperimétrica, megóhmetro, herramientas básicas",
      "Solo equipos de seguridad",
      "Equipo mínimo"
    ],
    correctaTexto: "Voltímetro, óhmetro, pinza amperimétrica, megóhmetro, herramientas básicas",
    explicacion: "El diagnóstico requiere equipos de medida para verificar tensión, resistencia, corriente e identificar defectos con precisión."
  },
  {
    id: 9066,
    tema: 9,
    texto: "¿Cuál es la protección obligatoria del personal durante mantenimiento?",
    opciones: [
      "Solo casco",
      "Equipo de protección personal (guantes aislantes, herramientas aisladas, prendas de seguridad), seguimiento de procedimientos, señalización",
      "No es obligatoria",
      "Protección mínima"
    ],
    correctaTexto: "Equipo de protección personal (guantes aislantes, herramientas aisladas, prendas de seguridad), seguimiento de procedimientos, señalización",
    explicacion: "El trabajo eléctrico es peligroso; equipo de protección y procedimientos seguros son obligatorios para evitar accidentes."
  },
  {
    id: 9067,
    tema: 9,
    texto: "¿Cuál es la diferencia entre avería eléctrica y defecto latente?",
    opciones: [
      "No hay diferencia",
      "Avería causa funcionamiento anómalo visible; defecto latente es defecto interno no detectado hasta que causa avería",
      "Solo terminología diferente",
      "Concepto teórico sin aplicación práctica"
    ],
    correctaTexto: "Avería causa funcionamiento anómalo visible; defecto latente es defecto interno no detectado hasta que causa avería",
    explicacion: "El mantenimiento preventivo busca detectar defectos latentes (por medidas) antes de que causen averías que interrumpan el servicio."
  }
];
// Incluye 10 preguntas del test oficial

const TEMA_10_DATA = [
  // PREGUNTAS DEL TEST OFICIAL (10001-10010)
  {
    id: 10001,
    tema: 10,
    texto: "¿Cómo tienen que estar las protecciones encargadas de controlar las máquinas en la industria? (TEST OFICIAL)",
    opciones: [
      "Centralizadas",
      "Descentralizadas",
      "Separadas",
      "Fusionadas"
    ],
    correctaTexto: "Descentralizadas",
    explicacion: "En industria, las protecciones de máquinas deben estar descentralizadas (cercanas a cada máquina) para responder rápidamente a fallos locales sin afectar todo el sistema."
  },
  {
    id: 10002,
    tema: 10,
    texto: "¿Qué color de clavija soporta una tensión de hasta 230 V? (TEST OFICIAL)",
    opciones: [
      "Rojo",
      "Amarillo",
      "Violeta",
      "Azul"
    ],
    correctaTexto: "Azul",
    explicacion: "Las clavijas azules son para 230V monofásico en industria. Rojo es 400V trifásico, amarillo es 110V, violeta es MBTS (muy baja tensión)."
  },
  {
    id: 10003,
    tema: 10,
    texto: "¿Qué distribución deben tener las instalaciones alimentadas en Baja tensión?: (TEST OFICIAL)",
    opciones: [
      "Distribución TT",
      "Distribución IT",
      "Distribución TN",
      "Distribución TD"
    ],
    correctaTexto: "Distribución TT",
    explicacion: "En España, las instalaciones de baja tensión en edificios residenciales e industriales típicamente utilizan sistema TT (neutro a tierra en origen y en usuario)."
  },
  {
    id: 10004,
    tema: 10,
    texto: "El cociente entre la suma de potencias nominales de todos los receptores y la potencia eléctrica máxima que puede entregar una instalación es.: (TEST OFICIAL)",
    opciones: [
      "El factor de simultaneidad",
      "Sistema de distribución",
      "El factor de potencia",
      "Todas las anteriores son correctas"
    ],
    correctaTexto: "El factor de simultaneidad",
    explicacion: "El factor de simultaneidad es la relación entre la potencia media consumida simultáneamente y la suma de potencias nominales de todos los receptores."
  },
  {
    id: 10005,
    tema: 10,
    texto: "El color rojo en una clavija le corresponde una tensión de hasta: (TEST OFICIAL)",
    opciones: [
      "24 V",
      "400 V",
      "230 V",
      "Ninguna es correcta"
    ],
    correctaTexto: "400 V",
    explicacion: "Las clavijas rojas son para tensiones hasta 400 V trifásicas en sistemas industriales, siendo el estándar para alimentación trifásica industrial."
  },
  {
    id: 10006,
    tema: 10,
    texto: "Las bases y clavijas que trabajen con tensiones por encima de 50 V: (TEST OFICIAL)",
    opciones: [
      "Adoptan una posición indeterminada",
      "No tienen que tener un contacto de toma a tierra",
      "Tienen que tener un contacto de toma a tierra",
      "Todas las anteriores son incorrectas"
    ],
    correctaTexto: "Tienen que tener un contacto de toma a tierra",
    explicacion: "A partir de 50 V, los conectores deben incluir contacto de protección (tierra) para asegurar puesta a tierra de equipos móviles."
  },
  {
    id: 10007,
    tema: 10,
    texto: "Las canalizaciones: (TEST OFICIAL)",
    opciones: [
      "Son elementos que se utilizan para soportar los fusibles",
      "Son otro término para denominar los conductores",
      "Son muy empleadas en industria para la conexión de dispositivos móviles o, incluso, algunos fijos",
      "Son elementos que utilizamos para soportar los conductores"
    ],
    correctaTexto: "Son elementos que utilizamos para soportar los conductores",
    explicacion: "Las canalizaciones (tuberías, bandejas, canales) son conductos que contienen y soportan los conductores eléctricos en las instalaciones."
  },
  {
    id: 10008,
    tema: 10,
    texto: "Las clavijas y bases industriales son muy empleadas: (TEST OFICIAL)",
    opciones: [
      "En industria para la desconexión de dispositivos fijos",
      "En industria para la desconexión de dispositivos móviles",
      "En industria para la conexión de dispositivos móviles e incluso fijos",
      "Las respuestas anteriores son correctas"
    ],
    correctaTexto: "En industria para la conexión de dispositivos móviles e incluso fijos",
    explicacion: "Las clavijas y bases industriales (conectores CEE) permiten conexión/desconexión rápida de equipos, tanto móviles como fijos, facilitando flexibilidad en la instalación."
  },
  {
    id: 10009,
    tema: 10,
    texto: "Se realiza con condensadores fijos en bornes del receptor inductivo.: (TEST OFICIAL)",
    opciones: [
      "Compensación individual",
      "Compensación colectiva",
      "Compensación global",
      "Compensación simultánea"
    ],
    correctaTexto: "Compensación individual",
    explicacion: "La compensación individual coloca un condensador directamente en los bornes de cada receptor inductivo (motor, transformador) para mejorar su factor de potencia."
  },
  {
    id: 10010,
    tema: 10,
    texto: "Un aspecto a tener en cuenta a la hora de instalar un cuadro de distribución es: (TEST OFICIAL)",
    opciones: [
      "Ambiente en el que se encuentra",
      "La previsibilidad de que se alojen bases de corriente en él",
      "Tener en cuenta el grado de protección IP-IK requerido",
      "Todas las anteriores son correctas"
    ],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "El diseño del cuadro debe considerar: ambiente (humedad, temperatura, corrosión), conexiones que alojará, y grado de protección mecánica y eléctrica."
  },

  // PREGUNTAS COMPLEMENTARIAS (10011-10067)
  {
    id: 10011,
    tema: 10,
    texto: "¿Cuál es la principal diferencia entre instalaciones residenciales e industriales?",
    opciones: [
      "Solo la tensión utilizada",
      "Complejidad, potencia requerida, sistemas de protección, controles automáticos y flexibilidad",
      "Solo el número de circuitos",
      "No hay diferencias significativas"
    ],
    correctaTexto: "Complejidad, potencia requerida, sistemas de protección, controles automáticos y flexibilidad",
    explicacion: "Las instalaciones industriales requieren sistemas trifásicos, mayor capacidad, protecciones más complejas y capacidad de adaptación a cambios de producción."
  },
  {
    id: 10012,
    tema: 10,
    texto: "¿Qué son los sistemas trifásicos?",
    opciones: [
      "Tres cables de neutro",
      "Tres fases con 120° de desfase entre ellas, proporcionando potencia equilibrada",
      "Tres tierra independientes",
      "Sistema utilizado solo en laboratorios"
    ],
    correctaTexto: "Tres fases con 120° de desfase entre ellas, proporcionando potencia equilibrada",
    explicacion: "El sistema trifásico proporciona distribución equilibrada de energía, siendo estándar en industria por eficiencia y capacidad de potencia."
  },
  {
    id: 10013,
    tema: 10,
    texto: "¿Cuál es la ventaja principal de los sistemas trifásicos?",
    opciones: [
      "Requieren menos mantenimiento",
      "Proporcionan mayor potencia con menor sección de conductores, menos caída de tensión",
      "Son más baratos que monofásicos",
      "Solo uso teórico"
    ],
    correctaTexto: "Proporcionan mayor potencia con menor sección de conductores, menos caída de tensión",
    explicacion: "Los sistemas trifásicos son económicos y eficientes: misma potencia con menos cobre, menor caída de tensión, funcionamiento más suave."
  },
  {
    id: 10014,
    tema: 10,
    texto: "¿Qué es la tensión entre fases en un sistema trifásico?",
    opciones: [
      "100 V",
      "230 V",
      "400 V",
      "Depende del caso"
    ],
    correctaTexto: "400 V",
    explicacion: "En sistemas europeos, la tensión entre fases es 400 V en baja tensión trifásica, mientras que fase-neutro es 230 V."
  },
  {
    id: 10015,
    tema: 10,
    texto: "¿Cuál es la tensión de fase respecto a neutro en un sistema de 400 V trifásico?",
    opciones: [
      "400 V",
      "230 V",
      "120 V",
      "690 V"
    ],
    correctaTexto: "230 V",
    explicacion: "En un sistema trifásico de 400 V, la tensión entre fase y neutro es 400/√3 ≈ 230 V."
  },
  {
    id: 10016,
    tema: 10,
    texto: "¿Qué es la potencia aparente en un sistema trifásico?",
    opciones: [
      "Solo potencia resistiva",
      "Producto de tensión, corriente e √3: S = √3 × U × I (en VA)",
      "Potencia reactiva únicamente",
      "Valor arbitrario"
    ],
    correctaTexto: "Producto de tensión, corriente e √3: S = √3 × U × I (en VA)",
    explicacion: "La potencia aparente en trifásico incluye componentes resistiva y reactiva, calculada con el factor √3 para sistemas equilibrados."
  },
  {
    id: 10017,
    tema: 10,
    texto: "¿Qué es la potencia reactiva?",
    opciones: [
      "Potencia útil de la instalación",
      "Energía intercambiada por elementos inductivos/capacitivos sin realizar trabajo útil",
      "Energía consumida por resistencias",
      "Potencia máxima disponible"
    ],
    correctaTexto: "Energía intercambiada por elementos inductivos/capacitivos sin realizar trabajo útil",
    explicacion: "La potencia reactiva (kVAR) es consumida por motores, transformadores y equipos inductivos, sin contribuir a trabajo mecánico."
  },
  {
    id: 10018,
    tema: 10,
    texto: "¿Cómo se relacionan potencia real, aparente y reactiva?",
    opciones: [
      "P = S + Q",
      "S² = P² + Q² (relación de Pitágoras)",
      "P = Q",
      "No están relacionadas"
    ],
    correctaTexto: "S² = P² + Q² (relación de Pitágoras)",
    explicacion: "La relación es vectorial: potencia aparente es hipotenusa, potencia real y reactiva son catetos del triángulo de potencias."
  },
  {
    id: 10019,
    tema: 10,
    texto: "¿Cuál es la importancia de compensar la potencia reactiva en industria?",
    opciones: [
      "No tiene importancia",
      "Reduce consumo de aparente, disminuye caída de tensión, ahorra energía y costos de tarifa",
      "Solo es requisito burocrático",
      "Mejora solo la estética de la instalación"
    ],
    correctaTexto: "Reduce consumo de aparente, disminuye caída de tensión, ahorra energía y costos de tarifa",
    explicacion: "Empresas de distribución cobran penalizaciones por bajo factor de potencia; la compensación reduce consumo de aparente y caídas de tensión."
  },
  {
    id: 10020,
    tema: 10,
    texto: "¿Qué es una batería de condensadores en una instalación industrial?",
    opciones: [
      "Almacenamiento de energía eléctrica",
      "Conjunto de condensadores que generan potencia reactiva capacitiva para compensar inductancia",
      "Sistema de respaldo en caso de apagón",
      "Componente solo decorativo"
    ],
    correctaTexto: "Conjunto de condensadores que generan potencia reactiva capacitiva para compensar inductancia",
    explicacion: "Las baterías de condensadores (automáticas o manuales) se instalan en cuadro principal para mejorar factor de potencia global."
  },
  {
    id: 10021,
    tema: 10,
    texto: "¿Cuál es la diferencia entre compensación individual y colectiva?",
    opciones: [
      "No hay diferencia",
      "Individual: condensador por receptor; Colectiva: batería en cuadro principal para todos",
      "Individual es más cara",
      "Solo es terminología"
    ],
    correctaTexto: "Individual: condensador por receptor; Colectiva: batería en cuadro principal para todos",
    explicacion: "Compensación individual es más eficiente pero cara; colectiva es económica pero menos precisa. Combinadas es lo óptimo."
  },
  {
    id: 10022,
    tema: 10,
    texto: "¿Qué es una máquina asincrónica?",
    opciones: [
      "Motor que funciona a velocidad constante",
      "Motor cuya velocidad es inferior a la de sincronismo debido a deslizamiento",
      "Máquina de corriente continua",
      "Transformador de potencia"
    ],
    correctaTexto: "Motor cuya velocidad es inferior a la de sincronismo debido a deslizamiento",
    explicacion: "Los motores asincronos (de inducción) son máquinas trifásicas de uso común en industria, funcionando a velocidad ligeramente inferior a la sincrónica."
  },
  {
    id: 10023,
    tema: 10,
    texto: "¿Cuál es la velocidad de sincronismo de un motor trifásico a 50 Hz con 2 pares de polos?",
    opciones: [
      "1500 rpm",
      "3000 rpm",
      "1000 rpm",
      "6000 rpm"
    ],
    correctaTexto: "1500 rpm",
    explicacion: "Velocidad sincrónica = 60 × f / p = 60 × 50 / 2 = 1500 rpm. El motor real girará ligeramente menos (deslizamiento)."
  },
  {
    id: 10024,
    tema: 10,
    texto: "¿Qué es el deslizamiento en un motor asincrónico?",
    opciones: [
      "Movimiento lateral del rotor",
      "Diferencia entre velocidad sincrónica e real, expresada como porcentaje",
      "Fallo mecánico de la máquina",
      "Fenómeno sin importancia"
    ],
    correctaTexto: "Diferencia entre velocidad sincrónica e real, expresada como porcentaje",
    explicacion: "Deslizamiento = (Ns - Nr) / Ns × 100%. Típicamente 3-8% en motores normales, mayor bajo carga."
  },
  {
    id: 10025,
    tema: 10,
    texto: "¿Qué significa la placa de características de un motor eléctrico?",
    opciones: [
      "Solo información estética",
      "Especifica potencia, tensión, corriente, velocidad, tipo, factor servicio, conexión",
      "No tiene importancia práctica",
      "Solo datos del fabricante"
    ],
    correctaTexto: "Especifica potencia, tensión, corriente, velocidad, tipo, factor servicio, conexión",
    explicacion: "La placa de características contiene datos técnicos esenciales para selección, instalación y mantenimiento del motor."
  },
  {
    id: 10026,
    tema: 10,
    texto: "¿Qué es el factor de servicio de un motor?",
    opciones: [
      "Relación entre potencia máxima y nominal",
      "Multiplicador de potencia nominal que permite funcionamiento temporal a potencia mayor",
      "Factor de seguridad del motor",
      "Valor sin aplicación práctica"
    ],
    correctaTexto: "Multiplicador de potencia nominal que permite funcionamiento temporal a potencia mayor",
    explicacion: "Factor de servicio típicamente 1.15 significa que el motor puede funcionar hasta 15% sobre su potencia nominal por tiempo limitado."
  },
  {
    id: 10027,
    tema: 10,
    texto: "¿Cuál es la protección obligatoria de un motor trifásico en la industria?",
    opciones: [
      "Solo magnetotérmico",
      "Magnetotérmico, diferencial, relé de protección térmica por overload",
      "Solo diferencial",
      "No requiere protección especial"
    ],
    correctaTexto: "Magnetotérmico, diferencial, relé de protección térmica por overload",
    explicacion: "Los motores requieren múltiples capas de protección: cortocircuito (magnetotérmico), fuga (diferencial), sobrecarga térmica (relé)."
  },
  {
    id: 10028,
    tema: 10,
    texto: "¿Qué es un variador de frecuencia?",
    opciones: [
      "Dispositivo que aumenta voltaje",
      "Convertidor que varía frecuencia de alimentación para controlar velocidad de motor",
      "Componente decorativo",
      "Medidor de frecuencia"
    ],
    correctaTexto: "Convertidor que varía frecuencia de alimentación para controlar velocidad de motor",
    explicacion: "Los variadores (drives) permiten control suave de velocidad, arranque sin picos de corriente y ahorro energético en motores."
  },
  {
    id: 10029,
    tema: 10,
    texto: "¿Cuál es la ventaja del variador sobre arranque convencional?",
    opciones: [
      "Solo reduce ruido",
      "Arranque suave sin picos, control de velocidad, ahorro de energía, menor desgaste",
      "No hay ventajas reales",
      "Solo costo adicional"
    ],
    correctaTexto: "Arranque suave sin picos, control de velocidad, ahorro de energía, menor desgaste",
    explicacion: "Los variadores mejoran significativamente eficiencia, longevidad de equipos y flexibilidad operativa en procesos industriales."
  },
  {
    id: 10030,
    tema: 10,
    texto: "¿Qué es un transformador de distribución?",
    opciones: [
      "Motor eléctrico para movimiento",
      "Dispositivo que cambia tensión de alimentación manteniendo frecuencia constante",
      "Solo para uso residencial",
      "Componente sin importancia"
    ],
    correctaTexto: "Dispositivo que cambia tensión de alimentación manteniendo frecuencia constante",
    explicacion: "Los transformadores adaptan tensión desde red principal a valores requeridos por usuarios finales, siendo componentes clave en distribución."
  },
  {
    id: 10031,
    tema: 10,
    texto: "¿Qué designa la placa de características de un transformador?",
    opciones: [
      "Solo marcas decorativas",
      "Potencia, tensiones primaria/secundaria, impedancia, grupo de conexión, frecuencia",
      "No tiene importancia",
      "Solo información del fabricante"
    ],
    correctaTexto: "Potencia, tensiones primaria/secundaria, impedancia, grupo de conexión, frecuencia",
    explicacion: "La placa especifica características técnicas esenciales para instalación, operación y diagnóstico de transformadores."
  },
  {
    id: 10032,
    tema: 10,
    texto: "¿Qué es el índice de protección IP?",
    opciones: [
      "Medida de seguridad eléctrica",
      "Clasificación de protección contra entrada de sólidos y líquidos (ej: IP44, IP65)",
      "Nivel de tensión permitida",
      "Concepto sin aplicación"
    ],
    correctaTexto: "Clasificación de protección contra entrada de sólidos y líquidos (ej: IP44, IP65)",
    explicacion: "IP tiene dos dígitos: primero protege contra sólidos (0-6), segundo contra líquidos (0-8). IP65 es hermético a polvo y chorros de agua."
  },
  {
    id: 10033,
    tema: 10,
    texto: "¿Qué es el índice de protección IK?",
    opciones: [
      "Protección contra entrada de agua",
      "Protección mecánica contra impactos (ej: IK04, IK10)",
      "Clasificación eléctrica",
      "Valor sin significado"
    ],
    correctaTexto: "Protección mecánica contra impactos (ej: IK04, IK10)",
    explicacion: "IK clasifica resistencia a impactos de 0 (sin protección) a 10 (muy resistente). IK10 resiste 20J de impacto (martillo de 5 kg de altura 40 cm)."
  },
  {
    id: 10034,
    tema: 10,
    texto: "¿Cómo se selecciona el grado de protección de un cuadro industrial?",
    opciones: [
      "Por preferencia del instalador",
      "Según ambiente (humedad, polvo, agentes químicos) y riesgo de impactos mecánicos",
      "No importa la selección",
      "Solo por costo"
    ],
    correctaTexto: "Según ambiente (humedad, polvo, agentes químicos) y riesgo de impactos mecánicos",
    explicacion: "El ambiente define requisitos de protección: locales mojados requieren IP65, polvorientos IP54, con riesgo de impactos IK mayor."
  },
  {
    id: 10035,
    tema: 10,
    texto: "¿Qué es una conexión estrella en motores trifásicos?",
    opciones: [
      "Conexión decorativa",
      "Conexión donde los bobinados se unen en un punto común, fase-neutro recibe tensión simple",
      "Conexión solo en laboratorios",
      "Tipo de cableado"
    ],
    correctaTexto: "Conexión donde los bobinados se unen en un punto común, fase-neutro recibe tensión simple",
    explicacion: "En estrella (Y), cada bobinado recibe 230V (fase-neutro). Proporciona menos par pero menos corriente de arranque que delta."
  },
  {
    id: 10036,
    tema: 10,
    texto: "¿Qué es una conexión triángulo en motores?",
    opciones: [
      "Conexión decorativa",
      "Conexión donde bobinados se conectan en serie formando triángulo, cada uno recibe 400V",
      "Solo configuración teórica",
      "Tipo de protección"
    ],
    correctaTexto: "Conexión donde bobinados se conectan en serie formando triángulo, cada uno recibe 400V",
    explicacion: "En triángulo (Δ), cada bobinado recibe 400V (fase-fase). Proporciona mayor par pero mayor corriente de arranque que estrella."
  },
  {
    id: 10037,
    tema: 10,
    texto: "¿Cuál es la diferencia de corriente entre conexión estrella y triángulo?",
    opciones: [
      "No hay diferencia",
      "Triángulo consume √3 veces más corriente que estrella (misma tensión de bobinado)",
      "Estrella consume más",
      "Diferencia despreciable"
    ],
    correctaTexto: "Triángulo consume √3 veces más corriente que estrella (misma tensión de bobinado)",
    explicacion: "A mismo voltaje de bobinado, triángulo tiene √3 veces más corriente que estrella, lo que afecta selección de protecciones."
  },
  {
    id: 10038,
    tema: 10,
    texto: "¿Qué es un arranque estrella-triángulo?",
    opciones: [
      "Cambio de color del motor",
      "Sistema de arranque que comienza en estrella (baja corriente) y cambia a triángulo (potencia total)",
      "Solo concepto teórico",
      "Tipo de conexión permanente"
    ],
    correctaTexto: "Sistema de arranque que comienza en estrella (baja corriente) y cambia a triángulo (potencia total)",
    explicacion: "Este sistema reduce picos de corriente en arranque a ~1/3, protegiendo instalación, evitando caídas de tensión."
  },
  {
    id: 10039,
    tema: 10,
    texto: "¿Cuál es la ventaja del arranque suave (soft-starter)?",
    opciones: [
      "Solo reduce ruido",
      "Control gradual de tensión desde 0 hasta nominal, limitando corriente de arranque suavemente",
      "No hay ventajas reales",
      "Solo aumenta complejidad"
    ],
    correctaTexto: "Control gradual de tensión desde 0 hasta nominal, limitando corriente de arranque suavemente",
    explicacion: "El soft-starter proporciona arranque más suave que estrella-triángulo, mejor control, sin cambios abruptos de marcha."
  },
  {
    id: 10040,
    tema: 10,
    texto: "¿Qué es una maniobra en una instalación industrial?",
    opciones: [
      "Movimiento del equipo",
      "Operación de control como arranque, parada, inversión de marcha de máquinas",
      "Mantenimiento de equipos",
      "Concepto sin aplicación"
    ],
    correctaTexto: "Operación de control como arranque, parada, inversión de marcha de máquinas",
    explicacion: "Las maniobras son operaciones de control efectuadas por pulsadores, selectores, mandos automáticos para gobernar máquinas."
  },
  {
    id: 10041,
    tema: 10,
    texto: "¿Qué es un contactor?",
    opciones: [
      "Interruptor manual simple",
      "Relé electromagnético que abre/cierra circuitos de potencia bajo control remoto",
      "Solo componente decorativo",
      "Medidor de contacto"
    ],
    correctaTexto: "Relé electromagnético que abre/cierra circuitos de potencia bajo control remoto",
    explicacion: "Los contactores permiten control remoto de cargas de potencia grande desde pequeños pulsadores, siendo componentes fundamentales en maniobras."
  },
  {
    id: 10042,
    tema: 10,
    texto: "¿Qué es un relé térmico?",
    opciones: [
      "Detector de temperatura ambiental",
      "Dispositivo de protección contra sobrecarga que actúa por dilatación de bimetal",
      "Solo para medida de calor",
      "Componente sin función específica"
    ],
    correctaTexto: "Dispositivo de protección contra sobrecarga que actúa por dilatación de bimetal",
    explicacion: "Los relés térmicos detectan sobrecarga monitoreando corriente; por efecto Joule calienta bimetal que se dilata, abriendo circuito."
  },
  {
    id: 10043,
    tema: 10,
    texto: "¿Cómo se conecta un relé térmico en un circuito de motor?",
    opciones: [
      "En paralelo con el motor",
      "En serie en línea de potencia, detectando corriente del motor para protección",
      "Solo en circuito de control",
      "De forma arbitraria"
    ],
    correctaTexto: "En serie en línea de potencia, detectando corriente del motor para protección",
    explicacion: "El relé térmico va en serie con el motor en circuito de potencia para monitoreamiento directo de su corriente."
  },
  {
    id: 10044,
    tema: 10,
    texto: "¿Cuál es la diferencia entre control de emergencia y parada de emergencia?",
    opciones: [
      "No hay diferencia",
      "Control de emergencia: detiene máquina; Parada de emergencia: detiene línea completa sin posibilidad de rearranque hasta reset manual",
      "Solo terminología",
      "No son conceptos importantes"
    ],
    correctaTexto: "Control de emergencia: detiene máquina; Parada de emergencia: detiene línea completa sin posibilidad de rearranque hasta reset manual",
    explicacion: "La parada de emergencia es más drástica, inmovilizando completamente la instalación por seguridad tras detectar peligro."
  },
  {
    id: 10045,
    tema: 10,
    texto: "¿Qué es un botón de hongo de parada de emergencia?",
    opciones: [
      "Botón decorativo",
      "Pulsador de gran tamaño, accesible, que al presionar dispara parada de emergencia",
      "Solo para laboratorios",
      "Componente sin función específica"
    ],
    correctaTexto: "Pulsador de gran tamaño, accesible, que al presionar dispara parada de emergencia",
    explicacion: "El botón de hongo rojo es característica de seguridad obligatoria, fácil de identificar y alcanzar en emergencias."
  },
  {
    id: 10046,
    tema: 10,
    texto: "¿Qué es un cuadro de distribución de baja tensión?",
    opciones: [
      "Solo para viviendas",
      "Conjunto de dispositivos de protección, maniobra y control de circuitos de una instalación",
      "Almacén de componentes",
      "Equipo decorativo"
    ],
    correctaTexto: "Conjunto de dispositivos de protección, maniobra y control de circuitos de una instalación",
    explicacion: "El cuadro centraliza todos los elementos de protección (magnetotérmicos, diferenciales) y control (contactores, relés) de la instalación."
  },
  {
    id: 10047,
    tema: 10,
    texto: "¿Qué componentes esenciales debe tener un cuadro industrial?",
    opciones: [
      "Solo interruptores",
      "Interruptor general, magnetotérmicos, diferenciales, contactores, relés, borneros de distribución",
      "Solo relés",
      "Componentes arbitrarios"
    ],
    correctaTexto: "Interruptor general, magnetotérmicos, diferenciales, contactores, relés, borneros de distribución",
    explicacion: "Un cuadro completo integra todos estos elementos para protección total, control y distribución ordenada de circuitos."
  },
  {
    id: 10048,
    tema: 10,
    texto: "¿Cuál es la función de un bornero en un cuadro?",
    opciones: [
      "Solo elemento decorativo",
      "Punto de conexión ordenado donde se unen conductores de entrada y salida de circuitos",
      "Medidor de tensión",
      "Protección contra cortes"
    ],
    correctaTexto: "Punto de conexión ordenado donde se unen conductores de entrada y salida de circuitos",
    explicacion: "Los borneros organizan las conexiones, facilitando mantenimiento, modificaciones y diagnóstico de problemas."
  },
  {
    id: 10049,
    tema: 10,
    texto: "¿Qué es un cable de potencia?",
    opciones: [
      "Cualquier cable eléctrico",
      "Cable dimensionado para llevar corrientes de potencia de motores y carga, con sección e aislamiento adecuados",
      "Solo conductor de cobre",
      "Cable sin especificaciones"
    ],
    correctaTexto: "Cable dimensionado para llevar corrientes de potencia de motores y carga, con sección e aislamiento adecuados",
    explicacion: "Los cables de potencia tienen secciones mayores que cables de control, seleccionados según corrientes máximas esperadas."
  },
  {
    id: 10050,
    tema: 10,
    texto: "¿Cómo se selecciona la sección de un cable de potencia?",
    opciones: [
      "Por preferencia personal",
      "Por corriente máxima, longitud de línea y caída de tensión permitida (máximo 3-5%)",
      "Por costo únicamente",
      "No tiene criterios específicos"
    ],
    correctaTexto: "Por corriente máxima, longitud de línea y caída de tensión permitida (máximo 3-5%)",
    explicacion: "Selección correcta asegura que no haya sobrecalentamiento ni caída de tensión excesiva bajo carga máxima."
  },
  {
    id: 10051,
    tema: 10,
    texto: "¿Qué es una línea de alimentación?",
    opciones: [
      "Cualquier cable instalado",
      "Conjunto de conductores que trasladan energía desde origen (transformador o acometida) hasta cuadro principal",
      "Solo conductores de datos",
      "Conexión decorativa"
    ],
    correctaTexto: "Conjunto de conductores que trasladan energía desde origen (transformador o acometida) hasta cuadro principal",
    explicacion: "La línea de alimentación es el elemento crítico que lleva potencia principal; su dimensionamiento es crucial para toda la instalación."
  },
  {
    id: 10052,
    tema: 10,
    texto: "¿Qué requisitos de protección tiene una línea de alimentación?",
    opciones: [
      "Ninguno especial",
      "Interruptor general con protección contra sobrecarga y cortocircuito, dimensionado para corriente máxima",
      "Solo protección visual",
      "Requisitos opcionales"
    ],
    correctaTexto: "Interruptor general con protección contra sobrecarga y cortocircuito, dimensionado para corriente máxima",
    explicacion: "La línea principal debe estar protegida por interruptor automático capaz de desconectar antes de que se sobrecaliente."
  },
  {
    id: 10053,
    tema: 10,
    texto: "¿Qué es la selectividad en protecciones de una instalación?",
    opciones: [
      "Capacidad de hacer distintas formas",
      "Propiedad por la que solo el dispositivo más cercano a la falta se activa, dejando operativos circuitos no afectados",
      "Solo concepto teórico",
      "Función sin importancia"
    ],
    correctaTexto: "Propiedad por la que solo el dispositivo más cercano a la falta se activa, dejando operativos circuitos no afectados",
    explicacion: "La selectividad evita desconexiones innecesarias, permitiendo que solo el circuito defectuoso se desconecte."
  },
  {
    id: 10054,
    tema: 10,
    texto: "¿Cómo se logra selectividad en magnetotérmicos de un cuadro?",
    opciones: [
      "Colocándolos al azar",
      "Mediante curva de disparo (B, C, D) y coordinación temporal: magnetotérmico general más lento que los derivados",
      "No se puede lograr",
      "Solo por tamaño diferente"
    ],
    correctaTexto: "Mediante curva de disparo (B, C, D) y coordinación temporal: magnetotérmico general más lento que los derivados",
    explicacion: "Usando curvas C para carga normal y D para motores, con tiempos coordinados, se logra selectividad adecuada."
  },
  {
    id: 10055,
    tema: 10,
    texto: "¿Qué es una línea derivada?",
    opciones: [
      "Línea principal",
      "Conductor que sale del cuadro alimentando un circuito específico (iluminación, fuerza, calefacción)",
      "Cable de comunicación",
      "Elemento decorativo"
    ],
    correctaTexto: "Conductor que sale del cuadro alimentando un circuito específico (iluminación, fuerza, calefacción)",
    explicacion: "Las líneas derivadas distribuyen energía desde cuadro a receptores específicos, cada una con su protección individualizada."
  },
  {
    id: 10056,
    tema: 10,
    texto: "¿Cuál es el número máximo de circuitos derivados recomendado por magnetotérmico general?",
    opciones: [
      "Ilimitado",
      "Entre 6 y 8 circuitos para asegurar selectividad y facilitar mantenimiento",
      "Solo 2 circuitos",
      "No hay límite"
    ],
    correctaTexto: "Entre 6 y 8 circuitos para asegurar selectividad y facilitar mantenimiento",
    explicacion: "Demasiados circuitos por protección principal compromete selectividad; se recomienda máximo 8 para buen funcionamiento."
  },
  {
    id: 10057,
    tema: 10,
    texto: "¿Qué es el factor de carga en una instalación?",
    opciones: [
      "Valor constante",
      "Relación entre potencia realmente consumida y potencia total instalada",
      "Solo medida teórica",
      "Parámetro sin significado"
    ],
    correctaTexto: "Relación entre potencia realmente consumida y potencia total instalada",
    explicacion: "Factor de carga bajo (25-30%) indica sobredimensionamiento; alto (80%+) indica uso eficiente pero menos margen."
  },
  {
    id: 10058,
    tema: 10,
    texto: "¿Qué es la demanda máxima?",
    opciones: [
      "Suma de todas las potencias nominales",
      "Máxima potencia que se consume simultáneamente durante operación normal de la instalación",
      "Potencia nunca usada",
      "Concepto sin aplicación"
    ],
    correctaTexto: "Máxima potencia que se consume simultáneamente durante operación normal de la instalación",
    explicacion: "La demanda máxima es el valor de diseño para dimensionar entrada de alimentación y protecciones generales."
  },
  {
    id: 10059,
    tema: 10,
    texto: "¿Cómo se calcula la previsión de carga de una instalación industrial?",
    opciones: [
      "Por estimación visual",
      "Mediante normas IEC: P = Σ(Pn × factor simultaneidad) + margen de futuros aumentos",
      "Solo dato aproximado",
      "Sin método específico"
    ],
    correctaTexto: "Mediante normas IEC: P = Σ(Pn × factor simultaneidad) + margen de futuros aumentos",
    explicacion: "El cálculo normativo garantiza dimensionamiento adecuado considerando que no todos los receptores funcionan simultáneamente."
  },
  {
    id: 10060,
    tema: 10,
    texto: "¿Qué es la acometida de una instalación?",
    opciones: [
      "Entrada de agua",
      "Línea de suministro desde red de distribución hasta el origen de la instalación del usuario",
      "Cable de comunicación",
      "Elemento decorativo"
    ],
    correctaTexto: "Línea de suministro desde red de distribución hasta el origen de la instalación del usuario",
    explicacion: "La acometida es la conexión entre la red pública y el cuadro principal del usuario, siendo responsabilidad de la distribuidora."
  },
  {
    id: 10061,
    tema: 10,
    texto: "¿Qué es el origen de una instalación de usuario?",
    opciones: [
      "Punto donde comienza el edificio",
      "Punto donde la acometida se conecta a la instalación interna del usuario, típicamente después del contador",
      "Entrada al cuadro principal",
      "Concepto sin significado"
    ],
    correctaTexto: "Punto donde la acometida se conecta a la instalación interna del usuario, típicamente después del contador",
    explicacion: "El origen define dónde termina responsabilidad de distribuidora y comienza responsabilidad del usuario."
  },
  {
    id: 10062,
    tema: 10,
    texto: "¿Qué es un sistema de distribución TT?",
    opciones: [
      "Distribución temporal",
      "Sistema donde neutro está conectado a tierra en origen y usuario tiene su propia toma a tierra independiente",
      "Distribución trifásica",
      "Concepto sin aplicación"
    ],
    correctaTexto: "Sistema donde neutro está conectado a tierra en origen y usuario tiene su propia toma a tierra independiente",
    explicacion: "TT (Tierra-Tierra) proporciona protección por dos vías independientes de puesta a tierra, siendo sistemas usado en viviendas."
  },
  {
    id: 10063,
    tema: 10,
    texto: "¿Qué es un sistema de distribución TN?",
    opciones: [
      "Sistema temporal",
      "Sistema donde neutro del origen está puesto a tierra y usuario usa punto de tierra común de la red",
      "Sin relación con tierra",
      "Concepto teórico"
    ],
    correctaTexto: "Sistema donde neutro del origen está puesto a tierra y usuario usa punto de tierra común de la red",
    explicacion: "TN (Tierra-Neutro) utiliza conductor neutro como protección en algunos casos, siendo variantes TN-S y TN-C-S."
  },
  {
    id: 10064,
    tema: 10,
    texto: "¿Qué es un sistema de distribución IT?",
    opciones: [
      "Sistema informático",
      "Sistema donde neutro no está conectado a tierra o está a través de impedancia alta, para máxima continuidad",
      "Sistema de comunicación",
      "Concepto sin aplicación"
    ],
    correctaTexto: "Sistema donde neutro no está conectado a tierra o está a través de impedancia alta, para máxima continuidad",
    explicacion: "IT (Impedancia-Tierra) permite continuar operando incluso tras primer defecto aislado a tierra, usado en aplicaciones críticas."
  },
  {
    id: 10065,
    tema: 10,
    texto: "¿Cuál es la tensión de contacto máxima permitida en ambiente normal?",
    opciones: [
      "50 V",
      "24 V",
      "65 V",
      "100 V"
    ],
    correctaTexto: "65 V",
    explicacion: "En ambiente normal, la tensión de contacto no debe exceder 65 V CA o 120 V CC para limitar riesgo de electrocución."
  },
  {
    id: 10066,
    tema: 10,
    texto: "¿Cuál es el tiempo máximo permitido de desconexión ante contacto indirecto?",
    opciones: [
      "2 segundos",
      "0.4 segundos en ambiente normal (más rápido en ambientes húmedos)",
      "5 segundos",
      "No hay límite"
    ],
    correctaTexto: "0.4 segundos en ambiente normal (más rápido en ambientes húmedos)",
    explicacion: "El REBT especifica tiempos de desconexión para limitar duración de contacto indirecto y reducir riesgo de fibrilación."
  },
  {
    id: 10067,
    tema: 10,
    texto: "¿Cuál es la importancia de cumplir normas REBT en instalaciones industriales?",
    opciones: [
      "Solo requisito burocrático",
      "Garantiza seguridad de personas, continuidad operativa, responsabilidad legal del instalador y empresa",
      "No tiene importancia real",
      "Solo para inspecciones"
    ],
    correctaTexto: "Garantiza seguridad de personas, continuidad operativa, responsabilidad legal del instalador y empresa",
    explicacion: "El cumplimiento REBT es obligatorio legalmente, protege a usuarios de accidentes y al instalador de responsabilidades civiles."
  }
];

// Total: 670 preguntas (10 temas × 67 preguntas)
// Build timestamp: 20260414070241
