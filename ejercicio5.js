/* Cree un programa que permite pedir el valor n de la serie de Fibonacci e imprima en pantalla
toda la serie hasta ese numero */

const prompt = require('prompt-sync')();

function generarFibonacci(n) {
        if (n <= 0) {
        console.log("Ingresa un número entero positivo.");
        return;
    }

    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        let siguienteNumero = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(siguienteNumero);
    }

    console.log(`Los primeros ${n} números de la serie de Fibonacci son:`);
    console.log(fibonacci.slice(0, n).join(", "));
}

let n = parseInt(prompt("Ingresa el número de términos de la serie de Fibonacci que deseas ver:"));

generarFibonacci(n);