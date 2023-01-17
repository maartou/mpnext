import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";
import { BsPatchCheckFill } from "react-icons/bs";
import Pcard from "../components/precios/Pcard";

const Precios = () => {
  return (
    <>
      <Head>
        <title>Precios de planes para desarrollo y diseño web: Martín Padrón</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href="https://www.martineduardo.com/precios" />
        <meta
          name="description"
          content="Obten cotizaciones y precios para diseño y desarrollo web, todo en un solo lugar"
        />
        <meta
          name="keywords"
          content="martin padron, martin padron precios, martin eduardo, martin eduardo precios"
        />
         <meta property="og:image" content="https://drive.google.com/file/d/1wwFPHoldxrsrr-ViacLv-gIR10Q-pmA6/view?usp=sharing" />
      </Head>

      <Header />

      <main>
        <section className="my-10 md:my-[5rem] 2xl:my-[6.5rem] ">
          <h1 className="titulos">Planes de Desarrollo web</h1>

          {/* Grid con las cards  */}
          <div className="w-11/12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 2xl:w-[70%]">
            <Pcard
              plan="Plan Bronze"
              precio="$150"
              desc="Página web única, ideal para empresas y negocios pequeños que quieran dar el salto a la web sin muchas compliaciones."
            >
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Alojamiento y dominio gratis por 1 año</p>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Hasta 4 secciones</p>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Diseño profesional y personalizado</p>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Optimización para SEO</p>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Maquetado 100% responsivo</p>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Links a redes sociales</p>
              </div>
            </Pcard>

            <Pcard
              plan="Plan Silver"
              precio="$250"
              desc="Sitio web completo con varias páginas y navegación interna, ideal para trabajos grandes y empresas con renombre profesional."
            >
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Todo el plan Bronze</p>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Multi-páginas</p>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Geolocalización</p>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Formulario de contacto</p>
              </div>
            </Pcard>

            <Pcard
              plan="Plan Gold"
              precio="$500"
              desc="Aplicación web, ideal para tiendas en línea, blogs, noticieros y proyectos más específicos y de grandes escalas."
            >
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Los dos planes anteriores</p>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-primary-100" />
                <p>Proyecto a petición del cliente</p>
              </div>
            </Pcard>
          </div>
        </section>

        <Contacto />
      </main>

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/portfolio"
        contacto="#contacto"
      />
    </>
  );
};

export default Precios;
