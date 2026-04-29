import express from "express"

const PUERTO = 3000

const app = express()

// Middlewares
function middleware1(req, res, next){
    console.log('middleware 1')
    next()
}

// La ruta del use sirve como prefijo /----
app.use('/', middleware1)

app.get('/',(req, res)=>{

    console.log('ejecución del callback final')

    res.send('hola')

})

app.get('/saludo',(req, res)=>{

    console.log('ejecución del callback final')

    res.send('hola  / ruta saludo')

})
app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})



