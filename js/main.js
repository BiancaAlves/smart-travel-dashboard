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
