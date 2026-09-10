// ========================================================
// PDFs DE ESTUDIO - TRIMESTRE 3
// Enlaces a los PDF originales del temario, alojados en un
// repositorio de GitHub separado (no forma parte del despliegue
// de la app, para no aumentar el tamaño de la PWA).
// Repo: https://github.com/elvismedia-create/Temario---Trimestre-3-Universae
//
// IMPORTANTE: usamos la vista "blob" de GitHub (previsualización HTML del
// PDF en el navegador) en lugar de raw.githubusercontent.com. La URL "raw"
// fuerza una descarga de archivo binario (application/octet-stream), lo
// cual funciona en Mac (se guarda en Descargas) pero NO funciona dentro de
// un PWA instalado en iPad/iPhone, que no tiene gestor de descargas propio
// y descarta el archivo en silencio. La vista "blob" es una página HTML
// normal con un visor de PDF embebido, que sí funciona en todos los casos.
// ========================================================

const PDF_T3_BASE = "https://github.com/elvismedia-create/Temario---Trimestre-3-Universae/blob/main/";

// Mapa: bloque (pestana) -> índice de unidad (1-based, tal como aparecen
// en el array "asignaturas" de data-config.js, donde el índice 0 es
// siempre el simulacro semestral) -> URL del PDF correspondiente.
const PDF_T3_URLS = {
  // 1. Instalaciones Domóticas
  pestana5b: {
    1: PDF_T3_BASE + "Domotica/U1%20La%20dom%C3%B3tica.pdf",
    2: PDF_T3_BASE + "Domotica/U2%20Elementos%20de%20las%20instalaciones.%20Sensores%20y%20actuadores.pdf",
    3: PDF_T3_BASE + "Domotica/U3%20Sistemas%20dom%C3%B3ticos%20basados%20en%20corrientes%20portadoras%20X10.pdf",
    4: PDF_T3_BASE + "Domotica/U4%20Sistemas%20dom%C3%B3ticos%20basados%20en%20bus%20de%20campo.%20El%20sistema%20KNX.pdf",
    5: PDF_T3_BASE + "Domotica/U5%20Sistemas%20dom%C3%B3ticos%20basados%20en%20aut%C3%B3matas%20programables.pdf",
    6: PDF_T3_BASE + "Domotica/U6%20Sistemas%20dom%C3%B3ticos%20basados%20en%20electr%C3%B3nica.%20Arduino.pdf",
    7: PDF_T3_BASE + "Domotica/U7%20Sistemas%20dom%C3%B3ticos%20basados%20en%20asistentes%20virtuales.%20Alexa.pdf",
    8: PDF_T3_BASE + "Domotica/U8%20Nuevas%20Tecnolog%C3%ADas.pdf"
  },
  // 2. Instalaciones de Distribución
  pestana6: {
    1: PDF_T3_BASE + "instalaciones%20de%20distribucion/U1%20Prevenci%C3%B3n%20de%20riesgos%20laborales%20y%20protecci%C3%B3n%20ambiental.pdf",
    2: PDF_T3_BASE + "instalaciones%20de%20distribucion/U2%20Configuraci%C3%B3n%20de%20los%20centros%20de%20transformaci%C3%B3n.pdf",
    3: PDF_T3_BASE + "instalaciones%20de%20distribucion/U3%20Operaciones%20de%20mantenimiento%20de%20centros%20de%20transformaci%C3%B3n.pdf",
    4: PDF_T3_BASE + "instalaciones%20de%20distribucion/U4%20Configuraci%C3%B3n%20de%20redes%20de%20distribuci%C3%B3n%20de%20baja%20tensi%C3%B3n.pdf",
    5: PDF_T3_BASE + "instalaciones%20de%20distribucion/U5%20Operaciones%20de%20montaje%20y%20mantenimiento%20de%20baja%20tensi%C3%B3n..pdf",
    6: PDF_T3_BASE + "instalaciones%20de%20distribucion/U6%20Configuraci%C3%B3n%20de%20instalaciones%20de%20enlace.pdf",
    7: PDF_T3_BASE + "instalaciones%20de%20distribucion/U7%20Montaje%20y%20mantenimiento%20de%20instalaciones%20de%20enlace.pdf"
  },
  // 3. Infraestructuras de Telecomunicación
  pestana7: {
    1: PDF_T3_BASE + "Infraestructuras%20comunes%20de%20telecomunicaci%C3%B3n%20en%20viviendas%20y%20edificios/U1%20Televisi%C3%B3n%20Terrestre.%20Transmisi%C3%B3n%20de%20la%20se%C3%B1al.pdf",
    2: PDF_T3_BASE + "Infraestructuras%20comunes%20de%20telecomunicaci%C3%B3n%20en%20viviendas%20y%20edificios/U2%20Propagaci%C3%B3n%20de%20la%20se%C3%B1al.pdf",
    3: PDF_T3_BASE + "Infraestructuras%20comunes%20de%20telecomunicaci%C3%B3n%20en%20viviendas%20y%20edificios/U3%20Sistemas%20de%20recepci%C3%B3n%20de%20TV%20terrestre.pdf",
    4: PDF_T3_BASE + "Infraestructuras%20comunes%20de%20telecomunicaci%C3%B3n%20en%20viviendas%20y%20edificios/U4%20Sistema%20de%20recepci%C3%B3n%20de%20TV%20por%20sat%C3%A9lite.pdf",
    5: PDF_T3_BASE + "Infraestructuras%20comunes%20de%20telecomunicaci%C3%B3n%20en%20viviendas%20y%20edificios/U5%20Telefon%C3%ADa%20interior%20e%20intercomunicaci%C3%B3n.pdf",
    6: PDF_T3_BASE + "Infraestructuras%20comunes%20de%20telecomunicaci%C3%B3n%20en%20viviendas%20y%20edificios/U6%20Sistemas%20de%20telefon%C3%ADa%20y%20videoporter%C3%ADa.pdf",
    7: PDF_T3_BASE + "Infraestructuras%20comunes%20de%20telecomunicaci%C3%B3n%20en%20viviendas%20y%20edificios/U7%20Sonido%20y%20megafon%C3%ADa.pdf"
  },
  // 4. Máquinas Eléctricas
  pestana8: {
    1: PDF_T3_BASE + "Maquinas%20electricas/U1%20Introducci%C3%B3n%20al%20taller%20de%20m%C3%A1quinas%20el%C3%A9ctricas.pdf",
    2: PDF_T3_BASE + "Maquinas%20electricas/U2%20Nociones%20de%20magnetismo.pdf",
    3: PDF_T3_BASE + "Maquinas%20electricas/U3%20Interpretaci%C3%B3n%20de%20documentaci%C3%B3n%20t%C3%A9cnica%20en%20m%C3%A1quinas%20el%C3%A9ctricas.pdf",
    4: PDF_T3_BASE + "Maquinas%20electricas/U4%20Construcci%C3%B3n%20de%20transformadores%20el%C3%A9ctricos%20de%20peque%C3%B1a%20potencia.pdf",
    5: PDF_T3_BASE + "Maquinas%20electricas/U5%20Ensayos%20de%20transformadores%20el%C3%A9ctricos.pdf",
    6: PDF_T3_BASE + "Maquinas%20electricas/U6%20M%C3%A1quinas%20de%20corriente%20continua%20y%20sus%20bobinados.pdf",
    7: PDF_T3_BASE + "Maquinas%20electricas/U7%20Mantenimiento%20y%20reparaci%C3%B3n%20de%20m%C3%A1quinas%20el%C3%A9ctricas.pdf",
    8: PDF_T3_BASE + "Maquinas%20electricas/U8%20Ensayos%20de%20m%C3%A1quinas%20el%C3%A9ctricas%20de%20corriente%20continua.pdf",
    9: PDF_T3_BASE + "Maquinas%20electricas/U9%20M%C3%A1quinas%20de%20corriente%20alterna%20y%20sus%20bobinados.pdf",
    10: PDF_T3_BASE + "Maquinas%20electricas/U10%20Mantenimiento%20y%20reparaci%C3%B3n%20de%20m%C3%A1quinas%20el%C3%A9ctricas%20de%20corriente%20alterna.pdf",
    11: PDF_T3_BASE + "Maquinas%20electricas/U11%20Ensayos%20de%20m%C3%A1quinas%20el%C3%A9ctricas%20de%20corriente%20alterna.pdf",
    12: PDF_T3_BASE + "Maquinas%20electricas/U12%20Instalaci%C3%B3n%20de%20los%20motores%20el%C3%A9ctricos.pdf",
    13: PDF_T3_BASE + "Maquinas%20electricas/U13%20Prevenci%C3%B3n%20de%20riesgos%20laborales%20y%20protecci%C3%B3n%20ambiental.pdf"
  }
};
