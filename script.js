function clickButton() {
  const buttons = document.querySelectorAll('[data-buttons] li');

  function activeButton(e) {
    const thisButton = this
    console.log(thisButton)
    buttons.forEach((item) => {
      item.classList.toggle('hidden')
      if(item === thisButton){
        item.classList.remove('hidden')
      }
    })
  }

  buttons.forEach((button) => {
    button.addEventListener('click', activeButton)
  })
}

clickButton();