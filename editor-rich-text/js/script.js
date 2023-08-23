class RichEditor {
  constructor(selector, textArea) {
    this.buttons = document.querySelectorAll(selector);
    this.areaText = document.querySelector(textArea);

    this.toggleButton = this.toggleButton.bind(this);
  }

  modifyText(command, defaultUi, value) {
    document.execCommand(command, defaultUi, value);
  }

  toggleButton(event) {
    const target = event.currentTarget;
    this.buttons.forEach((button) => {
      if (button !== target) button.classList.remove("active");
    });
    target.classList.toggle("active");

    if (target.classList.contains("active")) {
      this.modifyText(target.dataset.type, false, target.dataset.value);
    } else {
      this.modifyText("undo", false, null);
    }
  }

  addEvent() {
    this.buttons.forEach((button) =>
      button.addEventListener("click", (e) => {
        this.toggleButton(e);
      })
    );
  }

  init() {
    this.addEvent();
  }
}

const textEdit = new RichEditor(".edits button", "#text-area");
textEdit.init();
