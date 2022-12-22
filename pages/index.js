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
        <title>
          Desarrollo y diseño web: creación de sitios atractivos y efectivos con
          Martín Padrón
        </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href="https://www.martineduardo.com" />
        <meta
          name="description"
          content="Ofrezco servicios profesionales de desarrollo y diseño web para ayudar a mis clientes a crear sitios atractivos y efectivos. Me aseguraré de que tu sitio sea intuitivo, fácil de usar y optimizado para el SEO. ¡Contáctame hoy mismo para obtener más información!"
        />
        <meta
          name="keywords"
          content="martin padron, diseño web, desarollo web, diseño de sitios web, diseño de páginas web, desarrollo de páginas web, diseño y desarrollo web, diseño web profesional, desarrollo web profesional, servicios de diseño web"
        />

        <meta
          property="og:title"
          content="Desarrollo y diseño web: creación de sitios atractivos y efectivos con
          Martín Padrón"
        />

        <meta
          property="og:description"
          content="Ofrezco servicios profesionales de desarrollo y diseño web para ayudar a mis clientes a crear sitios atractivos y efectivos. Me aseguraré de que tu sitio sea intuitivo, fácil de usar y optimizado para el SEO. ¡Contáctame hoy mismo para obtener más información!"
        />

        <meta property="og:site_name" content="Martin Padron" />
      </Head>

      <div className="sticky left-0 top-0 z-[20] md:hidden">
        <Header />
      </div>

      <main className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Skills />
        <PortfolioComp />
        <Testimonios />
        <Contacto />
      </main>

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/portfolio"
        contacto="/#contacto"
      />
    </>
  );
}
