import Head from "next/head";
import Header from "../components/header/Header";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";

const Marketing = () => {
  return (
    <>
      <Head>
        <title>
          Marketing digital y gestión de redes sociales en Venezuela
        </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href="https://www.martineduardo.com/marketing"/> 
        <meta
          name="description"
          content="Marketing digital para que empieces a ganar clientes a traves de internet con las mejores estrategias adaptadas a las necesidades de tu marca o empresa."
        />
        <meta
          name="keywords"
          content="marketing, marketing digital, gestion de redes sociales en venezuela, community manager, social media, martin padron, redes sociales estrategias"
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

export default Marketing;
