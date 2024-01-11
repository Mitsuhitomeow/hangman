import styles from './footer.module.scss';

export default function initFooter() {
  const FOOTER = document.createElement('footer');
  const wrapper = document.createElement('div');
  const copyright = document.createElement('span');

  FOOTER.className = 'footer';
  wrapper.className = `${styles.footer__wrapper}`;

  document.body.append(FOOTER);
  FOOTER.append(wrapper);
  wrapper.append(copyright);

  copyright.textContent = '© RSSchool Production.';
}
