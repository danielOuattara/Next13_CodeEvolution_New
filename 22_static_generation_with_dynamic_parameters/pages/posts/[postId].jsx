import React from "react";

import { log } from "console";

export default function SinglePostDetails(props) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>postId: {post.id}</p>
      <p>{post.body}</p>
    </article>
  );
}

export async function getStaticProps(context) {
  log("context = ", context);

  const postId = context.params.postId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const singlePost = await response.json();

  return {
    props: {
      post: singlePost,
    },
  };
}
