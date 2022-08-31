import Head from "next/head";
import Header from "../components/header/Header";
import NewHero from "../page_components/newHero/NewHero";

const DesarrolloWeb = () => {

  return (
    <>
      <Head>
        <title>Desarrollo y Diseño web | Martín Padrón</title>
      </Head>

      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <NewHero title="Desarrollo y Diseño web."/>
    </>
  );
};

export default DesarrolloWeb;
