import './style/main.scss';
import initGame from './utils/startNewGame';
import initFooter from './components/footer';
import createFavicon from './components/head/createFavicon';
import initHeader from './components/header';
import initMain from './components/main';

createFavicon();

initHeader();
initMain();
initFooter();

initGame();
