const controles = document.getElementById('controles');
const css = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange)


const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  }

}

function handleChange(event) {
  const name = event.target.name; // pega o nome do elemento que está sendo modificado
  const value = event.target.value; // pega o valor do elemento modificicado

  handleStyle[name](value);
  saveValues(name, value)
  showCss()
}

function showCss() {
  css.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

setValues();

function setValues(){
  const properties = Object.keys(localStorage);
  properties.forEach(item => {
    handleStyle[item](localStorage[item])
    controles.elements[item].value = localStorage[item]
  })
  showCss()
}

function saveValues(name, value) {
  localStorage[name] = value
}