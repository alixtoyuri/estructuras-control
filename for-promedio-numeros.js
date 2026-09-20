/*
Ejercicio 16 — Promedio de números

Pide al usuario cuántos números desea introducir.
Por ejemplo:
¿Cuántos números deseas ingresar? 5

Después utiliza un for para solicitar esos 5 números.

Al terminar:
suma todos los números;
calcula el promedio;
muestra el resultado.

Ejemplo
Entrada:
10,20,30,40,50

Resultado:
Suma: 150
Promedio: 30
*/
let numeros = Number(prompt("¿Cuántos números deseas ingresar?: "));
let suma = 0;
for(let i=1; i<= numeros; i++){
    let sumar = Number(prompt("Dame los numeros: "));
  suma +=sumar;
}
let promedio = suma/numeros;
console.log(promedio);
console.log(suma);

//SEGUNDA SOLUCIÓN
let numeros = Number(prompt("¿Cuántos números deseas ingresar?: "));
let suma = 0;
for(let i=1; i<= numeros; i++){
    let sumar = Number(prompt("Dame el "+i+" numero: "));
  suma +=sumar;
}
let promedio = suma/numeros;
console.log("El promedio total es de: "+promedio);
console.log("La suma total es de: "+suma);


//TERCERA SOLUCIÓN
let numeros = Number(prompt("¿Cuántos números deseas ingresar? "));
let sumaNumeros = 0;
let entrada = "";

for(let i = 1; i <=numeros; i++){
  let numero = Number(prompt("Número "+i+": "));
  entrada += numero +", ";
  sumaNumeros += numero;
}
let promedio = sumaNumeros/numeros;

console.log("Entrada: "+entrada);
console.log("Suma: "+sumaNumeros);
console.log("Promedio: "+promedio);
