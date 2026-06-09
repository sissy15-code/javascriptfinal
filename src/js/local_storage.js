"use strict";
// LocalStorage es una propiedad de Javascript que le 
// permite a las aplicaciones web almacenar datos de forma local
// en el navegador del usuario. Lo genial de esto es que la informacion
// se guarda como pares de clave-valor y no tiene fecha de expiracion.
// Esto significa que si el usuario cierra la pestaña, apaga el compurtador
// o reinicia el navegador, los datos seguiran ahi cuando vuelva

if (typeof Storage !== "undefined") {
    // Significa "es diferente de indefinido"
    console.log("Local Storage esta disponible");
} else {
    console.log("Local Storage no esta disponible");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de PHP");

//Guardar un elemento de local Storage
localStorage.getItem("titulo");

//Imprimir en consola lo que obtuve del local storage
console.log(localStorage.getItem("titulo"));

//Para imprimir en HTML lo que almacene del local storage
document.querySelector("#curso").innerHTML = localStorage.getItem("titulo");

//Guardar objetos json
var user = {
    nombre: "Sarah Aure",
    email: "sarahaaure15@gmail.com",
    web: "EldritchKaiser.org"
};
localStorage.setItem("user", JSON.stringify(user));

// La forma correcta de almacenar datos en local storage es convirtiendo
// los objetos en json-string porque no procesa el objeto con Javasript
// puro. La forma correcta de enviar informacion a un API se debe hacer 
// igual con json-string

//Recuperar objetos de local storage

var userjs = JSON.parse(localStorage.getItem("user"));
console.log(userjs); //compruebo que los estoy capturando

//Ahora para imprimir en el html
document
.querySelector("#alumno")
.append(" " + userjs.nombre + " " + userjs.email);

//Vaciar el local storage
//localStorage.removeItem("user");
//localStorage.clearItem("user");
