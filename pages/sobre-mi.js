import Head from "next/head";
import Header from "../components/header/Header";
import AboutHero from "../components/about_page/AboutHero";
import Footer from "../components/footer/Footer";

const SobreMi = () => {
  return (
    <>
      <Head>
        <title> Conóceme un poco más | Martín Padrón </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta
          name="description"
          content="Soy Martin Padron, desarrollador frontend y diseñador ui/ux. Entra y conóceme un poco más."
        />
        <meta
          name="keywords"
          content="martin padron, martin eduardo, martin padron programador, martin padron desarrollador web, martin padron desarrollador, frontend"
        />
        <meta
          property="og:image"
          content="https://www.martineduardo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog_image.d303d898.jpg&w=3840&q=75"
        />
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
