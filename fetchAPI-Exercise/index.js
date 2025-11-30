const todosUrl = "https://jsonplaceholder.typicode.com/todo";
const todosContainer = document.querySelector("#todo-list");
const pokemonContainer = document.querySelector("#pokemon-container");

const createTodoListItem = (todo) => {
  const todoListItem = document.createElement("li");
  todoListItem.innerText = todo.title;

  todoListItem.className = todo.completed
    ? "text-emerald-400 line-through"
    : "text-gray-700";

  // if (todo.completed)
  //   todoListItem.className = "text-emerald-400 line-through";
  // else {
  //   todoListItem.className = "text-gray-700";
  // }

  todosContainer.appendChild(todoListItem);
};

// fetch(todosUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((todo) => {
//       createTodoListItem(todo);
//     });
//   })
//   .catch((err) => console.log(err));

const pokemonURL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

const fetchPokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  data.results.forEach((pokemon) => {
    const id = pokemon.url.split("/")[pokemon.url.split("/").length - 2];

    pokemonContainer.innerHTML += `
      <div class="border border-gray-300 rounded shadow-md flex flex-col justify-center items-center">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"/>
        <div class="p-2 ">
          <p> ${pokemon.name} </p> 
        </div>
      </div>
    `;
  });
};

fetchPokemon(pokemonURL);
