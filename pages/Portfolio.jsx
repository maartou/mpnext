import Head from "next/head";
import Image from "next/image";

import style from "../styles/Portfolio.module.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Title from "../components/extra/title/Title";
import Contacto from "../components/contacto/Contacto";

import jh from "../public/img/portfolio/jh.png";
import gym from "../public/img/portfolio/Gym.png";
import hollow from "../public/img/portfolio/hollow.png";
import jordans from "../public/img/portfolio/Jordans.png";
import stile from "../public/img/portfolio/Stile.png";
import homes from "../public/img/portfolio/homes.png";
import makeup from "../public/img/portfolio/makeup.png";
import mascotas from "../public/img/portfolio/Mascotas.png";
import tasty from "../public/img/portfolio/Tasty.png";
import venezuela from "../public/img/portfolio/venezuela.jpg";
import venecia from "../public/img/portfolio/venecia.jpg";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Martin Padron</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta name="description" content="Bienvenido a mi portfolio. Aquí encontrarás lo último en diseño y desarrollo web" />
        <meta name="keywords" content="martin padron, martin padron portfolio, martin eduardo, martin eduardo portfolio, portfolio" />
      </Head>

      <Header services="/#servicios" portfolio="/Portfolio" servi_nav="/#servicios" contacto_nav="#contacto" />

      <div className={style.hero}>
        <h2>Port <br/> folio.</h2>
      </div>

      <Title
        content="Aqui encontrarás lo mejor de mis diseños para webs, echa un vistazo y disfruta."
      />

      <section className={style.portfolio_page}>
        <Image src={jh} alt="Juan hernadez" />
        <Image src={gym} alt="gym landing page" />
        <Image src={jordans} alt="jordan shoe landing page" />
        <Image src={hollow} alt="hollow knight landing page" />
        <Image src={stile} alt="stile landing page" />
        <Image src={homes} alt="home landing page" />
        <Image src={mascotas} alt="mascotas landing page" />
        <Image src={makeup} alt="makeup landing page" />
        <Image src={tasty} alt="tasty burger landing page" />
        <Image src={venezuela} alt="venezuela landing page" />
        <Image src={venecia} alt="venecia branding" />
      </section>

      <Contacto
        title="¿Te gustaron?"
        content="Esto es solo una muestra de lo que puedo hacer, ¡ponte en contacto conmigo y hagamos que tu web luzca espectacular!"
      />

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        contacto="#contacto"
        portfolio="/Portfolio"
      />
    </>
  );
};

export default Portfolio;
