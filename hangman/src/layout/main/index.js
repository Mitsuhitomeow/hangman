import styles from './main.module.scss';

export default function Main() {
  const MAIN = document.createElement('main');
  const wrapper = document.createElement('div');

  document.body.appendChild(MAIN);
  MAIN.appendChild(wrapper);

  MAIN.className = `main`;
  wrapper.className = `${styles.wrapper}`;
}
