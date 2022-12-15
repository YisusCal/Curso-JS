const d = document,
  n = navigator,
  ua = n.userAgent; //agente de usuario
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opr|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edg/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      }
    };

  /* console.log(ua);
  console.log(isMobile.android());
  console.log(isMobile.ios());
  console.log(isMobile.any()); */

  $id.innerHTML = `
    <ul>
      <li>User Agent: <b>${ua}</b></li>
      <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;

  /* Contenido exclusivo */
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
  }
  if (isBrowser.edge()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Edge</mark></p>`;
  }
  if (isBrowser.safari()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Safari</mark></p>`;
  }
  if (isBrowser.opera()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en opera</mark></p>`;
  }

  if (isMobile.android()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve Telefonos Android</mark></p>`;
  }
  if (isMobile.ios()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve Telefonos Iphone</mark></p>`;
  }
  if (isMobile.windows()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve Telefonos con Windows Phone</mark></p>`;
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga el contenido exclusivo para Windows</mark></p>`;
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga el contenido exclusivo para Linux</mark></p>`;
  }

  /* Redirecciones */
  if (isMobile.android()) {
    window.location.href = "https://google.com ";
  }
}

//any '': significa: no me importa mientras sea un un SO basado en escritorio.

// ie == internet explorer

/* 
ejercicio 9
--Deteccion de Dispositivos 
a traves de la propiedad del objeto navigator 
(User Agent)
--Detectar desde que navegador y plataforma 
ingreso el usuario
--Tabajar con expresiones regulares */
