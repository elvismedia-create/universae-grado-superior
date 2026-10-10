const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const sim = require('../simulacros-gs.js');

const question = (id, topic) => ({ id, texto: `Pregunta ${id}`, tema: topic,
  opciones: ['Bien', 'Mal'], correctaTexto: 'Bien' });
const config = [{ bloque: 'electricidad', titulo_boton: 'Electricidad', asignaturas: [
  { nombre: '⭐ Simulacro: Electricidad', data: [question(1, 'U1')] },
  { nombre: 'U1', data: [question(1, 'U1'), question(2, 'U1')] },
  { nombre: 'U2', data: [question(3, 'U2'), question(4, 'U2')] }
] }];

test('separa práctica y tests oficiales sin duplicar preguntas del simulacro anterior', () => {
  const practice = sim.poolFrom(config, 'electricidad');
  const official = sim.poolFrom(config, 'electricidad', 'oficial');
  assert.deepEqual(practice.map(item => item.id), [1, 2, 3, 4]);
  assert.deepEqual(practice.map(item => item._topic), ['U1', 'U1', 'U2', 'U2']);
  assert.deepEqual(official, []);
  assert.deepEqual(sim.poolFrom(config, 'electricidad', 'oficial', { electricidad: [question(50, 'Tema oficial')] }).map(item => item.id), [50]);
});

test('reserva preguntas no vistas antes de repetir las anteriores', () => {
  const pool = sim.poolFrom(config, 'electricidad');
  const first = sim.selectQuestions(pool, 2, [], () => 0.5);
  const second = sim.selectQuestions(pool, 2, first.map(item => item.id), () => 0.5);
  assert.equal(new Set([...first, ...second].map(item => item.id)).size, 4);
  assert.equal(sim.selectQuestions(pool, 5).length, 0);
});

test('calcula penalización y detecta temas débiles sin castigar blancos', () => {
  const pool = sim.poolFrom(config, 'electricidad');
  const result = sim.evaluate(pool, { 0: 0, 1: 1, 2: 0 }, 0.25);
  assert.deepEqual([result.correct, result.wrong, result.blank], [2, 1, 1]);
  assert.equal(result.score, 4.375);
  assert.deepEqual(result.weakTopics.map(item => item.topic), ['U1', 'U2']);
  assert.equal(sim.evaluate(pool, { 0: 1, 1: 1, 2: 1, 3: 1 }, 1).score, 0);
});

test('los bancos activos de Grado Superior siguen siendo práctica, no tests oficiales', () => {
  const context = vm.createContext({});
  for (const file of ['data-gs-bloque1.js', 'data-config.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
  }
  const blocks = vm.runInContext('CONFIGURACION_CURSO', context);
  assert.equal(blocks.length, 6);
  for (const block of blocks) {
    const pool = sim.poolFrom(blocks, block.bloque);
    assert.ok(pool.length >= 35);
    assert.ok(pool.every(item => item.fuente === 'practica'));
    assert.ok(pool.every(item => !item.tema.includes('TEST OFICIAL')));
    assert.deepEqual(sim.poolFrom(blocks, block.bloque, 'oficial'), []);
  }
});
