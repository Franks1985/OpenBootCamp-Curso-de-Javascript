// funciones de tipo flecha
// el metodo .map() acepta 3 parametros

const array = [1, 5, 6, 2, 7, 12, 8, 92];

// const array2 = array.map(function(valor) {
//     return valor * 2;
// })

const array2 = array.map((valor) => valor * 2); // solo para funciones de tipo flecha que unicamente devuelven un valor

console.log(array2);

// const dobleDelValor = valor => {
//     return valor * 2;
// }

// las funciones de tipo flecha solo se puedn acceder despues que hayan sido inicializada

const dobleDelValor = valor => valor * 2;

console.log(doble(6));
console.log(dobleDelValor(6));

const array3 = array.map(dobleDelValor);
console.log(array3);

function doble(valor) {
    return valor * 2;
}