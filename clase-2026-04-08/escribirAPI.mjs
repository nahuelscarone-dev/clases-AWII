// Leer una API
import { profileEnd } from "node:console"
import fsp from "node:fs/promises"
import path from "node:path"



try {
    // Hacer una petición con Fetch --> Promesas
   const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   
   // Extraemos del cuerpo de la petición los datos
   const productos = await respuesta.json() // Transforma el cuerpo "cadenas de texto" a un objeto/arreglo de JS
   
   // Creamos la ruta
//    const ruta = path.join('.','api.txt')
//    const ruta = path.join('./api.txt')
   const ruta = path.join('./api.json')
   // Guardar los datos en un archivo
   const contenido = JSON.stringify(productos, null, 4) //<-- Pasa de JS a formato JSON -> Texto
   await fsp.writeFile(ruta, contenido)
   
} catch (error) {
    console.log(error)
}