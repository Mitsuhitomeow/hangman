import styles from './keyboard.module.scss';
import mp3 from '/musicMouseClick.mp3';

export default function createKey(data, keyboard) {
  data.forEach((key) => {
    const button = document.createElement('button');
    const sound = document.querySelector(`[class*=header__img_sound]`);
    const audio = new Audio(mp3);

    button.textContent = `${key.key}`;

    button.addEventListener('click', () => {
      button.disabled = true;

      if (sound.classList.contains('sound')) {
        audio.play();
      }
    });

    button.className = `${styles.main__keyboard_key}`;
    keyboard.append(button);
  });
}
