// Dependencies
var startButton = document.getElementById("start-button");
var answerButtons = document.getElementById("answer-buttons");
var answersABCD = document.getElementsByClassName("button");
var questionText = document.getElementById("question");
var timer = document.getElementById("timer");
var highScoreButton = document.getElementById("high-score-button");
var correctAnswer = document.getElementById("right-wrong");
var gameOver = document.getElementById("gameover-screen");

// Data
// set starting time
var timeLeft = 15;
var currentQuestion = 0;
var currentlyPlaying = true;
var playerScore;

// question data base 
var questionSet = [
    {
        question: "Which of the following is NOT a data type in javascript?",
        answers: [
            { text: "Number", correct: false },
            { text: "Boolean", correct: false },
            { text: "Variable", correct: true },
            { text: "String", correct: false },
        ]
    },
    {
        question: "What would be the result of 3+2+'7'?",
        answers: [
            { text: "12", correct: false },
            { text: "57", correct: true },
            { text: "39", correct: false },
            { text: "-2", correct: false },
        ]
    }
]

// Start Game
startButton.addEventListener('click', function () {
    console.log("Started");
    startButton.setAttribute("class", "hide");
    answerButtons.setAttribute("class", "show-buttons");
    shuffleQuestions(questionSet);
    countdownScore();
    runQuiz();
})

// timer function
function countdownScore() {
    var timeInterval = setInterval(function () {
        // display time left
        timer.textContent = timeLeft;
        // break once timer hits 0, otherwise decrement timer
        // end game if timer hits 0
        if (timeLeft <= 0) {
            currentlyPlaying = false;
            clearInterval(timeInterval)
            endGame();
            console.log(currentlyPlaying);
        } else {
            timeLeft--;
        }

    }, 1000);
}

// check if questions remaining, if not, set currentlyPlaying to false
function questionsRemaining() {
    if (currentQuestion > (questionSet.length - 1)) {
        currentlyPlaying = false;
        endGame();
        console.log(currentlyPlaying);
    }
}

// choose question to ask next

// Fisher-Yates algorithm for shuffling question array//
function shuffleQuestions(array) {
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    shuffledArray = array
    return shuffledArray
}

var testArray = ['1', '2', '3', '4', '5', '6', '7'];
var shuffleTest = shuffleQuestions(testArray);
console.log(shuffleTest);
console.log(testArray);


// define function for transition to game over screen 
function endGame() {
    answerButtons.setAttribute("class", "hide");
    gameOver.setAttribute("class", "show-screen");
    playerScore = timeLeft;
    questionText.innerText = "Game Over\n You scored " + playerScore + " point(s)";
}

// display question
function showQuestion() {
    // write text to question
    if (currentlyPlaying === false) {
        return
    } else {
        questionText.innerText = questionSet[currentQuestion].question;
        for (var i = 0; i < questionSet[currentQuestion].answers.length; i++) {
            // write answers to questions
            answersABCD[i].innerText = questionSet[currentQuestion].answers[i].text
            // indicate correct answer
            answersABCD[i].dataset.state = questionSet[currentQuestion].answers[i].correct
        }
    }
}

function runQuiz() {
    showQuestion();
    for (var i = 0; i < answersABCD.length; i++) {
        answersABCD[i].addEventListener('click', function () {
            if (this.dataset.state === "true") {
                correctAnswer.innerText = "Correct!"
                correctAnswer.style.color = "var(--correct-color)";
                timeLeft += 10;

            } else {
                correctAnswer.innerText = "Incorrect";
                correctAnswer.style.color = "var(--wrong-color)";
                timeLeft -= 10;
            }
            currentQuestion++;
            questionsRemaining();
            showQuestion()
        })
    }
}