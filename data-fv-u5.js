// TEMA_FV_U5: Monitoreo y mantenimiento de plantas solares (67 preguntas - IDs 15001-15067)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U5_DATA = [
  {
    id: 15001,
    tema: 15,
    texto: "¿Qué método de instalación se empleará para realizar el tendido del cableado eléctrico en la instalación fotovoltaica de una vivienda unifamiliar en terreno urbano?: (TEST OFICIAL)",
    opciones: ["Instalación de cableado bajo tubo empotrado", "Instalación de cableado bajo bandeja con tapa", "Instalación de cableado bajo tubo en superficie", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "Métodos válidos según ubicación: tubo empotrado (obra civil), bandeja con tapa (interior), tubo superficie (visible). Vivienda urbana típicamente tubo empotrado o bandeja en interiores."
  },
  {
    id: 15002,
    tema: 15,
    texto: "Se tiene una instalación con strings o cadenas de 25 módulos fotovoltaicos conectados en serie, sabiendo que tienen una tensión en vacío (Voc) de 45 V cada uno. ¿Qué conectores deberemos emplear de forma que cumplan con los requerimientos de tensión y que al mismo tiempo sean los óptimos desde el punto de vista económico?: (TEST OFICIAL)",
    opciones: ["MC4 con tensión de hasta 1000Vdc", "MC4 con tensión de hasta 1500Vdc", "MC4 con tensión de hasta 600Vdc", "Ninguna es correcta"],
    correctaTexto: "MC4 con tensión de hasta 1500Vdc",
    explicacion: "Tensión total = 25 × 45V = 1125V. Con factor frío (1.25): 1406V. MC4 1500Vdc soporta esto y es más económico que 2500V. MC4 600Vdc sería insuficiente."
  },
  {
    id: 15003,
    tema: 15,
    texto: "El primer paso a la hora de llevar a cabo una instalación es: (TEST OFICIAL)",
    opciones: ["Elaboración de la documentación técnica", "Montaje y conexionado de los paneles", "Obra civil y canalizaciones", "Aprovisionamiento de materiales y herramientas"],
    correctaTexto: "Elaboración de la documentación técnica",
    explicacion: "Orden correcto: 1) Documentación técnica, 2) Aprovisionamiento, 3) Obra civil/canalizaciones, 4) Montaje. La documentación guía todo el proceso."
  },
  {
    id: 15004,
    tema: 15,
    texto: "La corriente nominal máxima en un conector MC3 de sección de 4 mm2: (TEST OFICIAL)",
    opciones: ["30 A", "20 A", "25 A", "15 A"],
    correctaTexto: "20 A",
    explicacion: "MC3 4mm²: máximo 20A. MC3 2.5mm²: 16A. MC4 4mm²: 25A. Las características del conector dependen de sección y clase de aislamiento."
  },
  {
    id: 15005,
    tema: 15,
    texto: "La tierra de protección protege la instalación frente: (TEST OFICIAL)",
    opciones: ["No es necesario esta protección ya que no hay masas metálicas", "A riesgo de explosión por acumulación de gases", "Contactos indirectos", "Quemaduras y cortes"],
    correctaTexto: "Contactos indirectos",
    explicacion: "Tierra de protección (conductor PE verde-amarillo): protege contra contactos indirectos (toque de masa metálica defectuosa). Diferencial protege contacto directo."
  },
  {
    id: 15006,
    tema: 15,
    texto: "En las instalaciones fotovoltaicas se emplean conectores para permitir conexiones más seguras ¿Cuál de los siguientes no se corresponde con uno de los conectores más empleados?: (TEST OFICIAL)",
    opciones: ["Conector MC3", "Conector MC4", "TYCO SOLARLOCK", "Conector JFK"],
    correctaTexto: "Conector JFK",
    explicacion: "Conectores estándar FV: MC3 (antiguo), MC4 (actual), TYCO SOLARLOCK. JFK no es conector estándar en FV. Multi-contact es fabricante de MC3/MC4."
  },
  {
    id: 15007,
    tema: 15,
    texto: "Los diodos de protección de bypass se instalan: (TEST OFICIAL)",
    opciones: ["En el módulo solar", "En el inversor", "En la caja de conexiones", "En el acumulador"],
    correctaTexto: "En el módulo solar",
    explicacion: "Diodos bypass se instalan dentro del módulo, en la caja de conexiones. Un diodo cada cadena de células (~36 células). Protege contra sobrecalentamiento en sombra."
  },
  {
    id: 15008,
    tema: 15,
    texto: "Si se cuenta con una batería abierta de electrólito líquido es importante: (TEST OFICIAL)",
    opciones: ["Que la habitación sea estanca sin ventilación", "Que el electrólito de las baterías se encuentre a temperaturas de 10 ºC o menos", "Que el electrólito de las baterías se encuentre a temperaturas de 30ºC o más", "Que la habitación cuente con buena ventilación para evitar la acumulación de gases"],
    correctaTexto: "Que la habitación cuente con buena ventilación para evitar la acumulación de gases",
    explicacion: "Baterías abiertas generan hidrógeno y oxígeno durante carga (gaseamiento). Ventilación obligatoria para evitar mezcla explosiva. Temperatura 15-25°C es óptima."
  },
  {
    id: 15009,
    tema: 15,
    texto: "Una forma rápida que permite una fácil interconexión entre distintos módulos es que la caja de conexiones cuente con: (TEST OFICIAL)",
    opciones: ["Una caja de conexiones por cada dos módulos", "La fijación del cableado en la caja mediante tornillos interiores", "Que las cajas cuenten con latiguillos con terminaciones en conectores", "A y B son correctas"],
    correctaTexto: "Que las cajas cuenten con latiguillos con terminaciones en conectores",
    explicacion: "Cajas con latiguillos pre-terminados con conectores MC4: instalación rápida, segura, repetible. Alternativa a soldar/empalmar en campo. Aumenta calidad y reduce tiempo."
  },
  {
    id: 15010,
    tema: 15,
    texto: "Uno de los circuitos presentes en instalaciones fotovoltaicas que además necesitará contar con protecciones eléctricas, es: (TEST OFICIAL)",
    opciones: ["Generador FV – Consumos CA", "Inversor – Consumos en CA", "Regulador – Inversor", "Inversor - Baterías"],
    correctaTexto: "Inversor – Consumos en CA",
    explicacion: "Circuito AC (inversor-cargas): requiere magnetotérmico + diferencial (protección sobrecarga + contacto directo). Lado DC también protegido pero prioridad AC por riesgo mayor."
  },
  {
    id: 15011,
    tema: 15,
    texto: "¿Cuál es la mejor práctica para realizar limpieza de paneles solares?",
    opciones: ["Usar agua a presión y detergentes ácidos", "Agua suave tibia, trapo suave sin arañar; evitar días muy calurosos", "Limpiar solo en invierno", "No es necesario limpiar"],
    correctaTexto: "Agua suave tibia, trapo suave sin arañar; evitar días muy calurosos",
    explicacion: "Limpieza óptima: agua desionizada/suave, trapo microfiber, sin presión (choque térmico). Evitar días calurosos (contraste temp → grietas). Frecuencia: 2-4 veces/año."
  },
  {
    id: 15012,
    tema: 15,
    texto: "¿Con qué frecuencia se recomienda inspección visual completa de instalación FV?",
    opciones: ["Cada mes", "Cada 6 meses", "Anualmente", "Cada 10 años"],
    correctaTexto: "Anualmente",
    explicacion: "Inspección recomendada: anual visual (detecta corrosión, daños físicos, conexiones sueltas). Termografía cada 2-3 años. Eléctrica cada 5 años."
  },
  {
    id: 15013,
    tema: 15,
    texto: "¿Qué indica una batería con bajo nivel de electrólito?",
    opciones: ["Rendimiento mejorado", "Sobrecarga de células, riesgo sulfatación e irreversibilidad", "Solo problema estético", "Ningún problema"],
    correctaTexto: "Sobrecarga de células, riesgo sulfatación e irreversibilidad",
    explicacion: "Bajo electrólito: células expuestas, sulfatación, daño irreversible. Rellenar con agua destilada. Prevenir con carga correcta (regulador bien calibrado)."
  },
  {
    id: 15014,
    tema: 15,
    texto: "¿Cuál es la causa más común de fallo en instalaciones fotovoltaicas?",
    opciones: ["Defecto de fabricación del panel", "Conexiones sueltas/corrosión (80% de fallos)", "Temperatura ambiente alta", "Falta de luz solar"],
    correctaTexto: "Conexiones sueltas/corrosión (80% de fallos)",
    explicacion: "Estadísticas fallos: 80% conexiones/corrosión, 10% regulador/inversor, 5% batería, 5% panel. Prevención: inspecciones, limpieza, apriete periódico."
  },
  {
    id: 15015,
    tema: 15,
    texto: "¿Qué es el 'punto caliente' (hotspot) en un panel?",
    opciones: ["Un área con buena generación", "Zona de célula defectuosa que se sobrecalienta bajo sombra", "Una marca de calidad", "No existe"],
    correctaTexto: "Zona de célula defectuosa que se sobrecalienta bajo sombra",
    explicacion: "Hotspot: célula defectuosa bajo sombra actúa como resistencia, genera calor (>100°C). Detectado por termografía. Prevención: bypass diodos, evitar sombra."
  },
  {
    id: 15016,
    tema: 15,
    texto: "¿Cuánta pérdida de potencia causa típicamente suciedad en paneles?",
    opciones: ["0% (no afecta)", "1% máximo", "2-5% en zonas normales, hasta 25% en zonas desérticas/industriales", "Más del 50%"],
    correctaTexto: "2-5% en zonas normales, hasta 25% en zonas desérticas/industriales",
    explicacion: "Suciedad/polvo: 2-5% pérdida típica. Zonas agrícolas/industriales/costeras: 15-25%. Limpieza es operación de mantenimiento preventivo más impactante."
  },
  {
    id: 15017,
    tema: 15,
    texto: "¿Qué registra un sistema SCADA en plantas FV grandes?",
    opciones: ["Solo potencia generada", "Potencia, energía, temperatura, irradiancia, fallas, estado inversores, comunicaciones remoto", "Datos del propietario", "Nada importante"],
    correctaTexto: "Potencia, energía, temperatura, irradiancia, fallas, estado inversores, comunicaciones remoto",
    explicacion: "SCADA: monitoreo telemétrico. Registra en tiempo real: generación, consumo, irradiancia, temp, fallos, alertas. Datos históricos para análisis tendencias."
  },
  {
    id: 15018,
    tema: 15,
    texto: "¿Cuál es el propósito de un 'firmware update' en inversor?",
    opciones: ["Aumentar estética", "Mejorar algoritmos control, seguridad, compatibilidad red, eficiencia", "Solo cambiar colores", "No tiene propósito"],
    correctaTexto: "Mejorar algoritmos control, seguridad, compatibilidad red, eficiencia",
    explicacion: "Firmware updates: corrección bugs, algoritmos MPPT mejorados, compatibilidad normativa nueva, seguridad cibernética. Recomendado periódicamente."
  },
  {
    id: 15019,
    tema: 15,
    texto: "¿Qué indica degradación acelerada en análisis termográfico?",
    opciones: ["Variación uniforme temperatura", "Zonas frías localizadas (defectos célula)", "Temperatura perfecta", "Nada anormal"],
    correctaTexto: "Zonas frías localizadas (defectos célula)",
    explicacion: "Termografía degradación: puntos más fríos = menor generación (células defectuosas, microgretas, delaminación). Mapa térmico irregular = problemas incipientes."
  },
  {
    id: 15020,
    tema: 15,
    texto: "¿Cuál es la documentación mínima requerida para mantenimiento?",
    opciones: ["Nada, se mantiene de memoria", "Registro histórico: fecha, operaciones, observaciones, anomalías, persona responsable", "Solo fotos", "Sin documentar"],
    correctaTexto: "Registro histórico: fecha, operaciones, observaciones, anomalías, persona responsable",
    explicacion: "Documentación esencial: parte mantenimiento con fecha/hora, qué se revisó, hallazgos, acciones tomadas, firma técnico. Base para análisis tendencias y garantía."
  },
  {
    id: 15021,
    tema: 15,
    texto: "¿Cuál es la sección mínima recomendada del conductor de tierra en una instalación FV?",
    opciones: ["0.5 mm²", "1.5 mm²", "2.5 mm² (mínimo con cobre)", "4 mm²"],
    correctaTexto: "2.5 mm² (mínimo con cobre)",
    explicacion: "Conductor tierra/PE: mínimo 2.5mm² cobre (normativa REBT). Debe tener continuidad desde panel hasta electrodo dispersor sin empalmes."
  },
  {
    id: 15022,
    tema: 15,
    texto: "¿Qué tipo de protección es más efectivo contra sobrevolatjes por rayo?",
    opciones: ["Fusibles solamente", "Descargadores de sobretensión (SPD) coordinados en cascada", "Diodos comunes", "Ninguna protección funciona"],
    correctaTexto: "Descargadores de sobretensión (SPD) coordinados en cascada",
    explicacion: "SPD tipo 1 (entrada), tipo 2 (distribución), tipo 3 (cargas) coordinados. Derivación a tierra sobretensiones > 6kV en < 1 microsegundo."
  },
  {
    id: 15023,
    tema: 15,
    texto: "¿Cada cuánto tiempo se debe verificar la resistencia de puesta a tierra?",
    opciones: ["Una sola vez en instalación", "Anualmente (obligatorio)", "Cada 5 años", "Cada 10 años"],
    correctaTexto: "Anualmente (obligatorio)",
    explicacion: "Medición anual de resistencia tierra con telurómetro. Debe estar < 100Ω. Si sube por sequedad (verano) o erosión, requiere electrodo adicional."
  },
  {
    id: 15024,
    tema: 15,
    texto: "¿Cuál es el principal problema con cables sin cubierta/desnudos en instalación FV?",
    opciones: ["Generan mejor conducción", "Corrosión por exposición UV/humedad, riesgo contacto directo", "Pesan menos", "No hay problema"],
    correctaTexto: "Corrosión por exposición UV/humedad, riesgo contacto directo",
    explicacion: "Cables desnudos: oxidación rápida (6 meses), pérdida conductividad, riesgo electrocución. Obligatorio usar cable con aislamiento UV (H07Z1-U o RZ1-K)."
  },
  {
    id: 15025,
    tema: 15,
    texto: "¿Qué indica un 'flashing' repetitivo en el inversor?",
    opciones: ["Funcionamiento normal", "Fallo de comunicación o sobrecarga temporal", "Batería llena", "Sistema perfecto"],
    correctaTexto: "Fallo de comunicación o sobrecarga temporal",
    explicacion: "LED parpadeante: advertencia inversor (voltaje bajo/alto, temperatura, fallos comms). Revisar voltajes DC/AC, temperatura armario, conexión datos."
  },
  {
    id: 15026,
    tema: 15,
    texto: "¿Cómo se debe proteger el cableado DC en techos/fachadas?",
    opciones: ["Sin protección, directamente fijo", "Tubo rígido o canaleta protectora contra UV/mecánica", "Solo cinta aislante", "Enterrado siempre"],
    correctaTexto: "Tubo rígido o canaleta protectora contra UV/mecánica",
    explicacion: "Cableado DC aéreo: tubo Policarbonato (UV resistant) o canaleta PVDF en fachada. Protege de rayos UV, roedores, daño mecánico (3-5 años durabilidad)."
  },
  {
    id: 15027,
    tema: 15,
    texto: "¿Qué significa 'derating' en baterías?",
    opciones: ["No tiene significado", "Reducción capacidad por temperatura alta (>40°C: -1% por °C)", "Mayor carga", "Error de fabricante"],
    correctaTexto: "Reducción capacidad por temperatura alta (>40°C: -1% por °C)",
    explicacion: "Batería a 50°C: capacidad = 100% - 10% = 90%. Sobre 55°C riesgo explosión/incendio. Requisito: ventilación y/o refrigeración activa."
  },
  {
    id: 15028,
    tema: 15,
    texto: "¿Cuál es el protocolo de desconexión antes de mantenimiento?",
    opciones: ["Desconectar solo inversor", "1) Desconectar AC/red, 2) Desconectar DC paneles, 3) Esperar descarga capacitores, 4) Bloquear disyuntores", "Sin protocolo", "Solo apagar"],
    correctaTexto: "1) Desconectar AC/red, 2) Desconectar DC paneles, 3) Esperar descarga capacitores, 4) Bloquear disyuntores",
    explicacion: "Orden seguro: AC-ON/OFF, DC-OFF, espera 5 min (capacitores), bloqueo candado/cartel. Verificar voltaje con multímetro antes de tocar."
  },
  {
    id: 15029,
    tema: 15,
    texto: "¿Qué herramientas son esenciales para diagnóstico en campo?",
    opciones: ["Solo destornillador", "Multímetro, pinza amperimétrica, telurómetro, cámara termográfica", "Solo martillo", "Ninguna herramienta"],
    correctaTexto: "Multímetro, pinza amperimétrica, telurómetro, cámara termográfica",
    explicacion: "Kit diagnóstico: multímetro (voltaje/resistencia), pinza (corriente AC), telurómetro (tierra), termografía (células defectuosas). Opcional: datalogger irradiancia."
  },
  {
    id: 15030,
    tema: 15,
    texto: "¿Cuál es la forma correcta de almacenar una batería sin usar?",
    opciones: ["Sin carga, en lugar seco, temperatura 15-25°C", "Completamente cargada, en calor extremo", "Sumergida en agua", "Al sol directo"],
    correctaTexto: "Sin carga, en lugar seco, temperatura 15-25°C",
    explicacion: "Almacenamiento batería: 20-50% carga, lugar ventilado, temp óptima. Verificar voltaje cada 2 meses. Baterías Pb-ácido: descarga controlada, nunca vaciadas."
  },
  {
    id: 15031,
    tema: 15,
    texto: "¿Qué mide un 'insulation resistance tester' (megohmetro)?",
    opciones: ["Voltaje solamente", "Resistencia aislamiento (>1 MΩ típico, alerta < 100 kΩ)", "Corriente CA", "Temperatura"],
    correctaTexto: "Resistencia aislamiento (>1 MΩ típico, alerta < 100 kΩ)",
    explicacion: "Megohmetro: 500V/1000V DC. Mide aislamiento cable/componentes. Lectura < 100kΩ = fallo inminente (defecto aislamiento/humedad). Medir antes de energizar."
  },
  {
    id: 15032,
    tema: 15,
    texto: "¿Cuál es el mejor sitio para instalar el armario de control?",
    opciones: ["A pleno sol", "Sombra, protegido lluvia, ventilado, acceso fácil, temperatura 15-35°C", "En el sótano húmedo", "En azotea sin protección"],
    correctaTexto: "Sombra, protegido lluvia, ventilado, acceso fácil, temperatura 15-35°C",
    explicacion: "Ubicación óptima: norte/sombra, ventilación cruzada (evita > 45°C), acceso mantenimiento, protegido intemperie. Rebajar temp = mejorar inversor/regulador vida."
  },
  {
    id: 15033,
    tema: 15,
    texto: "¿Qué es corrosión galvánica y cómo se previene?",
    opciones: ["No existe", "Corrosión por contacto Cu-Al; prevenir con arandelas aislantes/pasta dieléctrica", "Beneficioso para instalación", "Solo cosmético"],
    correctaTexto: "Corrosión por contacto Cu-Al; prevenir con arandelas aislantes/pasta dieléctrica",
    explicacion: "Cu-Al en contacto + humedad: ion migration. Prevención: lubricante dieléctrico en conectores, arandelas nylon, no mezclar metales sin aislamiento."
  },
  {
    id: 15034,
    tema: 15,
    texto: "¿Cuándo se considera que falla una batería?",
    opciones: ["Cuando tiene 30 años", "Cuando cae a 50% capacidad nominal (fin de vida útil ~3000-5000 ciclos)", "Cuando se ve sucia", "Nunca falla"],
    correctaTexto: "Cuando cae a 50% capacidad nominal (fin de vida útil ~3000-5000 ciclos)",
    explicacion: "Batería EOL (End of Life): 50% capacidad original. Pb-ácido: 5-10 años, Li-ion: 10-15 años. Monitoreo voltaje/resistencia interna detecta degradación."
  },
  {
    id: 15035,
    tema: 15,
    texto: "¿Qué provoca 'phantom loading' (consumo fantasma)?",
    opciones: ["Inexistente", "Dispositivos en standby drenan batería sin control regulador", "Mayor eficiencia", "Inversores mejores"],
    correctaTexto: "Dispositivos en standby drenan batería sin control regulador",
    explicacion: "Phantom load: TV standby (5-10W), router (2W), cargadores (0.5W). En OFF-GRID = descarga significativa. Solución: apagar regletas, regulador con salida LVD."
  },
  {
    id: 15036,
    tema: 15,
    texto: "¿Cuál es la causa más común de fallo prematuro en reguladores?",
    opciones: ["Defecto fabricación", "Sobrecalentamiento (> 50°C continuo) → degradación componentes", "Uso normal", "Envejecimiento solo"],
    correctaTexto: "Sobrecalentamiento (> 50°C continuo) → degradación componentes",
    explicacion: "Regulador temperatura: ideal < 40°C. > 50°C acorta vida (condensadores). Solución: radiador adicional, ventilador, ubicación ventilada."
  },
  {
    id: 15037,
    tema: 15,
    texto: "¿Qué registra un 'data logger' en tiempo real?",
    opciones: ["Nada útil", "Voltaje DC/AC, corriente, potencia, temperatura, irradiancia en intervalos (cada 5-15 min)", "Solo fotos", "Datos privados"],
    correctaTexto: "Voltaje DC/AC, corriente, potencia, temperatura, irradiancia en intervalos (cada 5-15 min)",
    explicacion: "Data logger: registra contínuo parámetros clave. Análisis posterior detecta tendencias (degradación gradual), comportamiento climatizado, fallos transitorios."
  },
  {
    id: 15038,
    tema: 15,
    texto: "¿Cuándo es necesario reemplazar la grasa en conectores?",
    opciones: ["Nunca", "Cada 2-3 años o si hay corrosión/sequedad aparente", "Cada 6 meses", "Cada 10 años"],
    correctaTexto: "Cada 2-3 años o si hay corrosión/sequedad aparente",
    explicacion: "Grasa dieléctrica en conectores MC4: degradación UV/oxidación cada 3-5 años. Recambio previene corrosión, mantiene contacto óptimo."
  },
  {
    id: 15039,
    tema: 15,
    texto: "¿Qué es 'stratification' en baterías de plomo?",
    opciones: ["Separación de capas de electrólito (ácido concentrado abajo, diluido arriba)", "Aumento capacidad", "Mejor conductividad", "No existe"],
    correctaTexto: "Separación de capas de electrólito (ácido concentrado abajo, diluido arriba)",
    explicacion: "Estratificación: reduce área electrodo-electrólito, baja capacidad. Prevención: flotación regular (riego), carga ecualizadora periódica, mezcla manual."
  },
  {
    id: 15040,
    tema: 15,
    texto: "¿Cuál es la temperatura óptima para funcionamiento de inversor?",
    opciones: ["0°C", "15-35°C (máximo 45°C, reduce potencia)", "50°C o más", "Indiferente"],
    correctaTexto: "15-35°C (máximo 45°C, reduce potencia)",
    explicacion: "Inversor: cada 10°C arriba de 35°C = -5% potencia (derating). > 55°C parada automática. Requisito: ventilación, ubicación sombreada, radiador si necesario."
  },
  {
    id: 15041,
    tema: 15,
    texto: "¿Qué indica voltaje bajo persistente en banco de baterías?",
    opciones: ["Funcionamiento normal", "Batería sulfatada, regulador descalibrando, conector suelto, fuga corriente", "Batería nueva perfecta", "Nada importante"],
    correctaTexto: "Batería sulfatada, regulador descalibrando, conector suelto, fuga corriente",
    explicacion: "Voltaje bajo: revisar 1) Conexiones/apriete, 2) Resistencia aislamiento, 3) Consumo parasitario, 4) Estado batería (voltaje flotación vs. nominal)."
  },
  {
    id: 15042,
    tema: 15,
    texto: "¿Cuál es el protocolo para cambio de batería en sistema operativo?",
    opciones: ["Cambiar sin desconectar", "1) Desconectar cargas, 2) Desconectar paneles, 3) Desbloquear regulador, 4) Cambiar batería, 5) Reconectar secuencia inversa", "Cambiar y listo", "Imposible cambiar"],
    correctaTexto: "1) Desconectar cargas, 2) Desconectar paneles, 3) Desbloquear regulador, 4) Cambiar batería, 5) Reconectar secuencia inversa",
    explicacion: "Secuencia: OFF cargas → OFF paneles → regul. INIT → cambio batería → reconectar paneles → regul. sync → cargas ON. Evita transientes, arcos."
  },
  {
    id: 15043,
    tema: 15,
    texto: "¿Qué es 'memory effect' en baterías?",
    opciones: ["Batería recuerda ciclos anteriores", "Degradación por ciclos parciales repetidos (descarga/carga incompleta)", "Función útil", "Solo en Li-ion"],
    correctaTexto: "Degradación por ciclos parciales repetidos (descarga/carga incompleta)",
    explicacion: "Memory effect: principalmente Pb-ácido con carga incompleta. Solución: ciclos profundos ocasionales (descarga > 50% anual), ecualizador activo."
  },
  {
    id: 15044,
    tema: 15,
    texto: "¿Cuál es la vida útil típica de un regulador PWM?",
    opciones: ["1-2 años", "10-20 años si temperatura controlada", "30 años garantía", "Indefinida"],
    correctaTexto: "10-20 años si temperatura controlada",
    explicacion: "Regulador PWM vida: limitada por condensadores (10-15 años nominal). Factores: temperatura (doble vida por cada -10°C), ciclos ON/OFF, carga/descarga."
  },
  {
    id: 15045,
    tema: 15,
    texto: "¿Cómo se detecta fuga de corriente en instalación?",
    opciones: ["A ojo", "Megohmetro (aislamiento), pinza amperimétrica (consumo parasitario), multímetro (voltaje)", "Sin detectar", "Imposible"],
    correctaTexto: "Megohmetro (aislamiento), pinza amperimétrica (consumo parasitario), multímetro (voltaje)",
    explicacion: "Diagnóstico fuga: 1) Megohmetro > 100kΩ = OK, 2) Pinza en fuentes DC = consumo parásito < 100mA, 3) Voltaje entre carcasa/tierra < 5V."
  },
  {
    id: 15046,
    tema: 15,
    texto: "¿Qué es 'bypass string' y cuándo se usa?",
    opciones: ["No existe", "Camino alternativo alrededor de strings sombreados; usado en campos grandes", "Componente principal", "Solo en diseño"],
    correctaTexto: "Camino alternativo alrededor de strings sombreados; usado en campos grandes",
    explicacion: "Bypass: en plantas solares conexión paralela alterna string sombrado. Evita punto caliente. Diodos bidireccionales permitir flujo alternativo sin pérdida."
  },
  {
    id: 15047,
    tema: 15,
    texto: "¿Cuál es el riesgo de no tener protección contra inversión de polaridad?",
    opciones: ["Ninguno", "Destrucción diodos, inversores, reguladores; incendio batería", "Menor eficiencia solo", "Beneficio seguridad"],
    correctaTexto: "Destrucción diodos, inversores, reguladores; incendio batería",
    explicacion: "Inversión polaridad (conectar batería al revés): corriente inversa funde diodos, daña regulador/inversor. Fusible protege pero caro. Mejor: diodo blocking."
  },
  {
    id: 15048,
    tema: 15,
    texto: "¿Qué registra un 'voltmeter gauge' en tiempo real?",
    opciones: ["Nada", "Voltaje instantáneo batería; útil para monitoreo básico carga/descarga", "Temperatura solo", "Irrelevante"],
    correctaTexto: "Voltaje instantáneo batería; útil para monitoreo básico carga/descarga",
    explicacion: "Voltímetro analógico/digital: indicador rápido estado batería. Rango: 48V nominal (40-60V operación). Integrado en paneles de control básicos."
  },
  {
    id: 15049,
    tema: 15,
    texto: "¿Cuándo es necesario hacer 'equalization' en baterías?",
    opciones: ["Nunca", "Mensual o cuando estratificación detectada (voltaje celdas desigual)", "Anualmente solo", "Cada semana"],
    correctaTexto: "Mensual o cuando estratificación detectada (voltaje celdas desigual)",
    explicacion: "Ecualizador: sobrecarga controlada (~115-130% nominal 1-4 horas) que mezcla ácido estratificado. Regulador automático realiza si programado."
  },
  {
    id: 15050,
    tema: 15,
    texto: "¿Qué medidas preventivas reducen fallos en instalación fotovoltaica?",
    opciones: ["Sin medidas preventivas", "Limpieza anual, inspección visual, termografía, apriete conexiones, medición aislamiento, cambio lubricantes", "Solo reactiva", "Costoso sin beneficio"],
    correctaTexto: "Limpieza anual, inspección visual, termografía, apriete conexiones, medición aislamiento, cambio lubricantes",
    explicacion: "Mantenimiento preventivo: plan anual con calendario. ROI: 1 hora mantenimiento previene 10 horas reparación. Extend vida útil equipo 20-30%."
  }
];
