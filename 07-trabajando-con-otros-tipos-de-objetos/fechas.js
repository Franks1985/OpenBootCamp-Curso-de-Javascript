// trabajando con fechas

const fecha = new Date();
console.log(fecha);

// Atencion, los meses inicializan en cero ( 0 = enero, 11 = diciembre)

const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2);

const fecha3 = new Date(-10000000000000); // tambien se puede definir fechas a traves de los milisegundos
console.log(fecha3);

const fecha4 = new Date("october 13, 1979 12:15:15");
console.log(fecha4);

// como comparar dos fechas, si es mayor o si son iguales

console.log(fecha > fecha2);
console.log(fecha < fecha2);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha5);

console.log(fecha2 === fecha5); // ERROR, No se pueden comparar fechas de esta manera

// si queremos comparar fechas tendriamos que comvertirlas a milisegundos
console.log(fecha2.getTime() === fecha5.getTime()); // esta es la forma de comparar la igualdad entre fechas

// como obtener el dia, el mes y el anio en una fecha
// para obtener el dia tenemos el metodo .getdate()
console.log(fecha2.getDate());

// para obtener el mes tenemos el metodo .getMonth()
console.log(fecha2.getMonth() + 1); // recuerda que los meses comienzan enero desde 0, por eso se le suma 1, para que nos de el mes correcto

// para obtener el anio tenemos el metodo .getFullYear()
console.log(fecha2.getFullYear());

// como mostrar una fecha en un string
// .toLocaleDateString()
// https://developer.mozilla.org/es/docs/web/Javascript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-GB")); // de esta manera muestra el dia y luego el mes, sin embargo si usamos estados unidos nos va a mostrar primero el mes y luego el dia

console.log(fecha2); // esta es la fecha original

