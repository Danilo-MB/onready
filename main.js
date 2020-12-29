import { Moto }  from "./modelos/moto.js";
import { Auto } from "./modelos/auto.js";

function armarLista(){
    let lista = [];
    lista.push(new Auto("Peugeot", "206", 4, 200000));
    lista.push(new Moto("Honda", "Titan", 125, 60000));
    lista.push(new Auto("Peugeot", "208", 5, 250000));
    lista.push(new Moto("Yamaha", "YBR", 160, 80500.50));
    return lista;
}


function imprimir(lista){
    for(let i = 0; i < lista.length; i++){
        let vehiculo = lista[i];
        vehiculo.imprimir();
    }
}

function imprimirMasBarato(lista){
    let min = 99999999;
    let vehiculo = {};
    for(let i = 0; i < lista.length; i++){
        if(lista[i].precio < min){
            min = lista[i].precio;
            vehiculo = lista[i];
        }
    }
    console.log("Vehículo más barato: " + vehiculo.marca + " " + vehiculo.modelo);
}

function imprimirMasCaro(lista){
    let max = -1;
    let vehiculo = {};
    for(let i = 0; i < lista.length; i++){
        if(lista[i].precio > max){
            max = lista[i].precio;
            vehiculo = lista[i];
        }
    }
    console.log("Vehículo más caro: " + vehiculo.marca + " " + vehiculo.modelo);
}

function imprimirConY(lista){
    for(let i = 0; i < lista.length; i++){
        if(lista[i].modelo.includes("Y")){
            let valor = lista[i];
            console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + lista[i].marca + " " + 
            lista[i].modelo + " " + valor.formatMoney(valor.precio));
        }
    }
}

function imprimirMayorAMenor(lista){
    lista.sort(function(v1, v2){
        return v2.precio - v1.precio;
    })
    console.log(lista.marca + " " + lista.modelo);
}


function ejecutar(){
    let listaDeVehiculos = armarLista();

    imprimir(listaDeVehiculos);                          //Imprimir elementos de la lista
    console.log("=============================");
    imprimirMasCaro(listaDeVehiculos);                   //Imprimir el más caro
    imprimirMasBarato(listaDeVehiculos);                 //Imprimir el más barato
    imprimirConY(listaDeVehiculos);                      //Imprimir vehículo con Y
    console.log("=============================");
    console.log("Vehículos ordenados por precio de mayor a menor:");
    imprimirMayorAMenor(listaDeVehiculos);               //Imprimir de mayor a menor precio
}

ejecutar();