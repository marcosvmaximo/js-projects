export default function clickMoney() {}
const notes = document.querySelectorAll("[data-value]");
const money = document.querySelector(".money");
let savedMoney = +localStorage.getItem("savedMoney");
money.innerText = savedMoney.toFixed(2);
+money.innerText < 0
  ? (money.style.color = "red")
  : (money.style.color = "green");

const decrement = document.querySelector(".decrement-button");
decrement.addEventListener("click", toggleButton);

function toggleButton() {
  const sinal = document.querySelectorAll('.sinal');
  const incrementOrDecrement = decrement.getAttribute("data-action");
  if (incrementOrDecrement === "increment") {
    decrement.setAttribute("data-action", "decrement");
    decrement.innerText = 'retirando'
    sinal.forEach((item) => {
      item.innerText = '-'
      item.style.color = 'red'
    })
  } else {
    decrement.setAttribute("data-action", "increment");
    decrement.innerText = 'adicionando'
    sinal.forEach((item) => {
      item.innerText = '+'
      item.style.color = 'green'
    })
  }
}

notes.forEach((item) => {
  item.addEventListener("click", getValue);
});

function getValue(e) {
  const increOrDecre = decrement.getAttribute("data-action");
  if (increOrDecre === "increment") {
    const value = e.target.parentElement.getAttribute("data-value");
    savedMoney += +value;
    money.innerText = savedMoney.toFixed(2);
    localStorage.setItem("savedMoney", savedMoney);
    +money.innerText < 0
      ? (money.style.color = "red")
      : (money.style.color = "green");
  } else {
    const value = e.target.parentElement.getAttribute("data-value");
    savedMoney -= +value;
    money.innerText = savedMoney.toFixed(2);
    localStorage.setItem("savedMoney", savedMoney);
    +money.innerText < 0
      ? (money.style.color = "red")
      : (money.style.color = "green");
  }
}
