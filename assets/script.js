//screens
var endScreen= document.getElementsByClassName("quiz-end-screen")
var quizScreen= document.getElementsByClassName("quiz-container")
var startScreen= document.getElementById("start-screen-text")
var scoreScreen= document.getElementById("high-scores-screen")

//visual display elements
var timeRemaining= document.getElementById("time-remaining-text")
var finalScore= document.getElementById("correct-answers-text")
var questionDisplay= document.getElementById("question-text")

//buttons
var answer1Btn= document.getElementById("answer-1-button")
var answer2Btn= document.getElementById("answer-2-button")
var answer3Btn= document.getElementById("answer-3-button")
var answer4Btn= document.getElementById("answer-4-button")
var answerButtons= document.getElementsByClassName("answer-button")
var startBtn= document.getElementById("start-button")
var submitScoreBtn= document.getElementById("submit-initials-button")
var viewScoresBtn= document.getElementById("view-high-scores")

//needed JS variables
var currentQuestionNum= 0

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

function getChoices() {
    var currentQuestion= questionsList[currentQuestionNum]

     answer1Btn.textContent= currentQuestion(answerText[0])
     answer2Btn.textContent= currentQuestion(answerText[1])
     answer3Btn.textContent= currentQuestion(answerText[2])
     answer4Btn.textContent= currentQuestion(answerText[3])
 
} //push answers variable in questions object into each button, increment currentQuestionNum by 1 in selectAnswer

function getQuestion() {
 //takes questionText and puts it into #question-text
} //adds questions text from object into page

function displayNextQuestion () {
 if (currentQuestionNum<questionsList.length){
 getChoices()
 getAnswer()
 } else {
    quizScreen.addClass("hidden")
    endScreen.removeClass("hidden")
    stopTimer()
 }
} //controls whether to generate next question, If no more questions, stopTimer(), change hidden class around

function selectAnswer(event) {
    var currentQuestion= questionsList[currentQuestionNum]
    var selectedAnswer= event.target.textContent

    if (selectedAnswer===currentQuestion.correctAnswer) {
        currentQuestionNum++
        displayNextQuestion()
    } else{
        timeRemaining-10
        currentQuestionNum++
        displayNextQuestion()
    }
} //function for when answer button is pressed, check if button text is equal to correctAnswer

function saveScore() {
 //user submits initials into High Scores
  //initials are taken as a string and concact with strignified timer value then saved into local storage
  //when clicking high scores link at top, addClass("hidden") to all other fields except high-score-screen
} //used at the end to save score into high scores

function startQuiz() {
    //start button pressed
  //h1 is addClass("hidden")
  //start-screen-text is addClass("hidden")
  //quiz-container is removeClass("hidden")
 startTimer()
} //used when start button is clicked

function startTimer() {
 
} //begins decrementing the timer

function stopTimer() {
 
} //ends deccrementing the timer, saves the time left as a string variable
 
function viewHighScores() {
    //used at the start screen to view high scores, set everything but quiz end screen to addClass("hidden")
}


startBtn.addEventListener('click', startQuiz())
answerButtons.addEventListener("click", selectAnswer())
submitScoreBtn.addEventListener("click", saveScore())