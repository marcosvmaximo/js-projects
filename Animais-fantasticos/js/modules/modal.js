export default class Modal {
  constructor(buttonOpen, buttonClose, container) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.container = document.querySelector(container);

    // colocando a referencia correta dos this usado no addEventButtonsAndContainer
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickClose = this.clickClose.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickClose(event) {
    if (event.target === this.container) this.toggleModal(event);
  }

  addEventButtonsAndContainer() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal);
    this.buttonClose.addEventListener("click", this.eventToggleModal);
    this.container.addEventListener("click", this.clickClose);
    // passando this.nomedafuncao nao ira funcionar, pois o this nao referencia a propriedade da nossa classe, e sim ao objeto aonde o evento ocorreu, para mudar isso é necessario utilizar o método bind da function
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.container) {
      this.addEventButtonsAndContainer();
      return this
    }
  }
}
