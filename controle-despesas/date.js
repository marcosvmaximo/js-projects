const dateMonth = document.querySelector("#month");
const dateYear = document.querySelector("#year");
const clickPreviousMonth = document.querySelector("#previous");
const clickNextMonth = document.querySelector("#next");

let today = new Date();
let selectedMonth = today.getMonth();
let selectedYear = today.getFullYear();

const checkMonths = () => {
  const beforeJanuary = selectedMonth < 0;
  const afterDecember = selectedMonth > 11;
  if (afterDecember) {
    selectedYear += 1;
    selectedMonth = 0;
  } else if (beforeJanuary) {
    selectedYear -= 1;
    selectedMonth = 11;
  }
};

const getMonth = () => {
  const arrayMonth = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  checkMonths();

  dateMonth.innerText = arrayMonth[selectedMonth];
  dateYear.innerText = selectedYear;
};

getMonth();
import functionInit from "./script.js";

clickNextMonth.addEventListener("click", () => {
  selectedMonth += 1;
  today.setMonth(selectedMonth);
  getMonth();
  functionInit()
});
clickPreviousMonth.addEventListener("click", () => {
  selectedMonth -= 1;
  today.setMonth(selectedMonth);
  getMonth();  
  functionInit()
});

export default today;