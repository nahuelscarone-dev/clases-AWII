// Definimos una función middleware para validar el ID que llega por la URL (endpoint)
export function validarId(req, res, next) {

    // Por seguridad convertimos el parámetro ID en un número
    const id_anime = Number(req.params.id)

    // Si el resultado no es un número (isNaN), enviamos un error y cortamos la petición
    if (isNaN(id_anime)) {

        const respuesta = {
            mensaje: 'Error de validación: el Id ingresado no es un número. Por favor, escriba un carácter numérico.'
        }
        res.status(400).json(respuesta)

    } else {
        // Si el ID es válido, usamos next() para pasar a la siguiente función (el controlador)
        next()
    }
}