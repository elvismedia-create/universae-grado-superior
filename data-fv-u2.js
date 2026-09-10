// TEMA_FV_U2: Fundamentos de energía solar fotovoltaica (67 preguntas - IDs 12001-12067)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U2_DATA = [
  // ========== EXAMEN OFICIAL (10 preguntas) ==========
  {
    id: 12001,
    tema: 12,
    texto: "Se denomina albedo o radiación reflejada a: (TEST OFICIAL)",
    opciones: [
      "Energía procedente del reflejo de la radiación solar sobre objetos y sobre la superficie terrestre",
      "Energía procedente de forma directa desde el sol",
      "Energía procedente de a atmósfera debido a la dispersión de la radiación solar",
      "Energía procedente de la capacidad térmica de las partículas en suspensión"
    ],
    correctaTexto: "Energía procedente del reflejo de la radiación solar sobre objetos y sobre la superficie terrestre",
    explicacion: "El albedo es la fracción de radiación solar que se refleja en la atmósfera y superficie terrestre. Superficies blancas/arena tienen albedo alto (0.3-0.5); superficies oscuras bajo albedo (0.05-0.15)."
  },
  {
    id: 12002,
    tema: 12,
    texto: "¿Cuál es la orientación óptima para maximizar la producción energética en España?: (TEST OFICIAL)",
    opciones: [
      "Orientación Norte",
      "Orientación Este",
      "Orientación Sur",
      "Orientación Oeste"
    ],
    correctaTexto: "Orientación Sur",
    explicacion: "En el hemisferio norte, la orientación sur (azimut 180°) maximiza la radiación solar anual. El sol recorre el cielo de este a oeste pasando por el sur, maximizando la energía captada."
  },
  {
    id: 12003,
    tema: 12,
    texto: "Señala la respuesta correcta: (TEST OFICIAL)",
    opciones: [
      "Cuanto mayor sea la longitud del cableado, menor sección se necesitará",
      "La caída de tensión será menor en grandes distancias de cableado",
      "Se aumentará la sección del cableado para reducir la caída de tensión y las pérdidas en el cableado",
      "Ninguna de las anteriores es correcta"
    ],
    correctaTexto: "Se aumentará la sección del cableado para reducir la caída de tensión y las pérdidas en el cableado",
    explicacion: "La caída de tensión V = 2·ρ·L·I/S. Para reducir V en distancias largas, debe aumentarse S (sección). Fórmula: S = (2·L·I)/(ρ·V_max) donde V_max es caída permitida."
  },
  {
    id: 12004,
    tema: 12,
    texto: "La energía recibida en un panel solar depende de las radiaciones: (TEST OFICIAL)",
    opciones: [
      "Directa",
      "Reflejada",
      "Difusa",
      "Todas las anteriores son correctas"
    ],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "Radiación total = Radiación directa (haz solar directo) + Radiación difusa (dispersada por atmósfera) + Radiación reflejada (albedo). En días nublados, solo difusa; en días despejados, principalmente directa."
  },
  {
    id: 12005,
    tema: 12,
    texto: "La irradiancia es: (TEST OFICIAL)",
    opciones: [
      "La medida de la energía solar que recibe una unidad de superficie en tiempo concreto Wh/m2",
      "Parte de la radiación que es devuelta fuera de la tierra debido a la presencia de nubes",
      "La medida de energía solar que recibe un panel solar a lo largo de su vida útil",
      "Medida de la potencia solar incidente por unidad de superficie W/m2"
    ],
    correctaTexto: "Medida de la potencia solar incidente por unidad de superficie W/m2",
    explicacion: "Irradiancia (W/m²): potencia instantánea. Irradiación (Wh/m² o kWh/m²): energía acumulada en tiempo. Condiciones estándar: 1000 W/m² a 25°C y masa de aire 1.5."
  },
  {
    id: 12006,
    tema: 12,
    texto: "Para el dimensionamiento de un generador fotovoltaico se deberá tener en cuenta: (TEST OFICIAL)",
    opciones: [
      "Las corrientes de cortocircuito",
      "La potencia valle",
      "Los valores puntuales de potencia",
      "El consumo estimado o medido de la instalación"
    ],
    correctaTexto: "El consumo estimado o medido de la instalación",
    explicacion: "El dimensionamiento del generador FV debe basarse en el consumo de energía (kWh/año) de la instalación, no solo en valores de potencia. Es fundamental realizar auditoría de consumo primero."
  },
  {
    id: 12007,
    tema: 12,
    texto: "Las instalaciones deberán contar como mínimo de una toma de tierra cuando: (TEST OFICIAL)",
    opciones: [
      "Se superen los 48 V de tensión nominal",
      "Se superen los 12 v de tensión nominal",
      "Se superen los 24 v de tensión nominal",
      "Se superen los 64 v de tensión nominal"
    ],
    correctaTexto: "Se superen los 48 V de tensión nominal",
    explicacion: "Según norma IEC 61936, instalaciones FV requieren puesta a tierra cuando superan 48V de tensión nominal. Es obligatorio por seguridad contra choques eléctricos indirectos."
  },
  {
    id: 12008,
    tema: 12,
    texto: "Las instalaciones fotovoltaicas con seguidor solar se diferencian de las instalaciones fijas en: (TEST OFICIAL)",
    opciones: [
      "Son más económicas",
      "Presentan menos pérdidas en el cableado",
      "Modifican su inclinación para maximizar la captación de radiación solar",
      "No presentan diferencias"
    ],
    correctaTexto: "Modifican su inclinación para maximizar la captación de radiación solar",
    explicacion: "Seguidor solar: sistema motorizado que ajusta azimut y/o elevación según posición solar. Aumenta energía 20-40% pero requiere mantenimiento mecánico y control electrónico."
  },
  {
    id: 12009,
    tema: 12,
    texto: "Los factores atmosféricos que hay que tener en cuenta para llevar a cabo un estudio de ración solar son: (TEST OFICIAL)",
    opciones: [
      "Dispersión, reflexión, difracción y absorción",
      "Dispersión, trayectoria solar y absorción",
      "Únicamente la reflexión y difracción",
      "Ninguna de las anteriores es correcta"
    ],
    correctaTexto: "Dispersión, reflexión, difracción y absorción",
    explicacion: "Efectos atmosféricos: Dispersión (Rayleigh, Mie), Absorción (O₃, H₂O, CO₂), Reflexión (nubes, albedo), Difracción. Todos reducen radiación directa disponible en superficie."
  },
  {
    id: 12010,
    tema: 12,
    texto: "Uno de los inconvenientes del uso de la radiación solar incidente como recurso energético es: (TEST OFICIAL)",
    opciones: [
      "Que no es un recurso renovable",
      "Su escasa disponibilidad",
      "Su dispersión es elevada",
      "No tiene ningún inconveniente ya que es energía procedente del sol"
    ],
    correctaTexto: "Su dispersión es elevada",
    explicacion: "Desventaja: radiación solar es dispersa (~1000 W/m² máximo, típicamente 150-200W/m² promedio). Requiere grandes superficies para potencias significativas vs fuentes concentradas."
  },

  // ========== PREGUNTAS COMPLEMENTARIAS (57 preguntas) ==========
  {
    id: 12011,
    tema: 12,
    texto: "¿Cuál es la composición del espectro solar que llega a la Tierra?",
    opciones: [
      "Solo luz visible",
      "Radiación ultravioleta (3%), visible (44%), infrarroja (53%)",
      "Solo infrarroja",
      "Principalmente ondas de radio"
    ],
    correctaTexto: "Radiación ultravioleta (3%), visible (44%), infrarroja (53%)",
    explicacion: "El espectro solar en la atmósfera superior es AM0 (Air Mass 0). En superficie (AM 1.5): UV 3%, visible 44%, IR 53%. Las células fotovoltaicas aprovechan principalmente visible e IR cercano."
  },
  {
    id: 12012,
    tema: 12,
    texto: "¿Qué es la 'Constante Solar'?",
    opciones: [
      "Un valor que cambia diariamente",
      "Potencia solar incidente en órbita terrestre ~1361 W/m² (AM0)",
      "La radiación en días nublados",
      "Un parámetro del inversor"
    ],
    correctaTexto: "Potencia solar incidente en órbita terrestre ~1361 W/m² (AM0)",
    explicacion: "Constante solar: ~1361 W/m² es la radiación extraterrestre. En superficie terrestre bajo condiciones estándar (AM1.5) se reduce a ~1000 W/m² por efectos atmosféricos."
  },
  {
    id: 12013,
    tema: 12,
    texto: "¿Qué es 'Air Mass' (AM) en energía solar?",
    opciones: [
      "La masa del panel",
      "Relación entre recorrido atmosférico de rayos solares vs recorrido vertical (AM0=órbita, AM1.5=superficie 48°)",
      "La cantidad de aire en el panel",
      "No existe tal concepto"
    ],
    correctaTexto: "Relación entre recorrido atmosférico de rayos solares vs recorrido vertical (AM0=órbita, AM1.5=superficie 48°)",
    explicacion: "Air Mass: AM0 (órbita) = 1361 W/m²; AM1.5 (31° elevación solar, estándar prueba) = 1000 W/m²; AM2 (30° elevación) = 800 W/m². Define espectro y potencia disponible."
  },
  {
    id: 12014,
    tema: 12,
    texto: "¿Cuál es el efecto de las nubes en la irradiancia?",
    opciones: [
      "No tienen efecto",
      "Eliminan radiación directa, dejan difusa; reducen irradiancia 50-90% según espesor",
      "Aumentan la radiación",
      "Solo afectan a paneles defectuosos"
    ],
    correctaTexto: "Eliminan radiación directa, dejan difusa; reducen irradiancia 50-90% según espesor",
    explicacion: "Nubes densas: 90% reducción (solo difusa). Nubes ligeras: 30-50% reducción (directa debilitada + difusa). En días completamente nublados: ~150-200 W/m² (15-20% del máximo)."
  },
  {
    id: 12015,
    tema: 12,
    texto: "¿Qué es la 'hora solar pico' (HSP)?",
    opciones: [
      "La hora del mediodía",
      "Equivalente de horas a irradiancia 1000 W/m² que produce misma energía que radiación real diaria",
      "La hora de máxima temperatura",
      "No existe"
    ],
    correctaTexto: "Equivalente de horas a irradiancia 1000 W/m² que produce misma energía que radiación real diaria",
    explicacion: "HSP: si irradiación diaria = 5 kWh/m² y panel 1 kW, energía = 5 kWh. HSP = 5 horas equivalentes a 1000 W/m². España: 4-6 HSP/día según región y estación."
  },
  {
    id: 12016,
    tema: 12,
    texto: "¿Cómo varía la radiación solar a lo largo del año en España?",
    opciones: [
      "Es constante",
      "Máxima en verano (elevación solar alta), mínima en invierno (elevación baja)",
      "Máxima en invierno",
      "No hay patrón"
    ],
    correctaTexto: "Máxima en verano (elevación solar alta), mínima en invierno (elevación baja)",
    explicacion: "En verano: elevación solar ~75°, HSP ~6-7 h/día. En invierno: elevación ~30°, HSP ~2-3 h/día. Variación: 2-3× entre verano e invierno en zonas templadas."
  },
  {
    id: 12017,
    tema: 12,
    texto: "¿Qué es la 'Declinación Solar'?",
    opciones: [
      "El ángulo de inclinación de paneles",
      "Ángulo entre plano ecuatorial y dirección del sol; varía ±23.45° a lo largo del año",
      "La orientación sur",
      "No existe"
    ],
    correctaTexto: "Ángulo entre plano ecuatorial y dirección del sol; varía ±23.45° a lo largo del año",
    explicacion: "Declinación: δ = 0° en equinoccios (mar/sep), δ = +23.45° en solsticio verano (jun), δ = -23.45° en solsticio invierno (dic). Define elevación solar máxima del día."
  },
  {
    id: 12018,
    tema: 12,
    texto: "¿Qué influencia tiene la latitud geográfica en la radiación solar?",
    opciones: [
      "No influye",
      "Mayor latitud = menor radiación anual; define ángulo elevación solar máxima",
      "Mayor latitud = mayor radiación",
      "Afecta solo en verano"
    ],
    correctaTexto: "Mayor latitud = menor radiación anual; define ángulo elevación solar máxima",
    explicacion: "Latitud determina elevación solar máxima = 90° - latitud ± declinación. España (40°N): elevación máxima ~73° (verano), mínima ~26° (invierno). Radiación anual decrece hacia polos."
  },
  {
    id: 12019,
    tema: 12,
    texto: "¿Cómo se mide la radiación solar en superficie?",
    opciones: [
      "A ojo",
      "Piranómetro (sensor con célula termoeléctrica) mide irradiancia en plano horizontal",
      "Solo con paneles solares",
      "No se puede medir"
    ],
    correctaTexto: "Piranómetro (sensor con célula termoeléctrica) mide irradiancia en plano horizontal",
    explicacion: "Piranómetro: instrumento estándar que mide radiación global (directa + difusa) en W/m². Radiación directa se mide con pirheliómetro (tubo colimador). Datos registrados cada 1-15 min."
  },
  {
    id: 12020,
    tema: 12,
    texto: "¿Qué es la 'Radiación Directa Normal' (DNI)?",
    opciones: [
      "La radiación horizontal",
      "Radiación solar directa perpendicular a los rayos solares; varía con hora y claridad",
      "Solo en días claros",
      "No existe"
    ],
    correctaTexto: "Radiación solar directa perpendicular a los rayos solares; varía con hora y claridad",
    explicacion: "DNI (Direct Normal Irradiance): radiación perpendicular a los rayos. En días claros máxima (~900 W/m²); en nublados baja a ~200 W/m². Es la componente aprovechada por concentradores."
  },
  {
    id: 12021,
    tema: 12,
    texto: "¿Cuál es la relación entre radiación directa, difusa y global?",
    opciones: [
      "Dirección = Global",
      "Global = Directa + Difusa (aproximación sin albedo)",
      "Difusa = Global",
      "No hay relación"
    ],
    correctaTexto: "Global = Directa + Difusa (aproximación sin albedo)",
    explicacion: "Radiación global horizontal = Radiación directa × cos(ángulo incidencia) + Radiación difusa. Con albedo: Global = Directa + Difusa + Albedo. Proporción varía: cielo claro ~80% directa, nublado ~100% difusa."
  },
  {
    id: 12022,
    tema: 12,
    texto: "¿Qué es el 'Ángulo de Incidencia'?",
    opciones: [
      "La inclinación del panel",
      "Ángulo entre rayos solares y normal a la superficie; afecta radiación captada = G × cos(θ)",
      "La orientación",
      "No existe"
    ],
    correctaTexto: "Ángulo entre rayos solares y normal a la superficie; afecta radiación captada = G × cos(θ)",
    explicacion: "Radiación útil = Radiación global × cos(ángulo incidencia). Si θ=0° (normal): 100% captada. Si θ=60°: cos(60°)=0.5, solo 50% captada. Explica importancia de orientación e inclinación."
  },
  {
    id: 12023,
    tema: 12,
    texto: "¿Cómo afecta la altitud al recurso solar?",
    opciones: [
      "Mayor altitud = menor radiación",
      "Mayor altitud = mayor radiación (menos atmósfera a atravesar, Rayleigh scattering menor)",
      "No afecta",
      "Afecta solo en montañas"
    ],
    correctaTexto: "Mayor altitud = mayor radiación (menos atmósfera a atravesar, Rayleigh scattering menor)",
    explicacion: "A mayor altitud: menos absorción atmosférica (~1% aumento por cada 1000m). La radiación puede aumentar 10-30% en altitudes 1000-3000m vs nivel del mar."
  },
  {
    id: 12024,
    tema: 12,
    texto: "¿Qué es la 'Temperatura de Color' de la radiación solar?",
    opciones: [
      "El color azul del cielo",
      "Aproximadamente 5778 K (temperatura equivalente de cuerpo negro solar)",
      "La temperatura del panel",
      "No existe"
    ],
    correctaTexto: "Aproximadamente 5778 K (temperatura equivalente de cuerpo negro solar)",
    explicacion: "Temperatura color solar ~5778K. En superficie aumenta a ~5900K por absorción de IR. Define espectro: más azul en altitud, más rojo en sunset (recorrido largo atmósfera)."
  },
  {
    id: 12025,
    tema: 12,
    texto: "¿Cómo varía la radiación a lo largo del día?",
    opciones: [
      "Es constante",
      "Cero al amanecer, máxima en mediodía solar (12h solar), cero al anochecer; curva suave",
      "Máxima al amanecer",
      "No hay variación"
    ],
    correctaTexto: "Cero al amanecer, máxima en mediodía solar (12h solar), cero al anochecer; curva suave",
    explicacion: "Perfil diario: radiación sigue curva cosenoidal. Máximo ~12h solar (cuando el sol está más alto). Pendiente depende de claridad: días claros = pendiente abrupta, nublados = plana."
  },
  {
    id: 12026,
    tema: 12,
    texto: "¿Qué es un 'Día Típico Meteorológico' (TMY)?",
    opciones: [
      "Un día cualquiera",
      "Año sintético de datos meteorológicos/radiación típicos para zona, con 12 meses de datos históricos",
      "El día más nublado",
      "No existe"
    ],
    correctaTexto: "Año sintético de datos meteorológicos/radiación típicos para zona, con 12 meses de datos históricos",
    explicacion: "TMY (Typical Meteorological Year): base de datos horaria construida con datos históricos reales. Se usa para simulaciones de rendimiento FV. PVGIS proporciona TMY para cualquier ubicación."
  },
  {
    id: 12027,
    tema: 12,
    texto: "¿Cuál es el rango de radiación global en España?",
    opciones: [
      "500-800 kWh/m²/año",
      "1200-1800 kWh/m²/año",
      "2500+ kWh/m²/año",
      "Menos de 500 kWh/m²/año"
    ],
    correctaTexto: "1200-1800 kWh/m²/año",
    explicacion: "España: radiación varía norte (1200 kWh/m²/año) a sur (1700-1800 kWh/m²/año). Zonas desérticas suroeste: hasta 1900 kWh/m²/año. Contexto global: máximo ~2500 kWh/m²/año en desiertos."
  },
  {
    id: 12028,
    tema: 12,
    texto: "¿Qué es la 'Ecuación del Tiempo'?",
    opciones: [
      "Una fórmula matemática",
      "Corrección (~±16 min) entre tiempo solar verdadero y tiempo oficial por órbita elíptica",
      "El tiempo de funcionamiento",
      "No existe"
    ],
    correctaTexto: "Corrección (~±16 min) entre tiempo solar verdadero y tiempo oficial por órbita elíptica",
    explicacion: "Ecuación del Tiempo: corrección debida a excentricidad orbital y oblicuidad. 12h solar (máximo) no siempre coincide 12:00 oficial. Máxima diferencia ~±16 minutos."
  },
  {
    id: 12029,
    tema: 12,
    texto: "¿Cómo influyen los aerosoles en la radiación solar?",
    opciones: [
      "No influyen",
      "Reducen radiación directa (absorción, dispersión); efecto depende concentración y tipo",
      "Aumentan la radiación",
      "Solo en verano"
    ],
    correctaTexto: "Reducen radiación directa (absorción, dispersión); efecto depende concentración y tipo",
    explicacion: "Aerosoles: partículas en suspensión (polvo, sal marina, contaminación). Reducen radiación directa 5-20% según tipos; aumentan ligeramente difusa. Efecto mayor en ciudades industriales."
  },
  {
    id: 12030,
    tema: 12,
    texto: "¿Qué es el 'Índice Ángulo Zenital'?",
    opciones: [
      "La altura del panel",
      "Ángulo entre rayos solares y vertical (zenith); 0°=overhead, 90°=horizonte",
      "La orientación",
      "No existe"
    ],
    correctaTexto: "Ángulo entre rayos solares y vertical (zenith); 0°=overhead, 90°=horizonte",
    explicacion: "Ángulo zenital = 90° - Elevación solar. Elevación = 90° → Zenital = 0° (sol overhead). Radiación = G × cos(Zenital). Es el complemento de elevación solar."
  },
  {
    id: 12031,
    tema: 12,
    texto: "¿Cómo afecta la absorción de ozono a la radiación solar?",
    opciones: [
      "No afecta",
      "Absorbe principalmente UV (protege); reduce radiación UV en superficie ~99%",
      "Reduce radiación visible",
      "Aumenta radiación"
    ],
    correctaTexto: "Absorbe principalmente UV (protege); reduce radiación UV en superficie ~99%",
    explicacion: "Ozono (O₃) en estratosfera absorbe UV (<350nm). Sin ozono: UV alcanzaría superficie (letal). Efectos: protección biológica, pero no afecta significativamente a paneles FV (responden principalmente visible)."
  },
  {
    id: 12032,
    tema: 12,
    texto: "¿Cuál es la relación entre insolación y irradiación?",
    opciones: [
      "Términos sinónimos",
      "Insolación = irradiación integrada en tiempo; duración de luz solar",
      "No hay relación",
      "Insolación es radiación visible"
    ],
    correctaTexto: "Insolación = irradiación integrada en tiempo; duración de luz solar",
    explicacion: "Irradiancia (W/m²) instantánea; Irradiación (Wh/m² o kWh/m²) energía integrada. Insolación: duración total de luz solar (horas). Relación: Irradiación = Insolación media × duración."
  },
  {
    id: 12033,
    tema: 12,
    texto: "¿Qué es 'Clearness Index' (Kt)?",
    opciones: [
      "Un color del cielo",
      "Ratio radiación horizontal vs radiación extraterrestre; Kt=1 cielo claro, <0.3 muy nublado",
      "La claridad visual",
      "No existe"
    ],
    correctaTexto: "Ratio radiación horizontal vs radiación extraterrestre; Kt=1 cielo claro, <0.3 muy nublado",
    explicacion: "Clearness Index Kt = (Radiación horizontal) / (Radiación extraterrestre). Kt > 0.75: cielo claro. Kt 0.5-0.75: parcialmente nublado. Kt < 0.5: muy nublado."
  },
  {
    id: 12034,
    tema: 12,
    texto: "¿Cómo se relacionan inclinación y azimut con la radiación captada?",
    opciones: [
      "Solo importa uno",
      "Inclinación: ángulo vs horizontal (~latitud óptimo); Azimut: dirección (sur óptimo); ambos críticos",
      "No importan",
      "Solo varía en verano"
    ],
    correctaTexto: "Inclinación: ángulo vs horizontal (~latitud óptimo); Azimut: dirección (sur óptimo); ambos críticos",
    explicacion: "Inclinación óptima ~latitud maximiza anual; azimut sur (180°) en hemisferio norte. Desviaciones: ±20° azimut <5% pérdida; ±15° inclinación ~5-10% pérdida. Ambos son parámetros de diseño críticos."
  },
  {
    id: 12035,
    tema: 12,
    texto: "¿Qué es la 'Radiación Global Horizontal' (GHI)?",
    opciones: [
      "La radiación en un panel inclinado",
      "Radiación total (directa + difusa) en superficie horizontal; estándar de medición",
      "Solo radiación visible",
      "No existe"
    ],
    correctaTexto: "Radiación total (directa + difusa) en superficie horizontal; estándar de medición",
    explicacion: "GHI (Global Horizontal Irradiance): suma de radiación directa normal (proyectada) + radiación difusa, en plano horizontal. Es el dato más disponible en bases de datos (ej. PVGIS)."
  },
  {
    id: 12036,
    tema: 12,
    texto: "¿Cómo se obtiene radiación en plano inclinado a partir de GHI?",
    opciones: [
      "No se puede",
      "Modelos (Hay, Perez): estiman difusa inclinada + directa (ángulo incidencia) + albedo reflejada",
      "Multiplicación simple",
      "No es necesario"
    ],
    correctaTexto: "Modelos (Hay, Perez): estiman difusa inclinada + directa (ángulo incidencia) + albedo reflejada",
    explicacion: "Software especializado (PVGIS, PVsyst): transforma GHI → POA (Plane of Array). Considera: ángulo incidencia (cos), difusa isotrópica, albedo. Cálculos complejos pero esenciales para diseño."
  },
  {
    id: 12037,
    tema: 12,
    texto: "¿Qué significa 'Coeficiente de Transmitancia'?",
    opciones: [
      "La potencia del panel",
      "Fracción de radiación transmitida a través de vidrio (~90-93%); pérdidas por reflexión",
      "La inclinación",
      "No existe"
    ],
    correctaTexto: "Fracción de radiación transmitida a través de vidrio (~90-93%); pérdidas por reflexión",
    explicacion: "Vidrio panel fotovoltaico: transmitancia ~90-93% (pérdidas reflexión 7-10%). Suciedad reduce transmitancia adicional 2-5%. Factor importante en cálculos de rendimiento real."
  },
  {
    id: 12038,
    tema: 12,
    texto: "¿Cuál es el impacto de la 'Masa de Aire' (AM) en el espectro solar?",
    opciones: [
      "No hay impacto",
      "Mayor AM = espectro más rojo (absorción UV/azul); AM0 azul, AM1.5 blanco, AM2 rojo",
      "Mayor AM = más azul",
      "Afecta solo temperatura"
    ],
    correctaTexto: "Mayor AM = espectro más rojo (absorción UV/azul); AM0 azul, AM1.5 blanco, AM2 rojo",
    explicacion: "AM0 (órbita): espectro completo azul. AM1.5 (31° elevación): espectro estándar prueba. AM2 (30°): espectro rojo por absorción UV/visible. Células responden diferente según espectro."
  },
  {
    id: 12039,
    tema: 12,
    texto: "¿Cómo varía la radiación entre días claros y nublados?",
    opciones: [
      "No varía",
      "Claro: 1000-1200 W/m² pico, nublado: 100-300 W/m² (principalmente difusa)",
      "Nublado más radiación",
      "Igual siempre"
    ],
    correctaTexto: "Claro: 1000-1200 W/m² pico, nublado: 100-300 W/m² (principalmente difusa)",
    explicacion: "Cielo claro: ~10× más irradiancia pico vs nublado. Energía diaria: claro ~8 kWh/m², nublado ~1-2 kWh/m². Pero en nublados toda la radiación es difusa (no hay sombras de objetos)."
  },
  {
    id: 12040,
    tema: 12,
    texto: "¿Qué es el 'Efecto de Coseno' en radiación solar?",
    opciones: [
      "Un cálculo trigonométrico",
      "Radiación captada = G × cos(ángulo incidencia); explica importancia de orientación/inclinación",
      "Un tipo de radiación",
      "No existe"
    ],
    correctaTexto: "Radiación captada = G × cos(ángulo incidencia); explica importancia de orientación/inclinación",
    explicacion: "Ley coseno de Lambert: flujo radiante perpendicular a superficie. Si rayos no perpendiculares: potencia = Radiación × cos(θ). Justifica necesidad de seguidor solar o inclinación óptima."
  }
];
