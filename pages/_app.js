import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#2b2bff" />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
