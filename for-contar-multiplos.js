/* Ejercicio 10 — Contar múltiplos

Pide al usuario:
Un número máximo
Un divisor

Después recorre desde 1 hasta el número máximo.
Debes contar cuántos números son divisibles entre el divisor.

Por ejemplo:
Máximo: 20
Divisor: 3

Los números encontrados serían:
3, 6, 9, 12, 15, 18

Resultado:
Hay 6 múltiplos.
*/
let max = 20;
let divisor = 3;
let contador=0;

for(let i= 1; i<=max;i++){
    if(i%divisor===0){
        contador++;
    }
}

console.log("Hay "+contador+" múltiplos.");

//SOLUCIÓN
/* Ejercicio 10 — Contar múltiplos

Pide al usuario:
Un número máximo
Un divisor

Después recorre desde 1 hasta el número máximo.
Debes contar cuántos números son divisibles entre el divisor.

Por ejemplo:
Máximo: 20
Divisor: 3

Los números encontrados serían:
3, 6, 9, 12, 15, 18

Resultado:
Hay 6 múltiplos.
*/
let max = Number(prompt("Máximo: "));
let divisor = Number(prompt("Divisor: "));
let contador=0;

for(let i= 1; i<=max;i++){
    if(i%divisor===0){
        contador++;
    }
}

console.log("Hay "+contador+" múltiplos.");

