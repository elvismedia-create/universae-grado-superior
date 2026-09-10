// T3: Máquinas Eléctricas
const TEMA_T3_MAQUINAS_ELECTRICAS_DATA = [
  {
    id: 1,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función principal de un motor eléctrico?",
    opciones: ["Convertir energía eléctrica en energía mecánica", "Convertir energía mecánica en eléctrica", "Almacenar energía", "Distribuir energía"],
    correcta: 0,
    explicacion: "Un motor eléctrico transforma la energía eléctrica en energía mecánica para realizar trabajo útil."
  },
  {
    id: 2,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son los tipos principales de motores eléctricos?",
    opciones: ["Motores de corriente continua (CC) y corriente alterna (CA)", "Solo corriente continua", "Solo corriente alterna", "Motores de vapor"],
    correcta: 0,
    explicacion: "Los motores de corriente continua (CC) son menos comunes en aplicaciones residenciales, mientras que los de corriente alterna (CA) son los más utilizados."
  },
  {
    id: 3,
    imagen: false,
    svg: false,
    texto: "¿Cuáles son las partes principales de un motor eléctrico de corriente alterna?",
    opciones: ["Estátor, rotor y sistema de refrigeración", "Solo un bobinado", "Solo un imán", "Un condensador y nada más"],
    correcta: 0,
    explicacion: "El estátor (parte fija) genera el campo magnético, el rotor (parte móvil) gira dentro del campo, y el sistema de refrigeración mantiene la temperatura adecuada."
  },
  {
    id: 4,
    imagen: false,
    svg: false,
    texto: "¿Qué es el deslizamiento en un motor asincrónico?",
    opciones: ["La diferencia entre la velocidad de giro del campo magnético y la velocidad real del rotor", "El patinamiento de las correas", "La fricción en los rodamientos", "La pérdida de voltaje"],
    correcta: 0,
    explicacion: "El deslizamiento es la diferencia porcentual entre la velocidad síncrona (campo magnético) y la velocidad real del rotor, expresada como s = (ns - n) / ns."
  },
  {
    id: 5,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la velocidad de sincronismo de un motor trifásico de 4 polos a 50 Hz?",
    opciones: ["1500 rpm", "3000 rpm", "1000 rpm", "2000 rpm"],
    correcta: 0,
    explicacion: "La velocidad sincrónica se calcula como ns = (120 × f) / p = (120 × 50) / 4 = 1500 rpm."
  },
  {
    id: 6,
    imagen: false,
    svg: false,
    texto: "¿Qué es un motor monofásico?",
    opciones: ["Motor alimentado con una sola fase de corriente alterna (230V)", "Motor de corriente continua", "Motor sin alimentación eléctrica", "Motor de vapor"],
    correcta: 0,
    explicacion: "Un motor monofásico utiliza una única fase de corriente alterna (230V) y requiere dispositivos auxiliares para el arranque como capacitores."
  },
  {
    id: 7,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la función del capacitor de arranque en un motor monofásico?",
    opciones: ["Proporcionar un desfase para crear un campo magnético rotativo al arranque", "Proteger contra sobrecargas", "Aumentar la velocidad", "Reducir el ruido"],
    correcta: 0,
    explicacion: "El capacitor crea un desfase entre la corriente de dos bobinados para generar un campo magnético rotativo que permite el arranque del motor."
  },
  {
    id: 8,
    imagen: false,
    svg: false,
    texto: "¿Qué es una máquina sincrónica?",
    opciones: ["Máquina donde el rotor gira a la misma velocidad que el campo magnético (velocidad síncrona)", "Máquina con deslizamiento", "Máquina de corriente continua", "Máquina sin alimentación"],
    correcta: 0,
    explicacion: "En una máquina sincrónica, el rotor gira exactamente a la velocidad de sincronismo, sin deslizamiento, con el campo magnético."
  },
  {
    id: 9,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la diferencia principal entre un motor y un generador?",
    opciones: ["El motor convierte energía eléctrica en mecánica; el generador convierte energía mecánica en eléctrica", "No hay diferencia", "El motor es más rápido", "El generador necesita más potencia"],
    correcta: 0,
    explicacion: "Los motores y generadores tienen construcciones similares pero funciones opuestas: los motores consumen energía eléctrica, los generadores la producen."
  },
  {
    id: 10,
    imagen: false,
    svg: false,
    texto: "¿Qué es el factor de potencia en una máquina eléctrica?",
    opciones: ["La relación entre la potencia activa y la potencia aparente (cos φ)", "La velocidad del motor", "El deslizamiento", "La intensidad de corriente"],
    correcta: 0,
    explicacion: "El factor de potencia (cos φ) indica la eficiencia de utilización de la energía, siendo 1 el máximo (ideal) y 0 el mínimo."
  },
  {
    id: 11,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la potencia nominal de un motor?",
    opciones: ["La potencia mecánica que el motor puede entregar en condiciones normales de funcionamiento", "La potencia aparente", "La potencia reactiva", "La potencia máxima teórica"],
    correcta: 0,
    explicacion: "La potencia nominal es la potencia de salida (mecánica) garantizada por el fabricante en condiciones de funcionamiento continuo."
  },
  {
    id: 12,
    imagen: false,
    svg: false,
    texto: "¿Qué causa el sobrecalentamiento en un motor eléctrico?",
    opciones: ["Sobrecargas, deficiente refrigeración, cortocircuitos y fricción excesiva", "El calor externo", "Una temperatura ambiente baja", "La velocidad muy baja"],
    correcta: 0,
    explicacion: "El sobrecalentamiento resulta de sobrecargas, mala ventilación, defectos en el aislamiento, rodamientos desgastados o falta de mantenimiento."
  },
  {
    id: 13,
    imagen: false,
    svg: false,
    texto: "¿Qué es la curva de par (torque) de un motor?",
    opciones: ["Gráfica que muestra cómo varía el par motor con la velocidad de giro", "La curva de consumo de energía", "La curva de temperatura", "La curva de voltaje"],
    correcta: 0,
    explicacion: "La curva de par muestra la relación entre el torque (momento de torsión) y la velocidad, siendo crucial para conocer el comportamiento del motor."
  },
  {
    id: 14,
    imagen: false,
    svg: false,
    texto: "¿Cuál es la clasificación de eficiencia energética de motores según normas internacionales?",
    opciones: ["IE (IE1, IE2, IE3, IE4) siendo IE4 la más eficiente", "A, B, C, D", "Clase I, II, III", "Tipo alfa, beta, gamma"],
    correcta: 0,
    explicacion: "La norma internacional IEC 60034-30 establece las clases IE de eficiencia energética, siendo IE4 (Super Premium) la de mayor eficiencia."
  },
  {
    id: 15,
    imagen: false,
    svg: false,
    texto: "¿Qué es el rendimiento de una máquina eléctrica?",
    opciones: ["Relación entre la potencia útil de salida y la potencia de entrada (η = P_salida / P_entrada)", "La velocidad de giro", "El factor de potencia", "El deslizamiento"],
    correcta: 0,
    explicacion: "El rendimiento expresa qué porcentaje de la potencia consumida se convierte en trabajo útil, siendo típicamente 80-95% en motores."
  }
];
