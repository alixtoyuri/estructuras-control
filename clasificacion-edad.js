let number = prompt("Digite una edad para determinar su rango: ");

if(number <= 12){
    console.log("Niño");
} else if(number <=17){
    console.log("Adolescente");
} else if(number <=64){
    console.log("Adulto");
} else if(number<=100){
    console.log("Adulto Mayor");
}else{
    console.log("Tiene más de 100 años");
}
