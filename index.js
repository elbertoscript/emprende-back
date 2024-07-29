require("dotenv").config()

const http = require("http")
const fs = require("fs")

function requestController(req, res)
{//lógica de la función
  const url = req.url
  const method = req.method
  console.log({url, method});

  if(method === "GET" && url === "/")
  {
    res.setHeader("Content-type", "text/html")
    fs.readFile("./public/index.html",
      function(err, file)
        {
          if (err)
          {
            console.log("hubo un error");
          }
          res.write(file)
          res.end()
          
        })
   return
  }

  
  if(method === "GET" && url === "/about")
    {
      res.setHeader("Content-type", "text/html")
      fs.readFile("./public/about.html",
                    function(err, file)
                      {
                        if (err)
                        {
                          console.log("hubo un error");
                        }
                        res.write(file)
                        res.end()
                      })
      return
    }
    res.setHeader("Content-type", "text/html; charset=utf-8")
    res.write("<h1>Página no encontrtada </h1>")
}

//configurar nuestro servidor
const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function()
{
  console.log("Aplicación corriendo en puerto: " + PORT)
})
 