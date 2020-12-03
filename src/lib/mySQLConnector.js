const mysql = require('mysql')
const env = require('dotenv').config()

class MySQLConnector {

    //connect to MySQL
    get MYSQL_DB_USER() { return process.env.MYSQL_DB_USER }
    get MYSQL_DB_NAME() { return process.env.MYSQL_DB_NAME }
    get MYSQL_DB_PASSWORD() { return process.env.MYSQL_DB_PASSWORD }
    get MYSQL_DB_ADDRESS() { return process.env.MYSQL_DB_ADDRESS }
    get MYSQL_DB_POOL_SIZE() { return process.env.MYSQL_DB_POOL_SIZE }

    constructor() {
        this.internalPool = mysql.createPool({
            host: this.MYSQL_DB_ADDRESS,
            user: this.MYSQL_DB_USER,
            database: this.MYSQL_DB_NAME,
            password: this.MYSQL_DB_PASSWORD,
            connectionLimit: this.MYSQL_DB_POOL_SIZE,
            waitForConnections: true
        })
        this.registerThreadCounter()
    }

   
    registerThreadCounter() {
        this.internalPool.on('connection', (connection) => console.log(`New connection stablished with server on thread #${connection.threadId}`))
    }

    get pool() {
        return this.internalPool
    }
}


module.exports = new MySQLConnector()