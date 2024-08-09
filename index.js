require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT

//servir archivos estaticos
app.use(express.static('Public'))

//configurar rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send([{ name: "Elberto"}, { name: "Isacc"}])
})


// poner a escuchae la app en un puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})