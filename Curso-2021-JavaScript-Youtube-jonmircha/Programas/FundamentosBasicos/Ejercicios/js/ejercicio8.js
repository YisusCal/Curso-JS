console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 8")

//? 6) Programa una función que elimine cierto patron de caractees de un texto dado, ejemplo miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.

const eliminarPatronCaracteres = (texto = "") => {
  let tipoDatoT = typeof texto;
  
  if (!texto) {
    console.warn("No ingresaste una cadena de texto")
  } else if (tipoDatoT === "string") {
    let patronRepetido = /xyz/ig;
    console.log(patronRepetido)
    let textoRemplazado = texto.replace(patronRepetido, '');
    console.log(textoRemplazado);
  }else {
    console.error("No andimite otro tipo de dato que no sea cadena");
  }
}

//eliminarPatronCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5')


//FORMA DE RESOLVER EL PROFE

const eliminarCaracteres = (texto="", patron="")=>{
  (!texto)
  ?console.warn("No ingresaste un texto")
  :(!patron)
    ?console.warn("No ingresaste un patron de caracteres")
    :console.info(texto.replace(new RegExp(patron, "ig"),""));
    //:console.info(texto.replaceAll(patron,  ''));
}

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "[a-z]");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
