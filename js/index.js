const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".mode-switch"),
  menu = body.querySelector("aside"),
  menuItems = menu.querySelectorAll(".menu-link"),
  menuToggle = body.querySelector(".menu-toggle");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  console.log("dark");
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.contains("open");

  if (isOpen) {
    menuToggle.classList.remove('open')
    menu.classList.remove('open')
  } else {
    menuToggle.classList.add('open')
    menu.classList.add('open')
  }

});

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
