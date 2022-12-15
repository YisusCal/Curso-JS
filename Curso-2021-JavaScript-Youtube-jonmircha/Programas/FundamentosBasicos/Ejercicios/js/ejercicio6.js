console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 6")

//? 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. 

const palabraABuscar = (cadena = "", palabra = "") => {
  let tipoDatoP = typeof palabra;
  let tipoDatoC = typeof cadena;
  if (!cadena || !palabra) {
    console.warn("No ingresaste una cadena de texto")
  } else if (tipoDatoP === "string" && tipoDatoC === "string") {
    //* Aqui es donde se resuelve el ejercicio
    var matrizValores = cadena.split(" ");
    //console.log(matrizValores);
    let acumulador = 0;

    for (let i = 0; i < matrizValores.length; i++) {
      if (matrizValores[i] === palabra) {
        console.log(matrizValores[i]);
        acumulador++;
      }
    }
    console.log(acumulador);

  } else {
    console.error("No andimite otro tipo de dato que no sea cadena");
  }
}

//palabraABuscar("hola mundo adios mundo", "mundo" );



//FORMA DE RESOLVER EL PROFE

const textoEnCadena = (cadena = "", palabra = "") => {
  if (!cadena) return console.warn("No ingresaste el texto largo");
  if (!palabra) return console.warn("No ingresaste la palabra");

  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(palabra, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${palabra} se repite ${contador} veces`);
}

//textoEnCadena();
//textoEnCadena("hola mundo adios mundo", "mundo") 