import express from "express";
// 
import multer from 'multer'

import {nanoid} from 'nanoid'

import {MimeType} from 'mime-type'
//path

const PUERTO = 3000

const mime = MimeType()
const app= express()

// Ejecutamos multer()
const almacenamiento = multer.diskStorage({

 //------------------------------------  
  destination: function (req, file, cb) {
    // chequeos
    
    cb(null, '/archivos')
  },
  // ---------------------------------
  // Gestión del nombre
  filename: function (req, file, cb) {
    // Obtengo la extensión desde el mime type
   // const extension = mime.extension(file.mimetype)
    // Creo el nombre del archivo con un identificador único
    const nombreImagen = nanoid() + '.' + mime.extension(file.mime)
    cb(null, nombreImagen)
  }
})
// documentación --> https://github.com/expresjs/multer
const subirArchivo = multer( {
    storage: almacenamiento
})

// subirAchivo.single debe tener como argumento el atributo name del archivo 
const gestionArchivos = subirArchivo.single('imagen')//<-- devuelve una función


//use por defecto utiliza la ruta raíz /, pero la utiliza como prefijo
app.use('/admin',express.static('./front-admin'))
app.use('/archivos',express.static('./archivos'))

app.post('/subir-archivo',(req, res)=>{

    //Verificamos el proceso de subida
    gestionArchivos(req,res, (error)=>{
        // si hay error respondemos
        if(error) return res.status(500).json({mensaje: 'Error en el servidor'})
        
        //si no hay error
        //req.body <---- app.use(express.json())
        console.log(req.file)        
        //---
        res.json({mensaje: 'ruta subida de archivos del formulario'})
    })
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})