const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onBtnSubmit);
function onBtnSubmit(evt) {
  evt.preventDefault();

  let delay = Number(evt.currentTarget.delay.value);
  const step = Number(evt.currentTarget.step.value);
  const amount = Number(evt.currentTarget.amount.value);

  const position = 0;

  function generateProm(amount) {
    for (let pos = 1; pos <= amount; pos += 1) {
      function createPromise(position, delay) {
        const shouldResolve = Math.random() > 0.3;

        const myProm = new Promise((resolve, reject) => {
          const shouldResolve = Math.random() > 0.3;

          setTimeout(() => {
            if (shouldResolve) {
              resolve('Успішно');
            } else {
              reject('Невдало');
            }
          }, delay);
        });

        myProm
          .then(succsess =>
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
          )
          .catch(promError =>
            console.log(`❌ Rejected promise ${position} in ${delay}ms`)
          );
      }
      createPromise(pos, delay);

      delay += step;
    }
  }
  generateProm(amount);
}
