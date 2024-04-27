//const dotenv = require("dotenv")
//dotenv.config()
//esto es lo mismo que hacer
require("dotenv").config()

const http = require("http")


//logica de la función
function requestController(req, res)
{
 const url = req.url
 const method = req.method
 console.log({ url, method}) 

 if(method === "GET" && url === "/")
 {
  res.setHeader("Content-type", "text/html; charset=utf-8")
  res.write("<h1>Hola Mundo desde la página principal</h1>")
  res.end()
  return
 }

 if(method === "GET" && url === "/about")
 {
  res.setHeader("Content-type", "text/html; charset=utf-8")
  res.write("<h1>Hola Mundo desde la página del about</h1>")
  res.end()
  return
 }
 res.setHeader("Content-type", "text/html; charset=utf-8")
 res.write("<h1>Página no encontrada...</h1>")
 res.end()
}


//configurar nuestro servidor

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function()
{
  console.log("Aplicacion corriendo en puerto: " + PORT)
  
}

)

