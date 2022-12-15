console.log("Ejercico Numero 1");

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, Ejp. miFuncion("Hola Mundo") devolverá 10.  */

//Asignacion de una varibales
let cadenaUno = "Ejemplo numero 1";
let contadorCaracteres = 0;
//Funcion
function numCaracteres() {
  for (let i = 0; i < cadenaUno.length; i++) contadorCaracteres++; //Contador de caracteres
  console.log(`La cadena: "${cadenaUno}" tiene ${contadorCaracteres} caracteres en total`);
}
numCaracteres();

//! Ejemplo resuelto por el profesor
console.log("Resultado del profesor");
//Con funcion declarada
/* function contarCaracteres(cadena=""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    }else {
        console.info(`La cadena "${cadena}" tiene ${cadena.length} de caracteres`)
    }
}
contarCaracteres();
contarCaracteres("Dejate de mamadas merry jan") */

// Ejempleficar el codigo de una forma mas simple, que es utilizando una funcion expresada, unas Arrow function, con el operador ternario
const contarCaracteres = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} de caracteres`);

contarCaracteres();
contarCaracteres("Dejate de mamadas merry jan");


//Formas de Hacer Comentarios
// !
// ?
// *
// Todo
// dhetrhtyeretyetyh

