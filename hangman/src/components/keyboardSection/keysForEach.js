import styles from './keyboard.module.scss';

export default function createKey(data, keyboard) {
  data.forEach((key) => {
    const button = document.createElement('button');
    button.textContent = `${key.key}`;

    button.addEventListener('click', () => {
      button.disabled = true;
    });

    button.className = `${styles.main__keyboard_key}`;
    keyboard.append(button);
  });
}
