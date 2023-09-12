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

  const category = context.params.category;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`,
  );
  const data = await response.json();

  console.log(`Pre-Rendering News Articles for Category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
