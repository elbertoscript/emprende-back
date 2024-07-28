const http = require("http")
const name = require("./another")

function requestController()
{//lógica de la función
  console.log("Hola Mundo");
}

//configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)
 