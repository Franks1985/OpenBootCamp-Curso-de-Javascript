// Formas de importar y exportar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

// const moduloMatematicas = require("./matematicas")
// console.log(moduloMatematicas);
// const factorial = moduloMatematicas.factorial;
// const { factorial, suma } = moduloMatematicas;
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematicas.suma);
const { factorial, suma } = require("./matematicas.js")


const fact = factorial(5)
console.log(fact);

const sum = suma(12, 90)
console.log(sum);

