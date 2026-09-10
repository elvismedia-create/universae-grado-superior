// UNIT 2: What do you like? - Inglés Profesional (50 preguntas)
const TEMA_INGLES_PROFESSIONAL_U2_DATA = [
  // GRAMMAR: LIKES AND DISLIKES
  {
    id: 2001,
    tema: 1,
    tipo: "normal",
    texto: "Which verb expresses the strongest liking?",
    opciones: ["Like", "Really like", "Love", "Don't mind"],
    correctaTexto: "Love",
    explicacion: "'Love' expresa el gusto más fuerte; 'like' es más moderado."
  },
  {
    id: 2002,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'I ________ pizza.'",
    opciones: ["love", "loves", "loving", "am loving"],
    correctaTexto: "love",
    explicacion: "Con 'I', usamos el verbo en presente simple sin cambios."
  },
  {
    id: 2003,
    tema: 1,
    tipo: "normal",
    texto: "Which phrase means 'I don't like at all'?",
    opciones: ["I like", "I really like", "I hate", "I don't mind"],
    correctaTexto: "I hate",
    explicacion: "'Hate' expresa el rechazo más fuerte; 'can't stand' tiene el mismo significado."
  },
  {
    id: 2004,
    tema: 1,
    tipo: "normal",
    texto: "What does 'can't stand' mean?",
    opciones: ["Tolerate", "Strongly dislike", "Ignore", "Enjoy"],
    correctaTexto: "Strongly dislike",
    explicacion: "'Can't stand' significa 'no soportar' o 'detestable'."
  },
  {
    id: 2005,
    tema: 1,
    tipo: "normal",
    texto: "Which sentence is correct?",
    opciones: ["She loves dancing.", "She love dancing.", "She is loving dancing.", "She do love dancing."],
    correctaTexto: "She loves dancing.",
    explicacion: "Con 'she' (tercera persona singular), agregamos '-s' al verbo."
  },

  // GRAMMAR: THERE IS / THERE ARE
  {
    id: 2006,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'There ________ a book on the table.'",
    opciones: ["are", "is", "be", "have"],
    correctaTexto: "is",
    explicacion: "'There is' se usa con sustantivos singulares."
  },
  {
    id: 2007,
    tema: 1,
    tipo: "normal",
    texto: "Which sentence is correct?",
    opciones: ["There is two cats.", "There are two cats.", "There is cats.", "There are a cat."],
    correctaTexto: "There are two cats.",
    explicacion: "'There are' se usa con sustantivos plurales."
  },
  {
    id: 2008,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'There ________ some water in the glass.'",
    opciones: ["are", "is", "be", "have"],
    correctaTexto: "is",
    explicacion: "Con sustantivos incontables, usamos 'there is'."
  },
  {
    id: 2009,
    tema: 1,
    tipo: "normal",
    texto: "What is the negative form of 'There are three books'?",
    opciones: ["There aren't three books.", "There are not three books.", "There is not three books.", "Both A and B"],
    correctaTexto: "Both A and B",
    explicacion: "Ambas formas son correctas: 'are not' o 'aren't'."
  },
  {
    id: 2010,
    tema: 1,
    tipo: "normal",
    texto: "Which is correct for uncountable nouns?",
    opciones: ["There are some milk.", "There is some milk.", "There are some milks.", "There is milks."],
    correctaTexto: "There is some milk.",
    explicacion: "Con sustantivos incontables (milk), usamos 'there is'."
  },

  // GRAMMAR: INDEFINITE ARTICLES A/AN
  {
    id: 2011,
    tema: 1,
    tipo: "normal",
    texto: "Which article is used before words starting with consonant sounds?",
    opciones: ["An", "A", "Both", "Neither"],
    correctaTexto: "A",
    explicacion: "'A' va antes de sonidos consonánticos (a dog, a house)."
  },
  {
    id: 2012,
    tema: 1,
    tipo: "normal",
    texto: "Complete: '________ apple'",
    opciones: ["A", "An", "The", "Some"],
    correctaTexto: "An",
    explicacion: "'An' va antes de sonidos vocálicos (an apple, an elephant)."
  },
  {
    id: 2013,
    tema: 1,
    tipo: "normal",
    texto: "Which is correct?",
    opciones: ["A hour", "An hour", "A our", "The hour"],
    correctaTexto: "An hour",
    explicacion: "'Hour' comienza con sonido vocálico, así que usamos 'an'."
  },
  {
    id: 2014,
    tema: 1,
    tipo: "normal",
    texto: "Choose the correct article: '________ university'",
    opciones: ["A", "An", "The", "Some"],
    correctaTexto: "A",
    explicacion: "'University' comienza con sonido consonántico (ju), así que usamos 'a'."
  },
  {
    id: 2015,
    tema: 1,
    tipo: "normal",
    texto: "Indefinite articles are used with:",
    opciones: ["Plural countable nouns", "Singular countable nouns", "Uncountable nouns", "Specific things"],
    correctaTexto: "Singular countable nouns",
    explicacion: "'A' y 'an' se usan con sustantivos singulares contables y no específicos."
  },

  // GRAMMAR: QUANTIFIERS SOME/ANY
  {
    id: 2016,
    tema: 1,
    tipo: "normal",
    texto: "Which sentence uses 'some' correctly?",
    opciones: ["I don't have some money.", "I have some friends.", "Do you have some tea?", "There aren't some books."],
    correctaTexto: "I have some friends.",
    explicacion: "'Some' se usa en oraciones afirmativas."
  },
  {
    id: 2017,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'I don't have ________ money.'",
    opciones: ["some", "any", "a", "the"],
    correctaTexto: "any",
    explicacion: "'Any' se usa en oraciones negativas."
  },
  {
    id: 2018,
    tema: 1,
    tipo: "normal",
    texto: "Which sentence is correct?",
    opciones: ["Do you have some books?", "Do you have any books?", "Both A and B", "Neither A nor B"],
    correctaTexto: "Do you have any books?",
    explicacion: "'Any' se usa en preguntas."
  },
  {
    id: 2019,
    tema: 1,
    tipo: "normal",
    texto: "'Some' is commonly used in:",
    opciones: ["Negative sentences", "Questions", "Offers and requests", "Denials"],
    correctaTexto: "Offers and requests",
    explicacion: "'Some' se usa en oraciones afirmativas, ofertas y solicitudes (Would you like some tea?)."
  },
  {
    id: 2020,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'There isn't ________ milk in the fridge.'",
    opciones: ["some", "any", "a", "the"],
    correctaTexto: "any",
    explicacion: "'Any' se usa en oraciones negativas."
  },

  // GRAMMAR: WH-QUESTIONS
  {
    id: 2021,
    tema: 1,
    tipo: "normal",
    texto: "What question word asks about things or information?",
    opciones: ["Where", "When", "What", "Who"],
    correctaTexto: "What",
    explicacion: "'What' se usa para preguntar sobre cosas o información."
  },
  {
    id: 2022,
    tema: 1,
    tipo: "normal",
    texto: "Which question asks about uncountable quantities?",
    opciones: ["How many students?", "How much water?", "How often?", "Which one?"],
    correctaTexto: "How much water?",
    explicacion: "'How much' se usa con sustantivos incontables."
  },
  {
    id: 2023,
    tema: 1,
    tipo: "normal",
    texto: "Complete: '________ is your best friend?'",
    opciones: ["What", "Where", "Who", "How"],
    correctaTexto: "Who",
    explicacion: "'Who' se usa para preguntar sobre personas."
  },
  {
    id: 2024,
    tema: 1,
    tipo: "normal",
    texto: "Which is correct?",
    opciones: ["Where do you live?", "Where you live?", "Do you live where?", "Where you do live?"],
    correctaTexto: "Where do you live?",
    explicacion: "En wh-questions, la estructura es: Wh-word + auxiliary + subject + main verb."
  },
  {
    id: 2025,
    tema: 1,
    tipo: "normal",
    texto: "What does 'How often' ask about?",
    opciones: ["Places", "Frequency", "Reasons", "Time"],
    correctaTexto: "Frequency",
    explicacion: "'How often' se usa para preguntar sobre la frecuencia."
  },

  // GRAMMAR: PRONOUNS AND POSSESSIVE FORMS
  {
    id: 2026,
    tema: 1,
    tipo: "normal",
    texto: "What is the object pronoun for 'she'?",
    opciones: ["her", "she", "hers", "his"],
    correctaTexto: "her",
    explicacion: "El pronombre objeto para 'she' es 'her'."
  },
  {
    id: 2027,
    tema: 1,
    tipo: "normal",
    texto: "Which is a possessive adjective?",
    opciones: ["mine", "me", "my", "I"],
    correctaTexto: "my",
    explicacion: "Los adjetivos posesivos (my, your, his, her) van antes del sustantivo."
  },
  {
    id: 2028,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'This book is ________ (mine/my)'",
    opciones: ["my", "mine", "me", "I"],
    correctaTexto: "mine",
    explicacion: "Los pronombres posesivos (mine, yours, his, hers) reemplazan un sustantivo."
  },
  {
    id: 2029,
    tema: 1,
    tipo: "normal",
    texto: "What is the subject pronoun for object pronoun 'me'?",
    opciones: ["my", "I", "mine", "you"],
    correctaTexto: "I",
    explicacion: "El pronombre sujeto para 'me' es 'I'."
  },
  {
    id: 2030,
    tema: 1,
    tipo: "normal",
    texto: "Which sentence is correct?",
    opciones: ["That book is your.", "That book is yours.", "That book is you.", "That book is your's."],
    correctaTexto: "That book is yours.",
    explicacion: "'Yours' es el pronombre posesivo para 'you'."
  },

  // GRAMMAR: PREPOSITIONS OF TIME
  {
    id: 2031,
    tema: 1,
    tipo: "normal",
    texto: "Which preposition is used with months?",
    opciones: ["On", "At", "In", "During"],
    correctaTexto: "In",
    explicacion: "Se usa 'in' con meses (In June), estaciones y años."
  },
  {
    id: 2032,
    tema: 1,
    tipo: "normal",
    texto: "Complete: '________ Monday'",
    opciones: ["In", "At", "On", "During"],
    correctaTexto: "On",
    explicacion: "Se usa 'on' con días de la semana."
  },
  {
    id: 2033,
    tema: 1,
    tipo: "normal",
    texto: "Which is correct?",
    opciones: ["In the morning", "At the morning", "On the morning", "During the morning"],
    correctaTexto: "In the morning",
    explicacion: "Se usa 'in' con partes del día (in the morning, in the evening)."
  },
  {
    id: 2034,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'At ________ (Christmas/Christmas day)'",
    opciones: ["Christmas", "Christmas day", "the Christmas", "Christmas's"],
    correctaTexto: "Christmas",
    explicacion: "Se usa 'at' con festividades (at Christmas, at Easter)."
  },
  {
    id: 2035,
    tema: 1,
    tipo: "normal",
    texto: "Which statement about 'last/next' is correct?",
    opciones: ["Last week needs a preposition", "Next Tuesday needs a preposition", "Last week doesn't need a preposition", "Both B and C need prepositions"],
    correctaTexto: "Last week doesn't need a preposition",
    explicacion: "Con 'last' y 'next', no se necesita preposición (last week, next Tuesday)."
  },

  // VOCABULARY AND MIXED CONTENT
  {
    id: 2036,
    tema: 1,
    tipo: "normal",
    texto: "Which verb form is correct? 'He ________ reading.'",
    opciones: ["like", "likes", "liking", "is like"],
    correctaTexto: "likes",
    explicacion: "En present simple con 'he', agregamos '-s' al verbo."
  },
  {
    id: 2037,
    tema: 1,
    tipo: "normal",
    texto: "What is the difference between 'like' and 'really like'?",
    opciones: ["No difference", "Really like is stronger", "Like is stronger", "They refer to different things"],
    correctaTexto: "Really like is stronger",
    explicacion: "'Really like' expresa un gusto más fuerte que 'like'."
  },
  {
    id: 2038,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'Would you like ________ tea?' (offering)",
    opciones: ["any", "some", "a", "the"],
    correctaTexto: "some",
    explicacion: "En ofertas, se usa 'some' (Would you like some tea?)."
  },
  {
    id: 2039,
    tema: 1,
    tipo: "normal",
    texto: "Which question is correct?",
    opciones: ["How many water do you drink?", "How much water do you drink?", "How many waters?", "How much waters?"],
    correctaTexto: "How much water do you drink?",
    explicacion: "'Water' es incontable, así que usamos 'how much'."
  },
  {
    id: 2040,
    tema: 1,
    tipo: "normal",
    texto: "What does 'I don't mind' mean?",
    opciones: ["I hate it", "I love it", "I tolerate it/it's okay", "I don't know"],
    correctaTexto: "I tolerate it/it's okay",
    explicacion: "'I don't mind' significa que algo está bien pero no es su preferencia."
  },

  // ADDITIONAL COMPREHENSIVE QUESTIONS
  {
    id: 2041,
    tema: 1,
    tipo: "normal",
    texto: "Which preposition is used with years?",
    opciones: ["On", "At", "In", "During"],
    correctaTexto: "In",
    explicacion: "Se usa 'in' con años (In 2021, In the 90s)."
  },
  {
    id: 2042,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'There ________ any milk in the fridge.'",
    opciones: ["is", "are", "isn't", "aren't"],
    correctaTexto: "isn't",
    explicacion: "Con 'milk' (incontable), usamos 'there is' negativo: 'there isn't'."
  },
  {
    id: 2043,
    tema: 1,
    tipo: "normal",
    texto: "Which is the object pronoun for 'I'?",
    opciones: ["me", "my", "mine", "I"],
    correctaTexto: "me",
    explicacion: "El pronombre objeto para 'I' es 'me'."
  },
  {
    id: 2044,
    tema: 1,
    tipo: "normal",
    texto: "What time preposition is used at 3 o'clock?",
    opciones: ["In", "On", "At", "During"],
    correctaTexto: "At",
    explicacion: "Se usa 'at' con horas específicas (at 3 o'clock, at midnight)."
  },
  {
    id: 2045,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'Their house is bigger than ________.'",
    opciones: ["your", "yours", "you", "yours'"],
    correctaTexto: "yours",
    explicacion: "'Yours' es el pronombre posesivo para reemplazar 'your house'."
  },
  {
    id: 2046,
    tema: 1,
    tipo: "normal",
    texto: "Which is correct?",
    opciones: ["An elephant", "A elephant", "The elephant", "Elephant"],
    correctaTexto: "An elephant",
    explicacion: "'Elephant' comienza con sonido vocálico, así que usamos 'an'."
  },
  {
    id: 2047,
    tema: 1,
    tipo: "normal",
    texto: "What question word asks about reasons?",
    opciones: ["Where", "When", "Why", "What"],
    correctaTexto: "Why",
    explicacion: "'Why' se usa para preguntar sobre razones o motivos."
  },
  {
    id: 2048,
    tema: 1,
    tipo: "normal",
    texto: "Which sentence correctly uses 'can't stand'?",
    opciones: ["I can't stand pizza.", "I really can't stand waiting.", "I can stand this noise.", "Both A and B"],
    correctaTexto: "Both A and B",
    explicacion: "'Can't stand' expresa disgusto fuerte y puede usarse con sustantivos o gerundios."
  },
  {
    id: 2049,
    tema: 1,
    tipo: "normal",
    texto: "Complete: 'In ________ (summer/the summer)'",
    opciones: ["summer", "the summer", "a summer", "summers"],
    correctaTexto: "summer",
    explicacion: "Con estaciones, se usa solo 'in' sin artículo (in summer, in winter)."
  },
  {
    id: 2050,
    tema: 1,
    tipo: "normal",
    texto: "Which shows correct possessive usage?",
    opciones: ["She like his book.", "She likes his book.", "She like he book.", "She likes he's book."],
    correctaTexto: "She likes his book.",
    explicacion: "Adjetivos posesivos (his, her, my, your) van antes del sustantivo."
  }
];
