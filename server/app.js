const express = require('express')
const app = express()
const cors = require('cors')
var path = require('path')

app.use(cors())
app.use(express.json())

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })

module.exports = app //changes for heroku