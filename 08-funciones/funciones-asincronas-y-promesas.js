// funciones asincronas

function miAsinc() {
    // hace una llamada a una base de datos externa
    // puede darnos algun error
};

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // si esta correcto
    if(false) {
        resolve()
    } else {
        reject()
    }
});

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

    // async await 