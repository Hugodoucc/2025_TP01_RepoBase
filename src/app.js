// Versión inicial + feature mostrar info.txt

function saludar() {
  console.log("Hola mundo");
}

// --- feature: mostrar contenido de data/info.txt ---
/**
 * Carga y retorna el contenido de data/info.txt.
 * Si no puede leerlo (p.ej. fuera de Node), devuelve un mensaje de demo.
 */
function loadInfo() {
  try {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, '..', 'data', 'info.txt');
    const raw = fs.readFileSync(filePath, 'utf-8');
    return raw.trim();
  } catch (e) {
    return "[demo] No se pudo leer data/info.txt en este entorno";
  }
}

// Punto de entrada cuando ejecutás con Node: `node src/app.js`
if (typeof require !== 'undefined' && require.main === module) {
  saludar();
  console.log("Contenido de info.txt:", loadInfo());
}


// Export para tests o reuso
module.exports = { saludar, loadInfo };
