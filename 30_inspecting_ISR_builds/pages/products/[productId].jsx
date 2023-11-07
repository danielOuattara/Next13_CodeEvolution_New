import { useRouter } from "next/router";
//-----------------
export default function SingleProductDetails(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <article>
      <h2>{props.product.title}</h2>
      <p>productId: {props.product.id}</p>
      <p>price: {props.product.price}</p>
      <p>description: {props.product.description}</p>
    </article>
  );
}

//-----------------
export async function getStaticProps(context) {
  console.log(
    `~~~~~~ Regenerating product ${context.params.productId} ~~~~~~~`,
  );
  const productId = context.params.productId;
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const product = await response.json();

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}

//-----------------
export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
