import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown.js";
import MenuMobile from "./modules/menu-mobile.js";
import Operation from "./modules/init-operation.js";
import initFetchAnimals from "./modules/fetch-animais.js";
import initFetchBtc from "./modules/fetch-btc.js";
import SlideNav from "./modules/slide.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const operation = new Operation("[data-semana]", "aberto");
console.log(operation.init());

initFetchAnimals("js/animaisapi.json", ".numeros-grid");
initFetchBtc("https://blockchain.info/ticker", ".btc-preco");

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
// slide.addArrow('.prev', '.next');
slide.addControl(".custom-control");
