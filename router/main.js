const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
  console.log('/main');
  // res.sendFile(`${__dirname}/public/main.html`)
  res.sendFile(path.join(__dirname, '../public/main.html'))
})

module.exports = router