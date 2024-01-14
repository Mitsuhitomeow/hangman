import {
  randomAnswer,
  hiddenAnswer,
} from '../components/gameInfoSection/questionsForEach';
import createModal from '../components/modal';
import { keyboard } from '../database.json';

export default function initGameFunctionality() {
  const answerArray = [...randomAnswer];
  const hiddenAnswerArray = [...hiddenAnswer];
  let countGuesses = 6;

  const button = document.querySelectorAll(`[class*=main__keyboard_key]`);
  const [guesses, image, answer] = [
    document.querySelector(`[class*=main__info_guesses]`),
    document.querySelector(`[class*=main__image_gallows]`),
    document.querySelector(`[class*=main__info_answer]`),
  ];

  guesses.textContent = `guesses: ${countGuesses} / 6`;
  image.setAttribute('src', `./6.svg`);
  answer.textContent = hiddenAnswerArray.join('');

  const KEYS = JSON.parse(JSON.stringify(keyboard));
  let gameInProgress = true;

  document.addEventListener('keydown', (event) => {
    if (!gameInProgress) {
      return;
    }

    KEYS.forEach((element) => {
      const key = element;

      if (event.code === key.code) {
        button.forEach((elem) => {
          const click = elem;
          if (key.key === click.textContent) {
            click.disabled = true;
          }
          if (key.key === click.textContent && !answerArray.includes(key.key)) {
            countGuesses -= 1;
            key.key = '';

            guesses.textContent = `guesses: ${countGuesses} / 6`;
            image.setAttribute('src', `./${countGuesses}.svg`);
          }

          if (answerArray.includes(key.key)) {
            answerArray.forEach((letter, index) => {
              if (letter === key.key) {
                hiddenAnswerArray[index] = key.key;
                answer.textContent = hiddenAnswerArray.join('');
              }
            });
          }
        });
      }

      if (countGuesses === 0) {
        createModal('You Lost!', randomAnswer);
        countGuesses = 6;
        gameInProgress = false;
      }

      if (JSON.stringify(answerArray) === JSON.stringify(hiddenAnswerArray)) {
        createModal('You WIN!', randomAnswer);
        gameInProgress = false;
      }
    });
  });

  button.forEach((key) => {
    key.addEventListener('click', () => {
      if (answerArray.includes(key.textContent)) {
        answerArray.forEach((letter, index) => {
          if (letter === key.textContent) {
            hiddenAnswerArray[index] = key.textContent;
            answer.textContent = hiddenAnswerArray.join('');
          }
        });
      }

      if (!answerArray.includes(key.textContent)) {
        countGuesses -= 1;
        guesses.textContent = `guesses: ${countGuesses} / 6`;
        image.setAttribute('src', `./${countGuesses}.svg`);
      }

      if (JSON.stringify(answerArray) === JSON.stringify(hiddenAnswerArray)) {
        createModal('You WIN!', randomAnswer);
        countGuesses = 6;
        gameInProgress = false;
      }

      if (countGuesses === 0) {
        createModal('You Lost!', randomAnswer);
        gameInProgress = false;
      }
    });
  });
}
