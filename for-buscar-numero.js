/*
Ejercicio 19 — Buscar un número

Crea un programa que tenga una colección de números:
[4, 8, 15, 16, 23, 42]
Pide al usuario un número.
Utiliza un for para recorrer el arreglo y determinar si el número existe.

Por ejemplo:
Número a buscar: 15
Resultado: El número sí existe.

Si introduce:
20

Resultado:
El número no existe.

Objetivo
Aquí el for empieza a utilizarse como una herramienta para:
recorrer información y buscar algo dentro de ella.
*/
let numero =Number(prompt("Dame un número: "));
let arreglo = [4, 8, 15, 16, 23, 42];
let resultado = false;

for (let i= 0; i< arreglo.length; i++){
  if(numero === arreglo[i]){
    resultado = true;  
  } 
}
if(resultado){
  console.log("El número sí existe.");
} else{
  console.log("El número no existe.");
}
