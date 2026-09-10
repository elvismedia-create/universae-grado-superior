// UNIT 6: Work smarter - 50 preguntas
const TEMA_INGLES_PROFESSIONAL_U6_DATA = [
  // ===== QUANTIFIERS (7 questions) =====
  {
    id: 6001,
    tema: "Quantifiers",
    tipo: "multiple",
    texto: "There are _______ people at the meeting. About 50 employees.",
    opciones: ["many", "much", "a little", "few"],
    correctaTexto: "many",
    explicacion: "Many = para sustantivos contables (people, employees). Much = incontables (water, traffic)."
  },
  {
    id: 6002,
    tema: "Quantifiers",
    tipo: "multiple",
    texto: "We have _______ information about the new project. Not much.",
    opciones: ["many", "a few", "much", "many of"],
    correctaTexto: "much",
    explicacion: "Much = sustantivos incontables (information, data, knowledge). A few = contables positivo."
  },
  {
    id: 6003,
    tema: "Quantifiers",
    tipo: "multiple",
    texto: "There are _______ problems with the system. Only a few.",
    opciones: ["much", "a little", "a few", "little"],
    correctaTexto: "a few",
    explicacion: "'A few' = pequeña cantidad positiva de contables. 'Few' = casi ninguno (negativo)."
  },
  {
    id: 6004,
    tema: "Quantifiers",
    tipo: "multiple",
    texto: "She has _______ time to finish the report, so she's stressed.",
    opciones: ["many", "a few", "little", "lots of"],
    correctaTexto: "little",
    explicacion: "'Little' = casi nada (negativo) de incontables. 'A little' = un poco (positivo)."
  },
  {
    id: 6005,
    tema: "Quantifiers",
    tipo: "multiple",
    texto: "We can use this equipment for _______ projects. It's very versatile.",
    opciones: ["many", "much", "little", "few"],
    correctaTexto: "many",
    explicacion: "Many projects = sustantivos contables. Se refiere a numerosos proyectos."
  },
  {
    id: 6006,
    tema: "Quantifiers",
    tipo: "multiple",
    texto: "_______ of the employees work from home. Almost all of them.",
    opciones: ["Many", "Much", "A lot", "Few"],
    correctaTexto: "A lot",
    explicacion: "A lot = funciona con contables e incontables. 'A lot of the employees' = muchos empleados."
  },
  {
    id: 6007,
    tema: "Quantifiers",
    tipo: "multiple",
    texto: "This software uses _______ memory. You need a powerful computer.",
    opciones: ["many", "a few", "much", "a little"],
    correctaTexto: "much",
    explicacion: "Memory = incontable. Much memory = mucha memoria (cantidad no contable)."
  },

  // ===== MODAL VERBS (10 questions) =====
  {
    id: 6008,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "You _______ use wireless networks in this building. It's required.",
    opciones: ["can", "must", "should", "might"],
    correctaTexto: "must",
    explicacion: "Must = obligación. 'You must use' = es obligatorio/necesario usar."
  },
  {
    id: 6009,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "Employees _______ smoke in the office. It's strictly prohibited.",
    opciones: ["must not", "should not", "might not", "may not"],
    correctaTexto: "must not",
    explicacion: "Must not = prohibición total/estricta. Can't also works. Should not = consejo débil."
  },
  {
    id: 6010,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "The technician _______ fix the computer. He's very skilled.",
    opciones: ["should", "might", "can", "must"],
    correctaTexto: "can",
    explicacion: "Can = capacidad/habilidad. 'He can fix' = tiene la capacidad de reparar."
  },
  {
    id: 6011,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "It _______ rain tomorrow, so we _______ bring umbrellas.",
    opciones: ["might/should", "can/must", "must/can", "should/may"],
    correctaTexto: "might/should",
    explicacion: "Might = posibilidad. Should = recomendación. 'Might rain' + 'should bring'."
  },
  {
    id: 6012,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "_____ I use your computer for a moment, please?",
    opciones: ["Should", "Must", "May", "Can"],
    correctaTexto: "May",
    explicacion: "May = forma formal de pedir permiso. Can también es correcto pero menos formal."
  },
  {
    id: 6013,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "You _______ take a break if you feel tired.",
    opciones: ["must", "can", "should", "might"],
    correctaTexto: "should",
    explicacion: "Should = consejo/recomendación. 'You should take a break' = es recomendable descansar."
  },
  {
    id: 6014,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "The system _______ crash, but it's unlikely. We have good security.",
    opciones: ["must", "can", "might", "should"],
    correctaTexto: "might",
    explicacion: "Might = posibilidad baja/remota. 'Might crash' = podría fallar (pero improbable)."
  },
  {
    id: 6015,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "Employees _______ work overtime if they want extra money.",
    opciones: ["must", "can", "should", "might"],
    correctaTexto: "can",
    explicacion: "Can = permiso/opción disponible. 'Can work overtime' = tienen la opción de trabajar horas extra."
  },
  {
    id: 6016,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "You _______ finish this project by Friday. It's a strict deadline.",
    opciones: ["might", "can", "must", "should"],
    correctaTexto: "must",
    explicacion: "Must = obligación obligatoria con deadline. 'You must finish' = tienes que terminar sí o sí."
  },
  {
    id: 6017,
    tema: "Modal verbs",
    tipo: "multiple",
    texto: "The new software _______ improve our productivity significantly.",
    opciones: ["will", "might", "should", "must"],
    correctaTexto: "should",
    explicacion: "Should = expectativa/esperanza de resultado. 'Should improve' = se espera que mejore."
  },

  // ===== INDEFINITE PRONOUNS (5 questions) =====
  {
    id: 6018,
    tema: "Indefinite pronouns",
    tipo: "multiple",
    texto: "Is _______ here who knows how to use this software?",
    opciones: ["someone", "anyone", "everyone", "nobody"],
    correctaTexto: "anyone",
    explicacion: "Anyone = en preguntas. 'Is anyone here?' = ¿hay alguien aquí? (pregunta abierta)."
  },
  {
    id: 6019,
    tema: "Indefinite pronouns",
    tipo: "multiple",
    texto: "_______ attended the meeting. All employees were present.",
    opciones: ["Everyone", "Someone", "No one", "Anybody"],
    correctaTexto: "Everyone",
    explicacion: "Everyone = todos. 'Everyone attended' = todos asistieron al meeting."
  },
  {
    id: 6020,
    tema: "Indefinite pronouns",
    tipo: "multiple",
    texto: "I couldn't find _______ in the office. It was closed.",
    opciones: ["anyone", "someone", "everybody", "everything"],
    correctaTexto: "anyone",
    explicacion: "Anyone = en negativas. 'Couldn't find anyone' = no encontré a nadie."
  },
  {
    id: 6021,
    tema: "Indefinite pronouns",
    tipo: "multiple",
    texto: "There's _______ I want to show you. Look at this report.",
    opciones: ["nothing", "anything", "something", "everything"],
    correctaTexto: "something",
    explicacion: "Something = algo (afirmativa). 'There's something' = hay algo que quiero mostrar."
  },
  {
    id: 6022,
    tema: "Indefinite pronouns",
    tipo: "multiple",
    texto: "We can find these documents _______. They're uploaded everywhere.",
    opciones: ["nowhere", "somewhere", "anywhere", "somewhere"],
    correctaTexto: "anywhere",
    explicacion: "Anywhere = en cualquier lugar (en afirmativas = 'en cualquier parte'). Significa accesibilidad."
  },

  // ===== SAXON GENITIVE / POSSESSION (5 questions) =====
  {
    id: 6023,
    tema: "Saxon Genitive",
    tipo: "multiple",
    texto: "The report belongs to Maria. = _______.",
    opciones: ["Maria's report", "The report of Maria", "Report's Maria", "Maria report"],
    correctaTexto: "Maria's report",
    explicacion: "Saxon Genitive = nombre + 's. 'Maria's report' = el reporte de Maria (forma posesiva)."
  },
  {
    id: 6024,
    tema: "Saxon Genitive",
    tipo: "multiple",
    texto: "The office of the manager = _______.",
    opciones: ["Office's manager", "The manager's office", "Manager office", "Office manager's"],
    correctaTexto: "The manager's office",
    explicacion: "Manager's office = la oficina del gerente. Saxon genitive con persona."
  },
  {
    id: 6025,
    tema: "Saxon Genitive",
    tipo: "multiple",
    texto: "The children _______ toys are here.",
    opciones: ["of", "'s", "is", "are"],
    correctaTexto: "'s",
    explicacion: "Children's toys = los juguetes de los niños. Plural irregular sin -s al final, se añade 's."
  },
  {
    id: 6026,
    tema: "Saxon Genitive",
    tipo: "multiple",
    texto: "The performance of the employees _______ was excellent.",
    opciones: ["'s", "of", "were", "was"],
    correctaTexto: "was",
    explicacion: "The employees' performance = el desempeño de los empleados. Plural con -s, solo añade '."
  },
  {
    id: 6027,
    tema: "Saxon Genitive",
    tipo: "multiple",
    texto: "Thomas and Walter _______ profiles on the system are important.",
    opciones: ["'s", "'", "are", "of"],
    correctaTexto: "'s",
    explicacion: "Shared possession: Thomas and Walter's profiles. Solo 's en el último nombre cuando comparten algo."
  },

  // ===== PASSIVE VOICE (10 questions) =====
  {
    id: 6028,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "The software _______ by a team of developers.",
    opciones: ["created", "is created", "was created", "creates"],
    correctaTexto: "is created",
    explicacion: "Passive Present Simple: is/are + past participle. 'The software is created' = el software es creado."
  },
  {
    id: 6029,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "The project _______ by the manager yesterday.",
    opciones: ["approved", "is approved", "was approved", "approves"],
    correctaTexto: "was approved",
    explicacion: "Passive Past Simple: was/were + past participle. 'Yesterday' = pasado. 'Was approved' = fue aprobado."
  },
  {
    id: 6030,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "Active: They designed the network. Passive: The network _______ by them.",
    opciones: ["designed", "is designed", "was designed", "has designed"],
    correctaTexto: "was designed",
    explicacion: "Conversión pasiva: 'They designed' (Past Simple) → 'was designed by them' (Passive Past Simple)."
  },
  {
    id: 6031,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "These emails _______ by the IT department every month.",
    opciones: ["check", "are checked", "is checked", "checked"],
    correctaTexto: "are checked",
    explicacion: "Passive Present Simple plural: are + past participle. 'These emails are checked' = estos correos son revisados."
  },
  {
    id: 6032,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "The conference _______ next week. The invitations will be sent soon.",
    opciones: ["is held", "will be held", "is being held", "is hold"],
    correctaTexto: "will be held",
    explicacion: "Passive Future: will be + past participle. 'Next week' = futuro. 'Will be held' = será realizada."
  },
  {
    id: 6033,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "The documents _______ in the archive. They're very important.",
    opciones: ["are stored", "store", "stores", "are store"],
    correctaTexto: "are stored",
    explicacion: "Passive Present: are + past participle. 'Are stored' = son almacenados/se guardan en el archivo."
  },
  {
    id: 6034,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "Active: The company produces these products. Passive: These products _______ by the company.",
    opciones: ["are produced", "produce", "are producing", "produced"],
    correctaTexto: "are produced",
    explicacion: "Simple Present activa: 'produces' → Passive: 'are produced'. Hace énfasis en los productos, no en la empresa."
  },
  {
    id: 6035,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "The algorithm _______ to solve complex problems.",
    opciones: ["uses", "is used", "used", "use"],
    correctaTexto: "is used",
    explicacion: "Passive Present Simple. 'The algorithm is used' = el algoritmo es utilizado (para resolver problemas)."
  },
  {
    id: 6036,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "The server _______ by unauthorized users last night.",
    opciones: ["attacked", "is attacked", "was attacked", "attacks"],
    correctaTexto: "was attacked",
    explicacion: "'Last night' = pasado. Passive Past Simple: 'was attacked by unauthorized users' = fue atacado."
  },
  {
    id: 6037,
    tema: "Passive Voice",
    tipo: "multiple",
    texto: "The new system _______ next month. Management has decided.",
    opciones: ["is implemented", "implements", "will be implemented", "is implementing"],
    correctaTexto: "will be implemented",
    explicacion: "'Next month' = futuro. Passive Future: 'will be implemented' = será implementado."
  },

  // ===== TELECOMMUNICATIONS VOCABULARY (8 questions) =====
  {
    id: 6038,
    tema: "Telecommunications Vocabulary",
    tipo: "multiple",
    texto: "_______ refers to the transmission of information over long distances using electronic methods.",
    opciones: ["Broadcasting", "Telecommunications", "Encoding", "Networking"],
    correctaTexto: "Telecommunications",
    explicacion: "Telecommunications = transmisión de información a largas distancias (voz, video, datos)."
  },
  {
    id: 6039,
    tema: "Telecommunications Vocabulary",
    tipo: "multiple",
    texto: "_______ is a device that sends electrical or radio signals.",
    opciones: ["Receiver", "Transceiver", "Transmitter", "Amplifier"],
    correctaTexto: "Transmitter",
    explicacion: "Transmitter = dispositivo que envía/transmite señales. Receiver = recibe."
  },
  {
    id: 6040,
    tema: "Telecommunications Vocabulary",
    tipo: "multiple",
    texto: "_______ uses physical mediums like copper wires or fiber-optic cables.",
    opciones: ["Wireless communication", "Wired communication", "Broadcast transmission", "Satellite link"],
    correctaTexto: "Wired communication",
    explicacion: "Wired communication = usa cables físicos (cobre, fibra óptica). Wireless = sin cables."
  },
  {
    id: 6041,
    tema: "Telecommunications Vocabulary",
    tipo: "multiple",
    texto: "A _______ is a device that combines both transmitter and receiver functions.",
    opciones: ["repeater", "amplifier", "transceiver", "decoder"],
    correctaTexto: "transceiver",
    explicacion: "Transceiver = transmitter + receiver. Un dispositivo que envía Y recibe señales."
  },
  {
    id: 6042,
    tema: "Telecommunications Vocabulary",
    tipo: "multiple",
    texto: "_______ technology transmits data without wires via electromagnetic waves.",
    opciones: ["Wired", "Optical", "Wireless", "Fiber"],
    correctaTexto: "Wireless",
    explicacion: "Wireless = sin cables. USA ondas electromagnéticas (Wi-Fi, Bluetooth, 3G/4G/5G)."
  },
  {
    id: 6043,
    tema: "Telecommunications Vocabulary",
    tipo: "multiple",
    texto: "_______ uses light to transmit data through thin glass tubes.",
    opciones: ["Copper wire", "Satellite transmission", "Optical fiber", "Radio waves"],
    correctaTexto: "Optical fiber",
    explicacion: "Optical fiber = fibra óptica. Transmite datos usando luz a través de tubo de vidrio."
  },
  {
    id: 6044,
    tema: "Telecommunications Vocabulary",
    tipo: "multiple",
    texto: "A _______ circuit typically includes a transmitter, receiver, and a medium for transmission.",
    opciones: ["broadcast", "telecommunications", "wireless", "satellite"],
    correctaTexto: "telecommunications",
    explicacion: "Telecommunications circuit = incluye dos estaciones (con transmisor/receptor) y el medio (cable, fibra, ondas)."
  },
  {
    id: 6045,
    tema: "Telecommunications Vocabulary",
    tipo: "multiple",
    texto: "The main form of telecom _______ transmits content to a wide audience via radio or TV.",
    opciones: ["networking", "broadcasting", "encoding", "routing"],
    correctaTexto: "broadcasting",
    explicacion: "Broadcasting = difusión a audiencia amplia por radio o TV. One-to-many communication."
  },

  // ===== ANTENNA TYPES & WIRELESS (7 questions) =====
  {
    id: 6046,
    tema: "Antennae Types",
    tipo: "multiple",
    texto: "A _______ antenna is used for receiving TV signals and is directional.",
    opciones: ["Dipole", "Loop", "Yagi", "Fractal"],
    correctaTexto: "Yagi",
    explicacion: "Yagi antenna = direccional, usada para TV y radio amateur. Concentra señal en una dirección."
  },
  {
    id: 6047,
    tema: "Antennae Types",
    tipo: "multiple",
    texto: "_______ antennas are compact and support multiple frequencies simultaneously.",
    opciones: ["Loop", "Dipole", "Fractal", "Satellite"],
    correctaTexto: "Fractal",
    explicacion: "Fractal antenna = diseño complejo y compacto. Multi-frecuencia. Usada en celulares modernos."
  },
  {
    id: 6048,
    tema: "Antennae Types",
    tipo: "multiple",
    texto: "A _______ antenna is a parabolic dish used for satellite TV or communication.",
    opciones: ["Yagi", "Loop", "Satellite dish", "Dipole"],
    correctaTexto: "Satellite dish",
    explicacion: "Satellite dish = antena parabólica para satélites. Recibe señales del espacio."
  },
  {
    id: 6049,
    tema: "Antennae Types",
    tipo: "multiple",
    texto: "The _______ antenna is the most basic design for radio transmission.",
    opciones: ["Fractal", "Dipole", "Yagi", "Loop"],
    correctaTexto: "Dipole",
    explicacion: "Dipole antenna = diseño básico. Dos elementos radiantes. Usada en radios simples."
  },
  {
    id: 6050,
    tema: "Antennae Types",
    tipo: "multiple",
    texto: "A _______ antenna is circular in design and used for low-frequency applications.",
    opciones: ["Dipole", "Yagi", "Loop", "Satellite"],
    correctaTexto: "Loop",
    explicacion: "Loop antenna = circular/redonda. Baja frecuencia. Usada en receptores de radio AM."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEMA_INGLES_PROFESSIONAL_U6_DATA;
}
