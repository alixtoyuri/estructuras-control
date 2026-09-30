/*
Ejercicio 11 — Sumar hasta introducir cero

Pide números continuamente.
Mientras el usuario introduzca un número diferente de 0, debes sumarlo.

Cuando introduzca: 0
el programa debe terminar y mostrar la suma total.

Ejemplo
5
8
3
10
0

Resultado: Suma total: 26
*/
let numero = Number(prompt("Dame un numero: "));
let resultado= 0;

while( numero !== 0) {
    resultado = resultado + numero;
    numero = Number(prompt("Dame otro numero: "));
}

console.log("Suma total: "+resultado);
