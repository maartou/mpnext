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
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
        <meta
          name="description"
          content="Desarrollador Frontend y Diseñador UI/UX. Entra a conocerme y démosle presencia a tu negocio o empresa en el vasto mundo del internet, consigue clientes y potencia tus ventas conmigo."
        />
        <meta
          name="keywords"
          content="pagina web, sitio web, crear pagina web, programacion, javascript, html, css, desarrollo web, diseño ui, diseño ux, ui, ux, diseño de interfaz, freelance, diseño grafico, marketing, programador, martin padron,
          programador venezuela, pagina web venezuela, diseño web venezuela, diseño web"
        />
      </Head>
      <main>
        <Header services="#servicios" portfolio="#portfolio" servi_nav="#servicios" contacto_nav="#contacto" />
        <Hero />
        <Services />
        <Skills />
        <PortfolioComp />
        <Testimonios />
        <Contacto
          title="Hablemos"
          content="Ponte en contácto conmigo; cúentame qué necesitas y los detalles del servicio que requieres. ¡Trabajemos juntos! y consigamos cumplir todos tus objetivos, te espero para comenzar :)"
        />
        <Footer
          servicios="#servicios"
          experiencia="#experiencia"
          portfolio="#portfolio"
          contacto="#contacto"
        />
      </main>
    </>
  );
}
