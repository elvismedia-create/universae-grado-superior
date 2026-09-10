// UNIT 5: What would you do if...? - 50 preguntas
const TEMA_INGLES_PROFESSIONAL_U5_DATA = [
  // ===== ADJECTIVES ENDING IN -ED & -ING (5 questions) =====
  {
    id: 5001,
    tema: "Adjectives ending in -ed & -ing",
    tipo: "multiple",
    texto: "My boss was very _______ when I made a mistake. He was not angry but just a bit frustrated.",
    opciones: ["boring", "bored", "excited", "exciting"],
    correctaTexto: "bored",
    explicacion: "We use -ed adjectives to describe how someone FEELS. Bored = how the person feels. Boring = what causes the feeling."
  },
  {
    id: 5002,
    tema: "Adjectives ending in -ed & -ing",
    tipo: "multiple",
    texto: "The seminar was so _______ that I fell asleep! I couldn't stay awake.",
    opciones: ["tired", "tiring", "interested", "interesting"],
    correctaTexto: "boring",
    explicacion: "Boring is -ing form because it describes the QUALITY of the seminar itself (what causes boredom). The seminar was uninteresting and made people tired."
  },
  {
    id: 5003,
    tema: "Adjectives ending in -ed & -ing",
    tipo: "multiple",
    texto: "She was so _______ about the vacation that she couldn't sleep the night before.",
    opciones: ["excited", "exciting", "worried", "worrying"],
    correctaTexto: "excited",
    explicacion: "-ed form (excited) = how someone feels. -ing form (exciting) = what causes the feeling. She felt excited because the vacation was exciting."
  },
  {
    id: 5004,
    tema: "Adjectives ending in -ed & -ing",
    tipo: "multiple",
    texto: "This software is very _______. It takes forever to load, and everyone gets _______ waiting for it.",
    opciones: ["slow/frustrated", "slowly/frustrated", "slow/frustrating", "slowly/frustrating"],
    correctaTexto: "slow/frustrating",
    explicacion: "Slow = adjective describing the software. Frustrating = -ing form describing what causes frustration in people."
  },
  {
    id: 5005,
    tema: "Adjectives ending in -ed & -ing",
    tipo: "multiple",
    texto: "The students were _______ after the difficult exam. Some felt _______ about their performance.",
    opciones: ["exhausted/disappointed", "exhausting/disappointed", "exhausted/disappointing", "exhausting/disappointing"],
    correctaTexto: "exhausted/disappointed",
    explicacion: "Exhausted & Disappointed = -ed forms describe how students FEEL. Both describe their emotional state after the exam."
  },

  // ===== TOO VS. ENOUGH (5 questions) =====
  {
    id: 5006,
    tema: "Too vs. Enough",
    tipo: "multiple",
    texto: "This laptop is _______ expensive for me. I can't afford it because the price is _______ high.",
    opciones: ["too/too", "enough/enough", "too/enough", "enough/too"],
    correctaTexto: "too/too",
    explicacion: "Too + adjective = more than needed (negative). This means: too expensive, price is too high (both = negative, more than we want)."
  },
  {
    id: 5007,
    tema: "Too vs. Enough",
    tipo: "multiple",
    texto: "We don't have _______ money _______ buy the equipment. We need _______ funding.",
    opciones: ["enough/to/more", "too/to/less", "enough/for/more", "too/for/less"],
    correctaTexto: "enough/to/buy",
    explicacion: "Enough + noun + to-infinitive = not sufficient. 'Enough money to buy' = sufficient quantity to perform the action."
  },
  {
    id: 5008,
    tema: "Too vs. Enough",
    tipo: "multiple",
    texto: "The room is _______ small for all the equipment. There is _______ space.",
    opciones: ["too/enough", "enough/too", "too/not enough", "enough/not too"],
    correctaTexto: "too/not enough",
    explicacion: "Too small = more limited than we want. Not enough space = insufficient quantity of space."
  },
  {
    id: 5009,
    tema: "Too vs. Enough",
    tipo: "multiple",
    texto: "Your resume has _______ information. It's _______ detailed. We need more examples.",
    opciones: ["not enough/not too", "not enough/too", "enough/enough", "too/enough"],
    correctaTexto: "not enough/not too",
    explicacion: "Not enough information = insufficient. Not too detailed = acceptable level of detail (but we need more examples specifically)."
  },
  {
    id: 5010,
    tema: "Too vs. Enough",
    tipo: "multiple",
    texto: "The presentation was _______ long and the slides had _______ text. We couldn't read everything.",
    opciones: ["too/enough", "enough/too much", "too/too much", "enough/enough"],
    correctaTexto: "too/too much",
    explicacion: "Too + adjective (too long). Too much + uncountable noun (too much text). Both express excess/more than needed."
  },

  // ===== DEMONSTRATIVES: THIS/THAT/THESE/THOSE (5 questions) =====
  {
    id: 5011,
    tema: "Demonstratives",
    tipo: "multiple",
    texto: "_______ laptop here is mine, but _______ laptop over there is yours.",
    opciones: ["This/That", "That/This", "These/Those", "That/These"],
    correctaTexto: "This/That",
    explicacion: "This = near the speaker. That = far from the speaker. This laptop (near me) vs That laptop (near you, far from me)."
  },
  {
    id: 5012,
    tema: "Demonstratives",
    tipo: "multiple",
    texto: "_______ cables in my bag are damaged. _______ cables on the shelf are fine.",
    opciones: ["That/These", "This/Those", "These/Those", "Those/These"],
    correctaTexto: "These/Those",
    explicacion: "These = plural, near the speaker (cables in MY bag). Those = plural, far from speaker (cables on the shelf)."
  },
  {
    id: 5013,
    tema: "Demonstratives",
    tipo: "multiple",
    texto: "Do you see _______ building across the street? _______ is the main office.",
    opciones: ["that/This", "this/That", "these/This", "those/That"],
    correctaTexto: "that/That",
    explicacion: "That = singular, far from speaker (building across street). That (again) refers to the same building = appropriate pronoun."
  },
  {
    id: 5014,
    tema: "Demonstratives",
    tipo: "multiple",
    texto: "Hold _______ screwdriver and pass me _______ one next to you.",
    opciones: ["this/that", "that/this", "these/those", "those/these"],
    correctaTexto: "this/that",
    explicacion: "This = near me (holding). That = near you (next to you = far from me). Action-based proximity."
  },
  {
    id: 5015,
    tema: "Demonstratives",
    tipo: "multiple",
    texto: "_______ photos from yesterday are blurry, but _______ ones I took today are perfect.",
    opciones: ["These/those", "Those/these", "This/that", "That/this"],
    correctaTexto: "Those/these",
    explicacion: "Those = past reference (yesterday = more distant in time). These = recent/present (today = near in time)."
  },

  // ===== RELATIVE PRONOUNS & CLAUSES (10 questions) =====
  {
    id: 5016,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "The engineer _______ designed this system is very experienced.",
    opciones: ["who", "which", "that", "whose"],
    correctaTexto: "who",
    explicacion: "Who = relative pronoun for PEOPLE. The engineer (person) who designed this system. 'That' also works for people."
  },
  {
    id: 5017,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "The software _______ we use every day has many updates.",
    opciones: ["who", "which", "whom", "where"],
    correctaTexto: "which",
    explicacion: "Which = for THINGS (software). We use = object in the clause, so we need 'which' (object form for things)."
  },
  {
    id: 5018,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "Do you remember the day _______ we had the power outage?",
    opciones: ["who", "which", "when", "where"],
    correctaTexto: "when",
    explicacion: "When = relative adverb for TIME expressions. The day = time reference. When = instead of 'on which' or similar."
  },
  {
    id: 5019,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "The factory _______ they built ten years ago is now closed.",
    opciones: ["who", "which", "where", "that"],
    correctaTexto: "which",
    explicacion: "Which/That = for THINGS. Factory = thing (noun). Which they built = passive-style relative clause."
  },
  {
    id: 5020,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "The person _______ phone is ringing should answer it.",
    opciones: ["who", "whose", "which", "that"],
    correctaTexto: "whose",
    explicacion: "Whose = possessive relative pronoun. Whose phone = the phone belonging to which person. Shows possession/relationship."
  },
  {
    id: 5021,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "This is the office _______ I work every day. It's very modern.",
    opciones: ["who", "which", "where", "that"],
    correctaTexto: "where",
    explicacion: "Where = relative adverb for PLACE. The office = place reference. I work every day IN the office = 'where' = 'in which'."
  },
  {
    id: 5022,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "The technician _______ helped us fix the system is very professional.",
    opciones: ["who", "that", "which", "whom"],
    correctaTexto: "who",
    explicacion: "Who = subject relative pronoun for people. The technician (person) who helped us = the person performed the action."
  },
  {
    id: 5023,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "The policy, _______ was updated last month, now requires all employees to report incidents.",
    opciones: ["who", "that", "which", "where"],
    correctaTexto: "which",
    explicacion: "Non-defining relative clause (with commas) = 'which' not 'that'. Policy = thing. Which = introduces extra information."
  },
  {
    id: 5024,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "The machine _______ broke down yesterday needs immediate repair.",
    opciones: ["who", "what", "that", "where"],
    correctaTexto: "that",
    explicacion: "That/Which = for things. Defining clause (no commas) = 'that' preferred. That broke down = subject of clause."
  },
  {
    id: 5025,
    tema: "Relative Pronouns & Clauses",
    tipo: "multiple",
    texto: "The company for _______ I work has excellent benefits.",
    opciones: ["that", "which", "whom", "who"],
    correctaTexto: "which",
    explicacion: "Preposition + relative pronoun = 'which' for things. For which = 'for what company' = formal/correct structure."
  },

  // ===== CONDITIONAL SENTENCES TYPE 0 (5 questions) =====
  {
    id: 5026,
    tema: "Conditional Sentences Type 0",
    tipo: "multiple",
    texto: "If you heat water to 100°C, it _______.",
    opciones: ["will boil", "boils", "would boil", "boiled"],
    correctaTexto: "boils",
    explicacion: "Type 0 = General truth/Law of nature. If + Present Simple, Present Simple. This is always true (scientific fact)."
  },
  {
    id: 5027,
    tema: "Conditional Sentences Type 0",
    tipo: "multiple",
    texto: "If the soil _______ too acidic, most plants don't grow well.",
    opciones: ["is", "was", "will be", "would be"],
    correctaTexto: "is",
    explicacion: "Type 0 = Facts/universal truths. If + Present Simple structure. Is too acidic = current/ongoing condition."
  },
  {
    id: 5028,
    tema: "Conditional Sentences Type 0",
    tipo: "multiple",
    texto: "If you mix red and blue paint, you _______ purple.",
    opciones: ["get", "will get", "would get", "got"],
    correctaTexto: "get",
    explicacion: "Type 0 = Inevitable result/Law of nature. Always true: mix red + blue = always get purple (Present Simple both sides)."
  },
  {
    id: 5029,
    tema: "Conditional Sentences Type 0",
    tipo: "multiple",
    texto: "If the voltage _______ above 230V, the circuit breaker trips.",
    opciones: ["goes", "will go", "would go", "went"],
    correctaTexto: "goes",
    explicacion: "Type 0 = Cause-effect in electrical systems (automatic/mechanical response). If + Present Simple, then Present Simple."
  },
  {
    id: 5030,
    tema: "Conditional Sentences Type 0",
    tipo: "multiple",
    texto: "If you don't water plants regularly, they _______.",
    opciones: ["die", "will die", "would die", "died"],
    correctaTexto: "die",
    explicacion: "Type 0 = General truth about plant biology. Always true: no water = plants die (automatic consequence)."
  },

  // ===== CONDITIONAL SENTENCES TYPE 1 (5 questions) =====
  {
    id: 5031,
    tema: "Conditional Sentences Type 1",
    tipo: "multiple",
    texto: "If she studies hard, she _______ pass the exam.",
    opciones: ["passes", "will pass", "would pass", "has passed"],
    correctaTexto: "will pass",
    explicacion: "Type 1 = Real/Possible future situation. If + Present Simple, will + Base verb. Study hard (possible) → will pass (probable result)."
  },
  {
    id: 5032,
    tema: "Conditional Sentences Type 1",
    tipo: "multiple",
    texto: "If you don't finish the project by Friday, we _______ miss the deadline.",
    opciones: ["miss", "will miss", "would miss", "have missed"],
    correctaTexto: "will miss",
    explicacion: "Type 1 = Likely consequence. If + Present Simple, will + verb. Don't finish (possible) → will miss (certain result)."
  },
  {
    id: 5033,
    tema: "Conditional Sentences Type 1",
    tipo: "multiple",
    texto: "If the weather is good tomorrow, we _______ go for a picnic.",
    opciones: ["go", "will go", "would go", "went"],
    correctaTexto: "will go",
    explicacion: "Type 1 = Real future possibility. If + Present (weather is good), will + infinitive (we will go). Realistic/likely scenario."
  },
  {
    id: 5034,
    tema: "Conditional Sentences Type 1",
    tipo: "multiple",
    texto: "If I find your car keys, I _______ call you immediately.",
    opciones: ["call", "will call", "would call", "called"],
    correctaTexto: "will call",
    explicacion: "Type 1 = Possible future event. If + Present Simple (find keys), will + Base verb. Real possibility, logical consequence."
  },
  {
    id: 5035,
    tema: "Conditional Sentences Type 1",
    tipo: "multiple",
    texto: "If we _______ the equipment on time, the installation _______ in January.",
    opciones: ["receive/starts", "will receive/will start", "receive/will start", "will receive/starts"],
    correctaTexto: "receive/will start",
    explicacion: "Type 1 structure: If (Present Simple) + will (Base verb). If we receive (when) → installation will start (consequence)."
  },

  // ===== CONDITIONAL SENTENCES TYPE 2 (5 questions) =====
  {
    id: 5036,
    tema: "Conditional Sentences Type 2",
    tipo: "multiple",
    texto: "If I had a million euros, I _______ buy a house.",
    opciones: ["buy", "will buy", "would buy", "bought"],
    correctaTexto: "would buy",
    explicacion: "Type 2 = Imaginary/Hypothetical situation. If + Past Simple (had), would + Base verb. Not realistic possibility."
  },
  {
    id: 5037,
    tema: "Conditional Sentences Type 2",
    tipo: "multiple",
    texto: "If she _______ fluent in Chinese, she _______ work in Beijing.",
    opciones: ["is/would work", "were/would work", "was/will work", "would be/would work"],
    correctaTexto: "were/would work",
    explicacion: "Type 2 uses 'were' (not 'was') for all subjects in formal English. If she were (imaginary) → would work (consequence)."
  },
  {
    id: 5038,
    tema: "Conditional Sentences Type 2",
    tipo: "multiple",
    texto: "If you _______ rich, what _______ you do?",
    opciones: ["are/would", "were/would", "were/will", "would be/would"],
    correctaTexto: "were/would",
    explicacion: "Type 2 = Hypothetical. Were (Past Simple, not 'are') + would do (imaginary action). Questions follow same pattern."
  },
  {
    id: 5039,
    tema: "Conditional Sentences Type 2",
    tipo: "multiple",
    texto: "If I _______ a car, I _______ drive to work every day.",
    opciones: ["have/will", "had/would", "have/would", "had/will"],
    correctaTexto: "had/would",
    explicacion: "Type 2 = Imaginary situation. Had (hypothetical possession) → would drive (imaginary habit). Not real/current."
  },
  {
    id: 5040,
    tema: "Conditional Sentences Type 2",
    tipo: "multiple",
    texto: "If I _______ in your shoes, I _______ accept that job offer.",
    opciones: ["am/would", "were/would", "was/will", "would be/would"],
    correctaTexto: "were/would",
    explicacion: "Idiom 'in your shoes' (in your situation) = Type 2 conditional. Were (hypothetical) + would accept (imaginary choice)."
  },

  // ===== HOME AUTOMATION / DOMOTICS VOCABULARY (5 questions) =====
  {
    id: 5041,
    tema: "Home Automation/Domotics Vocabulary",
    tipo: "multiple",
    texto: "_______ is the technology that allows you to control lighting, heating, and security from your smartphone.",
    opciones: ["Informatics", "Telematics", "Home automation", "Robotics"],
    correctaTexto: "Home automation",
    explicacion: "Home automation (Domotics) = technology to automatically control home systems through smart devices and apps."
  },
  {
    id: 5042,
    tema: "Home Automation/Domotics Vocabulary",
    tipo: "multiple",
    texto: "In a smart home system, a _______ detects motion, temperature, or light and sends signals to the controller.",
    opciones: ["actuator", "sensor", "HMI", "controller"],
    correctaTexto: "sensor",
    explicacion: "Sensors = devices that DETECT/MEASURE environmental conditions (motion, temperature, light, etc.)."
  },
  {
    id: 5043,
    tema: "Home Automation/Domotics Vocabulary",
    tipo: "multiple",
    texto: "The _______ is the device that EXECUTES the commands, such as turning off lights or closing blinds.",
    opciones: ["sensor", "actuator", "HMI", "controller"],
    correctaTexto: "actuator",
    explicacion: "Actuators = devices that PERFORM/EXECUTE actions (turn on/off, open/close, adjust intensity, etc.)."
  },
  {
    id: 5044,
    tema: "Home Automation/Domotics Vocabulary",
    tipo: "multiple",
    texto: "An HMI (Human-Machine Interface) is a _______ that allows users to interact with the home automation system.",
    opciones: ["sensor", "cable", "touch screen or app", "transformer"],
    correctaTexto: "touch screen or app",
    explicacion: "HMI = interface where humans INTERACT with machines (touchscreens, smartphone apps, voice commands, physical buttons)."
  },
  {
    id: 5045,
    tema: "Home Automation/Domotics Vocabulary",
    tipo: "multiple",
    texto: "A _______ is a wireless communication system used in smart homes to connect devices through Wi-Fi, ZigBee, or Bluetooth.",
    opciones: ["generator", "rectifier", "wireless network", "transformer"],
    correctaTexto: "wireless network",
    explicacion: "Wireless networks in domotics = Wi-Fi, ZigBee, Bluetooth systems that connect sensors, controllers, and actuators."
  },

  // ===== ELECTRICITY BILL VOCABULARY (5 questions) =====
  {
    id: 5046,
    tema: "Electricity Bill Vocabulary",
    tipo: "multiple",
    texto: "The _______ on your electricity bill represents the actual electricity you consumed, measured in kilowatt-hours (kWh).",
    opciones: ["meter multiplier", "consumption charge", "customer charge", "supply service charge"],
    correctaTexto: "consumption charge",
    explicacion: "Consumption = actual kWh used (energy × time). This is the main variable cost based on actual usage."
  },
  {
    id: 5047,
    tema: "Electricity Bill Vocabulary",
    tipo: "multiple",
    texto: "The _______ is a fixed monthly fee that covers the cost of maintaining the distribution network.",
    opciones: ["consumption charge", "metering charge", "distribution charge", "meter multiplier"],
    correctaTexto: "distribution charge",
    explicacion: "Distribution charge = fixed cost to maintain poles, cables, and infrastructure. Charged per month regardless of usage."
  },
  {
    id: 5048,
    tema: "Electricity Bill Vocabulary",
    tipo: "multiple",
    texto: "A _______ on your electricity bill means different rates apply during peak hours and off-peak hours.",
    opciones: ["flat rate", "time-of-use tariff", "flexible plan", "average cost"],
    correctaTexto: "time-of-use tariff",
    explicacion: "Time-of-use = rates vary by time of day (peak/off-peak). Off-peak hours have lower rates to reduce demand."
  },
  {
    id: 5049,
    tema: "Electricity Bill Vocabulary",
    tipo: "multiple",
    texto: "The _______ is a number that converts your meter reading to the actual kWh consumed.",
    opciones: ["customer charge", "meter multiplier", "metering charge", "supply service charge"],
    correctaTexto: "meter multiplier",
    explicacion: "Meter multiplier = factor that adjusts the physical meter reading to get actual consumption in kWh."
  },
  {
    id: 5050,
    tema: "Electricity Bill Vocabulary",
    tipo: "multiple",
    texto: "Your electricity bill shows _______, which tells you the average amount of electricity you use per day.",
    opciones: ["peak tariff", "average daily usage", "off-peak rate", "supply service"],
    correctaTexto: "average daily usage",
    explicacion: "Average daily usage = total consumption divided by number of days in the billing period. Helps track consumption patterns."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEMA_INGLES_PROFESSIONAL_U5_DATA;
}
