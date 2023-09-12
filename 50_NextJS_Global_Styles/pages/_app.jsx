import "@/styles/globals.css"; // <--- import here in the wrapper component for the whole application
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
