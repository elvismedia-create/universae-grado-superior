// --- TEMA 1: ELECTRICIDAD BÁSICA (CON EXPLICACIONES) ---
const TEMA_1_DATA = [
  { 
    id:1001, 
    tema:"Electricidad básica", 
    texto:"¿Qué se entiende por electricidad?", 
    opciones:["El conjunto de fenómenos físicos originados por la presencia y movimiento de cargas eléctricas.","La energía mecánica.","El consumo eléctrico.","La potencia contratada."], 
    correctaTexto:"El conjunto de fenómenos físicos originados por la presencia y movimiento de cargas eléctricas.",
    explicacion: "No es solo la luz o el enchufe. Es el fenómeno físico global que abarca desde un rayo hasta la corriente de una pila, causado por electrones en movimiento o reposo."
  },
  { 
    id:1002, 
    tema:"Magnitudes eléctricas", 
    texto:"¿Qué es la intensidad de corriente eléctrica?", 
    opciones:["La cantidad de carga eléctrica que atraviesa un conductor por unidad de tiempo.","La diferencia de potencial.","La oposición al paso de la corriente.","La energía consumida."], 
    correctaTexto:"La cantidad de carga eléctrica que atraviesa un conductor por unidad de tiempo.",
    explicacion: "Es el 'caudal' de electricidad. Imagina una tubería de agua: la intensidad sería la cantidad de litros que pasan por segundo. Se mide en Amperios (A)."
  },
  { 
    id:1003, 
    tema:"Magnitudes eléctricas", 
    texto:"¿Qué es la tensión eléctrica?", 
    opciones:["La diferencia de potencial eléctrico entre dos puntos.","La intensidad de corriente.","La resistencia.","La potencia."], 
    correctaTexto:"La diferencia de potencial eléctrico entre dos puntos.",
    explicacion: "Es la 'fuerza' que empuja a los electrones. Sin diferencia de potencial (voltaje) entre dos puntos, la corriente no se mueve. Se mide en Voltios (V)."
  },
  { 
    id:1004, 
    tema:"Magnitudes eléctricas", 
    texto:"¿Qué es la resistencia eléctrica?", 
    opciones:["La oposición que presenta un material al paso de la corriente.","La capacidad de producir energía.","La tensión.","La intensidad máxima."], 
    correctaTexto:"La oposición que presenta un material al paso de la corriente.",
    explicacion: "Es el freno que pone el material al paso de los electrones. Cuanta más resistencia, más difícil le resulta pasar a la corriente y más calor se genera. Se mide en Ohmios (Ω)."
  },
  { 
    id:1005, 
    tema:"Unidades", 
    texto:"¿En qué unidad se mide la intensidad?", 
    opciones:["Amperios (A).","Voltios (V).","Ohmios (Ω).","Vatios (W)."], 
    correctaTexto:"Amperios (A).",
    explicacion: "En honor a André-Marie Ampère. Un Amperio equivale al paso de un Culombio de carga por segundo."
  },
  { 
    id:1006, 
    tema:"Unidades", 
    texto:"¿En qué unidad se mide la tensión?", 
    opciones:["Voltios (V).","Amperios (A).","Ohmios (Ω).","Julios (J)."], 
    correctaTexto:"Voltios (V).",
    explicacion: "En honor a Alessandro Volta. En las viviendas de España la tensión estándar es de 230 Voltios."
  },
  { 
    id:1007, 
    tema:"Unidades", 
    texto:"¿En qué unidad se mide la resistencia?", 
    opciones:["Ohmios (Ω).","Amperios (A).","Voltios (V).","Vatios (W)."], 
    correctaTexto:"Ohmios (Ω).",
    explicacion: "En honor a Georg Simon Ohm. Se representa con la letra griega Omega (Ω)."
  },
  { 
    id:1008, 
    tema:"Potencia", 
    texto:"¿Qué es la potencia eléctrica?", 
    opciones:["La energía consumida o generada por unidad de tiempo.","La tensión.","La intensidad.","La resistencia."], 
    correctaTexto:"La energía consumida o generada por unidad de tiempo.",
    explicacion: "Es la velocidad a la que se consume la energía. Se mide en Vatios (W). Si la energía es el trabajo total, la potencia es lo rápido que lo haces."
  },
  { 
    id:1009, 
    tema:"Seguridad", 
    texto:"¿Qué riesgo puede producir la corriente en el cuerpo humano?", 
    opciones:["Riesgos graves para la salud.","Solo calentamiento.","Daños materiales.","Ningún riesgo."], 
    correctaTexto:"Riesgos graves para la salud.",
    explicacion: "Desde calambres (tetanización muscular) hasta paradas cardíacas o quemaduras internas graves, dependiendo de la intensidad y el tiempo de contacto."
  },
  { 
    id:1010, 
    tema:"Normativa", 
    texto:"¿Qué reglamento regula la baja tensión en España?", 
    opciones:["El Reglamento Electrotécnico para Baja Tensión (REBT).","El Reglamento de Alta Tensión.","El CTE.","Las normas ISO."], 
    correctaTexto:"El Reglamento Electrotécnico para Baja Tensión (REBT).",
    explicacion: "Aprobado por el Real Decreto 842/2002. Es la norma de obligado cumplimiento para garantizar la seguridad de las instalaciones y personas."
  },
  { 
    id:1011, 
    tema:"Electricidad", 
    texto:"¿Qué es la corriente continua?", 
    opciones:["La que circula siempre en el mismo sentido.","La que cambia de sentido.","La doméstica.","La trifásica."], 
    correctaTexto:"La que circula siempre en el mismo sentido.",
    explicacion: "Los electrones viajan siempre del polo negativo al positivo. Es la típica de baterías, pilas y electrónica (móviles, ordenadores)."
  },
  { 
    id:1012, 
    tema:"Electricidad", 
    texto:"¿Qué es la corriente alterna?", 
    opciones:["La que cambia periódicamente de sentido.","La continua.","La de baterías.","La estática."], 
    correctaTexto:"La que cambia periódicamente de sentido.",
    explicacion: "Los electrones oscilan adelante y atrás. En España cambian de sentido 50 veces por segundo (50 Hz). Es la más eficiente para transportar energía lejos."
  },
  { 
    id:1013, 
    tema:"Suministro", 
    texto:"¿Qué corriente se usa en viviendas?", 
    opciones:["Corriente alterna.","Corriente continua.","Corriente pulsante.","Corriente estática."], 
    correctaTexto:"Corriente alterna.",
    explicacion: "La red de distribución nos entrega corriente alterna a 230V. Aunque luego muchos aparatos (TV, PC) la transforman a continua internamente para funcionar."
  },
  { 
    id:1014, 
    tema:"Tensión", 
    texto:"¿Qué tensión es habitual en viviendas?", 
    opciones:["230 V.","220 V.","400 V.","125 V."], 
    correctaTexto:"230 V.",
    explicacion: "Según el REBT actual, la tensión nominal monofásica en España se normalizó a 230 V (antes era 220 V)."
  },
  { 
    id:1015, 
    tema:"Potencia", 
    texto:"Relación entre potencia, tensión e intensidad.", 
    opciones:["P = V × I","P = V + I","P = V / I","P = I / V"], 
    correctaTexto:"P = V × I",
    explicacion: "Fórmula fundamental: Potencia (Vatios) = Tensión (Voltios) x Intensidad (Amperios). Truco: P = V·I ('Pavi')."
  },
  { 
    id:1016, 
    tema:"Conductores", 
    texto:"¿Material conductor más usado?", 
    opciones:["Cobre.","Hierro.","Plomo.","Acero."], 
    correctaTexto:"Cobre.",
    explicacion: "El cobre ofrece una excelente conductividad y flexibilidad a un precio razonable. El aluminio también se usa, pero principalmente en líneas de distribución."
  },
  { 
    id:1017, 
    tema:"Instalaciones", 
    texto:"Función del aislamiento.", 
    opciones:["Evitar contactos y derivaciones.","Aumentar intensidad.","Reducir tensión.","Mejorar potencia."], 
    correctaTexto:"Evitar contactos y derivaciones.",
    explicacion: "El plástico que recubre el cable evita que la corriente se escape (cortocircuitos) o que nos electrocutemos al tocarlo."
  },
  { 
    id:1018, 
    tema:"Seguridad", 
    texto:"¿Qué es un contacto directo?", 
    opciones:["Contacto con partes activas.","Contacto con masas.","Contacto con tierra.","Contacto aislado."], 
    correctaTexto:"Contacto con partes activas.",
    explicacion: "Es tocar directamente un cable pelado, un borne o cualquier parte que DEBE tener tensión normalmente."
  },
  { 
    id:1019, 
    tema:"Seguridad", 
    texto:"¿Qué es un contacto indirecto?", 
    opciones:["Contacto con masas en tensión.","Contacto directo.","Contacto aislado.","Contacto con neutro."], 
    correctaTexto:"Contacto con masas en tensión.",
    explicacion: "Es tocar la carcasa metálica de un aparato (lavadora, nevera) que NO debería tener tensión, pero la tiene por un fallo de aislamiento interno."
  },
  { 
    id:1020, 
    tema:"Protecciones", 
    texto:"Finalidad de las protecciones.", 
    opciones:["Proteger personas e instalación.","Reducir consumo.","Aumentar potencia.","Mejorar eficiencia."], 
    correctaTexto:"Proteger personas e instalación.",
    explicacion: "Los automáticos y diferenciales no están para ahorrar luz, sino para evitar incendios (instalación) y electrocuciones (personas)."
  },
  { 
    id:1021, 
    tema:"Ley Ohm", 
    texto:"Si aumentamos la intensidad que circula por un conductor (a igualdad de resistencia), ¿qué ocurre con la tensión?", 
    opciones:["Aumenta (son directamente proporcionales).","Disminuye.","Se mantiene igual.","Se hace cero."], 
    correctaTexto:"Aumenta (son directamente proporcionales).",
    explicacion: "Según la Ley de Ohm (V = I · R), si la resistencia es fija y sube la intensidad (I), el voltaje (V) tiene que subir obligatoriamente."
  },
  { 
    id:1022, 
    tema:"Instalación", 
    texto:"Según el temario, ¿cuál es el 'cuarto paso' en el montaje de una instalación?", 
    opciones:["Conectar protecciones y mecanismos y comprobar.","Marcar ubicaciones.","Meter cables.","Realizar conexiones en cajas."], 
    correctaTexto:"Conectar protecciones y mecanismos y comprobar.",
    explicacion: "El orden lógico es: 1. Marcar/Rozas -> 2. Meter cables -> 3. Empalmar en cajas -> 4. Conectar mecanismos y protecciones finales."
  },
  { 
    id:1023, 
    tema:"Corriente", 
    texto:"En corriente continua, ¿cuál es el color normalizado para el polo positivo?", 
    opciones:["Rojo.","Negro.","Azul.","Amarillo."], 
    correctaTexto:"Rojo.",
    explicacion: "Estándar universal: Rojo para Positivo (+), Negro para Negativo (-). En fotovoltaica a veces se usan ambos negros con marcas, pero el rojo es la referencia."
  },
  { 
    id:1024, 
    tema:"Componentes", 
    texto:"¿Qué elemento protege contra sobretensiones transitorias (ej. rayos)?", 
    opciones:["Protector contra sobretensiones.","Diferencial.","Magnetotérmico.","Fusible."], 
    correctaTexto:"Protector contra sobretensiones.",
    explicacion: "Es un dispositivo específico que deriva los picos de voltaje muy altos y rápidos (como un rayo) a tierra para que no quemen los electrodomésticos."
  },
  { 
    id:1025, 
    tema:"Magnitudes", 
    texto:"¿Qué fórmula relaciona Potencia, Tensión e Intensidad?", 
    opciones:["P = V x I","P = V / I","P = I / V","P = V + I"], 
    correctaTexto:"P = V x I",
    explicacion: "Recuerda: Potencia (W) = Voltaje (V) x Intensidad (A). Es la base para calcular cuánto consume cualquier aparato."
  },
  { 
    id:1026, 
    tema:"Sist. Trifásico", 
    texto:"¿Cuántos cables activos (fases) tiene un sistema trifásico?", 
    opciones:["Tres fases (más neutro opcional).","Dos fases.","Una fase.","Cuatro fases."], 
    correctaTexto:"Tres fases (más neutro opcional).",
    explicacion: "Como su nombre indica, lleva 3 fases (L1, L2, L3) desfasadas 120º entre sí. Puede llevar Neutro (4 hilos) o no (3 hilos), pero las fases son siempre 3."
  },
  { 
    id:1027, 
    tema:"Esquemas", 
    texto:"En un esquema multifilar:", 
    opciones:["Aparecen todos los cables y dónde van conectados.","Se representa todo con una sola línea.","No aparecen los receptores.","Es un plano de situación."], 
    correctaTexto:"Aparecen todos los cables y dónde van conectados.",
    explicacion: "Es el esquema detallado. A diferencia del unifilar (una raya = un tubo), aquí dibujas cada cable individualmente. Es más lioso pero más preciso para montar."
  },
  { 
    id:1028, 
    tema:"Protección", 
    texto:"¿Qué diferencia principal tiene un fusible respecto a un PIA?", 
    opciones:["El fusible hay que sustituirlo al fundirse, el PIA se rearma.","El fusible es para personas, el PIA para equipos.","El fusible es rearmable.","Ninguna."], 
    correctaTexto:"El fusible hay que sustituirlo al fundirse, el PIA se rearma.",
    explicacion: "El fusible se quema físicamente (se rompe el hilo) y hay que tirarlo. El PIA (automático) es un interruptor que salta y se puede volver a subir."
  },
  { 
    id:1029, 
    tema:"Instalación", 
    texto:"¿Para qué sirve una guía pasacables?", 
    opciones:["Para meter los cables por el interior de los tubos.","Para medir la longitud del tubo.","Para pelar cables.","Para conectar regletas."], 
    correctaTexto:"Para meter los cables por el interior de los tubos.",
    explicacion: "Es una varilla flexible (nylon o acero) que se mete primero por el tubo vacío, se enganchan los cables en la punta y se tira de ella para pasarlos."
  },
  { 
    id:1030, 
    tema:"Conceptos", 
    texto:"La frase 'la electricidad ni se crea ni se destruye...' termina con:", 
    opciones:["Se transforma.","Se pierde.","Se almacena.","Se gasta."], 
    correctaTexto:"Se transforma.",
    explicacion: "Principio de conservación de la energía. La energía eléctrica se transforma en luz, calor o movimiento, pero no desaparece."
  },
  { 
    id: 1031, 
    tema: "Magnitudes", 
    texto: "¿Qué instrumento se usa para medir la frecuencia?", 
    opciones: ["Frecuencímetro.", "Vatímetro.", "Amperímetro.", "Ohmímetro."], 
    correctaTexto: "Frecuencímetro.",
    explicacion: "Su nombre lo dice todo. Mide los Hercios (Hz). En España la red eléctrica trabaja a 50 Hz clavados."
  },
  { 
    id: 1032, 
    tema: "Conceptos", 
    texto: "¿Qué es un circuito abierto?", 
    opciones: ["Un circuito interrumpido por el que no circula corriente.", "Un circuito funcionando.", "Un cortocircuito.", "Un circuito sin resistencia."], 
    correctaTexto: "Un circuito interrumpido por el que no circula corriente.",
    explicacion: "Es como un puente levadizo levantado: los coches (electrones) no pueden pasar. Si apagas el interruptor, abres el circuito."
  },
  { 
    id: 1033, 
    tema: "Seguridad", 
    texto: "El contacto de una persona con dos fases activas simultáneamente se considera:", 
    opciones: ["Contacto directo.", "Contacto indirecto.", "Cortocircuito.", "Defecto de aislamiento."], 
    correctaTexto: "Contacto directo.",
    explicacion: "Estás tocando directamente las partes que tienen tensión. Es el accidente más peligroso porque recibes la descarga completa entre fases (400V)."
  },
  { 
    id: 1034, 
    tema: "Componentes", 
    texto: "¿Cuál es la función principal de un condensador?", 
    opciones: ["Almacenar energía eléctrica.", "Disipar calor.", "Generar luz.", "Proteger contra sobrecargas."], 
    correctaTexto: "Almacenar energía eléctrica.",
    explicacion: "Actúa como un pequeño depósito de energía temporal (campo eléctrico). Se usa para arrancar motores, filtrar señales o compensar reactiva."
  },
  { 
    id: 1035, 
    tema: "Unidades", 
    texto: "¿En qué unidad se mide la capacidad de una batería?", 
    opciones: ["Amperios-hora (Ah).", "Voltios (V).", "Vatios (W).", "Ohmios (Ω)."], 
    correctaTexto: "Amperios-hora (Ah).",
    explicacion: "Indica cuántos amperios puede dar durante una hora. Una batería de 50Ah podría dar 50 amperios durante 1 hora, o 1 amperio durante 50 horas."
  },
  { 
    id: 1036, 
    tema: "Transporte", 
    texto: "Para transportar electricidad a largas distancias, ¿por qué se eleva la tensión a miles de voltios (kV)?", 
    opciones: ["Para reducir la intensidad y evitar pérdidas.", "Para que vaya más rápido.", "Para aumentar la resistencia.", "Para convertirla en continua."], 
    correctaTexto: "Para reducir la intensidad y evitar pérdidas.",
    explicacion: "Al subir el voltaje, baja la intensidad (para la misma potencia). Como el calor que se pierde en el cable depende de la intensidad (Efecto Joule), interesa que la 'I' sea mínima."
  },
  { 
    id: 1037, 
    tema: "Circuitos", 
    texto: "En un circuito en paralelo (como el de la imagen), ¿qué característica tiene la tensión?", 
    imagen: "https://www.ieslosalbares.es/tecnologia/Electricidad%20II/circuito_mixto_con_bombillas.jpg", 
    opciones: ["Es la misma en todos los puntos.", "Se divide entre los receptores.", "Es nula.", "Depende de la intensidad."], 
    correctaTexto: "Es la misma en todos los puntos.",
    explicacion: "En paralelo, todos los receptores están conectados directamente a la fuente. Por eso todos los enchufes de tu casa tienen 230V, porque están en paralelo."
  },
  { 
    id: 1038, 
    tema: "Corriente Alterna", 
    texto: "Según el temario, ¿cuántas veces por segundo cambia de sentido la corriente alterna (ciclos)?", 
    opciones: ["50 veces por segundo (50 Hz).", "60 veces por segundo.", "100 veces por segundo.", "No cambia de sentido."], 
    correctaTexto: "50 veces por segundo (50 Hz).",
    explicacion: "Es la frecuencia estándar europea: 50 Hz. Significa que la polaridad cambia 50 ciclos completos cada segundo."
  },
  { 
    id: 1039, 
    tema: "Herramientas", 
    texto: "¿Qué instrumento se utiliza específicamente para medir la resistencia de la toma de tierra?", 
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Digital_Earth_resistance_tester.jpg", 
    opciones: ["Telurómetro.", "Amperímetro.", "Vatímetro.", "Buscapolos."], 
    correctaTexto: "Telurómetro.",
    explicacion: "Viene de 'Tellus' (Tierra). Es el aparato específico para comprobar que la pica de tierra hace buen contacto con el suelo."
  },
  { 
    id: 1040, 
    tema: "Instalación", 
    texto: "En el montaje de una instalación, ¿para qué se utiliza esta herramienta (guía)?", 
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Fish_tape.jpg", 
    opciones: ["Para meter los cables por el interior de los tubos.", "Para medir la longitud del tubo.", "Para pelar los cables.", "Para conectar las regletas."], 
    correctaTexto: "Para meter los cables por el interior de los tubos.",
    explicacion: "Sin la guía es imposible empujar un cable flexible por un tubo corrugado largo. La guía entra primero porque es rígida y luego arrastra el cable."
  },
  { 
    id: 1041, 
    tema: "Componentes", 
    texto: "Según el temario, ¿qué función realizan los 'elementos de maniobra' (como un interruptor)?", 
    opciones: ["Permiten accionar o controlar los receptores a voluntad.", "Consumen energía eléctrica.", "Protegen contra cortocircuitos.", "Generan electricidad."], 
    correctaTexto: "Permiten accionar o controlar los receptores a voluntad.",
    explicacion: "Maniobra = Control. Son los elementos que nos permiten decidir cuándo encendemos o apagamos una luz o motor."
  },
  { 
    id: 1042, 
    tema: "Instalación", 
    texto: "¿Cómo se llama este elemento utilizado para realizar conexiones en las cajas de registro?", 
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Luster_terminals.JPG", 
    opciones: ["Fichas de empalme o regletas.", "Cinta aislante.", "Soldadura de estaño.", "Bornas de tierra."], 
    correctaTexto: "Fichas de empalme o regletas.",
    explicacion: "Es la forma correcta y segura de unir cables. Los empalmes hechos solo retorciendo cables y poniendo cinta aislante están prohibidos (chapuza)."
  },
  { 
    id: 1043, 
    tema: "Identificación", 
    texto: "En un sistema de corriente alterna monofásico, ¿cuál es el color normalizado para el cable Neutro?", 
    opciones: ["Azul.", "Negro.", "Marrón.", "Amarillo-Verde."], 
    correctaTexto: "Azul.",
    explicacion: "El REBT es estricto: Neutro SIEMPRE Azul claro. Tierra SIEMPRE Amarillo-Verde. La Fase puede ser Negro, Marrón o Gris."
  },
  { 
    id: 1044, 
    tema: "Protección", 
    texto: "¿Qué es el 'poder de corte' de un interruptor magnetotérmico como el de la foto?", 
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Micro_Circuit_Breaker.jpg", 
    opciones: ["La intensidad máxima que es capaz de interrumpir sin destruirse.", "La rapidez con la que dispara.", "El voltaje máximo que soporta.", "La temperatura a la que se funde."], 
    correctaTexto: "La intensidad máxima que es capaz de interrumpir sin destruirse.",
    explicacion: "Ante un cortocircuito brutal (miles de amperios), el interruptor debe ser capaz de abrirse sin explotar o soldarse. Eso es el poder de corte (ej: 6000A)."
  },
  { 
    id: 1045, 
    tema: "Mantenimiento", 
    texto: "Según el documento, ¿cuál es el primer paso fundamental para localizar una avería eléctrica?", 
    opciones: ["Conocer las partes de la instalación interpretando los esquemas.", "Cambiar todos los fusibles.", "Desmontar el cuadro general.", "Aumentar la potencia contratada."], 
    correctaTexto: "Conocer las partes de la instalación interpretando los esquemas.",
    explicacion: "No puedes arreglar lo que no entiendes. Antes de tocar nada, debes mirar el esquema para saber cómo está montado el circuito."
  },
  { 
    id: 1046, 
    tema: "Circuitos", 
    texto: "¿Qué tipo de conexión representa este esquema?", 
    imagen: "https://ambientech.org/wp-content/uploads/2024/04/circuito-serie.jpg",
    opciones: ["Serie", "Paralelo", "Mixto", "Estrella"], 
    correctaTexto: "Serie",
    explicacion: "En serie, los componentes van uno detrás de otro en fila india. Si quitas uno, se corta el circuito entero (como las luces de navidad antiguas)."
  },
  { 
    id: 1046, // Nota: Cuidado con IDs duplicados en tu código original, este debería ser único
    tema: "Ley de Ohm", 
    texto: "Según el triángulo de la Ley de Ohm de la imagen, ¿cuál es la fórmula para calcular la Tensión (V)?", 
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Ohm's_law_triangle.svg", 
    opciones: ["V = I · R", "V = I / R", "V = R / I", "V = P · I"], 
    correctaTexto: "V = I · R",
    explicacion: "El triángulo es un truco visual. Si tapas la V (arriba), te quedan la I y la R abajo juntas, lo que indica multiplicación."
  },
  { 
    id: 1047, 
    tema: "Corriente", 
    texto: "La imagen muestra una señal que varía en el tiempo. ¿A qué tipo de corriente corresponde?", 
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Sine_wave_2.svg", 
    opciones: ["Corriente Alterna (CA).", "Corriente Continua (CC).", "Corriente Pulsatoria.", "Corriente Estática."], 
    correctaTexto: "Corriente Alterna (CA).",
    explicacion: "La onda senoidal que sube y baja cruzando el cero representa que la corriente va y viene, cambiando de polaridad."
  },
  {
    id: 1048,
    tema: "Código de Colores",
    texto: "En un cable de alimentación estándar (como el de la foto), ¿qué indica el cable de color amarillo y verde?",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7d/HomeEarthRodAustralia1.jpg",
    opciones: [ "Toma de tierra (Protección).", "Fase.", "Neutro.", "Retorno." ],
    correctaTexto: "Toma de tierra (Protección).",
    explicacion: "Es el código de color internacional para la protección (PE). Es bicolor (amarillo-verde) para que no se confunda con ningún otro cable, ni siquiera por daltónicos."
  },
  { 
    id: 1049, 
    tema: "Simbología", 
    texto: "¿Qué componente eléctrico se representa con este símbolo en zig-zag?", 
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Resistor_symbol_America.svg", 
    opciones: ["Una resistencia.", "Una bobina.", "Un condensador.", "Un interruptor."], 
    correctaTexto: "Una resistencia.",
    explicacion: "El zig-zag representa la dificultad que tiene la corriente para pasar (como un camino de obstáculos). Es el símbolo americano (el europeo es un rectángulo)."
  },
  { 
    id: 1050, 
    tema: "Herramientas", 
    texto: "Para medir Tensión, Intensidad y Resistencia con un solo aparato (foto), usamos un...", 
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Digital_Multimeter_Aka.jpg", 
    opciones: ["Polímetro o Multímetro.", "Telurómetro.", "Vatímetro.", "Luxómetro."], 
    correctaTexto: "Polímetro o Multímetro.",
    explicacion: "Es la navaja suiza del electricista. Combina Voltímetro, Amperímetro y Ohmímetro en un solo dispositivo."
  },
  { 
    id: 1051, 
    tema: "Identificación", 
    texto: "¿Con qué color identificamos el cable de toma tierra?", 
    opciones: ["Amarillo y verde.", "Negro y verde.", "Marrón y verde.", "Gris y verde."], 
    correctaTexto: "Amarillo y verde.",
    explicacion: "Exclusivo para conductores de protección. Está prohibido usar este color para cualquier otra cosa."
  },
  { 
    id: 1052, 
    tema: "Esquemas", 
    texto: "Podemos decir que un esquema unifilar son...", 
    opciones: ["Esquemas sencillos y fáciles de entender, cada circuito se representa por una única línea.", "Esquemas complicados y difíciles de entender.", "Cada circuito se representa en diferentes líneas y secciones.", "Los esquemas son para pequeñas instalaciones."], 
    correctaTexto: "Esquemas sencillos y fáciles de entender, cada circuito se representa por una única línea.",
    explicacion: "Unifilar = Un hilo. Aunque el cable real tenga 3 conductores (Fase, Neutro, Tierra), en el dibujo se pintan como una sola raya para simplificar."
  },
  { 
    id: 1053, 
    tema: "Normativa", 
    texto: "Las normas técnicas sobre cómo y de qué manera debemos realizar la puesta a tierra las encontramos en...", 
    opciones: ["El REBT (Reglamento Electrotécnico de Baja Tensión).", "En las normas UNE.", "En las normas del buen instalador.", "No existen tales normas, sigues tú criterio profesional."], 
    correctaTexto: "El REBT (Reglamento Electrotécnico de Baja Tensión).",
    explicacion: "Concretamente en la ITC-BT-18. Ahí se define cómo deben ser las picas, los conductores y los valores de resistencia."
  },
  { 
    id: 1054, 
    tema: "Protecciones", 
    texto: "¿Qué diferencia encontramos entre un PIA y un fusible?", 
    opciones: ["El PIA lo rearmamos y en el fusible no podemos hacer esto, sino que debemos sustituirlo.", "Son los elementos que protegen a los circuitos eléctricos y, por tanto, a los receptores eléctricos.", "Los dos dispositivos hay que sustituirlos.", "Los dos dispositivos nos protegen sobre contactos indirectos."], 
    correctaTexto: "El PIA lo rearmamos y en el fusible no podemos hacer esto, sino que debemos sustituirlo.",
    explicacion: "El fusible es de 'un solo uso' (se funde). El PIA es electromecánico y rearmable, lo que es mucho más cómodo en viviendas."
  },
  { 
    id: 1055, 
    tema: "Potencia", 
    texto: "Si decimos que la tarifa eléctrica contratada en un domicilio es de menos de 8 kW, estamos hablando de:", 
    opciones: ["Potencia.", "Intensidad.", "Voltaje.", "Ohmios."], 
    correctaTexto: "Potencia.",
    explicacion: "Los Kilovatios (kW) son unidad de potencia. Es la capacidad máxima que tienes contratada antes de que salte el ICP."
  },
  { 
    id: 1056, 
    tema: "Circuitos", 
    texto: "¿Qué tipos de circuitos encontramos en las instalaciones eléctricas?", 
    opciones: ["Circuitos serie, paralelo y mixto.", "Circuitos serie.", "Circuitos paralelos y mixtos.", "Circuitos series y paralelos."], 
    correctaTexto: "Circuitos serie, paralelo y mixto.",
    explicacion: "Son las tres configuraciones topológicas básicas. En vivienda casi todo es paralelo, pero en electrónica se usa mucho el mixto."
  },
  { 
    id: 1057, 
    tema: "Ley de Ohm", 
    texto: "¿Se puede afirmar que la tensión es igual a la potencia dividido por la intensidad que circula en un circuito eléctrico?", 
    opciones: ["Sí se puede afirmar, despejando la fórmula de la potencia (P=V·I -> V=P/I).", "Según la intensidad que circule.", "Según los voltios que circulen.", "Todas son falsas."], 
    correctaTexto: "Sí se puede afirmar, despejando la fórmula de la potencia (P=V·I -> V=P/I).",
    explicacion: "Es matemáticas pura: Si P = V · I, entonces V = P / I. Si tienes 2200W y 10A, la tensión son 220V."
  },
  { 
    id: 1058, 
    tema: "Circuitos", 
    texto: "En circuitos en serie, la intensidad es la misma en todos los puntos del circuito.", 
    opciones: ["Es cierta la afirmación.", "Es falsa la afirmación.", "Dependen de los dispositivos conectados.", "No es la intensidad es la tensión."], 
    correctaTexto: "Es cierta la afirmación.",
    explicacion: "En serie solo hay un camino posible. Todos los electrones que salen de la pila tienen que pasar por todos los componentes, no hay atajos."
  },
  { 
    id: 1059, 
    tema: "Sistemas", 
    texto: "En un sistema monofásico, cada circuito eléctrico consta de...", 
    opciones: ["Tres cables (cable de fase, neutro y toma de tierra).", "30 receptores máximo.", "Dos cables (cable de fase y cable neutro).", "Tres seccionadores uno por cada conductor."], 
    correctaTexto: "Tres cables (cable de fase, neutro y toma de tierra).",
    explicacion: "Aunque funcionalmente bastarían dos (Fase y Neutro), la normativa exige el tercero (Tierra) por seguridad obligatoria."
  },
  { 
    id: 1060, 
    tema: "Puesta a Tierra", 
    texto: "Las picas o electrodos de las instalaciones de toma tierra se enterrarán a una profundidad mínima de...", 
    opciones: ["Medio metro (0,5 m).", "Un metro.", "Dos metros.", "No hay profundidad mínima."], 
    correctaTexto: "Medio metro (0,5 m).",
    explicacion: "Para asegurar que hacen buen contacto con terreno húmedo y estable, y para protegerlas de obras superficiales."
  },
  { 
    id: 1061, 
    tema: "Ley de Ohm", 
    texto: "¿Qué magnitudes eléctricas relaciona la Ley de Ohm?", 
    opciones: ["Tensión, resistencia e intensidad.", "Tensión, potencia.", "Tensión, intensidad y potencia.", "Intensidad y potencia."], 
    correctaTexto: "Tensión, resistencia e intensidad.",
    explicacion: "V = I · R. Relaciona la fuerza (V), el flujo (I) y la oposición (R)."
  },
  { 
    id: 1062, 
    tema: "Circuitos", 
    texto: "En circuitos en paralelo, la tensión es la misma en todos los puntos, y la intensidad resultante será...", 
    opciones: ["La suma de todas ellas (suma de las intensidades de cada rama).", "Depende de la potencia del circuito.", "Depende de las cargas asignadas.", "Todas son falsas."], 
    correctaTexto: "La suma de todas ellas (suma de las intensidades de cada rama).",
    explicacion: "Ley de nodos de Kirchhoff: La corriente total que entra se reparte por los caminos (ramas) y luego se vuelve a juntar."
  },
  { 
    id: 1063, 
    tema: "Suministro", 
    texto: "¿Quién es el encargado de hacer llegar o suministrar la electricidad hasta las viviendas?", 
    opciones: ["La empresa distribuidora.", "La empresa instaladora.", "La empresa productora.", "Las empresas dedicadas a la energía eléctrica."], 
    correctaTexto: "La empresa distribuidora.",
    explicacion: "La Productora la fabrica, la Transportista la lleva lejos en Alta Tensión, y la Distribuidora te la lleva a la puerta de casa en Baja Tensión."
  },
  { 
    id: 1064, 
    tema: "Identificación", 
    texto: "¿Con qué color identificamos el cable neutro?", 
    opciones: ["Azul.", "Negro.", "Marrón.", "Gris."], 
    correctaTexto: "Azul.",
    explicacion: "Azul claro. Es el color frío por excelencia, contraparte de la Fase (colores oscuros/cálidos)."
  },
  { 
    id: 1065, 
    tema: "Corriente", 
    texto: "¿Qué tipos de corriente existen fundamentalmente en una instalación eléctrica?", 
    opciones: ["Alterna y continua.", "Monofásica y alterna.", "Trifásica y continua.", "Monofásica y trifásica."], 
    correctaTexto: "Alterna y continua.",
    explicacion: "Son los dos grandes tipos físicos. Alterna para la red y potencia; Continua para electrónica y baterías."
  },
  { 
    id: 1066, 
    tema: "Identificación", 
    texto: "Los colores que determinan las fases en un sistema trifásico son...", 
    opciones: ["Fase 1: negro, Fase 2: marrón, Fase 3: gris.", "Fase 1: negro, Fase 2: marrón, Fase 3: azul.", "Fase 1: negro, Fase 2: marrón, Fase 3: verde.", "Fase 1: Rojo, Fase 2: marrón, Fase 3: azul."], 
    correctaTexto: "Fase 1: negro, Fase 2: marrón, Fase 3: gris.",
    explicacion: "Mnemotecnia: Los colores oscuros y sobrios (Marrón, Negro, Gris) son siempre FASES. Azul es neutro y Bicolor es tierra."
  },
  { 
    id: 1067, 
    tema: "Seguridad", 
    texto: "Entre los objetivos del cable de toma tierra está la de:", 
    opciones: ["Limitar la tensión o voltaje con respecto a tierra en caso de un fallo de aislamiento.", "Limitar la intensidad con respecto a tierra.", "Tener un color llamativo para ser identificado.", "Reducir el consumo de los receptores."], 
    correctaTexto: "Limitar la tensión o voltaje con respecto a tierra en caso de un fallo de aislamiento.",
    explicacion: "Al conectar las carcasas a tierra, evitamos que se pongan a 230V si hay un fallo. La tensión se deriva al suelo y salta el diferencial."
  },
  { 
    id: 1068, 
    tema: "Esquemas", 
    texto: "En un esquema multifilar se representan...", 
    opciones: ["Todos los cables y dónde van a ir conectados.", "Algunos de los cables y dónde van a ir conectados.", "Aparecen todos los cables, pero no dónde van a ir conectados.", "Los cables solo activos del circuito."], 
    correctaTexto: "Todos los cables y dónde van a ir conectados.",
    explicacion: "Es la representación completa 'hilo a hilo'. Permite seguir el recorrido exacto de la corriente por cada conductor."
  },
  { 
    id: 1069, 
    tema: "Definiciones", 
    texto: "La potencia máxima capaz de suministrar una instalación a los equipos conectados (diseño/ejecución) se define como:", 
    opciones: ["Potencia prevista o instalada.", "Potencia activa.", "Potencia nominal.", "Potencia mecánica."], 
    correctaTexto: "Potencia prevista o instalada.",
    explicacion: "Es la potencia para la que se ha calculado y diseñado la instalación (sección de cables, fusibles). No puedes contratar más de lo que está 'previsto' o 'instalado'."
  },
  { 
    id: 1070, 
    tema: "Esquemas", 
    texto: "El esquema de distribución eléctrica TT se caracteriza porque:", 
    opciones: ["El neutro está conectado a tierra y las masas de la instalación a una toma de tierra separada.", "Neutro y protección son el mismo cable.", "No tiene tierra.", "Las masas se conectan al neutro."], 
    correctaTexto: "El neutro está conectado a tierra y las masas de la instalación a una toma de tierra separada.",
    explicacion: "TT = Tierra-Tierra. La primera T es del transformador (Neutro a tierra) y la segunda T es del usuario (sus masas a SU propia tierra)."
  },
  { 
    id: 1071, 
    tema: "Definiciones", 
    texto: "El intervalo entre los límites de tensión previstas para alimentar el aparato se define como:", 
    opciones: ["Gama nominal de tensiones.", "Tensión asignada.", "Tensión nominal.", "Tensión tolerable."], 
    correctaTexto: "Gama nominal de tensiones.",
    explicacion: "Ej: Un aparato que funciona de 110V a 240V. Esa franja es su 'gama nominal' de funcionamiento."
  },
  { 
    id: 1072, 
    tema: "Seguridad", 
    texto: "La tensión que aparece entre partes accesibles simultáneamente al ocurrir un fallo de aislamiento se llama:", 
    opciones: ["Tensión de contacto.", "Tensión de defecto.", "Tensión nominal.", "Tensión asignada."], 
    correctaTexto: "Tensión de contacto.",
    explicacion: "Es el voltaje real que recibiría una persona si tocara la máquina averiada en ese momento. Si la tierra es buena, esta tensión será baja y segura."
  },
  { 
    id: 1073, 
    tema: "Seguridad", 
    texto: "¿Cómo se define el 'Contacto Indirecto'?", 
    opciones: ["Contacto con partes que se han puesto bajo tensión por un fallo de aislamiento.", "Contacto con partes activas.", "Contacto con partes reactivas.", "Contacto directo con la fase."], 
    correctaTexto: "Contacto con partes que se han puesto bajo tensión por un fallo de aislamiento.",
    explicacion: "Es 'indirecto' porque tocas algo que NO debería tener corriente (la chapa de la lavadora), pero la tiene por culpa de una avería interna."
  },
  { 
    id: 1074, 
    tema: "Seguridad", 
    texto: "¿Cómo se define el 'Contacto Directo'?", 
    opciones: ["Contacto de personas o animales con partes activas de los materiales y equipos.", "Contacto por fallo de aislamiento.", "Contacto con la carcasa.", "Contacto accidental con tierra."], 
    correctaTexto: "Contacto de personas o animales con partes activas de los materiales y equipos.",
    explicacion: "Es 'directo' porque tocas directamente la parte peligrosa (el cobre pelado, el borne del enchufe)."
  },
  { 
    id: 1075, 
    tema: "Normativa", 
    texto: "Todas las normas descritas en el Reglamento Electrotécnico de Baja Tensión (REBT) son de carácter...", 
    opciones: ["De obligado cumplimiento.", "Voluntario.", "Orientativo.", "Informativo."], 
    correctaTexto: "De obligado cumplimiento.",
    explicacion: "El REBT es Ley (Real Decreto). No es una sugerencia; si no lo cumples, la instalación es ilegal y peligrosa."
  },
  { 
    id: 1076, 
    tema: "Materiales", 
    texto: "La conductividad del Cobre (Cu) a 20ºC es de:", 
    opciones: ["56 m/(Ω·mm²).", "35 m/(Ω·mm²).", "45 m/(Ω·mm²).", "65 m/(Ω·mm²)."], 
    correctaTexto: "56 m/(Ω·mm²).",
    explicacion: "Es una constante física fundamental para los cálculos eléctricos. El Aluminio tiene 35."
  },
  { 
    id: 1080, 
    tema: "Identificación", 
    texto: "¿Qué colores determinan los cables de fase en un sistema trifásico?", 
    opciones: ["Negro, Marrón y Gris.", "Negro, Marrón y Azul.", "Negro y Azul.", "Rojo, Marrón y Azul."], 
    correctaTexto: "Negro, Marrón y Gris.",
    explicacion: "Son los tres colores oscuros permitidos. El orden habitual recomendado es Marrón (L1), Negro (L2), Gris (L3), aunque puede variar."
  },
  { 
    id: 1081, 
    tema: "Física", 
    texto: "En la corriente continua los electrones circulan siempre en la misma dirección, que es:", 
    opciones: ["Del polo negativo al polo positivo (sentido real).", "Del polo positivo al negativo.", "En dirección contraria.", "No circulan electrones."], 
    correctaTexto: "Del polo negativo al polo positivo (sentido real).",
    explicacion: "Ojo: El sentido 'convencional' (histórico) se dibuja de + a -. Pero el sentido 'real' físico de los electrones (que tienen carga negativa) es de - a +."
  },
  { 
    id: 1082, 
    tema: "Seguridad", 
    texto: "La instalación de un pararrayos interesa que descargue en un terreno que:", 
    opciones: ["Sea de poca resistencia (buena conductividad).", "Sea de mucha resistencia.", "Sea pedregoso.", "Sea aislante."], 
    correctaTexto: "Sea de poca resistencia (buena conductividad).",
    explicacion: "Queremos que el rayo se vaya a tierra lo más rápido posible. Si el terreno tiene mucha resistencia, el rayo podría buscar otro camino (la casa)."
  },
  { 
    id: 1083, 
    tema: "Esquemas", 
    texto: "¿Podemos afirmar que un esquema unifilar son...?", 
    opciones: ["Esquemas sencillos y fáciles de entender, cada circuito se representa por una única línea.", "Esquemas complicados.", "Para pequeñas instalaciones solo.", "Donde se dibujan todos los cables."], 
    correctaTexto: "Esquemas sencillos y fáciles de entender, cada circuito se representa por una única línea.",
    explicacion: "Su virtud es la simplicidad. Permiten ver la arquitectura de la instalación de un vistazo sin perderse en una maraña de cables."
  },
  { 
    id: 1084, 
    tema: "Normativa", 
    texto: "Todas las normas descritas en el REBT son de carácter:", 
    opciones: ["De obligado cumplimiento.", "Voluntario.", "Orientativo.", "Informativo."], 
    correctaTexto: "De obligado cumplimiento.",
    explicacion: "Es redundante pero vital recordarlo: El REBT es la ley suprema de las instalaciones eléctricas en España."
  },
  { 
    id: 1085, 
    tema: "Instalación", 
    texto: "Según el orden de montaje descrito en el temario, ¿qué acción corresponde al 'Segundo paso', una vez ubicados los tubos y cajas?", 
    opciones: ["Meter los cables por los tubos hasta las cajas de conexión.", "Conectar los mecanismos.", "Realizar los empalmes con regletas.", "Montar las protecciones en el cuadro."], 
    correctaTexto: "Meter los cables por los tubos hasta las cajas de conexión.", 
    explicacion: "El proceso lógico es: 1º Marcar y colocar tubos/cajas. 2º Introducir el cableado (con guía). 3º Realizar conexiones (empalmes) en cajas. 4º Conectar mecanismos y protecciones."
  },
  { 
    id: 1086, 
    tema: "Transporte", 
    texto: "El documento menciona que, además de la Alta Tensión en alterna, existe otro sistema de transporte denominado HVDC. ¿Qué es?", 
    opciones: ["Alta Tensión en Corriente Continua.", "Alta Velocidad de Distribución.", "Hidráulica Variable de Corriente.", "Herramienta de Verificación de Conductores."], 
    correctaTexto: "Alta Tensión en Corriente Continua.", 
    explicacion: "HVDC (High Voltage Direct Current) permite transportar electricidad a distancias enormes o por cables submarinos con menos pérdidas que la corriente alterna convencional."
  },
  { 
    id: 1087, 
    tema: "Magnitudes", 
    texto: "Utilizando el símil hidráulico del temario: si dos puntos eléctricos tienen el mismo potencial (mismo voltaje), ¿qué ocurre?", 
    opciones: ["No puede circular corriente entre ellos.", "Circula la máxima intensidad posible.", "Se produce un cortocircuito franco.", "La resistencia se vuelve infinita."], 
    correctaTexto: "No puede circular corriente entre ellos.", 
    explicacion: "Para que fluya la corriente (como el agua) es imprescindible que haya un 'desnivel' o diferencia de potencial. Si la tensión es idéntica en ambos puntos, los electrones no se mueven."
  },
  { 
    id: 1088, 
    tema: "Seguridad", 
    texto: "¿Por qué es fundamental que el cable y el sistema de toma de tierra tengan una resistencia eléctrica muy baja?", 
    opciones: ["Para que las corrientes de fuga encuentren un camino fácil de evacuación al terreno.", "Para que consuma menos energía.", "Para aumentar la tensión de la vivienda.", "Para que los fusibles no se fundan."], 
    correctaTexto: "Para que las corrientes de fuga encuentren un camino fácil de evacuación al terreno.", 
    explicacion: "La electricidad busca el camino de menor resistencia. Si la tierra tiene poca resistencia (es muy conductora), la corriente peligrosa se irá por ella antes que atravesar el cuerpo de una persona."
  },
  { 
    id: 1089, 
    tema: "Protección", 
    texto: "¿Cuál es la función específica de un pararrayos en un edificio según el texto?", 
    opciones: ["Captar el rayo y derivar su corriente directamente a la pica de tierra.", "Almacenar la energía de la tormenta para usarla luego.", "Evitar que caigan rayos en la zona (repelerlos).", "Convertir el rayo en corriente alterna de 230V."], 
    correctaTexto: "Captar el rayo y derivar su corriente directamente a la pica de tierra.", 
    explicacion: "Actúa como un 'escudo', atrayendo la descarga atmosférica para conducirla de forma segura al terreno, evitando que esa sobretensión destructiva entre en la instalación interior de la vivienda."
  }


,


// --- AMPLIACIÓN TEMA 1: DETALLES Y EJEMPLOS (IDs 1090-1109) ---
  {
    id: 1090,
    tema: "Fundamentos",
    texto: "¿Qué partículas componen el átomo y son las responsables de producir la electricidad?",
    opciones: ["Electrones, protones y neutrones.", "Solo electrones.", "Neutrones y fotones.", "Cationes y aniones."],
    correctaTexto: "Electrones, protones y neutrones.",
    explicacion: "El texto especifica que estas tres partículas, en diversa proporción, componen el átomo y se manifiestan en forma de electricidad."
  },
  {
    id: 1091,
    tema: "Generación",
    texto: "¿Por qué se dice que la electricidad debe ser consumida 'instantáneamente'?",
    opciones: ["Porque actualmente no es muy rentable almacenarla en grandes cantidades.", "Porque caduca.", "Porque se evapora.", "Porque daña las redes si se guarda."],
    correctaTexto: "Porque actualmente no es muy rentable almacenarla en grandes cantidades.",
    explicacion: "Aunque existen baterías experimentales, la regla general es que la electricidad se genera en el mismo momento que se demanda."
  },
  {
    id: 1092,
    tema: "Analogías",
    texto: "En el símil de la autopista para explicar el transporte eléctrico, ¿qué representa el 'número de carriles'?",
    opciones: ["La Tensión (Voltaje).", "La Intensidad.", "La Resistencia.", "La Potencia."],
    correctaTexto: "La Tensión (Voltaje).",
    explicacion: "El texto usa esta analogía: La Tensión es el ancho de la carretera (carriles) y la Intensidad es la cantidad de coches que pasan."
  },
  {
    id: 1093,
    tema: "Previsión",
    texto: "¿Cuáles son los dos grados de electrificación que determinan la previsión de potencia de una vivienda?",
    opciones: ["Básico y Elevado.", "Bajo y Alto.", "Monofásico y Trifásico.", "Doméstico e Industrial."],
    correctaTexto: "Básico y Elevado.",
    explicacion: "Son los dos niveles estándar que define el REBT según la superficie de la casa y los aparatos que se vayan a instalar (aire acondicionado, etc.)."
  },
  {
    id: 1094,
    tema: "Analogías",
    texto: "En el símil hidráulico, ¿a qué equivale que dos puntos estén a la misma altura?",
    opciones: ["A que están al mismo potencial eléctrico (no circula corriente).", "A que hay un cortocircuito.", "A que hay mucha intensidad.", "A que la resistencia es nula."],
    correctaTexto: "A que están al mismo potencial eléctrico (no circula corriente).",
    explicacion: "Si no hay desnivel (diferencia de potencial/voltaje), el líquido (electrones) no se mueve. Hacen falta voltios para empujar la corriente."
  },
  {
    id: 1095,
    tema: "Cálculos",
    texto: "Según el ejemplo del texto, ¿cuántos amperios consume aproximadamente un microondas de 900 W a 230 V?",
    opciones: ["Unos 4 amperios (3,91 A).", "Unos 2 amperios.", "Unos 10 amperios.", "Menos de 1 amperio."],
    correctaTexto: "Unos 4 amperios (3,91 A).",
    explicacion: "Aplicando I = P / V -> 900 / 230 = 3,91 A. Es un dato útil para dimensionar los cables de la cocina."
  },
  {
    id: 1096,
    tema: "Puesta a Tierra",
    texto: "¿Cómo debe ser la resistencia del cable de toma de tierra para ser efectiva?",
    opciones: ["Muy baja (poca resistencia).", "Muy alta.", "Infinita.", "Igual que la de fase."],
    correctaTexto: "Muy baja (poca resistencia).",
    explicacion: "Cuanto menos resistencia tenga el camino a tierra, más fácil le será a la corriente de fuga irse por ahí en vez de atravesar a una persona."
  },
  {
    id: 1097,
    tema: "Circuitos",
    texto: "¿Qué ocurre en una guirnalda de luces antigua conectada en serie si se funde una sola bombilla?",
    opciones: ["Dejan de lucir todas las demás.", "Solo se apaga esa.", "Las demás lucen más fuerte.", "Salta el diferencial."],
    correctaTexto: "Dejan de lucir todas las demás.",
    explicacion: "Al estar en serie, si se rompe un eslabón (filamento de la bombilla), se abre el circuito completo y la corriente deja de pasar."
  },
  {
    id: 1098,
    tema: "Circuitos",
    texto: "¿Cuál es la principal ventaja de conectar los receptores (bombillas, enchufes) en paralelo?",
    opciones: ["Si uno falla, el resto sigue funcionando independientemente.", "Gastan menos luz.", "Es más fácil de instalar.", "Aumenta la tensión."],
    correctaTexto: "Si uno falla, el resto sigue funcionando independientemente.",
    explicacion: "Es la configuración estándar en viviendas. Si se funde la luz del salón, no te quedas a oscuras en la cocina."
  },
  {
    id: 1099,
    tema: "Corriente Continua",
    texto: "¿Cuál de los siguientes grupos de equipos funciona típicamente con corriente continua?",
    opciones: ["Pilas, baterías y equipos electrónicos (ordenadores).", "Lavadoras y hornos.", "Motores de ascensor.", "Red de distribución eléctrica."],
    correctaTexto: "Pilas, baterías y equipos electrónicos (ordenadores).",
    explicacion: "La electrónica interna de los PCs y móviles trabaja en continua. Por eso tienen 'transformadores' o fuentes de alimentación."
  },
  {
    id: 1100,
    tema: "Documentación",
    texto: "¿Qué documento técnico es necesario cuando una instalación eléctrica tiene gran potencia o envergadura?",
    opciones: ["Un Proyecto (visado por Ingeniero).", "Una Memoria Técnica de Diseño (MTD).", "Un esquema unifilar simple.", "Un recibo de la luz."],
    correctaTexto: "Un Proyecto (visado por Ingeniero).",
    explicacion: "Para instalaciones pequeñas vale la MTD (Memoria Técnica), pero para las grandes el REBT exige un Proyecto firmado y visado."
  },
  {
    id: 1101,
    tema: "Instalación",
    texto: "En el proceso de montaje de una instalación, ¿qué se hace en el 'Primer paso', antes de meter cables?",
    opciones: ["Marcar la ubicación de elementos y trayectorias de tubos.", "Conectar los enchufes.", "Poner los magnetotérmicos.", "Dar de alta la luz."],
    correctaTexto: "Marcar la ubicación de elementos y trayectorias de tubos.",
    explicacion: "Primero se replantea (se pinta en la pared) dónde va todo y se hacen las rozas para los tubos. Luego ya se cablea."
  },
  {
    id: 1102,
    tema: "Materiales",
    texto: "¿Cuál es la función de los tubos y canalizaciones en una instalación?",
    opciones: ["Proteger los cables eléctricos que van por su interior.", "Decorar la pared.", "Aumentar la conductividad.", "Refrigerar el circuito."],
    correctaTexto: "Proteger los cables eléctricos que van por su interior.",
    explicacion: "Los cables nunca deben ir 'sueltos' empotrados. Van dentro de tubos corrugados o canaletas para protección mecánica y para poder cambiarlos."
  },
  {
    id: 1103,
    tema: "Energía Solar",
    texto: "En una instalación solar fotovoltaica, ¿qué elementos metálicos deben conectarse obligatoriamente a tierra?",
    opciones: ["Las estructuras soporte y los marcos metálicos de los paneles.", "Solo el inversor.", "El cristal de los paneles.", "Ninguno, son aislantes."],
    correctaTexto: "Las estructuras soporte y los marcos metálicos de los paneles.",
    explicacion: "Como están a la intemperie y son metálicos, hay que ponerlos a tierra para evitar peligros si hay una derivación o cae un rayo cerca."
  },
  {
    id: 1104,
    tema: "Seguridad",
    texto: "¿La conexión a tierra de las carcasas asegura el correcto disparo de qué dispositivo?",
    opciones: ["Del interruptor diferencial.", "Del fusible.", "Del contador.", "Del interruptor de la luz."],
    correctaTexto: "Del interruptor diferencial.",
    explicacion: "Si hay una fuga a tierra (a través del cable verde-amarillo), el diferencial detecta que 'entra más corriente de la que sale' y salta."
  },
  {
    id: 1105,
    tema: "Seguridad",
    texto: "Al conectar todos los cables de tierra entre sí en las cajas de conexión, ¿qué objetivo se consigue?",
    opciones: ["La equipotencialidad (poner todas las masas al mismo potencial).", "Ahorrar cable.", "Mejorar la velocidad de la luz.", "Evitar cortocircuitos entre fases."],
    correctaTexto: "La equipotencialidad (poner todas las masas al mismo potencial).",
    explicacion: "Si todas las partes metálicas están unidas al mismo cable de tierra, no puede haber diferencias de voltaje peligrosas entre ellas."
  },
  {
    id: 1106,
    tema: "Protección",
    texto: "¿Por qué un pararrayos protege un edificio?",
    opciones: ["Porque ofrece al rayo un camino de menor resistencia hacia tierra que el edificio.", "Porque repele los rayos.", "Porque almacena la energía.", "Porque corta la luz."],
    correctaTexto: "Porque ofrece al rayo un camino de menor resistencia hacia tierra que el edificio.",
    explicacion: "La electricidad es vaga y siempre va por donde le cuesta menos. El pararrayos es un 'camino fácil' directo al suelo."
  },
  {
    id: 1107,
    tema: "Planos",
    texto: "¿Cómo define el texto un 'Plano' eléctrico a diferencia de un esquema?",
    opciones: ["Dibujo representativo que muestra el emplazamiento físico de la obra.", "Un dibujo con símbolos abstractos.", "Una lista de materiales.", "Un gráfico de potencia."],
    correctaTexto: "Dibujo representativo que muestra el emplazamiento físico de la obra.",
    explicacion: "El esquema te dice cómo se conectan los cables (lógica). El plano te dice DÓNDE están puestos físicamente (paredes, habitaciones)."
  },
  {
    id: 1108,
    tema: "Relación V-I-P",
    texto: "Manteniendo la tensión constante, ¿cómo se relacionan la intensidad y la potencia?",
    opciones: ["Son directamente proporcionales (más intensidad = más potencia).", "Son inversamente proporcionales.", "No tienen relación.", "La potencia baja si sube la intensidad."],
    correctaTexto: "Son directamente proporcionales (más intensidad = más potencia).",
    explicacion: "Si P = V · I, y V no cambia (230V), para tener más potencia (W) necesitas obligatoriamente chupar más amperios (I)."
  },
  {
    id: 1109,
    tema: "Transporte",
    texto: "Si en el transporte de energía subimos mucho la Tensión (Voltaje), ¿qué le ocurre a la Intensidad para la misma potencia?",
    opciones: ["Que disminuye drásticamente, reduciendo pérdidas.", "Que aumenta igual.", "Que se mantiene.", "Que se vuelve continua."],
    correctaTexto: "Que disminuye drásticamente, reduciendo pérdidas.",
    explicacion: "Esta es la clave de la Alta Tensión. Al subir los Voltios, bajamos los Amperios. Menos amperios significan cables más finos y menos calor perdido."
  }




];


// --- TEMA 2: RED DE DISTRIBUCIÓN E INSTALACIONES DE ENLACE ---
const TEMA_2_DATA = [
  {
    id: 2001,
    tema: "Red de distribución",
    texto: "¿Qué se entiende por red de distribución de energía eléctrica de baja tensión?",
    imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu_WF29BDqYytclUjvdxbJRjZOO8eMfTWXwzbuZexfhBc-2GBYbF9rh-fDcBdgocZ2_rULmZWTW9yuhEFzxzEafqEjt0L8V9mpNxWevb7SwaSUwvsBGKZx5vcaYB_MJcE78Adt55AxawI/s400/distr_rural.gif",
    opciones: [
      "Las instalaciones interiores de los edificios.",
      "El conjunto de líneas e instalaciones que suministran energía eléctrica a los usuarios en baja tensión.",
      "Las líneas de transporte de alta tensión.",
      "Los centros de transformación."
    ],
    correctaTexto: "El conjunto de líneas e instalaciones que suministran energía eléctrica a los usuarios en baja tensión.",
    explicacion: "Son el último escalón del sistema eléctrico. Parten de los Centros de Transformación y llevan la energía hasta la acometida del usuario. Tensión habitual: 230/400 V."
  },
  {
    id: 2002,
    tema: "Contadores",
    texto: "¿En qué casos se colocan los contadores de forma concentrada según el REBT?",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Electricity_meters_in_apartment_building.jpg",
    opciones: ["Cuando existe un único usuario.", "Cuando hay dos usuarios.", "En edificios de viviendas.", "En instalaciones provisionales."],
    correctaTexto: "En edificios de viviendas.",
    explicacion: "Según la ITC-BT-16: En edificios de viviendas y comerciales es obligatorio centralizar los contadores en un local o armario específico para facilitar la lectura y mantenimiento."
  },
  {
    id: 2003,
    tema: "Acometida",
    texto: "¿Cómo se denomina la parte de la instalación que une la red de distribución con la Caja General de Protección?",
    imagen: "https://www.dielco.co/hs-fs/hubfs/acometidas-electricas-domiciliarias.jpg?width=672&height=321&name=acometidas-electricas-domiciliarias.jpg",
    opciones: ["Línea General de Alimentación.", "Derivación individual.", "Acometida.", "Línea de reparto."],
    correctaTexto: "Acometida.",
    explicacion: "ITC-BT-13: La acometida es el tramo de la red de distribución que alimenta la caja general de protección (CGP) instalada en la propiedad del usuario."
  },
  {
    id: 2004,
    tema: "Acometida",
    texto: "¿Cuál es la definición correcta de una acometida eléctrica?",
    opciones: ["La canalización que une la red de distribución con la Caja General de Protección.", "La línea que une el contador con la vivienda.", "La instalación interior del usuario.", "La línea general del edificio."],
    correctaTexto: "La canalización que une la red de distribución con la Caja General de Protección.",
    explicacion: "Es el punto de entrega de energía. Puede ser aérea, subterránea o aéreo-subterránea. Es responsabilidad de la empresa distribuidora hasta la CGP."
  },
  {
    id: 2005,
    tema: "LGA",
    texto: "¿Qué es la Línea General de Alimentación (LGA)?",
    opciones: ["La línea que une la Caja General de Protección con la centralización de contadores.", "La línea que conecta la red con la CGP.", "La derivación individual del usuario.", "La instalación interior."],
    correctaTexto: "La línea que une la Caja General de Protección con la centralización de contadores.",
    explicacion: "ITC-BT-14: Es la 'columna vertebral' eléctrica del edificio. Conecta la protección general en la fachada (CGP) con el cuarto de contadores."
  },
  {
    id: 2006,
    tema: "LGA",
    texto: "¿Por dónde discurre habitualmente la Línea General de Alimentación en un edificio?",
    opciones: ["Por el interior de las viviendas.", "Por zonas comunes del edificio.", "Por la vía pública.", "Por el interior de los locales."],
    correctaTexto: "Por zonas comunes del edificio.",
    explicacion: "Debe discurrir por zonas de uso común (pasillos, patinillos, huecos de escalera) para permitir el acceso y mantenimiento sin entrar en propiedad privada."
  },
  {
    id: 2007,
    tema: "LGA",
    texto: "En un edificio con un solo abonado, respecto a la Línea General de Alimentación se puede afirmar que:",
    opciones: ["Existe siempre una LGA.", "La LGA une CGP y contador.", "No existe Línea General de Alimentación.", "Sustituye a la derivación individual."],
    correctaTexto: "No existe Línea General de Alimentación.",
    explicacion: "En viviendas unifamiliares (1 usuario), la Caja General de Protección enlaza directamente con el Equipo de Medida (CPM), por lo que no hay LGA. Solo hay Acometida y Derivación Individual."
  },
  {
    id: 2008,
    tema: "Centralización",
    texto: "¿Cuál es la función principal de la centralización de contadores?",
    imagen: "https://es.habcdn.com/photos/business/medium/imagen-tfno-nokia-004-1200237.jpg",
    opciones: ["Alojar los equipos de medida de los suministros.", "Proteger los circuitos interiores.", "Distribuir energía dentro de las viviendas.", "Transformar la tensión."],
    correctaTexto: "Alojar los equipos de medida de los suministros.",
    explicacion: "Agrupa todos los contadores de los usuarios en un único lugar (armario o local) para facilitar la lectura por parte de la compañía y el control de la instalación."
  },
  {
    id: 2009,
    tema: "Protección",
    texto: "¿Qué función cumple la Caja General de Protección (CGP)?",
    imagen: "https://www.cadenzaelectric.com/server/Portal_0008379/img/blogposts/caja-general-de-proteccion-funcion-y-caracteristicas_12221.jpg",
    opciones: ["Alojar los elementos de protección de la línea general.", "Medir el consumo eléctrico.", "Distribuir energía a los receptores.", "Proteger los circuitos interiores."],
    correctaTexto: "Alojar los elementos de protección de la línea general.",
    explicacion: "ITC-BT-13: Es el principio de la propiedad de la instalación. Contiene fusibles de alta capacidad para proteger la Línea General de Alimentación contra cortocircuitos graves."
  },
  {
    id: 2010,
    tema: "Normativa",
    texto: "¿Qué reglamento regula las instalaciones de enlace en baja tensión?",
    opciones: ["El Reglamento Electrotécnico para Baja Tensión (REBT).", "El Reglamento de Alta Tensión.", "El Código Técnico de la Edificación.", "Las normas ISO."],
    correctaTexto: "El Reglamento Electrotécnico para Baja Tensión (REBT).",
    explicacion: "Aprobado por el Real Decreto 842/2002. Las instalaciones de enlace se detallan específicamente en las instrucciones ITC-BT-12 a la ITC-BT-16."
  },
  {
    id: 2011,
    tema: "Redes",
    texto: "¿Qué tipos de redes de distribución de baja tensión existen según su trazado?",
    imagen: "https://automatizacionindustrial360.com/wp-content/uploads/2021/06/Diferencias-entre-l%C3%ADneas-el%C3%A9ctricas-a%C3%A9reas-y-subterr%C3%A1neas-1024x427.jpg",
    opciones: ["Redes aéreas y redes subterráneas.", "Redes interiores y exteriores.", "Redes monofásicas y trifásicas.", "Redes públicas y privadas."],
    correctaTexto: "Redes aéreas y redes subterráneas.",
    explicacion: "ITC-BT-06 (Subterráneas) y ITC-BT-07 (Aéreas). En zonas urbanas modernas predominan las subterráneas por seguridad y estética; en zonas rurales, las aéreas."
  },
  {
    id: 2012,
    tema: "Redes",
    texto: "¿Qué ventaja principal presenta una red subterránea frente a una aérea?",
    opciones: ["Menor impacto visual y mayor seguridad.", "Menor coste de instalación.", "Mayor facilidad de mantenimiento.", "Mayor disipación térmica."],
    correctaTexto: "Menor impacto visual y mayor seguridad.",
    explicacion: "Al estar enterradas bajo tubo o directamente, están protegidas de tormentas, caídas de árboles y contactos accidentales, además de no afear el entorno."
  },
  {
    id: 2013,
    tema: "Redes",
    texto: "¿Qué inconveniente principal presentan las redes aéreas?",
    opciones: ["Mayor exposición a agentes atmosféricos.", "Mayor coste.", "Menor accesibilidad.", "Menor seguridad eléctrica."],
    correctaTexto: "Mayor exposición a agentes atmosféricos.",
    explicacion: "Son vulnerables al viento, hielo, rayos y caída de ramas, lo que puede provocar más interrupciones de servicio que las redes subterráneas."
  },
  {
    id: 2014,
    tema: "Conductores",
    texto: "¿Qué material se utiliza habitualmente en los conductores de redes de baja tensión?",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47664WXZoADIq9RAs19B2lSTRg57DXWSIKw&s",
    opciones: ["Cobre o aluminio.", "Hierro.", "Plomo.", "Acero."],
    correctaTexto: "Cobre o aluminio.",
    explicacion: "El Cobre (Cu) es mejor conductor pero más caro y pesado. El Aluminio (Al) es más ligero y barato, por lo que se usa casi exclusivamente en redes de distribución y líneas generales largas."
  },
  {
    id: 2015,
    tema: "Tensión",
    texto: "¿Qué tensiones son habituales en redes de distribución de baja tensión en España?",
    opciones: ["230/400 V.", "220/380 V.", "125/220 V.", "400/690 V."],
    correctaTexto: "230/400 V.",
    explicacion: "230V es la tensión simple (Fase-Neutro) y 400V es la tensión compuesta (Fase-Fase) en un sistema trifásico estándar según el REBT."
  },
  {
    id: 2016,
    tema: "Suministro",
    texto: "¿Qué tipo de sistema es el más habitual en la red de distribución de baja tensión?",
    opciones: ["Sistema trifásico con neutro.", "Sistema monofásico.", "Sistema en corriente continua.", "Sistema bifásico."],
    correctaTexto: "Sistema trifásico con neutro.",
    explicacion: "Se distribuyen 3 fases + 1 neutro (4 hilos) para poder dar suministro tanto trifásico (fuerza, ascensores) como monofásico (viviendas repartidas entre fases) desde la misma red."
  },
  {
    id: 2017,
    tema: "Seguridad",
    texto: "¿Por qué se conectan a tierra determinados elementos de la red de distribución?",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7d/HomeEarthRodAustralia1.jpg",
    opciones: ["Para proteger a las personas y a la instalación.", "Para reducir la caída de tensión.", "Para aumentar la potencia.", "Para equilibrar las fases."],
    correctaTexto: "Para proteger a las personas y a la instalación.",
    explicacion: "La puesta a tierra deriva las corrientes de fuga o defecto al terreno, evitando que las carcasas metálicas (farolas, armarios) queden a tensiones peligrosas para los viandantes."
  },
  {
    id: 2018,
    tema: "Protecciones",
    texto: "¿Qué protegen los dispositivos de protección de la red de distribución?",
    opciones: ["Frente a sobreintensidades y cortocircuitos.", "Frente al consumo excesivo.", "Frente a la caída de tensión.", "Frente al desequilibrio de fases."],
    correctaTexto: "Frente a sobreintensidades y cortocircuitos.",
    explicacion: "Los fusibles en los cuadros de distribución y CGP protegen los cables de la red para que no se quemen si hay una demanda excesiva o un cruce de fases."
  },
  {
    id: 2019,
    tema: "Mantenimiento",
    texto: "¿Por qué es importante el mantenimiento de la red de distribución?",
    opciones: ["Para garantizar seguridad y continuidad del suministro.", "Para aumentar el consumo.", "Para reducir la potencia.", "Para evitar mediciones."],
    correctaTexto: "Para garantizar seguridad y continuidad del suministro.",
    explicacion: "Las redes envejecen. Un mantenimiento preventivo evita cortes de luz inesperados, incendios forestales (en aéreas) y accidentes por contacto."
  },
  {
    id: 2020,
    tema: "Buenas prácticas",
    texto: "¿Cuál es una buena práctica en redes de distribución de baja tensión?",
    opciones: ["Cumplir normativa y utilizar materiales homologados.", "Reducir secciones sin cálculo.", "Eliminar protecciones.", "Instalar sin proyecto."],
    correctaTexto: "Cumplir normativa y utilizar materiales homologados.",
    explicacion: "El uso de materiales no homologados o saltarse el REBT pone en riesgo la seguridad pública y la responsabilidad civil del instalador/compañía."
  },
  {
    id: 2021,
    tema: "CGP",
    texto: "¿Qué grado de protección contra impactos (IK) debe tener una CGP en nicho?",
    imagen: "https://www.cadenzaelectric.com/server/Portal_0008379/img/blogposts/caja-general-de-proteccion-funcion-y-caracteristicas_12221.jpg",
    opciones: ["IK10.", "IK08.", "IK09.", "IK07."],
    correctaTexto: "IK10.",
    explicacion: "ITC-BT-13: Al estar situadas en el exterior (fachadas o vallas), deben soportar golpes fuertes. IK10 es la máxima resistencia a impactos mecánicos normalizada."
  },
  {
    id: 2022,
    tema: "Protección",
    texto: "Un fusible de clase 'gG' o 'gl' es de uso general y protege contra:",
    imagen: "https://www.dfelectric.es/wp-content/uploads/2023/06/gG-NH-800V-AC-fuse-links-photovoltaic.jpg",
    opciones: ["Sobrecargas y cortocircuitos.", "Solo cortocircuitos.", "Solo sobrecargas.", "Semiconductores."],
    correctaTexto: "Sobrecargas y cortocircuitos.",
    explicacion: "Las siglas 'gG' significan 'uso general' (general use). Son los fusibles estándar utilizados en las Cajas Generales de Protección para proteger cables."
  },
  {
    id: 2023,
    tema: "Montaje",
    texto: "La altura mínima de la parte inferior de una concentración de contadores será:",
    opciones: ["0,25 m.", "0,50 m.", "1 m.", "A ras de suelo."],
    correctaTexto: "0,25 m.",
    explicacion: "ITC-BT-16: Se exige un mínimo de 0,25 m para protegerlos de humedades, suciedad y golpes al limpiar el suelo. La altura máxima del visor más alto es 1,80 m."
  },
  {
    id: 2024,
    tema: "LGA",
    texto: "En la LGA, los conductores deben ser:",
    imagen: "https://cdn.manomano.com/cable-flexible-de-10mm2-libre-de-halogenos-h07z1-k-por-metro-amarillo-verde-azul-gris-marron-negro-amarillo-verde-azul-gris-marron-negro-P-1168077-4450464_1.jpg",
    opciones: ["Unipolares y sin empalmes.", "Multipolares.", "Con empalmes en cada piso.", "Desnudos."],
    correctaTexto: "Unipolares y sin empalmes.",
    explicacion: "ITC-BT-14: Deben ser continuos desde la CGP hasta el contador para evitar puntos calientes. Se usan 3 fases + 1 neutro (unipolares) dentro de tubos."
  },
  {
    id: 2025,
    tema: "Protección",
    texto: "¿Qué dispositivo es obligatorio en concentraciones de más de dos usuarios para dejar fuera de servicio toda la centralización?",
    imagen: "https://pinazo.com/docs/MED_interruptor-general-de-maniobra-basico-igm-bsc-2.png",
    opciones: ["Interruptor General de Maniobra.", "Fusible general.", "ICP.", "Diferencial."],
    correctaTexto: "Interruptor General de Maniobra.",
    explicacion: "ITC-BT-16: Es un interruptor de corte en carga que permite aislar toda la centralización de contadores para realizar trabajos de mantenimiento con seguridad."
  },
  {
    id: 2026,
    tema: "Derivación",
    texto: "Sección mínima del conductor neutro en una Derivación Individual:",
    opciones: ["6 mm².", "4 mm².", "10 mm².", "2,5 mm²."],
    correctaTexto: "6 mm².",
    explicacion: "ITC-BT-15: La sección mínima de los cables (Fase y Neutro) en las Derivaciones Individuales es de 6 mm² para garantizar resistencia mecánica y eléctrica."
  },
  {
    id: 2027,
    tema: "Maniobra",
    texto: "Un telerruptor cambia de posición cuando recibe:",
    imagen: "https://www.suministroselectricos.es/13765-large_default/telerruptor-230v-legrand-412408-16a-1na.jpg",
    opciones: ["Un pulso de corriente.", "Corriente continua.", "Calor.", "Presión manual."],
    correctaTexto: "Un pulso de corriente.",
    explicacion: "Es un relé de impulsos. Con cada pulso (al soltar un pulsador), cambia de estado (ON/OFF). Ideal para pasillos largos con muchos puntos de encendido."
  },
  {
    id: 2028,
    tema: "Canalización",
    texto: "En las canaladuras de obra de fábrica (rozas), ¿qué más se puede instalar aparte de la DI?",
    opciones: ["Nada más.", "Teléfono.", "Agua.", "Gas."],
    correctaTexto: "Nada más.",
    explicacion: "ITC-BT-15: Las canaladuras para derivaciones individuales son de uso exclusivo. No pueden compartirse con agua, gas ni telecomunicaciones por seguridad."
  },
  {
    id: 2029,
    tema: "Protección",
    texto: "En caso de acometida subterránea, la puerta del nicho de la CGP debe ser preferentemente:",
    opciones: ["Metálica.", "Plástico.", "Madera.", "Cristal."],
    correctaTexto: "Metálica.",
    explicacion: "ITC-BT-13: Debe ser metálica con grado de protección IK10 (antivandálica) y resistente a la corrosión, con cierre mediante llave normalizada por la compañía."
  },
  {
    id: 2030,
    tema: "Acometida",
    texto: "Distancia mínima en cruzamientos subterráneos con cables de telecomunicaciones:",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Underground_cable_laying.jpg",
    opciones: ["0,20 m.", "0,10 m.", "0,50 m.", "1 m."],
    correctaTexto: "0,20 m.",
    explicacion: "ITC-BT-07: Se debe mantener una separación mínima de 20 cm para evitar interferencias y daños accidentales durante excavaciones."
  },
  {
    id: 2068,
    tema: "Componentes",
    texto: "¿De qué se compone una instalación de enlace completa?",
    opciones: ["Acometida - CGP - L. General Alimentación - Contadores - D. Individual - ICP - DGMP.", "Red - L. General de alimentación - D. Individual.", "Cualquiera que enlace un suministro.", "CGP - Contadores - ICP."],
    correctaTexto: "Acometida - CGP - L. General Alimentación - Contadores - D. Individual - ICP - DGMP.",
    explicacion: "Es la secuencia correcta según el REBT Art. 12. Desde la red pública hasta el cuadro del usuario (DGMP), pasando por todas las cajas intermedias."
  },
  {
    id: 2069,
    tema: "Acometidas",
    texto: "Las acometidas pueden ser:",
    opciones: ["Aéreas, subterráneas o mixtas (todas son correctas).", "Solo aéreas.", "Solo subterráneas.", "Solo mixtas."],
    correctaTexto: "Aéreas, subterráneas o mixtas (todas son correctas).",
    explicacion: "Dependerá del tipo de red de distribución de la zona. En zonas antiguas suelen ser aéreas (posadas en fachada) y en nuevas urbanizaciones, subterráneas."
  },
  {
    id: 2070,
    tema: "Contadores",
    texto: "En edificios hasta 12 plantas, los contadores se colocarán preferentemente en:",
    opciones: ["La planta baja, entresuelo o primer sótano.", "En la cubierta.", "En cada planta.", "En el exterior."],
    correctaTexto: "La planta baja, entresuelo o primer sótano.",
    explicacion: "ITC-BT-16: Se busca una zona accesible y cercana a la entrada del edificio. Solo en edificios muy altos (más de 12 plantas) se permiten concentraciones por plantas."
  },
  {
    id: 2071,
    tema: "CGP",
    texto: "En la Caja General de Protección (CGP), el neutro incluirá una conexión:",
    opciones: ["Amovible situada a la izquierda de las fases.", "Fija situada a la izquierda de las fases.", "Amovible situada a la derecha de las fases.", "Fija situada a la derecha de las fases."],
    correctaTexto: "Amovible situada a la izquierda de las fases.",
    explicacion: "ITC-BT-13: El neutro NO lleva fusible, sino una pletina desmontable (amovible) para poder separarlo en maniobras, y siempre se sitúa a la izquierda."
  },
  {
    id: 2072,
    tema: "Definición",
    texto: "¿A qué se llama acometida?",
    opciones: ["A la parte de la instalación entre la red de distribución pública y la CGP.", "A la línea de alimentos.", "A la canalización de la escalera.", "A la marabunda."],
    correctaTexto: "A la parte de la instalación entre la red de distribución pública y la CGP.",
    explicacion: "Es el enlace físico y eléctrico entre la compañía y el usuario. Es el 'tubo' que trae la energía de la calle a tu edificio."
  },
  {
    id: 2073,
    tema: "Derivación",
    texto: "En las derivaciones individuales, el número de conductores vendrá fijado por:",
    opciones: ["El número de fases necesarias para el uso de los receptores del abonado.", "Intensidad total consumida.", "Tensión que suministre el abonado.", "Ninguna es correcta."],
    correctaTexto: "El número de fases necesarias para el uso de los receptores del abonado.",
    explicacion: "Serán 2 cables (F+N+T) si el suministro es monofásico, o 4 cables (3F+N+T) si es trifásico. El número de fases depende de la necesidad del usuario."
  },
  {
    id: 2074,
    tema: "Contadores",
    texto: "¿Cuándo se colocarán los contadores de forma concentrada?",
    opciones: ["En los edificios destinados a viviendas y locales comerciales (más de 2 usuarios).", "Cuando haya un usuario.", "Cuando haya dos usuarios.", "En una empresa."],
    correctaTexto: "En los edificios destinados a viviendas y locales comerciales (más de 2 usuarios).",
    explicacion: "ITC-BT-16: Para facilitar la gestión. Si hay uno o dos usuarios, pueden instalarse en módulos individuales (CPM), pero más de dos requiere centralización."
  },
  {
    id: 2075,
    tema: "Protección",
    texto: "Los elementos de protección de las líneas generales de alimentación se alojan en:",
    opciones: ["Cajas Generales de Protección (CGP).", "Cajas de empalme.", "Cajas de contadores.", "Cajas registradoras."],
    correctaTexto: "Cajas Generales de Protección (CGP).",
    explicacion: "Son los fusibles calibrados que hay dentro de la CGP. Protegen la LGA para que, en caso de fallo grave, se corte la luz de todo el edificio antes de quemar el cable."
  },
  {
    id: 2076,
    tema: "Ubicación",
    texto: "¿Dónde se deben colocar las Cajas Generales de Protección?",
    opciones: ["En las fachadas exteriores de los edificios, en lugares de libre y permanente acceso.", "En el cuarto de contadores.", "En lugares de difícil acceso por seguridad.", "Donde quiera el director de obra."],
    correctaTexto: "En las fachadas exteriores de los edificios, en lugares de libre y permanente acceso.",
    explicacion: "ITC-BT-13: Deben ser accesibles desde la vía pública para que los bomberos o técnicos puedan cortar la corriente del edificio en caso de emergencia."
  },
  {
    id: 2077,
    tema: "Contadores",
    texto: "¿Qué altura MÁXIMA no superará el cuadrante de lectura del aparato de medida situado más alto?",
    opciones: ["1,80 m.", "1,5 m.", "2,0 m.", "2,1 m."],
    correctaTexto: "1,80 m.",
    explicacion: "ITC-BT-16: Se establece para que un operario pueda leer el contador o manipularlo sin necesidad de escalera."
  },
  {
    id: 2078,
    tema: "Conductores",
    texto: "Los conductores utilizados en las derivaciones individuales deberán ser de:",
    opciones: ["Cobre o aluminio.", "Acero galvanizado.", "Solo cobre.", "Hierro."],
    correctaTexto: "Cobre o aluminio.",
    explicacion: "ITC-BT-15: Se admiten ambos metales, siempre que sean aislados y, normalmente, libres de halógenos (alta seguridad en caso de incendio)."
  },
  {
    id: 2079,
    tema: "Tubos",
    texto: "Los tubos de una derivación individual deben tener un diámetro que permita ampliar la sección de los conductores en un:",
    opciones: ["100%.", "50%.", "25%.", "200%."],
    correctaTexto: "100%.",
    explicacion: "ITC-BT-15: Deben ser lo suficientemente anchos para que, si en el futuro necesitas más potencia y cables más gordos, puedas cambiarlos sin romper la pared (doble de sección)."
  },
  {
    id: 2080,
    tema: "LGA",
    texto: "¿Cuál es la Línea General de Alimentación en edificios destinados a UN SOLO abonado?",
    opciones: ["En este caso, no existe Línea General de Alimentación.", "Desde CGP a contador.", "Se equipara con derivación individual.", "Desde la acometida hasta la CGP."],
    correctaTexto: "En este caso, no existe Línea General de Alimentación.",
    explicacion: "Al ser un solo usuario, se instala una Caja de Protección y Medida (CPM) que une ambas funciones. El cable que sale ya es la Derivación Individual."
  },
  {
    id: 2081,
    tema: "Mecanismos",
    texto: "Las puertas de cierre del armario de contadores:",
    opciones: ["Dispondrán de la cerradura que tenga normalizada la empresa suministradora.", "Estarán siempre cerradas con llave única.", "Estarán siempre abiertas.", "Deben tener ventanal."],
    correctaTexto: "Dispondrán de la cerradura que tenga normalizada la empresa suministradora.",
    explicacion: "ITC-BT-16: La compañía eléctrica debe tener llave maestra para acceder a leer o mantener los contadores en cualquier momento."
  },
  {
    id: 2088,
    tema: "LGA",
    texto: "La sección de la Línea General de Alimentación (LGA) será como mínimo de:",
    opciones: ["10 mm² en cobre o 16 mm² en aluminio.", "10 mm² en cobre o aluminio.", "16 mm² en cobre o 25 mm² en aluminio.", "6 mm² en cobre."],
    correctaTexto: "10 mm² en cobre o 16 mm² en aluminio.",
    explicacion: "ITC-BT-14: Es la sección mínima permitida por normativa para garantizar la resistencia mecánica y capacidad de transporte de la columna vertebral del edificio."
  },
  {
    id: 2089,
    tema: "CGP",
    texto: "En las Cajas Generales de Protección (CGP), ¿dónde se sitúa el neutro respecto a las fases?",
    opciones: ["A la izquierda.", "A la derecha.", "Es indiferente.", "En el centro."],
    correctaTexto: "A la izquierda.",
    explicacion: "Es una norma de estandarización de las compañías eléctricas y el REBT. Mirando la caja de frente, el neutro siempre es el primer elemento a la izquierda."
  },
  {
    id: 2090,
    tema: "CGP",
    texto: "En la CGP, la conexión del neutro debe ser:",
    opciones: ["Amovible (desmontable) situada a la izquierda de las fases.", "Fija situada a la izquierda.", "Amovible a la derecha.", "Fija a la derecha."],
    correctaTexto: "Amovible (desmontable) situada a la izquierda de las fases.",
    explicacion: "El neutro NO se protege con fusible (para evitar sobretensiones si se funde solo el neutro), pero debe poder desconectarse manualmente mediante una pletina."
  },
  {
    id: 2091,
    tema: "Componentes",
    texto: "¿De qué se compone una Instalación de Enlace?",
    opciones: ["Acometida - CGP - LGA - Contadores - DI - ICP - DGMP.", "Red - LGA - DI.", "CGP - Contadores - ICP.", "Acometida y Contadores."],
    correctaTexto: "Acometida - CGP - LGA - Contadores - DI - ICP - DGMP.",
    explicacion: "Es el esquema completo según ITC-BT-12. Memoriza este orden: Acometida → Caja Protección → Línea General → Contadores → Derivación → Cuadro vivienda."
  },
  {
    id: 2092,
    tema: "Acometidas",
    texto: "Las acometidas pueden ser:",
    opciones: ["Aéreas, subterráneas y mixtas (aéreo-subterráneas).", "Solo subterráneas.", "Solo aéreas.", "Siempre mixtas."],
    correctaTexto: "Aéreas, subterráneas y mixtas (aéreo-subterráneas).",
    explicacion: "ITC-BT-11. La 'mixta' suele darse cuando la red es aérea pero entra al edificio de forma subterránea (o viceversa)."
  },
  {
    id: 2093,
    tema: "Contadores",
    texto: "¿A qué altura se instalarán los contadores (el cuadrante de lectura más alto)?",
    opciones: ["Máximo 1,80 m.", "Máximo 2,00 m.", "Mínimo 0,50 m.", "Máximo 1,50 m."],
    correctaTexto: "Máximo 1,80 m.",
    explicacion: "ITC-BT-16: El visor del contador más alto no puede estar a más de 1,80m del suelo para que sea legible sin escaleras."
  },
  {
    id: 2094,
    tema: "Contadores",
    texto: "¿Y la altura mínima del contador (cuadrante de lectura más bajo)?",
    opciones: ["0,25 m.", "1,00 m.", "1,50 m.", "Del suelo directamente."],
    correctaTexto: "0,25 m.",
    explicacion: "ITC-BT-16: El contador más bajo debe estar al menos a 25 cm del suelo para protegerlo de la limpieza, agua o golpes accidentales."
  },
  {
    id: 2095,
    tema: "Derivación Individual",
    texto: "Los tubos de una Derivación Individual deben permitir ampliar la sección de los conductores inicialmente instalados en un:",
    opciones: ["100% (el doble de sección).", "50%.", "25%.", "No es necesario ampliar."],
    correctaTexto: "100% (el doble de sección).",
    explicacion: "ITC-BT-15: Si hoy pones cable de 10mm², el tubo debe ser lo bastante gordo para que mañana quepa un cable de sección superior (ampliación de potencia)."
  },
  {
    id: 2096,
    tema: "Empalmes",
    texto: "Se podrán realizar empalmes de conductores en:",
    opciones: ["Cajas de derivación / empalme.", "El interior de los tubos.", "Nunca se permiten empalmes.", "Donde quiera el instalador."],
    correctaTexto: "Cajas de derivación / empalme.",
    explicacion: "PROHIBIDO empalmar dentro de los tubos. Los empalmes siempre deben estar accesibles en cajas de registro para poder revisar averías."
  },
  {
    id: 2097,
    tema: "CGP Ubicación",
    texto: "Las Cajas Generales de Protección (CGP) se colocarán en:",
    opciones: ["Las fachadas exteriores de los edificios, en lugares de libre y permanente acceso.", "El cuarto de contadores.", "Dentro de las viviendas.", "En el tejado."],
    correctaTexto: "Las fachadas exteriores de los edificios, en lugares de libre y permanente acceso.",
    explicacion: "ITC-BT-13: Es vital que sea accesible desde la calle (zona pública) para servicios de emergencia y compañía eléctrica."
  },
  {
    id: 2099,
    tema: "LGA Único Usuario",
    texto: "¿Existe Línea General de Alimentación (LGA) en edificios para un ÚNICO usuario (ej: chalet)?",
    opciones: ["No existe LGA (la CGP enlaza directamente con la Derivación Individual o CPM).", "Sí, siempre.", "Sí, de 10mm².", "Depende de la potencia."],
    correctaTexto: "No existe LGA (la CGP enlaza directamente con la Derivación Individual o CPM).",
    explicacion: "Si solo hay un usuario, no hay 'columna' que repartir. Se suele usar una CPM (Caja de Protección y Medida) que junta fusible y contador, y de ahí sale directo a la vivienda."
  },
  {
    id: 2100,
    tema: "Altura Cuadro",
    texto: "En VIVIENDAS, los dispositivos generales de mando y protección (DGMP/Cuadro) se situarán a una altura entre:",
    opciones: ["1,4 y 2 metros.", "1 y 1,5 metros.", "0,5 y 1 metro.", "2 y 3 metros."],
    correctaTexto: "1,4 y 2 metros.",
    explicacion: "ITC-BT-17: El cuadro eléctrico debe estar, como mínimo, a 1,40m del suelo y como máximo a 2,00m, para ser accesible por adultos pero seguro ante niños pequeños."
  },
  {
    id: 2101,
    tema: "Control Alumbrado",
    texto: "Para controlar el alumbrado de un pasillo desde 4 puntos distintos, lo más adecuado técnicamente es:",
    opciones: ["Un telerruptor y cuatro pulsadores.", "Cuatro conmutadores de cruce.", "Cuatro interruptores.", "Dos conmutadores y dos interruptores."],
    correctaTexto: "Un telerruptor y cuatro pulsadores.",
    explicacion: "Aunque se puede hacer con cruzamientos (complejo de cablear), el telerruptor simplifica la instalación: todos los pulsadores van en paralelo con dos hilos."
  }
];




// --- TEMA 3: SIMBOLOGÍA Y ESQUEMAS DE ENLACE ---
const TEMA_3_DATA = [
  // --- PREGUNTAS ORIGINALES ---
  { 
    id: 3001, 
    tema: "Representación", 
    texto: "¿Cuál es la finalidad principal de la representación gráfica de una instalación eléctrica, como la del plano?", 
    imagen: "img/t3_plano_ejemplo.jpg",
    opciones: ["Calcular la potencia instalada.", "Mostrar de forma clara y normalizada los elementos y conexiones.", "Medir el consumo eléctrico.", "Determinar la tarifa de suministro."], 
    correctaTexto: "Mostrar de forma clara y normalizada los elementos y conexiones.",
    explicacion: "Los esquemas son un lenguaje universal. Su objetivo es que cualquier técnico pueda interpretar, ejecutar, verificar y mantener la instalación sin ambigüedades."
  },
  { 
    id: 3002, 
    tema: "Simbología", 
    texto: "¿Para qué se utiliza la simbología eléctrica en planos y esquemas?", 
    opciones: ["Para identificar de forma normalizada los elementos de la instalación.", "Para mejorar la estética del plano.", "Para reducir el número de documentos.", "Para indicar el consumo eléctrico."], 
    correctaTexto: "Para identificar de forma normalizada los elementos de la instalación.",
    explicacion: "Al igual que un mapa usa símbolos para carreteras, la electricidad usa símbolos normalizados (UNE/IEC) para que un interruptor se dibuje igual en todas partes."
  },
  { 
    id: 3003, 
    tema: "Esquemas", 
    texto: "¿Qué tipo de esquema representa una instalación eléctrica mediante una sola línea, como en la imagen?", 
    imagen: "img/t3_unifilar.jpg",
    opciones: ["Esquema multifilar.", "Plano de planta.", "Esquema unifilar.", "Diagrama funcional."], 
    correctaTexto: "Esquema unifilar.",
    explicacion: "Es el más utilizado en instalaciones de enlace y distribución. Una sola línea representa el conjunto de conductores (fases, neutro y tierra) para simplificar el dibujo."
  },
  { 
    id: 3004, 
    tema: "Esquemas", 
    texto: "¿Qué esquema representa cada conductor de forma individual, mostrando el cableado real?", 
    imagen: "img/t3_multifilar.jpg",
    opciones: ["Esquema unifilar.", "Esquema funcional.", "Esquema multifilar.", "Plano arquitectónico."], 
    correctaTexto: "Esquema multifilar.",
    explicacion: "Detalla cada cable por separado y sus puntos de conexión exactos. Es más complejo de dibujar pero imprescindible para entender el cableado interno de cuadros de automatismo."
  },
  { 
    id: 3005, 
    tema: "Planos", 
    texto: "¿Qué plano muestra la ubicación real de los elementos eléctricos sobre la arquitectura del edificio?", 
    imagen: "img/t3_planta.jpg",
    opciones: ["El plano de planta.", "El esquema unifilar.", "El esquema multifilar.", "El diagrama eléctrico."], 
    correctaTexto: "El plano de planta.",
    explicacion: "Es un dibujo a escala de la vivienda o local (vista aérea) donde se sitúan los enchufes, interruptores y puntos de luz en su posición física real."
  },
  { 
    id: 3006, 
    tema: "Simbología", 
    texto: "¿Qué condición deben cumplir los símbolos eléctricos utilizados en los planos?", 
    opciones: ["Ser inventados por el instalador.", "Depender del fabricante.", "Ser normalizados y fácilmente identificables.", "Usarse solo en industria."], 
    correctaTexto: "Ser normalizados y fácilmente identificables.",
    explicacion: "Deben seguir normas oficiales (como la serie UNE-EN 60617) para evitar confusiones. No se pueden inventar símbolos a capricho."
  },
  { 
    id: 3007, 
    tema: "Documentación", 
    texto: "¿Qué documento recoge el conjunto de planos y esquemas de una instalación eléctrica?", 
    imagen: "img/t3_proyecto_tecnico.jpg", 
    opciones: ["El contrato de suministro.", "La documentación técnica de la instalación.", "La factura eléctrica.", "El boletín de enganche."], 
    correctaTexto: "La documentación técnica de la instalación.",
    explicacion: "Ya sea el Proyecto (para grandes instalaciones) o la Memoria Técnica de Diseño (MTD), ambos incluyen obligatoriamente los esquemas unifilares y planos de planta."
  },
  { 
    id: 3008, 
    tema: "Esquemas", 
    texto: "¿Qué esquema se utiliza habitualmente para representar instalaciones de enlace de forma simplificada?", 
    opciones: ["El plano arquitectónico.", "El esquema unifilar.", "El esquema multifilar.", "El croquis de obra."], 
    correctaTexto: "El esquema unifilar.",
    explicacion: "Permite ver de un vistazo toda la cadena de suministro: CGP -> LGA -> Contadores -> DI -> Cuadro Privado, indicando secciones y protecciones."
  },
  { 
    id: 3009, 
    tema: "Simbología", 
    texto: "¿Qué se representa mediante este símbolo?", 
    imagen: "img/t3_simb_tierra.jpg",
    opciones: ["Un conductor activo.", "Un interruptor.", "La conexión de un elemento al sistema de tierra.", "Un punto de luz."], 
    correctaTexto: "La conexión de un elemento al sistema de tierra.",
    explicacion: "Es el símbolo universal de 'Tierra' (líneas horizontales decrecientes). Indica que ese punto está conectado al conductor de protección (PE)."
  },
  { 
    id: 3010, 
    tema: "Normativa", 
    texto: "¿Qué normativa regula la simbología eléctrica en instalaciones de baja tensión?", 
    imagen: "img/t3_rebt_libro.jpg", 
    opciones: ["El Código Técnico de la Edificación.", "Las normas UNE y el REBT.", "Las normas ISO.", "La normativa municipal."], 
    correctaTexto: "Las normas UNE y el REBT.",
    explicacion: "El REBT cita las normas UNE (Una Norma Española) como referencia para la simbología gráfica en los proyectos."
  },
  { 
    id: 3011, 
    tema: "Representación", 
    texto: "¿Qué información básica debe aparecer en un plano eléctrico?", 
    opciones: ["La ubicación de los elementos y su simbología.", "El consumo mensual.", "La factura eléctrica.", "La potencia contratada."], 
    correctaTexto: "La ubicación de los elementos y su simbología.",
    explicacion: "Debe mostrar dónde van los mecanismos, las líneas que los unen y qué significan (leyenda), para que el instalador sepa dónde colocar cada cosa."
  },
  { 
    id: 3012, 
    tema: "Simbología", 
    texto: "¿Por qué es importante utilizar símbolos normalizados?", 
    opciones: ["Para que cualquier técnico pueda interpretar correctamente el plano.", "Para reducir el número de esquemas.", "Para abaratar la instalación.", "Para mejorar la estética."], 
    correctaTexto: "Para que cualquier técnico pueda interpretar correctamente el plano.",
    explicacion: "La normalización elimina la barrera del idioma o de la empresa. Un esquema hecho en Alemania debe poder entenderse en España si sigue la norma IEC."
  },
  { 
    id: 3013, 
    tema: "Esquemas", 
    texto: "¿Qué ventaja principal ofrece el esquema unifilar?", 
    opciones: ["Mayor claridad y simplicidad de interpretación.", "Mayor detalle de conductores.", "Mayor precisión constructiva.", "Mayor complejidad."], 
    correctaTexto: "Mayor claridad y simplicidad de interpretación.",
    explicacion: "Al reducir varios cables a una sola línea, el dibujo queda limpio y permite entender la estructura general y la lógica del circuito rápidamente."
  },
  { 
    id: 3014, 
    tema: "Esquemas", 
    texto: "¿Cuándo es más adecuado utilizar un esquema multifilar?", 
    opciones: ["Cuando se requiere detallar todos los conductores y conexiones.", "En instalaciones muy simples.", "En planos arquitectónicos.", "En croquis preliminares."], 
    correctaTexto: "Cuando se requiere detallar todos los conductores y conexiones.",
    explicacion: "Es imprescindible en el montaje de cuadros de automatismos o maniobra, donde hay que saber exactamente a qué borna va cada cable individual."
  },
  { 
    id: 3015, 
    tema: "Planos", 
    texto: "¿Qué representa un plano de planta en una instalación eléctrica?", 
    opciones: ["La vista superior de la instalación.", "Las conexiones eléctricas internas.", "La relación funcional de elementos.", "El consumo eléctrico."], 
    correctaTexto: "La vista superior de la instalación.",
    explicacion: "Es como ver la casa 'desde arriba' sin el techo. Permite distribuir los puntos de luz, interruptores y enchufes en cada habitación."
  },
  { 
    id: 3016, 
    tema: "Documentación", 
    texto: "¿Para qué sirve conservar los planos eléctricos de una instalación?", 
    opciones: ["Para facilitar el mantenimiento y futuras modificaciones.", "Para calcular la factura.", "Para justificar el consumo.", "Para reducir protecciones."], 
    correctaTexto: "Para facilitar el mantenimiento y futuras modificaciones.",
    explicacion: "Sin planos, cualquier avería o reforma se convierte en una pesadilla porque no sabes por dónde pasan los tubos ni qué protege cada circuito."
  },
  { 
    id: 3017, 
    tema: "Simbología", 
    texto: "¿Qué componente eléctrico representa este símbolo?", 
    imagen: "img/t3_simb_interruptor.jpg",
    opciones: ["El símbolo normalizado de interruptor.", "El símbolo de toma de corriente.", "El símbolo de puesta a tierra.", "El símbolo de contador."], 
    correctaTexto: "El símbolo normalizado de interruptor.",
    explicacion: "Suele representarse como un pequeño círculo con una línea oblicua (la palanca). Sirve para abrir o cerrar un circuito manualmente."
  },
  { 
    id: 3018, 
    tema: "Simbología", 
    texto: "¿Qué se representa mediante este símbolo en un plano de planta?", 
    imagen: "img/t3_simb_enchufe.jpg",
    opciones: ["El punto de conexión de un receptor (Toma de corriente).", "Un cuadro eléctrico.", "Un conductor de protección.", "Un fusible."], 
    correctaTexto: "El punto de conexión de un receptor (Toma de corriente).",
    explicacion: "Es la 'base de enchufe'. Su símbolo suele ser un semicírculo con patitas (y una línea central si tiene toma de tierra)."
  },
  { 
    id: 3019, 
    tema: "Simbología", 
    texto: "¿Qué representa este símbolo rectangular atravesado por una línea?", 
    imagen: "img/t3_simb_fusible.jpg",
    opciones: ["Un dispositivo de protección contra sobreintensidades (Fusible).", "Un receptor eléctrico.", "Un punto de luz.", "Un interruptor."], 
    correctaTexto: "Un dispositivo de protección contra sobreintensidades (Fusible).",
    explicacion: "El rectángulo atravesado por una línea recta indica que es un fusible (el hilo que se funde). La letra de designación es 'F'."
  },
  { 
    id: 3020, 
    tema: "Esquemas", 
    texto: "¿Qué datos suelen acompañar a los símbolos en un esquema eléctrico (como se ve en el detalle)?", 
    imagen: "img/t3_detalle_seccion_cable.jpg", 
    opciones: ["Datos técnicos como sección o intensidad.", "El consumo mensual.", "El precio del material.", "La factura eléctrica."], 
    correctaTexto: "Datos técnicos como sección o intensidad.",
    explicacion: "Los esquemas no son solo dibujos; deben indicar características técnicas: sección del cable (mm²), calibre de la protección (A), caída de tensión, etc."
  },
  { 
    id: 3021, 
    tema: "Representación", 
    texto: "¿Qué se entiende por la escala en un plano (ej. 1:50 del cajetín)?", 
    imagen: "img/t3_cajetin_plano.jpg", 
    opciones: ["La relación entre las dimensiones reales y las representadas.", "El tamaño del papel.", "El número de símbolos.", "El tipo de esquema."], 
    correctaTexto: "La relación entre las dimensiones reales y las representadas.",
    explicacion: "Indica la proporción. 1:50 significa que 1 cm en el papel equivale a 50 cm en la realidad. Fundamental para medir distancias de cables."
  },
  { 
    id: 3022, 
    tema: "Documentación", 
    texto: "¿Qué documento muestra el esquema general de una instalación de enlace (LGA, CGP, etc)?", 
    imagen: "img/t3_esquema_general_edificio.jpg", 
    opciones: ["El esquema unifilar general.", "El plano arquitectónico.", "El contrato de suministro.", "El certificado energético."], 
    correctaTexto: "El esquema unifilar general.",
    explicacion: "Es el mapa completo de la energía del edificio, mostrando cómo se distribuye desde la acometida hasta cada usuario."
  },
  { 
    id: 3023, 
    tema: "Simbología", 
    texto: "¿Qué equipo de medida representa este símbolo?", 
    imagen: "img/t3_simb_contador.jpg",
    opciones: ["El equipo de medida del consumo (Contador).", "Un receptor.", "Un interruptor.", "Un fusible."], 
    correctaTexto: "El equipo de medida del consumo (Contador).",
    explicacion: "Se representa como un rectángulo o cuadrado con las letras 'Wh' (Vatios-hora) o 'kWh' en su interior."
  },
  { 
    id: 3024, 
    tema: "Buenas prácticas", 
    texto: "¿Qué se debe evitar en la representación gráfica de una instalación eléctrica?", 
    opciones: ["Ambigüedades y símbolos no normalizados.", "El uso de esquemas.", "La inclusión de referencias.", "La documentación técnica."], 
    correctaTexto: "Ambigüedades y símbolos no normalizados.",
    explicacion: "Usar símbolos inventados o poco claros puede llevar a errores graves en la ejecución de la obra o accidentes en el mantenimiento."
  },

  // --- AMPLIACIÓN ---
  { 
    id: 3025, 
    tema: "Definición", 
    texto: "¿Qué constituye la 'Instalación Privada' según el esquema?", 
    imagen: "img/t3_limite_instalacion.jpg", 
    opciones: ["Derivación Individual + Instalación Interior.", "Solo la instalación interior.", "LGA + Contadores.", "CGP + Acometida."], 
    correctaTexto: "Derivación Individual + Instalación Interior.",
    explicacion: "Según el PDF, la instalación privada comienza en el embarrado de salida del contador. Incluye los fusibles de seguridad, la Derivación Individual y la instalación interior."
  },
  { 
    id: 3026, 
    tema: "Borneros", 
    texto: "Para referenciar los bornes de alimentación de fase se usan las siglas:", 
    imagen: "img/t3_numeracion_contactos.jpg",
    opciones: ["L1, L2, L3.", "R, S, T.", "U, V, W.", "F1, F2, F3."], 
    correctaTexto: "L1, L2, L3.",
    explicacion: "Aunque antiguamente se usaba R-S-T, la normativa actual (IEC/UNE) estandariza L1, L2 y L3 (Line 1, 2, 3) para las fases en bornas."
  },
  { 
    id: 3027, 
    tema: "Borneros", 
    texto: "¿Qué siglas identifican al conductor de protección en un bornero (o cable verde-amarillo)?", 
    imagen: "img/t3_conductor_pe.jpg", 
    opciones: ["PE.", "T.", "CP.", "GND."], 
    correctaTexto: "PE.",
    explicacion: "PE significa 'Protective Earth' (Tierra de Protección). Es la designación internacional para el conductor amarillo-verde."
  },
  { 
    id: 3028, 
    tema: "Contactos", 
    texto: "En contactos principales tripolares, la numeración va del 1 al 6 (ver foto):", 
    imagen: "img/t3_numeros_bornes.jpg", 
    opciones: ["Del 1 al 6.", "Del 1 al 3.", "Del 1 al 8.", "A, B, C."], 
    correctaTexto: "Del 1 al 6.",
    explicacion: "Se numeran de arriba abajo y de izquierda a derecha: Entrada (1, 3, 5) y Salida (2, 4, 6). Las cifras impares son entrada, las pares salida."
  },
  { 
    id: 3029, 
    tema: "Identificación", 
    texto: "¿Qué letra identifica a los 'Convertidores de magnitud no eléctrica a eléctrica' (sensores)?", 
    imagen: "img/t3_simbolo_sensor_b.jpg", 
    opciones: ["B.", "T.", "A.", "U."], 
    correctaTexto: "B.",
    explicacion: "Según la tabla de la norma: 'B' se usa para transductores como pares termoeléctricos, células fotoeléctricas, termostatos o detectores."
  },
  { 
    id: 3030, 
    tema: "Esquemas", 
    texto: "En el esquema de contadores centralizados, ¿qué elemento se sitúa entre la LGA y la centralización?", 
    imagen: "img/t3_centralizacion_igm.jpg",
    opciones: ["Interruptor General de Maniobra.", "Fusible de seguridad.", "ICP.", "Caja de derivación."], 
    correctaTexto: "Interruptor General de Maniobra.",
    explicacion: "Es obligatorio en centralizaciones de más de 2 usuarios. Permite desconectar toda la centralización de golpe para mantenimiento (seguridad)."
  },

// --- NUEVAS PREGUNTAS MASTERD (TEMA 3 - SIMBOLOGÍA) ---
  { 
    id: 3051, 
    tema: "Designación", 
    texto: "¿Con qué letra se designa una resistencia?", 
    opciones: ["Con la letra 'R'.", "Con la letra 'A'.", "Con la letra 'E'.", "Con la letra 'Q'."], 
    correctaTexto: "Con la letra 'R'.",
    explicacion: "Según la tabla de designación de componentes: 'R' abarca resistencias, potenciómetros, reóstatos y shunts."
  },
  { 
    id: 3052, 
    tema: "Instalación", 
    texto: "En el caso de un solo usuario, ¿por qué podemos simplificar la instalación de enlace?", 
    opciones: ["Porque coincide en el mismo lugar la Caja General de Protección y la situación del equipo de medida.", "Porque el contador y la acometida coinciden.", "Porque los contadores se alimentan desde un mismo lugar.", "Porque solo hay un usuario."], 
    correctaTexto: "Porque coincide en el mismo lugar la Caja General de Protección y la situación del equipo de medida.",
    explicacion: "Al unirse en una sola caja (CPM - Caja de Protección y Medida), desaparece la 'Línea General de Alimentación'. Se conecta la acometida directamente a la CPM."
  },
  { 
    id: 3053, 
    tema: "Montaje", 
    texto: "El referenciado correcto de las bornas es:", 
    opciones: ["Imprescindible para las operaciones de cableado.", "De importancia baja.", "Imprescindible según la instalación.", "De poca importancia."], 
    correctaTexto: "Imprescindible para las operaciones de cableado.",
    explicacion: "Sin un buen referenciado, el montaje y el mantenimiento posterior son imposibles. Permite saber qué cable va a dónde sin tener que seguirlo físicamente."
  },
  { 
    id: 3054, 
    tema: "Simbología", 
    texto: "El contacto con numeración 1 al 6 es un contacto de tipo:", 
    opciones: ["Principal.", "Auxiliar.", "De señalización.", "De referencia."], 
    correctaTexto: "Principal.",
    explicacion: "Los números de una sola cifra (1 a 6) se reservan para los contactos de POTENCIA (principales). Los auxiliares usan dos cifras (ej: 13-14)."
  },
  { 
    id: 3055, 
    tema: "Designación", 
    texto: "La designación para los componentes en los circuitos se efectúa:", 
    opciones: ["Con una letra alfabética que identifica la función del elemento seguido de un número de orden.", "Con una letra griega y un número.", "Con un número y una letra.", "Con una X y un número."], 
    correctaTexto: "Con una letra alfabética que identifica la función del elemento seguido de un número de orden.",
    explicacion: "Ejemplo: KM1. 'K' = Contactor (función), 'M' = Principal (subfunción opcional), '1' = Número de orden (el primer contactor)."
  },
  { 
    id: 3056, 
    tema: "Designación", 
    texto: "Entre los siguientes elementos, ¿cuál se designaría con la letra 'P'?", 
    opciones: ["Contadores (aparatos de medida).", "Calefacción.", "Células fotoeléctricas.", "Reguladores."], 
    correctaTexto: "Contadores (aparatos de medida).",
    explicacion: "La letra 'P' se asigna a aparatos de medida y prueba: contadores de energía, amperímetros, voltímetros, relojes horarios, etc."
  },
  { 
    id: 3057, 
    tema: "Normativa", 
    texto: "La Norma UNE es una norma:", 
    opciones: ["Española.", "Inglesa.", "Francesa.", "Alemana."], 
    correctaTexto: "Española.",
    explicacion: "UNE significa 'Una Norma Española'. Es el organismo de normalización en España (Asociación Española de Normalización)."
  },
  { 
    id: 3058, 
    tema: "Normativa", 
    texto: "¿Qué norma es la que establece los pasos a seguir en la confección de los esquemas eléctricos?", 
    opciones: ["La norma UNE 61.033.75.", "La norma CEI 11-27.", "La norma IEC 1082-1.", "La norma ANSA 43.21.52."], 
    correctaTexto: "La norma IEC 1082-1.",
    explicacion: "La norma internacional IEC 1082-1 sienta las bases de simbología y representación. En España se armoniza a través de las normas UNE."
  },
  { 
    id: 3059, 
    tema: "Identificación", 
    texto: "¿Cuál de estas designaciones NO se utiliza para distinguir ciertas partes de los borneros relativas a las líneas de alimentación?", 
    opciones: ["OTIE.", "PE.", "++.", "ON."], 
    correctaTexto: "OTIE.",
    explicacion: "'OTIE' no existe como designación normalizada. Las correctas son L1, L2, L3 (fases), N (neutro) y PE (tierra)."
  },
  { 
    id: 3060, 
    tema: "Esquemas", 
    texto: "¿Por qué hay que seguir una normativa simbólica y de representación en la realización de esquemas eléctricos?", 
    opciones: ["Para que distintas personas puedan interpretar de igual forma el mismo esquema.", "Para que el autor sepa interpretarlo en el futuro.", "No es necesario seguir ningún tipo de normalización.", "Cada empresa puede tener su normativa."], 
    correctaTexto: "Para que distintas personas puedan interpretar de igual forma el mismo esquema.",
    explicacion: "Es la base de la comunicación técnica. Permite que un técnico de mantenimiento entienda lo que diseñó el ingeniero años atrás."
  },

// --- NUEVAS PREGUNTAS MASTERD (DESIGNACIONES - TEXTO) ---
  { 
    id: 3061, 
    tema: "Designación", 
    texto: "En los esquemas, ¿qué letra se utiliza para designar los 'Contactores'?", 
    opciones: ["K.", "W.", "B.", "F."], 
    correctaTexto: "K.",
    explicacion: "La letra 'K' se usa para relés de automatismo y contactores (contactos de potencia y auxiliares)."
  },
  { 
    id: 3062, 
    tema: "Designación", 
    texto: "La letra 'H' en un esquema nos indica una función de:", 
    opciones: ["Dispositivo de señalización.", "Dispositivo de protección.", "Lámpara.", "Pulsador."], 
    correctaTexto: "Dispositivo de señalización.",
    explicacion: "Incluye pilotos luminosos, avisadores acústicos (timbres, sirenas) e indicadores de alarma."
  },
  { 
    id: 3063, 
    tema: "Designación", 
    texto: "Los 'Motores' se designan con la letra:", 
    opciones: ["M.", "S.", "A.", "Q."], 
    correctaTexto: "M.",
    explicacion: "Es una de las más intuitivas: 'M' de Motor. Se usa para cualquier tipo de motor eléctrico en el esquema."
  },
  { 
    id: 3064, 
    tema: "Designación", 
    texto: "Los 'Cortacircuitos fusibles' se designan con la letra:", 
    opciones: ["F.", "K.", "W.", "B."], 
    correctaTexto: "F.",
    explicacion: "La letra 'F' designa dispositivos de PROTECCIÓN: fusibles, relés térmicos de protección, pararrayos, etc."
  },
  { 
    id: 3065, 
    tema: "Designación", 
    texto: "La letra 'G' nos indica que estamos ante:", 
    opciones: ["Un generador o batería.", "Un electroimán.", "Una pila.", "Un dispositivo de alumbrado."], 
    correctaTexto: "Un generador o batería.",
    explicacion: "La 'G' es para fuentes de alimentación: Generadores, baterías, alternadores, osciladores, etc."
  },
  { 
    id: 3066, 
    tema: "Designación", 
    texto: "Los 'Seccionadores' (o aparatos de maniobra mecánica) se designan con la letra:", 
    opciones: ["Q.", "M.", "S.", "A."], 
    correctaTexto: "Q.",
    explicacion: "'Q' se reserva para aparatos mecánicos de conexión para circuitos de POTENCIA: disyuntores, seccionadores, interruptores generales."
  },
  { 
    id: 3067, 
    tema: "Conductores", 
    texto: "Las siglas del conductor de protección (tierra) son:", 
    opciones: ["PE.", "F1.", "TI.", "ON."], 
    correctaTexto: "PE.",
    explicacion: "PE = Protective Earth. Es el estándar internacional para identificar el cable de tierra (amarillo-verde) en los esquemas."
  },
  { 
    id: 3068, 
    tema: "Conductores", 
    texto: "Las siglas del conductor neutro son:", 
    opciones: ["N.", "F1.", "ONE.", "OPE."], 
    correctaTexto: "N.",
    explicacion: "La 'N' identifica el borne o cable del Neutro (color azul claro). Es el punto de retorno en sistemas monofásicos y el centro de la estrella en trifásicos."
  },

// --- NUEVAS PREGUNTAS MASTERD (PDF 38 - TEMA 3: REPRESENTACIÓN) ---
  { 
    id: 3083, 
    tema: "Identificación", 
    texto: "¿Con qué letra se designa el conductor neutro?", 
    opciones: ["N.", "ONEU.", "ON.", "OPE."], 
    correctaTexto: "N.",
    explicacion: "Es la designación normalizada para los bornes de alimentación del neutro."
  },
  { 
    id: 3084, 
    tema: "Designación", 
    texto: "¿Qué función designamos con la letra 'E'?", 
    opciones: ["Materiales varios (Alumbrado, Calefacción, elementos no especificados).", "Moduladores.", "Generadores.", "Dispositivos de protección."], 
    correctaTexto: "Materiales varios (Alumbrado, Calefacción, elementos no especificados).",
    explicacion: "La 'E' es un 'cajón de sastre' para elementos que no encajan en otras categorías, pero comúnmente se usa para el alumbrado y calefacción."
  },
  { 
    id: 3085, 
    tema: "Normativa", 
    texto: "¿Qué normas son las más utilizadas en la confección de esquemas?", 
    opciones: ["Normas IEC y UNE.", "Normas DIN y UNE.", "Normas BS y CEI.", "Normas ANSA y DIN."], 
    correctaTexto: "Normas IEC y UNE.",
    explicacion: "IEC (Internacional) y UNE (Española) son las referencias principales. La simbología suele ser idéntica en ambas."
  },
  { 
    id: 3086, 
    tema: "Contactos Auxiliares", 
    texto: "En un contacto auxiliar, ¿qué nos indica la cifra de las UNIDADES (ej: .1, .2, .3, .4)?", 
    opciones: ["La función del contacto (si es NC o NA).", "El orden correlativo.", "El número de elementos.", "La temporización."], 
    correctaTexto: "La función del contacto (si es NC o NA).",
    explicacion: "El segundo número (unidad) define la función: 1-2 para Cerrado (NC), 3-4 para Abierto (NA), 5-6/7-8 para especiales."
  },
  { 
    id: 3087, 
    tema: "Contactos Auxiliares", 
    texto: "Y la cifra de las DECENAS en un contacto auxiliar (ej: 1., 2., 3.), ¿qué indica?", 
    opciones: ["El orden correlativo de cada contacto.", "La función del contacto.", "La clase de contacto.", "El número de elementos."], 
    correctaTexto: "El orden correlativo de cada contacto.",
    explicacion: "Indica la posición física o el orden. Ej: el '13' es el PRIMER contacto (1) y es ABIERTO (3). El '21' es el SEGUNDO contacto (2) y es CERRADO (1)."
  },
  { 
    id: 3088, 
    tema: "Numeración", 
    texto: "El contacto con numeración 1 y 2 (o terminados en 1-2) es un contacto de tipo:", 
    opciones: ["Normalmente Cerrado (NC).", "Normalmente Abierto (NA).", "Conmutado.", "Temporizado."], 
    correctaTexto: "Normalmente Cerrado (NC).",
    explicacion: "NC (Normally Closed). En reposo deja pasar la corriente. Al activarse, se abre."
  },
  { 
    id: 3089, 
    tema: "Numeración", 
    texto: "El contacto con numeración 3 y 4 (o terminados en 3-4) es un contacto de tipo:", 
    opciones: ["Normalmente Abierto (NA).", "Normalmente Cerrado (NC).", "De potencia.", "Especial."], 
    correctaTexto: "Normalmente Abierto (NA).",
    explicacion: "NA (Normally Open) o NO. En reposo está abierto (no pasa corriente). Al activarse, se cierra."
  },
  { 
    id: 3090, 
    tema: "Representación", 
    texto: "¿Cómo se representan habitualmente los contactos auxiliares en el esquema?", 
    opciones: ["A la izquierda de los componentes (bobinas) sobre el esquema.", "A la derecha.", "Solo horizontal.", "Debajo."], 
    correctaTexto: "A la izquierda de los componentes (bobinas) sobre el esquema.",
    explicacion: "Esto facilita la lectura lógica del esquema de mando: la acción (contacto) precede a la reacción (bobina/salida)."
  },
  { 
    id: 3091, 
    tema: "Bornas", 
    texto: "La referencia de las bornas correspondientes a los contactos PRINCIPALES, ¿de cuántas cifras consta?", 
    opciones: ["Una sola cifra (1, 2, 3, 4, 5, 6).", "Dos cifras.", "Tres cifras.", "Cuatro cifras."], 
    correctaTexto: "Una sola cifra (1, 2, 3, 4, 5, 6).",
    explicacion: "Los contactos de potencia usan un solo dígito: 1-2 (L1), 3-4 (L2), 5-6 (L3). Las cifras impares son entradas y las pares salidas."
  },
  { 
    id: 3092, 
    tema: "Bornas", 
    texto: "La referencia de las bornas correspondientes a los contactos AUXILIARES, ¿de cuántas cifras consta?", 
    opciones: ["Dos cifras (ej: 13-14, 21-22).", "Una cifra.", "Tres cifras.", "Cinco cifras."], 
    correctaTexto: "Dos cifras (ej: 13-14, 21-22).",
    explicacion: "Necesitan dos cifras: una para el orden (decena) y otra para la función (unidad). Ejemplo: 13 (1º contacto, abierto)."
  },
  { 
    id: 3093, 
    tema: "Identificación", 
    texto: "De las siguientes opciones, ¿cuál hace referencia a una bobina de control (mando)?", 
    opciones: ["K2.", "L1.", "X1.", "A1."], 
    correctaTexto: "K2.",
    explicacion: "La letra 'K' identifica relés y contactores. 'K2' sería la bobina del segundo contactor del esquema. (Nota: Las bornas de la bobina suelen ser A1-A2)."
  },
  { 
    id: 3094, 
    tema: "Designación", 
    texto: "¿Cuál de estos dispositivos identificarías con la letra 'W'?", 
    opciones: ["Antenas, vías de transmisión, cables.", "Inductancias.", "Tubos de vacío.", "Motores."], 
    correctaTexto: "Antenas, vías de transmisión, cables.",
    explicacion: "La 'W' se utiliza para todo lo relacionado con guías de ondas, antenas, cables de transmisión, fibra óptica, etc."
  },
  { 
    id: 3095, 
    tema: "Designación", 
    texto: "Entre los siguientes elementos, ¿cuál se designaría con la letra 'P'?", 
    opciones: ["Aparatos de medida y prueba (Reloj, Amperímetro, Contador).", "Calefacción.", "Células.", "Reguladores."], 
    correctaTexto: "Aparatos de medida y prueba (Reloj, Amperímetro, Contador).",
    explicacion: "Cualquier instrumento que mida o registre: Voltímetros, Amperímetros, Vármetros, Contadores de energía, etc."
  },
  { 
    id: 3096, 
    tema: "Designación", 
    texto: "¿Con qué letra se designa una resistencia?", 
    opciones: ["R.", "A.", "E.", "Q."], 
    correctaTexto: "R.",
    explicacion: "La letra 'R' es el estándar universal para componentes resistivos."
  },
  { 
    id: 3097, 
    tema: "Designación", 
    texto: "Entre los siguientes, ¿cuál se designaría con la letra 'H'?", 
    opciones: ["Un piloto luminoso (Señalización).", "Un condensador.", "Un temporizador.", "Un disyuntor."], 
    correctaTexto: "Un piloto luminoso (Señalización).",
    explicacion: "H = Herramienta de aviso. Luces, sirenas, zumbadores, leds de estado, etc."
  },
  { 
    id: 3098, 
    tema: "Designación", 
    texto: "¿Cuál de los siguientes dispositivos tienen la función de aparatos mecánicos de conexión para circuitos de potencia?", 
    opciones: ["Disyuntores (Q).", "Bobinas de bloqueo.", "Pares termoeléctricos.", "Reloj."], 
    correctaTexto: "Disyuntores (Q).",
    explicacion: "La letra 'Q' es crítica en potencia: identifica los interruptores automáticos (magnetotérmicos) y disyuntores de motor."
  },
  { 
    id: 3099, 
    tema: "Bornas", 
    texto: "¿Cuál de estas designaciones NO se utiliza para bornas de alimentación?", 
    opciones: ["TIE.", "PE (Tierra).", "L1 (Fase).", "N (Neutro)."], 
    correctaTexto: "TIE.",
    explicacion: "TIE no es un código estándar. Para tierra se usa PE (Protective Earth)."
  }
];


// --- AMPLIACIÓN TEMA 3: IDENTIFICACIÓN DE LETRAS (IDs 3200) ---
const LETRAS_TEST_DATA = [
  { 
    id: 3201, tema: "Letras de Referencia", 
    texto: "¿Qué función principal identifica la letra 'Q' según la norma?", 
    opciones: ["Aparatos mecánicos de conexión para circuitos de potencia", "Dispositivos de protección", "Motores", "Aparatos de medida"], 
    correctaTexto: "Aparatos mecánicos de conexión para circuitos de potencia",
    explicacion: "La letra Q se reserva para elementos que cortan potencia, como disyuntores magnetotérmicos e interruptores diferenciales."
  },
  { 
    id: 3202, tema: "Letras de Referencia", 
    texto: "Un contactor de potencia o un relé de automatismo se designa con la letra:", 
    opciones: ["K", "S", "Q", "F"], 
    correctaTexto: "K",
    explicacion: "La letra K abarca contactores de potencia, auxiliares y relés de automatismo."
  },
  { 
    id: 3203, tema: "Letras de Referencia", 
    texto: "¿Qué letra se utiliza para identificar dispositivos de protección como fusibles o pararrayos?", 
    opciones: ["F", "P", "L", "R"], 
    correctaTexto: "F",
    explicacion: "F identifica dispositivos destinados a la protección de la instalación contra sobretensiones o sobreintensidades."
  },
  { 
    id: 3204, tema: "Letras de Referencia", 
    texto: "Los aparatos de accionamiento manual para control (pulsadores, interruptores de posición) usan la letra:", 
    opciones: ["S", "H", "K", "X"], 
    correctaTexto: "S",
    explicacion: "S identifica aparatos mecánicos de conexión para circuitos de control accionados manualmente."
  },
  { 
    id: 3205, tema: "Letras de Referencia", 
    texto: "Para identificar señalizadores luminosos o acústicos (pilotos, timbres), usamos la letra:", 
    opciones: ["H", "V", "E", "B"], 
    correctaTexto: "H",
    explicacion: "H se refiere a dispositivos de señalización óptica o acústica."
  },
  { 
    id: 3206, tema: "Letras de Referencia", 
    texto: "¿Qué elementos identifica la letra 'P'?", 
    opciones: ["Instrumentos de medida y prueba (contadores, relojes)", "Fuentes de alimentación", "Bornes y clavijas", "Condensadores"], 
    correctaTexto: "Instrumentos de medida y prueba (contadores, relojes)",
    explicacion: "P se usa para aparatos indicadores, registradores y contadores."
  },
  { 
    id: 3207, tema: "Letras de Referencia", 
    texto: "Un motor eléctrico se designa inequívocamente con la letra:", 
    opciones: ["M", "G", "Y", "A"], 
    correctaTexto: "M",
    explicacion: "M es la letra específica para motores en la norma IEC."
  },
  { 
    id: 3208, tema: "Letras de Referencia", 
    texto: "La letra 'X' se utiliza en los esquemas para identificar:", 
    opciones: ["Bornas, clavijas y tomas de corriente", "Cables y antenas", "Transformadores", "Semiconductores"], 
    correctaTexto: "Bornas, clavijas y tomas de corriente",
    explicacion: "X abarca todo tipo de conexiones como regletas de bornes, clavijas y bases de enchufe."
  },
  { 
    id: 3209, tema: "Letras de Referencia", 
    texto: "Un convertidor de magnitud no eléctrica en eléctrica (como un termostato o presostato) usa la letra:", 
    opciones: ["B", "U", "V", "D"], 
    correctaTexto: "B",
    explicacion: "B se usa para transductores como células fotoeléctricas, detectores de proximidad y termostatos."
  },
  { 
    id: 3210, tema: "Letras de Referencia", 
    texto: "Si vemos un transformador de tensión o de intensidad, vendrá marcado con la letra:", 
    opciones: ["T", "L", "G", "C"], 
    correctaTexto: "T",
    explicacion: "T es la letra de referencia para todo tipo de transformadores."
  }


,



// --- AMPLIACIÓN DATA.JS (Copiar y pegar al final del array LETRAS_TEST_DATA existente) ---

  { 
    id: 3220, tema: "Letras de Referencia", 
    texto: "¿Qué identifica la letra 'D' en un esquema?", 
    opciones: ["Elementos binarios, dispositivos de temporización y memoria", "Dispositivos de potencia", "Generadores", "Detectores"], 
    correctaTexto: "Elementos binarios, dispositivos de temporización y memoria",
    explicacion: "Según la tabla, la D se usa para operadores combinatorios, líneas de retardo, básculas biestables y memorias magnéticas[cite: 81]."
  },
  { 
    id: 3221, tema: "Letras de Referencia", 
    texto: "Las bobinas de inducción y bobinas de bloqueo se designan con:", 
    opciones: ["L", "B", "I", "Z"], 
    correctaTexto: "L",
    explicacion: "La letra 'L' es específica para Inductancias[cite: 83]."
  },
  { 
    id: 3222, tema: "Letras de Referencia", 
    texto: "¿Qué letra designa a los 'Subconjuntos (no de serie)' como amplificadores operacionales?", 
    opciones: ["N", "A", "U", "Y"], 
    correctaTexto: "N",
    explicacion: "La 'N' se utiliza para subconjuntos como dispositivos analógicos o reguladores que no son de serie[cite: 83]."
  },
  { 
    id: 3223, tema: "Letras de Referencia", 
    texto: "Los moduladores, convertidores de frecuencia y codificadores usan la letra:", 
    opciones: ["U", "C", "M", "T"], 
    correctaTexto: "U",
    explicacion: "La 'U' agrupa moduladores, convertidores y discriminadores[cite: 87]."
  },
  { 
    id: 3224, tema: "Letras de Referencia", 
    texto: "¿Cómo se identifica un condensador en los esquemas?", 
    opciones: ["C", "K", "R", "Q"], 
    correctaTexto: "C",
    explicacion: "Es una de las letras más directas: 'C' para Condensadores[cite: 81]."
  },
  { 
    id: 3225, tema: "Letras de Referencia", 
    texto: "Un amplificador de transistores o un regulador magnético (Conjunto funcional) se designa con:", 
    opciones: ["A", "U", "B", "K"], 
    correctaTexto: "A",
    explicacion: "La letra 'A' es para conjuntos y subconjuntos funcionales de serie[cite: 81]."
  }
,

{ 
    id: 3230, tema: "Reconocimiento Visual", 
    texto: "¿Qué letra de referencia corresponde a este símbolo?",
    // Símbolo de Bobina de Contactor
    svg: `<svg viewBox="0 0 50 50" width="100" height="100"><rect x="15" y="15" width="20" height="20" stroke="#1e293b" stroke-width="2" fill="none"/><line x1="25" y1="0" x2="25" y2="15" stroke="#1e293b" stroke-width="2"/><line x1="25" y1="35" x2="25" y2="50" stroke="#1e293b" stroke-width="2"/><text x="18" y="30" font-family="Arial" font-size="10">A1</text></svg>`, 
    opciones: ["K (Bobina de contactor/relé)", "Q (Interruptor)", "S (Pulsador)", "H (Lámpara)"], 
    correctaTexto: "K (Bobina de contactor/relé)",
    explicacion: "El rectángulo con conexiones A1/A2 representa la bobina de un contactor o relé de automatismo, designado con la letra K[cite: 83]."
  },
  { 
    id: 3231, tema: "Reconocimiento Visual", 
    texto: "¿Qué letra acompaña a este dispositivo de accionamiento manual?",
    // Símbolo de Pulsador NA
    svg: `<svg viewBox="0 0 50 50" width="100" height="100"><line x1="25" y1="15" x2="25" y2="25" stroke="#1e293b" stroke-width="2"/><line x1="15" y1="25" x2="35" y2="25" stroke="#1e293b" stroke-width="2"/><line x1="20" y1="30" x2="20" y2="45" stroke="#1e293b" stroke-width="2"/><line x1="30" y1="30" x2="30" y2="45" stroke="#1e293b" stroke-width="2"/><circle cx="20" cy="30" r="2" fill="black"/><circle cx="30" cy="30" r="2" fill="black"/></svg>`, 
    opciones: ["S (Mando manual)", "K (Relé)", "Q (Potencia)", "X (Borna)"], 
    correctaTexto: "S (Mando manual)",
    explicacion: "Es un pulsador. Al ser un aparato mecánico de conexión para circuitos de control accionado manualmente, su letra es S[cite: 87]."
  },
  { 
    id: 3232, tema: "Reconocimiento Visual", 
    texto: "Este símbolo de protección se designa con la letra:",
    // Símbolo de Fusible
    svg: `<svg viewBox="0 0 50 50" width="100" height="100"><rect x="15" y="10" width="20" height="30" stroke="#1e293b" stroke-width="2" fill="none"/><line x1="25" y1="0" x2="25" y2="10" stroke="#1e293b" stroke-width="2"/><line x1="25" y1="40" x2="25" y2="50" stroke="#1e293b" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="40" stroke="#1e293b" stroke-width="2"/></svg>`, 
    opciones: ["F", "Q", "R", "P"], 
    correctaTexto: "F",
    explicacion: "Es un fusible. Los dispositivos de protección (cortacircuitos, relés térmicos) se designan con la letra F[cite: 83]."
  }

,


{ 
    id: 3240, tema: "Diferenciación", 
    texto: "DIFERENCIA CLAVE: ¿Cuándo usamos 'Q' y cuándo usamos 'S' para un interruptor?", 
    opciones: ["Q para circuitos de POTENCIA, S para circuitos de CONTROL.", "Q para control, S para potencia.", "Es indiferente, se pueden intercambiar.", "Q es para automáticos y S para manuales siempre."], 
    correctaTexto: "Q para circuitos de POTENCIA, S para circuitos de CONTROL.",
    explicacion: "Regla de oro: Si pasa mucha corriente (Motor, Línea General) es Q[cite: 83]. Si es una señal de mando (Pulsador, Final de carrera) es S[cite: 87]."
  },
  { 
    id: 3241, tema: "Diferenciación", 
    texto: "DIFERENCIA CLAVE: ¿Por qué un Relé Térmico es 'F' y no 'K' ni 'Q'?", 
    opciones: ["Porque su función principal es PROTEGER.", "Porque es un interruptor.", "Porque tiene contactos auxiliares.", "Debería ser Q."], 
    correctaTexto: "Porque su función principal es PROTEGER.",
    explicacion: "Aunque corta el circuito o da señal, su función primaria es la protección contra sobrecargas, por tanto, entra en la categoría F[cite: 83]."
  }




];





// --- TEMA 4: MAGNITUDES (PDF 75 COMPLETO) ---


const TEMA_4_DATA = [
  // --- PREGUNTAS ORIGINALES ---
  { 
    id: 4001, 
    tema: "Medidas", 
    texto: "¿Para qué se realizan medidas en una instalación eléctrica, como vemos en la imagen?", 
    imagen: "img/t4_medicion_cuadro.jpg",
    opciones: ["Para comprobar que la instalación funciona correctamente y es segura.", "Para aumentar la potencia contratada.", "Para reducir el consumo eléctrico.", "Para modificar la instalación."], 
    correctaTexto: "Para comprobar que la instalación funciona correctamente y es segura." 
  },
  { id: 4002, tema: "Medidas", texto: "¿Qué magnitud se mide con un voltímetro?", opciones: ["La intensidad.", "La resistencia.", "La tensión eléctrica.", "La potencia."], correctaTexto: "La tensión eléctrica." },
  { 
    id: 4003, 
    tema: "Medidas", 
    texto: "¿Qué magnitud se mide con un amperímetro (o pinza amperimétrica)?", 
    imagen: "img/t4_pinza.jpg",
    opciones: ["La potencia.", "La intensidad de corriente.", "La tensión.", "La resistencia."], 
    correctaTexto: "La intensidad de corriente." 
  },
  { id: 4004, tema: "Medidas", texto: "¿Qué instrumento se utiliza para medir la resistencia eléctrica?", opciones: ["El vatímetro.", "El voltímetro.", "El polímetro u ohmímetro.", "El amperímetro."], correctaTexto: "El polímetro u ohmímetro." },
  { 
    id: 4005, 
    tema: "Medidas", 
    texto: "¿Qué aparato permite medir varias magnitudes eléctricas (V, A, Ω)?", 
    imagen: "img/t4_multimetro.jpg",
    opciones: ["El amperímetro.", "El voltímetro.", "El polímetro o multímetro.", "El vatímetro."], 
    correctaTexto: "El polímetro o multímetro." 
  },
  { id: 4006, tema: "Medidas", texto: "¿Qué debe hacerse antes de medir resistencia en un circuito?", opciones: ["Comprobar que el circuito está sin tensión.", "Conectar la instalación.", "Aumentar la potencia.", "Cambiar el conductor."], correctaTexto: "Comprobar que el circuito está sin tensión." },
  { id: 4007, tema: "Medidas", texto: "¿Qué se comprueba al medir la continuidad de un conductor?", opciones: ["Que no esté interrumpido.", "Que exista tensión.", "Que haya potencia.", "Que esté conectado a tierra."], correctaTexto: "Que no esté interrumpido." },
  { 
    id: 4008, 
    tema: "Medidas", 
    texto: "¿Qué instrumento sencillo se utiliza para verificar la ausencia de tensión por contacto?", 
    imagen: "img/t4_buscapolos.jpg",
    opciones: ["Un detector de tensión (Buscapolos).", "Un vatímetro.", "Un megóhmetro.", "Un osciloscopio."], 
    correctaTexto: "Un detector de tensión." 
  },
  { 
    id: 4009, 
    tema: "Medidas", 
    texto: "¿Qué magnitud se mide con un vatímetro?", 
    imagen: "img/t4_vatimetro.jpg",
    opciones: ["La tensión.", "La intensidad.", "La resistencia.", "La potencia eléctrica."], 
    correctaTexto: "La potencia eléctrica." 
  },
  { id: 4010, tema: "Seguridad", texto: "¿Por qué deben realizarse las medidas eléctricas con seguridad?", opciones: ["Para evitar riesgos para las personas.", "Para reducir el tiempo de trabajo.", "Para mejorar la lectura.", "Para aumentar la potencia."], correctaTexto: "Para evitar riesgos para las personas." },
  { id: 4011, tema: "Medidas", texto: "¿Qué es un multímetro?", opciones: ["Un aparato de protección.", "Un instrumento que mide varias magnitudes eléctricas.", "Un elemento de la instalación.", "Un contador."], correctaTexto: "Un instrumento que mide varias magnitudes eléctricas." },
  { id: 4012, tema: "Medidas", texto: "¿Qué magnitudes puede medir un multímetro básico?", opciones: ["Solo tensión.", "Tensión, intensidad y resistencia.", "Solo intensidad.", "Solo potencia."], correctaTexto: "Tensión, intensidad y resistencia." },
  { id: 4013, tema: "Medidas", texto: "¿Qué debe hacerse antes de medir tensión en una instalación?", opciones: ["Conectar los instrumentos correctamente.", "Desconectar siempre la instalación.", "Cambiar los conductores.", "Aumentar la potencia."], correctaTexto: "Conectar los instrumentos correctamente." },
  { 
    id: 4014, 
    tema: "Medidas", 
    texto: "¿Qué se mide habitualmente para comprobar el correcto funcionamiento de un circuito (ver esquema)?", 
    imagen: "img/t4_esquema_medida.jpg",
    opciones: ["Tensión e intensidad.", "Solo la potencia.", "Solo la resistencia.", "Solo el consumo."], 
    correctaTexto: "Tensión e intensidad." 
  },
  { id: 4015, tema: "Medidas", texto: "¿Qué error puede producir una mala medición?", opciones: ["Un diagnóstico incorrecto de la instalación.", "Una mejora automática.", "Un aumento de potencia.", "Ninguna consecuencia."], correctaTexto: "Un diagnóstico incorrecto de la instalación." },
  { id: 4016, tema: "Medidas", texto: "¿Qué se debe revisar si una medición no es correcta?", opciones: ["El instrumento y la conexión.", "La factura eléctrica.", "La potencia contratada.", "El contador."], correctaTexto: "El instrumento y la conexión." },
  { id: 4017, tema: "Medidas", texto: "¿Qué medida se realiza con la instalación en servicio (con tensión)?", opciones: ["La medida de tensión.", "La medida de resistencia.", "La medida de continuidad.", "La medida de aislamiento."], correctaTexto: "La medida de tensión." },
  { id: 4018, tema: "Medidas", texto: "¿Qué se debe evitar al realizar medidas eléctricas?", opciones: ["El contacto con partes en tensión.", "El uso de EPIs.", "La comprobación previa.", "El uso de instrumentos adecuados."], correctaTexto: "El contacto con partes en tensión." },
  { id: 4019, tema: "Medidas", texto: "¿Qué se hace tras finalizar una medición?", opciones: ["Anotar e interpretar los resultados.", "Modificar la instalación.", "Cambiar el contador.", "Aumentar la potencia."], correctaTexto: "Anotar e interpretar los resultados." },
  { id: 4020, tema: "Medidas", texto: "¿Por qué es importante interpretar correctamente las medidas?", opciones: ["Para tomar decisiones correctas sobre la instalación.", "Para reducir el tiempo.", "Para aumentar la potencia.", "Para evitar normativa."], correctaTexto: "Para tomar decisiones correctas sobre la instalación." },

  // --- AMPLIACIÓN ---
  { 
    id: 4021, 
    tema: "Potencia", 
    texto: "¿Con qué instrumento se mide la Potencia Reactiva (Q)?", 
    opciones: ["Varímetro.", "Vatímetro.", "Fasímetro.", "Ohmímetro."], 
    correctaTexto: "Varímetro." 
  },
  { id: 4022, tema: "Frecuencia", texto: "¿Cuál es la frecuencia estándar de la corriente alterna en Europa?", opciones: ["50 Hz.", "60 Hz.", "100 Hz.", "25 Hz."], correctaTexto: "50 Hz." },
  { id: 4023, tema: "Seguridad", texto: "Antes de medir resistencia con un óhmetro, es IMPRESCINDIBLE:", opciones: ["Que el circuito no tenga tensión.", "Que el circuito esté a máxima tensión.", "Usar guantes de goma.", "Calentar el aparato."], correctaTexto: "Que el circuito no tenga tensión." },
  { id: 4024, tema: "Instrumentos", texto: "En un polímetro digital, la resolución viene determinada por:", opciones: ["El número de dígitos de la pantalla.", "El tamaño de la aguja.", "El color de la carcasa.", "La tensión de la batería."], correctaTexto: "El número de dígitos de la pantalla." },
  { id: 4025, tema: "Precisión", texto: "Un instrumento de 'Clase 0,5' se considera:", opciones: ["De precisión (laboratorio).", "De cuadro (industrial).", "De baja calidad.", "Para uso doméstico."], correctaTexto: "De precisión (laboratorio)." },
  { 
    id: 4026, 
    tema: "Medida", 
    texto: "Para ampliar la escala de medida de un amperímetro se utiliza una resistencia en paralelo llamada:", 
    imagen: "img/t4_shunt.jpg",
    opciones: ["Shunt.", "Bobina.", "Condensador.", "Reostato."], 
    correctaTexto: "Shunt." 
  },
  { 
    id: 4027, 
    tema: "Iluminación", 
    texto: "¿Qué magnitud mide el flujo luminoso emitido por una lámpara (usando un luxómetro)?", 
    imagen: "img/t4_luxometro.jpg",
    opciones: ["Lumen (lm).", "Lux (lx).", "Candela (cd).", "W/m2."], 
    correctaTexto: "Lumen (lm)." 
  },
  { 
    id: 4028, 
    tema: "Seguridad", 
    texto: "¿Qué ocurre si conectamos un amperímetro en paralelo con una fuente de tensión (como si fuera un voltímetro)?", 
    opciones: ["Se produce un cortocircuito (se funde el fusible).", "Mide la tensión.", "No marca nada.", "Mide la resistencia interna."], 
    correctaTexto: "Se produce un cortocircuito (se funde el fusible)." 
  },
  { 
    id: 4029, 
    tema: "Medida", 
    texto: "La medida de resistencia de aislamiento (con Megóhmetro) suele realizarse con una tensión de ensayo de:", 
    imagen: "img/t4_megohmetro.jpg",
    opciones: ["500 V o superior.", "12 V.", "24 V.", "1,5 V."], 
    correctaTexto: "500 V o superior." 
  },
  { 
    id: 4030, 
    tema: "Conceptos", 
    texto: "El calentamiento de un conductor al paso de la corriente (como en esta resistencia) se conoce como:", 
    imagen: "img/t4_efecto_joule.jpg",
    opciones: ["Efecto Joule.", "Efecto Hall.", "Ley de Ohm.", "Inducción."], 
    correctaTexto: "Efecto Joule." 
  },


// --- NUEVAS PREGUNTAS MASTERD (PDF 75 - TEMA 4: MEDIDAS) ---
  { 
    id: 4060, 
    tema: "Instrumentación", 
    texto: "¿Qué es la impedancia de un polímetro?", 
    opciones: ["Es la resistencia interna; cuanto más alta sea, mayor precisión obtendremos.", "Es la resistencia interna; cuanto más baja sea, mejor.", "Es la capacidad de medir amperios.", "Es la tensión de la pila interna."], 
    correctaTexto: "Es la resistencia interna; cuanto más alta sea, mayor precisión obtendremos." 
  },
  { 
    id: 4061, 
    tema: "Instrumentación", 
    texto: "Señale la afirmación correcta sobre el óhmetro:", 
    opciones: ["Mide la resistencia eléctrica y se conecta en paralelo con el elemento, pero SIN tensión (ausencia de corriente).", "Se conecta en serie con tensión.", "Mide la conductividad con tensión.", "Se conecta en paralelo con el circuito alimentado."], 
    correctaTexto: "Mide la resistencia eléctrica y se conecta en paralelo con el elemento, pero SIN tensión (ausencia de corriente)." 
  },
  { 
    id: 4062, 
    tema: "Instrumentación", 
    texto: "Una de las ventajas de usar una pinza amperimétrica frente a un amperímetro convencional es que:", 
    opciones: ["Podemos medir sin desconectar el circuito ni dejar sin energía la instalación.", "Es más precisa.", "Mide tensiones más altas.", "No necesita batería."], 
    correctaTexto: "Podemos medir sin desconectar el circuito ni dejar sin energía la instalación." 
  },
  { 
    id: 4063, 
    tema: "Potencia", 
    texto: "La potencia REACTIVA aparece cuando el circuito de corriente alterna alimenta a:", 
    opciones: ["Bobinas o condensadores.", "Resistencias puras.", "Lámparas incandescentes.", "Circuitos de corriente continua."], 
    correctaTexto: "Bobinas o condensadores." 
  },
  { 
    id: 4064, 
    tema: "Instrumentación", 
    texto: "La posición 'hFE' del polímetro se emplea para:", 
    opciones: ["Comprobar la ganancia de los transistores.", "Medir alta tensión.", "Medir continuidad.", "Medir capacidad de condensadores."], 
    correctaTexto: "Comprobar la ganancia de los transistores." 
  },
  { 
    id: 4065, 
    tema: "Medición", 
    texto: "Si vamos a medir magnitudes desconocidas con un polímetro:", 
    opciones: ["Primero seleccionaremos las escalas más altas y iremos bajando.", "Empezamos por la más baja para tener precisión.", "Usamos siempre la escala media.", "No importa la escala."], 
    correctaTexto: "Primero seleccionaremos las escalas más altas y iremos bajando." 
  },
  { 
    id: 4066, 
    tema: "Instrumentación", 
    texto: "El varímetro es el aparato encargado de medir:", 
    opciones: ["La potencia reactiva.", "La potencia activa.", "La variación de tensión.", "Los vatios."], 
    correctaTexto: "La potencia reactiva." 
  },
  { 
    id: 4067, 
    tema: "Potencia", 
    texto: "La fórmula de la potencia REACTIVA (Q) es:", 
    opciones: ["Q = V · I · sen φ", "Q = V · I · cos φ", "Q = V / I", "Q = I² · R"], 
    correctaTexto: "Q = V · I · sen φ" 
  },
  { 
    id: 4068, 
    tema: "Potencia", 
    texto: "La fórmula de la potencia ACTIVA (P) es:", 
    opciones: ["P = V · I · cos φ", "P = V · I · sen φ", "P = V · I", "P = V / R"], 
    correctaTexto: "P = V · I · cos φ" 
  },
  { 
    id: 4069, 
    tema: "Factor de Potencia", 
    texto: "Si el ángulo de desfase es elevado (bajo factor de potencia):", 
    opciones: ["La compañía eléctrica nos puede penalizar.", "Mejor funcionan los receptores.", "Pagaremos menos.", "La compañía nos premia."], 
    correctaTexto: "La compañía eléctrica nos puede penalizar." 
  },
  { 
    id: 4070, 
    tema: "Magnitudes", 
    texto: "La frecuencia en corriente continua vale:", 
    opciones: ["Cero (0 Hz).", "50 Hz.", "Infinita.", "Depende del voltaje."], 
    correctaTexto: "Cero (0 Hz)." 
  },
  { 
    id: 4071, 
    tema: "Instrumentación", 
    texto: "¿Qué mide el Megger?", 
    opciones: ["La resistencia de aislamiento de los circuitos eléctricos.", "La resistencia de tierra.", "La corriente de fuga.", "La potencia máxima."], 
    correctaTexto: "La resistencia de aislamiento de los circuitos eléctricos." 
  },
  { 
    id: 4072, 
    tema: "Errores", 
    texto: "La clasificación de los tipos de errores en la medición suele ser:", 
    opciones: ["Error de paralaje, de cero y absoluto.", "Error humano y visual.", "Error de tensión y corriente.", "Error de escala."], 
    correctaTexto: "Error de paralaje, de cero y absoluto." 
  },
  { 
    id: 4073, 
    tema: "Instrumentación", 
    texto: "La clase de un instrumento de medida indica:", 
    opciones: ["El valor máximo en % que puede tener de error el equipo según la escala.", "La categoría de sobretensión.", "La calidad del plástico.", "El tipo de corriente que mide."], 
    correctaTexto: "El valor máximo en % que puede tener de error el equipo según la escala." 
  },
  { 
    id: 4074, 
    tema: "Conductividad", 
    texto: "La conductividad eléctrica se define como:", 
    opciones: ["La capacidad de un material para dejar pasar la corriente. Es el inverso de la resistividad.", "La resistencia de un material.", "La oposición al paso de corriente.", "El cuadrado de la resistividad."], 
    correctaTexto: "La capacidad de un material para dejar pasar la corriente. Es el inverso de la resistividad." 
  },
  { 
    id: 4075, 
    tema: "Unidades", 
    texto: "La candela es la unidad con la que se mide:", 
    opciones: ["Intensidad luminosa.", "Flujo luminoso.", "Iluminancia.", "Brillo."], 
    correctaTexto: "Intensidad luminosa." 
  },
  { 
    id: 4076, 
    tema: "Unidades", 
    texto: "El lumen es la unidad de medida de:", 
    opciones: ["Flujo luminoso.", "Intensidad luminosa.", "Nivel de iluminación.", "Potencia eléctrica."], 
    correctaTexto: "Flujo luminoso." 
  },
  { 
    id: 4077, 
    tema: "Unidades", 
    texto: "¿Qué magnitud se designa por la letra E y su unidad es el lux?", 
    opciones: ["Nivel de iluminación (Iluminancia).", "Flujo luminoso.", "Intensidad luminosa.", "Energía."], 
    correctaTexto: "Nivel de iluminación (Iluminancia)." 
  },
  { 
    id: 4078, 
    tema: "Instrumentación", 
    texto: "Para comprobar la presencia de tensión con el buscapolos:", 
    opciones: ["Hay que tocar con la punta el conductor y con el dedo el extremo del mango para cerrar el circuito.", "No hace falta tocar nada con el dedo.", "Se conecta a tierra.", "Se usan dos manos."], 
    correctaTexto: "Hay que tocar con la punta el conductor y con el dedo el extremo del mango para cerrar el circuito." 
  },
  { 
    id: 4079, 
    tema: "Calculo Sección", 
    texto: "La fórmula de la sección de un conductor circular en función de su diámetro (D) es:", 
    opciones: ["S = (π · D²) / 4", "S = π · D²", "S = 2 · π · R", "S = D / π"], 
    correctaTexto: "S = (π · D²) / 4" 
  }




];
// --- TEMA 5: REGLAMENTO (PDF 76 COMPLETO) ---


const TEMA_5_DATA = [
  // --- PREGUNTAS ORIGINALES ---
  { id:5001, tema:"Documentación", texto:"¿Para qué sirve la documentación de una instalación eléctrica de enlace?", opciones:["Para justificar el consumo eléctrico.","Para describir y acreditar la correcta ejecución de la instalación.","Para aumentar la potencia contratada.","Para mejorar la estética del edificio."], correctaTexto:"Para describir y acreditar la correcta ejecución de la instalación." },
  { id:5002, tema:"Documentación", texto:"¿Quién es el responsable de elaborar la documentación de la instalación eléctrica?", opciones:["El usuario final.","La empresa suministradora.","El instalador autorizado.","El fabricante del material."], correctaTexto:"El instalador autorizado." },
  { id:5003, tema:"Documentación", texto:"¿Qué documento refleja gráficamente la instalación eléctrica realizada?", opciones:["El contrato de suministro.","La factura eléctrica.","Los planos y esquemas eléctricos.","El certificado energético."], correctaTexto:"Los planos y esquemas eléctricos." },
  { id:5004, tema:"Documentación", texto:"¿Qué esquema se utiliza habitualmente para representar las instalaciones de enlace?", opciones:["El esquema multifilar.","El esquema unifilar.","El plano arquitectónico.","El croquis manual."], correctaTexto:"El esquema unifilar." },
  { id:5005, tema:"Documentación", texto:"¿Qué documento acredita que una instalación cumple el REBT?", opciones:["El contrato de mantenimiento.","El certificado de instalación eléctrica.","La factura de la obra.","El plano de planta."], correctaTexto:"El certificado de instalación eléctrica." },
  { id:5006, tema:"Documentación", texto:"¿Cuándo debe elaborarse la documentación de la instalación eléctrica?", opciones:["Antes de comenzar la obra.","Durante la ejecución.","Al finalizar la instalación.","Solo cuando lo solicite el usuario."], correctaTexto:"Al finalizar la instalación." },
  { id:5007, tema:"Documentación", texto:"¿Qué información deben contener los planos eléctricos?", opciones:["Únicamente el consumo eléctrico.","La ubicación de los elementos y su simbología.","El coste de los materiales.","La potencia contratada."], correctaTexto:"La ubicación de los elementos y su simbología." },
  { id:5008, tema:"Documentación", texto:"¿Qué finalidad tiene el certificado de instalación eléctrica?", opciones:["Acreditar que la instalación cumple la normativa.","Calcular el consumo.","Determinar la tarifa eléctrica.","Mejorar la estética."], correctaTexto:"Acreditar que la instalación cumple la normativa." },
  { id:5009, tema:"Documentación", texto:"¿Qué organismo puede requerir la documentación de la instalación eléctrica?", opciones:["La administración competente.","El fabricante del material.","El usuario únicamente.","El proveedor de herramientas."], correctaTexto:"La administración competente." },
  { id:5010, tema:"Normativa", texto:"¿Qué reglamento regula la documentación de las instalaciones eléctricas de baja tensión?", opciones:["El Reglamento Electrotécnico para Baja Tensión (REBT).","El Reglamento de Alta Tensión.","El Código Técnico de la Edificación.","Las normas ISO."], correctaTexto:"El Reglamento Electrotécnico para Baja Tensión (REBT)." },
  { id:5011, tema:"Documentación", texto:"¿Qué documentos forman parte habitualmente de la documentación de una instalación eléctrica?", opciones:["Planos, esquemas y certificado de instalación.","Factura y contrato.","Consumo mensual.","Presupuesto únicamente."], correctaTexto:"Planos, esquemas y certificado de instalación." },
  { id:5012, tema:"Documentación", texto:"¿Por qué es importante conservar la documentación de una instalación eléctrica?", opciones:["Para facilitar el mantenimiento y futuras modificaciones.","Para reducir el consumo.","Para aumentar la potencia.","Para evitar inspecciones."], correctaTexto:"Para facilitar el mantenimiento y futuras modificaciones." },
  { id:5013, tema:"Documentación", texto:"¿Qué datos técnicos pueden aparecer en los esquemas eléctricos?", opciones:["Secciones de conductores e intensidades.","Precio del material.","Consumo mensual.","Tarifa eléctrica."], correctaTexto:"Secciones de conductores e intensidades." },
  { id:5014, tema:"Documentación", texto:"¿Quién debe firmar el certificado de instalación eléctrica?", opciones:["El usuario.","El instalador autorizado.","La compañía eléctrica.","El técnico municipal."], correctaTexto:"El instalador autorizado." },
  { id:5015, tema:"Documentación", texto:"¿Qué documento se presenta para dar de alta el suministro eléctrico?", opciones:["El certificado de instalación eléctrica.","El plano de planta.","El esquema multifilar.","El contrato de mantenimiento."], correctaTexto:"El certificado de instalación eléctrica." },
  { id:5016, tema:"Documentación", texto:"¿Qué debe reflejar la documentación respecto a la instalación realizada?", opciones:["La realidad de la instalación ejecutada.","El proyecto inicial sin cambios.","Solo los materiales usados.","Solo el consumo previsto."], correctaTexto:"La realidad de la instalación ejecutada." },
  { id:5017, tema:"Documentación", texto:"¿Qué plano muestra la ubicación real de los elementos eléctricos?", opciones:["El plano de planta.","El esquema unifilar.","El esquema multifilar.","El diagrama funcional."], correctaTexto:"El plano de planta." },
  { id:5018, tema:"Documentación", texto:"¿Por qué deben usarse símbolos normalizados en la documentación?", opciones:["Para que cualquier técnico pueda interpretarla correctamente.","Para reducir el número de planos.","Para abaratar costes.","Para mejorar la estética."], correctaTexto:"Para que cualquier técnico pueda interpretarla correctamente." },
  { id:5019, tema:"Documentación", texto:"¿Qué se debe evitar en la elaboración de la documentación eléctrica?", opciones:["Información incompleta o confusa.","El uso de esquemas.","La firma del instalador.","La inclusión de planos."], correctaTexto:"Información incompleta o confusa." },
  { id:5020, tema:"Buenas prácticas", texto:"¿Cuál es una buena práctica en la elaboración de documentación eléctrica?", opciones:["Mantenerla clara, actualizada y conforme a normativa.","Reducir información técnica.","Eliminar esquemas.","No conservar copias."], correctaTexto:"Mantenerla clara, actualizada y conforme a normativa." },

  // --- AMPLIACIÓN ---
  { id:5021, tema:"Esquemas", texto:"En el esquema de distribución TT, ¿cómo se conectan las masas de la instalación receptora?", opciones:["A una toma de tierra separada de la alimentación.","Al neutro.","No se conectan.","A la fase."], correctaTexto:"A una toma de tierra separada de la alimentación." },
  { id:5022, tema:"Esquemas", texto:"¿Qué esquema de distribución es obligatorio para redes de distribución pública alimentadas directamente?", opciones:["Esquema TT.","Esquema TN.","Esquema IT.","Cualquiera."], correctaTexto:"Esquema TT." },
  { id:5023, tema:"Esquemas", texto:"En el esquema TN-C, ¿qué función cumple el conductor PEN?", opciones:["Neutro y Protección combinados.","Solo fase.","Solo tierra.","Mando."], correctaTexto:"Neutro y Protección combinados." },
  { id:5024, tema:"Terminología", texto:"¿Qué significa que un material sea de 'Clase II'?", opciones:["Tiene doble aislamiento o reforzado.","Tiene toma de tierra.","Funciona a muy baja tensión.","Es metálico."], correctaTexto:"Tiene doble aislamiento o reforzado." },
  { id:5025, tema:"Definición", texto:"Un 'Suelo no conductor' es aquel que presenta una resistencia igual o superior a:", opciones:["50.000 Ohmios.","1.000 Ohmios.","100 Ohmios.","10.000 Ohmios."], correctaTexto:"50.000 Ohmios." },
  { id:5026, tema:"Cargas", texto:"La carga total de un edificio se calcula sumando:", opciones:["Viviendas + Servicios Generales + Locales + Garajes.","Solo viviendas.","Viviendas y garajes.","La potencia del transformador."], correctaTexto:"Viviendas + Servicios Generales + Locales + Garajes." },
  { id:5027, tema:"Documentación", texto:"¿Quién define el formato de la Memoria Técnica de Diseño (MTD)?", opciones:["El Órgano competente de la Comunidad Autónoma.","El Ministerio.","El Instalador.","La Compañía."], correctaTexto:"El Órgano competente de la Comunidad Autónoma." },
  { id:5028, tema:"Instalador", texto:"¿Puede un Instalador de Categoría Básica legalizar un quirófano?", opciones:["No, requiere Categoría Especialista.","Sí, siempre.","Sí, con un proyecto.","Depende de la potencia."], correctaTexto:"No, requiere Categoría Especialista." },
  { id:5029, tema:"Terminología", texto:"La 'Corriente diferencial residual' es:", opciones:["La suma vectorial de corrientes de conductores activos.","La corriente de fase.","La corriente de carga.","La potencia activa."], correctaTexto:"La suma vectorial de corrientes de conductores activos." },
  { id:5030, tema:"Garajes", texto:"¿Cuándo requiere proyecto un garaje con ventilación natural?", opciones:["Si tiene más de 5 plazas.","Siempre.","Nunca.","Si tiene más de 25 plazas."], correctaTexto:"Si tiene más de 5 plazas." }


,

// --- NUEVAS PREGUNTAS MASTERD (PDF 76 - TEMA 5: REGLAMENTO REBT) ---
  { 
    id: 5060, 
    tema: "Aislamiento", 
    texto: "El aislamiento de las partes activas, cuyo deterioro podría provocar riesgo de choque eléctrico, se define como:", 
    opciones: ["Aislamiento principal.", "Aislamiento reforzado.", "Aislamiento funcional.", "Aislamiento suplementario."], 
    correctaTexto: "Aislamiento principal." 
  },
  { 
    id: 5061, 
    tema: "Aislamiento", 
    texto: "El aislamiento cuyas características mecánicas y eléctricas hacen que pueda considerarse equivalente a un doble aislamiento, se define como:", 
    opciones: ["Aislamiento reforzado.", "Aislamiento funcional.", "Aislamiento principal.", "Aislamiento de clase 0."], 
    correctaTexto: "Aislamiento reforzado." 
  },
  { 
    id: 5062, 
    tema: "Instaladores", 
    texto: "La instalación eléctrica de una vivienda unifamiliar (doméstica) podrá ser realizada por un instalador:", 
    opciones: ["De categoría básica (IBTB).", "De categoría especialista (IBTE).", "Exclusivamente especialista.", "Cualquier persona con conocimientos."], 
    correctaTexto: "De categoría básica (IBTB)." 
  },
  { 
    id: 5063, 
    tema: "Instaladores", 
    texto: "Un sistema de control de procesos (automatización industrial) deberá ser realizado por un instalador:", 
    opciones: ["De categoría especialista.", "De categoría básica.", "De categoría media.", "Ingeniero industrial únicamente."], 
    correctaTexto: "De categoría especialista." 
  },
  { 
    id: 5064, 
    tema: "Seguros", 
    texto: "La cuantía mínima del seguro de responsabilidad civil para un instalador de Categoría BÁSICA es de:", 
    opciones: ["600.000 euros.", "900.000 euros.", "300.000 euros.", "1.000.000 euros."], 
    correctaTexto: "600.000 euros." 
  },
  { 
    id: 5065, 
    tema: "Seguros", 
    texto: "¿Y para la Categoría ESPECIALISTA?", 
    opciones: ["900.000 euros.", "600.000 euros.", "1.200.000 euros.", "Indefinido."], 
    correctaTexto: "900.000 euros." 
  },
  { 
    id: 5066, 
    tema: "Electrificación", 
    texto: "El grado de electrificación será ELEVADO cuando:", 
    opciones: ["La superficie útil sea superior a 160 m², o se prevea aire acondicionado/calefacción eléctrica.", "La superficie sea superior a 100 m².", "Tenga más de 5 circuitos.", "Solo si tiene aire acondicionado."], 
    correctaTexto: "La superficie útil sea superior a 160 m², o se prevea aire acondicionado/calefacción eléctrica." 
  },
  { 
    id: 5067, 
    tema: "Conductores", 
    texto: "El conductor 'CPN' (o PEN) es aquel que:", 
    opciones: ["Asegura, al mismo tiempo, las funciones de conductor de protección (Tierra) y de conductor neutro.", "Es solo neutro.", "Es solo protección.", "Es un conductor de alta tensión."], 
    correctaTexto: "Asegura, al mismo tiempo, las funciones de conductor de protección (Tierra) y de conductor neutro." 
  },
  { 
    id: 5068, 
    tema: "Inspecciones", 
    texto: "¿Qué instalaciones requieren Inspección Inicial por Organismo de Control (OCA)?", 
    opciones: ["Locales de Pública Concurrencia, Piscinas > 10kW, Alumbrado exterior > 5kW, etc.", "Todas las viviendas.", "Solo las industrias.", "Garajes de menos de 5 plazas."], 
    correctaTexto: "Locales de Pública Concurrencia, Piscinas > 10kW, Alumbrado exterior > 5kW, etc." 
  },
  { 
    id: 5069, 
    tema: "Inspecciones", 
    texto: "Las revisiones periódicas cada 5 AÑOS son obligatorias para:", 
    opciones: ["Locales de Pública Concurrencia, Cines, Hospitales, etc.", "Viviendas particulares.", "Zonas comunes de edificios.", "Alumbrado interior."], 
    correctaTexto: "Locales de Pública Concurrencia, Cines, Hospitales, etc." 
  },
  { 
    id: 5070, 
    tema: "Inspecciones", 
    texto: "Las revisiones periódicas cada 10 AÑOS se realizan en:", 
    opciones: ["Zonas comunes de edificios de viviendas con potencia total instalada > 100 kW.", "Todas las viviendas.", "Garajes privados.", "Locales comerciales."], 
    correctaTexto: "Zonas comunes de edificios de viviendas con potencia total instalada > 100 kW." 
  },
  { 
    id: 5071, 
    tema: "Diferenciales", 
    texto: "Se consideran interruptores diferenciales de ALTA sensibilidad aquellos cuyo valor es:", 
    opciones: ["Igual o inferior a 30 mA.", "Igual o inferior a 300 mA.", "Superior a 30 mA.", "0,5 A."], 
    correctaTexto: "Igual o inferior a 30 mA." 
  },
  { 
    id: 5072, 
    tema: "Esquemas Tierra", 
    texto: "El esquema de distribución TN-S se caracteriza porque:", 
    opciones: ["El conductor neutro y el de protección son distintos (separados) en todo el esquema.", "Están unidos en todo el esquema (TN-C).", "No tiene tierra.", "El neutro está aislado de tierra (IT)."], 
    correctaTexto: "El conductor neutro y el de protección son distintos (separados) en todo el esquema." 
  },
  { 
    id: 5073, 
    tema: "Esquemas Tierra", 
    texto: "El esquema de distribución TT (el más común en viviendas en España) se caracteriza porque:", 
    opciones: ["El neutro de la alimentación está a tierra y las masas de la instalación receptora están a una toma de tierra separada.", "Neutro y masas comparten la misma tierra.", "Las masas no tienen tierra.", "Es un sistema flotante."], 
    correctaTexto: "El neutro de la alimentación está a tierra y las masas de la instalación receptora están a una toma de tierra separada." 
  },
  { 
    id: 5074, 
    tema: "Protección", 
    texto: "El corte OMNIPOLAR implica el corte de:", 
    opciones: ["Todos los conductores activos (Fases y Neutro).", "Solo las fases.", "Solo el neutro.", "Fases y Tierra."], 
    correctaTexto: "Todos los conductores activos (Fases y Neutro)." 
  },
  { 
    id: 5075, 
    tema: "Definiciones", 
    texto: "La corriente que, en ausencia de fallos, se transmite a tierra o a elementos conductores del circuito se llama:", 
    opciones: ["Corriente de fuga.", "Corriente de defecto.", "Corriente de cortocircuito.", "Corriente residual."], 
    correctaTexto: "Corriente de fuga." 
  },
  { 
    id: 5076, 
    tema: "Equipamiento", 
    texto: "Un ANALIZADOR DE REDES es un equipo obligatorio para las empresas instaladoras de categoría:", 
    opciones: ["Especialista.", "Básica.", "Ambas.", "Ninguna."], 
    correctaTexto: "Especialista." 
  },
  { 
    id: 5077, 
    tema: "Definiciones", 
    texto: "Un aparato 'AMOVIBLE' es aquel que:", 
    opciones: ["Es portátil, movible o semifijo (se puede mover mientras funciona o fácilmente desplazable).", "Es fijo y está empotrado.", "No se puede mover.", "Requiere herramienta para desmontarlo."], 
    correctaTexto: "Es portátil, movible o semifijo (se puede mover mientras funciona o fácilmente desplazable)." 
  },
  { 
    id: 5078, 
    tema: "Definiciones", 
    texto: "La tensión que aparece entre partes accesibles simultáneamente al ocurrir un fallo de aislamiento se llama:", 
    opciones: ["Tensión de contacto.", "Tensión de defecto.", "Tensión nominal.", "Tensión de paso."], 
    correctaTexto: "Tensión de contacto." 
  }


];




// --- TEMA 6: ELECTRIFICACIÓN (PDF MASTERD COMPLETO) ---


const TEMA_6_DATA = [
  // --- PREGUNTAS ORIGINALES ---
  { id:6001, tema:"Electrificación", texto:"¿Qué se entiende por electrificación de una vivienda?", opciones:["El conjunto de circuitos eléctricos necesarios para el uso normal de la vivienda.","La instalación de un único circuito eléctrico.","La conexión directa a la red de distribución.","La potencia contratada por el usuario."], correctaTexto:"El conjunto de circuitos eléctricos necesarios para el uso normal de la vivienda." },
  { id:6002, tema:"Electrificación", texto:"¿Qué reglamento regula la electrificación de viviendas en España?", opciones:["El Código Técnico de la Edificación.","El Reglamento de Alta Tensión.","El Reglamento Electrotécnico para Baja Tensión (REBT).","Las normas ISO."], correctaTexto:"El Reglamento Electrotécnico para Baja Tensión (REBT)." },
  { id:6003, tema:"Electrificación", texto:"¿Qué tipos de electrificación se contemplan en las viviendas según el REBT?", opciones:["Electrificación básica y electrificación elevada.","Electrificación simple y compleja.","Electrificación monofásica y trifásica.","Electrificación interior y exterior."], correctaTexto:"Electrificación básica y electrificación elevada." },
  { id:6004, tema:"Circuitos", texto:"¿Qué circuito es obligatorio en toda vivienda?", opciones:["El circuito de climatización.","El circuito de iluminación.","El circuito de calefacción.","El circuito de automatización."], correctaTexto:"El circuito de iluminación." },
  { id:6005, tema:"Circuitos", texto:"¿Qué circuito alimenta las tomas de corriente de uso general?", opciones:["El circuito C1.","El circuito C2.","El circuito C3.","El circuito C4."], correctaTexto:"El circuito C2." },
  { id:6006, tema:"Instalaciones", texto:"¿Dónde se sitúa normalmente el cuadro general de mando y protección en una vivienda?", opciones:["En el exterior del edificio.","En el interior de la vivienda, cerca de la entrada.","En el sótano.","En la cubierta."], correctaTexto:"En el interior de la vivienda, cerca de la entrada." },
  { id:6007, tema:"Seguridad", texto:"¿Qué elemento protege a las personas frente a contactos indirectos?", opciones:["El interruptor general automático.","El interruptor diferencial.","El magnetotérmico.","El fusible."], correctaTexto:"El interruptor diferencial." },
  { id:6008, tema:"Protecciones", texto:"¿Qué dispositivo protege los circuitos frente a sobrecargas y cortocircuitos?", opciones:["El interruptor diferencial.","El contador.","El interruptor magnetotérmico.","El limitador de potencia."], correctaTexto:"El interruptor magnetotérmico." },
  { id:6009, tema:"Potencia", texto:"¿De qué depende la electrificación básica o elevada de una vivienda?", opciones:["Del número de habitantes.","De la superficie de la vivienda y previsión de uso.","Del tipo de contador.","De la compañía suministradora."], correctaTexto:"De la superficie de la vivienda y previsión de uso." },
  { id:6010, tema:"Normativa", texto:"¿Qué instrucción técnica del REBT regula las instalaciones interiores de viviendas?", opciones:["ITC-BT-19.","ITC-BT-25.","ITC-BT-10.","ITC-BT-04."], correctaTexto:"ITC-BT-25." },
  { id:6011, tema:"Electrificación", texto:"¿Qué incluye la electrificación básica de una vivienda?", opciones:["Los circuitos mínimos obligatorios.","Todos los circuitos posibles.","Solo iluminación.","Solo tomas de corriente."], correctaTexto:"Los circuitos mínimos obligatorios." },
  { id:6012, tema:"Electrificación", texto:"¿Qué caracteriza a una electrificación elevada?", opciones:["Mayor número de circuitos y mayor previsión de potencia.","Menor número de circuitos.","Uso exclusivo industrial.","Solo viviendas pequeñas."], correctaTexto:"Mayor número de circuitos y mayor previsión de potencia." },
  { id:6013, tema:"Circuitos", texto:"¿Qué circuito está destinado a la cocina y horno?", opciones:["El circuito C3.","El circuito C1.","El circuito C2.","El circuito C5."], correctaTexto:"El circuito C3." },
  { id:6014, tema:"Circuitos", texto:"¿Qué circuito alimenta el lavavajillas y lavadora?", opciones:["El circuito C4.","El circuito C2.","El circuito C1.","El circuito C6."], correctaTexto:"El circuito C4." },
  { id:6015, tema:"Instalaciones", texto:"¿Qué elemento agrupa las protecciones de los circuitos de la vivienda?", opciones:["El contador.","El cuadro general de mando y protección.","La CGP.","La centralización de contadores."], correctaTexto:"El cuadro general de mando y protección." },
  { id:6016, tema:"Seguridad", texto:"¿Qué función tiene la puesta a tierra en una vivienda?", opciones:["Proteger a las personas frente a contactos indirectos.","Aumentar la potencia instalada.","Reducir el consumo.","Mejorar la iluminación."], correctaTexto:"Proteger a las personas frente a contactos indirectos." },
  { id:6017, tema:"Conductores", texto:"¿Qué factor influye en la sección de los conductores de una vivienda?", opciones:["La intensidad que deben soportar.","El color del aislamiento.","La longitud del pasillo.","El tipo de vivienda."], correctaTexto:"La intensidad que deben soportar." },
  { id:6018, tema:"Protecciones", texto:"¿Qué protección actúa ante una fuga de corriente a tierra?", opciones:["El interruptor diferencial.","El magnetotérmico.","El fusible.","El ICP."], correctaTexto:"El interruptor diferencial." },
  { id:6019, tema:"Instalaciones", texto:"¿Dónde deben instalarse las tomas de corriente en una vivienda?", opciones:["Según lo indicado en la normativa.","Solo en salones.","Solo en cocinas.","A criterio del usuario."], correctaTexto:"Según lo indicado en la normativa." },
  { id:6020, tema:"Buenas prácticas", texto:"¿Cuál es una buena práctica en la electrificación de viviendas?", opciones:["Cumplir la normativa y prever futuras necesidades.","Reducir circuitos al mínimo.","Eliminar protecciones.","No documentar la instalación."], correctaTexto:"Cumplir la normativa y prever futuras necesidades." },

  // --- AMPLIACIÓN ---
  { id:6021, tema:"Protección", texto:"El Interruptor General Automático (IGA) debe tener una intensidad nominal mínima de:", opciones:["25 A.","16 A.","40 A.","63 A."], correctaTexto:"25 A." },
  { id:6022, tema:"Tierras", texto:"La profundidad mínima de enterramiento de las picas de tierra es de:", opciones:["0,50 m.","1 m.","2 m.","0,80 m."], correctaTexto:"0,50 m." },
  { id:6023, tema:"Tierras", texto:"¿Se pueden utilizar las tuberías de agua o gas como toma de tierra?", opciones:["No, por razones de seguridad.","Sí, si son metálicas.","Solo las de agua.","Sí, siempre."], correctaTexto:"No, por razones de seguridad." },
  { id:6024, tema:"Cuadros", texto:"¿Qué grado de protección mínimo contra impactos (IK) deben tener las envolventes de los cuadros en vivienda?", opciones:["IK07.","IK08.","IK10.","IK05."], correctaTexto:"IK07." },
  { id:6025, tema:"Protección", texto:"En instalaciones de vivienda, ¿es obligatorio proteger contra sobretensiones?", opciones:["Sí, si fuese necesario según ITC-BT-23.","No, nunca.","Solo en industria.","Solo en pública concurrencia."], correctaTexto:"Sí, si fuese necesario según ITC-BT-23." },
  { id:6026, tema:"Circuitos", texto:"El circuito C2 (tomas de uso general y frigorífico) requiere una sección mínima de:", opciones:["2,5 mm².","1,5 mm².","4 mm².","6 mm²."], correctaTexto:"2,5 mm²." },
  { id:6027, tema:"Circuitos", texto:"El circuito C5 está destinado a:", opciones:["Tomas de corriente en baños y auxiliares de cocina.","Secadora.","Lavadora.","Calefacción."], correctaTexto:"Tomas de corriente en baños y auxiliares de cocina." },
  { id:6028, tema:"Inspección", texto:"Las instalaciones comunes de edificios de viviendas con P > 100 kW se inspeccionan cada:", opciones:["10 años.","5 años.","2 años.","Nunca."], correctaTexto:"10 años." },
  { id:6029, tema:"Conductores", texto:"El color del conductor de fase será:", opciones:["Negro, marrón o gris.","Azul.","Verde-Amarillo.","Rojo."], correctaTexto:"Negro, marrón o gris." },
  { id:6030, tema:"Tierras", texto:"La tensión de contacto límite en locales húmedos es de:", opciones:["24 V.","50 V.","12 V.","230 V."], correctaTexto:"24 V." }

,

// --- NUEVAS PREGUNTAS MASTERD (PDF 11 y 12 - VIVIENDA) ---
  { 
    id: 6061, 
    tema: "Electrificación", 
    texto: "Una vivienda con cinco circuitos básicos (C1 a C5) ¿qué grado de electrificación tendrá?", 
    opciones: ["Básico.", "Medio.", "Alto.", "Elevado."], 
    correctaTexto: "Básico." 
  },
  { 
    id: 6062, 
    tema: "Electrificación", 
    texto: "Una vivienda que dispone de aire acondicionado, ¿qué grado de electrificación requiere obligatoriamente?", 
    opciones: ["Elevado.", "Básico.", "Medio.", "Alto."], 
    correctaTexto: "Elevado." 
  },
  { 
    id: 6063, 
    tema: "Circuitos", 
    texto: "La sección mínima por circuito está calculada para un número limitado de puntos. Si aumentamos dichos puntos:", 
    opciones: ["Deberemos instalar circuitos adicionales.", "Usaremos regletas.", "Aumentaremos la potencia contratada.", "Pondremos fusibles más grandes."], 
    correctaTexto: "Deberemos instalar circuitos adicionales." 
  }

,


// --- NUEVAS PREGUNTAS MASTERD (PDF 13-16 - VIVIENDA) ---
  { 
    id: 6070, 
    tema: "Tubos", 
    texto: "Desde la concentración de contadores hasta las viviendas, ¿cuántos tubos se instalarán?", 
    opciones: ["Uno por cada vivienda (por cada derivación individual).", "Uno por cada 10 viviendas.", "Uno común.", "Dos por vivienda."], 
    correctaTexto: "Uno por cada vivienda (por cada derivación individual)." 
  },
  { 
    id: 6071, 
    tema: "Tubos", 
    texto: "En instalaciones empotradas, para tubos con MÁS de 5 conductores, la sección interior del tubo será como mínimo:", 
    opciones: ["3 veces la sección ocupada por los conductores.", "4 veces la sección ocupada.", "2 veces la sección.", "Igual a la sección."], 
    correctaTexto: "3 veces la sección ocupada por los conductores." 
  },
  { 
    id: 6072, 
    tema: "Electrificación", 
    texto: "Indique qué afirmación es FALSA sobre la distribución de circuitos en vivienda:", 
    opciones: ["Lavadora, lavavajillas y horno estarán instalados en el mismo circuito (FALSO: El horno va en C3 y lavadora/lavavajillas en C4).", "El frigorífico y tomas generales pueden ir juntos.", "La calefacción tendrá circuito propio.", "El aire acondicionado tendrá circuito propio."], 
    correctaTexto: "Lavadora, lavavajillas y horno estarán instalados en el mismo circuito (FALSO: El horno va en C3 y lavadora/lavavajillas en C4)." 
  },
  { 
    id: 6073, 
    tema: "Electrificación", 
    texto: "Una vivienda con aire acondicionado, ¿qué grado de electrificación requiere?", 
    opciones: ["Elevado.", "Básico.", "Medio.", "Alto."], 
    correctaTexto: "Elevado." 
  },
  { 
    id: 6074, 
    tema: "Tensión", 
    texto: "La tensión nominal habitual en sistemas trifásicos de baja tensión es de:", 
    opciones: ["400 V.", "380 V.", "230 V.", "220 V."], 
    correctaTexto: "400 V." 
  },

// --- NUEVAS PREGUNTAS MASTERD (PDF 20, 22 - CIRCUITOS) ---
  { 
    id: 6080, 
    tema: "Circuitos", 
    texto: "El circuito C7 de electrificación elevada será destinado a:", 
    opciones: ["Tomas de corriente de uso general (adicionales), por cada 20 tomas.", "Alimentación del sistema de automatización.", "Puntos de alimentación, por cada 30 puntos de luz.", "La secadora."], 
    correctaTexto: "Tomas de corriente de uso general (adicionales), por cada 20 tomas." 
  },
  { 
    id: 6081, 
    tema: "Canalizaciones", 
    texto: "En instalaciones interiores, las dimensiones de las canaladuras deberán permitir la ampliación de la sección de conductores en un:", 
    opciones: ["100%.", "50%.", "25%.", "10%."], 
    correctaTexto: "100%." 
  },
  { 
    id: 6082, 
    tema: "Potencia", 
    texto: "Si aumentamos los puntos de utilización de un circuito más allá del límite:", 
    opciones: ["Deberemos instalar circuitos adicionales.", "Usaremos regletas.", "Aumentaremos la potencia contratada.", "Usaremos ladrones."], 
    correctaTexto: "Deberemos instalar circuitos adicionales." 
  }


,






];





// --- TEMA 7: INTERIORES (PDF 77 COMPLETO) ---


const TEMA_7_DATA = [
  // --- PREGUNTAS ORIGINALES ---
  { id:7001, tema:"Representación", texto:"¿Para qué se utiliza la representación gráfica en las instalaciones eléctricas de viviendas?", opciones:["Para mostrar de forma clara la disposición de los elementos eléctricos.","Para calcular la potencia contratada.","Para medir el consumo eléctrico.","Para facturar la energía."], correctaTexto:"Para mostrar de forma clara la disposición de los elementos eléctricos." },
  { id:7002, tema:"Simbología", texto:"¿Qué permite la utilización de símbolos eléctricos normalizados?", opciones:["Interpretar correctamente los planos de la instalación.","Reducir el número de circuitos.","Aumentar la potencia instalada.","Eliminar documentación."], correctaTexto:"Interpretar correctamente los planos de la instalación." },
  { id:7003, tema:"Esquemas", texto:"¿Qué esquema se utiliza habitualmente para representar la instalación eléctrica de una vivienda?", opciones:["El esquema unifilar.","El esquema multifilar.","El diagrama mecánico.","El plano estructural."], correctaTexto:"El esquema unifilar." },
  { id:7004, tema:"Esquemas", texto:"¿Qué representa un esquema multifilar?", opciones:["Cada conductor de la instalación de forma individual.","La instalación mediante una sola línea.","La ubicación real de los elementos.","La potencia total instalada."], correctaTexto:"Cada conductor de la instalación de forma individual." },
  { id:7005, tema:"Planos", texto:"¿Qué plano muestra la ubicación real de los mecanismos eléctricos en una vivienda?", opciones:["El plano de planta.","El esquema unifilar.","El esquema multifilar.","El diagrama funcional."], correctaTexto:"El plano de planta." },
  { id:7006, tema:"Simbología", texto:"¿Qué deben cumplir los símbolos eléctricos utilizados en viviendas?", opciones:["Ser normalizados y fácilmente identificables.","Depender del fabricante.","Ser distintos en cada instalación.","Usarse solo en industria."], correctaTexto:"Ser normalizados y fácilmente identificables." },
  { id:7007, tema:"Documentación", texto:"¿Qué documento recoge los planos y esquemas de la instalación eléctrica de una vivienda?", opciones:["La documentación técnica de la instalación.","La factura eléctrica.","El contrato de suministro.","El boletín de enganche."], correctaTexto:"La documentación técnica de la instalación." },
  { id:7008, tema:"Simbología", texto:"¿Qué representa el símbolo de una toma de corriente en un plano?", opciones:["El punto de conexión de un receptor.","Un cuadro eléctrico.","Un interruptor.","Un conductor de protección."], correctaTexto:"El punto de conexión de un receptor." },
  { id:7009, tema:"Simbología", texto:"¿Qué representa el símbolo de un interruptor en una vivienda?", opciones:["El elemento que abre o cierra un circuito.","Un punto de iluminación.","Una toma de corriente.","Un fusible."], correctaTexto:"El elemento que abre o cierra un circuito." },
  { id:7010, tema:"Normativa", texto:"¿Qué normativa regula la representación y simbología eléctrica en viviendas?", opciones:["Las normas UNE y el REBT.","El Código Técnico de la Edificación.","Las normas ISO.","La normativa municipal."], correctaTexto:"Las normas UNE y el REBT." },
  { id:7011, tema:"Representación", texto:"¿Qué información básica debe incluir un plano eléctrico de una vivienda?", opciones:["La ubicación de los elementos eléctricos y su simbología.","El consumo mensual.","La factura eléctrica.","La tarifa contratada."], correctaTexto:"La ubicación de los elementos eléctricos y su simbología." },
  { id:7012, tema:"Simbología", texto:"¿Por qué es importante utilizar simbología normalizada en viviendas?", opciones:["Para que cualquier técnico pueda interpretar la instalación.","Para reducir costes.","Para simplificar el diseño.","Para aumentar la potencia."], correctaTexto:"Para que cualquier técnico pueda interpretar la instalación." },
  { id:7013, tema:"Esquemas", texto:"¿Qué ventaja ofrece el esquema unifilar en viviendas?", opciones:["Facilita la comprensión general de la instalación.","Muestra todos los conductores con detalle.","Sustituye a los planos.","Aumenta la complejidad."], correctaTexto:"Facilita la comprensión general de la instalación." },
  { id:7014, tema:"Esquemas", texto:"¿Cuándo se utiliza un esquema multifilar en viviendas?", opciones:["Cuando se necesita detallar conexiones y conductores.","En planos de situación.","En croquis preliminares.","Nunca en viviendas."], correctaTexto:"Cuando se necesita detallar conexiones y conductores." },
  { id:7015, tema:"Planos", texto:"¿Qué representa un plano de planta eléctrica?", opciones:["La vista superior de la instalación eléctrica.","Las conexiones internas.","La potencia total.","El consumo eléctrico."], correctaTexto:"La vista superior de la instalación eléctrica." },
  { id:7016, tema:"Documentación", texto:"¿Para qué sirve conservar los planos eléctricos de una vivienda?", opciones:["Para mantenimiento y futuras modificaciones.","Para calcular el consumo.","Para cambiar la tarifa.","Para reducir protecciones."], correctaTexto:"Para mantenimiento y futuras modificaciones." },
  { id:7017, tema:"Simbología", texto:"¿Qué símbolo representa un punto de luz?", opciones:["El símbolo normalizado de luminaria.","El símbolo de interruptor.","El símbolo de toma de corriente.","El símbolo de fusible."], correctaTexto:"El símbolo normalizado de luminaria." },
  { id:7018, tema:"Simbología", texto:"¿Qué se representa mediante el símbolo de puesta a tierra?", opciones:["La conexión a tierra de un elemento.","Un interruptor.","Un punto de luz.","Una toma de corriente."], correctaTexto:"La conexión a tierra de un elemento." },
  { id:7019, tema:"Documentación", texto:"¿Qué documento se entrega al finalizar la instalación eléctrica de una vivienda?", opciones:["La documentación final de la instalación.","La factura eléctrica.","El contrato de suministro.","El plano arquitectónico."], correctaTexto:"La documentación final de la instalación." },
  { id:7020, tema:"Buenas prácticas", texto:"¿Cuál es una buena práctica en la representación eléctrica de viviendas?", opciones:["Utilizar planos claros y simbología normalizada.","Reducir el número de planos.","Eliminar referencias.","No documentar la instalación."], correctaTexto:"Utilizar planos claros y simbología normalizada." },

  // --- AMPLIACIÓN ---
  { id:7021, tema:"Simbología", texto:"¿Qué representa un semicírculo con una línea perpendicular (toma)?", opciones:["Toma de corriente (enchufe).","Timbre.","Interruptor.","Fusible."], correctaTexto:"Toma de corriente (enchufe)." },
  { id:7022, tema:"Designación", texto:"¿Qué letra designa a los 'Transformadores'?", opciones:["T.","TR.","K.","L."], correctaTexto:"T." },
  { id:7023, tema:"Simbología", texto:"El símbolo de 'Tierra' se representa mediante:", opciones:["Líneas horizontales paralelas de longitud decreciente.","Un círculo.","Una flecha.","Un cuadrado negro."], correctaTexto:"Líneas horizontales paralelas de longitud decreciente." },
  { id:7024, tema:"Designación", texto:"¿Qué letra se usa para 'Resistencias'?", opciones:["R.","RES.","O.","Z."], correctaTexto:"R." },
  { id:7025, tema:"Simbología", texto:"¿Qué elemento es un cuadrado con un círculo dentro (o 'M')?", opciones:["Motor.","Medidor.","Mando.","Magnetotérmico."], correctaTexto:"Motor." },
  { id:7026, tema:"Esquemas", texto:"¿Cuál es la principal ventaja del esquema unifilar?", opciones:["Permite ver la situación real de los elementos en la planta del edificio.","Muestra todas las conexiones internas.","Es el más detallado.","Sirve para fabricar el cuadro."], correctaTexto:"Permite ver la situación real de los elementos en la planta del edificio." },
  { id:7027, tema:"Simbología", texto:"Un interruptor de cruce (cruzamiento) se representa con:", opciones:["Un círculo con 4 aspas (cruz).","Dos círculos.","Un círculo vacío.","Una línea recta."], correctaTexto:"Un círculo con 4 aspas (cruz)." },
  { id:7028, tema:"Designación", texto:"¿Qué letra designa a los 'Condensadores'?", opciones:["C.","K.","Q.","F."], correctaTexto:"C." },
  { id:7029, tema:"Normativa", texto:"Los esquemas eléctricos se representan siempre en estado de:", opciones:["Reposo (desactivados).","Funcionamiento.","Avería.","Carga máxima."], correctaTexto:"Reposo (desactivados)." },
  { id:7030, tema:"Designación", texto:"Los 'Bornes, clavijas y tomas de corriente' se designan con la letra:", opciones:["X.","B.","T.","P."], correctaTexto:"X." }


,



// --- NUEVAS PREGUNTAS CON SVG (MASTERD SIMBOLOGÍA) ---
  { 
    id: 7101, 
    tema: "Simbología", 
    texto: "¿A qué mecanismo corresponde el siguiente símbolo unifilar?", 
    svg: `<svg viewBox="0 0 50 50" width="100" height="100"><circle cx="25" cy="25" r="15" stroke="#1e293b" stroke-width="2" fill="none"/><line x1="25" y1="25" x2="40" y2="10" stroke="#1e293b" stroke-width="2"/></svg>`,
    opciones: ["Interruptor.", "Punto de luz.", "Conmutador.", "Pulsador."], 
    correctaTexto: "Interruptor." 
  },
  { 
    id: 7102, 
    tema: "Simbología", 
    texto: "¿Y este otro símbolo (con dos 'aspas')?", 
    svg: `<svg viewBox="0 0 50 50" width="100" height="100"><circle cx="25" cy="25" r="15" stroke="#1e293b" stroke-width="2" fill="none"/><line x1="25" y1="25" x2="40" y2="10" stroke="#1e293b" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="10" stroke="#1e293b" stroke-width="2"/></svg>`,
    opciones: ["Conmutador (simple).", "Interruptor.", "Cruzamiento.", "Base de enchufe."], 
    correctaTexto: "Conmutador (simple)." 
  },
  { 
    id: 7103, 
    tema: "Simbología", 
    texto: "¿Qué representa este símbolo con un aspa en cruz (X)?", 
    svg: `<svg viewBox="0 0 50 50" width="100" height="100"><line x1="10" y1="10" x2="40" y2="40" stroke="#1e293b" stroke-width="2"/><line x1="40" y1="10" x2="10" y2="40" stroke="#1e293b" stroke-width="2"/><circle cx="25" cy="25" r="20" stroke="#1e293b" stroke-width="2" fill="none"/></svg>`,
    opciones: ["Punto de luz / Lámpara.", "Caja de registro.", "Ventilador.", "Timbre."], 
    correctaTexto: "Punto de luz / Lámpara." 
  },
  { 
    id: 7104, 
    tema: "Simbología", 
    texto: "Identifica este símbolo de protección:", 
    svg: `<svg viewBox="0 0 50 50" width="100" height="100"><rect x="15" y="10" width="20" height="30" stroke="#ef4444" stroke-width="2" fill="none"/><line x1="25" y1="0" x2="25" y2="10" stroke="#1e293b" stroke-width="2"/><line x1="25" y1="40" x2="25" y2="50" stroke="#1e293b" stroke-width="2"/></svg>`,
    opciones: ["Fusible.", "Interruptor.", "Resistencia.", "Condensador."], 
    correctaTexto: "Fusible." 
  },
  { 
    id: 7105, 
    tema: "Simbología", 
    texto: "¿Qué aparato de protección es este (con el semicírculo)?", 
    svg: `<svg viewBox="0 0 60 60" width="100" height="100"><rect x="20" y="20" width="20" height="20" stroke="#1e293b" stroke-width="2" fill="none"/><line x1="30" y1="10" x2="30" y2="20" stroke="#1e293b" stroke-width="2"/><line x1="30" y1="40" x2="30" y2="50" stroke="#1e293b" stroke-width="2"/><path d="M 20 45 Q 30 55 40 45" stroke="#1e293b" stroke-width="2" fill="none"/><line x1="15" y1="25" x2="10" y2="30" stroke="#1e293b" stroke-width="2"/><line x1="10" y1="30" x2="15" y2="35" stroke="#1e293b" stroke-width="2"/></svg>`,
    opciones: ["Interruptor Automático (Magnetotérmico).", "Diferencial.", "Seccionador.", "Contactor."], 
    correctaTexto: "Interruptor Automático (Magnetotérmico)." 
  },
  { 
    id: 7106, 
    tema: "Simbología", 
    texto: "¿Y este símbolo con el óvalo que indica disparo por corriente de defecto?", 
    svg: `<svg viewBox="0 0 60 60" width="100" height="100"><rect x="20" y="20" width="20" height="20" stroke="#1e293b" stroke-width="2" fill="none"/><line x1="30" y1="10" x2="30" y2="20" stroke="#1e293b" stroke-width="2"/><line x1="30" y1="40" x2="30" y2="50" stroke="#1e293b" stroke-width="2"/><ellipse cx="30" cy="40" rx="10" ry="5" stroke="#1e293b" stroke-width="2" fill="none"/></svg>`,
    opciones: ["Interruptor Diferencial.", "PIA.", "Fusible.", "Limitador."], 
    correctaTexto: "Interruptor Diferencial." 
  },
  { 
    id: 7107, 
    tema: "Simbología", 
    texto: "Este símbolo unifilar representa:", 
    svg: `<svg viewBox="0 0 50 50" width="100" height="100"><circle cx="25" cy="25" r="5" stroke="#1e293b" stroke-width="2" fill="black"/><path d="M 25 25 L 35 10" stroke="#1e293b" stroke-width="2"/></svg>`,
    opciones: ["Pulsador.", "Punto de luz.", "Timbre.", "Caja."], 
    correctaTexto: "Pulsador." 
  },
  { 
    id: 7108, 
    tema: "Simbología", 
    texto: "¿Qué indica este símbolo (Tierra)?", 
    svg: `<svg viewBox="0 0 50 50" width="100" height="100"><line x1="25" y1="10" x2="25" y2="35" stroke="#1e293b" stroke-width="2"/><line x1="15" y1="35" x2="35" y2="35" stroke="#1e293b" stroke-width="2"/><line x1="18" y1="40" x2="32" y2="40" stroke="#1e293b" stroke-width="2"/><line x1="22" y1="45" x2="28" y2="45" stroke="#1e293b" stroke-width="2"/></svg>`,
    opciones: ["Toma de Tierra.", "Masa.", "Equipotencialidad.", "Neutro."], 
    correctaTexto: "Toma de Tierra." 
  }
,

// --- NUEVAS PREGUNTAS MASTERD (PDF 77 - TEMA 7: INTERIORES VIVIENDA) ---
  { 
    id: 7060, 
    tema: "Circuitos", 
    texto: "La sección mínima de los conductores para el circuito de CALEFACCIÓN eléctrica (C8) es de:", 
    opciones: ["6 mm².", "4 mm².", "2,5 mm².", "10 mm²."], 
    correctaTexto: "6 mm²." 
  },
  { 
    id: 7061, 
    tema: "Electrificación", 
    texto: "Una vivienda con 5 circuitos independientes y una potencia contratada de 5.750 W, tendrá un grado de electrificación:", 
    opciones: ["Básica.", "Media.", "Elevada.", "Alta."], 
    correctaTexto: "Básica." 
  },
  { 
    id: 7062, 
    tema: "Electrificación", 
    texto: "Una vivienda de 120 m² con calefacción eléctrica (o aire acondicionado) tendrá un grado de electrificación:", 
    opciones: ["Elevada.", "Básica.", "Media.", "Superior."], 
    correctaTexto: "Elevada." 
  },
  { 
    id: 7063, 
    tema: "Protección", 
    texto: "El Interruptor General Automático (IGA) deberá tener un poder de corte mínimo de:", 
    opciones: ["4.500 A (4,5 kA).", "3.000 A.", "6.000 A.", "10.000 A."], 
    correctaTexto: "4.500 A (4,5 kA)." 
  },
  { 
    id: 7064, 
    tema: "Protección", 
    texto: "El IGA tendrá una intensidad nominal MÍNIMA de:", 
    opciones: ["25 A.", "16 A.", "40 A.", "63 A."], 
    correctaTexto: "25 A." 
  },
  { 
    id: 7065, 
    tema: "Baños", 
    texto: "¿Cuántos volúmenes de prohibición/protección se definen en instalaciones con bañera o ducha?", 
    opciones: ["Cuatro (0, 1, 2 y 3).", "Tres (0, 1 y 2).", "Dos.", "Cinco."], 
    correctaTexto: "Cuatro (0, 1, 2 y 3)." 
  },
  { 
    id: 7066, 
    tema: "Baños", 
    texto: "¿Qué volumen comprende el interior de la bañera o ducha?", 
    opciones: ["Volumen 0.", "Volumen 1.", "Volumen 2.", "Volumen 3."], 
    correctaTexto: "Volumen 0." 
  },
  { 
    id: 7067, 
    tema: "Diferencial", 
    texto: "El interruptor diferencial NO debe dispararse para una corriente de fuga:", 
    opciones: ["Menor de la mitad de su sensibilidad (IΔn / 2).", "Mayor de su sensibilidad.", "Igual a su sensibilidad.", "Mayor del doble."], 
    correctaTexto: "Menor de la mitad de su sensibilidad (IΔn / 2)." 
  },
  { 
    id: 7068, 
    tema: "Secciones", 
    texto: "La sección mínima de los conductores para el circuito de COCINA y HORNO (C3) es de:", 
    opciones: ["6 mm².", "4 mm².", "2,5 mm².", "10 mm²."], 
    correctaTexto: "6 mm²." 
  },
  { 
    id: 7069, 
    tema: "Secciones", 
    texto: "La sección mínima de los conductores para el circuito de LAVADORA, lavavajillas y termo (C4) es de:", 
    opciones: ["4 mm².", "2,5 mm².", "6 mm².", "1,5 mm²."], 
    correctaTexto: "4 mm²." 
  },
  { 
    id: 7070, 
    tema: "Secciones", 
    texto: "La sección mínima de los conductores para el circuito de TOMAS DE CORRIENTE de uso general (C2) es de:", 
    opciones: ["2,5 mm².", "1,5 mm².", "4 mm².", "6 mm²."], 
    correctaTexto: "2,5 mm²." 
  },
  { 
    id: 7071, 
    tema: "Secciones", 
    texto: "La sección mínima de los conductores para el circuito de ALUMBRADO (C1) es de:", 
    opciones: ["1,5 mm².", "1 mm².", "2,5 mm².", "0,75 mm²."], 
    correctaTexto: "1,5 mm²." 
  },
  { 
    id: 7072, 
    tema: "Ubicación", 
    texto: "En viviendas, la altura de los dispositivos generales de mando y protección (cuadro) debe estar entre:", 
    opciones: ["1,4 y 2 metros.", "1 y 1,8 metros.", "1,5 y 2,5 metros.", "0,5 y 1,5 metros."], 
    correctaTexto: "1,4 y 2 metros." 
  },
  { 
    id: 7073, 
    tema: "Mantenimiento", 
    texto: "Las instalaciones comunes de edificios de viviendas con potencia total > 100 kW deben revisarse cada:", 
    opciones: ["10 años.", "5 años.", "2 años.", "Anualmente."], 
    correctaTexto: "10 años." 
  },
  { 
    id: 7074, 
    tema: "Protección", 
    texto: "Para proteger una máquina portátil que se usa en exteriores o condiciones difíciles, se usará un diferencial de:", 
    opciones: ["30 mA.", "300 mA.", "500 mA.", "1 A."], 
    correctaTexto: "30 mA." 
  },
  { 
    id: 7075, 
    tema: "Protección", 
    texto: "¿Qué protege contra contactos indirectos en una instalación doméstica?", 
    opciones: ["La puesta a tierra asociada a un interruptor diferencial.", "El IGA.", "Los fusibles.", "El ICP."], 
    correctaTexto: "La puesta a tierra asociada a un interruptor diferencial." 
  }




];




// --- TEMA 8: CÁLCULOS (PDF MASTERD COMPLETO) ---



const TEMA_8_DATA = [
  // --- PREGUNTAS ORIGINALES ---
  { id:8001, tema:"Cálculo", texto:"¿Para qué se realizan los cálculos eléctricos en una instalación de viviendas?", opciones:["Para garantizar el correcto funcionamiento y la seguridad de la instalación.","Para aumentar el consumo eléctrico.","Para reducir el número de circuitos.","Para simplificar la documentación."], correctaTexto:"Para garantizar el correcto funcionamiento y la seguridad de la instalación." },
  { id:8002, tema:"Potencia", texto:"¿Qué dato es fundamental conocer para calcular una instalación eléctrica de vivienda?", opciones:["La potencia prevista o demandada.","El color de los conductores.","El tipo de contador.","La tarifa eléctrica."], correctaTexto:"La potencia prevista o demandada." },
  { id:8003, tema:"Potencia", texto:"¿De qué depende la potencia a prever en una vivienda?", opciones:["De la superficie de la vivienda y del uso previsto.","Únicamente del número de habitaciones.","Del tipo de contador.","De la compañía suministradora."], correctaTexto:"De la superficie de la vivienda y del uso previsto." },
  { id:8004, tema:"Conductores", texto:"¿Para qué se calcula la sección de los conductores en una vivienda?", opciones:["Para que soporten la intensidad sin calentarse excesivamente.","Para reducir la longitud del circuito.","Para disminuir la potencia contratada.","Para mejorar la estética."], correctaTexto:"Para que soporten la intensidad sin calentarse excesivamente." },
  { id:8005, tema:"Intensidad", texto:"¿Qué magnitud se utiliza para el cálculo de la sección de los conductores?", opciones:["La intensidad de corriente.","La tensión.","La resistencia.","La frecuencia."], correctaTexto:"La intensidad de corriente." },
  { id:8006, tema:"Caída de tensión", texto:"¿Por qué debe limitarse la caída de tensión en una instalación eléctrica?", opciones:["Para asegurar el correcto funcionamiento de los receptores.","Para aumentar la potencia.","Para reducir el consumo.","Para evitar protecciones."], correctaTexto:"Para asegurar el correcto funcionamiento de los receptores." },
  { id:8007, tema:"Protecciones", texto:"¿Qué se tiene en cuenta para seleccionar las protecciones eléctricas?", opciones:["La intensidad nominal del circuito.","El color del aislamiento.","La longitud del pasillo.","El número de enchufes."], correctaTexto:"La intensidad nominal del circuito." },
  { id:8008, tema:"Cálculo", texto:"¿Qué se calcula para evitar sobrecargas en la instalación?", opciones:["La potencia y la intensidad de los circuitos.","El número de mecanismos.","La altura de instalación.","La estética del cuadro."], correctaTexto:"La potencia y la intensidad de los circuitos." },
  { id:8009, tema:"Normativa", texto:"¿Qué normativa establece los criterios de cálculo en instalaciones de viviendas?", opciones:["El Reglamento Electrotécnico para Baja Tensión (REBT).","El Reglamento de Alta Tensión.","Las normas ISO.","El Código Civil."], correctaTexto:"El Reglamento Electrotécnico para Baja Tensión (REBT)." },
  { id:8010, tema:"Seguridad", texto:"¿Qué se consigue con un cálculo correcto de la instalación eléctrica?", opciones:["Seguridad y funcionamiento adecuado.","Mayor consumo eléctrico.","Menor número de protecciones.","Reducción de documentación."], correctaTexto:"Seguridad y funcionamiento adecuado." },
  { id:8011, tema:"Potencia", texto:"¿Qué es la potencia eléctrica prevista en una vivienda?", opciones:["La potencia necesaria para el uso normal de la vivienda.","La potencia contratada siempre.","La potencia máxima del contador.","La potencia de un solo circuito."], correctaTexto:"La potencia necesaria para el uso normal de la vivienda." },
  { id:8012, tema:"Potencia", texto:"¿Qué ocurre si la potencia prevista es insuficiente?", opciones:["Pueden producirse sobrecargas y disparos de protecciones.","Aumenta la tensión.","Disminuye la intensidad.","No ocurre nada."], correctaTexto:"Pueden producirse sobrecargas y disparos de protecciones." },
  { id:8013, tema:"Conductores", texto:"¿Qué factor influye directamente en la sección del conductor?", opciones:["La intensidad que deben transportar.","El tipo de mecanismo.","El color del cable.","La altura del edificio."], correctaTexto:"La intensidad que deben transportar." },
  { id:8014, tema:"Caída de tensión", texto:"¿Qué es la caída de tensión?", opciones:["La disminución de tensión a lo largo de un conductor.","El aumento de intensidad.","La pérdida total de energía.","La variación de frecuencia."], correctaTexto:"La disminución de tensión a lo largo de un conductor." },
  { id:8015, tema:"Caída de tensión", texto:"¿Por qué debe mantenerse dentro de límites la caída de tensión?", opciones:["Para que los receptores funcionen correctamente.","Para aumentar la potencia.","Para reducir protecciones.","Para simplificar el diseño."], correctaTexto:"Para que los receptores funcionen correctamente." },
  { id:8016, tema:"Protecciones", texto:"¿Qué protección se selecciona en función de la sección del conductor?", opciones:["El interruptor magnetotérmico.","El interruptor diferencial.","El contador.","El ICP."], correctaTexto:"El interruptor magnetotérmico." },
  { id:8017, tema:"Cálculo", texto:"¿Qué se tiene en cuenta para el cálculo de un circuito eléctrico?", opciones:["Potencia, intensidad y longitud del circuito.","Solo el número de enchufes.","Solo la tensión.","Solo el tipo de vivienda."], correctaTexto:"Potencia, intensidad y longitud del circuito." },
  { id:8018, tema:"Instalaciones", texto:"¿Qué se calcula para elegir correctamente el cuadro eléctrico?", opciones:["El número de circuitos y protecciones necesarias.","La estética del cuadro.","El lugar de instalación.","El tipo de contador."], correctaTexto:"El número de circuitos y protecciones necesarias." },
  { id:8019, tema:"Seguridad", texto:"¿Qué riesgo se evita con un cálculo incorrecto?", opciones:["El riesgo de sobrecalentamientos e incendios.","El exceso de iluminación.","La falta de documentación.","El aumento de potencia."], correctaTexto:"El riesgo de sobrecalentamientos e incendios." },
  { id:8020, tema:"Buenas prácticas", texto:"¿Cuál es una buena práctica en el cálculo de instalaciones eléctricas de viviendas?", opciones:["Cumplir la normativa y prever ampliaciones.","Reducir secciones sin cálculo.","Eliminar protecciones.","No documentar el cálculo."], correctaTexto:"Cumplir la normativa y prever ampliaciones." },

  // --- AMPLIACIÓN ---
  { id:8021, tema:"Corrección", texto:"¿Qué factor de corrección se aplica a cables expuestos directamente al sol?", opciones:["0,90.","0,80.","1,10.","0,85."], correctaTexto:"0,90." },
  { id:8022, tema:"Corrección", texto:"Para cables enterrados en el interior de tubos, el factor de corrección es:", opciones:["0,8.","0,9.","0,7.","1."], correctaTexto:"0,8." },
  { id:8023, tema:"Lámparas", texto:"Para alumbrado con lámparas de descarga, la potencia se multiplica por:", opciones:["1,8.","1,3.","1,25.","1,5."], correctaTexto:"1,8." },
  { id:8024, tema:"Motores", texto:"Si hay varios motores, ¿cómo se calcula la carga?", opciones:["1,25 por el de mayor potencia + suma del resto.","Suma de todos por 1,25.","Suma de potencias nominales.","El mayor por 1,5."], correctaTexto:"1,25 por el de mayor potencia + suma del resto." },
  { id:8025, tema:"Tubos", texto:"El diámetro exterior mínimo para tubos en Derivaciones Individuales es:", opciones:["32 mm.","25 mm.","40 mm.","20 mm."], correctaTexto:"32 mm." },
  { id:8026, tema:"Tubos", texto:"En canalizaciones empotradas con más de 5 conductores, la sección interior del tubo será:", opciones:["3 veces la sección de los conductores.","2,5 veces.","4 veces.","Igual a la sección."], correctaTexto:"3 veces la sección de los conductores." },
  { id:8027, tema:"Tubos", texto:"En canalizaciones enterradas con más de 10 conductores, la sección interior del tubo será:", opciones:["4 veces la sección de los conductores.","3 veces.","2 veces.","5 veces."], correctaTexto:"4 veces la sección de los conductores." },
  { id:8028, tema:"Enterrados", texto:"Las tablas de intensidad para cables enterrados consideran una temperatura del terreno de:", opciones:["25 °C.","20 °C.","15 °C.","40 °C."], correctaTexto:"25 °C." },
  { id:8029, tema:"Aéreos", texto:"Las tablas de intensidad para cables al aire consideran una temperatura ambiente de:", opciones:["40 °C.","25 °C.","30 °C.","50 °C."], correctaTexto:"40 °C." },
  { id:8030, tema:"Neutro", texto:"Para conductores de fase de 35 mm², ¿cuál es la sección mínima del neutro (si no es la misma)?", opciones:["16 mm².","25 mm².","35 mm².","10 mm²."], correctaTexto:"16 mm²." }

,


// --- NUEVAS PREGUNTAS MASTERD (PDFs 5, 6, 7 - CÁLCULO) ---
  { 
    id: 8051, 
    tema: "Caída Tensión", 
    texto: "¿Cuál es la máxima caída de tensión para una Línea General de Alimentación (LGA) destinada a contadores totalmente concentrados?", 
    opciones: ["0,5%.", "1%.", "25%.", "5%."], 
    correctaTexto: "0,5%." 
  },
  { 
    id: 8052, 
    tema: "Caída Tensión", 
    texto: "¿Cuál es la máxima caída de tensión para una LGA destinada a contadores de un único usuario (sin LGA)?", 
    opciones: ["Ninguna, ya que para un único usuario no existe L.G.A.", "0,5%.", "1%.", "1,5%."], 
    correctaTexto: "Ninguna, ya que para un único usuario no existe L.G.A." 
  },
  { 
    id: 8053, 
    tema: "Caída Tensión", 
    texto: "¿Cuál es la máxima caída de tensión para una Derivación Individual destinada a contadores totalmente concentrados?", 
    opciones: ["1%.", "0,5%.", "1,5%.", "3%."], 
    correctaTexto: "1%." 
  },
  { 
    id: 8054, 
    tema: "Definición", 
    texto: "¿Desde dónde y hasta dónde se entiende la caída de tensión en una derivación individual?", 
    opciones: ["Desde el fusible de la LGA hasta el contador individual.", "Desde la CGP hasta el contador.", "Desde la CGP hasta el cuadro de mando.", "Desde el fusible hasta el cuadro de control."], 
    correctaTexto: "Desde el fusible de la LGA hasta el contador individual." 
  },
  { 
    id: 8055, 
    tema: "Interior", 
    texto: "¿Cuál es la caída de tensión máxima admisible en una instalación interior de vivienda para alumbrado?", 
    opciones: ["3%.", "1,5%.", "5%.", "0,5%."], 
    correctaTexto: "3%." 
  }

,

// --- NUEVAS PREGUNTAS MASTERD (PDF 11 y 12 - CÁLCULOS) ---
  { 
    id: 8056, 
    tema: "Carga Edificio", 
    texto: "La previsión de cargas de un edificio de viviendas será igual a la suma de potencias de:", 
    opciones: ["Viviendas + Servicios generales + Locales comerciales/Oficinas + Garajes.", "Solo viviendas.", "Viviendas y garajes.", "Todas las viviendas x factor simultaneidad."], 
    correctaTexto: "Viviendas + Servicios generales + Locales comerciales/Oficinas + Garajes." 
  },
  { 
    id: 8057, 
    tema: "Carga Locales", 
    texto: "¿Para el cálculo de la potencia de un local comercial u oficina, se considerará como mínimo?", 
    opciones: ["100 W/m² (con un mínimo de 3450W a 230V).", "10 W/m².", "20 W/m².", "5750 W fijos."], 
    correctaTexto: "100 W/m² (con un mínimo de 3450W a 230V)." 
  },
  { 
    id: 8058, 
    tema: "Lámparas", 
    texto: "Para calcular la potencia de alumbrado con lámparas de descarga (ej: fluorescentes, halogenuros...), la potencia en vatios:", 
    opciones: ["Se multiplica por 1,8 (para cubrir el consumo de balastos y arranque).", "Se divide por 1,8.", "Se multiplica por 1,3.", "Se deja igual."], 
    correctaTexto: "Se multiplica por 1,8 (para cubrir el consumo de balastos y arranque)." 
  },
  { 
    id: 8059, 
    tema: "Motores", 
    texto: "¿Cómo se calcula la potencia de cálculo de un ascensor u otros motores?", 
    opciones: ["Multiplicando por 1,3 la potencia nominal del motor.", "Multiplicando por 1,25.", "Multiplicando por 1,8.", "Es igual a la nominal."], 
    correctaTexto: "Multiplicando por 1,3 la potencia nominal del motor." 
  },
  { 
    id: 8060, 
    tema: "Caída Tensión", 
    texto: "Caída de tensión máxima en Derivación Individual para contadores totalmente concentrados (1 lugar):", 
    opciones: ["1%.", "0,5%.", "1,5%.", "3%."], 
    correctaTexto: "1%." 
  },
  { 
    id: 8061, 
    tema: "Caída Tensión", 
    texto: "Caída de tensión máxima en Derivación Individual para contadores concentrados en MÁS DE UN lugar:", 
    opciones: ["0,5%.", "1%.", "1,5%.", "3%."], 
    correctaTexto: "0,5%." 
  },
  { 
    id: 8062, 
    tema: "Caída Tensión", 
    texto: "¿Cuál es la caída de tensión máxima permitida en la instalación interior de un local (uso Fuerza/Usos varios)?", 
    opciones: ["5%.", "3%.", "1%.", "1,5%."], 
    correctaTexto: "5%." 
  },
  { 
    id: 8063, 
    tema: "Caída Tensión", 
    texto: "¿Cuál es la caída de tensión máxima permitida en la instalación interior de un local (uso Alumbrado)?", 
    opciones: ["3%.", "5%.", "1%.", "0,5%."], 
    correctaTexto: "3%." 
  }
,

// --- NUEVAS PREGUNTAS MASTERD (PDF 13-16 - CÁLCULOS) ---
  { 
    id: 8070, 
    tema: "Carga Garajes", 
    texto: "La carga correspondiente a un garaje con ventilación FORZADA se calcula considerando un mínimo de:", 
    opciones: ["20 W/m².", "10 W/m².", "40 W/m².", "100 W/m²."], 
    correctaTexto: "20 W/m²." 
  },
  { 
    id: 8071, 
    tema: "Carga Garajes", 
    texto: "¿Cuál es la potencia mínima a prever para un garaje con ventilación NATURAL (sin ventilación forzada)?", 
    opciones: ["10 W/m².", "20 W/m².", "100 W/m².", "5750 W."], 
    correctaTexto: "10 W/m²." 
  },
  { 
    id: 8072, 
    tema: "Corrección", 
    texto: "Para calcular la potencia de alumbrado con lámparas de descarga (ej: fluorescentes), la potencia nominal:", 
    opciones: ["Se multiplica por 1,8.", "Se divide por 1,8.", "Se multiplica por 1,3.", "Se deja igual."], 
    correctaTexto: "Se multiplica por 1,8." 
  },
  { 
    id: 8073, 
    tema: "Caída Tensión", 
    texto: "¿Cuál es la caída de tensión máxima permitida en la ACOMETIDA?", 
    opciones: ["Está regida por las normas particulares de las Empresas Distribuidoras.", "1%.", "0,5%.", "3%."], 
    correctaTexto: "Está regida por las normas particulares de las Empresas Distribuidoras." 
  },
  { 
    id: 8074, 
    tema: "Caída Tensión", 
    texto: "Caída de tensión máxima permitida en la instalación interior de una vivienda para ALUMBRADO:", 
    opciones: ["3%.", "1%.", "5%.", "1,5%."], 
    correctaTexto: "3%." 
  },
  { 
    id: 8075, 
    tema: "Caída Tensión", 
    texto: "Caída de tensión máxima permitida en la instalación interior de una vivienda para FUERZA (otros usos):", 
    opciones: ["5%.", "3%.", "4,5%.", "1%."], 
    correctaTexto: "5%." 
  },
  { 
    id: 8076, 
    tema: "Caída Tensión", 
    texto: "Caída de tensión máxima en Derivación Individual para UN ÚNICO usuario (vivienda unifamiliar sin contadores concentrados):", 
    opciones: ["1,5%.", "1%.", "0,5%.", "3%."], 
    correctaTexto: "1,5%." 
  },
  { 
    id: 8077, 
    tema: "Cálculo Sección", 
    texto: "Para el cálculo de secciones de conductores, ¿qué dos criterios principales utilizaremos?", 
    opciones: ["Caída de tensión máxima e intensidad máxima admisible.", "Caída de tensión mínima e intensidad mínima.", "Solo caída de tensión.", "Resistencia y temperatura."], 
    correctaTexto: "Caída de tensión máxima e intensidad máxima admisible." 
  },
  { 
    id: 8078, 
    tema: "Cálculo Sección", 
    texto: "Si calculamos la sección por los dos criterios (caída de tensión y calentamiento), la sección a escoger será:", 
    opciones: ["La mayor de las dos.", "La menor de las dos.", "La que marque la caída de tensión.", "La media de las dos."], 
    correctaTexto: "La mayor de las dos." 
  },
  { 
    id: 8079, 
    tema: "Previsión", 
    texto: "El primer paso a seguir para calcular la sección de un cable en un proyecto es calcular:", 
    opciones: ["La previsión de potencia de la instalación.", "La intensidad máxima admisible.", "La caída de tensión.", "La resistividad."], 
    correctaTexto: "La previsión de potencia de la instalación." 
  },

// --- NUEVAS PREGUNTAS MASTERD (PDF 17, 20, 22 - CÁLCULOS AVANZADOS) ---
  { 
    id: 8080, 
    tema: "Carga Edificio", 
    texto: "¿Cuál es la carga total a prever en un edificio que cuenta con 5 viviendas de grado elevado (9200W) y 8 de grado básico (5750W)?", 
    // Nota cálculo: (5*9200 + 8*5750) = 92000W. Coef. Simultaneidad (n=13) es 10,6.
    // P = (92000 / 13) * 10,6 = 75.015,38 W -> Redondeo 75.016 W.
    opciones: ["75.016 W.", "74.584 W.", "26.000 W.", "13.000 W."], 
    correctaTexto: "75.016 W." 
  },
  { 
    id: 8081, 
    tema: "LGA", 
    texto: "¿Cuál es la caída de tensión máxima permitida en la LGA con contadores concentrados en MÁS DE UN lugar (ej: columnas)?", 
    opciones: ["1%.", "0,5%.", "1,5%.", "3%."], 
    correctaTexto: "1%." 
  },
  { 
    id: 8082, 
    tema: "Previsión", 
    texto: "La fórmula para calcular la intensidad de corriente prevista en cada circuito es:", 
    opciones: ["I = n × Ia × Fs × Fu.", "I = n × Ia × Fu.", "I = n × Ia × Fs × Fk.", "I = n × Ia × Fs × Fc."], 
    correctaTexto: "I = n × Ia × Fs × Fu." 
  },
  { 
    id: 8083, 
    tema: "Conductividad", 
    texto: "La conductividad del Cobre (Cu) estándar utilizada para cálculos es:", 
    opciones: ["56.", "35.", "45.", "65."], 
    correctaTexto: "56." 
  },
  { 
    id: 8084, 
    tema: "Magnetotérmico", 
    texto: "¿Cómo se calcula la intensidad nominal (In) de un interruptor magnetotérmico?", 
    opciones: ["Será la intensidad inmediatamente superior a la que circula (Ib), siempre que proteja al cable (In ≤ Iz).", "Será la inmediatamente inferior.", "Será 1,5 veces la que circula.", "Será 1,6 veces la que circula."], 
    correctaTexto: "Será la intensidad inmediatamente superior a la que circula (Ib), siempre que proteja al cable (In ≤ Iz)." 
  },
  { 
    id: 8085, 
    tema: "Caída Tensión", 
    texto: "¿Cuál es la caída de tensión máxima permitida en la Derivación Individual de un ÚNICO usuario (sin LGA)?", 
    opciones: ["1,5%.", "1%.", "0,5%.", "3%."], 
    correctaTexto: "1,5%." 
  },
  { 
    id: 8086, 
    tema: "Tensión", 
    texto: "¿Se puede afirmar que la tensión (V) es igual a la potencia (P) dividida por la intensidad (I)?", 
    opciones: ["Sí se puede afirmar (V = P / I).", "Según los voltios que circulen.", "Solo en alterna.", "Todas son falsas."], 
    correctaTexto: "Sí se puede afirmar (V = P / I)." 
  }

,

// --- NUEVAS PREGUNTAS MASTERD (PDF TEMA 8: CÁLCULOS) ---
  { 
    id: 8100, 
    tema: "Tubos", 
    texto: "En canalizaciones empotradas, para más de 5 conductores por tubo, la sección interior del tubo será como mínimo:", 
    opciones: ["3 veces la sección ocupada por los conductores.", "4 veces la sección ocupada.", "2 veces la sección ocupada.", "Igual a la sección ocupada."], 
    correctaTexto: "3 veces la sección ocupada por los conductores." 
  },
  { 
    id: 8101, 
    tema: "Carga Lámparas", 
    texto: "¿Cómo se calcula la potencia de un alumbrado con lámparas de descarga (ej: fluorescentes, vapor de sodio)?", 
    opciones: ["Multiplicando por 1,8 la potencia nominal (para cubrir el balasto/arrancador).", "Multiplicando por 1,25.", "Multiplicando por 1,3.", "Es igual a la potencia nominal."], 
    correctaTexto: "Multiplicando por 1,8 la potencia nominal (para cubrir el balasto/arrancador)." 
  },
  { 
    id: 8102, 
    tema: "Carga Ascensores", 
    texto: "¿Cómo se calcula la potencia de un ascensor, grúa o aparato de elevación?", 
    opciones: ["Multiplicando por 1,3 la potencia nominal del motor.", "Multiplicando por 1,25.", "Multiplicando por 1,8.", "Multiplicando por 1,5."], 
    correctaTexto: "Multiplicando por 1,3 la potencia nominal del motor." 
  },
  { 
    id: 8103, 
    tema: "Carga Motores", 
    texto: "Para motores en general (no elevación), se aplica un coeficiente de:", 
    opciones: ["1,25 veces la potencia nominal.", "1,3 veces.", "1,5 veces.", "1,8 veces."], 
    correctaTexto: "1,25 veces la potencia nominal." 
  },
  { 
    id: 8104, 
    tema: "Electrificación", 
    texto: "Una vivienda con aire acondicionado, ¿qué grado de electrificación tendrá?", 
    opciones: ["Elevado.", "Básico.", "Medio.", "Especial."], 
    correctaTexto: "Elevado." 
  },
  { 
    id: 8105, 
    tema: "Conductividad", 
    texto: "El valor de conductividad estándar del COBRE (a 20ºC) que se suele usar es:", 
    opciones: ["56 m/(Ω·mm²).", "35 m/(Ω·mm²).", "45 m/(Ω·mm²).", "65 m/(Ω·mm²)."], 
    correctaTexto: "56 m/(Ω·mm²)." 
  },
  { 
    id: 8106, 
    tema: "Locales Comerciales", 
    texto: "La carga mínima a prever para un local comercial u oficinas es de:", 
    opciones: ["100 W/m² (mínimo 3.450 W).", "50 W/m².", "10 W/m².", "20 W/m²."], 
    correctaTexto: "100 W/m² (mínimo 3.450 W)." 
  },
  { 
    id: 8107, 
    tema: "Garajes", 
    texto: "La carga a prever en un garaje con VENTILACIÓN NATURAL es de:", 
    opciones: ["Mínimo 10 W/m².", "Mínimo 20 W/m².", "Mínimo 5 W/m².", "Mínimo 100 W/m²."], 
    correctaTexto: "Mínimo 10 W/m²." 
  },
  { 
    id: 8108, 
    tema: "Garajes", 
    texto: "La carga a prever en un garaje con VENTILACIÓN FORZADA es de:", 
    opciones: ["Mínimo 20 W/m².", "Mínimo 10 W/m².", "Mínimo 40 W/m².", "Mínimo 50 W/m²."], 
    correctaTexto: "Mínimo 20 W/m²." 
  },
  { 
    id: 8109, 
    tema: "Caída Tensión", 
    texto: "Caída de tensión máxima permitida en LGA para contadores TOTALMENTE CONCENTRADOS:", 
    opciones: ["0,5%.", "1%.", "1,5%.", "3%."], 
    correctaTexto: "0,5%." 
  },
  { 
    id: 8110, 
    tema: "Caída Tensión", 
    texto: "Caída de tensión máxima permitida en LGA para contadores CONCENTRADOS EN VARIOS LUGARES (ej: por plantas):", 
    opciones: ["1%.", "0,5%.", "1,5%.", "3%."], 
    correctaTexto: "1%." 
  },
  { 
    id: 8111, 
    tema: "Caída Tensión", 
    texto: "Caída de tensión máxima en Derivación Individual (DI) para contadores TOTALMENTE CONCENTRADOS:", 
    opciones: ["1%.", "0,5%.", "1,5%.", "3%."], 
    correctaTexto: "1%." 
  },
  { 
    id: 8112, 
    tema: "Caída Tensión", 
    texto: "Caída de tensión máxima en Derivación Individual (DI) para UN ÚNICO USUARIO (ej: chalet, no hay LGA):", 
    opciones: ["1,5%.", "1%.", "0,5%.", "3%."], 
    correctaTexto: "1,5%." 
  },
  { 
    id: 8113, 
    tema: "Criterios Sección", 
    texto: "Para el cálculo de secciones de conductores se utilizan dos criterios principales. Se escogerá la sección:", 
    opciones: ["Mayor de las obtenidas (la más restrictiva) entre caída de tensión e intensidad máxima admisible.", "Menor de las obtenidas.", "Siempre la de caída de tensión.", "Siempre la de intensidad máxima."], 
    correctaTexto: "Mayor de las obtenidas (la más restrictiva) entre caída de tensión e intensidad máxima admisible." 
  },
  { 
    id: 8114, 
    tema: "Factores Corrección", 
    texto: "Si aplicamos un factor de corrección (por temperatura, agrupamiento, etc.), la intensidad máxima admisible real será:", 
    opciones: ["El producto de la intensidad de la tabla por el factor de corrección.", "El cociente.", "La suma.", "Se desprecia el factor."], 
    correctaTexto: "El producto de la intensidad de la tabla por el factor de corrección." 
  },
  { 
    id: 8115, 
    tema: "Tubos DI", 
    texto: "El diámetro exterior MÍNIMO de los tubos en Derivaciones Individuales será de:", 
    opciones: ["32 mm.", "22 mm.", "40 mm.", "25 mm."], 
    correctaTexto: "32 mm." 
  },
  { 
    id: 8116, 
    tema: "Tubos DI", 
    texto: "¿Cuántos tubos de reserva se instalarán desde la concentración de contadores hasta las viviendas?", 
    opciones: ["Uno por cada 10 derivaciones individuales (o fracción).", "Uno por cada 5.", "Uno por vivienda.", "No se instalan tubos de reserva."], 
    correctaTexto: "Uno por cada 10 derivaciones individuales (o fracción)." 
  }

,

{ 
    id: 8117, 
    tema: "Electrificación", 
    texto: "El Circuito C7 en electrificación elevada, ¿a qué está destinado?", 
    opciones: ["Alimentación del sistema de automatización (Domótica).", "Secadora.", "Tomas de corriente adicionales.", "Aire acondicionado."], 
    correctaTexto: "Alimentación del sistema de automatización (Domótica)." 
  },
  { 
    id: 8118, 
    tema: "Protección", 
    texto: "¿Cómo se selecciona la Intensidad Nominal (In) de un interruptor magnetotérmico respecto a la del conductor?", 
    opciones: ["Debe ser igual o inferior a la intensidad máxima admisible del conductor.", "Debe ser inmediatamente superior.", "Debe ser el doble.", "Es indiferente."], 
    correctaTexto: "Debe ser igual o inferior a la intensidad máxima admisible del conductor." 
  },
  { 
    id: 8119, 
    tema: "LGA", 
    texto: "¿Cuál será la sección del conductor NEUTRO en una Línea General de Alimentación (LGA)?", 
    opciones: ["Será del 50% de la sección de fase (aprox) siempre que se respeten los mínimos (16mm² Cu / 25mm² Al).", "Siempre igual a la fase.", "El doble que la fase.", "10 mm² siempre."], 
    // Nota: La norma dice que para secciones grandes puede reducirse a la mitad, con mínimos de 16 Cu / 25 Al.
    correctaTexto: "Será del 50% de la sección de fase (aprox) siempre que se respeten los mínimos (16mm² Cu / 25mm² Al)." 
  },
  { 
    id: 8120, 
    tema: "Caída Tensión", 
    texto: "La caída de tensión máxima permitida en la INSTALACIÓN INTERIOR de una VIVIENDA (desde el cuadro hasta los puntos de luz) es:", 
    opciones: ["3%.", "1%.", "1,5%.", "5%."], 
    correctaTexto: "3%." 
  },
  { 
    id: 8121, 
    tema: "Caída Tensión", 
    texto: "Y para los circuitos de FUERZA (enchufes, horno...) dentro de la vivienda, la caída máxima es:", 
    opciones: ["3%.", "5%.", "1,5%.", "6%."], 
    correctaTexto: "3%." 
  },
  { 
    id: 8122, 
    tema: "Caída Tensión", 
    texto: "En un LOCAL COMERCIAL (o industrial), la caída de tensión máxima interior será:", 
    opciones: ["3% para alumbrado y 5% para fuerza (otros usos).", "3% para todo.", "5% para todo.", "1% alumbrado y 3% fuerza."], 
    correctaTexto: "3% para alumbrado y 5% para fuerza (otros usos)." 
  },
  { 
    id: 8123, 
    tema: "Caída Tensión", 
    texto: "¿Cuál es la caída de tensión máxima permitida en la ACOMETIDA?", 
    opciones: ["Está regida por las normas particulares de la Empresa Distribuidora.", "1%.", "0,5%.", "2%."], 
    correctaTexto: "Está regida por las normas particulares de la Empresa Distribuidora." 
  },
  { 
    id: 8124, 
    tema: "Carga Edificio", 
    texto: "La fórmula para calcular la Carga Total (Potencia) de un edificio de viviendas es:", 
    opciones: ["P_total = P_viviendas + P_servicios_generales + P_locales + P_garaje.", "P_total = P_viviendas + P_garaje.", "P_total = P_viviendas x 1.25.", "P_total = Suma de interruptores."], 
    correctaTexto: "P_total = P_viviendas + P_servicios_generales + P_locales + P_garaje." 
  },
  { 
    id: 8125, 
    tema: "Cálculo Intensidad", 
    texto: "La fórmula para calcular la intensidad prevista en un circuito con varios receptores (ej: alumbrado descarga) incluye:", 
    opciones: ["I = n · Ia · Fs · Fu (donde Fs=simultaneidad y Fu=utilización).", "I = V / R.", "I = P / V.", "I = n · P."], 
    correctaTexto: "I = n · Ia · Fs · Fu (donde Fs=simultaneidad y Fu=utilización)." 
  },
  { 
    id: 8126, 
    tema: "Protección", 
    texto: "¿Cómo se calcula la intensidad nominal de un INTERRUPTOR DIFERENCIAL?", 
    opciones: ["Debe ser igual o superior a la intensidad del interruptor magnetotérmico (IGA) que lo precede o protege.", "Puede ser menor.", "Siempre de 40A.", "Depende solo de la sensibilidad."], 
    correctaTexto: "Debe ser igual o superior a la intensidad del interruptor magnetotérmico (IGA) que lo precede o protege." 
  },
  { 
    id: 8127, 
    tema: "Cálculo Carga", 
    texto: "Ejemplo de cálculo: ¿Cuál es la carga total de un edificio con 5 viviendas de grado ELEVADO (9.200W) y 8 de grado BÁSICO (5.750W)?", 
    // Nota: Coef simultaneidad viviendas (N=13) -> Coef = 15.3 (aprox según tabla REBT).
    // P = 5*9200 + 8*5750 = 46000 + 46000 = 92000... NO, se aplica fórmula:
    // P = Coef * Media_aritmetica? No.
    // La respuesta correcta en el test suele ser un valor específico calculado.
    // En el PDF la opción marcada es "75016 W" (o similar).
    // Vamos a poner la que marca el PDF como correcta para que coincida con tu temario.
    opciones: ["75.016 W.", "74.584 W.", "26.000 W.", "13.000 W."], 
    correctaTexto: "75.016 W." 
  },
  { 
    id: 8128, 
    tema: "Compensación", 
    texto: "Si tenemos exceso de caída de tensión en la LGA, ¿se puede compensar con la DI?", 
    opciones: ["Sí, la suma de ambas caídas debe ser menor que la suma de sus límites.", "No, cada línea debe cumplir estrictamente su límite.", "Sí, siempre que no supere el 5%.", "Solo en industriales."], 
    correctaTexto: "Sí, la suma de ambas caídas debe ser menor que la suma de sus límites." 
  },
  { 
    id: 8129, 
    tema: "Tensión", 
    texto: "La tensión nominal en sistemas trifásicos en España es:", 
    opciones: ["400 V.", "380 V.", "230 V.", "220 V."], 
    correctaTexto: "400 V." 
  }





];






// --- TEMA 9: MONTAJE (PDF MASTERD COMPLETO) ---



const TEMA_9_DATA = [
  // --- PREGUNTAS ORIGINALES ---
  { id:9001, tema:"Montaje", texto:"¿Qué se entiende por instalación eléctrica de interior en una vivienda?", opciones:["La instalación comprendida desde el cuadro general hasta los receptores.","La red de distribución pública.","La acometida eléctrica.","La centralización de contadores."], correctaTexto:"La instalación comprendida desde el cuadro general hasta los receptores." },
  { id:9002, tema:"Montaje", texto:"¿Dónde se inicia la instalación eléctrica de interior en una vivienda?", opciones:["En la Caja General de Protección.","En la acometida.","En el cuadro general de mando y protección.","En el contador."], correctaTexto:"En el cuadro general de mando y protección." },
  { id:9003, tema:"Canalizaciones", texto:"¿Qué función tienen las canalizaciones eléctricas?", opciones:["Alojar y proteger los conductores.","Medir el consumo eléctrico.","Aumentar la potencia.","Distribuir la tensión."], correctaTexto:"Alojar y proteger los conductores." },
  { id:9004, tema:"Canalizaciones", texto:"¿Qué tipo de canalización es habitual en viviendas?", opciones:["Canalización empotrada.","Canalización aérea.","Canalización subterránea.","Canalización exterior en apoyos."], correctaTexto:"Canalización empotrada." },
  { id:9005, tema:"Conductores", texto:"¿Qué tipo de conductor se utiliza habitualmente en instalaciones interiores?", opciones:["Conductores con aislamiento adecuado para baja tensión.","Conductores desnudos.","Conductores de alta tensión.","Conductores sin aislamiento."], correctaTexto:"Conductores con aislamiento adecuado para baja tensión." },
  { id:9006, tema:"Mecanismos", texto:"¿Qué elemento permite el accionamiento manual de un circuito de iluminación?", opciones:["La toma de corriente.","El interruptor.","El fusible.","El magnetotérmico."], correctaTexto:"El interruptor." },
  { id:9007, tema:"Montaje", texto:"¿Qué se debe comprobar antes de cerrar una canalización empotrada?", opciones:["Que los conductores estén correctamente instalados.","El consumo eléctrico.","La potencia contratada.","La factura eléctrica."], correctaTexto:"Que los conductores estén correctamente instalados." },
  { id:9008, tema:"Seguridad", texto:"¿Qué medida básica debe adoptarse durante el montaje de una instalación eléctrica?", opciones:["Trabajar con la instalación sin tensión.","Aumentar la potencia.","Eliminar protecciones.","Conectar todos los circuitos."], correctaTexto:"Trabajar con la instalación sin tensión." },
  { id:9009, tema:"Normativa", texto:"¿Qué normativa regula el montaje de instalaciones eléctricas de interior?", opciones:["El Reglamento Electrotécnico para Baja Tensión (REBT).","El Reglamento de Alta Tensión.","El Código Civil.","Las normas ISO."], correctaTexto:"El Reglamento Electrotécnico para Baja Tensión (REBT)." },
  { id:9010, tema:"Buenas prácticas", texto:"¿Cuál es una buena práctica en el montaje de instalaciones eléctricas interiores?", opciones:["Seguir la normativa y usar materiales homologados.","Reducir protecciones.","No documentar la instalación.","Instalar sin planificación."], correctaTexto:"Seguir la normativa y usar materiales homologados." },
  { id:9011, tema:"Canalizaciones", texto:"¿Qué protege principalmente una canalización eléctrica?", opciones:["Los conductores frente a daños mecánicos.","Los mecanismos.","La potencia instalada.","El consumo."], correctaTexto:"Los conductores frente a daños mecánicos." },
  { id:9012, tema:"Canalizaciones", texto:"¿Qué material se utiliza habitualmente en tubos de canalización interior?", opciones:["PVC.","Hierro.","Plomo.","Aluminio."], correctaTexto:"PVC." },
  { id:9013, tema:"Conductores", texto:"¿Qué color identifica el conductor de protección?", opciones:["Verde-amarillo.","Azul.","Marrón.","Negro."], correctaTexto:"Verde-amarillo." },
  { id:9014, tema:"Conductores", texto:"¿Qué color identifica habitualmente el conductor neutro?", opciones:["Azul.","Verde-amarillo.","Marrón.","Negro."], correctaTexto:"Azul." },
  { id:9015, tema:"Montaje", texto:"¿Qué se debe respetar al instalar mecanismos eléctricos?", opciones:["Las alturas y ubicaciones establecidas en la normativa.","El criterio personal del instalador.","La estética únicamente.","La potencia contratada."], correctaTexto:"Las alturas y ubicaciones establecidas en la normativa." },
  { id:9016, tema:"Instalaciones", texto:"¿Qué elemento distribuye los circuitos dentro de la vivienda?", opciones:["El cuadro general de mando y protección.","El contador.","La CGP.","La acometida."], correctaTexto:"El cuadro general de mando y protección." },
  { id:9017, tema:"Seguridad", texto:"¿Por qué es importante fijar correctamente las canalizaciones?", opciones:["Para evitar desplazamientos y daños en los conductores.","Para aumentar la potencia.","Para mejorar la estética.","Para reducir el consumo."], correctaTexto:"Para evitar desplazamientos y daños en los conductores." },
  { id:9018, tema:"Montaje", texto:"¿Qué se debe hacer antes de energizar una instalación interior?", opciones:["Comprobar conexiones y protecciones.","Aumentar la potencia.","Cambiar el contador.","Eliminar protecciones."], correctaTexto:"Comprobar conexiones y protecciones." },
  { id:9019, tema:"Documentación", texto:"¿Qué documento refleja cómo se ha ejecutado la instalación interior?", opciones:["La documentación final de la instalación.","La factura eléctrica.","El contrato de suministro.","El plano arquitectónico."], correctaTexto:"La documentación final de la instalación." },
  { id:9020, tema:"Buenas prácticas", texto:"¿Cuál es una buena práctica durante el montaje eléctrico interior?", opciones:["Mantener orden y limpieza en la ejecución.","Trabajar con tensión.","Improvisar recorridos.","No respetar colores."], correctaTexto:"Mantener orden y limpieza en la ejecución." },

  // --- AMPLIACIÓN ---
  { id:9021, tema:"Herramientas", texto:"¿Qué herramienta se utiliza específicamente para pelar mangueras con facilidad?", opciones:["Pelamangueras.","Tijeras.","Alicate universal.","Destornillador."], correctaTexto:"Pelamangueras." },
  { id:9022, tema:"Herramientas", texto:"¿Qué alicate se utiliza para realizar anillas o cocas en los conductores?", opciones:["Alicates de punta redonda.","Alicate universal.","Alicate de corte.","Pico de loro."], correctaTexto:"Alicates de punta redonda." },
  { id:9023, tema:"Herramientas", texto:"Para introducir cables en tubos con tramos largos o curvas se utiliza:", opciones:["Guía pasacables (nylon o acero).","Un alambre cualquiera.","Cuerda.","Jabón solo."], correctaTexto:"Guía pasacables (nylon o acero)." },
  { id:9024, tema:"Conexión", texto:"¿Es correcto realizar empalmes por retorcimiento de los conductores?", opciones:["No, nunca.","Sí, si se encinta bien.","Sí, en provisionales.","Depende de la sección."], correctaTexto:"No, nunca." },
  { id:9025, tema:"LGA", texto:"El trazado de la Línea General de Alimentación discurrirá por:", opciones:["Zonas de uso común (hueco escalera, patinillos).","Interior de viviendas.","Fachada.","Ascensor."], correctaTexto:"Zonas de uso común (hueco escalera, patinillos)." },
  { id:9026, tema:"Tierras", texto:"En nuevas edificaciones, ¿cómo se realiza la toma de tierra principal?", opciones:["Anillo de cobre desnudo en el fondo de la cimentación.","Picas en el jardín.","Placas en sótano.","Tuberías de agua."], correctaTexto:"Anillo de cobre desnudo en el fondo de la cimentación." },
  { id:9027, tema:"Tierras", texto:"En reformas de edificios, si no hay cimentación accesible, la tierra se realiza con:", opciones:["Electrodos (picas) en patios o jardines.","Anillo conductor.","Tubería de gas.","Neutro de la red."], correctaTexto:"Electrodos (picas) en patios o jardines." },
  { id:9028, tema:"Identificación", texto:"Las canalizaciones eléctricas deben identificarse mediante:", opciones:["Etiquetas o señales indelebles.","Colores del tubo.","No es necesario.","Rotulador normal."], correctaTexto:"Etiquetas o señales indelebles." },
  { id:9029, tema:"Montaje", texto:"En pasos a través de muros, si el tubo no es obturado, ¿cómo debe colocarse para evitar entrada de agua?", opciones:["Inclinado hacia el local más húmedo.","Horizontal.","Inclinado hacia el seco.","Vertical."], correctaTexto:"Inclinado hacia el local más húmedo." },
  { id:9030, tema:"Garajes", texto:"¿Cuándo es obligatorio el alumbrado de emergencia en un estacionamiento?", opciones:["Para más de 5 vehículos.","Siempre.","Si es subterráneo.","Más de 100 vehículos."], correctaTexto:"Para más de 5 vehículos." }

,


// --- NUEVAS PREGUNTAS MASTERD (PDF 13-16 - MONTAJE) ---
  { 
    id: 9060, 
    tema: "Tubos", 
    texto: "El diámetro exterior MÍNIMO de los tubos en derivaciones individuales será de:", 
    opciones: ["32 mm.", "22 mm.", "40 mm.", "16 mm."], 
    correctaTexto: "32 mm." 
  },
  { 
    id: 9061, 
    tema: "Factor Corrección", 
    texto: "¿Cuál es el factor de corrección que se aplica habitualmente para instalaciones enterradas bajo tubo?", 
    opciones: ["0,8.", "0,9.", "1.", "0,7."], 
    correctaTexto: "0,8." 
  }


,


// --- NUEVAS PREGUNTAS MASTERD (PDFs 5, 7 - MONTAJE) ---
  { 
    id: 9051, 
    tema: "Cajas", 
    texto: "Las cajas de derivación rectangulares o cuadradas suelen utilizarse para:", 
    opciones: ["Conductores de secciones grandes y medias.", "Conductores de secciones pequeñas.", "Solo para empalmes telefónicos.", "Es indistinto."], 
    correctaTexto: "Conductores de secciones grandes y medias." 
  },
  { 
    id: 9052, 
    tema: "Cables", 
    texto: "Las indicaciones alfanuméricas en los conductores (Ej: RZ1-K), ¿qué significan?", 
    opciones: ["La 1ª letra es el tipo de aislamiento, la 2ª la forma/cubierta y la 3ª si es flexible, etc.", "La 1ª es el número de conductores.", "La 1ª es el material del conductor.", "La 1ª es la sección."], 
    correctaTexto: "La 1ª letra es el tipo de aislamiento, la 2ª la forma/cubierta y la 3ª si es flexible, etc." 
  },
  { 
    id: 9053, 
    tema: "Empalmes", 
    texto: "Se podrán realizar empalmes de conductores en...", 
    opciones: ["Cajas de derivación o empalme.", "El interior de los tubos protectores.", "Canalizaciones cerradas.", "Cualquier punto del recorrido."], 
    correctaTexto: "Cajas de derivación o empalme." 
  }


,

// --- NUEVAS PREGUNTAS MASTERD (PDF 11 y 12 - MONTAJE) ---
  { 
    id: 9054, 
    tema: "Tubos", 
    texto: "En instalaciones empotradas, para tubos con más de 5 conductores, la sección interior del tubo será como mínimo:", 
    opciones: ["3 veces la sección ocupada por los conductores.", "4 veces la sección ocupada.", "2 veces la sección.", "Igual a la sección."], 
    correctaTexto: "3 veces la sección ocupada por los conductores." 
  }

,

// --- NUEVAS PREGUNTAS MASTERD (PDF TEMA 9: MONTAJE Y EMERGENCIA) ---
  { 
    id: 9100, 
    tema: "Alumbrado Emergencia", 
    texto: "¿Cuántos tipos de Alumbrado de Emergencia se diferencian según el REBT?", 
    opciones: ["Dos: Alumbrado de Seguridad y Alumbrado de Reemplazamiento.", "Tres: Seguridad, Ambiente y Evacuación.", "Solo uno.", "Cuatro."], 
    correctaTexto: "Dos: Alumbrado de Seguridad y Alumbrado de Reemplazamiento." 
  },
  { 
    id: 9101, 
    tema: "Alumbrado Seguridad", 
    texto: "A su vez, el Alumbrado de SEGURIDAD se divide en tres tipos:", 
    opciones: ["Evacuación, Ambiente (o antipánico) y Zonas de Alto Riesgo.", "Seguridad, Reemplazamiento y Ambiente.", "Interior, Exterior y Mixto.", "Evacuación, Señalización y Balizamiento."], 
    correctaTexto: "Evacuación, Ambiente (o antipánico) y Zonas de Alto Riesgo." 
  },
  { 
    id: 9102, 
    tema: "Iluminancia", 
    texto: "En los puntos donde estén los equipos de protección contra incendios (extintores, mangueras) o cuadros de distribución, la iluminancia mínima será de:", 
    opciones: ["5 lux.", "1 lux.", "0,5 lux.", "10 lux."], 
    correctaTexto: "5 lux." 
  },
  { 
    id: 9103, 
    tema: "Iluminancia", 
    texto: "El alumbrado de EVACUACIÓN debe proporcionar en el eje de los pasos principales una iluminancia mínima de:", 
    opciones: ["1 lux.", "0,5 lux.", "5 lux.", "2 lux."], 
    correctaTexto: "1 lux." 
  },
  { 
    id: 9104, 
    tema: "Iluminancia", 
    texto: "El alumbrado AMBIENTE o antipánico debe proporcionar una iluminancia horizontal mínima de:", 
    opciones: ["0,5 lux (hasta 1m de altura).", "1 lux.", "5 lux.", "0,1 lux."], 
    correctaTexto: "0,5 lux (hasta 1m de altura)." 
  },
  { 
    id: 9105, 
    tema: "Autonomía", 
    texto: "Cuando falle la alimentación normal, el alumbrado de evacuación deberá funcionar como mínimo durante:", 
    opciones: ["1 hora.", "2 horas.", "30 minutos.", "El tiempo necesario para salir."], 
    correctaTexto: "1 hora." 
  },
  { 
    id: 9106, 
    tema: "Alto Riesgo", 
    texto: "La duración del alumbrado en ZONAS DE ALTO RIESGO debe ser:", 
    opciones: ["El tiempo necesario para abandonar la actividad o zona de riesgo (mínimo 1h).", "1 hora fija.", "2 horas.", "30 minutos."], 
    correctaTexto: "El tiempo necesario para abandonar la actividad o zona de riesgo (mínimo 1h)." 
  },
  { 
    id: 9107, 
    tema: "Mecanismos", 
    texto: "Los interruptores UNIPOLARES deben cortar siempre el conductor:", 
    opciones: ["De fase.", "Neutro.", "De tierra.", "Es indiferente."], 
    correctaTexto: "De fase." 
  },
  { 
    id: 9108, 
    tema: "Mecanismos", 
    texto: "Si un receptor está alimentado por dos fases (bifásico), es obligatorio usar:", 
    opciones: ["Un interruptor bipolar (corte de ambos polos).", "Dos interruptores unipolares.", "Un interruptor unipolar en una fase.", "No se puede."], 
    correctaTexto: "Un interruptor bipolar (corte de ambos polos)." 
  },
  { 
    id: 9109, 
    tema: "Mecanismos", 
    texto: "Los interruptores se colocarán generalmente a una altura del suelo comprendida entre:", 
    opciones: ["1,10 m y 1,20 m.", "0,5 m y 1 m.", "1,5 m y 1,8 m.", "A ras de suelo."], 
    correctaTexto: "1,10 m y 1,20 m." 
  },
  { 
    id: 9110, 
    tema: "Conexiones", 
    texto: "La unión de hilos en empalmes se realizará preferentemente:", 
    opciones: ["Utilizando regletas o fichas de conexión.", "Retorciendo los hilos y con cinta aislante.", "Soldando con estaño.", "Con cinta americana."], 
    correctaTexto: "Utilizando regletas o fichas de conexión." 
  },
  { 
    id: 9111, 
    tema: "Conexiones", 
    texto: "¿Dónde se deben realizar los empalmes eléctricos?", 
    opciones: ["En el interior de cajas de derivación y empalme.", "Dentro de los tubos.", "En cualquier punto.", "En los cuadros solamente."], 
    correctaTexto: "En el interior de cajas de derivación y empalme." 
  },
  { 
    id: 9112, 
    tema: "Canalizaciones", 
    texto: "¿Pueden discurrir circuitos de potencia (230V) y de muy baja tensión (seguridad/datos) por el mismo tubo/conducto?", 
    opciones: ["Sí, solo si cada cable está aislado para la tensión más alta presente.", "Nunca.", "Sí, siempre.", "Solo si son mangueras."], 
    correctaTexto: "Sí, solo si cada cable está aislado para la tensión más alta presente." 
  },
  { 
    id: 9113, 
    tema: "Tierras", 
    texto: "Las Líneas Principales de Tierra estarán constituidas por conductores de COBRE con una sección mínima de:", 
    opciones: ["16 mm².", "12 mm².", "10 mm².", "25 mm²."], 
    correctaTexto: "16 mm²." 
  },
  { 
    id: 9114, 
    tema: "Baños", 
    texto: "El grado de protección para equipos instalados en el VOLUMEN 0 (interior bañera) debe ser:", 
    opciones: ["IPX7 (inmersión).", "IPX4.", "IPX5.", "IPX2."], 
    correctaTexto: "IPX7 (inmersión)." 
  },
  { 
    id: 9115, 
    tema: "Reemplazamiento", 
    texto: "En una sala de intervención (quirófano), el alumbrado de reemplazamiento debe proporcionar:", 
    opciones: ["Un nivel igual al del alumbrado normal durante 2 horas como mínimo.", "5 lux.", "10 lux.", "El 50% de luz."], 
    correctaTexto: "Un nivel igual al del alumbrado normal durante 2 horas como mínimo." 
  }

];


// --- TEMA 10: VERIFICACIÓN (PDF 10 COMPLETO) ---



const TEMA_10_DATA = [
  // --- PREGUNTAS ORIGINALES ---
  { id:10001, tema:"Diagnóstico", texto:"¿Qué se entiende por diagnóstico de una instalación eléctrica?", opciones:["La identificación de averías y defectos en la instalación.","El montaje de nuevos circuitos.","La ampliación de la instalación.","La documentación de la obra."], correctaTexto:"La identificación de averías y defectos en la instalación." },
  { id:10002, tema:"Diagnóstico", texto:"¿Cuál es el primer paso ante una avería eléctrica en una vivienda?", opciones:["Cortar el suministro eléctrico.","Cambiar los conductores.","Aumentar la potencia.","Sustituir el contador."], correctaTexto:"Cortar el suministro eléctrico." },
  { id:10003, tema:"Seguridad", texto:"¿Por qué es importante trabajar sin tensión durante una reparación eléctrica?", opciones:["Para evitar riesgos de accidente eléctrico.","Para reducir el tiempo de trabajo.","Para mejorar la estética.","Para simplificar el montaje."], correctaTexto:"Para evitar riesgos de accidente eléctrico." },
  { id:10004, tema:"Diagnóstico", texto:"¿Qué instrumento se utiliza habitualmente para localizar averías eléctricas?", opciones:["El multímetro.","El contador.","El magnetotérmico.","El interruptor diferencial."], correctaTexto:"El multímetro." },
  { id:10005, tema:"Averías", texto:"¿Qué puede indicar el disparo frecuente de un interruptor diferencial?", opciones:["Una fuga de corriente a tierra.","Un exceso de iluminación.","Una correcta instalación.","Una potencia elevada."], correctaTexto:"Una fuga de corriente a tierra." },
  { id:10006, tema:"Averías", texto:"¿Qué puede provocar el disparo de un interruptor magnetotérmico?", opciones:["Una sobrecarga o un cortocircuito.","Una fuga a tierra.","Una caída de tensión.","Un fallo del contador."], correctaTexto:"Una sobrecarga o un cortocircuito." },
  { id:10007, tema:"Reparación", texto:"¿Qué se debe hacer tras localizar una avería eléctrica?", opciones:["Reparar o sustituir el elemento defectuoso.","Conectar la instalación inmediatamente.","Aumentar la potencia.","Eliminar protecciones."], correctaTexto:"Reparar o sustituir el elemento defectuoso." },
  { id:10008, tema:"Seguridad", texto:"¿Qué elemento de protección debe comprobarse tras una reparación?", opciones:["Las protecciones eléctricas.","El contador.","La acometida.","La red de distribución."], correctaTexto:"Las protecciones eléctricas." },
  { id:10009, tema:"Reparación", texto:"¿Qué se debe hacer antes de volver a poner en servicio una instalación reparada?", opciones:["Comprobar el correcto funcionamiento.","Aumentar la potencia.","Cambiar el cuadro eléctrico.","Modificar la instalación."], correctaTexto:"Comprobar el correcto funcionamiento." },
  { id:10010, tema:"Normativa", texto:"¿Qué normativa debe cumplirse en la reparación de instalaciones eléctricas?", opciones:["El Reglamento Electrotécnico para Baja Tensión (REBT).","El Reglamento de Alta Tensión.","Las normas ISO.","El Código Civil."], correctaTexto:"El Reglamento Electrotécnico para Baja Tensión (REBT)." },
  { id:10011, tema:"Diagnóstico", texto:"¿Qué síntoma puede indicar un cortocircuito en una instalación?", opciones:["El disparo inmediato del magnetotérmico.","Una bajada de consumo.","Una mejora del funcionamiento.","Un aumento de tensión."], correctaTexto:"El disparo inmediato del magnetotérmico." },
  { id:10012, tema:"Diagnóstico", texto:"¿Qué se comprueba con una medida de continuidad?", opciones:["Que un conductor no esté interrumpido.","Que exista tensión.","Que haya potencia.","Que haya fuga a tierra."], correctaTexto:"Que un conductor no esté interrumpido." },
  { id:10013, tema:"Diagnóstico", texto:"¿Qué indica una tensión anómala en una toma de corriente?", opciones:["Un posible defecto en la instalación.","Un funcionamiento correcto.","Una potencia elevada.","Un consumo bajo."], correctaTexto:"Un posible defecto en la instalación." },
  { id:10014, tema:"Averías", texto:"¿Qué puede provocar un mal contacto eléctrico?", opciones:["Calentamientos y fallos de funcionamiento.","Una reducción de potencia.","Una mejora del sistema.","Una menor intensidad."], correctaTexto:"Calentamientos y fallos de funcionamiento." },
  { id:10015, tema:"Averías", texto:"¿Qué puede causar una sobrecarga prolongada?", opciones:["El deterioro de conductores y riesgo de incendio.","Una bajada de tensión.","Un aumento de eficiencia.","Una mejora del aislamiento."], correctaTexto:"El deterioro de conductores y riesgo de incendio." },
  { id:10016, tema:"Reparación", texto:"¿Qué debe hacerse si un conductor presenta aislamiento dañado?", opciones:["Sustituir o reparar el conductor.","Aumentar la potencia.","Reducir protecciones.","Ignorar el defecto."], correctaTexto:"Sustituir o reparar el conductor." },
  { id:10017, tema:"Seguridad", texto:"¿Qué medida básica debe adoptarse antes de reparar una instalación?", opciones:["Asegurar la ausencia de tensión.","Cambiar el contador.","Aumentar la potencia.","Eliminar protecciones."], correctaTexto:"Asegurar la ausencia de tensión." },
  { id:10018, tema:"Reparación", texto:"¿Qué se debe revisar tras sustituir un elemento eléctrico?", opciones:["Que la conexión sea correcta.","La factura eléctrica.","La tarifa contratada.","El consumo mensual."], correctaTexto:"Que la conexión sea correcta." },
  { id:10019, tema:"Mantenimiento", texto:"¿Por qué es importante el mantenimiento preventivo?", opciones:["Para evitar averías y alargar la vida de la instalación.","Para aumentar el consumo.","Para reducir la potencia.","Para eliminar inspecciones."], correctaTexto:"Para evitar averías y alargar la vida de la instalación." },
  { id:10020, tema:"Buenas prácticas", texto:"¿Cuál es una buena práctica en el diagnóstico y reparación eléctrica?", opciones:["Trabajar de forma ordenada y siguiendo la normativa.","Improvisar soluciones.","Eliminar protecciones.","Trabajar con tensión."], correctaTexto:"Trabajar de forma ordenada y siguiendo la normativa." },

  // --- AMPLIACIÓN ---
  { id:10021, tema:"Aislamiento", texto:"Para medir aislamiento entre conductores activos, los receptores deben estar:", opciones:["Desconectados y los interruptores cerrados.","Conectados.","Da igual.","Sin bombillas pero interruptores abiertos."], correctaTexto:"Desconectados y los interruptores cerrados." },
  { id:10022, tema:"Pinza", texto:"Para medir la intensidad de una fase con pinza amperimétrica, debemos abrazar:", opciones:["Solo el conductor de esa fase.","La fase y el neutro juntos.","Todos los cables.","El cable de tierra."], correctaTexto:"Solo el conductor de esa fase." },
  { id:10023, tema:"Pinza", texto:"Si abrazamos fase y neutro a la vez con la pinza amperimétrica, ¿qué medimos?", opciones:["La corriente de fuga (diferencial).","La suma de intensidades.","El doble de la intensidad.","Nada si está equilibrado."], correctaTexto:"La corriente de fuga (diferencial)." },
  { id:10024, tema:"Reparación", texto:"Si un PIA dispara inmediatamente al subirlo (incluso sin carga), indica:", opciones:["Cortocircuito franco en la salida o el propio PIA averiado.","Sobrecarga.","Fuga a tierra.","Falta de neutro."], correctaTexto:"Cortocircuito franco en la salida o el propio PIA averiado." },
  { id:10025, tema:"Averías", texto:"Una conexión floja produce:", opciones:["Calentamiento excesivo y posible incendio.","Mejor contacto.","Ahorro de energía.","Salto del diferencial."], correctaTexto:"Calentamiento excesivo y posible incendio." },
  { id:10026, tema:"Diagnóstico", texto:"El primer paso ante una avería de 'falta de corriente' en una zona es:", opciones:["Verificar el cuadro general (dispositivos disparados).","Desmontar los enchufes.","Cambiar el cableado.","Llamar a la compañía."], correctaTexto:"Verificar el cuadro general (dispositivos disparados)." },
  { id:10027, tema:"Instrumentos", texto:"El polímetro en modo 'Ohm' sirve para medir:", opciones:["Resistencia y continuidad.","Tensión.","Potencia.","Energía."], correctaTexto:"Resistencia y continuidad." },
  { id:10028, tema:"Mantenimiento", texto:"La comprobación del par de apriete de los bornes se considera:", opciones:["Mantenimiento preventivo.","Reparación.","Instalación.","Innecesario."], correctaTexto:"Mantenimiento preventivo." },
  { id:10029, tema:"Aislamiento", texto:"Si la instalación tiene circuitos electrónicos sensibles, para medir aislamiento se recomienda:", opciones:["Unir fase y neutro durante la prueba a tierra.","Medir a 1000V.","Desconectar la tierra.","No medir nunca."], correctaTexto:"Unir fase y neutro durante la prueba a tierra." },
  { id:10030, tema:"Averías", texto:"Si se funde un fusible repetidamente, la causa es:", opciones:["Cortocircuito o sobrecarga permanente.","Fusible defectuoso.","Tensión baja.","Mal contacto."], correctaTexto:"Cortocircuito o sobrecarga permanente." }


,


  { id: 10100, tema: "Instrumentación", texto: "¿De qué elementos está constituido internamente un megóhmetro (Megger)?", opciones: ["Una batería interna, una resistencia en serie conocida, un galvanómetro y cables de medida.", "Solo una batería y cables.", "Un generador de alterna y un voltímetro.", "Una resistencia variable y un amperímetro."], correctaTexto: "Una batería interna, una resistencia en serie conocida, un galvanómetro y cables de medida." },
  { id: 10101, tema: "Aislamiento", texto: "Al medir la resistencia de aislamiento entre conductores, ¿en qué estado deben estar los receptores?", opciones: ["Desconectados.", "Conectados.", "En funcionamiento normal.", "Es indiferente."], correctaTexto: "Desconectados." },
  { id: 10102, tema: "Verificación", texto: "Para comprobar que un interruptor automático (PIA) no está roto mecánicamente, debemos:", opciones: ["Medir continuidad entre los contactos de una misma fase con el interruptor CERRADO.", "Medir tensión con el interruptor abierto.", "Medir continuidad con el interruptor abierto.", "Medir la intensidad que lo atraviesa."], correctaTexto: "Medir continuidad entre los contactos de una misma fase con el interruptor CERRADO." },
  { id: 10103, tema: "Aislamiento", texto: "Según el REBT, para una tensión nominal superior a 500 V, la resistencia de aislamiento mínima será:", opciones: ["1 MΩ.", "0,5 MΩ.", "0,25 MΩ.", "0,1 MΩ."], correctaTexto: "1 MΩ." },
  { id: 10104, tema: "Aislamiento", texto: "Para una tensión nominal inferior o igual a 500 V (excepto MBTS/P), la resistencia de aislamiento mínima será:", opciones: ["0,5 MΩ.", "1 MΩ.", "0,25 MΩ.", "0,1 MΩ."], correctaTexto: "0,5 MΩ." },
  { id: 10105, tema: "Aislamiento", texto: "La resistencia de aislamiento mínima para circuitos de Muy Baja Tensión de Seguridad (MBTS) o Protección (MBTP) es de:", opciones: ["0,25 MΩ.", "0,5 MΩ.", "1 MΩ.", "0,1 MΩ."], correctaTexto: "0,25 MΩ." },
  { id: 10106, tema: "Averías", texto: "Si un polímetro indica continuidad entre la carcasa metálica de un aparato y uno de sus conductores activos, existe:", opciones: ["Un fallo de aislamiento en dicho conductor (derivación).", "Un cortocircuito entre fases.", "Un receptor bien alimentado.", "Una sobrecarga."], correctaTexto: "Un fallo de aislamiento en dicho conductor (derivación)." },
  { id: 10107, tema: "Conductividad", texto: "El valor de conductividad que se asigna reglamentariamente al ALUMINIO es de:", opciones: ["35.", "56.", "45.", "53."], correctaTexto: "35." },
  { id: 10108, tema: "Aislamiento", texto: "Para medir la resistencia de aislamiento de los conductores respecto a tierra, el procedimiento correcto es:", opciones: ["Unir los conductores activos entre sí (incluido el neutro) y medir respecto al conductor de protección.", "Medir cada fase por separado con el neutro conectado a tierra.", "Unir fase y neutro y medir respecto a la carcasa.", "Medir con la instalación en tensión."], correctaTexto: "Unir los conductores activos entre sí (incluido el neutro) y medir respecto al conductor de protección." },
  { id: 10109, tema: "Instrumentación", texto: "¿En qué principio físico se basa la medida de intensidad de una pinza amperimétrica?", opciones: ["En el campo magnético inducido por el paso de corriente.", "En la caída de tensión en una resistencia shunt.", "En el efecto Seebeck.", "En la ley de Ohm directa."], correctaTexto: "En el campo magnético inducido por el paso de corriente." },
  { id: 10110, tema: "Procedimiento", texto: "Para fraccionar una instalación con el fin de medir el aislamiento, se hará si la longitud de la misma supera:", opciones: ["100 metros.", "50 metros.", "200 metros.", "20 metros."], correctaTexto: "100 metros." }






];





// --- TEMA 11: DOCUMENTACIÓN (PDF 11 COMPLETO) ---



const TEMA_11_DATA = [
  // --- PREGUNTAS ORIGINALES ---
  { id:11001, tema:"Normativa", texto:"¿Qué normativa regula las instalaciones eléctricas de baja tensión en España?", opciones:["El Reglamento Electrotécnico para Baja Tensión (REBT).","El Reglamento de Alta Tensión.","El Código Civil.","Las normas ISO."], correctaTexto:"El Reglamento Electrotécnico para Baja Tensión (REBT)." },
  { id:11002, tema:"Normativa", texto:"¿Qué documento acredita que una instalación eléctrica cumple la normativa vigente?", opciones:["El certificado de instalación eléctrica.","La factura eléctrica.","El contrato de suministro.","El plano arquitectónico."], correctaTexto:"El certificado de instalación eléctrica." },
  { id:11003, tema:"Normativa", texto:"¿Quién es el responsable de que una instalación eléctrica cumpla la normativa?", opciones:["El instalador autorizado.","El usuario.","La compañía eléctrica.","El fabricante del material."], correctaTexto:"El instalador autorizado." },
  { id:11004, tema:"Documentación", texto:"¿Qué documento recoge los planos y esquemas de la instalación eléctrica?", opciones:["La documentación técnica de la instalación.","La factura eléctrica.","El contrato de suministro.","El boletín de enganche."], correctaTexto:"La documentación técnica de la instalación." },
  { id:11005, tema:"Documentación", texto:"¿Cuándo debe elaborarse la documentación técnica de la instalación?", opciones:["Al finalizar la instalación.","Antes de iniciar la obra.","Solo cuando lo solicite el usuario.","Durante la facturación."], correctaTexto:"Al finalizar la instalación." },
  { id:11006, tema:"Normativa", texto:"¿Qué instrucción técnica del REBT regula las instalaciones interiores?", opciones:["ITC-BT-25.","ITC-BT-10.","ITC-BT-19.","ITC-BT-04."], correctaTexto:"ITC-BT-25." },
  { id:11007, tema:"Documentación", texto:"¿Qué documento se presenta para dar de alta el suministro eléctrico?", opciones:["El certificado de instalación eléctrica.","El plano de planta.","El esquema multifilar.","El contrato de mantenimiento."], correctaTexto:"El certificado de instalación eléctrica." },
  { id:11008, tema:"Normativa", texto:"¿Qué organismo puede exigir la documentación de una instalación eléctrica?", opciones:["La administración competente.","El fabricante del material.","El usuario únicamente.","El proveedor de herramientas."], correctaTexto:"La administración competente." },
  { id:11009, tema:"Documentación", texto:"¿Qué debe reflejar la documentación técnica de una instalación?", opciones:["La realidad de la instalación ejecutada.","El proyecto inicial sin cambios.","Solo el consumo eléctrico.","Solo los materiales usados."], correctaTexto:"La realidad de la instalación ejecutada." },
  { id:11010, tema:"Buenas prácticas", texto:"¿Cuál es una buena práctica respecto a la normativa eléctrica?", opciones:["Cumplir la normativa vigente y mantener la documentación actualizada.","Reducir documentación.","Eliminar planos.","No conservar certificados."], correctaTexto:"Cumplir la normativa vigente y mantener la documentación actualizada." },
  { id:11011, tema:"Normativa", texto:"¿Qué es el REBT?", opciones:["El reglamento que establece las condiciones técnicas y de seguridad de las instalaciones eléctricas de baja tensión.","Una norma de alta tensión.","Un manual de fabricantes.","Un código civil."], correctaTexto:"El reglamento que establece las condiciones técnicas y de seguridad de las instalaciones eléctricas de baja tensión." },
  { id:11012, tema:"Documentación", texto:"¿Qué documentos suelen formar parte de la documentación técnica?", opciones:["Planos, esquemas y certificado de instalación.","Factura y contrato.","Consumo mensual.","Presupuesto únicamente."], correctaTexto:"Planos, esquemas y certificado de instalación." },
  { id:11013, tema:"Documentación", texto:"¿Por qué es importante conservar la documentación eléctrica?", opciones:["Para facilitar mantenimiento y futuras modificaciones.","Para reducir el consumo.","Para aumentar la potencia.","Para evitar inspecciones."], correctaTexto:"Para facilitar mantenimiento y futuras modificaciones." },
  { id:11014, tema:"Normativa", texto:"¿Qué son las ITC del REBT?", opciones:["Instrucciones Técnicas Complementarias.","Instalaciones Técnicas de Consumo.","Indicaciones Técnicas de Cableado.","Instrumentos Técnicos de Control."], correctaTexto:"Instrucciones Técnicas Complementarias." },
  { id:11015, tema:"Normativa", texto:"¿Para qué sirven las ITC?", opciones:["Para desarrollar y concretar el REBT.","Para sustituir el REBT.","Para eliminar normativa.","Para regular la alta tensión."], correctaTexto:"Para desarrollar y concretar el REBT." },
  { id:11016, tema:"Documentación", texto:"¿Quién debe firmar la documentación de una instalación eléctrica?", opciones:["El instalador autorizado.","El usuario.","La compañía eléctrica.","El fabricante."], correctaTexto:"El instalador autorizado." },
  { id:11017, tema:"Documentación", texto:"¿Qué plano muestra la ubicación real de los elementos eléctricos?", opciones:["El plano de planta.","El esquema unifilar.","El esquema multifilar.","El diagrama funcional."], correctaTexto:"El plano de planta." },
  { id:11018, tema:"Normativa", texto:"¿Qué ocurre si una instalación no cumple la normativa?", opciones:["Puede ser rechazada o no autorizada.","Se mejora automáticamente.","No tiene consecuencias.","Aumenta la potencia."], correctaTexto:"Puede ser rechazada o no autorizada." },
  { id:11019, tema:"Documentación", texto:"¿Qué debe evitarse en la documentación técnica?", opciones:["Información incompleta o confusa.","El uso de esquemas.","La firma del instalador.","La inclusión de planos."], correctaTexto:"Información incompleta o confusa." },
  { id:11020, tema:"Buenas prácticas", texto:"¿Cuál es una buena práctica en normativa y documentación eléctrica?", opciones:["Mantener la documentación clara, completa y conforme a la normativa.","Reducir información técnica.","Eliminar certificados.","No conservar copias."], correctaTexto:"Mantener la documentación clara, completa y conforme a la normativa." },

  // --- AMPLIACIÓN ---
  { id:11021, tema:"Defectos", texto:"La falta de conexión del conductor de tierra en un circuito se clasifica como:", opciones:["Defecto Grave.","Defecto Leve.","Defecto Muy Grave.","Recomendación."], correctaTexto:"Defecto Grave." },
  { id:11022, tema:"Defectos", texto:"Una sección insuficiente de los conductores para la corriente prevista es un defecto:", opciones:["Grave.","Leve.","Muy Grave.","Técnico."], correctaTexto:"Grave." },
  { id:11023, tema:"CIE", texto:"¿Quién emite el Certificado de Instalación Eléctrica (CIE)?", opciones:["El instalador autorizado (o su empresa).","El Ministerio.","El usuario.","El arquitecto."], correctaTexto:"El instalador autorizado (o su empresa)." },
  { id:11024, tema:"CIE", texto:"Generalmente, ¿cuántos ejemplares (copias) tiene el Certificado de Instalación?", opciones:["Cinco.","Dos.","Uno.","Diez."], correctaTexto:"Cinco." },
  { id:11025, tema:"Proyecto", texto:"¿Cuál es el límite de potencia para que las instalaciones en locales mojados requieran proyecto?", opciones:["P > 10 kW.","P > 20 kW.","P > 5 kW.","P > 50 kW."], correctaTexto:"P > 10 kW." },
  { id:11026, tema:"Proyecto", texto:"Las piscinas requieren proyecto si su potencia instalada es:", opciones:["P > 5 kW.","P > 10 kW.","Siempre.","Nunca."], correctaTexto:"P > 5 kW." },
  { id:11027, tema:"Trámite", texto:"Para la puesta en servicio, ¿dónde se presenta la documentación (CIE, MTD/Proyecto)?", opciones:["Ante el Órgano competente de la Comunidad Autónoma.","En el Ayuntamiento.","En la ferretería.","En el Ministerio de Hacienda."], correctaTexto:"Ante el Órgano competente de la Comunidad Autónoma." },
  { id:11028, tema:"Defectos", texto:"La falta de identificación de los conductores neutro y protección se considera:", opciones:["Defecto Leve (si no afecta seguridad).","Grave.","Muy Grave.","Correcto."], correctaTexto:"Defecto Leve (si no afecta seguridad)." },
  { id:11029, tema:"Inspección", texto:"¿Qué plazo se da para corregir defectos en una calificación 'Condicionada'?", opciones:["No podrá exceder de 6 meses.","1 año.","1 mes.","Indefinido."], correctaTexto:"No podrá exceder de 6 meses." },
  { id:11030, tema:"Defectos", texto:"Si un defecto supone 'peligro inmediato para la seguridad de las personas o bienes', es:", opciones:["Muy Grave.","Grave.","Peligroso.","Urgente."], correctaTexto:"Muy Grave." }


,



  { id: 11100, tema: "Inspecciones", texto: "¿Cómo se clasifica una instalación cuando se detecta, al menos, un defecto MUY GRAVE?", opciones: ["Calificación Negativa.", "Calificación Condicionada.", "Calificación Favorable.", "Aviso de corrección."], correctaTexto: "Calificación Negativa." },
  { id: 11101, tema: "Inspecciones", texto: "Una instalación es 'Condicionada' cuando se detecta un defecto GRAVE. ¿Qué plazo hay para subsanarlo?", opciones: ["Un plazo no superior a 6 meses.", "Un plazo de 1 año.", "3 meses.", "Antes de la próxima inspección."], correctaTexto: "Un plazo no superior a 6 meses." },
  { id: 11102, tema: "Inspecciones", texto: "Si una instalación tiene calificación 'Favorable' pero con defectos leves, ¿cuándo deben corregirse?", opciones: ["Antes de la próxima inspección reglamentaria.", "En 15 días.", "En 6 meses.", "No es obligatorio corregirlos."], correctaTexto: "Antes de la próxima inspección reglamentaria." },
  { id: 11103, tema: "Definiciones", texto: "El defecto que constituye un peligro INMEDIATO para la seguridad de personas o bienes se clasifica como:", opciones: ["Defecto Muy Grave.", "Defecto Grave.", "Defecto Leve.", "Defecto Crítico."], correctaTexto: "Defecto Muy Grave." },
  { id: 11104, tema: "Definiciones", texto: "El defecto que NO supone un peligro inmediato, pero puede serlo ante un fallo, es un:", opciones: ["Defecto Grave.", "Defecto Muy Grave.", "Defecto Leve.", "Defecto Formal."], correctaTexto: "Defecto Grave." },
  { id: 11105, tema: "Proyectos", texto: "¿A qué grupo pertenecen las instalaciones industriales en general?", opciones: ["Grupo A.", "Grupo B.", "Grupo C.", "Grupo I."], correctaTexto: "Grupo A." },
  { id: 11106, tema: "Proyectos", texto: "Las instalaciones de locales húmedos o con riesgo de corrosión pertenecen al:", opciones: ["Grupo B.", "Grupo A.", "Grupo C.", "Grupo D."], correctaTexto: "Grupo B." },
  { id: 11107, tema: "Proyectos", texto: "¿Qué límite de potencia marca la necesidad de Proyecto en viviendas unifamiliares?", opciones: ["P > 50 kW.", "P > 10 kW.", "P > 20 kW.", "Siempre requieren proyecto."], correctaTexto: "P > 50 kW." },
  { id: 11108, tema: "Documentación", texto: "¿Quién es el responsable directo de la veracidad de la Memoria Técnica de Diseño (MTD)?", opciones: ["El instalador autorizado que la firma.", "El dueño de la vivienda.", "La empresa suministradora.", "El Organismo de Control."], correctaTexto: "El instalador autorizado que la firma." },
  { id: 11109, tema: "Documentación", texto: "¿Cuál es el número máximo de planos para la memoria de proyecto según el REBT?", opciones: ["No hay un máximo ni un mínimo establecido.", "Máximo 10.", "Máximo 20.", "Solo uno unifilar."], correctaTexto: "No hay un máximo ni un mínimo establecido." }

];


/* =========================================================
   DATOS ESPECIALES: ZONA TÉCNICA (IDs rango 90000+)
   Para la Tarjeta Azul (Sección Aparte)
   ========================================================= */

// TALLER DE PLANOS (IDs 90001 - 90010)
const TALLER_PLANOS_DATA = [
  {
    id: 90001,
    tema: "Interpretación Unifilar",
    texto: "Observa este esquema. ¿Cuál es la intensidad nominal del Interruptor General (IGA)?",
    svg: `<svg viewBox="0 0 300 150" style="background:white; border:1px solid #ccc; border-radius:8px;">
            <line x1="150" y1="10" x2="150" y2="40" stroke="#333" stroke-width="2"/>
            <rect x="130" y="40" width="40" height="30" fill="none" stroke="#333" stroke-width="2"/>
            <text x="135" y="60" font-size="10" font-weight="bold" fill="#333">IGA</text>
            <text x="180" y="55" font-size="14" font-weight="bold" fill="#2563eb">2x25A</text>
            <line x1="150" y1="70" x2="150" y2="100" stroke="#333" stroke-width="2"/>
            <rect x="130" y="100" width="40" height="30" fill="none" stroke="#333" stroke-width="2"/>
            <text x="135" y="120" font-size="10" font-weight="bold" fill="#333">ID</text>
            <text x="180" y="115" font-size="12" fill="#333">40A/30mA</text>
          </svg>`,
    opciones: ["25 Amperios", "40 Amperios", "30 mA", "16 Amperios"],
    correctaTexto: "25 Amperios",
    explicacion: "El IGA es el primer elemento de corte. '2x25A' indica Bipolar de 25 Amperios."
  },
  {
    id: 90002,
    tema: "Interpretación Unifilar",
    texto: "En el mismo esquema, ¿cuál es la sensibilidad del Diferencial?",
    svg: `<svg viewBox="0 0 300 150" style="background:white; border:1px solid #ccc; border-radius:8px;">
            <rect x="130" y="40" width="40" height="30" fill="none" stroke="#333"/>
            <text x="180" y="55" font-size="12" fill="#999">2x25A</text>
            <line x1="150" y1="70" x2="150" y2="100" stroke="#333"/>
            <rect x="130" y="100" width="40" height="30" fill="none" stroke="#333" stroke-width="2"/>
            <text x="135" y="120" font-size="10" font-weight="bold" fill="#333">ID</text>
            <text x="180" y="115" font-size="14" font-weight="bold" fill="#dc2626">40A/30mA</text>
          </svg>`,
    opciones: ["30 mA (0,03 A)", "40 A", "25 A", "300 mA"],
    correctaTexto: "30 mA (0,03 A)",
    explicacion: "La sensibilidad se mide en miliamperios (mA). 30mA es el umbral estándar en vivienda."
  },
  {
    id: 90003,
    tema: "Simbología en Planta",
    texto: "¿Qué indica la línea discontinua curvada entre el interruptor y la lámpara?",
    svg: `<svg viewBox="0 0 200 120" style="background:white; border:1px solid #ccc; border-radius:8px;">
            <rect x="10" y="10" width="180" height="100" fill="none" stroke="#333" stroke-width="3"/>
            <circle cx="30" cy="90" r="5" stroke="#333" fill="white"/>
            <line x1="30" y1="90" x2="40" y2="80" stroke="#333" stroke-width="2"/>
            <line x1="90" y1="50" x2="110" y2="70" stroke="#333" stroke-width="2"/>
            <line x1="110" y1="50" x2="90" y2="70" stroke="#333" stroke-width="2"/>
            <path d="M 35 85 Q 60 60 95 60" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4"/>
          </svg>`,
    opciones: ["Dependencia funcional", "Tubo corrugado real", "Cable visto", "Pared falsa"],
    correctaTexto: "Dependencia funcional",
    explicacion: "Indica qué mando acciona qué punto de luz (lógica de funcionamiento)."
  },
  {
    id: 90004,
    tema: "Simbología",
    texto: "¿Qué aparato representa este símbolo?",
    svg: `<svg viewBox="0 0 100 100" style="background:white; border-radius:8px; border:1px solid #eee"><circle cx="50" cy="50" r="20" stroke="#1e293b" stroke-width="3" fill="none"/><line x1="50" y1="50" x2="70" y2="30" stroke="#1e293b" stroke-width="3"/><line x1="50" y1="50" x2="30" y2="30" stroke="#1e293b" stroke-width="3"/></svg>`,
    opciones: ["Conmutador (de cruce)", "Interruptor simple", "Pulsador", "Base de enchufe"],
    correctaTexto: "Conmutador (de cruce)",
    explicacion: "Las dos aspas indican cruzamiento (permite encender desde 3 o más puntos)."
  },
  {
    id: 90005,
    tema: "Errores en Plano",
    texto: "¿Qué defecto grave tiene este circuito?",
    svg: `<svg viewBox="0 0 200 80" style="background:white; border:1px solid #ccc; border-radius:8px;"><text x="10" y="45" font-size="12" font-weight="bold">PIA C2</text><text x="60" y="45" font-size="14" fill="red" font-weight="bold">25A</text><line x1="100" y1="40" x2="180" y2="40" stroke="black" stroke-width="2"/><text x="110" y="60" font-size="10">Cable 1,5mm²</text></svg>`,
    opciones: ["Protección excesiva para la sección", "Falta el neutro", "El cable es muy grueso", "Ninguno"],
    correctaTexto: "Protección excesiva para la sección",
    explicacion: "Un cable de 1,5mm² no soporta 25A. Se quemaría antes de saltar la protección."
  },
  {
    id: 90006,
    tema: "Cálculos en Plano",
    texto: "Si en un plano lees 'LGA: 3x(1x95)+1x50 mm² Cu', ¿qué sección tiene el Neutro?",
    opciones: ["50 mm²", "95 mm²", "35 mm²", "150 mm²"],
    correctaTexto: "50 mm²",
    explicacion: "La notación indica 3 fases de 95mm² y 1 neutro de 50mm²."
  }
];

// ESTRUCTURA REBT (IDs 91001 - 91010)
const REBT_ESTRUCTURA_DATA = [
  { id: 91001, tema: "Mapa REBT", texto: "¿Qué ITC regula las 'Instalaciones de Enlace'?", opciones: ["ITC-BT-12 a 15", "ITC-BT-01 a 05", "ITC-BT-25", "ITC-BT-51"], correctaTexto: "ITC-BT-12 a 15", explicacion: "Infraestructura desde la red pública hasta la vivienda." },
  { id: 91002, tema: "Mapa REBT", texto: "¿Dónde consultarías los circuitos interiores de VIVIENDA?", opciones: ["ITC-BT-25", "ITC-BT-09", "ITC-BT-18", "ITC-BT-40"], correctaTexto: "ITC-BT-25", explicacion: "Define los circuitos C1 a C5 y la electrificación elevada." },
  { id: 91003, tema: "Mapa REBT", texto: "Normativa específica para PUESTAS A TIERRA:", opciones: ["ITC-BT-18", "ITC-BT-19", "ITC-BT-04", "ITC-BT-30"], correctaTexto: "ITC-BT-18", explicacion: "Define picas, conductores de tierra y valores de resistencia." },
  { id: 91004, tema: "Mapa REBT", texto: "¿Qué ITC regula los Locales de PÚBLICA CONCURRENCIA?", opciones: ["ITC-BT-28", "ITC-BT-25", "ITC-BT-30", "ITC-BT-49"], correctaTexto: "ITC-BT-28", explicacion: "Bares, cines... exige cables libres de halógenos y alumbrado de emergencia." },
  { id: 91005, tema: "Mapa REBT", texto: "Instalaciones para PISCINAS y fuentes:", opciones: ["ITC-BT-31", "ITC-BT-30", "ITC-BT-25", "ITC-BT-18"], correctaTexto: "ITC-BT-31", explicacion: "Define los volúmenes de prohibición (0, 1 y 2) por seguridad." },
  { id: 91006, tema: "Mapa REBT", texto: "Instalaciones de recarga de VEHÍCULO ELÉCTRICO:", opciones: ["ITC-BT-52", "ITC-BT-10", "ITC-BT-40", "ITC-BT-51"], correctaTexto: "ITC-BT-52", explicacion: "Normativa específica para la infraestructura del coche eléctrico." },
  { id: 91007, tema: "Mapa REBT", texto: "Instalaciones GENERADORAS (Autoconsumo Solar):", opciones: ["ITC-BT-40", "ITC-BT-12", "ITC-BT-09", "ITC-BT-52"], correctaTexto: "ITC-BT-40", explicacion: "Generadores de baja tensión interconectados." },
  { id: 91008, tema: "Mapa REBT", texto: "Requisitos para QUIRÓFANOS:", opciones: ["ITC-BT-38", "ITC-BT-28", "ITC-BT-42", "ITC-BT-11"], correctaTexto: "ITC-BT-38", explicacion: "Transformadores de aislamiento y suelos conductivos." },
  { id: 91009, tema: "Mapa REBT", texto: "Instalaciones de ALUMBRADO EXTERIOR (Farolas):", opciones: ["ITC-BT-09", "ITC-BT-10", "ITC-BT-06", "ITC-BT-18"], correctaTexto: "ITC-BT-09", explicacion: "Regula el alumbrado público." },
  { id: 91010, tema: "Mapa REBT", texto: "Locales con Riesgo de INCENDIO O EXPLOSIÓN (ATEX):", opciones: ["ITC-BT-29", "ITC-BT-28", "ITC-BT-30", "ITC-BT-40"], correctaTexto: "ITC-BT-29", explicacion: "Clasifica las zonas peligrosas." }
];

/* =========================================================
   CONFIGURACIÓN CURSO (Con Pestaña 4 "Próximamente")
   ========================================================= */
const CONFIGURACION_CURSO = [
  {
    bloque: "pestana1",
    titulo_boton: "1. Electricidad Básica",
    asignaturas: [
      { nombre: "T1: Electricidad Básica", data: TEMA_1_DATA }
    ]
  },
  {
    bloque: "pestana2",
    titulo_boton: "2. Instalaciones de Enlace",
    asignaturas: [
      { nombre: "T2: Red de Distribución", data: TEMA_2_DATA },
      { nombre: "T3: Simbología de Enlace", data: TEMA_3_DATA },
      { nombre: "T4: Medidas e Instrumentación", data: TEMA_4_DATA },
      { nombre: "T5: Documentación de Enlace", data: TEMA_5_DATA }
    ]
  },
  {
    bloque: "pestana3",
    titulo_boton: "3. Instalaciones en Viviendas",
    asignaturas: [
      { nombre: "T6: Electrificación Viviendas", data: TEMA_6_DATA },
      { nombre: "T7: Instalaciones Interiores", data: TEMA_7_DATA },
      { nombre: "T8: Cálculo de Instalaciones", data: TEMA_8_DATA },
      { nombre: "T9: Montaje y Emergencias", data: TEMA_9_DATA },
      { nombre: "T10: Diagnóstico y Averías", data: TEMA_10_DATA },
      { nombre: "T11: Normativa y Documentación", data: TEMA_11_DATA }
    ]
  },
  {
    bloque: "pestana4",
    titulo_boton: "4. Próximamente...",
    asignaturas: [
       // Lista vacía o con un placeholder para que no dé error visual
       { nombre: "En desarrollo", data: [] } 
    ]
  }
];



// ========================================================
// DATOS REBT - ÍNDICE ITC
// ========================================================

// ========================================================
// DATOS REBT - ÍNDICE ITC COMPLETO (52 TEMAS)
// ========================================================
const REBT_INDICE_DATA = {
    "01": { t: "Terminología", c: ["Definiciones básicas y siglas", "Tensiones nominales (230/400 V)", "Clasificación de tensiones (Muy baja, Baja)", "Conductor CPN o PEN", "Red de distribución y Acometida", "Instalación de enlace e interior", "Choque eléctrico y Contactos"] },
    "02": { t: "Normas de Referencia", c: ["Listado de normas UNE obligatorias", "Cumplimiento de normas equivalentes", "Actualización de normas (Ediciones vigentes)", "Conformidad con normas europeas (EN)", "Resoluciones del Ministerio"] },
    "03": { t: "Empresas Instaladoras", c: ["Categoría Básica (IBTB)", "Categoría Especialista (IBTE)", "Medios técnicos y humanos mínimos", "Seguro de responsabilidad civil (Cuantías)", "Certificado de cualificación individual", "Obligaciones de la empresa instaladora"] },
    "04": { t: "Documentación y Puesta en Servicio", c: ["Instalaciones con Proyecto (Límites P > X kW)", "Instalaciones con Memoria Técnica (MTD)", "Certificado de Instalación (CIE)", "Tramitación ante el Órgano Competente", "Dirección de Obra", "Manual de instrucciones al usuario"] },
    "05": { t: "Verificaciones e Inspecciones", c: ["Verificaciones previas por el instalador", "Inspecciones iniciales (OCA)", "Inspecciones periódicas (Cada 5 o 10 años)", "Defectos Muy Graves (Peligro inmediato)", "Defectos Graves y Leves", "Plazos de corrección y Calificación"] },
    "06": { t: "Redes Aéreas (Distribución)", c: ["Conductores aislados y desnudos", "Alturas mínimas y distancias de seguridad", "Cruzamientos y paralelismos", "Apoyos, tensores y aisladores", "Intensidades máximas admisibles", "Puesta a tierra del neutro"] },
    "07": { t: "Redes Subterráneas (Distribución)", c: ["Cables (RV, XZ1) y aislamientos", "Profundidad de zanjas y lecho de arena", "Cruzamientos con otras redes (Gas, Agua)", "Paralelismos y distancias", "Arquetas de registro", "Cintas de señalización"] },
    "08": { t: "Conexión Neutro y Masas (Red)", c: ["Esquemas de distribución (TN, TT, IT)", "Puesta a tierra del neutro en centros de transf.", "Condiciones de seguridad en la red", "Continuidad del neutro y de tierra", "Resistencia global de tierra"] },
    "09": { t: "Alumbrado Exterior", c: ["Niveles de iluminación y uniformidad", "Eficiencia energética y contaminación lumínica", "Redes de alimentación (Cobre/Aluminio)", "Protecciones específicas y puesta a tierra", "Soportes (Báculos y columnas)", "Cajas de derivación en soportes"] },
    "10": { t: "Previsión de Cargas", c: ["Grado Básico (5750 W) y Elevado (9200 W)", "Carga total de edificios de viviendas", "Coeficientes de simultaneidad viviendas", "Carga de locales comerciales y oficinas", "Carga de garajes (Ventilación natural/forzada)", "Previsión para vehículo eléctrico"] },
    "11": { t: "Redes de Distribución. Acometidas", c: ["Acometidas Aéreas (Posada/Tensada)", "Acometidas Subterráneas", "Acometidas Aéreo-subterráneas", "Trazado y entrada al edificio", "Sección de conductores", "Responsabilidad de la empresa distribuidora"] },
    "12": { t: "Instalaciones de Enlace (General)", c: ["Esquemas generales de enlace", "Partes: CGP, LGA, Contadores, DI, DGMP", "Ubicación de contadores (Individual/Centralizado)", "Propiedad y mantenimiento", "Caídas de tensión globales en el enlace"] },
    "13": { t: "Cajas Generales de Protección (CGP)", c: ["Tipos y esquemas internos", "Emplazamiento (Fachada, Nicho, Vallado)", "Grado de protección (IK10 / IP43)", "Fusibles de seguridad (Cuchilla, Neozed)", "Conexión del neutro (amovible, a la izquierda)", "Altura de montaje"] },
    "14": { t: "Línea General de Alimentación (LGA)", c: ["Conductores (Cobre o Aluminio)", "Aislamiento (0,6/1 kV) y no propagación (Z1)", "Sistemas de instalación (Tubos, Canales, Conductos)", "Trazado por zonas comunes (Patinillos)", "Secciones mínimas y dimensionado", "Registros cortafuegos"] },
    "15": { t: "Derivaciones Individuales (DI)", c: ["Definición y límites (Contador - Cuadro vivienda)", "Conductores (Libres de halógenos ES07Z1-K)", "Sección mínima (6 mm²)", "Tubos protectores y diámetros", "Hilo de mando (rojo 1,5 mm²)", "Montaje en patinillos y registros de planta"] },
    "16": { t: "Contadores", c: ["Concentración de contadores (Armarios/Locales)", "Características del local (Puerta, Ventilación, Desagüe)", "Iluminación de emergencia y extintor", "Interruptor General de Maniobra (IGM)", "Cables de mando y protección", "Ubicación (Planta baja, entresuelo)"] },
    "17": { t: "Dispositivos Mando y Protección", c: ["Cuadro General (CGMP) y envolvente", "Interruptor General Automático (IGA) - Corte omnipolar", "Interruptores Diferenciales (ID) - Protección personas", "Pequeños Interruptores Automáticos (PIA) - Circuitos", "Protección contra Sobretensiones (PCS)", "Ubicación y altura (1,4m - 2m)"] },
    "18": { t: "Puestas a Tierra", c: ["Objeto: Limitar tensión de contacto y fugas", "Electrodos (Picas, Placas, Conductor enterrado)", "Línea de enlace y conductor de protección", "Bornes de puesta a tierra y puntos de puesta a tierra", "Separación de tierras (Baja/Alta tensión)", "Resistencia de tierra y mantenimiento"] },
    "19": { t: "Instalaciones Interiores (Generalidades)", c: ["Ámbito de aplicación (Viviendas, Locales)", "Esquema TT (Régimen de neutro)", "Conductor de protección en toda la instalación", "Caídas de tensión máximas", "Protección contra sobreintensidades y contactos", "Separación de circuitos según uso"] },
    "20": { t: "Sistemas de Instalación (Cables)", c: ["Tipos de cables (RZ1-K, H07V-K, ES07Z1-K)", "Sistemas: Tubos empotrados, en superficie, canales", "Condiciones generales (Fijación, Identificación)", "Conductores activos y protección (Colores)", "Conexiones: Empalmes y derivaciones", "Prohibiciones (Cables sin protección mecánica)"] },
    "21": { t: "Conductores. Identificación", c: ["Colores obligatorios: Neutro (Azul claro), PE (Verde-amarillo)", "Fases: Negro, Marrón, Gris (o cualquiera excepto reservados)", "Secciones mínimas por tipo de circuito", "Conductor de protección (PE) siempre presente", "Continuidad del neutro (No interrumpir)", "Compatibilidad electromagnética"] },
    "22": { t: "Tubos y Canales Protectoras", c: ["Clasificación y grados de resistencia", "Diámetros mínimos según cables alojados", "Tubos empotrados en obra (PVC, corrugado)", "Tubos en superficie (Rígidos, flexibles)", "Canales protectoras (PVC, metálicas)", "Grado de protección IP e IK"] },
    "23": { t: "Cajas de Empalme y Derivación", c: ["Obligatoriedad en empalmes y derivaciones", "Grados de protección según emplazamiento", "Registro y accesibilidad", "Regletas de conexión", "Identificación de circuitos", "Prohibición de empalmes ocultos"] },
    "24": { t: "Aparamenta (Mecanismos)", c: ["Bases de enchufe (Tomas de corriente)", "Interruptores y conmutadores", "Pulsadores, reguladores de intensidad", "Corriente asignada y tensión nominal", "Grado de protección según local", "Altura de montaje recomendada"] },
    "25": { t: "Receptores de Alumbrado", c: ["Portalámparas y luminarias", "Requisitos de instalación", "Clase de aislamiento (I, II, III)", "Masa máxima soportada por tubo", "Separación de materiales combustibles", "Iluminación de emergencia y señalización"] },
    "26": { t: "Receptores a Motor", c: ["Protección contra sobrecargas", "Protección contra cortocircuito", "Coordinación de protecciones", "Mando y parada de emergencia", "Inversión de giro", "Motores sumergidos y en atmósferas especiales"] },
    "27": { t: "Instalaciones de Puesta a Tierra", c: ["Red de tierra (Electrodo y líneas)", "Tipos de electrodos (Picas, anillos, placas)", "Resistencia de tierra (Valores admisibles)", "Puntos de puesta a tierra (PPT)", "Revisiones periódicas", "Prohibición de intercalar elementos seccionables en PE"] },
    "28": { t: "Circuitos de Vivienda (Electrificación Básica)", c: ["Potencia mínima: 5750 W", "Circuito C1: Iluminación (1,5 mm²)", "Circuito C2: Tomas generales (2,5 mm²)", "Circuito C3: Cocina y horno (6 mm²)", "Circuito C4: Lavadora, lavavajillas, termo (4 mm²)", "Circuito C5: Tomas baño y cocina (2,5 mm²)"] },
    "29": { t: "Circuitos de Vivienda (Electrificación Elevada)", c: ["Potencia mínima: 9200 W", "Circuitos adicionales C6 a C11", "C6: Adicional cocina", "C7: Calefacción eléctrica", "C8: Aire acondicionado", "C9, C10: Reserva / Secadora / Ofimática"] },
    "30": { t: "Cocinas. Baños. Aseos", c: ["Volúmenes de prohibición y protección", "Clase de material según volumen", "Grado de protección (IPX4, IPX7)", "Prohibiciones en volúmenes 0, 1, 2", "Equipotencialidad suplementaria", "Interruptor diferencial ≤30 mA"] },
    "31": { t: "Garajes y Aparcamientos", c: ["Clasificación según ventilación", "Instalaciones con atmósfera explosiva (Zona 1, 2)", "Cuadro independiente con protección diferencial", "Prohibición de enchufes monofásicos no protegidos", "Ventilación forzada (Potencia instalada)", "Sistemas de detección de CO"] },
    "32": { t: "Locales Comerciales y Oficinas", c: ["Previsión de cargas según superficie y actividad", "Coeficientes de simultaneidad", "Alumbrado de emergencia obligatorio (>300 m²)", "Protección diferencial ≤300 mA", "Cuadros secundarios y distribución", "Reserva de potencia"] },
    "33": { t: "Instalaciones con Bañeras o Duchas", c: ["Definición de volúmenes (0, 1, 2, 3)", "Material eléctrico permitido por volumen", "Equipotencialidad local suplementaria", "Diferenciales de alta sensibilidad (≤30 mA)", "Prohibición de cajas y mecanismos en vol. 0 y 1", "Calentadores eléctricos de agua"] },
    "34": { t: "Piscinas y Fuentes", c: ["Volúmenes de seguridad (0, 1, 2)", "Equipotencialidad en estructura metálica", "Separación de circuitos (Transformador aislamiento)", "Protección diferencial ≤30 mA obligatoria", "Material sumergible (Luminarias)", "Prohibición interruptores en vol. 0 y 1"] },
    "35": { t: "Instalaciones Temporales (Ferias, Conciertos)", c: ["Definición y carácter provisional", "Protección contra contactos indirectos", "Cuadros de distribución (Grado IP)", "Conexión equipotencial de masas", "Diferenciales ≤30 mA", "Inspección previa a la puesta en servicio"] },
    "36": { t: "Instalaciones a Muy Baja Tensión (MBTS/MBTP)", c: ["Definición: U ≤ 50 V AC / 75 V DC", "MBTS: Separación seguridad (Sin tierra)", "MBTP: Con un punto a tierra", "MBFP: Sin separación de seguridad", "Protección contra contactos directos", "Fuentes: Transformadores de seguridad"] },
    "37": { t: "Receptores de Alumbrado", c: ["Lámparas de descarga (Balastos, arrancadores)", "Compensación del factor de potencia", "Corrección del cos φ", "Lámparas LED y drivers", "Protección térmica de transformadores", "Requisitos CEM (Compatibilidad electromagnética)"] },
    "38": { t: "Motores. Instalaciones Generadoras", c: ["Grupos electrógenos de emergencia", "Conmutación red-grupo (Automática/Manual)", "Protección y mando de motores", "Arranque estrella-triángulo", "Variadores de frecuencia", "Baterías de condensadores (Reactiva)"] },
    "39": { t: "Alumbrado de Emergencia y Seguridad", c: ["Definición y tipos (Evacuación, Antipánico, Zonas de riesgo)", "Niveles mínimos de iluminación", "Autonomía: 1 hora mínimo", "Fuentes: Central de baterías, bloques autónomos", "Mantenimiento y verificación periódica", "Señalización de salidas y recorridos"] },
    "40": { t: "Locales Húmedos y Mojados", c: ["Clasificación según presencia de agua", "Grado de protección mínimo (IP)", "Prohibición de enchufes en locales mojados", "Material Clase II preferente", "Equipotencialidad suplementaria", "Diferencial ≤30 mA"] },
    "41": { t: "Locales Polvorientos (Sin Peligro Explosión)", c: ["Instalaciones en atmósferas polvorientas", "Grado IP5X mínimo (Protección contra polvo)", "Canalizaciones estancas", "Luminarias cerradas", "Prohibición de conexiones al aire", "Limpieza y mantenimiento"] },
    "42": { t: "Instalaciones en Locales de Pública Concurrencia", c: ["Definición y clasificación", "Alumbrado de emergencia obligatorio", "Fuente alternativa (Grupo o SAI)", "Protección diferencial por planta/zona", "Cuadros estancos y señalizados", "Inspecciones periódicas obligatorias"] },
    "43": { t: "Quirófanos y Salas de Intervención", c: ["Instalación IT-M (Aislada con vigilancia)", "Transformador de aislamiento por sala", "Dispositivo de vigilancia de aislamiento", "Equipotencialidad de masas", "Cuadro individual por quirófano", "Alimentación de seguridad (UPS o grupo)"] },
    "44": { t: "Instalaciones Generadoras de Baja Tensión", c: ["Fotovoltaica, eólica, cogeneración", "Interconexión con red de distribución", "Protecciones de interfaz", "Interruptor general con corte omnipolar", "Puesta a tierra independiente o común", "Medida de energía (Bidireccional)"] },
    "45": { t: "Ascensores y Montacargas", c: ["Alimentación independiente desde CGP", "Protección diferencial exclusiva", "Iluminación del hueco y sala de máquinas", "Alumbrado de emergencia en cabina", "Sistemas de rescate", "Protección contra sobretensiones"] },
    "46": { t: "Instalaciones de Seguridad", c: ["Sistemas de detección y alarma de incendios", "Control de humos y evacuación", "Sistemas de extinción automática", "Fuentes de alimentación de seguridad", "Separación de circuitos", "Resistencia al fuego de cables (AS, AS+)"] },
    "47": { t: "Sistemas de Automatización, Gestión y Control", c: ["Domótica e inmótica", "Sistemas de control centralizado", "Buses de comunicación (KNX, Modbus)", "Integración con instalaciones (HVAC, iluminación)", "Ciberseguridad en sistemas de control", "Eficiencia energética"] },
    "48": { t: "Infraestructuras de Telecomunicaciones", c: ["ICT (RD 346/2011)", "Registros de enlace, secundarios, terminales", "Recintos de infraestructuras (RITI, RITS)", "Separación con instalaciones eléctricas", "Tomas de telecomunicaciones en viviendas", "Canalización compartida (Electricidad/Telecom)"] },
    "49": { t: "Instalaciones con Riesgo de Incendio o Explosión", c: ["Clasificación de emplazamientos (Zonas 0, 1, 2)", "Material ATEX (Categorías 1, 2, 3)", "Grados de protección Ex (ia, ib, d, e, p)", "Separación de fuentes de ignición", "Ventilación forzada", "Señalización de zonas clasificadas"] },
    "50": { t: "Sistemas de Protección contra Rayos", c: ["Necesidad de protección (Estudio de riesgo)", "Niveles de protección (I, II, III, IV)", "Pararrayos (Punta, Malla, Piezoeléctrico)", "Bajantes y conexión a tierra", "Protección contra sobretensiones inducidas", "Inspecciones periódicas"] },
    "51": { t: "Instalaciones de Sistemas de Automatización", c: ["Gestión energética, confort y seguridad", "Nodos, sensores y actuadores", "Buses de control (Cableado o Inalámbrico)", "Separación de circuitos (MBTS / 230V)", "Filtrado, protección y compatibilidad electromagnética (CEM)"] },
    "52": { t: "Vehículo Eléctrico (IRVE)", c: ["Esquemas de instalación (1: Principal, 2: Individual, etc.)", "Modos de carga (1, 2, 3, 4)", "Sistema de Protección de Línea (SPL)", "Protecciones: Sobretensiones y Diferencial Clase A/B", "Previsión de potencia en garajes nuevos", "Puntos de recarga en vía pública"] }
};
