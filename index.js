const quizData = [
    {
        question: "How many people live in the home?",
        zero: "1",
        five: "2",
        ten: "3 or 4",
        fifteen: "5 or more",
    },
    {
        question: "How many are children?",
        zero: "0",
        five: "1",
        ten: "2",
        fifteen: "3 or more",
    },
    {
        question: "Do you wear shoes in the home?",
        zero: "No",
        five: "Seldom",
        ten: "Occasionally",
        fifteen: "Often",
    },
    {
        question: "How often do you have guests over?",
        zero: "Never",
        five: "Seldom",
        ten: "Occasionally",
        fifteen: "Often",
    },
    {
        question: "How many guests at a time?",
        zero: "0",
        five: "1 to 2",
        ten: "3 to 4",
        fifteen: "5 or more",
    },
    {
        question: "How many cats in the home?",
        zero: "0",
        five: "1 to 2",
        ten: "3 to 4",
        fifteen: "5 or more",
    },
    {
        question: "How many dogs in the home?",
        zero: "0",
        five: "1",
        ten: "2",
        fifteen: "3 or more",
    },
    {
        question: "How many years until you plan on moving?",
        zero: "0",
        five: "1 to 2",
        ten: "3 to 10",
        fifteen: "11 or more",
    },
    {
        question: "How many years do you expect your flooring to last?",
        zero: "0",
        five: "1 to 5",
        ten: "6 to 10",
        fifteen: "11 or more",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const zeroText = document.getElementById("0_text");
const fiveText = document.getElementById("5_text");
const tenText = document.getElementById("10_text");
const fifteenText = document.getElementById("15_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function renderQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    zeroText.innerText = currentQuizData.zero;
    fiveText.innerText = currentQuizData.five;
    tenText.innerText = currentQuizData.ten;
    fifteenText.innerText = currentQuizData.fifteen;
};

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answerEls;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
