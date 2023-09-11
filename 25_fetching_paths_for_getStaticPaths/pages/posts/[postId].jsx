import React from "react";

//-----------------
export default function SinglePostDetails(props) {
  // console.log("props = ", props);
  return (
    <article>
      <h2>{props.post.title}</h2>
      <p>postId: {props.post.id}</p>
      <p>{props.post.body}</p>
    </article>
  );
}

//-----------------
export async function getStaticProps(context) {
  // log("context = ", context);

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

//-----------------
export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();
  const postPaths = posts.map((post) => ({
    params: { postId: `${post.id}` },
  }));

  return {
    paths: postPaths,
    fallback: false,
  };
}
