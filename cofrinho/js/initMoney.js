export default function clickMoney() {
  const notes = document.querySelectorAll("[data-value]");
  const money = document.querySelector(".money");
  const decrement = document.querySelector(".decrement-button");

  let savedMoney = +localStorage.getItem("savedMoney");

  const checkColor = (number) => {
    number <= 0
      ? (money.style.color = "red")
      : (money.style.color = "green");
  }

  const initAnimaNumber = (start = 0) => {
    const sentValue = savedMoney - start
    const incrementInterval = (start !== 0) ? sentValue / 10 : savedMoney / 50;

    if (sentValue) {
      const animaPositive = setInterval(() => {
        start += incrementInterval;
        money.innerText = start.toFixed(2);
        checkColor(start)
        if (start > savedMoney) {
          money.innerText = savedMoney.toFixed(2);
          clearInterval(animaPositive);
        }
      }, 10);
    }

    if (sentValue) {
      console.log(incrementInterval)
      const animaNegative = setInterval(() => {
        start += incrementInterval;
        money.innerText = start.toFixed(2);
        checkColor(start)
        if (start < savedMoney) {
          money.innerText = savedMoney.toFixed(2);
          clearInterval(animaNegative);
        }
      }, 50);
    }

  };
  initAnimaNumber();

  function toggleButton() {
    const sinal = document.querySelectorAll(".sinal");
    const incrementOrDecrement = decrement.getAttribute("data-action");
    if (incrementOrDecrement === "increment") {
      decrement.setAttribute("data-action", "decrement");
      decrement.innerText = "retirando";
      sinal.forEach((item) => {
        item.innerText = "-";
        item.style.color = "red";
      });
    } else {
      decrement.setAttribute("data-action", "increment");
      decrement.innerText = "adicionando";
      sinal.forEach((item) => {
        item.innerText = "+";
        item.style.color = "green";
      });
    }
  }

  decrement.addEventListener("click", toggleButton);
  notes.forEach((note) => note.addEventListener("click", getValue));

  function getValue(e) {
    const increOrDecre = decrement.getAttribute("data-action");

    if (increOrDecre === "increment") {
      const value = Number(e.target.parentElement.getAttribute("data-value"));
      savedMoney += value;
      localStorage.setItem("savedMoney", savedMoney);
      initAnimaNumber(savedMoney - value);
    } else {
      const value = Number(e.target.parentElement.getAttribute("data-value"));
      savedMoney -= value;
      localStorage.setItem("savedMoney", savedMoney);
      initAnimaNumber(savedMoney + value);
    }
  }
}
