import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt, { hash } from 'bcryptjs';

const PUERTO = 3000;

////////////////

////////////////
const app = express();
app.use(express.json()) //<--- formato JSON -> convierte en objeto dentro de body
app.use(express.urlencoded({ extended: true }))  // <--- format urlencoded -> convierte en un objeto dentro de body

// Admin CRUD 
app.use('/admin', express.static('./fronts/front-admin'))

// Login
app.use('/login', express.static('./fronts/front-login'))

// Autenticar
app.post('/autenticar', (req, res)=>{
    //Actividad 5
    // Generar el ID con nanoid

})

app.post('/registrar', async (req, res) => {

    // 1- Capturamos los datos
    // req.body //<--- tanto json y urlencoded se guardan aquí
    const { usuario, pass } = req.body
    console.log(req.body)

    // 2- Control
    if (!usuario || !pass) {
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })
    }

     const hash = await bcrypt.hash(pass, salt);
    // 3- Encriptamos clave
    try {
        const salt = await bcrypt.genSalt(10); //<--- Genera una especie de loop dentro de la encriptación. Previene el ataque arcoiris de fuerza bruta

       
        console.log(hash)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: 'El registro no se pudo realizar'
        })
    }
    // 4- Pasamos a la BD
    try {
        const resultado = await pool.query(`
        INSERT INTO usuarios
            (username, password_hash)
        VALUES
            ($1, $2)
        RETURNING
            id, username`,
            [
                usuario,
                hash
            ]
        )
        console.log(resultado)
        // 5- Verificamos si se realizó la inserción
        if (resultado.rowCount > 0) {
            return res.json({ mensaje: `El usuario ${usuario} se ha registrado con éxito` })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: 'Error al cargar el usuario'
        })
    }

})

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});