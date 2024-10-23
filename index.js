const questions = [
    {
        question: 'which is the largest animal in the world?',
        answers: [
            {text: 'Shark', correct: false},
            {text: 'Blue Whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false},
        ]
    },
    {
        question: 'which is the smallest country in the world?',
        answers: [
            {text: 'Vatican City', correct: true},
            {text: 'Bhutan', correct: false},
            {text: 'Nepal', correct: false},
            {text: 'Shri Lanka', correct: false},
        ]
    },
    {
        question: 'which is the largest desert in the world?',
        answers: [
            {text: 'Kalahari', correct: false},
            {text: 'Gobi', correct: false},
            {text: 'Sahara', correct: false},
            {text: 'Antarctica', correct: true},
        ]
    },
    {
        question: 'which is the smallest continent in the world?',
        answers: [
            {text: 'Asia', correct: false},
            {text: 'Asutralia', correct: true},
            {text: 'Arctic', correct: false},
            {text: 'Africa', correct: false},
        ]
    },
    {
        question: 'which is the largest ocean in the world?',
        answers: [
            {text: 'Atlantic', correct: false},
            {text: 'Indian', correct: false},
            {text: 'Pacific', correct: true},
            {text: 'Arctic', correct: false},
        ]
    },
    {
        question: 'which is the largest planet in the solar system?',
        answers: [
            {text: 'Mars', correct: false},
            {text: 'Jupiter', correct: true},
            {text: 'Saturn', correct: false},
            {text: 'Venus', correct: false},
        ]
    },
    {
        question: 'which is the largest river in the world?',
        answers: [
            {text: 'Nile', correct: false},
            {text: 'Amazon', correct: true},
            {text: 'Yangtze', correct: false},
            {text: 'Mississippi', correct: false},
        ]
    },
    {
        question: 'which is the largest mountain in the world?',
        answers: [
            {text: 'K2', correct: false},
            {text: 'Kangchenjunga', correct: false},
            {text: 'Mount Everest', correct: true},
            {text: 'Lhotse', correct: false},
        ]
    },
    {
        question: 'which is the largest forest in the world?',
        answers: [
            {text: 'Amazon Rainforest', correct: true},
            {text: 'Taiga', correct: false},
            {text: 'Boreal Forest', correct: false},
            {text: 'Tropical Rainforest', correct: false},
        ]
    },
    {
        question: 'which is the largest lake in the world?',
        answers: [
            {text: 'Caspian Sea', correct: true},
            {text: 'Lake Superior', correct: false},
            {text: 'Lake Victoria', correct: false},
            {text: 'Lake Huron', correct: false},
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
};

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
};

const resetState = () => {
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
};


const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

const handleNextButton = () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length - 1) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();

// nextButton.addEventListener('click', () => {
//     startQuiz();
// });