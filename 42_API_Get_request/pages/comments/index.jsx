import { useState } from "react";

export default function CommentsHomePage() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data.comments);
  };
  return (
    <>
      <button onClick={fetchComments}>fetch comments</button>
      {comments.map((comment) => (
        <article key={comment.id}>
          <p>{comment.text}</p>
        </article>
      ))}
    </>
  );
}
