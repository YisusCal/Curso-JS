("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 19")
//? Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. 

//Respuesta creada por mi
const validarNombre = (nombre = "") => {
  if(typeof nombre !== "string") return console.warn("El dato ingrsado es invalido");

  if(nombre === "Jesus Calderon"){ return console.log("Nombre Verificado FELICIDADES")
}else{ return console.log("Nombre no se encuentra en nuestro sistema")}
}

validarNombre("Jesus Calderon")

//FORMA DE RESOLVER DEL PROFESOR

const validarNom = (nombre= undefined) =>{
  if(typeof nombre !== "string") return console.warn("El dato ingrsado es invalido");

  let expresionRegular = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

  return(expresionRegular)
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}", NO es un nombre valido`)
    
}

validarNom();
validarNom(true);
validarNom("Jesus Calderon Guadarrama");
validarNom("Ñoño de Jesus 9");