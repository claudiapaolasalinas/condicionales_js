"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.


let numero1 = (prompt("Ingrese el primer número: "));
let numero2 = (prompt("Ingrese el segundo número "));



if((numero1 - numero2) > 0){
    console.log("El resultado de restar "+ numero1 +" menos "+ numero2, " es positivo.");
} else if((numero1 - numero2) < 0){
    console.log("El resultado de restar "+ numero1 +" menos "+ numero2, " es negativo.");
} else if((numero1 - numero2) == 0){
    console.log("El resultado de restar "+ numero1 +" menos "+ numero2, " es cero.");
}


if((numero2 - numero1 > 0)){ 
    console.log("El resultado de restar "+ numero2 +" menos "+ numero1, " es positivo.");
} else if((numero2 - numero1) < 0){
    console.log("El resultado de restar "+ numero2 +" menos "+ numero1, " es negativo.");
} else if ((numero2 - numero1) == 0){
    console.log("El resultado de restar "+ numero2 +" menos "+ numero1, " es cero.");
}



