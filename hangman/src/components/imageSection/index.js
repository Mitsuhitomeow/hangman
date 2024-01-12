import styles from './gallows.module.scss';

export default function initGallows() {
  const section = document.querySelector('[class*=main__section_gallows]');
  const image = document.createElement('img');

  image.setAttribute('src', './6.svg');
  image.setAttribute('alt', 'Gallows Image');

  image.className = `${styles.main__image_gallows}`;

  section.append(image);
}
