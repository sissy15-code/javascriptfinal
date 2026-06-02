/*alert("hola mundo");*/
console.log("Estoy Aprendiendo JavaScript");
var nombre = "Sarah";
var edad = 22;
console.log("Hola " + nombre + " y tienes " + edad + " años");

let num1= 15;
let num2= 25;
let suma = num1 + num2;
//forma antigua de imprimir en consola
console.log("La suma de " +num1 + " mas " + num2 + " es igual a " + suma);
// template literales
console.log(`La suma de ${num1} mas ${num2} es igual a ${suma}`);
console.log(`La suma de ${num1} mas ${num2} es igual a ${num1+num2}`);
console.log(`La resta de ${num1} menos ${num2} es igual a ${num1-num2}`);
console.log(`La multiplicacion de ${num1} por ${num2} es igual a ${num1*num2}`);
console.log(`La division de ${num1} entre ${num2} es igual a ${num1/num2}`);

let ciudad="caracas"; //inicializar una variable
console.log(ciudad);
ciudad="san juan"
console.log(ciudad);

var ciudad2="maracay";
console.log(ciudad2);
// variables declaradas var y let si le puedo reasignar un nuevo valor

const pi= 3.14; //no puedo reasignarle su valor
console.log(pi);