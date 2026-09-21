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
