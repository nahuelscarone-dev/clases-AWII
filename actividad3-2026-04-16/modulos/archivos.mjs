import fsp from 'node:fs/promises';
import path from 'node:path';

// Definimos dónde se ubica el archivo datos.json para usarlo en el servidor
const rutaArchivo = path.join("./datos.json");

export async function guardarDatos(contenidoJSON) {
    await fsp.writeFile(rutaArchivo, contenidoJSON);
}

export async function leerDatos() {
    const contenidoLeido = await fsp.readFile(rutaArchivo, 'utf-8');
    // Pasamos el contenido de texto plano a una estructura de objeto o array (JSON)
    return JSON.parse(contenidoLeido);
}
