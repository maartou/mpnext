import Head from "next/head";
import Header from "../components/header/Header";

import Contacto from "../components/contacto/Contacto";

import Footer from "../components/footer/Footer";

const SEO = () => {
  return (
    <>
      <Head>
        <title>
          SEO Venezuela: consigue las primeras posiciones en Google
        </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href="https://www.martineduardo.com/seo"/> 
        <meta
          name="description"
          content="Consigue los primeros lugares en Google con las ultimas estrategias en SEO y SEM"
        />
        <meta
          name="keywords"
          content="seo, sem, martin padron seo, seo pagina web, seo sitio web, martin padron sem, seo desarrollo web, seo programacion, seo web, seo venezuela, seo que es"
        />
        <meta
          property="og:image"
          content="https://www.martineduardo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog_image.d303d898.jpg&w=3840&q=75"
        />
      </Head>

      <Header/>

      <Contacto/>

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/portfolio"
        contacto="#contacto"
      />
    </>
  );
};

export default SEO;
