/*
Ejercicio 3 — Compra
Pide:
precio
y determina:
Si el precio es mayor a 1000, mostrar "Tiene envío gratis".
Si el precio es mayor a 500, mostrar "Tiene un descuento del 10%".
Si el precio es menor a 100, mostrar "Compra pequeña".
*/
let compra = prompt("Precio de la compra: ");
let resultado = "";

if(compra>=1000){
  resultado += " Tiene envío gratis ";
}
if(compra>=500){
  resultado += " Tiene un descuento del 10% ";
}
if(compra<=100){
  resultado += " Compra pequeña ";
}
if(resultado === ""){
  return String(resultado);
}

console.log(resultado);
