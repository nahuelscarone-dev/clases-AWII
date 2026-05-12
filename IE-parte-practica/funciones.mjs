import { animes } from './animes.mjs'

// Creamos la función para poder obtener todos los animes
export function obtenerAnimes(req, res) {

    // Convertimos la respuesta del servidor en formato JSON antes de enviárselo al cliente (el navegador)
    res.status(200).json(animes)
}


// Creamos la función para obtener el anime por Id
export function obtenerIdAnime(req, res) {

    // Declaramos la variable id_producto y le asignamos la propiedad params con el parámetro del id
    const id_producto = parseInt(req.params.id)

    // Filtramos a los animes por su Id
    const animesFiltradosPorId = animes.filter((anime) => {

        // Comparamos estrictamente si el id del producto es igual a un número que corresponde al parámetro Id
        return id_producto === Number(anime.id)
    })

    // Nos aseguramos de que el anime exista
    if (animesFiltradosPorId.length > 0) {

        res.status(200).json(animesFiltradosPorId)

    } else {
        const respuesta = {

            mensaje: 'Anime no encontrado'
        }
        res.status(404).json(respuesta)
    }
}

// Procedimiento: ejecuta un proceso sobre los datos para devolver un resultado estadístico
export function generarResumenAnimes(req, res) {
    let totalCapitulos = 0
    let totalFinalizados = 0

    // Recorremos los datos para procesar la información e incrementamos las variables según sea el caso (se cuentan los capítulos por cada anime y se corrobora su estado)
    animes.forEach(anime => {
        totalCapitulos += anime["cantidad capítulos"]

        if (anime.estado === "finalizado") {
            totalFinalizados++
        }
    })

    // Preparamos la respuesta siguiendo el criterio de la API
    const respuesta = {
        mensaje: "El proceso de resumen de animes se ejecutó correctamente:",
        cantidad_animes: animes.length,
        capitulos_totales: totalCapitulos,
        animes_finalizados: totalFinalizados,
        // Aplicamos to.Fixed para reducir a 2 decimales el resultado del promedio
        promedio_capitulos: (totalCapitulos / animes.length).toFixed(2)
    }

    // Respondemos con el resultado del proceso
    res.status(200).json(respuesta)
}