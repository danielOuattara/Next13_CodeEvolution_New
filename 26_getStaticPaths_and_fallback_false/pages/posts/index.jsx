import Link from "next/link";

export default function PostsHomePage(props) {
  return (
    <ul>
      {props.posts.map((post) => (
        <article key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <hr />
        </article>
      ))}
    </ul>
  );
}

//--------------------------------------------------------

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();

  return {
    props: { posts: posts.slice(0, 3) },
  };
}
