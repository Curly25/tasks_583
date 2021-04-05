// // task 1
// let array = [2, 3, 4, 5];
// let result = 1;
// for (let i = 0; i < array.length; i++) {
//   result *= array[i];
// }
// console.log(result);

// // task 1.2
// let i = 0;
// while (i < array[i]) {
//   result *= array[i];
//   i++;
// }
// console.log(result);

// // task 2
// for (let i = 0; i < 16; i++) {
//   if (i % 2 === 0) {
//     alert(i + " is even");
//   } else {
//     alert(i + " is odd");
//   }
// }

// // task 3
// let k = [];
// function randArray(num) {
//   for (let i = 0; i < num; i++) {
//     let min = 1;
//     let max = 500;
//     let result2 = Math.floor(Math.random() * (max - min + 1) + min);
//     k.push(result2);
//   }
//   return k;
// }
// console.log(randArray(6));

// // task 4
// let a = prompt("write the number", " ");
// let b = prompt("write the number", " ");
// function raiseToDegree(a, b) {
//   if (a % 1 === 0 && b % 1 === 0) {
//     return a ** b;
//   }
//   return "error number!";
// }
// console.log(raiseToDegree(a, b));

// // task 5
// let min = [];
// function findMin() {
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] < min && i % 1 === 0) {
//       min = arguments[i];
//     }
//   }
//   return min;
// }
// console.log(findMin(12, 14, 4, -4, 0.2));

// // task 6
// let array1 = [];
// function findUnique(array1) {
//   let n = array1.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (array1[i] === array1[j]) return false;
//     }
//   }
//   return true;
// }
// console.log(findUnique([1, 2, 3, 5, 6])); // true
// console.log(findUnique([1, 2, 3, 5, 1])); // false

// // task 7
// function lastElement(array, n) {
//   if (array == null || array.length == 0) {
//     return null;
//   }
//   if (n == null) {
//     return array[array.length - 1];
//   }
//   return array.slice(Math.max(array.length - n, 0));
// }
// console.log(lastElement([3, 4, 10, -5]));
// console.log(lastElement([3, 4, 10, -9], 2));
// console.log(lastElement([3, 4, 10, -7], 8));

// task 8
function capitalize(str) {
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  let result = array.join(" ");
  console.log(result);
}

capitalize("i love java script");
