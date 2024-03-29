import Head from "next/head";
import Header from "../components/header/Header";
import AboutHero from "../components/about_page/AboutHero";
import Footer from "../components/footer/Footer";

const SobreMi = () => {
  return (
    <>
      <Head>
        <title> Conoce un poco más sobre mi: Martín Padrón </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href="https://www.martineduardo.com/sobre-mi"/> 
        <meta
          name="description"
          content="Soy Martin Padron, desarrollador frontend y diseñador ui/ux y puedo ayudarte a construir tu propia página web. Entra y conóceme un poco más."
        />
        <meta
          name="keywords"
          content="martin padron, martin eduardo, martin padron programador, martin padron desarrollador web, martin padron desarrollador, frontend"
        />
         <meta property="og:image" content="https://drive.google.com/file/d/1wwFPHoldxrsrr-ViacLv-gIR10Q-pmA6/view?usp=sharing" />
      </Head>

      <Header />

      <main>
        <AboutHero />
      </main>


      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/portfolio"
        contacto="/#contacto"
      />
    </>
  );
};

export default SobreMi;
