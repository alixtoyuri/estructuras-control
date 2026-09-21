/*
Ejercicio 18 — ¿Es primo?

Pide al usuario un número entero positivo.
Determina si es primo.

Recuerda:
Un número primo solamente puede dividirse exactamente entre:
1
y
él mismo

Por ejemplo:
7 → primo
8 → no primo
13 → primo
15 → no primo
*/
let numero = Number(prompt("Digita un número: "));
let esPrimo = true;

for (let i = 2; i < numero; i++) {

    if (numero%i===0) {
        esPrimo =false;
    }

}

if (esPrimo) {
    console.log("Es primo");
} else {
    console.log("No es primo");
}


//SEGUNDA SOLUCIÓN
let numero = Number(prompt("Digita un número: "));
let esPrimo = true;

for (let i = 2; i < numero; i++) {
  
    if (numero%i===0) {
        esPrimo =false;
    } 

}

if(numero === 0){
  console.log("No es primo");
  } else if(numero === 1){
      console.log("No es primo");
  } else if(esPrimo){
      console.log("Es primo");
  } else {
       console.log("No es primo");
}


//TERCERA SOLUCIÓN
let numero = Number(prompt("Digita un número: "));

if (numero <= 1) {
    console.log("No es primo");
} else {
    let esPrimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
        }
    }

    if (esPrimo) {
        console.log("Es primo");
    } else {
        console.log("No es primo");
    }
}
