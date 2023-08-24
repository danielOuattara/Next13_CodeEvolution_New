import { useRouter } from "next/router";

export default function ProductDetails() {
  const productId = useRouter().query.productId;
  return <h2>product {productId}</h2>;
}
