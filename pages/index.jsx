import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";
import PortfolioComp from "../components/portfolio/PortfolioComp";
import Testimonios from "../components/testimonios/Testimonios";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Martín Padrón | Desarrollo y Diseño web</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <Header services="#servicios" portfolio="#portfolio" />
        <Hero />
        <Services/>
        <Skills />
        <PortfolioComp />
        <Testimonios />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
