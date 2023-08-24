import Link from "next/link";
import { useRouter } from "next/router";
export default function ProductPage({ productId = "100" }) {
  return (
    <>
      <Link href="/products/1">
        <h2>product 1</h2>
      </Link>
      <Link href="/products/2">
        <h2>product 2</h2>
      </Link>
      <Link href="/products/3" replace>
        <h2>product 3</h2>
      </Link>

      <Link href={"/products/" + productId}>
        <h2>product {productId}</h2>
      </Link>

      <Link href="/">home</Link>
    </>
  );
}
