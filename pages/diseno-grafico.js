import Head from "next/head";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";
import HeaderPage from "../components/header_page/HeaderPage";
import HeroPage from "../page_components/hero/HeroPage";
import InfoCard from "../page_components/infocards/InfoCard";

import img1 from "../public/img/designs/catfe.jpg";
import img2 from "../public/img/designs/futux.jpg";
import img3 from "../public/img/designs/menu.png";
import img4 from "../public/img/designs/piel.jpg";
import img5 from "../public/img/designs/tarjetas.png";
import img6 from "../public/img/designs/venecia.jpg";
import img7 from "../public/img/designs/risup.jpg";
import img8 from "../public/img/designs/blin.png";

import { GiResize } from "react-icons/gi";
import { DiPhotoshop } from "react-icons/di";
import { FaRegLightbulb } from "react-icons/fa";
import { BiDevices } from "react-icons/bi";
import ContactPage from "../page_components/contact/ContactPage";
import FooterPage from "../page_components/footer/FooterPage";

const Diseno_grafico = () => {
  return (
    <>
      <Head>
        <title>Diseño gráfico y creación de logos profesionales</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link
          rel="canonical"
          href="https://www.martineduardo.com/diseno-grafico"
        />
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

      <HeaderPage />

      <main className="bg-white text-black">
        <HeroPage
          titulo="Cómo el diseño gráfico puede mejorar la experiencia y visibilidad de tu marca"
          descripcion="El diseño gráfico es clave para mejorar la experiencia de usuario y aumentar la visibilidad de una marca en línea. Utilizamos elementos como tipografía, colores e imágenes para transmitir tu mensaje de manera atractiva y efectiva. Llegó la hora de utilizar el diseño gráfico estratégicamente para aumentar el impacto de tu marca!"
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          img6={img6}
          img7={img7}
          img8={img8}
        />

        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2">¿Qué es el diseño gráfico?</h2>
            <p className="txt">
              El diseño gráfico es el arte y la ciencia de crear y utilizar
              elementos visuales para comunicar ideas y mensajes de manera
              efectiva. Estos elementos visuales pueden incluir imágenes, texto,
              formas, colores, tipografía y otras características visuales que
              se utilizan para llamar la atención, transmitir un mensaje y
              evocar una respuesta emocional en el público objetivo.
            </p>
            <p className="txt">
              El diseño gráfico se utiliza en una amplia variedad de campos,
              como la publicidad, la comunicación corporativa, el diseño de
              productos, la industria de la moda y la industria editorial, entre
              muchos otros. Un diseño gráfico efectivo es capaz de transmitir un
              mensaje de manera clara y atractiva, y es esencial para cualquier
              empresa o individuo que desee promocionar sus productos o
              servicios de manera efectiva.
            </p>
          </div>
        </section>

        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2 lg:mb-4">
              ¿Por qué es importante el diseño gráfico?
            </h2>
            <ul className="txt flex flex-col gap-2 lg:gap-4">
              <li>
                <strong className="text-primary-100 text-xl">
                  Ayuda a comunicar el mensaje de manera clara y efectiva:
                </strong>{" "}
                El diseño gráfico permite transmitir un mensaje de manera visual
                y atractiva, lo que puede ser más efectivo que utilizar solo
                texto.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Establece la identidad de una marca:
                </strong>{" "}
                El diseño gráfico es esencial para establecer la identidad de
                una marca y su diferenciación en el mercado.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Ayuda a destacar entre la competencia:
                </strong>{" "}
                Un diseño gráfico atractivo y bien pensado puede ayudar a una
                empresa o individuo a destacar entre la competencia.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mejora la experiencia de usuario:
                </strong>{" "}
                Un diseño gráfico bien hecho puede mejorar la experiencia del
                usuario al interactuar con un producto o servicio, lo que puede
                llevar a una mayor lealtad del cliente.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Aumenta la confianza del cliente:
                </strong>{" "}
                Un diseño gráfico profesional y bien hecho puede aumentar la
                confianza del cliente en una empresa o producto, lo que puede
                llevar a un aumento de ventas.
              </li>
            </ul>
          </div>
        </section>

        {/* Tarjetas de información  */}
        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <h2 className="title-h2 text-center max-w-[90%] mx-auto mb-5">
            Nuestras especializaciones
          </h2>
          <div className="w-11/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              titulo="Todos los formatos"
              desc="Desde un post de instagram hasta vallas publicitarias."
              icon={<GiResize />}
            />

            <InfoCard
              titulo="Dominio de multiples aplicaciones"
              desc="Tales como Figma, Photoshop, Illustrator y muchos más."
              icon={<DiPhotoshop />}
            />

            <InfoCard
              titulo="Le damos forma a tus ideas"
              desc="Diseñamos a tu medida, cómo lo necesites y de la manera en que te lo imaginas."
              icon={<FaRegLightbulb />}
            />

            <InfoCard
              titulo="Diseño de mockups"
              desc="Verás tu diseño plasmado en la realidad."
              icon={<BiDevices />}
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

export default Diseno_grafico;
