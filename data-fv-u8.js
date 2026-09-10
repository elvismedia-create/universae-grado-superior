// TEMA_FV_U8: Puesta a tierra y protecciones en FV (50 preguntas - IDs 18001-18050)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U8_DATA = [
  {
    id: 18001,
    tema: 18,
    texto: "EPI significa: (TEST OFICIAL)",
    opciones: ["Equipo de protección inmediata", "Equipo de protección individual", "Equipo de puesta inmediata", "Equipo de paseo individual"],
    correctaTexto: "Equipo de protección individual",
    explicacion: "EPI: casco, guantes, arnés, gafas, botas seguridad. Obligatorio en trabajos electricidad/altura. Cada trabajador responsable su EPI."
  },
  {
    id: 18002,
    tema: 18,
    texto: "Es un elemento de protección en instalaciones industriales: (TEST OFICIAL)",
    opciones: ["Móvil", "Señalización", "Cinta adhesiva", "Todas las afirmaciones son correctas"],
    correctaTexto: "Señalización",
    explicacion: "Protección colectiva: señalización riesgo (advertencia, obligación), vallas, iluminación, señales acústicas. Elemento previo a EPI individual."
  },
  {
    id: 18003,
    tema: 18,
    texto: "Señala cual no es un riesgo en la ejecución de una instalación fotovoltaica en la cubierta de una vivienda: (TEST OFICIAL)",
    opciones: ["Trabajo en altura, riesgo de caída a distinto nivel", "Riesgo eléctrico", "Riesgo en el uso de útiles y herramientas", "Riesgo de envenenamiento"],
    correctaTexto: "Riesgo de envenenamiento",
    explicacion: "Riesgos FV cubierta: altura (caída), eléctrico (paneles generan DC), herramientas (cortes), golpes. NO hay riesgo envenenamiento (no hay químicos tóxicos normalmente)."
  },
  {
    id: 18004,
    tema: 18,
    texto: "Señala cuál no es un accesorio que nos otorgue protección: (TEST OFICIAL)",
    opciones: ["Guantes aislantes", "Reloj", "Calzado laboral de seguridad", "Tapones o cascos antirruido"],
    correctaTexto: "Reloj",
    explicacion: "EPI: guantes aislantes (eléctrico), calzado seguridad (impacto), casco antirruido (ruido). Reloj: NO es EPI de protección."
  },
  {
    id: 18005,
    tema: 18,
    texto: "Para trabajos en baja tensión (1000Vca y 1500Vdc) en los que se pudiera estar en contacto con tensión, se emplearán guantes de Clase: (TEST OFICIAL)",
    opciones: ["0", "4", "2", "66"],
    correctaTexto: "2",
    explicacion: "Guantes clase 2: hasta 17kV. Para BT (1000V): clase 0 (500V) es insuficiente, clase 2 (17kV) asegura. Clase 4: hasta 36kV (eléctrica alta tensión)."
  },
  {
    id: 18006,
    tema: 18,
    texto: "Las señales de advertencia tienen el fondo de color: (TEST OFICIAL)",
    opciones: ["Amarillo", "Rojo", "Azul", "Blanco"],
    correctaTexto: "Amarillo",
    explicacion: "Colores señalización: amarillo (advertencia), rojo (peligro/parada), azul (obligación), verde (seguridad). Norma ISO 3864."
  },
  {
    id: 18007,
    tema: 18,
    texto: "Las señales de obligación llevan el fondo de color: (TEST OFICIAL)",
    opciones: ["Blanco", "Rojo", "Amarillo", "Azul"],
    correctaTexto: "Azul",
    explicacion: "Señales obligación (usar casco, guantes): fondo azul + símbolo blanco. Ejemplo: 'USE CASCO OBLIGATORIO'."
  },
  {
    id: 18008,
    tema: 18,
    texto: "Los tipos de contacto entre una persona y la corriente son: (TEST OFICIAL)",
    opciones: ["Inalámbrico y por contacto directo", "Por choque y por rozadura", "Contacto directo e indirecto", "Contacto indefinido y definido"],
    correctaTexto: "Contacto directo e indirecto",
    explicacion: "Directo: toque de conductor activo (alto riesgo). Indirecto: toque de masa metálica defectuosa (tierra protege). Diferencial previene indirecto."
  },
  {
    id: 18009,
    tema: 18,
    texto: "Se deberá trabajar sin tensión en la instalación para evitar situaciones de riesgo. Una de las fases para garantizar el trabajo sin tensión será impedir la reconexión, ¿cómo se realizaría esta fase?: (TEST OFICIAL)",
    opciones: ["Bastará con comunicarlo a parte de los usuarios de la instalación", "Se instalará un candado, pasador o elemento de señalización que impida la reconexión a la red", "No es necesario realizar ninguna actuación, se trabajará de forma habitual", "Ninguna respuesta es correcta"],
    correctaTexto: "Se instalará un candado, pasador o elemento de señalización que impida la reconexión a la red",
    explicacion: "Bloqueo desconexión: candado + cartel 'NO CONECTAR' durante trabajo. Previene reconexión accidental/malintención. Obligatorio en trabajos tensión."
  },
  {
    id: 18010,
    tema: 18,
    texto: "Si se realiza una instalación fotovoltaica en una cubierta inclinada con línea de vida. Señala que equipo de protección se deberá emplear obligatoriamente para este trabajo en altura: (TEST OFICIAL)",
    opciones: ["Guantes Aislantes Clase 4", "Protectores Auditivos", "Arnés de Seguridad", "Pantalla de protección facial"],
    correctaTexto: "Arnés de Seguridad",
    explicacion: "Trabajo altura: arnés obligatorio (máximo 6m sin línea, >6m con línea). Conectar línea vida. Otros EPI (guantes, casco) también pero arnés es crítico caída."
  },
  {
    id: 18011,
    tema: 18,
    texto: "¿Cuál es la 'Resistencia de Puesta a Tierra' máxima para instalación FV?",
    opciones: ["Sin límite", "< 100 Ω típico (varía según ubicación y tensión)", "> 1000 Ω", "No existe límite legal"],
    correctaTexto: "< 100 Ω típico (varía según ubicación y tensión)",
    explicacion: "Resistencia tierra < 100 Ω. Zonas rocosas requieren múltiples electrodos. Medición anual obligatoria con telurómetro."
  },
  {
    id: 18012,
    tema: 18,
    texto: "¿Qué es la 'Puesta a Tierra de Protección'?",
    opciones: ["Conectar salida paneles a tierra", "Conectar masas metálicas a electrodo dispersor para limitar tensión contacto < 50V", "Solo en días lluviosos", "No necesaria en FV"],
    correctaTexto: "Conectar masas metálicas a electrodo dispersor para limitar tensión contacto < 50V",
    explicacion: "Protección: si masa defectuosa lleva 230V, tierra la remite, diferencial dispara < 30mA. Límite seguridad: 50V CA / 120V DC."
  },
  {
    id: 18013,
    tema: 18,
    texto: "¿Cuál es el 'Diferencial de Alta Sensibilidad' recomendado en FV?",
    opciones: ["100 mA", "30 mA (clase A o B para corrientes CA/pulsante)", "1 A", "Sin especificar"],
    correctaTexto: "30 mA (clase A o B para corrientes CA/pulsante)",
    explicacion: "Diferencial 30mA: límite Reglamento. Algunos inversores generan corrientes DC residuales → diferenciales tipo B (detectan DC). Importante verificar compatible."
  },
  {
    id: 18014,
    tema: 18,
    texto: "¿Qué es el 'Interruptor de Corriente de Defecto' (RCD)?",
    opciones: ["Un regulador", "Dispositivo que detecta corriente de fugas (defecto aislamiento) y desconecta", "Un inversor", "Inexistente"],
    correctaTexto: "Dispositivo que detecta corriente de fugas (defecto aislamiento) y desconecta",
    explicacion: "RCD (Residual Current Device) = Diferencial. Compara corriente entrada/salida. Si diferencia > 30mA (fuga a tierra), dispara < 200ms. Elemento crítico seguridad."
  },
  {
    id: 18015,
    tema: 18,
    texto: "¿Cuál es la 'Tensión de Contacto Máxima Permitida'?",
    opciones: ["100V", "50V CA / 120V DC (límite seguridad)", "230V (sin límite)", "1000V"],
    correctaTexto: "50V CA / 120V DC (límite seguridad)",
    explicacion: "Norma: < 50V CA ó < 120V DC son 'extra baja tensión' (muy baja riesgo). > 50V requiere protecciones (diferencial, tierra)."
  },
  {
    id: 18016,
    tema: 18,
    texto: "¿Qué es un 'Defecto de Aislamiento'?",
    opciones: ["Falta de aislante", "Pérdida continuidad aislamiento (fuga corriente a masa/tierra); detectado por diferencial", "Fallo pintura", "No existe"],
    correctaTexto: "Pérdida continuidad aislamiento (fuga corriente a masa/tierra); detectado por diferencial",
    explicacion: "Defecto aislamiento: cable dañado, componente con derivación a masa. Diferencial lo detecta (fuga típica 1-10mA). Medidor aislamiento verifica (>100kΩ)."
  },
  {
    id: 18017,
    tema: 18,
    texto: "¿Cuál es el 'Factor de Seguridad' en fusibles?",
    opciones: ["Sin factor", "1.25-1.5× Isc (sobrecarga asegurada, no falsos disparos)", "3×", "5×"],
    correctaTexto: "1.25-1.5× Isc (sobrecarga asegurada, no falsos disparos)",
    explicacion: "Fusible = 1.25 × Isc. Si Isc 12A, fusible 15A. Evita disparos innecesarios por variaciones irradiancia, mantiene protección cortocircuito."
  },
  {
    id: 18018,
    tema: 18,
    texto: "¿Qué es un 'Conductor de Protección' (PE)?",
    opciones: ["Conductor activo", "Conductor verde-amarillo conecta masas metálicas a tierra; cero potencial eléctrico", "Conductor neutro", "Opcional"],
    correctaTexto: "Conductor verde-amarillo conecta masas metálicas a tierra; cero potencial eléctrico",
    explicacion: "PE (Protective Earth): no lleva corriente normal, solo en caso defecto aislamiento. Código color: verde-amarillo rayado. Presencia obligatoria en todas instalaciones > 48V."
  },
  {
    id: 18019,
    tema: 18,
    texto: "¿Cuál es la 'Distancia Mínima de Seguridad' cerca de líneas eléctricas aéreas?",
    opciones: ["0 metros (contacto permitido)", "1 metro horizontal, 3-5 metros vertical según voltaje línea", "10 metros", "50 metros"],
    correctaTexto: "1 metro horizontal, 3-5 metros vertical según voltaje línea",
    explicacion: "Distancia seguridad líneas aéreas: 1m horizontal, 3m vertical BT, 5m AT. Instalación FV debe respetar. Coordinación con distribuidora obligatoria."
  },
  {
    id: 18020,
    tema: 18,
    texto: "¿Qué es un 'Descargador de Sobretensión' (SPD) tipo 2?",
    opciones: ["Protección primaria", "Protección secundaria instalada en armario distribución; derivación sobretensiones a tierra", "Solo decorativo", "No existe"],
    correctaTexto: "Protección secundaria instalada en armario distribución; derivación sobretensiones a tierra",
    explicacion: "SPD tipo 1: entrada instalación. SPD tipo 2: armario. SPD tipo 3: final circuito. Coordinación coordina descarga sobretensiones (onda rayo 6kV+ → tierra segura)."
  },
  {
    id: 18021,
    tema: 18,
    texto: "¿Cuál es la función del 'Interruptor Manual Aislador'?",
    opciones: ["Cambiar polaridad", "Desconectar completamente instalación para mantenimiento seguro (visible apertura contactos)", "Regular voltaje", "Cambiar frecuencia"],
    correctaTexto: "Desconectar completamente instalación para mantenimiento seguro (visible apertura contactos)",
    explicacion: "Aislador manual: desconecta carga, permite verificar con multímetro que no hay voltaje. Requisito seguridad antes de trabajo. Capacidad mínima Isc × 1.5."
  },
  {
    id: 18022,
    tema: 18,
    texto: "¿Qué es 'Coordinación de Protecciones'?",
    opciones: ["Sin función", "Seleccionar fusibles/disjuntores de forma que dispare el más cercano a fallo (selectividad)", "Instalación aleatoria", "Irrelevante"],
    correctaTexto: "Seleccionar fusibles/disjuntores de forma que dispare el más cercano a fallo (selectividad)",
    explicacion: "Coordinación: tiempos/curvas calibrados. Fallo en string → fusible string dispara, no general. Cascada protecciones (1A < 6A < 25A en DC panel-controller)."
  },
  {
    id: 18023,
    tema: 18,
    texto: "¿Cuál es la 'Capacidad de Corte' de un magnetotérmico?",
    opciones: ["Voltaje solamente", "Máxima corriente cortocircuito que puede interrumpir sin dañarse (típico 6kA, 10kA BT)", "Corriente nominal", "Sin especificar"],
    correctaTexto: "Máxima corriente cortocircuito que puede interrumpir sin dañarse (típico 6kA, 10kA BT)",
    explicacion: "Magnetotérmico 10kA: puede interrumpir máximo 10000A cortocircuito. FV sistemas: calcular Isc máximo serie = N_paneles × Isc_panel. Elegir magnetotérmico > Isc."
  },
  {
    id: 18024,
    tema: 18,
    texto: "¿Qué es 'Trabajo en Tensión' y cuándo se realiza?",
    opciones: ["Sin riesgo", "Intervención con circuito energizado; solo expertos acreditados, protecciones especiales", "Forma normal", "Siempre permitido"],
    correctaTexto: "Intervención con circuito energizado; solo expertos acreditados, protecciones especiales",
    explicacion: "Trabajo en tensión: riesgo máximo. Requiere: experto acreditado, equipos especiales (guantes clase, herramientas aisladas), supervisión. Evitable en FV (desconectar primero)."
  },
  {
    id: 18025,
    tema: 18,
    texto: "¿Cuál es el 'Tiempo Máximo de Despeje' en cortocircuito?",
    opciones: ["Infinito", "< 200 ms para diferenciales, < 1s para magnetotérmicos (evitar daño componentes)", "5 segundos", "1 minuto"],
    correctaTexto: "< 200 ms para diferenciales, < 1s para magnetotérmicos (evitar daño componentes)",
    explicacion: "Tiempo despeje crítico: fuga > 30mA → diferencial dispara < 200ms (límite seguridad). Cortocircuito → magnetotérmico < 1s (evita sobrecalentamiento cable)."
  },
  {
    id: 18026,
    tema: 18,
    texto: "¿Qué es una 'Barrera Física'?",
    opciones: ["Solo para seguridad", "Protección que impide acceso a partes conductoras (aislamiento, cubierta, valla)", "Decoración", "Sin sentido"],
    correctaTexto: "Protección que impide acceso a partes conductoras (aislamiento, cubierta, valla)",
    explicacion: "Barrera: encierra conectores/bornes tensión. Cubierta armario, tubo protección cableado. Previene contacto accidental. Altura mínima 2.5m o cerrado."
  },
  {
    id: 18027,
    tema: 18,
    texto: "¿Cuál es la 'Medida de Protección' por tensión de seguridad?",
    opciones: ["Ninguna necesaria", "Usar SELV (Safety Extra Low Voltage < 50V CA, 120V DC) para circuitos de control", "Tensión normal", "Variable"],
    correctaTexto: "Usar SELV (Safety Extra Low Voltage < 50V CA, 120V DC) para circuitos de control",
    explicacion: "SELV: voltaje bajo control < 50V CA / 120V DC. No requiere protecciones adicionales (diferencial no necesario). Típico: display control, comms."
  },
  {
    id: 18028,
    tema: 18,
    texto: "¿Qué es 'Equipotencialidad'?",
    opciones: ["Voltajes diferentes", "Conectar masas metálicas al mismo potencial (tierra) para evitar diferencias potencial peligrosas", "Aumentar voltaje", "Reducir corriente"],
    correctaTexto: "Conectar masas metálicas al mismo potencial (tierra) para evitar diferencias potencial peligrosas",
    explicacion: "Equipotencial: estructuras metálicas armarios, canalizaciones, soportes → conexión a tierra comun (barra equipotencial). Previene voltajes inducidos (rayos)."
  },
  {
    id: 18029,
    tema: 18,
    texto: "¿Cuál es la 'Sección Mínima' del cable de tierra en acometida?",
    opciones: ["0.5 mm²", "6 mm² mínimo (cobre) en BT acometida (no menor que fase)", "Cualquiera", "Sin especificar"],
    correctaTexto: "6 mm² mínimo (cobre) en BT acometida (no menor que fase)",
    explicacion: "Tierra acometida: mínimo 6mm² Cu (o equivalente). Sección no menor que conductor de fase. Continuidad desde acometida hasta barra equipotencial."
  },
  {
    id: 18030,
    tema: 18,
    texto: "¿Qué es 'Aislamiento Doble'?",
    opciones: ["Dos cables solamente", "Protección con aislamiento funcional + suplementario (no requiere tierra) típico aparatos clase II", "Sin función", "Obligatorio siempre"],
    correctaTexto: "Protección con aislamiento funcional + suplementario (no requiere tierra) típico aparatos clase II",
    explicacion: "Clase II (aislamiento doble): aparato no requiere tierra, símbolo cuadrado doble. Ejemplo: herramientas eléctricas portátiles, algunos inversores. Más seguro."
  },
  {
    id: 18031,
    tema: 18,
    texto: "¿Cuál es la 'Profundidad de Enterramiento' para electrodo de puesta a tierra?",
    opciones: ["0.5 m", "0.8-2 m (típico 1.5 m, mejora en arcilla/arena)" , "10 m", "Irrelevante"],
    correctaTexto: "0.8-2 m (típico 1.5 m, mejora en arcilla/arena)",
    explicacion: "Electrodo profundo: mayor conductancia suelo a profundidad (más humedad). Profundidad típica 1.5 m acero galvanizado > 2m. Longitud 2-3 m picas."
  },
  {
    id: 18032,
    tema: 18,
    texto: "¿Qué indica un 'Test de Aislamiento' fallido (< 100 kΩ)?",
    opciones: ["Funcionamiento normal", "Defecto aislamiento potencial → riesgo fuga corriente/choque", "Excelente estado", "Sin importancia"],
    correctaTexto: "Defecto aislamiento potencial → riesgo fuga corriente/choque",
    explicacion: "Test aislamiento megohmetro: > 1 MΩ OK. 100kΩ-1MΩ: revisar humedad/degradación. < 100kΩ: defecto crítico, no energizar hasta reparación."
  },
  {
    id: 18033,
    tema: 18,
    texto: "¿Cuál es la 'Distancia de Seguridad' para trabajar en altura?",
    opciones: ["Sin distancia", "< 6 m sin arnés, > 6 m requiere arnés + línea vida", "Depende trabajador", "1 metro siempre"],
    correctaTexto: "< 6 m sin arnés, > 6 m requiere arnés + línea vida",
    explicacion: "Altura límite: < 6 m caída bajo control (puede salvarse). > 6 m: riesgo crítico caída fatal. Arnés clase C mínimo, línea vida máximo 2 m."
  },
  {
    id: 18034,
    tema: 18,
    texto: "¿Qué es 'Señalización en Sitio de Trabajo'?",
    opciones: ["Decoración", "Carteles obligación/advertencia/peligro/prohibición que informan riesgos presentes", "Luces solamente", "Sin requerimiento"],
    correctaTexto: "Carteles obligación/advertencia/peligro/prohibición que informan riesgos presentes",
    explicacion: "Señales trabajo: 'ALTO VOLTAJE', 'USE CASCO', 'CAÍDA ALTURA', 'NO CONECTAR - TRABAJANDO'. Código color: amarillo (advertencia), rojo (peligro)."
  },
  {
    id: 18035,
    tema: 18,
    texto: "¿Cuál es la 'Norma Aplicable' para seguridad en instalaciones FV?",
    opciones: ["ISO 1000", "UNE-EN 61936 (sistemas AT), UNE-EN 60950 (equipos), IEC 62109 (inversores FV)", "Sin norma", "Opcional"],
    correctaTexto: "UNE-EN 61936 (sistemas AT), UNE-EN 60950 (equipos), IEC 62109 (inversores FV)",
    explicacion: "Normas aplicables: EN 61936 (sistemas energía), EN 60950 (equipos), IEC 62109-1 (seguridad FV), RD 1627/1997 (seguridad trabajo altura)."
  },
  {
    id: 18036,
    tema: 18,
    texto: "¿Qué es 'Entrenamiento en Seguridad' para personal?",
    opciones: ["Sin necesidad", "Formación periódica riesgos específicos, protecciones, procedimientos emergencia", "Opcional si quieren", "Una sola vez"],
    correctaTexto: "Formación periódica riesgos específicos, protecciones, procedimientos emergencia",
    explicacion: "Entrenamiento: inicial (inducción), periódica (anual), accidental (incidente análisis). Cubre: riesgos eléctricos, altura, primeros auxilios, RRHH."
  },
  {
    id: 18037,
    tema: 18,
    texto: "¿Cuál es la 'Precaución antes de Trabajar'?",
    opciones: ["Sin precaución", "Verificar con multímetro CERO voltaje en puntos de trabajo después desconectar/aislar", "Confiar en disyuntores", "Experiencia basta"],
    correctaTexto: "Verificar con multímetro CERO voltaje en puntos de trabajo después desconectar/aislar",
    explicacion: "Protocolo 5 pasos: 1) Desconectar, 2) Aislar, 3) Bloquear, 4) MEDIR VOLTAJE CERO, 5) Trabajar. Nunca asumir sin verificar."
  },
  {
    id: 18038,
    tema: 18,
    texto: "¿Qué es un 'Incidente Eléctrico'?",
    opciones: ["Sin definición", "Contacto persona-corriente (contacto directo/indirecto, accidentalidad típica)", "Caída aparato", "No aplica FV"],
    correctaTexto: "Contacto persona-corriente (contacto directo/indirecto, accidentalidad típica)",
    explicacion: "Incidente eléctrico: contacto inadvertido corriente. Consecuencias: 0-3V sin peligro, 50-100V puede ser letal, > 200V letal casi seguro. Prevención = vida."
  },
  {
    id: 18039,
    tema: 18,
    texto: "¿Cuál es el 'Procedimiento de Emergencia' ante electrocución?",
    opciones: ["Dejar pasar", "1) Desconectar fuente, 2) No tocar si enlazado, 3) Llamar emergencias, 4) Primeros auxilios (RCP si parada cardíaca)", "Llamar solo", "Sin protocolo"],
    correctaTexto: "1) Desconectar fuente, 2) No tocar si enlazado, 3) Llamar emergencias, 4) Primeros auxilios (RCP si parada cardíaca)",
    explicacion: "Emergencia electrocución: nunca tocar persona viva enlazada (aislante pies). Desconectar fuente primero. Llamar 112. RCP si parada (30 compresiones, 2 insuflaciones)."
  },
  {
    id: 18040,
    tema: 18,
    texto: "¿Qué es 'Documentación de Seguridad'?",
    opciones: ["Sin necesidad", "Planos, evaluación riesgos, procedimientos, registros entrenamiento, mantenimiento preventivo", "Opcional guardar", "No guardar"],
    correctaTexto: "Planos, evaluación riesgos, procedimientos, registros entrenamiento, mantenimiento preventivo",
    explicacion: "Documentación: manual instalación, esquemas eléctricos, PRL (procedimiento riesgos laborales), registro mantenimiento, actas inspecciones. Obligatorio auditoría."
  },
  {
    id: 18041,
    tema: 18,
    texto: "¿Cuál es la 'Edad Mínima' para trabajar en instalaciones?",
    opciones: ["12 años", "18 años mínimo (18+ para trabajos peligrosos altura/electricidad)", "14 años", "Sin límite"],
    correctaTexto: "18 años mínimo (18+ para trabajos peligrosos altura/electricidad)",
    explicacion: "Legislación: trabajo altura/electricidad requiere mayoría edad (18+). Menores prohibidos tareas peligrosas (ILO 182). Acreditación profesional adicional."
  },
  {
    id: 18042,
    tema: 18,
    texto: "¿Qué es 'Evaluación de Riesgos' en seguridad?",
    opciones: ["Innecesaria", "Análisis sistemático peligros, estimación probabilidad/severidad, medidas prevención", "Solo para grandes plantas", "Sin obligación"],
    correctaTexto: "Análisis sistemático peligros, estimación probabilidad/severidad, medidas prevención",
    explicacion: "Evaluación riesgos: matriz probabilidad (baja/media/alta) × severidad (leve/grave/muy grave) = riesgo (bajo/medio/crítico). Define prioridades intervención."
  },
  {
    id: 18043,
    tema: 18,
    texto: "¿Cuál es la 'Responsabilidad del Instalador'?",
    opciones: ["Sin responsabilidad", "Garantizar seguridad personas/equipos, cumplir normas, capacitación, documentación, garantía", "Responsabilidad cliente", "Mínima"],
    correctaTexto: "Garantizar seguridad personas/equipos, cumplir normas, capacitación, documentación, garantía",
    explicacion: "Responsabilidad legal: art. 24 LMHSLSS (empresa responsable prevención). Instalador = contratista obligado cumplir RD 1627/97, ITC-BT-019 (seguridad)."
  },
  {
    id: 18044,
    tema: 18,
    texto: "¿Qué es 'Plan de Acción'?",
    opciones: ["Sin necesidad", "Documento con cronograma medidas prevención, responsables, recursos, auditoría periódica", "Solo teórico", "Sin cumplimiento"],
    correctaTexto: "Documento con cronograma medidas prevención, responsables, recursos, auditoría periódica",
    explicacion: "Plan acción: define qué, quién, cuándo, cómo implementar medidas. Seguimiento: auditoría trimestral. Actualización: cambios normativa, accidentes."
  },
  {
    id: 18045,
    tema: 18,
    texto: "¿Cuál es la 'Certificación Profesional' requerida?",
    opciones: ["Sin certificación", "Acreditación oficial (PRL 30h, instalador acreditado, especialista AT si aplica)", "Experiencia solo basta", "Teórica solamente"],
    correctaTexto: "Acreditación oficial (PRL 30h, instalador acreditado, especialista AT si aplica)",
    explicacion: "Certificación: curso PRL 30h mínimo, carnet profesional instalador eléctrico, especialista AT (> 45kV requiere 200h adicional). Reciclaje cada 5 años."
  },
  {
    id: 18046,
    tema: 18,
    texto: "¿Qué es 'Inspección Periódica'?",
    opciones: ["Una sola vez", "Revisión sistemática anual/bienal de equipos, instalaciones por organismo notificado", "Sin necesidad", "Solo si falla"],
    correctaTexto: "Revisión sistemática anual/bienal de equipos, instalaciones por organismo notificado",
    explicacion: "Inspección periódica: pruebas funcionales, mediciones seguridad (aislamiento, tierra), verificación EPI. Documento: acta inspección con hallazgos."
  },
  {
    id: 18047,
    tema: 18,
    texto: "¿Cuál es la 'Garantía de Trabajo Seguro'?",
    opciones: ["No se garantiza", "Empresa responsable condiciones trabajo: herramientas seguras, supervisión, emergencia, reporte incidentes", "Cliente responsable", "Opcional"],
    correctaTexto: "Empresa responsable condiciones trabajo: herramientas seguras, supervisión, emergencia, reporte incidentes",
    explicacion: "Garantía: empresa = responsable condiciones trabajo seguro. Debe: suministrar EPI, entrenamiento, equipos certificados, procedimientos, investigación accidentes."
  },
  {
    id: 18048,
    tema: 18,
    texto: "¿Qué es 'Investigación de Incidentes'?",
    opciones: ["Castigar trabajador", "Análisis causa raíz accidente para prevenir recurrencia: causas inmediatas, subyacentes, medidas preventivas", "Sin importancia", "Secreto"],
    correctaTexto: "Análisis causa raíz accidente para prevenir recurrencia: causas inmediatas, subyacentes, medidas preventivas",
    explicacion: "Investigación incidente: 1) Reconstruir suceso, 2) Identificar causa raíz (no culpa), 3) Medidas prevención, 4) Comunicar aprendizaje equipo. Meta: CERO incidentes."
  },
  {
    id: 18049,
    tema: 18,
    texto: "¿Cuál es el 'Estatuto Legal' de la Seguridad en el Trabajo?",
    opciones: ["Recomendación", "Derecho fundamental (CEDH art. 3) + obligación legal (LMHSLSS, RD 1627/97, ITC-BT-019)", "Opcional", "Responsabilidad individual"],
    correctaTexto: "Derecho fundamental (CEDH art. 3) + obligación legal (LMHSLSS, RD 1627/97, ITC-BT-019)",
    explicacion: "Marco legal: Ley 31/1995 LMHSLSS (prevención laborales), RD 1627/1997 (trabajos temporales/altura), RD 614/2001 (protección radiación), ITC-BT-019 (eléctrica)."
  },
  {
    id: 18050,
    tema: 18,
    texto: "¿Qué medidas integran el plan de seguridad en instalación FV?",
    opciones: ["Solo EPI", "Técnicas (aislamiento, protecciones, bloqueos), organizativas (entrenamiento, procedimientos), personales (EPI, vigilancia)", "Nada funciona", "Al azar"],
    correctaTexto: "Técnicas (aislamiento, protecciones, bloqueos), organizativas (entrenamiento, procedimientos), personales (EPI, vigilancia)",
    explicacion: "Medidas jerarquía: 1) Eliminar peligro, 2) Aislar (blindaje), 3) Proteger (diferencial, SPD), 4) Procedimientos (protocolos), 5) EPI (último recurso). Integral."
  }
];
