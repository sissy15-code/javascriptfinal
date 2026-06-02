"use strict";
// funcion de declaracion
suma(25,34);
function suma (a,b){
    console.log( `la suma de ${a} + ${b} es igual a ${ a+b}`)
}
// funcion de expresion
const suma2 = function(c,d){
    console.log( `la suma de ${c}+ ${d}es igual a= ${c+d}`);
};

suma2(44,36)

//diferencia entre un metodo - funcion

let n1 =15;
let n2 = 20;
let n3 = 55 ;

console.log(parseInt(n1));//esto es una funcion porque coloca el nombre de la funcion 
//acompañada de ()= nombre de funcion () antes de la variable
console.log(n1.toString());//esto es un metodo va despues de una variable --convierte un numero 
console.log(parseInt(n3));//esto es un metodo que convierte un numero en string

//incrementadores en javascript 

var b= 15 ; 
var c= "15";
console.log(`incrementa en 1 ${b++}`)
console.log(`incrementa en 1 ${b++}`)
console.log(`incrementa en 1 ${b++}`)
//console.log(b++)
console.log(++b);/*incrementa de 2 en 2*/
console.log( `Decrementa en 1 ${--b}`);/*decrementa*/
/*operadores estrictos de comparacion*/
var compruebo = b !== c;//valido que sean distinguido tanto en valor
//como en tipo de datos
var compruebo2 = b ==c;


console.log(compruebo);
console.log(compruebo2);