import Footer from "@/components/Footer";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About page NextJs Course </title>
        <meta name="description" content="super course on NextJs" />
      </Head>
      <h1 className="layout-about"> About content </h1>;
    </>
  );
}

About.getLayout = function PageLayout(self) {
  return (
    <>
      {self}
      <Footer />
    </>
  );
};
