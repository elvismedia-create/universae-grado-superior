const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
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

test('el lapiz fino impide el scroll del Pencil, pero conserva el del dedo y el zoom', () => {
  const source = fs.readFileSync(path.join(__dirname, '..', 'pdf-local-store.js'), 'utf8');
  const guard = source.match(/function attachPenScrollGuard\([\s\S]*?\n  \}/)?.[0];
  assert.ok(guard);
  const listeners = new Map();
  const state = { tool: 'pen', activePenPointerId: null };
  vm.runInNewContext(`${guard}; attachPenScrollGuard(container, state);`, {
    container: { addEventListener: (name, handler, options) => listeners.set(name, { handler, options }) }, state, Array
  });
  assert.equal(listeners.get('touchstart').options.passive, false);
  assert.equal(listeners.get('touchmove').options.capture, true);
  let prevented = 0;
  const gesture = (type, count = 1) => ({ touches: Array.from({ length: count }, () => ({})),
    changedTouches: [{ touchType: type }], preventDefault: () => { prevented++; } });
  listeners.get('touchstart').handler(gesture('stylus'));
  listeners.get('touchmove').handler(gesture('stylus'));
  assert.equal(prevented, 2);
  listeners.get('touchmove').handler(gesture('direct'));
  listeners.get('touchmove').handler(gesture('stylus', 2));
  assert.equal(prevented, 2);
  state.activePenPointerId = 7;
  listeners.get('touchmove').handler(gesture('direct'));
  assert.equal(prevented, 3);
  state.tool = 'pan';
  listeners.get('touchstart').handler(gesture('stylus'));
  assert.equal(prevented, 3);
});
