import { addToLocalStorage } from "../utils/localStorage";

function PostForm({ setPosts }) {
  const handelSubmit = (e) => {
    e.preventDefault();

    const post = {
      id: crypto.randomUUID(),
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
    };

    setPosts((posts) => {
      return [...posts, post];
    });

    addToLocalStorage("posts", post);

    e.target.reset();
    e.target.elements.title.focus();
  };

  return (
    <form
      className="grid gap-2 w-sm m-auto border border-zinc-100 p-4 shadow"
      onSubmit={handelSubmit}
    >
      <p className="text-2xl font-bold">Posts Form:</p>
      <input
        className="border border-zinc-200 rounded p-2"
        type="text"
        name="title"
        placeholder="Enter Title"
      />
      <textarea
        className="border border-zinc-200 rounded p-2"
        type="text"
        name="description"
        placeholder="Enter Description"
      />
      <input
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
        type="submit"
        value="submit"
      />
    </form>
  );
}

export default PostForm;
