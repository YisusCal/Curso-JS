console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 16")
//? Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. 

const descuentoFinal = (precio = undefined, descuento = 0) => {
  if(precio === undefined) return console.warn("No ingresaste el precio");
  
  if(typeof precio !== 'number' || typeof descuento !== 'number') return console.warn("El dato ingresado no es corecto");

  if (precio === 0) return console.warn("El precio no puede ser 0");

  if (Math.sign(precio) === -1) return console.warn("El precio no puede ser negativo");

  if (Math.sign(descuento) === -1) return console.warn("El precio no puede ser negativo");

  if(descuento > 100) return console.warn("El porcentage de descuento es muy alto");

  let descuentoTotal = (descuento / 100) * precio;
  console.info(`El precio final con el descuento aplicado es de: ${precio-descuentoTotal} `)
}

descuentoFinal(1000,20)