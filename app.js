const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const main = require('./router/main')
const email = require('./router/email')

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
app.use('/main', main)
app.use('/email', email)

app.get('/', (req, res) => {
  console.log('/');
  res.sendFile(`${__dirname}/public/main.html`)
})


