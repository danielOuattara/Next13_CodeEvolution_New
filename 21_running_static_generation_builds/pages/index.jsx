import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      {/*  
      Analyze the build code (npm run build & npm start).
      Then add the Link below and analyze again to understand the difference 
      */}
      <Link href="/users">go to users</Link>
    </>
  );
}

// Static Generation with data fetching before
