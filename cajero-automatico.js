/*
Determina:
1. Si el retiro es menor o igual al saldo: "Retiro Aprobado"
2. Si el retiro es mayor al saldo: "Fondos Insuficientes"
3. Si el retiro es 0 o negativo: "Cantidad Invalida"
*/
let retiro = Number(prompt("Retiro de: "));
let saldo = 1000;


if(retiro <= saldo ){
  console.log("Retiro Aprobado");
} else if(retiro > saldo ){
  console.log("Fondos Insufientes");
} else if( retiro === 0 || retiro < --saldo ){
  console.log("Cantidad invalida");
} 
