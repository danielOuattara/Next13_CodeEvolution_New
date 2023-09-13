export default function NewsHome(props) {
  return <h1 className="content">{props.data}</h1>;
}

export async function getStaticProps(context) {
  //   console.log("context = ", context);
  console.log("Running getStaticProps", context.previewData);

  return {
    props: {
      data: context.preview
        ? "List of draft articles"
        : "List of published articles",
    },
  };
}
