import { use } from "react";
import PostCard from "./PostCard";

export default function Posts({ postsDataPromise }) {
  const posts = use(postsDataPromise);
  console.log(posts);
  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      {posts.map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </div>
  );
}
