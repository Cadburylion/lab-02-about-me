'use strict';

console.log('this class rules!');

var FavAnimal;
var LionsVsGorillas;
var LionsParkour;
var CoolParkour;
var MyLastName;

FavAnimal = prompt('Do you think turtles are my favorite animal?');

if (FavAnimal.trim().toLowerCase() == 'yes' || FavAnimal.trim().toLowerCase() == 'y'){
  alert('You\'re right! Lions are totally boss.');
} else if (FavAnimal.trim().toLowerCase() == 'no' || FavAnimal.trim().toLowerCase() == 'n'){
  alert('What? How could lions not be my favorite animal?');
} else {
  alert('You talkin\' that trash?');
};

LionsVsGorillas = prompt('Do you think lions can defeat gorillas?');

if (LionsVsGorillas.trim().toLowerCase() == 'yes' || LionsVsGorillas.trim().toLowerCase() == 'y'){
  alert('Obviously! Lions are superior to gorillas in every way');
} else if (LionsVsGorillas.trim().toLowerCase() == 'no' || LionsVsGorillas.trim().toLowerCase() == 'n'){
  alert('Uh. Have you ever seen a lion? Also gorillas are lame.');
} else {
  alert('I don\'t know what you\'re saying right now, but it\'s probably wrong.');
};

LionsParkour = prompt('Do you think lions like parkour?');

if (LionsParkour.trim().toLowerCase() == 'yes' || LionsParkour.trim().toLowerCase() == 'y'){
  alert('Obviously! Lions are superior to gorillas in every way');
} else if (LionsParkour.trim().toLowerCase() == 'no' || LionsParkour.trim().toLowerCase() == 'n'){
  alert('Uh. Have you ever seen a lion? Also gorillas are lame.');
} else {
  alert('I don\'t know what you\'re saying right now, but it\'s probably wrong.');
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
