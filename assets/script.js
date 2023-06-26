//screens
var endScreen= document.getElementById("quiz-end-screen")
var quizScreen= document.getElementById("quiz-container")
var startScreen= document.getElementById("start-screen-text")
var scoreScreen= document.getElementById("high-scores-screen")

//visual display elements
var timeRemainingText= document.getElementById("time-remaining-text")
var finalScore= document.getElementById("correct-answers-text")
var questionDisplay= document.getElementById("question-text")
var h1= document.querySelector("h1")

//buttons
var answer1Btn= document.getElementById("answer-1-button")
var answer2Btn= document.getElementById("answer-2-button")
var answer3Btn= document.getElementById("answer-3-button")
var answer4Btn= document.getElementById("answer-4-button")
var answerButtons= document.querySelectorAll(".answer-button")
var startBtn= document.getElementById("start-button")
var submitScoreBtn= document.getElementById("submit-initials-button")
var viewScoresBtn= document.getElementById("view-high-scores")

//needed JS variables
var currentQuestionNum= 0
var timeRemaining= 60
var timerInterval;

var questionsList=[
 {questionText: "This returns a true or false value:",
    answerText:["Boolean","Toolean","Yoolian","Hooligan"],
    correctAnswer: "Boolean"
 },
 {questionText: "You can use this to show something in the broswer console using JavaScript",
answerText:["console.report()","console.log()","document.querySelector.console()","document.console.log()"],
correctAnswer: "console.log()"
 },
 {questionText: "You use this to build a list in JavaScript",
answerText:["Function","List Item","Ordered List","Array"],
correctAnswer: "Array"
 }
]

var currentQuestion= questionsList[currentQuestionNum]

function getChoices() {
     answer1Btn.textContent= currentQuestion.answerText[0]
     answer2Btn.textContent= currentQuestion.answerText[1]
     answer3Btn.textContent= currentQuestion.answerText[2]
     answer4Btn.textContent= currentQuestion.answerText[3]
} //push answers variable in questions object into each button

function getQuestion() {
 questionDisplay.innerText= currentQuestion.questionText
} //adds questions text from object into page

function displayNextQuestion () {
 if (currentQuestionNum<questionsList.length){
 getChoices()
 getQuestion()
 } else {
    quizScreen.classList.add("hidden")
    endScreen.classList.remove("hidden")
    clearInterval(timerInterval)
 }
 finalScore.innerText= timeRemaining
} //controls whether to generate next question, If no more questions, stopTimer(), change hidden class around

function selectAnswer(event) {
    var selectedAnswer= event.target.innerText

    currentQuestion = questionsList[currentQuestionNum]

    if (selectedAnswer==currentQuestion.correctAnswer) {
        if (currentQuestionNum<questionsList.length-1) {
            currentQuestionNum++
            currentQuestion= questionsList[currentQuestionNum]}
            else { 
                clearInterval(timerInterval)
                timeRemainingText.textContent = timeRemaining
            }
        displayNextQuestion()
    } else{
        timeRemaining-=10
         alert("Wrong Answer!")
    } console.log(typeof selectedAnswer) 
     console.log(typeof currentQuestion.correctAnswer)
     console.log(selectedAnswer)
     console.log(currentQuestion.correctAnswer)
} //function for when answer button is pressed, check if button text is equal to correctAnswer

function saveScore() {
 //user submits initials into High Scores
  //initials are taken as a string and concact with strignified timer value then saved into local storage
  //when clicking high scores link at top, addClass("hidden") to all other fields except high-score-screen
} //used at the end to save score into high scores

function startQuiz() {
  //h1 is addClass("hidden")
  //start-screen-text is addClass("hidden")
  //quiz-container is removeClass("hidden")
 timeRemainingText.textContent= timeRemaining
 startTimer()
 displayNextQuestion()
} //used when start button is clicked

function startTimer() {
    timeRemainingText.textContent = timeRemaining

    timerInterval = setInterval(function() {
    
        if (timeRemaining <= 0) {
          clearInterval(timerInterval)
        
        } else {
          timeRemaining-=1
          timeRemainingText.textContent = timeRemaining
        }
      }, 1000)
    } //begins decrementing the timer

 
function viewHighScores() {
    //used at the start screen to view high scores, set everything but quiz end screen to addClass("hidden")
}


startBtn.addEventListener('click', startQuiz)
for (var i=0; i<answerButtons.length;i++) {answerButtons[i].addEventListener("click", selectAnswer);}//add a for loop to add the event listener to each button
submitScoreBtn.addEventListener("click", saveScore)