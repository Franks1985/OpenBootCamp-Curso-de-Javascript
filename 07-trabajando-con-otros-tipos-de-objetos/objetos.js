// Trabajando con objetos
let obj = {
    id: 4,
    nombre: "Juan",
    apellido: "juanito",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de manifestacion"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id);
console.log(obj["4-juegos"]);

let prop = "isDeveloper"
console.log(obj[prop]);

// como replicar un objeto
let obj2 = obj;
console.log(obj2);

obj2.nombre = "Inigo";
console.log(obj2.nombre);
console.log(obj.nombre);
// no solo cambia el nombre del objeto 2 sino que tambien lo cambia del objeto 1, a menos que sean valores numericos, esos si se cambian solo del objeto copia y no del principal

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

// copiar y duplicar un objeto dentro de otro
let obj3 = { ...obj};

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Gorka";

console.log(obj.nombre);
console.log(obj3.nombre)

// como ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", anio: 1939},
    {titulo: "Titanic", anio: 1997},
    {titulo: "Moana", anio: 2016},
    {titulo: "El efecto mariposa", anio: 2004},
    {titulo: "Ted", anio: 2012},
]

console.log(listaPeliculas);

// como ordenar de menor a mayor con el metodo .sort() 
// recuerda que el metodo .sort() Muta el valor de la lista original

listaPeliculas.sort((a, b) => a.anio - b.anio);
console.log(listaPeliculas);
