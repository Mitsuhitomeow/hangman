import styles from './header.module.scss';

export default function initHeader() {
  const HEADER = document.createElement('header');
  const title = document.createElement('h1');
  const wrapper = document.createElement('div');

  document.body.append(HEADER);
  HEADER.append(wrapper);
  wrapper.append(title);

  title.innerText = 'Hagman Game';

  HEADER.className = `${styles.header}`;
  wrapper.className = `${styles.wrapper}`;
  title.className = `${styles.title}`;
}
