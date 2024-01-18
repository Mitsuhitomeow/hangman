import winMp3 from '/musicFanfar.mp3';
import lostMp3 from '/musicGameOver.mp3';

const audioWin = new Audio(winMp3);
const audioLost = new Audio(lostMp3);

export default function isWinnerSound(isWon) {
  const img = document.querySelector('[class*=header__img_sound]');

  if (isWon === 'You WIN!' && img.classList.contains('sound')) {
    audioWin.play();
  }

  if (isWon === 'You Lost!' && img.classList.contains('sound')) {
    audioLost.play();
  }
}
