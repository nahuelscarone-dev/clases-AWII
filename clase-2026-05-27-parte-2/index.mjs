import express from 'express'
import './iniciar.env.mjs'
import {rutasProductos} from './modulosg/rutas.productos.mjs'

//console.log(process.env);


const PUERTO = process.env.PUERTO || 3000
const app = express()

app.use(rutasProductos)

app.listen(PUERTO)