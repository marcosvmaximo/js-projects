import initAnimaNumbers from "./anima-numbers.js";

export default function initFetch() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
    
      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
        initAnimaNumbers();
      });
    } catch(error) {
      console.log(Error(error))
    }
  }
  
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
  
    return div;
  }
  fetchAnimais("./js/animaisapi.json");
}
