import Footer from "@/components/Footer";

export default function About() {
  return <div className="layout-about"> About content </div>;
}

About.getLayout = function PageLayout(self) {
  return (
    <>
      {self}
      <Footer />
    </>
  );
};
