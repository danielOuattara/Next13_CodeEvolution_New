
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
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`,
  );
  const fetchedPosts = await response.json();

  return {
    props: { posts: fetchedPosts.slice(0, 5) },
  };
}
