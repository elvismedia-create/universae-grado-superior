// TEMA_FV_U6: Conexión a red e inversores (67 preguntas - IDs 16001-16067)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U6_DATA = [
  {
    id: 16001,
    tema: 16,
    texto: "El instrumento adecuado para verificar el electrólito de un acumulador es: (TEST OFICIAL)",
    opciones: ["Pinza amperimétrica", "Polímetro", "Juego de llaves", "Densímetro"],
    correctaTexto: "Densímetro",
    explicacion: "Densímetro: mide densidad electrólito (1.210-1.260 g/cm³ en baterías plomo-ácido). Indica estado carga: baja densidad = baja carga. Esencial en mantenimiento."
  },
  {
    id: 16002,
    tema: 16,
    texto: "Del análisis de la frecuencia de las averías, su origen y cualquier otra información relacionada con ellas se pueden extraer conclusiones que permitan reducir e incluso evitar su reparación, por eso es fundamental: (TEST OFICIAL)",
    opciones: ["Que se comuniquen vía oral al cliente", "Que los trabajadores realicen fotografías", "Que se registren en un parte para poder consultar a futuro", "Ninguna es correcta"],
    correctaTexto: "Que se registren en un parte para poder consultar a futuro",
    explicacion: "Registro fallos: historial permite identificar patrones, causas raíz, prevención. Base de datos fallos → predicción mantenimiento → reducción downtime."
  },
  {
    id: 16003,
    tema: 16,
    texto: "En instalaciones conectadas a red, es importante que en estructuras móviles: (TEST OFICIAL)",
    opciones: ["Se compruebe el nivel de electrólito", "Se compruebe el grado de inclinación y orientación", "Se compruebe que las luces indicadoras funcionan correctamente", "Se compruebe que todas las partes móviles están perfectamente lubricadas"],
    correctaTexto: "Se compruebe el grado de inclinación y orientación",
    explicacion: "Seguidores solares: verificación periódica de ángulo inclinación/azimut (motor puede desviarse). Mal posicionamiento = pérdida 5-10% energía. Calibración anual recomendada."
  },
  {
    id: 16004,
    tema: 16,
    texto: "En una instalación autónoma el usuario podrá realizar tareas de mantenimiento preventivo sobre el acumulador como: (TEST OFICIAL)",
    opciones: ["Comprobación visual que no existe sulfatación en bornes", "Que no existen elementos que puedan provocar cortocircuitos", "Que el nivel de electrólito es adecuado", "Todas las anteriores son correctas"],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "Mantenimiento batería usuario: inspección visual bornes (sulfatos blancos = oxidación), ausencia objetos metálicos, nivel electrólito (agua destilada si baja). Prevención cortocircuitos."
  },
  {
    id: 16005,
    tema: 16,
    texto: "¿Cuál de las siguientes operaciones de mantenimiento será aquella que permita reducir las pérdidas y por tanto maximizar la producción fotovoltaica en mayor medida?: (TEST OFICIAL)",
    opciones: ["Revisar las conexiones entre los módulos fotovoltaicos", "Revisar y ajustar la estructura con los módulos fotovoltaicos", "Revisar y limpiar las canalizaciones por donde se encuentra tendido el cableado", "Limpiar los módulos fotovoltaicos, retirando la suciedad sobre los mismos"],
    correctaTexto: "Limpiar los módulos fotovoltaicos, retirando la suciedad sobre los mismos",
    explicacion: "Impacto máximo: limpieza paneles (2-5% ganancia). Otros: conexiones (1-2%), estructura (0.5%), canalizaciones (0.1%). Limpieza es operación prioritaria ROI."
  },
  {
    id: 16006,
    tema: 16,
    texto: "Las operaciones de mantenimiento en los sistemas de protección y medida incluyen las siguientes operaciones: (TEST OFICIAL)",
    opciones: ["Verificar el cableado ante posibles deterioros", "Comprobación del sistema de control de inyección y consumo", "Verificación de los fusibles, magnetotérmicos y diferenciales", "Todas las anteriores son correctas"],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "Protecciones: verificar cableado (aislamiento), fusibles/magnetotérmicos (disparos falsos?), diferenciales (sensibilidad), contador (funcionamiento). Mantenimiento integral."
  },
  {
    id: 16007,
    tema: 16,
    texto: "Los fallos en el montaje en el regulador o inversor provocan: (TEST OFICIAL)",
    opciones: ["Un fallo interno por inversión de la polaridad o sobrecarga en el circuito", "Sobretensiones aguas abajo del regulador", "Durante el montaje no se suelen cometer fallos", "Corrosión en el sistema de fijación"],
    correctaTexto: "Un fallo interno por inversión de la polaridad o sobrecarga en el circuito",
    explicacion: "Fallos montaje: inversión polaridad (+ y - intercambiados) → destrucción inmediata. Sobrecarga conexión → disparo protecciones. Control calidad montaje = prevención 50% fallos."
  },
  {
    id: 16008,
    tema: 16,
    texto: "Normalmente el mantenimiento en instalaciones fotovoltaicas: (TEST OFICIAL)",
    opciones: ["Debe ser muy riguroso y con asiduidad", "Necesitan poco mantenimiento ya que no suelen presentar partes móviles", "Siempre se debe realizar cada 3 meses", "Solo se realiza mantenimiento preventivo"],
    correctaTexto: "Necesitan poco mantenimiento ya que no suelen presentar partes móviles",
    explicacion: "FV bajo mantenimiento: sin partes móviles (paneles), inversores electrónicos (no mecánico). Vs eólica (rodamientos) o turbinas (aceites). Solo limpieza + inspección periódica."
  },
  {
    id: 16009,
    tema: 16,
    texto: "Se denomina mantenimiento preventivo como: (TEST OFICIAL)",
    opciones: ["A las acciones o medidas a realizar de forma periódica sobre un equipo o instalación con el objetivo de localizar posibles fallos", "A las acciones a realizar una vez se ha producido la avería o fallo de un equipo o instalación", "Al conjunto de tareas que se realizan siempre bajo la supervisión de un técnico autorizado", "B y C son correctas"],
    correctaTexto: "A las acciones o medidas a realizar de forma periódica sobre un equipo o instalación con el objetivo de localizar posibles fallos",
    explicacion: "Preventivo: acciones periódicas (limpieza, inspección) ANTES de fallo. Correctivo: reparación DESPUÉS de fallo. Preventivo reduce costos 80% vs correctivo."
  },
  {
    id: 16010,
    tema: 16,
    texto: "Todas las averías de una instalación: (TEST OFICIAL)",
    opciones: ["Se repararán si afectan al correcto funcionamiento de la instalación", "No será necesario anotar la incidencia si la avería es superficial", "Deberán ser registradas en un parte para poder consultar a futuro", "Se recomendará al usuario que la repare por su cuenta"],
    correctaTexto: "Deberán ser registradas en un parte para poder consultar a futuro",
    explicacion: "Registro obligatorio todas averías: propósito es crear historial, identificar patrones, mejorar diseño futuro. No hay 'avería superficial' que no deba registrarse."
  },
  {
    id: 16011,
    tema: 16,
    texto: "¿Cuál es la tensión de salida estándar de un inversor FV?",
    opciones: ["110V CA", "230V CA monofásico o 400V CA trifásico", "12V DC", "500V DC"],
    correctaTexto: "230V CA monofásico o 400V CA trifásico",
    explicacion: "Inversores residenciales: 230V monofásico (vivienda). Comerciales: 400V trifásico. Especiales: 110V (mercados). Estándar España: 230V ± 10%, 50Hz ± 0.5Hz."
  },
  {
    id: 16012,
    tema: 16,
    texto: "¿Qué significa MPPT en un regulador?",
    opciones: ["Motor Power Transfer", "Maximum Power Point Tracking", "Management Photovoltaic System", "Monitoring Power Transmission"],
    correctaTexto: "Maximum Power Point Tracking",
    explicacion: "MPPT: algoritmo que rastrea continuamente punto máxima potencia. Ajusta tensión operación para maximizar I×V. Mejora eficiencia 20-30% vs PWM simple."
  },
  {
    id: 16013,
    tema: 16,
    texto: "¿Cuál es la función del 'interruptor de desconexión' general en DC?",
    opciones: ["Solo estetismo", "Aislar generador FV de regulador en caso emergencia o mantenimiento", "Aumentar voltaje", "No tiene función"],
    correctaTexto: "Aislar generador FV de regulador en caso emergencia o mantenimiento",
    explicacion: "Desconectador DC: seguridad crítica. Permite desconexión rápida paneles (si hay incendio, peligro eléctrico). Obligatorio cerca generador FV."
  },
  {
    id: 16014,
    tema: 16,
    texto: "¿Qué ocurre si se invierte la polaridad en entrada de un inversor?",
    opciones: ["Nada, funciona igual", "Destrucción inmediata del inversor", "Reducción 50% potencia", "Mayor eficiencia"],
    correctaTexto: "Destrucción inmediata del inversor",
    explicacion: "Inversión polaridad DC: cortocircuito interno, destrucción componentes (transistores, diodos). Prevención: etiquetado claro, conectores polarizados, fusibles."
  },
  {
    id: 16015,
    tema: 16,
    texto: "¿Cuál es la 'Eficiencia de Conversión' típica de un inversor?",
    opciones: ["50%", "75%", "90-98%", "Más del 100%"],
    correctaTexto: "90-98%",
    explicacion: "Inversores modernos: 95-98% eficiencia a potencia nominal. Pérdidas menores en transformadores/electrónica. Importante: eficiencia varía con carga (máxima a 50-75%)."
  },
  {
    id: 16016,
    tema: 16,
    texto: "¿Qué es un 'Descargador de Sobretensión' (SPD)?",
    opciones: ["Un panel adicional", "Dispositivo que protege contra picos tensión (rayos) derivando energía a tierra", "Un inversor especial", "No existe"],
    correctaTexto: "Dispositivo que protege contra picos tensión (rayos) derivando energía a tierra",
    explicacion: "SPD (Surge Protection Device): varistor o descargador de gas. Atrapa picos tensión transitorios. Obligatorio en plantas FV (rayo puede inducir 6000V+)."
  },
  {
    id: 16017,
    tema: 16,
    texto: "¿Cuál es la 'Impedancia de Cortocircuito' máxima permitida para conexión red?",
    opciones: ["0 Ω", "Baja, típicamente < 0.1 Ω", "1000 Ω", "Sin límite"],
    correctaTexto: "Baja, típicamente < 0.1 Ω",
    explicacion: "Impedancia baja: permite corrientes cortocircuito altas (protecciones disparan rápido). Impedancia alta: protecciones lentas, riesgos. Distribuidora especifica requisitos."
  },
  {
    id: 16018,
    tema: 16,
    texto: "¿Qué es el 'Transformador de Aislamiento' en inversores?",
    opciones: ["No existe", "Componente que aísla galvánicamente entrada DC de salida AC por seguridad", "Un transformador de voltaje", "Un regulador"],
    correctaTexto: "Componente que aísla galvánicamente entrada DC de salida AC por seguridad",
    explicacion: "Aislamiento galvánico: previene fugas corriente DC a AC (riesgo eléctrico). Algunos inversores lo incluyen (europeos), otros no (americanos). Mejora seguridad."
  },
  {
    id: 16019,
    tema: 16,
    texto: "¿Cuál es el 'Rango de Tensión de Entrada' típico de un inversor?",
    opciones: ["Fijo 48V únicamente", "Rango 100-600V DC (para múltiples cadenas paneles)", "Solo 12V", "Sin rango específico"],
    correctaTexto: "Rango 100-600V DC (para múltiples cadenas paneles)",
    explicacion: "Rango entrada inversores: típicamente 150-600V DC. Permite aceitar paneles en serie (cadenas 10-15 paneles × 40V = 400-600V). Flexibilidad diseño."
  },
  {
    id: 16020,
    tema: 16,
    texto: "¿Qué es la 'Respuesta Dinámica' de un inversor ante cambios irradiancia?",
    opciones: ["Capacidad reaccionar rápido a cambios luz → máxima energía aprovechada", "Cambio de color", "Velocidad rotación", "No existe"],
    correctaTexto: "Capacidad reaccionar rápido a cambios luz → máxima energía aprovechada",
    explicacion: "Respuesta dinámica: inversor rastrea MPP ante variaciones irradiancia (nubes pasando). Rápida respuesta = pérdidas mínimas. MPPT mejora respuesta vs PWM."
  },
  {
    id: 16021,
    tema: 16,
    texto: "¿Cuál es la función principal del 'Filtro EMI' en inversor?",
    opciones: ["Cambiar color salida", "Reducir interferencias electromagnéticas (ruido armónico) hacia red", "Aumentar potencia", "No necesario"],
    correctaTexto: "Reducir interferencias electromagnéticas (ruido armónico) hacia red",
    explicacion: "Filtro EMI: capacitores/inductores atenúan armónicos alta frecuencia. Obligatorio cumplir normativa emisiones (EN 61800-3). Previene interferencias radio/TV."
  },
  {
    id: 16022,
    tema: 16,
    texto: "¿Qué es la 'Distorsión Armónica Total' (THD) en inversor?",
    opciones: ["Temperatura", "Porcentaje de armónicos vs fundamental (THD < 5% normativa)", "Tensión solamente", "No existe"],
    correctaTexto: "Porcentaje de armónicos vs fundamental (THD < 5% normativa)",
    explicacion: "THD: armónicos = distorsión onda senoidal. < 5%: aceptable. Inversores híbridos/onda modificada pueden llegar 10-15% (aceptable para OFF-GRID)."
  },
  {
    id: 16023,
    tema: 16,
    texto: "¿Cuál es el riesgo de conectar en paralelo dos inversores sin sincronización?",
    opciones: ["Mejora eficiencia", "Corrientes circulantes destructivas, daño equipos, incendio", "Sin riesgo", "Recomendado"],
    correctaTexto: "Corrientes circulantes destructivas, daño equipos, incendio",
    explicacion: "Paralelo sin sincronismo: inversores con fase diferente generan corriente diferencial alta (destruye transformadores). Obligatorio: droop inverters o comunicación esclavo/maestro."
  },
  {
    id: 16024,
    tema: 16,
    texto: "¿Qué es 'seamless switching' en inversores híbridos?",
    opciones: ["Sin función", "Cambio red ↔ batería sin corte de cargas (transición < 20 ms)", "Cambio manual", "Lento"],
    correctaTexto: "Cambio red ↔ batería sin corte de cargas (transición < 20 ms)",
    explicacion: "Seamless: transición imperceptible inversor ↔ red. Sincronización de fase/frecuencia crítica. Evita reset dispositivos sensibles. Requerimiento en UPS/backup."
  },
  {
    id: 16025,
    tema: 16,
    texto: "¿Cuál es la 'Potencia de Salida Máxima' de un inversor típico?",
    opciones: ["Exactamente potencia nominal", "1.2-1.5× potencia nominal por corto tiempo (picos)", "Infinita teóricamente", "Variable sin límite"],
    correctaTexto: "1.2-1.5× potencia nominal por corto tiempo (picos)",
    explicacion: "Sobrecarga inversor: 20-50% arriba nominal por 30 segundos (arranque motores). Limitador interno protege. Especificación 'Potencia Pico' vs 'Potencia Continua'."
  },
  {
    id: 16026,
    tema: 16,
    texto: "¿Qué es la 'Reconexión Automática' en inversores conectados red?",
    opciones: ["No existe", "Lógica reintenta conexión tras corte red (típicamente 3 minutos espera)", "Cambio manual", "Conexión instantánea"],
    correctaTexto: "Lógica reintenta conexión tras corte red (típicamente 3 minutos espera)",
    explicacion: "Reconexión: espera 3 min para confirmar red estable antes reintentar. Evita inyección en red caída (seguridad personal). Requisito anti-islanding normativa."
  },
  {
    id: 16027,
    tema: 16,
    texto: "¿Cuál es el 'Rango de Temperatura de Funcionamiento' típico?",
    opciones: ["-50 a +70°C", "-10 a +60°C (derating > 50°C)", "+25°C fijo", "Sin límites"],
    correctaTexto: "-10 a +60°C (derating > 50°C)",
    explicacion: "Temperatura operación: -10/+50°C nominal. Sobre 50°C: reduce potencia salida (-1% por °C). Especificación derating esencial para climas cálidos."
  },
  {
    id: 16028,
    tema: 16,
    texto: "¿Qué monitorea un 'Watt-hora meter' (contador inteligente)?",
    opciones: ["Solo voltaje", "Energía consumida/producida (kWh), potencia instantánea (kW), facturas", "Frecuencia", "Nada importante"],
    correctaTexto: "Energía consumida/producida (kWh), potencia instantánea (kW), facturas",
    explicacion: "Contador inteligente: integra energía en tiempo (kWh), discrimina por hora, registra picos. Base cálculo facturación y análisis eficiencia."
  },
  {
    id: 16029,
    tema: 16,
    texto: "¿Cuál es la 'Constante de Tiempo' del inversor ante cambios carga?",
    opciones: ["Milisegundos (respuesta instantánea)", "< 1 segundo (control rápido frecuencia/voltaje)", "Minutos", "Horas"],
    correctaTexto: "< 1 segundo (control rápido frecuencia/voltaje)",
    explicacion: "Tiempo respuesta inversor: < 100 ms ajuste frecuencia/voltaje ante cambio carga. Crítico para estabilidad red (variaciones rápidas máquinas)."
  },
  {
    id: 16030,
    tema: 16,
    texto: "¿Qué es 'Power Factor Correction' (PFC) en inversor?",
    opciones: ["No existe", "Compensación cargas inductivas para mejorar factor potencia (cos φ = 1)", "Aumento potencia", "Reducción costo"],
    correctaTexto: "Compensación cargas inductivas para mejorar factor potencia (cos φ = 1)",
    explicacion: "PFC: inversor inyecta reactivos (capacitivos) para compensar cargas inductivas. Mejora cos φ → reduce pérdidas línea, penalizaciones distribuidora."
  },
  {
    id: 16031,
    tema: 16,
    texto: "¿Cuál es el riesgo de cables subdimensionados en lado AC?",
    opciones: ["Ninguno", "Caída voltaje > 3%, pérdidas I²R, riesgo incendio por sobrecalentamiento", "Mejora eficiencia", "Mayor conducción"],
    correctaTexto: "Caída voltaje > 3%, pérdidas I²R, riesgo incendio por sobrecalentamiento",
    explicacion: "Cableado AC: sección mínima de forma caída tensión < 3% inversor-consumo. Ejemplo 5kW a 50m: cable mínimo 6mm² (Cu) o 10mm² (Al)."
  },
  {
    id: 16032,
    tema: 16,
    texto: "¿Qué es 'Load Sharing' en sistemas con múltiples inversores?",
    opciones: ["Inversor único", "Distribución automática de carga entre inversores (droop o comunicación)", "Fallo sistema", "Sin utilidad"],
    correctaTexto: "Distribución automática de carga entre inversores (droop o comunicación)",
    explicacion: "Load sharing: máquinas paralelas comparten carga proporcionalmente. Control droop (R/X) o comunicación digital. Evita sobrecarga un inversor mientras otros ociosos."
  },
  {
    id: 16033,
    tema: 16,
    texto: "¿Cuál es la 'Capacidad Cortocircuito' máxima de un interruptor?",
    opciones: ["10A", "Dato especificado (típico 6kA, 10kA en instalación)", "Ilimitada", "1A"],
    correctaTexto: "Dato especificado (típico 6kA, 10kA en instalación)",
    explicacion: "Capacidad cortocircuito: máxima corriente que disyuntor puede interrumpir sin dañarse. Instalación solar DC: calcular Isc máximo → seleccionar disjuntor > Isc."
  },
  {
    id: 16034,
    tema: 16,
    texto: "¿Qué indica un 'Código de Error' parpadeante en inversor?",
    opciones: ["Funcionamiento normal", "Fallo específico (consultar manual): voltaje bajo, temperatura, comms, etc.", "Batería llena", "Excelente estado"],
    correctaTexto: "Fallo específico (consultar manual): voltaje bajo, temperatura, comms, etc.",
    explicacion: "Códigos fallo: patrones LED/display indican problema. Ejemplo: 3 parpadeos = voltaje bajo, 5 parpadeos = temperatura alta. Manual técnico = decodificador."
  },
  {
    id: 16035,
    tema: 16,
    texto: "¿Cuál es la 'Eficiencia Nocturna' (consumo propio) de inversor?",
    opciones: ["0%", "0.5-2% potencia nominal por hora (standby activo)", "50%", "100% como generación"],
    correctaTexto: "0.5-2% potencia nominal por hora (standby activo)",
    explicacion: "Standby inversor: consume 10-50W continuos (circuitos control, display, comunicaciones). En 12 horas noche = 120-600 Wh descargas batería. Importante OFF-GRID."
  },
  {
    id: 16036,
    tema: 16,
    texto: "¿Qué es 'Voltage Droop Control'?",
    opciones: ["Sin función", "Regulación voltaje salida inversores inversores para load sharing automático (↓ V si ↑ I)", "Control manual", "Innecesario"],
    correctaTexto: "Regulación voltaje salida inversores inversores para load sharing automático (↓ V si ↑ I)",
    explicacion: "Droop: máquina X genera menos voltaje si carga aumenta. Esto señaliza a máquina Y inyectar más. Control descentralizado sin comunicación."
  },
  {
    id: 16037,
    tema: 16,
    texto: "¿Cuál es el 'Rizado de Voltaje' (ripple) máximo permitido?",
    opciones: ["Sin límite", "< 2% en DC, < 5% en AC (normativa)", "50%", "10% mínimo"],
    correctaTexto: "< 2% en DC, < 5% en AC (normativa)",
    explicacion: "Rizado: ondulaciones voltaje. Nivel alto causa calentamiento componentes, fallos. Filtros LC atenúan rizado. Especificación crítica electrónica sensible."
  },
  {
    id: 16038,
    tema: 16,
    texto: "¿Qué es 'Frequency Response' en inversor?",
    opciones: ["Música reproducida", "Capacidad seguir variaciones frecuencia red rápidamente (típicamente > 1 kHz ancho banda)", "Número de inversores", "Color salida"],
    correctaTexto: "Capacidad seguir variaciones frecuencia red rápidamente (típicamente > 1 kHz ancho banda)",
    explicacion: "Frequency response: ancho banda control determina velocidad reacción a cambios red. Bajo ancho banda = estabilidad, alto = precisión rápida."
  },
  {
    id: 16039,
    tema: 16,
    texto: "¿Cuál es la 'Garantía Típica' de un inversor?",
    opciones: ["1 año", "5-10 años (componentes principales), 2-3 años (baterías)", "Indefinida", "Sin garantía"],
    correctaTexto: "5-10 años (componentes principales), 2-3 años (baterías)",
    explicacion: "Garantía inversor: 5-10 años componentes electrónica. Baterías: 3-5 años (limitadas ciclos). Extensiones comerciales disponibles (costo adicional)."
  },
  {
    id: 16040,
    tema: 16,
    texto: "¿Qué registra un 'Event Logger' en inversor?",
    opciones: ["Solo potencia", "Historial fallos: fecha, hora, tipo error, voltajes, corrientes al momento fallo", "Fotos usuarios", "Ningún registro"],
    correctaTexto: "Historial fallos: fecha, hora, tipo error, voltajes, corrientes al momento fallo",
    explicacion: "Event logger: almacena últimos 100-1000 eventos. Descargable por USB/Ethernet. Diagnóstico técnico remoto posible. Invaluable troubleshooting."
  },
  {
    id: 16041,
    tema: 16,
    texto: "¿Cuál es el 'Tiempo de Respuesta' ante fallo red (anti-islanding)?",
    opciones: ["Instantáneo", "< 2 segundos obligatorio (normativa europea)", "Minutos", "Sin límite"],
    correctaTexto: "< 2 segundos obligatorio (normativa europea)",
    explicacion: "Anti-islanding: norma EN 50160 exige desconexión < 2s. Protege personas (línea energizada) y red eléctrica. Prueba periódica obligatoria."
  },
  {
    id: 16042,
    tema: 16,
    texto: "¿Qué es 'Reactive Power Capability' en inversor conectado red?",
    opciones: ["No existe", "Capacidad inyectar potencia reactiva (VAR) para control voltaje red", "Mismo que potencia activa", "Función secundaria"],
    correctaTexto: "Capacidad inyectar potencia reactiva (VAR) para control voltaje red",
    explicacion: "Potencia reactiva: inversores modernos inyectan Q (adelantado/retrasado). Requisito regulatorio nuevo: soporte voltaje red en bajos voltajes."
  },
  {
    id: 16043,
    tema: 16,
    texto: "¿Cuál es el 'Rendimiento Ponderado' (WEIGHTED EFFICIENCY)?",
    opciones: ["Eficiencia a potencia nominal", "Promedio eficiencia a múltiples cargas ponderado según distribución real (20%, 50%, 100%)", "Solo mínimo", "Sin calcular"],
    correctaTexto: "Promedio eficiencia a múltiples cargas ponderado según distribución real (20%, 50%, 100%)",
    explicacion: "Eficiencia ponderada: refleja mejor comportamiento real (inversor típicamente no corre a 100% todo tiempo). Estándar CEC/EU para comparación."
  },
  {
    id: 16044,
    tema: 16,
    texto: "¿Qué es 'Grid Code Compliance'?",
    opciones: ["Código personal", "Cumplimiento regulaciones distribuidora: frecuencia, voltaje, armónicos, anti-islanding", "Sin requisito", "Opcional"],
    correctaTexto: "Cumplimiento regulaciones distribuidora: frecuencia, voltaje, armónicos, anti-islanding",
    explicacion: "Grid code: cada distribuidora especifica límites. Inversor debe certificación cumplimiento (típicamente EN 50438 o equivalente). Requisito conexión red."
  },
  {
    id: 16045,
    tema: 16,
    texto: "¿Cuál es la 'Impedancia de Salida' típica de un inversor?",
    opciones: ["0 Ω (ideal)", "0.5-2 Ω (proporciona estabilidad ante cargas transitorias)", "Infinita", "Variable sin control"],
    correctaTexto: "0.5-2 Ω (proporciona estabilidad ante cargas transitorias)",
    explicacion: "Impedancia: pequeña pero no nula permite control voltaje bajo carga dinámica. Control feedback mantiene voltaje constante V = Eg - I×Z."
  },
  {
    id: 16046,
    tema: 16,
    texto: "¿Qué es 'Peak Shaving'?",
    opciones: ["Corte cabello", "Estrategia reducir pico demanda usando batería (cargar pico off-peak)", "Aumentar picos", "Sin utilidad"],
    correctaTexto: "Estrategia reducir pico demanda usando batería (cargar pico off-peak)",
    explicacion: "Peak shaving: batería descarga en punta horaria (17-21h) cuando precio alto. Reduce demanda máxima, ahorra penalizaciones potencia. Beneficio económico 10-30%."
  },
  {
    id: 16047,
    tema: 16,
    texto: "¿Cuál es la 'Vida Útil Esperada' de componentes electrolíticos?",
    opciones: ["Indefinida", "10-15 años (condensadores electrolíticos son limitantes vida inversor)", "30 años", "Solo 2 años"],
    correctaTexto: "10-15 años (condensadores electrolíticos son limitantes vida inversor)",
    explicacion: "Vida útil inversor limitada por capacitores (degradación exponencial vs temperatura). Doble vida cada -10°C. > 50°C reduce vida 50%. Crítico enfriamiento."
  },
  {
    id: 16048,
    tema: 16,
    texto: "¿Qué es 'UPS (Uninterruptible Power Supply) Mode'?",
    opciones: ["Sin función", "Inversor entra batería automáticamente si red cae (conmutación < 20ms)", "Generador diésel", "Control manual"],
    correctaTexto: "Inversor entra batería automáticamente si red cae (conmutación < 20ms)",
    explicacion: "Modo UPS: batería respaldo siempre lista. Transición imperceptible para cargas críticas. Requiere inversores de clase A (baja latencia conmutación)."
  },
  {
    id: 16049,
    tema: 16,
    texto: "¿Cuál es la 'Clase de Aislamiento' recomendada para inversor?",
    opciones: ["Clase F (155°C máx)", "Clase H (180°C máx) para mayor durabilidad térmica", "Clase B (130°C)", "Sin especificar"],
    correctaTexto: "Clase H (180°C máx) para mayor durabilidad térmica",
    explicacion: "Clase aislamiento: F = 155°C, H = 180°C. Inversor clase H: mejor longevidad en climas cálidos. Costo ligeramente mayor, vida +30-50%."
  },
  {
    id: 16050,
    tema: 16,
    texto: "¿Qué parámetros son críticos en selección de inversor?",
    opciones: ["Solo potencia nominal", "Potencia, voltaje entrada/salida, eficiencia, certificaciones, garantía, disponibilidad repuestos", "Precio únicamente", "Color equipo"],
    correctaTexto: "Potencia, voltaje entrada/salida, eficiencia, certificaciones, garantía, disponibilidad repuestos",
    explicacion: "Selección inversor: 1) Potencia 1.2× carga pico, 2) Voltaje DC rango paneles, 3) Eficiencia > 95%, 4) Certificaciones (EN 62109-1, EN 50438), 5) Garantía mínimo 5 años, 6) Repuestos locales."
  }
];
