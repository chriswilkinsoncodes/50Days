const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Scruffy',
    position: 'Cockapoo',
    photo: 'images/cockapoo.jpg',
    text: "At first I was a little nervous at my grooming appointments but now I'm super relaxed and actually enjoy the total spa experience! Damian, a Certified Dog Groomer reassure me every step of the way and pays close attention to all my needs. He is very professional and follows all my grooming instructions. He's even very patient with some of my quirky 'behaviors'.",
  },
  {
    name: 'Cele',
    position: 'Goldendoodle',
    photo: 'images/goldendoodle.jpg',
    text: "I'm 7 years old and I have been going to Damian's since I was a puppy. The fam says I always comes home looking beautiful and happy. Damian is a fantastic groomer. Definitely a true professional.  He really cares for all of us dogs that go to him. I can't even imagine going to another groomer.",
  },
  {
    name: 'Sasha',
    position: 'Pomeranian',
    photo: 'images/pomeranian.jpg',
    text: "Damian's is a wonderful place to go for my grooming. He's completely mindful of what I want done and showers me with attention. I love going there and then strutting my stuff at the park as I look completely fabulous!",
  },
  {
    name: 'Iida',
    position: 'Sheepdog',
    photo: 'images/sheepdog.jpg',
    text: "Damian is the best dog groomer in the city! Even though I'm a bit of a Nervous Nelly, I'm so calm and happy during my grooming. I'm never going anywhere else now that I have been to Damian's!",
  },
  {
    name: 'Hana',
    position: 'Japanese Spitz',
    photo: 'images/japanese_spitz.jpg',
    text: "I just wanted to send a shout out to sincerely thank you for making my visit to Damian's a truly enjoyable experience. I can be a little shy sometimes but your kindness and care were wonderful. The pack at home are all thrilled with my fancy 'do'! Can't wait for my next visit.",
  },
];

let idx = 1; // because the first one, [0], is already in the html

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 5000);
