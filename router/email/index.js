const express = require('express')
const router = express.Router()
const mysql = require('mysql')

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
router.post('/form', (req, res) => {
  res.render('email.ejs', { 'email': req.body.email })
})

router.post('/ajax', (req, res) => {
  const email = req.body.email
  const responseData = {}

  const query = connection.query(`select name from test where email="${email}"`, function (err, rows) {
    if (err) throw err
    if (rows[0]) {
      responseData.result = "ok"
      responseData.name = rows[0].name
    } else {
      responseData.result = "false"
      responseData.name = ''
    }
    res.json(responseData)
  })
})

module.exports = router