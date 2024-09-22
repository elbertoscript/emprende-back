require("dotenv").config()
const express = require("express")
const  mongoose  = require("mongoose")
const app = express()
const port = process.env.PORT
const Schema = mongoose.Schema

mongoose
.connect(process.env.MONGODBURL).then(() =>{
  console.log("Conexiòn exitosa con la BBDD!!!")
})
.catch((err)=> console.log("Hubo un error al conectarse a la BBDD", { err })
)

const taskSchema = new Schema(
  {
    name: String,
    done: Boolean,
    //createBy:
})

const Task = mongoose.model("Task", taskSchema, "Tasks")

//Middleware Servir archivos estàticos
app.use(express.static('Public'))

//Middleware para parsear el BODY de las request
//app.use(express.json())//esta funciò siempre debe estar por encima de todo para que sea gloal, pero tambien se puede hacer 
//especifica dentro lde la funcion donde queremos parsear el body asi : express.json()

//Middleware para el preprocesamiento de las request
// son siempre  => FUNCIONES

//A) Pasamos uns finciòn anònima
/*
app.use((req, res, next) =>
{
  console.log("NO especificamos còmo debe ser el inicio de la ruta")
  console.log("Middleware 1")
  next()
})*/

//B) Pasamos uns funciòn RETORNADA pot OTRA FUNCIÔN/MÊTODO
/*const logger = {
  logThis: (whatToLog) =>{
    return (req, res, next) =>{
      console.log("Middleware2: ", whatToLog)
      next()
    }
  },
}

app.use("/martin", logger.logThis("Logueame esto"))*/

//Configura Rutas

app.get("/api/tasks", function (req, res) {
  Task.find().then((Tasks)=>{
    res.status(200).json({ok: true, data: Tasks})
  }).catch((err)=>{
    res.status(400).json({ok: false, message:"Hubo un problema al obtener las tareas "})
  })
  
})
//aca solo funcion localmente o especificamente en este llamado, para que funcione de forma global
// se coloca arrriba depues de app.use(express.static('Public'))
app.post("/api/tasks",express.json(), function (req, res) {
  const body = req.body
  console.log({body})
  Task.create(
    {
      name: body.text,
      done: false,
     
    }
  ).then((createdTask)=>
  {
    res.status(201)
    .json({
      ok: true,
      message: "Tarea creada con èxito",
      data: createdTask,
    })
  })
  .catch((err)=>
  {
    res.status(400)
    .json({
      ok: false,
      message: "Error al crear la tarea"
    })
  })
})
/*app.get("/users", function (req, res) {
  res.send([{name: "Elberto"},{name: "Isaac"}])
})*/

app.put("/api/tasks/:id",express.json(), function (req, res) {
  const body = req.body
  const id = req.params.id

  Task.findByIdAndUpdate(id, 
    {
      name: body.text,
    }
  ).then((updatedTask)=>
  {
    res.status(200)
    .json({
      ok: true,
      message: "Tarea editada con èxito",
      data: updatedTask,
    })
  })
  .catch((err)=>
  {
    res.status(400)
    .json({
      ok: false,
      message: "Error al editar la tarea"
    })
  })
})

app.delete("/api/tasks/:id", express.json(), function (req, res) {
  const id = req.params.id
  Task.findByIdAndDelete(id).then((deletedTask)=>{
    res.status(200).json({ok: true, data: deletedTask})
  })
  .catch(()=>{
    res.status(400).json({ok: false, message:"Hubo un error al eliminar la tarea"})
  })
 
})

//Pone a escuchar la app en un puerto
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})