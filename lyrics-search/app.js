const apiURL = `https://api.lyrics.ovh`;

// Seleciono elementos que irei interagir
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const songsContainer = document.querySelector("#songs-container");
const prevAndNextContainer = document.querySelector("#prev-and-next-container");

// função que acessa API
const fetchData = async (url) => {
  try {
    songsContainer.innerHTML =
    '<div class="loading-container"><div class="loading"></div></div>';
    const response = await fetch(url);
    return await response.json();

  } catch {
    songsContainer.innerHTML =
    '<div class="loading-container"><p style="color: white">Error</p></div>';
  }
};

// recebe como argumento o link para segunda pagina da API, e aqui acessa API da segunda pagina e aciona função que os insere na página
const getMoreSongs = async (url) => {
  const data = await fetchData(`https://cors-anywhere.herokuapp.com/${url}`);
  insertSongsIntoPage(data);
};

// adiciona botoes de proxima ou pagina anterios caso hajam.
const insertNextAndPreviousButton = ({ prev, next }) => {
  prevAndNextContainer.innerHTML = `${
    prev
      ? `<button class="btn" onClick="getMoreSongs('${prev}')">❰ Anterior</button>`
      : ""
  }${
    next
      ? `<button class="btn" onClick="getMoreSongs('${next}')">Proxima ❱</button>`
      : ""
  }
`;
};

// pega o json com 15 musica, e transforma em um array com os itens usados formados, depois desmancha o array e o insere no HTML
const insertSongsIntoPage = songsInfo => {
  songsContainer.innerHTML = songsInfo.data.map(song => {

    const durationFormat = song.duration.toString().replace(/(\d)(\d{2})/g, "$1:$2");

    return `
    <li class="song">
    <div>
    <img src="${song.artist.picture}" alt="image music" width="30" heigth="30">
    <span class="song-artist"><strong>${song.artist.name}</strong> - ${song.title}</span>
    </div>
    <div>
    <span class="duration">${durationFormat}</span>
    <button class="btn" data-artist="${song.artist.name}" data-song-title="${song.title}">Ver Letra</button>
    </div>
    </li>`;
    }).join("");

  if (songsInfo.prev || songsInfo.next) {
    insertNextAndPreviousButton(songsInfo);
    return;
  }
};

// acessa a API e pega o json com os 15 sons, e aciona a função que ira inserir no HTML 
const fetchSongs = async (term) => {
  const data = await fetchData(`${apiURL}/suggest/${term}`);
  insertSongsIntoPage(data);
};

// previne o formulario de ser enviado, verifica se o input foi preenchido, limpa o input, aciona função que ira pegar os sons na API
const handleFormSubmit = event => {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();
  if (!searchTerm) {
    songsContainer.innerHTML = `<li class="warning-message">Por favor, insira um termo válido</li>`;
  }

  searchInput.value = '';
  searchInput.focus();

  fetchSongs(searchTerm);
}

form.addEventListener("submit", handleFormSubmit);

/*  Mostrar Letras (lyrics)  */
const insertLyricsIntoPage = ({ lyrics, artist, songTitle }) => {
  songsContainer.innerHTML = `
  <li class="lyrics-container">
    <h2><strong>${songTitle}</strong> - ${artist}</h2>
    <p class="lyrics">${lyrics}</p>
  </li>
  `;
};

const fetchLyrics = async (artist, songTitle) => {
  const data = await fetchData(`${apiURL}/v1/${artist}/${songTitle}`);
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

  insertLyricsIntoPage({ lyrics, artist, songTitle });
};

const handleSongsContainerClick = event => {
  const clickedElement = event.target;

  if (clickedElement.tagName === "BUTTON") {
    const artist = clickedElement.getAttribute("data-artist");
    const songTitle = clickedElement.getAttribute("data-song-title");

    prevAndNextContainer.innerHTML = "";
    fetchLyrics(artist, songTitle);
  }
}

songsContainer.addEventListener("click", handleSongsContainerClick);
