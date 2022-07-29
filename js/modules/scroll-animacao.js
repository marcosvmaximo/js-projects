export default class ScrollAnima {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.heightUser = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this)
  }

  // pega a distancia de cada seção em relação ao topo da pagina
  getDistance(){
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.heightUser)
      }
    });
  }

  // verifica a distancia de cada seção do site em relação ao scroll do site
  checkDistance(){
    this.distance.forEach((section) => {
      if(window.pageYOffset > section.offset) section.element.classList.add("ativo")
    })
  }

  init() {
    if(this.sections.length){
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this
  }

  // remove o evento de scroll
  stop(){
    window.removeEventListener("scroll", this.checkDistance);
  }
}
