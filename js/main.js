// Tab toggle

menuItemSelected(
  document.getElementsByClassName("header-menu__link--active")[0]
);

function menuItemSelected(element) {
  const borderBottom = document.getElementById("selected-border");

  const active = document.getElementsByClassName(
    "header-menu__link--active"
  )[0];

  active.classList.remove("header-menu__link--active");
  element.classList.add("header-menu__link--active");

  const allLinks = document.getElementsByClassName("header-menu__link");
  let translateSize = 0;

  for (let i = 0; i < allLinks.length; i++) {
    if (!allLinks[i].classList.contains("header-menu__link--active")) {
      translateSize += allLinks[i].offsetWidth + 32;
    } else {
      break;
    }
  }

  borderBottom.style.width = `${element.offsetWidth}px`;
  borderBottom.style.transform = `translateX(${translateSize}px)`;
}

// Sidebar toggle

function sidebarToggled() {
  const main = document.getElementsByTagName("main")[0];

  if (main.classList.contains("sidebar-active")) {
    main.classList.remove("sidebar-active");
    main.classList.remove("toggle-active");
  } else {
    main.classList.add("sidebar-active");
    main.classList.add("toggle-active");
  }
}

// Menu toggle

function menuToggle(element) {
  const main = document.getElementsByTagName("main")[0];
  const menu = document.getElementsByClassName("header-menu")[0];

  if (menu.classList.contains("header-menu--menu-active")) {
    menu.classList.remove("header-menu--menu-active");
    element.classList.remove("menu-active");
    main.classList.remove("toggle-active");
  } else {
    menu.classList.add("header-menu--menu-active");
    element.classList.add("menu-active");
    main.classList.add("toggle-active");
  }
}
