require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT


//servir archivos estaticos
app.use(express.static('public'))

//configurar RUTAS
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//poner a escuchar la app en un puerto
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})