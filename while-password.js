/*
Ejercicio 9 — Contraseña

Establece una contraseña correcta, por ejemplo:
1234

Pide al usuario que introduzca la contraseña.
Mientras sea incorrecta, vuelve a pedirla.

Cuando introduzca la correcta:
Acceso concedido.
*/
let password = 123;
let numero = Number(prompt("¿Cuál es la contraseña? \n: "));

while(numero !== password){
    numero = Number(prompt("Contraseña incorrecta. Intenta nuevamente: "));
}

console.log("Acceso concedido");
