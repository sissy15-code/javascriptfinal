function listadoFrutas(fruta1, fruta2, ...todasfrutas){
    console.log("La fruta 1 es", fruta1);
    console.log("La fruta 2 es", fruta2);
    console.log(todasfrutas);
}

//PARAMETROS REST
listadoFrutas("Naranja", "Fresa", "Pera", "Patilla", "Melon", "Guayaba", "Mango", "Cambur");

function listadoMarcas(marca1, marca2, ...todasMarcas){
    console.log(marca1);
    console.log(marca2);
    console.log(todasMarcas);
}
listadoMarcas("Xiaomi", "Samsung", "Huawei", "Apple", "LG", "Realme");

let movilMarcas=["TECNO", "Motorola", "Infinix", "Alcatel", "Nokia"]
listadoMarcas(...movilMarcas, "ZTE", "Honor", "Google");


/*var frutas2 = ["Mandarina", "Uva", "Parchita"]; //array
///parametros SPREAD // convierto un arreglo en un parametro
listadoFrutas(...frutas2, "Naranja", "Fresa", "Pera", "Pantalla");*/