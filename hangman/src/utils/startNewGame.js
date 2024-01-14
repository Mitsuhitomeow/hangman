import initFooter from '../components/footer';
import initInfoField from '../components/gameInfoSection';
import createFavicon from '../components/head/createFavicon';
import initHeader from '../components/header';
import initGallows from '../components/imageSection';
import initKeyboard from '../components/keyboardSection';
import initMain from '../components/main';
import toggleSound from './clickSound';
import initGameFunctionality from './initGameFunctionality';

export default function initGame() {
  document.body.innerHTML = '';

  createFavicon();

  initHeader();
  initMain();
  initFooter();

  initGallows();
  initInfoField();
  initKeyboard();

  initGameFunctionality();
  toggleSound()
}
