/*
Ejercicio 3 — Números pares

Utiliza while para mostrar los números pares del 2 al 20.

Resultado:
2
4
6
8
10
12
14
16
18
20
*/

let i = 2;

while(i<=20){
    console.log(i);
    i+=2;
}

let numero = 1;
while(numero<=20){
    if(numero%2===0){
        console.log(numero);
    }
    numero++;
}
