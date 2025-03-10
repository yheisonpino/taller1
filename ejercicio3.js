/*El programa debe pedir al usuario la edad y debe imprimir lo siguiente:
a. Entre 0 y 9 años  Es niño
b. Entre 10 y 17 años  Es adolescente
c. Entre 18 y 40 años  Es adulto
d. Entre 40 y 60 años  Es adulto mayor
e. Mayor a 60 años  Es abuelo */

const prompt = require('prompt-sync')();
const edad = parseFloat(prompt('Ingrese su edad:'));


if (edad >= 0) {
    if (edad >= 0 && edad <=9) {
        console.log("es niño");
    } else if (edad > 10 && edad < 17) {
        console.log("es adolecente");
    } else if (edad >= 18 && edad < 40) {
        console.log("es adulto");
    } else if (edad >= 40 && edad < 60) {
        console.log("es adulto mayor");
    } else {
        console.log("es abuelo");
    }
}