# Tutor de apuntes (v1.4)

## Activacion

Configurar `ANTHROPIC_API_KEY` en Vercel, proyecto
`universae-grado-superior`, entorno Production, y desplegar de nuevo.
El despliegue actual acepta tambien la variable `Universae`, creada para
este proyecto, como nombre alternativo.
La clave solo se lee en el servidor. No incluirla en Git, HTML ni JavaScript
del navegador. La cuenta de API debe disponer de credito o facturacion activa.

Sin clave, el tutor indica que esta pendiente de activar y ofrece fragmentos
reales del tema. No genera explicaciones simuladas en produccion.

Cada consulta envia a Anthropic la pregunta, los ultimos seis mensajes,
el ejercicio (si procede) y hasta siete fragmentos del PDF del tema.
Las conversaciones se guardan solo en el navegador de ese dispositivo.
Se conservan hasta 60 conversaciones con 24 mensajes cada una.

## Apuntes y referencias

`apuntes/tutor-index.json` contiene el texto extraido de los 48 PDF del proyecto,
numerado por pagina fisica (incluye portada e indice). La busqueda se limita
al tema seleccionado. El servidor valida los identificadores y las citas
literales; la pagina y el enlace nunca los decide el modelo.

Las imagenes y formulas incrustadas como imagen no se interpretan. El tutor
debe abstenerse cuando el texto recuperado no permite responder. Las citas
comprobables no garantizan por si solas la exactitud de toda la explicacion.

Para regenerar el indice tras cambiar un PDF, con Node.js y Python + pypdf:

```sh
python3 scripts/build-tutor-index.py
```

Actualizar despues `CORPUS_VERSION` en `tutor.js` con la version generada y
cambiar la version de los recursos en `index.html` y `sw.js`. Esto invalida
las respuestas guardadas del corpus anterior para no mezclar referencias.

## Pruebas

```sh
node --test tests/tutor.test.cjs
```

Las pruebas sustituyen al proveedor: no necesitan clave ni consumen saldo.
Probar ademas el tutor desde un tema y desde un error de un test, los enlaces
a paginas del visor, los modos y la recuperacion de consultas guardadas.
La lectura de consultas guardadas no requiere red; nuevas respuestas si.
Un PDF ya abierto puede reutilizarse desde la cache de PDFs del proyecto.

Antes de ofrecer el tutor a mas usuarios, configurar limites de gasto y
controles de acceso o cuota en el servidor. Esta app no tiene autenticacion
de alumnos ni una cuota global por usuario para las consultas de IA.
