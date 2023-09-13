import Head from "next/head";

export default function BlogDetails(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <h1 className="content">Single Article</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      title: `Article ${context.params.blogId} Title`,
      description: "Article description",
    },
  };
}
