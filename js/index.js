const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".mode-switch"),
  menuItems = body.querySelectorAll(".menu-link");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  console.log("dark");
});

// menuItems.addEventListener("click", () => {
//   menuItems.classList.toggle("open");
// });

//const menuItems = document.querySelectorAll('.menu-item'); // Selecciona todos los elementos del menú

menuItems.forEach((menuItem) => {
  if (menuItem.classList.contains("collapsed")) {
    menuItem.addEventListener("click", (event) => {
      event.preventDefault(); // Previene el comportamiento por defecto del enlace
      const isOpen = menuItem.classList.contains("open");
      // Cierra todos los submenús
      menuItems.forEach((item) => item.classList.remove("open"));
      // Abre el submenú del menú seleccionado
      if (!isOpen) {
        menuItem.classList.add("open");
      }
    });
  }

  // const menuLink = menuItem.querySelector('.collapsed');

  // menuLink.addEventListener('click', (event) => {
  //     event.preventDefault(); // Previene el comportamiento por defecto del enlace
  //     const isOpen = menuItem.classList.contains('open');

  //     // Cierra todos los submenús
  //     menuItems.forEach(item => item.classList.remove('open'));

  //     // Abre el submenú del menú seleccionado
  //     if (!isOpen) {
  //         menuItem.classList.add('open');
  //     }
  // });
});
