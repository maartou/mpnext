import Head from "next/head";

import Header from "../components/header/Header";
import NewHero from "../page_components/newHero/NewHero";
import C1 from "../page_components/c1/C1";
import illus from "../public/img/illustrations/design_illus.svg";

import C2 from "../page_components/c2/C2";
import { BsLightbulb } from "react-icons/bs";
import { BiDevices } from "react-icons/bi";
import { BiShapeSquare } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";

import Title2 from "../page_components/title_2/Title2";

import GridDiseno from "../page_components/grid_img_diseno/GridDiseno";

import Contacto from "../components/contacto/Contacto";

import Footer from "../components/footer/Footer";

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

      <C1
        foto={illus}
        title="Digitalizamos tus ideas"
        content="Desde el logo de tu empresa hasta revistas, folletos, vallas, banners y toda la imagen que involucre una campaña de mercadeo la hago realidad para ti. Una buena imagen es fundamental."
      />

      <C2
        icon1={<BiShapeSquare className="icon" />}
        servi1="Todos los formatos"
        content1="Desde un post de instagram hasta vallas publicitarias."
        icon2={<MdDesignServices className="icon" />}
        servi2="Dominio de múltiples aplicaciones"
        content2="Tales como Figma, Photoshop, Illustrator y muchos más."
        icon3={<BsLightbulb className="icon" />}
        servi3="Le damos forma a tus ideas"
        content3="Diseñamos a tu medida, cómo lo necesites y de la manera en que te lo imaginas."
        icon4={<BiDevices className="icon" />}
        servi4="Diseño de mockups"
        content4="Verás tu diseño plasmado en la realidad."
      />

      <Title2
        small="Diseño único y exclusivo para ti"
        title="Tu identidad visual te hará destacar entre la competencia"
      />

      <GridDiseno />

      <Contacto
        title="Tus ideas hechas realidad"
        content="Ponte en contacto conmigo y cúentame tus ideas, te aseguro que las haremos realidad..."
      />

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/Portfolio"
        contacto="#contacto"
      />
    </>
  );
};

export default Diseno_grafico;
