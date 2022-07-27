export default function initAccordionList(){
  const list = document.querySelectorAll('[data-anime="accordion"] dt');
  const contentList = document.querySelectorAll('[data-anime="accordion"] dt + dd');
  contentList[0].classList.add('ativo');
  
  function showList(index) {
    list[index].classList.toggle('ativado');
    contentList[index].classList.toggle('ativo');
  }

  if (list.length && contentList.length) {
    list.forEach((item, index) => {
      item.addEventListener('click', () => showList(index))
    })
  }
  
}
