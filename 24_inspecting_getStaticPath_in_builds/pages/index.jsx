import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users">go to users</Link>
      <br />
      <Link href="/posts">go to posts</Link>
    </>
  );
}

// Static Generation with data fetching before
