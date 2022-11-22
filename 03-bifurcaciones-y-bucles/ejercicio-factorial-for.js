// ejercicio factorial con un bucle for

var fact = 1;

for (var i =1; i<= 10; i++) {
    console.log (fact + " x " + i + " = ");
    fact = fact * i;
}
console.log("El factorial de 10 es: " + fact);