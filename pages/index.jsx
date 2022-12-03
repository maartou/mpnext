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
          Martin Padron: Desarrollo y diseño de páginas web en Venezuela
        </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta
          name="description"
          content="Diseño y desarrollo de páginas web a medida y en cualquier estilo, optimizadas para SEO, tiendas en linea, catalogos, portfolios, galerías y mucho más."
        />
        <meta
          name="keywords"
          content="martin padron, martin eduardo, diseño web curso, que es diseño grafico, diseño web venezuela, que es diseño web, diseño web que es, diseño de paginas web en venezuela, desarrollo web que es, desarrollo web venezuela, desarrollo web, diseño web"
        />

        <meta
          property="og:title"
          content="Martin Padron | Desarrollo y diseño de páginas web en Venezuela"
        />

        <meta
          property="og:description"
          content="Diseño y desarrollo de páginas web a medida y en cualquier estilo, optimizadas para SEO, tiendas en linea, catalogos, portfolios, galerías y mucho más."
        />

        <meta property="og:site_name" content="Martin Padron" />

        <meta
          property="og:image"
          content="https://www.martineduardo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog_image.d303d898.jpg&w=3840&q=75"
        />
      </Head>

      <div className="lg:hidden">
        <Header />
      </div>

      <main className="flex flex-col gap-10">
        <Hero />
        <Services />
        <Skills />
        <PortfolioComp />
        <Testimonios />
        <Contacto
          title="Hablemos"
          content="Ponte en contácto conmigo; cúentame qué necesitas y los detalles del servicio que requieres. ¡Trabajemos juntos! y consigamos cumplir todos tus objetivos, te espero para comenzar :)"
        />
      </main>

      <Footer
        servicios="#servicios"
        experiencia="#experiencia"
        portfolio="#portfolio"
        contacto="#contacto"
      />
    </>
  );
}
