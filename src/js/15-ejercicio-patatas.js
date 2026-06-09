// una tortilla de patatas lleva 200gr de patatas por personas.
// por cada kilo de patatas se necesitan 5 huevos y 300gr de cebollas
// escribe un script que dado el numero de 
//comensales calcule las cantidades de ingredientes necesarios

//1kg = 1000gr / 1000gr / 200gr = 5 comensales
// 5 huevos / 5 comensales = 1 huevo por persona
// 300gr cebollas / 5 comensales = 60gr de cebolla por persona

///"use strict";
///var comensales = parseInt(prompt("Introduce el numero de comensales", 0));

///let patatas = comensales * 200;
///let huevos = patatas / 1000 * 5;
///let cebollas = comensales * 60;

///console.log(`Para ${comensales} comensales necesitas ${patatas}gr de patatas, ${huevos} huevos y ${cebollas}gr de cebollas`);

// EJERCICIO 1

//var comensales = parseInt(prompt("¿Cuántos comensales hay?", 0));

//let patatas="";
//let huevos="";
//let cebollas="";

//const comensales = {
//patatas: function(comensales) {
//    console.log(`Para ${comensales} comensales necesitas ${comensales * 200}gr de patatas`);
//    suma+= `La suma es ${comensales * 200}`;
//    document.getElementById("patatas").innerHTML =patatas;
//},
//huevos: function(comensales) {
//    console.log(`Para ${comensales} comensales necesitas ${patatas / 1000 * 5} huevos`);
//    huevos+= `La multiplicacion es ${patatas / 1000 * 5}`;
//    document.getElementById("huevos").innerHTML =huevos;
//},
//cebollas: function(comensales) {
//    console.log(`Para ${comensales} comensales necesitas ${comensales * 60}gr de cebollas`);
//    cebollas+= `La resta es ${comensales * 60}`;
//    document.getElementById("cebollas").innerHTML =cebollas;
//},
//}
///comensales.patatas(comensales);
///comensales.huevos(comensales);
///comensales.cebollas(comensales);


// EJERCICIO 2

// Elabora un programa que le solicite al usuario la cantidad de horas
// que trabaja y su tarifa por hora
// como resultado debe mostrar el salario total del trabajador

//"use strict";
//var horas = parseInt(prompt("Introduce el numero de horas trabajadas", 0));
//var tarifa = parseInt(prompt("Introduce la tarifa por hora", 0));

///let salario = horas * tarifa;

//console.log(`El salario total del trabajador es de ${salario} dolares`);


///  EJERCICIO 3

// Escribe un script que pida al usuario el precio original de un producto
// porcentaje de descuento
// debe mostrar el monto a descontar
// debe mostrar el precio total menos el descuento
// El cliente paga con un billete de 100 dolares, muestra el cambio que debe recibir el client

//"use strict";
//var precio = parseInt(prompt("Introduce el precio original del producto", 0));
//var descuento = parseInt(prompt("Porcentaje de descuento", 0));
//var pago = parseInt(prompt("Introduzca el monto con el que va a pagar", 0));

//let montoDescuento = precio * descuento / 100;
//let precioFinal = precio - montoDescuento;
//let cambio = pago - precioFinal;

//console.log(`El monto a descontar es de ${montoDescuento} y el precio final es de ${precioFinal}`);

//console.log(`El monto a descontar es de ${montoDescuento}`);
//montoDescuento+= `El monto a descontar es de ${montoDescuento}`;
//document.getElementById("montoDescuento").innerHTML =montoDescuento;

//console.log(`y el precio final es de ${precioFinal}`);
//precioFinal+= `y el precio final es de ${precioFinal}`;
//document.getElementById("precioFinal").innerHTML =precioFinal;

//console.log(`y el cambio que de recibir el cliente es de ${cambio}`);
//cambio+= `y el cambio que de recibir el cliente es de ${cambio}`;
//document.getElementById("cambio").innerHTML =cambio;

/// EJERCICIO 4

//Escribe un script que me calcule en segundos el tiempo que dura 
//una persona usando el sistema

var tiempo = parseInt(prompt("Introduzca cuanto tiempo ha estado usando el sistema", 0));

let segundos = tiempo * 3600;

console.log(`El tiempo que ha estado en el sistema es de ${segundos} segundos`);
