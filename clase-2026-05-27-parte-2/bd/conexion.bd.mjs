import pg from 'pg'

const pool = new pg.Pool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_NOMBRE,
    port: process.env.BD_PORT
})

export default pool