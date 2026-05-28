import pool from '../../bd/conexion.bd.mjs'

export async function obtenerTodos() {

    const respuesta = await pool.query('SELECT * FROM PRODUCTOS')
    
    return respuesta.rows
}

export async function crearUno(datos){

    const {producto, precio} = datos
    const resultado = await pool.query(`
        INSERT INTO PRODUCTOS
            (PRODUCTO, PRECIOS) 
            VALUES 
                (1, 2)
            RETURNING
                id, producto, precio`,
    [
        producto,
        precio
    ])
}