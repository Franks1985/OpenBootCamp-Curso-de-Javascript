const boton = document.querySelector("#btn")

// console.log(boton);

boton.addEventListener("click", () => {
    // alert("Se ha hecho click")
    confirm("Estas de acuerdo?")
        ? alert("Ok")
        : alert("No!");
})