'use strict';

console.log('this class rules!');

var numberRight = 0;

var FavAnimal;
var LionsVsGorillas;
var LionsParkour;
var CoolParkour;
var MyLastName;

FavAnimal = prompt('Do you think lions are my favorite animal?');
console.log('My answer to "Do you think lions are my favorite animal?" is', FavAnimal);

if (FavAnimal.trim().toLowerCase() == 'yes' || FavAnimal.trim().toLowerCase() == 'y'){
  alert('You\'re right! Lions are totally boss.');
  numberRight++;
} else if (FavAnimal.trim().toLowerCase() == 'no' || FavAnimal.trim().toLowerCase() == 'n'){
  alert('What? How could lions not be my favorite animal?');
} else {
  alert('You talkin\' that trash?');
};

LionsVsGorillas = prompt('Do you think lions can defeat gorillas?');
console.log('My answer to "Do you think lions can defeat gorillas?" is', LionsVsGorillas);

if (LionsVsGorillas.trim().toLowerCase() == 'yes' || LionsVsGorillas.trim().toLowerCase() == 'y'){
  alert('Obviously! Lions are superior to gorillas in every way');
  numberRight++;
} else if (LionsVsGorillas.trim().toLowerCase() == 'no' || LionsVsGorillas.trim().toLowerCase() == 'n'){
  alert('Uh. Have you ever seen a lion? Also gorillas are lame.');
} else {
  alert('You talkin\' that trash?');
};

LionsParkour = prompt('Do you think lions like parkour?');
console.log('My answer to "Do you think lions like parkour?" is', LionsParkour);

if (LionsParkour.trim().toLowerCase() == 'yes' || LionsParkour.trim().toLowerCase() == 'y'){
  alert('Duh! Lions invented parkour and use hyena\'s for hand rails.');
  numberRight++;
} else if (LionsParkour.trim().toLowerCase() == 'no' || LionsParkour.trim().toLowerCase() == 'n'){
  alert('You might think this, given that lions sleep for up to 20 hours a day, but you\'d be wrong.');
} else {
  alert('You talkin\' that trash?');
};

CoolParkour = prompt('Do you think parkour is cool?');
console.log('My answer to "Do you think parkour is cool?" is', CoolParkour)

if (CoolParkour.trim().toLowerCase() == 'yes' || CoolParkour.trim().toLowerCase() == 'y'){
  alert('Of course it is! I want to have to parkour to get to my bathroom.');
  numberRight++;
} else if (CoolParkour.trim().toLowerCase() == 'no' || CoolParkour.trim().toLowerCase() == 'n'){
  alert('As Doctor Cox would say: Wrong wrong wrong wrong, wrong wrong wrong wrong. You\'re wrong. You\'re wrong. You\'re wrong.');
} else {
  alert('You talkin\' that trash?');
};

MyLastName = prompt('Is my last name similar to parkour?');
console.log('My answer to "Is my last name similar to parkour?" is', MyLastName)

if (MyLastName.trim().toLowerCase() == 'yes' || MyLastName.trim().toLowerCase() == 'y'){
  alert('A-ha! It is! It\'s Parker, so obviously I should be good at it, like lions. But I\'m not.');
  numberRight++;
} else if (MyLastName.trim().toLowerCase() == 'no' || MyLastName.trim().toLowerCase() == 'n'){
  alert('Le wrong-o. It\'s Parker. Are you sure you know me?');
} else {
  alert('You talkin\' that trash?');
};

// The following code adds a for loop that prompts the user to guess my favorite number and gives them 4 attempts

var favoriteNumber = Math.floor((Math.random() * 10) + 1);
var favoriteNumber = Math.floor(Math.random() * 10) + 1;
var keepGuessing = true;
var guess;
//
for(var attempts = 4; attempts > 0 && keepGuessing; attempts--){
  guess = prompt('What\'s my favorite number?'); // get user input
  guess = parseInt(guess); // converts user input from string to number
  if (guess === favoriteNumber) {
    alert('You\'re right! ' + favoriteNumber + ' is my favorite number.');
    numberRight++;
    keepGuessing = false;
  } else if (guess > favoriteNumber) {
    alert('Too high!');
  } else if (guess < favoriteNumber) {
    alert('Too low!');
  } else if (attempts === 1) {
    alert('Sorry, you\'re out of attempts!');
    keepGuessing = false;
  } else {
    alert('Guess again!');
  }
}

// var statesBeenTo = ['washington', 'idaho', 'oregon'];
// var keepTrying;


// for(var attempts = 6; attempts > 0 && keepTrying; attempts--){
//   console.log('Attempts', attempts);
//   guess = prompt('Guess a state I\'ve lived in!').toLowerCase();
//   for(var i = 0; i < statesBeenTo.length; i++) {
//     if (guess === statesBeenTo[i]){
//       console.log('Your answer was right, it was ', guess);
//     }
//   }
//   if (guess == statesBeenTo[i]){
//     alert('Correct! I\'ve been to ' + statesBeenTo[i]);
//   }
// }

var statesVisited = ['oregon', 'idaho', 'arizona'];
var userInput;
var userCorrect = false;

 for(var userAttempts = 0; userAttempts < 6 && userCorrect === false ; userAttempts++) {

   if(userAttempts === 0) {
     userInput = prompt('Now guess a state I\'ve visited! You have six tries. Good luck!');
   } else {
     userInput = prompt('Keep Guessing!')
   }

   for(var i = 0; i < statesVisited.length; i++) {

     if(statesVisited[i] === userInput) {
       alert('You\'re right! I did live in ' + statesVisited[i] + ' I\'ve visited oregon, idaho, and arizona');
       numberRight++;
       userCorrect = true;
     }
   }

 }

 if(userCorrect === false) {
   alert('Well, at least you tried');
 }

// alert('Great Job '+ whatsYourName + ''!'' + ' ' + 'You got' + ' ' + numCorrect + ' correct answers out of 7');

alert('You got ' + numberRight + ' out of 7!');

// var correctNumber = '7';
// var notDone = true;
// var guess;
//
// for (var guesses = 3; guesses > 0 && notDone; guesses--){
//   guess = prompt('what\'s my favorite number?'); // get user input
//   guess = parseInt(guess); // convert use input to number
//   if (guess === correctNumber) {
//     alert('you got the right number');
//     notDone = false;
//   } else if (guesses === 1) {
//     alert('you are out of guesses');
//   } else {
//     alert('guess again');
//   }
// }

// UNUSED CODE BELOW
