/*
Ejercicio 8 — Positivo, negativo o cero

Pide al usuario un número.
Indica si es:
positivo
negativo
cero

Después pregunta:
“¿Quieres introducir otro número?”

Mientras el usuario responda: s
debes volver a solicitar otro número.
Cuando responda: n
el programa debe terminar.

Objetivo
Aquí aparece una diferencia importante con for:

No sabes de antemano cuántas veces se repetirá.

Puede ser:
1 vez
5 veces
20 veces
...

La condición depende del usuario.
*/
let numero = 0;
let i = "s";
let s = "s";

while(i===s){
    if(numero > 0){
        console.log("Positivo");
    } else if( numero < 0){
        console.log("Negativo");
    } else if(numero === 0) {
        console.log("Cero");
    }
    i++;
}



//SEGUNDA SOLUCIÓN COMPLETA
let i = "s"; 

while(i==="s"){ 
  let numero = Number(prompt("Dame un número: ")); 
  if(numero > 0){
    console.log("Positivo"); 
  } else if( numero < 0){ 
    console.log("Negativo"); 
  } else if(numero === 0) { 
    console.log("Cero"); 
  } 
 i = prompt ("¿Quieres introducir otro número? \n s/n: "); 
} 
