import Head from "next/head";
import Header from "../components/header/Header";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";
import HeroPage from "../page_components/hero/HeroPage";

const DesarrolloWeb = () => {
  return (
    <>
      <Head>
        <title>
          Diseño web: ¿qué es una página web? y razones del porqué deberías
          tener una
        </title>
        <meta
          name="description"
          content="Desarrollo de sitios web a tu medida y diseñadas en cualquier estilo, optimizadas para SEO, tiendas en linea, catalogos, portfolios, galerías y mucho más."
        />
        <meta
          name="keywords"
          content="martin padron, martin eduardo, diseño web curso, que es diseño grafico, diseño web venezuela, que es diseño web, diseño web que es, diseño de paginas web en venezuela, desarrollo web que es, desarrollo web venezuela, desarrollo web, diseño web"
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link
          rel="canonical"
          href="https://www.martineduardo.com/desarrollo-web"
        />
        <meta
          property="og:image"
          content="https://www.martineduardo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog_image.d303d898.jpg&w=3840&q=75"
        />
      </Head>

      <Header />

      <main>
        <HeroPage />
      </main>

      <Contacto />

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/portfolio"
        contacto="#contacto"
      />
    </>
  );
};

export default DesarrolloWeb;
