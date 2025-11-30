var myAge = 20; // don't use var

const age = 29;
// age = 30;   // will error out because we are assiging to a constant variable

let myName = "John Doe";
myName = "Jane Doe";

console.log(myName);

const doubleQuotes = "Hello World";
const singleQuotes = "Hello World";
const backTicks = `Hello World`;

console.log(doubleQuotes);
console.log(singleQuotes);
console.log(backTicks);

const number = 10;
const decimal = 10.5;
const negativeNumber = -5;

const isRaining = true;
const isSnowing = false;

const person = { name: "Jane Doe", age: 20 };

console.log(person);

let grade; // undefined
console.log(grade);

let user = null;
console.log(user);
user = "max123";
console.log(user);

// string concatination
console.log("Hello my name is " + "Smith");
console.log("Hello my name is " + myName);
console.log(`Hello my name is ${myName}`);

// when mixing different data types, it can convert numbers and booleans into strings as well
console.log("age:" + age);
console.log("isRaining:" + isRaining);

myAge = myAge + 1;
myAge += 2;

myAge++;
++myAge;

console.log(myAge);

// comparisons
console.log(2 > 1); // greater than
console.log(2 < 1); // less than

console.log(2 >= 2); // greater than or equal
console.log(1 <= 2); // less than or equal

// strickt equality
console.log(1 === 1);
console.log("hello" === "hello");

// not equal
console.log(1 !== 2);

// logical operators
console.log(true && true);
console.log(true && false);

console.log(false || false);
console.log(true || false);

// function declaration
function greet() {
  console.log("welcome");
}
greet();

const greetByName = function (name) {
  console.log("Hello " + name);
};

const add = function (num1, num2) {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    isNaN(num1) &&
    isNaN(num2)
  ) {
    console.log(num1 + num2);
  } else {
    console.log("not a valid number");
  }
};

greetByName("Ben");
greetByName("Rud");
add(1, 2);
add(1, NaN);

function incByOne(number) {
  return number + 1;
}

const result = incByOne(10);
console.log(result);

const welcomeMessage = "Hello, and welcome: ";

const allowedToDrive = function (age) {
  if (age >= 18) {
    return "allowed to drive";
  } else {
    return "not allowed to dtive";
  }
};

console.log(allowedToDrive(18));
console.log(allowedToDrive(17));

const gradeStudent = function (grade) {
  if (grade >= 100 || grade < 0) {
    return "Invalid Grade";
  }

  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log(gradeStudent(901));
console.log(gradeStudent(91));
console.log(gradeStudent(81));
console.log(gradeStudent(71));
console.log(gradeStudent(61));
console.log(gradeStudent(51));
console.log(gradeStudent(-51));

const num = 5;
const aboveTen = num > 10 ? "above ten" : "below ten";

console.log(aboveTen);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let index = 0;
while (index < 10) {
  console.log("index :" + index);
  index++;
}
