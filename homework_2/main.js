//task 1
let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x, y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x + y + undefined;
console.log(res4); // NaN
console.log(typeof res4); // "number"

//task 2
let num = prompt('Enter ane number', '');
let a = !(num % 2) && num > 0;
console.log(a);
let b = !(num % 7);
console.log(b);

//task 3
let array1 = [ 42, 'spring', true, null];
alert(array1.length);

let user = prompt('enter anything','');
array1[5] = user;
alert(array1[5]);

alert(array1.shift());

//task 4
let cities = ['Rome', 'Lviv', 'Warsaw'];
let arr = cities.join('*');
console.log(arr);

//task 5
let isAdult = prompt('How old are you?', '');
if (isAdult >= 18 ) {
    alert('You are adult');
}
else if (isAdult <= 10) {
    alert('You are so young');
}
else {
    alert('You are teenager');
}

//task 6

let a = +prompt('напишіть довжину першої сторони трикутника. довжина повинна бути більше 0', '');
let b = +prompt('напишіть довжину другої сторони трикутника. довжина повинна бути більше 0', '');
let c = +prompt('напишіть довжину  третьої сторони трикутника. довжина повинна бути більше 0', '');
if (isNaN(a) || isNaN(b) || isNaN(c)) {
alert('Incorect data');
}
let squere = (1 / 4) * Math.sqrt((a + b + c) * (b + c - a) * (a + c - b) * (a + b - c));
console.log(squere.toFixed(3));
if (a ** 2 == b ** 2 + c ** 2 || b ** 2 == a ** 2 + c ** 2 || c ** 2 == a ** 2 + b ** 2) {
  console.log('трикутник прямокутний');
} else {
  console.log('трикутник не прямокутний');
}

// task 7

let hours = new Date().getHours();

if (hours >= 23 || hours < 5) {
  alert('Доброї ночі');
}
else if (hours >= 5 && hours < 11) {
  alert('Доброго ранку');
}
else if (hours >= 11 && hours < 17) {
  alert('Доброго дня');
}
else {
  alert('Доброго вечора');
}

switch (true) {
    case ((hours >= 23) || (hours < 5)):
      alert('Доброї ночі');
      break;
    case  ((hours >= 5) && (hours < 11)):
      alert('Доброго ранку');
      break;
    case ((hours >= 11) && (hours < 17)):
      alert('Доброго дня');
      break;
    case ((hours >= 17) && (hours < 23)):
      alert('Доброго вечора');
      break;
  }