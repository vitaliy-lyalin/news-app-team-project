import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datePicker = document.querySelector('#date-picker');
const dateInput = document.querySelector('.date-input');

const dateUp = document.querySelector('.date-up');
const dateDown = document.querySelector('.date-down');
const calendarSvg = document.querySelector('.date-down');

let selectedDate;

const options = {
  dateFormat: 'd/m/Y',
  locale: 'en',
  onChange: function (selectedDates) {
    selectedDate = selectedDates[0];

    console.log(dateInput);
    datePicker.style.backgroundColor = '#4440F6';
    datePicker.style.color = '#F8F8F8';
  },
};
flatpickr(datePicker, options);

dateInput.addEventListener('click', changeSvg);
function changeSvg() {
  dateInput.style.color = '#F8F8F8';
}
