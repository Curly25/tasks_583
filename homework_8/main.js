// task
function upperCase(str) {
  if (/^[A-Z]/.test(str)) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}
upperCase("regexp");
upperCase("geRExp");

// task 2
function checkEmail(email) {
  if (/\S+@\S+\.\S+/.test(email)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checkEmail("Qmail2@gmail.com");

// task 3
const str = "dbBdbsbz";
const resultArray = str.match(/d(b+)(d)/i);
console.log(resultArray);

// task 4
function changeText(text) {
  let res = /(\D+) (\D+)/;
  return text.replace(res, "$2, $1");
}
console.log(changeText("Java Script"));

// task 5
function checkCreditCard(number) {
  if (/^\d{4}\-\d{4}\-\d{4}\-\d{4}$/.test(number)) {
    console.log("Number card is correct");
  } else {
    console.log("Number card isn't correct");
  }
}
checkCreditCard("9999-9999-9999-9999");

// task 6
function checkEmail() {
  let regexp = /^[^-_#][a-z0-9_.@+-]{1,20}[^-]$/g;
  let result = regexp.test(gmail);
  if (result) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
}
let gmail = "my_mai-l@gmail.com"; // true
//let gmail = "#mail_@gmail.com"; // false

checkEmail(gmail);

// task 7
function checkLogin(str) {
  let validLogin = str.length > 2 && str.length < 10 && /^[a-zA-Z][a-zA-Z0-9.]+$/.test(str);
  console.log(validLogin);
  let numbersArr = str.match(/[\d.]+/g);
  if (numbersArr != null) {
    console.log(numbersArr.map((str) => Number(str)));
  }
}
checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");
