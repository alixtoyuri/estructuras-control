/*
Ejercicio 7 — Suma de impares

Recorre del 1 al 50.
Suma solamente los números impares.
Muestra la suma final.
*/
let i = 1;
let suma = 0;

while(i<=50){
    if(i%2!==0){
        suma +=i;
        
    }
    i++;
}

console.log(suma);
