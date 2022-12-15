class estudiante {
    nombre
    asignaturas = ["Javascript", "HTML", "CSS"]

    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }

    obtenDatos() {
        return this.nombre,
        this.asignaturas
    }

    class nuevoEstudiante extends estudiante {
        constructor(nombre, asignaturas) {
            super(nombre, asignaturas)
        }
}
return obtenDatos()

}