module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { tema, dificultad, cantidad, preguntasEjemplo } = req.body || {};

    if (!tema || !dificultad || !cantidad) {
      return res.status(400).json({ error: 'Faltan parámetros requeridos' });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(503).json({ error: 'ANTHROPIC_API_KEY no está configurada en Vercel', code: 'ANTHROPIC_API_KEY_MISSING' });
    }

    const contextoCurso = `
El estudiante cursa Grado Superior en UNIVERSAE. Crea preguntas exclusivamente sobre la unidad indicada.
Usa las preguntas de referencia para ajustar el contenido y el nivel; no repitas sus enunciados.
No supongas que todas las unidades tratan sobre electricidad. Evita datos normativos o numéricos que no aparezcan en las referencias.
Las opciones incorrectas deben ser plausibles y la explicación debe justificar la respuesta correcta.
`;

    const prompt = contextoCurso + `

TAREA: Genera ${cantidad} preguntas de opción múltiple sobre el tema "${tema}" con nivel de dificultad "${dificultad}".

IMPORTANTE:
- 80% de preguntas deben ser CONCEPTUALES (sin cálculos)
- 20% pueden tener cálculos MUY SIMPLES (una operación básica)
- Prioriza memorización de datos, normativa, procedimientos
- Si haces cálculo: dar TODOS los valores necesarios

CONTEXTO DEL NIVEL:
${dificultad === 'basico' ? '- Conceptos fundamentales\n- Definiciones básicas\n- Casos simples\n- SIN cálculos complejos' : ''}
${dificultad === 'medio' ? '- Aplicación práctica\n- Normativa específica\n- Cálculos MUY SIMPLES (si los hay)' : ''}
${dificultad === 'avanzado' ? '- Casos complejos\n- Normativa detallada\n- Cálculos simples con valores dados' : ''}

ESTILO DE REFERENCIA:
${preguntasEjemplo ? JSON.stringify(preguntasEjemplo.slice(0, 3), null, 2) : ''}

FORMATO OBLIGATORIO:
Responde SOLO con un array JSON, sin markdown, sin explicaciones adicionales. Cada pregunta debe tener EXACTAMENTE esta estructura:

[
  {
    "tema": "${tema}",
    "texto": "¿Pregunta clara y concisa?",
    "opciones": [
      "Opción correcta",
      "Opción incorrecta plausible 1",
      "Opción incorrecta plausible 2",
      "Opción incorrecta plausible 3"
    ],
    "correctaTexto": "Opción correcta",
    "explicacion": "Explicación clara de 2-3 líneas."
  }
]

REQUISITOS CRÍTICOS:
1. La respuesta correcta DEBE estar en opciones[0]
2. correctaTexto debe ser IDÉNTICO a opciones[0]
3. Las opciones incorrectas deben ser plausibles pero claramente incorrectas
4. Responde SOLO JSON puro
5. Todas las preguntas deben ser sobre el tema indicado, sin mezclar otras asignaturas

GENERA AHORA ${cantidad} PREGUNTAS:`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 4000,
        temperature: 0.7,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error: 'Error al llamar a Claude API', details: error });
    }

    const data = await response.json();
    let contenido = data.content[0].text;
    contenido = contenido.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    let preguntas;
    try {
      preguntas = JSON.parse(contenido);
    } catch (parseError) {
      return res.status(500).json({
        error: 'Error al parsear respuesta de IA',
        rawContent: contenido.substring(0, 500)
      });
    }

    if (!Array.isArray(preguntas) || preguntas.length === 0) {
      return res.status(500).json({ error: 'Respuesta de IA no válida' });
    }

    const timestamp = Date.now();
    preguntas = preguntas.map((p, i) => ({
      ...p,
      id: 9000 + timestamp + i,
      origen: 'ia',
      generada_ia: true,
      fecha_generacion: new Date().toISOString()
    }));

    return res.status(200).json({
      success: true,
      preguntas,
      metadata: {
        tema,
        dificultad,
        cantidad: preguntas.length,
        tokens: data.usage
      }
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Error interno del servidor',
      message: error.message
    });
  }
};
