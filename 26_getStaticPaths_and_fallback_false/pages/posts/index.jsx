import Link from "next/link";

export default function PostsHomePage(props) {
  return (
    <>
      <h1>Posts page</h1>
      <p>
        Comment and uncomment the "ul" in code to see the difference in Next.js
        fetching capabilities.
      </p>
      <p>
        If no "ul" and "li" html elements displayed here, then use the address
        to navigate to a specific post
      </p>
      {/* <ul>
        {props.posts.map((post) => (
          <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <hr />
          </article>
        ))}
      </ul> */}
    </>
  );
}

//--------------------------------------------------------

export async function getStaticProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`,
  );
  const posts = await response.json();

  return {
    props: { posts },
  };
}
