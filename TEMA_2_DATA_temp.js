/* =========================================================
   TEMA 2: CIRCUITOS ELÉCTRICOS BÁSICOS EN INTERIORES (v2.0)
   67 preguntas: cobertura completa del temario
   Basado en material oficial Universae
   ========================================================= */

const TEMA_2_DATA = [
  // ========== SECCIÓN 2.1: INTRODUCCIÓN A LAS INSTALACIONES ==========

  {
    id: 2001,
    tema: "Definición de instalación eléctrica",
    texto: "¿Cuál es la definición correcta de una instalación eléctrica?",
    opciones: ["Un conjunto aleatorio de conductores sin propósito específico.", "Un conjunto de elementos que permite transportar y distribuir la electricidad desde donde se suministra hasta los equipos apropiados.", "Solo un sistema de protección.", "Un cable enterrado bajo tierra."],
    correctaTexto: "Un conjunto de elementos que permite transportar y distribuir la electricidad desde donde se suministra hasta los equipos apropiados.",
    explicacion: "Una instalación eléctrica es un sistema integrado que transporta y distribuye energía eléctrica de forma segura, desde la fuente (red pública o generador) hasta los receptores (electrodomésticos, iluminación, etc.)."
  },

  {
    id: 2002,
    tema: "Tipos de instalaciones - Abiertas",
    texto: "¿Qué caracteriza a una instalación eléctrica abierta?",
    opciones: ["Los conductores están ocultos en muro.", "Los conductores son visibles en la superficie.", "Solo se usa en exteriores.", "Requiere armadura metálica obligatoria."],
    correctaTexto: "Los conductores son visibles en la superficie.",
    explicacion: "En instalaciones abiertas, los conductores son visibles y están montados sobre la pared, techo o cualquier superficie aparente, facilitando su inspección y mantenimiento."
  },

  {
    id: 2003,
    tema: "Tipos de instalaciones - Aparentes",
    texto: "¿Cuál es la diferencia entre instalación aparente y abierta?",
    opciones: ["No hay diferencia, son sinónimos.", "Aparente utiliza canales o bandejas visibles, abierta tiene conductores directamente en la pared.", "Aparente es subterránea, abierta es aérea.", "Aparente requiere tubo, abierta no."],
    correctaTexto: "Aparente utiliza canales o bandejas visibles, abierta tiene conductores directamente en la pared.",
    explicacion: "La instalación aparente emplea canales, bandejas o molduras visibles para conducir los cables. La abierta es más simple: conductores fijados directamente sobre superficies."
  },

  {
    id: 2004,
    tema: "Tipos de instalaciones - Ocultas",
    texto: "¿Cómo se realiza una instalación eléctrica oculta?",
    opciones: ["Los conductores se pintan de color oscuro.", "Se utilizan paneles o falsos plafones para disimular.", "Los conductores se introducen en tubos o canaletas dentro de muros, pisos o techos.", "Se entierra toda la instalación."],
    correctaTexto: "Los conductores se introducen en tubos o canaletas dentro de muros, pisos o techos.",
    explicacion: "En instalaciones ocultas, los conductores están protegidos dentro de tuberías, canaletas o conductos embebidos en la estructura del edificio, quedando invisibles desde el exterior."
  },

  {
    id: 2005,
    tema: "Tipos de instalaciones - Ahogadas",
    texto: "¿Qué se entiende por instalación eléctrica ahogada?",
    opciones: ["La instalación que está sumergida en agua.", "Los conductores están protegidos por hormigón o material similar embebidos en muros, pisos u hormigón.", "Una instalación defectuosa que requiere reparación inmediata.", "Instalación temporal de emergencia."],
    correctaTexto: "Los conductores están protegidos por hormigón o material similar embebidos en muros, pisos u hormigón.",
    explicacion: "En instalaciones ahogadas, los conductores se instalan antes de que se viertan muros o pisos, quedando embebidos en el hormigón o material de construcción, ofreciendo máxima protección mecánica."
  },

  // ========== SECCIÓN 2.2: MAGNITUDES Y UNIDADES ELÉCTRICAS ==========

  {
    id: 2006,
    tema: "Magnitud - Resistencia",
    texto: "¿Cuál es la unidad de medida de la resistencia eléctrica?",
    opciones: ["Voltio (V).", "Amperio (A).", "Ohmio (Ω).", "Vatio (W)."],
    correctaTexto: "Ohmio (Ω).",
    explicacion: "La resistencia se mide en ohmios (Ω). Representa la oposición que presenta un material al paso de la corriente eléctrica. Un ohmio es la resistencia que permite el paso de 1 amperio bajo 1 voltio de tensión."
  },

  {
    id: 2007,
    tema: "Magnitud - Tensión",
    texto: "¿Qué es la tensión eléctrica y cuál es su unidad?",
    opciones: ["La cantidad de corriente que circula; se mide en amperios.", "La diferencia de potencial eléctrico entre dos puntos; se mide en voltios.", "La resistencia total del circuito; se mide en ohmios.", "La energía consumida; se mide en vatios."],
    correctaTexto: "La diferencia de potencial eléctrico entre dos puntos; se mide en voltios.",
    explicacion: "La tensión (voltaje) es la diferencia de potencial que impulsa el flujo de corriente. Se mide en voltios (V). En viviendas españolas es típicamente 230V en monofásico y 400V en trifásico."
  },

  {
    id: 2008,
    tema: "Magnitud - Intensidad",
    texto: "¿Qué mide la intensidad eléctrica y cuál es su unidad?",
    opciones: ["La cantidad de carga que fluye por unidad de tiempo; se mide en amperios.", "La resistencia del conductor; se mide en ohmios.", "El voltaje disponible; se mide en voltios.", "La energía total usada; se mide en julios."],
    correctaTexto: "La cantidad de carga que fluye por unidad de tiempo; se mide en amperios.",
    explicacion: "La intensidad es la cantidad de corriente que circula. Se mide en amperios (A). Es fundamental para seleccionar conductores adecuados y dispositivos de protección."
  },

  {
    id: 2009,
    tema: "Magnitud - Potencia",
    texto: "¿Cuál es la definición y unidad de potencia eléctrica?",
    opciones: ["La resistencia al paso de corriente; en ohmios.", "La energía total disponible; en julios.", "La velocidad de consumo de energía eléctrica; en vatios.", "La duración del suministro; en segundos."],
    correctaTexto: "La velocidad de consumo de energía eléctrica; en vatios.",
    explicacion: "La potencia (P) es la velocidad a la que se consume energía. Se mide en vatios (W). Se calcula como P = U × I. También se usan kilovatios (kW) = 1000 W."
  },

  {
    id: 2010,
    tema: "Magnitud - Energía",
    texto: "¿Qué es la energía eléctrica y cuál es su unidad más común?",
    opciones: ["La velocidad de gasto de potencia; en vatios.", "La cantidad total de corriente que fluye; en amperios.", "La energía total consumida a lo largo del tiempo; en kilovatio-hora (kWh).", "La resistencia del circuito; en ohmios."],
    correctaTexto: "La energía total consumida a lo largo del tiempo; en kilovatio-hora (kWh).",
    explicacion: "La energía es potencia multiplicada por tiempo: E = P × t. Se mide en kilovatio-hora (kWh) en el contexto doméstico. 1 kWh = 1000 W × 1 hora = 3,600,000 julios."
  },

  {
    id: 2011,
    tema: "Magnitud - Frecuencia",
    texto: "¿Cuál es la frecuencia de la corriente eléctrica en España?",
    opciones: ["50 Hz (hertzios).", "60 Hz (hertzios).", "100 Hz (hertzios).", "30 Hz (hertzios)."],
    correctaTexto: "50 Hz (hertzios).",
    explicacion: "La frecuencia de la red eléctrica española es de 50 Hz, lo que significa que la corriente alterna cambia de dirección 50 veces por segundo. Europa utiliza 50 Hz; América usa 60 Hz."
  },

  // ========== SECCIÓN 2.3: ASOCIACIONES EN LOS CIRCUITOS ==========

  {
    id: 2012,
    tema: "Circuito en serie - Definición",
    texto: "¿Cuál es la característica principal de un circuito en serie?",
    opciones: ["Los elementos están conectados en paralelo.", "El terminal de salida de un elemento se conecta al terminal de entrada del siguiente.", "Todos los elementos comparten la misma tensión.", "No existe camino único para la corriente."],
    correctaTexto: "El terminal de salida de un elemento se conecta al terminal de entrada del siguiente.",
    explicacion: "En serie, los elementos forman una cadena: la salida de uno es la entrada del siguiente. La corriente es la misma en todos, pero la tensión se distribuye entre ellos."
  },

  {
    id: 2013,
    tema: "Circuito en serie - Resistencia equivalente",
    texto: "¿Cómo se calcula la resistencia equivalente en un circuito en serie?",
    opciones: ["Req = R1 + R2 + R3 + ... (suma todas).", "Req = (R1 × R2) / (R1 + R2).", "Req = 1/(1/R1 + 1/R2 + 1/R3).", "Req = √(R1² + R2²)."],
    correctaTexto: "Req = R1 + R2 + R3 + ... (suma todas).",
    explicacion: "En serie, la resistencia equivalente es la suma de todas las resistencias. Si tienes R1=10Ω, R2=20Ω, R3=30Ω, la resistencia total será Req=60Ω."
  },

  {
    id: 2014,
    tema: "Circuito en paralelo - Definición",
    texto: "¿Cuál es la característica principal de un circuito en paralelo?",
    opciones: ["Los elementos forman una cadena secuencial.", "Los terminales de entrada de todos los elementos están conectados juntos, y los de salida también.", "Solo permite un camino para la corriente.", "La corriente es idéntica en todos los elementos."],
    correctaTexto: "Los terminales de entrada de todos los elementos están conectados juntos, y los de salida también.",
    explicacion: "En paralelo, todos los elementos comparten la misma tensión (están en los mismos puntos). La corriente total se divide entre los elementos."
  },

  {
    id: 2015,
    tema: "Circuito en paralelo - Resistencia equivalente",
    texto: "¿Cómo se calcula la resistencia equivalente en un circuito en paralelo?",
    opciones: ["Req = R1 + R2 + R3 + ...", "Req = (R1 × R2) / (R1 + R2) para 2 resistencias.", "Req = 1 / (1/R1 + 1/R2 + 1/R3)", "Ambas opciones b) y c) son correctas."],
    correctaTexto: "Ambas opciones b) y c) son correctas.",
    explicacion: "En paralelo: Req = 1/(1/R1 + 1/R2 + 1/R3...). Para solo 2 resistencias, se simplifica: Req = (R1×R2)/(R1+R2). La resistencia equivalente es siempre menor que la más pequeña."
  },

  {
    id: 2016,
    tema: "Circuito mixto",
    texto: "¿Qué es un circuito mixto?",
    opciones: ["Un circuito que solo usa corriente continua.", "Un circuito que mezcla elementos en serie y en paralelo.", "Un circuito sin resistencias.", "Un circuito conectado a dos fuentes de tensión."],
    correctaTexto: "Un circuito que mezcla elementos en serie y en paralelo.",
    explicacion: "Un circuito mixto combina asociaciones en serie y en paralelo. Para resolverlo, primero se calculan las resistencias equivalentes de las secciones en paralelo, luego se suman las series."
  },

  // ========== SECCIÓN 2.4: CÁLCULO DE LÍNEAS ==========

  {
    id: 2017,
    tema: "Capacidad térmica",
    texto: "¿Qué es la capacidad térmica en el contexto de conductores eléctricos?",
    opciones: ["La temperatura ambiente de la instalación.", "La intensidad máxima de corriente que puede circular sin que el conductor se deteriore.", "La resistencia mecánica del cable.", "La velocidad de conductancia."],
    correctaTexto: "La intensidad máxima de corriente que puede circular sin que el conductor se deteriore.",
    explicacion: "La capacidad térmica define la intensidad máxima admisible de un conductor. Depende del tipo de aislante (PVC=70°C, XLPE=90°C) y del método de instalación."
  },

  {
    id: 2018,
    tema: "Temperatura ambiente en instalaciones interiores",
    texto: "¿Cuál es la temperatura ambiente estándar considerada en cálculos de instalaciones interiores?",
    opciones: ["30°C.", "40°C.", "50°C.", "60°C."],
    correctaTexto: "40°C.",
    explicacion: "En el REBT se asume una temperatura ambiente de 40°C para instalaciones interiores en viviendas. Para líneas subterráneas se asume 25°C. Estos valores son referencias de cálculo."
  },

  {
    id: 2019,
    tema: "Caída de tensión - Definición",
    texto: "¿Qué significa caída de tensión en una línea?",
    opciones: ["La energía convertida en calor por la resistencia de la línea.", "La pérdida de tensión en el camino desde la fuente hasta el receptor.", "Un cortocircuito en la instalación.", "La disminución de frecuencia."],
    correctaTexto: "La pérdida de tensión en el camino desde la fuente hasta el receptor.",
    explicacion: "La caída de tensión es ΔU = I × R. Conforme fluye corriente por un conductor con resistencia, se pierde tensión. El REBT establece límites (3% en circuitos interiores, 5% en distribución)."
  },

  {
    id: 2020,
    tema: "Caída de tensión - Límites REBT",
    texto: "¿Cuál es el límite máximo de caída de tensión permitido por el REBT en circuitos interiores?",
    opciones: ["1%.", "2%.", "3%.", "5%."],
    correctaTexto: "3%.",
    explicacion: "El REBT especifica que la caída de tensión en circuitos interiores de viviendas no debe exceder 3%. En derivaciones individuales y líneas repartidoras, el límite es 1.5%."
  },

  {
    id: 2021,
    tema: "Fórmula de sección por caída de tensión",
    texto: "¿Cuál es la fórmula correcta para calcular la sección de un conductor por caída de tensión en corriente monofásica?",
    opciones: ["S = ρ × L / R", "S = (2 × ρ × L × P) / (ΔU × U)", "S = I / (ρ × L)", "S = U / (I × R)"],
    correctaTexto: "S = (2 × ρ × L × P) / (ΔU × U)",
    explicacion: "Donde: S=sección (mm²), ρ=resistividad del material, L=longitud (m), P=potencia (W), ΔU=caída de tensión permitida (V), U=tensión de alimentación (V)."
  },

  {
    id: 2022,
    tema: "Fórmula para corriente trifásica",
    texto: "¿Cuál es la fórmula de sección por caída de tensión en corriente trifásica?",
    opciones: ["S = (2 × ρ × L × P) / (ΔU × U)", "S = (√3 × ρ × L × P) / (ΔU × U)", "S = (ρ × L × P) / (ΔU × U)", "S = (4 × ρ × L × P) / (ΔU × U)"],
    correctaTexto: "S = (√3 × ρ × L × P) / (ΔU × U)",
    explicacion: "Para trifásica, aparece √3 (≈1.732) en lugar de 2. Esto refleja que en trifásica, la caída es menor que en monofásica para la misma potencia."
  },

  {
    id: 2023,
    tema: "Factor de potencia",
    texto: "¿Qué representa el factor de potencia (cos φ)?",
    opciones: ["La resistencia del conductor.", "La relación entre potencia activa y potencia aparente.", "La intensidad máxima de corriente.", "La eficiencia del transformador."],
    correctaTexto: "La relación entre potencia activa y potencia aparente.",
    explicacion: "El cos φ varía de 0 a 1. Indica qué porcentaje de la potencia aparente se convierte en trabajo útil. Motores y equipos inductivos tienen cos φ < 1 (típicamente 0.8-0.9)."
  },

  {
    id: 2024,
    tema: "Triángulo de potencias",
    texto: "¿Qué magnitudes conforman el triángulo de potencias?",
    opciones: ["Solo potencia activa P.", "Potencia activa (P), potencia reactiva (Q) y potencia aparente (S).", "Voltaje, corriente e intensidad.", "Resistencia, reactancia e impedancia."],
    correctaTexto: "Potencia activa (P), potencia reactiva (Q) y potencia aparente (S).",
    explicacion: "El triángulo de potencias muestra: P (vatios, trabajo útil), Q (VAR reactivos, energía reactiva), S (VA aparentes). S² = P² + Q². El ángulo φ se obtiene: cos φ = P/S."
  },

  // ========== SECCIÓN 2.5: ELEMENTOS Y MECANISMOS ==========

  {
    id: 2025,
    tema: "Acometida",
    texto: "¿Qué es la acometida en una instalación eléctrica?",
    opciones: ["El interruptor general de la vivienda.", "El enlace entre la red de distribución pública y la caja general de protección del cliente.", "El conductor neutro de la instalación.", "El punto de conexión entre el medidor y los circuitos."],
    correctaTexto: "El enlace entre la red de distribución pública y la caja general de protección del cliente.",
    explicacion: "La acometida está compuesta por tres cables (fase, neutro y protección/tierra) que unen la red de distribución pública con la caja general de protección en la vivienda del usuario."
  },

  {
    id: 2026,
    tema: "Caja general de protección",
    texto: "¿Cuál es la función de la caja general de protección?",
    opciones: ["Medir el consumo de electricidad.", "Contener los fusibles o protecciones de la línea repartidora.", "Regular la tensión de entrada.", "Convertir la corriente trifásica en monofásica."],
    correctaTexto: "Contener los fusibles o protecciones de la línea repartidora.",
    explicacion: "La caja general de protección contiene tres fusibles (uno por fase en trifásica) que protegen la línea repartidora. Está ubicada en la entrada de la vivienda, accesible para el distribuidor."
  },

  {
    id: 2027,
    tema: "Línea repartidora",
    texto: "¿Qué es la línea repartidora en una instalación?",
    opciones: ["El cable que va desde la caja general de protección hasta el contador.", "La línea que distribuye electricidad a todos los circuitos de la vivienda.", "El cable de puesta a tierra.", "El conductor neutro de la acometida."],
    correctaTexto: "El cable que va desde la caja general de protección hasta el contador.",
    explicacion: "La línea repartidora transporta la energía desde la caja general de protección hasta el contador de energía. Esta línea está protegida por los fusibles de la caja general."
  },

  {
    id: 2028,
    tema: "Contador de energía",
    texto: "¿Cuál es la función del contador en una instalación eléctrica?",
    opciones: ["Proteger contra sobrecargas.", "Medir la energía eléctrica consumida por la vivienda.", "Regular la tensión de entrada.", "Desconectar automáticamente en caso de fuga."],
    correctaTexto: "Medir la energía eléctrica consumida por la vivienda.",
    explicacion: "El contador registra el consumo de energía en kWh. Es responsabilidad de la empresa distribuidora. Proporciona los datos para facturación al usuario."
  },

  {
    id: 2029,
    tema: "Derivación individual",
    texto: "¿Qué es la derivación individual?",
    opciones: ["Un circuito de iluminación de una habitación.", "El cable que une el contador con el cuadro general de mando y protección (CGMP).", "Un cable de puesta a tierra.", "La línea hacia un dispositivo específico."],
    correctaTexto: "El cable que une el contador con el cuadro general de mando y protección (CGMP).",
    explicacion: "La derivación individual es la línea privada que parte del contador y llega al cuadro general de mando y protección (CGMP) de la vivienda. En ella se instalan los interruptores de control de potencia (ICP)."
  },

  {
    id: 2030,
    tema: "Interruptor de control de potencia (ICP)",
    texto: "¿Cuál es la función del interruptor de control de potencia?",
    opciones: ["Proteger contra cortocircuitos.", "Limitar la potencia contratada, desconectando si se supera.", "Medir la energía consumida.", "Convertir corriente alterna en continua."],
    correctaTexto: "Limitar la potencia contratada, desconectando si se supera.",
    explicacion: "El ICP es un dispositivo automático que desconecta la instalación si la potencia demandada supera la contratada. Protege la instalación de sobrecargas y está regulado por la compañía suministradora."
  },

  {
    id: 2031,
    tema: "Cuadro general de mando y protección",
    texto: "¿Qué componentes típicos contiene un cuadro general de mando y protección (CGMP)?",
    opciones: ["Solo fusibles.", "Interruptor general automático, pequeños interruptores automáticos (PIAs) y diferenciales.", "Solo un transformador.", "Solo receptores eléctricos."],
    correctaTexto: "Interruptor general automático, pequeños interruptores automáticos (PIAs) y diferenciales.",
    explicacion: "El CGMP contiene: IGA (interruptor general automático), diferenciales para protección contra fugas a tierra, PIAs para proteger cada circuito, y a veces relés de control."
  },

  {
    id: 2032,
    tema: "Protección diferencial",
    texto: "¿Cuál es la función de un diferencial?",
    opciones: ["Proteger contra cortocircuitos.", "Detectar fugas de corriente a tierra y desconectar automáticamente.", "Limitar la tensión de entrada.", "Filtrar armónicos."],
    correctaTexto: "Detectar fugas de corriente a tierra y desconectar automáticamente.",
    explicacion: "El diferencial compara la corriente que entra con la que sale. Si hay diferencia (fuga a tierra), desconecta en milisegundos. Protege contra contactos accidentales (electrocución)."
  },

  {
    id: 2033,
    tema: "Pequeño interruptor automático (PIA)",
    texto: "¿Cuál es la función de un pequeño interruptor automático (PIA)?",
    opciones: ["Detectar fugas a tierra.", "Proteger cada circuito contra cortocircuitos y sobrecargas.", "Limitar la potencia total contratada.", "Medir energía consumida."],
    correctaTexto: "Proteger cada circuito contra cortocircuitos y sobrecargas.",
    explicacion: "Cada circuito (iluminación, enchufes, cocina, etc.) está protegido por un PIA dimensionado a su corriente nominal. Si la corriente supera ese valor, el PIA se abre."
  },

  // ========== SECCIÓN 2.6: CANALIZACIONES Y TUBOS ==========

  {
    id: 2034,
    tema: "Canalizaciones bajo tubos",
    texto: "¿Cuál es la función de los tubos de canalización?",
    opciones: ["Decorar la instalación.", "Proteger mecánicamente los conductores y permitir su reemplazo futuro.", "Mejorar la conductividad eléctrica.", "Medir la tensión de la instalación."],
    correctaTexto: "Proteger mecánicamente los conductores y permitir su reemplazo futuro.",
    explicacion: "Los tubos canalización (generalmente PVC) protegen los conductores contra daños mecánicos. El diámetro del tubo debe elegirse de forma que los cables ocupen menos del 40% de su sección."
  },

  {
    id: 2035,
    tema: "Tipos de tubos",
    texto: "¿Cuáles son los tipos principales de tubos utilizados en instalaciones interiores?",
    opciones: ["Solo tubos metálicos rígidos.", "Tubos rígidos (PVC) y tubos flexibles (corrugados).", "Solo tubos de papel.", "Tubos cerámicos únicamente."],
    correctaTexto: "Tubos rígidos (PVC) y tubos flexibles (corrugados).",
    explicacion: "Tubos rígidos (PVC): usados en paredes, suelos, techos. Tubos flexibles (corrugados): para zonas con curvas o cambios de dirección. Tubos metálicos: para instalaciones especiales."
  },

  {
    id: 2036,
    tema: "Bandejas portacables",
    texto: "¿En qué situaciones se utilizan bandejas portacables en lugar de tubos?",
    opciones: ["Solo en instalaciones industriales nunca en viviendas.", "En instalaciones visibles (aparentes) donde se desea facilitar el acceso y el mantenimiento de múltiples cables.", "En instalaciones subterráneas únicamente.", "Como sustituto obligatorio del tubo en todas partes."],
    correctaTexto: "En instalaciones visibles (aparentes) donde se desea facilitar el acceso y el mantenimiento de múltiples cables.",
    explicacion: "Las bandejas portacables se montan en paredes o techos aparentes, permitiendo organizar múltiples conductores. Son muy utilizadas en talleres, garajes y fachadas."
  },

  // ========== SECCIÓN 2.7-2.8: RECEPTORES Y MECANISMOS ==========

  {
    id: 2037,
    tema: "Receptores eléctricos",
    texto: "¿Qué es un receptor eléctrico?",
    opciones: ["Un dispositivo que genera electricidad.", "Un aparato que transforma la energía eléctrica en otro tipo de energía útil.", "Un cable de distribución.", "Un dispositivo de protección."],
    correctaTexto: "Un aparato que transforma la energía eléctrica en otro tipo de energía útil.",
    explicacion: "Los receptores convierten energía eléctrica en energía útil: bombillas (luz), motores (movimiento), resistencias (calor), etc. Son los \"consumidores\" de la instalación."
  },

  {
    id: 2038,
    tema: "Tipos de enchufes",
    texto: "¿Cuál es la diferencia entre un enchufe con toma de tierra y sin toma de tierra?",
    opciones: ["El enchufe con tierra es más caro.", "El enchufe con tierra tiene una tercera conexión para protección, el otro solo tiene fase y neutro.", "No hay diferencia eléctrica.", "El sin tierra es más seguro."],
    correctaTexto: "El enchufe con tierra tiene una tercera conexión para protección, el otro solo tiene fase y neutro.",
    explicacion: "Enchufes con toma de tierra (3 contactos): fase, neutro y tierra. Enchufes sin tierra (2 contactos): solo fase y neutro. La tierra proporciona protección contra contactos indirectos."
  },

  {
    id: 2039,
    tema: "Interruptores convencionales",
    texto: "¿Cuál es la función de un interruptor convencional?",
    opciones: ["Proteger contra cortocircuitos.", "Abrir o cerrar un circuito manualmente para encender/apagar receptores.", "Medir la energía consumida.", "Limitar la potencia de entrada."],
    correctaTexto: "Abrir o cerrar un circuito manualmente para encender/apagar receptores.",
    explicacion: "Los interruptores permiten el control manual de circuitos. Tienen dos posiciones: abierto (corta el circuito) y cerrado (permite el paso de corriente)."
  },

  {
    id: 2040,
    tema: "Conmutadores",
    texto: "¿Cuál es la diferencia entre un interruptor y un conmutador?",
    opciones: ["Son lo mismo, solo cambio de nombre.", "El interruptor apaga/enciende desde un punto; el conmutador permite controlar desde dos puntos diferentes.", "El conmutador es más caro.", "El conmutador protege contra sobrecarga."],
    correctaTexto: "El interruptor apaga/enciende desde un punto; el conmutador permite controlar desde dos puntos diferentes.",
    explicacion: "Conmutador simple: controla una luz desde dos lugares. Conmutador doble (o cruzado): permite control desde 3 o más puntos. Muy usado en escaleras y pasillos."
  },

  {
    id: 2041,
    tema: "Pulsadores",
    texto: "¿Cuál es la función de un pulsador en instalaciones eléctricas?",
    opciones: ["Encender una luz permanentemente.", "Activar un circuito de forma temporal mientras se mantiene pulsado.", "Proteger contra sobrecargas.", "Medir intensidad de corriente."],
    correctaTexto: "Activar un circuito de forma temporal mientras se mantiene pulsado.",
    explicacion: "Los pulsadores son interruptores momentáneos: solo permiten paso de corriente mientras están pulsados. Al soltarlos, se abre el circuito. Se usan en timbres, pilotos de control, etc."
  },

  {
    id: 2042,
    tema: "Interruptores reguladores",
    texto: "¿Qué permite hacer un interruptor regulador o atenuador (dimmer)?",
    opciones: ["Solo encender o apagar.", "Variar la intensidad luminosa de una bombilla de forma continua.", "Proteger contra cortocircuitos.", "Amplificar la señal eléctrica."],
    correctaTexto: "Variar la intensidad luminosa de una bombilla de forma continua.",
    explicacion: "Los reguladores o dimmers varían la tensión suministrada a la bombilla, controlando su intensidad luminosa. Son útiles para crear ambientes y ahorrar energía."
  },

  // ========== SECCIÓN 2.9-2.12: SIMBOLOGÍA Y ESQUEMAS ==========

  {
    id: 2043,
    tema: "Simbología eléctrica - Función",
    texto: "¿Cuál es la importancia de la simbología eléctrica normalizada?",
    opciones: ["Es solo decorativa.", "Permite la comunicación clara y universal entre técnicos al interpretar esquemas eléctricos.", "Cambia según cada país.", "No es necesaria en instalaciones modernas."],
    correctaTexto: "Permite la comunicación clara y universal entre técnicos al interpretar esquemas eléctricos.",
    explicacion: "La simbología normalizada (según normas UNE, IEC) permite que cualquier técnico entienda un esquema. Usa símbolos estándar para cada componente (interruptores, lámparas, fusibles, etc.)."
  },

  {
    id: 2044,
    tema: "Símbolo de interruptor",
    texto: "En un esquema eléctrico, ¿cómo se representa un interruptor?",
    opciones: ["Como un círculo.", "Como una línea cortada perpendicular.", "Como una onda.", "Como una espiral."],
    correctaTexto: "Como una línea cortada perpendicular.",
    explicacion: "El símbolo del interruptor es una línea rota con una pequeña línea inclinada que indica el sentido de accionamiento. El símbolo varía ligeramente según el tipo (simple, conmutador, etc.)."
  },

  {
    id: 2045,
    tema: "Símbolo de resistencia",
    texto: "¿Cuál es el símbolo normalizado para una resistencia en un esquema eléctrico?",
    opciones: ["Un círculo relleno.", "Un rectángulo o un zig-zag.", "Una espiral.", "Una línea ondulada continua."],
    correctaTexto: "Un rectángulo o un zig-zag.",
    explicacion: "La resistencia se representa como un rectángulo (según norma europea IEC) o como un zig-zag (según norma americana). Ambos son válidos internacionalmente."
  },

  {
    id: 2046,
    tema: "Símbolo de fuente de tensión",
    texto: "¿Cómo se representa una fuente de tensión (batería) en un esquema?",
    opciones: ["Un círculo con una cruz.", "Dos líneas paralelas de diferente longitud.", "Un rectángulo.", "Una espiral cerrada."],
    correctaTexto: "Dos líneas paralelas de diferente longitud.",
    explicacion: "La batería o fuente de tensión se dibuja como dos líneas paralelas: una larga (terminal positivo) y una corta (terminal negativo). La tensión se especifica en voltios (V)."
  },

  {
    id: 2047,
    tema: "Símbolo de bombilla",
    texto: "En esquemas eléctricos, ¿cómo se representa una bombilla?",
    opciones: ["Como un rectángulo.", "Como un círculo con una cruz en el interior.", "Como una onda.", "Como una letra L."],
    correctaTexto: "Como un círculo con una cruz en el interior.",
    explicacion: "La bombilla (lámpara incandescente) se representa como un círculo con una cruz. Las bombillas fluorescentes y LED tienen símbolos ligeramente diferentes según la norma."
  },

  {
    id: 2048,
    tema: "Esquema funcional vs esquema unifila",
    texto: "¿Cuál es la diferencia entre un esquema funcional y un esquema unifila?",
    opciones: ["No hay diferencia, son sinónimos.", "El esquema funcional muestra el comportamiento del circuito; el unifila muestra cada conductor como una línea.", "El unifila es más antiguo.", "El funcional tiene más símbolos."],
    correctaTexto: "El esquema funcional muestra el comportamiento del circuito; el unifila muestra cada conductor como una línea.",
    explicacion: "Esquema funcional: muestra la función del circuito sin preocuparse por el aspecto físico. Esquema unifila: cada conductor es una línea; refleja la instalación real con todos sus detalles."
  },

  {
    id: 2049,
    tema: "Esquema multifila",
    texto: "¿Qué es un esquema multifila?",
    opciones: ["Un esquema que usa múltiples símbolos.", "Un esquema donde cada conductor (fase, neutro, tierra) se dibuja como una línea separada.", "Un esquema que solo muestra protecciones.", "Lo mismo que un esquema unifila."],
    correctaTexto: "Un esquema donde cada conductor (fase, neutro, tierra) se dibuja como una línea separada.",
    explicacion: "En esquema multifila se representan todos los conductores: fase, neutro, tierra, retorno, etc., como líneas separadas. Proporciona máximo detalle de la instalación."
  },

  {
    id: 2050,
    tema: "Interpretación de esquemas",
    texto: "¿Cuál es el primer paso para interpretar un esquema eléctrico?",
    opciones: ["Identificar los símbolos utilizados y su significado.", "Seguir aleatoriamente cada línea.", "Contar el número de símbolos.", "Medir las líneas del diagrama."],
    correctaTexto: "Identificar los símbolos utilizados y su significado.",
    explicacion: "Para interpretar un esquema: 1) Reconocer símbolos, 2) Identificar fuentes de energía, 3) Seguir el flujo de corriente, 4) Entender protecciones, 5) Comprender funcionamiento global."
  },

  {
    id: 2051,
    tema: "REBT - Reglamento Electrotécnico",
    texto: "¿Cuál es el propósito del Reglamento Electrotécnico de Baja Tensión (REBT)?",
    opciones: ["Decorar las instalaciones eléctricas.", "Establecer los requisitos técnicos y de seguridad para instalaciones de baja tensión.", "Solo aplica a industrias.", "Es opcional en viviendas."],
    correctaTexto: "Establecer los requisitos técnicos y de seguridad para instalaciones de baja tensión.",
    explicacion: "El REBT es una normativa de obligado cumplimiento en España que establece: requisitos de seguridad, métodos de cálculo, valores máximos de caída de tensión, protecciones necesarias, etc."
  },

  {
    id: 2052,
    tema: "ITC-BT (Instrucciones técnicas)",
    texto: "¿Qué son las ITC-BT en el contexto del REBT?",
    opciones: ["Normas opcionales para instalaciones.", "Instrucciones técnicas complementarias que detallan los requisitos del REBT.", "Solo aplican a instalaciones industriales.", "Son recomendaciones, no obligatorias."],
    correctaTexto: "Instrucciones técnicas complementarias que detallan los requisitos del REBT.",
    explicacion: "Las ITC-BT (Instrucciones Técnicas Complementarias de Baja Tensión) especifican detalles de cumplimiento del REBT. Ej: ITC-BT-19 (intensidades máximas), ITC-BT-23 (canalizaciones)."
  },

  {
    id: 2053,
    tema: "Documentación de una instalación",
    texto: "¿Qué documentación debe acompañar a una instalación eléctrica nueva?",
    opciones: ["Solo el recibo de pago.", "Proyectos, esquemas eléctricos, certificados de conformidad, manual de funcionamiento.", "Solo un dibujo del plano.", "No se necesita documentación."],
    correctaTexto: "Proyectos, esquemas eléctricos, certificados de conformidad, manual de funcionamiento.",
    explicacion: "Documentación obligatoria: memoria técnica, esquemas unifilares, certificado de conformidad del instalador, certificado de la compañía distribuidora, instrucciones de uso y mantenimiento."
  },

  {
    id: 2054,
    tema: "Continuidad de servicios",
    texto: "¿Por qué es importante diseñar instalaciones eléctricas con opciones de continuidad de servicios?",
    opciones: ["Es costumbre sin aplicación práctica.", "Asegura que los servicios esenciales funcionen incluso con averías parciales en la instalación.", "Solo para instalaciones comerciales.", "Aumenta innecesariamente los costos."],
    correctaTexto: "Asegura que los servicios esenciales funcionen incluso con averías parciales en la instalación.",
    explicacion: "Mediante derivaciones independientes, un corte en un circuito no afecta otros servicios. Ejemplo: que falle la iluminación de una estancia sin afectar enchufes o cocina."
  },

  {
    id: 2055,
    tema: "Previsión de carga",
    texto: "¿Qué es la previsión de carga en una instalación?",
    opciones: ["Guardar dinero para mantenimiento.", "Calcular la potencia máxima que se espera consumir para dimensionar adecuadamente la instalación.", "Medir el peso de los cables.", "Contar el número de dispositivos."],
    correctaTexto: "Calcular la potencia máxima que se espera consumir para dimensionar adecuadamente la instalación.",
    explicacion: "La previsión de carga estima: potencia para iluminación, enchufes (cocina, baños), climatización, etc. El REBT establece mínimos (100W/m² en viviendas). Esta potencia determina el diámetro de cables y protecciones."
  },

  {
    id: 2056,
    tema: "PIA - Protecci­ón de Sobrecarga",
    texto: "¿Cuál es la función principal de un PIA (Pequeño Interruptor Automático)?",
    opciones: ["Medir voltaje.", "Desconectar automáticamente ante sobrecargas o cortocircuitos.", "Aumentar la corriente del circuito.", "Controlar el brillo de la iluminación."],
    correctaTexto: "Desconectar automáticamente ante sobrecargas o cortocircuitos.",
    explicacion: "El PIA es un dispositivo automático que interrumpe el circuito cuando: 1) Hay sobrecarga (corriente supera su calibre) 2) Hay cortocircuito. Protege conductores y receptores de daños."
  },

  {
    id: 2057,
    tema: "Diferencial - Protección contra fugas",
    texto: "¿Cuál es la función de un interruptor diferencial?",
    opciones: ["Cambiar la velocidad de la corriente.", "Detectar fugas de corriente y desconectar el circuito para evitar electrocuciones.", "Aumentar la potencia disponible.", "Reducir el consumo energético."],
    correctaTexto: "Detectar fugas de corriente y desconectar el circuito para evitar electrocuciones.",
    explicacion: "El diferencial (RCD/DDV) compara la corriente que entra y sale. Si hay diferencia (fuga a tierra), asume contacto accidental y desconecta. Es esencial para seguridad personal."
  },

  {
    id: 2058,
    tema: "Calibre y sensibilidad diferencial",
    texto: "¿Cuál es la sensibilidad típica de un interruptor diferencial en viviendas?",
    opciones: ["0,01 A", "0,03 A (30 mA)", "1 A", "100 A"],
    correctaTexto: "0,03 A (30 mA)",
    explicacion: "En viviendas: diferenciales de 30 mA (sensibilidad media) para protección general. En locales mojados o ducha: 10 mA (alta sensibilidad). En circuitos de fuerza: pueden ser de 300 mA."
  },

  {
    id: 2059,
    tema: "Toma de tierra - Función",
    texto: "¿Cuál es la función principal de un sistema de toma de tierra en una instalación?",
    opciones: ["Mejorar la estética.", "Conducir corrientes de fuga a tierra para evitar voltajes peligrosos en las carcasas de los equipos.", "Aumentar la resistencia eléctrica.", "Eliminar el neutro."],
    correctaTexto: "Conducir corrientes de fuga a tierra para evitar voltajes peligrosos en las carcasas de los equipos.",
    explicacion: "La toma de tierra crea un camino de baja resistencia (< 40 Ω en viviendas) para que las corrientes de fuga retornen a tierra sin pasar por las personas. Es complementaria al diferencial."
  },

  {
    id: 2060,
    tema: "Sistemas TN, TT e IT",
    texto: "¿Cuál es la diferencia fundamental entre un sistema TN y un sistema TT?",
    opciones: ["No hay diferencia.", "En TN, el neutro y tierra están unidos en origen; en TT, son independientes con toma de tierra separada.", "TN es antiguo, TT es moderno.", "TT no necesita diferenciales."],
    correctaTexto: "En TN, el neutro y tierra están unidos en origen; en TT, son independientes con toma de tierra separada.",
    explicacion: "Sistema TN: neutro y tierra unidos en la fuente. Usado en redes trifásicas. Sistema TT: cada usuario tiene su toma de tierra independiente. Usado en España (más seguro ante falta de neutro)."
  },

  {
    id: 2061,
    tema: "Instalación de enchufes - Distancia al agua",
    texto: "¿Cuál es la distancia mínima recomendada desde un enchufe a una fuente de agua (ducha, bañera)?",
    opciones: ["0 cm", "30 cm", "60 cm", "1 metro"],
    correctaTexto: "60 cm",
    explicacion: "En baños y locales mojados, los enchufes deben estar a mínimo 60 cm de fuentes de agua para reducir riesgos de electrocución. Se recomienda instalarlos fuera del local mojado o usar protecciones especiales."
  },

  {
    id: 2062,
    tema: "Capacidad de ruptura de PIAs",
    texto: "¿Qué es la capacidad de ruptura de un PIA?",
    opciones: ["El tiempo que tarda en apagar el interruptor.", "La máxima corriente de cortocircuito que puede interrumpir sin dañarse.", "La potencia que puede suministrar.", "La resistencia del conductor."],
    correctaTexto: "La máxima corriente de cortocircuito que puede interrumpir sin dañarse.",
    explicacion: "La capacidad de ruptura (poder de corte) se expresa en kA. Un PIA de 10 kA puede interrumpir cortocircuitos hasta 10,000 A. Si se supera, el PIA se daña y no protege."
  },

  {
    id: 2063,
    tema: "Mantenimiento de la instalación",
    texto: "¿Cuál es el mantenimiento básico recomendado para una instalación eléctrica doméstica?",
    opciones: ["No requiere mantenimiento.", "Inspeccionar anualmente, probar diferenciales, limpiar polvo, revisar enchufes y cables.", "Solo reparar cuando falle algo.", "Cambiar todos los cables cada 5 años."],
    correctaTexto: "Inspeccionar anualmente, probar diferenciales, limpiar polvo, revisar enchufes y cables.",
    explicacion: "Mantenimiento preventivo: 1) Limpiar polvo de enchufes, 2) Prueba anual del botón test del diferencial, 3) Revisar cables dañados, 4) Reapretarpernos, 5) Verificar puesta a tierra."
  },

  {
    id: 2064,
    tema: "Carga de una línea - Fórmula monofásica",
    texto: "¿Cuál es la fórmula para calcular la caída de tensión en una línea monofásica?",
    opciones: ["U = I × L", "U = (2 × ρ × L × I) / S", "U = I / S", "U = L × S"],
    correctaTexto: "U = (2 × ρ × L × I) / S",
    explicacion: "Caída de tensión monofásica: U = (2 × ρ × L × I) / S. Donde ρ = resistividad, L = longitud, I = intensidad, S = sección. Máximo permitido por REBT: 3% (iluminación) o 5% (fuerza)."
  },

  {
    id: 2065,
    tema: "Interruptor-pulsador - Diferencia",
    texto: "¿Cuál es la diferencia entre un interruptor y un pulsador?",
    opciones: ["No hay diferencia.", "El interruptor mantiene su estado al soltarlo; el pulsador vuelve a su estado de reposo al soltarlo.", "El pulsador es más caro.", "El interruptor no tiene contactos."],
    correctaTexto: "El interruptor mantiene su estado al soltarlo; el pulsador vuelve a su estado de reposo al soltarlo.",
    explicacion: "Interruptor: permanece en la posición en que lo dejamos (ON/OFF). Pulsador: vuelve a su estado de reposo al soltar (típico de timbres, ascensores, aperturas de puerta)."
  },

  {
    id: 2066,
    tema: "Conmutador - Aplicación típica",
    texto: "¿Dónde se instala típicamente un sistema de conmutadores?",
    opciones: ["Solo en escaleras.", "En escaleras y pasillos para controlar una luz desde múltiples puntos.", "En la cocina exclusivamente.", "En circuitos de alta tensión."],
    correctaTexto: "En escaleras y pasillos para controlar una luz desde múltiples puntos.",
    explicacion: "El conmutador permite encender/apagar un receptor (luz) desde dos o más ubicaciones diferentes. Común en pasillos largos, escaleras y sótanos. Usa dos conmutadores y conductores adicionales."
  },

  {
    id: 2067,
    tema: "Fusible - Función y tipos",
    texto: "¿Cuál es la función principal de un fusible?",
    opciones: ["Mejorar la velocidad de la corriente.", "Proteger un circuito interrumpiéndolo cuando la corriente supera un valor predeterminado.", "Almacenar energía.", "Aumentar la voltaje."],
    correctaTexto: "Proteger un circuito interrumpiéndolo cuando la corriente supera un valor predeterminado.",
    explicacion: "El fusible es un dispositivo de protección que se funde (rompe) cuando la corriente supera su calibre, interrumpiendo el circuito. Más antiguos que PIAs, menos prácticos (no reutilizables)."
  }
];
