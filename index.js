const http = require("http")


//logica de la función
function requestController()
{
  console.log("hola mundo")
}


//configurar nuestro servidor

const server = http.createServer(requestController)

server.listen(4000)
