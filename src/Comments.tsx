import { use } from "react";
import CommentsCard from "./CommentsCard";

export default function Comments({ commentsDataPromise }) {
  const comments = use(commentsDataPromise);
  console.log(comments);

  return (
    <div>
      <h2>Comments: {comments.length}</h2>
      {comments.map((comment) => (
        <CommentsCard comment={comment}></CommentsCard>
      ))}
    </div>
  );
}
