// Middleware para validar el ID antes de que llegue a la función principal
export function validarId(req, res, next) {

    // Lo convertimos a Number porque por la URL siempre llega como texto
    const id_anime = Number(req.params.id)

    // isNaN nos sirve para ver si me mandaron letras en vez de un número
    if (isNaN(id_anime)) {

        const respuesta = {
            mensaje: 'Error de validación: el Id ingresado no es un número. Por favor, escriba un carácter numérico.'
        }
        // Se devuelve error 400 porque el usuario ingresó un dato invalidado
        res.status(400).json(respuesta)

    } else {
        // Si es un número válido, el next() deja que siga a la siguiente función (obtenerIdAnime)
        next()
    }
}