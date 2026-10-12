const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'audios/manifest.json'), 'utf8'));

test('cada PDF de Grado Superior tiene un microrepaso descargable', () => {
  assert.equal(manifest.length, 48);
  assert.equal(new Set(manifest.map(item => item.id)).size, 48);
  assert.equal(new Set(manifest.map(item => item.bid)).size, 6);
  for (const item of manifest) {
    assert.ok(fs.existsSync(path.join(root, item.pdf)), item.pdf);
    assert.ok(fs.existsSync(path.join(root, item.audio)), item.audio);
    assert.ok(fs.existsSync(path.join(root, item.transcript)), item.transcript);
    assert.ok(fs.statSync(path.join(root, item.audio)).size > 100000, item.audio);
  }
});

test('los guiones evitan índices, introducciones y objetivos de unidad', () => {
  for (const item of manifest) {
    const text = fs.readFileSync(path.join(root, item.transcript), 'utf8');
    assert.match(text, /Repaso breve:/);
    assert.match(text, /Ahora, comprueba lo que recuerdas/);
    assert.doesNotMatch(text, /(?:^Índice\b|^Introducción\b|al finalizar esta unidad)/im);
  }
});

test('la primera pista es AAC reproducible y breve', () => {
  const file = path.join(root, manifest[0].audio);
  const output = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'stream=codec_name',
    '-show_entries', 'format=duration', '-of', 'json', file], { encoding: 'utf8' });
  const info = JSON.parse(output);
  assert.equal(info.streams[0].codec_name, 'aac');
  assert.ok(Number(info.format.duration) >= 45 && Number(info.format.duration) < 180);
});
