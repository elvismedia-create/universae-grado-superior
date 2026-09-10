// Netlify Function: Generar explicación profunda
// Explicaciones extensas de 300-500 palabras

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' })
    };
  }

  try {
    const { pregunta, tema, respuestaCorrecta, explicacionCorta } = JSON.parse(event.body);

    if (!pregunta || !tema) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Faltan parámetros' })
      };
    }

    const contextoCurso = `
=== CONTEXTO DEL CURSO ===
El estudiante está preparando el examen de Técnico en Baja Tensión (UNIVERSAE).
Ha estudiado los Temas 1 (Electricidad Básica) y 2 (Instalaciones de Enlace).

TERMINOLOGÍA CLAVE que debes usar:
- REBT (Reglamento Electrotécnico de Baja Tensión)
- ITC-BT (Instrucciones Técnicas Complementarias: ITC-BT-11, ITC-BT-13, ITC-BT-14, ITC-BT-15, ITC-BT-25, etc.)
- CGP (Caja General de Protección), LGA (Línea General de Alimentación), DI (Derivación Individual)
- PIA (Pequeño Interruptor Automático = magnetotérmico)
- ICP (Interruptor de Control de Potencia), IGA (Interruptor General Automático)
- CC (Centralización de Contadores), CPM (Caja de Protección y Medida)

EJEMPLOS DEL CURSO que puedes usar:
- Microondas doméstico: 900 W / 230 V = 3,91 A
- Bombilla LED de salón: 5 W
- Panel solar 400 W: 40 V × 10 A = 400 W
- Potencia contratada típica vivienda: 5.750 W
- Tensión vivienda: 230 V (monofásica)

ANALOGÍAS DEL CURSO que puedes usar:
- "La tensión es como el número de carriles de una autopista, la intensidad es el número de coches que circulan"
- "Si dos puntos están a diferente altura, puede fluir líquido por una tubería (diferencia de potencial)"
- "La electricidad se transforma, no se crea ni se destruye"

NORMATIVA que debes mencionar cuando sea relevante:
- Acometidas: ITC-BT-11 (aéreas, subterráneas, profundidad mínima 0,6 m)
- CGP: ITC-BT-13 (altura 1-1,8 m, grado IK10)
- LGA: ITC-BT-14 (caída tensión máx 0,5%)
- DI: ITC-BT-15 (cables ES07Z1-K, caída tensión máx 1%)
- Circuitos vivienda: ITC-BT-25 (C1 iluminación, C2 tomas generales, C3 cocina, C4 lavadora, C5 baño)
- Colores cables: Fase (negro/marrón/gris), Neutro (azul), Tierra (amarillo-verde)
- Secciones mínimas: 6 mm² cobre para acometidas y derivaciones

CONCEPTOS CLAVE del curso:
- LEY DE OHM: V = R × I (Tensión = Resistencia × Intensidad)
- POTENCIA: P = V × I (Potencia = Tensión × Intensidad)
- Circuitos SERIE: misma intensidad en todos los puntos
- Circuitos PARALELO: misma tensión, intensidades se suman
- CA (Corriente Alterna): 50 Hz en España, usada en viviendas
- CC (Corriente Continua): paneles solares, baterías
- Cable de tierra: baja resistencia, disipa tensiones peligrosas a través de picas (mín 0,5 m)

Usa este contexto para hacer la explicación MÁS PERSONALIZADA y alineada con lo que el estudiante ha aprendido.
`;

    const prompt = contextoCurso + `

PREGUNTA DEL ESTUDIANTE:
"${pregunta}"

RESPUESTA CORRECTA:
"${respuestaCorrecta}"

EXPLICACIÓN CORTA QUE YA TIENE:
"${explicacionCorta}"

TAREA: Genera una explicación EXTENDIDA de 400-600 palabras que incluya:

1. **CONCEPTO FUNDAMENTAL** (50-80 palabras)
   - Definición clara y precisa
   - Por qué es importante

2. **ANALOGÍA PRÁCTICA** (80-100 palabras)
   - Comparación con algo cotidiano
   - Que ayude a visualizar el concepto

3. **FÓRMULAS Y CÁLCULOS** (si aplica) (60-80 palabras)
   - Fórmulas principales
   - Ejemplo numérico sencillo

4. **EJEMPLO PRÁCTICO REAL** (100-120 palabras)
   - Caso de uso en instalaciones
   - Números concretos

5. **NORMATIVA APLICABLE** (60-80 palabras)
   - Referencias ITC-BT relevantes
   - Qué dice el REBT

6. **ERRORES COMUNES** (60-80 palabras)
   - 2-3 errores típicos de estudiantes
   - Por qué son incorrectos

7. **TRUCO PARA RECORDAR** (30-40 palabras)
   - Mnemotecnia o frase memorable
   - Algo que ayude en el examen

FORMATO:
Usa markdown simple:
- **Negrita** para títulos de secciones
- Párrafos separados con línea en blanco
- Listas con • cuando sea necesario
- NO uses emojis
- Escribe en tono educativo pero cercano
- Sé preciso técnicamente

GENERA LA EXPLICACIÓN COMPLETA AHORA:`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        temperature: 0.7,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Error API', details: error })
      };
    }

    const data = await response.json();
    const explicacion = data.content[0].text.trim();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        explicacion,
        metadata: {
          pregunta,
          tema,
          palabras: explicacion.split(/\s+/).length,
          tokens: data.usage
        }
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
