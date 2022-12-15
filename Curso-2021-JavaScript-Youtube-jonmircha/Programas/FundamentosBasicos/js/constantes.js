/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */

//Se exportan atributos 
export const PI = Math.PI;
export let usuario = "Jon";

const password = "qwerty";
//export default password;

//Esta expresion no es unica de consonates.js no sera exportado
const hello = () => console.log("Hola");

//Se esta exportando una funcion 
export default function saludar() {
  console.log("Hola Módulos +ES6");
}

//Se exporta un objeto
export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}

