// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { IoIosArrowForward } from "react-icons/io";
import AVATAR1 from "../../public/img/personas/novia.jpg";
import AVATAR2 from "../../public/img/personas/Papa.jpg";
import AVATAR3 from "../../public/img/personas/omar.jpg";
import AVATAR4 from "../../public/img/personas/mike.jpeg";
import AVATAR5 from "../../public/img/personas/samu.jpeg";
import AVATAR6 from "../../public/img/personas/manu_about.jpg";
import TestiCard from "./TestiCard";

const Testimonios = () => {
  return (
    <section className="w-11/12 mx-auto">
      <h2 className="titulos">¿Qué dicen de mi?</h2>
      <Swiper
        slidesPerView="1"
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 640px
          768: {
            slidesPerView: 1.6,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 3.3,
          },
        }}
      >
        <SwiperSlide>
          <TestiCard
            foto={AVATAR2}
            nombre="Emilio Padrón"
            cargo="Ingeniero mecánico con más de 20 años de experiencia"
            p1="En estos días es obvio la necesidad de una página web para tú negocio, pero no es fácil obtener la asesoría y soporte adecuados.
        "
            p2="Con Martín, la experiencia fué muy agradable, cordial y supo orientarme y colocar lo necesario para desarrollar mi página y que fuese ágil y moderna."
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestiCard
            foto={AVATAR1}
            nombre="Virginia Bolivar"
            cargo="Diseñadora gráfica y CEO de @futuxweb"
            p1="Fue un proceso muy rápido, acogedor y entretenido. Una inversión con muchos beneficios para mejorar y avanzar con nuestra empresa, nos encantó esta experiencia y ahora a nuestros clientes se les abre toda una ventana de muchas opciones y propuestas a su disposición."
            p2="Ahora pueden navegar y encontrar lo que a ellos les convenga, todo es mucho más sencillo y divertido y eso nos importa muchísimo. También se sienten en confianza al ver que están en buenas manos, gracias a Martín pudimos resolver todos nuestros problemas de una manera muy beneficiosa."
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestiCard
            foto={AVATAR3}
            nombre="Omar Perdomo"
            cargo="Abogado Nacional"
            p1="Fue un proceso gratificante, la experiencia me dejó un buen sabor de boca trayendo así bastantes beneficios para nuestra empresa. Creemos que hoy en día es una buena decisión optar por expandirnos de manera online ya que de esta forma podremos llegar a tener un mayor alcance.
        "
            p2="Al confiar en Martín nos sentimos en buenas manos al el poder orientarnos con las dudas que se nos presentaban a la hora de pensar en el diseño de nuestra web. Recomendadisimo."
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestiCard
            foto={AVATAR4}
            nombre="Miguel Elhamra"
            cargo="Emprendedor y CEO de @sizedstore"
            p1="Ha sido la mejor inversión que he hecho para mí negocio ya que gracias a Martín y la accesoria que me ha dado me ayudó a llegar a más personas y brindarles más facilidad a la hora de comprar mis productos.
        "
            p2="En la actualidad una página web es una de las mejores formas de vender, es moderna y posiblemente la más profesional, con Martín estoy logrando crear el negocio que siempre quise y he aumentado mi clientela increíblemente gracias a las herramientas y seguridad que la página le brinda al público."
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestiCard
            foto={AVATAR5}
            nombre="Samuel Arrieta"
            cargo="Emprendedor y CEO de @sizedstore"
            p1="Hoy en día es muy útil tener una página web; por ejemplo, le ha traído a mi emprendimiento un montón de beneficios. En los tiempos actuales el mundo funciona prácticamente vía online así que tener este tipo de opciones abre muchas más puertas.
        "
            p2="La experiencia con Martin fue gratificante, el me guió en este nuevo mundo del que yo no conocía mucho y me ayudó con mi emprendimiento."
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestiCard
            foto={AVATAR6}
            nombre="Manuela Serrano"
            cargo="Artista e influencer"
            p1="Si pudiera definir toda la experiencia en una sola palabra sería: eficaz.
        "
            p2="Para un artista es de suma importancia la comunicación rápida, y ahora que puedo tener en un sólo sitio toda mi información musical, recaudaciones, contacto y contrataciones siento que puedo impulsar mi carrera en una forma creativa e instantánea."
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-end mt-4">
        <p className="text-xl">Desliza</p>
        <IoIosArrowForward className="text-2xl" />
      </div>
    </section>
  );
};

export default Testimonios;
