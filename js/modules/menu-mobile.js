import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  const login = document.querySelector(".loginButton");
  const menuAddLogin = document.querySelector(".menu");
  const fatherLogin = login.parentElement;

  const displaySize = window.matchMedia("(max-width: 700px)");

  const checkSizeWindow = () => {
    if (displaySize.matches) {
      menuAddLogin.appendChild(login);
    } else {
      fatherLogin.appendChild(login);
    }
  };

  checkSizeWindow();
  window.addEventListener("resize", () => checkSizeWindow());

  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuList, ["click"], () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {
    menuButton.addEventListener("click", openMenu);
  }
}
