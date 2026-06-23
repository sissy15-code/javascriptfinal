// Objetivo: Desarrollar una herramienta interactiva que permita calcular los materiales necesarios 
// para dos tipos de proyectos: levantamiento de paredes de bloque y revestimiento de pisos con cerámica. 
// El sistema debe procesar las dimensiones ingresadas por el usuario y devolver las cantidades exactas 
// requeridas para la obra.

// 1. EJERCICIO
// Calculo para paredes

"use strict";
let largoPa = parseInt(prompt("¿Cuál es el largo de la pared en metros?", "0"));
let altoPa = parseInt(prompt("¿Cuál es el alto de la pared en metros?", "0"));
let largoPi = parseInt(prompt("¿Cuál es el largo del piso en metros?", "0"));
let anchoPi = parseInt(prompt("¿Cuál es el ancho del piso en metros?", "0"));
let largoCecm = parseInt(prompt("¿Cuál es el largo de la ceramica en cm?", "0"));
let anchoCecm = parseInt(prompt("¿Cuál es el ancho de la ceramica en cm?", "0"));

let area = largoPa * altoPa;

let tBloques = area * 12.5;
let tSacosCemento = area / 3;
let tArena = area * 0.03;

console.log(`Los materiales de pared (${area} m²) necesarios son:`);
document.getElementById("area").innerHTML = `Los materiales de pared (${area} m²) necesarios son:`;

let bloqueFinal = Math.ceil(tBloques);
console.log(`Un total de ${bloqueFinal} bloques`);
document.getElementById("tBloques").innerHTML =tBloques;

let sacoFinal = Math.ceil(tSacosCemento);
console.log(`Junto a la cantidad de ${sacoFinal} sacos de cemento`);
document.getElementById("tSacosCemento").innerHTML =tSacosCemento;

let arenaFinal = Math.ceil(tArena); 
console.log(`Mas un total de ${arenaFinal} m³ de arena`);
document.getElementById("tArena").innerHTML =tArena

// Calculo para pisos

let areaHabitacion = largoPi * anchoPi;

let largoCeM = largoCecm / 100;
let anchoCeM = anchoCecm / 100;

let areaCeram = largoCeM * anchoCeM;

let piezasNetas = areaHabitacion / areaCeram;

let totalPiezas = piezasNetas * 10 / 100;

    let final = totalPiezas; 
    
    console.log(`La cerámica necesaria (incluyendo 10% de desperdicio) es de ${final} piezas.`);
    document.getElementById("final").innerHTML = `La cerámica necesaria (incluyendo 10% de desperdicio) es de ${final} piezas.`;