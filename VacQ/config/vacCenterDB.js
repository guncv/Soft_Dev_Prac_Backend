const mysql = require("mysql");

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '17554gun',
    database: 'vacCenter'
})

module.exports = connection;