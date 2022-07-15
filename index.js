const users = require('./users');

const mysql = require('mysql');

const conn = mysql.createConnection({  // 어떻게 연결할 것인지 써놓은 것
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'community'
})

module.exports = {
    conn: conn,
    users: users
}