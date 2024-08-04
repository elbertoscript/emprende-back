require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT

// servir archivos estaticos
app.use(express.static('Public'))

//Configurar rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//poner a escuchar appr en un puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})