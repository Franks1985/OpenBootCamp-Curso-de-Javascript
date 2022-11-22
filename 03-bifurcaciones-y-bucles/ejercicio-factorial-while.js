// factorial con while

function factorial(numero) {
    let resultado = 1;
    let i = 1;

    while (i <= numero) {
        resultado *= i;
        ++i;
    }
    return resultado;
}

console.log("El factorial de 10 es: " + factorial(10));