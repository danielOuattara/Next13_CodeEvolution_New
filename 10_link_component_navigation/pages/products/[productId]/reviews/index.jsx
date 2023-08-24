import { useRouter } from "next/router";

export default function ReviewsHome() {
  const router = useRouter();
  const { productId } = router.query;
  return <h2>Home review for product {productId} </h2>;
}
