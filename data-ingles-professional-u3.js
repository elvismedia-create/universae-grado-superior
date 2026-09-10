// Unit 3: Exploring the past - 50 comprehensive questions
const TEMA_INGLES_PROFESSIONAL_U3_DATA = [
  // Past Simple - Regular verbs (5 questions)
  {
    id: 301,
    tema: "Past Simple - Regular verbs",
    tipo: "u3",
    texto: "Yesterday, I __________ my homework before dinner.",
    opciones: ["finish", "finished", "finishes", "am finishing"],
    correctaTexto: "finished",
    explicacion: "For regular verbs in Past Simple, add -ed to the base verb. 'Finished' is the correct form."
  },
  {
    id: 302,
    tema: "Past Simple - Regular verbs",
    tipo: "u3",
    texto: "They __________ the meeting last week without any problems.",
    opciones: ["organize", "organized", "organizes", "will organize"],
    correctaTexto: "organized",
    explicacion: "The verb 'organize' becomes 'organized' in Past Simple. The context 'last week' confirms we need past tense."
  },
  {
    id: 303,
    tema: "Past Simple - Regular verbs",
    tipo: "u3",
    texto: "She __________ her presentation very well during the conference.",
    opciones: ["deliver", "delivered", "delivers", "has delivered"],
    correctaTexto: "delivered",
    explicacion: "Regular verbs add -ed in Past Simple. 'Delivered' is the correct past tense form."
  },
  {
    id: 304,
    tema: "Past Simple - Regular verbs",
    tipo: "u3",
    texto: "We __________ at the hotel and then went to explore the city.",
    opciones: ["arrive", "arrived", "arrives", "are arriving"],
    correctaTexto: "arrived",
    explicacion: "The verb 'arrive' becomes 'arrived' in Past Simple (-ed ending)."
  },
  {
    id: 305,
    tema: "Past Simple - Regular verbs",
    tipo: "u3",
    texto: "The students __________ their exam last month.",
    opciones: ["pass", "passed", "passes", "have passed"],
    correctaTexto: "passed",
    explicacion: "For the verb 'pass', we add -ed to form the Past Simple: 'passed'."
  },

  // Past Simple - Irregular verbs (5 questions)
  {
    id: 306,
    tema: "Past Simple - Irregular verbs",
    tipo: "u3",
    texto: "I __________ the most amazing film last weekend.",
    opciones: ["see", "saw", "sees", "have seen"],
    correctaTexto: "saw",
    explicacion: "'See' is an irregular verb. Its past tense form is 'saw'."
  },
  {
    id: 307,
    tema: "Past Simple - Irregular verbs",
    tipo: "u3",
    texto: "He __________ to Paris three years ago for his job.",
    opciones: ["go", "went", "goes", "is going"],
    correctaTexto: "went",
    explicacion: "'Go' is irregular. The past tense is 'went'."
  },
  {
    id: 308,
    tema: "Past Simple - Irregular verbs",
    tipo: "u3",
    texto: "When she __________ the news, she was very happy.",
    opciones: ["hear", "heard", "hears", "has heard"],
    correctaTexto: "heard",
    explicacion: "'Hear' is an irregular verb. Its past form is 'heard'."
  },
  {
    id: 309,
    tema: "Past Simple - Irregular verbs",
    tipo: "u3",
    texto: "They __________ their car keys somewhere in the house yesterday.",
    opciones: ["find", "found", "finds", "have found"],
    correctaTexto: "found",
    explicacion: "'Find' is an irregular verb with the past tense form 'found'."
  },
  {
    id: 310,
    tema: "Past Simple - Irregular verbs",
    tipo: "u3",
    texto: "We __________ breakfast early in the morning before the meeting.",
    opciones: ["eat", "ate", "eats", "have eaten"],
    correctaTexto: "ate",
    explicacion: "'Eat' is irregular. The past tense is 'ate'."
  },

  // Verb 'To Be' in past tense (5 questions)
  {
    id: 311,
    tema: "Verb To Be - Past tense",
    tipo: "u3",
    texto: "The weather __________ very cold yesterday, so we stayed inside.",
    opciones: ["is", "was", "were", "will be"],
    correctaTexto: "was",
    explicacion: "With the singular subject 'weather', use 'was' (not 'were') in the past tense."
  },
  {
    id: 312,
    tema: "Verb To Be - Past tense",
    tipo: "u3",
    texto: "They __________ at the office all day last Monday.",
    opciones: ["was", "were", "is", "are"],
    correctaTexto: "were",
    explicacion: "With plural subject 'they', use 'were' in the past tense."
  },
  {
    id: 313,
    tema: "Verb To Be - Past tense",
    tipo: "u3",
    texto: "I __________ not happy with the results of the project.",
    opciones: ["am", "was", "were", "be"],
    correctaTexto: "was",
    explicacion: "With the singular subject 'I' in past tense, use 'was'."
  },
  {
    id: 314,
    tema: "Verb To Be - Past tense",
    tipo: "u3",
    texto: "__________ you at home when I called last night?",
    opciones: ["Was", "Were", "Are", "Is"],
    correctaTexto: "Were",
    explicacion: "With 'you' in past tense interrogative form, use 'Were'."
  },
  {
    id: 315,
    tema: "Verb To Be - Past tense",
    tipo: "u3",
    texto: "The students __________ not ready for the exam when it started.",
    opciones: ["was", "were", "is", "are"],
    correctaTexto: "were",
    explicacion: "With plural subject 'students', use 'were' in negative past tense."
  },

  // Used to (5 questions)
  {
    id: 316,
    tema: "Used to",
    tipo: "u3",
    texto: "I __________ wake up very early, but now I prefer to sleep late.",
    opciones: ["use to", "used to", "am used to", "would"],
    correctaTexto: "used to",
    explicacion: "'Used to' is used to talk about past habits or situations that are different now."
  },
  {
    id: 317,
    tema: "Used to",
    tipo: "u3",
    texto: "She __________ like coffee, but now she drinks it every day.",
    opciones: ["use to", "didn't use to", "doesn't use to", "won't use to"],
    correctaTexto: "didn't use to",
    explicacion: "For negative statements about past habits, use 'didn't use to'."
  },
  {
    id: 318,
    tema: "Used to",
    tipo: "u3",
    texto: "__________ you play tennis when you were younger?",
    opciones: ["Did you use to", "Do you use to", "Have you used to", "Are you used to"],
    correctaTexto: "Did you use to",
    explicacion: "To form questions with 'used to', use 'Did you use to'."
  },
  {
    id: 319,
    tema: "Used to",
    tipo: "u3",
    texto: "They __________ live in Madrid before they moved to Barcelona.",
    opciones: ["use to", "used to", "are used to", "will use to"],
    correctaTexto: "used to",
    explicacion: "'Used to' describes a past situation or location that is no longer true."
  },
  {
    id: 320,
    tema: "Used to",
    tipo: "u3",
    texto: "He __________ work for a bank, but now he works for a tech company.",
    opciones: ["use to", "used to", "am used to", "would work"],
    correctaTexto: "used to",
    explicacion: "'Used to' correctly expresses a past job that has changed."
  },

  // Past Continuous (5 questions)
  {
    id: 321,
    tema: "Past Continuous",
    tipo: "u3",
    texto: "While she __________ her breakfast, the phone rang.",
    opciones: ["was eating", "ate", "eats", "has eaten"],
    correctaTexto: "was eating",
    explicacion: "Past Continuous (was + -ing) describes an action in progress at a specific past moment."
  },
  {
    id: 322,
    tema: "Past Continuous",
    tipo: "u3",
    texto: "They __________ when we arrived at the party.",
    opciones: ["were dancing", "danced", "dance", "have danced"],
    correctaTexto: "were dancing",
    explicacion: "The action was already in progress when another event occurred; use Past Continuous."
  },
  {
    id: 323,
    tema: "Past Continuous",
    tipo: "u3",
    texto: "I __________ a book while the children were watching TV.",
    opciones: ["was reading", "read", "reads", "have read"],
    correctaTexto: "was reading",
    explicacion: "Two simultaneous past actions use Past Continuous: 'was reading' and 'were watching'."
  },
  {
    id: 324,
    tema: "Past Continuous",
    tipo: "u3",
    texto: "When the storm started, we __________ dinner.",
    opciones: ["were having", "had", "have", "will have"],
    correctaTexto: "were having",
    explicacion: "'Were having' (Past Continuous) shows the action was in progress when the storm started."
  },
  {
    id: 325,
    tema: "Past Continuous",
    tipo: "u3",
    texto: "What __________ you __________ at 8 PM last night?",
    opciones: ["were, doing", "did, do", "are, doing", "have, done"],
    correctaTexto: "were, doing",
    explicacion: "For Past Continuous questions, use 'were you doing' to ask about an action in progress."
  },

  // Present Perfect Simple (5 questions)
  {
    id: 326,
    tema: "Present Perfect Simple",
    tipo: "u3",
    texto: "I __________ to Madrid many times, and I love the city.",
    opciones: ["go", "have been", "went", "am going"],
    correctaTexto: "have been",
    explicacion: "'Have been' (Present Perfect) shows an experience with present relevance."
  },
  {
    id: 327,
    tema: "Present Perfect Simple",
    tipo: "u3",
    texto: "She __________ her homework already, so she can go out now.",
    opciones: ["finish", "has finished", "finished", "is finishing"],
    correctaTexto: "has finished",
    explicacion: "'Has finished' (Present Perfect with 'already') shows a completed action with present result."
  },
  {
    id: 328,
    tema: "Present Perfect Simple",
    tipo: "u3",
    texto: "__________ you ever __________ a live concert?",
    opciones: ["Have, watched", "Did, watch", "Do, watch", "Are, watching"],
    correctaTexto: "Have, watched",
    explicacion: "With 'ever', use Present Perfect: 'Have you ever watched'."
  },
  {
    id: 329,
    tema: "Present Perfect Simple",
    tipo: "u3",
    texto: "He __________ worked here __________ 2020, so he has five years of experience.",
    opciones: ["has, since", "has, for", "have, since", "have, for"],
    correctaTexto: "has, since",
    explicacion: "Use 'has' (singular) and 'since' with a specific year (2020)."
  },
  {
    id: 330,
    tema: "Present Perfect Simple",
    tipo: "u3",
    texto: "We __________ seen the movie yet, but we plan to watch it tomorrow.",
    opciones: ["have", "haven't", "has", "hasn't"],
    correctaTexto: "haven't",
    explicacion: "Negative Present Perfect with 'yet': 'haven't seen'."
  },

  // Past Simple vs Present Perfect (5 questions)
  {
    id: 331,
    tema: "Past Simple vs Present Perfect",
    tipo: "u3",
    texto: "She __________ her glasses yesterday when she dropped them.",
    opciones: ["broke", "has broken", "breaks", "is breaking"],
    correctaTexto: "broke",
    explicacion: "'Broke' (Past Simple) is correct because we specify when: yesterday."
  },
  {
    id: 332,
    tema: "Past Simple vs Present Perfect",
    tipo: "u3",
    texto: "He __________ his glasses, so he can't see properly.",
    opciones: ["broke", "has broken", "breaks", "break"],
    correctaTexto: "has broken",
    explicacion: "'Has broken' (Present Perfect) is correct - the action has present relevance."
  },
  {
    id: 333,
    tema: "Past Simple vs Present Perfect",
    tipo: "u3",
    texto: "I __________ for this company since 2019.",
    opciones: ["worked", "have worked", "works", "am working"],
    correctaTexto: "have worked",
    explicacion: "With 'since', use Present Perfect: 'have worked since 2019'."
  },
  {
    id: 334,
    tema: "Past Simple vs Present Perfect",
    tipo: "u3",
    texto: "Last month, she __________ a new job in the finance department.",
    opciones: ["starts", "has started", "started", "is starting"],
    correctaTexto: "started",
    explicacion: "'Started' (Past Simple) is correct with specific past time 'last month'."
  },
  {
    id: 335,
    tema: "Past Simple vs Present Perfect",
    tipo: "u3",
    texto: "__________ you finished the project? We need it by tomorrow.",
    opciones: ["Did", "Have", "Has", "Do"],
    correctaTexto: "Have",
    explicacion: "Without specific time reference, use Present Perfect: 'Have you finished'."
  },

  // Prepositions of place (5 questions)
  {
    id: 336,
    tema: "Prepositions of place",
    tipo: "u3",
    texto: "The coffee maker is __________ the kitchen counter.",
    opciones: ["at", "in", "on", "under"],
    correctaTexto: "on",
    explicacion: "Use 'on' for objects on top of a surface like a counter."
  },
  {
    id: 337,
    tema: "Prepositions of place",
    tipo: "u3",
    texto: "The water heater is installed __________ the bathroom.",
    opciones: ["at", "in", "on", "under"],
    correctaTexto: "in",
    explicacion: "Use 'in' for locations inside enclosed spaces like a bathroom."
  },
  {
    id: 338,
    tema: "Prepositions of place",
    tipo: "u3",
    texto: "The TV set is __________ the wall in the living room.",
    opciones: ["at", "in", "on", "under"],
    correctaTexto: "on",
    explicacion: "Use 'on' for items mounted or placed on a wall."
  },
  {
    id: 339,
    tema: "Prepositions of place",
    tipo: "u3",
    texto: "The children were playing __________ the table while dinner was being prepared.",
    opciones: ["at", "in", "under", "on"],
    correctaTexto: "under",
    explicacion: "Use 'under' for locations beneath objects."
  },
  {
    id: 340,
    tema: "Prepositions of place",
    tipo: "u3",
    texto: "The mirror is __________ the sink in the bathroom.",
    opciones: ["at", "in", "on", "in front of"],
    correctaTexto: "in front of",
    explicacion: "'In front of' correctly describes the mirror's position facing the sink."
  },

  // Vocabulary - Plugs and lamps (5 questions)
  {
    id: 341,
    tema: "Vocabulary - Plugs and lamps",
    tipo: "u3",
    texto: "What is the main function of a power plug?",
    opciones: ["To generate electricity", "To store electrical energy", "To connect a device to the electrical power supply", "To replace a battery"],
    correctaTexto: "To connect a device to the electrical power supply",
    explicacion: "A plug is the movable connector that fits into a socket to supply power to a device."
  },
  {
    id: 342,
    tema: "Vocabulary - Plugs and lamps",
    tipo: "u3",
    texto: "Which type of bulb is the most energy-efficient and lasts the longest?",
    opciones: ["Incandescent bulb", "Halogen bulb", "LED bulb", "Fluorescent bulb"],
    correctaTexto: "LED bulb",
    explicacion: "LED bulbs are the most energy-efficient and durable, lasting up to 25-35 years."
  },
  {
    id: 343,
    tema: "Vocabulary - Plugs and lamps",
    tipo: "u3",
    texto: "What is a socket?",
    opciones: ["A movable connector on a device", "A fixed connection point for plugs on a building", "A replaceable component of a lamp", "A rechargeable appliance"],
    correctaTexto: "A fixed connection point for plugs on a building",
    explicacion: "A socket is fixed on equipment or building structure and receives the electrical plug."
  },
  {
    id: 344,
    tema: "Vocabulary - Plugs and lamps",
    tipo: "u3",
    texto: "Which plug type is commonly used in the United States and Japan?",
    opciones: ["Type C", "Type F", "Type A", "Type G"],
    correctaTexto: "Type A",
    explicacion: "Type A plugs are standard in the United States, Canada, Mexico, and Japan."
  },
  {
    id: 345,
    tema: "Vocabulary - Plugs and lamps",
    tipo: "u3",
    texto: "What component allows an LED to produce light?",
    opciones: ["Halogen gas", "Mercury vapor", "Electric current passing through a microchip", "Fluorescent coating"],
    correctaTexto: "Electric current passing through a microchip",
    explicacion: "LEDs produce light through electric current passing through a semiconductor microchip."
  },

  // Vocabulary - Household appliances (5 questions)
  {
    id: 346,
    tema: "Vocabulary - Household appliances",
    tipo: "u3",
    texto: "Which appliance is classified as a 'major appliance' or 'white good'?",
    opciones: ["Coffee maker", "Toaster", "Refrigerator", "Microwave"],
    correctaTexto: "Refrigerator",
    explicacion: "Major appliances or white goods include fridges, ovens, washing machines, and dishwashers."
  },
  {
    id: 347,
    tema: "Vocabulary - Household appliances",
    tipo: "u3",
    texto: "What is the main purpose of a dishwasher?",
    opciones: ["To cook food", "To wash and clean dishes automatically", "To store food", "To heat water"],
    correctaTexto: "To wash and clean dishes automatically",
    explicacion: "A dishwasher is a major appliance designed to automatically wash and dry dishes."
  },
  {
    id: 348,
    tema: "Vocabulary - Household appliances",
    tipo: "u3",
    texto: "Which of these is a small appliance?",
    opciones: ["Refrigerator", "Dishwasher", "Washing machine", "Kettle"],
    correctaTexto: "Kettle",
    explicacion: "A kettle is a small household appliance, unlike fridges, dishwashers, and washing machines."
  },
  {
    id: 349,
    tema: "Vocabulary - Household appliances",
    tipo: "u3",
    texto: "What are 'brown goods' in the context of household appliances?",
    opciones: ["Appliances used for cooking", "Consumer electronics like TVs and video game consoles", "Major appliances like ovens", "Small appliances like kettles"],
    correctaTexto: "Consumer electronics like TVs and video game consoles",
    explicacion: "Brown goods refer to consumer electronics for communication and entertainment, like TVs and gaming consoles."
  },
  {
    id: 350,
    tema: "Vocabulary - Household appliances",
    tipo: "u3",
    texto: "Which appliance is typically used to remove wrinkles from clothes?",
    opciones: ["Washing machine", "Dryer", "Iron", "Oven"],
    correctaTexto: "Iron",
    explicacion: "An iron is used to remove wrinkles from clothes by applying heat and pressure."
  },

  // Mixed content (5 questions)
  {
    id: 351,
    tema: "Mixed - Grammar & Vocabulary",
    tipo: "u3",
    texto: "When I arrived home, my children __________ in the living room __________ the TV.",
    opciones: ["were sitting, watching", "sat, watched", "have sat, watched", "are sitting, watching"],
    correctaTexto: "were sitting, watching",
    explicacion: "Two past continuous actions happening simultaneously: 'were sitting' and 'watching'."
  },
  {
    id: 352,
    tema: "Mixed - Grammar & Vocabulary",
    tipo: "u3",
    texto: "What __________ you doing last night at 8 PM?",
    opciones: ["do", "did", "were", "have"],
    correctaTexto: "were",
    explicacion: "Past Continuous question: 'What were you doing' asks about an action in progress at a specific past time."
  },
  {
    id: 353,
    tema: "Mixed - Grammar & Vocabulary",
    tipo: "u3",
    texto: "The microwave __________ broken yesterday, so we __________ use it today.",
    opciones: ["got, can't", "gets, can't", "has gotten, couldn't", "broke, couldn't"],
    correctaTexto: "got, can't",
    explicacion: "'Got' (Past Simple) explains that it became broken, and 'can't' shows current result."
  },
  {
    id: 354,
    tema: "Mixed - Grammar & Vocabulary",
    tipo: "u3",
    texto: "She __________ never __________ to organize her kitchen appliances properly.",
    opciones: ["has, managed", "have, managed", "did, manage", "was, managing"],
    correctaTexto: "has, managed",
    explicacion: "Present Perfect with 'never': 'has never managed'."
  },
  {
    id: 355,
    tema: "Mixed - Grammar & Vocabulary",
    tipo: "u3",
    texto: "While the kettle __________ boiling, the phone rang, and I __________ didn't answer it.",
    opciones: ["was, but", "were, and", "is, so", "had been, yet"],
    correctaTexto: "was, but",
    explicacion: "Past Continuous 'was boiling' with past event, and 'but' contrasts the actions."
  }
];

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEMA_INGLES_PROFESSIONAL_U3_DATA;
}
