// Importamos para poder trabajar con la librería de Express
import express from 'express'

import { validarId } from './middlewares.mjs'

import { obtenerAnimes, obtenerIdAnime, generarResumenAnimes } from './funciones.mjs'

const PUERTO = 3000

// Inicializamos una instancia de Express. Para realizar enrutamientos y middlewares.
const app = express()

// Verbo o acción para obtener los animes
app.get('/api/v1/animes', obtenerAnimes)

// Verbo o acción para obtener el anime por su id
app.get('/api/v1/animes/:id', validarId, obtenerIdAnime)

// Endpoint de Procedimiento ajeno a la API REST
app.get('/ejecutar-proceso-resumen', generarResumenAnimes)

//Preparo al puerto para ser escuchado
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en: http://localhost:${PUERTO}`)
})