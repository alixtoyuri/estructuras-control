/*
INSTRUCCIONES:
Pide al usuario un número entero N.
Después recorre con un for todos los números desde -N hasta N.
Para cada número debes determinar si es:

positivo;
negativo;
cero.

Por ejemplo, si el usuario introduce:
3

deberías analizar:
-3
-2
-1
0
1
2
3

EXPLICACIÓN:
El contador se inicializa con el numero que el usuario digite, pues será el rango a recorrer
El recorrido de dicho número digitado será negativo
El contador que tiene el rango  será menor o igual número dado por el usuario
Para posteriormente ir incrementado el número de recorridos
*/
let num = Number(prompt("Digita un número: "));
for (let i = -num; i <= num; i++){ 
    if(i < 0){ // Números del rango que son negativos
        console.log("Negativo");
    } else if( i > 0){ // Números que dentro del rango son positivos
        console.log("Positivo");
    } else{ // // Cuando i llega a 0, no es positivo ni negativo
        console.log("Cero")
    }
}
