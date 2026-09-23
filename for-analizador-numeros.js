/*
Ejercicio 20 — Analizador de números

Este será tu ejercicio integrador.
Pide al usuario cuántos números desea introducir.
Después utiliza un for para solicitar todos los números.

Al terminar, el programa debe indicar:
Cantidad de números ingresados
Cantidad de positivos
Cantidad de negativos
Cantidad de ceros
Cantidad de pares
Cantidad de impares
Número mayor
Número menor
Suma total
Promedio

Por ejemplo, si el usuario introduce:
5
-3
8
0
12
-5

el programa debería obtener aproximadamente:
Cantidad de números: 5
Positivos: 2
Negativos: 2
Ceros: 1
Pares: 3
Impares: 2
Mayor: 12
Menor: -5
Suma: 12
Promedio: 2.4

Regla importante
Intenta resolverlo utilizando un solo for principal para recorrer los números.
Puedes utilizar varios if dentro de él.
*/
// 1° SOLUCIÓN
let numeros = Number(prompt("cuántos números desea introducir: "));
let cantidadNumeros = 0;
let positivos = 0;
let negativos = 0;
let ceros = 0;
let pares = 0;
let impares = 0;
let intentos = 2;
let suma = 0;
let sumaTotal=0;


let totalCantidadNumeros = 0;

for (let i = 1; i <= numeros; i++) {
    let numero = Number(prompt("Número "+i+": "));
    suma +=numero;
    
    if (numero > 0) {
        positivos++;
    } else if(numero < 0){
        negativos++;
    } else if(numero === 0){
        ceros++;
    }


   
}

let promedio = suma/numeros;

console.log("Cantidad de Números: "+ numeros);

console.log("\nPositivos: "+positivos);
console.log("Negativos: "+negativos);
console.log("Ceros: "+ceros);

// console.log("Pares: "+pares);
// console.log("Impares: "+impares);

// console.log("Mayor: "+mayor);
// console.log("Menor: "+menor);
console.log("\nSuma: "+suma);
console.log("Promedio: "+promedio);


//2° SOLUCIÓN
let numeros = Number(prompt("cuántos números desea introducir: "));

let positivos = 0;
let negativos = 0;
let ceros = 0;
let pares = 0;
let impares = 0;
let suma = 0;
let entrada = "";

let mayor;
let menor;



for (let i = 1; i <= numeros; i++) {
    let numero = Number(prompt("Número "+i+": "));
    suma +=numero;
    entrada += numero+", " ; 
    
    
    if(numero%2===0){
        pares++;
    } 

    if(numero % 2 !== 0) {
        impares++;
    } 

    if (numero > 0) {
        positivos++;
    } 

    if(numero < 0){
        negativos++;
    } 

    if(numero === 0){
        ceros++;
    } 

   
    if (i === 1) {
        mayor = numero;
        menor = numero;
    } else {
        if (numero > mayor) {
            mayor = numero;
        }

        if (numero < menor) {
            menor = numero;
        }
    }
}

let promedio = suma/numeros;

console.log("Cantidad de Números: "+ numeros);

console.log("\nPositivos: "+positivos);
console.log("Negativos: "+negativos);
console.log("Ceros: "+ceros);

console.log("Pares: "+pares);
console.log("Impares: "+impares);

console.log("Mayor: "+mayor);
console.log("Menor: "+menor);

console.log("\nSuma: "+suma);
console.log("Promedio: "+promedio);

console.log("Datos de entrada: "+entrada);
