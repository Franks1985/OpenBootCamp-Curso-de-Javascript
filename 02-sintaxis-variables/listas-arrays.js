// Listas, array o arreglos
const lista = [1, "Hola", true, undefined, null];
console.log(lista);

const lista2 = new Array(2, "hola", false, undefined, null);
console.log(lista2);


const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
console.log(lista3);


const lista4 = [lista, lista2, lista3];
console.log(lista4);

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    iswhite: false,
    contactos: ["frank", "dayana", "savi"],
    tarjeta: {
        marca: "sandisk",
        amacenamiento: 32
    }
}

movil.anio = 2019;
movil.marca = "samsung";

console.log(movil);
console.log(movil.tarjeta.marca);
console.log(movil.marca);

//Fechas
// Librerias de apoyos para fechas = Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);// utilizando los mili segundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date (2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anio = ahora.getFullYear()

console.log(dia, mes, anio);