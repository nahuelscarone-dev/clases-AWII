// Leer una API

try {
    // Hacer una petición con Fetch --> Promesas
   const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   
   // Extraemos del cuerpo de la petición los datos
   const productos = await respuesta.json() // Transforma el cuerpo "cadenas de texto" a un objeto/arreglo de JS
   console.log(productos)
} catch (error) {
    console.log(error)
}