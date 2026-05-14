// Importamos express para armar el servidor y las rutas
import express from 'express'

// Importamos el middleware
import { validarId } from './middlewares.mjs'

// Importamos las funciones
import { obtenerAnimes, obtenerIdAnime, generarResumenAnimes } from './funciones.mjs'

const PUERTO = 3000

// Inicializamos express
const app = express()

// Ruta para traer todos los animes. Usa /api/v1 para respetar la convención REST
app.get('/api/v1/animes', obtenerAnimes)

// Ruta para buscar por ID. Pongo el middleware 'validarId' antes para que corte la petición si el ID es cualquier cosa
app.get('/api/v1/animes/:id', validarId, obtenerIdAnime)

// Este es el endpoint de procedimiento. Este es ajeno a la API REST
app.get('/ejecutar-proceso-resumen', generarResumenAnimes)

// Levantamos el servidor en el puerto 3000
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en: http://localhost:${PUERTO}`)
})