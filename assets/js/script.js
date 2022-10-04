// Dependencies
var startButton = document.getElementById("start-button");
var answerButtons =document.getElementById("answer-buttons");
var answersABCD = document.getElementsByClassName("button");
var questionText = document.getElementById("question");
var timer = document.getElementById("timer");
var highScoreButton = document.getElementById("high-score-button");
var correctAnswer = document.getElementById("right-wrong")

// Data
// set starting time
var timeLeft = 5;
var currentQuestion = 0;

// question data base 
var questionSet = [
    {
        question: "Which of the following is NOT a data type in javascript?",
        answers: [
            {text: "Number", correct: false},
            {text: "Boolean", correct: false},
            {text: "Variable", correct: true},
            {text: "String", correct: false},
         ]
    },
    {
        question: "What would be the result of 3+2+'7'?",
        answers: [
            {text: "12", correct: false},
            {text: "57", correct: true },
            {text: "39", correct: false},
            {text: "-2", correct: false},
            ]
    }
]

// Start Game Function
startButton.addEventListener('click', function(){
    console.log("Started");
    startButton.setAttribute("class","hide");
    answerButtons.setAttribute("class","show-buttons");
    shuffleQuestions(questionSet);
    showQuestion();
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

// choose question to ask next

// Fisher-Yates algorithm for shuffling question array//
function shuffleQuestions(array) {
    for (var i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    shuffledArray = array
    return shuffledArray
}

var testArray = ['1','2','3','4','5','6','7'];
var shuffleTest = shuffleQuestions(testArray);
console.log(shuffleTest);
console.log(testArray);

function setNextQuestion() {

}

// display question
function showQuestion() {
    // write text to question
    questionText.innerText = questionSet[currentQuestion].question;
    for (var i = 0; i < questionSet[currentQuestion].answers.length; i++) {
        // write answers to questions
        answersABCD[i].innerText = questionSet[currentQuestion].answers[i].text
        // indicate correct answer
        answersABCD[i].dataset.state = questionSet[currentQuestion].answers[i].correct   
    }
    
}

for (var i=0; i < answersABCD.length; i++) {
    answersABCD[i].addEventListener('click', function() {
        console.log('clicked');
        if( this.dataset.state === "true") {
            correctAnswer.innerText = "Correct!"
            correctAnswer.style.color= "var(--correct-color)";
            timeLeft +=10;
            currentQuestion++;
            showQuestion();
        } else {
            correctAnswer.innerText = "Incorrect";
            correctAnswer.style.color = "var(--wrong-color)";
            timeLeft -=10;
            currentQuestion++;
            showQuestion()
        }
        
    })
}