/*Cree un programa que pida al usuario 10 valores, los sume y muestre en pantalla el resultado de la suma, 
el valor mayor, menor y el promedio.*/

const prompt = require('prompt-sync')();

var sumaTotal = 0;
var mayor;
var menor;

for (var i = 0; i < 10; i++) {
    var valor = parseFloat(prompt("Digite los valores hasta llegar a diez: " + (i + 1) + " : "));
    if (i == 0) {
        mayor = valor;
        menor = valor;
    } else {
        if (valor > mayor) {
            mayor = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
    }
    sumaTotal += valor;
}
var promedio = sumaTotal / 10;

console.log("Suma de los números ingresados es: " + (sumaTotal));
console.log("El número mayor es : " + (mayor));
console.log("El número menor es : " + (menor));
console.log("El Promedio de los números ingresados es : " + (promedio));