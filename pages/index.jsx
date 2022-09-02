import Head from "next/head";
import Script from "next/script";
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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WKJLZ67KL9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-WKJLZ67KL9');`}
      </Script>

      <Head>
        <title>Martín Padrón | Desarrollo y Diseño web</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta
          name="description"
          content="Desarrollador Frontend y Diseñador UI/UX. Entra a conocerme y démosle presencia a tu negocio o empresa en el vasto mundo del internet, consigue clientes y potencia tus ventas conmigo."
        />
        <meta
          name="keywords"
          content="pagina web, sitio web, crear pagina web, programacion, javascript, html, css, desarrollo web, diseño ui, diseño ux, ui, ux, diseño de interfaz, freelance, diseño grafico, marketing, programador, martin padron,
          programador venezuela, pagina web venezuela, diseño web venezuela, diseño web, martin padron, martin eduardo"
        />
      </Head>

      <main>
        <Header
          services="#servicios"
          portfolio="#portfolio"
          servi_nav="#servicios"
          contacto_nav="#contacto"
        />
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
