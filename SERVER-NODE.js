require("dotenv").config()

const http = require("http")
const fs = require("fs")

function requestController(req,res){
  //lógica de la función
  const url = req.url; // aca hace referencia a que url esta intendo ingresar el usuario
  const method = req.method; // aca el metodo que esta usando
  console.log({url, method});
  
if (method === "GET" && url === "/")
{
  res.setHeader("Content-type", "text/html; charset=utf-8")
  fs.readFile("./public/index.html", function(err, file)
                                      {
                                       if (err)
                                       {
                                        console.log("HUBO UN ERROR");
                                       } 
                                       res.write(file)
                                       res.end()// aca finaliza la rspuesta al servidor, sin esto el buscador queda pensando o esperando respuesta
                                       
                                      })
  return 
}

if (method === "GET" && url === "/about")
{
  res.setHeader("Content-type", "text/html; charset=utf-8")
  fs.readFile("./public/about.html", function(err, file)
                                      {
                                       if (err)
                                       {
                                        console.log("HUBO UN ERROR");
                                       } 
                                       res.write(file)
                                       res.end()// aca finaliza la rspuesta al servidor, sin esto el buscador queda pensando o esperando respuesta
                                       
                                      })
  return 
}

res.setHeader("Content-type", "text/html; charset=utf-8")
res.write("<h1>Página no encontrada</h1>")
res.end()

}


const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function()
{
  console.log("Escuchando en el puerto: " + PORT);
})