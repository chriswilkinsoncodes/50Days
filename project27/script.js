const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

// const messages = ['msg one', 'msg two', 'msg three', 'msg four'];
const messages = [
  'goldendoodle',
  'cockapoo',
  'husky',
  'bulldog',
  'terrier',
  'chihuahua',
  'beagle',
  'collie',
  'pug',
  'weimaraner',
];
// const types = ['info', 'success', 'fail'];
const types = ['blue', 'green', 'red', 'purple', 'black', 'orange'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  //   notif.classList.add(type ? type : getRandomType());

  notif.style.color = type ? type : getRandomType();
  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 4000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
