import styles from './keyboard.module.scss';
import createKey from './keysForEach';
import { keyboard } from '../../database.json';

const firstRow = keyboard.slice(0, 10);
const secondRow = keyboard.slice(10, 19);
const thirdRow = keyboard.slice(19, keyboard.length);

export default function initKeyboard() {
  const container = document.querySelector('[class*=main__section_game]');
  const keyboardSection = document.createElement('section');
  const firstRowSection = document.createElement('div');
  const secondRowSection = document.createElement('div');
  const thirdRowSection = document.createElement('div');

  keyboardSection.className = `${styles.main__section_keyboard}`;

  createKey(firstRow, firstRowSection);
  createKey(secondRow, secondRowSection);
  createKey(thirdRow, thirdRowSection);

  container.append(keyboardSection);
  keyboardSection.append(firstRowSection, secondRowSection, thirdRowSection);
}
