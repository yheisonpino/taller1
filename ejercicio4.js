/*Cree un programa que le presente las siguientes opciones al usuario
 y según la opción ingresada solicite los números e imprima el resultado en pantalla: 
a. 1: Sumar 
b. 2: Restar
c. 3: Multiplicar 
d. 4: Dividir 
e. 5: Raíz Cuadrada 
f. 6: Salir*/

const prompt = require('prompt-sync')();

function Menu() {
    console.log("Seleccione una opción que desea realizar:");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Raiz cuadrada")
    
    let opcion = prompt(" Ingrese el número la opción que desea realizar: ");
    return opcion;
}

function ingresarDatos() {
    let numero1 = parseFloat(prompt(" Ingrese el primer número: "));
    let numero2 = parseFloat(prompt(" Ingrese el segundo número: "));
    return [numero1, numero2];
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.log(" No se puede dividir por cero ");
        return null;
    }
    return a / b;
}


function calculadora() {
    let opcion = Menu();
    let [numero1, numero2] = ingresarDatos();
    let resultado;


    //switch
    switch (opcion) {
        case '1':
            resultado = sumar(numero1, numero2);
            console.log(`resultado: ${numero1} + ${numero2} = ${resultado}`);
            break;
        case '2':
            resultado = restar(numero1, numero2);
            console.log(`resultado: ${numero1} - ${numero2} = ${resultado}`);
            break;
        case '3':
            resultado = multiplicar(numero1, numero2);
            console.log(`resultado: ${numero1} * ${numero2} = ${resultado} `);
            break;
        case '4':
            resultado = dividir(numero1, numero2);
            if (resultado !== null) {
                console.log(`resultado: ${numero1} / ${numero2} = ${resultado}`);
            }
            break;
        default:
            console.log("Opción no valida");
            break;


    }
}
calculadora();


