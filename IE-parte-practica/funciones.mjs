import { animes } from './animes.mjs'

// Pongo las funciones en este módulo para no mezclar todo en index.mjs


// Función para obtener todos los animes
export function obtenerAnimes(req, res) {

    // Devolvemos 200 porque salió todo bien y mando el JSON
    res.status(200).json(animes)
}


// Función para obtener un anime específico.
export function obtenerIdAnime(req, res) {

    // Lo pasamos a número entero porque de los params siempre viene como texto
    const id_producto = parseInt(req.params.id)

    // Usamos filter para buscar el anime que coincida
    const animesFiltradosPorId = animes.filter((anime) => {

        // Usamos === para realizar una comparación estricta
        return id_producto === Number(anime.id)
    })

    // Si length es > 0, es porque lo encontró
    if (animesFiltradosPorId.length > 0) {

        // 200 porque lo encontró
        res.status(200).json(animesFiltradosPorId)

    } else {
        // Creamos el mensaje de que no está el anime
        const respuesta = {

            mensaje: 'Anime no encontrado'
        }
        // 404 porque no existe ese id
        res.status(404).json(respuesta)
    }
}

// Este es el procedimiento aparte. Procesa los datos y arma un resumen
export function generarResumenAnimes(req, res) {
    // Arrancan los contadores en 0
    let totalCapitulos = 0
    let totalFinalizados = 0

    // Recorremos para hacer los cálculos y generar un nuevo array a la vez
    const animesProcesados = animes.map(anime => {
        // Sumo los capítulos
        totalCapitulos += anime["cantidad capítulos"]

        // Se cuentan animes que están con estado finalizado
        if (anime.estado === "finalizado") {
            totalFinalizados++
        }

        // Armamos mi propia clasificación con varias categorías
        let clasificacion = ""
        if (anime["cantidad capítulos"] <= 12) {
            clasificacion = "Miniserie (1 Temporada)"
        } else if (anime["cantidad capítulos"] <= 24) {
            clasificacion = "Estándar (2 Temporadas)"
        } else {
            clasificacion = "Larga (Múltiples Temporadas)"
        }

        // Armamos el objeto nuevo. Usamos el spread operator (...) para copiar los datos originales y le sumo la clasificación
        return {
            ...anime,
            clasificacion_duracion: clasificacion
        }
    })

    // Armamos la respuesta final
    const respuesta = {
        mensaje: "El proceso de resumen de animes se ejecutó correctamente:",
        cantidad_animes: animes.length,
        capitulos_totales: totalCapitulos,
        animes_finalizados: totalFinalizados,
        // toFixed(2) es para que el promedio quede con dos decimales
        promedio_capitulos: (totalCapitulos / animes.length).toFixed(2),
        // Agregamos el array que modifiqué
        animes_procesados: animesProcesados
    }

    // Mandamos la respuesta al cliente
    res.status(200).json(respuesta)
}