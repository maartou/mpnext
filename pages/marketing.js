import Head from "next/head";
import HeaderPage from "../components/header_page/HeaderPage";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";
import HeroPage2 from "../page_components/hero/HeroPage2";

import illus from "../public/img/illustrations/space2.jpg";
import InfoCard from "../page_components/infocards/InfoCard";

import { AiOutlineUser } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaChessPawn } from "react-icons/fa";
import FooterPage from "../page_components/footer/FooterPage";
import ContactPage from "../page_components/contact/ContactPage";

const Marketing = () => {
  return (
    <>
      <Head>
        <title>
          Expertos en marketing digital para impulsar el crecimiento de tu
          empresa
        </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href="https://www.martineduardo.com/marketing" />
        <meta
          name="description"
          content="¿Quieres llevar tu negocio al siguiente nivel? Nuestro equipo de profesionales en marketing digital te ayudará a impulsar el crecimiento de tu empresa a través de estrategias de publicidad en línea, SEO, redes sociales y más. ¡Contáctanos para obtener una consultoría gratuita!"
        />
        <meta
          name="keywords"
          content="marketing digital, publicidad en linea, seo, redes sociales, estrategias de marketing, analisis de datos, publicidad en google, marketing de contenidos, publicidad en redes sociales"
        />
         <meta property="og:image" content="https://drive.google.com/file/d/1wwFPHoldxrsrr-ViacLv-gIR10Q-pmA6/view?usp=sharing" />
      </Head>

      <HeaderPage />

      <main className="bg-white text-black">
        <HeroPage2
          titulo="Cómo el marketing digital puede ayudar a tu negocio a crecer"
          descripcion="El marketing digital es una herramienta esencial para cualquier negocio que desee crecer y tener éxito en el mundo digital. A través del uso de técnicas como el SEO, el marketing de contenidos y las redes sociales, puedes llegar a tu público objetivo de manera efectiva y aumentar tus ventas y ganancias."
          illus={illus}
          clase="bg-black"
        />

        {/* Contenido textual  */}
        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2">¿Qué es el marketing digital?</h2>
            <p className="txt">
              El marketing digital es un conjunto de estrategias y técnicas de
              promoción y publicidad que se realizan en línea, a través de
              internet, con el fin de llegar a potenciales clientes y fidelizar
              a los existentes. Estas estrategias pueden incluir anuncios en
              redes sociales, campañas de correo electrónico, publicidad en
              buscadores como Google, contenidos en blogs y sitios web, entre
              otras.
            </p>
            <p className="txt">
              El objetivo del marketing digital es aumentar el tráfico en un
              sitio web, generar leads (prospectos) y, finalmente, convertir a
              estos visitantes en clientes. También se utiliza para medir el
              rendimiento de las campañas de marketing y hacer ajustes para
              mejorar los resultados.
            </p>
            <p className="txt">
              El marketing digital es una parte importante de la estrategia de
              marketing de cualquier empresa, ya que permite llegar a un público
              amplio y en cualquier parte del mundo, y ofrece la posibilidad de
              medir y analizar el rendimiento de las campañas de manera precisa.
            </p>
          </div>
        </section>

        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2">Ventajas del marketing digital</h2>
            <p className="txt">
              El marketing digital ofrece muchas ventajas a las empresas,
              algunas de las cuales son:
            </p>
            <ul className="txt flex flex-col gap-2 lg:gap-4">
              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor alcance:
                </strong>{" "}
                Internet es una herramienta global que permite llegar a un
                público amplio en cualquier parte del mundo.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor precisión:
                </strong>{" "}
                Las campañas de marketing digital permiten segmentar el público
                objetivo y llegar a ellos de manera más precisa y personalizada.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor medibilidad:
                </strong>{" "}
                El marketing digital permite medir y analizar el rendimiento de
                las campañas de manera precisa, lo que permite a las empresas
                saber qué estrategias están funcionando y cómo pueden
                mejorarlas.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor eficiencia:
                </strong>{" "}
                Las campañas de marketing digital permiten llegar a un público
                amplio de manera más eficiente y a un costo menor que otras
                formas de publicidad tradicionales.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor interacción:
                </strong>
                El marketing digital permite a las empresas interactuar con sus
                clientes y potenciales clientes de manera más directa y
                personalizada a través de redes sociales, correo electrónico y
                otros canales.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2">
              Diferencia entre marketing digital y diseño gráfico
            </h2>
            <p className="txt">
              El marketing digital se centra en promocionar y publicitar
              productos o servicios en línea, mientras que el diseño gráfico se
              centra en crear y presentar información visualmente atractiva y
              coherente. Ambos son disciplinas importantes para el éxito de una
              empresa en el mundo digital, pero tienen objetivos y enfoques
              diferentes.
            </p>
          </div>
        </section>

        {/* Tarjetas de información  */}
        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <h2 className="title-h2 text-center max-w-[90%] mx-auto mb-5">
            Nuestros servicios
          </h2>
          <div className="w-11/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              titulo="Comunity manager"
              desc="Construiremos, ampliaremos y administraremos tu comunidad online."
              icon={<AiOutlineUser />}
            />

            <InfoCard
              titulo="Análisis"
              desc="Analizaremos tú audiencia para optimizar tus resultados."
              icon={<SiGoogleanalytics />}
            />

            <InfoCard
              titulo="Planificación"
              desc="Mantenernos organizados y con los objetivos en mente es la clave para conseguir resultados."
              icon={<AiOutlineSchedule />}
            />

            <InfoCard
              titulo="Estrategia"
              desc="Nos enfocaremos en la creación y distribución de contenido relevante y de calidad, para dotar de valor y significado a la marca."
              icon={<FaChessPawn />}
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

export default Marketing;
