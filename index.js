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
    },
    {
        question: "If you were to sell your home, how much would you expect to get?",
        zero: "Rental",
        five: "$0 - $100,000",
        ten: "$100,000 - $225,000",
        fifteen: "$250,000 or more",
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
const loader = document.querySelector(".loader");

const cover = document.querySelector(".cover");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const submitName = document.getElementById("submit_name");


let currentQuiz = 0;
let score = 0;

submitName.addEventListener("click", () => {
    if (firstName.value && lastName.value && email.value) {
        submitName.textContent = "Thank you!";
        localStorage.setItem("User", JSON.stringify({firstName: firstName.value, lastName: lastName.value, email: email.value}));
        setTimeout(() => {
            cover.style.display = "none";
            renderQuiz();
        }, 1000);
    } else {
        alert("Please fill in all fields");
    }
});


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
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = Number(answerEl.id);
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer || answer === 0) {
        score += answer;
        console.log(score);
        currentQuiz++;

        if(currentQuiz < quizData.length) {
            setTimeout(() => {
                renderQuiz();
                loader.style.display = "none";
            }, 500);
            questionEl.innerText = "Loading Next Question...";
            loader.style.display = "flex";
            
        } else {
            setTimeout(() => {
                quiz.innerHTML = `
            <div class="quiz_header">
            <h2 id="question">Your YESUP score is: <span class="score_color">${score}</span></h2>
            <div class="results">
                            <h3 class="value">VALUE: 0 - 35</h3>
                            <p>Selling soon, rentals & barely used areas</p>
                            <h3 class="good">GOOD: 35 - 55</h3>
                            <p>Light to medium traffic, 12mil wear layer</p>
                            <h3 class="better">BETTER: 60 - 70</h3>
                            <p>Medium traffic, better feel 20mil wear layer</p>
                            <h3 class="best">BEST: 75 - 80</h3>
                            <p>High traffic & less upkeep</p>
                            <h3 class="npr">NO PET REGRET: 85+</h3>
                            <p>Superior cleanability, waterproof backing, highly scratch resistant</p>
                        </div>
            <button onclick="location.reload()">Reload</button>
            </div>
            `;
            results();
                loader.style.display = "none";
            }, 500);
            questionEl.innerText = "Loading Results...";
            loader.style.display = "flex";
        }
    }
});

function results() {
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const firstName = JSON.parse(localStorage.getItem("User")).firstName;
    const lastName = JSON.parse(localStorage.getItem("User")).lastName;
    const email = JSON.parse(localStorage.getItem("User")).email;
    const userId = email.replace("@", "").replace(".", "");

    if (score < 35) {
        document.querySelector(".value").classList += " highlight";
    } else if (score > 35 && score < 56) {
        document.querySelector(".good").classList += " highlight";
    } else if (score > 59 && score < 71) {
        document.querySelector(".better").classList += " highlight";
    } else if (score > 74 && score < 81) {
        document.querySelector(".best").classList += " highlight";
    } else if (score > 84) {
        document.querySelector(".npr").classList += " highlight";
    }
    writeUserData(firstName, lastName, score, time, date, email);
}

import firebase from "firebase/app";
import "https://yesup-cadef-default-rtdb.firebaseio.com"

function writeUserData(firstName, lastName, score, time, date, email) {
    let database = firebase.database();
    firebase.database().ref('users/' + userId).set({
        firstName: firstName,
        lastName: lastName,
        score: score,
        time: time,
        date: date,
        email, email
    });
}


