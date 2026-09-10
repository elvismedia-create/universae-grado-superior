// UNIT 1: Living in the Present - Inglés Profesional (50 preguntas)
const TEMA_INGLES_PROFESSIONAL_U1_DATA = [
  // GRAMMAR: THE VERB "TO BE"
  {
    id: 1001,
    tema: 0,
    tipo: "normal",
    texto: "Choose the correct form of 'to be'.",
    opciones: ["She are a doctor.", "She is a doctor.", "She am a doctor.", "She be a doctor."],
    correctaTexto: "She is a doctor.",
    explicacion: "El verbo 'to be' en tercera persona singular (she) es 'is'."
  },
  {
    id: 1002,
    tema: 0,
    tipo: "normal",
    texto: "What is the negative form of 'I am happy'?",
    opciones: ["I not am happy.", "I am not happy.", "I don't am happy.", "I'm not happy. (both B and D)"],
    correctaTexto: "I am not happy.",
    explicacion: "La forma negativa correcta es 'I am not' o la forma contraída 'I'm not'."
  },
  {
    id: 1003,
    tema: 0,
    tipo: "normal",
    texto: "Complete: 'Are you ready?' 'Yes, ________'",
    opciones: ["I'm.", "I am.", "I are.", "Yes, I'm ready."],
    correctaTexto: "I am.",
    explicacion: "En respuestas cortas con 'to be', usamos 'I am' (o la forma contraída 'I'm')."
  },
  {
    id: 1004,
    tema: 0,
    tipo: "normal",
    texto: "Which sentence is correct?",
    opciones: ["They is students.", "They are students.", "They am students.", "They be students."],
    correctaTexto: "They are students.",
    explicacion: "Con el pronombre 'they', usamos 'are'."
  },
  {
    id: 1005,
    tema: 0,
    tipo: "normal",
    texto: "What is the interrogative form of 'He is an electrician'?",
    opciones: ["He is an electrician?", "Is he an electrician?", "Is an electrician he?", "Does he is an electrician?"],
    correctaTexto: "Is he an electrician?",
    explicacion: "En preguntas con 'to be', el verbo va al principio: Is he...?"
  },

  // GRAMMAR: THE VERB "TO HAVE GOT"
  {
    id: 1006,
    tema: 0,
    tipo: "normal",
    texto: "Which is the correct form of 'to have got' for 'he'?",
    opciones: ["He have got.", "He has got.", "He has get.", "He do got."],
    correctaTexto: "He has got.",
    explicacion: "'To have got' en tercera persona singular es 'has got'."
  },
  {
    id: 1007,
    tema: 0,
    tipo: "normal",
    texto: "Complete: 'I ________ a new car.'",
    opciones: ["has got", "have get", "have got", "has get"],
    correctaTexto: "have got",
    explicacion: "Con 'I' usamos 'have got'."
  },
  {
    id: 1008,
    tema: 0,
    tipo: "normal",
    texto: "What is the negative form of 'She has got a pet'?",
    opciones: ["She has not got a pet.", "She hasn't got a pet.", "She don't have got a pet.", "Both A and B"],
    correctaTexto: "Both A and B",
    explicacion: "Ambas formas son correctas: 'has not got' o 'hasn't got'."
  },
  {
    id: 1009,
    tema: 0,
    tipo: "normal",
    texto: "Which sentence is correct?",
    opciones: ["Do you have got a brother?", "Have you got a brother?", "Has you got a brother?", "You have got a brother?"],
    correctaTexto: "Have you got a brother?",
    explicacion: "En preguntas con 'to have got', el verbo va al principio."
  },
  {
    id: 1010,
    tema: 0,
    tipo: "normal",
    texto: "'To have got' is commonly used in:",
    opciones: ["American English only.", "British English, mainly in spoken contexts.", "Only in technical documents.", "Only in written formal English."],
    correctaTexto: "British English, mainly in spoken contexts.",
    explicacion: "'To have got' es típico del inglés británico y se usa en contextos hablados e informales."
  },

  // GRAMMAR: PRESENT SIMPLE
  {
    id: 1011,
    tema: 0,
    tipo: "normal",
    texto: "Choose the correct form of present simple.",
    opciones: ["He work in a bank.", "He works in a bank.", "He working in a bank.", "He is work in a bank."],
    correctaTexto: "He works in a bank.",
    explicacion: "En tercera persona singular del present simple, agregamos '-s' al verbo base."
  },
  {
    id: 1012,
    tema: 0,
    tipo: "normal",
    texto: "What is the negative form of 'They speak English'?",
    opciones: ["They don't speak English.", "They doesn't speak English.", "They not speak English.", "They are not speak English."],
    correctaTexto: "They don't speak English.",
    explicacion: "En present simple, usamos 'do not' (don't) para las negaciones."
  },
  {
    id: 1013,
    tema: 0,
    tipo: "normal",
    texto: "Complete: 'Does she ________ in an office?'",
    opciones: ["working", "works", "work", "is working"],
    correctaTexto: "work",
    explicacion: "Después de 'does' en preguntas, usamos el verbo base sin '-s'."
  },
  {
    id: 1014,
    tema: 0,
    tipo: "normal",
    texto: "Which rule applies to verbs ending in consonant + y?",
    opciones: ["Add -s", "Change y to i and add -es", "Add -es", "No change"],
    correctaTexto: "Change y to i and add -es",
    explicacion: "study → studies, cry → cries (cambiar y por i y agregar -es)."
  },
  {
    id: 1015,
    tema: 0,
    tipo: "normal",
    texto: "Choose the correct sentence in present simple.",
    opciones: ["I always goes to the gym.", "I always go to the gym.", "I am always going to the gym.", "I always am going to the gym."],
    correctaTexto: "I always go to the gym.",
    explicacion: "En present simple con 'I', usamos el verbo base sin cambios."
  },

  // GRAMMAR: PRESENT CONTINUOUS
  {
    id: 1016,
    tema: 0,
    tipo: "normal",
    texto: "Which sentence is in present continuous?",
    opciones: ["She watches TV.", "She watching TV now.", "She is watching TV now.", "She watch TV now."],
    correctaTexto: "She is watching TV now.",
    explicacion: "Present continuous: subject + am/are/is + verb-ing."
  },
  {
    id: 1017,
    tema: 0,
    tipo: "normal",
    texto: "What is the correct form of 'make' in present continuous?",
    opciones: ["making", "makeing", "mmaking", "make"],
    correctaTexto: "making",
    explicacion: "Verbos que terminan en -e: quitar la -e y agregar -ing (make → making)."
  },
  {
    id: 1018,
    tema: 0,
    tipo: "normal",
    texto: "Complete: 'They are ________ for their exam.'",
    opciones: ["study", "studying", "studies", "studyed"],
    correctaTexto: "studying",
    explicacion: "En present continuous, agregamos -ing al verbo."
  },
  {
    id: 1019,
    tema: 0,
    tipo: "normal",
    texto: "What is the negative form of 'He is working'?",
    opciones: ["He is not working.", "He isn't working.", "He is not work.", "Both A and B"],
    correctaTexto: "Both A and B",
    explicacion: "Ambas formas son correctas: 'is not working' o 'isn't working'."
  },
  {
    id: 1020,
    tema: 0,
    tipo: "normal",
    texto: "Which word/phrase indicates present continuous?",
    opciones: ["Always, usually, often", "Now, at the moment, currently", "Every day, every week", "Never, rarely, hardly ever"],
    correctaTexto: "Now, at the moment, currently",
    explicacion: "Present continuous va acompañado por palabras como 'now', 'at the moment', 'currently'."
  },

  // VOCABULARY: ELECTRICITY AND ELECTRONICS TERMS
  {
    id: 1021,
    tema: 0,
    tipo: "normal",
    texto: "What is the correct use of 'electric'?",
    opciones: ["Electrical engineer", "Electric toothbrush", "Electronic music", "Electricity company"],
    correctaTexto: "Electric toothbrush",
    explicacion: "'Electric' se usa para máquinas o dispositivos específicos que usan electricidad."
  },
  {
    id: 1022,
    tema: 0,
    tipo: "normal",
    texto: "Which word is used in a technical context?",
    opciones: ["Electric", "Electrical", "Electronic", "Electricity"],
    correctaTexto: "Electrical",
    explicacion: "'Electrical' se usa en contextos técnicos y generales (electrical engineer, electrical equipment)."
  },
  {
    id: 1023,
    tema: 0,
    tipo: "normal",
    texto: "What does 'electronic' describe?",
    opciones: ["General power systems", "Specific household devices", "Equipment using computer chips and transistors", "The branch of physics"],
    correctaTexto: "Equipment using computer chips and transistors",
    explicacion: "'Electronic' describe equipos que usan chips de computadora y transistores."
  },
  {
    id: 1024,
    tema: 0,
    tipo: "normal",
    texto: "Which is correct? 'I need to charge my ________ toothbrush.'",
    opciones: ["electrical", "electronic", "electric", "electricity"],
    correctaTexto: "electric",
    explicacion: "Usamos 'electric' para dispositivos específicos como 'electric toothbrush'."
  },
  {
    id: 1025,
    tema: 0,
    tipo: "normal",
    texto: "What does the word 'electronics' refer to?",
    opciones: ["A specific power tool", "Only devices using batteries", "The science and technology of electronic systems", "The cost of electricity"],
    correctaTexto: "The science and technology of electronic systems",
    explicacion: "'Electronics' se refiere a la rama de la ciencia y tecnología que estudia sistemas electrónicos."
  },

  // VOCABULARY: JOBS IN ELECTRICITY AND ELECTRONICS
  {
    id: 1026,
    tema: 0,
    tipo: "normal",
    texto: "What does an electrician do?",
    opciones: ["Develops software", "Plans, installs and maintains wiring systems", "Operates power plants", "Repairs satellite dishes"],
    correctaTexto: "Plans, installs and maintains wiring systems",
    explicacion: "Un electrician se encarga de planificar, instalar y mantener sistemas de cableado eléctrico."
  },
  {
    id: 1027,
    tema: 0,
    tipo: "normal",
    texto: "What is an apprentice?",
    opciones: ["A professional who works alone", "A person who works for another to learn a trade", "A student studying at university", "A technician who repairs electronics"],
    correctaTexto: "A person who works for another to learn a trade",
    explicacion: "Un apprentice es una persona que trabaja para otro para aprender un oficio."
  },
  {
    id: 1028,
    tema: 0,
    tipo: "normal",
    texto: "Where does an industrial electrician work?",
    opciones: ["In homes", "In offices", "In industrial facilities", "In shopping centers"],
    correctaTexto: "In industrial facilities",
    explicacion: "Un industrial electrician instala, mantiene y repara sistemas eléctricos en instalaciones industriales."
  },
  {
    id: 1029,
    tema: 0,
    tipo: "normal",
    texto: "What is the main responsibility of an electrical line worker?",
    opciones: ["Install appliances", "Maintain distribution lines and associated equipment", "Repair televisions", "Design power systems"],
    correctaTexto: "Maintain distribution lines and associated equipment",
    explicacion: "Un electrical line worker instala, mantiene y repara líneas de distribución de alta y baja tensión."
  },
  {
    id: 1030,
    tema: 0,
    tipo: "normal",
    texto: "What does a power plant operator do?",
    opciones: ["Installs wiring in homes", "Controls and maintains machinery to generate electricity", "Repairs consumer electronics", "Fits satellite dishes"],
    correctaTexto: "Controls and maintains machinery to generate electricity",
    explicacion: "Un power plant operator controla y mantiene la maquinaria para generar electricidad."
  },

  // ADVERBS OF FREQUENCY
  {
    id: 1031,
    tema: 0,
    tipo: "normal",
    texto: "In which of the following sentences is the adverb of frequency correctly placed?",
    opciones: ["They never are late for work.", "They are never late for work.", "They are late never for work.", "They late are never for work."],
    correctaTexto: "They are never late for work.",
    explicacion: "Los adverbios de frecuencia van después del verbo 'to be' en el presente simple."
  },
  {
    id: 1032,
    tema: 0,
    tipo: "normal",
    texto: "Complete: 'She ________ goes to the gym on Mondays.'",
    opciones: ["never", "always", "hardly ever", "sometimes"],
    correctaTexto: "always",
    explicacion: "Cualquiera de estos adverbios sería correcto, pero 'always' es el más fuerte para indicar regularidad."
  },
  {
    id: 1033,
    tema: 0,
    tipo: "normal",
    texto: "Which adverb means 'almost never'?",
    opciones: ["rarely", "hardly ever", "never", "sometimes"],
    correctaTexto: "hardly ever",
    explicacion: "'Hardly ever' significa 'casi nunca' y tiene el mismo significado que 'rarely'."
  },
  {
    id: 1034,
    tema: 0,
    tipo: "normal",
    texto: "Where should the adverb of frequency be placed in this sentence? '________'",
    opciones: ["Before the main verb in present simple", "After the main verb in present simple", "Before 'to be'", "After 'to be'"],
    correctaTexto: "Before the main verb in present simple",
    explicacion: "En present simple, los adverbios de frecuencia van antes del verbo principal."
  },
  {
    id: 1035,
    tema: 0,
    tipo: "normal",
    texto: "Order these adverbs from most to least frequent: often, always, sometimes, rarely",
    opciones: ["always, often, sometimes, rarely", "often, always, rarely, sometimes", "sometimes, often, always, rarely", "always, rarely, often, sometimes"],
    correctaTexto: "always, often, sometimes, rarely",
    explicacion: "El orden correcto es: always (siempre) > often (a menudo) > sometimes (a veces) > rarely (raramente)."
  },

  // MIXED GRAMMAR AND VOCABULARY
  {
    id: 1036,
    tema: 0,
    tipo: "normal",
    texto: "Which sentence uses 'electrical' correctly?",
    opciones: ["The electrical music was too loud.", "He bought an electrical chip.", "She's an electrical engineer.", "This phone is very electrical."],
    correctaTexto: "She's an electrical engineer.",
    explicacion: "'Electrical engineer' es el uso correcto de 'electrical' en un contexto técnico."
  },
  {
    id: 1037,
    tema: 0,
    tipo: "normal",
    texto: "Complete: '__________ is my favourite subject.' What word best completes?",
    opciones: ["Electric", "Electronic", "Electricity", "Electronics"],
    correctaTexto: "Electronics",
    explicacion: "'Electronics' (la ciencia y tecnología) es lo que se estudia como materia favorita."
  },
  {
    id: 1038,
    tema: 0,
    tipo: "normal",
    texto: "Which professional works in industrial environments with wiring systems?",
    opciones: ["Apprentice", "Power plant operator", "Industrial electrician", "Aerial technician"],
    correctaTexto: "Industrial electrician",
    explicacion: "Un industrial electrician instala y mantiene sistemas eléctricos en ambientes industriales."
  },
  {
    id: 1039,
    tema: 0,
    tipo: "normal",
    texto: "What kind of training does an apprentice receive?",
    opciones: ["Online-only education", "Hands-on learning from a professional", "Lectures in theory only", "Self-directed YouTube training"],
    correctaTexto: "Hands-on learning from a professional",
    explicacion: "Un apprentice recibe formación práctica y directa de un profesional experimentado."
  },
  {
    id: 1040,
    tema: 0,
    tipo: "normal",
    texto: "Which sentence correctly uses present simple with an adverb of frequency?",
    opciones: ["She go always to the gym.", "She goes always to the gym.", "She always goes to the gym.", "She goes to the gym always."],
    correctaTexto: "She always goes to the gym.",
    explicacion: "El adverbio de frecuencia va antes del verbo principal en present simple."
  },

  // ADDITIONAL QUESTIONS FOR COMPREHENSIVE COVERAGE
  {
    id: 1041,
    tema: 0,
    tipo: "normal",
    texto: "What is the difference between 'electric' and 'electrical'?",
    opciones: ["There is no difference", "Electric is for specific devices; electrical is for systems and contexts", "Electrical is only British", "They are completely interchangeable"],
    correctaTexto: "Electric is for specific devices; electrical is for systems and contexts",
    explicacion: "'Electric' se usa para dispositivos específicos; 'electrical' se usa en contextos técnicos y generales."
  },
  {
    id: 1042,
    tema: 0,
    tipo: "normal",
    texto: "Which sentence is in present continuous?",
    opciones: ["The electrician works in the building.", "The electrician is working in the building.", "The electrician work in the building.", "The electrician are working in the building."],
    correctaTexto: "The electrician is working in the building.",
    explicacion: "Present continuous: subject + is/are + verb-ing."
  },
  {
    id: 1043,
    tema: 0,
    tipo: "normal",
    texto: "'To have got' is used to express:",
    opciones: ["Actions in progress", "Possession and relationships", "General facts", "Past events"],
    correctaTexto: "Possession and relationships",
    explicacion: "'To have got' se usa para expresar posesión, relaciones, apariencia física e enfermedades."
  },
  {
    id: 1044,
    tema: 0,
    tipo: "normal",
    texto: "Complete: 'The technician ________ the electronic equipment now.'",
    opciones: ["repairs", "is repairing", "repair", "are repairing"],
    correctaTexto: "is repairing",
    explicacion: "Con 'now' usamos present continuous: is repairing."
  },
  {
    id: 1045,
    tema: 0,
    tipo: "normal",
    texto: "Which adverb of frequency goes with 'to be'?",
    opciones: ["After 'to be'", "Before 'to be'", "At the beginning of the sentence", "At the end of the sentence"],
    correctaTexto: "After 'to be'",
    explicacion: "Con 'to be', los adverbios de frecuencia van después del verbo (e.g., 'is always happy')."
  },
  {
    id: 1046,
    tema: 0,
    tipo: "normal",
    texto: "What is an 'electrical appliances repairer'?",
    opciones: ["A person who designs appliances", "A person who repairs electric or gas household appliances", "A person who sells appliances", "A person who manufactures appliances"],
    correctaTexto: "A person who repairs electric or gas household appliances",
    explicacion: "Un electrical appliances repairer repara, ajusta o instala todo tipo de aparatos eléctricos o de gas."
  },
  {
    id: 1047,
    tema: 0,
    tipo: "normal",
    texto: "Which tense describes habits and routines?",
    opciones: ["Present continuous", "Present simple", "Past simple", "Future simple"],
    correctaTexto: "Present simple",
    explicacion: "El present simple se usa para describir hábitos, rutinas y hechos generales."
  },
  {
    id: 1048,
    tema: 0,
    tipo: "normal",
    texto: "In the sentence 'I am studying electronics', 'am studying' is:",
    opciones: ["Present simple", "Present continuous", "Past continuous", "Future simple"],
    correctaTexto: "Present continuous",
    explicacion: "'Am studying' es la forma del present continuous para el pronombre 'I'."
  },
  {
    id: 1049,
    tema: 0,
    tipo: "normal",
    texto: "What does the term 'electronics' NOT include?",
    opciones: ["Computer chips", "Transistors", "Mechanical parts in simple machines", "Electronic circuits"],
    correctaTexto: "Mechanical parts in simple machines",
    explicacion: "'Electronics' se refiere específicamente a sistemas que usan chips y transistores, no a partes mecánicas simples."
  },
  {
    id: 1050,
    tema: 0,
    tipo: "normal",
    texto: "When is 'to have got' NOT used?",
    opciones: ["In British English", "In spoken contexts", "In past tense forms", "In informal speech"],
    correctaTexto: "In past tense forms",
    explicacion: "'To have got' solo se usa en present simple. Para otros tiempos, usamos 'to have'."
  }
];
