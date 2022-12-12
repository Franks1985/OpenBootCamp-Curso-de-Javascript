const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo numero")
}

// const elDoble = miFuncion("ala")
const numero = "8";

try {
    // codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta");
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    // En caso de fallar, quiero que ejecutes esto
    console.error(`El valor de e es: ${e}`);
    console.log("ERROR!");
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algun error, como si no exite ninguno");
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError