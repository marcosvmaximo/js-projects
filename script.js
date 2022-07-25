const transactionsUl = document.querySelector("#transactions");
const incomeDisplay = document.querySelector("#money-plus");
const expenseDisplay = document.querySelector("#money-minus");
const balanceDisplay = document.querySelector("#balance");
const form = document.querySelector("#form");
const inputTransactionName = document.querySelector("#text");
const inputTransactionAmount = document.querySelector("#amount");
const inputTransactionDate = document.querySelector('#date');

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

const removeTransaction = (ID) => {
  transactions = transactions.filter((transaction) => transaction.id !== ID);
  updateLocalStorage();
  init();
};

const addTransactionIntoDOM = ({ amount, name, id }) => {
  const operator = amount < 0 ? "-" : "+";
  const CSSClass = amount < 0 ? "minus" : "plus";
  const amountWithoutOperator = Math.abs(amount);
  const li = document.createElement("li");

  li.classList.add(CSSClass);
  li.innerHTML = `
  ${name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn" onclick="removeTransaction(${id})">x</button>`;
  transactionsUl.prepend(li);
};

const getExpenses = (transactionsAmounts) =>
  Math.abs(
    transactionsAmounts
      .filter((value) => value < 0)
      .reduce((accumulator, value) => accumulator + value, 0)
      .toFixed(2)
  );

const getIncome = (transactionsAmounts) =>
  transactionsAmounts
    .filter((value) => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);

const getTotal = (transactionsAmounts) =>
  transactionsAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2);

const updateBalanceValues = () => {
  const transactionsAmounts = transactions.map(({ amount }) => amount);

  balanceDisplay.textContent = `R$ ${getTotal(transactionsAmounts)}`;
  incomeDisplay.textContent = `R$ ${getIncome(transactionsAmounts)}`;
  expenseDisplay.textContent = `R$ ${getExpenses(transactionsAmounts)}`;
};

const init = () => {
  transactionsUl.innerHTML = "";

  transactions.forEach(addTransactionIntoDOM);
  updateBalanceValues();
};

init();

const updateLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

const generatorID = () => Math.round(Math.random() * 1000);

const addToTransactionsArray = (transactionName, transactionAmount, transactionDate) => {
  const transaction = {
    id: generatorID(),
    name: transactionName,
    amount: +transactionAmount,
    date: transactionDate,
  };
  transactions.push(transaction);
};

const cleanInput = () => {
  inputTransactionName.value = "";
  inputTransactionAmount.value = "";
  inputTransactionDate.value = "";
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const transactionName = inputTransactionName.value.trim();
  const transactionAmount = inputTransactionAmount.value.trim();
  const transactionDate = inputTransactionDate.value.trim();
  const isSomeInputEmpyt = transactionName === "" || transactionAmount === "";

  if (isSomeInputEmpyt) {
    alert("Por favor, preencha tanto o nome quanto o valor da transação.");
    return;
  }

  addToTransactionsArray(transactionName, transactionAmount, transactionDate);
  init();
  updateLocalStorage();
  cleanInput();
};

form.addEventListener("submit", handleFormSubmit);
