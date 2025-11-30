// SELECTING
const mainHeading = document.querySelector("h1");
const paragraph = document.querySelector(".para"); // selecting based on classs name
const list = document.querySelector("#list");

// modify the text
mainHeading.innerText = "Hello World";

// change the style
mainHeading.style.backgroundColor = "red";
mainHeading.style.color = "white";

// change the classes
mainHeading.className = "text-xl font-bold"; // using className

paragraph.classList.add("text-gray-500", "bg-blue-200"); // adding classes using class list
paragraph.classList.remove("text-gray-500"); // removing a class
paragraph.classList.toggle("bg-blue-200");
paragraph.classList.toggle("bg-blue-200");

// modify the innerHTml
list.innerHTML = "<li> The first list item </li>";

// creating new elements
const grid = document.querySelector("#grid-container");

const fruits = [
  { name: "banana", color: "yellow", description: "it is a yellow fruit" },
  { name: "apple", color: "red", description: "it is a red fruit" },
  { name: "kiwi", color: "green", description: "it is a green fruit" },
];

fruits.forEach((fruit) => {
  const card = document.createElement("div");

  card.classList.add("border", "py-4", "px-2");

  const title = document.createElement("p");
  title.classList.add(`text-${fruit.color}-500`);
  title.innerText = fruit.name;

  const description = document.createElement("p");
  description.innerText = fruit.description;

  card.append(title);
  card.append(description);
  grid.appendChild(card);
});

const toggleGridButton = document.querySelector("#toggle-btn");
let hidden = false;

toggleGridButton.onclick = (e) => {
  hidden = !hidden;
  grid.classList.toggle("hidden");

  if (hidden) {
    toggleGridButton.innerText = "Show Grid";
  } else {
    toggleGridButton.innerText = "Hide Grid";
  }
};

const form = document.querySelector("form");
const input = document.querySelector("form > input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  console.log(value);
  const card = document.createElement("div");

  card.classList.add("border", "py-4", "px-2");

  const title = document.createElement("p");
  title.innerText = value;

  card.append(title);

  grid.appendChild(card);
});
