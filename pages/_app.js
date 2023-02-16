import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#2b2bff" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
