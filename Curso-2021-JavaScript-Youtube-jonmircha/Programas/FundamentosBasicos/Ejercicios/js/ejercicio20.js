("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 20")
//? Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

// Respues creada por mi, nada que ver 
const validarEmail =(email = "") =>{
  if(typeof email !== "string") return console.warn("El dato ingresado no es valido");
  let validarCorreo = new RegExp('@gmail.com', 'g');
  let resultado = validarCorreo.test(email);
  return(resultado === true)
  ? console.log("Feliciades Correo Verificado")
  : console.log("Correo Inexistente");
}

//validarEmail("cocho@gmail.com")


//SOLUCION DEL PROFE

const validarCorreo = (correo = "") =>{
  if(typeof correo !== "string") return console.warn("El dato ingrsado es invalido");

  let expresionRegular = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

  return(expresionRegular)
    ? console.info(`"${correo}", es un correo valido`)
    : console.warn(`"${correo}", NO es un correo valido`)
}

//validarCorreo();
//validarCorreo(36);
//validarCorreo("jobyisus0@gmail");
//validarCorreo("jobyisus0@gmail.com");

/* Fusion 19 y 20 en este se pide la cadena a evaluar y la exprecion con la cual sera evaluada */

const validarPatron = (cadena = "", patron = undefined) =>{
  if(typeof cadena !== "string") return console.warn("La cadena ingrsada es invalido");
  if(!(patron instanceof RegExp)) return console.warn("El patron ingrsado no es una expRegular");

  let expresionRegular = patron.test(cadena);

  return(expresionRegular)
    ? console.info(`"${cadena}", La cadena cumple con el patron ingresado`)
    : console.warn(`"${cadena}",  La cadena NO cumple con el patron ingresado`)
}

validarPatron("Jesus Calderon", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
validarPatron("jobyisus0@gmail",/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
validarPatron("jobyisus0@gmail.com",/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
validarPatron("jobyisus0@gmai985l", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));
