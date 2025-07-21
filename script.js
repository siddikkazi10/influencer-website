// js link


    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const navLinks = document.getElementById("nav-links");

    openMenu.addEventListener("click", () => {
      navLinks.classList.add("active");
      openMenu.style.display = "none";
      closeMenu.style.display = "inline-block";
    });

    closeMenu.addEventListener("click", () => {
      navLinks.classList.remove("active");
      openMenu.style.display = "inline-block";
      closeMenu.style.display = "none";
    });