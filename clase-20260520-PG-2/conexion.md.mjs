// import pf from 'pg'

import {Pool} from 'pg'

const pool = new Pool({
    host: '192.169.0.102',
    database: 'tienda',
    user: 'root',
    password: 'pass',
    port: 5432
})

export default pool