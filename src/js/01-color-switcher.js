const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const background = document.querySelector('body');

//==============================================================

buttonStop.setAttribute('disabled', '');

buttonStart.addEventListener('click', startColor);

function startColor() {
  console.log(buttonStart);
  idSet = setInterval(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    background.style.backgroundColor = getRandomHexColor();
  }, 1000);

  buttonStart.setAttribute('disabled', '');
  buttonStop.removeAttribute('disabled', '');
}
//================================================================

buttonStop.addEventListener('click', stopColor);

function stopColor() {
  console.log(buttonStop);
  clearInterval(idSet);

  buttonStart.removeAttribute('disabled', '');
  buttonStop.setAttribute('disabled', '');
}
