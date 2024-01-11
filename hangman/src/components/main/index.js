import styles from './main.module.scss';

export default function initMain() {
  const MAIN = document.createElement('main');
  const wrapper = document.createElement('div');

  document.body.appendChild(MAIN);
  MAIN.appendChild(wrapper);

  MAIN.className = `main`;
  wrapper.className = `${styles.main__wrapper}`;
}
