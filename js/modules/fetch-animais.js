import AnimaNumbers from "./anima-numbers.js";

export default function createAnimais(url, target) {
  // cria a div onde ira ficar o conteudo dos animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  const numerosGrid = document.querySelector(target);
  const fillAnimal = (animal) => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  const activeAnima = () => {
    const animaNumbers = new AnimaNumbers("[data-numero]", ".numeros", 'ativo')
    animaNumbers.init();
  }

  async function fetchAnimals() {
    try {
      console.log(url)
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      // para cada animal puxado do json, cria uma div com suas informações e o coloca na pagina
      animaisJson.forEach(animal => fillAnimal(animal));
      activeAnima()
    } catch (error) {
      console.log(Error(error));
    }
  }
  
  return fetchAnimals();
}
