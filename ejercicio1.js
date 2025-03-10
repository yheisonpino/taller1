/* el programa debe pedir al usuario que digite el valor de la factura, si el valor de la factura es superior 
a 50.000 debe imprimir en pantalla el valor de la factura mas el 15% de impuestos */

const prompt = require('prompt-sync')();
const valorfactura = parseFloat(prompt('Ingresa el valor de la factura:'));

const porcentaje = (valorfactura * (15 / 100)) + (valorfactura);
if(valorfactura >50000){
    console.log (porcentaje);
}else{
    console.log (valorfactura);
}



