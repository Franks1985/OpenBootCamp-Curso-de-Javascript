// bifurcaciones if... else

if (true) {
    console.log("es verdadero");
}

if (false) {
    console.log("Es verdadero");
} else {
    console.log("No es verdadero");
}

// sentencias switch

let nota = 5;

switch (nota) {
    case 5:
        console.log("sobresaliente");
        break;
    case 4:
        console.log("puedes mejorar");
        break;
    case 3:
        console.log("suficiente");
        break;
    case 2:
        console.log("casi lo logras");
        break;
    case 1:
        console.log("no has aprobado");
        break;
    default:
        console.log("error");
        break;
}