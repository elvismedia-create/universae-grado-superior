# 🔍 ANÁLISIS: LÓGICA DE LOS TESTS ACTUALES

**Analizado desde:** data-temas.js (TEMA_1: Electricidad Básica)  
**Total de preguntas:** 25 preguntas por tema  
**Estructura:** 100% consistente

---

## 📊 ESTRUCTURA BASE DE CADA PREGUNTA

```javascript
{
  id: 1001,                                    // ID único (TEMA + secuencia)
  tema: "Subtema específico",                  // Categoría dentro del tema general
  texto: "¿Pregunta?",                         // La pregunta en sí
  opciones: ["Opción A", "Opción B", ...],    // Array con 4 opciones SIEMPRE
  correctaTexto: "Opción A",                   // Respuesta (debe coincidir EXACTO)
  explicacion: "Explicación detallada..."      // Aprendizaje adicional
}
```

**REGLA CRÍTICA:** `correctaTexto` debe coincidir **EXACTAMENTE** con una de las opciones.

---

## 🎯 PATRONES OBSERVADOS

### 1. DISTRIBUCIÓN POR SUBTEMA

El TEMA_1 tiene estos subtemas:

| Subtema | Preguntas | IDs |
|---------|-----------|-----|
| Electricidad básica | 1 | 1001 |
| Magnitudes eléctricas | 3 | 1002-1004 |
| Unidades | 3 | 1005-1007 |
| Potencia | 2 | 1008, 1016 |
| Seguridad | 4 | 1009, 1018-1020 |
| Normativa | 1 | 1010 |
| Electricidad (CC/CA) | 2 | 1011-1012 |
| Suministro | 1 | 1013 |
| Tensión | 1 | 1014 |
| Conductores | 1 | 1015 |
| Instalaciones | 1 | 1017 |
| Ley Ohm | 1 | 1021 |
| Instalación | 1 | 1022 |
| Corriente | 1 | 1023 |
| Componentes | 1 | 1024 |
| Magnitudes | 1 | 1025 |

---

## 📝 TIPOS DE PREGUNTAS

### A) DEFINICIONES CONCEPTUALES (60% de preguntas)
```javascript
// "¿Qué es X?"
texto: "¿Qué se entiende por electricidad?",
opciones: ["Definición correcta", "Concepto relacionado falso", "Otro concepto", "Distractor"],
correctaTexto: "Definición correcta"
```

**Ejemplos:**
- ID 1001: ¿Qué se entiende por electricidad?
- ID 1002: ¿Qué es la intensidad de corriente eléctrica?
- ID 1003: ¿Qué es la tensión eléctrica?
- ID 1008: ¿Qué es la potencia eléctrica?

**Estrategia de opciones:**
- ✅ Opción correcta: completa y precisa
- ❌ Opciones falsas: conceptos relacionados que confunden
- Ejemplo: Para "¿Qué es tensión?"
  - Correcta: "La diferencia de potencial..."
  - Falsas: "La intensidad", "La resistencia", "La potencia"

---

### B) VALORES Y UNIDADES (20% de preguntas)
```javascript
// "¿En qué unidad se mide X?" o "¿Qué valor es habitual?"
texto: "¿En qué unidad se mide la intensidad?",
opciones: ["Amperios (A)", "Voltios (V)", "Ohmios (Ω)", "Vatios (W)"],
correctaTexto: "Amperios (A)"
```

**Ejemplos:**
- ID 1005: ¿En qué unidad se mide la intensidad?
- ID 1006: ¿En qué unidad se mide la tensión?
- ID 1007: ¿En qué unidad se mide la resistencia?
- ID 1014: ¿Qué tensión es habitual en viviendas?

**Estrategia de opciones:**
- ✅ Respuesta correcta: valor/unidad preciso
- ❌ Opciones falsas: otras unidades existentes
- Ejemplo: Para tensión en viviendas
  - Correcta: "230 V" (actual, REBT 2019)
  - Falsas: "220 V" (histórico), "400 V" (trifásica), "125 V" (raro)

---

### C) FÓRMULAS Y CÁLCULOS (10% de preguntas)
```javascript
// Directas: "¿Cuál es la fórmula?"
texto: "Relación entre potencia, tensión e intensidad",
opciones: ["P = V × I", "P = V + I", "P = V / I", "P = I / V"],
correctaTexto: "P = V × I"
```

**Ejemplos:**
- ID 1015: P = V × I
- ID 1021: Ley de Ohm (V = I · R)
- ID 1025: P = V × I (repetida para refuerzo)

---

### D) CLASIFICACIONES Y CONCEPTOS (10% de preguntas)
```javascript
// "¿Cuál es el tipo/clase de X?"
texto: "¿Qué es la corriente continua?",
opciones: ["La que circula siempre en el mismo sentido", "La que cambia", "La doméstica", "La trifásica"],
correctaTexto: "La que circula siempre en el mismo sentido"
```

**Ejemplos:**
- ID 1011: ¿Qué es corriente continua?
- ID 1012: ¿Qué es corriente alterna?
- ID 1018: ¿Qué es contacto directo?
- ID 1019: ¿Qué es contacto indirecto?

---

## 🎓 EXPLICACIONES: CLAVE DEL APRENDIZAJE

Cada pregunta tiene una explicación que:

1. **Confirma la respuesta correcta** con contexto
   ```
   explicacion: "En honor a André-Marie Ampère. Un Amperio equivale..."
   ```

2. **Añade contexto educativo** (historia, referencia, normativa)
   ```
   explicacion: "Aprobado por el Real Decreto 842/2002..."
   ```

3. **Usa analogías** para entender conceptos
   ```
   explicacion: "Imagina una tubería de agua: la intensidad sería la cantidad de litros..."
   ```

4. **Conecta con la realidad**
   ```
   explicacion: "En España, la tensión nominal monofásica... es 230V"
   explicacion: "Es la típica de baterías, pilas y electrónica (móviles, ordenadores)"
   ```

5. **Evita distractores** explicando por qué las otras opciones son falsas
   ```
   explicacion: "Los automáticos y diferenciales no están para ahorrar luz, sino para..."
   ```

---

## 🔁 PATRÓN DE CONSTRUCCIÓN

**Secuencia observada en TEMA_1:**

```
1. Concepto fundamental        (1001: ¿Qué es electricidad?)
2. Magnitudes principales      (1002-1004: Intensidad, Tensión, Resistencia)
3. Unidades de magnitudes      (1005-1007: A, V, Ω)
4. Aplicaciones (Potencia)     (1008: ¿Qué es potencia?)
5. Seguridad                   (1009: Riesgos)
6. Normativa                   (1010: REBT)
7. Tipos de corriente          (1011-1013: CC, CA, red doméstica)
8. Valores normalizados        (1014: 230V)
9. Fórmulas clave              (1015, 1021, 1025: P=VI, V=IR)
10. Componentes y protecciones (1016-1020, 1024)
11. Repaso profundo            (1022-1025: aplicación)
```

---

## ✅ CHECKLIST PARA NUEVAS PREGUNTAS

Cuando crees 30-50 preguntas adicionales, asegúrate de:

- [ ] **ID único**: TEMA_X_DATA con IDs XXXX-XXXX
- [ ] **Estructura completa**: id, tema, texto, opciones (4), correctaTexto, explicacion
- [ ] **correctaTexto exacto**: Coincidir al 100% con una opción
- [ ] **Opción falsa A**: Concepto relacionado que confunde
- [ ] **Opción falsa B**: Otra opción plausible
- [ ] **Opción falsa C**: Distractor menos obvio
- [ ] **Explicación educativa**: Mínimo 1 frase, máximo 3
- [ ] **Sintaxis JSON válida**: Comillas, comas, corchetes
- [ ] **Variedad de tipos**: Mix de definiciones, valores, fórmulas, clasificaciones

---

## 💡 CÓMO ESCALAR A 30-50 PREGUNTAS

**Partiendo de 10 preguntas oficiales:**

### Estrategia 1: Ampliar por subtema (Recomendado)
```
10 preguntas + 20-30 variaciones = 30-40 preguntas

Ejemplo: Si tienes "¿Qué es corriente continua?"
- Pregunta 1: Definición básica
- Pregunta 2: Dónde se usa (aplicación)
- Pregunta 3: Comparativa con CA
- Pregunta 4: Ejemplo práctico
- Pregunta 5: Característica clave (color normalizado)
```

### Estrategia 2: Profundizar con cálculos
```
Si tienes P = V × I:
- Pregunta 1: ¿Cuál es la fórmula?
- Pregunta 2: Si V sube y I cte, ¿qué pasa a P?
- Pregunta 3: Calcula P con V y I dados
- Pregunta 4: Despejar V o I
```

### Estrategia 3: Agregar normativa y aplicación
```
Para cada concepto, una pregunta de:
- Normativa (REBT, estándares)
- Seguridad (riesgos, protecciones)
- Aplicación práctica (casos reales)
```

---

## 📌 CONCLUSIÓN

**Lógica = Estructura consistente + Escalabilidad**

- ✅ Todas las preguntas siguen el mismo JSON
- ✅ Las explicaciones son educativas (no solo "X es incorrecto")
- ✅ Las opciones falsas son creíbles (no obvias)
- ✅ Hay variedad de tipos sin perder coherencia
- ✅ Es muy fácil replicar el patrón 10 → 50 preguntas

**Cuando pases tus tests, aplicaré esta lógica exacta.** 🎯

---

