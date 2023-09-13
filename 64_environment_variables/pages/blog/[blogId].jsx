import Head from "next/head";

export default function BlogDetails(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <h1 className="content">Single Article</h1>
      <p>analytics info: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const user = process.env.DB_USER;
  const pwd = process.env.DB_PWD;
  console.log(user, pwd);
  return {
    props: {
      title: `Article ${context.params.blogId} Title`,
      description: "Article description",
    },
  };
}
