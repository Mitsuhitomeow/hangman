import styles from './gallows.module.scss';

export default function initGallows() {
  const wrapper = document.querySelector(`[class*="main__wrapper"]`);

  const container = document.createElement('section');
  const image = document.createElement('img');

  image.setAttribute('src', './0.svg');
  image.setAttribute('alt', 'Gallows Image');

  container.className = `main__section_gallows`;
  image.className = `${styles.main__image_gallows}`;

  wrapper.append(container);
  container.append(image);
}
