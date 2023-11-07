import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users">go to users</Link>
      <br />
      <Link href="/posts">go to posts</Link>
      <br />
      <Link href="/products">go to products</Link>
      <br />
      <Link href="/news">go to news</Link>
    </>
  );
}

// Static Generation with data fetching before
