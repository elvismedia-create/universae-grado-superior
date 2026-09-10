// EXAMEN SEMESTRAL: INGLÉS PROFESIONAL - 40 PREGUNTAS REALES (Usuario 94,17% Score)
const EXAMEN_SEMESTRAL_INGLES_PROFESIONAL_DATA = [
  {
    id: 1,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the correct answer.",
    opciones: ["My brother always plays football at weekends.", "My brother always play football at weekends.", "My brother play always football at weekend.", "My brother plays always football at weekend."],
    correctaTexto: "My brother always plays football at weekends.",
    explicacion: "Present Simple: sujeto + verbo en tercera persona singular + complemento. Los adverbios de frecuencia van entre el sujeto y el verbo."
  },
  {
    id: 2,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the correct form for this sentence: \"I _____ to Paris.\"",
    opciones: ["has never been", "was never been", "have never been", "am never be"],
    correctaTexto: "have never been",
    explicacion: "Present Perfect: have/has + past participle. 'Have never been' = nunca he estado."
  },
  {
    id: 3,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the correct passive form of the sentence: \"They will publish the results next week\".",
    opciones: ["The results are published next week.", "The results were published next week.", "The results are being published next week.", "The results will be published next week."],
    correctaTexto: "The results will be published next week.",
    explicacion: "Passive Future Simple: will + be + past participle. Indica una acción futura en forma pasiva."
  },
  {
    id: 4,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the correct preposition of place for this sentence: \"The supermarket is ________ the post office and the bank.\"",
    opciones: ["on", "next", "in", "between"],
    correctaTexto: "between",
    explicacion: "'Between' se usa cuando algo está en medio de dos cosas. Preposición de lugar."
  },
  {
    id: 5,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the correct sentence:",
    opciones: ["This jacket is not thick enough for winter.", "This jacket is not enough thick for winter.", "This jacket is not thick for enough winter.", "This jacket is thick not enough for winter."],
    correctaTexto: "This jacket is not thick enough for winter.",
    explicacion: "'Enough' va después del adjetivo: adjective + enough. Significa 'suficientemente'."
  },
  {
    id: 6,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the correct sentence:",
    opciones: ["This test is difficult too for me.", "This test to is difficult for me.", "This test is too difficult for me.", "This test is too for me difficult."],
    correctaTexto: "This test is too difficult for me.",
    explicacion: "'Too' va antes del adjetivo: too + adjective. Significa 'demasiado'."
  },
  {
    id: 7,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the correct superlative adjective to complete the sentence: \"That was ___________ movie I have ever seen!\"",
    opciones: ["Funnier", "the most funny", "the funniest", "funnier than"],
    correctaTexto: "the funniest",
    explicacion: "Superlativo: the + adjective + -est (adjetivos cortos) o the + most + adjective (adjetivos largos)."
  },
  {
    id: 8,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the correct type Zero conditional sentence:",
    opciones: ["If you heat water, it boils.", "If she studies, she will pass.", "If I were rich, I would travel all over the world.", "If he worked harder, he would get a promotion."],
    correctaTexto: "If you heat water, it boils.",
    explicacion: "Zero Conditional: If + Present Simple, Present Simple. Hechos universales o generales."
  },
  {
    id: 9,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the incorrect sentence regarding quantifiers:",
    opciones: ["She has much friends at school.", "They have a lot of experience in their field.", "There is a little sugar in the cupboard.", "Many students passed the exam."],
    correctaTexto: "She has much friends at school.",
    explicacion: "Con sustantivos contables se usa 'many', no 'much'. Debería ser 'She has many friends'."
  },
  {
    id: 10,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the right answer.",
    opciones: ["She be a doctor.", "She is a doctor.", "She are a doctor.", "She am a doctor."],
    correctaTexto: "She is a doctor.",
    explicacion: "Verb 'to be': she/he/it = is. Present Simple de 'to be'."
  },
  {
    id: 11,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the right sentence:",
    opciones: ["We ate too food much at the party.", "We ate much too food at the party.", "We ate food too much at the party.", "We ate too much food at the party."],
    correctaTexto: "We ate too much food at the party.",
    explicacion: "'Too much' va antes del sustantivo: too much + noun. Significa 'demasiado'."
  },
  {
    id: 12,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the sentence that correctly uses a preposition of movement.",
    opciones: ["We walked into the shop.", "He ran through the stairs quickly.", "She jumped in the wall.", "They drove out of the bus."],
    correctaTexto: "We walked into the shop.",
    explicacion: "'Into' es preposición de movimiento que indica entrar en un lugar. Las otras son incorrectas."
  },
  {
    id: 13,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Choose the wrong sentence.",
    opciones: ["She hasn't got a cat.", "Have you got a pen?", "They has got a child.", "We haven't got a car."],
    correctaTexto: "They has got a child.",
    explicacion: "Con 'they' se usa 'have', no 'has'. Debería ser 'They have got a child'."
  },
  {
    id: 14,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence in the Past Simple tense: \"Yesterday, she _________ to the park with some friends.\"",
    opciones: ["go", "goed", "goes", "went"],
    correctaTexto: "went",
    explicacion: "Past Simple de 'go' es 'went'. Verbo irregular."
  },
  {
    id: 15,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence using the Past Simple and the Past Continuous: \"While Peter ________ dinner, the phone ________.\"",
    opciones: ["cooked /rang", "was cooking / rang", "cooked /was ringing", "was cooking /was ringing"],
    correctaTexto: "was cooking / rang",
    explicacion: "Past Continuous (was cooking) para la acción larga; Past Simple (rang) para la acción que interrumpe."
  },
  {
    id: 16,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence with a suitable indefinite pronoun: \"_____________ is knocking at the door\".",
    opciones: ["Anywhere", "Somewhere", "Someone", "Anything"],
    correctaTexto: "Someone",
    explicacion: "'Someone' se refiere a una persona. Pronombre indefinido para personas."
  },
  {
    id: 17,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence with an appropriate possessive: \"These are ______ pencils, not _______. \"",
    opciones: ["mine, yours", "mine, your", "my, yours", "my, your"],
    correctaTexto: "my, yours",
    explicacion: "Antes del sustantivo va el adjetivo posesivo (my, your). Solo va pronombre posesivo cuando no hay sustantivo."
  },
  {
    id: 18,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence with the correct Future tense: \"She _________ you as soon as she arrives.\"",
    opciones: ["will called", "are calling", "called", "will call"],
    correctaTexto: "will call",
    explicacion: "Future Simple: will + infinitive (sin 'to'). 'Will call' = llamará."
  },
  {
    id: 19,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence with the right option: \"They ____________ TV right now.\"",
    opciones: ["watch", "watches", "watching", "are watching"],
    correctaTexto: "are watching",
    explicacion: "'Right now' indica Present Continuous: be + -ing form."
  },
  {
    id: 20,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence with the verb To Be in the past tense: \"I _____ happy when I was a child\"",
    opciones: ["am", "was", "were", "be"],
    correctaTexto: "was",
    explicacion: "Past Simple de 'to be': I/he/she/it = was. You/we/they = were."
  },
  {
    id: 21,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence: \"______ is my phone over there\".",
    opciones: ["This", "These", "That", "Those"],
    correctaTexto: "That",
    explicacion: "'That' para cosas lejanas (singular). 'This' para cosas cerca (singular)."
  },
  {
    id: 22,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence: \"He _____ play football when he was younger.\"",
    opciones: ["use", "used", "used to", "using"],
    correctaTexto: "used to",
    explicacion: "'Used to' expresa una acción habitual en el pasado que ahora no ocurre."
  },
  {
    id: 23,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence: \"I have a meeting _____ Monday morning\".",
    opciones: ["in", "at", "on", "by"],
    correctaTexto: "on",
    explicacion: "Preposiciones de tiempo: 'on' + día (Monday), 'at' + hora, 'in' + mes/año."
  },
  {
    id: 24,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence: \"She has ________ sent the e-mail to her manager.\"",
    opciones: ["yet", "for", "already", "since"],
    correctaTexto: "already",
    explicacion: "'Already' indica que algo ha sucedido antes del momento esperado. Present Perfect."
  },
  {
    id: 25,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete the sentence: \"There isn't __________ milk on the fridge\".",
    opciones: ["any", "some", "no", "many"],
    correctaTexto: "any",
    explicacion: "En oraciones negativas con 'there is/are' se usa 'any'. 'Some' se usa en afirmativas."
  },
  {
    id: 26,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Complete this sentence with the correct relative pronoun: \"The woman ____ lives next door is a doctor\"",
    opciones: ["Who", "which", "where", "whose"],
    correctaTexto: "Who",
    explicacion: "'Who' se usa para personas. 'Which' para cosas. 'Whose' para posesión. 'Where' para lugares."
  },
  {
    id: 27,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Find the incorrect question",
    opciones: ["Why do you study in the library?", "When she takes her last exam?", "Who is your brother?", "Where does she live?"],
    correctaTexto: "When she takes her last exam?",
    explicacion: "Debería ser 'When does she take her last exam?' Las preguntas con 'does' requieren el verbo principal en infinitivo."
  },
  {
    id: 28,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Identify the sentence with the correct comparative form.",
    opciones: ["My house is more big than your house.", "This pencil is sharper than that one.", "She is more taller than me.", "This book is interestinger than the other one."],
    correctaTexto: "This pencil is sharper than that one.",
    explicacion: "Comparativos: adjective corto + -er (sharper), o more + adjective largo. No se mezclan formas."
  },
  {
    id: 29,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "In which of the following sentences is the adverb of frequency correctly placed?",
    opciones: ["They never are late for work.", "They are late never for work.", "They are never late for work.", "They are late for work never."],
    correctaTexto: "They are never late for work.",
    explicacion: "Adverbios de frecuencia van entre el sujeto y el verbo principal, o después del verbo 'to be'."
  },
  {
    id: 30,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Pick the correct preposition of movement to complete the sentence: \"They cycled ________ the park to arrive at the lake.\"",
    opciones: ["Under", "into", "on", "across"],
    correctaTexto: "across",
    explicacion: "'Across' indica movimiento a través de un lugar. Preposición de movimiento."
  },
  {
    id: 31,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Select the sentence that uses the correct form of an irregular adjective.",
    opciones: ["He is the more bad singer in the competition.", "This is the worse book I've read.", "That is the best restaurant in town.", "She is the most interestinger person."],
    correctaTexto: "That is the best restaurant in town.",
    explicacion: "Adjetivos irregulares: good→better→best, bad→worse→worst. 'Best' es superlativo correcto."
  },
  {
    id: 32,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "What is the best question for this answer? \"Because today is my birthday!\"",
    opciones: ["Why you are so happy?", "Why are you so happy?", "Why is you so happy?", "Why happy are you?"],
    correctaTexto: "Why are you so happy?",
    explicacion: "Pregunta con 'Why': Why + are + you...? El verbo va antes del sujeto en preguntas."
  },
  {
    id: 33,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "What is the correct question to express quantity?",
    opciones: ["How apples do you buy in the supermarket?", "How much apples do you buy in the supermarket?", "How many apples do you buy in the supermarket?", "How often apples do you buy in the supermarket?"],
    correctaTexto: "How many apples do you buy in the supermarket?",
    explicacion: "'How many' para sustantivos contables. 'How much' para incontables."
  },
  {
    id: 34,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Which gerund form is correct?",
    opciones: ["Makeing", "Runing", "Crying", "Swiming"],
    correctaTexto: "Crying",
    explicacion: "Gerundios: verb + -ing. Si termina en 'e', se elimina (make→making). Si es consonante+vocal+consonante, se dobla (run→running)."
  },
  {
    id: 35,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Which of the following statements about the verb 'to have got' is correct?",
    opciones: ["It is commonly used in British English.", "It is only used in the present tense.", "For the other verb tenses we use the verb 'to have'.", "All the above are correct."],
    correctaTexto: "All the above are correct.",
    explicacion: "'To have got' es británico, se usa principalmente en presente, y en otros tiempos se usa 'have'."
  },
  {
    id: 36,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Which of these indefinite pronouns refer to people?",
    opciones: ["Something", "Anywhere", "Nobody", "Everything"],
    correctaTexto: "Nobody",
    explicacion: "'Nobody' = no one. Pronombres para personas: somebody, anybody, nobody, everyone."
  },
  {
    id: 37,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Which of these words is a possessive pronoun?",
    opciones: ["Me", "She", "Their", "Theirs"],
    correctaTexto: "Theirs",
    explicacion: "Pronombres posesivos: mine, yours, his, hers, ours, theirs. (Sin sustantivo después)"
  },
  {
    id: 38,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Which quantifier is used with countable nouns?",
    opciones: ["Much", "Little", "Many", "A little"],
    correctaTexto: "Many",
    explicacion: "'Many' para sustantivos contables. 'Much' para incontables. 'Little/a little' para incontables."
  },
  {
    id: 39,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Which sentence correctly uses a modal verb?",
    opciones: ["She must to finish the report today.", "He can speaks three languages.", "You should take a break.", "They might goes to the party."],
    correctaTexto: "You should take a break.",
    explicacion: "Modales (must, can, should, might) + verbo en infinitivo sin 'to'. 'You should take' es correcto."
  },
  {
    id: 40,
    tema: "Inglés Profesional",
    tipo: "opción múltiple",
    texto: "Which sentence uses the gerund or infinitive correctly?",
    opciones: ["She likes read.", "I enjoy to swim.", "He likes playing football.", "We want playing games."],
    correctaTexto: "He likes playing football.",
    explicacion: "'Like' + gerund (playing) o 'like' + infinitivo (to play). 'Playing football' es correcto con 'likes'."
  }
];
