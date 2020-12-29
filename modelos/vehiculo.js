export class Vehiculo {

    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    formatMoney(number) {
        return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    imprimir(){
        throw "Debe implementarse imprimir";
    }



}