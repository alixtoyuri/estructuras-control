/*
Ejercicio 15 — Mayor número introducido

Pide números continuamente.
El ciclo termina cuando el usuario introduzca 0.
Debes determinar cuál fue el número mayor.

Ejemplo
8
15
3
21
10
0

Resultado:
Mayor: 21
*/
let numero = Number(prompt("Digita un numero: "));
let mayor = numero;

while(numero !== 0){

    if (numero > mayor ){
        mayor = numero;
    }
  numero = Number(prompt("Digita un numero: "));
}
console.log("Terminar");
console.log("El numero mayor es: "+mayor);
