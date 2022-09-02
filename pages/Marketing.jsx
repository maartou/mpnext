import Head from "next/head";
import Header from "../components/header/Header";
import NewHero from "../page_components/newHero/NewHero";

import C1 from "../page_components/c1/C1";
import illus from "../public/img/illustrations/marketing_illus.svg";

import C2 from "../page_components/c2/C2";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaChessPawn } from "react-icons/fa";

import Title2 from "../page_components/title_2/Title2";

import GridMarketing from "../page_components/grid_marketing/GridMarketing";

import Contacto from "../components/contacto/Contacto";

import Footer from "../components/footer/Footer";

const Marketing = () => {
  return (
    <>
      <Head>
        <title>Marketing | Martín Padrón</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <NewHero title="Marketing." />

      <C1
        foto={illus}
        title="Gestión de Redes sociales"
        content="Conoceremos a tu audiencia y estableceremos objetivos claros para crear contenido relevante, que entretenga y que sea frecuente. Además de medir los resultados de todas las redes sociales para fidelizar tus usuarios."
      />

      <C2
        icon1={<AiOutlineUser className="icon" />}
        servi1="Community manager"
        content1="Construiremos, ampliaremos y administraremos tu comunidad
        online."
        icon2={<BsSearch className="icon" />}
        servi2="Análisis"
        content2="Analizaremos tú audiencia para optimizar tus resultados."
        icon3={<AiOutlineSchedule className="icon" />}
        servi3="Planificación"
        content3="Mantenernos organizados y con los objetivos en mente es la clave para conseguir resultados."
        icon4={<FaChessPawn className="icon" />}
        servi4="Estrategia"
        content4="Nos enfocaremos en la creación y distribución de contenido relevante y
        de calidad, para dotar de valor y significado a la marca."
      />

      <Title2
        small="Google, instagram, facebook..."
        title="Lleva tu negocio a lo más alto"
      />

      <GridMarketing />

      <Contacto title="¿Comenzamos?" content="No esperes más y empieza a ganar clientes a través de internet" />

      <Footer servicios="/#servicios" experiencia="/#experiencia" portfolio="/Portfolio" contacto="#contacto" />
    </>
  );
};

export default Marketing;
