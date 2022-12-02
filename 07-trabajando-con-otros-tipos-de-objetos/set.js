// Sets o conjuntos (en castellano)
let array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, { id: 5 }, "hola"];

console.log({ id: 5 } === { id: 5});

let miSet = new Set(array);

// los set nos permiten asegurarnos que no va a haber objetos repetidos
console.log(array);
console.log(miSet);

// .add()

miSet.add(9);
console.log(miSet);
miSet.add(4)
console.log(miSet);

// .delete()
miSet.delete("hola");
console.log(miSet);

// .clear()
// miSet.clear();
// console.log(miSet);

// .has()
// console.log(array.includes(2));
console.log(miSet.has(40));

// .size
console.log(miSet.size);

// como hacer iteracion
miSet.forEach(valor => {
    console.log(valor);
})

// como obtener un objeto iterator
let it_miSet = miSet.values()
console.log(it_miSet);

// como volver a comvertir el set en un array
let ar_miSet = [ ...miSet ];
console.log(ar_miSet);