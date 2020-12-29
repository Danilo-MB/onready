import { Vehiculo}  from "./vehiculo.js";

export class Moto extends Vehiculo {

    constructor(marca, modelo, cilindrada, precio){
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }

    imprimir(){
        console.log("Marca: " + this.marca + " // " + "Modelo: " + this.modelo + " // " + "Cilindrada: " + this.cilindrada + " // " + "Precio: " + this.precio);
    }


}