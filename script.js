function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
  
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }
  
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordionList(){
  const list = document.querySelectorAll('.js-faqlista dt');
  const contentList = document.querySelectorAll('.js-faqlista dt + dd');
  contentList[0].classList.add('ativo');

  if(list.length && contentList.length) {
    function showList(index) {
      list[index].classList.toggle('ativado');
      contentList[index].classList.toggle('ativo');
    }
    
    list.forEach((item, index) => {
      item.addEventListener('click', () => {
        showList(index);
      })
    })
  }
}
initAccordionList();

function initScroll() {
  const menuLinks = document.querySelectorAll('.js-menu a[href^="#"]');
  
  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: "start",
    })
  }

  menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })

}
initScroll()

function initAnimationScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  const heightUser = window.innerHeight * 0.6

  if(sections.length) {

    function animationScroll(){
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - heightUser) < 0

        if(isSectionVisible) section.classList.add('ativo');
      })
    }
  
    animationScroll();
    window.addEventListener('scroll', animationScroll);
  }
}
initAnimationScroll()