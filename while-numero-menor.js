/*
Ejercicio 16 — Menor número introducido
Igual que el anterior, pero ahora debes encontrar el menor.

Ejemplo:
8
15
3
21
10
0

Resultado:
Menor: 3
*/
let numero = Number(prompt("Digita un numero: "));
let menor = numero;

while(numero !==0){
  
    if(numero < menor){
        menor=numero;
    }
    numero = Number(prompt("Digita otro numero: "));
}

console.log("Terminar");
console.log("El numero menor es: "+menor);
