import styles from './header.module.scss';
import soundOff from '../../../../../../sound-off.svg';

export default function initHeader() {
  const HEADER = document.createElement('header');
  const title = document.createElement('h1');
  const wrapper = document.createElement('div');
  const img = document.createElement('img');

  img.setAttribute('src', soundOff);

  document.body.append(HEADER);
  HEADER.append(wrapper);
  wrapper.append(title);
  wrapper.append(img);

  title.innerText = 'Hagman Game';

  HEADER.className = `header`;
  wrapper.className = `${styles.header__wrapper}`;
  title.className = `${styles.title}`;
  img.className = `${styles.header__img_sound}`;
}
