import { useState } from "react";
import { deleteFromLocalStorage } from "../utils/localStorage";

function PostItem({ post, setPosts }) {
  const [isEditing, setisEditing] = useState(false);

  const [formData, setFormData] = useState({
    title: post.title,
    description: post.description,
  });

  const handelChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handelDelete = () => {
    setPosts((posts) => {
      return posts.filter((p) => p.id !== post.id);
    });

    console.log(post.id);
    deleteFromLocalStorage("posts", post.id);
  };

  const handelEdit = () => {
    setisEditing(true);
  };

  const handelSave = () => {
    setisEditing(false);
    setPosts((posts) => {
      return posts.map((p) => {
        if (p.id !== post.id) return p;
        return formData;
      });
    });
  };

  return (
    <div className="bg-zinc-100 border border-zinc-200 rounded p-4">
      {isEditing ? (
        <form className="grid gap-1">
          <input
            className="border border-zinc-200 rounded p-2"
            onChange={handelChange}
            type="text"
            name="title"
            value={formData.title}
            placeholder="Enter Title"
          />
          <textarea
            className="border border-zinc-200 rounded p-2"
            onChange={handelChange}
            type="text"
            name="description"
            value={formData.description}
            placeholder="Enter Description"
          />
        </form>
      ) : (
        <>
          <p className="text-xl font-bold "> {post.title}</p>
          <p> {post.description}</p>
        </>
      )}

      <div className="space-x-2 mt-4">
        <button
          className="bg-red-500 rounded px-2 py-1 text-white"
          onClick={handelDelete}
        >
          Delete
        </button>
        {isEditing ? (
          <button
            className="bg-green-500 rounded px-2 py-1 text-white"
            onClick={handelSave}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-500 rounded px-2 py-1 text-white"
            onClick={handelEdit}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default PostItem;
