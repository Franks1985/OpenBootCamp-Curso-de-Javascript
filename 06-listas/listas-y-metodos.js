// como trabajar con listas (arrays, arreglos, vectores)
let var1 = { id: false};
let array = [1, "hola", false, { id: 5}, null, undefined, var1];

console.log(array);

// Acceder a los valores de un array a traves de su posicion
// array[indice] => 0, 1, 2, 3, 4, 5, ...
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// Metodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array
// Valores al finel => Push
array.push("final", 45, 100, false);
console.log(array);

// Valores al principio => unshift
array.unshift("inicio");
console.log(array);

// Metodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array

let array2 = [1,2,3,"hola", false];
// Valores al final => Pop
array2.pop();
console.log(array2);
array2.pop();
console.log(array2);


// Valores al principio => shift
array2.shift();
console.log(array2);

// Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)

let array3 = [1,2,3,4,5,6,7,8,9,10];

// eliminar valores con .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3);

// Añadir valores con .splice(indice, 0, valores)
array3.splice(2, 0, "hola", 3);
console.log(array3);

// Modificar valores con .splice(indice, 1, valores)
array3.splice(2, 1, "chao");
console.log(array3);