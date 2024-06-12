import mysql from "mysql2"

var pool=mysql.createPool({
    connectionLimit : 1,
    host     : 'localhost',
    user     : 'root',
    password : process.env.DATABASE_PASSWORD || "4321",
    database : process.env.DATABASE_NAME || "crm",
})

export default  pool.promise();