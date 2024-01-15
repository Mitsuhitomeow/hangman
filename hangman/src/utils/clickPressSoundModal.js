import clickMp3 from '/musicMouseClick.mp3';
import pressMp3 from '/musickPressKey.mp3';
import initGame from './startNewGame';

const audioClick = new Audio(clickMp3);
const audioPress = new Audio(pressMp3);

const pressEnterToRestart = (event) => {
  const sound = document.querySelector(`[class*=header__img_sound]`);
  const modal = document.querySelector(`[class*=modal]`);
  if (event.code === 'Enter') {
    if (sound.classList.contains('sound')) {
      audioPress.play();
    }

    document.removeEventListener('keydown', pressEnterToRestart);
    modal.remove();
    initGame();
  }
};

const clickButtonToRestart = () => {
  const sound = document.querySelector(`[class*=header__img_sound]`);
  const modal = document.querySelector(`[class*=modal]`);
  const screenWidth = window.screen.width;

  if (sound.classList.contains('sound') && screenWidth > 768) {
    audioClick.play();
  }

  if (sound.classList.contains('sound') && screenWidth <= 768) {
    audioPress.play();
  }

  modal.remove();
  initGame();
};

export { clickButtonToRestart, pressEnterToRestart };
