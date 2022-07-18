export default function clickButton() {
  const buttonList = document.querySelector("[data-buttons]");
  const button = document.querySelector('.button');

  button.addEventListener('click', () => {
    button.classList.add('remove')
    buttonList.classList.add('ativo')
  })

  const arrayLi = Array.from(buttonList.children);
  arrayLi.forEach((button) => {
    button.addEventListener('click', toggleButton)
  })

  function toggleButton() {
    const thisClick = this
    arrayLi.forEach((button) => {
      if(button != thisClick){
        button.classList.toggle('hidden');
      }
    })
    checkButton(thisClick)
  }

  function checkButton(thisButton) {
    const coin = thisButton.firstChild.innerText.toLowerCase() === "moedas";
    const cell = thisButton.firstChild.innerText.toLowerCase() === "notas";

    if (coin) {
      showCoin();
    } else if (cell) {
      showBanknote();
    }
  }

  const sectionBanknote = document.querySelector(".banknotes");
  const sectionCoin = document.querySelector(".coins");

  function showCoin() {
    sectionBanknote.classList.remove("ativo");
    sectionCoin.classList.add("ativo");
  }

  function showBanknote() {
    sectionCoin.classList.remove("ativo");
    sectionBanknote.classList.add("ativo");
  }
}
