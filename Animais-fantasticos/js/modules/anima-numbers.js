export default class AnimaNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this)
  }

  // incrementa numero de 0 ao numero mandado, incrementando baseado num calculado enviado pela chamada da funcao
  static incrementNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 50 * Math.random());
  }

  // percorre cada numero selecionado no DOM, e ativa a função de incrementar numero para cada item
  animaNumbers() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }

  // função que chama a function animanumbers, e tira a observer mutation caso contenha a classe ativo
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumbers();
    }
  }

  // adiciona o mutation observer, que verifica quando a classe ativa dos elementos é adicionada
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if(this.numbers.length && this.observerTarget){
      this.addMutationObserver();
    }
    return this
  }
}
