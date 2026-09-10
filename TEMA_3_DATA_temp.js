/* =========================================================
   TEMA 3: PROTECCIÓN DE LAS INSTALACIONES ELÉCTRICAS (v1.0)
   67 preguntas: cobertura completa del temario
   Basado en material oficial Universae - U3
   Incluye las 10 preguntas del test oficial (marcadas *)
   ========================================================= */

const TEMA_3_DATA = [

  // ========== SECCIÓN 3.1: CUADRO GENERAL DE DISTRIBUCIÓN (CGMP) ==========

  {
    id: 3001,
    tema: "CGMP - Nombre completo",
    texto: "El Cuadro General de Distribución también se conoce como:",
    opciones: ["Central General de Maniobra y Potencia.", "Cuadro General de Mando y Protección (CGMP).", "Caja General de Protección (CGP).", "Centro General de Medida y Potencia."],
    correctaTexto: "Cuadro General de Mando y Protección (CGMP).",
    explicacion: "El Cuadro General de Distribución es el mismo que el Cuadro General de Mando y Protección (CGMP). En él se ubican todos los dispositivos de protección de la instalación."
  },

  {
    id: 3002,
    tema: "CGMP - Dispositivos que contiene",
    texto: "¿Cuáles son los dispositivos que se pueden encontrar en el CGMP?",
    opciones: ["Solo el contador y el fusible principal.", "IGA, interruptores diferenciales (ID), PIAs, ICP y dispositivos contra sobretensiones.", "Únicamente los fusibles de la acometida.", "Solo el interruptor diferencial y el contador."],
    correctaTexto: "IGA, interruptores diferenciales (ID), PIAs, ICP y dispositivos contra sobretensiones.",
    explicacion: "Dentro del CGMP podemos encontrar: el Interruptor General Automático (IGA), interruptores diferenciales (ID), Pequeños Interruptores Automáticos (PIAs), el Interruptor de Control de Potencia (ICP) y dispositivos de protección contra sobretensiones."
  },

  {
    id: 3003,
    tema: "CGMP - Qué protege",
    texto: "La protección que ofrece el CGMP va destinada a:",
    opciones: ["Solo a la instalación y los conductores.", "Solo a las personas.", "A la instalación, los conductores y también a las personas.", "Solo a los electrodomésticos."],
    correctaTexto: "A la instalación, los conductores y también a las personas.",
    explicacion: "La protección que ofrece el CGMP no va solo destinada a la instalación y a los conductores, sino que también ofrece una protección para las personas."
  },

  {
    id: 3004,
    tema: "CGMP - ITC-BT-17 ubicación",
    texto: "Según la ITC-BT-17, ¿dónde deben situarse los dispositivos generales de mando y protección en una vivienda?",
    opciones: ["En la cocina, junto a los electrodomésticos.", "Lo más cerca posible del punto de entrada de la derivación individual, junto a la puerta de entrada.", "En el dormitorio principal.", "En cualquier lugar cómodo para el usuario."],
    correctaTexto: "Lo más cerca posible del punto de entrada de la derivación individual, junto a la puerta de entrada.",
    explicacion: "Según la ITC-BT-17, en viviendas, los dispositivos generales de mando y protección se situarán lo más cerca posible del punto de entrada de la derivación individual, junto a la puerta de entrada. No podrán colocarse en dormitorios, baños ni aseos."
  },

  {
    id: 3005,
    tema: "CGMP - Altura de montaje en viviendas",
    texto: "¿A qué altura deben situarse los dispositivos generales de mando y protección en una vivienda?",
    opciones: ["Entre 0,5 y 1 m desde el nivel del suelo.", "Entre 1,4 y 2 m desde el nivel del suelo.", "Entre 2 y 3 m desde el nivel del suelo.", "A más de 3 m para evitar el acceso de niños."],
    correctaTexto: "Entre 1,4 y 2 m desde el nivel del suelo.",
    explicacion: "La altura a la cual se situarán los dispositivos generales e individuales de mando y protección de los circuitos, medida desde el nivel del suelo, estará comprendida entre 1,4 y 2 m para viviendas. En locales comerciales la altura mínima es de 1 m."
  },

  {
    id: 3006,
    tema: "CGMP - Locales comerciales altura",
    texto: "En locales comerciales, ¿cuál es la altura mínima de montaje para los dispositivos del CGMP?",
    opciones: ["0,5 m desde el nivel del suelo.", "1 m desde el nivel del suelo.", "1,4 m desde el nivel del suelo.", "2 m desde el nivel del suelo."],
    correctaTexto: "1 m desde el nivel del suelo.",
    explicacion: "En locales comerciales, la altura mínima para los dispositivos de mando y protección será de 1 m desde el nivel del suelo. En viviendas, la altura está comprendida entre 1,4 y 2 m."
  },

  {
    id: 3007,
    tema: "CGMP - Otros elementos",
    texto: "¿Cuáles de los siguientes elementos también pueden encontrarse en un cuadro de distribución?",
    opciones: ["Enchufes Schuko y bases de corriente.", "Temporizadores, contactores, relés, fusibles, pilotos y autómatas.", "Canalizaciones y tubos de PVC.", "Cables de tensión y neutro exclusivamente."],
    correctaTexto: "Temporizadores, contactores, relés, fusibles, pilotos y autómatas.",
    explicacion: "Otros elementos que podemos encontrar en el cuadro de distribución son: temporizador, contactor, relé, fusibles, pilotos, autómatas, etc. Estos complementan a los dispositivos principales de protección."
  },

  {
    id: 3008,
    tema: "CGMP - Locales de pública concurrencia",
    texto: "En locales de uso común o de pública concurrencia, ¿qué precaución específica deben cumplir los dispositivos del CGMP?",
    opciones: ["Deben estar pintados de color rojo para identificarlos.", "No ser accesibles al público en general.", "Deben estar a más de 3 m de altura.", "Ser de mayor tamaño que en viviendas."],
    correctaTexto: "No ser accesibles al público en general.",
    explicacion: "En locales de uso común o de pública concurrencia, deberán tomarse las precauciones necesarias para que los dispositivos de mando y protección no sean accesibles al público en general."
  },

  // ========== SECCIÓN 3.2: INTERRUPTOR DE CONTROL DE POTENCIA (ICP) ==========

  {
    id: 3009,
    tema: "ICP - Función",
    texto: "¿Cuál es la función del Interruptor de Control de Potencia (ICP)?",
    opciones: ["Proteger contra contactos eléctricos directos.", "Cortar el flujo de electricidad cuando se supera la potencia contratada.", "Proteger contra sobrecargas de los circuitos interiores.", "Medir el consumo de energía eléctrica."],
    correctaTexto: "Cortar el flujo de electricidad cuando se supera la potencia contratada.",
    explicacion: "El ICP es un sistema automático que corta el flujo de electricidad en un local cuando se supera la potencia contratada con la compañía eléctrica."
  },

  {
    id: 3010,
    tema: "ICP - Quién lo ajusta",
    texto: "¿Quién ajusta y precinta el Interruptor de Control de Potencia (ICP)?",
    opciones: ["El usuario propietario de la vivienda.", "El instalador eléctrico autorizado.", "La compañía eléctrica, que es la única que puede certificar su correcta instalación.", "Cualquier técnico cualificado."],
    correctaTexto: "La compañía eléctrica, que es la única que puede certificar su correcta instalación.",
    explicacion: "El ICP viene ajustado por la compañía eléctrica y está precintado para que el usuario no pueda acceder a él. Por ello, la compañía es la única que puede certificar la correcta instalación y funcionamiento."
  },

  {
    id: 3011,
    tema: "ICP - Solución cuando salta frecuentemente",
    texto: "Si el ICP salta frecuentemente porque la potencia utilizada es mayor que la contratada, ¿cuál es la única solución?",
    opciones: ["Cambiar el ICP por uno de mayor calibre.", "Desconectar el ICP y conectar directamente.", "Aumentar la potencia contratada (pagar más en la factura).", "Instalar un diferencial de mayor sensibilidad."],
    correctaTexto: "Aumentar la potencia contratada (pagar más en la factura).",
    explicacion: "Si el ICP salta con frecuencia porque la potencia utilizada es mayor que la contratada, la única solución es aumentar la potencia contratada, lo que implica pagar más en la factura eléctrica."
  },

  {
    id: 3012,
    tema: "ICP - Ubicación en el cuadro",
    texto: "Según la ITC-BT-17, ¿dónde se coloca el ICP respecto a los demás dispositivos del cuadro?",
    opciones: ["Al final del cuadro, después de los PIAs.", "En compartimento independiente y precintable, inmediatamente antes de los demás dispositivos.", "Junto al contador, fuera del CGMP.", "No importa su posición en el cuadro."],
    correctaTexto: "En compartimento independiente y precintable, inmediatamente antes de los demás dispositivos.",
    explicacion: "En viviendas y locales comerciales e industriales, se colocará una caja para el ICP, en compartimento independiente y precintable, inmediatamente antes de los demás dispositivos, según ITC-BT-17."
  },

  // ========== SECCIÓN 3.3: INTERRUPTORES AUTOMÁTICOS MAGNETOTÉRMICOS ==========

  {
    id: 3013,
    tema: "Magnetotérmico - Protección principal (TEST OFICIAL)",
    texto: "Un interruptor automático magnetotérmico protege contra:",
    opciones: ["Contactos directos e indirectos.", "Incendios.", "Derroche de potencia.", "Sobrecargas y cortocircuitos."],
    correctaTexto: "Sobrecargas y cortocircuitos.",
    explicacion: "Los interruptores automáticos magnetotérmicos protegen contra sobrecargas y cortocircuitos. Cuando el interruptor detecta algún fallo, por ejemplo, por sobreintensidad, este interruptor se abre para interrumpir el paso de corriente."
  },

  {
    id: 3014,
    tema: "Magnetotérmico - Partes del dispositivo",
    texto: "¿De qué dos partes consta el interruptor automático magnetotérmico?",
    opciones: ["Una parte eléctrica y otra mecánica.", "Una parte magnética y otra térmica.", "Una parte digital y otra analógica.", "Una parte de potencia y otra de control."],
    correctaTexto: "Una parte magnética y otra térmica.",
    explicacion: "Como su nombre indica, el dispositivo consta de dos partes: una magnética (disparador electromagnético) y otra térmica (lámina bimetálica). Cada una actúa ante un tipo diferente de fallo."
  },

  {
    id: 3015,
    tema: "Magnetotérmico - Corte magnético función",
    texto: "¿Para qué tipo de fallo actúa el corte magnético de un magnetotérmico?",
    opciones: ["Para sobrecargas lentas y progresivas.", "Para cortocircuitos, actuando muy rápido cuando la intensidad es 3 a 20 veces mayor a la nominal.", "Para variaciones de tensión.", "Para fallos de aislamiento a tierra."],
    correctaTexto: "Para cortocircuitos, actuando muy rápido cuando la intensidad es 3 a 20 veces mayor a la nominal.",
    explicacion: "El corte magnético actúa contra cortocircuitos porque el interruptor actúa muy rápido cuando llega una intensidad entre 3 y 20 veces mayor a la nominal. En un cortocircuito se produce un aumento muy brusco y cuantitativo de la intensidad."
  },

  {
    id: 3016,
    tema: "Magnetotérmico - Corte térmico función",
    texto: "¿Para qué tipo de fallo actúa el corte térmico de un magnetotérmico?",
    opciones: ["Para cortocircuitos instantáneos.", "Para sobrecargas, mediante una lámina bimetálica que se calienta y deforma.", "Para sobretensiones de la red.", "Para fallos de frecuencia."],
    correctaTexto: "Para sobrecargas, mediante una lámina bimetálica que se calienta y deforma.",
    explicacion: "El corte térmico actúa contra sobrecargas. Consta de una lámina bimetálica que se calienta cuando hay un paso de corriente mayor al debido, llegándose a deformar. Al deformarse se produce la apertura del circuito."
  },

  {
    id: 3017,
    tema: "Magnetotérmico - Lámina bimetálica",
    texto: "¿Cuál es el componente clave del disparador térmico en un magnetotérmico?",
    opciones: ["Un fusible de hilo metálico.", "Una lámina bimetálica que se deforma con el calor.", "Un electroimán.", "Un condensador electrolítico."],
    correctaTexto: "Una lámina bimetálica que se deforma con el calor.",
    explicacion: "El disparador térmico consta de una lámina bimetálica que se calienta cuando la corriente supera el valor debido. Al calentarse se deforma y al deformarse produce la apertura del circuito, protegiendo contra sobrecargas."
  },

  {
    id: 3018,
    tema: "Magnetotérmico - Tipos comerciales",
    texto: "¿Cómo se comercializan los interruptores magnetotérmicos según el número de polos?",
    opciones: ["Solo unipolares o bipolares.", "Unipolares, bipolares, tripolares o tetrapolares.", "Solo tripolares o tetrapolares para trifásica.", "Monofásicos de 220V o trifásicos de 380V."],
    correctaTexto: "Unipolares, bipolares, tripolares o tetrapolares.",
    explicacion: "Los interruptores magnetotérmicos se comercializan como: unipolares (1 polo), bipolares (2 polos), tripolares (3 polos) o tetrapolares (4 polos), según la aplicación monofásica o trifásica."
  },

  {
    id: 3019,
    tema: "Magnetotérmico - Poder de corte (TEST OFICIAL)",
    texto: "La intensidad máxima que un interruptor puede cortar se llama:",
    opciones: ["Poder de corte.", "Intensidad nominal o calibre.", "Curva de disparo.", "Tiempo de disparo."],
    correctaTexto: "Poder de corte.",
    explicacion: "El poder de corte es la intensidad máxima (en kA) que el interruptor puede cortar. En los magnetotérmicos esta intensidad se encuentra entre 4 y 20 kA. Por eso deben ir acompañados de un fusible que tiene mayor poder de corte."
  },

  {
    id: 3020,
    tema: "Magnetotérmico - Poder de corte 6 kA (TEST OFICIAL)",
    texto: "¿Qué implica que el poder de corte de un interruptor magnetotérmico es de 6 kA?",
    opciones: ["La intensidad nominal asociada al interruptor magnetotérmico.", "La intensidad mínima de funcionamiento.", "Que como máximo podrá actuar ante intensidades de 6 kA.", "Que no es apropiado para instalaciones residenciales."],
    correctaTexto: "Que como máximo podrá actuar ante intensidades de 6 kA.",
    explicacion: "El poder de corte indica la intensidad máxima que puede interrumpir el dispositivo. Si es de 6 kA, significa que como máximo podrá actuar ante intensidades de 6.000 A. Si se supera, el dispositivo podría dañarse."
  },

  {
    id: 3021,
    tema: "Magnetotérmico - Intensidad nominal",
    texto: "¿Qué es la intensidad nominal o calibre de un magnetotérmico?",
    opciones: ["La intensidad máxima que puede cortar en un cortocircuito.", "La intensidad máxima que puede soportar antes de que corte el flujo de electricidad.", "La intensidad mínima necesaria para que funcione.", "La intensidad de arranque del disparador magnético."],
    correctaTexto: "La intensidad máxima que puede soportar antes de que corte el flujo de electricidad.",
    explicacion: "La intensidad nominal o calibre es la intensidad máxima que el interruptor puede soportar antes de que corte el flujo de electricidad (se abra). Esta intensidad nominal está normalizada y aparece marcada en el dispositivo (ej: 10A, 16A, 25A)."
  },

  {
    id: 3022,
    tema: "Magnetotérmico - Curvas de disparo",
    texto: "¿Qué relacionan las curvas de disparo de un magnetotérmico?",
    opciones: ["La tensión y la potencia del circuito.", "La intensidad que circula con el tiempo que tardará en realizar el corte.", "La temperatura ambiente y la intensidad nominal.", "La sección del cable y el calibre del interruptor."],
    correctaTexto: "La intensidad que circula con el tiempo que tardará en realizar el corte.",
    explicacion: "Las curvas relacionan la intensidad que circula con el tiempo que tardará en realizar el corte. El eje relacionado con la intensidad se expresa como la intensidad que circula en función del calibre del automático (I/In)."
  },

  {
    id: 3023,
    tema: "Magnetotérmico - Rango poder de corte",
    texto: "¿Entre qué valores se encuentra el poder de corte de los interruptores magnetotérmicos?",
    opciones: ["Entre 1 y 3 kA.", "Entre 4 y 20 kA.", "Entre 20 y 100 kA.", "Entre 100 y 1000 kA."],
    correctaTexto: "Entre 4 y 20 kA.",
    explicacion: "El poder de corte de los magnetotérmicos está entre 4 y 20 kA, que no es muy grande. Por eso deben ir acompañados de fusibles, que tienen mayor poder de corte para proteger ante cortocircuitos muy elevados."
  },

  {
    id: 3024,
    tema: "Magnetotérmico - Símbolo (TEST OFICIAL)",
    texto: "¿A qué hace referencia el símbolo del interruptor mostrado con disparador térmico y magnético?",
    opciones: ["Interruptor general automático.", "Interruptor diferencial.", "Interruptor magnetotérmico.", "Toma a tierra."],
    correctaTexto: "Interruptor magnetotérmico.",
    explicacion: "El símbolo del interruptor magnetotérmico incluye los elementos gráficos del disparador térmico (lámina bimetálica) y el disparador magnético (electroimán). Representa la doble protección: térmica (sobrecargas) y magnética (cortocircuitos)."
  },

  // ========== SECCIÓN 3.4: INTERRUPTOR AUTOMÁTICO DIFERENCIAL (ID) ==========

  {
    id: 3025,
    tema: "Diferencial - Funciones principales",
    texto: "¿Cuáles son las funciones principales del interruptor automático diferencial (ID)?",
    opciones: ["Solo proteger la instalación contra sobrecargas.", "Proteger la instalación ante aislamientos defectuosos, proteger personas contra contactos directos/indirectos y proteger contra incendios.", "Solo medir la corriente de fuga.", "Únicamente proteger contra cortocircuitos."],
    correctaTexto: "Proteger la instalación ante aislamientos defectuosos, proteger personas contra contactos directos/indirectos y proteger contra incendios.",
    explicacion: "El diferencial tiene varias funciones: 1) Protección de la instalación si un aislamiento es defectuoso; 2) Protección de personas contra contactos directos e indirectos; 3) Protección contra incendios."
  },

  {
    id: 3026,
    tema: "Diferencial - Lo que NO protege",
    texto: "¿Qué NO están diseñados para proteger los interruptores diferenciales?",
    opciones: ["Las personas contra contactos eléctricos.", "Los conductores (cables) de la instalación.", "La instalación contra fallos de aislamiento.", "Contra riesgo de incendio."],
    correctaTexto: "Los conductores (cables) de la instalación.",
    explicacion: "Los diferenciales NO están diseñados para proteger a los conductores. Esta es una diferencia clave con los magnetotérmicos. El diferencial protege personas e instalación, pero la protección de conductores la realiza el magnetotérmico."
  },

  {
    id: 3027,
    tema: "Diferencial - Sensibilidad IDn",
    texto: "¿Cómo se clasifica la sensibilidad (IDn) de un diferencial?",
    opciones: ["Alta (10 mA), media (30 mA), baja (100 mA).", "Muy alta (10 mA), alta (30 mA), baja (300 mA, 500 mA o 1 A).", "Normal (30 mA), elevada (60 mA), máxima (100 mA).", "Estándar (25 mA), reforzada (50 mA), industrial (300 mA)."],
    correctaTexto: "Muy alta (10 mA), alta (30 mA), baja (300 mA, 500 mA o 1 A).",
    explicacion: "La sensibilidad (IDn) del diferencial puede ser: muy alta (10 mA) para locales mojados, alta (30 mA) para viviendas en general, y baja (300 mA, 500 mA o 1 A) para circuitos industriales o de fuerza."
  },

  {
    id: 3028,
    tema: "Diferencial - Clases",
    texto: "¿Cuáles son las clases de interruptores diferenciales según el tipo de corriente residual?",
    opciones: ["Tipo 1, Tipo 2, Tipo 3.", "Clase P, Q y R.", "Clase AC, A, B, F y S (selectivo).", "Clase monofásico y trifásico."],
    correctaTexto: "Clase AC, A, B, F y S (selectivo).",
    explicacion: "Las clases de diferenciales son: AC (corriente residual alterna), A (alterna pulsante), B (alterna hasta 1kHz, pulsante y pura continua), F (alterna hasta 1kHz y pulsante), S (selectivo). Cada clase detecta un tipo de corriente residual."
  },

  {
    id: 3029,
    tema: "Diferencial - Clase AC",
    texto: "¿Qué tipo de corriente residual detecta el diferencial de clase AC?",
    opciones: ["Corriente residual alterna pulsante.", "Corriente residual alterna.", "Corriente residual continua pura.", "Corriente residual hasta 1 kHz."],
    correctaTexto: "Corriente residual alterna.",
    explicacion: "El diferencial de clase AC detecta la corriente residual alterna (sinusoidal). Es el tipo más básico y estándar. Para instalaciones con electrónica de potencia o variadores de frecuencia se necesitan clases más avanzadas (A, B, F)."
  },

  {
    id: 3030,
    tema: "Diferencial - Tiempo de disparo",
    texto: "¿Por qué es importante el tiempo de disparo de un diferencial?",
    opciones: ["Porque determina el consumo eléctrico del diferencial.", "Porque una respuesta rápida puede salvar la vida de una persona en caso de electrocución.", "Porque influye en el coste del dispositivo.", "Porque determina la clase de diferencial."],
    correctaTexto: "Porque una respuesta rápida puede salvar la vida de una persona en caso de electrocución.",
    explicacion: "El tiempo de disparo es el tiempo que tarda en cortar el suministro de corriente ante una anomalía. Es muy importante porque una respuesta rápida puede salvar la vida de una persona que sufra un contacto eléctrico."
  },

  {
    id: 3031,
    tema: "Diferencial - Número de polos",
    texto: "¿En cuántos polos se comercializan los interruptores diferenciales?",
    opciones: ["Solo de 1 polo.", "De 2 o 4 polos.", "De 1, 2, 3 o 4 polos.", "Solo de 3 polos para uso trifásico."],
    correctaTexto: "De 2 o 4 polos.",
    explicacion: "Los interruptores diferenciales existen en dos versiones según el número de polos: de 2 polos (para instalaciones monofásicas: fase + neutro) y de 4 polos (para instalaciones trifásicas: 3 fases + neutro)."
  },

  {
    id: 3032,
    tema: "Diferencial - Intensidad nominal",
    texto: "¿Qué ocurre si por el diferencial circula una intensidad mayor a su calibre?",
    opciones: ["Dispara inmediatamente por diferencia de corriente.", "El diferencial se quemaría.", "No pasa nada, el diferencial no protege contra sobrecargas.", "Activa una alarma sonora."],
    correctaTexto: "El diferencial se quemaría.",
    explicacion: "La intensidad nominal o calibre es la intensidad máxima que el diferencial puede soportar. En caso de que por el diferencial circule una intensidad mayor a la que soporta el calibre, este se quemaría. Por eso se dimensiona correctamente."
  },

  {
    id: 3033,
    tema: "Diferencial - Diferencia con magnetotérmico",
    texto: "¿Cuál es la diferencia fundamental entre un diferencial y un magnetotérmico?",
    opciones: ["El diferencial es más barato.", "El diferencial detecta corrientes de fuga y protege personas; el magnetotérmico protege contra sobrecargas y cortocircuitos.", "El magnetotérmico protege personas y el diferencial protege conductores.", "No hay diferencia, son equivalentes."],
    correctaTexto: "El diferencial detecta corrientes de fuga y protege personas; el magnetotérmico protege contra sobrecargas y cortocircuitos.",
    explicacion: "El diferencial detecta desequilibrios entre corriente de entrada y salida (fugas) y protege a las personas. El magnetotérmico protege contra sobrecargas y cortocircuitos. Ambos son necesarios y complementarios en toda instalación."
  },

  {
    id: 3034,
    tema: "Diferencial - Sensibilidad para viviendas",
    texto: "¿Cuál es la sensibilidad habitual del diferencial en instalaciones domésticas?",
    opciones: ["10 mA (muy alta sensibilidad).", "30 mA (alta sensibilidad).", "300 mA (baja sensibilidad).", "1 A (muy baja sensibilidad)."],
    correctaTexto: "30 mA (alta sensibilidad).",
    explicacion: "En viviendas, el diferencial habitual tiene una sensibilidad de 30 mA (alta). Para locales con riesgo de humedad (cuartos de baño) se puede usar 10 mA (muy alta sensibilidad). Los de 300 mA se usan más en industria."
  },

  // ========== SECCIÓN 3.5: PROTECCIONES EN ELECTRIFICACIÓN BÁSICA ==========

  {
    id: 3035,
    tema: "Electrificación básica - Nº de circuitos (TEST OFICIAL)",
    texto: "Una electrificación básica consta de:",
    opciones: ["3 circuitos.", "4 circuitos.", "5 circuitos.", "6 circuitos."],
    correctaTexto: "5 circuitos.",
    explicacion: "Una electrificación básica tiene 5 circuitos independientes: C1 (alumbrado), C2 (tomas de uso general), C3 (cocina y horno), C4 (lavadora, lavavajillas y termo), C5 (tomas de baño y cocina). Además de una potencia prevista de 5750 W a 230 V."
  },

  {
    id: 3036,
    tema: "Electrificación básica - Potencia prevista",
    texto: "¿Cuál es la potencia prevista en una electrificación básica?",
    opciones: ["2300 W a 230 V.", "3450 W a 230 V.", "5750 W a 230 V.", "9200 W a 230 V."],
    correctaTexto: "5750 W a 230 V.",
    explicacion: "Una electrificación básica tiene una potencia prevista de 5750 W a 230 V. Esto no significa que el usuario tenga contratada esa potencia, pero la instalación está dimensionada para soportarla."
  },

  {
    id: 3037,
    tema: "Electrificación básica - Circuito C1",
    texto: "¿A qué corresponde el circuito C1 en una electrificación básica y cuál es su sección y calibre PIA?",
    opciones: ["Tomas de corriente generales, 2x2,5 mm², 16 A.", "Cocina y horno, 2x6 mm², 25 A.", "Alumbrado, 2x1,5 mm², 10 A.", "Lavadora y lavavajillas, 2x4 mm², 20 A."],
    correctaTexto: "Alumbrado, 2x1,5 mm², 10 A.",
    explicacion: "El circuito C1 corresponde al alumbrado. Sus características son: sección del conductor 2x1,5 mm² + T (tierra), y PIA de 10 A."
  },

  {
    id: 3038,
    tema: "Electrificación básica - Circuito C2",
    texto: "¿A qué corresponde el circuito C2 en una electrificación básica?",
    opciones: ["Cocina y horno.", "Tomas de corriente de uso general, 2x2,5 mm², 16 A.", "Alumbrado.", "Tomas de baño y cocina."],
    correctaTexto: "Tomas de corriente de uso general, 2x2,5 mm², 16 A.",
    explicacion: "El circuito C2 corresponde a las tomas de corriente de uso general. Sus características son: sección 2x2,5 mm² + T y PIA de 16 A."
  },

  {
    id: 3039,
    tema: "Electrificación básica - Circuito C3",
    texto: "¿Cuál es el calibre del PIA y la sección del circuito C3 (cocina y horno) en electrificación básica?",
    opciones: ["PIA 10 A, sección 2x1,5 mm².", "PIA 16 A, sección 2x2,5 mm².", "PIA 25 A, sección 2x6 mm².", "PIA 20 A, sección 2x4 mm²."],
    correctaTexto: "PIA 25 A, sección 2x6 mm².",
    explicacion: "El circuito C3 alimenta la cocina y el horno, que son los electrodomésticos de mayor potencia. Por eso requiere el mayor calibre de PIA (25 A) y la mayor sección de cable (2x6 mm² + T)."
  },

  {
    id: 3040,
    tema: "Electrificación básica - Circuito C4",
    texto: "¿Qué electrodomésticos alimenta el circuito C4 en una electrificación básica?",
    opciones: ["Iluminación y enchufes generales.", "Cocina y horno.", "Lavadora, lavavajillas y calentador eléctrico, 2x4 mm², 20 A.", "Tomas de baño y cocina."],
    correctaTexto: "Lavadora, lavavajillas y calentador eléctrico, 2x4 mm², 20 A.",
    explicacion: "El circuito C4 alimenta la lavadora, el lavavajillas y el calentador eléctrico (termo). Su sección es 2x4 mm² + T y el PIA es de 20 A."
  },

  {
    id: 3041,
    tema: "Electrificación básica - Circuito C5",
    texto: "¿A qué corresponde el circuito C5 en una electrificación básica?",
    opciones: ["Alumbrado de emergencia.", "Cocina de inducción.", "Tomas de corriente de baños y tomas auxiliares en cocina, 2x2,5 mm², 16 A.", "Calefacción eléctrica."],
    correctaTexto: "Tomas de corriente de baños y tomas auxiliares en cocina, 2x2,5 mm², 16 A.",
    explicacion: "El circuito C5 lleva la corriente a los baños (aseos) y a las tomas auxiliares en cocina. Su sección es 2x2,5 mm² + T y el PIA es de 16 A."
  },

  {
    id: 3042,
    tema: "Electrificación básica - Definición",
    texto: "¿Qué es una electrificación básica?",
    opciones: ["El sistema máximo de electrificación para viviendas de lujo.", "El sistema mínimo e indispensable para satisfacer las necesidades primarias sin obras posteriores.", "Solo aplicable en locales comerciales.", "Un sistema provisional de conexión."],
    correctaTexto: "El sistema mínimo e indispensable para satisfacer las necesidades primarias sin obras posteriores.",
    explicacion: "La electrificación básica es el sistema mínimo e indispensable para poder satisfacer las necesidades primarias, permitiendo instalar y usar los electrodomésticos de uso básico sin necesidad de obras posteriores."
  },

  {
    id: 3043,
    tema: "Electrificación básica - Esquema unifilar",
    texto: "En el esquema unifilar de una electrificación básica, ¿qué dispositivos preceden a los 5 PIAs?",
    opciones: ["Solo el IGA.", "El ICP y el IGA directamente.", "El IGA (Interruptor General Automático) y el IDif (Interruptor Diferencial).", "Solo el diferencial sin IGA."],
    correctaTexto: "El IGA (Interruptor General Automático) y el IDif (Interruptor Diferencial).",
    explicacion: "En el esquema unifilar de electrificación básica, la secuencia es: IGA → IDif (Diferencial) → 5 PIAs (C1 a C5). Cada PIA protege un circuito independiente."
  },

  // ========== SECCIÓN 3.6: ELECTRIFICACIÓN ELEVADA ==========

  {
    id: 3044,
    tema: "Electrificación elevada - Cuándo se aplica",
    texto: "¿Cuándo se aplica una electrificación elevada en una vivienda?",
    opciones: ["Siempre en viviendas de nueva construcción.", "Cuando la superficie supera 160 m² o se prevé aire acondicionado, automatización u otras condiciones específicas.", "Solo en pisos de más de 10 plantas.", "Cuando el usuario lo solicita voluntariamente."],
    correctaTexto: "Cuando la superficie supera 160 m² o se prevé aire acondicionado, automatización u otras condiciones específicas.",
    explicacion: "La electrificación elevada se aplica cuando: superficie útil > 160 m², se prevé aire acondicionado, calefacción eléctrica, automatización, o cuando el nº de puntos de alumbrado supera 30, las tomas generales superan 20, o las tomas en baños/cocina son más de 6."
  },

  {
    id: 3045,
    tema: "Electrificación elevada - Circuito C8 y C9",
    texto: "En una electrificación elevada, ¿a qué se destinan los circuitos C8 y C9?",
    opciones: ["C8 al aire acondicionado y C9 a la calefacción.", "C8 a la calefacción eléctrica y C9 al aire acondicionado.", "C8 a la lavadora y C9 a la secadora.", "C8 a puntos de luz adicionales y C9 a enchufes adicionales."],
    correctaTexto: "C8 a la calefacción eléctrica y C9 al aire acondicionado.",
    explicacion: "En la electrificación elevada: C8 está destinado a la instalación de calefacción eléctrica y C9 a la instalación de aire acondicionado."
  },

  {
    id: 3046,
    tema: "Electrificación elevada - Circuito C10 y C13",
    texto: "¿A qué corresponden los circuitos C10 y C13 en una electrificación elevada?",
    opciones: ["C10 a calefacción y C13 a automatización.", "C10 a la secadora y C13 a la recarga de vehículos eléctricos.", "C10 a tomas adicionales y C13 a iluminación exterior.", "C10 al horno de microondas y C13 a la videoportería."],
    correctaTexto: "C10 a la secadora y C13 a la recarga de vehículos eléctricos.",
    explicacion: "En la electrificación elevada: C10 está destinado a la instalación de la secadora y C13 para la recarga de vehículos eléctricos."
  },

  {
    id: 3047,
    tema: "Electrificación elevada - Circuito C6 y C7",
    texto: "¿Para qué se añaden los circuitos C6 y C7 en la electrificación elevada?",
    opciones: ["C6 para cada 30 puntos de luz adicionales y C7 para cada 20 tomas de corriente de uso general adicionales.", "C6 para la cocina y C7 para el baño.", "C6 para el garaje y C7 para el trastero.", "C6 para iluminación exterior y C7 para el ascensor."],
    correctaTexto: "C6 para cada 30 puntos de luz adicionales y C7 para cada 20 tomas de corriente de uso general adicionales.",
    explicacion: "Se añade un circuito C6 por cada 30 puntos de luz y un circuito C7 por cada 20 tomas de corriente de uso general, cuando se superan los límites de la electrificación básica."
  },

  {
    id: 3048,
    tema: "Electrificación elevada - Circuito C11",
    texto: "¿A qué está destinado el circuito C11 en una electrificación elevada?",
    opciones: ["A la recarga de vehículos eléctricos.", "Al sistema de automatización, gestión técnica de energía y de seguridad.", "A la iluminación exterior.", "A la cocina de inducción."],
    correctaTexto: "Al sistema de automatización, gestión técnica de energía y de seguridad.",
    explicacion: "El circuito C11 está destinado a la instalación del sistema de automatización, gestión técnica de energía y de seguridad del hogar (domótica)."
  },

  {
    id: 3049,
    tema: "Electrificación elevada - Base de ampliación",
    texto: "¿En qué se basa la electrificación elevada respecto a la básica?",
    opciones: ["Sustituye completamente a la electrificación básica.", "Se crean circuitos adicionales a los 5 circuitos principales para satisfacer mayores necesidades.", "Es igual a la básica pero con cables de mayor sección.", "Solo cambia el número de diferenciales."],
    correctaTexto: "Se crean circuitos adicionales a los 5 circuitos principales para satisfacer mayores necesidades.",
    explicacion: "La electrificación elevada se crea a partir de la básica: se mantienen los 5 circuitos principales (C1-C5) y se añaden circuitos adicionales (C6-C13) para satisfacer las necesidades de viviendas con mayores prestaciones."
  },

  // ========== SECCIÓN 3.7: FUSIBLES ==========

  {
    id: 3050,
    tema: "Fusible - Ventaja sobre magnetotérmico (TEST OFICIAL)",
    texto: "La ventaja de un fusible con respecto a un interruptor automático magnetotérmico es:",
    opciones: ["Su mejor curva de disparo.", "Su intensidad nominal.", "Su poder de corte.", "Su tensión nominal."],
    correctaTexto: "Su poder de corte.",
    explicacion: "La principal ventaja del fusible respecto al magnetotérmico es su mayor poder de corte. El fusible tiene material extintor del arco eléctrico que le da un poder de corte muy elevado, mayor que el de los magnetotérmicos (4-20 kA)."
  },

  {
    id: 3051,
    tema: "Fusible - Funcionamiento",
    texto: "¿Cómo funciona un fusible cuando se supera su intensidad nominal?",
    opciones: ["Activa una alarma y espera la intervención del operario.", "El hilo metálico interior se funde por calor, abriendo el circuito e interrumpiendo el paso de corriente.", "Dispara el magnetotérmico asociado.", "Eleva la impedancia del circuito para limitar la corriente."],
    correctaTexto: "El hilo metálico interior se funde por calor, abriendo el circuito e interrumpiendo el paso de corriente.",
    explicacion: "Un fusible consta de un cartucho con un hilo metálico que soporta una determinada intensidad. Cuando la intensidad supera esa capacidad, el hilo se funde por calor y abre el circuito. El fusible es un elemento no reutilizable."
  },

  {
    id: 3052,
    tema: "Fusible - Material extintor",
    texto: "¿Por qué tiene un fusible mayor poder de corte que un magnetotérmico?",
    opciones: ["Porque es más grande.", "Porque está fabricado de materiales superconductores.", "Porque contiene material que actúa como extintor del arco eléctrico.", "Porque trabaja a temperatura más alta."],
    correctaTexto: "Porque contiene material que actúa como extintor del arco eléctrico.",
    explicacion: "El fusible consta de un material que actúa como extintor del arco eléctrico, lo que le confiere un gran poder de corte. Esto lo hace superior al magnetotérmico en este aspecto, aunque tiene el inconveniente de no ser reutilizable."
  },

  {
    id: 3053,
    tema: "Fusible - Curvas de fusión",
    texto: "¿Qué representan las curvas de fusión de un fusible?",
    opciones: ["La relación entre temperatura ambiente y corriente máxima.", "Una representación gráfica que relaciona la intensidad-tiempo (cuándo se funde).", "El comportamiento del fusible ante sobretensiones.", "La relación entre tensión y resistencia del hilo fusible."],
    correctaTexto: "Una representación gráfica que relaciona la intensidad-tiempo (cuándo se funde).",
    explicacion: "Las curvas de fusión de un fusible son una representación gráfica que relaciona la intensidad con el tiempo que tardará en fundirse. Permiten saber el tiempo de actuación ante distintos valores de corriente."
  },

  {
    id: 3054,
    tema: "Fusible - Inconveniente principal",
    texto: "¿Cuál es el principal inconveniente de los fusibles frente a los magnetotérmicos?",
    opciones: ["Tienen menor poder de corte.", "No protegen contra cortocircuitos.", "No son reutilizables, deben reemplazarse tras actuar.", "Son más voluminosos y caros."],
    correctaTexto: "No son reutilizables, deben reemplazarse tras actuar.",
    explicacion: "El principal inconveniente del fusible es que no es reutilizable: una vez que se funde el hilo metálico debe reemplazarse. Los magnetotérmicos, en cambio, pueden rearmarse simplemente accionando la palanca."
  },

  // ========== SECCIÓN 3.8: CONTACTOS DIRECTOS E INDIRECTOS ==========

  {
    id: 3055,
    tema: "Contacto directo - Definición",
    texto: "¿Qué es un contacto directo en una instalación eléctrica?",
    opciones: ["El contacto con una masa metálica que tiene fallo de aislamiento.", "El contacto de una persona con una parte activa de la instalación (conductores, bornes, etc.).", "El contacto con el cable de puesta a tierra.", "El contacto con el interruptor diferencial."],
    correctaTexto: "El contacto de una persona con una parte activa de la instalación (conductores, bornes, etc.).",
    explicacion: "El contacto directo se produce cuando alguien entra en contacto con una parte activa de la instalación, es decir, con conductores en tensión, bornes, etc. Es el contacto más peligroso."
  },

  {
    id: 3056,
    tema: "Contacto indirecto - Definición",
    texto: "¿Cuándo se produce un contacto indirecto?",
    opciones: ["Cuando se toca un conductor en tensión directamente.", "Cuando se entra en contacto con una masa que no debería tener tensión, pero la tiene por un fallo de aislamiento.", "Cuando se toca el neutro de la instalación.", "Cuando se usa un aparato eléctrico sin guantes."],
    correctaTexto: "Cuando se entra en contacto con una masa que no debería tener tensión, pero la tiene por un fallo de aislamiento.",
    explicacion: "El contacto indirecto ocurre cuando alguien entra en contacto con una masa (carcasa metálica de un aparato) que no debería tener tensión pero que, por un fallo de aislamiento, sí la tiene. Ej: tocar la lavadora cuando hay un fallo interno."
  },

  {
    id: 3057,
    tema: "Contactos - ITC que los regula",
    texto: "¿Qué ITC del REBT define las medidas de protección contra los choques eléctricos por contacto directo e indirecto?",
    opciones: ["ITC-BT-17.", "ITC-BT-21.", "ITC-BT-22.", "ITC-BT-24."],
    correctaTexto: "ITC-BT-24.",
    explicacion: "Las medidas de protección contra los choques eléctricos vienen definidas por la ITC-BT-24 del REBT. Esta instrucción trata tanto los contactos directos como los contactos indirectos."
  },

  {
    id: 3058,
    tema: "Contactos directos - Medidas de protección",
    texto: "¿Cuáles son las medidas de protección contra los contactos directos?",
    opciones: ["Solo el uso de guantes y calzado aislante.", "Aislamiento de partes activas, barreras/envolventes, obstáculos, alejamiento y diferencial residual.", "Solo el interruptor magnetotérmico.", "Únicamente la puesta a tierra."],
    correctaTexto: "Aislamiento de partes activas, barreras/envolventes, obstáculos, alejamiento y diferencial residual.",
    explicacion: "Las medidas contra contactos directos incluyen: aislamiento de las partes activas, barreras o envolventes, obstáculos, puesta fuera de alcance por alejamiento, y protección complementaria por dispositivos de corriente diferencial residual."
  },

  {
    id: 3059,
    tema: "Contactos - Sistema de distribución en España",
    texto: "¿Cuál es el sistema de distribución predominante en España para instalaciones de baja tensión?",
    opciones: ["Sistema IT.", "Sistema TN.", "Sistema TT.", "Sistema TR."],
    correctaTexto: "Sistema TT.",
    explicacion: "Las redes de distribución en España están formadas principalmente por el sistema TT, aunque también existen los sistemas IT y TN. En el sistema TT, el centro de transformación y todas las masas constan de una toma a tierra independiente."
  },

  // ========== SECCIÓN 3.9: SOBRETENSIONES ==========

  {
    id: 3060,
    tema: "Sobretensiones - Tipos (TEST OFICIAL)",
    texto: "Las sobretensiones pueden ser:",
    opciones: ["Suaves o intensas.", "Fuertes o flojas.", "Transitorias o permanentes.", "De tensión o de intensidad."],
    correctaTexto: "Transitorias o permanentes.",
    explicacion: "Existen dos tipos de sobretensiones: transitorias (corta duración, medidas en ms, causadas por conmutaciones, maniobras en la red o rayos) y permanentes (cuando se rompe el neutro, derivando en una descompensación de la línea)."
  },

  {
    id: 3061,
    tema: "Sobretensiones transitorias - Causas",
    texto: "¿Cuáles son las causas de las sobretensiones transitorias?",
    opciones: ["La rotura del neutro de la línea.", "Corrosión de los conductores o envejecimiento del aislamiento.", "Conmutaciones, maniobras en la red o impacto de un rayo.", "Sobrecargas prolongadas en la instalación."],
    correctaTexto: "Conmutaciones, maniobras en la red o impacto de un rayo.",
    explicacion: "Las sobretensiones transitorias tienen poca duración (ms) y son producidas por conmutaciones, maniobras en la red eléctrica o por el impacto de un rayo. Provocan un pico de tensión que el equipo puede no soportar."
  },

  {
    id: 3062,
    tema: "Sobretensiones permanentes - Causa",
    texto: "¿Cuál es la causa de las sobretensiones permanentes?",
    opciones: ["El impacto de rayos sobre la línea.", "La rotura del neutro, que deriva en una descompensación de la línea.", "El uso simultáneo de muchos aparatos.", "La variación de frecuencia de la red."],
    correctaTexto: "La rotura del neutro, que deriva en una descompensación de la línea.",
    explicacion: "Las sobretensiones permanentes suceden cuando se rompe el neutro. El valor pico es menor que en la transitoria, pero deriva en una descompensación de la línea que reduce la vida útil de los equipos o provoca su rotura."
  },

  {
    id: 3063,
    tema: "Sobretensiones - Transistores/varistores",
    texto: "¿Cómo funciona un transistor/varistor para proteger contra sobretensiones transitorias?",
    opciones: ["Interrumpe el circuito cuando detecta sobretensión.", "Se conecta en serie en la línea para absorber la sobretensión.", "Se conecta en paralelo y deriva la corriente de sobretensión a tierra cuando hay un pico de tensión.", "Aumenta la resistencia del circuito para limitar la tensión."],
    correctaTexto: "Se conecta en paralelo y deriva la corriente de sobretensión a tierra cuando hay un pico de tensión.",
    explicacion: "El transistor/varistor se conecta a la línea en paralelo y tiene una toma a tierra. Cuando todo funciona bien, no actúa. Cuando se produce un pico de tensión, baja la frecuencia de la línea y deriva la corriente a tierra, protegiendo los equipos."
  },

  // ========== SECCIÓN 3.10: PUESTA A TIERRA ==========

  {
    id: 3064,
    tema: "Puesta a tierra - Función (TEST OFICIAL)",
    texto: "Una puesta a tierra:",
    opciones: ["Envía electricidad de la tierra al circuito.", "Deriva una corriente de fuga del circuito a la tierra.", "No sirve para nada.", "Tiene un cable rojo y azul."],
    correctaTexto: "Deriva una corriente de fuga del circuito a la tierra.",
    explicacion: "La puesta a tierra deriva una posible corriente de fuga a tierra, de forma que una persona que entre en contacto con la parte metálica no se electrocute. El cable de tierra es de color verde y amarillo."
  },

  {
    id: 3065,
    tema: "Puesta a tierra - Color del cable",
    texto: "¿De qué color es el cable de la puesta a tierra?",
    opciones: ["Rojo y negro.", "Azul y blanco.", "Verde y amarillo.", "Naranja y gris."],
    correctaTexto: "Verde y amarillo.",
    explicacion: "El cable de puesta a tierra es de color verde y amarillo. Este color es obligatorio y normalizado para identificar el conductor de protección (tierra) en toda instalación eléctrica de baja tensión."
  },

  {
    id: 3066,
    tema: "Puesta a tierra - Electrodo o pica",
    texto: "¿Qué es el electrodo de tierra o pica?",
    opciones: ["El cable verde-amarillo que une los aparatos.", "La barra de conexión en la caja de contadores.", "Un elemento de material metálico enterrado bajo tierra.", "El borne principal de puesta a tierra."],
    correctaTexto: "Un elemento de material metálico enterrado bajo tierra.",
    explicacion: "El electrodo de tierra o pica es un elemento de material metálico que está enterrado bajo tierra. Es el elemento que hace el contacto con el terreno y establece la conexión física de la instalación con la tierra."
  },

  {
    id: 3067,
    tema: "REBT - ITCs de protección (TEST OFICIAL)",
    texto: "Las ITC que explican los métodos de protección son:",
    opciones: ["De la ITC-BT-21 a la 24.", "De la ITC-BT-15 a la 19.", "La ITC-BT-25.", "Todo el REBT."],
    correctaTexto: "De la ITC-BT-21 a la 24.",
    explicacion: "Las Instrucciones Técnicas Complementarias que tratan sobre los equipos de protección van desde la ITC-BT-21 a la ITC-BT-24: ITC-BT-21 (tubos y canales protectoras), ITC-BT-22 (sobreintensidades), ITC-BT-23 (sobretensiones), ITC-BT-24 (contactos directos e indirectos)."
  }

];
