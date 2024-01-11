import styles from './info.module.scss';
import { answerQuastion } from '../../database.json';

export default function initInfoField() {
  const container = document.querySelector('[class*=main__section_game]');
  const infoSection = document.createElement('section');
  const answerElement = document.createElement('span');
  const questionElement = document.createElement('p');
  const guessesElement = document.createElement('p');

  answerElement.className = `${styles.main__info_answer}`;
  questionElement.className = `${styles.main__info_question}`;
  guessesElement.className = `${styles.main__info_guesses}`;

  answerElement.textContent = `${answerQuastion[0].answer}`;
  questionElement.textContent = `Hint: ${answerQuastion[0].quastion}`;
  guessesElement.textContent = `guesses: 6 / 6`;

  container.append(infoSection);
  infoSection.append(answerElement);
  infoSection.append(questionElement);
  infoSection.append(guessesElement);
}
