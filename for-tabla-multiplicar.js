/*
Ejercicio 6 — Tabla de multiplicar

Pide al usuario un número mediante prompt().
Después utiliza un for para mostrar su tabla de multiplicar del 1 al 10.
Por ejemplo, si el usuario introduce:

7

debería obtener:

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
*/

let num = 7;
let resultado = 0;

for (let i= 1; i <= 10; i++){
    resultado = num * i;
    console.log(num +" x "+ i +" = "+ resultado);
}
