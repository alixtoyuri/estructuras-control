/*
Ejercicio 13 — Promedio de números

Pide números continuamente.
El ciclo debe terminar cuando el usuario introduzca 0.

Al finalizar calcula:
Cantidad de números
Suma
Promedio

Ejemplo: 10, 20, 30, 0

Resultado:
Cantidad: 3
Suma: 60
Promedio: 20
*/
let i=Number(prompt("Dame un numero: "));
let suma =0;
let cantidad = 0;


while (i !==0){

  suma +=i;
  cantidad++;
  i=Number(prompt("Dame otro numero: "));
}
let promedio = suma/cantidad;

console.log("Adios");
console.log("\nCantidad: "+cantidad);
console.log("Suma: "+suma);
console.log("Promedio: "+promedio);
