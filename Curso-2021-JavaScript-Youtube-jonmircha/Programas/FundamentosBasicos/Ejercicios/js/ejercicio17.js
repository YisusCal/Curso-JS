console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 17")
//? Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

//Mi respuesta
const determinarCantidadA = (fecha="")=>{
  let fechaHoy= new Date();
  let fechaIngresadaSoloA = new Date(fecha)
  if(typeof fecha !== "string") return console.warn("Error el dato ingresado no es valido");

  if(fecha.length > 10 || fecha.length < 8) return console.warn("Error no esta bien ecrita la fecha");

  console.info(`El total de años transcurridos entre el año ${fechaIngresadaSoloA.getFullYear()} y el actual ${fechaHoy.getFullYear()} es de ${fechaHoy.getFullYear()-fechaIngresadaSoloA.getFullYear()}`)

}

determinarCantidadA("1984,4,23");

//RESPUESTA DEL PROFESOR

const calcularAnios = (fecha = undefined) =>{
  if(fecha === undefined) return console.warn("No has ingresado la fecha");

  if (!(fecha instanceof Date)) return console.error("El valor ingresado no es una fecha");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  // 1000 significa 1 segundo para JS
  let aniosEnMS = 1000*60*60*24*365;
  let aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

  return(Math.sign(aniosHumanos) === -1)
  ? console.info(`Faltan ${Math.abs(aniosHumanos)} anios pa el anio ${fecha.getFullYear()} `)
  : Math.sign(Math.sign(aniosHumanos) === 1)
    ? console.info(`Han pasado ${aniosHumanos} anios, desde ${fecha.getFullYear()}`)
    :console.info(`Estamos en el anio actual ${fecha.getFullYear()}`)
}

calcularAnios();
calcularAnios([]);
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1984,4,23));
calcularAnios(new Date(2884,4,23));
