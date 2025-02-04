document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById("user-icon");
  const userMenu = document.getElementById("user-menu");

  if (userIcon && userMenu) { // Vérifie si userIcon existe
    userIcon.addEventListener("click", () => {
      userMenu.classList.toggle("visible");
    });

    document.addEventListener("click", (event) => {
      if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.classList.remove("visible");
      }
    });
  }

  const menus = [
    { linkId: "explorer-link", menuId: "explorer-menu" },
    { linkId: "browse-link", menuId: "browse-menu" },
    { linkId: "pages-link", menuId: "pages-menu" },
  ];

  menus.forEach(({ linkId, menuId }) => {
    const link = document.getElementById(linkId);
    const menu = document.getElementById(menuId);

    if (link && menu) { // Vérifie si les éléments existent
      link.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.toggle("visible");
      });

      document.addEventListener("click", (event) => {
        if (!link.contains(event.target) && !menu.contains(event.target)) {
          menu.classList.remove("visible");
        }
      });
    }
  });

  document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
});
