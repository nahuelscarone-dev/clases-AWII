// import express from 'express'
import { Router } from "express"
import * as controlador from './controlador.productos.mjs'

// Instanciamos router ---> es como una rama de express
// const rutasProductos = new express.Router()
const rutasProductos = new Router()


rutasProductos.get("/api/v1/productos", controlador.obtenerTodos)
rutasProductos.get("/api/v1/productos/:id", controlador.obtenerUno)

export default rutasProductos