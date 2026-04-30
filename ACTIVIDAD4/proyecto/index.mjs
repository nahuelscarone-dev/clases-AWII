import express from 'express'

const NUEVOPUERTO = 3000

const app = express()


async function middleware(req, res, next){
    
    const respuesta  = await fetch('http://localhost:4321/usuario')

    const datosApi = await respuesta.json()
    
    const codigoEndpoint = datosApi.codigo

    const codigoParametro = parseInt(req.params.codigo)

    if(codigoEndpoint === codigoParametro){
        next()
    }

    res.status(400).json({ mensaje: "El código es incorrecto" })
}
app.get("/:codigo", middleware, (req, res) => {

    res.status(200).json({ mensaje: "El código es correcto" });
})


app.listen(NUEVOPUERTO, ()=>{
    console.log(`http://localhost:${NUEVOPUERTO}`)
})