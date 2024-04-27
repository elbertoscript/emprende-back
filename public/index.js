console.log("Este JS va a ser interpretado por el NAVEGADOR")

//OBTENER ELEMENTOS DEL HTML Y GUARDARLOS EN CONSTANTES
const button = document.querySelector("button")
console.log({button})

//NUTRIR DE FUNCIONALIDADES A LOS BOTONES
 button.addEventListener("click", function()
{console.log("Click")})