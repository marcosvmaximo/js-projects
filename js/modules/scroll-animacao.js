export default function initAnimationScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
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