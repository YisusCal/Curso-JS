console.log("-----------------------------------------******------------------------------------ ");
console.log("Resolucion del ejercicio 27, resuleto por el profe jonmircha")
// Este es el ejercicio ya resuelto por el profesor

class Pelicula {
  //Constructor con esta forma constructor({obtiene datos de tipo objetos})
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo
    this.director = director;
    this.estreno = estreno;
    this.paises = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);

  }

  //Metodo static para devolver los generos aceptados
  static get listaGeneros() {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi, Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
  }
  //Atributo statico para imprimir los generos aceptados
  static generosAceptados() {
    return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
  }

  //Validar que sean cadenas
  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

    return true;
  }

  // Validar longuitud de cadena
  validarLongituCadena(propiedad, valor, longuitud) {
    if (valor.length > longuitud) return console.error(`${propiedad} "${valor}" excede del numero de caracteres permitidos${longuitud}`);

    return true;
  }

  //validr si es numero
  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un numero`);

    return true;
  }

  //validar si es arreglo
  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado NO es un arreglo`);

    if (valor.length === 0) return console.warn(`${propiedad} "${valor}" NO tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string") return console.warn(`valor "${cadena}" NO es una cadena de texto`);
    }

    return true;
  }

  //validar IMDB (id)
  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      // (//-Inicializa la exprecion regular) 
      //(test(id)-Que se va a evaluar dentro del metodo test) 
      //(^-No debe de haber nada antes) 
      //($-No debe de haber nada despues)
      //(([a-z]){2}-los primeros dos caracteres deben der letras minusculas
      //([0-9]){7}-Los siguientes siete caracteres deben ser numeros del 0 al 9).
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.warn(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los dos primeros letras minusculas, los 7 restantes numeros`);
  }
  //validar titulo
  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      this.validarLongituCadena("Titulo", titulo, 100)
  }
  //validar director
  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongituCadena("Director", director, 50)
  }

  //validar estreno
  validarEstreno(estreno) {
    if (this.validarNumero("IMDB id", estreno))
      if (!(/^([0-9]){4}$/.test(estreno))) return console.warn(`Anio de estreno "${estreno}" no es valido, debe ser un numero de cuatro digitos`);
  }

  //Validar pais
  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  //Validar generos
  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        //console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(",")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }
  //validar calificacion
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion))
      return (calificacion < 0 || calificacion > 10)
        ? console.error(`La calificacion tiene que ser un rango entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1);
  }

  //Ficha Tecnica
  fichaTecnica() {
    console.info(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAnio: "${this.estreno}"\nPais: "${this.paises.join(", ")}"\nGeneros: "${this.generos}"\nCalificacion: "${this.calificacion}"\nIMDB id: "${this.id}"`)
  }
}

Pelicula.generosAceptados();
/* const peli = new Pelicula({
  id: "tt1285016",
  titulo: "The Social Network",
  director: "David Fincher",
  estreno: 2020,
  pais: ["Mexico"],
  generos: ["Horror", "Comedy"],
  calificacion: 7.855
});

peli.fichaTecnica(); */

const misPelis = [
  {
    id: "tt1285016",
    titulo: "The Social Network",
    director: "David Fincher",
    estreno: 2020,
    pais: ["Mexico"],
    generos: ["Horror", "Comedy"],
    calificacion: 7.855
  },
  {
    id: "tt1289854",
    titulo: "Jobs",
    director: "Andres",
    estreno: 2002,
    pais: ["estados Unidos", "China"],
    generos: ["Romance"],
    calificacion: 9.6
  },
  {
    id: "tt1256984",
    titulo: "Ranbo",
    director: "James Cameron",
    estreno: 1985,
    pais: ["Rusia", "Estados Unidos", "Francia"],
    generos: ["Game-Show", "Fantasy"],
    calificacion: 8.5
  }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());

/* const movie = new Pelicula("tt1285016", "The Social Network", "David Fincher", 2010, ["Estados Unidos"], ["Drama", "Horror"], 8.1); */