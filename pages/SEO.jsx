import Head from "next/head";
import Header from "../components/header/Header";
import NewHero from "../page_components/newHero/NewHero";

import C1 from "../page_components/c1/C1";
import illus from "../public/img/illustrations/seo_illus.svg";

import C2 from "../page_components/c2/C2";
import { BiSupport } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

import Contacto from "../components/contacto/Contacto";

import Footer from "../components/footer/Footer";

const SEO = () => {
  return (
    <>
      <Head>
        <title>SEO | Martín Padrón</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta name="description" content="Consigue los primeros lugares en Google con las ultimas estrategias en SEO y SEM" />
        <meta name="keywords" content="seo, sem, martin padron seo, seo pagina web, seo sitio web, martin padron sem, seo desarrollo web, seo programacion, seo web" />
      </Head>

      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <NewHero title="SEO." />

      <C1
        foto={illus}
        title="Consigue las primeras posiciones"
        content="Todo el mundo quiere salir primero en la primera página de Google, pero solo 10 de ellos lo consiguen. Es hora de que encuentren tú negocio entre esos primeros 10."
      />

      <C2
        icon1={<BiSupport className="icon" />}
        servi1="Asesoría completa"
        content1="El posicionamiento es complejo, pero yo te ayudo en todo el camino."
        icon2={<AiOutlineLineChart className="icon" />}
        servi2="Sube a lo más alto"
        content2="Mejora tu visibilidad en Google con un posicionamiento de calidad"
        icon3={<BiBookBookmark className="icon" />}
        servi3="Keyword research"
        content3="Utilizo herramientas que permiten descubrir las palabras clave que llevarán a tus potenciales clientes a encontrar tu sitio web."
        icon4={<HiOutlinePresentationChartBar className="icon" />}
        servi4="Mejora tus métricas"
        content4="El primer paso es que te encuentren. Consiguen más tráfico de manera orgánica"
      />

      <Contacto
        title="No esperes más"
        content="Empieza a aparecer en las primeras posiciones y dale la popularidad a tu marca que se merece."
      />

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/Portfolio"
        contacto="#contacto"
      />
    </>
  );
};

export default SEO;
