const postsContainer = document.querySelector("#posts");

const addPost = (post) => {
  postsContainer.innerHTML += `
    <div class="border rounded py-2 px-4 space-y-4">
      <p class="text-xl font-semibold"> ${post.title} </p>
      <p class="text-gray-500"> ${post.body} </p>
    </div>
    `;

  //   const card = document.createElement("div");
  //   //   card.classList.add("border", "rounded", "py-2", "px-4", "space-y-4");
  //   card.className = "border rounded py-2 px-4 space-y-4";

  //   const title = document.createElement("p");
  //   //   title.classList.add("text-xl", "font-semibold");
  //   title.className = "text-xl font-semibold";
  //   title.innerText = post.title;

  //   const body = document.createElement("p");
  //   //   title.classList.add("text-gray-500");
  //   body.className = "text-gray-500";
  //   body.innerText = post.body;

  //   card.appendChild(title);
  //   card.appendChild(body);
  //   postsContainer.appendChild(card);
};

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((post) => {
//       addPost(post);
//     });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

const fetchPosts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((post) => {
      addPost(post);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchPosts("https://jsonplaceholder.typicode.com/posts");

// only works with modules, needs the type attribute in the script like so  <script type="module" src="index.js" defer></script>
// try {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   data.forEach((post) => {
//     addPost(post);
//   });
// } catch (error) {
//   console.log(error);
// }
