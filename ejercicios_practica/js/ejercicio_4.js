"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = '5';
let texto2 = '7';

//  Verifique cual cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda

if(texto1 > texto2){
    console.log(texto1 +" es mayor que "+ texto2);

} else if(texto2 > texto1){
    console.log(texto2 +" es mayor que "+ texto1);

} else{
    console.log("Ambos textos son iguales.");
}

//  Transforma esas variables tipo texto y almacénalas
//  en nuevas variables númericas (Number) con parseInt()
//  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
//  Imprima en pantalla según corresponda

let textoUno = parseInt(texto1);
let textoDos = parseInt(texto2);

/* console.log(textoUno, "es un", typeof textoUno);
console.log(textoDos, "es un", typeof textoDos);
 */

if(textoUno > textoDos){
    console.log("5 es mayor que 7.");

} else if(textoDos > textoUno){
    console.log("7 es mayor que 5.");

} else{
    console.log("Ambos números son iguales.");
}

//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)
//
//  *****Ejemplo a modo de prueba: *****

/* 
alert("texto_2" > "texto_1"); //true
alert("texto_1" > "texto_2"); //false
*/

/* 
---------------------------------RESPUESTA----------------------------------

Al comparar valores de diferentes tipos, JavaScript convierte los valores a números.

Por ejemplo:

alert( '2' > 1 ); // true, la cadena '2' se convierte en el número 2
alert( '01' == 1 ); // true, la cadena '01' se convierte en el número 1 

Asimismo, para valores booleanos, true se convierte en 1 y false en 0.

Por ejemplo:

alert( true == 1 ); // true
alert( false == 0 ); // true
*/
