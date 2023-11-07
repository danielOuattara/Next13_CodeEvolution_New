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
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
}
