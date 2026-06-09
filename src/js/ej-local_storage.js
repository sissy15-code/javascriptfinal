"use strict";

if (typeof Storage !== "undefined") {

    console.log("Local Storage esta disponible");
} else {
    console.log("Local Storage no esta disponible");
}

localStorage.setItem("titulo", "Juegos para movil");
localStorage.getItem("titulo");
console.log(localStorage.getItem("titulo"));
document.querySelector("#juegos").innerHTML = localStorage.getItem("titulo");

var user = {
    nombre: "Stardew Valley",
    categoria: "cozy game",
};
localStorage.setItem("user", JSON.stringify(user));


var userjs = JSON.parse(localStorage.getItem("user"));
console.log(userjs); 

document
.querySelector("#descanso")
.append(" " + userjs.nombre + " " + userjs.categoria);