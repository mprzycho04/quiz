const quizQuestions = [
    {
      question: "Które miasto jest stolicą Francji?",
      rightAnswer: "Paryż",
      wrongAnswers: ["Berlin", "Londyn", "Madryt"]
    },
    {
      question: "Kto napisał tragedię 'Romeo i Julia'?",
      rightAnswer: "William Shakespeare",
      wrongAnswers: ["Charles Dickens", "Fyodor Dostoevsky", "Jane Austen"]
    },
    {
      question: "Jaka jest najdłuższa rzeka na świecie?",
      rightAnswer: "Amazonka",
      wrongAnswers: ["Nil", "Mississippi", "Jangcy"]
    },
    {
      question: "Ile planet znajduje się w naszym Układzie Słonecznym?",
      rightAnswer: "8",
      wrongAnswers: ["7", "9", "10"]
    },
    {
      question: "Kto był pierwszym prezydentem Stanów Zjednoczonych?",
      rightAnswer: "George Washington",
      wrongAnswers: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"]
    },
    {
      question: "Które morze leży na wschód od Półwyspu Iberyjskiego?",
      rightAnswer: "Morze Śródziemne",
      wrongAnswers: ["Morze Północne", "Morze Czarne", "Morze Bałtyckie"]
    },
    {
      question: "Które państwo jest największe pod względem powierzchni na świecie?",
      rightAnswer: "Rosja",
      wrongAnswers: ["Stany Zjednoczone", "Kanada", "Chiny"]
    },
    {
      question: "W którym roku odbyła się pierwsza misja księżycowa Apollo 11?",
      rightAnswer: "1969",
      wrongAnswers: ["1967", "1985", "1981"]
    },
    {
      question: "Które zwierzę jest największe na świecie?",
      rightAnswer: "Wieloryb błękitny",
      wrongAnswers: ["Słoń", "Hipopotam", "Gepard"]
    },
    {
      question: "Jakie państwo jest znane jako 'Kraina Wschodzącego Słońca'?",
      rightAnswer: "Japonia",
      wrongAnswers: ["Australia", "Brazylia", "Indie"]
    }
];
  

const startBtn = document.getElementById('startBtn');
const content = document.getElementById('content');

const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');

const questionElement = document.querySelector('.question');
const answers = document.querySelector('.answers');
const question_content = document.querySelector('.question-content');

var currentQuestion = 0;
var score = 0;

function start() {
    startBtn.setAttribute('disabled', 'disabled');
    questionElement.removeAttribute('data-disabled');
    answers.removeAttribute('data-disabled');
    question_content.removeAttribute('data-disabled');

    display(currentQuestion)
}

function nextQuestion() {
    questionElement.innerHTML += currentQuestion+1;
    question_content.textContent = quizQuestions[currentQuestion+1].question

    display(currentQuestion);
}

function display(currentQuestion) {

    questionElement.textContent += currentQuestion+1;
    question_content.textContent = quizQuestions[currentQuestion].question;

    const rightAnswer = quizQuestions[currentQuestion].rightAnswer;
    const wrongAnswer = quizQuestions[currentQuestion].wrongAnswers;

    const allAnswers = [rightAnswer, ...wrongAnswer];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function checkIfRight(selectedAnswer, rightAnswer) {
    if(selectedAnswer === rightAnswer) {
        console.log("Right");
        score++;
    } else {
        console.log("Wrong")
    }
    nextQuestion()
}

    shuffleArray(allAnswers);


    answerA.textContent = `A. ${allAnswers[0]}`;
    answerB.textContent = `B. ${allAnswers[1]}`;
    answerC.textContent = `C. ${allAnswers[2]}`;
    answerD.textContent = `D. ${allAnswers[3]}`;


answerA.addEventListener('click', () => {
        checkIfRight(allAnswers[0], rightAnswer);          
    });
    answerB.addEventListener('click', () => {
        checkIfRight(allAnswers[1], rightAnswer)              
    });
    answerC.addEventListener('click', () => {
        checkIfRight(allAnswers[2], rightAnswer)             
    });
    answerD.addEventListener('click', () => {
        checkIfRight(allAnswers[3], rightAnswer)           
});

    currentQuestion++
}

