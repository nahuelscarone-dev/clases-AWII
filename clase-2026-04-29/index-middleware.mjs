
import express from "express"

const PUERTO = 3000

const app = express()

//Middlewares
//por buena práctica usamos siguiente (next)
function middleware1(req, res, next){
    console.log('middleware1')
    const existeUsuario = true
    if(existeUsuario){
        console.log('Usuario existe --> PASA')
        return next()// <-- seguir la pila de ejecución
    }
    console.log('Usuario no existe --> NO PASA')
    res.status(403).send('Usuario no registrado')    
}

// function middleware2(req, res, next){
//     console.log('middleware 2')
//     next()  // <-- seguir la pila de ejecución
// }

app.get('/', middleware1,(req, res)=>{

    console.log('ejecución del callback final')

    res.send('hola')

})
app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})