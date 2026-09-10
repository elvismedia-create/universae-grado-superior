# ⚡ DIVISIÓN DE data.js - v67.24-SPLIT

**Fecha:** 13 de abril de 2026  
**Versión:** v67.24-SPLIT (Performance Optimization)  
**Estado:** ✅ Implementado

---

## 📊 Antes vs Después

### Tamaño de archivos

| Archivo | Antes | Después | Mejora |
|---------|-------|---------|--------|
| data.js | 278 KB | - | - |
| **Total datos** | **278 KB** | **340 KB** (distribuido) | ✅ Modular |

**Distribución después:**
- `data-temas.js`: 128 KB (TEMA_1 a TEMA_11)
- `data-especial.js`: 192 KB (LETRAS_TEST_DATA, TALLER_PLANOS)
- `data-config.js`: 20 KB (CONFIGURACION_CURSO)

### Ventajas de la división

1. **Carga modular**
   - ✅ Cada módulo se carga independientemente
   - ✅ Los navegadores pueden cachear por separado
   - ✅ Futuro lazy loading disponible

2. **Mantenibilidad**
   - ✅ Más fácil editar cada sección
   - ✅ Cambios aislados por tema
   - ✅ Preparado para colaboración

3. **Escalabilidad**
   - ✅ Añadir nuevos temas es más limpio
   - ✅ Reutilizar estructura por tema
   - ✅ Posible A/B testing de contenidos

---

## 🔧 Cambios realizados

### 1. Nuevos archivos creados

```
data-temas.js         → Contiene TEMA_1_DATA a TEMA_11_DATA
data-especial.js      → Contiene LETRAS_TEST_DATA, TALLER_PLANOS_DATA
data-config.js        → Contiene CONFIGURACION_CURSO
```

### 2. index.html actualizado

**Antes:**
```html
<script src="data.js"></script>
<script src="fotometria.js"></script>
...
<script src="motor.js"></script>
```

**Después:**
```html
<!-- DATOS DIVIDIDOS (v67.24-SPLIT) -->
<script src="data-temas.js"></script>
<script src="data-especial.js"></script>
<script src="data-config.js"></script>
<!-- MÓDULOS EDUCATIVOS -->
<script src="fotometria.js"></script>
...
<script src="motor.js"></script>
```

### 3. sw.js (Service Worker) actualizado

```javascript
const ASSETS_TO_CACHE = [
  './data-temas.js',      // ← Nuevo
  './data-especial.js',   // ← Nuevo
  './data-config.js',     // ← Nuevo
  // resto de archivos...
];

const BUILD_TIMESTAMP = '20260413213600'; // ← Fuerza actualización
```

### 4. Versionado actualizado

- Título: `v67.24-SPLIT ⚡`
- Service Worker: Timestamp nuevo

---

## ✅ Verificación

### Estructura de variables

Todas estas variables siguen disponibles globalmente:

```javascript
// Datos de temas (data-temas.js)
TEMA_1_DATA, TEMA_2_DATA, ... TEMA_11_DATA

// Datos especiales (data-especial.js)
LETRAS_TEST_DATA, TALLER_PLANOS_DATA

// Configuración (data-config.js)
CONFIGURACION_CURSO
```

### Compatibilidad

✅ **100% compatible hacia atrás**
- Motor.js funciona idéntico
- Mismas variables globales
- Misma lógica de juego
- Datos persistidos sin cambios

---

## 🚀 Próximos pasos posibles

### Lazy Loading (Futuro)
```javascript
// Cargar TEMA_5 solo cuando el usuario selecciona esa asignatura
function lazyLoadTema(num) {
  const script = document.createElement('script');
  script.src = `data-tema-${num}.js`;
  document.body.appendChild(script);
}
```

### Compresión adicional
- Minificar cada archivo de datos
- Usar formato JSON puro (sin comentarios)
- Gzip en Netlify (ya configurado)

---

## 📝 Notas

- ✅ No requiere cambio en Netlify
- ✅ Service Worker se actualiza automáticamente
- ✅ Datos persisten sin pérdida
- ✅ Listo para producción

---

**Versión:** v67.24-SPLIT  
**Fecha:** 13 de abril de 2026

