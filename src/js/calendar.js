import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datePicker = document.querySelector('#date-picker');


const options = {
    dateFormat: "d/m/Y",
    locale: "en",
    onChange: function(selectedDates) {
       
        const selectedDate = selectedDates[0];
                
}};

flatpickr(datePicker, options);

const newsList = document.querySelector('#newsList');
datePicker.addEventListener('change', async (e) => {
  
  const selectedDate = e.target.value;
  console.log(selectedDate);
  
  const formattedDate = selectedDate.split('/').reverse().join('-');

  
  const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:${formattedDate}&api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7`);
  const data = await response.json();
 
  
});
