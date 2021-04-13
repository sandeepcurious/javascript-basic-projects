const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2021, 3, 12, 22, 32, 0);
const futureDate=new Date(tempYear,tempMonth,tempDay+9);
const date = futureDate.getDate();
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

const month = months[futureDate.getMonth()];

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date}
 ${month} ${year} ${hours}:${mins}am`;

// future time in Millisecs
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneMinute = 60000;//millisecs
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMinute);
  let secs = Math.floor((t % oneMinute) / 1000);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  // set values array
  const values = [days, hours, mins, secs];

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();