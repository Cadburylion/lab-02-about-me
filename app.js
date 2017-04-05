'use strict';

console.log('this class rules!');

// var FavAnimal;
// var LionsVsGorillas;
// var LionsParkour;
// var CoolParkour;
// var MyLastName;
//
// FavAnimal = prompt('Do you think lions are my favorite animal?');
// console.log('My answer to "Do you think lions are my favorite animal?" is', FavAnimal);
//
// if (FavAnimal.trim().toLowerCase() == 'yes' || FavAnimal.trim().toLowerCase() == 'y'){
//   alert('You\'re right! Lions are totally boss.');
// } else if (FavAnimal.trim().toLowerCase() == 'no' || FavAnimal.trim().toLowerCase() == 'n'){
//   alert('What? How could lions not be my favorite animal?');
// } else {
//   alert('You talkin\' that trash?');
// };
//
// LionsVsGorillas = prompt('Do you think lions can defeat gorillas?');
// console.log('My answer to "Do you think lions can defeat gorillas?" is', LionsVsGorillas);
//
// if (LionsVsGorillas.trim().toLowerCase() == 'yes' || LionsVsGorillas.trim().toLowerCase() == 'y'){
//   alert('Obviously! Lions are superior to gorillas in every way');
// } else if (LionsVsGorillas.trim().toLowerCase() == 'no' || LionsVsGorillas.trim().toLowerCase() == 'n'){
//   alert('Uh. Have you ever seen a lion? Also gorillas are lame.');
// } else {
//   alert('You talkin\' that trash?');
// };
//
// LionsParkour = prompt('Do you think lions like parkour?');
// console.log('My answer to "Do you think lions like parkour?" is', LionsParkour);
//
// if (LionsParkour.trim().toLowerCase() == 'yes' || LionsParkour.trim().toLowerCase() == 'y'){
//   alert('Duh! Lions invented parkour and use hyena\'s for hand rails.');
// } else if (LionsParkour.trim().toLowerCase() == 'no' || LionsParkour.trim().toLowerCase() == 'n'){
//   alert('You might think this, given that lions sleep for up to 20 hours a day, but you\'d be wrong.');
// } else {
//   alert('You talkin\' that trash?');
// };
//
// CoolParkour = prompt('Do you think parkour is cool?');
// console.log('My answer to "Do you think parkour is cool?" is', CoolParkour)
//
// if (CoolParkour.trim().toLowerCase() == 'yes' || CoolParkour.trim().toLowerCase() == 'y'){
//   alert('Of course it is! I want to have to parkour to get to my bathroom.');
// } else if (CoolParkour.trim().toLowerCase() == 'no' || CoolParkour.trim().toLowerCase() == 'n'){
//   alert('As Doctor Cox would say: Wrong wrong wrong wrong, wrong wrong wrong wrong. You\'re wrong. You\'re wrong. You\'re wrong.');
// } else {
//   alert('You talkin\' that trash?');
// };
//
// MyLastName = prompt('Is my last name similar to parkour?');
// console.log('My answer to "Is my last name similar to parkour?" is', MyLastName)
//
// if (MyLastName.trim().toLowerCase() == 'yes' || MyLastName.trim().toLowerCase() == 'y'){
//   alert('A-ha! It is! It\'s Parker, so obviously I should be good at it, like lions. But I\'m not.');
// } else if (MyLastName.trim().toLowerCase() == 'no' || MyLastName.trim().toLowerCase() == 'n'){
//   alert('Le wrong-o. It\'s Parker. Are you sure you know me?');
// } else {
//   alert('You talkin\' that trash?');
// };

// The following code adds a for loop that prompts the user to guess my favorite number and gives them 4 attempts

// var favoriteNumber = Math.floor((Math.random() * 10) + 1);
var favoriteNumber = Math.floor(Math.random() * 10) + 1;
var keepGuessing = true;
var guess;

for(var guesses = 4; guesses > 0 && keepGuessing; guesses--){
  guess = prompt('What\'s my favorite number?') // get user input
  guess = parseInt(guess) // converts user input from string to number
  if (guess === favoriteNumber) {
    alert('You\'re right! ' + favoriteNumber + ' is my favorite number.')
    keepGuessing = false;
  } else if (guess > favoriteNumber) {
    alert('Too high!')
  } else if (guess < favoriteNumber) {
    alert('Too low!')
  } else if (guesses === 1) {
    alert('Sorry, you\'re out of guesses!');
    keepGuessing = false;
  } else {
    alert('Guess again!')
  }
};

//End of favorite number guessing game


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

// DATA Types in JS
// Object
// Function
// Array

// primitives
// Number
// String
// Boolean
// null
// undefined



// Math.pow

// var happy = true; // true
// happy = !happy; // false
//
// null // a programmer chose for the value to be nothing
// undefined // literally means nothing has been defined
//
// /*
// \n // return (new line character)
// \t // tab
// \\ // actual /
// \" // actual double quote
// \' // actual single quote
// */
//
// var message = 'go to the store';
// message = "open the magic lantern";
//
// message = message + '\ngo to the market';
// console.log(message);

// if(condition){
//   run this chucnk of code
// } else if (other condition) {
//   run this other chunk of code
// } else {
//   run this final chunk of code
// }
