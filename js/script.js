  const div = document.querySelector('.number .result');
  const input = document.querySelector('input[type="number"]');
  const textAreaInserit = document.querySelector('.line .result');
  const textArea = document.querySelector('#line-number');


const numbers = {
  0: "ﾠ_ \n| |\n|_|",
  1: "|\n|",
  2: " _ \n _|\n|_ ",
  3: " _ \n _|\n _|",
  4: "   \n|_|\n  |",
  5: " _ \n|_ \n _|",
  6: " _ \n|_ \n|_|",
  7: " _ \n  |\n  |",
  8: " _ \n|_|\n|_|",
  9: " _ \n|_|\n  |"
}

const numberToLine = () => {

  const createElement = (number) => {
    const span = document.createElement('span');
    span.innerText = numbers[number];
    div.appendChild(span)
  }
  
  const convertNumberToLines = (e) => {
    const [...valueToInput] = e.currentTarget.value;
    div.innerHTML = '';
    valueToInput.forEach(number => {
      createElement(number)
    })
  }
  
  input.addEventListener('input', convertNumberToLines);
}

const checkLineToNumber = (e) => {
  for(const number in numbers) {  // for in pode iterar pelas propriedades de um objeto como se fosse um array, assim posso acessar o valor de cada propriedade
    console.log(e.currentTarget.value)
    console.log(numbers[number])
    if(textArea.value == numbers[number]){
      textAreaInserit.innerText = number
    }
  }
  
}

const lineToNumber = () => {
  textArea.addEventListener('input', checkLineToNumber)
}

lineToNumber()
numberToLine();

const container1 = document.querySelector('.number');
const container2 = document.querySelector('.line');

const changeContainer = () => {

  container1.classList.toggle('active')
  container2.classList.toggle('active')
}
