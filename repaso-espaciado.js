(function (root) {
  'use strict';

  const intervals = [1, 3, 7, 14, 30, 60];

  function dayKey(date = new Date()) {
    const value = date instanceof Date ? date : new Date(date);
    return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
  }

  function addDays(day, count) {
    const [year, month, date] = day.split('-').map(Number);
    return dayKey(new Date(year, month - 1, date + count));
  }

  function ensureState(estado, today = dayKey()) {
    if (!estado.srs || typeof estado.srs !== 'object' || Array.isArray(estado.srs)) estado.srs = {};
    for (const id of estado.dom || []) {
      if (!estado.srs[id]) {
        estado.srs[id] = {
          streak: 3,
          intervalDays: 0,
          dueDate: today,
          lastReviewDate: null,
          confidence: 'anterior'
        };
      }
    }
    return estado;
  }

  function isDue(record, today = dayKey()) {
    return Boolean(record && typeof record.dueDate === 'string' && record.dueDate <= today);
  }

  function dueQuestions(estado, questions, today = dayKey()) {
    const srs = estado?.srs || {};
    const legacy = new Set(estado?.dom || []);
    return questions.filter(question => isDue(srs[question.id], today) ||
      (!srs[question.id] && legacy.has(question.id)));
  }

  function review(previous, correct, confidence, today = dayKey()) {
    const prior = previous && typeof previous === 'object' ? previous : {};
    const oldStreak = Number.isInteger(prior.streak) && prior.streak > 0 ? prior.streak : 0;
    const validConfidence = correct && ['sabia', 'duda', 'descarte'].includes(confidence)
      ? confidence : 'fallo';
    let streak = oldStreak;
    let dueDate = prior.dueDate;

    if (validConfidence === 'sabia') {
      if ((!dueDate || dueDate <= today) && prior.lastReviewDate !== today) {
        streak += 1;
        dueDate = addDays(today, intervals[Math.min(streak - 1, intervals.length - 1)]);
      } else if (!dueDate || dueDate <= today) {
        dueDate = addDays(today, 1);
      }
    } else {
      streak = validConfidence === 'duda' ? Math.min(oldStreak, 1) : 0;
      dueDate = addDays(today, 1);
    }

    return {
      streak,
      intervalDays: Math.max(0, Math.round((new Date(`${dueDate}T12:00:00`) - new Date(`${today}T12:00:00`)) / 86400000)),
      dueDate,
      lastReviewDate: today,
      confidence: validConfidence,
      mastered: streak >= 3
    };
  }

  const api = { dayKey, addDays, ensureState, isDue, dueQuestions, review };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.RepasoEspaciado = api;
})(typeof window !== 'undefined' ? window : globalThis);
