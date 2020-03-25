const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

// mysql 연결
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Rnflah28!',
  database: 'test'
})
connection.connect()

// 콜백함수는 거의 다 비동기
// 동기화 함수가 실행되고 나서 비동기 동작?
// nodemon 은 글로벌로 설치?
app.listen(3333, () => {
  console.log('start! node server on port 3333');
})

// 야 express 이 폴더는 스태틱으로 등록해줘.
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

// URL ROUTE
app.get('/', (req, res) => {
  console.log('/');
  res.sendFile(`${__dirname}/public/main.html`)
})

app.get('/main', (req, res) => {
  console.log('/main');
  res.sendFile(`${__dirname}/public/main.html`)
})

app.post('/email_post', (req, res) => {
  // res.send('post response')
  // console.log(req.body);
  // res.send(`<h1>welcome ! ${req.body.email}</h1>`)
  res.render('email.ejs', { 'email': req.body.email })
})

app.post('/ajax_send_email', (req, res) => {
  // check validation about input value => CRUD db
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
