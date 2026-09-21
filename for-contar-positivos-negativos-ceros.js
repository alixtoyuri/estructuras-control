/*
Ejercicio 17 — Contar positivos, negativos y ceros

Pide al usuario cuántos números desea introducir.
Después solicita esos números mediante un for.

Debes mantener tres contadores diferentes:
positivos
negativos
ceros

Al finalizar muestra algo parecido a:
Positivos: 4
Negativos: 2
Ceros: 1
*/
let numeros = Number (prompt("¿Cuántos números? "));
let positivos = 0;
let negativos = 0;
let ceros = 0;

for(let i = 1; i<=numeros;i++){
  let numero = Number (prompt("Número "+i+": "));
  if(numero < 0){
    negativos ++;
  } else if(numero > 0){
    positivos++;
  } else{
    ceros++;
  }
}

console.log("Positivos: "+positivos);
console.log("Negativos: "+negativos);
console.log("Ceros: "+ceros);
