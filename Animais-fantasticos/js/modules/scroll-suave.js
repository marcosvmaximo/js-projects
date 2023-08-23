export default class ScrollSuave{
  constructor(links, options){
    this.linksInternos = document.querySelectorAll(links);
    if(options === undefined){
      this.options = { behavior: "smooth",block: "start", }
    } else {
      this.options = options
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }
  
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    
    section.scrollIntoView(this.options);
  }
  
  addLinkEvent(){
    this.linksInternos.forEach(link => link.addEventListener("click", this.scrollToSection));
  }

  init(){
    if(this.linksInternos.lenght){
      this.addLinkEvent()
      return this 
      // Por que retornar this? pois o retorno da chamada da classe no arquivo principal, resultara em undefined, e caso o usuario queira acessar outra propriedade ou método da classe, não sera possivel se nãi retornamos a classe a chamada.
    }
  }
}
