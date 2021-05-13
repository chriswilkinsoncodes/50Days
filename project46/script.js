const quizData = [
  {
    question: 'What is a dog’s most highly developed sense?',
    a: 'Touch',
    b: 'Sight',
    c: 'Smell',
    d: 'Taste',
    correct: 'c',
  },
  {
    question: 'What is the most popular breed of dog in Canada?',
    a: 'Poodle',
    b: 'Labrador Retriever',
    c: 'French Bulldog',
    d: 'Beagle',
    correct: 'b',
  },
  {
    question: 'Which is the smallest of all the dog breeds?',
    a: 'Chihuahua',
    b: 'Bolognese',
    c: 'Shih Tzu',
    d: 'Australian Terrier',
    correct: 'a',
  },
  {
    question: "Which is Queen Elizabeth II's (England) favorite dog breed?",
    a: 'Basenji',
    b: 'German Shepherd',
    c: 'Corgi',
    d: 'Golden Retriever',
    correct: 'c',
  },
  {
    question: 'What is the most common training command taught to dogs?',
    a: 'Roll Over',
    b: 'Stay',
    c: 'Fetch',
    d: 'Sit',
    correct: 'd',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>`;
    }
  }
});
