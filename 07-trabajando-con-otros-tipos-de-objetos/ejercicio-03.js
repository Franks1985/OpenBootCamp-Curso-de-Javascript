let fechaDeHoy = new Date();

let fechaNacimiento = new Date(1985, 01, 27, 9, 30);


let masTarde = fechaDeHoy.getTime() > fechaNacimiento.getTime();

let diaDeNacimiento = fechaNacimiento.getDate();

let mesNacimiento = fechaNacimiento.getMonth();

let anioDeNacimiento = fechaNacimiento.getFullYear();
