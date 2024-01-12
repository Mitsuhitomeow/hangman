import {
  randomAnswer,
  hiddenAnswer,
} from '../components/gameInfoSection/questionsForEach';
import createModal from '../components/modal';

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
      }

      if (countGuesses === 0) {
        createModal('You Lost!', randomAnswer);
      }
    });
  });
}
