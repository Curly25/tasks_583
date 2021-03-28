// task 2
let myLastName = 'Zhovtaniuk'; 
alert('My Last name ' + myLastName);

//task 3
let firstVar = 1234; 
let secondVar = "Hello JS"; 

alert(firstVar);
alert(secondVar);

firstVar = secondVar;
alert(firstVar);

//task 4 
let someStr = 'Victoria'; 
console.log(typeof someStr);

let someNum = 2021;
console.log(typeof someNum);

let typeBoolean = true;
console.log(typeof typeBoolean);

let typeBooleanTwo = false;
console.log(typeof typeBooleanTwo);

let age;
console.log(typeof age);

let yearsNow = 2021
yearsNow = null; 
console.log(typeof yearsNow); // object bag JS
console.log(yearsNow); // null

//task 5
let isAdult = confirm('Are you 18 years old?');
alert(isAdult);

//task 6 
let aboutMe = {
    myName: 'Vika', 
    lastName: 'Zhovtaniuk', 
    group: 583, 
    birthYear: 1991 
};
console.log(aboutMe);

aboutMe.status = false;

console.log(typeof aboutMe.group);
console.log(typeof aboutMe.birthYear);
console.log(typeof aboutMe.status);
console.log(typeof aboutMe.myName);
console.log(typeof aboutMe.lastName);

aboutMe.myAge = undefined;
console.log(typeof aboutMe.myAge);

aboutMe.color = 'blue';
aboutMe.color = null;
console.log(typeof aboutMe.color);

//task 7 
let login = prompt('What is your login?');
alert('Dear User, your login is ' + login);

let mail = prompt('What is your mail?');
alert('Dear User, your email is ' + mail);

let password = prompt('What is your password?');
alert('Dear User, your password is ' + password);

//task 8 
let hourToSecond =  60 * 60;
alert('Seconds in hour ' + hourToSecond);

let dayToSecond =  60 * 60 * 24;
alert('Seconds in a day ' + dayToSecond);

let monthToSecond =  60 * 60 * 24 * 30;
alert('Seconds in a month ' + monthToSecond);


