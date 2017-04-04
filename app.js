'use strict';

console.log('this class rules!');

var FavAnimal;
var LionsVsGorillas;
var LionsParkour;
var CoolParkour;
var MyLastName;

FavAnimal = prompt('Do you think lions are my favorite animal?');
console.log('My answer to "Do you think lions are my favorite animal?" is', FavAnimal);

if (FavAnimal.trim().toLowerCase() == 'yes' || FavAnimal.trim().toLowerCase() == 'y'){
  alert('You\'re right! Lions are totally boss.');
} else if (FavAnimal.trim().toLowerCase() == 'no' || FavAnimal.trim().toLowerCase() == 'n'){
  alert('What? How could lions not be my favorite animal?');
} else {
  alert('You talkin\' that trash?');
};

LionsVsGorillas = prompt('Do you think lions can defeat gorillas?');
console.log('My answer to "Do you think lions can defeat gorillas?" is', LionsVsGorillas);

if (LionsVsGorillas.trim().toLowerCase() == 'yes' || LionsVsGorillas.trim().toLowerCase() == 'y'){
  alert('Obviously! Lions are superior to gorillas in every way');
} else if (LionsVsGorillas.trim().toLowerCase() == 'no' || LionsVsGorillas.trim().toLowerCase() == 'n'){
  alert('Uh. Have you ever seen a lion? Also gorillas are lame.');
} else {
  alert('You talkin\' that trash?');
};

LionsParkour = prompt('Do you think lions like parkour?');
console.log('My answer to "Do you think lions like parkour?" is', LionsParkour);

if (LionsParkour.trim().toLowerCase() == 'yes' || LionsParkour.trim().toLowerCase() == 'y'){
  alert('Duh! Lions invented parkour and use hyena\'s for hand rails.');
} else if (LionsParkour.trim().toLowerCase() == 'no' || LionsParkour.trim().toLowerCase() == 'n'){
  alert('You might think this, given that lions sleep for up to 20 hours a day, but you\'d be wrong.');
} else {
  alert('You talkin\' that trash?');
};

CoolParkour = prompt('Do you think parkour is cool?');
console.log('My answer to "Do you think parkour is cool?" is', CoolParkour)

if (CoolParkour.trim().toLowerCase() == 'yes' || CoolParkour.trim().toLowerCase() == 'y'){
  alert('Of course it is! I want to have to parkour to get to my bathroom.');
} else if (CoolParkour.trim().toLowerCase() == 'no' || CoolParkour.trim().toLowerCase() == 'n'){
  alert('As Doctor Cox would say: Wrong wrong wrong wrong, wrong wrong wrong wrong. You\'re wrong. You\'re wrong. You\'re wrong.');
} else {
  alert('You talkin\' that trash?');
};

MyLastName = prompt('Is my last name similar to parkour?');
console.log('My answer to "Is my last name similar to parkour?" is', MyLastName)

if (MyLastName.trim().toLowerCase() == 'yes' || MyLastName.trim().toLowerCase() == 'y'){
  alert('A-ha! It is! It\'s Parker, so obviously I should be good at it, like lions. But I\'m not.');
} else if (MyLastName.trim().toLowerCase() == 'no' || MyLastName.trim().toLowerCase() == 'n'){
  alert('Le wrong-o. It\'s Parker. Are you sure you know me?');
} else {
  alert('You talkin\' that trash?');
};

/*LionsVsGorillas = prompt('Do you think lions can defeat gorillas?');

LionsParkour = prompt('Do you think lions like parkour?');

CoolParkour = prompt('Do you think parkour is cool?');

MyLastName = prompt('Is my last name similar to parkour?');

var sushi = prompt('Do you think I like sushi?');

if (sushi.trim().toLowerCase() == 'yes'){
  alert('You were correct!');
} else {
  alert('You know nothing, John Snow');
}*/
