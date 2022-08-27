import style from "./Services.module.scss";
import Link from "next/link";
import { MdOutlineDesktopMac } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { TiSocialAtCircular } from "react-icons/ti";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Services = () => {
  return (
    <section className={style.Servi_section}>
      <h2 id="servicios">Mis servicios</h2>

      <div className={style.container}>
        <article>
          <MdOutlineDesktopMac className={style.icon} />
          <h3>Diseño y desarrollo web</h3>
          <p>
            Desarrollaré el sitio web que necesites para que cumpla con todos
            los objetivos de tu empresa. Obtén más visitas/clientes, vende en
            línea, obtén cotizaciones en tu sitio y destaca entre tus
            competidores con tu imponente sitio web.
          </p>
          <Link href="/Desarrollo-web"> Ver más </Link>
        </article>

        <article>
          <FaPaintBrush className={style.icon} />
          <h3>Diseño gráfico</h3>
          <p>
            Desde papelería comercial hasta carteles de 10 metros. ¡Me ocupo de
            todo tipo de diseños a medida! Siempre siguiendo tu identidad
            corporativa y nutriendo tu sitio web o campañas con los artes más
            exquisitos del universo digital.
          </p>
          <Link href="/Diseno-grafico"> Ver más </Link>
        </article>

        <article>
          <FaGoogle className={style.icon} />
          <h3>SEO</h3>
          <p>
            No solo se trata de hacer tu web y ya está, no. Hacer tu web es el
            inicio de todo, con un buen plan de SEO (Search Engine Optimization)
            posicionaré tu web entre los primeros resultados de Google, démosle
            popularidad a tu marca y despega ya.
          </p>
          <Link href="/SEO"> Ver más </Link>
        </article>

        <article>
          <TiSocialAtCircular className={style.icon} />
          <h3>Marketing digital</h3>
          <p>
            Desarrollo campañas estratégicas que generan resultados medibles.
            Potencia tus canales digitales: define tus ejes de comunicación para
            lograr resultados. Tus ventas crecen cuando llegas al público
            adecuado. Atrae, engancha a tu público y cierra el trato.
          </p>
          <Link href="/Marketing"> Ver más </Link>
        </article>
      </div>

      <Swiper
        className={style.mov} // install Swiper modules
        modules={[Pagination]}
        autoHeight={true}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <article>
            <MdOutlineDesktopMac className={style.icon} />
            <h3>Diseño y desarrollo web</h3>
            <p>
              Desarrollaré el sitio web que necesites para que cumpla con todos
              los objetivos de tu empresa. Obtén más visitas/clientes, vende en
              línea, obtén cotizaciones en tu sitio y destaca entre tus
              competidores con tu imponente sitio web.
            </p>
              <Link href="/Desarrollo-web"> Ver más </Link>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article>
            <TiSocialAtCircular className={style.icon} />
            <h3>Marketing Digital</h3>
            <p>
              Desarrollo campañas estratégicas que generan resultados medibles.
              Potencia tus canales digitales: define tus ejes de comunicación
              para lograr resultados. Tus ventas crecen cuando llegas al público
              adecuado. Atrae, engancha a tu público y cierra el trato.
            </p>
            <Link href="/Marketing"> Ver más </Link>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article>
            <FaGoogle className={style.icon} />
            <h3>SEO</h3>
            <p>
              No solo se trata de hacer tu web y ya está, no. Hacer tu web es el
              inicio de todo, con un buen plan de SEO (Search Engine
              Optimization) posicionaré tu web entre los primeros resultados de
              Google, démosle popularidad a tu marca y despega ya.
            </p>
            <Link href="/SEO"> Ver más </Link>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article>
            <FaPaintBrush className={style.icon} />
            <h3>Diseño gráfico</h3>
            <p>
              Desde papelería comercial hasta carteles de 10 metros. ¡Me ocupo
              de todo tipo de diseños a medida! Siempre siguiendo tu identidad
              corporativa y nutriendo tu sitio web o campañas con los artes más
              exquisitos del universo digital.
            </p>
            <Link href="/Diseno-grafico"> Ver más </Link>
          </article>
        </SwiperSlide>
      </Swiper>

      <p className={style.swipe}>Desliza &rarr;</p>

    </section>
  );
};

export default Services;
