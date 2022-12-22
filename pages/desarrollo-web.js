import Head from "next/head";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";
import HeroPage from "../page_components/hero/HeroPage";
import HeaderPage from "../components/header_page/HeaderPage";

import img1 from "../public/img/portfolio/Gym.png";
import img2 from "../public/img/portfolio/hollow.png";
import img3 from "../public/img/portfolio/jh.png";
import img4 from "../public/img/portfolio/venecia.jpg";
import img5 from "../public/img/portfolio/Tasty.png";
import img6 from "../public/img/portfolio/Stile.png";
import img7 from "../public/img/portfolio/makeup.png";
import img8 from "../public/img/portfolio/venezuela.jpg";

import InfoCard from "../page_components/infocards/InfoCard";
import { BiCodeAlt } from "react-icons/bi";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import ContactPage from "../page_components/contact/ContactPage";
import FooterPage from "../page_components/footer/FooterPage";

const DesarrolloWeb = () => {
  return (
    <>
      <Head>
        <title>
          Diseño web: ¿qué es una página web? y razones del porqué deberías
          tener una
        </title>
        <meta
          name="description"
          content="Desarrollo de sitios web a tu medida y diseñadas en cualquier estilo, optimizadas para SEO, tiendas en linea, catalogos, portfolios, galerías y mucho más."
        />
        <meta
          name="keywords"
          content="martin padron, martin eduardo, diseño web curso, que es diseño grafico, diseño web venezuela, que es diseño web, diseño web que es, diseño de paginas web en venezuela, desarrollo web que es, desarrollo web venezuela, desarrollo web, diseño web"
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link
          rel="canonical"
          href="https://www.martineduardo.com/desarrollo-web"
        />
        <meta
          property="og:image"
          content="https://www.martineduardo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog_image.d303d898.jpg&w=3840&q=75"
        />
      </Head>

      <HeaderPage />

      <main className="bg-white text-black">
        <HeroPage
          titulo="Desarrollo y diseño web personalizado para tu empresa o negocio"
          descripcion=" Descubre como el desarrollo de sitios web y diseño de interfaz de
              usuario pueden ayudar a impulsar el éxito de tu empresa."
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          img6={img6}
          img7={img7}
          img8={img8}
        />

        {/* Contenido textual  */}
        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2">¿Qué es una página web?</h2>
            <p className="txt">
              Una página web es un documento o conjunto de documentos que se
              encuentran en Internet y que se pueden acceder a través de un
              navegador de Internet, como Google Chrome, Firefox o Safari.
            </p>
            <p className="txt">
              Las páginas web suelen contener texto, imágenes, videos y enlaces
              a otros documentos o páginas web. Las páginas web se crean
              utilizando lenguajes de programación como HTML, CSS y JavaScript y
              se almacenan en servidores de Internet, que son computadoras que
              están conectadas a Internet y que permiten que otros usuarios
              accedan a ellas a través de un navegador de Internet.
            </p>
          </div>
        </section>

        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2">
              Diferencias entre página web, sitio web y aplicación web
            </h2>
            <ul className="txt flex flex-col gap-2">
              <li>
                Una <strong className="text-primary-100">página web</strong> es
                un documento o conjunto de documentos que se encuentran en
                Internet y que se pueden acceder a través de un navegador de
                Internet. Una página web suele contener texto, imágenes, videos
                y enlaces a otros documentos o páginas web.
              </li>
              <li>
                Un <strong className="text-primary-100">sitio web</strong> es un
                conjunto de páginas web que están relacionadas entre sí y que
                suelen tener una estructura común. Por ejemplo, un sitio web de
                una empresa podría incluir una página principal, páginas de
                productos o servicios, páginas de contacto y un blog.
              </li>
              <li>
                Una <strong className="text-primary-100">aplicación web</strong>{" "}
                es un programa que se ejecuta en un navegador de Internet y que
                permite realizar tareas o acceder a información a través de
                Internet. Algunos ejemplos de aplicaciones web son el correo
                electrónico en línea, el editor de texto en línea y el juego en
                línea.
              </li>
            </ul>
            <p className="txt">
              En resumen, una{" "}
              <strong className="text-primary-100">página web</strong> es un
              documento individual que se encuentra en Internet, mientras que un{" "}
              <strong className="text-primary-100">sitio web</strong> es un
              conjunto de páginas web relacionadas y una{" "}
              <strong className="text-primary-100">aplicación web</strong> es un
              programa que se ejecuta en un navegador y permite realizar tareas
              o acceder a información a través de Internet.
            </p>
          </div>
        </section>

        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <div className="container-txt">
            <h2 className="title-h2">
              ¿Por qué deberías tener una página web?
            </h2>
            <ul className="txt flex flex-col gap-2 lg:gap-4">
              <li>
                <strong className="text-primary-100 text-xl">
                  Presencia en línea:
                </strong>{" "}
                Una página web te permite tener una presencia en línea y estar
                disponible para que clientes potenciales te encuentren y
                obtengan información sobre su negocio, productos o servicios.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor alcance:
                </strong>{" "}
                Una página web te permite llegar a un público más amplio y
                global, más allá de tu ubicación física.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor credibilidad:
                </strong>{" "}
                Tener una web le da a tu negocio una apariencia más profesional
                y le brinda mayor credibilidad a tus clientes.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor eficiencia:
                </strong>{" "}
                Una web te permite brindar información y servicios de manera más
                eficiente y económica que otras formas de marketing. Por
                ejemplo, puedes utilizar una página web para proporcionar
                información de contacto, horarios de atención y precios de
                manera actualizada y fácilmente accesible para sus clientes.
              </li>

              <li>
                <strong className="text-primary-100 text-xl">
                  Mayor flexibilidad:
                </strong>
                También podrás actualizar y cambiar tu contenido de manera más
                rápida y sencilla que otras formas de marketing, lo que le
                permite adaptarse a los cambios en el mercado y en tus
                necesidades de negocio.
              </li>
            </ul>
          </div>
        </section>

        {/* Tarjetas de información  */}
        <section className="mt-10 lg:mt-[4rem] 2xl:mt-[4.5rem]">
          <h2 className="title-h2 text-center max-w-[90%] mx-auto mb-5">
            ¿Qué tendrá tu página web?
          </h2>
          <div className="w-11/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              titulo="Diseño a medida"
              desc="con óptima experiencia de navegación garantizada"
              icon={<BiCodeAlt />}
            />

            <InfoCard
              titulo="Vende Online"
              desc="¿Tienes una tienda u ofreces servicio y quieres digitalizarlo? estás en el lugar correcto."
              icon={<MdLocalGroceryStore />}
            />

            <InfoCard
              titulo="Paquete completo"
              desc="Dominio, alojamiento y mantenimiento web. ¡Todo está incluido!"
              icon={<FaServer />}
            />

            <InfoCard
              titulo="Redes sociales"
              desc="¿Quieres que las personas visiten tu web también visiten tus redes sociales? ¡Es posible!"
              icon={<AiFillInstagram />}
            />
          </div>
        </section>

        {/* Contacto  */}
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

export default DesarrolloWeb;
