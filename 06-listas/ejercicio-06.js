let listaDeCompras = ["arroz", "azucar", "espaguetti", "detergente", "cafe"];

listaDeCompras.push("Aceite de Girasol");
console.log(listaDeCompras);

listaDeCompras.pop("Aceite de Girasol");
console.log(listaDeCompras);

let listaPelisFavoritas = [
    { titulo: "Men in Black", director: "Barry Sonnenfeld", fecha: 1997 },
    { titulo: "El caballero del rey", director: "Biyi Bandele", fecha: 2022 },
    { titulo: "barrabas", director: "Evgeny Emelin", fecha: 2019 }
    
]

let listaPosteriorEnero = listaPelisFavoritas.filter(obj => obj.fecha > 2010);

let listaDirectores= listaPelisFavoritas.map(director => director.director);

let listaTitulos = listaPelisFavoritas.map(titulo => titulo.titulo);

let concat1 = listaDirectores.concat(listaTitulos);

let concat2 = [...listaDirectores, ...listaTitulos];
