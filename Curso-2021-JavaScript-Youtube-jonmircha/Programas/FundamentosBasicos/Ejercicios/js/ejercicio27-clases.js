console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 27 creado por mi")
/* 27) Programa una clase llamada Película.  
La clase recibirá un objeto al momento de instanciarse con los siguientes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD. - Todos los datos del objeto son obligatorios. 
  •	Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números. 
  •	Valida que el título no rebase los 100 caracteres. 
  •	Valida que el director no rebase los 50 caracteres. 
  •	Valida que el año de estreno sea un número entero de 4 dígitos.
  •	Valida que el país o países sea introducidos en forma de arreglo. 
  •	Valida que los géneros sean introducidos en forma de arreglo. 
  •	Valida que los géneros introducidos estén dentro de los géneros aceptados*. 
  •	Crea un método estático que devuelva los géneros aceptados*. 
  •	Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición. 
  •	Crea un método que devuelva toda la ficha técnica de la película. 
  •	A partir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película. 
* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class Pelicula {
  //Constructor
  constructor(id, titulo, director, estreno, paises, generos, calificacion) {
    this.id = id; //cadena
    this.titulo = titulo //cadena
    this.director = director; //cadena
    this.estreno = estreno; //numero entero 
    this.paises = paises; //arreglo
    this.generos = generos; //arreglo
    this.calificacion = calificacion; //numero decimal

    this.validarSiEsCadena(id);
    this.validarIMDB(id);
    this.validarSiEsCadena(titulo);
    this.validarLonguitudDelTituloYDirector(titulo, director);
    this.validarSiEsCadena(director);
    this.validarAnioEstreno(estreno);
    this.validarSiEsArregloPais(paises);
    this.validarSiGenerosSonAceptados(generos);
    this.validarCalificacion(calificacion);
  }
  //Metodo para validar cadenas
  validarSiEsCadena(cadena) {
    if (typeof cadena !== "string") return console.warn(`Eror el IMDB "${cadena}" que ingresaste no es una cadena`);

    return true;
  }
  //Metodo para validar el id(IMDB)
  validarIMDB(imdb) {
    //Validar que el imdb tenga 9 digitos (tt1285016)
    if (imdb.length !== 9) return console.warn("Eror el IMDB debe contener 9 caracteres");

    //Validar los primeros dos digitos
    let exRgVerPrimerosDosC = /^[A-Za-z\s]+$/g.test(imdb.charAt(0) || imdb.charAt(1)); //Devuelve un true / false
    if (exRgVerPrimerosDosC !== true) return console.warn("Eror el IMDB sus dos primeros digitos deben ser letras");

    //Validar que los 7 caracteres restantes sean numeros
    for (let i = 2; i < imdb.length; i++) {
      let exRgVerSieteD = /^[0-9\s]+$/g.test(imdb.charAt(i));
      if (exRgVerSieteD !== true) return console.warn(`El digito ${imdb.charAt(i)} no es un numero`)
    }

    return true;
  }

  //Validar que no rebasen de caracteres titulo (100) y director(50)
  validarLonguitudDelTituloYDirector(titulo, director) {
    if (titulo.length > 100) return console.warn(`Error el titulo contiene ${titulo.length} caracteres supera el minimo que es de 100`);

    if (director.length > 50) return console.warn(`Error el director contiene ${director.length} caracteres supera el minimo que es de 50`);

    return true;
  }
  //Validar el año de estreno de la pelicula, numero entero y de 4 digitos
  validarAnioEstreno(estreno) {
    if (typeof estreno !== "number" || estreno.toString().length !== 4) return console.warn(`Eror el anio de estreno "${estreno}" no es un numero entero o no tiene 4 digitos "${estreno.toString().length}"`);

    return true;
  }

  //Validar que paises y genero sean ingresados en arreglo
  validarSiEsArregloPais(arreglo) {
    if (!(arreglo instanceof Array)) return console.warn(`Error el dato ingresado "${arreglo}" no es de tipo array`);

    return true;
  }

  //Metodo estatico para consultar los generos aceptados
  static generosAceptados() {
    let generos = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi, Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    return console.info("Generos Aceptados: \n" + generos.toString());
  }

  //Validar que los generos introducidos esten dentro de los aceptados
  validarSiGenerosSonAceptados(generos) {
    if (!(generos instanceof Array)) return console.warn(`Error el dato ingresado "${generos}" no es de tipo array`);
    if (generos === undefined) return console.warn("No has ingresado ningun dato");
    if (generos.length === 0) return console.warn("El arreglo esta vacio");
    for (let cadGeneros of generos) {
      if (typeof cadGeneros !== "string") {
        return console.warn(`El dato ingresado ${cadGeneros} NO es una cadena perro`);
      }
    }
    let generosAceptados = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi, Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    let filtro = [...generosAceptados, ...generos.map(i => (generosAceptados.includes(i) === generos.includes(i)))]
    //console.log(filtro);


    for (let gAceptados of filtro) {
      if (gAceptados === false) {
        console.warn(`Error algun genero escrito no esta de IMDB ${generos}`);
        break;
      }
    }

    return true;

  }
  //Validar la calificacion de la pelicula con valores de 0-10 pudiendo tener un decimal
  validarCalificacion(valor) {
    if (typeof valor !== 'number') return console.warn(`Error el valor: ${valor} no es un numero`)

    if (valor > 10 || valor < 0) return console.warn(`Error el valor: ${valor} supera la calificacion permitida o no admite numeros negativos `);

    if (valor.toString().length > 3) return console.warn(`Error el valor: "${valor}" supera la candidad de digitos permtidos '2`)

    return true;
  }
  //Metodos get, para obtener lso atributos
  get getId() {
    return this.id;
  }
  get getTitulo() {
    return this.titulo;
  }
  get getDirector() {
    return this.director;
  }
  get getEstreno() {
    return this.estreno;
  }
  get getPais() {
    return this.paises;
  }
  get getGenero() {
    return this.generos;
  }
  get getCal() {
    return this.calificacion;
  }

  //Metodo que devuelve la ficha tecnica de una pelicula
  fichaTecnica() {
    return console.info({
      aIMDB: this.getId,
      bTitulo: this.getTitulo,
      cDirector: this.getDirector,
      dYear: this.getEstreno,
      ePaises: this.getPais,
      fGeneros: this.getGenero,
      gCalificacionIMDB: this.getCal,
    })
  }

  set setArreglo(uno) {
    constr
  }
}


const movie = new Pelicula("tt1285016", "The Social Network", "David Fincher", 2010, ["Estados Unidos"], ["Drama", "Horror"], 8.1);
const movie2 = new Pelicula("tt1285018", "Jobs", "David", 2019, ["Mexico"], ["Horror"], 7.9);
const movie3 = new Pelicula("tt1285017", "Mr. Robot", "Javier Solis", 2012, ["China"], ["History"], 8.6);



Pelicula.generosAceptados();
//console.log(movie.getID);
console.log(movie.getCal);
movie.fichaTecnica();
movie2.fichaTecnica();
movie3.fichaTecnica();


