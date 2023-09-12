import { useState } from "react";

export default function CommentDetails(props) {
  const [commentToUpdate, setCommentToUpdate] = useState("");
  const [updateComment, setUpdateComment] = useState(false);

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });
    const data = await response.json();

    setUpdateComment(false);
  };

  return (
    <>
      {updateComment && (
        <section>
          <label htmlFor="comment">Enter your comment : </label> <br />
          <textarea
            id="comment"
            type="text"
            value={props.comment.text}
            onChange={(event) => setCommentToUpdate(event.target.value)}
            rows={10}
            cols={50}
          ></textarea>
          <br />
          <button type="button" onClick={submitComment}>
            send update
          </button>
          &nbsp; | &nbsp;
          <button onClick={() => setUpdateComment(false)}>cancel</button>
        </section>
      )}
      {!updateComment && (
        <>
          <article>
            <h2>{props.comment.text}</h2>
            <p>{props.comment.text}</p>
          </article>
          <button onClick={() => setUpdateComment(true)}>update</button> &nbsp;
          | &nbsp;
          <button>delete</button>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/comments/${context.params.commentId}`,
  );
  const comment = await response.json();

  return {
    props: {
      comment: comment.comment,
    },
  };
}
