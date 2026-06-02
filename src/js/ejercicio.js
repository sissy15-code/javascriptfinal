"use strict"
var nom = prompt("Introduce tu Nombre", "Nombre");
var edad = parseInt(prompt("Introduce tu Edad", "Edad"));

/*console.log(`Tu nombre es ${nom} y tienes ${edad} años`);*/



function porPantalla(nom, edad) {
    nom += `Tu nombre es ${nom} y tienes ${edad} años`;
    document.getElementById("nom").innerHTML = nom;
    nom += `Y tienes ${edad} años`;
    document.getElementById("edad").innerHTML = edad;
}
porPantalla(nom, edad);
