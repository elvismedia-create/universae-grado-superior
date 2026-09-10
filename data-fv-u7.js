// TEMA_FV_U7: Cálculos y dimensionamiento de sistemas FV (50 preguntas - IDs 17001-17050)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U7_DATA = [
  {
    id: 17001,
    tema: 17,
    texto: "Los seguidores solares son empleados mayoritariamente en: (TEST OFICIAL)",
    opciones: ["Viviendas unifamiliares", "Señales de tráfico", "Huertos Solares", "Ninguna de las anteriores"],
    correctaTexto: "Huertos Solares",
    explicacion: "Seguidores: usados en plantas > 100 kW. Viviendas: raramente (costo). Tráfico: a veces. ROI positivo solo en grandes instalaciones con seguimiento automático."
  },
  {
    id: 17002,
    tema: 17,
    texto: "El inversor debe contar con un rango de potencia de: (TEST OFICIAL)",
    opciones: ["70 a 90% de la potencia nominal del generador FV", "50 a 90% de la potencia nominal del generador FV", "80 a 90% de la potencia nominal del generador FV", "Es indiferente de la potencia nominal del generador FV"],
    correctaTexto: "70 a 90% de la potencia nominal del generador FV",
    explicacion: "Ratio inversor/paneles: 0.7-0.9 (80% típico). Ejemplo: 10kW paneles → inversor 7-9kW. Evita sobredimensionamiento (ineficiente) y subdimensionamiento (clipping)."
  },
  {
    id: 17003,
    tema: 17,
    texto: "El sistema eléctrico del lado de alterna contará con al menos con las siguientes protecciones (TEST OFICIAL)",
    opciones: ["Únicamente magnetotérmico general", "Magnetotérmico y diferencial general", "Magnetotérmico y diferencial general y adicionalmente un magnetotérmico por inversor", "Diferencial general y un magnetotérmico por inversor"],
    correctaTexto: "Magnetotérmico y diferencial general y adicionalmente un magnetotérmico por inversor",
    explicacion: "Protecciones AC: magnetotérmico general (50A típico) + diferencial (30mA) + magnetotérmico por inversor. Cascada protecciones para selectividad."
  },
  {
    id: 17004,
    tema: 17,
    texto: "El inversor cuenta con sistemas de protección a través de los cuales se desconectará si: (TEST OFICIAL)",
    opciones: ["Se producen pérdidas de tensión", "Se producen pérdidas de resistencia de aislamiento", "Se producen pérdidas de frecuencia", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "Protecciones inversor: límites tensión (180-264V), frecuencia (47.5-52Hz), aislamiento (>100kΩ). Desconexión automática si sale rangos normales."
  },
  {
    id: 17005,
    tema: 17,
    texto: "El sistema de prevención en modo isla: (TEST OFICIAL)",
    opciones: ["Permite que la instalación genere electricidad cuando hay una desconexión de la red eléctrica", "Conecta todas las masas metálicas a tierra", "Evita que la instalación genere electricidad cuando hay una desconexión de la red eléctrica", "Desconecta todas las masas metálicas de tierra"],
    correctaTexto: "Evita que la instalación genere electricidad cuando hay una desconexión de la red eléctrica",
    explicacion: "Anti-islanding: detección pérdida red, desconexión < 2s. Evita energización línea de distribución (peligro técnicos). Obligatorio en conectadas red."
  },
  {
    id: 17006,
    tema: 17,
    texto: "Integración arquitectónica de módulos fotovoltaicos en edificios: (TEST OFICIAL)",
    opciones: ["Requiere de elevado mantenimiento", "Reduce costes por la reducción de pérdidas en transporte de energía", "Sobredimensiona la instalación", "No tiene coste inicial ya que es una fuente renovable"],
    correctaTexto: "Reduce costes por la reducción de pérdidas en transporte de energía",
    explicacion: "BIPV: genera cerca del consumo (vivienda) → pérdidas transmisión mínimas. Vs plantas centralizadas (pérdidas 7-10%). Coste adicional compensado."
  },
  {
    id: 17007,
    tema: 17,
    texto: "Las instalaciones conectadas a red y que realicen venta de energía deben contar con: (TEST OFICIAL)",
    opciones: ["Un único contador de facturación de la energía producida", "Un contador de facturación de la energía producida si se superan los 5kW de potencia", "Dos contadores si se superan los 5 kW de potencia", "Dos contadores uno de medida de consumo y otro de facturación de la energía producida"],
    correctaTexto: "Dos contadores uno de medida de consumo y otro de facturación de la energía producida",
    explicacion: "Con venta energía: contador producción (inteligente, telemedida) + contador consumo. Ambos discriminan horarios. Requisito distribuidora para balance neto."
  },
  {
    id: 17008,
    tema: 17,
    texto: "Para diseñar un huerto solar se tendrá en cuenta a la hora de elegir su ubicación: (TEST OFICIAL)",
    opciones: ["Únicamente que tenga buen acceso para maquinaria pesada y camiones", "Que sea una zona de alta irradiancia solar, sin sombras y fácil conexión a la red eléctrica", "Solamente que sea un lugar libre de sombras", "Que cuente con una subestación para la conexión a la red eléctrica"],
    correctaTexto: "Que sea una zona de alta irradiancia solar, sin sombras y fácil conexión a la red eléctrica",
    explicacion: "Ubicación huerto: 1) Radiación solar alta, 2) Sin sombras obstáculos, 3) Acceso red cercano, 4) Acceso viario maquinaria, 5) Estudio impacto ambiental."
  },
  {
    id: 17009,
    tema: 17,
    texto: "Para verter a la red la corriente continua generada en el panel debe: (TEST OFICIAL)",
    opciones: ["Ser transformada en alterna", "Tener únicamente la mismas características de tensión que la red eléctrica", "Tener únicamente las mismas características de frecuencia que la red eléctrica", "Transformar en alterna y contar con las mismas características de tensión y frecuencia que la red eléctrica"],
    correctaTexto: "Transformar en alterna y contar con las mismas características de tensión y frecuencia que la red eléctrica",
    explicacion: "Sincronismo red: inversor produce AC con tensión 230V ± 10% y frecuencia 50Hz ± 0.5Hz. Fase alineada con red. Obligatorio para inyección."
  },
  {
    id: 17010,
    tema: 17,
    texto: "Una instalación fotovoltaica conectada a red: (TEST OFICIAL)",
    opciones: ["Solo puede ser instalada sobre soportes fijos al suelo", "Solo puede ser instalada sobre soportes fijos y móviles al suelo (huertos solares)", "Se pueden instalar en pared y tejados, al suelo (soporte fijo o móvil) o sobre mástiles", "Se pueden instalar únicamente sobre pared y tejados"],
    correctaTexto: "Se pueden instalar en pared y tejados, al suelo (soporte fijo o móvil) o sobre mástiles",
    explicacion: "Ubicaciones FV conectada red: vivienda (tejado/pared), huertos (suelo fijo/móvil), mástiles (torres eólicas integradas), fachadas BIPV. Flexibilidad alta."
  },
  {
    id: 17011,
    tema: 17,
    texto: "¿Cuál es el 'Rendimiento Anual Esperado' de una instalación bien diseñada?",
    opciones: ["80-90% sobre generación teórica", "60-75% considerando todas pérdidas (temp, cableado, inversor, baterías)", "Más del 100%", "Impredecible"],
    correctaTexto: "60-75% considerando todas pérdidas (temp, cableado, inversor, baterías)",
    explicacion: "Pérdidas totales: temperatura (-13% típico), cableado DC (-3%), cableado AC (-2%), inversor (-5%), soiling (-3%), degradación (-0.8%/año). Resultado: 60-75% anual real."
  },
  {
    id: 17012,
    tema: 17,
    texto: "¿Cuál es la 'Potencia Pico' (Wp) real en condiciones no ideales?",
    opciones: ["Siempre 100% de Wp nominal", "Típicamente 50-70% bajo condiciones reales (irradiancia variable, temperatura)", "0% (nunca se alcanza)", "Depende solo del instalador"],
    correctaTexto: "Típicamente 50-70% bajo condiciones reales (irradiancia variable, temperatura)",
    explicacion: "Condiciones estándar: 1000W/m², 25°C = 100% Wp. Condiciones reales: irradiancia ~150W/m² medio, temp ~40°C = ~60% Wp. Factor 0.6-0.7 en diseño."
  },
  {
    id: 17013,
    tema: 17,
    texto: "¿Qué es el 'Overpaneling' (sobrecarga de Paneles)?",
    opciones: ["Error de diseño", "Instalar 20-30% paneles adicionales para compensar degradación y sombra", "Usar paneles enormes", "No existe"],
    correctaTexto: "Instalar 20-30% paneles adicionales para compensar degradación y sombra",
    explicacion: "Overpaneling: si inversor 5kW, instalar 6-7kW paneles. Compensa: degradación (0.8%/año), temperatura (-0.4%/°C), soiling (3%), variabilidad (días nublados)."
  },
  {
    id: 17014,
    tema: 17,
    texto: "¿Cuál es la 'Constante de Tiempo' de respuesta de un MPPT?",
    opciones: ["Segundos o minutos (busca continuamente MPP)", "Horas", "Días", "No tiene"],
    correctaTexto: "Segundos o minutos (busca continuamente MPP)",
    explicacion: "MPPT actual: respuesta ~0.1-1 segundo. Rastrea MPP ante variaciones irradiancia rápidas (nubes). Velocidad respuesta afecta energía captada en días variables."
  },
  {
    id: 17015,
    tema: 17,
    texto: "¿Cómo se dimensiona el 'Buffer de Potencia' en un inversor?",
    opciones: ["Aleatoriamente", "Inversor capacidad 150-200% picos de consumo para manejar inrush transitorios", "Igual a generación FV", "No se dimensiona"],
    correctaTexto: "Inversor capacidad 150-200% picos de consumo para manejar inrush transitorios",
    explicacion: "Motores arranque: demandan 3-7× corriente nominal. Inversor debe soportar transitorios sin desconectar. Sobrecapacidad de 50-100% es normal."
  },
  {
    id: 17016,
    tema: 17,
    texto: "¿Qué significa 'Clipping' y cómo se previene?",
    opciones: ["No existe", "Pérdida energía si paneles > capacidad inversor; prevenir con ratio 0.8-0.9", "Mayor generación", "Solo en baterías"],
    correctaTexto: "Pérdida energía si paneles > capacidad inversor; prevenir con ratio 0.8-0.9",
    explicacion: "Clipping: si 10kW paneles + 12kW inversor, 12kW limita salida. Pérdida ~2% anual. Evitar: ratio inversor/paneles 0.8-0.9."
  },
  {
    id: 17017,
    tema: 17,
    texto: "¿Cuál es la 'Distancia Mínima entre Filas' en suelo?",
    opciones: ["Ninguna, pueden tocarse", "Calculada para evitar sombra invernal: d = h/tan(elevación_mínima)", "Siempre 10 metros", "Depende del color panel"],
    correctaTexto: "Calculada para evitar sombra invernal: d = h/tan(elevación_mínima)",
    explicacion: "Pitch (espaciamiento): España 40°N, elevación mínima ~26° (invierno). d = altura_panel / tan(26°) ~2× altura. Típico 3-4 metros entre filas."
  },
  {
    id: 17018,
    tema: 17,
    texto: "¿Qué es el 'Rendimiento Nocturno' de una batería?",
    opciones: ["Generación de noche", "Pérdida de carga durante noche sin consumo (autodescarga 0.1-1%/día)", "Aumento capacidad", "Nada"],
    correctaTexto: "Pérdida de carga durante noche sin consumo (autodescarga 0.1-1%/día)",
    explicacion: "Autodescarga batería: Li-ion 2-3%/mes, Pb-ácido 5-15%/mes. Cálculo autonomía debe incluir autodescarga. Regulador bien calibrado minimiza."
  },
  {
    id: 17019,
    tema: 17,
    texto: "¿Cuál es la 'Capacidad Equivalente de 10 Horas' (C10)?",
    opciones: ["No existe", "Energía que batería puede suministrar durante 10 horas sin caer debajo 1.75V por celda", "Tiempo de carga", "Temperatura"],
    correctaTexto: "Energía que batería puede suministrar durante 10 horas sin caer debajo 1.75V por celda",
    explicacion: "C10: si batería 100Ah C10, puede suministrar 10A durante 10 horas. Parámetro diseño. C20 es más capacidad (corriente menor), C5 es menos (corriente mayor)."
  },
  {
    id: 17020,
    tema: 17,
    texto: "¿Cómo se valida el 'Dimensionamiento del Generador FV'?",
    opciones: ["A ojo", "Energía FV anual ≥ Consumo anual ÷ factor_seguridad; simulación software", "Sin validar", "Con termómetro"],
    correctaTexto: "Energía FV anual ≥ Consumo anual ÷ factor_seguridad; simulación software",
    explicacion: "Validación: si consumo 3000 kWh/año, factor 1.2, generar ≥ 3600 kWh. Usar PVGIS/PVsyst para simulación precisa con datos reales irradiancia."
  },
  {
    id: 17021,
    tema: 17,
    texto: "¿Cuál es el 'Ángulo de Inclinación Óptimo' en España?",
    opciones: ["0° (horizontal)", "Igual latitud geográfica (35-43° según ubicación)", "90° (vertical)", "30° siempre"],
    correctaTexto: "Igual latitud geográfica (35-43° según ubicación)",
    explicacion: "Inclinación óptima: ≈ latitud (Madrid 40°, Barcelona 41°). Produce máxima energía anual. Variantes: 35-45° en España típico."
  },
  {
    id: 17022,
    tema: 17,
    texto: "¿Qué es el 'Acimut' en diseño de plantas solares?",
    opciones: ["Altura sobre nivel del mar", "Ángulo horizontal respecto norte (0°); óptimo 180° (sur en hemisferio norte)", "Temperatura", "Número paneles"],
    correctaTexto: "Ángulo horizontal respecto norte (0°); óptimo 180° (sur en hemisferio norte)",
    explicacion: "Acimut sur (180°): máxima radiación mediodía. Desviaciones ±20° tolerables (<2% pérdida). Este/Oeste: 135°/225° (pérdida mayor)."
  },
  {
    id: 17023,
    tema: 17,
    texto: "¿Cuál es la fórmula básica para dimensionar paneles en OFF-GRID?",
    opciones: ["Paneles = Consumo/Irradiancia", "Paneles = (Consumo × Factor_seguridad) / (Irradiancia × Rendimiento_STC)", "Sin fórmula", "Instalación random"],
    correctaTexto: "Paneles = (Consumo × Factor_seguridad) / (Irradiancia × Rendimiento_STC)",
    explicacion: "Dimensionamiento: si 5 kWh/día, irradiancia 5 kWh/m²/día, factor 1.3, rendimiento 85% → 5×1.3/(5×0.85) = 1.53 kWp instalados."
  },
  {
    id: 17024,
    tema: 17,
    texto: "¿Qué es la 'Irradiancia de Pico' (Peak Sun Hours)?",
    opciones: ["Horas punta de tensión", "Horas equivalentes de 1000W/m² que recibe superficie (típico 4-6 h/día España)", "Horas totales luz", "Sin definición"],
    correctaTexto: "Horas equivalentes de 1000W/m² que recibe superficie (típico 4-6 h/día España)",
    explicacion: "Peak sun: es una métrica de energía. Madrid 5 h/día medio = panel 10Wp con 5 PSH genera 50Wh/día. Simplifica cálculos diseño."
  },
  {
    id: 17025,
    tema: 17,
    texto: "¿Cuál es la 'Factor de Seguridad' típico en diseño OFF-GRID?",
    opciones: ["1.0 (sin margen)", "1.25-1.5 (compensa variabilidad climática, envejecimiento)", "2.0 (exceso)", "3.0 (innecesario)"],
    correctaTexto: "1.25-1.5 (compensa variabilidad climática, envejecimiento)",
    explicacion: "Factor 1.25-1.5: cubre degradación panel (0.8%/año), variabilidad irradiancia, cambios climáticos. Equilibrio coste-confiabilidad."
  },
  {
    id: 17026,
    tema: 17,
    texto: "¿Qué indica 'Performance Ratio' (PR) en instalación?",
    opciones: ["Número paneles", "Ratio energía real generada / energía teórica esperada (~75-85% típico)", "Eficiencia panel solo", "Voltaje salida"],
    correctaTexto: "Ratio energía real generada / energía teórica esperada (~75-85% típico)",
    explicacion: "PR = Energía_real / (Irradiancia × Potencia_instalada × Eficiencia_STC). Monitoreo PR permite detectar degradación (<70% indica problema)."
  },
  {
    id: 17027,
    tema: 17,
    texto: "¿Cuál es la 'Pérdida de Potencia por Temperatura'?",
    opciones: ["0%", "-0.4 a -0.5% por °C arriba 25°C (panel se calienta)", "+0.4% ganancia", "Depende color"],
    correctaTexto: "-0.4 a -0.5% por °C arriba 25°C (panel se calienta)",
    explicacion: "Temperatura: panel 25°C = 100% Wp. A 45°C = 92% Wp. Dicho -0.4%/°C. En desierto 60°C: pérdida 14% por temperatura."
  },
  {
    id: 17028,
    tema: 17,
    texto: "¿Qué es 'Shade Fraction' (fracción de sombra)?",
    opciones: ["Color panel", "Porcentaje área panel bajo sombra (< 10% tolerables, > 20% crítico)", "Sombrillas", "Sin importancia"],
    correctaTexto: "Porcentaje área panel bajo sombra (< 10% tolerables, > 20% crítico)",
    explicacion: "Sombra: 10% cobertura → ~20% potencia reducida (bypass diodo). 50% cobertura → ~60% reducción. Análisis sombra crítico en diseño."
  },
  {
    id: 17029,
    tema: 17,
    texto: "¿Cuál es la 'Densidad de Potencia' (W/m²) típica de panel?",
    opciones: ["50 W/m²", "150-200 W/m² (eficiencia 15-20%)", "1000 W/m²", "Infinita"],
    correctaTexto: "150-200 W/m² (eficiencia 15-20%)",
    explicacion: "Densidad potencia panel: 150-200W/m² = eficiencia 15-20%. Paneles monocristalinos 20-22%, policristalinos 15-18%. Área ocupada = Potencia/Densidad."
  },
  {
    id: 17030,
    tema: 17,
    texto: "¿Qué es 'Tilt Factor' (factor de inclinación)?",
    opciones: ["Número de paneles", "Multiplicador irradiancia por inclinación óptima (~1.0-1.1 factor)", "Ángulo vertical", "Sin definición"],
    correctaTexto: "Multiplicador irradiancia por inclinación óptima (~1.0-1.1 factor)",
    explicacion: "Tilt factor horizontal vs inclinado óptimo: ~1.05-1.1× (10% ganancia típica). Calcula energía ajustando irradiancia horizontal medida."
  },
  {
    id: 17031,
    tema: 17,
    texto: "¿Cuál es el 'Cableado Óptimo' entre paneles en serie?",
    opciones: ["Conductor fino cualquiera", "Sección mínima caída voltaje < 3% (4-6mm² Cu típico distancias cortas)", "Gigante cable", "Sin especificar"],
    correctaTexto: "Sección mínima caída voltaje < 3% (4-6mm² Cu típico distancias cortas)",
    explicacion: "Caída tensión DC: V_caída = (2 × L × I × ρ) / Sección. Ejemplo 40m, 10A, cobre: caída ~0.4V (2.5mm²), 0.2V (4mm²). Mantener < 3%."
  },
  {
    id: 17032,
    tema: 17,
    texto: "¿Qué es 'Bifacial' en paneles solares?",
    opciones: ["Panel único cara", "Panel con células ambas caras (genera 10-25% extra de radiación reflejada suelo)", "Doble grosor", "Sin sentido"],
    correctaTexto: "Panel con células ambas caras (genera 10-25% extra de radiación reflejada suelo)",
    explicacion: "Bifaciales: cara frontal capta sol, cara trasera capta reflejado suelo (albedo). Ganancia 10-25% en suelo blanco (nieve). Costo +10-15% reciente."
  },
  {
    id: 17033,
    tema: 17,
    texto: "¿Cuál es la 'Autonomía Típica' en sistema OFF-GRID?",
    opciones: ["1 día", "3-5 días (batería cubre períodos nublados típicos)", "1 mes", "Indefinida"],
    correctaTexto: "3-5 días (batería cubre períodos nublados típicos)",
    explicacion: "Autonomía: España 3-5 días típico. Nórdicos 7-10 días (invierno largo). Fórmula: Autonomía = Consumo_días × 5 / Profundidad_descarga / Factor_seguridad."
  },
  {
    id: 17034,
    tema: 17,
    texto: "¿Qué es 'String' en configuración paneles?",
    opciones: ["Cuerda", "Serie de paneles conectados en serie (mismo Isc, voltajes suman)", "Disposición libre", "Sin importancia"],
    correctaTexto: "Serie de paneles conectados en serie (mismo Isc, voltajes suman)",
    explicacion: "String típico: 10-15 paneles 40V = 400-600V DC. Múltiples strings en paralelo aumentan corriente. Diseño: balance strings (Isc similar)."
  },
  {
    id: 17035,
    tema: 17,
    texto: "¿Cuál es la 'Resistencia de Contacto' máxima permitida en conectores?",
    opciones: ["Infinita", "< 10 mΩ (especificación MC4/MC3 para evitar pérdidas I²R)", "100 Ω", "Variable"],
    correctaTexto: "< 10 mΩ (especificación MC4/MC3 para evitar pérdidas I²R)",
    explicacion: "Contacto: R × I² = pérdida. 20A × 10mΩ = 0.2W por conexión. Red 100 conexiones = 20W pérdida (~2-3%). Crítico sistemas grandes."
  },
  {
    id: 17036,
    tema: 17,
    texto: "¿Qué es 'Soiling Loss' (pérdida por suciedad)?",
    opciones: ["Decoloración", "Pérdida energía por polvo, suciedad: 2-5% zona normal, 15-25% zonas desérticas", "Rotura panel", "Sin efecto"],
    correctaTexto: "Pérdida energía por polvo, suciedad: 2-5% zona normal, 15-25% zonas desérticas",
    explicacion: "Soiling: arena, polen, excremento, polvo industrial. Limpieza anual/semestral recupera 2-5% en zonas normales. Zonas áridas requieren limpieza cada mes."
  },
  {
    id: 17037,
    tema: 17,
    texto: "¿Cuál es la 'Profundidad de Descarga' (DOD) recomendada en batería?",
    opciones: ["100% (vaciar completamente)", "50-80% para máxima vida útil (Pb-ácido 50-80%, Li-ion 80-95%)", "10% solamente", "Variable sin límite"],
    correctaTexto: "50-80% para máxima vida útil (Pb-ácido 50-80%, Li-ion 80-95%)",
    explicacion: "DOD: descarga profunda acorta ciclos batería. Pb-ácido 50% DOD = 3000 ciclos, 80% DOD = 1000 ciclos. Diseño: capacidad = Consumo / DOD."
  },
  {
    id: 17038,
    tema: 17,
    texto: "¿Qué es 'Mismatch Loss' en strings?",
    opciones: ["Sin pérdida", "Pérdida potencia si paneles strings tienen diferente Isc/Voc (1-3% típico, 5% si muy desigual)", "Ganancia siempre", "Inexistente"],
    correctaTexto: "Pérdida potencia si paneles strings tienen diferente Isc/Voc (1-3% típico, 5% si muy desigual)",
    explicacion: "Mismatch: si string A genera 10A, string B 8A, total limitado a 8A. Pérdida 2A capacidad. Prevención: seleccionar paneles mismo lote, evitar mezclas modelos."
  },
  {
    id: 17039,
    tema: 17,
    texto: "¿Cuál es el 'Estado de Carga' (SOC) óptimo batería?",
    opciones: ["Siempre 0% (vacía)", "80-90% para máxima eficiencia y vida (balancear capacidad vs degradación)", "100% continuo", "50% fijo"],
    correctaTexto: "80-90% para máxima eficiencia y vida (balancear capacidad vs degradación)",
    explicacion: "SOC óptimo batería: 80-90% nominal. Carga 100% acelera degradación (~1% más por ciclo arriba 90%). Descarga 0% riesgo sulfatación (Pb-ácido)."
  },
  {
    id: 17040,
    tema: 17,
    texto: "¿Qué es 'Voltage Regulation' en instalación?",
    opciones: ["Color voltaje", "Estabilidad voltaje en rango tolerancia (230V ±10% típico red, 48V ±5% OFF-GRID)", "Cambio manual", "Sin control"],
    correctaTexto: "Estabilidad voltaje en rango tolerancia (230V ±10% típico red, 48V ±5% OFF-GRID)",
    explicacion: "Regulación: inversor mantiene V ± 5% bajo variaciones carga/sun. Regulador batería mantiene V flotación constante (13.8V nominal 12V batería)."
  },
  {
    id: 17041,
    tema: 17,
    texto: "¿Cuál es la fórmula de 'Autonomía en Días'?",
    opciones: ["Consumo / Generación", "Autonomía = (Batería_Ah × Profundidad_descarga) / (Consumo_día_Ah / Horas_uso)", "Paneles × Inversores", "Random"],
    correctaTexto: "Autonomía = (Batería_Ah × Profundidad_descarga) / (Consumo_día_Ah / Horas_uso)",
    explicacion: "Ejemplo: batería 400Ah × 50% DOD = 200Ah útil. Consumo 20Ah/día → 200/20 = 10 días autonomía. Aumenta batería o reduce consumo."
  },
  {
    id: 17042,
    tema: 17,
    texto: "¿Qué es 'Albedo' en contexto plantas solares?",
    opciones: ["Altura del monte", "Reflectancia suelo/superficie (0.1-0.8, nieve 0.9, asfalto 0.1, hierba 0.2)", "Ángulo", "Temperatura"],
    correctaTexto: "Reflectancia suelo/superficie (0.1-0.8, nieve 0.9, asfalto 0.1, hierba 0.2)",
    explicacion: "Albedo alto (nieve, arena blanca 0.7-0.9): 10-20% más radiación reflejada beneficia bifaciales. Asfalto 0.1: absorbe calor (calienta paneles, baja eficiencia)."
  },
  {
    id: 17043,
    tema: 17,
    texto: "¿Cuál es la 'Pérdida en Transformador' típica?",
    opciones: ["0%", "1-3% (pérdidas núcleo + bobinado, más alto en carga parcial)", "50%", "Innecesario"],
    correctaTexto: "1-3% (pérdidas núcleo + bobinado, más alto en carga parcial)",
    explicacion: "Transformador: pérdida núcleo (fija ~1%) + bobinado variable I² (variable 1-2% en carga nominal). Seleccionar transformador sized apropiado (no sobredimensionado)."
  },
  {
    id: 17044,
    tema: 17,
    texto: "¿Qué es 'Array Configuration'?",
    opciones: ["Tipo panel", "Forma conectar paneles: serie (aumenta V), paralelo (aumenta I), mixto (serie-paralelo)", "Instalación estándar", "Sin variación"],
    correctaTexto: "Forma conectar paneles: serie (aumenta V), paralelo (aumenta I), mixto (serie-paralelo)",
    explicacion: "Configuración típica: strings serie-paralelo. Ejemplo 60 paneles 40V: 6 strings × 10 paneles = 400V DC, 6× Isc. Optimiza voltaje/corriente inversor."
  },
  {
    id: 17045,
    tema: 17,
    texto: "¿Cuál es la 'Incertidumbre en Diseño' típica?",
    opciones: ["0% (exacto)", "±10-15% (variabilidad climática, fabricación, datos irradiancia)", "±50% (muy alto)", "±2% solo"],
    correctaTexto: "±10-15% (variabilidad climática, fabricación, datos irradiancia)",
    explicacion: "Fuentes incertidumbre: ±5% datos irradiancia, ±5% fabricación panel, ±3% envejecimiento, ±2% pérdidas. Totales ~10-15% desviación esperada."
  },
  {
    id: 17046,
    tema: 17,
    texto: "¿Qué es 'Specific Yield' (productividad específica)?",
    opciones: ["Potencia panel", "kWh generados por kWp instalado por año (típico 1000-1500 kWh/kWp España)", "Horas útiles", "Sin definición"],
    correctaTexto: "kWh generados por kWp instalado por año (típico 1000-1500 kWh/kWp España)",
    explicacion: "Productividad: Si instalación 10kWp genera 12000 kWh/año → Specific Yield = 1200 kWh/kWp/año (bueno). Comparar entre regiones/diseños."
  },
  {
    id: 17047,
    tema: 17,
    texto: "¿Cuál es el 'Factor de Potencia' ideal?",
    opciones: ["0.5", "1.0 (cos φ = 1, potencia activa = potencia aparente)", "0 (sin potencia)", "Variable"],
    correctaTexto: "1.0 (cos φ = 1, potencia activa = potencia aparente)",
    explicacion: "Factor potencia: cos φ = 1 ideal (sin reactivos). < 1 implica cargas inductivas (motores). Inversor debe soportar cos φ 0.85-1.0 rango."
  },
  {
    id: 17048,
    tema: 17,
    texto: "¿Qué es 'LCOE' (Levelized Cost of Energy)?",
    opciones: ["Costo panel", "Coste total instalación / energía generada vida útil (típico 40-80 €/MWh FV)", "Precio mercado", "Sin definición"],
    correctaTexto: "Coste total instalación / energía generada vida útil (típico 40-80 €/MWh FV)",
    explicacion: "LCOE = (Inversión + Mantenimiento) / Energía_total_25años. FV España ~50€/MWh (competitivo con fósiles). Métrica económica evaluación proyectos."
  },
  {
    id: 17049,
    tema: 17,
    texto: "¿Cuál es la 'Vida Útil Esperada' de panel solar?",
    opciones: ["5 años", "25-30 años (garantía 80% potencia a 25 años)", "100 años", "Indefinida"],
    correctaTexto: "25-30 años (garantía 80% potencia a 25 años)",
    explicacion: "Panel vida útil: 25-30 años operacional. Garantía típica: 90% año 1, 80% año 25. Degradación ~0.8%/año. Aún producen > 50 años (reducida eficiencia)."
  },
  {
    id: 17050,
    tema: 17,
    texto: "¿Qué parámetros son críticos en diseño de planta FV?",
    opciones: ["Solo potencia instalada", "Irradiancia local, inclinación, acimut, pérdidas sombreamiento, factor seguridad, autonomía, costs", "Solo inversión", "Clima solamente"],
    correctaTexto: "Irradiancia local, inclinación, acimut, pérdidas sombreamiento, factor seguridad, autonomía, costs",
    explicacion: "Diseño integral: 1) Datos irradiancia PVGIS, 2) Topografía (inclinación óptima), 3) Sombreamiento análisis, 4) Degradación panel, 5) Pérdidas sistema, 6) Económico LCOE."
  }
];
