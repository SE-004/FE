import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return "loading....";
  }

  return (
    <>
      {post && (
        <div className="grid gap-1 p-4">
          <p>
            <span className="font-bold">User Id:</span> {post.userId}
          </p>
          <p>
            <span className="font-bold">Title:</span> {post.title}
          </p>
          <p>
            <span className="font-bold">Body:</span>
            {post.body}
          </p>
          <button onClick={(e)=> {
            navigate(-1)
          }}>Go Back</button>
        </div>
      )}
    </>
  );
}

export default PostDetails;
