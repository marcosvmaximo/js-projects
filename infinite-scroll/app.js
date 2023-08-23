class PostsPage {
  constructor(postsContainer, loaderContainer, filterInput) {
    this.postsContainer = document.querySelector(postsContainer);
    this.loaderContainer = document.querySelector(loaderContainer);
    this.filterInput = document.querySelector(filterInput);

    this.number = 5;

    this.handleScrollToPageBottom = this.handleScrollToPageBottom.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.debounce = this.debounce(this.debounce.bind(this))
  }

  async getPosts() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${this.number}`
    );
    return response.json();
  }

  generatePosts(posts) {
    return posts.map(({ id, title, body}) => {
      return `<div class="post">
      <div class="number">${id}</div>
      <div class="post-info">
        <h2 class="post-title">${title}</h2>
        <p class="post-body">${body}</p>
      </div>
    </div>`;}).join('')
  }

  async addPostsIntoDom() {
    const posts = await this.getPosts();
    const postsTemplate = this.generatePosts(posts);
    this.postsContainer.innerHTML = postsTemplate;
  }

  getNextPosts() {
    this.number += 5;
    this.addPostsIntoDom();
  }

  removeLoader() {
    setTimeout(() => {
      this.loaderContainer.classList.remove("show");
      this.getNextPosts();
    }, 1000);
  }

  showLoader() {
    this.loaderContainer.classList.add("show");
    this.removeLoader();
  }

  handleScrollToPageBottom() {
    // clientHeight: Altura da página que é visivel pelo usuario (se diminuir a tela o valor diminui também);
    // scrollHeight: É a altura total da página.
    // scrollTop: Distancia até o topo da página.
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement;

    const isPageBottomAlmostReached =
      clientHeight + scrollTop >= scrollHeight - 10;

    if (isPageBottomAlmostReached) {
      this.showLoader();
    }
  }

  checkEachPost(post, inputValue) {
      const postTitle = post
        .querySelector(".post-title")
        .textContent.toLowerCase();
      const postBody = post
        .querySelector(".post-body")
        .textContent.toLowerCase();
      const check =
        postTitle.includes(inputValue) || postBody.includes(inputValue);

      if (check) {
        post.style.display = "flex";
        return;
      }

      post.style.display = "none";
  }

  handleInputValue(event) {
    const inputValue = event.currentTarget.value;
    const posts = document.querySelectorAll(".post");
    posts.forEach((post) => this.checkEachPost(post, inputValue));
  }

  debounce(func, wait = 50) {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, wait);
    }
  }

  addEvents() {
    window.addEventListener("scroll", this.handleScrollToPageBottom);
    this.filterInput.addEventListener("input", this.handleInputValue);
  }

  init() {
    this.addPostsIntoDom();
    this.addEvents();
  }
}

const addPage = new PostsPage("#posts-container", ".loader", "#filter");
addPage.init();
