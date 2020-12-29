const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const html = document.querySelector('html');
const icon = document.getElementById('theme-icon');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggle.addEventListener('click', function () {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    if (icon.classList.contains('fa-sun')) {
      icon.classList.remove('fa-sun');
    }
    icon.classList.add('fa-moon');
  } else {
    html.classList.add('dark');
    if (icon.classList.contains('fa-moon')) {
      icon.classList.remove('fa-moon');
    }
    icon.classList.add('fa-sun');
  }
});

const time = new Date();
const seconds = time.getSeconds();
let secondHand = 6 * seconds;

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const hourHand = 30 * hoursForClock + minutes / 2;
  secondHand += 6;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourHand}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${6 * minutes}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondHand}deg)`;

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();
setInterval(setTime, 1000);
