let number = Number( prompt("Un número es Positivo\nUn número es Negativo\nUn número es Cero\nUn número es Par\nDigite un número para determinarlo: "));
let resultado = "";

if (number >= 1){
    resultado += " El número es positivo ";
}
if (number <= -1){
    resultado += " El número es negativo ";
}
if(number === 0){
    resultado += " El número es cero ";
}
if(number % 2 === 0){
    resultado += " El número es par ";
}
if (resultado === ""){
    return String(resultado);
}
console.log(resultado);
