const imgPokemon = document.querySelector(".pokemon-img");
const namePokemon = document.querySelector(".pokemon-name");
const idPokemon = document.querySelector(".pokemon-id");
const inputPokemon = document.querySelector(".search input");
const button = document.querySelector(".search button");
const loading = document.querySelector('.loading')

const addLoading = () => {
  loading.classList.add('active');
  imgPokemon.classList.add('hidden');
}

const addImg = () => {
  loading.classList.remove('active');
  imgPokemon.classList.remove('hidden');
}

const getPokemon = (folder) => {
  imgPokemon.setAttribute("src", folder.sprites.back_default);
  const firstLetter = folder.name.charAt(0);
  const newName = folder.name.replace(firstLetter, firstLetter.toUpperCase());
  namePokemon.innerText = newName;
  idPokemon.innerText = folder.id;
};

const getJson = async (url) => {
  try {
    const data = await fetch(url);
    const json = await data.json();
    addImg();
    getPokemon(json);
  } catch {
    imgPokemon.classList.add('hidden')
    alert('Informe um ID ou nome correto.')
  }
};

const getInput = () => {
  addLoading();
  const pokemon = inputPokemon.value.toLowerCase();
  getJson(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
};

button.addEventListener("click", getInput);
