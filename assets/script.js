//screens
var endScreen= document.getElementById("quiz-end-screen")
var quizScreen= document.getElementById("quiz-container")
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
var startBtn= document.getElementById("start-button")
var submitScoreBtn= document.getElementById("submit-initials-button")

var questionsList=[
 {questionText: "This returns a true or false value:",
    answerText:["Boolean","Toolean","Yoolian","Hooligan"],
    correctAnswer: "Boolean"
 },
 {questionText: "You can use this to show something in the broswer console",
answerText:["console.report()","console.log()","document.querySelector.console()","document.console.log()"],
correctAnswer: "console.log()"
 },
 {questionText: "You use this to build a list in JavaScript",
answerText:["Function","List Item","Ordered List","Array"],
correctAnswer: "Array"
 }
]

function getChoices() {

} //push answers variable in questions object into each button

function getQuestion() {

} //adds questions text from object into page

function selectAnswer() {

} //function for when answer button is pressed, check if button text is equal to correctAnswer

function saveScore() {

} //used at the end to save score into high scores

function startQuiz() {

} //used when start button is clicked

function startTimer() {

} //begins decrementing the timer

function stopTimer() {

} //ends deccrementing the timer, saves the time left as a string variable

//start button pressed
  //h1 is addClass("hidden")
  //start-screen-text is addClass("hidden")
  //quiz-container is removeClass("hidden")

// first question generates
  //questionText is pulled from object and added to #question-text
  //answer[0] text is pulled into answer-1-button
  //answer[1] text is pulled into answer-2-button
  //answer[2] text is pulled into answer-3-button
  //answer[3] text is pulled into answer-4-button

//an answer button is selected

//it is right or wrong
 //right if button pressed text is equal to 'answer' variable in "question" object
 //if correct
  //pull next question
 //else
  //decrement timer 10
  //pull next question
//if no more questions, then display quiz-end-screen
  //addClass("hidden") to quiz-container
  //removeClass('hidden") to quiz-end-screen



//quiz-end-screen will display

//user submits initials into High Scores
  //initials are taken as a string and concact with strignified timer value then saved into local storage
  //when clicking high scores link at top, addClass("hidden") to all other fields except high-score-screen