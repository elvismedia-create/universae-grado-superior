const test = require('node:test');
const assert = require('node:assert/strict');
const { isAnnotationPointer, scaledSize, panShift, normalizedPoint } = require('../pdf-viewer-geometry.js');

test('un dedo desplaza y el lapiz puede anotar', () => {
  assert.equal(isAnnotationPointer('touch'), false);
  assert.equal(isAnnotationPointer('pen'), true);
  assert.equal(isAnnotationPointer('mouse'), true);
});

test('dos dedos conservan el desplazamiento de su centro', () => {
  assert.deepEqual(panShift({ clientX: 200, clientY: 300 }, { clientX: 225, clientY: 340 }), { x: 25, y: 40 });
});

test('las marcas normalizadas siguen sobre el mismo texto al 110 y 115 por ciento', () => {
  const original = { width: 800, height: 1100 };
  const mark = { x: 0.28, y: 0.46 };
  for (const zoom of [1, 1.1, 1.15]) {
    const size = scaledSize(original.width, original.height, zoom);
    const rect = { left: 12, top: 32, ...size };
    const point = normalizedPoint(rect, rect.left + mark.x * size.width, rect.top + mark.y * size.height);
    assert.ok(Math.abs(point.x - mark.x) < 1e-12);
    assert.ok(Math.abs(point.y - mark.y) < 1e-12);
  }
});

test('las coordenadas del subrayado se acotan al area de la pagina', () => {
  assert.deepEqual(normalizedPoint({ left: 10, top: 20, width: 100, height: 200 }, 0, 500), { x: 0, y: 1 });
});
