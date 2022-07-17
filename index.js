//ex - 13 - 15
// import chalk from 'chalk';
// console.log(chalk.blue('Hello'));

var readlineSync = require("readline-sync");
var score = 0
var userName = readlineSync.question("May I have your name? ");

console.log("\nWelcome " + userName + " to the 'Quiz World! Let\'s see How Much You Know Me'\n");

console.log("Please Note! Answer will be case sensetive so type your answer in lowercase only and also one extra space will make your answer wrong so Play Wisely...\n");

console.log("All The Best!\n")

//Array of Objects - Questions
var questions = [{
  question: "Which is my favourite IPL Team? \n",
  answer: "rcb"
},
{
  question: "What is my favourite outdoor game? \n",
  answer: "cricket"
},
{
  question: "What is my favourite Dish? \n",
  answer: "pav bhaji"
},
{
  question: "Who is my childhood friend? \n",
  answer: "krishna"
},
{
  question: "Who is my favourite cricketer? \n",
  answer: "virat kohli"
},
{
  question: "What is my all time favourite Movie? \n",
  answer: "harry potter"
},
{
  question: "Who is my idol? \n",
  answer: "rahul dravid"
},
{
  question: "Which is my favourite series? \n",
  answer: "game of thrones"
},
{
  question: "What is my Dream Place to visit? \n",
  answer: "london"
},
{
  question: "What is my favourite song? \n",
  answer: "pal do pal ka shayar hoon"
}];

//Array of Objects - Scores
var scores = [{
  name: "Sourabh",
  score: "10"
},{
  name: "Harishankar Thakur",
  score: "01"
},{
  name: "Ruwaida Shaikh",
  score: "05"
},{
  name: "Komal",
  score: "08"
},{
  name: "Manav",
  score: "02"
},{
  name: "Aditi",
  score: "02"
},{
  name: "Krishna",
  score: "01"
},{
  name: "Gaurav",
  score: "02"
}];


function play(question, answer){
  var question = readlineSync.question(question);
  if(question === answer){
    console.log("Cool! You are Right");
    score = score + 1;
  }else{
    console.log("Oops! Wrong Answer");
    console.log("Correct answer is: " + currentQuestion.answer);
  }
  console.log("---------------------");
}

for(var i=0; i < questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("\nYour score is: ", score);
console.log("Highscore is of " + scores[0].name + ": " + scores[0].score);
console.log("Please Send the ScreenShot after completing...");