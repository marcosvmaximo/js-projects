import ScrollSuave from './modules/scroll-suave.js';
import initAnimationScroll from './modules/scroll-animacao.js';
import initAccordionList from './modules/accordion-list.js';
import initTabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/init-operation.js'
import initFetchAnimals from './modules/fetch-animais.js';
import initFetchBtc from './modules/fetch-btc.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimationScroll();
initAccordionList();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimals();
initFetchBtc();
