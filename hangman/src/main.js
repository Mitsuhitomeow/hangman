import initFooter from './components/footer';
import initInfoField from './components/gameInfoSection';
import initHeader from './components/header';
import initGallows from './components/imageSection';
import initKeyboard from './components/keyboardSection';
import initGameFunctionality from './components/keyboardSection/initGameFunctionality';
import initMain from './components/main';
import './style/main.scss';

initHeader();
initMain();
initFooter();

initGallows();
initInfoField();
initKeyboard();

initGameFunctionality();
