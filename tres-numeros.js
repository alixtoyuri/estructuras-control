/*
Determina:
1. Si los 3 son iguales: "Los 3 numeros son iguales"
2. Si los 3 son diferentes: "Los 3 son diferentes"
3. Si solamente dos son iguales: "Dos números son iguales"
*/
let numOne = Number(prompt("Dame el primer numero: "));
let numTwo = Number(prompt("Dame el segundo numero: "));
let numThree = Number(prompt("Dame el tercer numero: "));

if(numOne === numTwo && numTwo === numThree){
  console.log("Los 3 números son iguales");
}else if((numOne !== numTwo && numTwo !== numThree) && numOne !== numThree){
  console.log("Los 3 son diferentes");
} else{
  console.log("Dos son numeros iguales");
}
