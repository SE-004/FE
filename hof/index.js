const numbers = [1, 2, 3, 4, 5];

// forEach => for iteration only
const logNumber = function (number, index) {
  console.log(number, index);
};

numbers.forEach(logNumber);
numbers.forEach(function (number, index) {
  console.log(number * 10);
});

const forEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i);
  }
};

// forEach(numbers, (value, index) => {
//   console.log(value + 100 + index);
// });

// map => for updating all or some of the values in the array
const mappedNumbers = numbers.map((number, index) => {
  return number / 2;
});
console.log(mappedNumbers);

// const map = (array, cb) => {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(cb(array[i], i));
//     // result[i] = cb(array[i], i);
//   }
//   return result;
// };

// console.log(
//   map(numbers, function (number, i) {
//     return number * 10;
//   })
// );

// filter => filters the array elements and adds all, some, or none of the items to a new array
const people = [
  { name: "Jane", age: 22 },
  { name: "Marry", age: 30 },
  { name: "John", age: 20 },
  { name: "Smith", age: 45 },
  { name: "John", age: 26 },
];

const belowThirty = people.filter((person, index) => {
  return person.age < 30;
});

const belowTen = people.filter((person, index) => {
  return person.age < 10;
});

console.log(belowThirty);
console.log(belowTen);

// find => retunrs the first element that passes the condition
const person = people.find((person, i) => {
  return person.name === "John";
});

console.log(person);

// reduce
const r = numbers.reduce((acc, number, index) => {
  return acc + number
});

console.log(r);
