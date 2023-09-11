import { log } from "console";
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
  log("context = ", context);

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const fetchedPosts = await response.json();

  log(fetchedPosts.slice(0, 5));

  return {
    props: { posts: fetchedPosts.slice(0, 5) },
  };
}
