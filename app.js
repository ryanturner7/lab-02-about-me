'use strict';

// TODO: I want to prompt the user to guess the number 12
// and get four chances
var numCorrect = 0;

function questionOne() {
  var correctNumber = 5;
  var notDone = true;
  var guess;
  for (var attempts = 4; attempts > 0 && notDone; attempts--){
      guess = prompt('How many miles did I walk yesterday?');//get user input
      guess = parseInt(guess); //convert user input to number
      console.log(guess);
      if (guess == correctNumber){
        alert('You guessed the correct number!');
        numCorrect++;
        notDone = false;
      } else if (guess > 5 ){
          alert('Too high, guess again.');
        } else if (guess < 5 ){
          alert('Too low, guess again.');
      } else if (guess === 1){
          alert('You are out of guesses!');
        } else {
        alert('Guess again.');
      }
  }
}

var correctAnswer = ['Supra', 'Eclipse', 'M3', 'SLS AMG'];
var notDone = true;
var guess;
for (var attempts = 6; attempts > 0 && notDone; attempts--){
  var userResponse = 'You are incorrect!'
  guess = prompt('Can you guess one of my favorite cars?');
  for (var i=0; i < correctAnswer.length && notDone; i++ ){
    if(guess.trim().toLowerCase() === correctAnswer[i].trim().toLowerCase()){
      userResponse = 'You are correct';
      numCorrect++;
      notDone = false;
    } else if (attempts === 1){
      userResponse = 'You are out of guesses!';
    }
  }
  alert(userResponse)
  }
var vegan = prompt('Do you think Ryan is vegan?');
console.log('My answer is ', vegan);
if (vegan.trim().toLowerCase() == 'no') {
  alert('You are correct!');
  numCorrect++;
} else {
  alert('You dont know his life!');
}
var siblings = prompt('Does Ryan have siblings?');
console.log('My answer is', siblings);
if (siblings.trim().toLowerCase() == 'yes') {
  alert('Close but no cigar!');
} else {
  alert('You are correct!');
  numCorrect++;
}
var children = prompt('Does Ryan have children?');
console.log('My answer is', children);
if (children.trim().toLowerCase() == 'yes') {
  alert('You dont know him well!');
} else {
  alert('You remembered!');
  numCorrect++;
}
var music = prompt('Does Ryan love music?');
console.log('my answer is', music);
if (music.trim().toLowerCase() == 'yes') {
  alert('In fact, music is his life!');
  numCorrect++;
} else {
  alert('Everybody loves music!');
}
var coding = prompt('Is Ryan sufficient at coding?');
console.log('my answer is', coding);
if (coding.trim().toLowerCase() == 'yes') {
  alert('You are absolutely correct.');
  numCorrect++;
} else {
  alert('Incorrect, better than you!');
}

questionOne();

 alert('You got ' + numCorrect + ' out of 7 correct!');
