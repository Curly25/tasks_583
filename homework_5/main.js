// task 1
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}
console.log(propsCount(mentor));

// task 2
let employee = {
  firstName: "Peter",
  lastName: "Peterson",
  position: "dev",
  experience: 3,
  age: 29,
};
function showProps(obj) {
  return Object.keys(obj);
}
console.log(showProps(employee));
console.log(Object.values(employee));

// task 3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name + " " + this.surname);
  }
}
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(middleName) {
    return this.name + " " + this.surname + " " + middleName;
  }
  showCourse() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentCourseRaw = currentYear - this.year;
    return currentCourseRaw >= 0 ? currentCourseRaw : 0;
  }
}
let stud1 = new Student("Petro", "Petrenko", 2020);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

//task 4
class Worker {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    console.log(`${this.fullName}: ${this.salary}`);
  }
  showSalaryWithExperience() {
    console.log(`${this.fullName} salary: ${this.salaryWithExperience}`);
  }
  get salaryWithExperience() {
    return this.salary * this.#experience;
  }
  get salary() {
    return this.dayRate * this.workingDays;
  }
  get showExp() {
    return this.#experience;
  }
  set setExp(value) {
    this.#experience = value;
  }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];
console.log("Sorted salary");
workers.sort((w1, w2) => w1.salaryWithExperience - w2.salaryWithExperience);
workers.forEach((worker) => {
  worker.showSalaryWithExperience();
});

// // task 5
class GeometricFigures {
  getArea() {
      return 0;
  }
  toString() {
      return Object.getPrototypeOf(this).constructor.name;
  }
}
class Triangle extends GeometricFigures {
  constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
  }
  getArea() {
      return (this.base * this.height) / 2;
  }
}
class Square extends GeometricFigures {
  constructor(side) {
      super();
      this.side = side;
  }
  getArea() {
      return this.side * this.side;
  }
}
class Circle extends GeometricFigures {
  constructor(radius) {
      super();
      this.radius = radius;
  }
  getArea() {
      return Math.PI * this.radius * this.radius;
  }
}
function handleFigures(figures) {
  let totalFigArea = 0;
  for (let i = 0; i < figures.length; i++) {
      const figure = figures[i];
      if (figure instanceof GeometricFigures) {
          console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
          totalFigArea += figure.getArea();
      }
  }
  return totalFigArea;
}
const t = new Triangle(4,5);
const s = new Square(7);
const c = new Circle(5);

const figures = [t, s, c];
console.log(handleFigures(figures));
