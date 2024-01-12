import styles from './info.module.scss';
import { answerQuastion } from '../../database.json';

let random;
let randomAnswer;
let hiddenAnswer;
let randomQuestion;

export default function createQuestion(infoSection) {
  random = Math.floor(Math.random() * answerQuastion.length);
  randomAnswer = answerQuastion[random].answer.toUpperCase();
  hiddenAnswer = randomAnswer
    .split('')
    .map(() => '_')
    .join('');
  randomQuestion = answerQuastion[random].question;

  const answerElement = document.createElement('span');
  const questionElement = document.createElement('p');
  const guessesElement = document.createElement('p');

  const boldWord = document.createElement('span');
  boldWord.textContent = `Hint: `;

  boldWord.className = `${styles.main__info_span}`;
  answerElement.className = `${styles.main__info_answer}`;
  questionElement.className = `${styles.main__info_question}`;
  guessesElement.className = `${styles.main__info_guesses}`;

  answerElement.textContent = `${hiddenAnswer}`;
  questionElement.textContent = `${randomQuestion}`;
  guessesElement.textContent = `guesses: 6 / 6`;

  infoSection.append(answerElement);
  infoSection.append(questionElement);
  infoSection.append(guessesElement);
  questionElement.prepend(boldWord);
}

export { randomAnswer, hiddenAnswer };
