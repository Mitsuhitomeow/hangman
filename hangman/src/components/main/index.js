import styles from './main.module.scss';

export default function initMain() {
  const MAIN = document.createElement('main');
  const wrapper = document.createElement('div');
  const hangmanGameSection = document.createElement('div');
  const imageSection = document.createElement('section');

  document.body.appendChild(MAIN);
  MAIN.appendChild(wrapper);
  wrapper.appendChild(imageSection);
  wrapper.appendChild(hangmanGameSection);

  MAIN.className = `main`;
  wrapper.className = `${styles.main__wrapper}`;
  imageSection.className = `${styles.main__section_gallows}`;
  hangmanGameSection.className = `${styles.main__section_game}`;
}
