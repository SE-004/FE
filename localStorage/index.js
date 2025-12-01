const usersURL = "https://jsonplaceholder.typicode.com/users";
const usersContainer = document.querySelector("#users");

const renderUsers = (users) => {
  users.forEach((user) => {
    usersContainer.innerHTML += `<p> ${user.username} </p>`;
  });
};

const fetchUsers = async (url) => {
  console.log("Fetching users");
  const response = await fetch(url);
  const users = await response.json();

  localStorage.setItem("users", JSON.stringify(users));

  renderUsers(users);
};

const users = localStorage.getItem("users");
if (!users) {
  fetchUsers(usersURL);
} else {
  const parsedusers = JSON.parse(users);
  renderUsers(parsedusers);
}
