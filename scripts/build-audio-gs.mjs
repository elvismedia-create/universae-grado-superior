import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'audios');
const context = vm.createContext({});
vm.runInContext(
  fs.readFileSync(path.join(root, 'data-gs-bloque1.js'), 'utf8') + '\n' +
  fs.readFileSync(path.join(root, 'data-config.js'), 'utf8') + '\n' +
  'globalThis.audioTopics = CONFIGURACION_CURSO.flatMap(b => b.asignaturas.flatMap((t, idx) => ' +
  'PDF_T3_URLS[b.bloque]?.[idx] ? [{id: b.bloque + ":" + idx, bid: b.bloque, idx, subject: b.titulo_boton, topic: t.nombre, pdf: PDF_T3_URLS[b.bloque][idx], questions: t.data}] : []));',
  context
);

const requested = process.argv.find(arg => arg.startsWith('--only='))?.slice(7);
const topics = Array.from(context.audioTopics);
const selected = requested ? topics.filter(topic => topic.id === requested) : topics;
if (!selected.length) throw new Error(`Tema desconocido: ${requested}`);

const accents = [
  ['electrica', 'eléctrica'], ['electrico', 'eléctrico'], ['electronica', 'electrónica'],
  ['tension', 'tensión'], ['intensidad', 'intensidad'], ['energia', 'energía'],
  ['potencia', 'potencia'], ['tambien', 'también'], ['conexion', 'conexión'],
  ['instalacion', 'instalación'], ['instalaciones', 'instalaciones'],
  ['transformacion', 'transformación'], ['generacion', 'generación'],
  ['distribucion', 'distribución'], ['proteccion', 'protección'],
  ['medicion', 'medición'], ['reactiva', 'reactiva'], ['calculo', 'cálculo'],
  ['calculos', 'cálculos'], ['simbolo', 'símbolo'], ['simbolos', 'símbolos'],
  ['lampara', 'lámpara'], ['magnetico', 'magnético'], ['magnetica', 'magnética'],
  ['segun', 'según'], ['mas', 'más'], ['cual', 'cuál'], ['que', 'qué'],
  ['como', 'cómo'], ['esta', 'está'], ['asi', 'así'], ['numero', 'número'],
  ['nucleo', 'núcleo'], ['angulo', 'ángulo'], ['metodo', 'método'],
  ['oposicion', 'oposición'], ['perdidas', 'pérdidas'], ['periodo', 'período'],
  ['varia', 'varía'], ['parametros', 'parámetros'], ['relacion', 'relación'],
  ['triangulo', 'triángulo'], ['ademas', 'además'], ['asincrono', 'asíncrono'],
  ['trifasico', 'trifásico'], ['simbologia', 'simbología'],
  ['representacion', 'representación'], ['maquina', 'máquina'],
  ['senalizacion', 'señalización'], ['indicacion', 'indicación'],
  ['traves', 'través'], ['calorificas', 'caloríficas'],
  ['periodicamente', 'periódicamente'], ['modulo', 'módulo'],
  ['fisica', 'física'], ['direccion', 'dirección'],
  ['senal', 'señal'], ['regulacion', 'regulación']
];

function spoken(value) {
  let text = String(value || '').trim()
    .replace(/\beste cerrado\b/gi, 'esté cerrado')
    .replace(/\bI\s*=\s*V\s*\/\s*R\b/g, 'la intensidad es igual a la tensión dividida por la resistencia')
    .replace(/\blm\s*\/\s*m2\b/gi, 'lúmenes por metro cuadrado')
    .replace(/\b400\s*\/\s*230\s*V\b/g, 'cuatrocientos voltios entre fases y doscientos treinta entre fase y neutro')
    .replace(/\bREBT\b/g, 'Reglamento Electrotécnico de Baja Tensión')
    .replace(/\bITC\b/g, 'instrucciones técnicas complementarias')
    .replace(/\bKNX\b/g, 'K N X')
    .replace(/\bIP\b/g, 'I P').replace(/\bIK\b/g, 'I K')
    .replace(/\bM\s*3~/g, 'M, tres fases de corriente alterna')
    .replace(/([a-záéíóúñ])\/([a-záéíóúñ])/gi, '$1 y $2');
  for (const [plain, accented] of accents) {
    if (plain === 'que' || plain === 'como' || plain === 'cual' || plain === 'esta') continue;
    text = text.replace(new RegExp(`\\b${plain}\\b`, 'gi'), match =>
      match[0] === match[0].toUpperCase() ? accented.toUpperCase() : accented);
  }
  return text.replace(/\bCA\b/g, 'corriente alterna').replace(/\bCC\b/g, 'corriente continua')
    .replace(/\bBT\b/g, 'baja tensión').replace(/\bMT\b/g, 'media tensión');
}

function transcript(topic) {
  const points = topic.questions.filter(q => q.fuente === 'practica' && q.explicacion).slice(0, 8);
  if (points.length < 3) throw new Error(`Pocos conceptos para ${topic.id}`);
  const lines = [
    `Repaso breve: ${spoken(topic.topic.replace(/^(U\d+|ANX):\s*/, ''))}. ${spoken(topic.subject)}.`,
    ...points.map((q, index) => `Idea ${index + 1}. ${spoken(q.correctaTexto)}. ${spoken(q.explicacion)}`),
    'Ahora, comprueba lo que recuerdas.',
    ...points.slice(-2).map((q, index) => {
      const question = spoken(q.texto).replace(/^(Que|Cual|Como|Cuando|Donde|Cuanto|Por que)\b/i,
        match => ({ Que: 'Qué', Cual: 'Cuál', Como: 'Cómo', Cuando: 'Cuándo',
          Donde: 'Dónde', Cuanto: 'Cuánto', 'Por que': 'Por qué' })[match] || match);
      return `Pregunta ${index + 1}. ¿${question.replace(/[?.]+$/, '')}? La respuesta es: ${spoken(q.correctaTexto)}.`;
    }),
    'Fin del repaso. Puedes abrir el PDF del tema para ver esquemas, tablas y fórmulas.'
  ];
  return lines.join('\n\n') + '\n';
}

fs.mkdirSync(output, { recursive: true });
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'gs-audio-'));
try {
  for (const topic of selected) {
    const file = topic.id.replace(':', '-') + '.m4a';
    const textFile = path.join(output, topic.id.replace(':', '-') + '.txt');
    const audioFile = path.join(output, file);
    const aiff = path.join(temp, 'voice.aiff');
    fs.writeFileSync(textFile, transcript(topic), 'utf8');
    if (!fs.existsSync(audioFile) || process.argv.includes('--force')) {
      execFileSync('say', ['-v', 'Mónica', '-r', '170', '-f', textFile, '-o', aiff], { stdio: 'inherit' });
      execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', aiff,
        '-c:a', 'aac', '-b:a', '48k', '-ar', '24000', audioFile], { stdio: 'inherit' });
    }
    const duration = Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries',
      'format=duration', '-of', 'default=nokey=1:noprint_wrappers=1', audioFile], { encoding: 'utf8' }).trim());
    if (!Number.isFinite(duration) || duration < 20) throw new Error(`Audio inválido: ${file}`);
    console.log(`${topic.id}: ${Math.round(duration)} s, ${Math.round(fs.statSync(audioFile).size / 1024)} KiB`);
  }
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}

const manifest = topics.filter(topic => fs.existsSync(path.join(output, topic.id.replace(':', '-') + '.m4a')))
  .map(({ id, bid, idx, subject, topic, pdf }) => ({
    id, bid, idx, subject, topic, pdf,
    audio: `audios/${id.replace(':', '-')}.m4a`,
    transcript: `audios/${id.replace(':', '-')}.txt`
  }));
fs.writeFileSync(path.join(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`${manifest.length} pistas disponibles`);
