import { useEffect, useState } from "react";
import { Link } from "react-router";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div> Loading...</div>;
  }

  return (
    <>
      <div className="grid gap-2 p-4">
        {posts.map((post) => {
          return (
            <div key={post.id} className="border rounded p-2 grid gap-2">
              <p className="text-xl font-bold">{post.title}</p>
              <p>{post.body}</p>
              <Link
                className="border rounded bg-slate-800 text-white p-2 text-center"
                to={`/posts/${post.id}`}
              >
                View More
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PostsPage;
