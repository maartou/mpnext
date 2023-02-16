import Head from "next/head";
import HeaderPage from "../components/header_page/HeaderPage";
import HeroPage2 from "../page_components/hero/HeroPage2";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";
import illus from "../public/img/illustrations/google.png";
import InfoCard from "../page_components/infocards/InfoCard";

import { BiHelpCircle } from "react-icons/bi";
import { BiLineChart } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { AiFillPieChart } from "react-icons/ai";
import ContactPage from "../page_components/contact/ContactPage";
import FooterPage from "../page_components/footer/FooterPage";

const SEO = () => {
  return (
    <>
      <Head>
        <title>Mejora el posicionamiento de tu sitio web con nuestros servicios de SEO</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href="https://www.martineduardo.com/seo" />
        <meta
          name="description"
          content="¿Quieres que tu sitio web aparezca en los primeros resultados de búsqueda? es posible aplicando las últimas estrategias en SEO para optimizar tu sitio web y mejorar su posicionamiento en los motores de búsqueda. Ofrezco un servicio completo de SEO que incluye investigación de palabras clave, optimización de contenido y enlaces entrantes. ¡Contáctanos para obtener más información!"
        />
        <meta
          name="keywords"
          content="seo, posicionamiento en motores de busqueda, optimizacion de sitios web, investigacion de palabras clave, optimizacion de contenido, enlaces entrantes, mejora el trafico organico, analisis de competencia, optimizacion de la velocidad del sitio, tecnicas seo"
        />
         <meta property="og:image" content="https://drive.google.com/file/d/1wwFPHoldxrsrr-ViacLv-gIR10Q-pmA6/view?usp=sharing" />
      </Head>

      <HeaderPage />

      <main className="bg-white text-black">
        <HeroPage2
          titulo="Mejora el posicionamiento de tu sitio web con nuestros servicios de SEO"
          descripcion="Ofrecemos servicios de SEO profesionales para ayudar a tu sitio web o red social a alcanzar un mejor posicionamiento en los motores de búsqueda, utilizamos técnicas probadas y efectivas para optimizar tu sitio y aumentar el tráfico orgánico."
          illus={illus}
          clase="bg-black flex items-center justify-center"
        />

        {/* Contenido textual  */}
        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2">¿Qué es el SEO?</h2>
            <p className="txt">
              El SEO (Search Engine Optimization, o Optimización para Motores de
              Búsqueda) es el proceso de mejorar la calidad y la cantidad del
              tráfico de un sitio web a través de resultados de búsqueda
              orgánicos. Esto se logra mediante el uso de técnicas y estrategias
              para optimizar el contenido y la estructura de un sitio web, con
              el fin de mejorar su posicionamiento en los resultados de búsqueda
              de los motores de búsqueda como Google.
            </p>
            <p className="txt">
              El objetivo del SEO es aumentar la visibilidad de un sitio web en
              los resultados de búsqueda orgánicos, con el fin de atraer a más
              tráfico calificado y aumentar las oportunidades de conversión
              (como la generación de leads o la venta de productos).
            </p>
            <p className="txt">
              Existen diferentes factores que afectan el posicionamiento de un
              sitio web en los resultados de búsqueda, como la calidad y la
              relevancia del contenido, la estructura del sitio, la presencia de
              palabras clave, entre otros. El SEO es una disciplina en constante
              evolución, ya que los motores de búsqueda como Google actualizan
              regularmente sus algoritmos y pautas para mejorar la calidad de
              sus resultados de búsqueda
            </p>
          </div>
        </section>

        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2">¿Por qué es importante el SEO?</h2>
            <p className="txt">
              El SEO (Search Engine Optimization) es importante porque puede
              ayudar a aumentar la visibilidad de un sitio web en los resultados
              de búsqueda de los motores de búsqueda como Google. Cuando un
              sitio aparece en los primeros resultados de búsqueda, es más
              probable que reciba tráfico y atraiga a nuevos visitantes. Esto
              puede ser especialmente importante para las empresas, ya que puede
              ayudar a atraer a más clientes potenciales y aumentar las ventas.
            </p>
            <p className="txt">
              Además, el SEO también puede ayudar a mejorar la experiencia del
              usuario al visitar un sitio web. Los sitios web optimizados para
              los motores de búsqueda suelen cargar más rápido, tener una
              estructura de navegación clara y ser fáciles de usar en
              dispositivos móviles. Todo esto puede hacer que los visitantes
              pasen más tiempo en el sitio y regresen en el futuro.
            </p>
            <p className="txt">
              En resumen, el SEO es importante porque puede ayudar a aumentar el
              tráfico y las ventas de un sitio web, así como mejorar la
              experiencia del usuario.
            </p>
          </div>
        </section>

        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2 lg:mb-4">
              Ventajas de hacer una buena estrategia SEO
            </h2>
            <ul className="txt flex flex-col gap-2 lg:gap-4">
              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor visibilidad:
                </strong>{" "}
                Un sitio web que está bien optimizado para los motores de
                búsqueda tendrá una mayor visibilidad en los resultados de
                búsqueda y, por lo tanto, recibirá más tráfico orgánico.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor autoridad:
                </strong>{" "}
                Los motores de búsqueda utilizan una serie de factores para
                determinar la autoridad y relevancia de un sitio web. Al
                optimizar adecuadamente su sitio, puede mejorar su autoridad y,
                por lo tanto, aumentar su posicionamiento en los resultados de
                búsqueda.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor engagement:
                </strong>{" "}
                Los visitantes que llegan a su sitio a través de los resultados
                de búsqueda son más propensos a interactuar con su sitio y a
                permanecer más tiempo en él. Esto puede llevar a un mayor
                engagement y conversión.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor rentabilidad:
                </strong>{" "}
                Un sitio web bien optimizado puede generar más tráfico orgánico
                y, por lo tanto, puede tener un impacto positivo en la
                rentabilidad de su negocio.
              </li>
            </ul>
          </div>
        </section>

        {/* Tarjetas de información  */}
        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <h2 className="title-h2 text-center max-w-[90%] mx-auto mb-5">
            Nuestros servicios:
          </h2>
          <div className="w-11/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              titulo="Asesoría completa"
              desc="El posicionamiento es complejo, pero yo te ayudo en todo el camino."
              icon={<BiHelpCircle />}
            />

            <InfoCard
              titulo="Sube a lo más alto"
              desc="Mejora tu visibilidad en Google con un posicionamiento de calidad"
              icon={<BiLineChart />}
            />

            <InfoCard
              titulo="Keyword research"
              desc="Utilizo herramientas que permiten descubrir las palabras clave que llevarán a tus potenciales clientes a encontrar tu sitio web."
              icon={<BiBook />}
            />

            <InfoCard
              titulo="Mejora tus métricas"
              desc="El primer paso es que te encuentren. Consiguen más tráfico de manera orgánica"
              icon={<AiFillPieChart />}
            />
          </div>
        </section>

        <ContactPage />
      </main>

      <FooterPage
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/portfolio"
        contacto="#contactopage"
      />
    </>
  );
};

export default SEO;
