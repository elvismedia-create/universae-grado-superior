// TEMA 1: Prevención de Riesgos Laborales y Protección Ambiental - Grado Medio
// Instalaciones de Distribución

const TEMA_1_PREVENCION_RIESGOS_LABORALES_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el objeto principal de la Ley de Prevención de Riesgos Laborales (LPRL)?",
    opciones: ["Establecer las obligaciones del empresario en materia de seguridad y salud de los trabajadores", "Solo regular el horario laboral", "Establecer salarios mínimos", "Controlar la producción"],
    correcta: 0,
    explicacion: "La LPRL (Ley 31/1995) tiene como objeto promover la seguridad y salud de los trabajadores mediante la aplicación de medidas y el desarrollo de actividades necesarias."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Qué es un accidente de trabajo?",
    opciones: ["Todo suceso súbito y violento ocurrido por causa del trabajo o en el desempeño del mismo", "Un retraso en el trabajo", "Una ausencia injustificada", "Una discrepancia con el jefe"],
    correcta: 0,
    explicacion: "Según la LPRL, accidente de trabajo es todo suceso súbito y violento ocurrido por causa del trabajo o en el desempeño del trabajo, independiente de la duración de la incapacidad."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la velocidad máxima recomendada de caída libre en una maniobra eléctrica?",
    opciones: ["Máximo 60 cm/s en zonas de peligro", "1 m/s", "2 m/s", "Sin límite establecido"],
    correcta: 0,
    explicacion: "La normativa RBT establece límites de velocidad de caída para sistemas de protección contra caídas en trabajos en altura en instalaciones eléctricas."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Qué significa el acrónimo EPI?",
    opciones: ["Equipo de Protección Individual", "Elemento de Protección Integrada", "Equipamiento de Peligro Industrial", "Elemento Protector Íntegro"],
    correcta: 0,
    explicacion: "EPI son los Equipos de Protección Individual que usa cada trabajador para protegerse contra riesgos específicos: casco, guantes, arnés, etc."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la principal característica del enfoque preventivo en seguridad laboral?",
    opciones: ["Anticiparse a los riesgos identificándolos, evaluándolos y controlándolos antes que ocurra el accidente", "Esperar a que ocurran accidentes para actuar", "Solo investigar después de los incidentes", "Dejar la seguridad al trabajador"],
    correcta: 0,
    explicacion: "El enfoque preventivo se basa en la identificación anticipada de riesgos, su evaluación y control antes de que causen daño, siendo mucho más efectivo."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Qué es la evaluación de riesgos laborales?",
    opciones: ["Proceso de identificar peligros, analizar la probabilidad de que causen daño y la magnitud del mismo", "Solo contar accidentes pasados", "Compilar estadísticas de seguridad", "Un trámite administrativo sin importancia"],
    correcta: 0,
    explicacion: "La evaluación de riesgos es el proceso sistemático de identificar peligros, estimar la probabilidad de ocurrencia del daño y su magnitud para decidir medidas preventivas."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la distancia mínima de seguridad para trabajar cerca de conductores de alta tensión sin protección?",
    opciones: ["Mínimo 1 metro en AT según RBT", "10 cm", "50 cm", "No existe distancia de seguridad"],
    correcta: 0,
    explicacion: "El RBT (Reglamento Electrotécnico para Baja Tensión) y sus ITC establecen distancias mínimas de seguridad para trabajos sin tensión."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Qué son las medidas de protección colectiva (EPC)?",
    opciones: ["Dispositivos que protegen a todos los trabajadores de un riesgo (barandillas, marquesinas, vallados)", "Solo equipos individuales", "Señales de advertencia", "Normas escritas"],
    correcta: 0,
    explicacion: "EPC son medidas que protegen simultáneamente a varios trabajadores, como barandillas de seguridad, marquesinas, sistemas de ventilación, etc."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la jerarquía de medidas preventivas según la LPRL?",
    opciones: ["1. Eliminar riesgos, 2. Sustituir por alternativas menos peligrosas, 3. Medidas de control, 4. EPC, 5. EPI", "Primero EPI, luego EPC", "No existe jerarquía establecida", "Solo EPI es suficiente"],
    correcta: 0,
    explicacion: "La LPRL establece una jerarquía: primero eliminar riesgos, luego sustituir por alternativas, aplicar medidas de control técnico, medidas de protección colectiva, y finalmente EPI."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué es un riesgo residual?",
    opciones: ["El riesgo que permanece después de aplicar todas las medidas preventivas", "El riesgo inicial", "Un riesgo eliminado", "Un riesgo imaginario"],
    correcta: 0,
    explicacion: "Riesgo residual es el que subsiste después de implementar todas las medidas preventivas técnicas y de control disponibles."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la tensión considerada como muy baja tensión según RBT?",
    opciones: ["Hasta 50V en CA y 120V en CC", "Hasta 230V", "Hasta 400V", "Hasta 1000V"],
    correcta: 0,
    explicacion: "La Instrucción Técnica Complementaria ITC-BT-01 define muy baja tensión como tensiones hasta 50V en corriente alterna y 120V en corriente continua."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Qué son las cinco reglas de oro de la seguridad eléctrica?",
    opciones: ["1. Desconectar, 2. Bloquear, 3. Verificar, 4. Poner a tierra, 5. Proteger", "Reglas que varían por país", "Solo reglas para baja tensión", "No existen reglas de oro"],
    correcta: 0,
    explicacion: "Las cinco reglas de oro garantizan trabajos seguros en instalaciones de cualquier tensión: 1. Desconectar, 2. Bloquear el dispositivo, 3. Verificar ausencia de tensión, 4. Poner a tierra y cortocircuitar, 5. Proteger contra elementos cercanos."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la clasificación IP que significa máxima protección contra polvo y agua?",
    opciones: ["IP 6K-9K (polvo e inmersión)", "IP 1-1", "IP 2-2", "No existe clasificación total"],
    correcta: 0,
    explicacion: "La clasificación IP (Índice de Protección) va desde IP 0-0 hasta IP 6K-9K. El código 6K-9K indica protección total contra polvo (6K) e inmersión en agua a presión (9K)."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Qué significa el símbolo de peligro eléctrico?",
    opciones: ["Un rayo amarillo en triángulo negro sobre fondo amarillo, advierte sobre riesgo de electrocución", "Un símbolo de prohibición", "Una señal de obligación", "Una indicación de dirección"],
    correcta: 0,
    explicacion: "El símbolo de peligro eléctrico es un rayo (zigzag) dentro de un triángulo negro sobre fondo amarillo, conforme a normativa ISO 7010-W012."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el voltaje considerado como punto de contacto peligroso en corriente alterna?",
    opciones: ["A partir de 50V CA se considera peligroso para el contacto", "100V CA", "230V CA", "400V CA"],
    correcta: 0,
    explicacion: "Según RBT e ITC-BT-01, a partir de 50V en corriente alterna se considera peligroso el contacto directo con partes activas de la instalación."
  },
  {
    id: 16,
    imagen: false,
    svg: false,
    texto: "¿Qué es un contacto directo en una instalación eléctrica?",
    opciones: ["Contacto intencional o accidental de una persona con una parte activa (conductor o fase) de la instalación", "Tocar una parte metálica dañada", "Trabajar con cables", "Usar herramientas metálicas"],
    correcta: 0,
    explicacion: "Contacto directo es el que ocurre cuando una persona toca deliberadamente o accidentalmente un conductor activo (fase o neutro en algunos casos) de una instalación eléctrica."
  },
  {
    id: 17,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función del interruptor diferencial en la prevención de riesgos?",
    opciones: ["Detectar pérdidas de corriente (fugas) y desconectar rápidamente para evitar electrocución", "Regular el voltaje", "Distribuir electricidad", "Almacenar energía"],
    correcta: 0,
    explicacion: "El interruptor diferencial detecta diferencias de corriente entre conductores (fugas) y desconecta rápidamente, protegiéndose contra contactos indirectos."
  },
  {
    id: 18,
    imagen: false,
    svg: false,
    texto: "¿Qué sensibilidad de diferencial se recomienda para zonas húmedas o de riesgo?",
    opciones: ["30 mA (máximo de protección para áreas húmedas)", "100 mA", "300 mA", "1000 mA"],
    correcta: 0,
    explicacion: "Para zonas húmedas, piscinas, saunas y áreas de especial riesgo, se recomienda diferencial de 30 mA conforme a ITC-BT-24."
  },
  {
    id: 19,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la duración máxima del deslumbramiento en una instalación de iluminación de emergencia?",
    opciones: ["Máximo 5 segundos antes de alcanzar 50% de iluminación", "10 segundos", "1 segundo", "Sin límite"],
    correcta: 0,
    explicacion: "La normativa de iluminación de emergencia establece que desde la falta de tensión debe alcanzarse 50% de iluminación en máximo 5 segundos."
  },
  {
    id: 20,
    imagen: false,
    svg: false,
    texto: "¿Qué es la Protección Equipotencial?",
    opciones: ["Conexión a tierra de todas las partes metálicas para igualar potencial y evitar diferencias de voltaje", "Un tipo de cable", "Una medida de aislamiento", "Un dispositivo de corte"],
    correcta: 0,
    explicacion: "La protección equipotencial conecta a tierra las masas metálicas de la instalación para garantizar que todas estén al mismo potencial eléctrico."
  },
  {
    id: 21,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la sección mínima de un conductor de protección (tierra) en instalaciones domésticas?",
    opciones: ["2,5 mm² cuando no está protegido mecánicamente", "1,5 mm²", "0,5 mm²", "Cualquier sección vale"],
    correcta: 0,
    explicacion: "La sección mínima del conductor de protección depende de la sección de los conductores de fase: para fases ≤16 mm² la tierra será igual; si es mayor, será ≥16 mm²."
  },
  {
    id: 22,
    imagen: false,
    svg: false,
    texto: "¿Qué significa el código de protección IP 54?",
    opciones: ["Protección contra polvo parcial y proyecciones de agua desde cualquier ángulo", "Totalmente protegido contra polvo", "No tiene protección contra agua", "Solo protección contra inmersión"],
    correcta: 0,
    explicacion: "IP 54 significa: 5= protección contra polvo limitada (no completamente hermético) y 4= protección contra proyecciones de agua desde cualquier dirección."
  },
  {
    id: 23,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la resistencia máxima de toma de tierra recomendada para sistemas de baja tensión?",
    opciones: ["40 ohmios en condiciones normales (máximo según RBT)", "100 ohmios", "1000 ohmios", "Sin límite específico"],
    correcta: 0,
    explicacion: "La RBT establece que en sistemas de distribución de baja tensión, la resistencia de toma de tierra debe ser máximo 40 ohmios en condiciones normales."
  },
  {
    id: 24,
    imagen: false,
    svg: false,
    texto: "¿Qué es un Sistema TT de puesta a tierra?",
    opciones: ["Transformador con dos tomas a tierra independientes: una en el lado del distribuidor y otra en la instalación del usuario", "Un sistema sin tierra", "Un sistema con tierra única", "Un sistema de tensión variable"],
    correcta: 0,
    explicacion: "Sistema TT: Tierra en el secundario del transformador + Tierra independiente en la instalación del usuario. Requiere diferencial de alta sensibilidad para protección."
  },
  {
    id: 25,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la distancia mínima que debe mantener un trabajador de conductores de baja tensión sin protección?",
    opciones: ["Mínimo 1 metro de distancia horizontal o 1,5 metros vertical en BT", "50 cm", "10 cm", "No hay distancia mínima"],
    correcta: 0,
    explicacion: "Según la RBT e instrucciones de prevención, la distancia mínima de seguridad para trabajar sin protección cerca de BT es 1 metro horizontal y 1,5 metros vertical."
  },
  {
    id: 26,
    imagen: false,
    svg: false,
    texto: "¿Qué equipo es obligatorio usar al trabajar en altura en instalaciones eléctricas?",
    opciones: ["Arnés anticaídas conectado a punto de anclaje seguro según RBT", "Solo casco", "Solo guantes", "Ningún equipo especial"],
    correcta: 0,
    explicacion: "El trabajo en altura en instalaciones eléctricas requiere sistemas anti-caídas certificados: arnés, cable de seguridad y puntos de anclaje conforme a normativa."
  },
  {
    id: 27,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el contenido de un Plan de Prevención de Riesgos Laborales?",
    opciones: ["Evaluación de riesgos, medidas preventivas, responsabilidades, formación y vigilancia de la salud", "Solo normas disciplinarias", "Solo horarios de trabajo", "Solo sueldos"],
    correcta: 0,
    explicacion: "El Plan de Prevención debe incluir: estructura organizativa, evaluación de riesgos, medidas preventivas y de protección, procedimientos, responsabilidades, recursos y vigilancia."
  },
  {
    id: 28,
    imagen: false,
    svg: false,
    texto: "¿Qué es la vigilancia de la salud en prevención?",
    opciones: ["Conjunto de exámenes médicos periódicos para detectar daños en la salud derivados del trabajo", "Solo análisis de sangre", "Control de asistencia", "Inspecciones de seguridad"],
    correcta: 0,
    explicacion: "La vigilancia de la salud incluye reconocimientos médicos periódicos, pruebas específicas según riesgos, seguimiento de casos especiales y registros sanitarios."
  },
  {
    id: 29,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la causa más común de accidentes en instalaciones eléctricas?",
    opciones: ["Contacto directo con conductores activos sin protección y falta de formación", "Caídas desde altura", "Sobrecarga de máquinas", "Incendios externos"],
    correcta: 0,
    explicacion: "Estadísticamente, los accidentes eléctricos más comunes resultan de contacto directo con partes activas, especialmente por falta de desconexión y protección."
  },
  {
    id: 30,
    imagen: false,
    svg: false,
    texto: "¿Qué es el aislamiento doble en una herramienta eléctrica?",
    opciones: ["Dos capas de material aislante para protección contra contacto indirecto", "Dos cables de alimentación", "Dos interruptores", "Dos conexiones a tierra"],
    correcta: 0,
    explicacion: "Aislamiento doble o reforzado en herramientas portátiles significa dos sistemas de aislamiento independientes para máxima protección contra contactos indirectos."
  },
  {
    id: 31,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la máxima resistencia permitida de un equipo de medida de resistencia de aislamiento?",
    opciones: ["Mínimo 1 MΩ (megaohmio) en equipos de distribución según RBT", "Mínimo 100 Ω", "Sin límite específico", "0,5 MΩ"],
    correcta: 0,
    explicacion: "La RBT establece que el aislamiento de instalaciones de baja tensión debe ser mínimo 1 MΩ, medido con megaohmímetro a 500V CC o mayor."
  },
  {
    id: 32,
    imagen: false,
    svg: false,
    texto: "¿Qué es la protección contra sobrecarga en una instalación?",
    opciones: ["Sistema que desconecta automáticamente cuando la corriente excede el valor nominal del circuito", "Un fusible", "Un sistema de enfriamiento", "Un regulador de voltaje"],
    correcta: 0,
    explicacion: "La protección contra sobrecarga se realiza mediante PIA (Pequeño Interruptor Automático) que desconecta el circuito ante aumento de corriente superior a su valor nominal."
  },
  {
    id: 33,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la tensión de contacto máxima admisible en corriente alterna?",
    opciones: ["50V CA (límite convencional de seguridad)", "100V CA", "230V CA", "400V CA"],
    correcta: 0,
    explicacion: "50V en corriente alterna es considerado el límite superior de seguridad en ambientes secos. Por debajo es considerada extra baja tensión (SELV)."
  },
  {
    id: 34,
    imagen: false,
    svg: false,
    texto: "¿Qué es la inspección periódica de instalaciones eléctricas?",
    opciones: ["Control visual y medición de parámetros eléctricos para verificar el buen estado y funcionamiento seguro", "Solo limpiar equipos", "Cambiar cables anualmente", "No hay inspecciones requeridas"],
    correcta: 0,
    explicacion: "Las inspecciones periódicas incluyen: verificación visual del estado, medición de resistencias, pruebas funcionales y documentación según RBT."
  },
  {
    id: 35,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el propósito del bloqueo (lockout) en trabajos sin tensión?",
    opciones: ["Evitar el reenganche accidental del dispositivo de desconexión durante trabajos de mantenimiento", "Solo regular el voltaje", "Distribuir energía", "Aumentar la capacidad"],
    correcta: 0,
    explicacion: "El bloqueo mediante candados o dispositivos previene que alguien reenganche accidentalmente la alimentación durante trabajos sin tensión, complementando la desconexión."
  },
  {
    id: 36,
    imagen: false,
    svg: false,
    texto: "¿Qué equipo es esencial para verificar ausencia de tensión según las cinco reglas de oro?",
    opciones: ["Detector de tensión (tester) calibrado y válido según normativa", "Solo la experiencia del trabajador", "Un multímetro antiguo", "La observación visual"],
    correcta: 0,
    explicacion: "La tercera regla de oro requiere verificar ausencia de tensión con detector portátil válido, tester analógico/digital calibrado o megaohmímetro según la tensión."
  },
  {
    id: 37,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la corriente mínima que puede causar fibrilación ventricular en el corazón humano?",
    opciones: ["Entre 100-200 mA en corriente alterna (riesgo de fibrilación)", "10 mA", "1 mA", "1000 mA"],
    correcta: 0,
    explicacion: "Entre 100-200 mA de corriente alterna puede causar fibrilación ventricular inmediata, siendo uno de los efectos más peligrosos de la electrocución."
  },
  {
    id: 38,
    imagen: false,
    svg: false,
    texto: "¿Qué es un certificado de instalación eléctrica?",
    opciones: ["Documento emitido por instalador calificado que certifica que la instalación cumple con RBT y normas de seguridad", "Un recibo de pago", "Una garantía de servicio", "Un permiso de trabajo"],
    correcta: 0,
    explicacion: "El certificado de instalación (Anexo VII del RBT) es emitido por el instalador autorizado comprobando que la instalación cumple normativa, y es obligatorio para su legalización."
  },
  {
    id: 39,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la corriente máxima de pérdida a tierra (fuga) en equipos portátiles según ITC-BT-22?",
    opciones: ["Máximo 3,5 mA en equipos clase II (doble aislamiento)", "1 mA", "10 mA", "Sin límite"],
    correcta: 0,
    explicacion: "La ITC-BT-22 establece que en herramientas portátiles clase II, la corriente de fuga máxima debe ser 3,5 mA para garantizar seguridad del usuario."
  },
  {
    id: 40,
    imagen: false,
    svg: false,
    texto: "¿Qué significa la clasificación de un cable como \"H05VV-F\"?",
    opciones: ["Cable flexible (H), 500V, doble aislamiento (VV), con funda de PVC (F)", "Solo cable de dos conductores", "Cable rígido", "Especificación antigua"],
    correcta: 0,
    explicacion: "H05VV-F: H=flexible, 05=300/500V, VV=dos aislamientos de PVC, F=funda de PVC. Es típico en cables para electrodomésticos y herramientas portátiles."
  },
  {
    id: 41,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la protección adicional para baterías y acumuladores en trabajos eléctricos?",
    opciones: ["Protección mecánica contra cortocircuitos y sobrecarga conforme a UNE 20.003", "Solo aislamiento térmico", "Sin protección especial", "Solo control visual"],
    correcta: 0,
    explicacion: "Baterías y acumuladores requieren protección contra cortocircuitos (fusibles) y sobrecarga, además de aislamiento adecuado según normativa de seguridad."
  },
  {
    id: 42,
    imagen: false,
    svg: false,
    texto: "¿Qué es la sobretensión transitoria en una instalación?",
    opciones: ["Aumento rápido y momentáneo del voltaje (típicamente por descargas atmosféricas o maniobras)", "Un corte de electricidad", "Una sobrecarga prolongada", "Un cortocircuito"],
    correcta: 0,
    explicacion: "Las sobretensiones transitorias son aumentos rápidos de voltaje de corta duración, causadas usualmente por rayos o maniobras en la red, que pueden dañar equipos."
  },
  {
    id: 43,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función de un descargador de sobretensiones (pararrayos)?",
    opciones: ["Limitar sobretensiones a valores seguros derivando corriente a tierra", "Distribuir energía", "Aumentar voltaje", "Controlar frecuencia"],
    correcta: 0,
    explicacion: "Los pararrayos o descargadores limitan sobretensiones transitorias a niveles seguros, derivando la energía excesiva a tierra de forma rápida."
  },
  {
    id: 44,
    imagen: false,
    svg: false,
    texto: "¿Qué significa que un equipo esté certificado CE?",
    opciones: ["Ha sido evaluado conforme a Directivas Europeas y es seguro para su uso según normativa", "Solo un símbolo decorativo", "Garantía de duración", "Sin significado legal"],
    correcta: 0,
    explicacion: "El marcado CE indica que el producto cumple con las Directivas Europeas aplicables (seguridad, EMC, etc.) y puede comercializarse en el mercado europeo."
  },
  {
    id: 45,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la máxima longitud recomendada para un cable de extensión portátil con sección 1,5 mm²?",
    opciones: ["Máximo 50 metros para evitar caída de tensión excesiva", "100 metros", "10 metros", "Sin límite"],
    correcta: 0,
    explicacion: "Para cables de extensión, la longitud depende de la sección: un 1,5 mm² se recomienda máximo 50 metros; si es mayor longitud, usar sección superior."
  },
  {
    id: 46,
    imagen: false,
    svg: false,
    texto: "¿Qué es la puesta a tierra temporal durante trabajos sin tensión?",
    opciones: ["Conexión temporal de todos los conductores (fases) a tierra con abrazadera de puesta a tierra antes de trabajar", "Una medida opcional", "Solo recomendación", "Sin importancia"],
    correcta: 0,
    explicacion: "La cuarta regla de oro requiere poner a tierra y cortocircuitar todos los conductores para eliminar cargas residuales y proteger contra energización accidental."
  },
  {
    id: 47,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la velocidad de reacción máxima de un interruptor diferencial de 30 mA?",
    opciones: ["Máximo 30-40 milisegundos para protección efectiva contra electrocución", "100 ms", "500 ms", "Sin límite"],
    correcta: 0,
    explicacion: "Un diferencial de 30 mA debe desconectar en máximo 30-40 ms para ser efectivo en proteger contra contactos indirectos peligrosos."
  },
  {
    id: 48,
    imagen: false,
    svg: false,
    texto: "¿Qué es un equipo ATEX en instalaciones eléctricas?",
    opciones: ["Equipo certificado para zonas con riesgo de atmósfera explosiva (polvo, gas, vapor)", "Equipo de baja tensión", "Equipo de emergencia", "Equipo sin certificación"],
    correcta: 0,
    explicacion: "ATEX (Atmosphère Explosible) son equipos certificados para uso en lugares donde existe riesgo de atmósfera explosiva conforme a Directiva 2014/34/UE."
  },
  {
    id: 49,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la resistencia mínima de aislamiento entre conductores en baja tensión después de limpieza?",
    opciones: ["Mínimo 1 MΩ entre fases y tierra para garantizar seguridad según RBT", "100 Ω", "10 Ω", "Sin especificación"],
    correcta: 0,
    explicacion: "El RBT establece que después de la limpieza e inspección, la resistencia de aislamiento debe ser como mínimo 1 MΩ entre conductores y tierra."
  },
  {
    id: 50,
    imagen: false,
    svg: false,
    texto: "¿Qué es la protección contra contacto indirecto mediante aislamiento?",
    opciones: ["Aislamiento de partes activas para evitar que partes metálicas normalmente sin tensión queden energizadas", "Solo pintura", "Aislamiento del neutro", "Protección eléctrica"],
    correcta: 0,
    explicacion: "El aislamiento reforzado de partes activas impide que, ante un defecto, las masas metálicas accesorias queden sometidas a tensión peligrosa."
  },
  {
    id: 51,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el factor de potencia típico en instalaciones residenciales donde debe mejorarse?",
    opciones: ["Factor de potencia < 0,9 requiere corrección mediante condensadores según REBT", "Factor 1 siempre", "Factor > 1", "Sin importancia"],
    correcta: 0,
    explicacion: "Factor de potencia menor a 0,9 en instalaciones residenciales y comerciales requiere corrección mediante condensadores para mejorar eficiencia."
  },
  {
    id: 52,
    imagen: false,
    svg: false,
    texto: "¿Qué es el tiempo de operación de un PIA de 16A?",
    opciones: ["Disparo instantáneo ante cortocircuito y curva C para sobrecargas graduales según normativa", "Disparo lento siempre", "Sin tiempo especificado", "Solo para sobrecargas"],
    correcta: 0,
    explicacion: "Los PIA disponen de dos mecanismos: térmico (para sobrecargas) con tiempo de 1-2 horas según carga, y magnético (para cortocircuitos) con disparo instantáneo."
  },
  {
    id: 53,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la máxima caída de tensión permitida en el circuito interior de una vivienda?",
    opciones: ["3% desde el cuadro general hasta la toma más alejada según ITC-BT-19", "5%", "10%", "Sin límite"],
    correcta: 0,
    explicacion: "La ITC-BT-19 establece que la caída de tensión máxima en el circuito interior debe ser 3% para instalaciones de 230V monofásico."
  },
  {
    id: 54,
    imagen: false,
    svg: false,
    texto: "¿Qué es la sobre-intensidad en una instalación eléctrica?",
    opciones: ["Corriente superior a la nominal, que incluye sobrecargas y cortocircuitos", "Una corriente normal", "Una sobretensión", "Un fallo de tierra"],
    correcta: 0,
    explicacion: "Sobre-intensidad es cualquier corriente superior a la nominal: puede ser sobrecarga (aumento gradual) o cortocircuito (aumento súbito y muy elevado)."
  },
  {
    id: 55,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el principal beneficio de la clase de aislamiento II en herramientas?",
    opciones: ["Doble aislamiento independiente elimina necesidad de conexión de tierra", "Mejor rendimiento", "Menor peso", "Mayor potencia"],
    correcta: 0,
    explicacion: "Clase II con doble aislamiento reforzado permite que la herramienta sea completamente segura sin necesidad de toma de tierra (símbolo: cuadrado doble)."
  },
  {
    id: 56,
    imagen: false,
    svg: false,
    texto: "¿Qué es la marcación de circuitos en un cuadro eléctrico?",
    opciones: ["Etiquetado claro de cada circuito indicando su función y protecciones para mantenimiento seguro", "Pintura del cuadro", "Número de serie", "Color del cable"],
    correcta: 0,
    explicacion: "La correcta marcación de circuitos con función y protecciones es obligatoria para permitir maniobras seguras y mantenimiento correcto conforme a RBT."
  },
  {
    id: 57,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la distancia mínima de seguridad entre un conductor desnudo y construcciones de madera?",
    opciones: ["Mínimo 1 metro según RBT para evitar inicios de incendio por arco", "50 cm", "10 cm", "Sin distancia mínima"],
    correcta: 0,
    explicacion: "El RBT establece distancias mínimas entre conductores desnudos y materiales combustibles para prevenir incendios por contacto o arco eléctrico."
  },
  {
    id: 58,
    imagen: false,
    svg: false,
    texto: "¿Qué documento es obligatorio para toda instalación eléctrica según RBT?",
    opciones: ["Boletín Oficial de Instalación (BOI) u Certificado de Instalación del instalador autorizado", "Solo factura", "Un dibujo simple", "Sin documentación obligatoria"],
    correcta: 0,
    explicacion: "Toda instalación eléctrica debe contar con documento legal: BOI (emitido por organismo competente) o Certificado del instalador autorizado. Obligatorio para legalizar."
  },
  {
    id: 59,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la protección específica para equipos en ambientes corrosivos o húmedos?",
    opciones: ["Grado de protección IP mínimo 54-55 y materiales resistentes a corrosión conforme a normativa", "IP 10", "Sin protección especial", "Solo aislamiento básico"],
    correcta: 0,
    explicacion: "En ambientes húmedos o corrosivos se requiere mínimo IP 54-55, carcasas de acero inoxidable o materiales resistentes, y protecciones reforzadas según ITC."
  },
  {
    id: 60,
    imagen: false,
    svg: false,
    texto: "¿Qué es la impedancia de cortocircuito de un transformador?",
    opciones: ["Parámetro que define la limitación de corriente ante cortocircuito y es clave para seleccionar protecciones", "Una resistencia normal", "Un tipo de aislamiento", "Una capacidad de almacenamiento"],
    correcta: 0,
    explicacion: "La impedancia de cortocircuito (Zcc) limita la corriente de fallo y es crucial para dimensionar las protecciones adecuadas según cálculos de cortocircuito."
  },
  {
    id: 61,
    imagen: false,
    svg: false,
    texto: "¿Cuál es el propósito del conductor de neutro en un sistema trifásico?",
    opciones: ["Retorno de corriente y distribución de carga en fases para equilibrio del sistema", "Solo transmitir energía", "Protección contra tierra", "Almacenamiento de energía"],
    correcta: 0,
    explicacion: "El neutro proporciona retorno de corriente y permite el funcionamiento equilibrado del sistema trifásico, siendo punto de referencia de tensiones."
  },
  {
    id: 62,
    imagen: false,
    svg: false,
    texto: "¿Qué es la selectividad de protecciones en una instalación?",
    opciones: ["Coordinación de dispositivos de protección para que solo actúe el más próximo al defecto, aislando solo la parte afectada", "Todos disparan juntos", "Disposición aleatoria", "Sin importancia"],
    correcta: 0,
    explicacion: "La selectividad garantiza que ante un defecto, solo la protección más cercana actúe, dejando el resto de la instalación energizada para evitar cortes innecesarios."
  },
  {
    id: 63,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la temperatura máxima de operación permitida en cables de PVC en instalaciones fijas?",
    opciones: ["70ºC en servicio normal y hasta 100ºC en sobrecarga temporal según norma UNE 20.003", "50ºC", "150ºC", "Sin límite"],
    correcta: 0,
    explicacion: "Los cables de PVC tienen límites térmicos: 70ºC en funcionamiento continuo y máximo 100ºC en sobrecarga excepcional, para evitar degradación del aislamiento."
  },
  {
    id: 64,
    imagen: false,
    svg: false,
    texto: "¿Qué es el apantallamiento electromagnético en instalaciones?",
    opciones: ["Protección contra interferencias electromagnéticas mediante blindaje metálico o trenzado en cables", "Un tipo de aislamiento", "Distancia entre cables", "Protección contra fuego"],
    correcta: 0,
    explicacion: "El apantallamiento o blindaje (malla o trenzado metálico) alrededor de cables protege contra interferencias electromagnéticas externas e internas."
  },
  {
    id: 65,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la obligación fundamental del empresario según la LPRL en materia de prevención?",
    opciones: ["Garantizar la seguridad y salud de los trabajadores mediante evaluación de riesgos y aplicación de medidas preventivas", "Solo cumplir inspecciones", "Proporcionar solo equipos de protección", "Sin obligaciones específicas"],
    correcta: 0,
    explicacion: "La LPRL establece como obligación primordial del empresario garantizar seguridad y salud mediante evaluación continua de riesgos y adopción de medidas preventivas."
  }
];
