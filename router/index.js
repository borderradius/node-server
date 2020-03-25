const express = require('express')
const router = express.Router()
const path = require('path')
const main = require('./main')
const email = require('./email')

router.get('/', (req, res) => {
  console.log('/');
  res.sendFile(path.join(__dirname, '../public/main.html'))
})
router.use('/main', main)
router.use('/email', email)

module.exports = router