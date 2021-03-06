'use strict';
window.onload = function() {
  console.log('this class rules!');

  var numberRight = 0;

  var favAnimal;
  var lionsVsGorillas;
  var lionsParkour;
  var coolParkour;
  var myLastName;

  function question1() {
    favAnimal = prompt('Do you think lions are my favorite animal?');
    console.log('My answer to "Do you think lions are my favorite animal?" is', favAnimal);

    if (favAnimal.trim().toLowerCase() == 'yes' || favAnimal.trim().toLowerCase() == 'y'){
      alert('You\'re right! Lions are totally boss.');
      numberRight++;
      console.log('Q1: ' + numberRight);
    } else if (favAnimal.trim().toLowerCase() == 'no' || favAnimal.trim().toLowerCase() == 'n'){
      alert('What? How could lions not be my favorite animal?');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  function question2() {
    lionsVsGorillas = prompt('Do you think lions can defeat gorillas?');
    console.log('My answer to "Do you think lions can defeat gorillas?" is', lionsVsGorillas);

    if (lionsVsGorillas.trim().toLowerCase() == 'yes' || lionsVsGorillas.trim().toLowerCase() == 'y'){
      alert('Obviously! Lions are superior to gorillas in every way');
      numberRight++;
      console.log('Q2: ' + numberRight);
    } else if (lionsVsGorillas.trim().toLowerCase() == 'no' || lionsVsGorillas.trim().toLowerCase() == 'n'){
      alert('Uh. Have you ever seen a lion? Also gorillas are lame.');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  function question3() {
    lionsParkour = prompt('Do you think lions like parkour?');
    console.log('My answer to "Do you think lions like parkour?" is', lionsParkour);

    if (lionsParkour.trim().toLowerCase() == 'yes' || lionsParkour.trim().toLowerCase() == 'y'){
      alert('Duh! Lions invented parkour and use hyena\'s for hand rails.');
      numberRight++;
      console.log('Q3: ' + numberRight);
    } else if (lionsParkour.trim().toLowerCase() == 'no' || lionsParkour.trim().toLowerCase() == 'n'){
      alert('You might think this, given that lions sleep for up to 20 hours a day, but you\'d be wrong.');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  function question4() {
    coolParkour = prompt('Do you think parkour is cool?');
    console.log('My answer to "Do you think parkour is cool?" is', coolParkour)

    if (coolParkour.trim().toLowerCase() == 'yes' || coolParkour.trim().toLowerCase() == 'y'){
      alert('Of course it is! I want to have to parkour to get to my bathroom.');
      numberRight++;
      console.log('Q4: ' + numberRight);
    } else if (coolParkour.trim().toLowerCase() == 'no' || coolParkour.trim().toLowerCase() == 'n'){
      alert('As Doctor Cox would say: Wrong wrong wrong wrong, wrong wrong wrong wrong. You\'re wrong. You\'re wrong. You\'re wrong.');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  function question5() {
    myLastName = prompt('Is my last name similar to parkour?');
    console.log('My answer to "Is my last name similar to parkour?" is', myLastName)

    if (myLastName.trim().toLowerCase() == 'yes' || myLastName.trim().toLowerCase() == 'y'){
      alert('A-ha! It is! It\'s Parker, so obviously I should be good at it, like lions. But I\'m not.');
      numberRight++;
      console.log('Q5: ' + numberRight);
    } else if (myLastName.trim().toLowerCase() == 'no' || myLastName.trim().toLowerCase() == 'n'){
      alert('Le wrong-o. It\'s Parker. Are you sure you know me?');
    } else {
      alert('You talkin\' that trash?');
    }
  }

  // The following code adds a for loop that prompts the user to guess my favorite number and gives them 4 attempts
  var favoriteNumber = Math.floor((Math.random() * 10) + 1);
  var favoriteNumber = Math.floor(Math.random() * 10) + 1;
  var keepGuessing = true;
  var guess;
  //
  function question6(attempts) {
    guess = prompt('What\'s my favorite number?'); // get user input
    guess = parseInt(guess); // converts user input from string to number
    if (guess === favoriteNumber) {
      alert('You\'re right! ' + favoriteNumber + ' is my favorite number.');
      numberRight++;
      console.log('Q7: ' + numberRight);
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

  var statesVisited = ['oregon', 'idaho', 'arizona'];
  var userInput;
  var userCorrect = false;

  function question7(userAttempts) {
    if(userAttempts === 0) {
      userInput = prompt('Now guess a state I\'ve visited! You have six tries. Good luck!');
      console.log('User is prompted to guess a state I\'ve visited')
    } else {
      userInput = prompt('Keep Guessing!');
      console.log('User is prompted to keep guessing which state I\'ve visited')
    }

    for(var i = 0; i < statesVisited.length; i++) {

      if(statesVisited[i] === userInput) {
        alert('You\'re right! I did live in ' + statesVisited[i] + '. I\'ve visited oregon, idaho, and arizona.');
        console.log('User is alerted they guessed a correct state');
        numberRight++;
        console.log('Q7: ' + numberRight);
     //  if(statesVisited[i] === userInput) {
     //    alert('You\'re right! I did live in ' + statesVisited[i] + ' I\'ve visited ' + statesVisited[0] + ', ' statesVisited[1] + ', and ' + statesVisited[2]);
       userCorrect = true;
      }
     }
  }


  question1();
  question2();
  question3();
  question4();
  question5();

  for(var attempts = 4; attempts > 0 && keepGuessing; attempts--){
    question6(attempts);
  }

  for(var userAttempts = 0; userAttempts < 6 && userCorrect === false ; userAttempts++) {
    question7(userAttempts);
  }

   if(userCorrect === false) {
     alert('Well, at least you tried');
   }

  alert('You got ' + numberRight + ' out of 7!');
}
