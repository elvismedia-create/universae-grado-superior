// Filtra solo las preguntas marcadas como TEST OFICIAL (campo tema, texto o explicacion)
function soloOficiales(data) {
  return data.filter(p =>
    (p.tema && String(p.tema).includes('TEST OFICIAL')) ||
    (p.texto && String(p.texto).includes('TEST OFICIAL')) ||
    (p.explicacion && String(p.explicacion).includes('TEST OFICIAL'))
  );
}

const CONFIGURACION_CURSO = [
  // ===== BLOQUE 1 - GRADO SUPERIOR ANUAL =====
  {
    bloque: "sistemas_gs",
    trimestre: "B1",
    titulo_boton: "Sistemas y circuitos eléctricos",
    asignaturas: [
      { nombre: "⭐ Simulacro: Sistemas y circuitos eléctricos (40 preguntas)", data: EXAMEN_GS_SISTEMAS_CIRCUITOS_DATA },
      { nombre: "U1: Conceptos básicos", data: GS_SCE_U1_DATA },
      { nombre: "U2: Sistemas trifásicos", data: GS_SCE_U2_DATA },
      { nombre: "U3: Transformadores eléctricos", data: GS_SCE_U3_DATA },
      { nombre: "U4: Motores eléctricos", data: GS_SCE_U4_DATA },
      { nombre: "U5: Instrumentos y equipos de medida", data: GS_SCE_U5_DATA },
      { nombre: "U6: Introducción a la electrónica digital. Circuitos combinacionales", data: GS_SCE_U6_DATA },
      { nombre: "U7: Circuitos electrónicos digitales secuenciales", data: GS_SCE_U7_DATA },
      { nombre: "U8: Introducción a la electrónica analógica", data: GS_SCE_U8_DATA },
      { nombre: "U9: Circuitos electrónicos analógicos", data: GS_SCE_U9_DATA },
      { nombre: "ANX: Fórmulas, definiciones y unidades básicas", data: GS_SCE_ANX_DATA }
    ]
  },
  {
    bloque: "gestion_montaje_gs",
    trimestre: "B1",
    titulo_boton: "Gestión del montaje y mantenimiento",
    asignaturas: [
      { nombre: "⭐ Simulacro: Gestión del montaje y del mantenimiento de instalaciones eléctricas (40 preguntas)", data: EXAMEN_GS_GESTION_MONTAJE_MANTENIMIENTO_DATA },
      { nombre: "U1: Documentación técnica y normativa de aplicación", data: GS_GMM_U1_DATA },
      { nombre: "U2: Organización del proceso de aprovisionamiento", data: GS_GMM_U2_DATA },
      { nombre: "U3: Gestión del almacén", data: GS_GMM_U3_DATA },
      { nombre: "U4: Planificación del montaje", data: GS_GMM_U4_DATA },
      { nombre: "U5: Gestión de recursos y materiales", data: GS_GMM_U5_DATA },
      { nombre: "U6: Puesta en servicio de las instalaciones electrotécnicas", data: GS_GMM_U6_DATA },
      { nombre: "U7: Organización y gestión del mantenimiento", data: GS_GMM_U7_DATA },
      { nombre: "U8: Gestión de residuos y sistemas de gestión de calidad", data: GS_GMM_U8_DATA }
    ]
  },
  {
    bloque: "documentacion_tecnica_gs",
    trimestre: "B1",
    titulo_boton: "Documentación técnica",
    asignaturas: [
      { nombre: "⭐ Simulacro: Documentación técnica en instalaciones eléctricas (40 preguntas)", data: EXAMEN_GS_DOCUMENTACION_TECNICA_DATA },
      { nombre: "U1: Identificación de la documentación técnica y administrativa", data: GS_DTE_U1_DATA },
      { nombre: "U2: Proyectos y memorias técnicas de diseño", data: GS_DTE_U2_DATA },
      { nombre: "U3: Representación gráfica de las instalaciones electrotécnicas", data: GS_DTE_U3_DATA },
      { nombre: "U4: Elaboración de presupuestos y anexos de cálculos", data: GS_DTE_U4_DATA },
      { nombre: "U5: Confección de pliegos, manuales, estudios e informes", data: GS_DTE_U5_DATA },
      { nombre: "U6: Tramitación, legalización, inspección y puesta en marcha de instalaciones", data: GS_DTE_U6_DATA },
      { nombre: "U7: Software y aplicaciones para instalaciones eléctricas", data: GS_DTE_U7_DATA },
      { nombre: "ANX: Simbología eléctrica", data: GS_DTE_ANX_DATA }
    ]
  },
  {
    bloque: "redes_ct_gs",
    trimestre: "B1",
    titulo_boton: "Desarrollo de redes y CT",
    asignaturas: [
      { nombre: "⭐ Simulacro: Desarrollo de redes eléctricas y centros de transformación (40 preguntas)", data: EXAMEN_GS_DESARROLLO_REDES_CT_DATA },
      { nombre: "U1: Estructura de la red eléctrica", data: GS_RCT_U1_DATA },
      { nombre: "U2: Redes eléctricas de distribución de media tensión", data: GS_RCT_U2_DATA },
      { nombre: "U3: Centros de transformación de energía eléctrica", data: GS_RCT_U3_DATA },
      { nombre: "U4: Redes eléctricas de distribución de baja tensión", data: GS_RCT_U4_DATA },
      { nombre: "U5: Cálculos mecánicos y eléctricos", data: GS_RCT_U5_DATA },
      { nombre: "U6: Configuración de centros de transformación y redes eléctricas de baja tensión", data: GS_RCT_U6_DATA },
      { nombre: "U7: Proyectos resumidos de centros de transformación y redes de baja tensión", data: GS_RCT_U7_DATA },
      { nombre: "U8: Pruebas y ensayos de los centros de transformación", data: GS_RCT_U8_DATA }
    ]
  },
  {
    bloque: "configuracion_instalaciones_gs",
    trimestre: "B1",
    titulo_boton: "Configuración de instalaciones eléctricas",
    asignaturas: [
      { nombre: "⭐ Simulacro: Configuración de instalaciones eléctricas (40 preguntas)", data: EXAMEN_GS_CONFIGURACION_INSTALACIONES_ELECTRICAS_DATA },
      { nombre: "U1: Características de las instalaciones de BT", data: GS_CIE_U1_DATA },
      { nombre: "U2: Elementos de las instalaciones de BT I", data: GS_CIE_U2_DATA },
      { nombre: "U3: Elementos de las instalaciones de BT II", data: GS_CIE_U3_DATA },
      { nombre: "U4: Cálculo de instalaciones eléctricas I", data: GS_CIE_U4_DATA },
      { nombre: "U5: Cálculo de instalaciones eléctricas II", data: GS_CIE_U5_DATA },
      { nombre: "U6: Configuración de instalaciones eléctricas de baja tensión", data: GS_CIE_U6_DATA },
      { nombre: "U7: Proyectos resumidos de instalaciones en edificios e instalaciones fotovoltaicas", data: GS_CIE_U7_DATA }
    ]
  },
  {
    bloque: "domoticas_automaticas_gs",
    trimestre: "B1",
    titulo_boton: "Domóticas y automáticas",
    asignaturas: [
      { nombre: "⭐ Simulacro: Configuración de instalaciones domóticas y automáticas (40 preguntas)", data: EXAMEN_GS_CONFIGURACION_DOMOTICAS_AUTOMATICAS_DATA },
      { nombre: "U1: Hogares digitales, edificios inteligentes y urbótica en tu ciudad", data: GS_CDA_U1_DATA },
      { nombre: "U2: Instalaciones y dispositivos de automatización", data: GS_CDA_U2_DATA },
      { nombre: "U3: Soluciones de automatización preprogramadas", data: GS_CDA_U3_DATA },
      { nombre: "U4: Sistema de automatización con relés programables", data: GS_CDA_U4_DATA },
      { nombre: "U5: Sistemas de automatización basados en corrientes portadoras", data: GS_CDA_U5_DATA },
      { nombre: "U6: Sistemas basados en buses de campo inmóticos: el bus KNX", data: GS_CDA_U6_DATA },
      { nombre: "U7: Normativa en instalaciones domóticas y automáticas", data: GS_CDA_U7_DATA }
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
