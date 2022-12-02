// iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];

// Forma antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
        console.log(array[i])
}

// Forma mas eficiente Forma (ES6) con .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
});
console.log(suma);

// Busqueda de un valor dentro de una lista usando el metodo .find()
// quiero encontrar el elemento 90
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})

console.log(variable);

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucia", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Miguel") {
//         return true
//     }
// });

// otra forma igual de hacerlo
// const objeto = listaObjetos.find(o => {
//     return o.nombre === "Miguel"
// });

// otra
const objeto = listaObjetos.find(o => o.nombre === "Miguel");
console.log(objeto.edad);

// esta es la mejor forma de buscar objetos en arrays
const { edad } = listaObjetos.find(o => o.nombre === "Miguel")
console.log(edad);