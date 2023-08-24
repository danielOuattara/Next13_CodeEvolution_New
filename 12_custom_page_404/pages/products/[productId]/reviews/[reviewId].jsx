import { useRouter } from "next/router";

export default function ReviewDetails() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h2>
      product {productId} , review {reviewId}
    </h2>
  );
}
