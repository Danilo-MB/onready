export class Vehiculo {

    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    imprimir(){
        throw "Debe implementarse imprimir";
    }



}