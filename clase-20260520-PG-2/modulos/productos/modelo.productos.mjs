// MODELO -> capa conexion a datos
import pool from '../../conexion.md.mjs'

export async function obtenerTodos() {
    /* Haria una consulta a una BD */
   const resultado = await pool.query(`SELECT * 
                FROM PRODUCTOS`)
    console.log(resultado)
    // Tener un criterio de datos a pasar entre capas
    return resultado.rows
}

export async function obtenerUno(id) {
    
    // const resultado = pool.query('SELECT * FROM PRODUCTOS WHERE ID =' + id) No se hace, queda vulnerable

    const resultado = await pool.query('SELECT * FROM PRODUCTOS WHERE ID=$1',  [id])

    return resultado.rows
}

export async function eliminarUno(id){

    const resultado = await pool.query('DELETE FROM PRODUCTOS WHERE ID=$1 RETURNING id, producto, precio', [id])
    console.log(resultado)
    return resultado.rows
}