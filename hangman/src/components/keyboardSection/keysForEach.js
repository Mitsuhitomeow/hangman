import styles from './keyboard.module.scss';
import clickMp3 from '/musicMouseClick.mp3';
import pressMp3 from '/musickPressKey.mp3';

export default function createKey(data, keyboard) {
  data.forEach((key) => {
    const button = document.createElement('button');
    const sound = document.querySelector(`[class*=header__img_sound]`);
    const audioClick = new Audio(clickMp3);
    const audioPress = new Audio(pressMp3);

    button.textContent = `${key.key}`;

    button.addEventListener('click', () => {
      /**
       * Добавил звук на ckick в зависимости от размера экрана:
       * 1) Если на телефоне открыт то звук печатания на клавиатуре.
       * 2) Если на компьютере, то звук клика мыши.
       */

      const screenWidth = window.screen.width;
      button.disabled = true;

      if (sound.classList.contains('sound') && screenWidth > 768) {
        audioClick.play();
      }

      if (sound.classList.contains('sound') && screenWidth <= 768) {
        audioPress.play();
      }
    });

    button.className = `${styles.main__keyboard_key}`;
    keyboard.append(button);
  });
}
