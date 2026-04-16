import http from 'node:http';
import fsp from 'node:fs/promises'
import path from 'node:path'


const app = http.createServer(async (peticion, respuesta) => {//<--- se va a ejecutar solamente cuando haya una peticion o Request
    console.log(peticion.url)


    if (peticion.method === 'GET') {
        if (peticion.url === '/usuarios') {
            respuesta.statusCode = 200

            try {
                // Hacer una petición con Fetch --> Promesas
                const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users')

                // Extraemos del cuerpo de la petición los datos
                const datosApi = await respuestaApi.text() // Transforma el cuerpo "cadenas de texto" a un objeto/arreglo de JS

                const rutaApi = path.join('./api.json', datosApi)
                // Guardar los datos en un archivo
                const contenidoApi = JSON.stringify(datosApi, null, 4) //<-- Pasa de JS a formato JSON -> Texto
                await fsp.writeFile(rutaApi, contenidoApi)
                return respuestaApi.end('datos guardados', 'utf-8')
            } catch (error) {
                respuesta.statusCode = 500
                return respuesta.end(`Error en el servidor: ${error}`)
            }
        }
    }
    //Fallback
            respuesta.statusCode = 404
            respuesta.end('Recurso no encontrado')
})


app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})