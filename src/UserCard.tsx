import "./UserCard.css";
export default function UserCard({ user }) {
  return (
    <div className="user">
      <h2>Name: {user.name}</h2>
      <p>--------------------------------</p>
      <p>UserName: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
