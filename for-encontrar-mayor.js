/*
Ejercicio 14 — Encontrar el número mayor
Pide al usuario 5 números, uno por uno.
Después determina cuál de ellos es el mayor.

Por ejemplo:
8, 15, 3, 21, 10

Resultado: El número mayor es 21.
*/
let mayor = Number(prompt("Número 1: "));

for (let i = 2; i <= 5; i++) {

    let numero = Number(prompt("Número "+i+" : "));

    if (numero> mayor) {
        mayor = numero;
    }

}

console.log("El mayor es: "+mayor);
