require("dotenv").config()

const http = require("http")

function requestController()
{//lógica de la función
  console.log("Hola Mundo!!!!!");
}

//configurar nuestro servidor
const server = http.createServer(requestController)

const PORT = process.env.port

server.listen(PORT, function()
{
  console.log("Aplicación corriendo en puerto: " + PORT)
})
 