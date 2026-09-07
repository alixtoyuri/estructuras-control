/*
Ejercicio 7 — Número entre rangos

Pide un número y muestra:

Si está entre 1 y 10:
"Está entre 1 y 10"

Si está entre 11 y 20:
"Está entre 11 y 20"

Si es mayor a 20:
"Es mayor que 20"

Si es menor a 1:
"Es menor que 1"
*/
let num = Number(prompt("Dame un numero: "));

if(num < 1){
  console.log("Es menor que 1");
} else if(num >=1 && num <=10){
  console.log("Está entre 1 y 10");
} else if(num >=11 && num <= 20){
  console.log("Está entre 11 y 20");
} else if(num >= 21){
  console.log("Es mayor que 20");
}  else {
  console.log("No es un número");
}
