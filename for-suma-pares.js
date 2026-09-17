/*
Ejercicio 12 — Suma de pares
Recorre desde 1 hasta 100.
Debes sumar solamente los números pares.
Al finalizar muestra el resultado.

La idea es practicar este patrón:
recorrer
→ comprobar
→ acumular
*/
let result=0;

for(let i=1; i<=100;i++){
    if(i%2===0){
        result +=i;
    }
}
console.log(result);
