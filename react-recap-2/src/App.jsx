import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostsList";
import { getFromLocalStorage } from "./utils/localStorage";

function App() {
  const [posts, setPosts] = useState(getFromLocalStorage("posts"));

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Post Application</h1>
      <PostForm setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
