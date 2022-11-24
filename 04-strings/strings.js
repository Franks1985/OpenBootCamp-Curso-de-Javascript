// strings o cadenas de caracteres

let str_sng = 'Hola soy un string de comillas simples';
let str_dbl = "Hola soy un string de comillas dobles";


console.log(str_sng);
console.log(str_dbl);


let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";


console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);

//  Comillas invertidas (backticks)

let str_backticks = `Hola este es un string con backticks`;

console.log(str_backticks);


let nombre = "Frank";
let saludo = `Hola, ${nombre} bienvenido a este curso`;

console.log(saludo);


// Plantillas HTML

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`;

console.log(plantilla);


// introduccion de variables en html

let libros = ["Empieza por el por que", "El monje que vendio su ferrari", "El poder del ahora"];