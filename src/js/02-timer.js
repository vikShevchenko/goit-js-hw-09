
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//======================================================================

//Отримуємо доступ до елементів DOM
const refs = {
  getTime: document.querySelector('#datetime-picker'),
  day: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  butStart: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
};

//======================================================================
refs.butStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const deadline = Date.parse(selectedDates[0]);
    const actual = Date.parse(new Date());

    if (deadline < actual) {
      window.alert('Please choose a date in the future');
    } else {
      refs.butStart.removeAttribute('disabled', true);

      refs.butStart.addEventListener('click', start);

      function start() {
        const int = setInterval(() => {
          const leftTime = deadline - Date.parse(new Date());

          if (deadline - Date.parse(new Date()) <= 0) {
            clearInterval(int);
          }

          function convertMs(ms) {
            // Number of milliseconds per unit of time
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            // Remaining days
            const days = Math.floor(ms / day);
            // Remaining hours
            const hours = Math.floor((ms % day) / hour);
            // Remaining minutes
            const minutes = Math.floor(((ms % day) % hour) / minute);
            // Remaining seconds
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            return { days, hours, minutes, seconds };
          }

          refs.day.innerHTML = convertMs(leftTime).days;
          refs.hours.innerHTML = convertMs(leftTime)
            .hours.toString()
            .padStart(2, '0');
          refs.minutes.innerHTML = convertMs(leftTime)
            .minutes.toString()
            .padStart(2, '0');
          refs.seconds.innerHTML = convertMs(leftTime)
            .seconds.toString()
            .padStart(2, '0');
        }, 1000);
      }
    }
  },
};

flatpickr(refs.getTime, options);

refs.timer.style.cssText = `
width: 600px;
font-size: 40px;
display: flex;
margin-left:350px;
text-shadow: 1px 1px 6px, #3939397a -1px -1px 6px;
-webkit-text-stroke: 1px #39393924;
-webkit-text-fill-color: #959ea9d4;


`;


