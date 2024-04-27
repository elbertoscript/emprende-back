require("dotenv").config()

const http = require("http")

function requestController(){
  //lógica de la función
  console.log("Hola Mundo!!!");

}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(4000, function()
{
  console.log("Escuchando en el puerto: " + PORT);
})