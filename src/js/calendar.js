import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datePicker = document.querySelector('#date-picker');

const options = {
  dateFormat: 'd/m/Y',
  locale: 'en',
  onChange: function (selectedDates) {
    const selectedDate = selectedDates[0];
  },
};

flatpickr(datePicker, options);
