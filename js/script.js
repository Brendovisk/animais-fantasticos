import initAnimaNumeros from "./modules/anima-numeros";
import Accordion from "./modules/accordion";
import initDropdown from "./modules/dropdown";
import initFetchAnimais from "./modules/fetch-animais";
import initFetchBitcoin from "./modules/fetch-bitcoin";
import initFuncionamento from "./modules/funcionamento";
import initMenuMobile from "./modules/menu-mobile";
import initModal from "./modules/modal";
import initAnimacaoScroll from "./modules/scroll-animacao";
import SmoothScroll from "./modules/smooth-scroll";
import TabNav from "./modules/tabNav";
import initTooltip from "./modules/tooltip";

const smoothScroll = new SmoothScroll("[data-menu='smooth'] a[href^='#']");
const accordion = new Accordion("[data-anime='accordion'] dt");
const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");

accordion.init();
smoothScroll.init();
tabNav.init();

initDropdown();
initAnimaNumeros();
initFetchAnimais();
initFetchBitcoin();
initFuncionamento();
initMenuMobile();
initModal();
initAnimacaoScroll();
initTooltip();
