// Configuración de una API REST    



// GET

// POST

// PUT

// DELETE

import productos from "./productos.mjs"


export function obtenerProductos(req, res) {

    res.json(productos)

}

export function obtenerIdProducto(req, res) {

    // Lógica extra

    const id_producto = Number(req.params.id) //--> Verificar si es un número -> Cast
    //const id_producto = Number(req.params.id) //--> 125abc -> 125
    // Filtramos

    const productosFiltrados = productos.filter((producto) => {
        return id_producto === Number(producto.id)  // -> verdadero o falso
    })


    // Lógica, verificar si hay productos
    if (productosFiltrados.length > 0) {

        res.json(productosFiltrados)
    } else {
        const respuesta = {
            mensaje: 'Producto no encontrado'
        }
        res.status(404).json(respuesta)
    }
}


export function agregarProducto(req, res) {

    // 
    const nuevoProducto = req.body // cuerpo -> siempre verificar la estructura que viene del cliente

    productos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto agregado'
    }
    res.json(respuesta)

}



export function eliminarProducto(req, res) {

    // Lógica extra

    const id_producto = Number(req.params.id) //--> Verificar si es un número -> Cast
    //const id_producto = Number(req.params.id) //--> 125abc -> 125
    // Filtramos


    const productosFiltrados = productos.filter((producto) => {
        return id_producto !== Number(producto.id)  // -> verdadero o falso
    })








    productos.length = 0 // ---> ponemos en 0
    productos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Producto eliminado'
    }
    res.json(respuesta)
}


