import PostItem from "./PostItem";

function PostsList({ posts, setPosts }) {
  return (
    <div className="space-y-2 w-sm m-auto">
      <p className="text-2xl font-bold">Posts List: </p>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} setPosts={setPosts} />;
      })}
    </div>
  );
}

export default PostsList;
