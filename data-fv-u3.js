// TEMA_FV_U3: Diseño e instalación de sistemas fotovoltaicos (67 preguntas - IDs 13001-13067)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U3_DATA = [
  // ========== EXAMEN OFICIAL (10 preguntas) ==========
  {
    id: 13001,
    tema: 13,
    texto: "¿Qué medida se usa para determinar el consumo de una instalación?: (TEST OFICIAL)",
    opciones: [
      "Voltios",
      "Amperios",
      "Ninguna respuesta es correcta",
      "Vatio-hora"
    ],
    correctaTexto: "Vatio-hora",
    explicacion: "El consumo eléctrico se mide en Vatio-hora (Wh) o Kilovatio-hora (kWh). Esta unidad de energía (no potencia) es fundamental para el dimensionamiento de instalaciones solares."
  },
  {
    id: 13002,
    tema: 13,
    texto: "Determinar el consumo eléctrico es un paso fundamental para el diseño de una instalación solar fotovoltaica. ¿Cuál sería el consumo diario de la iluminación de una vivienda si sabemos que cuenta con 4 lámparas de 25W que funcionan 4 horas al día?: (TEST OFICIAL)",
    opciones: [
      "75Wh",
      "400Wh",
      "2.500Wh",
      "125Wh"
    ],
    correctaTexto: "400Wh",
    explicacion: "Consumo = Potencia × Tiempo = (4 × 25W) × 4h = 100W × 4h = 400Wh. Este cálculo es esencial para dimensionar correctamente el generador fotovoltaico."
  },
  {
    id: 13003,
    tema: 13,
    texto: "Para estimar el rendimiento total de la instalación se tendrán en cuenta una serie de pérdidas, entre las que se incluyen: (TEST OFICIAL)",
    opciones: [
      "Pérdidas en la batería y regulador",
      "Coeficientes de autodescarga de baterías",
      "Pérdidas en el cableado",
      "Todas las anteriores son correctas"
    ],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "El rendimiento global de la instalación debe considerar todas las pérdidas: en baterías (~5-10%), en regulador (~5%), en cableado (~3-5%), autodescarga (~2-3%) y en inversor (~5-10%)."
  },
  {
    id: 13004,
    tema: 13,
    texto: "Cuando se trate de una instalación con conexión a la red, ¿Qué tipo de corriente deberemos emplear?: (TEST OFICIAL)",
    opciones: [
      "Corriente Continua",
      "Corriente Alterna",
      "Corriente de onda cuadrada",
      "Ninguna de las anteriores"
    ],
    correctaTexto: "Corriente Alterna",
    explicacion: "Las instalaciones conectadas a red utilizan Corriente Alterna (AC) a 230V/400V y 50Hz. El inversor convierte la DC de los paneles en AC compatible con la red."
  },
  {
    id: 13005,
    tema: 13,
    texto: "Generalmente la autonomía de estas instalaciones debe ser de: (TEST OFICIAL)",
    opciones: [
      "Menos de 24 horas",
      "Entre 3 y 10 días",
      "Mayor de 3 meses",
      "Cercana a 1 año"
    ],
    correctaTexto: "Entre 3 y 10 días",
    explicacion: "Las instalaciones aisladas con baterías deben tener autonomía de 3-10 días para soportar periodos nublados. Autonomías menores son insuficientes; mayores son económicamente poco eficientes."
  },
  {
    id: 13006,
    tema: 13,
    texto: "La elección del regulador se realizará a partir de la corriente de cortocircuito de los módulos fotovoltaicos. Si tenemos una instalación fotovoltaica con dos ramas de 10 cadenas de módulos fotovoltaicos en serie cada una y sabemos que cada módulo tiene una Isc de 12A. ¿Qué regulador deberemos de elegir?: (TEST OFICIAL)",
    opciones: [
      "Regulador con corriente nominal de 10 A",
      "Regulador con corriente nominal de 15 A",
      "Regulador con corriente nominal de 30 A",
      "Ninguna de las anteriores"
    ],
    correctaTexto: "Regulador con corriente nominal de 30 A",
    explicacion: "Con 2 ramas en paralelo de 12A cada una: Isc total = 12A × 2 = 24A. Con factor de seguridad 1.25: 24A × 1.25 = 30A. Se elige regulador de 30A."
  },
  {
    id: 13007,
    tema: 13,
    texto: "No se tendrá en cuenta para elaborar un presupuesto de la instalación: (TEST OFICIAL)",
    opciones: [
      "La cantidad de energía que produce",
      "Coste de mano de obra",
      "Impuestos a pagar",
      "Coste de los elementos de protección"
    ],
    correctaTexto: "La cantidad de energía que produce",
    explicacion: "Para el presupuesto se consideran: costes de materiales, mano de obra, protecciones, legalización e impuestos. La cantidad de energía es un dato de diseño, no de presupuesto."
  },
  {
    id: 13008,
    tema: 13,
    texto: "Para la elección de los paneles solares se tendrá en cuenta: (TEST OFICIAL)",
    opciones: [
      "Las pérdidas por efecto de la temperatura",
      "Las dimensiones",
      "La sujeción de los módulos",
      "Todas las respuestas son correctas"
    ],
    correctaTexto: "Todas las respuestas son correctas",
    explicacion: "La selección de paneles debe considerar: coeficiente térmico (típico -0.4%/°C), dimensiones físicas para montaje, peso para sujeción, eficiencia y degradación anual."
  },
  {
    id: 13009,
    tema: 13,
    texto: "En la elaboración de un presupuesto que costes deberán tenerse en cuenta: (TEST OFICIAL)",
    opciones: [
      "Costes materiales",
      "Costes de mano de obra",
      "Costes de legalización de la instalación",
      "Todas son correctas"
    ],
    correctaTexto: "Todas son correctas",
    explicacion: "El presupuesto integral debe incluir: componentes (paneles, inversor, baterías, cableado), mano de obra de instalación, trámites de legalización y permisos administrativos."
  },
  {
    id: 13010,
    tema: 13,
    texto: "Respecto al uso de un generador auxiliar: (TEST OFICIAL)",
    opciones: [
      "Nunca será mediante energía no renovable",
      "Se tiene que incorporar siempre un generador auxiliar a cualquier instalación solar fotovoltaica",
      "Puede ser usado un pequeño generador eólico",
      "Todas las respuestas son correctas"
    ],
    correctaTexto: "Puede ser usado un pequeño generador eólico",
    explicacion: "Los generadores auxiliares en instalaciones aisladas pueden ser: pequeños generadores eólicos (renovables), pequeños generadores diesel (no renovables) o conexión a red. Su uso es opcional, no obligatorio."
  },

  // ========== PREGUNTAS COMPLEMENTARIAS (57 preguntas) ==========
  {
    id: 13011,
    tema: 13,
    texto: "¿Cuáles son los pasos principales para diseñar una instalación fotovoltaica?",
    opciones: [
      "Solo instalar paneles y conectarlos",
      "Análisis de consumo, evaluación de radiación, dimensionamiento de componentes, diseño de protecciones",
      "Comprar los componentes más baratos",
      "Copiar el diseño de otra instalación"
    ],
    correctaTexto: "Análisis de consumo, evaluación de radiación, dimensionamiento de componentes, diseño de protecciones",
    explicacion: "El diseño correcto requiere: 1) Auditoría de consumo, 2) Estudio de radiación solar, 3) Dimensionamiento del generador, regulador, baterías, 4) Esquemas de protección y 5) Validación de normativas."
  },
  {
    id: 13012,
    tema: 13,
    texto: "¿Qué es el perfil de consumo en una instalación fotovoltaica?",
    opciones: [
      "El tamaño de los equipos",
      "La distribución temporal del consumo de energía a lo largo del día",
      "El costo de la instalación",
      "La temperatura máxima"
    ],
    correctaTexto: "La distribución temporal del consumo de energía a lo largo del día",
    explicacion: "El perfil de consumo muestra cuánta energía se consume en cada hora del día. Es crucial para aisladas: si hay mucho consumo nocturno se necesitan más baterías."
  },
  {
    id: 13013,
    tema: 13,
    texto: "¿Qué es el factor de seguridad en el dimensionamiento del generador FV?",
    opciones: [
      "Un número aleatorio",
      "Un multiplicador para sobrevalorar la potencia requerida y garantizar funcionamiento",
      "Solo para cálculos de baterías",
      "No existe tal factor"
    ],
    correctaTexto: "Un multiplicador para sobrevalorar la potencia requerida y garantizar funcionamiento",
    explicacion: "El factor de seguridad (típicamente 1.1-1.3) se aplica a los cálculos de generador para garantizar rendimiento incluso con degradación de paneles, suciedad o temperatura elevada."
  },
  {
    id: 13014,
    tema: 13,
    texto: "¿Cómo se calcula la capacidad de batería necesaria para una instalación aislada?",
    opciones: [
      "Consumo diario × Profundidad de descarga recomendada",
      "Solo por tamaño físico",
      "Consumo diario × días de autonomía ÷ profundidad de descarga permitida",
      "No se calcula, es al azar"
    ],
    correctaTexto: "Consumo diario × días de autonomía ÷ profundidad de descarga permitida",
    explicacion: "Capacidad batería (Ah) = (Consumo diario Wh ÷ Voltaje nominal) × Días autonomía ÷ DoD. Ejemplo: 500Wh × 5 días ÷ 0.8 ÷ 48V = 65.3 Ah de batería."
  },
  {
    id: 13015,
    tema: 13,
    texto: "¿Qué rendimiento se espera de todo el sistema en una instalación fotovoltaica aislada?",
    opciones: [
      "100% (sin pérdidas)",
      "50% como máximo",
      "60-75% considerando todas las pérdidas",
      "Menos del 30%"
    ],
    correctaTexto: "60-75% considerando todas las pérdidas",
    explicacion: "El rendimiento global en aisladas es 60-75% = Panel (80%) × Cableado (97%) × Regulador (95%) × Batería (90%) × Inversor (90%) × Controlador (95%) = ~55-65% típico."
  },
  {
    id: 13016,
    tema: 13,
    texto: "¿Qué dato es más importante para el diseño: la potencia instalada o el consumo de energía?",
    opciones: [
      "La potencia instalada",
      "El consumo de energía (kWh)",
      "El tamaño físico",
      "El color del panel"
    ],
    correctaTexto: "El consumo de energía (kWh)",
    explicacion: "Para dimensionamiento es crítico el consumo de energía diaria/anual (kWh), no solo la potencia pico. Un sistema puede tener alta potencia pero bajo rendimiento global si consume mucha energía."
  },
  {
    id: 13017,
    tema: 13,
    texto: "¿Cuál es el propósito del Punto de Máxima Potencia (MPP) en el diseño?",
    opciones: [
      "Proteger contra cortocircuitos",
      "El regulador MPPT lo rastrea continuamente para maximizar la energía extraída",
      "Solo para paneles de alta potencia",
      "No tiene propósito"
    ],
    correctaTexto: "El regulador MPPT lo rastrea continuamente para maximizar la energía extraída",
    explicacion: "El MPP varía con irradiancia y temperatura. Un regulador MPPT ajusta continuamente la tensión de operación para mantener al panel en su MPP, mejorando eficiencia 20-30%."
  },
  {
    id: 13018,
    tema: 13,
    texto: "En el dimensionamiento de cableado, ¿cuál es el criterio principal?",
    opciones: [
      "El costo más bajo",
      "El grosor del aislamiento",
      "Limitar caída de tensión a <3% y soportar corriente con margen de seguridad",
      "El color disponible"
    ],
    correctaTexto: "Limitar caída de tensión a <3% y soportar corriente con margen de seguridad",
    explicacion: "La caída de tensión permitida es <3% en DC (paneles-regulador) y <1% en AC (inversor-carga). Sección = (2 × L × I) ÷ (ρ × V_max)"
  },
  {
    id: 13019,
    tema: 13,
    texto: "¿Qué diferencia hay entre una instalación conectada a red y una aislada en términos de diseño?",
    opciones: [
      "No hay diferencia",
      "Red: no necesita baterías, dimensiona por consumo anual; Aislada: requiere baterías, considera autonomía",
      "Solo el tamaño cambia",
      "Solo cambia la marca de equipos"
    ],
    correctaTexto: "Red: no necesita baterías, dimensiona por consumo anual; Aislada: requiere baterías, considera autonomía",
    explicacion: "Diseño conectada a red: generador FV cubre consumo medio anual, sin baterías. Diseño aislada: generador + baterías para cubrir consumo + días sin sol (autonomía 3-10 días)."
  },
  {
    id: 13020,
    tema: 13,
    texto: "¿Cuál es el impacto de las sombras en el diseño de una instalación FV?",
    opciones: [
      "Ninguno, los paneles generan igual",
      "Reducen dramáticamente la potencia (efecto no lineal)",
      "Solo afectan en invierno",
      "Afectan solo al color del panel"
    ],
    correctaTexto: "Reducen dramáticamente la potencia (efecto no lineal)",
    explicacion: "Una sombra pequeña en un panel conectado en serie puede reducir la potencia de toda la cadena a casi cero. Por eso se usan diodos bypass y se evita sombra en diseño."
  },
  {
    id: 13021,
    tema: 13,
    texto: "¿Qué documento es imprescindible antes de instalar una FV conectada a red?",
    opciones: [
      "Solo el manual del inversor",
      "Proyecto técnico aprobado y solicitud de conexión a la compañía eléctrica",
      "Un simple plano del tejado",
      "No es necesario documento previo"
    ],
    correctaTexto: "Proyecto técnico aprobado y solicitud de conexión a la compañía eléctrica",
    explicacion: "Para conexión a red se requiere: 1) Proyecto técnico (si >10kW o según regulación local), 2) Solicitud a la distribuidora, 3) Acuerdo de conexión, 4) Inspección previa."
  },
  {
    id: 13022,
    tema: 13,
    texto: "¿Cómo se determina la tensión del sistema (24V, 48V, 400V) en diseño?",
    opciones: [
      "Aleatoriamente",
      "Según potencia requerida, distancias de cableado y eficiencia",
      "Solo por el tamaño del panel",
      "Siempre es 12V"
    ],
    correctaTexto: "Según potencia requerida, distancias de cableado y eficiencia",
    explicacion: "24V: sistemas pequeños <1kW; 48V: sistemas medianos 1-5kW; 400V DC: sistemas grandes >5kW. Tensión mayor = cables más finos = menos pérdidas en distancias largas."
  },
  {
    id: 13023,
    tema: 13,
    texto: "¿Qué es el balance neto (net metering) en instalaciones conectadas a red?",
    opciones: [
      "Una función del inversor",
      "Poder vender el exceso de energía a precio normal o recibir compensación",
      "Un tipo de batería",
      "Un regulador automático"
    ],
    correctaTexto: "Poder vender el exceso de energía a precio normal o recibir compensación",
    explicacion: "Balance neto: la energía excedente inyectada en la red se compensa contra el consumo nocturno, reduciendo factura. Disponible en algunos países (España: compensación simplificada)."
  },
  {
    id: 13024,
    tema: 13,
    texto: "¿Cuántos paneles en serie se pueden conectar sin problema de sobretensión?",
    opciones: [
      "Ilimitados",
      "Depende de Voc máxima del regulador/inversor y tolerancia (típicamente hasta 150V DC)",
      "Solo 1 panel",
      "Máximo 2"
    ],
    correctaTexto: "Depende de Voc máxima del regulador/inversor y tolerancia (típicamente hasta 150V DC)",
    explicacion: "Máxima tensión = N_paneles × Voc(panel) × 1.25 (factor frío) < V_max(regulador/inversor). Típicamente 10-15 paneles en serie a 48V nominal."
  },
  {
    id: 13025,
    tema: 13,
    texto: "¿Qué es el efecto de avalancha térmica en baterías y cómo se previene?",
    opciones: [
      "No existe tal efecto",
      "Sobrecalentamiento por sobrecarga; se previene con regulador de carga y ventilación",
      "Un fenómeno solo en invierno",
      "Afecta solo a paneles solares"
    ],
    correctaTexto: "Sobrecalentamiento por sobrecarga; se previene con regulador de carga y ventilación",
    explicacion: "Avalancha térmica: sobrecarga genera calor → más autod escarga → más corriente → más calor. Se previene con regulador MPPT/PWM y ventilación adecuada de baterías."
  },
  {
    id: 13026,
    tema: 13,
    texto: "¿Cuál es la vida útil esperada de una instalación FV bien diseñada?",
    opciones: [
      "5 años",
      "Paneles 25-30 años, inversores 10-15 años, baterías 5-20 años según tipo",
      "2 años",
      "indefinida sin mantenimiento"
    ],
    correctaTexto: "Paneles 25-30 años, inversores 10-15 años, baterías 5-20 años según tipo",
    explicacion: "Longevidad típica: paneles 25-30 años (80% potencia), inversores 10-15 años (revisión recomendada), baterías plomo-ácido 5-7 años, litio 10-20 años."
  },
  {
    id: 13027,
    tema: 13,
    texto: "¿Qué medidas de seguridad son obligatorias en diseño de FV aislada?",
    opciones: [
      "Ninguna, es segura por naturaleza",
      "Desconectadores, fusibles, puesta a tierra, protecciones contra sobrecarga y sobretensión",
      "Solo un cable a tierra",
      "Solo desconectador general"
    ],
    correctaTexto: "Desconectadores, fusibles, puesta a tierra, protecciones contra sobrecarga y sobretensión",
    explicacion: "Obligatorio en diseño: 1) Desconectadores DC y AC, 2) Fusibles (Isc × 1.25), 3) Puesta a tierra (voltaje > 48V), 4) Protecciones contra sobreintensidad y sobretensión."
  },
  {
    id: 13028,
    tema: 13,
    texto: "¿Cómo se valida un diseño FV antes de implementación?",
    opciones: [
      "Solo mirando los componentes",
      "Revisión de cálculos, verificación normativa, simulación energética, presupuesto y cronograma",
      "No se valida",
      "Solo probando en el campo"
    ],
    correctaTexto: "Revisión de cálculos, verificación normativa, simulación energética, presupuesto y cronograma",
    explicacion: "Validación de diseño: 1) Verificar todos los cálculos, 2) Cumplimiento de UNE/IEC, 3) Simulación con software (PVGIS), 4) Presupuesto detallado, 5) Planificación de obra."
  },
  {
    id: 13029,
    tema: 13,
    texto: "¿Cuál es el consumo de energía típico de una vivienda española con electrodomésticos?",
    opciones: [
      "100 kWh/año",
      "2,500-4,000 kWh/año",
      "500 kWh/año",
      "15,000 kWh/año"
    ],
    correctaTexto: "2,500-4,000 kWh/año",
    explicacion: "Una vivienda típica española consume 2,500-4,000 kWh/año (210-330 kWh/mes). Varía según: tamaño, aislamiento, climatización y hábitos de uso."
  },
  {
    id: 13030,
    tema: 13,
    texto: "¿Qué es el sobredimensionamiento en diseño FV y por qué es importante?",
    opciones: [
      "Comprarse paneles que no caben",
      "Instalar más capacidad de la necesaria (10-20%) para contrarrestar envejecimiento y sombras",
      "Un error de cálculo",
      "No es importante"
    ],
    correctaTexto: "Instalar más capacidad de la necesaria (10-20%) para contrarrestar envejecimiento y sombras",
    explicacion: "Sobredimensionamiento 10-20%: compensa degradación panel (0.5-0.8%/año), suciedad (~2-5%), temperatura (~0.4%/°C) y garantiza rendimiento esperado a largo plazo."
  },
  {
    id: 13031,
    tema: 13,
    texto: "¿Cómo influye la latitud geográfica en el diseño FV?",
    opciones: [
      "No influye",
      "Determina ángulo de inclinación óptimo (~latitud) y radiación solar disponible",
      "Solo afecta el color del panel",
      "Afecta el tamaño físico"
    ],
    correctaTexto: "Determina ángulo de inclinación óptimo (~latitud) y radiación solar disponible",
    explicacion: "En España (latitud 40°N aprox): inclinación óptima ~40°, radiación ~1400 kWh/m²/año norte; ~1700 sur. Latitud determina altura del sol (ángulo mínimo de sombras)."
  },
  {
    id: 13032,
    tema: 13,
    texto: "¿Qué es el recurso solar (irradiación) y cómo se obtiene para diseño?",
    opciones: [
      "Un número inventado",
      "Energía solar total por m² anual; se obtiene de mapas PVGIS, estaciones locales o mediciones",
      "Solo la radiación en verano",
      "Un parámetro del panel"
    ],
    correctaTexto: "Energía solar total por m² anual; se obtiene de mapas PVGIS, estaciones locales o mediciones",
    explicacion: "Irradiación anual (kWh/m²/año): recurso solar de la zona. Fuentes: PVGIS (online), datos de AEMET, estaciones piranométricas locales. Es el input principal para diseño."
  },
  {
    id: 13033,
    tema: 13,
    texto: "¿Cuál es la mejor orientación (azimut) en diseño para máxima energía anual?",
    opciones: [
      "Siempre norte",
      "Sur (180°) en hemisferio norte; norte (0°) en hemisferio sur",
      "Este",
      "Debe rotarse diariamente"
    ],
    correctaTexto: "Sur (180°) en hemisferio norte; norte (0°) en hemisferio sur",
    explicacion: "Azimut óptimo: Sur (180°) en hemisferio norte. Desviación ±20° reduce energía <5%. Sureste/Suroeste pueden ser óptimos si hay carga asimétrica (mañana vs tarde)."
  },
  {
    id: 13034,
    tema: 13,
    texto: "¿Qué es el factor de capacidad de una instalación FV y cómo se calcula?",
    opciones: [
      "El tamaño máximo",
      "Energía anual real ÷ Energía teórica máxima = Energía anual real ÷ (Potencia peak × 8760h)",
      "La temperatura",
      "No existe tal factor"
    ],
    correctaTexto: "Energía anual real ÷ Energía teórica máxima = Energía anual real ÷ (Potencia peak × 8760h)",
    explicacion: "Factor de capacidad típico FV España: 15-25%. Ejemplo: 10kW instalación genera ~16-25 MWh/año (FC 18-28%). Es fundamental para validar diseño y ROI."
  },
  {
    id: 13035,
    tema: 13,
    texto: "¿Cómo se dimensiona un sistema de almacenamiento híbrido (baterías + conexión red)?",
    opciones: [
      "No es posible",
      "Baterías para autonomía de horas (4-6h de pico) y red para cobertura de demanda restante",
      "Solo baterías grandes",
      "Se ignora la red"
    ],
    correctaTexto: "Baterías para autonomía de horas (4-6h de pico) y red para cobertura de demanda restante",
    explicacion: "Híbrida: baterías pequeñas (4-6h de consumo pico) para aumentar autoc onsumo y reducir picos de importación. Red cubre demanda no cubierta + recarga baterías si es necesario."
  },
  {
    id: 13036,
    tema: 13,
    texto: "¿Qué herramientas software se usan para diseño y simulación FV?",
    opciones: [
      "No hay herramientas especializadas",
      "PVGIS, HOMER, SAM, PVsyst, Retscreen, simuladores de inversores",
      "Solo Excel",
      "No se usan herramientas"
    ],
    correctaTexto: "PVGIS, HOMER, SAM, PVsyst, Retscreen, simuladores de inversores",
    explicacion: "Herramientas estándar: PVGIS (datos radiación libre), HOMER (sistema aislado), PVsyst (diseño detallado), SAM (análisis financiero), software inversor (simulación)."
  },
  {
    id: 13037,
    tema: 13,
    texto: "¿Cuál es el impacto del ángulo de inclinación en la energía anual generada?",
    opciones: [
      "Mínimo",
      "Máximo en inclinación ~latitud; desviación ±15° reduce energía ~5%",
      "Es independiente",
      "Cambia solo por estética"
    ],
    correctaTexto: "Máximo en inclinación ~latitud; desviación ±15° reduce energía ~5%",
    explicacion: "Ángulo óptimo ~latitud para máxima energía anual. Inclinación menor (ej. 20° vs 40°): energía pico en verano pero baja en invierno. Mayor flexibilidad en conectadas a red."
  },
  {
    id: 13038,
    tema: 13,
    texto: "¿Qué es el estudio de sombras y por qué es crítico en diseño?",
    opciones: [
      "Estudio del color de sombras",
      "Análisis de obstáculos (edificios, árboles) que causen sombras en paneles durante el año",
      "Un factor estético",
      "No es necesario"
    ],
    correctaTexto: "Análisis de obstáculos (edificios, árboles) que causen sombras en paneles durante el año",
    explicacion: "Estudio sombras: mapear obstáculos cada hora del año (uso software 3D o tablas). Sombra pequeña en un panel serie = toda cadena afectada. Es imprescindible en diseño urbano."
  },
  {
    id: 13039,
    tema: 13,
    texto: "¿Cómo se determina si una instalación FV es económicamente viable?",
    opciones: [
      "Solo por precio inicial",
      "Análisis VAN, TIR, payback: genera ahorros anuales > inversión ÷ años esperados",
      "No se analiza",
      "Siempre es viable"
    ],
    correctaTexto: "Análisis VAN, TIR, payback: genera ahorros anuales > inversión ÷ años esperados",
    explicacion: "Viabilidad económica: Payback 5-7 años, TIR 10-15%, VAN positivo. Considera: costo instalación, ahorros anuales, inflación, mantenimiento, cambios regulatorios."
  },
  {
    id: 13040,
    tema: 13,
    texto: "¿Qué es el SCADA (Supervisory Control) en instalaciones FV grandes?",
    opciones: [
      "Un tipo de panel",
      "Sistema de monitoreo remoto en tiempo real: potencia, energía, fallas, temperatura",
      "Un regulador",
      "No existe"
    ],
    correctaTexto: "Sistema de monitoreo remoto en tiempo real: potencia, energía, fallas, temperatura",
    explicacion: "SCADA: monitoreo telemétrico de instalaciones. Registra: potencia AC/DC, irradiancia, temperatura, eficiencia, fallas. Esencial para plantas >100kW y troubleshooting."
  },
  {
    id: 13041,
    tema: 13,
    texto: "¿Cuál es el criterio de selección de inversor en términos de potencia?",
    opciones: [
      "Mayor potencia siempre",
      "Potencia AC ≈ 80-90% potencia DC pico (genera menor coste y mejor eficiencia)",
      "Potencia AC = Potencia DC exacta",
      "Sin criterio especial"
    ],
    correctaTexto: "Potencia AC ≈ 80-90% potencia DC pico (genera menor coste y mejor eficiencia)",
    explicacion: "Sobredimensionar inversor es ineficiente (operación a baja carga = bajo rendimiento). Ratio típico: inversor 0.8-0.9 × paneles peak da mejor eficiencia y costo."
  },
  {
    id: 13042,
    tema: 13,
    texto: "¿Qué es el 'clipping' o recorte de potencia en instalaciones FV?",
    opciones: [
      "Reducción física de paneles",
      "Limitación de potencia AC cuando paneles generan más que capacidad del inversor",
      "Un defecto de fabricación",
      "No existe"
    ],
    correctaTexto: "Limitación de potencia AC cuando paneles generan más que capacidad del inversor",
    explicacion: "Clipping: cuando irradiancia es alta (>1000W/m²), paneles generan más potencia que inversor puede convertir/inyectar. Reduce energía 2-5% anual si ratio inversor <0.7."
  },
  {
    id: 13043,
    tema: 13,
    texto: "¿Cómo se protege una instalación FV contra sobretensiones por rayo?",
    opciones: [
      "No se protege",
      "Usar descargadores de sobretensión (SPD) en entrada DC e inversores de protección tipo B",
      "Solo con fusibles",
      "Con un cable a tierra"
    ],
    correctaTexto: "Usar descargadores de sobretensión (SPD) en entrada DC e inversores de protección tipo B",
    explicacion: "Protección rayo: SPD clase II en entrada DC, inversor con protección tipo B (coordina con SPD externo). Reducción de riesgo pero sin eliminación total en zonas de rayo frecuente."
  },
  {
    id: 13044,
    tema: 13,
    texto: "¿Qué diferencia hay entre un inversor string y un microinversor en diseño?",
    opciones: [
      "No hay diferencia",
      "String: centralizado, afecta a toda cadena; Micro: uno por panel, independencia ante sombras",
      "Solo el tamaño",
      "Solo el color"
    ],
    correctaTexto: "String: centralizado, afecta a toda cadena; Micro: uno por panel, independencia ante sombras",
    explicacion: "String: 1 inversor para múltiples paneles en serie. Micro: 1 inversor/panel. Micro mejor con sombras heterogéneas y ampliaciones, pero mayor costo y 1-2% pérdida eficiencia."
  },
  {
    id: 13045,
    tema: 13,
    texto: "¿Cuántos módulos pueden conectarse en una cadena sin exceder tensión máxima?",
    opciones: [
      "Ilimitados",
      "N_paneles = V_max_inversor ÷ (Voc_panel × 1.25_factor_frío), típicamente 8-15 paneles",
      "Solo 1 cadena",
      "No hay límite"
    ],
    correctaTexto: "N_paneles = V_max_inversor ÷ (Voc_panel × 1.25_factor_frío), típicamente 8-15 paneles",
    explicacion: "Ejemplo: Inversor 600V, Voc panel 45V, factor frío 1.25: N = 600 ÷ (45 × 1.25) = 10.7 paneles máximo en serie por cadena."
  },
  {
    id: 13046,
    tema: 13,
    texto: "¿Qué es la integración arquitectónica en diseño FV?",
    opciones: [
      "Pintar paneles de colores",
      "Integrar paneles como parte funcional del edificio (BIPV): techos, fachadas, pérgolas",
      "Solo en decoración",
      "No existe"
    ],
    correctaTexto: "Integrar paneles como parte funcional del edificio (BIPV): techos, fachadas, pérgolas",
    explicacion: "BIPV (Building-Integrated PV): paneles reemplazan materiales de construcción (tejas, vidrios). Reduce costos de instalación pero puede limitar rendimiento si hay sombras."
  },
  {
    id: 13047,
    tema: 13,
    texto: "¿Cómo se valida si la potencia de instalación es suficiente?",
    opciones: [
      "Solo mirando los paneles",
      "Comparar energía anual generada vs consumo anual (conectada red) o vs consumo + autonomía (aislada)",
      "Sin validación",
      "Depende del color"
    ],
    correctaTexto: "Comparar energía anual generada vs consumo anual (conectada red) o vs consumo + autonomía (aislada)",
    explicacion: "Validación energética: Energía FV anual ≥ Consumo anual (red) ÷ factor_seguridad. Para aislada: (Consumo anual) ÷ (días_autonomía × factor_seguridad) = capacidad requerida."
  },
  {
    id: 13048,
    tema: 13,
    texto: "¿Qué es el 'tilt angle' óptimo y cómo varía según estación?",
    opciones: [
      "No existe óptimo",
      "Ángulo inclinación: óptimo anual ~latitud; varía verano (menor) invierno (mayor) para máxima energía",
      "Siempre el mismo",
      "Depende del inversor"
    ],
    correctaTexto: "Ángulo inclinación: óptimo anual ~latitud; varía verano (menor) invierno (mayor) para máxima energía",
    explicacion: "Inclinación óptima anual ~latitud. Variación estacional: en sistemas con seguidor, reducir invierno mejora captura; en fijos, latitud es buen compromiso anual."
  },
  {
    id: 13049,
    tema: 13,
    texto: "¿Cuál es el impacto del polvo y suciedad en diseño?",
    opciones: [
      "Ninguno",
      "Reducción 2-5% energía anual; se prevé limpieza periódica (2-4 veces/año)",
      "Solo en verano",
      "Mejora la eficiencia"
    ],
    correctaTexto: "Reducción 2-5% energía anual; se prevé limpieza periódica (2-4 veces/año)",
    explicacion: "Suciedad/polvo reduce transmitancia ~2-5% anual. Diseño debe incluir: acceso para limpieza, presupuesto de mantenimiento, evaluación de zona (agrícola = más sucio)."
  },
  {
    id: 13050,
    tema: 13,
    texto: "¿Qué es el balance de energía en una instalación fotovoltaica?",
    opciones: [
      "Un número aleatorio",
      "Energía generada vs consumida; en red: balance neto; en aislada: baterías balancean variaciones",
      "Solo en invierno",
      "No existe"
    ],
    correctaTexto: "Energía generada vs consumida; en red: balance neto; en aislada: baterías balancean variaciones",
    explicacion: "Balance energético: compara producción FV vs demanda hora a hora. En red: inyecta exceso, importa falta. En aislada: baterías absorben exceso, entregan falta."
  },
  {
    id: 13051,
    tema: 13,
    texto: "¿Cómo se dimensiona un regulador MPPT vs PWM en comparativa?",
    opciones: [
      "No hay diferencia en dimensionamiento",
      "Ambos: Isc_paneles × 1.25; MPPT es superior en eficiencia; PWM más económico",
      "Solo MPPT existe",
      "Solo PWM se usa"
    ],
    correctaTexto: "Ambos: Isc_paneles × 1.25; MPPT es superior en eficiencia; PWM más económico",
    explicacion: "Cálculo idéntico: regulador_I = Isc_cadena × 1.25. Diferencia: MPPT 95-99% eficiencia (20-30% más energía); PWM 75-90% eficiencia, costo menor."
  },
  {
    id: 13052,
    tema: 13,
    texto: "¿Qué documento registra las pruebas finales de una instalación FV?",
    opciones: [
      "Solo la factura",
      "Certificado de puesta en marcha con mediciones: tensión, corriente, potencia, aislamiento, tierras",
      "Un simple recibo",
      "No se documenta"
    ],
    correctaTexto: "Certificado de puesta en marcha con mediciones: tensión, corriente, potencia, aislamiento, tierras",
    explicacion: "Acta de puesta en marcha obligatoria: registra mediciones de funcionamiento, verificación seguridad (aislamiento, tierras, sobrecargas), conformidad normativa."
  },
  {
    id: 13053,
    tema: 13,
    texto: "¿Cuál es la vida útil esperada de un inversor fotovoltaico?",
    opciones: [
      "3 años",
      "10-15 años típico; requiere revisión/cambio después de 10 años",
      "Indefinida",
      "2 años"
    ],
    correctaTexto: "10-15 años típico; requiere revisión/cambio después de 10 años",
    explicacion: "Inversores actuales: vida útil 10-15 años. Componentes electrónico s se degradan; se recomienda revisión/cambio preventivo a los 10 años para garantizar seguridad."
  },
  {
    id: 13054,
    tema: 13,
    texto: "¿Qué es el monitoreo energético en instalaciones FV?",
    opciones: [
      "No es importante",
      "Seguimiento continuo de generación y consumo para validar rendimiento y detectar fallos",
      "Solo mirar el panel",
      "No existe"
    ],
    correctaTexto: "Seguimiento continuo de generación y consumo para validar rendimiento y detectar fallos",
    explicacion: "Monitoreo: aplicaciones de inversor/regulador registran producción diaria/anual. Permite validar rendimiento (comparar vs simulación), detectar fallas temprano, optimizar consumo."
  },
  {
    id: 13055,
    tema: 13,
    texto: "¿Cómo se previene la corrosión en sistemas FV en zonas costeras?",
    opciones: [
      "No se previene",
      "Usar materiales inoxidables (aluminio anodizado, acero galvanizado), PV-rated cableado, conectores resistentes",
      "Pintar los paneles",
      "No afecta en costas"
    ],
    correctaTexto: "Usar materiales inoxidables (aluminio anodizado, acero galvanizado), PV-rated cableado, conectores resistentes",
    explicacion: "Ambientes salinos: estructuras aluminio anodizado, cableado PV-rated (anti-UV, anti-sal), conectores MC4 resistentes, mantenimiento anual (limpieza, inspección)."
  },
  {
    id: 13056,
    tema: 13,
    texto: "¿Qué es el 'shading loss' y cómo se minimiza en diseño?",
    opciones: [
      "No existe",
      "Pérdida por sombras; minimiza con estudio sombras, orientación óptima, diodos bypass, microinversores",
      "Solo en invierno",
      "Afecta solo paneles defectuosos"
    ],
    correctaTexto: "Pérdida por sombras; minimiza con estudio sombras, orientación óptima, diodos bypass, microinversores",
    explicacion: "Shading loss: 5-15% típico en zonas urbanas. Reducción: estudio sombras completo, diodos bypass en paneles, microinversores si sombras heterogéneas, orientación evitando obstáculos."
  },
  {
    id: 13057,
    tema: 13,
    texto: "¿Cuál es el mantenimiento preventivo recomendado en diseño?",
    opciones: [
      "Ninguno",
      "Limpieza 2-3 veces/año, inspección anual de conexiones, verificación baterías (si aislada), pruebas de seguridad cada 5 años",
      "Solo si se rompe",
      "Cambio anual de componentes"
    ],
    correctaTexto: "Limpieza 2-3 veces/año, inspección anual de conexiones, verificación baterías (si aislada), pruebas de seguridad cada 5 años",
    explicacion: "Plan mantenimiento: limpieza paneles, revisión visual conexiones, termografía (si presupuesto), verificación baterías, pruebas de aislamiento y tierra cada 5 años."
  }
];
