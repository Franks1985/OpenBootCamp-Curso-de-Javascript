// Metodos mas utilizados con strings
// como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length);

// obtener partes de cadenas de caracteres o strings
// slice() substring() substr()

let slice_str =str.slice(5, 10);
console.log(slice_str);

let substring_str =str.substring(5, 10);
console.log(substring_str);

let substr_str =str.substr(5, 10);
console.log(substr_str);

// Reemplazar parte del contenido de un string
let cadena = "Hola mi nombre es Frank";
console.log(cadena);

// al utilizar strings solo reemplaza la primera instancia que consigue
console.log(cadena.replace('Frank', 'Francisco'));

let texto_largo = "Tito no es un mono cualquiera. a Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles.";

console.log(texto_largo.replace('los', 'cinco'));


// al utilizar la expresion regular /g (global), reemplaza todas las instancias

console.log(texto_largo.replace(/los/g, 'cinco'));