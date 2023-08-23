export default class ToolTip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 200 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 195}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltip caso o mouse saia do container do evento
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // cria o container da tooltip
  createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    // adiciona uma nova div e coloca a classe ativa nela
    const text = element.getAttribute("aria-label");
    // pega o texto do elemento com o atributo aria-label
    tooltipBox.innerText = text;
    // adiciona como conteudo da div o texto
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // adiciona o container criado da tooltip e aciona os eventos que mostra a tooltip e o local dela na tela
  // e ao mouse leave, que remove os eventos caso tire o mouse do current target, que é o mapa
  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  /* adiciona um evento de mouse over a cada tooltip. Ou seja, esta acionando ao this.tooltip(que é o mapa),
  um evento de mouse over, isso quer dizer que toda vez que passar o mouse por cima do mapa, ira acionar 
  o callback, que aponta para o metodo this.onMouseOver*/
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
