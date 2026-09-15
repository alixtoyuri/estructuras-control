/*
Ejercicio 11 — Mostrar solamente los impares

Pide un número máximo.
Después recorre desde 1 hasta ese número y muestra únicamente los números impares.

Por ejemplo:
Máximo: 15

resultado:
1, 3, 5, 7, 9, 11, 13, 15
*/
let max= 15;

for(let i= 1; i<=max; i++){
    if(i%2===1){
        console.log(i);
    }
}
