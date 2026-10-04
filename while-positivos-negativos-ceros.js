/*
Ejercicio 14 — Positivos, negativos y ceros

Pide números continuamente.
El ciclo termina cuando el usuario introduzca: 0

Debes contar:
positivos
negativos

Y al final mostrar:
Positivos: X
Negativos: Y
*/
let i=Number(prompt("Dame un numero: "));
let positivo =0;
let negativo = 0;

while (i !==0){

  if(i>0){
    positivo ++;
  }
  if(i<0){
    negativo ++;
  }
  i=Number(prompt("Dame otro numero: "));
}

console.log("Adios");
console.log("Positivos: "+positivo);
console.log("Negativos: "+negativo);
