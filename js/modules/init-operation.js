export default class initOperation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  operationalData() {
    this.daysWeekOpen = this.operation.dataset.semana.split(",").map(Number);
    this.timeWeekOpen = this.operation.dataset.horario.split(",").map(Number);
  }

  nowData() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hoursNow = this.dateNow.getUTCHours() - 3;
  }

  itsOpen() {
    const openDays = this.daysWeekOpen.indexOf(this.dayNow) !== -1;
    const openHours =
      this.hoursNow >= this.timeWeekOpen[0] &&
      this.hoursNow < this.timeWeekOpen[1];
    return openDays && openHours;
  }

  activeOpen() {
    if (this.itsOpen()) this.operation.classList.add(this.activeClass);
  }

  init() {
    if (this.operation) {
      this.operationalData();
      this.nowData();
      this.activeOpen();
    }
    return this;
  }
}
