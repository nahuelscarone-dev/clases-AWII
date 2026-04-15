// modulo http

import http from 'node:http';
import fsp from 'node:fs/promises'
import path from 'node:path'

const app = http.createServer(async (peticion, respuesta)=>{//<--- se va a ejecutar solamente cuando haya una peticion o Request
    // console.log(peticion.url)


if(peticion.method === 'GET'){
    if(peticion.url ==='/'){
        respuesta.statusCode = 200
        return respuesta.end('Estás en la raíz') 
        }

        if(peticion.url === '/suma'){
            const resultado = (5+3).toString()
            return respuesta.end(resultado)
        }
}

if(peticion.method === 'POST'){
    if (peticion.url === '/proceso-formulario'){
        // 
        console.log('post')
        /* respuesta.on('data', (datos)=>{
            console.log(datos)    
        })*/
        return respuesta.end('Se hizo una petición con verbo POST')
    } 
if(peticion.url === '/guardar-datos'){
    const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users')
    const datosApi = await respuestaApi.text()

    try {
            await fsp.writeFile(path.join('./datosApi.txt'), datosApi)
            respuesta.statusCode = 201
            return respuesta.end('datos guardados')
    } catch (error) {
        respuesta.statusCode = 500
        return respuesta.end(`Error en el servidor: ${error}`)
    }
}
}
    //Fallback
    respuesta.statusCode = 404
    respuesta.end('Recurso no encontrado')



    // respuesta.end('Hola servidor') //<-- Lo último que tiene que aparecer, todas las configuraciones tienen que estar antes del end. No se puede ejecutar 2 veces en la misma petición
})

app.listen(3000, ()=>{
    console.log('servidor corriendo en http://localhost:3000')
})