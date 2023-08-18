"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.

let numero1 = (prompt("Ingrese el primer número entero: "));
let numero2 = (prompt("Ingrese el segundo número entero: "));
let numero3 = (prompt("Ingrese el tercer número entero: "));

 if(numero1 % 2 === 0){
    console.log(numero1, "es un número par.");
} else{
    console.log(numero1, "es un número impar.");
}


if(numero2 % 2 === 0){
    console.log(numero2, "es un número par.");
} else{
    console.log(numero2, "es un número impar.");
}


if(numero3 % 2 === 0){
    console.log(numero3, "es un número par.");
} else{
    console.log(numero3, "es un número impar.");
}