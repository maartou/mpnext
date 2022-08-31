import Head from "next/head";
import Header from "../components/header/Header";
import NewHero from "../page_components/newHero/NewHero";

const SEO = () => {
  return (
    <>
      <Head>
        <title>SEO | Martín Padrón</title>
      </Head>

      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <NewHero title="SEO." />
    </>
  );
};

export default SEO;
