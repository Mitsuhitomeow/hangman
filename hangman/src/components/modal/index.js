import initGame from '../../utils/startNewGame';
import isWinnerSound from '../../utils/isWinSound';
import styles from './modal.module.scss';

export default function createModal(isWon, word) {
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');
  const isWinText = document.createElement('p');
  const answerWord = document.createElement('p');
  const BTN_RESTART = document.createElement('button');

  modal.id = styles.modal;
  modal.style.display = 'block';
  isWinText.textContent = `${isWon}`;
  answerWord.textContent = `Word: ${word}`;
  BTN_RESTART.textContent = 'Play Again';

  modal.classList.add(styles.modal);
  modalContent.className = styles.modal__content;
  BTN_RESTART.className = styles.modal__button_play;
  isWinText.className = styles.modal__content_title;
  answerWord.className = styles.modal__content_answer;

  modalContent.appendChild(isWinText);
  modalContent.appendChild(answerWord);
  modalContent.appendChild(BTN_RESTART);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  BTN_RESTART.addEventListener('click', () => {
    // удаляем модалку при клике
    modal.remove();
    // пересоздаем компаненты
    initGame();
  });

  isWinnerSound(isWon);
}
