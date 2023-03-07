import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { filterByDateMostViwed } from './fetchData/filters';

const datePicker = document.querySelector('#date-picker');

const options = {
  dateFormat: 'd/m/Y',
  locale: 'en',
  // onChange: function (selectedDates) {
  //   const selectedDate = selectedDates[0];
  //   // console.log('selectedDate:', selectedDate);
  //   // datePicker.addEventListener('change', async e => {
  //   //   const selectedDate = e.target.value;

  //   //   const formattedDate = selectedDate.split('/').reverse().join('-');
  //   //   console.log('formattedDate:', formattedDate);
  //   //   const filterByDateViwed = await filterByDateMostViwed(formattedDate);
  //   //   return filterByDateViwed;
  //   // });
  // },
};

flatpickr(datePicker, options);
