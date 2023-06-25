var
var
var
var
var
var
var
var questionsList[
    {questionText: "Question text",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctAnswer: "Correct Answer Test"
},
    {questionText: "Question text",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctAnswer: "Correct Answer Test"
},
    {questionText: "Question text",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctAnswer: "Correct Answer Test"
}
]

function getChoices() //push answers variable in questions object into each button

function getQuestion() //adds questions text from object into page

function selectAnswer () //used when an answer button is selected

function saveScore() //used at the end to save score into high scores

function startQuiz() //used when start button is clicked

function startTimer() //begins decrementing the timer

function stopTimer() //ends deccrementing the timer, saves the time left as a string variable

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