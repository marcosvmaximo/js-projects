import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  const login = document.querySelector('.loginButton');
  const menuAddLogin = document.querySelector('.menu');
  const fatherLogin = login.parentElement;

  const displaySize = window.matchMedia('(max-width: 700px)');
  
  displaySize.matches ? menuAddLogin.appendChild(login) : fatherLogin.appendChild(login);
  window.addEventListener('resize', () => {
    displaySize.matches ? menuAddLogin.appendChild(login) : fatherLogin.appendChild(login);
  })

  if(menuButton){
    function openMenu(){
      menuList.classList.add('active');
      menuButton.classList.add('active');
      outsideClick(menuList, ['click'], () => {
        menuList.classList.remove('active')
        menuButton.classList.remove('active')
      })
    }
    
    menuButton.addEventListener('click', openMenu);
  }
}