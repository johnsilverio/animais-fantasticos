import ScrollSuave from './modules/scroll-suave.js';
import initScrollAnimation from './modules/scroll-animation.js';
import initAccordionFaq from './modules/accordion.js';
import initNavigationTab from './modules/navtab.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
// Importação do Scroll
initScrollAnimation();

initAccordionFaq();
initNavigationTab();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();