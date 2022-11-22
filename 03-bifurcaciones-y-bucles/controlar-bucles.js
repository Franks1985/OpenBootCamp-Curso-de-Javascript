// Casos muy espcificos - breack, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (var i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
    }

    var j = 50;
    const k = 100;
    console.log(lista[i]);
    console.log(j);
    console.log(k);

if (lista[i] > 5) {
    break;
}

}






// cual es el ambito de un bucle
// console.log(k);
console.log(i);
console.log(j);
