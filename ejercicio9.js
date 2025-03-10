/*Cree un programa que permita manejar un vehículo que tiene las siguientes características: 
• Placa • Color • Marca • Modelo • Kilometraje • Velocidad 
El vehículo debe implementar una función denominada 
prender, que debe mostrar en pantalla la información completa del vehículo y al final “… ha sido prendido”.
 El vehículo debe implementar una función denominada apagar que debe mostrar en pantalla las condiciones 
 finales del carro y “… ha sido apagado” 
 El vehículo debe tener una función denominada acelerar que incrementa en 10km/h la velocidad del vehículo,
  se puede acelerar únicamente hasta 100km/h. Cada vez que se acelera se debe aumentar el kilometraje recorrido.  
  l usuario debe decidir la aceleración entre el encendido y el apagado, no puede apagar el carro si no ha sido encendido, no puede prender el carro si ya ha sido prendido, no puede acelerar si el carro no ha sido encendido.
*/
const prompt = require('prompt-sync')();

class Vehiculo {
    constructor(placa, color, marca, modelo) {
        this.placa = placa;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = 0;
        this.velocidad = 0;
        this.prendido = false;
    }

    prender() {
        if (this.prendido) {
            console.log("El vehículo ya está prendido.");
        } else {
            this.prendido = true;
            console.log("Información del vehículo: ");
            console.log("Placa: " + (this.placa));
            console.log("Color: " + (this.color));
            console.log("Marca: " + (this.marca));
            console.log("Modelo: " + (this.modelo));
            console.log("Kilometraje: " + (this.kilometraje) + " km");
            console.log("Velocidad: " + (this.velocidad) + " km/h");
            console.log("El vehículo ha sido prendido.");
        }
    }

    apagar() {
        if (!this.prendido) {
            console.log("El vehículo ya está apagado.");
        } else {
            this.prendido = false;
            console.log("Condiciones finales del vehículo: ");
            console.log("Kilometraje: " + (this.kilometraje) + " km");
            console.log("Velocidad: " + (this.velocidad) + " km/h");
            console.log("El vehículo ha sido apagado.");
        }
    }

    acelerar() {
        if (!this.prendido) {
            console.log("No se puede acelerar, el vehículo está apagado.");
        } else {
            if (this.velocidad < 100) {
                this.velocidad += 10;
                this.kilometraje += 10;
                if (this.velocidad > 100) {
                    this.velocidad = 100;
                }
                console.log("El vehículo ha acelerado. Velocidad actual: " + (this.velocidad) + " km/h");
            } else {
                console.log("El vehículo ya ha alcanzado la velocidad máxima de 100 km/h.");
            }
        }
    }
}

// Crear un vehículo
var placa = prompt("Digite la placa del vehículo: ");
var color = prompt("Digite el color del vehículo: ");
var marca = prompt("Digite la marca del vehículo: ");
var modelo = prompt("Digite el modelo del vehículo: ");

var vehiculo = new Vehiculo(placa, color, marca, modelo);

// Menú de opciones
var opcion;
do {
    console.log("\nSeleccione una opción:");
    console.log("1: Prender vehículo");
    console.log("2: Apagar vehículo");
    console.log("3: Acelerar vehículo");
    console.log("4: Salir");
    opcion = parseInt(prompt("Opción: "));

    switch (opcion) {
        case 1:
            vehiculo.prender();
            break;
        case 2:
            vehiculo.apagar();
            break;
        case 3:
            vehiculo.acelerar();
            break;
        case 4:
            console.log("Saliendo del programa.");
            break;
        default:
            console.log("Opción no válida. Intente de nuevo.");
    }
} while (opcion !== 4);