class Persona {
    // Private => #
    // solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    #obtenEdad

    // Protected => _
    // solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true;
    constructor(nombre, edad, isDeveloper) {
        this.#nombre = nombre
        this.#edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }

    obtenNombre() { // es una funcion Getter => porque nos permite acceder de forma controlada a algun atributo protegido
        return this.#nombre
    }

    // #obtenEdad() {
    //     return this.edad
    // }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
}

const persona = new Persona('Frank', 37, true);
// console.log(persona);
// console.log(persona.nombre);
// persona.saludo();
// console.log(persona.obtenNombre());
// console.log(persona._isDeveloper);

// Getter => son metodos que nos permiten obtener atributos/ metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad);
// Setter => son metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// quiero cambiar la edad de la persona
persona.setEdad(38)
console.log(persona.getEdad());