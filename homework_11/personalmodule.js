function userDate(name) {
  let time = new Date();
  let hour = time.getHours();
  let sayHi;
  if (hour < 22 && hour >= 18) {
    sayHi = `Good evening`;
  } else if (hour < 18 && hour >= 12) {
    sayHi = `Good day`;
  } else if (hour < 12 && hour >= 6) {
    sayHi = `Good morning`;
  } else {
    sayHi = `Good night`;
  }
  return `${time} <br> ${sayHi} ${name}`;
}

module.exports.userDate = userDate;
