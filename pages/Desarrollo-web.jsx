import Head from "next/head";
import style from "../page_components/contenido/Contenido.module.scss";

import Header from "../components/header/Header";
import C1 from "../page_components/c1/C1";

import Contenido from "../page_components/contenido/Contenido";

import C2 from "../page_components/c2/C2";
import illus from "../public/img/illustrations/web_illus.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { FaServer } from "react-icons/fa";

import GridWeb from "../page_components/grid_img_web/GridWeb";

import Contacto from "../components/contacto/Contacto";

import Footer from "../components/footer/Footer";

const DesarrolloWeb = () => {
  return (
    <>
      <Head>
        <title>Diseño web: ¿qué es una página web? y razones del porqué deberías tener una</title>
        <meta
          name="description"
          content="Desarrollo de sitios web a tu medida y diseñadas en cualquier estilo, optimizadas para SEO, tiendas en linea, catalogos, portfolios, galerías y mucho más."
        />
        <meta
          name="keywords"
          content="martin padron, martin eduardo, diseño web curso, que es diseño grafico, diseño web venezuela, que es diseño web, diseño web que es, diseño de paginas web en venezuela, desarrollo web que es, desarrollo web venezuela, desarrollo web, diseño web"
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
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
        title="Diseño y desarrollo de páginas y sitios webs, todo lo que tu negocio necesita para adquirir conversiones"
        content="Con tu propio sitio web podrás conseguir más visitas y convertirlos en potenciales clientes más fácilmente, además de ganar autoridad frente a tu competencia, automatizar procesos, ahorrar tiempo y mucho más."
      />

      <section className={style.content_section}>
        <Contenido title="¿Qué es una página web?">
          <p>
            Se conoce como página Web, página electrónica o página digital a un
            documento digital de carácter multimediático (es decir, capaz de
            incluir audio, video, texto y sus combinaciones), adaptado a los
            estándares de la World Wide Web (WWW) y a la que se puede acceder a
            través de un navegador Web y una conexión activa a internet, se
            trata del formato básico de contenidos en la red.
          </p>
          <p>
            Las páginas Web se encuentran programadas en un formato HTML o
            XHTML, y se caracterizan por su relación entre unas y otras a través
            de
            <strong> hipervínculos:</strong> enlaces hacia contenidos diversos
            que permiten una lectura compleja, simultánea y diversa, muy
            distinta a la que podemos hallar en los libros y revistas.
          </p>
        </Contenido>

        <Contenido title="Diferencias entre página web, sitio web y aplicación web">
          <p>
            Una <strong> página web </strong> es cada una de las pantallas que
            vemos dentro de un Sitio Web, por ejemplo: la página de inicio,
            contacto, servicios, acerca de, preguntas frecuentes, etc. Estas
            páginas están construidas con HTML, CSS y pueden incluir JavaScript.
          </p>
          <p>
            Podemos definir a un <strong> sitio web </strong> como un conjunto
            de páginas dentro de un dominio. Por ejemplo, actualmente estás
            ubicado en una página de mi sitio web, que está conformado por
            páginas que describen los diferentes servicios que ofrezco. El
            objetivo de esto no es hacer negocio sino que es parte de una
            estrategia de marketing para ofertar productos o servicios al
            espectador.
          </p>
          <p>
            Puedes pensar esto como <strong> un libro </strong>, un libro está
            compuesto por muchas páginas: cada página individual ofrece
            información diferente a las demás páginas pero todo dentro de un
            mismo tema. Un sitio web es exactamente igual.
          </p>
          <p>
            Finalmente, una <strong> aplicación web </strong> es un programa
            desarrollado con tecnologías web. Pero lo que lo diferencia un sitio
            de una Aplicación Web es que no solo sirve para transmitir
            información al espectador, sino que la aplicación resuelve una
            necesidad o problema para los usuarios y cuenta con múltiples
            funcionalidades por ejemplo:
          </p>
          <ul>
            <li>Ofertar productos y permitirle al cliente comprarlos</li>
            <li>Ofrecer atención al cliente</li>
            <li>Mirar videos e interacciones multimedia</li>
            <li>Convertir archvios a otros formatos</li>
            <li>¡Y mucho más! el límite está en la imaginación.</li>
          </ul>
        </Contenido>

        <Contenido title="Razones del porqué deberías tener una página web">
          <dl className={style.list} id="razones">
            <dt>Clientes siempre informados</dt>
            <dd>
              En su forma más básica, un sitio web es cómo un folleto o cátalogo
              en línea que puede actualizarse en cualquier momento. Es mucho más
              fácil y rápido actualizar la información sobre sus productos y
              servicios en su sitio web que en un folleto impreso o catálogo.
            </dd>
          </dl>

          <dl className={style.list}>
            <dt>Exhibe productos y ofrece servicios</dt>
            <dd>
              Ya que puedes proporcionar las fotos y descripciones detalladas de
              tus productos o servicios, tendrás tu propio mostrador online.
            </dd>
          </dl>

          <dl className={style.list}>
              <dt>Control total del contenido publicado</dt>
              <dd>Incluso teniendo una gran presencia en las redes sociales, otra razón, y probablemente <strong> la razón más importante por la que deberías tener tener un sitio web, </strong> es que realmente tú eres el dueño de tu sitio, y tú controlas lo que publicas, cómo lo publicas y cúando lo publicas.</dd>
          </dl>

          <dl className={style.list}>
            <dt>Aumenta la visibilidad de tú negocio</dt>
            <dd>Ya que todos podemos encontrate más fácilmente.</dd>
          </dl>

          <dl className={style.list}>
            <dt>Siempre accesible</dt>
            <dd>Un sitio web está abierto las 24 horas del día, los 365 días del año.</dd>
          </dl>

          <dl className={style.list}>
            <dt>Muestra al mundo tus habilidades</dt>
            <dd>No importa el tipo de negocio, un sitio web es un excelente lugar para exhibir los trabajos realizados o demostrar tus habilidades. Al incluir un portfolio, galería de imágenes o vídeos.</dd>
          </dl>

          <dl className={style.list}>
            <dt>Tendrás una imagen profesional y creíble</dt>
            <dd>Para una pequeña empresa, un sitio web bien diseñado es una manera estupenda de formar credibilidad y verse más grande de lo que realmente es.</dd>
          </dl>
        </Contenido>
      </section>

      <C2
      title="¿Qué tendrá tu página web?"
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

      <GridWeb title="Ejemplos de diseño web" />

      <Contacto
        title="empecemos"
        content="Rellena el formulario o escríbeme al Whatsapp para cotizaciones y más información, te atenderé a la brevedad"
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

export default DesarrolloWeb;
