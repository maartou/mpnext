import Head from "next/head";
import Header from "../components/header/Header";
import NewHero from "../page_components/newHero/NewHero";

const Diseno_grafico = () => {
  return (
    <>
      <Head>
        <title>Diseño gráfico | Martín Padrón</title>
      </Head>

      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <NewHero title="Diseño gráfico." />
    </>
  );
};

export default Diseno_grafico;
