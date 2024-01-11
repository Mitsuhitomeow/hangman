import styles from './info.module.scss';
import createQuestion from './questionsForEach';

export default function initInfoField() {
  const container = document.querySelector('[class*=main__section_game]');
  const infoSection = document.createElement('section');

  infoSection.className = `${styles.main__section_info}`;

  container.append(infoSection);

  createQuestion(infoSection);
}
