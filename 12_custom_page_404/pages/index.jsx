import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing order ");
    // router.push("/products");
    router.replace("/products");
  };
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blogs">blogs</Link>
      <Link href="/products">products</Link>
      <button onClick={handleClick}> Place order</button>
    </>
  );
}
