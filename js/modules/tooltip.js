export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  
  function onMouseOver() {
    const tooltipBox = createTooltipBox(this);
  
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
  
    onMouseLeave.element = this;
    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave);
  }
  
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }
  
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };
  
  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    // adiciona uma nova div e coloca a classe ativa nela
  
    const text = element.getAttribute('aria-label');
    // pega o texto do elemento com o atributo aria-label
  
    tooltipBox.innerText = text;
    // adiciona como conteudo da div o texto
  
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  })
}