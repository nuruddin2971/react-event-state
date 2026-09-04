import "./UserCard.css";
export default function PostCard({ post }) {
  return (
    <div className="user">
      <h2>ID: {post.id}</h2>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
}
