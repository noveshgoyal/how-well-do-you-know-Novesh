var readlinesync = require('readline-sync');
var userName = readlinesync.question("What's your name? ");   // input user's name
var score = 0;

console.log(`Welcome ${userName} to DO YOU KNOW Novesh?`);  // Welcome message

var questions = [{
  question: "What is my birth-month? ",
  answer: "july"
}, {
  question: "In which state I was born? ",
  answer: "maharashtra"
}, {
  question: "Which language is my mother tongue? ",
  answer: "hindi"
}, {
  question: "Which is my favourite sport? ",
  answer: "Cricket"
}, {
  question: "Which is my favourite season? ",
  answer: "winter"
}]

function play(arr) {
  for (var i = 0; i < arr.length; i++) {
    var userAns = readlinesync.question(arr[i].question);
    if (userAns.toUpperCase() === arr[i].answer.toUpperCase()) {
      console.log(`awesome!`);
      score += 1;
    }
    else console.log(`wrong!`);
    console.log(`current score: ${score}`);
    console.log("-----------------");
  }

}
play(questions);
