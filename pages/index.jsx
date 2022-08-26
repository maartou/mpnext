import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martín Padrón | Desarrollo y Diseño web</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <Header services="#servicios" />
        <Hero />
        <Services/>
        <Skills />
      </main>
    </>
  );
}
