import React from "react";
import { useRouter } from "next/router";
//-----------------
export default function SinglePostDetails(props) {
  const router = useRouter();
  // console.log("router = ", router);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

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
  const postId = context.params.postId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const singlePost = await response.json();
  console.log(`Generating page for : /post/${context.params.postId}`);
  console.log("singlePost = ", singlePost);

  if (!singlePost.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: singlePost,
    },
  };
}

//-----------------
export async function getStaticPaths() {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const posts = await response.json();
  // const postPaths = posts.map((post) => ({
  //   params: { postId: `${post.id}` },
  // }));

  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: true,
  };
}
