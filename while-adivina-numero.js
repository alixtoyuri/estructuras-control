/*
Ejercicio 10 — Adivina el número

El programa debe tener un número secreto.

Por ejemplo:
let secreto = 7;

El usuario debe intentar adivinarlo.
Mientras no acierte, el programa deberá indicarle:

El número es mayor.
o:
El número es menor.

Cuando acierte:
¡Correcto!
*/
let secreto = 7;
let numero = Number(prompt("¿Cuál es el número secreto: "));

while(secreto !== numero){
  
  if(numero > secreto){
    console.log("El número es mayor");
  } else if(numero < secreto){
    console.log("El número es menor");
  }
  numero = Number(prompt("¿Cuál es el número secreto: "));
}

console.log("Correcto");
