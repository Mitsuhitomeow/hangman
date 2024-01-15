import soundOn from '/sound-on.svg';
import soundOff from '/sound-off.svg';
import backgroundMp3 from '/musicBackground.mp3';
import clickMp3 from '/musicMouseClick.mp3';

const audio = new Audio(backgroundMp3);
const mouseClick = new Audio(clickMp3);
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function trimAudio(audioElement) {
  audioElement.addEventListener('canplaythrough', () => {
    const source = audioContext.createBufferSource();
    const arrayBuffer = audioContext.createBuffer(
      1,
      audioContext.sampleRate * 0.33,
      audioContext.sampleRate
    );
    source.buffer = arrayBuffer;
    source.connect(audioContext.destination);
    source.start();
  });

  audioElement.load();
}

export default function toggleSound() {
  const img = document.querySelector('[class*=header__img_sound]');
  img.addEventListener('click', () => {
    if (img.getAttribute('src') === soundOn) {
      img.setAttribute('src', soundOff);
      img.classList.remove('sound');

      trimAudio(mouseClick);
      audio.pause();
      mouseClick.play();
    } else {
      img.setAttribute('src', soundOn);
      img.classList.add('sound');

      trimAudio(mouseClick);
      audio.play();
      mouseClick.play();
    }
  });

  audio.addEventListener('ended', () => {
    setTimeout(() => audio.play(), 1000);
  });
}
