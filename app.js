const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router/index')


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
app.use(router)





