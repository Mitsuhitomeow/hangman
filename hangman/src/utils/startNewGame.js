import initInfoField from '../components/gameInfoSection';
import initGallows from '../components/imageSection';
import initKeyboard from '../components/keyboardSection';
import initGameFunctionality from './initGameFunctionality';

export default function initGame() {
  // чищу содержимое в main секциях, для их пересоздания
  const gallowsSection = document.querySelector(
    '[class*=main__section_gallows]'
  );
  const gameSection = document.querySelector('[class*=main__section_game]');
  gallowsSection.innerHTML = '';
  gameSection.innerHTML = '';

  initGallows();
  initInfoField();
  initKeyboard();

  initGameFunctionality();
}
