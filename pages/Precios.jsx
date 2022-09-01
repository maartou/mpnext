import Head from "next/head";
import style from "../styles/Precios.module.scss";
import { BsPatchCheckFill } from "react-icons/bs";
import Header from "../components/header/Header";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";

const Precios = () => {
  return (
    <>
      <Head>
        <title>Precios | Martín Padrón</title>
      </Head>

      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <div className={style.Precioscontainer}>
        <h2>Desarollo web</h2>

        <div className={style.cards}>

          <div className={style.Pricingcard}>
            <div className={style.header}>
              <h3>Bronze Landing Page</h3>
            </div>

            <div className={style.body}>
              <small>desde...</small>
              <h2>$100</h2>
              <p>
                Página web única, ideal para empresas y negocios pequeños que
                quieran dar el salto a la web sin muchas complicaciones.
              </p>

              <ul>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Alojamiento gratis por 1
                  año{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Dominio gratis{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Hasta 5 secciones{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Diseño personalizado{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Optimización SEO{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Diseño 100% responsivo{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Links a redes sociales{" "}
                </li>
              </ul>

              <a
                href="https://wa.me/+584144245029"
                target="_blank"
                rel="noreferrer"
                className={style.btn}
              >
                Plan Bronze
              </a>
            </div>
          </div>

          <div className={style.Pricingcard}>
            <div className={style.header}>
              <h3>Silver Corporative</h3>
            </div>

            <div className={style.body}>
              <small>desde...</small>
              <h2>$250</h2>
              <p>
                Sitio web completo con varias páginas y navegación interna,
                ideal para trabajos grandes y empresas con renombre profesional.
              </p>

              <ul>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Todo el plan Bronze{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Multi páginas{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Geolocalización{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Formulario de contacto{" "}
                </li>
              </ul>

              <a
                href="https://wa.me/+584144245029"
                target="_blank"
                rel="noreferrer"
                className={`${style.btn} ${style.btn_m} `}
              >
                Plan Silver
              </a>
            </div>
          </div>

          <div className={style.Pricingcard}>
            <div className={style.header}>
              <h3>Gold Web App</h3>
            </div>

            <div className={style.body}>
              <small>desde...</small>
              <h2>$500</h2>
              <p>
                Aplicación web, ideal para tiendas en línea, blogs, noticieros y
                proyectos más específicos y de grandes escalas.
              </p>

              <ul>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Los dos planes
                  anteriores{" "}
                </li>
                <li>
                  {" "}
                  <BsPatchCheckFill className={style.icon} /> Todo lo que el cliente
                  requiera.{" "}
                </li>
              </ul>

              <a
                href="https://wa.me/+584144245029"
                target="_blank"
                rel="noreferrer"
                className={`${style.btn} ${style.btn_l} `}
              >
                Plan Gold
              </a>
            </div>
          </div>
        </div>
      </div>

      <Contacto title="¿Alguna Duda?" content="Puedes rellenar el formulario si algo no te quedó completamente claro o puedes escribirme al Whatsapp para discutir más detalles." />

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/Portfolio"
        contacto="#contacto"
      />
    </>
  );
};

export default Precios;
