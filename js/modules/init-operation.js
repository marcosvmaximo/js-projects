export default function initOperation() {
  const operation = document.querySelector('[data-semana]');
  
  const daysWeekOpen = operation.dataset.semana.split(',').map(Number);
  const timeWeekOpen = operation.dataset.horario.split(',').map(Number);
  
  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hoursNow = dateNow.getHours();
  
  const openDays = daysWeekOpen.indexOf(dayNow) !== -1
  const openHours = (hoursNow >= timeWeekOpen[0] && hoursNow < timeWeekOpen[1]);
  
  if(openDays && openHours) {
    operation.classList.add('aberto')
  }
}

initOperation()