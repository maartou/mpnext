import Head from "next/head";
import Header from "../components/header/Header";
import style from '../page_components/contenido/Contenido.module.scss'

import C1 from "../page_components/c1/C1";
import illus from "../public/img/illustrations/seo_illus.svg";

import Contenido from "../page_components/contenido/Contenido";

import C2 from "../page_components/c2/C2";
import { BiSupport } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

import Contacto from "../components/contacto/Contacto";

import Footer from "../components/footer/Footer";

const SEO = () => {
  return (
    <>
      <Head>
        <title>
          SEO Venezuela: consigue las primeras posiciones en Google | Martín
          Padrón
        </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta
          name="description"
          content="Consigue los primeros lugares en Google con las ultimas estrategias en SEO y SEM"
        />
        <meta
          name="keywords"
          content="seo, sem, martin padron seo, seo pagina web, seo sitio web, martin padron sem, seo desarrollo web, seo programacion, seo web, seo venezuela, seo que es"
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
        title="Consigue las primeras posiciones en Google con un buen posicionamiento SEO"
        content="Todo el mundo quiere salir primero en la primera página de Google, pero solo 10 de ellos lo consiguen. Es hora de que encuentren tú negocio entre esos primeros 10."
      />

      <section>
        <Contenido title="¿Qué es el SEO?">
          <p>
            <strong>¿Qué es el SEO?</strong> SEO es la abreviación de Search
            Engine Optimization (optimización en motores de búsqueda). Es el
            conjunto de técnicas y estrategias centradas en optimizar el
            posicionamiento orgánico en buscadores de internet. Algunos ejemplos
            son Google, Bing, Baidu, Yahoo!, Yandex, DuckDuckGo o YouTube.
          </p>
          <p>
            Contar con una página web para tu marca o empresa es la base de
            cualquier presencia digital, pero el esfuerzo de crearla no sirve de
            nada si no te aseguras de que tu audiencia la encuentre. Por eso, es
            imprescindible hacer que Google funcione a tu favor.
          </p>
          <p>
            Es muy importante tener claro que el SEO se refiere a los resultados
            orgánicos, esto es, no pagados. A la opción complementaria (pagar un
            coste por clic para ocupar los primeros lugares para una búsqueda
            determinada) se le conoce como SEM o Search Engine Marketing.{" "}
          </p>
        </Contenido>

        <Contenido title="¿Por qué es importante el SEO?">
          <p>
            La razón más importante por la que es necesario el SEO es porque
            <strong>hace más útil tu página web tanto para los usuarios como para los
            motores de búsqueda.</strong> Aunque estos aún no pueden ver una página web
            como lo hace un humano. El SEO es necesario para ayudar a los
            motores de búsqueda a entender sobre qué trata cada página y si es o
            no útil para los usuarios.
          </p>

          <p>
            El SEO es la mejor manera de que tus usuarios te encuentren a través
            de búsquedas en las que tu página web es relevante. Estos usuarios
            buscan lo que tú les ofreces. La mejor manera de llegar a ellos es
            mediante un motor de búsqueda.
          </p>
        </Contenido>

        <Contenido title="Ventajas de hacer una buena estrategia SEO">
          <p>
            Una buena implementación de SEO trae consigo grandes resultados y
            beneficios para tu sitio web:
          </p>
          <ul className={style.marketing_list}>
            <li>
              <strong>Multiplica tu visibilidad</strong> y te diferencia de la competencia.
            </li>
            <li>
              <strong>Mejora tu web:</strong> No sólo tu sitio web mejora de cara a los motores
              de búsqueda, sino también para los propios usuarios y la
              experiencia de estos en el mismo.
            </li>
            <li>
              <strong>Una inversión a largo plazo:</strong> A pesar de que al principio optimizar
              tu página web conlleva ciertos costos, si logras posicionarla
              entre los primeros puestos, la fuente de tráfico de calidad y sin
              costo alguno será extraordinaria. Como si fuese poco, si logras
              posicionar varias palabras claves o lanzarte al SEO internacional,
              los beneficios se multiplicarán.
            </li>
            <li>
              <strong>Aumenta tu impacto en las redes sociales:</strong> El posicionamiento web
              logra coordinarse con el social media, ya que los enlaces de las
              redes utilizan aquellos títulos y descripciones que optimizaste en
              tu estrategia SEO.
            </li>
          </ul>
        </Contenido>
      </section>

      <C2
        icon1={<BiSupport className="icon" />}
        servi1="Asesoría completa"
        content1="El posicionamiento es complejo, pero yo te ayudo en todo el camino."
        icon2={<AiOutlineLineChart className="icon" />}
        servi2="Sube a lo más alto"
        content2="Mejora tu visibilidad en Google con un posicionamiento de calidad"
        icon3={<BiBookBookmark className="icon" />}
        servi3="Keyword research"
        content3="Utilizo herramientas que permiten descubrir las palabras clave que llevarán a tus potenciales clientes a encontrar tu sitio web."
        icon4={<HiOutlinePresentationChartBar className="icon" />}
        servi4="Mejora tus métricas"
        content4="El primer paso es que te encuentren. Consiguen más tráfico de manera orgánica"
        title="Nuestros servicios"
      />

      <Contacto
        title="No esperes más"
        content="Empieza a aparecer en las primeras posiciones y dale la popularidad a tu marca que se merece."
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

export default SEO;
