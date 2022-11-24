// Metodos de cadenaas de texto (parte 2)

let input = "Piscis"
let db = "piscis"

// toLowerCase() - toUpperCase()

console.log(input === db);
console.log(input.toLowerCase === db.toLowerCase);

// Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final

let str_3 = "     hola soy un string con espacios al final.     ";
console.log(str_3.length);

// trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion
let str_4 = "Hoa soy el string numero 4";

console.log(str_4.charAt(0));
console.log(str_4[0]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Frank y me gusta cantar. mi nombre es Frank y mi apellido es sequera"
console.log(str_5.indexOf("Frank"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Frank"));