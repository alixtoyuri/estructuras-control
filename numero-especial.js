/*
Ejercicio 5 — Número especial

Pide un número.

Debes determinar:

Si es positivo, negativo o cero.
Si es par o impar.
*/

let num = prompt ("Digita un numero:  ");
let result= "";

if(num >= 1){
    result += " Positivo ";
}
if(num<=-1){
    result += " Negativo ";
}
if(num=== 0){
    result += " Cero ";
}
if(num % 2 === 0){
    result += " Par ";
}
if(num %2 ===1){
    result += " Impar ";
}
if (result ===""){
    return String(result);
}

console.log(result);



