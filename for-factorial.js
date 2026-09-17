/*
Ejercicio 13 — Factorial

Pide al usuario un número entero positivo.
Calcula su factorial utilizando un for.

Por ejemplo:
5! = 5 × 4 × 3 × 2 × 1

Resultado: 120
*/
let num = Number(prompt("Número: "));
let factorial = 1;

for(let i= 1; i<=num;i++){
    factorial *= i;
}

console.log(factorial);
