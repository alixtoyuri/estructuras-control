/*
Ejercicio 4 — Calificación

Pide una calificación de 0 a 100.

Clasifica:
90 - 100 → Excelente
80 - 89  → Muy bien
70 - 79  → Bien
60 - 69  → Suficiente
0 - 59   → Reprobado
*/
let nota = Number (prompt("Dame la nota: "));

if(nota >=90){
  console.log("Excelente");
} else if(nota >= 80){
  console.log("Muy bien");
} else if(nota >=70){
  console.log("Bien");
} else if(nota >= 60){
  console.log("Suficiente");
} else if(nota >= 50){
  console.log("Reprobado");
}else if(nota === 0){
  console.log("Nota es cero");
}else{
  console.log("Nota debajo de cero");
} 
