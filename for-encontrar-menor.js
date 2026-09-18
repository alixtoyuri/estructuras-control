/*
Ejercicio 15 — Encontrar el número menor

Ahora haz lo contrario.
Pide 5 números y encuentra el menor.

Ejemplo:
12, 5, 19, 2, 8

Resultado: El número menor es 2.
*/
let menor = Number(prompt("Número 1: "));

for (let i = 2; i <= 5; i++) {

    let numero = Number(prompt("Número "+i+" : "));

    if (numero < menor) {
        menor = numero;
    }

}

console.log("El menor es: "+menor);
