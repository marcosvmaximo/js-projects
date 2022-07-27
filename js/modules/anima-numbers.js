export default function initAnimaNumbers() {
  function animaNumbers() {
    const numbers = document.querySelectorAll("[data-numero]");

    numbers.forEach((number) => {
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
    });
  }

  const observerTarget = document.querySelector(".numeros");
  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumbers();
    }
  }

  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
