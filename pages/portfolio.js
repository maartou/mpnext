import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import PortfolioItem from "../components/portfolio/PortfolioItem";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";

import enviosurbana from "../public/img/portfolio/enviosurbana.png";
import urbanapay from "../public/img/portfolio/urbanapay.png";
import mqm from "../public/img/portfolio/mqm.png";
import entrada from "../public/img/portfolio/entrada.png";
import taxes from "../public/img/portfolio/taxes.png";
import sized from "../public/img/portfolio/sized.jpg";
import manuela from "../public/img/portfolio/manu.jpg";
import risup from "../public/img/portfolio/risup.png";
import modu from "../public/img/portfolio/modu.png";

import img1 from "../public/img/portfolio/Gym.png";
import img2 from "../public/img/portfolio/hollow.png";
import img3 from "../public/img/portfolio/homes.png";
import img4 from "../public/img/portfolio/jh.png";
import img5 from "../public/img/portfolio/Jordans.png";
import img6 from "../public/img/portfolio/makeup.png";
import img7 from "../public/img/portfolio/Mascotas.png";
import img8 from "../public/img/portfolio/Stile.png";
import img9 from "../public/img/portfolio/venecia.jpg";
import img10 from "../public/img/portfolio/venezuela.jpg";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio y trabajos recientes | Martin Padron</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href="https://www.martineduardo.com/portfolio" />
        <meta
          name="description"
          content="Bienvenido a mi portfolio. Aquí encontrarás lo último en diseño y desarrollo web"
        />
        <meta
          name="keywords"
          content="martin padron, martin padron portfolio, martin eduardo, martin eduardo portfolio, portfolio"
        />
        <meta
          property="og:image"
          content="https://www.martineduardo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog_image.d303d898.jpg&w=3840&q=75"
        />
      </Head>

      <Header />

      <main>
        {/* Titulo principal de la pagina  */}
        <div className="w-11/12 mx-auto my-10">
          <h1 className="text-center tracking-[.5em] uppercase font-light text-xl lg:text-3xl">
            Portfolio
          </h1>
          <p className="text-neutral-400 text-lg text-center max-w-xl mx-auto lg:text-xl 2xl:max-w-4xl">
            En esta sección podrás encontrar lo mejor de mis proyectos, así como
            mis trabajos recientes, colaboraciones con otras empresas y diseños
            web hechos por mi cuenta. Dale un vistazo!
          </p>
        </div>

        {/* Trabajos hechos con Oceanit  */}
        <section className="w-11/12 mx-auto mt-[4rem]">
          <div className="flex flex-col gap-3 2xl:gap-5">
            <h2 className="text-3xl lg:text-4xl font-light 2xl:text-6xl">
              Proyectos hechos con{" "}
              <a
                href="https://www.instagram.com/oceanit.io/"
                target="_blank"
                rel="noreferrer"
                className="text-primary-100"
              >
                Oceanit.IO
              </a>
            </h2>

            {/* Grid de los items  */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <PortfolioItem
                img={enviosurbana}
                alt="envios urbana"
                titulo="Envios Urbana"
                enlace="https://www.enviosurbana.com/"
              />
              <PortfolioItem
                img={urbanapay}
                alt="Urbana Pay"
                titulo="Urbana Pay"
                enlace="https://www.urbanapay.com/"
              />
              <PortfolioItem
                img={entrada}
                alt="entrada master"
                titulo="Entrada master"
                enlace="https://www.entradamaster.com/"
              />
              <PortfolioItem
                img={mqm}
                alt="me quiero mudar"
                titulo="Me quiero mudar"
                enlace="https://www.mequieromudar.com/"
              />
            </div>
          </div>
        </section>

        {/* Trabajos hechos por mi  */}
        <section className="w-11/12 mx-auto mt-[5rem] lg:mt-[7rem]">
          <div className="flex flex-col gap-3 2xl:gap-5">
            <h2 className="text-3xl lg:text-4xl font-light 2xl:text-6xl">
              Webs hechas por mi
            </h2>

            {/* Grid de los items  */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <PortfolioItem
                img={taxes}
                alt="taxes jmj"
                titulo="taxes jmj"
                enlace="https://www.taxesjmj.com/"
              />
              <PortfolioItem
                img={sized}
                alt="sized store"
                titulo="sized store"
                enlace="https://www.sizedstore.com/"
              />
              <PortfolioItem
                img={manuela}
                alt="manuela serrano"
                titulo="Manuela Serrano"
                enlace="https://www.manuelaserranoc.com/"
              />
              <PortfolioItem
                img={risup}
                alt="right-sup"
                titulo="right-sup technical services"
                enlace="https://risuptec.com/"
              />
              <PortfolioItem
                img={modu}
                alt="estructura modular"
                titulo="Estructura modular"
                enlace="https://esmodularweb.com/"
              />
            </div>
          </div>
        </section>

        {/* Diseño web  */}
        <section className="w-11/12 mx-auto my-[5rem] lg:my-[7rem]">
          <div className="flex flex-col gap-3 2xl:gap-5">
            <h2 className="text-3xl lg:text-4xl font-light 2xl:text-6xl">
              Diseño web
            </h2>
            {/* Grid para las fotosde diseño web  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <Image src={img1} alt="" placeholder="blur" />
              </div>
              <div>
                <Image src={img2} alt="" placeholder="blur" />
              </div>
              <div>
                <Image src={img3} alt="" placeholder="blur" />
              </div>
              <div>
                <Image src={img4} alt="" placeholder="blur" />
              </div>
              <div>
                <Image src={img5} alt="" placeholder="blur" />
              </div>
              <div>
                <Image src={img6} alt="" placeholder="blur" />
              </div>
              <div>
                <Image src={img7} alt="" placeholder="blur" />
              </div>
              <div>
                <Image src={img8} alt="" placeholder="blur" />
              </div>
              <div>
                <Image src={img9} alt="" placeholder="blur" />
              </div>
              <div>
                <Image src={img10} alt="" placeholder="blur" />
              </div>
            </div>
          </div>
        </section>
        <Contacto />
      </main>

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        contacto="#contacto"
        portfolio="/portfolio"
      />
    </>
  );
};

export default Portfolio;
