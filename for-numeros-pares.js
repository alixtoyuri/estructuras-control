/*
Ejercicio 8 — Contar números pares

Recorre los números del 1 al 20.
Cada vez que encuentres un número par, aumenta una variable contador.
Al final muestra cuántos números pares había.

Resultado esperado:
Hay 10 números pares.
*/
let num = 0;
let resultado = 0;

for(let i=1; i<=20;i++){
    if(i%2===0){
        resultado +=1;
        //resultado += i.length;
        //console.log("Hay "+ i+" números pares");
        //resultado +=i;
    }
}
console.log("Hay "+ resultado+" números pares");

// SOLUCIÓN FINAL
let num = 0;
let resultado = 0;

for(let i=1; i<=20;i++){
    if(i%2===0){
        resultado +=1;
    }
}
console.log("Hay "+ resultado+" números pares");
