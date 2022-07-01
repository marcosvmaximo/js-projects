const hexColors = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function hexGenerator() {
  const numberCharacter = Math.floor(Math.random() * hexColors.length)
  return hexColors[numberCharacter];
}

const letter = document.querySelector('p');
const hex = document.querySelector('.hex');

function changeColor() {
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += hexGenerator();
  }
  hex.innerHTML = color;
  document.body.style.background = color;
  letter.style.color = color;
}