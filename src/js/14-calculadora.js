"use strict";

var n1 = parseInt(prompt("Introduce un numero", 0));
var n2 = parseInt(prompt("Introduce un numero", 0));

let suma="";
let multi="";
let resta="";
let divi="";

const calculadora = {
suma: function(n1, n2) {
    console.log(`La suma es ${n1 + n2}`);
    suma+= `La suma es ${n1 + n2}`;
    document.getElementById("suma").innerHTML =suma;
},
multi: function(n1, n2) {
    console.log(`La multiplicacion es ${n1 * n2}`);
    multi+= `La multiplicacion es ${n1 * n2}`;
    document.getElementById("multi").innerHTML =multi;
},
resta: function(n1, n2) {
    console.log(`La resta es ${n1 - n2}`);
    resta+= `La resta es ${n1 - n2}`;
    document.getElementById("resta").innerHTML =resta;
},
divi: function(n1, n2) {
    console.log(`La división es ${n1 / n2}`);
    divi+= `La división es ${n1 / n2}`;
    document.getElementById("divi").innerHTML =divi;
},
}
calculadora.suma(n1, n2);
calculadora.multi(n1, n2);
calculadora.resta(n1, n2);
calculadora.divi(n1, n2);
