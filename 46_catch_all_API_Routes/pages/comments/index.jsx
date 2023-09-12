import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CommentsHomePage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const router = useRouter();

  //-------------------------------------------------------
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data.comments);
  };

  //-------------------------------------------------------
  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });
    const data = await response.json();
    fetchComments();
    setComment("");
  };

  //-------------------------------------------------------
  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  //-------------------------------------------------------
  const showComment = async (commentId) => {
    console.log(router);
    router.push(`/comments/${commentId}`, null, { shallow: true });
  };

  //-------------------------------------------------------
  return (
    <>
      <button onClick={fetchComments}>fetch comments</button>
      {comments.map((item) => (
        <article key={item.id}>
          <p>
            {item.text} &nbsp; |{" "}
            <Link href={`/comments/${item.id}`}>details</Link>
            &nbsp; |
            <button onClick={() => deleteComment(item.id)}>delete</button>
          </p>
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
