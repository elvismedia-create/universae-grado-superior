"""Extract the deployed GS PDFs by physical page for the study tutor."""
import hashlib
import json
from pathlib import Path
import subprocess
import unicodedata

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
manifest = subprocess.check_output([
    "node", "-e", """
const fs = require('fs'), vm = require('vm');
const c = vm.createContext({});
vm.runInContext(fs.readFileSync('data-gs-bloque1.js', 'utf8') + '\\n' +
  fs.readFileSync('data-config.js', 'utf8') + `
  globalThis.docs = CONFIGURACION_CURSO.flatMap(b => b.asignaturas.flatMap((t, idx) =>
    PDF_T3_URLS[b.bloque]?.[idx] ? [{id:b.bloque+':'+idx, bid:b.bloque, idx,
      subject:b.titulo_boton, topic:t.nombre, url:PDF_T3_URLS[b.bloque][idx]}] : []));`, c);
process.stdout.write(JSON.stringify(c.docs));
"""], cwd=ROOT, text=True)

documents = json.loads(manifest)
for document in documents:
    filename = ROOT / document["url"]
    if not filename.exists():
        filename = ROOT / unicodedata.normalize("NFD", document["url"])
    reader = PdfReader(filename)
    document["pages"] = [
        {"number": i + 1, "text": " ".join((page.extract_text() or "").split())}
        for i, page in enumerate(reader.pages)
    ]
    document["sha256"] = hashlib.sha256(filename.read_bytes()).hexdigest()
    if not any(len(p["text"]) > 100 for p in document["pages"]):
        raise ValueError(f'No extractable text: {document["url"]}')
    print(f'{document["id"]}: {len(document["pages"])} pages', flush=True)

payload = json.dumps(documents, ensure_ascii=False, separators=(",", ":"))
version = hashlib.sha256(payload.encode()).hexdigest()[:16]
output = ROOT / "apuntes" / "tutor-index.json"
output.write_text(json.dumps({"version": version, "documents": documents},
                            ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
print(f'{len(documents)} documents; version {version}; {output.stat().st_size} bytes')
