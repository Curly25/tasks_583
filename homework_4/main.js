// task 1
function calcRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new TypeError("Type error. Write only numbers");
  }
  return width * height;
}
try {
  calcRectangleArea("a", 10);
} catch (error) {
  console.log(error.message);
}

// task 2
function checkAge() {
  let age = +prompt("How old are you?");
  if (age === 0) {
    throw new Error("The field is empty");
  } else if (isNaN(age)) {
    throw new TypeError("Type error, write only number");
  } else if (age < 14) {
    throw new RangeError("You are so young");
  } else {
    alert("Welcome");
  }
}
try {
  checkAge();
} catch (error) {
  alert(error.name + ": " + error.message);
}

// task 3
class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
}
function showMonthName(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (typeof month != "number") {
    throw new TypeError("Type error. Write only number");
  } else if (month > 12 || month <= 0) {
    throw new MonthException("Incorrect month number");
  } else {
    return monthNames[month - 1];
  }
}
try {
  console.log(showMonthName(19));
} catch (error) {
  console.log(error.name + ": " + error.message);
}

// task 4
function showUser(id) {
  if (id < 0) {
    throw new RangeError("ID must not be negative: " + id);
  }
  return { id: id };
}
function showUsers(ids) {
  let result = [];
  for (id of ids) {
    try {
      result.push(showUser(id));
    } catch (error) {
      console.log(error.message);
    }
  }
  return result;
}
console.log(showUsers([7, -12, 44, 22]));
