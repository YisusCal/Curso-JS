const d = document,
  ls = localStorage;
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  //console.log($selectors);

  let luna = "🌙",
    sol = "☀️";

    //Modo claro
  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = luna;
    ls.setItem("theme", "light");
  };
  //Modo Obscuro
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sol;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      //console.log($themeBtn.textContent);
      if ($themeBtn.textContent === luna) {
        darkMode();
      } else {
        lightMode();
      }
    }
  })

  // evento para guardar el theme en localStorage
  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  })

}



/* 
ejercicio 5
-- icono en el lado inferior izquiero tener un boton con una luna,
  al darle click cambiar el fondo a un color dark y cambiar el icono de luna a un sol.
  al darle click al sol cambiar a el color blanco y cambiar el icono a la luna.
  aplicar el hover. */

/* ejercicio 6
-- localStorage
-- Hacer que guarde los cmbios de interaccion, 
si pulsa modo obsucuro asi se quede.
*/