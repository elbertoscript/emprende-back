console.log("Este JS va a ser interpretado por el nuevo NAVEGADOR WEB")


//const button = document.querySelector("button")
//const getBtn = document.querySelector("#get-task")


//Obtener elementos del HTML y guardarlos en constantes
const createEditBtn = document.querySelector("#create-task")
const tasksDiv = document.querySelector("#tasks")
const input = document.querySelector("#task-name")

const baseBackendUrl = `${window.origin}/api`
console.log({window, baseBackendUrl})


let TASK_TO_EDIT = null


/*getBtn.addEventListener("click", function(){
   console.log("Get Tareas")
   fetch("http://localhost:4000/api/tasks")//api= aplication programing interface
})*/
//Nutrir de funcionalidad a los botones
createEditBtn.addEventListener("click", function(){
   const creating = !TASK_TO_EDIT;
   const path = creating ? "tasks": `tasks/${TASK_TO_EDIT._id}`
   const method = creating ? "POST": "PUT"

   if (!input.value.trim()) {
      alert('Por favor, ingresa una tarea');
      return;
   }

   fetch(`${baseBackendUrl}/${path}`, {
      method,// aca se puede poner solo method por que la variable y la propiedad son de nombre igual
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ text: input.value}),
   })
   .then((res)=>
   {   if (!res.ok) {
      throw new Error('La respuesta de la red no fue correcta');
   }
      return res.json()
   })
   .then((resJSON)=>
   {
      console.log({resJSON});
      getTasks();
   })
   .catch((error) => {
      console.error('Hubo un problema con la solicitud:', error);
   });
})

function getTasks()
{
   tasksDiv.innerHTML = null
   fetch(`${baseBackendUrl}/tasks`)
   .then((res)=>
   {
      return res.json()
   })
   .then((resJSON)=>
   {
      const tasks = resJSON.data
      for (const Task of tasks)
      {
         const taskParagraph = document.createElement('p')
         const deleteTaskBtn = document.createElement('button')
         const taskContainerDiv = document.createElement('div')
         deleteTaskBtn.innerText = "Borrar"
         taskParagraph.innerText = Task.name
         deleteTaskBtn.setAttribute('id', Task._id)
         deleteTaskBtn.addEventListener('click', (e)=>//e de evento tambien se pone evt
         {
            const taskId = Task.id
            deleteTaskBtn.innerText = "..."
            fetch(`${baseBackendUrl}/Tasks/${taskId}`,{
               method: "DELETE",
            }).then(()=>{
               const taskDiv = deleteTaskBtn.parentElement
               taskDiv.remove()
            })
         })
         taskParagraph.addEventListener('click', (e)=>{
            input.value = Task.name
            createEditBtn.innerText = "Editar tarea"
            TASK_TO_EDIT = Task
            
         })
         taskContainerDiv.appendChild(taskParagraph)
         taskContainerDiv.appendChild(deleteTaskBtn)
         tasksDiv.appendChild(taskContainerDiv)
         //console.log({taskParagraph})
      }
   })
}

getTasks()
