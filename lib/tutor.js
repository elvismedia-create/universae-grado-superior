const index = require('../apuntes/tutor-index.json');

const STOP = new Set(('a al algo ante asi como con cual cuando de del desde donde el ella en entre es esta este esto explicar explicame explicacion hacer hay la las lo los mas me mi no o para pero por porque que quien se si sin sobre son su sus te tengo tema tiene tu un una unos unas y yo favor puedes quiero entender sencillo paso pasos ayuda apuntes pregunta respuesta correcta incorrecta').split(' '));
const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const words = value => normalize(value).match(/[a-z0-9]{3,}/g)?.filter(word => !STOP.has(word)) || [];
const clean = value => String(value).replace(/\s+/g, ' ').trim();

function chunks(document) {
  return document.pages.flatMap(page => {
    const result = [];
    for (let start = 0; start < page.text.length; start += 1450) {
      const text = page.text.slice(start, start + 1700);
      if (text.length > 70) result.push({ page: page.number, text, terms: words(text) });
    }
    return result;
  });
}

const documents = new Map(index.documents.map(doc => [doc.id, { ...doc, chunks: chunks(doc) }]));

function retrieve(bid, idx, question, history = [], exercise = null) {
  const document = documents.get(`${bid}:${idx}`);
  if (!document) return null;
  // Recent student turns keep short follow-ups on the same concept.
  const primary = words(question);
  const context = words([...history.filter(m => m.role === 'user').slice(-2).map(m => m.content),
    exercise?.pregunta || '', exercise?.respuestaCorrecta || ''].join(' '));
  const terms = [...new Set([...primary, ...context])].slice(0, 100);
  const overview = /\b(resum|general|introduc|comproba|preguntame)/.test(normalize(question));
  if (!terms.length || (overview && !context.length)) terms.push(...words(document.topic));
  const counts = new Map(terms.map(term => [term, document.chunks.filter(c => c.terms.includes(term)).length]));
  const ranked = document.chunks.map(chunk => {
    let score = 0;
    for (const term of terms) {
      const tf = chunk.terms.filter(t => t === term).length;
      if (!tf) continue;
      const idf = Math.log(1 + (document.chunks.length - counts.get(term) + 0.5) / (counts.get(term) + 0.5));
      score += idf * tf / (tf + 1.2 * (0.25 + 0.75 * chunk.terms.length / 210)) * (primary.includes(term) ? 2 : 1);
    }
    if (chunk.page <= 2) score *= 0.15;
    return { ...chunk, score };
  }).filter(chunk => chunk.score > 0).sort((a, b) => b.score - a.score);
  const selected = [];
  for (const chunk of ranked) {
    if (selected.filter(s => s.page === chunk.page).length >= 2) continue;
    selected.push(chunk);
    if (selected.length === 7) break;
  }
  return { document, sources: selected.map((c, i) => ({ id: `S${i + 1}`, page: c.page, text: c.text })) };
}

function sourceMetadata(document, source, quote) {
  return { id: source.id, bid: document.bid, idx: document.idx, tema: document.topic,
    asignatura: document.subject, pagina: source.page, cita: quote, url: document.url };
}

function noEvidence(document, reason = 'no_match') {
  return { success: true, encontrado: false, explicacion: 'No he encontrado información suficiente en los apuntes de este tema para responder con referencias. Prueba con el nombre del concepto o consulta el tema correspondiente.',
    fuentes: [], comprobacion: '', usaApuntes: false, corpusVersion: index.version, tema: document.topic, reason };
}

function validateAnswer(answer, document, sources) {
  if (answer.encontrado !== true) return noEvidence(document, 'provider_abstained');
  if (typeof answer.respuesta !== 'string' || answer.respuesta.length > 14000 || !Array.isArray(answer.citas) || !answer.citas.length) return noEvidence(document, 'invalid_shape');
  const references = new Map();
  for (const citation of answer.citas) {
    const source = sources.find(s => s.id === citation?.id);
    const quote = clean(citation?.cita || '');
    if (!source || quote.length < 20 || quote.length > 420 || !clean(source.text).includes(quote)) return noEvidence(document, 'invalid_quote');
    references.set(source.id, sourceMetadata(document, source, quote));
  }
  const used = [...answer.respuesta.matchAll(/\[(S\d+)\]/g)].map(m => m[1]);
  if (!used.length || used.some(id => !references.has(id))) return noEvidence(document, 'invalid_reference');
  return { success: true, encontrado: true, explicacion: answer.respuesta,
    fuentes: [...references.values()].filter(s => used.includes(s.id)),
    comprobacion: typeof answer.comprobacion === 'string' ? answer.comprobacion.slice(0, 700) : '',
    usaApuntes: true, corpusVersion: index.version, tema: document.topic };
}

module.exports = { retrieve, validateAnswer, noEvidence, sourceMetadata, version: index.version };
