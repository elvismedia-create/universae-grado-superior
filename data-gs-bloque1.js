/* =========================================================
   GRADO SUPERIOR - BLOQUE 1 ANUAL
   Sistemas y circuitos electricos
   Fuente: PDFs locales en pdfs/sistemas electricos
   ========================================================= */

function qGS(id, tema, texto, opciones, correctaTexto, explicacion) {
  return { id, tema: `${tema} (TEST OFICIAL)`, texto, opciones, correctaTexto, explicacion };
}

const GS_SCE_U1_DATA = [
  qGS(410101, "U1: Conceptos basicos", "Que magnitud electrica se mide en ohmios?", ["Resistencia", "Tension", "Intensidad", "Potencia aparente"], "Resistencia", "La resistencia electrica representa la oposicion al paso de la corriente y su unidad es el ohmio."),
  qGS(410102, "U1: Conceptos basicos", "Que condicion es necesaria para que circule corriente electrica?", ["Que el circuito este cerrado", "Que no exista diferencia de potencial", "Que el conductor sea aislante", "Que la potencia sea nula"], "Que el circuito este cerrado", "La corriente necesita un camino cerrado para que las cargas puedan desplazarse a traves del conductor."),
  qGS(410103, "U1: Conceptos basicos", "Segun la ley de Ohm, como se relacionan intensidad, tension y resistencia?", ["La intensidad es proporcional a la tension e inversamente proporcional a la resistencia", "La intensidad es inversamente proporcional a la tension", "La resistencia no afecta a la intensidad", "La tension solo depende del tiempo"], "La intensidad es proporcional a la tension e inversamente proporcional a la resistencia", "La ley de Ohm expresa que I = V / R, por lo que aumenta la intensidad si sube la tension o baja la resistencia."),
  qGS(410104, "U1: Conceptos basicos", "Que ocurre cuando una corriente atraviesa una resistencia?", ["Parte de la energia se transforma en calor por efecto Joule", "La resistencia desaparece", "La frecuencia se hace cero", "Se genera siempre corriente continua"], "Parte de la energia se transforma en calor por efecto Joule", "El efecto Joule explica las perdidas calorificas producidas al circular corriente por una resistencia."),
  qGS(410105, "U1: Conceptos basicos", "Que caracteriza a una onda de corriente alterna senoidal?", ["Tiene amplitud, periodo y frecuencia", "No cambia nunca de sentido", "Solo existe en baterias", "No puede transformarse"], "Tiene amplitud, periodo y frecuencia", "La corriente alterna senoidal varia periodicamente y se describe mediante parametros como amplitud, periodo y frecuencia."),
  qGS(410106, "U1: Conceptos basicos", "Que representa el triangulo de potencias?", ["La relacion entre potencia activa, reactiva y aparente", "La conexion fisica de tres resistencias", "El codigo de colores de una resistencia", "La forma de una onda cuadrada"], "La relacion entre potencia activa, reactiva y aparente", "El triangulo de potencias permite relacionar P, Q y S, ademas del factor de potencia.")
];

const GS_SCE_U2_DATA = [
  qGS(410201, "U2: Sistemas trifasicos", "Que caracteriza a un sistema trifasico equilibrado?", ["Tres fases con la misma magnitud y desfase de 120 grados", "Una sola fase y neutro", "Tres fases sin relacion angular", "Tension continua en las tres fases"], "Tres fases con la misma magnitud y desfase de 120 grados", "En un sistema equilibrado las fases tienen igual modulo y estan separadas electricamente 120 grados."),
  qGS(410202, "U2: Sistemas trifasicos", "En una conexion trifasica en estrella, que tension se mide entre fase y neutro?", ["Tension de fase", "Tension de linea", "Potencia reactiva", "Corriente de neutro"], "Tension de fase", "La tension de fase corresponde a la medida entre cada fase y el neutro en una conexion en estrella."),
  qGS(410203, "U2: Sistemas trifasicos", "En una conexion en triangulo equilibrada, que ocurre con la tension de fase y la tension de linea?", ["Coinciden", "La de fase siempre es nula", "La de linea es siempre menor que la de fase", "No existe tension de linea"], "Coinciden", "En triangulo, cada impedancia queda conectada directamente entre dos lineas, por eso la tension de fase coincide con la de linea."),
  qGS(410204, "U2: Sistemas trifasicos", "Cuando se considera desequilibrado un sistema trifasico?", ["Cuando corrientes o tensiones no mantienen igualdad de modulo o desfase de 120 grados", "Cuando todas las cargas son iguales", "Cuando el neutro no conduce nunca", "Cuando la frecuencia es de 50 Hz"], "Cuando corrientes o tensiones no mantienen igualdad de modulo o desfase de 120 grados", "El desequilibrio aparece si las fases tienen cargas distintas o dejan de conservar la simetria electrica."),
  qGS(410205, "U2: Sistemas trifasicos", "Que instrumento se usa para medir potencia activa en corriente alterna?", ["Vatimetro", "Ohmetro", "Frecuencimetro", "Buscapolos"], "Vatimetro", "El vatimetro permite medir potencia activa; en trifasica se aplican metodos segun exista neutro o sistema a tres hilos."),
  qGS(410206, "U2: Sistemas trifasicos", "Para que se emplean baterias de condensadores en una instalacion trifasica?", ["Para mejorar el factor de potencia", "Para aumentar la frecuencia de red", "Para convertir corriente alterna en continua", "Para medir aislamiento"], "Para mejorar el factor de potencia", "Los condensadores compensan potencia reactiva y acercan el factor de potencia a valores mas eficientes.")
];

const GS_SCE_U3_DATA = [
  qGS(410301, "U3: Transformadores electricos", "Cual es la funcion principal de un transformador en el transporte electrico?", ["Cambiar tension e intensidad manteniendo aproximadamente la potencia", "Convertir siempre CA en CC", "Almacenar energia quimica", "Medir la energia consumida"], "Cambiar tension e intensidad manteniendo aproximadamente la potencia", "El transformador permite elevar o reducir tension; si aumenta la tension disminuye la corriente para una potencia similar."),
  qGS(410302, "U3: Transformadores electricos", "Por que interesa transportar energia electrica a alta tension?", ["Porque reduce la corriente y las perdidas por efecto Joule", "Porque elimina la necesidad de conductores", "Porque aumenta las perdidas de linea", "Porque solo funciona con corriente continua"], "Porque reduce la corriente y las perdidas por efecto Joule", "A mayor tension para la misma potencia, menor intensidad; las perdidas en linea dependen de la intensidad."),
  qGS(410303, "U3: Transformadores electricos", "Que partes basicas aparecen en un transformador?", ["Nucleo ferromagnetico y devanados", "Rotor, escobillas y colector", "Anodo y catodo", "Condensador y diodo Zener"], "Nucleo ferromagnetico y devanados", "El transformador se forma con circuitos electricos acoplados magneticamente mediante un nucleo."),
  qGS(410304, "U3: Transformadores electricos", "Que se desprecia en un transformador ideal?", ["Perdidas de flujo, resistencia de bobinados, histeresis y perdidas activas", "La relacion de espiras", "La induccion electromagnetica", "La tension secundaria"], "Perdidas de flujo, resistencia de bobinados, histeresis y perdidas activas", "El modelo ideal simplifica el estudio suponiendo ausencia de perdidas y resistencias internas."),
  qGS(410305, "U3: Transformadores electricos", "Que indica el rendimiento de un transformador?", ["La relacion entre potencia util de salida y potencia absorbida", "La frecuencia nominal de red", "La tension maxima de aislamiento", "El numero de bornes"], "La relacion entre potencia util de salida y potencia absorbida", "El rendimiento compara la potencia entregada con la absorbida, teniendo en cuenta las perdidas."),
  qGS(410306, "U3: Transformadores electricos", "Que tipo de transformador de medida reduce una corriente elevada a un valor medible y seguro?", ["Transformador de intensidad", "Autotransformador de arranque", "Transformador de potencia", "Transformador separador ideal"], "Transformador de intensidad", "Los transformadores de intensidad adaptan corrientes altas para instrumentos de medida y proteccion.")
];

const GS_SCE_U4_DATA = [
  qGS(410401, "U4: Motores electricos", "Como se clasifican de forma general las maquinas electricas?", ["Estaticas y dinamicas", "Analogicas y digitales", "Resistivas e inductivas", "Serie y paralelo"], "Estaticas y dinamicas", "El temario distingue maquinas estaticas, como transformadores, y dinamicas, como motores y generadores."),
  qGS(410402, "U4: Motores electricos", "Que maquina transforma energia mecanica en energia electrica alterna?", ["Alternador", "Motor asincrono", "Ohmetro", "Regulador Zener"], "Alternador", "El alternador genera tension y corriente alterna a partir de movimiento mecanico."),
  qGS(410403, "U4: Motores electricos", "Por que un motor asincrono recibe ese nombre?", ["Porque el rotor gira a velocidad inferior a la del campo magnetico", "Porque no tiene estator", "Porque solo funciona sin carga", "Porque gira exactamente a la velocidad de sincronismo"], "Porque el rotor gira a velocidad inferior a la del campo magnetico", "En el motor asincrono existe deslizamiento: el rotor no alcanza la velocidad del campo giratorio."),
  qGS(410404, "U4: Motores electricos", "Que expresa el deslizamiento en un motor asincrono?", ["La diferencia relativa entre velocidad de sincronismo y velocidad del rotor", "La potencia reactiva de la red", "La rigidez dielectrica del aislamiento", "El valor de la resistencia de arranque"], "La diferencia relativa entre velocidad de sincronismo y velocidad del rotor", "El deslizamiento relaciona la velocidad del campo con la velocidad real del rotor."),
  qGS(410405, "U4: Motores electricos", "Que elemento se emplea habitualmente para facilitar el arranque de motores monofasicos?", ["Bobinado de arranque y condensador", "Diodo Zener en inversa", "Transformador de intensidad", "Mapa de Karnaugh"], "Bobinado de arranque y condensador", "El condensador y el bobinado auxiliar ayudan a crear el desfase necesario para iniciar el giro."),
  qGS(410406, "U4: Motores electricos", "Que inconveniente presenta el motor sincrono durante el arranque?", ["Tiene par nulo a velocidad inicial y necesita ayuda de arranque", "No puede generar campo magnetico", "Solo funciona con corriente continua", "No admite cargas mecanicas"], "Tiene par nulo a velocidad inicial y necesita ayuda de arranque", "El motor sincrono requiere sistemas auxiliares o comportarse inicialmente como asincrono para arrancar.")
];

const GS_SCE_U5_DATA = [
  qGS(410501, "U5: Instrumentos y equipos de medida", "Como debe conectarse un voltimetro para medir diferencia de potencial?", ["En paralelo con el elemento a medir", "En serie con toda la carga", "Sustituyendo al fusible", "Entre tierra y carcasa unicamente"], "En paralelo con el elemento a medir", "El voltimetro mide tension entre dos puntos y debe tener alta resistencia interna para no alterar el circuito."),
  qGS(410502, "U5: Instrumentos y equipos de medida", "Como debe conectarse un amperimetro para medir intensidad?", ["En serie con la rama por la que circula la corriente", "Siempre en paralelo", "Sin cerrar el circuito", "Solo entre fase y neutro"], "En serie con la rama por la que circula la corriente", "El amperimetro mide la corriente que lo atraviesa, por eso se intercala en serie y presenta resistencia interna muy baja."),
  qGS(410503, "U5: Instrumentos y equipos de medida", "Que mide un ohmetro?", ["Resistencia electrica", "Potencia aparente", "Factor de potencia", "Frecuencia de red"], "Resistencia electrica", "El ohmetro aplica una pequena tension interna para determinar el valor de resistencia del elemento."),
  qGS(410504, "U5: Instrumentos y equipos de medida", "Que equipo integra varias funciones de medida en un solo instrumento?", ["Polimetro", "Buscapolos", "Varimetro", "Transformador"], "Polimetro", "El polimetro combina medidas como tension, corriente y resistencia segun la funcion seleccionada."),
  qGS(410505, "U5: Instrumentos y equipos de medida", "Que comprueba una medida de rigidez dielectrica?", ["La tension que puede soportar un material aislante sin perforarse", "El sentido de giro de un motor", "La potencia activa de una fase", "El numero de bits de un contador"], "La tension que puede soportar un material aislante sin perforarse", "La rigidez dielectrica evalua la capacidad del aislamiento para soportar tension sin fallo."),
  qGS(410506, "U5: Instrumentos y equipos de medida", "Que debe hacerse antes de realizar una medida sin tension?", ["Verificar la ausencia de tension y aplicar normas de seguridad", "Conectar el amperimetro en paralelo", "Aumentar la carga del circuito", "Anular las protecciones"], "Verificar la ausencia de tension y aplicar normas de seguridad", "Las medidas y trabajos sin tension requieren comprobacion previa y medidas preventivas para evitar accidentes.")
];

const GS_SCE_U6_DATA = [
  qGS(410601, "U6: Electronica digital combinacional", "Que valores usa la electronica digital para representar informacion basica?", ["0 y 1", "Solo valores negativos", "Cualquier valor continuo", "Frecuencias aleatorias"], "0 y 1", "La electronica digital trabaja con niveles discretos, habitualmente representados como 0 y 1."),
  qGS(410602, "U6: Electronica digital combinacional", "Como se denomina cada simbolo de un numero binario?", ["Bit", "Byte siempre", "Hercio", "Ohmio"], "Bit", "El sistema binario utiliza los simbolos 0 y 1; cada posicion individual es un bit."),
  qGS(410603, "U6: Electronica digital combinacional", "Para que se usa el algebra de Boole en electronica digital?", ["Para disenar y simplificar funciones logicas", "Para medir potencia reactiva", "Para rectificar corriente alterna", "Para calcular deslizamiento mecanico"], "Para disenar y simplificar funciones logicas", "El algebra de Boole permite describir operaciones logicas y convertirlas en circuitos de puertas."),
  qGS(410604, "U6: Electronica digital combinacional", "Que puerta logica invierte el estado de entrada?", ["NOT", "OR", "AND", "XOR"], "NOT", "La puerta NOT entrega la salida complementaria de la entrada."),
  qGS(410605, "U6: Electronica digital combinacional", "Que puerta solo da salida 1 cuando todas sus entradas son 1?", ["AND", "OR", "NOR", "NOT"], "AND", "La funcion AND representa el producto logico: exige que todas las entradas esten activas."),
  qGS(410606, "U6: Electronica digital combinacional", "Que metodo se cita como muy utilizado para simplificar funciones logicas?", ["Mapas de Karnaugh", "Triangulo de potencias", "Ensayo de vacio", "Codigo de colores"], "Mapas de Karnaugh", "Los mapas de Karnaugh son una herramienta grafica para simplificar expresiones booleanas.")
];

const GS_SCE_U7_DATA = [
  qGS(410701, "U7: Circuitos digitales secuenciales", "Que diferencia a un circuito secuencial de uno combinacional?", ["Depende de entradas actuales y estados anteriores", "No usa senal de reloj nunca", "Solo puede tener una puerta NOT", "No almacena informacion"], "Depende de entradas actuales y estados anteriores", "Los sistemas secuenciales incorporan memoria, por lo que su salida depende del estado previo."),
  qGS(410702, "U7: Circuitos digitales secuenciales", "Que es un biestable?", ["Un circuito capaz de almacenar un bit de informacion", "Un medidor de frecuencia", "Un rectificador de onda completa", "Un tipo de resistencia variable"], "Un circuito capaz de almacenar un bit de informacion", "Los biestables tienen dos estados estables y se usan como elementos basicos de memoria digital."),
  qGS(410703, "U7: Circuitos digitales secuenciales", "Que biestable evita la condicion indeterminada del RS mediante entradas J y K?", ["JK", "Diodo", "Triac", "Multiplexor"], "JK", "El biestable JK mejora el comportamiento del RS y permite conmutacion controlada."),
  qGS(410704, "U7: Circuitos digitales secuenciales", "Que senal activa el funcionamiento de un biestable sincrono?", ["Reloj o clock", "Tension Zener", "Corriente de fuga", "Potencia aparente"], "Reloj o clock", "Los biestables sincronizados cambian de estado en funcion de una senal de reloj."),
  qGS(410705, "U7: Circuitos digitales secuenciales", "Para que sirven los contadores digitales?", ["Para llevar una cuenta y secuenciar operaciones", "Para medir resistencia analogica", "Para transformar tension", "Para disipar calor"], "Para llevar una cuenta y secuenciar operaciones", "Los contadores encadenan biestables para generar secuencias binarias."),
  qGS(410706, "U7: Circuitos digitales secuenciales", "Que inconveniente tienen los contadores asincronos frente a los sincronos?", ["Son mas lentos por tiempos de propagacion acumulados", "No usan biestables", "No pueden contar", "Solo funcionan en corriente alterna"], "Son mas lentos por tiempos de propagacion acumulados", "En los asincronos la senal se propaga de etapa en etapa, acumulando retardos.")
];

const GS_SCE_U8_DATA = [
  qGS(410801, "U8: Electronica analogica", "Que componente ofrece oposicion al flujo de corriente y disipa energia en forma de calor?", ["Resistencia", "Condensador ideal", "Bobina ideal", "Oscilador"], "Resistencia", "La resistencia limita corriente y transforma parte de la energia electrica en calor."),
  qGS(410802, "U8: Electronica analogica", "Que indica la tolerancia de una resistencia?", ["El margen porcentual entre valor nominal y valor real", "La tension maxima de red", "La frecuencia de oscilacion", "El numero de terminales"], "El margen porcentual entre valor nominal y valor real", "La tolerancia expresa la precision del componente respecto a su valor declarado."),
  qGS(410803, "U8: Electronica analogica", "Que magnitud caracteriza la capacidad de un condensador?", ["Faradio", "Hercio", "Ohmio", "Vatio"], "Faradio", "La capacidad de un condensador se mide en faradios y relaciona carga almacenada con tension."),
  qGS(410804, "U8: Electronica analogica", "Como se comporta una bobina ideal frente a corriente continua en regimen permanente?", ["Como un cortocircuito", "Como un circuito abierto perfecto", "Como un diodo Zener", "Como una fuente de alimentacion"], "Como un cortocircuito", "La bobina se opone a cambios de corriente, pero en continua estable su reactancia se anula idealmente."),
  qGS(410805, "U8: Electronica analogica", "Que funcion basica tiene un diodo?", ["Permitir corriente en un sentido e impedirla en el contrario", "Almacenar un bit", "Medir potencia trifasica", "Crear campo magnetico rotativo"], "Permitir corriente en un sentido e impedirla en el contrario", "El diodo conduce en polarizacion directa y bloquea en inversa dentro de sus limites."),
  qGS(410806, "U8: Electronica analogica", "Que terminales principales tiene un transistor bipolar?", ["Base, colector y emisor", "Anodo, catodo y puerta", "Fase, neutro y tierra", "Entrada, salida y reloj"], "Base, colector y emisor", "El transistor bipolar se controla desde la base y conduce entre colector y emisor.")
];

const GS_SCE_U9_DATA = [
  qGS(410901, "U9: Circuitos electronicos analogicos", "Que caracteriza a un amplificador operacional?", ["Alta ganancia y entradas diferencial inversora y no inversora", "Funcionamiento exclusivo como resistencia", "Salida siempre alterna de red", "Dos estados estables de memoria"], "Alta ganancia y entradas diferencial inversora y no inversora", "El operacional amplifica la diferencia entre sus entradas y se usa en multiples configuraciones analogicas."),
  qGS(410902, "U9: Circuitos electronicos analogicos", "Para que se emplea una fuente de alimentacion en equipos electronicos?", ["Para obtener corriente continua de baja tension a partir de la red", "Para aumentar el deslizamiento", "Para generar tres fases equilibradas", "Para medir resistencia sin tension"], "Para obtener corriente continua de baja tension a partir de la red", "Muchos circuitos electronicos necesitan tensiones continuas como 5 V, 12 V o 24 V."),
  qGS(410903, "U9: Circuitos electronicos analogicos", "Que ocurre en un diodo Zener al alcanzar su tension Zener en inversa?", ["Conduce en inversa manteniendo una tension aproximadamente constante", "Se comporta como un interruptor mecanico", "Almacena carga binaria", "Convierte CC en CA trifasica"], "Conduce en inversa manteniendo una tension aproximadamente constante", "El Zener esta disenado para trabajar en ruptura inversa controlada y regular tension."),
  qGS(410904, "U9: Circuitos electronicos analogicos", "Que tres terminales suelen tener los reguladores integrados lineales?", ["Entrada, salida y comun o masa", "Base, emisor y colector", "Fase, neutro y proteccion", "Set, reset y reloj"], "Entrada, salida y comun o masa", "Los reguladores integrados estabilizan una tension de salida a partir de una entrada no estabilizada."),
  qGS(410905, "U9: Circuitos electronicos analogicos", "Que es un oscilador electronico?", ["Un circuito capaz de generar una senal alterna a partir de corriente continua", "Un medidor de tierra", "Un transformador de medida", "Una resistencia dependiente de luz"], "Un circuito capaz de generar una senal alterna a partir de corriente continua", "El oscilador combina amplificacion y realimentacion para mantener una senal periodica."),
  qGS(410906, "U9: Circuitos electronicos analogicos", "Que dispositivo semiconductor puede controlar potencia en corriente alterna en ambos semiciclos?", ["Triac", "Diodo rectificador simple", "Biestable D", "Ohmetro"], "Triac", "El triac permite controlar corriente alterna conduciendo en ambos sentidos cuando se dispara adecuadamente.")
];

const GS_SCE_ANX_DATA = [
  qGS(411001, "ANX: Formulas, definiciones y unidades basicas", "Que formula relaciona potencia activa, tension e intensidad en corriente continua o carga resistiva?", ["P = V x I", "R = P x I", "I = P x R", "S = Q - P"], "P = V x I", "La potencia electrica basica se calcula multiplicando tension por intensidad en condiciones resistivas o de continua."),
  qGS(411002, "ANX: Formulas, definiciones y unidades basicas", "Que ley establece que la suma de tensiones en una malla cerrada es cero?", ["Ley de Kirchhoff de tensiones", "Ley de Coulomb", "Ley de Faraday para lineas de campo", "Ley de idempotencia"], "Ley de Kirchhoff de tensiones", "La ley de tensiones de Kirchhoff se aplica al recorrido cerrado de una malla electrica."),
  qGS(411003, "ANX: Formulas, definiciones y unidades basicas", "Que representa el factor de potencia?", ["La relacion entre potencia activa y potencia aparente", "La relacion entre resistencia y longitud", "La cantidad de bits por segundo", "La tension de ruptura de un diodo"], "La relacion entre potencia activa y potencia aparente", "El factor de potencia mide que parte de la potencia aparente se convierte en potencia activa util."),
  qGS(411004, "ANX: Formulas, definiciones y unidades basicas", "Que elemento se emplea normalmente para mejorar el factor de potencia?", ["Condensadores", "Fusibles", "Bobinas de arranque", "Buscapolos"], "Condensadores", "La compensacion con condensadores reduce la demanda de potencia reactiva inductiva."),
  qGS(411005, "ANX: Formulas, definiciones y unidades basicas", "En calculos de caida de tension, que simbolo suele representar el factor de potencia?", ["cos phi", "Hz", "Ah", "BCD"], "cos phi", "El coseno de phi expresa el factor de potencia usado en calculos de instalaciones de corriente alterna."),
  qGS(411006, "ANX: Formulas, definiciones y unidades basicas", "Que unidad se asocia a la frecuencia electrica?", ["Hercio", "Culombio", "Voltio por metro", "Voltampere reactivo hora"], "Hercio", "La frecuencia indica ciclos por segundo y su unidad es el hercio.")
];

const GS_SISTEMAS_CIRCUITOS_ELECTRICOS_DATA = [
  ...GS_SCE_U1_DATA,
  ...GS_SCE_U2_DATA,
  ...GS_SCE_U3_DATA,
  ...GS_SCE_U4_DATA,
  ...GS_SCE_U5_DATA,
  ...GS_SCE_U6_DATA,
  ...GS_SCE_U7_DATA,
  ...GS_SCE_U8_DATA,
  ...GS_SCE_U9_DATA,
  ...GS_SCE_ANX_DATA
];

const EXAMEN_GS_SISTEMAS_CIRCUITOS_DATA = [
  ...GS_SCE_U1_DATA.slice(0, 4),
  ...GS_SCE_U2_DATA.slice(0, 4),
  ...GS_SCE_U3_DATA.slice(0, 4),
  ...GS_SCE_U4_DATA.slice(0, 4),
  ...GS_SCE_U5_DATA.slice(0, 4),
  ...GS_SCE_U6_DATA.slice(0, 4),
  ...GS_SCE_U7_DATA.slice(0, 4),
  ...GS_SCE_U8_DATA.slice(0, 4),
  ...GS_SCE_U9_DATA.slice(0, 4),
  ...GS_SCE_ANX_DATA.slice(0, 4)
];

const GS_GMM_U1_DATA = [
  qGS(420101, "U1: Documentacion tecnica y normativa de aplicacion", "Que es un proyecto tecnico en instalaciones electricas?", ["Un estudio completo con escritos, planos y calculos para establecer como ejecutar el proceso", "Un listado informal de materiales sin validez", "Unicamente el presupuesto de compra", "Solo el contrato de mantenimiento"], "Un estudio completo con escritos, planos y calculos para establecer como ejecutar el proceso", "El proyecto tecnico reune la documentacion necesaria para definir, ejecutar, comprobar y legalizar una instalacion."),
  qGS(420102, "U1: Documentacion tecnica y normativa de aplicacion", "Que documentos aparecen como minimos dentro del proyecto tecnico?", ["Memoria descriptiva, pliego de condiciones, presupuesto, planos y esquemas", "Solo facturas y albaranes", "Unicamente el certificado final", "Plan de marketing y nominas"], "Memoria descriptiva, pliego de condiciones, presupuesto, planos y esquemas", "El temario enumera esos bloques como documentos basicos del proyecto tecnico."),
  qGS(420103, "U1: Documentacion tecnica y normativa de aplicacion", "Que recoge la memoria descriptiva?", ["La informacion basica y tecnica de la instalacion", "Solo las sanciones por incumplimiento", "La lista de proveedores homologados", "Los turnos del almacen"], "La informacion basica y tecnica de la instalacion", "La memoria describe objeto, emplazamiento, datos tecnicos, previsiones de carga, protecciones, normativa y conclusiones."),
  qGS(420104, "U1: Documentacion tecnica y normativa de aplicacion", "Que documento expone condiciones minimas, materiales y ejecucion con peso legal y contractual?", ["Pliego de condiciones", "Grafico ABC", "Orden de compra", "Parte diario de trabajo"], "Pliego de condiciones", "El pliego fija condiciones tecnicas y administrativas que regulan la ejecucion de la instalacion."),
  qGS(420105, "U1: Documentacion tecnica y normativa de aplicacion", "Que reglamento se cita como legislacion principal para instalaciones de baja tension en Espana?", ["Reglamento Electrotecnico de Baja Tension", "Codigo de Circulacion", "Normativa DIN exclusivamente", "Ley de marcas comerciales"], "Reglamento Electrotecnico de Baja Tension", "El REBT, aprobado por el Real Decreto 842/2002, es la referencia principal junto con sus ITC.")
];

const GS_GMM_U2_DATA = [
  qGS(420201, "U2: Organizacion del proceso de aprovisionamiento", "Que es el aprovisionamiento?", ["La accion de conseguir materiales, equipos y servicios necesarios en tiempo y forma", "La reparacion de averias ya producidas", "La certificacion final de obra", "La medida de resistencia de tierra"], "La accion de conseguir materiales, equipos y servicios necesarios en tiempo y forma", "El aprovisionamiento busca que los recursos lleguen cuando se necesitan, evitando demoras y excesos."),
  qGS(420202, "U2: Organizacion del proceso de aprovisionamiento", "Que riesgo produce un exceso de aprovisionamiento?", ["Costes innecesarios y problemas de almacenamiento", "Mejor factor de potencia", "Menos necesidad de control", "Eliminacion del presupuesto"], "Costes innecesarios y problemas de almacenamiento", "Comprar o almacenar de mas puede inmovilizar recursos y reducir la eficiencia del proceso."),
  qGS(420203, "U2: Organizacion del proceso de aprovisionamiento", "Cual es una fase de la gestion del aprovisionamiento?", ["Analisis de necesidades", "Ensayo dielectrico", "Conexion en triangulo", "Prueba de polaridad de motores"], "Analisis de necesidades", "Antes de comprar hay que determinar que materiales, equipos y recursos son necesarios."),
  qGS(420204, "U2: Organizacion del proceso de aprovisionamiento", "Que se comprueba en la recepcion y verificacion de un pedido?", ["Cantidad, calidad y correspondencia con la documentacion", "Solo el color del embalaje", "La velocidad del motor", "El desfase entre fases"], "Cantidad, calidad y correspondencia con la documentacion", "En recepcion se contrasta pedido, albaran y material recibido para aceptar o reclamar."),
  qGS(420205, "U2: Organizacion del proceso de aprovisionamiento", "Que documento permite conocer recursos humanos, materiales y tiempos necesarios para ejecutar la instalacion?", ["Plan de montaje", "Buscapolos", "Registro de residuos RAEE", "Norma de colores de resistencias"], "Plan de montaje", "El plan de montaje relaciona tareas, medios y tiempos para organizar la ejecucion.")
];

const GS_GMM_U3_DATA = [
  qGS(420301, "U3: Gestion del almacen", "Como se define un almacen?", ["Espacio habilitado para deposito, conservacion y control de mercancias", "Documento para certificar obra", "Herramienta para medir frecuencia", "Sistema de correccion del factor de potencia"], "Espacio habilitado para deposito, conservacion y control de mercancias", "El almacen garantiza disponibilidad y conservacion de materiales para montaje y mantenimiento."),
  qGS(420302, "U3: Gestion del almacen", "Que zona del almacen se dedica a conservar la mercancia hasta su uso?", ["Zona de almacenamiento", "Zona de ensayos dielectricos", "Zona de puesta a tierra", "Zona de facturacion externa"], "Zona de almacenamiento", "El temario distingue zonas como recepcion, almacenamiento, preparacion o picking y expedicion."),
  qGS(420303, "U3: Gestion del almacen", "Que significa FIFO en movimiento de almacen?", ["Lo primero que entra es lo primero que sale", "Lo ultimo que entra sale primero", "Material fijo sin movimiento", "Fichero interno de facturacion ordinaria"], "Lo primero que entra es lo primero que sale", "FIFO ayuda a evitar acumulaciones y envejecimiento de materiales almacenados."),
  qGS(420304, "U3: Gestion del almacen", "Para que sirven la codificacion y trazabilidad en almacen?", ["Para localizar, identificar y seguir materiales", "Para elevar la tension de linea", "Para anular inventarios", "Para medir potencia reactiva"], "Para localizar, identificar y seguir materiales", "La trazabilidad permite saber donde esta cada material y cual ha sido su recorrido."),
  qGS(420305, "U3: Gestion del almacen", "Que metodologia se cita para organizar eficientemente el almacen?", ["Metodo de las 5S", "Metodo de los dos vatimetros", "Conexion estrella-triangulo", "Ensayo en vacio"], "Metodo de las 5S", "Las 5S agrupan clasificar, ordenar, limpiar, estandarizar y mantener la disciplina.")
];

const GS_GMM_U4_DATA = [
  qGS(420401, "U4: Planificacion del montaje", "Por que es importante planificar el montaje electrico?", ["Para minimizar tiempos, recursos y desviaciones durante la ejecucion", "Para evitar cualquier documentacion", "Para sustituir el proyecto tecnico", "Para eliminar verificaciones"], "Para minimizar tiempos, recursos y desviaciones durante la ejecucion", "La planificacion ordena tareas, recursos y plazos para controlar la ejecucion de la obra."),
  qGS(420402, "U4: Planificacion del montaje", "Que metodo de planificacion asigna tiempos y relaciones entre tareas?", ["PERT", "Codigo BCD", "Ley de Ohm", "Metodo FIFO"], "PERT", "PERT se utiliza para analizar actividades, dependencias y duraciones dentro de un proyecto."),
  qGS(420403, "U4: Planificacion del montaje", "Que representa el camino critico CPM?", ["La secuencia de actividades que condiciona la duracion total del proyecto", "El recorrido de la corriente por tierra", "El listado de materiales sobrantes", "La escala grafica del plano"], "La secuencia de actividades que condiciona la duracion total del proyecto", "Las tareas criticas no tienen holgura suficiente y retrasarlas retrasa el proyecto."),
  qGS(420404, "U4: Planificacion del montaje", "Que muestra un diagrama de Gantt?", ["Tareas distribuidas en el tiempo mediante barras", "El codigo de colores de resistencias", "La curva de ruptura del Zener", "La suma vectorial de corrientes"], "Tareas distribuidas en el tiempo mediante barras", "Gantt permite visualizar calendario, duracion y solapes de las actividades."),
  qGS(420405, "U4: Planificacion del montaje", "Cual es una fase del proceso de montaje citada en el temario?", ["Verificacion y pruebas", "Compra de acciones", "Diseno de marketing", "Clasificacion BCD"], "Verificacion y pruebas", "Tras cimentacion, canalizaciones, cableado, mecanismos y protecciones, se verifican y prueban las instalaciones.")
];

const GS_GMM_U5_DATA = [
  qGS(420501, "U5: Gestion de recursos y materiales", "Que tipos de recursos necesita coordinar una empresa de instalaciones electricas?", ["Humanos y materiales", "Solo financieros", "Solo publicitarios", "Unicamente residuos"], "Humanos y materiales", "La unidad trata la planificacion y control de personas, materiales, herramientas y equipos."),
  qGS(420502, "U5: Gestion de recursos y materiales", "Que busca la planificacion de personal?", ["Asignar personas y capacidades a las necesidades de trabajo", "Eliminar la formacion", "Sustituir el almacen", "Medir la rigidez dielectrica"], "Asignar personas y capacidades a las necesidades de trabajo", "La planificacion de personal permite disponer de los perfiles adecuados cuando son necesarios."),
  qGS(420503, "U5: Gestion de recursos y materiales", "Para que sirve el analisis de puestos de trabajo?", ["Para definir tareas, responsabilidades y requisitos del puesto", "Para calcular la tension de fase", "Para clasificar residuos por seis cifras", "Para dibujar un diodo"], "Para definir tareas, responsabilidades y requisitos del puesto", "Analizar puestos ayuda a seleccionar, formar y organizar correctamente al personal."),
  qGS(420504, "U5: Gestion de recursos y materiales", "Que engloba la gestion de recursos materiales?", ["Planificacion, adquisicion, almacenamiento, distribucion y control de materiales y equipos", "Solo el pago de nominas", "Solo la inspeccion inicial", "Exclusivamente el organigrama"], "Planificacion, adquisicion, almacenamiento, distribucion y control de materiales y equipos", "La gestion material asegura disponibilidad, custodia, mantenimiento y uso eficiente de recursos."),
  qGS(420505, "U5: Gestion de recursos y materiales", "Para que se utilizan indicadores de gestion?", ["Para controlar calidad, rendimiento y mejora continua", "Para sustituir los planos", "Para evitar mediciones", "Para cambiar corriente alterna a continua"], "Para controlar calidad, rendimiento y mejora continua", "Los indicadores permiten evaluar resultados y detectar desviaciones en recursos y servicio.")
];

const GS_GMM_U6_DATA = [
  qGS(420601, "U6: Puesta en servicio de las instalaciones electrotecnicas", "Que debe ocurrir antes de la puesta en servicio de ciertas instalaciones?", ["Verificacion o inspeccion inicial segun normativa", "Eliminar toda documentacion", "Anular las protecciones", "Retirar el certificado"], "Verificacion o inspeccion inicial segun normativa", "La puesta en servicio exige comprobar seguridad, cumplimiento reglamentario y documentacion."),
  qGS(420602, "U6: Puesta en servicio de las instalaciones electrotecnicas", "Que diferencia hay entre categoria basica y especialista de instalador?", ["La especialista habilita trabajos de mayor alcance o especialidad", "La basica no puede usar herramientas", "La especialista no necesita normativa", "Son categorias de almacenes"], "La especialista habilita trabajos de mayor alcance o especialidad", "El temario distingue categorias segun competencias, medios y tipos de instalaciones."),
  qGS(420603, "U6: Puesta en servicio de las instalaciones electrotecnicas", "Como pueden clasificarse los defectos en una inspeccion?", ["Leves, graves y muy graves", "FIFO, LIFO y ABC", "TT, IT y TN", "Activo, reactivo y aparente"], "Leves, graves y muy graves", "La clasificacion de defectos condiciona el resultado de inspeccion y los plazos de subsanacion."),
  qGS(420604, "U6: Puesta en servicio de las instalaciones electrotecnicas", "Que verifica la medida de continuidad de conductores de proteccion?", ["Que el conductor de proteccion y uniones equipotenciales tienen continuidad electrica", "Que el motor gira en sentido horario", "Que no existen proveedores repetidos", "Que el almacen esta lleno"], "Que el conductor de proteccion y uniones equipotenciales tienen continuidad electrica", "Esta prueba confirma que las masas quedan correctamente conectadas al sistema de proteccion."),
  qGS(420605, "U6: Puesta en servicio de las instalaciones electrotecnicas", "Que documentacion se tramita para legalizar una instalacion de baja tension?", ["Certificado de instalacion y, si procede, proyecto o memoria tecnica de diseno", "Solo un albaran de compra", "Una hoja de calculo sin firma", "Un diagrama de Karnaugh"], "Certificado de instalacion y, si procede, proyecto o memoria tecnica de diseno", "La administracion recibe la documentacion reglamentaria antes de diligenciar o autorizar la puesta en servicio.")
];

const GS_GMM_U7_DATA = [
  qGS(420701, "U7: Organizacion y gestion del mantenimiento", "Que es el mantenimiento de una instalacion?", ["Acciones destinadas a garantizar funcionamiento, seguridad y conservacion con el menor coste posible", "Solo reparar cuando hay incendio", "Comprar material sin almacenarlo", "Dibujar esquemas unifilares"], "Acciones destinadas a garantizar funcionamiento, seguridad y conservacion con el menor coste posible", "El mantenimiento agrupa tecnicas para conservar las prestaciones de la instalacion."),
  qGS(420702, "U7: Organizacion y gestion del mantenimiento", "Cuando se realiza el mantenimiento correctivo?", ["Despues de producirse una averia o fallo", "Antes de que exista cualquier sintoma siempre", "Solo al disenar el proyecto", "Durante la compra de materiales"], "Despues de producirse una averia o fallo", "El correctivo actua una vez detectada la averia, pudiendo ser planificado o no planificado."),
  qGS(420703, "U7: Organizacion y gestion del mantenimiento", "Que busca el mantenimiento preventivo?", ["Localizar fallos antes de que se produzcan mediante acciones periodicas", "Eliminar inspecciones", "No registrar actuaciones", "Aumentar residuos"], "Localizar fallos antes de que se produzcan mediante acciones periodicas", "El preventivo incluye revisiones, comprobaciones e inspecciones de seguridad programadas."),
  qGS(420704, "U7: Organizacion y gestion del mantenimiento", "Que mantenimiento se basa en mediciones para anticiparse al fallo?", ["Predictivo", "Correctivo no planificado", "De emergencia pura", "Administrativo"], "Predictivo", "El predictivo analiza variables y tendencias para intervenir antes de la averia."),
  qGS(420705, "U7: Organizacion y gestion del mantenimiento", "Que debe incluir un plan de mantenimiento completo?", ["Acciones correctivas, preventivas y predictivas documentadas", "Solo presupuestos comerciales", "Unicamente planos de situacion", "Solo etiquetas de almacen"], "Acciones correctivas, preventivas y predictivas documentadas", "El plan organiza actuaciones, periodicidades, registros e indicadores de mantenimiento.")
];

const GS_GMM_U8_DATA = [
  qGS(420801, "U8: Gestion de residuos y sistemas de gestion de calidad", "Que debe hacerse con los residuos generados en montaje y mantenimiento electrico?", ["Clasificarlos y gestionarlos segun normativa", "Mezclarlos sin separacion", "Abandonarlos en obra", "Usarlos como material nuevo"], "Clasificarlos y gestionarlos segun normativa", "Los residuos de obra, cables, aparatos y componentes deben gestionarse de forma controlada."),
  qGS(420802, "U8: Gestion de residuos y sistemas de gestion de calidad", "En que consiste la Lista Europea de Residuos?", ["Un sistema de codificacion de residuos mediante codigos de seis cifras", "Un listado de empleados", "Una tabla de tensiones trifasicas", "Un grafico de Gantt"], "Un sistema de codificacion de residuos mediante codigos de seis cifras", "La clasificacion LER ayuda a identificar correctamente cada tipo de residuo."),
  qGS(420803, "U8: Gestion de residuos y sistemas de gestion de calidad", "Que son los RAEE?", ["Residuos de aparatos electricos y electronicos", "Registros automaticos de energia electrica", "Redes aereas especiales exteriores", "Recursos anuales de empresa"], "Residuos de aparatos electricos y electronicos", "Los RAEE tienen normativa especifica por los materiales y componentes que contienen."),
  qGS(420804, "U8: Gestion de residuos y sistemas de gestion de calidad", "Que debe incluir un plan de gestion de residuos?", ["Prevision, separacion, reutilizacion, gestion de peligrosos y valoracion de costes", "Solo el nombre del instalador", "Unicamente el circuito de mando", "Solo el factor de potencia"], "Prevision, separacion, reutilizacion, gestion de peligrosos y valoracion de costes", "El plan describe como se minimizan, separan, almacenan y tratan los residuos generados."),
  qGS(420805, "U8: Gestion de residuos y sistemas de gestion de calidad", "Que norma se asocia a sistemas de gestion de la calidad?", ["ISO 9001", "Ley de Ohm", "Codigo BCD", "DIN de dibujo exclusivamente"], "ISO 9001", "ISO 9001 establece requisitos para sistemas de gestion de calidad orientados a procesos y mejora continua.")
];

const GS_GESTION_MONTAJE_MANTENIMIENTO_DATA = [
  ...GS_GMM_U1_DATA,
  ...GS_GMM_U2_DATA,
  ...GS_GMM_U3_DATA,
  ...GS_GMM_U4_DATA,
  ...GS_GMM_U5_DATA,
  ...GS_GMM_U6_DATA,
  ...GS_GMM_U7_DATA,
  ...GS_GMM_U8_DATA
];

const EXAMEN_GS_GESTION_MONTAJE_MANTENIMIENTO_DATA = [
  ...GS_GMM_U1_DATA,
  ...GS_GMM_U2_DATA,
  ...GS_GMM_U3_DATA,
  ...GS_GMM_U4_DATA,
  ...GS_GMM_U5_DATA,
  ...GS_GMM_U6_DATA,
  ...GS_GMM_U7_DATA,
  ...GS_GMM_U8_DATA
];

const GS_DTE_U1_DATA = [
  qGS(430101, "U1: Identificacion de la documentacion tecnica y administrativa", "Cual es la finalidad de la documentacion tecnico-administrativa en una instalacion electrica?", ["Definir y justificar la instalacion para ejecutarla y legalizarla correctamente", "Sustituir todas las verificaciones de obra", "Evitar la aplicacion de normativa", "Servir solo como publicidad comercial"], "Definir y justificar la instalacion para ejecutarla y legalizarla correctamente", "La documentacion recoge fases, soluciones, normativa, certificados y tramites necesarios para ejecutar y poner en servicio la instalacion."),
  qGS(430102, "U1: Identificacion de la documentacion tecnica y administrativa", "Que fase se realiza antes de poner en marcha una instalacion terminada?", ["Inscripcion, registro y legalizacion de la instalacion", "Retirada de toda la documentacion", "Cambio obligatorio de titularidad", "Supresion del certificado"], "Inscripcion, registro y legalizacion de la instalacion", "Tras comprobar el funcionamiento, la documentacion debe registrarse ante los organismos correspondientes antes de la puesta en servicio."),
  qGS(430103, "U1: Identificacion de la documentacion tecnica y administrativa", "Que documento plasma las comprobaciones realizadas al finalizar una instalacion?", ["Certificado de instalacion electrica", "Factura proforma", "Catalogo de fabricante", "Pedido de almacen"], "Certificado de instalacion electrica", "El certificado recoge que la instalacion ha sido comprobada y cumple las condiciones exigibles."),
  qGS(430104, "U1: Identificacion de la documentacion tecnica y administrativa", "Como se clasifican tecnicamente las instalaciones electricas segun el nivel de tension?", ["Muy baja tension, baja tension y alta tension", "Interior, exterior y comercial solamente", "Nueva, ampliada y temporal", "Monofasica, trifasica y mecanica"], "Muy baja tension, baja tension y alta tension", "La clasificacion tecnica usa rangos de tension para distinguir las instalaciones y la reglamentacion aplicable."),
  qGS(430105, "U1: Identificacion de la documentacion tecnica y administrativa", "Que relacion existe entre legislacion y normativa tecnica?", ["La legislacion es de obligado cumplimiento y la normativa concreta criterios tecnicos de aplicacion", "La normativa elimina la ley", "La legislacion solo se usa en planos", "Son documentos sin relacion con la instalacion"], "La legislacion es de obligado cumplimiento y la normativa concreta criterios tecnicos de aplicacion", "El temario diferencia el entorno legislativo del normativo y ambos orientan la documentacion y ejecucion.")
];

const GS_DTE_U2_DATA = [
  qGS(430201, "U2: Proyectos y memorias tecnicas de diseno", "Que es un proyecto de instalacion electrica?", ["Un conjunto de documentos que define una solucion tecnica ajustada a la normativa", "Solo una lista de precios sin planos", "Un formulario sin descripcion tecnica", "Unicamente un manual de usuario"], "Un conjunto de documentos que define una solucion tecnica ajustada a la normativa", "El proyecto incluye las caracteristicas de la instalacion y justifica que cumple los parametros legales y tecnicos."),
  qGS(430202, "U2: Proyectos y memorias tecnicas de diseno", "Que caracteriza a la Memoria Tecnica de Diseno?", ["Es un documento oficial mas breve que el proyecto", "Siempre sustituye a cualquier proyecto de alta tension", "No puede contener datos tecnicos", "La redacta siempre la compania suministradora"], "Es un documento oficial mas breve que el proyecto", "La MTD aporta informacion basica y puede firmarla el instalador autorizado o tecnico competente segun el caso."),
  qGS(430203, "U2: Proyectos y memorias tecnicas de diseno", "Quien firma habitualmente los proyectos de instalaciones electricas?", ["Proyectistas o ingenieros cualificados", "Cualquier usuario final", "Solo el almacenista", "El fabricante de luminarias"], "Proyectistas o ingenieros cualificados", "El temario distingue la firma del proyecto por tecnicos cualificados y la MTD por instalador autorizado o tecnico competente."),
  qGS(430204, "U2: Proyectos y memorias tecnicas de diseno", "Que apartado del proyecto describe objeto, emplazamiento, cargas, esquemas y protecciones?", ["Memoria descriptiva", "Portada exclusivamente", "Anexo fotografico sin calculos", "Contrato de suministro"], "Memoria descriptiva", "La memoria descriptiva explica la finalidad, datos del local, prevision de cargas, esquemas, enlaces, puesta a tierra y protecciones."),
  qGS(430205, "U2: Proyectos y memorias tecnicas de diseno", "En alumbrado exterior de baja tension, cuando se requiere proyecto por eficiencia energetica segun el temario?", ["Cuando la potencia es mayor de 5 kW", "Siempre que haya una lampara", "Solo con potencia menor o igual a 1 kW", "Nunca se requiere proyecto"], "Cuando la potencia es mayor de 5 kW", "El esquema de seleccion indica MTD entre 1 kW y 5 kW, y proyecto cuando la potencia supera 5 kW.")
];

const GS_DTE_U3_DATA = [
  qGS(430301, "U3: Representacion grafica de las instalaciones electrotecnicas", "Que diferencia principal hay entre croquis y plano?", ["El croquis es rapido y a mano alzada; el plano es preciso, acotado y a escala", "El plano no puede usar simbologia", "El croquis siempre se imprime en A0", "Ambos prohiben las cotas"], "El croquis es rapido y a mano alzada; el plano es preciso, acotado y a escala", "El temario define el croquis como representacion rapida y el plano como dibujo tecnico exacto."),
  qGS(430302, "U3: Representacion grafica de las instalaciones electrotecnicas", "Para que sirven las escalas en dibujo tecnico?", ["Para representar objetos manteniendo una relacion proporcional con la realidad", "Para calcular el IVA del presupuesto", "Para legalizar la instalacion sin certificado", "Para sustituir la leyenda"], "Para representar objetos manteniendo una relacion proporcional con la realidad", "La escala permite dibujar elementos grandes o pequenos conservando proporciones interpretables."),
  qGS(430303, "U3: Representacion grafica de las instalaciones electrotecnicas", "Que representa un esquema unifilar?", ["La instalacion mediante una sola linea por circuito o conjunto de conductores", "Cada conductor dibujado por separado siempre", "Solo vistas arquitectonicas", "La tabla de precios unitarios"], "La instalacion mediante una sola linea por circuito o conjunto de conductores", "El unifilar simplifica la representacion electrica y facilita la interpretacion de circuitos."),
  qGS(430304, "U3: Representacion grafica de las instalaciones electrotecnicas", "Que aporta la simbologia electrica normalizada?", ["Permite que cualquier profesional interprete los elementos representados", "Evita usar leyendas en todos los casos", "Sustituye las verificaciones electricas", "Elimina la necesidad de planos"], "Permite que cualquier profesional interprete los elementos representados", "Los simbolos normalizados estandarizan la representacion de componentes y conexiones."),
  qGS(430305, "U3: Representacion grafica de las instalaciones electrotecnicas", "Que informacion incluye el cuadro de rotulacion de un plano?", ["Datos de identificacion del plano, proyecto, escala, autor o revision", "Solo el precio de la mano de obra", "La resistencia de aislamiento medida", "Unicamente el numero de conductores"], "Datos de identificacion del plano, proyecto, escala, autor o revision", "El recuadro o cajetin ayuda a identificar y gestionar correctamente la documentacion grafica.")
];

const GS_DTE_U4_DATA = [
  qGS(430401, "U4: Elaboracion de presupuestos y anexos de calculos", "Que es el estado de mediciones?", ["La relacion de partidas medidas que sirve de base para elaborar el presupuesto", "El certificado de puesta en servicio", "Un plano de vias de evacuacion", "La seleccion de proveedores"], "La relacion de partidas medidas que sirve de base para elaborar el presupuesto", "El presupuesto se apoya en mediciones, unidades de obra y precios para valorar la ejecucion."),
  qGS(430402, "U4: Elaboracion de presupuestos y anexos de calculos", "Que son los precios simples o unitarios?", ["Precios de mano de obra, materiales o maquinaria considerados de forma individual", "El coste final con impuestos siempre incluido", "La suma de todos los anexos", "Una escala grafica"], "Precios de mano de obra, materiales o maquinaria considerados de forma individual", "Los precios simples sirven para componer precios auxiliares o precios descompuestos."),
  qGS(430403, "U4: Elaboracion de presupuestos y anexos de calculos", "Que incluyen los precios descompuestos de una unidad de obra?", ["Costes directos e indirectos asociados a esa unidad", "Solo el margen comercial", "Unicamente el numero de planos", "Las tasas administrativas"], "Costes directos e indirectos asociados a esa unidad", "Una unidad de obra integra materiales, mano de obra, maquinaria y costes indirectos proporcionados."),
  qGS(430404, "U4: Elaboracion de presupuestos y anexos de calculos", "Para que sirve el anexo de calculos justificativos?", ["Para demostrar con calculos que la solucion propuesta cumple criterios tecnicos y normativos", "Para archivar facturas antiguas", "Para dibujar simbolos sin leyenda", "Para sustituir la inspeccion inicial"], "Para demostrar con calculos que la solucion propuesta cumple criterios tecnicos y normativos", "El anexo justifica previsiones de potencia, lineas, cortocircuitos, puesta a tierra y otras exigencias."),
  qGS(430405, "U4: Elaboracion de presupuestos y anexos de calculos", "Que se justifica en los calculos de alumbrado de emergencia?", ["Que la instalacion cumple los niveles exigidos para evacuacion y seguridad", "Que no hacen falta luminarias", "El color de las paredes exclusivamente", "El precio del contrato electrico"], "Que la instalacion cumple los niveles exigidos para evacuacion y seguridad", "Las justificaciones del proyecto incluyen alumbrado ordinario, emergencia y condiciones de eficiencia o ventilacion cuando aplican.")
];

const GS_DTE_U5_DATA = [
  qGS(430501, "U5: Confeccion de pliegos, manuales, estudios e informes", "Como define la Ley de Prevencion de Riesgos Laborales el riesgo laboral?", ["La posibilidad de que un trabajador sufra un dano derivado del trabajo", "La probabilidad de ahorrar costes", "El numero de planos del proyecto", "La potencia contratada por el titular"], "La posibilidad de que un trabajador sufra un dano derivado del trabajo", "La gravedad del riesgo se valora combinando probabilidad y severidad del dano."),
  qGS(430502, "U5: Confeccion de pliegos, manuales, estudios e informes", "Que tres lineas de actuacion frente a riesgos recoge el temario?", ["Deteccion, evaluacion y correccion", "Compra, almacenaje y venta", "Dibujo, plegado y archivo", "Contrato, factura y recibo"], "Deteccion, evaluacion y correccion", "El estudio basico de seguridad y salud organiza la prevencion identificando, valorando y corrigiendo riesgos."),
  qGS(430503, "U5: Confeccion de pliegos, manuales, estudios e informes", "Que documento establece condiciones tecnicas, materiales, montaje, pruebas y mantenimiento?", ["Pliego de condiciones", "Ficha de inicio de AutoCAD", "Anexo de simbologia", "Contrato de telefonia"], "Pliego de condiciones", "El pliego fija campo de aplicacion, normativa, calidades, ejecucion, ensayos y condiciones de uso."),
  qGS(430504, "U5: Confeccion de pliegos, manuales, estudios e informes", "Que funcion tiene un plan de calidad?", ["Organizar controles para asegurar que la ejecucion cumple requisitos establecidos", "Sustituir el presupuesto general", "Eliminar todos los ensayos", "Cambiar la tension nominal"], "Organizar controles para asegurar que la ejecucion cumple requisitos establecidos", "El plan de calidad se relaciona con sistemas ISO 9000 y con el control de procesos y resultados."),
  qGS(430505, "U5: Confeccion de pliegos, manuales, estudios e informes", "Por que es importante el control de documentacion?", ["Porque asegura versiones, archivo, acceso y trazabilidad de los documentos del proyecto", "Porque impide hacer copias digitales", "Porque elimina la firma digital", "Porque solo sirve para numerar paginas"], "Porque asegura versiones, archivo, acceso y trazabilidad de los documentos del proyecto", "La gestion documental incluye soporte fisico, soporte digital y tramitaciones telematicas.")
];

const GS_DTE_U6_DATA = [
  qGS(430601, "U6: Tramitacion, legalizacion, inspeccion y puesta en marcha de instalaciones", "Que se entrega a la autoridad competente para legalizar una instalacion electrica?", ["La documentacion tecnica necesaria para su registro", "Solo un croquis informal", "Un pedido de material sin firma", "La lista de contactos del titular"], "La documentacion tecnica necesaria para su registro", "La legalizacion requiere presentar proyecto o MTD, certificados y documentos segun instalacion y comunidad autonoma."),
  qGS(430602, "U6: Tramitacion, legalizacion, inspeccion y puesta en marcha de instalaciones", "Que organismo puede realizar inspecciones cuando la administracion externaliza el proceso?", ["Organismo de control autorizado", "Proveedor de material sin acreditacion", "Usuario de la instalacion", "Departamento comercial"], "Organismo de control autorizado", "Los OCA o entidades equivalentes realizan inspecciones y controles cuando estan acreditados."),
  qGS(430603, "U6: Tramitacion, legalizacion, inspeccion y puesta en marcha de instalaciones", "Que dato identifica administrativamente el certificado de instalacion electrica?", ["Numero de expediente o registro", "Color del conductor de fase", "Escala del plano", "Nombre del software de dibujo"], "Numero de expediente o registro", "El certificado recoge datos del titular, instalacion, caracteristicas tecnicas, medidas, empresa instaladora y firma."),
  qGS(430604, "U6: Tramitacion, legalizacion, inspeccion y puesta en marcha de instalaciones", "Que resultados puede tener una inspeccion segun el temario?", ["Favorable, condicionada o negativa", "Alta, media o baja tension solamente", "Croquis, plano o esquema", "Simple, auxiliar o descompuesto"], "Favorable, condicionada o negativa", "La inspeccion valora defectos y condiciona si la instalacion puede ponerse en servicio o debe subsanarse."),
  qGS(430605, "U6: Tramitacion, legalizacion, inspeccion y puesta en marcha de instalaciones", "Cuando es obligatorio el boletin o certificado de instalacion?", ["En instalaciones nuevas, ampliaciones y modificaciones considerables", "Solo si no hay suministro electrico", "Solo en instalaciones sin protecciones", "Nunca en baja tension"], "En instalaciones nuevas, ampliaciones y modificaciones considerables", "El certificado es documento clave para registrar y poner en servicio instalaciones de baja tension.")
];

const GS_DTE_U7_DATA = [
  qGS(430701, "U7: Software y aplicaciones para instalaciones electricas", "Para que se utiliza AutoCAD en documentacion tecnica electrica?", ["Para crear planos y esquemas en dos y tres dimensiones con precision", "Para emitir certificados administrativos automaticamente", "Para medir continuidad de tierras", "Para calcular tasas autonomicas"], "Para crear planos y esquemas en dos y tres dimensiones con precision", "AutoCAD es una herramienta de diseno asistido usada para planos y documentacion grafica."),
  qGS(430702, "U7: Software y aplicaciones para instalaciones electricas", "Que diferencia hay entre coordenadas cartesianas y polares?", ["Las cartesianas usan ejes X, Y, Z; las polares usan distancia y angulo", "Las cartesianas solo sirven para presupuestos", "Las polares no indican posicion", "Son sistemas exclusivos de alta tension"], "Las cartesianas usan ejes X, Y, Z; las polares usan distancia y angulo", "El sistema de coordenadas permite introducir puntos con precision en el dibujo tecnico."),
  qGS(430703, "U7: Software y aplicaciones para instalaciones electricas", "Que programa se menciona para calculo y representacion de esquemas electricos?", ["CADe_SIMU", "DIALux", "Presto", "Excel"], "CADe_SIMU", "CADe_SIMU incorpora elementos electricos y configuraciones para representar y simular esquemas."),
  qGS(430704, "U7: Software y aplicaciones para instalaciones electricas", "Que software se usa principalmente para calculo de alumbrado?", ["DIALux", "AutoCAD", "Presto", "Bloc de notas"], "DIALux", "DIALux permite trabajar con geometria de planos, luminarias y calculos de iluminacion."),
  qGS(430705, "U7: Software y aplicaciones para instalaciones electricas", "Que herramienta se asocia a gestion de costes y presupuestos?", ["Presto", "CADe_SIMU", "DIALux", "Telerruptor"], "Presto", "El temario incluye Presto dentro de los programas informaticos de gestion de costes y presupuestos.")
];

const GS_DTE_ANX_DATA = [
  qGS(430801, "ANX: Simbologia electrica", "Que identifican las letras L, N y PE en simbologia electrica?", ["Fase, neutro y conductor de proteccion", "Linea, nivel y potencia efectiva", "Lampara, nodo y pulsador electrico", "Local, norma y puesta en marcha"], "Fase, neutro y conductor de proteccion", "El anexo recoge L como conductor de fase, N como neutro y PE como conductor de proteccion."),
  qGS(430802, "ANX: Simbologia electrica", "Que simbolo se asocia a la proteccion frente a sobreintensidades en circuitos?", ["Interruptor magnetotermico", "Detector crepuscular", "Zumbador", "Reloj"], "Interruptor magnetotermico", "El anexo incluye magnetotermicos de 1P, 1P+N, 2P, 3P y 3P+N."),
  qGS(430803, "ANX: Simbologia electrica", "Que dispositivo diferencial aparece representado en el anexo?", ["Interruptor diferencial de 2P o 4P", "Fusible de vidrio exclusivamente", "Motor monofasico", "Caja de empalmes sin proteccion"], "Interruptor diferencial de 2P o 4P", "La simbologia distingue diferenciales bipolares y tetrapolares en representacion multifilar."),
  qGS(430804, "ANX: Simbologia electrica", "Que significa M 3~ junto a un simbolo de maquina?", ["Motor asincrono trifasico", "Motor de corriente continua", "Generador monofasico", "Medidor de resistencia"], "Motor asincrono trifasico", "El anexo identifica motores de corriente alterna con la letra M y la indicacion de fases."),
  qGS(430805, "ANX: Simbologia electrica", "Que elementos de mando y senalizacion incluye el anexo?", ["Pulsadores, selectores, zumbador, sirena y bocina", "Solo transformadores de medida", "Exclusivamente conductores de fase", "Unicamente hojas de calculo"], "Pulsadores, selectores, zumbador, sirena y bocina", "La lista de simbologia combina mandos, avisadores, detectores, receptores y protecciones.")
];

const GS_DOCUMENTACION_TECNICA_DATA = [
  ...GS_DTE_U1_DATA,
  ...GS_DTE_U2_DATA,
  ...GS_DTE_U3_DATA,
  ...GS_DTE_U4_DATA,
  ...GS_DTE_U5_DATA,
  ...GS_DTE_U6_DATA,
  ...GS_DTE_U7_DATA,
  ...GS_DTE_ANX_DATA
];

const EXAMEN_GS_DOCUMENTACION_TECNICA_DATA = [
  ...GS_DTE_U1_DATA,
  ...GS_DTE_U2_DATA,
  ...GS_DTE_U3_DATA,
  ...GS_DTE_U4_DATA,
  ...GS_DTE_U5_DATA,
  ...GS_DTE_U6_DATA,
  ...GS_DTE_U7_DATA,
  ...GS_DTE_ANX_DATA
];
const GS_INGLES_PROFESIONAL_DATA = [];

const GS_RCT_U1_DATA = [
  qGS(440101, "U1: Estructura de la red electrica", "Por que se eleva la tension para transportar energia electrica?", ["Para reducir la corriente y las perdidas por efecto Joule", "Para eliminar los transformadores", "Para convertir la red en corriente continua", "Para evitar las subestaciones"], "Para reducir la corriente y las perdidas por efecto Joule", "A mayor tension para una misma potencia circula menor intensidad, y por tanto se reducen las perdidas en la red."),
  qGS(440102, "U1: Estructura de la red electrica", "Que funcion tiene un centro de transformacion dentro de la red?", ["Reducir la media tension a baja tension para distribuirla a usuarios", "Generar energia nuclear", "Medir exclusivamente el consumo domestico", "Sustituir las instalaciones interiores"], "Reducir la media tension a baja tension para distribuirla a usuarios", "Los CT reciben energia en MT y la transforman a BT para alimentar redes de distribucion y consumidores."),
  qGS(440103, "U1: Estructura de la red electrica", "Que elemento conecta la red de distribucion en baja tension con la Caja General de Proteccion?", ["Acometida", "Subestacion elevadora", "Celda de medida", "Embarrado de MT"], "Acometida", "La acometida une la red de BT con la CGP asociada al suministro del consumidor."),
  qGS(440104, "U1: Estructura de la red electrica", "Que diferencia general hay entre una red radial y una red en bucle?", ["La radial se alimenta por un extremo y la de bucle permite alimentacion alternativa", "La radial siempre es subterranea y la de bucle siempre interior", "La red en bucle no puede seccionarse", "La red radial solo existe en corriente continua"], "La radial se alimenta por un extremo y la de bucle permite alimentacion alternativa", "Las topologias de distribucion condicionan la continuidad de servicio y las maniobras ante averias."),
  qGS(440105, "U1: Estructura de la red electrica", "Para que se usa el telemando en una red electrica?", ["Para supervisar y maniobrar elementos de la red a distancia", "Para aumentar la seccion del conductor", "Para eliminar toda proteccion", "Para sustituir el transformador"], "Para supervisar y maniobrar elementos de la red a distancia", "El telemando se apoya en comunicaciones por fibra optica, onda portadora o radio para operar la red.")
];

const GS_RCT_U2_DATA = [
  qGS(440201, "U2: Redes electricas de distribucion de media tension", "Que elementos forman una red aerea de media tension segun el temario?", ["Apoyos, armados, aisladores, herrajes y cables", "Solo cuadros de contadores", "Unicamente luminarias y tomas", "Diferenciales domesticos"], "Apoyos, armados, aisladores, herrajes y cables", "Las redes aereas de MT se estudian por sus elementos mecanicos, electricos y de sujecion."),
  qGS(440202, "U2: Redes electricas de distribucion de media tension", "Que son los apoyos de una linea aerea?", ["Estructuras sobre las que van sujetos los cables", "Conductores enterrados", "Dispositivos de medida de energia", "Cajas generales de proteccion"], "Estructuras sobre las que van sujetos los cables", "Los apoyos pueden ser de hormigon, metalicos u otros tipos, y soportan esfuerzos normalizados."),
  qGS(440203, "U2: Redes electricas de distribucion de media tension", "Cuando se usan conductores recubiertos o forrados en lineas aereas?", ["En zonas donde interesa proteger fauna, vegetacion, viento u otros condicionantes", "Solo dentro de viviendas", "Para sustituir la puesta a tierra", "Siempre que la red sea de baja tension interior"], "En zonas donde interesa proteger fauna, vegetacion, viento u otros condicionantes", "El temario los presenta como alternativa a conductores desnudos en enclaves con requisitos especiales."),
  qGS(440204, "U2: Redes electricas de distribucion de media tension", "Que fenomeno electrico puede producir descargas visibles alrededor de conductores de alta tension?", ["Efecto corona", "Efecto Joule exclusivamente", "Efecto memoria", "Efecto Hall domestico"], "Efecto corona", "El efecto corona es caracteristico de lineas de alta tension y se relaciona con ionizacion del aire alrededor del conductor."),
  qGS(440205, "U2: Redes electricas de distribucion de media tension", "Que finalidad tiene la puesta a tierra en redes de alta tension?", ["Derivar corrientes de defecto y limitar tensiones peligrosas", "Aumentar la resistencia de contacto", "Eliminar todos los seccionadores", "Modificar la frecuencia de red"], "Derivar corrientes de defecto y limitar tensiones peligrosas", "La puesta a tierra protege personas, equipos y estructuras frente a defectos y sobretensiones.")
];

const GS_RCT_U3_DATA = [
  qGS(440301, "U3: Centros de transformacion de energia electrica", "Cual es la finalidad principal de un centro de transformacion?", ["Reducir la media tension a baja tension", "Elevar la baja tension a transporte de 400 kV siempre", "Almacenar energia quimica", "Medir solo iluminacion"], "Reducir la media tension a baja tension", "El CT adapta la tension para que la energia pueda distribuirse a usuarios en BT."),
  qGS(440302, "U3: Centros de transformacion de energia electrica", "Como pueden clasificarse los CT por emplazamiento?", ["Interior, intemperie o subterraneo", "Radial, polar o cartesiano", "Monofasico, bifasico o documental", "Simple, auxiliar o descompuesto"], "Interior, intemperie o subterraneo", "El temario distingue CT interiores, de intemperie y subterraneos, entre otras clasificaciones."),
  qGS(440303, "U3: Centros de transformacion de energia electrica", "Que elementos principales comparten muchos centros de transformacion?", ["Obra civil, celdas de MT, transformador, medida y proteccion de BT", "Solo tomas de corriente y luminarias", "Unicamente apoyos de madera", "Solo aplicaciones informaticas"], "Obra civil, celdas de MT, transformador, medida y proteccion de BT", "La unidad enumera obra civil, celdas, transformador, equipos de medida, mando y proteccion."),
  qGS(440304, "U3: Centros de transformacion de energia electrica", "Para que sirve la ventilacion de un CT?", ["Para evacuar calor y mantener condiciones termicas admisibles", "Para aumentar la humedad interior", "Para bloquear el aire exterior", "Para eliminar protecciones contra incendios"], "Para evacuar calor y mantener condiciones termicas admisibles", "La ventilacion y renovacion de aire son necesarias por las perdidas termicas de los equipos."),
  qGS(440305, "U3: Centros de transformacion de energia electrica", "Que maniobra se realiza antes de retirar un panel en una celda?", ["Abrir el interruptor, comprobar ausencia de tension y cerrar el seccionador de tierra", "Cerrar la baja tension primero sin verificar", "Aumentar la carga del transformador", "Desconectar solo el alumbrado auxiliar"], "Abrir el interruptor, comprobar ausencia de tension y cerrar el seccionador de tierra", "Las maniobras de seguridad en CT siguen una secuencia para aislar y poner a tierra antes de intervenir.")
];

const GS_RCT_U4_DATA = [
  qGS(440401, "U4: Redes electricas de distribucion de baja tension", "Que elementos se estudian en redes aereas de baja tension?", ["Apoyos, accesorios, cimentaciones, cables y conductores", "Celdas de SF6 exclusivamente", "Solo transformadores de potencia", "Programas de calculo de alumbrado"], "Apoyos, accesorios, cimentaciones, cables y conductores", "La red aerea de BT combina elementos mecanicos de soporte y elementos electricos de conduccion."),
  qGS(440402, "U4: Redes electricas de distribucion de baja tension", "Que diferencia una red subterranea de BT de una red aerea?", ["Los conductores discurren por canalizaciones bajo tierra", "Siempre trabaja en alta tension", "No necesita documentacion", "No usa protecciones"], "Los conductores discurren por canalizaciones bajo tierra", "La unidad trata conductores y canalizaciones especificas para redes subterraneas."),
  qGS(440403, "U4: Redes electricas de distribucion de baja tension", "Que protecciones se consideran en redes de BT?", ["Proteccion contra sobrecargas y cortocircuitos", "Solo proteccion avifauna", "Unicamente ventilacion natural", "Solo pintura anticorrosiva"], "Proteccion contra sobrecargas y cortocircuitos", "Las protecciones deben coordinarse para actuar ante corrientes anormales en la red."),
  qGS(440404, "U4: Redes electricas de distribucion de baja tension", "Para que se calcula la corriente de cortocircuito?", ["Para seleccionar y coordinar adecuadamente las protecciones", "Para elegir el color del plano", "Para saber el numero de copias del proyecto", "Para sustituir la puesta a tierra"], "Para seleccionar y coordinar adecuadamente las protecciones", "El calculo de cortocircuito permite comprobar poderes de corte y coordinacion en derivaciones."),
  qGS(440405, "U4: Redes electricas de distribucion de baja tension", "Que se revisa antes de dar conformidad a una red de BT?", ["Documentacion, deficiencias tecnicas y recepcion de la instalacion", "Solo el nombre comercial del cable", "La plataforma de estudio", "El coste de una licencia de software"], "Documentacion, deficiencias tecnicas y recepcion de la instalacion", "La puesta en servicio exige documentacion y resolucion de deficiencias obligatorias.")
];

const GS_RCT_U5_DATA = [
  qGS(440501, "U5: Calculos mecanicos y electricos", "Que se analiza en los calculos mecanicos de lineas aereas?", ["Tensiones, flechas, vanos, cargas de viento y hielo", "Solo el consumo de una vivienda", "El numero de paginas del proyecto", "El precio de una licencia CAD"], "Tensiones, flechas, vanos, cargas de viento y hielo", "Los calculos mecanicos comprueban esfuerzos del conductor y apoyos segun condiciones ambientales."),
  qGS(440502, "U5: Calculos mecanicos y electricos", "Que representan la flecha y el vano de una linea electrica?", ["La flecha es la sagita del conductor y el vano la distancia entre apoyos", "La flecha es el fusible y el vano el transformador", "Ambos son valores de aislamiento", "Son codigos de documentacion"], "La flecha es la sagita del conductor y el vano la distancia entre apoyos", "Estos conceptos son basicos para el calculo mecanico de conductores aereos."),
  qGS(440503, "U5: Calculos mecanicos y electricos", "Que hipotesis ambientales aparecen en calculos de lineas?", ["Viento, hielo y temperatura segun zonas de altitud", "Solo lluvia ligera", "Unicamente iluminacion interior", "Solo coste indirecto"], "Viento, hielo y temperatura segun zonas de altitud", "El temario usa zonas A, B y C con combinaciones de temperatura, viento y hielo."),
  qGS(440504, "U5: Calculos mecanicos y electricos", "Que calculo electrico es necesario en redes de distribucion?", ["Caida de tension e intensidad admisible de los conductores", "Solo escala de plano", "Longitud del cajetin", "Numero de operarios"], "Caida de tension e intensidad admisible de los conductores", "Los calculos electricos verifican que la linea puede transportar potencia dentro de limites tecnicos."),
  qGS(440505, "U5: Calculos mecanicos y electricos", "Que se comprueba en el sistema de puesta a tierra de un CT?", ["Resistencia, tensiones de defecto, paso y contacto", "Solo el color de las celdas", "La version del software", "El plegado del plano"], "Resistencia, tensiones de defecto, paso y contacto", "Los calculos de tierra aseguran que los defectos no generan tensiones peligrosas.")
];

const GS_RCT_U6_DATA = [
  qGS(440601, "U6: Configuracion de centros de transformacion y redes electricas de baja tension", "Que dato debe suministrar la compania para disenar un CT frente a cortocircuitos?", ["Corrientes de cortocircuito maximas posibles", "Color del edificio", "Numero de examenes", "Precio del contador"], "Corrientes de cortocircuito maximas posibles", "El diseno del CT debe considerar esfuerzos termicos y electrodinamicos derivados del cortocircuito."),
  qGS(440602, "U6: Configuracion de centros de transformacion y redes electricas de baja tension", "Que criterio se considera al ubicar un CT de intemperie?", ["Acceso desde via publica y proximidad al punto de conexion", "Que quede lejos de cualquier red", "Que no permita mantenimiento", "Que impida maniobras de explotacion"], "Acceso desde via publica y proximidad al punto de conexion", "La ubicacion debe facilitar conexion, mantenimiento, maniobra, sustitucion de equipos y seguridad."),
  qGS(440603, "U6: Configuracion de centros de transformacion y redes electricas de baja tension", "Como se disenan las redes aereas trenzadas de BT tensadas sobre apoyos?", ["En forma radial ramificada y con tension 400/230 V", "Siempre en anillo cerrado de alta tension", "Sin seccionamiento posible", "Con conductores sin aislamiento dentro de viviendas"], "En forma radial ramificada y con tension 400/230 V", "La unidad indica redes radiales ramificadas, secciones uniformes y criterios de calidad de suministro."),
  qGS(440604, "U6: Configuracion de centros de transformacion y redes electricas de baja tension", "Que altura se indica para redes posadas de BT sobre fachada?", ["Entre 2,5 m y 6 m", "Siempre menos de 1 m", "Exactamente 20 kV", "Sin limite de acceso"], "Entre 2,5 m y 6 m", "El trazado sobre fachada debe minimizar impacto visual y permitir mantenimiento con alturas adecuadas."),
  qGS(440605, "U6: Configuracion de centros de transformacion y redes electricas de baja tension", "Que documentos forman parte de la estructura de un proyecto electrico?", ["Memoria, calculos, planos, pliego, presupuesto y estudios anexos", "Solo una fotografia del CT", "Unicamente una factura", "Solo la placa del transformador"], "Memoria, calculos, planos, pliego, presupuesto y estudios anexos", "Los proyectos de CT y redes de BT organizan datos tecnicos, justificaciones, planos y condiciones.")
];

const GS_RCT_U7_DATA = [
  qGS(440701, "U7: Proyectos resumidos de centros de transformacion y redes de baja tension", "Que informacion analiza un proyecto resumido de CT o red de BT?", ["Memoria, calculos y planos de la instalacion", "Solo el horario de obra", "Unicamente simbolos electricos", "La lista de alumnos"], "Memoria, calculos y planos de la instalacion", "La unidad presenta ejemplos resumidos centrados en datos de instalacion, calculos y documentacion grafica."),
  qGS(440702, "U7: Proyectos resumidos de centros de transformacion y redes de baja tension", "Que caracteristicas incluye el ejemplo de CT de 400 kVA?", ["Linea MT subterranea, celdas, transformador y proteccion de BT", "Solo alumbrado interior", "Una red domestica sin transformador", "Un generador portatil"], "Linea MT subterranea, celdas, transformador y proteccion de BT", "El proyecto resume celda de linea, proteccion, transformador y conductores de MT y BT."),
  qGS(440703, "U7: Proyectos resumidos de centros de transformacion y redes de baja tension", "Por que se calculan ventilacion y rejillas en un CT?", ["Para asegurar entrada de aire frio y salida de aire caliente", "Para impedir cualquier renovacion de aire", "Para sustituir fusibles", "Para elevar la tension primaria"], "Para asegurar entrada de aire frio y salida de aire caliente", "El ejemplo indica rejillas inferior y superior para refrigerar el transformador."),
  qGS(440704, "U7: Proyectos resumidos de centros de transformacion y redes de baja tension", "Que se determina en el calculo de puesta a tierra del CT?", ["Tierras de proteccion y neutro y tensiones reglamentarias", "Solo el numero de luminarias", "El formato del papel", "La ubicacion de la plataforma"], "Tierras de proteccion y neutro y tensiones reglamentarias", "La puesta a tierra debe limitar tensiones de defecto y contactos indirectos."),
  qGS(440705, "U7: Proyectos resumidos de centros de transformacion y redes de baja tension", "En un proyecto de red aerea de BT, que calculos se incluyen?", ["Calculos mecanicos y electricos", "Solo ensayos de aceite", "Solo tramitacion administrativa", "Unicamente presupuestos de software"], "Calculos mecanicos y electricos", "La unidad cierra con un proyecto de red aerea de BT tensada sobre apoyos con ambos tipos de calculo.")
];

const GS_RCT_U8_DATA = [
  qGS(440801, "U8: Pruebas y ensayos de los centros de transformacion", "Que diferencia hay entre ensayos de tipo y ensayos de rutina?", ["Los de tipo validan el diseno y los de rutina se realizan sobre cada CT o unidad fabricada", "Los de rutina solo se hacen en planos", "Los de tipo sustituyen toda certificacion", "No existe diferencia"], "Los de tipo validan el diseno y los de rutina se realizan sobre cada CT o unidad fabricada", "La normativa EN 61330 distingue pruebas generales de diseno y pruebas repetidas de fabricacion o montaje."),
  qGS(440802, "U8: Pruebas y ensayos de los centros de transformacion", "Que indican los grados IP e IK de una envolvente?", ["IP protege frente a solidos/liquidos e IK frente a impactos mecanicos", "IP es potencia activa e IK corriente de neutro", "Ambos miden solo temperatura", "IK sustituye la puesta a tierra"], "IP protege frente a solidos/liquidos e IK frente a impactos mecanicos", "Los grados de proteccion valoran penetracion de cuerpos, agua e impactos sobre la envolvente."),
  qGS(440803, "U8: Pruebas y ensayos de los centros de transformacion", "Para que se realiza el ensayo en vacio de un transformador?", ["Para obtener perdidas en el hierro y corriente de vacio", "Para medir solo resistencia de tierra", "Para comprobar fusibles de BT", "Para calcular el ancho del local"], "Para obtener perdidas en el hierro y corriente de vacio", "El ensayo en vacio caracteriza el comportamiento magnetico del transformador sin carga."),
  qGS(440804, "U8: Pruebas y ensayos de los centros de transformacion", "Que mide el telurómetro?", ["Resistencia de tierra", "Rigidez dielectrica del aceite", "Nivel de iluminacion", "Velocidad del viento"], "Resistencia de tierra", "El telurómetro es el equipo habitual para medir la resistencia del electrodo de puesta a tierra."),
  qGS(440805, "U8: Pruebas y ensayos de los centros de transformacion", "Que se verifica con las medidas de tension de paso y contacto?", ["La seguridad de las personas ante defectos a tierra", "El coste total del proyecto", "La escala del plano", "La polaridad de una pila"], "La seguridad de las personas ante defectos a tierra", "Estas medidas comprueban que las tensiones accesibles se mantienen dentro de limites admisibles.")
];

const GS_DESARROLLO_REDES_CT_DATA = [
  ...GS_RCT_U1_DATA,
  ...GS_RCT_U2_DATA,
  ...GS_RCT_U3_DATA,
  ...GS_RCT_U4_DATA,
  ...GS_RCT_U5_DATA,
  ...GS_RCT_U6_DATA,
  ...GS_RCT_U7_DATA,
  ...GS_RCT_U8_DATA
];

const EXAMEN_GS_DESARROLLO_REDES_CT_DATA = [
  ...GS_RCT_U1_DATA,
  ...GS_RCT_U2_DATA,
  ...GS_RCT_U3_DATA,
  ...GS_RCT_U4_DATA,
  ...GS_RCT_U5_DATA,
  ...GS_RCT_U6_DATA,
  ...GS_RCT_U7_DATA,
  ...GS_RCT_U8_DATA
];

const GS_CIE_U1_DATA = [
  qGS(450101, "U1: Caracteristicas de las instalaciones de BT", "Desde que elemento se estudian principalmente las instalaciones de baja tension en edificios en esta unidad?", ["Desde la Caja General de Proteccion hasta receptores, puntos de luz y enchufes", "Desde la central generadora hasta la subestacion", "Solo desde el contador de la compania", "Unicamente desde el transformador de alta tension"], "Desde la Caja General de Proteccion hasta receptores, puntos de luz y enchufes", "La unidad se centra en las partes de BT de los edificios, desde CGP hasta receptores finales."),
  qGS(450102, "U1: Caracteristicas de las instalaciones de BT", "Que instalaciones electrotecnicas pueden encontrarse en un edificio?", ["Electrificacion, singulares y automatizadas", "Solo transporte y generacion", "Unicamente subestaciones", "Exclusivamente redes de media tension"], "Electrificacion, singulares y automatizadas", "El temario distingue instalaciones de electrificacion, instalaciones singulares e instalaciones automatizadas."),
  qGS(450103, "U1: Caracteristicas de las instalaciones de BT", "Que parametros caracterizan una instalacion segun la regla general?", ["Utilizacion, estructura general, alimentaciones, influencias externas, compatibilidad y mantenimiento", "Solo el color de los conductores", "Unicamente la marca del cuadro", "Solo el numero de plantas"], "Utilizacion, estructura general, alimentaciones, influencias externas, compatibilidad y mantenimiento", "Antes de disenar hay que valorar uso, alimentacion, condiciones externas, materiales, mantenimiento y seguridad."),
  qGS(450104, "U1: Caracteristicas de las instalaciones de BT", "Para que se dividen las instalaciones electricas en circuitos?", ["Para limitar averias, facilitar mantenimiento y mejorar seguridad de explotacion", "Para aumentar siempre la caida de tension", "Para eliminar protecciones", "Para no usar conductores de proteccion"], "Para limitar averias, facilitar mantenimiento y mejorar seguridad de explotacion", "La division por circuitos reduce el alcance de fallos y permite seccionamiento y proteccion adecuados."),
  qGS(450105, "U1: Caracteristicas de las instalaciones de BT", "Que finalidad tienen los servicios de seguridad?", ["Mantener funciones necesarias para seguridad de personas ante emergencia", "Aumentar el consumo de la instalacion", "Sustituir la iluminacion ordinaria siempre", "Eliminar rutas de evacuacion"], "Mantener funciones necesarias para seguridad de personas ante emergencia", "Los servicios de seguridad alimentan funciones criticas, como alumbrado de emergencia o sistemas de proteccion."),
  qGS(450106, "U1: Caracteristicas de las instalaciones de BT", "Que debe garantizar el alumbrado de emergencia en rutas de evacuacion?", ["Visibilidad suficiente para orientar la salida de forma segura", "Solo decoracion de pasillos", "Mayor potencia contratada", "La anulacion del cuadro general"], "Visibilidad suficiente para orientar la salida de forma segura", "El alumbrado de emergencia permite reconocer recorridos de evacuacion y puntos de seguridad.")
];

const GS_CIE_U2_DATA = [
  qGS(450201, "U2: Elementos de las instalaciones de BT I", "Que norma se cita para metodos de instalacion e intensidades admisibles?", ["UNE 20460-5-523:2004", "ISO 9001 exclusivamente", "EN 61330 de CT prefabricados", "Reglamento de alta velocidad"], "UNE 20460-5-523:2004", "Los metodos de instalacion y tablas asociadas se estudian con referencia al REBT y la UNE 20460-5-523."),
  qGS(450202, "U2: Elementos de las instalaciones de BT I", "Que criterio debe primar al elegir materiales electricos?", ["Que cumplan seguridad, funcionamiento e influencias externas previstas", "Solo que sean los mas baratos", "Que no tengan marcado tecnico", "Que no se adapten al local"], "Que cumplan seguridad, funcionamiento e influencias externas previstas", "La seleccion de materiales debe atender a seguridad, uso, ambiente y requisitos reglamentarios."),
  qGS(450203, "U2: Elementos de las instalaciones de BT I", "Que funcion tiene la Caja General de Proteccion?", ["Alojar elementos de proteccion de la linea general de alimentacion en el inicio de la instalacion de enlace", "Transformar media tension en baja tension", "Regular la iluminancia", "Medir exclusivamente temperatura"], "Alojar elementos de proteccion de la linea general de alimentacion en el inicio de la instalacion de enlace", "La CGP es un elemento clave de la instalacion de enlace y protege el arranque hacia la LGA."),
  qGS(450204, "U2: Elementos de las instalaciones de BT I", "Cuando puede usarse una Caja General de Proteccion y Medida?", ["Cuando se integran proteccion y medida en un mismo conjunto segun esquema de suministro", "Solo en redes de alta tension", "Unicamente en alumbrado de emergencia", "Nunca en baja tension"], "Cuando se integran proteccion y medida en un mismo conjunto segun esquema de suministro", "Las CGPM combinan funciones de proteccion y medida en determinados suministros."),
  qGS(450205, "U2: Elementos de las instalaciones de BT I", "Que indican los grados IP e IK de una envolvente?", ["IP proteccion contra solidos/liquidos e IK contra impactos mecanicos", "IP intensidad prevista e IK aislamiento conocido", "Ambos solo miden potencia", "IK indica factor de potencia"], "IP proteccion contra solidos/liquidos e IK contra impactos mecanicos", "Las envolventes se seleccionan segun proteccion frente a penetracion y choques mecanicos."),
  qGS(450206, "U2: Elementos de las instalaciones de BT I", "Que tipo de cable se asocia a una derivacion individual segun el resumen del temario?", ["H07Z1-K (AS) o RZ1-K (AS)", "Cable desnudo de cobre duro siempre", "Cable de tierra de alta tension", "Conductor de alumbrado viario sin aislamiento"], "H07Z1-K (AS) o RZ1-K (AS)", "El resumen de tipos por ITC-BT relaciona la derivacion individual con conductores libres de halogenos o RZ1-K (AS).")
];

const GS_CIE_U3_DATA = [
  qGS(450301, "U3: Elementos de las instalaciones de BT II", "Como actua un fusible ante una sobreintensidad?", ["El hilo metalico se funde por calor y abre el circuito", "Aumenta la tension indefinidamente", "Cierra el circuito de tierra", "Reduce la frecuencia a cero"], "El hilo metalico se funde por calor y abre el circuito", "El fusible interrumpe la corriente cuando se supera su capacidad, con poder de corte definido."),
  qGS(450302, "U3: Elementos de las instalaciones de BT II", "Que representa la curva de fusion de un fusible?", ["La relacion entre intensidad y tiempo de actuacion", "La escala del plano", "La altura de montaje del cuadro", "El flujo luminoso"], "La relacion entre intensidad y tiempo de actuacion", "Las curvas permiten seleccionar fusibles segun comportamiento frente a sobrecargas y cortocircuitos."),
  qGS(450303, "U3: Elementos de las instalaciones de BT II", "Para que sirve un interruptor automatico magnetotermico?", ["Proteger frente a sobrecargas y cortocircuitos", "Medir energia consumida", "Regular la temperatura ambiente", "Hacer funciones de contador"], "Proteger frente a sobrecargas y cortocircuitos", "Los automaticos combinan disparo termico y magnetico para proteger circuitos."),
  qGS(450304, "U3: Elementos de las instalaciones de BT II", "Que detecta un interruptor diferencial?", ["Corrientes de fuga o desequilibrio entre conductores activos", "Solo sobrecargas mecanicas", "La iluminancia media", "El numero de plantas"], "Corrientes de fuga o desequilibrio entre conductores activos", "El diferencial compara corrientes y desconecta si aparece fuga peligrosa a tierra."),
  qGS(450305, "U3: Elementos de las instalaciones de BT II", "Que finalidad tiene la instalacion de puesta a tierra?", ["Derivar corrientes de defecto y limitar tensiones de contacto", "Aumentar la resistencia de aislamiento", "Eliminar el conductor de proteccion", "Sustituir todos los diferenciales"], "Derivar corrientes de defecto y limitar tensiones de contacto", "La tierra es fundamental para proteccion de usuarios y equipos ante contactos indirectos."),
  qGS(450306, "U3: Elementos de las instalaciones de BT II", "Como se clasifican los aparatos por proteccion contra contactos indirectos?", ["Por clases de aislamiento y conexion de proteccion", "Por numero de paginas del manual", "Por color del envolvente", "Por precio unitario"], "Por clases de aislamiento y conexion de proteccion", "Las clases de aparatos indican como se protege al usuario frente a defectos de aislamiento.")
];

const GS_CIE_U4_DATA = [
  qGS(450401, "U4: Calculo de instalaciones electricas I", "Que se determina en el proceso de dimensionamiento de una instalacion electrica?", ["Secciones de conductores y dispositivos de proteccion adecuados", "Solo el nombre de los circuitos", "Unicamente el logo del plano", "La plataforma de estudio"], "Secciones de conductores y dispositivos de proteccion adecuados", "El dimensionamiento parte de intensidades, cortocircuitos, protecciones, conductores y canalizaciones."),
  qGS(450402, "U4: Calculo de instalaciones electricas I", "Por que el REBT limita las caidas de tension?", ["Para evitar perdidas excesivas y asegurar correcto funcionamiento de receptores", "Para aumentar el consumo de los motores", "Para eliminar toda compensacion", "Para no calcular secciones"], "Para evitar perdidas excesivas y asegurar correcto funcionamiento de receptores", "Las caidas maximas admisibles se aplican en instalaciones de enlace e interiores."),
  qGS(450403, "U4: Calculo de instalaciones electricas I", "Como se considera la carga minima de lamparas de descarga?", ["1,8 veces la potencia en vatios de las lamparas", "La mitad de su potencia", "Siempre cero", "Solo 7 W por metro"], "1,8 veces la potencia en vatios de las lamparas", "El temario indica mayorar las lamparas de descarga y compensar factor de potencia minimo 0,9."),
  qGS(450404, "U4: Calculo de instalaciones electricas I", "Como se mayoran los motores en una instalacion?", ["El motor de mayor potencia se multiplica por 1,25 y se suman los demas", "Todos se dividen entre 1,25", "Solo se cuenta el motor menor", "No se consideran en el calculo"], "El motor de mayor potencia se multiplica por 1,25 y se suman los demas", "Para varios motores se incrementa el de mayor potencia y se agrega la potencia nominal del resto."),
  qGS(450405, "U4: Calculo de instalaciones electricas I", "Que problema puede obligar a dimensionar el conductor neutro con mas cuidado?", ["La presencia de armonicos", "La ausencia de planos", "La baja iluminancia exterior", "El color de la envolvente"], "La presencia de armonicos", "Las instalaciones con armonicos pueden cargar el neutro y requieren comprobaciones especificas."),
  qGS(450406, "U4: Calculo de instalaciones electricas I", "Para que se calcula el diametro nominal de un tubo o canalizacion?", ["Para alojar los conductores respetando ocupacion y condiciones de instalacion", "Para medir la potencia activa", "Para sustituir diferenciales", "Para estimar el numero de paginas"], "Para alojar los conductores respetando ocupacion y condiciones de instalacion", "El calculo de tubos, bandejas y canales forma parte del dimensionamiento fisico de la instalacion.")
];

const GS_CIE_U5_DATA = [
  qGS(450501, "U5: Calculo de instalaciones electricas II", "Que unidad mide el flujo luminoso?", ["Lumen", "Lux", "Candela", "Ohmio"], "Lumen", "El flujo luminoso expresa la cantidad de luz emitida y se mide en lumenes."),
  qGS(450502, "U5: Calculo de instalaciones electricas II", "Que magnitud se mide en lux?", ["Iluminancia", "Intensidad luminosa", "Resistencia", "Factor de potencia"], "Iluminancia", "La iluminancia relaciona flujo recibido con superficie y su unidad es lux, equivalente a lm/m2."),
  qGS(450503, "U5: Calculo de instalaciones electricas II", "Que expresa la eficacia luminosa?", ["Flujo emitido por unidad de potencia consumida", "Resistencia de tierra", "Corriente de cortocircuito", "Tension de contacto"], "Flujo emitido por unidad de potencia consumida", "La eficacia se mide en lumen por vatio y permite comparar rendimiento de fuentes luminosas."),
  qGS(450504, "U5: Calculo de instalaciones electricas II", "Que factores intervienen en el flujo luminoso total de una instalacion?", ["Iluminacion media, superficie, factor de utilizacion y mantenimiento", "Solo potencia contratada", "Numero de contadores", "Poder de corte del diferencial"], "Iluminacion media, superficie, factor de utilizacion y mantenimiento", "El calculo luminotecnico usa nivel requerido, area y factores de utilizacion y conservacion."),
  qGS(450505, "U5: Calculo de instalaciones electricas II", "Que elemento convierte la corriente continua de paneles fotovoltaicos en alterna?", ["Inversor", "Fusible NH", "Telurómetro", "Centralizacion de contadores"], "Inversor", "En instalaciones fotovoltaicas el inversor adapta la energia CC del campo solar a CA para consumo o conexion a red."),
  qGS(450506, "U5: Calculo de instalaciones electricas II", "Que se mide en una instalacion fotovoltaica conectada a red?", ["Energia producida e intercambiada con la red", "Solo presion atmosferica", "Unicamente ruido del transformador", "El grado IK del panel"], "Energia producida e intercambiada con la red", "La unidad incluye medicion de energia generada y de los intercambios con la red electrica.")
];

const GS_CIE_U6_DATA = [
  qGS(450601, "U6: Configuracion de instalaciones electricas de baja tension", "Que documentos comunes aparecen en instalaciones electricas de BT?", ["Proyecto, MTD y certificado de instalacion", "Solo manual de usuario", "Unicamente factura y albaran", "Solo plano de fachada"], "Proyecto, MTD y certificado de instalacion", "La documentacion tecnica de BT incluye proyecto o memoria tecnica, y certificado tras la ejecucion."),
  qGS(450602, "U6: Configuracion de instalaciones electricas de baja tension", "Donde se encuentra el contenido minimo de la documentacion de BT?", ["En la ITC-BT-04 del REBT", "En la norma ISO 3098", "En el catalogo de luminarias", "En una hoja comercial"], "En la ITC-BT-04 del REBT", "La unidad remite a la ITC-BT-04 para documentos necesarios y contenido minimo."),
  qGS(450603, "U6: Configuracion de instalaciones electricas de baja tension", "Que debe incluir como minimo una MTD?", ["Datos del propietario, memoria, firmante, ubicacion, esquema unifilar, calculos y receptores", "Solo fotografias del local", "Unicamente presupuesto sin calculos", "Solo certificado de fin de obra"], "Datos del propietario, memoria, firmante, ubicacion, esquema unifilar, calculos y receptores", "La memoria tecnica de diseno resume los datos tecnicos esenciales para legalizar la instalacion."),
  qGS(450604, "U6: Configuracion de instalaciones electricas de baja tension", "Que apartados recoge un proyecto de BT segun UNE 157701?", ["Memoria, anexos, calculos, planos, pliego, mediciones, presupuesto y estudios", "Solo indice y portada", "Unicamente manual de mantenimiento", "Solo certificado de inspeccion"], "Memoria, anexos, calculos, planos, pliego, mediciones, presupuesto y estudios", "La estructura del proyecto organiza informacion tecnica, economica, grafica y normativa."),
  qGS(450605, "U6: Configuracion de instalaciones electricas de baja tension", "Para que sirven el manual de mantenimiento y el manual de instalacion?", ["Para documentar uso, conservacion, revisiones y montaje correcto de la instalacion", "Para sustituir el REBT", "Para eliminar verificaciones", "Para ocultar los esquemas"], "Para documentar uso, conservacion, revisiones y montaje correcto de la instalacion", "Estos manuales acompanan la entrega de documentacion y orientan explotacion y mantenimiento.")
];

const GS_CIE_U7_DATA = [
  qGS(450701, "U7: Proyectos resumidos de instalaciones en edificios e instalaciones fotovoltaicas", "Que debe contemplar un proyecto de vivienda unifamiliar?", ["Caracteristicas de instalacion, calculos y planos", "Solo la decoracion interior", "Unicamente contadores", "Solo contrato de mantenimiento"], "Caracteristicas de instalacion, calculos y planos", "El ejemplo resume circuitos, cuadros, protecciones, conductores, calculos y documentacion grafica."),
  qGS(450702, "U7: Proyectos resumidos de instalaciones en edificios e instalaciones fotovoltaicas", "Que circuitos pueden aparecer en una vivienda unifamiliar del ejemplo?", ["Alumbrado, emergencias, tomas, electrodomesticos, domotica, garaje, piscina o ascensor", "Solo red de media tension", "Unicamente alumbrado publico", "Solo celdas de MT"], "Alumbrado, emergencias, tomas, electrodomesticos, domotica, garaje, piscina o ascensor", "La unidad enumera circuitos interiores y servicios especiales para el proyecto de vivienda."),
  qGS(450703, "U7: Proyectos resumidos de instalaciones en edificios e instalaciones fotovoltaicas", "Que proteccion diferencial minima se cita para circuitos de piscina?", ["Interruptor diferencial de 10 a 30 mA", "Fusible de 200 A sin diferencial", "Solo interruptor horario", "Ninguna proteccion"], "Interruptor diferencial de 10 a 30 mA", "En zonas especiales como piscina se refuerza la proteccion individual contra contactos indirectos."),
  qGS(450704, "U7: Proyectos resumidos de instalaciones en edificios e instalaciones fotovoltaicas", "Que conductor se indica para instalaciones interiores en el ejemplo?", ["H07V-K", "RHZ1 de media tension", "Cable desnudo de acero", "Fibra optica exclusivamente"], "H07V-K", "El ejemplo asocia H07V-K a instalaciones interiores con aislamiento PVC de 70 grados."),
  qGS(450705, "U7: Proyectos resumidos de instalaciones en edificios e instalaciones fotovoltaicas", "Que elementos componen una instalacion fotovoltaica conectada a red?", ["Paneles, protecciones de continua, inversor, protecciones de alterna y medida", "Solo un diferencial domestico", "Unicamente una CGP sin paneles", "Solo alumbrado de emergencia"], "Paneles, protecciones de continua, inversor, protecciones de alterna y medida", "El proyecto fotovoltaico resume campo solar, conversion, protecciones y medicion de energia.")
];

const GS_CONFIGURACION_INSTALACIONES_ELECTRICAS_DATA = [
  ...GS_CIE_U1_DATA,
  ...GS_CIE_U2_DATA,
  ...GS_CIE_U3_DATA,
  ...GS_CIE_U4_DATA,
  ...GS_CIE_U5_DATA,
  ...GS_CIE_U6_DATA,
  ...GS_CIE_U7_DATA
];

const EXAMEN_GS_CONFIGURACION_INSTALACIONES_ELECTRICAS_DATA = [
  ...GS_CIE_U1_DATA,
  ...GS_CIE_U2_DATA,
  ...GS_CIE_U3_DATA,
  ...GS_CIE_U4_DATA,
  ...GS_CIE_U5_DATA,
  ...GS_CIE_U6_DATA,
  ...GS_CIE_U7_DATA
];

const GS_CDA_U1_DATA = [
  qGS(460101, "U1: Hogares digitales, edificios inteligentes y urbotica", "Que es la domotica segun el enfoque del temario?", ["Integracion de tecnologias en servicios residenciales para gestion eficiente, remota, confortable y segura", "Solo instalacion de enchufes convencionales", "Un sistema exclusivo de fabricas pesadas", "La sustitucion de toda instalacion electrica"], "Integracion de tecnologias en servicios residenciales para gestion eficiente, remota, confortable y segura", "La domotica integra servicios e instalaciones residenciales para mejorar energia, confort, seguridad y comunicacion."),
  qGS(460102, "U1: Hogares digitales, edificios inteligentes y urbotica", "En que se diferencia la inmotica de la domotica?", ["La inmotica se orienta a edificios terciarios o industriales y gestion tecnica del edificio", "La inmotica solo usa corriente continua", "La domotica solo existe en centros comerciales", "No existe diferencia tecnica ni de ambito"], "La inmotica se orienta a edificios terciarios o industriales y gestion tecnica del edificio", "La inmotica se aplica a oficinas, hoteles, edificios corporativos o industriales con objetivos de eficiencia, confort y seguridad."),
  qGS(460103, "U1: Hogares digitales, edificios inteligentes y urbotica", "Que permite una pasarela residencial?", ["Conectar subredes del hogar y permitir comunicacion con el exterior", "Transformar media tension en baja tension", "Sustituir todos los sensores", "Eliminar la red de datos"], "Conectar subredes del hogar y permitir comunicacion con el exterior", "La pasarela integra red de control, datos, multimedia y seguridad dentro del hogar digital."),
  qGS(460104, "U1: Hogares digitales, edificios inteligentes y urbotica", "Que red transporta ordenes y estados propios de la automatizacion?", ["Red de control o red domotica", "Red de transporte electrico", "Red de alta tension", "Red de alumbrado viario"], "Red de control o red domotica", "La red de control conecta dispositivos domoticos para mando, automatizacion y supervisión."),
  qGS(460105, "U1: Hogares digitales, edificios inteligentes y urbotica", "Que areas puede gestionar una instalacion domotica?", ["Comunicaciones, eficiencia energetica, seguridad, control del entorno y ocio", "Solo calefaccion electrica", "Unicamente contabilidad domestica", "Solo transporte de energia"], "Comunicaciones, eficiencia energetica, seguridad, control del entorno y ocio", "La unidad organiza los ambitos de automatizacion en esos sectores principales."),
  qGS(460106, "U1: Hogares digitales, edificios inteligentes y urbotica", "Para que sirven los niveles de automatizacion?", ["Para valorar el grado de servicios y prestaciones automatizadas de la instalacion", "Para medir la seccion de los cables", "Para elegir solo el color de la pantalla", "Para calcular la caida de tension"], "Para valorar el grado de servicios y prestaciones automatizadas de la instalacion", "El nivel de automatizacion permite clasificar la complejidad y alcance funcional del hogar o edificio.")
];

const GS_CDA_U2_DATA = [
  qGS(460201, "U2: Instalaciones y dispositivos de automatizacion", "Que elemento controla el sistema de automatizacion?", ["Controlador", "Actuador", "Carga pasiva", "Contador mecanico"], "Controlador", "Los controladores reciben informacion y generan ordenes para el resto de dispositivos."),
  qGS(460202, "U2: Instalaciones y dispositivos de automatizacion", "Que hacen sensores y detectores en una instalacion automatizada?", ["Toman informacion del medio y la envian al controlador", "Ejecutan siempre cargas de potencia", "Sustituyen el medio de transmision", "Solo muestran informacion al usuario"], "Toman informacion del medio y la envian al controlador", "Los sensores captan fenomenos fisicos para que el sistema decida actuaciones."),
  qGS(460203, "U2: Instalaciones y dispositivos de automatizacion", "Que funcion tiene un actuador?", ["Transformar una orden en una accion sobre la instalacion", "Captar temperatura sin actuar", "Registrar planos de obra", "Medir energia facturada"], "Transformar una orden en una accion sobre la instalacion", "Persianas, electroválvulas, luminarias o cargas de potencia actuan al recibir ordenes."),
  qGS(460204, "U2: Instalaciones y dispositivos de automatizacion", "Que caracteriza a una arquitectura centralizada?", ["Un elemento de control rige todo el sistema", "Cada sensor actua sin comunicacion", "No existe controlador", "Solo se usa en redes multimedia"], "Un elemento de control rige todo el sistema", "La centralizada es sencilla y economica, pero si falla el controlador central puede caer todo el sistema."),
  qGS(460205, "U2: Instalaciones y dispositivos de automatizacion", "Que ventaja aporta una arquitectura distribuida?", ["Sensores y actuadores inteligentes pueden comunicarse sin depender de una unidad central", "Reduce todos los dispositivos a una sola entrada", "Impide ampliar la instalacion", "Solo funciona con pulsadores mecanicos"], "Sensores y actuadores inteligentes pueden comunicarse sin depender de una unidad central", "La distribuida mejora robustez porque los elementos tienen inteligencia y se comunican por bus."),
  qGS(460206, "U2: Instalaciones y dispositivos de automatizacion", "Que medios de transmision se usan habitualmente en sistemas domoticos?", ["Cableados e inalambricos", "Solo tuberias hidraulicas", "Unicamente corriente continua aislada", "Solo papel tecnico"], "Cableados e inalambricos", "La red domotica puede apoyarse en bus cableado, red electrica, radiofrecuencia u otros medios.")
];

const GS_CDA_U3_DATA = [
  qGS(460301, "U3: Soluciones de automatizacion preprogramadas", "Cuando suele ser rentable usar centrales domoticas preprogramadas?", ["En viviendas o pequenos locales con requerimientos no muy complejos", "Solo en subestaciones de alta tension", "Cuando se exige programacion industrial avanzada siempre", "Nunca en instalaciones residenciales"], "En viviendas o pequenos locales con requerimientos no muy complejos", "Estas soluciones son sencillas, economicas y vienen con funciones predefinidas por fabricante."),
  qGS(460302, "U3: Soluciones de automatizacion preprogramadas", "Que ventaja tienen las centrales preprogramadas para el instalador?", ["Instalacion y configuracion sencillas con parametros basicos", "Requieren disenar todo el firmware desde cero", "No admiten ningun detector", "Eliminan el cumplimiento del REBT"], "Instalacion y configuracion sencillas con parametros basicos", "El sistema ya incorpora capacidades definidas y el instalador conecta dispositivos y ajusta configuracion."),
  qGS(460303, "U3: Soluciones de automatizacion preprogramadas", "Que ITC del REBT se cita para circuitos de proteccion en estas instalaciones?", ["ITC-BT-25", "ITC-LAT-06", "UNE 157701", "EN 61330"], "ITC-BT-25", "La unidad menciona requisitos de la ITC-BT-25 para alimentar centrales y elementos mediante circuito propio."),
  qGS(460304, "U3: Soluciones de automatizacion preprogramadas", "Que central preprogramada se estudia como referencia principal?", ["Simon VOX.2", "KNX ETS", "Presto", "DIALux"], "Simon VOX.2", "La unidad profundiza en la estructura, telecontrol y modulo de seguridad de Simon VOX.2."),
  qGS(460305, "U3: Soluciones de automatizacion preprogramadas", "Que ejemplos de otras centrales aparecen en el temario?", ["Zelio Hogar, Maior-Domo, TYDOM 4000 y Planner", "AutoCAD, Excel, Word y Presto", "Fusible NH, CGP, LGA y DI", "Transformador, celda, telurómetro y seccionador"], "Zelio Hogar, Maior-Domo, TYDOM 4000 y Planner", "Se comparan soluciones comerciales usadas durante anos en aplicaciones domoticas."),
  qGS(460306, "U3: Soluciones de automatizacion preprogramadas", "Que tendencia del sector se menciona entre las nuevas soluciones?", ["Integracion de pantallas, inteligencia artificial y estandarizacion de comunicaciones", "Desaparicion de toda comunicacion", "Uso exclusivo de interruptores manuales", "Prohibicion de redes Ethernet"], "Integracion de pantallas, inteligencia artificial y estandarizacion de comunicaciones", "El sector evoluciona hacia interfaces avanzadas, IA, conectividad y mayor compatibilidad.")
];

const GS_CDA_U4_DATA = [
  qGS(460401, "U4: Sistema de automatizacion con reles programables", "Que es un automata programable en automatizacion?", ["Un equipo que ejecuta un programa para controlar entradas y salidas", "Un simple fusible reemplazable", "Una luminaria de emergencia", "Un cable de datos sin logica"], "Un equipo que ejecuta un programa para controlar entradas y salidas", "Los automatismos programables leen entradas, procesan instrucciones y gobiernan salidas."),
  qGS(460402, "U4: Sistema de automatizacion con reles programables", "Que parte del automata es el centro de mando?", ["CPU", "Fuente de alimentacion", "Bornero", "Caja de empalmes"], "CPU", "La CPU procesa el programa y coordina el funcionamiento del automata."),
  qGS(460403, "U4: Sistema de automatizacion con reles programables", "Que conectan las interfaces de entrada?", ["Sensores, pulsadores o senales hacia el automata", "Solo lamparas de potencia", "La memoria externa a la red electrica", "Unicamente salidas analogicas"], "Sensores, pulsadores o senales hacia el automata", "Las entradas llevan al controlador informacion procedente del proceso o instalacion."),
  qGS(460404, "U4: Sistema de automatizacion con reles programables", "Que lenguaje grafico se basa en esquema de contactos?", ["LD", "ST", "IL", "SFC exclusivamente"], "LD", "LD o Ladder Diagram representa logica mediante contactos y bobinas."),
  qGS(460405, "U4: Sistema de automatizacion con reles programables", "Que herramienta se usa para programar LOGO! de Siemens desde ordenador?", ["LOGO! Soft Comfort", "ETS", "DIALux", "ActiveHome"], "LOGO! Soft Comfort", "El temario distingue programacion desde display integrado y desde LOGO! Soft Comfort."),
  qGS(460406, "U4: Sistema de automatizacion con reles programables", "Que fabricantes aparecen como ejemplos de otros reles programables?", ["Rockwell Automation, Schneider Electric, Omron y Eaton-Moeller", "Delta Dore, Legrand y Fagor exclusivamente", "AENOR, CEDOM y CTE", "Iberdrola, Endesa y REE"], "Rockwell Automation, Schneider Electric, Omron y Eaton-Moeller", "Se citan familias Micro800, Zelio Logic, ZEN y Easy como alternativas comerciales.")
];

const GS_CDA_U5_DATA = [
  qGS(460501, "U5: Sistemas de automatizacion basados en corrientes portadoras", "En que consiste una instalacion domotica por corrientes portadoras?", ["Usar la red electrica existente para transmitir informacion a frecuencias superiores a la red", "Tender siempre un bus independiente de fibra optica", "Eliminar todos los actuadores", "Usar solo corriente continua de baterias"], "Usar la red electrica existente para transmitir informacion a frecuencias superiores a la red", "La comunicacion PLC aprovecha la instalacion electrica y separa senales mediante frecuencias distintas."),
  qGS(460502, "U5: Sistemas de automatizacion basados en corrientes portadoras", "Que ventajas tienen estos sistemas?", ["Facil instalacion, expansion flexible, descentralizacion y monitorizacion", "Requieren obra completa siempre", "No admiten redes monofasicas", "No pueden combinarse con RF"], "Facil instalacion, expansion flexible, descentralizacion y monitorizacion", "Al conectarse a la red existente facilitan ampliaciones y pueden incorporar RF o infrarrojos."),
  qGS(460503, "U5: Sistemas de automatizacion basados en corrientes portadoras", "Que tecnologia de corrientes portadoras se considera la mas extendida en domotica clasica?", ["X-10", "KNX TP exclusivamente", "DALI", "Profibus"], "X-10", "El temario centra la unidad en X-10, aunque menciona X2D e InOne."),
  qGS(460504, "U5: Sistemas de automatizacion basados en corrientes portadoras", "Que informacion contienen los mensajes X2D?", ["Direccion del receptor, datos y codigo del emisor", "Solo potencia activa", "Escala, formato y cajetin", "Intensidad, tension y resistencia"], "Direccion del receptor, datos y codigo del emisor", "X2D identifica destinatario, accion y emisor dentro del sistema."),
  qGS(460505, "U5: Sistemas de automatizacion basados en corrientes portadoras", "Que componentes ayudan a mejorar la comunicacion X-10?", ["Supresores de ruido, filtros, acopladores y repetidores", "Solo magnetotermicos domesticos", "Unicamente cuadros de contadores", "Transformadores de MT"], "Supresores de ruido, filtros, acopladores y repetidores", "Estos elementos reducen interferencias, acoplan fases y refuerzan la senal de comunicacion."),
  qGS(460506, "U5: Sistemas de automatizacion basados en corrientes portadoras", "Que diferencia principal presenta InOne de Legrand segun el temario?", ["Usa protocolo propietario y cada dispositivo tiene codigo unico", "No usa ningun receptor", "Solo funciona sin red electrica", "Es una norma legal espanola"], "Usa protocolo propietario y cada dispositivo tiene codigo unico", "InOne combina corrientes portadoras, radiofrecuencia e infrarrojos con identificacion propia de dispositivos.")
];

const GS_CDA_U6_DATA = [
  qGS(460601, "U6: Sistemas basados en buses de campo inmoticos: KNX", "Que es un bus de campo?", ["Sistema que conecta sensores y actuadores mediante un cable comun de comunicacion", "Un fusible de uso general", "Una centralizacion de contadores", "Una lampara de senalizacion"], "Sistema que conecta sensores y actuadores mediante un cable comun de comunicacion", "El bus de campo transmite informacion entre dispositivos de automatizacion con cableado simplificado."),
  qGS(460602, "U6: Sistemas basados en buses de campo inmoticos: KNX", "Que sistemas predominan a nivel mundial en inmotica segun la unidad?", ["KNX y LonWorks", "X-10 y Presto", "DIALux y AutoCAD", "CGP y LGA"], "KNX y LonWorks", "KNX tiene origen europeo y mayor implantacion en Europa; LonWorks se asocia al origen americano."),
  qGS(460603, "U6: Sistemas basados en buses de campo inmoticos: KNX", "De que tecnologias nace KNX?", ["BatiBUS, EIB y EHS", "X2D, InOne y ADSL", "TT, TN e IT", "PVC, XLPE y EPR"], "BatiBUS, EIB y EHS", "KNX surge para unificar sistemas europeos previos bajo un estandar comun."),
  qGS(460604, "U6: Sistemas basados en buses de campo inmoticos: KNX", "Que caracteriza a KNX?", ["Estructura descentralizada, compatibilidad entre fabricantes y programacion con ETS", "Dependencia obligatoria de una central unica", "Incompatibilidad total entre fabricantes", "Uso exclusivo de infrarrojos"], "Estructura descentralizada, compatibilidad entre fabricantes y programacion con ETS", "KNX permite dispositivos autonomos, pasarelas a otros sistemas y software ETS independiente del fabricante."),
  qGS(460605, "U6: Sistemas basados en buses de campo inmoticos: KNX", "Que tipos de direcciones se usan en KNX?", ["Direcciones fisicas y direcciones de grupo", "Direcciones postales y fiscales", "Solo codigos de color", "Unicamente IP publicas"], "Direcciones fisicas y direcciones de grupo", "La direccion fisica identifica dispositivos y la de grupo organiza funciones/comunicaciones.")
];

const GS_CDA_U7_DATA = [
  qGS(460701, "U7: Normativa en instalaciones domoticas y automaticas", "Existe en Espana una unica ley que regule toda la domotica?", ["No, se aplica un conjunto de normas de electricidad, edificacion, telecomunicaciones y otros ambitos", "Si, una unica ley sustituye todo el REBT", "Si, solo la norma de fabricantes", "No existe ninguna norma aplicable"], "No, se aplica un conjunto de normas de electricidad, edificacion, telecomunicaciones y otros ambitos", "El temario indica que la domotica mezcla climatizacion, electricidad, electronica, edificacion y telecomunicaciones."),
  qGS(460702, "U7: Normativa en instalaciones domoticas y automaticas", "Que ITC del REBT regula sistemas de automatizacion, gestion tecnica de energia y seguridad?", ["ITC-BT-51", "ITC-BT-04", "ITC-LAT-06", "ITC-BT-10"], "ITC-BT-51", "La ITC-BT-51 da marco electrotecnico a sistemas automaticos en viviendas y edificios."),
  qGS(460703, "U7: Normativa en instalaciones domoticas y automaticas", "Que circuito propio se cita para alimentar elementos domoticos en viviendas con electrificacion elevada?", ["C11 con interruptor automatico de 10 A", "C1 con diferencial de 300 mA", "Linea de MT de 20 kV", "Circuito de alumbrado exterior sin proteccion"], "C11 con interruptor automatico de 10 A", "La unidad relaciona la domotica con ITC-BT-25 y circuito especifico C11."),
  qGS(460704, "U7: Normativa en instalaciones domoticas y automaticas", "Que documentos pide la guia del REBT para una instalacion domotica?", ["Manual de usuario y manual del instalador", "Solo una factura comercial", "Unicamente catalogo del fabricante", "Ningun documento"], "Manual de usuario y manual del instalador", "El manual de usuario recoge uso, mantenimiento y programacion; el del instalador incluye informacion tecnica."),
  qGS(460705, "U7: Normativa en instalaciones domoticas y automaticas", "Que identifica el marcado CE?", ["Que el producto cumple requisitos europeos aplicables para su comercializacion", "Que el producto es exclusivo de una compania electrica", "Que no necesita normativa", "Que solo funciona en corriente continua"], "Que el producto cumple requisitos europeos aplicables para su comercializacion", "El marcado CE y certificaciones ayudan a verificar cumplimiento en productos domoticos comercializados en Europa.")
];

const GS_CONFIGURACION_DOMOTICAS_AUTOMATICAS_DATA = [
  ...GS_CDA_U1_DATA,
  ...GS_CDA_U2_DATA,
  ...GS_CDA_U3_DATA,
  ...GS_CDA_U4_DATA,
  ...GS_CDA_U5_DATA,
  ...GS_CDA_U6_DATA,
  ...GS_CDA_U7_DATA
];

const EXAMEN_GS_CONFIGURACION_DOMOTICAS_AUTOMATICAS_DATA = [
  ...GS_CDA_U1_DATA,
  ...GS_CDA_U2_DATA,
  ...GS_CDA_U3_DATA,
  ...GS_CDA_U4_DATA,
  ...GS_CDA_U5_DATA,
  ...GS_CDA_U6_DATA,
  ...GS_CDA_U7_DATA
];

const PDF_T3_URLS = {
  sistemas_gs: {
    1: "pdfs/sistemas electricos/U1 Conceptos básicos.pdf",
    2: "pdfs/sistemas electricos/U2 Sistemas trifásicos.pdf",
    3: "pdfs/sistemas electricos/U3 Transformadores eléctricos.pdf",
    4: "pdfs/sistemas electricos/U4 Motores eléctricos.pdf",
    5: "pdfs/sistemas electricos/U5 Instrumentos y equipos de medida.pdf",
    6: "pdfs/sistemas electricos/U6 Introducción a la electrónica digital. Circuitos combinacionales.pdf",
    7: "pdfs/sistemas electricos/U7 Circuitos electrónicos digitales secuenciales.pdf",
    8: "pdfs/sistemas electricos/U8 Introducción a la electrónica analógica.pdf",
    9: "pdfs/sistemas electricos/U9 Circuitos electrónicos analógicos.pdf",
    10: "pdfs/sistemas electricos/ANX Fórmulas, definiciones y unidades básicas.pdf"
  },
  gestion_montaje_gs: {
    1: "pdfs/Gestión del montaje y del mantenimiento de instalaciones eléctricas/U1 Documentación técnica y normativa de aplicación.pdf",
    2: "pdfs/Gestión del montaje y del mantenimiento de instalaciones eléctricas/U2 Organización del proceso de aprovisionamiento.pdf",
    3: "pdfs/Gestión del montaje y del mantenimiento de instalaciones eléctricas/U3 Gestión del almacén.pdf",
    4: "pdfs/Gestión del montaje y del mantenimiento de instalaciones eléctricas/U4 Planificación del montaje.pdf",
    5: "pdfs/Gestión del montaje y del mantenimiento de instalaciones eléctricas/U5 Gestión de recursos y materiales.pdf",
    6: "pdfs/Gestión del montaje y del mantenimiento de instalaciones eléctricas/U6 Puesta en servicio de las instalaciones electrotécnicas.pdf",
    7: "pdfs/Gestión del montaje y del mantenimiento de instalaciones eléctricas/U7 Organización y gestión del mantenimiento.pdf",
    8: "pdfs/Gestión del montaje y del mantenimiento de instalaciones eléctricas/U8 Gestión de residuos y sistemas de gestión de calidad.pdf"
  },
  documentacion_tecnica_gs: {
    1: "pdfs/Documentación técnica en instalaciones eléctricas/U1 Identificacion de la documentacion tecnica y administrativa.pdf",
    2: "pdfs/Documentación técnica en instalaciones eléctricas/U2 Proyectos y memorias tecnicas de diseño.pdf",
    3: "pdfs/Documentación técnica en instalaciones eléctricas/U3 Representacion grafica de las instalaciones electrotecnicas.pdf",
    4: "pdfs/Documentación técnica en instalaciones eléctricas/U4 Elaboracion de presupuestos y anexos de calculos.pdf",
    5: "pdfs/Documentación técnica en instalaciones eléctricas/U5 Confeccion de pliegos, manuales, estudios e informes.pdf",
    6: "pdfs/Documentación técnica en instalaciones eléctricas/U6 Tramitacion, legalizacion, inspeccion y puesta en marcha de instalaciones.pdf",
    7: "pdfs/Documentación técnica en instalaciones eléctricas/U7 Sofware y aplicaciones para instalaciones electricas.pdf",
    8: "pdfs/Documentación técnica en instalaciones eléctricas/ANEXO Simbología Eléctrica.pdf"
  },
  redes_ct_gs: {
    1: "pdfs/Desarrollo de redes eléctricas y centros de transformación/U1 Estructura de la red eléctrica.pdf",
    2: "pdfs/Desarrollo de redes eléctricas y centros de transformación/U2 Redes eléctricas de distribución de media tensión.pdf",
    3: "pdfs/Desarrollo de redes eléctricas y centros de transformación/U3 Centros de transformación de energía eléctrica.pdf",
    4: "pdfs/Desarrollo de redes eléctricas y centros de transformación/U4 Redes eléctricas de distribución de baja tensión.pdf",
    5: "pdfs/Desarrollo de redes eléctricas y centros de transformación/U5 Cálculos mecánicos y eléctricos.pdf",
    6: "pdfs/Desarrollo de redes eléctricas y centros de transformación/U6 Configuración de centros de transformación y redes eléctricas de baja tensión.PDF",
    7: "pdfs/Desarrollo de redes eléctricas y centros de transformación/U7 Proyectos resumidos de centros de transformación y redes de baja tensión.pdf",
    8: "pdfs/Desarrollo de redes eléctricas y centros de transformación/U8 Pruebas y ensayos de los centros de transformación.pdf"
  },
  configuracion_instalaciones_gs: {
    1: "pdfs/Configuración de instalaciones eléctricas/U1 Características de las instalaciones de BT.pdf",
    2: "pdfs/Configuración de instalaciones eléctricas/U2 Elementos de las instalaciones de BT I.pdf",
    3: "pdfs/Configuración de instalaciones eléctricas/U3 Elementos de las instalaciones de BT II.pdf",
    4: "pdfs/Configuración de instalaciones eléctricas/U4 Cálculo de instalaciones eléctricas I.pdf",
    5: "pdfs/Configuración de instalaciones eléctricas/U5 Cálculo de instalaciones eléctricas II.pdf",
    6: "pdfs/Configuración de instalaciones eléctricas/U6 Configuración de instalaciones eléctricas de baja tensión.pdf",
    7: "pdfs/Configuración de instalaciones eléctricas/U7 Proyectos resumidos de instalaciones en edificios, e instalaciones fotovoltaicas.pdf"
  },
  domoticas_automaticas_gs: {
    1: "pdfs/Configuración de instalaciones domoticas/U1 Hogares digitales, edificios inteligentes y urbotica en tu ciudad.pdf",
    2: "pdfs/Configuración de instalaciones domoticas/U2 Instalaciones y dispositivos de automatizacion.pdf",
    3: "pdfs/Configuración de instalaciones domoticas/U3 Soluciones de automatizacion preprogramadas.pdf",
    4: "pdfs/Configuración de instalaciones domoticas/U4 Sistema de automatizacion con reles programables.pdf",
    5: "pdfs/Configuración de instalaciones domoticas/U5 Sistemas de automatizacion basados en corrientes portadoras.pdf",
    6: "pdfs/Configuración de instalaciones domoticas/U6 Sistema basados en buses de campo inmoticos el bus KNX.pdf",
    7: "pdfs/Configuración de instalaciones domoticas/U7 Normativa en instalaciones domoticas y automaticas.pdf"
  }
};
