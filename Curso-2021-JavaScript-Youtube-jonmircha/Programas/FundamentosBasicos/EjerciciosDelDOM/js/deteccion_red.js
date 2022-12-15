const d = document,
  w = window,
  n = navigator;

export default function networkStatus(id) {
  const isOnline = () =>{
    const $div = d.createElement("div"),
      $id = d.getElementById(id);

    if(n.onLine){
      $div.textContent = "Conexion Restablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
      $id.innerHTML = `<p><mark>Conexion Restablecida</mark></p>`;
    }else{
      $div.textContent = "Conexion Perdida"
      $div.classList.add("offline");
      $div.classList.remove("online");
      $id.innerHTML = `<p><mark>Conexion Perdida</mark></p>`;
    }
    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => d.body.removeChild($div), 2000);
  }
  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("offline", (e) => isOnline());

};


/* ejercicio 10 Deteccion de la conexion
-- Detectar eventos de conexion y desconexion
-- Arroge msj en rojo en la parte de arriva cuando se desconecte el internet
	msj verde cuando se establesca denuevo la conexion 
-- Mismo objeto navigator (tiene una propiedad para evaluar la deccion de la conexion)
-- objeto windows tiene los eventos de conexion y desconexion. */