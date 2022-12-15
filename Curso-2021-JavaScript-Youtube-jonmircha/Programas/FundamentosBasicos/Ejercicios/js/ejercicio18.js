console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 18")
//? P Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. 

const numeroVocalesYConsonantes = (cadena = "") => {
  if (typeof cadena !== "string") return console.warn("El dato ingresado no es una cadena de texto");

  //Convertir todas las letras a minusculas
  cadena = cadena.toLowerCase();
  /*/\s+/g --> quita todos los espacios de la cadena
    \s: Selecciona espacios en blanco, tabuladores y saltos de linea.
    +: en conjunto con \s sirve para tomar espacios concecutivos.
    g: permite repetir el proceso a lo largo de la cadena.*/
  cadena = cadena.replace(/\s+/g, '');
  //separar la cadena en un arreglo por caracter
  let cadenaAArreglo = cadena.split("");
  //Asignacion de los acumuladores 
  let vocales = 0;
  let consonantes = 0;
  let numeros = 0;
  let otrosCaracteres = 0;
  //Ciclo para recorrer caracter por caracter
  for (let i = 0; i < cadenaAArreglo.length; i++) {
    let cadArreglo = cadenaAArreglo[i];
    if (cadArreglo === 'a' || cadArreglo === 'e' || cadArreglo === 'i' || cadArreglo === 'o' || cadArreglo === 'u') {
      vocales++;
    } else if (cadArreglo >= '0' && cadArreglo <= '9') {
      numeros++;
    } else if (cadArreglo >= 'a' && cadArreglo <= 'z') { consonantes++; }
    else { otrosCaracteres++; }
  }

  console.info("Vocales: " + vocales);
  console.info("Consonantes: " + consonantes);
  console.info("Numeros: " + numeros);
  console.info("Otros caracteres: " + otrosCaracteres);
}

numeroVocalesYConsonantes("Hola Mundo");


//Forma de resolver del profe
// Las expresiones regulares son agenas al lenguage todo lenguaje deve contener estos metodos.

const contarLetras = (cadena = "") => {
  if (typeof cadena !== "string") return console.warn("El dato ingresado no es una cadena de texto");

  let vocales = 0;
  let consonantes = 0;
  cadena = cadena.toLocaleLowerCase();
  //EL for of es para recorrer cualquier tipo de dato que sea iterable
  for (let letra of cadena) {
    if (/[aeiouáéíóúü]/.test(letra)) vocales++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }
  return console.info({
    cadena,
    vocales,
    consonantes
})
}

contarLetras();
contarLetras(3);
contarLetras("Hola Mundo");
contarLetras("Hola Mundo ñoño pasará");