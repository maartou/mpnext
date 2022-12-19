import Head from "next/head";
import Header from "../components/header/Header";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";

const Diseno_grafico = () => {
  return (
    <>
      <Head>
        <title>
          Diseño gráfico y creación de logos profesionales
        </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href="https://www.martineduardo.com/diseno-grafico"/> 
        <meta
          name="description"
          content="Desde el logo de tu empresa hasta revistas, folletos, vallas, banners y toda la imagen que involucre una campaña de mercadeo la hacemos realidad para ti."
        />
        <meta
          name="keywords"
          content="diseño grafico, que es diseño grafico, diseño grafico venezuela, diseño grafico caracas, para que sirve diseño grafico, que hace diseño grafico, crear un logo, branding para marcas, creacion de logos profesionales"
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

export default Diseno_grafico;
