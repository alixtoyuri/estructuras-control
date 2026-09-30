/*
Ejercicio 12 — Contar hasta cero

Pide números continuamente.
Mientras el usuario no introduzca 0, debes contar cuántos números ha introducido.

Ejemplo:
4
8
15
16
0

Resultado: Se introdujeron 4 números.
*/
let numero = Number(prompt("Dame un numero: "));
let resultado= 0;

while( numero !== 0) {
    resultado = resultado + 1;
    numero = Number(prompt("Dame otro numero: "));
}

console.log("\nSe introdujeron "+resultado+" números.");
