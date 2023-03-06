import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datePicker = document.querySelector('#date-picker');
const dateInput = document.querySelector('.date-input')
const dateUp = document.querySelector('.date-up');
const dateDown = document.querySelector('.date-down')
const calendarSvg = document.querySelector('.icon-Frame');
let selectedDate;

const options = {
  dateFormat: 'd/m/Y',
  locale: 'en',
  onChange: function (selectedDates) {
    selectedDate = selectedDates[0];
   
  },
};
flatpickr(datePicker, options);

dateInput.addEventListener('click', changeSvg)
  function changeSvg(){
    if(selectedDate > 0) {
      dateInput.style.backgroundcolor = '#4440F6';
    }
    //dateDown.classList.add('active');
    //dateInput.classList.add('active');
    calendarSvg.style.fill('#F8F8F8')
  }

