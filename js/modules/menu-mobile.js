import outsideClick from "./outside-click.js";
import debounce from "./debounce.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events){
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    (events === undefined) ? this.events = ["click"] : this.events = events;

    this.loginButton = document.querySelector(".loginButton");
    this.fatherLogin = this.loginButton.parentElement;
    this.menu = document.querySelector(".menu");
    this.displaySize = window.matchMedia("(max-width: 700px)");

    this.openMenu = this.openMenu.bind(this);
  }

  checkSizeWindow() {
    if (this.displaySize.matches) {
      this.menu.appendChild(this.loginButton);
    } else {
      this.fatherLogin.appendChild(this.loginButton);
    }
  };

  addEventResize(){
    window.addEventListener("resize", debounce(() => this.checkSizeWindow(), 50));
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents(){
    this.events.forEach(event => this.menuButton.addEventListener(event, this.openMenu));

  }

  init(){
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
      this.checkSizeWindow()
      this.addEventResize()
    }
    return this
  }
}
