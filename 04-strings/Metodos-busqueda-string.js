// Metodos de cadenas de texto (parte 3)
// https://regexr.com

let texto_largo = "Tito no es un mono cualquiera. a Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles.";

console.log(texto_largo.match(/no/g));

// verifica si existe la palabra dentro del texto
console.log(texto_largo.includes("terremoto"));

// saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Ti"));

// saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("."));