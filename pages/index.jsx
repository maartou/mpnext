import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title> Martin Padron. </title>
      </Head>
      <main>
        <Header />
        <Hero />
      </main>
    </>
  );
}
