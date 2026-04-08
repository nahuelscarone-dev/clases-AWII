// console.log('Hola node')

// Vamos a leer un archivo txt

import fsp from "node:fs/promises"

// fsp es por el nombre del File System Promises (por comisión)
try {
  const contenido = await fsp.readFile('./texto.txt','utf8')
//   console.log(contenido.toString())
  console.log(contenido)
} catch (error) {
    console.log(error)
}