/*
Ejercicio 6 — Acceso a un juego

Pide:
edad
tieneInvitacion

Una persona puede entrar si:
Tiene 18 años o más, O
Tiene una invitación.
*/
let edad = prompt("Edad: ");
let invitacion = prompt("Tiene invitación: ");

  if((edad >= 18) || (invitacion ==="si")){
    console.log("Tiene Acceso");
  } else {
    console.log( "No tiene Acceso");
  }




