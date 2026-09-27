/*
Ejercicio 6 — Contar números pares

Recorre los números del 1 al 20 utilizando while.
Cada vez que encuentres un número par, aumenta un contador.

Al finalizar:
Cantidad de pares: 10
*/
let i = 1;
let sumaPar=0;

while(i<=20){

if(i%2===0){
    sumaPar++;
}
    i++;
}

console.log("Cantidad de pares: "+sumaPar);
