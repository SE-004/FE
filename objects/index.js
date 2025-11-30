const person = {
  firstName: "john",
  lastName: "doe",
  email: "john@gmail.com",
  age: 20,
  isStudent: true,
  address: {
    street: "main street 123",
    city: "Karlsruhe",
    country: "Germany",
  },
  classes: ["Math", "Programming 101"],
  sayHello() {
    console.log(`Hello i am ${this.firstName} ${this.lastName}`);
  },
};

console.log(person);

// Dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.street);
console.log(person.classes);
person.sayHello();

// Bracket notation
console.log(person["email"]);
console.log(person["address"]["city"]);

// when to use bracket notation
const desiredKey = "firstName";

console.log(person.desiredKey); // doesn't work
console.log(person[desiredKey]);

const colors = ["red", "black", "white", "blue", "green"];

// const red = colors[0];
// const black = colors[1];
// const white = colors[2];

const [first, second, third, ...restOfTheColrs] = colors;

console.log(first, second, third, restOfTheColrs);

const product = { price: 10, name: "keyboard" };

const price = 1;

const { name, price: productPrice } = product;

console.log(productPrice, name);
