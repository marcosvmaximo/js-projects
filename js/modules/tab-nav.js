export default class TabNav {
  constructor(menu, content){
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // ativa a tab primeiro removendo a classe de ativo de todos os itens, depois pegamos a direção da animação que vai ocorrer, logo apos isso pegamos o conteudo pelo index, e adicionamos a classe de ativo
  activeTab(index) {
    this.content.forEach((itemContent) => {
      itemContent.classList.remove(this.activeClass);
    });
    const direcao = this.content[index].dataset.anime;
    this.content[index].classList.add(this.activeClass, direcao);
  }

  // adiciona o evento de click e o método de ativar a tab para cada item do menu
  addTabNavEvent(){
    this.menu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  // inicia o encadeamento da classe, primeiro verifica se os elementos selecionados existem, se sim então ativa o primeiro item e o método de adicionar os eventos.
  init(){
    if (this.menu.length && this.content.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
