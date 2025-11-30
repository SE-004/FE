const numbers = [10, 2, -1, 4, 1];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

console.log(numbers.length); // the length of the array

console.log(numbers[0]); // always the first element
console.log(numbers[numbers.length - 1]); // always the last element

const negativeNumbers = [-1, -2, -20];

// adding an elmeent
// add to start of the array
negativeNumbers.unshift(-100);

// add to the end of the arrray
negativeNumbers.push(-200);
negativeNumbers.push(-200, -300, -4);

// removing an element
// remove from the start
negativeNumbers.shift();
// remove from the end
negativeNumbers.pop();
negativeNumbers.pop();

const animals = ["lion", "rabbit", "crow"];
// animals[0] = "cow";
// animals[animals.length - 1] = "dog";
// animals[animals.length] = "cat";

const reversedAnimals = animals.toReversed();

console.log(reversedAnimals);

const newArray = animals.toSpliced(1, 0, "bird");

console.log(animals, newArray);

console.log(animals.slice(0, -1));

const words = ["hello", "world", "!"];

console.log(words.join(" "));
