const form = document.querySelector("form");
const todosList = document.querySelector("ul");
const reloadBtn = document.querySelector("#reload");

const createListItem = (todo) => {
  const li = document.createElement("li");
  li.className = "flex justify-between px-2 py-1";
  li.innerText = todo.title;

  const deleteBtn = document.createElement("button");
  deleteBtn.className =
    "bg-red-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-red-400";
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    li.remove();
    const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
    const filtredList = todos.filter((t) => t.id !== todo.id);
    localStorage.setItem("todos", JSON.stringify(filtredList));
  });

  li.appendChild(deleteBtn);
  todosList.prepend(li);
};

form.addEventListener("submit", (e) => {
  // prevent the default behaviour of the form
  e.preventDefault();
  const input = e.target.elements.userInput;
  // const input = document.querySelector("#userInput");

  // create a new todo Object
  const todo = {
    id: crypto.randomUUID(),
    title: input.value,
  };

  const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
  localStorage.setItem("todos", JSON.stringify([...todos, todo]));

  // create the list item using the todo object
  createListItem(todo);

  // resrt the form/input
  input.value = "";
  //  e.target.reset()
});

reloadBtn.addEventListener("click", (e) => {
  window.location.reload();
});

const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
todos.forEach((todo) => {
  createListItem(todo);
});
