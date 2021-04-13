// task 1
let elemTestFirst = document.getElementById("test");
let elemTestSec = document.querySelector("#test");

elemTestFirst.innerHTML = "Last";
elemTestSec.innerHTML = "Last";

// task 2
let imgChange = document.querySelector(".image");
imgChange.src = "./img/cat.jpeg";
//alert(imgChange.outerHTML);

// task 3
let x = document.querySelectorAll("#text p");
for (i = 0; i < x.length; i++) {
  console.log("Selector text " + i + ": " + x[i].innerHTML);
}

// task 4.1
let num = document.getElementById("list");
alert(num.firstElementChild.innerHTML);
alert(num.lastElementChild.innerHTML);
alert(num.firstElementChild.nextElementSibling.innerHTML);
alert(num.lastElementChild.previousElementSibling.innerHTML);
alert(num.firstElementChild.nextElementSibling.nextElementSibling.innerHTML);

// task 4.2
let element = document.querySelector("#list");
let num = element.children;
alert(num[0].innerHTML);
alert(num[4].innerHTML);
alert(num[1].innerHTML);
alert(num[3].innerHTML);
alert(num[2].innerHTML);

// task 5

document.getElementsByTagName("h1")[0].style.backgroundColor = "lightGreen";
document.getElementById("myDiv").firstElementChild.style.fontWeight = "bold";
document.getElementById("myDiv").firstElementChild.nextElementSibling.style.color = "red";
document.getElementById("myDiv").lastElementChild.style.fontStyle = "italic";
document.getElementById("myDiv").lastElementChild.previousElementSibling.style.textDecoration =
  "underline";
document.getElementById("myList").style = "list-style-type: none; display: flex";
document.getElementsByTagName("span")[0].style.display = "none";

// task 6
let firstInput = document.getElementById("input1");
firstInput.value = prompt("write something 1");
let secondInput = document.getElementById("input2");
secondInput.value = prompt("write something 2");
let firstInputValue = firstInput.value;
document.getElementById("input1").value = secondInput.value;
secondInput.value = firstInputValue;
