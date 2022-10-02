// DATA
var startButton = document.getElementById("start-button");
var answerButtons =document.getElementById("answer-buttons");
var question = document.getElementById("question");
var timer = document.getElementById("timer");
var highScoreButton = document.getElementById("high-score-button");
// set starting time
var timeLeft = 5;

// question data base 
var questionSet = [
    {
        question1: {
            question: "Which of the following is NOT a data type in javascript?",
            answers: [
                {text: "Number", correct: false},
                {text: "Boolean", correct: false},
                {text: "Variable", correct: true},
                {text: "String", correct: false},
            ]
        }
    },
    {   question2: { 
            question: "What would be the result of 3+2+'7'?",
            answers: [
                {text: "12", correct: false},
                {text: "57", correct: true },
                {text: "39", correct: false},
                {text: "-2", correct: false}
            ]

        }

    }
]

// Start Game Function
startButton.addEventListener('click', function(){
    console.log("Started");
    startButton.setAttribute("class","hide");
    answerButtons.setAttribute("class","show-buttons");
    question.textContent= "Question 1";
    countdownScore();

})

// Set up basic timer
function countdownScore () {
    var timeInterval = setInterval(function () {
        // display time left
        timer.textContent = timeLeft;
        // break once timer hits 0
        // otherwise decrement timer
        if(timeLeft === 0) {
            clearInterval(timeInterval);
        } else {
            timeLeft--;
            }

    }, 1000);
}
    // TODO when correct answer timer +10
    // TODO when incorrect answer timer -10

// choose question to ask next
// Fisher-Yates algorithm for shuffling question array//
function setNextQuestion() {

}

// display question
function showQuestion() {

}