
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const background = document.querySelector('body');

//==============================================================

buttonStop.setAttribute('disabled', true);

buttonStart.addEventListener('click', startColor);

function startColor() {
  
  const idSet = setInterval(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    background.style.backgroundColor = getRandomHexColor();
  }, 1000);

  buttonStart.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled', true);
  
  buttonStop.addEventListener('click', stopColor);

  function stopColor() {
  
    clearInterval(idSet);
  
    buttonStart.removeAttribute('disabled', true);
    buttonStop.setAttribute('disabled', true);
  }

}
//================================================================




