(function (root) {
  'use strict';

  const isAnnotationPointer = pointerType => pointerType !== 'touch';
  const scaledSize = (width, height, zoom) => ({ width: width * zoom, height: height * zoom });
  const panShift = (previous, current) => ({
    x: current.clientX - previous.clientX,
    y: current.clientY - previous.clientY
  });

  function normalizedPoint(rect, clientX, clientY) {
    const clamp = value => Math.max(0, Math.min(1, value));
    return {
      x: clamp(rect.width ? (clientX - rect.left) / rect.width : 0),
      y: clamp(rect.height ? (clientY - rect.top) / rect.height : 0)
    };
  }

  const api = { isAnnotationPointer, scaledSize, panShift, normalizedPoint };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.PdfViewerGeometry = api;
})(typeof window !== 'undefined' ? window : globalThis);
