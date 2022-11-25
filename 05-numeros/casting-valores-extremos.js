// Operador .valueOf() - Obtener valores numericos a partir de Literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf()); // esto es lo que hace el interprete internamente sin que le digamos nada

console.log(b.valueOf());

let str = new String ("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN (Not a number) - Infinity
let n = Number ('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);


// como convertir lis strings a valores numericos con number, parseInt y parseFloat.
let numero = '5.89';
let num2 = 17.2;
console.log(typeof numero);
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2);

console.log(typeof parseInt(numero));
console.log(typeof parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

// Numeros hexadecimales
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));


// Obtener los valores maximo y minimo en Javascript.
let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);