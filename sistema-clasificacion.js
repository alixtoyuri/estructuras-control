/*
Ejercicio 10 — Sistema de clasificación

Pide al usuario:

edad
y:
temperatura

El programa debe determinar:

Edad
< 0       → Edad inválida
0 - 12    → Niño
13 - 17   → Adolescente
18+       → Adulto
Temperatura

Independientemente de la edad:
< 10       → Hace frío
10 - 25    → Temperatura agradable
> 25       → Hace calor

Por ejemplo:
Edad: 15
Temperatura: 30

Resultado:
Adolescente
Hace calor
*/

let edad = Number(prompt("Edad: "));
let temp= Number(prompt("Temperatura: "));
let result="";
if(edad < 0){
  result +=" Edad Invalida ";
}
if(edad>=0 && edad <=12){
  result += " Niño ";
}
if (edad >= 13 && edad <=17){
  result += " Adolescente "; 
}
if(edad >= 18){
  result += " Adulto ";
}
if (temp < 10){
  result += " Hace frío ";
} 
if(temp >= 10 && temp <= 25){
  result += " Temperatura agradable ";
}
if(temp > 25){
  result += " Hace calor ";
}
if(result === ""){
  return String(result);
}

console.log(result);




