//Muda o valor das Silabas
const slide = document.querySelector('#slide');
const size = document.querySelector('#size');

size.innerHTML = slide.value;
slide.oninput = function() {
  size.innerHTML = this.value;
}

// Declarando elementos
const containerNick = document.querySelector('#container-nick');
const nickElement = document.querySelector('#nick');
const tooltip = document.querySelector('.tooltip');

let newNick;

const vogais = 'AEIOU'.toLowerCase();
const consoantes = 'BCDFGJLMNPRSTV'.toLowerCase();
const vogaisPrimeira = 'AEO'.toLowerCase();
const consoantesPrimeira = 'BCDLMST'.toLowerCase();

// Gera o Nick
function nickGenerator() {
  const tamanho = Number(slide.value);
  let nick = '';
  for(let i = 0; i < tamanho; i++) {
    if(i < 2){
    nick += consoantesPrimeira.charAt(Math.floor(Math.random() * consoantesPrimeira.length))
    nick += vogaisPrimeira.charAt(Math.floor(Math.random() * vogaisPrimeira.length))
    nick += consoantes.charAt(Math.floor(Math.random() * consoantes.length))
    nick += vogais.charAt(Math.floor(Math.random() * vogais.length))
    i++
    } else {
    nick += consoantes.charAt(Math.floor(Math.random() * consoantes.length))
    nick += vogais.charAt(Math.floor(Math.random() * vogais.length))
    }
  }
  nick = nick[0].toUpperCase() + nick.substr(1);
  containerNick.classList.remove('hidden');
  nickElement.innerHTML = nick;
  tooltip.innerHTML = 'Copiar Nick';
  newNick = nick
}

// funcao que ira copiar o nick
function copyNick(){
  navigator.clipboard.writeText(newNick)
  tooltip.innerHTML = 'Nick copiado';
}