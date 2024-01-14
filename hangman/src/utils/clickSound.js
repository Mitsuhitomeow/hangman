import soundOn from '../../../../../../sound-on.svg';
import soundOff from '../../../../../../sound-off.svg';
import backgroundMp3 from '../../../../../../musicBackground.mp3';

const audio = new Audio(backgroundMp3);

export default function toggleSound() {
  const img = document.querySelector('[class*=header__img_sound]');

  img.addEventListener('click', () => {
    if (img.getAttribute('src') === soundOn) {
      img.setAttribute('src', soundOff);
      img.classList.remove('sound');
      audio.pause();
    } else {
      img.setAttribute('src', soundOn);
      img.classList.add('sound');
      audio.play();
    }
  });

  audio.addEventListener('ended', () => {
    setTimeout(() => audio.play(), 1000);
  });
}
