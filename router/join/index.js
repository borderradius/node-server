const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const path = require('path')

// DATABASE 
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Rnflah28!',
  database: 'test'
})
connection.connect()

// ROUTER
router.get('/', (req, res) => {
  console.log('get join us!');
  res.sendFile(path.join(__dirname, '../../public/join.html'))
})

module.exports = router