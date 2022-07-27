export default class AccordionList{
  constructor(list){
    this.accordionList = document.querySelectorAll(list);
    this.activeClassList = 'ativado'
    this.activeClassListContents = 'ativo';
  }

  // pega o item da lista pelo index, e retira ou coloca a classe de ativo, e em seu pai para mostrar a seta para cima e para baixo
  toggleAccordion(index) {
    this.accordionList[index].classList.toggle(this.activeClassList);
    this.accordionList[index].nextElementSibling.classList.toggle(this.activeClassListContents);
  }

  // adicionar o evento de click em cada item da lista, e enviar o index para a função toggleAccordion
  addAccordionEvent(){
    this.accordionList.forEach((itemList, index) => {
      itemList.addEventListener('click', () => this.toggleAccordion(index))
    })
  }

  // iniciar função
  init(){
    if (this.accordionList.length){
      this.toggleAccordion(0)
      this.addAccordionEvent()
      // ativar o primeiro item da lista
    }
  }

}
