import style from "../styles/NotFound.module.scss";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const NotFound = () => {
  return (
    <>
      <Head>
        <title> 404 página no encontrada </title>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <div className={style.section}>
        <div className={style.content}>
            <p>404</p>
            <p>Página no encontrada, se pudo haber movido o eliminado.</p>
            <Link href="/"> Volver al Inicio </Link>
        </div>

      </div>

      <Footer servicios="/#servicios" experiencia="/#experiencia" portfolio="/Portfolio" contacto="/#contacto" />

    </>
  );
};

export default NotFound;
