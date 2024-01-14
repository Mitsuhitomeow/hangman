import soundOn from '/sound-on.svg'
import soundOff from '/sound-off.svg'

export default function toggleSound() {
  const img = document.querySelector('[class*=header__img_sound]')

  img.addEventListener('click', () => {
    if (img.getAttribute('src') === soundOn) {
      img.setAttribute('src', soundOff)
      img.classList.remove('sound');
    } else {
      img.setAttribute('src', soundOn)
      img.classList.add('sound');
    }
  })
}