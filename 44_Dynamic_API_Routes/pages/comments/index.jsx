import { useState } from "react";

export default function CommentsHomePage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data.comments);
  };

  const submitComment = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });
    const data = await response.json();
    fetchComments();
    setComment("");
  };

  return (
    <>
      <button onClick={fetchComments}>fetch comments</button>
      {comments.map((item) => (
        <article key={item.id}>
          <p>{item.text}</p>
        </article>
      ))}

      <section>
        <label htmlFor="comment">Enter your comment : </label> <br />
        <textarea
          id="comment"
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          rows={10}
          cols={50}
        ></textarea>
        <br />
        <button type="button" onClick={submitComment}>
          send comment
        </button>
      </section>
    </>
  );
}
