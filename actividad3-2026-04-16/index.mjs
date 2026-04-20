import http from "node:http"
import { obtenerDatosAPI } from "./modulos/consultas.mjs"
import { guardarDatos, leerDatos } from "./modulos/archivos.mjs"


const servidor = http.createServer(async (peticion, respuesta) => {
    if (peticion.method === "GET") {

        if (peticion.url === "/usuarios") {

            try {
                // 1. Buscamos la información externa usando el módulo encargado de las consultas
                const datosAPI = await obtenerDatosAPI();
                const contenidoJSON = JSON.stringify(datosAPI, null, 4);

                // 2. Almacenamos el resultado en un archivo a través del módulo de archivos
                await guardarDatos(contenidoJSON);

                // 3. Enviamos la información procesada de vuelta al cliente
                respuesta.statusCode = 201;
                respuesta.setHeader('Content-Type', 'application/json');
                return respuesta.end(contenidoJSON);

            } catch (error) {
                console.error("Error capturado en ruta /usuarios:", error.message);
                respuesta.statusCode = 500;
                return respuesta.end("Error interno en el servidor al intentar procesar /usuarios");
            }

        }

        if (peticion.url === "/usuarios/filtrados") {
            try {
                // 1. Leemos el archivo y lo convertimos a objeto JS usando nuestro módulo especializado
                const datosConvertidos = await leerDatos();

                // 2. Aplicamos el filtro para quedarnos con los usuarios requeridos
                const usuariosFiltrados = datosConvertidos.filter(usuario => usuario.id <= 10);

                // 3. Retornamos la respuesta exitosa al navegador
                respuesta.setHeader('Content-Type', 'application/json');
                respuesta.statusCode = 200;
                return respuesta.end(JSON.stringify(usuariosFiltrados, null, 4));

            } catch (error) {
                // El error ENOENT nos avisa que todavía no se ha creado el archivo datos.json
                if (error.code === 'ENOENT') {

                    respuesta.statusCode = 404; // Código 404: Se usa porque no se encontró el archivo físico en el servidor
                    return respuesta.end("Aviso: Falta archivo datos.json. Por favor ejecute /usuarios primero.");
                }
                // Código 500: Error inesperado al intentar acceder a los datos guardados en el disco
                respuesta.statusCode = 500;
                return respuesta.end("Ocurrio un error interno en el servidor al intentar leer los datos");
            }
        }
    }

    // Ruta por defecto para URLs no válidas
    // Código 404: El usuario ingresó una dirección que no está configurada en nuestro servidor.
    respuesta.statusCode = 404
    respuesta.end("Recurso no encontrado")
})

servidor.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
})
