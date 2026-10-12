# Repasos en audio de Grado Superior

Los 48 archivos M4A son microrepasos, no lecturas íntegras de los PDF. Se generan con las ideas y explicaciones de las preguntas de práctica de cada tema, que ya están vinculadas a los PDF de Grado Superior. No incluyen los índices, introducciones ni objetivos de unidad. Los anexos visuales siguen requiriendo consultar el PDF.

Para regenerarlos en un Mac con la voz `Mónica` y FFmpeg instalados:

```sh
node scripts/build-audio-gs.mjs --force
```

Para regenerar solo un tema:

```sh
node scripts/build-audio-gs.mjs --only=sistemas_gs:1 --force
```

El catálogo está en `audios/manifest.json`. La app guarda cada pista en Cache Storage solo cuando se pulsa `Guardar sin conexión` o `Guardar audios de esta asignatura`. `Descargar archivo` permite guardarla también como M4A en el dispositivo. El progreso de reproducción se conserva en `localStorage` y no modifica el progreso de los tests.
