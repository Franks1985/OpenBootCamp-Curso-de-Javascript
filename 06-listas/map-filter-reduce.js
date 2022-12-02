// Trabajar con metodos mas avanzados
// .map()  .filter()  .reduce()

const array = ["San sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(v);
})
console.log(val);

// const newArray = array.map((valor, indice) => {
//     return `${indice + 1} - ${valor}`
// })

// mejor forma 
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray);

// metodo .filter()
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucia", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]

// const personasMayorees = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })

// mejor forma de trabajar el filter
const personasMayorees = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayorees);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel");
console.log(nuevaLista);

// metodo reduce

const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})

console.log(suma);