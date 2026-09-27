/*
Ejercicio 5 — Mostrar múltiplos

Pide al usuario un número.
Después utiliza un while para mostrar sus primeros 10 múltiplos.

Ejemplo:
Número: 7

Resultado:
7
14
21
28
35
42
49
56
63
70
*/
let numero = 7;
let i = 1;
let multiplo = 0;

while(i<=10){
    multiplo = i*numero;
   console.log("El múltiplo del número "+numero+" es "+i+" x "+numero+" = "+multiplo);
   i++;
}
