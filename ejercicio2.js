/*El programa debe pedir al usuario su edad en años, el sistema debe imprimir si es mayor de
edad o menor de edad*/
const prompt = require('prompt-sync')();
const edad = parseFloat(prompt('Ingrese su edad:'));


if (edad >= 18)
    console.log('Es mayor de edad');
else{
    console.log('Es menor de edad');
}