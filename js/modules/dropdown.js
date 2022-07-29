import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "ativo";
    (events === undefined) ? this.events = ["click", "touchstart"] : this.events = events

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdownMenu e aciona função para observar click fora do menu
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent(){
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init(){
    if(this.dropdownMenus.length) this.addDropdownMenusEvent();
    return this
  }
}
