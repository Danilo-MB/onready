export class Vehiculo {

    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    formatMoney(number) {
        return number.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
    }

    imprimir(){
        throw "Debe implementarse imprimir";
    }



}