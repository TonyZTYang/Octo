const mysql = require("mysql")
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "octo",
    password: "Nyush2021!",
    database:"metadb"
})

module.exports = pool;