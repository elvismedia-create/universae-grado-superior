// Netlify Function: Generar explicación profunda con apuntes literales
// v67.19: Prioriza texto EXACTO de apuntes

const fs = require('fs');
const path = require('path');

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

    // Leer apuntes del tema correspondiente v67.22
    let apuntesTexto = '';
    let apuntesEncontrados = false;
    try {
      const apuntesDir = path.join(__dirname, '..', '..', 'apuntes');
      console.log('🔍 Buscando apuntes en:', apuntesDir);
      
      let archivoApuntes = '';
      
      if (tema.includes('T1') || tema.includes('Electricidad') || tema.includes('Básica')) {
        archivoApuntes = 'tema1.txt';
      } else if (tema.includes('T2') || tema.includes('Instalaciones') || tema.includes('Enlace') || tema.includes('Red') || tema.includes('Distribución')) {
        archivoApuntes = 'tema2.txt';
      }
      
      if (archivoApuntes) {
        const rutaCompleta = path.join(apuntesDir, archivoApuntes);
        console.log('📄 Intentando leer:', rutaCompleta);
        
        if (fs.existsSync(rutaCompleta)) {
          apuntesTexto = fs.readFileSync(rutaCompleta, 'utf-8');
          apuntesEncontrados = true;
          console.log(`📚 Apuntes cargados: ${archivoApuntes} (${apuntesTexto.length} caracteres)`);
        } else {
          console.log(`⚠️ Archivo no existe: ${rutaCompleta}`);
        }
      } else {
        console.log('⚠️ Tema no reconocido para apuntes:', tema);
      }
    } catch (error) {
      console.log('❌ Error al cargar apuntes:', error.message);
      console.log('Stack:', error.stack);
    }

    // v67.19: Prompt diferente según haya o no apuntes
    let prompt;
    
    if (apuntesTexto && apuntesTexto.length > 100) {
      // OPCIÓN A: Hay apuntes → Extraer texto LITERAL
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
4. Si los apuntes tienen 50 palabras → devuelve 50 palabras
5. Si los apuntes tienen 200 palabras → devuelve 200 palabras
6. El texto debe ser LITERAL de los apuntes

IMPORTANTE:
- NO generes texto de 800 palabras si los apuntes son cortos
- NO extiendas artificialmente la explicación
- Solo devuelve el fragmento relevante de los apuntes
- Si encuentras varias secciones relevantes, puedes unirlas (pero literal)

Devuelve SOLO el texto de los apuntes, sin introducción ni despedida.
`;
    } else {
      // OPCIÓN B: NO hay apuntes → Generar explicación normal
      const contextoCurso = `
=== CONTEXTO DEL CURSO ===
El estudiante está preparando el examen de Técnico en Baja Tensión (UNIVERSAE).

TERMINOLOGÍA CLAVE:
- REBT, ITC-BT, CGP, LGA, DI, PIA, ICP, IGA, CC, CPM

NORMATIVA:
- Acometidas: ITC-BT-11
- CGP: ITC-BT-13 (altura 1-1,8 m, grado IK10)
- LGA: ITC-BT-14 (caída tensión máx 0,5%)
- DI: ITC-BT-15 (caída tensión máx 1%)
- Circuitos: ITC-BT-25
- Colores: Fase (negro/marrón/gris), Neutro (azul), Tierra (amarillo-verde)

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
"${explicacionCorta}"

TAREA: Genera una explicación de 300-500 palabras que incluya:

1. **CONCEPTO FUNDAMENTAL** (60-80 palabras)
   - Definición clara
   - Por qué es importante

2. **EJEMPLO PRÁCTICO** (100-150 palabras)
   - Caso de uso real
   - Números concretos

3. **NORMATIVA** (60-80 palabras)
   - ITC-BT relevantes
   - Requisitos REBT

4. **CONSEJOS PRÁCTICOS** (60-80 palabras)
   - Cómo aplicarlo
   - Errores comunes

Formato: Párrafos corridos, sin títulos de sección. Tono profesional pero accesible.
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
        usaApuntes: apuntesEncontrados,
        metadata: {
          pregunta,
          tema,
          palabras: explicacion.split(/\s+/).length,
          tokens: data.usage,
          apuntesUsados: apuntesEncontrados
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
