const datosPersonales = {
    nombre: "Francisco",
    apellido: "Sequera",
    edad: 37,
    altura: 1.84,
    isDeveloper: true,
};

let edad = datosPersonales.edad;

let listaVariosobjetos = [
    { datosPersonales },
    { amigo1: {
        nombre: "William",
    apellido: "chirinos",
    edad: 39,
    altura: 1.54,
    isDeveloper: false,
    }},
    { amigo2: {
        nombre: "Junior",
    apellido: "Moreno",
    edad: 27,
    altura: 1.64,
    isDeveloper: false,
    }}
]

let listaEdadOrdenada = listaVariosobjetos.sort((a, b) => a.edad - b.edad);
