import Link from "next/link";

export default function ProductsHomePage(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <article key={product.id}>
          {/* <Link href={`/products/${product.id}`}> */}
          <h2>
            {product.id} | {product.title}| {product.price} Rubbles
          </h2>
          {/* </Link> */}
          <hr />
        </article>
      ))}
    </ul>
  );
}

//--------------------------------------------------------

export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:4000/products`);
  const products = await response.json();

  console.log(" ----->> Regenerating ProductList");

  return {
    props: { products },
    revalidate: 30,
  };
}
