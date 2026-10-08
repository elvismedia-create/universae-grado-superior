const test = require('node:test');
const assert = require('node:assert/strict');
const { casos, evaluar } = require('../taller-gs.js');
const apuntes = require('../apuntes/tutor-index.json');

function answer(stage) {
  return {
    checks: stage.checks.map(check => String(check.answer)),
    result: String(stage.response.answer),
    unit: stage.response.unit || null
  };
}

test('las seis asignaturas tienen practicas de tres fases', () => {
  assert.equal(casos.length, 8);
  assert.equal(new Set(casos.map(item => item.bid)).size, 6);
  for (const item of casos) {
    assert.equal(item.stages.length, 3);
    assert.ok(item.source.idx > 0);
    for (const stage of item.stages) assert.equal(evaluar(stage, answer(stage)).allCorrect, true);
  }
});

test('cada practica enlaza una pagina real del PDF correspondiente', () => {
  for (const item of casos) {
    const pdf = apuntes.documents.find(doc => doc.bid === item.bid && doc.idx === item.source.idx);
    assert.ok(pdf, item.id);
    assert.ok(pdf.pages.some(page => page.number === item.source.page), item.id);
    for (const stage of item.stages) {
      if (stage.visual?.page) assert.ok(pdf.pages.some(page => page.number === stage.visual.page), item.id);
    }
  }
});

test('una respuesta vacia nunca se acepta', () => {
  for (const item of casos) {
    for (const stage of item.stages) {
      assert.equal(evaluar(stage, { checks: ['', ''], result: '', unit: '' }).allCorrect, false);
    }
  }
});

test('corrige por separado procedimiento, resultado y unidades', () => {
  const stage = casos.find(item => item.id === 'trifasica').stages[1];
  const correct = answer(stage);
  const wrongStep = String((stage.checks[0].answer + 1) % stage.checks[0].options.length);
  assert.equal(evaluar(stage, { ...correct, checks: [wrongStep, correct.checks[1]] }).checks[0], false);
  assert.equal(evaluar(stage, { ...correct, result: '0' }).resultCorrect, false);
  assert.equal(evaluar(stage, { ...correct, unit: 'W' }).unitCorrect, false);
  assert.equal(evaluar(stage, { ...correct, result: correct.result.replace('.', ',') }).allCorrect, true);
});
