const name = "Elberto"

console.log({ module});//hace referencia al contenido del archivo en este caso another
// cuando querramos que alguien tenga acceso a alguna lógica que tengamos de este archivo solicitado por "REQUIRE" desde otro archivo
//debemos incuirlo en module.export
//en este caso la lógica seria : const name = "Elberto"
module.exports