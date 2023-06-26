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
var timer= document.getElementById("time-header")

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
 }
 finalScore.innerText= timeRemaining
}

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
                quizScreen.classList.add("hidden")
                endScreen.classList.remove("hidden")
                timer.classList.add("hidden")
                viewScoresBtn.classList.add("hidden")
            }
        displayNextQuestion()
    } else{
        timeRemaining-=10
        alert("Wrong Answer!")
    }
} //function for when answer button is pressed, check if button text is equal to correctAnswer

function saveScore() {
 //user submits initials into High Scores
  //initials are taken as a string and concact with strignified timer value then saved into local storage
  //run viewHighScores to hide all other elements
} //used at the end to save score into high scores

function startQuiz() {
 h1.classList.add("hidden")
 startScreen.classList.add("hidden")
 quizScreen.classList.remove("hidden")
 timeRemainingText.textContent= timeRemaining
 startTimer()
 displayNextQuestion()
} //used when start quiz button is clicked

function startTimer() {
    timeRemainingText.textContent = timeRemaining

    timerInterval = setInterval(function() {
    
        if (timeRemaining <= 0) {
         alert("Time's Up!")
         viewHighScores()
         finalScore.innerText=0
        } else {
          timeRemaining-=1
          timeRemainingText.textContent = timeRemaining
        }
      }, 1000)
} //begins decrementing the timer, if time=0, stops timer, displays alert and runs viewHighScores

function viewHighScores() {
    h1.classList.add("hidden")
    quizScreen.classList.add("hidden")
    endScreen.classList.add("hidden")
    startScreen.classList.add("hidden")
    timer.classList.add("hidden")
    scoreScreen.classList.remove("hidden")
    endScreen.classList.remove("hidden")
    viewScoresBtn.classList.add("hidden")
    clearInterval(timerInterval) //stops timer from continuing to run in the background
}

startBtn.addEventListener('click', startQuiz)
for (var i=0; i<answerButtons.length;i++) {answerButtons[i].addEventListener("click", selectAnswer);}//add a for loop to add the event listener to each answer button
submitScoreBtn.addEventListener("click", saveScore)
viewScoresBtn.addEventListener("click", viewHighScores)