import style from "./Testimonios.module.scss";
import Image from "next/image";
import AVATAR1 from "../../public/img/personas/novia.jpg";
import AVATAR2 from "../../public/img/personas/Papa.jpg";
import AVATAR3 from "../../public/img/personas/omar.jpg";
import AVATAR4 from "../../public/img/personas/mike.jpeg";
import AVATAR5 from "../../public/img/personas/samu.jpeg";
import AVATAR6 from "../../public/img/personas/npc.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

const Testimonios = () => {
  return (
    <section className={style.testi_section}>
      <h2>¿Qué dicen de mi?</h2>

      <div className={style.testi_container}>
        <article className={style.item}>
          <div className={style.foto}>
            <Image src={AVATAR1} alt="Virginia Bolivar" />
          </div>
          <h4>
            Virginia Bolivar <br /> <span>Diseñadora gráfica</span>
          </h4>
          <p>
            Fue un proceso muy rápido, acogedor y entretenido. Una inversión con
            muchos beneficios para mejorar y avanzar con nuestra empresa, nos
            encantó esta experiencia y ahora a nuestros clientes se les abre
            toda una ventana de muchas opciones y propuestas a su disposición.{" "}
            <br /> <br />
            Ahora pueden navegar y encontrar lo que a ellos les convenga, todo
            es mucho más sencillo y divertido y eso nos importa muchísimo.
            También se sienten en confianza al ver que están en buenas manos,
            gracias a Martín pudimos resolver todos nuestros problemas de una
            manera muy beneficiosa.
          </p>
        </article>

        <article className={style.item}>
          <div className={style.foto}>
            <Image src={AVATAR2} alt="Emilio Padrón" />
          </div>
          <h4>
            Emilio Padrón <br /> <span>Ingeniero Mecánico</span>
          </h4>
          <p>
            En estos días es obvio la necesidad de una página web para tú
            negocio, pero no es fácil obtener la asesoría y soporte adecuados.{" "}
            <br /> <br />
            Con Martín, la experiencia fué muy agradable, cordial y supo
            orientarme y colocar lo necesario para desarrollar mi página y que
            fuese ágil y moderna.
          </p>
        </article>

        <article className={style.item}>
          <div className={style.foto}>
            <Image src={AVATAR3} alt="Omar Perdomo" />
          </div>
          <h4>
            Omar Perdomo <br /> <span>Abogado</span>
          </h4>
          <p>
            Fue un proceso gratificante, la experiencia me dejó un buen sabor de
            boca trayendo así bastantes beneficios para nuestra empresa. Creemos
            que hoy en día es una buena decisión optar por expandirnos de manera
            online ya que de esta forma podremos llegar a tener un mayor
            alcance. <br /> <br /> Al confiar en Martín nos sentimos en buenas
            manos al el poder orientarnos con las dudas que se nos presentaban a
            la hora de pensar en el diseño de nuestra web. Recomendadisimo.
          </p>
        </article>

        <article className={style.item}>
          <div className={style.foto}>
            <Image src={AVATAR5} alt="Samuel Arrieta" />
          </div>
          <h4>
            Samuel Arrieta <br /> <span>Emprendedor</span>
          </h4>
          <p>
            Hoy en día es muy útil tener una página web; por ejemplo, le ha
            traído a mi emprendimiento un montón de beneficios. En los tiempos
            actuales el mundo funciona prácticamente vía online así que tener
            este tipo de opciones abre muchas más puertas. <br /> <br /> La
            experiencia con Martin fue gratificante, el me guió en este nuevo
            mundo del que yo no conocía mucho y me ayudó con mi emprendimiento.
          </p>
        </article>

        <article className={style.item}>
          <div className={style.foto}>
            <Image src={AVATAR4} alt="Miguel Padron" />
          </div>
          <h4>
            Miguel Padrón <br /> <span>Emprendedor</span>
          </h4>
          <p>
            Ha sido la mejor inversión que he hecho para mí negocio ya que
            gracias a Martín y la accesoria que me ha dado me ayudó a llegar a
            más personas y brindarles más facilidad a la hora de comprar mis
            productos. <br /> <br /> En la actualidad una página web es una de
            las mejores formas de vender, es moderna y posiblemente la más
            profesional, con Martín estoy logrando crear el negocio que siempre
            quise y he aumentado mi clientela increíblemente gracias a las
            herramientas y seguridad que la página le brinda al público.
          </p>
        </article>

        <article className={style.item}>
          <div className={style.foto}>
            <Image src={AVATAR6} alt="María Peréz" />
          </div>
          <h4>
            María Peréz <br /> <span>Comerciante</span>
          </h4>
          <p>
            Martín es tremendo profesional y una gran persona con la que me
            encantó trabajar. Me realizó un diseño impecable en mi página web y
            quedé súper fascinada con su manera de trabajar. <br /> <br />
            Además de que trabajó increíblemente rápido y siempre me cumplió con
            todo lo que le pedí, definitivamente superó mis expectativas.
          </p>
        </article>
      </div>

      <Swiper
        className={style.swipe_container} // install Swiper modules
        modules={[Pagination]}
        autoHeight={true}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <article className={style.item}>
            <div className={style.foto}>
              <Image src={AVATAR2} alt="Emilio Padrón" />
            </div>
            <h4>
              Emilio Padrón <br /> <span>Ingeniero Mecánico</span>
            </h4>
            <p>
              En estos días es obvio la necesidad de una página web para tú
              negocio, pero no es fácil obtener la asesoría y soporte adecuados.{" "}
              <br /> <br />
              Con Martín, la experiencia fué muy agradable, cordial y supo
              orientarme y colocar lo necesario para desarrollar mi página y que
              fuese ágil y moderna.
            </p>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className={style.item}>
            <div className={style.foto}>
              <Image src={AVATAR1} alt="Virginia Bolivar" />
            </div>
            <h4>
              Virginia Bolivar <br /> <span>Diseñadora gráfica</span>
            </h4>
            <p>
              Fue un proceso muy rápido, acogedor y entretenido. Una inversión
              con muchos beneficios para mejorar y avanzar con nuestra empresa,
              nos encantó esta experiencia y ahora a nuestros clientes se les
              abre toda una ventana de muchas opciones y propuestas a su
              disposición. <br /> <br />
              Ahora pueden navegar y encontrar lo que a ellos les convenga, todo
              es mucho más sencillo y divertido y eso nos importa muchísimo.
              También se sienten en confianza al ver que están en buenas manos,
              gracias a Martín pudimos resolver todos nuestros problemas de una
              manera muy beneficiosa.
            </p>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className={style.item}>
            <div className={style.foto}>
              <Image src={AVATAR3} alt="Omar Perdomo" />
            </div>
            <h4>
              Omar Perdomo <br /> <span>Abogado</span>
            </h4>
            <p>
              Fue un proceso gratificante, la experiencia me dejó un buen sabor
              de boca trayendo así bastantes beneficios para nuestra empresa.
              Creemos que hoy en día es una buena decisión optar por expandirnos
              de manera online ya que de esta forma podremos llegar a tener un
              mayor alcance. <br /> <br /> Al confiar en Martín nos sentimos en
              buenas manos al el poder orientarnos con las dudas que se nos
              presentaban a la hora de pensar en el diseño de nuestra web.
              Recomendadisimo.
            </p>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className={style.item}>
            <div className={style.foto}>
              <Image src={AVATAR5} alt="Samuel Arrieta" />
            </div>
            <h4>
              Samuel Arrieta <br /> <span>Emprendedor</span>
            </h4>
            <p>
              Hoy en día es muy útil tener una página web; por ejemplo, le ha
              traído a mi emprendimiento un montón de beneficios. En los tiempos
              actuales el mundo funciona prácticamente vía online así que tener
              este tipo de opciones abre muchas más puertas. <br /> <br /> La
              experiencia con Martin fue gratificante, el me guió en este nuevo
              mundo del que yo no conocía mucho y me ayudó con mi
              emprendimiento.
            </p>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className={style.item}>
            <div className={style.foto}>
              <Image src={AVATAR4} alt="Miguel Padron" />
            </div>
            <h4>
              Miguel Padrón <br /> <span>Emprendedor</span>
            </h4>
            <p>
              Ha sido la mejor inversión que he hecho para mí negocio ya que
              gracias a Martín y la accesoria que me ha dado me ayudó a llegar a
              más personas y brindarles más facilidad a la hora de comprar mis
              productos. <br /> <br /> En la actualidad una página web es una de
              las mejores formas de vender, es moderna y posiblemente la más
              profesional, con Martín estoy logrando crear el negocio que
              siempre quise y he aumentado mi clientela increíblemente gracias a
              las herramientas y seguridad que la página le brinda al público.
            </p>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className={style.item}>
            <div className={style.foto}>
              <Image src={AVATAR6} alt="María Peréz" />
            </div>
            <h4>
              María Peréz <br /> <span>Comerciante</span>
            </h4>
            <p>
              Martín es tremendo profesional y una gran persona con la que me
              encantó trabajar. Me realizó un diseño impecable en mi página web
              y quedé súper fascinada con su manera de trabajar. <br /> <br />
              Además de que trabajó increíblemente rápido y siempre me cumplió
              con todo lo que le pedí, definitivamente superó mis expectativas.
            </p>
          </article>
        </SwiperSlide>
      </Swiper>
      <p className={style.swipe}>Desliza &rarr;</p>
    </section>
  );
};

export default Testimonios;
