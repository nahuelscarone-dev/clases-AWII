import * as modelo from './modelo.productos.mjs'

export async  function obtenerTodos(req, res){

    const productos =  await modelo.obtenerTodos()
    
    if(productos.length === 0){
        return res.status(404).json({mensaje: 'Registros no encontrados'})
    }
    // Respuesta al cliente 
    res.json(productos)
}

export async function crearUno(req, res) {
    const datosProductos = req.body
    ///<---------------------------------
    // Futuro esto va en la capa de servicios <------ lógica de negocios
    // Verificar datos que ingresan del cliente:
    //-Si es un nro. / Si no está vacío / etc
    const producto = await modelo.crearUno(datosProductos)

    if(productos.length === 0){
        return res.status(400).json({mensaje:'No se pudo dar de alta el registro'})
    }

    // Respuesta al cliente
    res.json({mensaje: 'Mensaje dado de alta', producto: productos})
}