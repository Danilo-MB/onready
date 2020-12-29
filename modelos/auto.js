import { Vehiculo}  from "./vehiculo.js";

export class Auto extends Vehiculo {

    constructor(marca, modelo, puertas, precio){
        super(marca, modelo, precio);
        this.puertas = puertas;
    }


    imprimir(){
        console.log("Marca: " + this.marca + " // " + "Modelo: " + this.modelo + " // " + 
        "Puertas: " + this.puertas + " // " + "Precio: " + this.formatMoney(this.precio));
    }
}