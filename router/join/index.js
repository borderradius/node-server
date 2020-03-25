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

router.post('/', (req, res) => {
  // console.log(req.body);
  const body = req.body
  const email = body.email
  const name = body.name
  const pw = body.password

  const sql = { email, name, pw }
  // const query = connection.query(`insert into test (email, name, pw) values ('${email}', '${name}', '${password}')`, (err, rows) => {
  const query = connection.query(`insert into test set ?`, sql, (err, rows) => {
    if (err) { throw err }
    console.log("ok db insert");
  })
})

module.exports = router