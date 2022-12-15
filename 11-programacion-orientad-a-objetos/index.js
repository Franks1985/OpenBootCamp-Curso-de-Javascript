const persona = {
    nombre: "Gorka",
    edad: 34,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola');
    }
};

// console.log(persona);
persona.saludo();

const otra_persona = {
    nombre: "Frank",
    edad: 37,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola');
    }
};

otra_persona.saludo();

// function factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,    // nombre: nombre,
        edad,    // edad: edad,
        isDeveloper,    // isDeveloper: isDeveloper,
        saludo: function() {
            console.log('Hello');
        }
    }
};

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona);

const nueva_persona_2 = creaPersona("Maria", 42, false);
console.log(nueva_persona_2);