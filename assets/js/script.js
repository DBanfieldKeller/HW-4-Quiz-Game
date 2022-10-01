// DATA
var startButton = document.getElementById("start-button");
var answerButtons =document.getElementById("answer-buttons");
var question = document.getElementById("question");

// Start Game Function
startButton.addEventListener('click', function(){
    console.log("Started");
    startButton.setAttribute("class","hide");
    answerButtons.setAttribute("class","show-buttons");
    question.innerHTML= "Question 1";

})