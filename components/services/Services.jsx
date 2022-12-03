import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import ServiceCard from "./ServiceCard";

import { MdOutlineDesktopMac } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { TiSocialAtCircular } from "react-icons/ti";

const Services = () => {
  return (
    <section id="servicios" className="w-11/12 mx-auto">
      <h2 className="text-center mb-7 tracking-[.5em] uppercase font-light text-xl">Servicios</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <ServiceCard
            icon={<MdOutlineDesktopMac />}
            title="Diseño y desarrollo web"
            content="        Desarrollaré el sitio web que necesites para que cumpla con todos los
        objetivos de tu empresa. Obtén más visitas/clientes, vende en línea,
        obtén cotizaciones en tu sitio y destaca entre tus competidores con tu
        imponente sitio web."
          />
        </SwiperSlide>

        <SwiperSlide>
          <ServiceCard
            icon={<FaGoogle />}
            title="SEO"
            content="No solo se trata de hacer tu web y ya está, no. Hacer tu web es el inicio de todo, con un buen plan de SEO (Search Engine Optimization) posicionaré tu web entre los primeros resultados de Google, démosle popularidad a tu marca y despega ya."
          />
        </SwiperSlide>

        <SwiperSlide>
          <ServiceCard
            icon={<FaPaintBrush />}
            title="Diseño gráfico"
            content="Desde papelería comercial hasta carteles de 10 metros. ¡Me ocupo de todo tipo de diseños a medida! Siempre siguiendo tu identidad corporativa y nutriendo tu sitio web o campañas con los artes más exquisitos del universo digital."
          />
        </SwiperSlide>

        <SwiperSlide>
          <ServiceCard
            icon={<TiSocialAtCircular />}
            title="Marketing digital"
            content="Desarrollo campañas estratégicas que generan resultados medibles. Potencia tus canales digitales: define tus ejes de comunicación para lograr resultados. Tus ventas crecen cuando llegas al público adecuado. Atrae, engancha a tu público y cierra el trato."
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Services;
