import fsp from "node:fs/promises"
import path from "node:path"

try {
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')

    const usuarios = await respuesta.json()
    const datos = usuarios.map(usuario =>(
        {
            id: usuario.id,
            nombre: usuario.name,
            correo: usuario.email
        }
    ))

    console.log(datos)

    const ruta = path.join('./DatosUsuarios.json')

    const contenido = JSON.stringify(productos, null, 4) //<-- Pasa de JS a formato JSON -> Texto
    await fsp.writeFile(ruta, contenido)

    const textoLeido = await fsp.readFile(ruta, 'utf-8');

    const datosParseados = JSON.parse(textoLeido);

    console.log(datosParseados);

} catch (error) {   
    console.log(error)
}