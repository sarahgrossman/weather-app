const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, './static')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.listen(port, () => {
  console.log('App listening on port 4000')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/index.html"))
})

app.use(function (err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app
