import winMp3 from '../../../../../../musicFanfar.mp3';
import lostMp3 from '../../../../../../musicGameOver.mp3';

export default function isWinnerSound(isWon) {
  const img = document.querySelector('[class*=header__img_sound]');

  if (isWon === 'You WIN!' && img.classList.contains('sound')) {
    const audio = new Audio(winMp3);
    audio.play();
  }

  if (isWon === 'You Lost!' && img.classList.contains('sound')) {
    const audio = new Audio(lostMp3);
    audio.play();
  }
}
