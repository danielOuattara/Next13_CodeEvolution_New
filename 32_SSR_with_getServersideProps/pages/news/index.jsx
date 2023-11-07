export default function NewsHomePage(props) {
  console.log("props = ", props);
  return (
    <>
      <h1>List of News Articles</h1>
      {props.articles.map((article) => (
        <article key={article.id}>
          <h2>
            {article.id} | {article.title} | {article.category}
            <hr />
          </h2>
        </article>
      ))}
    </>
  );
}

export async function getServerSideProps(args) {
  console.log("args = ", args);
  const response = await fetch("http://localhost:4000/news");
  const news = await response.json();

  return {
    props: {
      articles: news,
    },
  };
}
