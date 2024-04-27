const http = require("http")

function requestController(){
  //lógica de la función
  console.log("Hola Mundo!!!");

}


const server = http.createServer(requestController)

server.listen(4000)