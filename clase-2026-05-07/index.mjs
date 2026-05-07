import express, { json } from "express"
import {
    obtenerProductos, 
    obtenerIdProducto, 
    agregarProducto,
    eliminarProducto, 
    modificarProducto} from "./funciones.mjs"

const PUERTO = 3000
const app = express()
app.use(express.json()) // para avisar a express que voy a mandar datos del tipo json por el cuerpo

// GET  /api/v1/productos

app.get('/api/v1/productos', obtenerProductos)


// GET  /api/v1/productos:id

app.get('/api/v1/productos/:id',obtenerIdProducto)

// POST /api/v1/productos  --> damos de alta un registro
app.post('/api/v1/productos', agregarProducto)


// PUT /api/v1/productos/:id --> modificar un registro
app.put('/api/v1/productos/:id', modificarProducto)

// DELETE api/v1/productos/:id --> eliminar un registro

app.delete('/api/v1/productos/:id', eliminarProducto)




app.listen(PUERTO)