import {
  randomAnswer,
  hiddenAnswer,
} from '../gameInfoSection/questionsForEach';

let count = 6;
const answerArray = randomAnswer.split('');
const hiddenAnswerArray = hiddenAnswer.split('');
console.log(answerArray, hiddenAnswerArray);

export default function initGameFunctionality() {
  const button = document.querySelectorAll(`[class*=main__keyboard_key]`);
  const [guesses, image, answer] = [
    document.querySelector(`[class*=main__info_guesses]`),
    document.querySelector(`[class*=main__image_gallows]`),
    document.querySelector(`[class*=main__info_answer]`),
  ];

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
        count -= 1;
        guesses.textContent = `guesses: ${count} / 6`;
        image.setAttribute('src', `/${count}.svg`);
      }
    });
  });
}
