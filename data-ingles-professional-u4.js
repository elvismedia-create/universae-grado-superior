// Unit 4: What's next? - 50 comprehensive questions
const TEMA_INGLES_PROFESSIONAL_U4_DATA = [
  // Comparative adjectives (5 questions)
  {
    id: 401,
    tema: "Comparative adjectives",
    tipo: "u4",
    texto: "This hotel is __________ than the one we stayed in last year.",
    opciones: ["more expensive", "most expensive", "expensiver", "expensive"],
    correctaTexto: "more expensive",
    explicacion: "Long adjectives use 'more' for comparison: more expensive than..."
  },
  {
    id: 402,
    tema: "Comparative adjectives",
    tipo: "u4",
    texto: "The new laptop is __________ than the old one.",
    opciones: ["more faster", "faster", "the fastest", "more fast"],
    correctaTexto: "faster",
    explicacion: "Short adjectives add -er: fast → faster."
  },
  {
    id: 403,
    tema: "Comparative adjectives",
    tipo: "u4",
    texto: "These computers are __________ than those models.",
    opciones: ["more efficient", "most efficient", "efficientier", "the efficient"],
    correctaTexto: "more efficient",
    explicacion: "Long adjectives use 'more' for comparisons between two things."
  },
  {
    id: 404,
    tema: "Comparative adjectives",
    tipo: "u4",
    texto: "The software is __________ to use than before.",
    opciones: ["more easier", "easier", "easiest", "the easier"],
    correctaTexto: "easier",
    explicacion: "Easy becomes easier (add -er for short adjectives)."
  },
  {
    id: 405,
    tema: "Comparative adjectives",
    tipo: "u4",
    texto: "This method is __________ and __________ than the previous one.",
    opciones: ["simpler, faster", "more simple, more faster", "simplest, fastest", "more simple, faster"],
    correctaTexto: "simpler, faster",
    explicacion: "Both short adjectives add -er: simple → simpler, fast → faster."
  },

  // Superlative adjectives (5 questions)
  {
    id: 406,
    tema: "Superlative adjectives",
    tipo: "u4",
    texto: "This is __________ solution for the problem.",
    opciones: ["the easiest", "the most easy", "easier", "more easy"],
    correctaTexto: "the easiest",
    explicacion: "Short adjectives add -est for superlatives: easy → the easiest."
  },
  {
    id: 407,
    tema: "Superlative adjectives",
    tipo: "u4",
    texto: "That was __________ movie I have ever seen!",
    opciones: ["funnier", "the most funny", "the funniest", "funnier than"],
    correctaTexto: "the funniest",
    explicacion: "Short adjectives form superlatives with -est: the funniest."
  },
  {
    id: 408,
    tema: "Superlative adjectives",
    tipo: "u4",
    texto: "She has __________ computer in the office.",
    opciones: ["the most powerful", "more powerful", "the powerfulest", "powerful"],
    correctaTexto: "the most powerful",
    explicacion: "Long adjectives use 'the most' for superlatives: the most powerful."
  },
  {
    id: 409,
    tema: "Superlative adjectives",
    tipo: "u4",
    texto: "This is __________ way to complete the task efficiently.",
    opciones: ["the most efficient", "most efficient", "the efficienter", "the more efficient"],
    correctaTexto: "the most efficient",
    explicacion: "Long adjectives need 'the most': the most efficient."
  },
  {
    id: 410,
    tema: "Superlative adjectives",
    tipo: "u4",
    texto: "Who wrote __________ book in the series?",
    opciones: ["the better", "the best", "more best", "the goodest"],
    correctaTexto: "the best",
    explicacion: "'Good' is irregular: good → better → the best."
  },

  // Irregular adjectives (5 questions)
  {
    id: 411,
    tema: "Irregular adjectives",
    tipo: "u4",
    texto: "Which of these is an irregular adjective?",
    opciones: ["taller", "better", "happier", "slower"],
    correctaTexto: "better",
    explicacion: "'Better' is the comparative form of 'good', which is irregular."
  },
  {
    id: 412,
    tema: "Irregular adjectives",
    tipo: "u4",
    texto: "This result is __________ than I expected.",
    opciones: ["gooder", "better", "more good", "goodest"],
    correctaTexto: "better",
    explicacion: "'Good' → 'better' (irregular comparative form)."
  },
  {
    id: 413,
    tema: "Irregular adjectives",
    tipo: "u4",
    texto: "That was __________ decision we could have made.",
    opciones: ["the worst", "the badest", "worse", "more bad"],
    correctaTexto: "the worst",
    explicacion: "'Bad' is irregular: bad → worse → the worst."
  },
  {
    id: 414,
    tema: "Irregular adjectives",
    tipo: "u4",
    texto: "The new office is __________ from the city center than the old one.",
    opciones: ["more far", "farther", "the furthest", "more farther"],
    correctaTexto: "farther",
    explicacion: "'Far' is irregular: far → farther/further → farthest/furthest."
  },
  {
    id: 415,
    tema: "Irregular adjectives",
    tipo: "u4",
    texto: "This is __________ information we could find on the topic.",
    opciones: ["the littler", "the least", "less", "the lesser"],
    correctaTexto: "the least",
    explicacion: "'Little' is irregular: little → less → the least."
  },

  // Prepositions of movement (5 questions)
  {
    id: 416,
    tema: "Prepositions of movement",
    tipo: "u4",
    texto: "They cycled __________ the park to arrive at the lake.",
    opciones: ["under", "into", "on", "across"],
    correctaTexto: "across",
    explicacion: "'Across' indicates movement from one side to another."
  },
  {
    id: 417,
    tema: "Prepositions of movement",
    tipo: "u4",
    texto: "Fill in the gap with the correct preposition: He walked __________ the street to reach his friend's house.",
    opciones: ["into", "across", "under", "behind"],
    correctaTexto: "across",
    explicacion: "'Across' is used for movement from one side of a street to the other."
  },
  {
    id: 418,
    tema: "Prepositions of movement",
    tipo: "u4",
    texto: "She ran __________ the stairs when she heard the alarm.",
    opciones: ["across", "into", "up", "through"],
    correctaTexto: "up",
    explicacion: "'Up' indicates upward movement, especially on stairs."
  },
  {
    id: 419,
    tema: "Prepositions of movement",
    tipo: "u4",
    texto: "The car drove __________ the tunnel.",
    opciones: ["across", "through", "onto", "under"],
    correctaTexto: "through",
    explicacion: "'Through' means moving from one side to another within a space."
  },
  {
    id: 420,
    tema: "Prepositions of movement",
    tipo: "u4",
    texto: "The plane flew __________ the clouds.",
    opciones: ["across", "over", "through", "into"],
    correctaTexto: "over",
    explicacion: "'Over' indicates movement above something."
  },

  // Expressing purpose - Gerund and infinitive (5 questions)
  {
    id: 421,
    tema: "Expressing purpose - Gerund and infinitive",
    tipo: "u4",
    texto: "She __________ reading books in her spare time.",
    opciones: ["enjoys to read", "enjoys reading", "enjoy reading", "enjoys read"],
    correctaTexto: "enjoys reading",
    explicacion: "After 'enjoys', use gerund (verb + -ing): enjoys reading."
  },
  {
    id: 422,
    tema: "Expressing purpose - Gerund and infinitive",
    tipo: "u4",
    texto: "He __________ to leave early for the meeting.",
    opciones: ["decided leaving", "decided to leave", "decides to leave", "decided leave"],
    correctaTexto: "decided to leave",
    explicacion: "After 'decided', use infinitive: decided to leave."
  },
  {
    id: 423,
    tema: "Expressing purpose - Gerund and infinitive",
    tipo: "u4",
    texto: "I __________ going to the conference next month.",
    opciones: ["consider to go", "consider going", "considers going", "consider go"],
    correctaTexto: "consider going",
    explicacion: "After 'consider', use gerund: consider going."
  },
  {
    id: 424,
    tema: "Expressing purpose - Gerund and infinitive",
    tipo: "u4",
    texto: "She __________ to improve her English skills.",
    opciones: ["wants learning", "wants to learn", "want to learn", "wants learn"],
    correctaTexto: "wants to learn",
    explicacion: "After 'wants', use infinitive: wants to learn."
  },
  {
    id: 425,
    tema: "Expressing purpose - Gerund and infinitive",
    tipo: "u4",
    texto: "They __________ spending time working on this project.",
    opciones: ["avoid to spend", "avoid spending", "avoids spending", "avoid spend"],
    correctaTexto: "avoid spending",
    explicacion: "After 'avoid', use gerund: avoid spending."
  },

  // Expressing purpose - to vs for (5 questions)
  {
    id: 426,
    tema: "Expressing purpose - to vs for",
    tipo: "u4",
    texto: "This tool is useful __________ cutting paper.",
    opciones: ["in", "to", "for", "by"],
    correctaTexto: "for",
    explicacion: "Use 'for' + gerund to describe the general purpose or function: for cutting."
  },
  {
    id: 427,
    tema: "Expressing purpose - to vs for",
    tipo: "u4",
    texto: "Which sentence correctly uses 'to' or 'for' to express purpose?",
    opciones: ["This book is too difficult for understand.", "He is studying to improve his English.", "She bought a cake to her sister.", "They left early for catch the train."],
    correctaTexto: "He is studying to improve his English.",
    explicacion: "'To' + infinitive explains why we do something: to improve."
  },
  {
    id: 428,
    tema: "Expressing purpose - to vs for",
    tipo: "u4",
    texto: "I study __________ improve my knowledge.",
    opciones: ["for", "to", "in", "by"],
    correctaTexto: "to",
    explicacion: "Use 'to' + verb to explain why we do something: to improve."
  },
  {
    id: 429,
    tema: "Expressing purpose - to vs for",
    tipo: "u4",
    texto: "I'm sorry __________ being late to the meeting.",
    opciones: ["to", "for", "in", "by"],
    correctaTexto: "for",
    explicacion: "Use 'for' + gerund: for being late."
  },
  {
    id: 430,
    tema: "Expressing purpose - to vs for",
    tipo: "u4",
    texto: "This book is __________ beginners.",
    opciones: ["to", "for", "in", "by"],
    correctaTexto: "for",
    explicacion: "Use 'for' + noun to explain the general purpose: for beginners."
  },

  // The Imperative (5 questions)
  {
    id: 431,
    tema: "The Imperative",
    tipo: "u4",
    texto: "Choose the correct imperative sentence:",
    opciones: ["Turn left.", "You must turn left.", "Turn leave now.", "You turned left now."],
    correctaTexto: "Turn left.",
    explicacion: "Imperative sentences use the base verb form for orders: Turn left."
  },
  {
    id: 432,
    tema: "The Imperative",
    tipo: "u4",
    texto: "__________ the door, please.",
    opciones: ["You close", "Close", "Closes", "To close"],
    correctaTexto: "Close",
    explicacion: "Imperative uses base verb: Close the door."
  },
  {
    id: 433,
    tema: "The Imperative",
    tipo: "u4",
    texto: "__________ be late for the meeting.",
    opciones: ["Don't", "Doesn't", "Not", "Didn't"],
    correctaTexto: "Don't",
    explicacion: "Negative imperative: Don't be late."
  },
  {
    id: 434,
    tema: "The Imperative",
    tipo: "u4",
    texto: "__________ your computer before leaving.",
    opciones: ["Turn off", "Turns off", "To turn off", "Turning off"],
    correctaTexto: "Turn off",
    explicacion: "Imperative for instructions: Turn off your computer."
  },
  {
    id: 435,
    tema: "The Imperative",
    tipo: "u4",
    texto: "__________ careful when handling the equipment.",
    opciones: ["Be", "Is", "Being", "To be"],
    correctaTexto: "Be",
    explicacion: "Imperative for advice: Be careful."
  },

  // Future Simple (5 questions)
  {
    id: 436,
    tema: "Future Simple",
    tipo: "u4",
    texto: "She __________ you as soon as she arrives.",
    opciones: ["will called", "is calling", "calls", "will call"],
    correctaTexto: "will call",
    explicacion: "Future Simple: will + base verb. 'Will call' is the correct form."
  },
  {
    id: 437,
    tema: "Future Simple",
    tipo: "u4",
    texto: "I __________ help you with the project.",
    opciones: ["will helps", "will help", "helps", "am helping"],
    correctaTexto: "will help",
    explicacion: "Future Simple: will + base verb (not 'will helps')."
  },
  {
    id: 438,
    tema: "Future Simple",
    tipo: "u4",
    texto: "They __________ arrive tomorrow morning.",
    opciones: ["will to arrive", "will arrive", "arrives", "arriving"],
    correctaTexto: "will arrive",
    explicacion: "Future Simple: will + base verb: will arrive."
  },
  {
    id: 439,
    tema: "Future Simple",
    tipo: "u4",
    texto: "__________ you attend the conference?",
    opciones: ["Will", "Are you", "Do you", "Does"],
    correctaTexto: "Will",
    explicacion: "Future Simple question: Will you attend...?"
  },
  {
    id: 440,
    tema: "Future Simple",
    tipo: "u4",
    texto: "The software __________ available next month.",
    opciones: ["will be", "is", "will being", "being"],
    correctaTexto: "will be",
    explicacion: "Future Simple with 'be': will be available."
  },

  // Going to for future plans (5 questions)
  {
    id: 441,
    tema: "Going to for future plans",
    tipo: "u4",
    texto: "Choose the correct question using going to for future plans:",
    opciones: ["Are they going to visit the museum tomorrow?", "Are they going visit the museum tomorrow?", "They are going to visit the museum tomorrow?", "They going to visit the museum tomorrow?"],
    correctaTexto: "Are they going to visit the museum tomorrow?",
    explicacion: "'Going to' question: Are they going to visit...?"
  },
  {
    id: 442,
    tema: "Going to for future plans",
    tipo: "u4",
    texto: "She __________ travel next summer.",
    opciones: ["is going to", "is go to", "going to", "goes to"],
    correctaTexto: "is going to",
    explicacion: "'Going to' for plans: is going to travel."
  },
  {
    id: 443,
    tema: "Going to for future plans",
    tipo: "u4",
    texto: "They __________ start the project next week.",
    opciones: ["are going to", "are go to", "going to", "goes to"],
    correctaTexto: "are going to",
    explicacion: "'Going to' with plural: are going to start."
  },
  {
    id: 444,
    tema: "Going to for future plans",
    tipo: "u4",
    texto: "__________ you __________ the new software?",
    opciones: ["Are, going to use", "Is, going to use", "Do, going to use", "Will, going to use"],
    correctaTexto: "Are, going to use",
    explicacion: "'Going to' question: Are you going to use...?"
  },
  {
    id: 445,
    tema: "Going to for future plans",
    tipo: "u4",
    texto: "I __________ stay at home this weekend.",
    opciones: ["am going to", "am go to", "going to", "will to"],
    correctaTexto: "am going to",
    explicacion: "'Going to' for plans: am going to stay."
  },

  // Vocabulary - Computer components and hardware (5 questions)
  {
    id: 446,
    tema: "Vocabulary - Computer components",
    tipo: "u4",
    texto: "What are the two main parts of a computer system?",
    opciones: ["RAM and CPU", "Hardware and software", "Monitor and keyboard", "Input and output"],
    correctaTexto: "Hardware and software",
    explicacion: "A computer system consists of hardware (physical components) and software (instructions)."
  },
  {
    id: 447,
    tema: "Vocabulary - Computer components",
    tipo: "u4",
    texto: "What does the CPU do in a computer system?",
    opciones: ["Processes instructions and controls other components", "Powers the monitor", "Stores documents and files", "Outputs sound"],
    correctaTexto: "Processes instructions and controls other components",
    explicacion: "The CPU is the most essential component; it processes instructions and controls operations."
  },
  {
    id: 448,
    tema: "Vocabulary - Computer components",
    tipo: "u4",
    texto: "What type of memory stores data used by the operating system and software?",
    opciones: ["Hard drive", "Flash memory", "RAM", "CPU"],
    correctaTexto: "RAM",
    explicacion: "RAM (Random Access Memory) stores data for the operating system and applications."
  },
  {
    id: 449,
    tema: "Vocabulary - Computer components",
    tipo: "u4",
    texto: "Which device is used to enter data into a computer?",
    opciones: ["Speaker", "Monitor", "Keyboard", "Printer"],
    correctaTexto: "Keyboard",
    explicacion: "A keyboard is an input device used to enter data and commands."
  },
  {
    id: 450,
    tema: "Vocabulary - Computer components",
    tipo: "u4",
    texto: "Which component displays images on a screen?",
    opciones: ["CPU", "Sound card", "Video card", "Flash memory"],
    correctaTexto: "Video card",
    explicacion: "The video card is responsible for displaying graphics and images on the monitor."
  }
];

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEMA_INGLES_PROFESSIONAL_U4_DATA;
}
