// Netlify Function: Generar preguntas con Claude API
// Protege tu API key del lado del servidor

exports.handler = async (event, context) => {
  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' })
    };
  }

  try {
    const { tema, dificultad, cantidad, preguntasEjemplo } = JSON.parse(event.body);

    // Validar parámetros
    if (!tema || !dificultad || !cantidad) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Faltan parámetros requeridos' })
      };
    }

    // Construir prompt con contexto del curso
    const contextoCurso = `
=== CONTEXTO DEL CURSO ===
Las preguntas son para un estudiante que prepara el examen de Técnico en Baja Tensión (UNIVERSAE).
Ya ha estudiado:
- Tema 1: Electricidad Básica (magnitudes, Ley de Ohm, circuitos, CA/CC, elementos de protección)
- Tema 2: Instalaciones de Enlace (acometidas, CGP, LGA, contadores, derivaciones, cuadros)

USA ESTA TERMINOLOGÍA EN LAS PREGUNTAS:
- REBT, ITC-BT-11/13/14/15/25
- CGP, LGA, DI, CC, CPM, ICP, IGA, PIA
- Colores: Fase (negro/marrón/gris), Neutro (azul), Tierra (amarillo-verde)
- Secciones: 6 mm² mínimo cobre
- Tensión vivienda: 230 V
- Fórmulas: V=R×I, P=V×I

USA VALORES REALISTAS DEL CURSO:
- Potencias típicas: 5.750 W (vivienda), 900 W (microondas), 5 W (LED)
- Intensidades típicas: 3,91 A (microondas), 25 A (vivienda)
- Alturas CGP: 1-1,8 m
- Profundidad acometida: 0,6 m (0,8 m calzada)
- Caída tensión: 0,5% (LGA), 1% (DI)
- Separaciones: 20 cm (otras instalaciones), 25 cm (líneas eléctricas)
- Grados protección: IK10 (CGP), IP40 (contadores)

ESTILO DE PREGUNTAS:
- Directas y prácticas
- Casos reales de instalaciones
- Referencias normativa cuando aplique
- Opciones incorrectas plausibles pero técnicamente erróneas
`;

    const prompt = contextoCurso + `

TAREA: Genera ${cantidad} preguntas de opción múltiple sobre el tema "${tema}" con nivel de dificultad "${dificultad}".

CONTEXTO DEL NIVEL:
${dificultad === 'basico' ? '- Conceptos fundamentales\n- Definiciones básicas\n- Casos simples' : ''}
${dificultad === 'medio' ? '- Aplicación práctica\n- Cálculos sencillos\n- Casos reales comunes' : ''}
${dificultad === 'avanzado' ? '- Casos complejos\n- Múltiples variables\n- Normativa específica\n- Cálculos avanzados' : ''}

ESTILO DE REFERENCIA (aprende de estos ejemplos):
${preguntasEjemplo ? JSON.stringify(preguntasEjemplo.slice(0, 3), null, 2) : ''}

FORMATO OBLIGATORIO (JSON):
Responde SOLO con un array JSON, sin markdown, sin explicaciones adicionales. Cada pregunta debe tener EXACTAMENTE esta estructura:

[
  {
    "tema": "${tema}",
    "texto": "¿Pregunta clara y concisa?",
    "opciones": [
      "Opción correcta (debe ser técnicamente precisa)",
      "Opción incorrecta plausible 1",
      "Opción incorrecta plausible 2",
      "Opción incorrecta plausible 3"
    ],
    "correctaTexto": "Opción correcta (debe coincidir EXACTAMENTE con opciones[0])",
    "explicacion": "Explicación clara de 2-3 líneas que ayude a entender el concepto. Usa analogías cuando sea posible."
  }
]

REQUISITOS CRÍTICOS:
1. La respuesta correcta DEBE estar en opciones[0]
2. El texto de "correctaTexto" debe ser IDÉNTICO a opciones[0]
3. Las opciones incorrectas deben ser plausibles pero claramente incorrectas
4. La explicación debe ser educativa y clara (2-3 líneas)
5. Responde SOLO JSON puro, sin \`\`\`json ni markdown
6. Todas las preguntas deben ser sobre electricidad/REBT
7. Usa terminología técnica correcta en español

GENERA AHORA ${cantidad} PREGUNTAS:`;

    // Llamar a Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        temperature: 0.7,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Error API:', error);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Error al llamar a Claude API', details: error })
      };
    }

    const data = await response.json();
    
    // Extraer el contenido de texto
    let contenido = data.content[0].text;
    
    // Limpiar markdown si existe
    contenido = contenido.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    // Parsear JSON
    let preguntas;
    try {
      preguntas = JSON.parse(contenido);
    } catch (parseError) {
      console.error('Error parsing JSON:', contenido);
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'Error al parsear respuesta de IA',
          rawContent: contenido.substring(0, 500)
        })
      };
    }

    // Validar estructura
    if (!Array.isArray(preguntas) || preguntas.length === 0) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Respuesta de IA no válida' })
      };
    }

    // Añadir IDs únicos
    const timestamp = Date.now();
    preguntas = preguntas.map((p, i) => ({
      ...p,
      id: 9000 + timestamp + i,
      generada_ia: true,
      fecha_generacion: new Date().toISOString()
    }));

    // Responder
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        preguntas,
        metadata: {
          tema,
          dificultad,
          cantidad: preguntas.length,
          tokens: data.usage
        }
      })
    };

  } catch (error) {
    console.error('Error general:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Error interno del servidor',
        message: error.message 
      })
    };
  }
};
