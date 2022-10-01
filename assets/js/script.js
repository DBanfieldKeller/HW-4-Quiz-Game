// DATA
var startButton = document.getElementById("start-button");
var answerButtons =document.getElementById("answer-buttons");
var question = document.getElementById("question");
var timer = document.getElementById("timer");
var highScoreButton = document.getElementById("high-score-button");
// set starting time
var timeLeft = 5;

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
