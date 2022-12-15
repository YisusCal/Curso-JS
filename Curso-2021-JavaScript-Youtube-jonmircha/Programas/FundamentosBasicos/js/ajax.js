(() => {
  //Instanciar un objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //Asignar los eventos a manipular de la peticion
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    //console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("exito");
      //console.log(xhr.responseText);
      //$xhr.innerHTML = xhr.responseText;

      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);

    } else {
      console.log("erro");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  //Abrir la peticion especificnado el metodo y la URL
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  //Enviar la peticion
  xhr.send();
})();


//Ejercicio con Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/user")
    /* .then((res) => {
      console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    }) */
    .then((res) => res.ok ? res.json() : Promise.reject(res))
    .then((json) => {
      console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() =>
      console.log("Esto se ejecutara independientemente del resultado de la Promesa Fetch"));
})();