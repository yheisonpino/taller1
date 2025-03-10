/*Cree un programa que permita crear una persona con la siguiente información:  
• Nombres • Apellidos • Género • Fecha de nacimiento • Edad • Salario 
La aplicación debe permitir pedir los datos al usuario para crear a una persona en específico,
 y luego mostrar un menú de opciones de la siguiente manera: 
  a. Consultar persona b. Modificar persona c. Aumentar salario d. Verificar mayoría de edad 
Utilice clases, métodos modificadores de acceso, constructores y funciones para desarrollar el problema.  */

const prompt = require('prompt-sync')();

class Persona {
    constructor(nombres, apellidos, genero, fechaNacimiento, edad, salario) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.salario = salario;
    }

    consultar() {
        console.log(this);
    }

    modificar(nombres, apellidos, genero, fechaNacimiento, edad, salario) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.salario = salario;
    }

    aumentarSalario(monto) {
        this.salario += monto;
    }

    verificarMayoriaEdad() {
        if (this.edad >= 18) {
            console.log("Es mayor de edad");
        } else {
            console.log("Es menor de edad")
        }
        return this.edad
    }
}

var persona = new Persona(
    prompt("Nombres: "),
    prompt("Apellidos: "),
    prompt("Género: "),
    prompt("Fecha de nacimiento: "),
    parseInt(prompt("Edad: ")),
    parseFloat(prompt("Salario: "))
);

// Menú de opciones
var opcionPersona;
do {
    console.log("Seleccione una opción:");
    console.log("1: Consultar persona");
    console.log("2: Modificar persona");
    console.log("3: Aumentar salario");
    console.log("4: Verificar mayoría de edad");
    console.log("5: Salir");
    opcionPersona = parseInt(prompt("Opción: "));

    switch (opcionPersona) {
        case 1:
            persona.consultar();
            break;
        case 2:
            persona.modificar(
                prompt("Nuevos nombres: "),
                prompt("Nuevos apellidos: "),
                prompt("Nuevo género: "),
                prompt("Nueva fecha de nacimiento: "),
                parseInt(prompt("Nueva edad: ")),
                parseFloat(prompt("Nuevo salario: "))
            );
            break;
        case 3:
            var aumento = parseFloat(prompt("Monto a aumentar: "));
            persona.aumentarSalario(aumento);
            break;
        case 4:
            console.log(persona.verificarMayoriaEdad());
            break;
    }
} while (opcionPersona !== 5);
