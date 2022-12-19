import Head from "next/head";

import Header from "../components/header/Header";
import C1 from "../page_components/c1/C1";
import illus from "../public/img/illustrations/design_illus.svg";

import Contenido from "../page_components/contenido/Contenido";

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

      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <C1
        foto={illus}
        title="Diseño gráfico, branding y creación de logos profesionales"
        content="Desde el logo de tu empresa hasta revistas, folletos, vallas, banners y toda la imagen que involucre una campaña de mercadeo la hacemos realidad para ti. Una buena imagen es fundamental en cualquier empresa."
      />

      <section>
        <Contenido title="¿Qué es el diseño gráfico?">
          <p>
            <strong>¿Qué es el diseño gráfico?</strong> Muchas personas tienen
            una idea muy básica acerca de qué hace un diseñador gráfico. ¿Crean
            logotipos para empresas? ¿Producen anuncios para internet y
            revistas? ¿Editan imágenes con Photoshop?{" "}
          </p>
          <p>
            Según el American Institute of Graphic Arts (AIGA), el diseño
            gráfico se define como el arte y la práctica de planificar y
            proyectar ideas y experiencias con contenido visual y textual. En
            otras palabras, el diseño gráfico comunica ciertas ideas o mensajes
            de manera visual. Estos gráficos pueden ser tan simples como un
            logotipo de negocio o tan complejos como diseños de página en un
            sitio web.
          </p>
          <p>
            En un concepto amplio, el término diseño gráfico designa superficies
            bidimensionales materiales o virtuales (generadas por computadora),
            medios de comunicación visuales y soportes de información mediante
            la tipografía, la imagen, el color y el material. Asimismo, el
            diseño gráfico es un medio para representar visualmente el lenguaje
            y los pensamientos, así como para hacer visibles, legibles y
            comunicables las conexiones teóricas. Hoy en día, el diseño gráfico
            es un mediador en casi todos los ámbitos de la vida.
          </p>
        </Contenido>

        <Contenido title="¿Por qué es importante el diseño gráfico?">
          <p>
            Partiendo de la definición y la descripción de qué es el diseño
            gráfico de antes, es clave entender la importancia del diseño
            gráfico hoy en día, ya que esta puede ayudar a alcanzar todo tipo de
            objetivos mejorando la comunicación con otras personas.{" "}
          </p>
          <p>
            El ámbito de cosas que se pueden crear aprendiendo los fundamentos
            del diseño gráfico es enorme. Va desde presentaciones de empresa,
            pasando por folletos sencillos hasta{" "}
            <strong>modernos sitios web.</strong> El diseño gráfico te permite,
            por ejemplo:
          </p>
          <ul>
            <li>Causar una buena primera impresión.</li>
            <li>Distinguirte de la competencia.</li>
            <li>Proyectar una imagen de profesionalismo y confianza.</li>
            <li>
              Hacer que tus ideas tengan mayor alcance y resonancia a través del
              lenguaje y la comunicación visual.
            </li>
          </ul>
          <p>
            En resumen, el diseño gráfico es un arte muy poderoso que juega un
            papel destacado en áreas tan importantes como el marketing digital.
          </p>
          <p>
            Las empresas de éxito lo utilizan una y otra vez para dar a su
            perfil y a su marca una expresión contemporánea y moderna. Sin
            embargo, los fundamentos del diseño gráfico no solo son relevantes
            para fines comerciales, sino también en el campo del arte y la
            pintura.
          </p>
        </Contenido>
      </section>

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
        title="Conoce nuestras especializaciones"
      />

      <GridDiseno title="Portfolio y ejemplos" />

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
