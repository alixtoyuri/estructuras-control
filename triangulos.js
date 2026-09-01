/*
Determina si es: Equilátero, Isósceles, Escaleno
*/

let numOne = Number(prompt("Digite un numero: "));
let numTwo = Number(prompt("Digite un numero: "));
let numThree = Number(prompt("Digite un numero: "));

if (numOne === numTwo && numTwo === numThree) {

    console.log("Es equilátero");

} else if (numOne !== numTwo &&
           numTwo !== numThree &&
           numOne !== numThree) {

    console.log("Es escaleno");

} else {

    console.log("Es isósceles");

}
