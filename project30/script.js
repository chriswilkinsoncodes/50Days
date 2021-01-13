const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Practice Aloha Around The World';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let idx = 3;
let speed = 300 / speedEl.value;

writeText();

async function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    await delay(750);
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
