function* generaId() {
    let id = 0;
    while(true) {
        id++;
        if(id === 10) {
            return id
        }
        yield id // esto hace que se quede esperando hasta que se vuelva a llamar la funcion
    }
};

const gen = generaId();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);