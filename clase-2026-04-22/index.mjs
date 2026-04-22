import express from "express"

const PUERTO = 3000

// Instancia servidor express
const app = express()

app.get('/', (req, res) => {

    res.set('content-type', 'text/html') //<-- cabecera 
    res
        .status(201) //<-- cod  de estado
        .end('<h1>Hola con get</h1>')
})

app.get('/saludo', (req, res) => {
    res.status(304)
    res.end('Hola pedazo de mastodonte xd')
})

// app.get('/saludo', (req, res)=>{
//     res.status(304)
//     res.end('Hola pedazo de mastodonte xd')
// }) 

app.get('/materias', (req, res) => {
    res.set('content-type', 'application/json')


    res
        .status(200)
        .end(`{
            
            "materia1": "AW2",
            "materia2": "Análisis de Sistemas"

            },{
            "Año" :"3er año",
            "Semestre" : "Quinto"
            }`)
})

app.post('/', (req, res) => {

    res.set('content-type', 'application/json')
    res.end('{"materia": "aw2"}')
})


// abrir un puerto
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})