const header1 = document.getElementById('header1');
const title1 = document.getElementById('title1');
const excerpt1 = document.getElementById('excerpt1');
const profile_img1 = document.getElementById('profile_img1');
const name1 = document.getElementById('name1');
const date1 = document.getElementById('date1');

const header2 = document.getElementById('header2');
const title2 = document.getElementById('title2');
const excerpt2 = document.getElementById('excerpt2');
const profile_img2 = document.getElementById('profile_img2');
const name2 = document.getElementById('name2');
const date2 = document.getElementById('date2');

const header3 = document.getElementById('header3');
const title3 = document.getElementById('title3');
const excerpt3 = document.getElementById('excerpt3');
const profile_img3 = document.getElementById('profile_img3');
const name3 = document.getElementById('name3');
const date3 = document.getElementById('date3');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header1.innerHTML =
    '<img src="images/belo_horizonte_dog_1.jpg" alt="belo horizonte dog" />';
  title1.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt1.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus.';
  profile_img1.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/2.jpg" alt="random profile img"/>';
  name1.innerHTML = 'Katelyn Eastwood';
  date1.innerHTML = '2021 Jan 4';

  header2.innerHTML =
    '<img src="images/border_collie.jpg" alt="border collie" />';
  title2.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt2.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus.';
  profile_img2.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/16.jpg" alt="random profile img"/>';
  name2.innerHTML = 'Eilidh Green';
  date2.innerHTML = '2021 Jan 4';

  header3.innerHTML =
    '<img src="images/belo_horizonte_dog_2.jpg" alt="belo horizonte dog" />';
  title3.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt3.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus.';
  profile_img3.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/31.jpg" alt="random profile img"/>';
  name3.innerHTML = 'Trent Rose';
  date3.innerHTML = '2021 Jan 4';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
