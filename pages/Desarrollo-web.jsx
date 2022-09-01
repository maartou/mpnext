import Head from "next/head";

import Header from "../components/header/Header";
import NewHero from "../page_components/newHero/NewHero";
import C1 from "../page_components/c1/C1";
import C2 from "../page_components/c2/C2";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { FaServer } from "react-icons/fa";

import illus from "../public/img/illustrations/web_illus.svg";

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

      <NewHero title="Desarrollo y Diseño web." />

      <C1
        foto={illus}
        title="La solución definitiva"
        content="Démosle a tú negocio su propio sitio web y consigue más clientes/visitas, gana autoridad frente a tu competencia, automatiza procesos y descubre todas las ventajas al existir dentro de la web."
      />

      <C2
        icon1={<BsCodeSlash className="icon" />}
        servi1="Diseño a medida"
        content1="Con óptima experiencia de navegación garantizada."
        icon2={<BiShoppingBag className="icon" />}
        servi2="Vende Online"
        content2="¿Tienes una tienda u ofreces un servicio y quieres digitalizarlo? estás en el lugar correcto."
        icon3={<FaServer className="icon" />}
        servi3="Paquete completo"
        content3="Dominio, alojamiento y mantenimiento web. ¡Todo está incluido!"
        icon4={<AiOutlineInstagram className="icon" />}
        servi4="Redes sociales"
        content4="¿Quieres que las personas que visiten tu web también visiten tus redes sociales? ¡Es posible!"
      />
    </>
  );
};

export default DesarrolloWeb;
