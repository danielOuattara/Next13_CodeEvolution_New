import { useRouter } from "next/router";

export default function ProductDetails() {
  const productId = useRouter().query.productId;
  return <p>product {productId}</p>;
}
