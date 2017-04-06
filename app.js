'use strict';
window.onload = function() {
  console.log('this class rules!');

  var numberRight = 0;

  var FavAnimal;
  var LionsVsGorillas;
  var LionsParkour;
  var CoolParkour;
  var MyLastName;

  function question1() {
    FavAnimal = prompt('Do you think lions are my favorite animal?');
    console.log('My answer to "Do you think lions are my favorite animal?" is', FavAnimal);

    if (FavAnimal.trim().toLowerCase() == 'yes' || FavAnimal.trim().toLowerCase() == 'y'){
      alert('You\'re right! Lions are totally boss.');
      numberRight++;
    } else if (FavAnimal.trim().toLowerCase() == 'no' || FavAnimal.trim().toLowerCase() == 'n'){
      alert('What? How could lions not be my favorite animal?');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  function question2() {
    LionsVsGorillas = prompt('Do you think lions can defeat gorillas?');
    console.log('My answer to "Do you think lions can defeat gorillas?" is', LionsVsGorillas);

    if (LionsVsGorillas.trim().toLowerCase() == 'yes' || LionsVsGorillas.trim().toLowerCase() == 'y'){
      alert('Obviously! Lions are superior to gorillas in every way');
      numberRight++;
    } else if (LionsVsGorillas.trim().toLowerCase() == 'no' || LionsVsGorillas.trim().toLowerCase() == 'n'){
      alert('Uh. Have you ever seen a lion? Also gorillas are lame.');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  function question3() {
    LionsParkour = prompt('Do you think lions like parkour?');
    console.log('My answer to "Do you think lions like parkour?" is', LionsParkour);

    if (LionsParkour.trim().toLowerCase() == 'yes' || LionsParkour.trim().toLowerCase() == 'y'){
      alert('Duh! Lions invented parkour and use hyena\'s for hand rails.');
      numberRight++;
    } else if (LionsParkour.trim().toLowerCase() == 'no' || LionsParkour.trim().toLowerCase() == 'n'){
      alert('You might think this, given that lions sleep for up to 20 hours a day, but you\'d be wrong.');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  function question4() {
    CoolParkour = prompt('Do you think parkour is cool?');
    console.log('My answer to "Do you think parkour is cool?" is', CoolParkour)

    if (CoolParkour.trim().toLowerCase() == 'yes' || CoolParkour.trim().toLowerCase() == 'y'){
      alert('Of course it is! I want to have to parkour to get to my bathroom.');
      numberRight++;
    } else if (CoolParkour.trim().toLowerCase() == 'no' || CoolParkour.trim().toLowerCase() == 'n'){
      alert('As Doctor Cox would say: Wrong wrong wrong wrong, wrong wrong wrong wrong. You\'re wrong. You\'re wrong. You\'re wrong.');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  function question5() {
    MyLastName = prompt('Is my last name similar to parkour?');
    console.log('My answer to "Is my last name similar to parkour?" is', MyLastName)

    if (MyLastName.trim().toLowerCase() == 'yes' || MyLastName.trim().toLowerCase() == 'y'){
      alert('A-ha! It is! It\'s Parker, so obviously I should be good at it, like lions. But I\'m not.');
      numberRight++;
    } else if (MyLastName.trim().toLowerCase() == 'no' || MyLastName.trim().toLowerCase() == 'n'){
      alert('Le wrong-o. It\'s Parker. Are you sure you know me?');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  question1();
  question2();
  question3();
  question4();
  question5();

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
      console.log('User is right!');
      keepGuessing = false;
    } else if (guess > favoriteNumber) {
      alert('Too high!');
      console.log('User guessed favorite number too high.');
    } else if (guess < favoriteNumber) {
      alert('Too low!');
      console.log('User guessed favorite number too low.');
    } else if (attempts === 1) {
      alert('Sorry, you\'re out of attempts!');
      console.log('User ran out of attempts to guess my random favorite number')
      keepGuessing = false;
    } else {
      alert('Guess again!');
      console.log('Use is alerted to guess my random favorite number again')
    }
  }

  //

  var statesVisited = ['oregon', 'idaho', 'arizona'];
  var userInput;
  var userCorrect = false;

   for(var userAttempts = 0; userAttempts < 6 && userCorrect === false ; userAttempts++) {

     if(userAttempts === 0) {
       userInput = prompt('Now guess a state I\'ve visited! You have six tries. Good luck!');
       console.log('User is prompted to guess a state I\'ve visited')
     } else {
       userInput = prompt('Keep Guessing!');
       console.log('User is prompmted to keep guessing which state I\'ve visited')
     }

     for(var i = 0; i < statesVisited.length; i++) {

       if(statesVisited[i] === userInput) {
         alert('You\'re right! I did live in ' + statesVisited[i] + '. I\'ve visited oregon, idaho, and arizona.');
         console.log('User is alerted they guessed a correct state');
      //  if(statesVisited[i] === userInput) {
      //    alert('You\'re right! I did live in ' + statesVisited[i] + ' I\'ve visited ' + statesVisited[0] + ', ' statesVisited[1] + ', and ' + statesVisited[2]);
       }
         numberRight++;
         userCorrect = true;
       }
     }



   if(userCorrect === false) {
     alert('Well, at least you tried');
   }

  alert('You got ' + numberRight + ' out of 8!');
}
