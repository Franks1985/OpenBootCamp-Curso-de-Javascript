// localStorage.setItem("nombre", "Frank")
// localStorage.setItem("nombre", "Rafa")

// console.log(localStorage.getItem("nombre"));

// localStorage.setItem("persona", JSON.stringify(
//     { nombre: "frank", edad: 37}
// ))

// JSON.stringify -> convierte un objeto/array en string

// JSON.parse -> convierte un objeto/array convertido a traveves de stringify en un objeto de javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Frank")

/* Cookies */

document.cookie = "nombreCookie=FrankCookie"

document.cookie = "nombreCaducidad=Nombre;expires" + new Date(2023, 0, 1).toUTCString()
console.log(document.cookie);