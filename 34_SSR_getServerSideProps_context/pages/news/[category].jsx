export default function ArticlesByCategory(props) {
  return (
    <>
      <h1>{props.category} News</h1>
      <ul>
        {props.articles.map((article) => (
          <li key={article.id}>
            <h2>
              {article.title} - {article.id}
            </h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log("context = ", context);
  console.log("-------------------------------------");
  // console.log("req = ", context.req);
  console.log("-------------------------------------");
  // console.log("res = ", context.res);
  console.log("-------------------------------------");
  console.log("req.headers.cookie = ", context.req.headers.cookie);
  console.log("-------------------------------------");

  context.res.setHeader("Set-Cookie", ["name=Daniel"]);

  console.log("query = ", context.query);
  console.log("-------------------------------------");
  const category = context.params.category;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`,
  );
  const data = await response.json();

  console.log("data = ", data);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
