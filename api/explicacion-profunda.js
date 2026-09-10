const fs = require('fs');
const path = require('path');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { pregunta, tema, respuestaCorrecta, explicacionCorta } = req.body || {};

    if (!pregunta || !tema) {
      return res.status(400).json({ error: 'Faltan parámetros' });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ error: 'ANTHROPIC_API_KEY no está configurada' });
    }

    let apuntesTexto = '';
    let apuntesEncontrados = false;

    try {
      const apuntesDir = path.join(process.cwd(), 'apuntes');
      let archivoApuntes = '';

      if (tema.includes('T1') || tema.includes('Electricidad') || tema.includes('Básica')) {
        archivoApuntes = 'tema1.txt';
      } else if (tema.includes('T2') || tema.includes('Instalaciones') || tema.includes('Enlace') || tema.includes('Red') || tema.includes('Distribución')) {
        archivoApuntes = 'tema2.txt';
      }

      if (archivoApuntes) {
        const rutaCompleta = path.join(apuntesDir, archivoApuntes);
        if (fs.existsSync(rutaCompleta)) {
          apuntesTexto = fs.readFileSync(rutaCompleta, 'utf-8');
          apuntesEncontrados = true;
        }
      }
    } catch (error) {
      console.log('Error al cargar apuntes:', error.message);
    }

    let prompt;

    if (apuntesTexto && apuntesTexto.length > 100) {
      prompt = `
=== APUNTES DEL CURSO ===
${apuntesTexto}

=== PREGUNTA DEL ESTUDIANTE ===
"${pregunta}"

RESPUESTA CORRECTA: "${respuestaCorrecta}"

=== TAREA CRÍTICA ===
1. Busca en los APUNTES DEL CURSO el texto que explique esta pregunta/concepto
2. Copia el texto EXACTAMENTE como aparece en los apuntes
3. NO inventes, NO extiendas, NO redactes nada nuevo
4. Si los apuntes tienen 50 palabras, devuelve 50 palabras
5. Si los apuntes tienen 200 palabras, devuelve 200 palabras
6. El texto debe ser LITERAL de los apuntes

Devuelve SOLO el texto de los apuntes, sin introducción ni despedida.
`;
    } else {
      const contextoCurso = `
=== CONTEXTO DEL CURSO ===
El estudiante está preparando el examen de Técnico en Baja Tensión (UNIVERSAE).

TERMINOLOGÍA CLAVE:
- REBT, ITC-BT, CGP, LGA, DI, PIA, ICP, IGA, CC, CPM

NORMATIVA:
- Acometidas: ITC-BT-11
- CGP: ITC-BT-13
- LGA: ITC-BT-14
- DI: ITC-BT-15
- Circuitos: ITC-BT-25

CONCEPTOS:
- LEY DE OHM: V = R × I
- POTENCIA: P = V × I
- CA: 50 Hz, viviendas
- CC: paneles solares, baterías
`;

      prompt = contextoCurso + `

PREGUNTA DEL ESTUDIANTE:
"${pregunta}"

RESPUESTA CORRECTA:
"${respuestaCorrecta}"

EXPLICACIÓN CORTA:
"${explicacionCorta || ''}"

TAREA: Genera una explicación de 300-500 palabras que incluya:

1. **CONCEPTO FUNDAMENTAL**: definición clara y por qué es importante.
2. **EJEMPLO PRÁCTICO**: caso de uso real con números concretos.
3. **NORMATIVA APLICABLE**: referencias ITC-BT relevantes y qué dice el REBT.
4. **ERRORES COMUNES**: 2-3 errores típicos de estudiantes y por qué son incorrectos.
5. **TRUCO PARA RECORDAR**: una frase breve que ayude en el examen.

FORMATO:
Usa markdown simple con negrita para títulos de sección, párrafos separados y tono educativo cercano. No uses emojis.
`;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 2000,
        temperature: 0.7,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error: 'Error API', details: error });
    }

    const data = await response.json();
    const explicacion = data.content[0].text.trim();

    return res.status(200).json({
      success: true,
      explicacion,
      usaApuntes: apuntesEncontrados,
      metadata: {
        pregunta,
        tema,
        palabras: explicacion.split(/\s+/).length,
        tokens: data.usage,
        apuntesUsados: apuntesEncontrados
      }
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
