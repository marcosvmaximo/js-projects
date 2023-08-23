const slideElement = document.querySelector("#slide");
const buttonElement = document.querySelector("#button");
const valueElement = document.querySelector("#valor");

const passawordElement = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");
const tooltip = document.querySelector('.tooltip');

const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
let newPassword;

valueElement.innerHTML = slideElement.value;
slide.oninput = function() {
  valueElement.innerHTML = this.value;
}

function passwordGenerator() {
  let pass = "";
  for(let i = 0, n = charset.length; i <= slideElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove('hidden');
  passawordElement.innerHTML = pass;
  newPassword = pass;
}

function copyPassword() {
  navigator.clipboard.writeText(newPassword)
  passawordElement.innerHTML = 'Senha copiada.';
  tooltip.classList.add('hidden');
}