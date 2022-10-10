import style from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={style.section}>

      {/* Circulos  */}
      <div className={`${style.circle} ${style.c1}`}>
        <div className={style.circle_sm}></div>
      </div>
      <div className={`${style.circle} ${style.c2}`}>
        <div className={style.circle_sm}></div>
      </div>
      <div className={`${style.circle} ${style.c3}`}>
        <div className={style.circle_sm}></div>
      </div>
      <div className={`${style.circle} ${style.c4}`}>
        <div className={style.circle_sm}></div>
      </div>

      {/* Contenido  */}
      <div className={style.content}>
        <h1>
          Lleva tu negocio al siguiente nivel <br />
          <span>
            con el desarrollo y diseño de tu propia y potente página web.
          </span>
        </h1>
        <h2>
          Soy Martin Padron; desarrollador frontend, diseñador ui/ux y estratega
          en SEO y marketing digital. Estoy aquí para brindarle a tú negocio
          todas las ventajas que dispone el tener un sitio web. ¿Comenzamos?
        </h2>
        <div className={style.btn_container}>
          <div className={style.btn_primary}>
            <Link href="#contacto"> Contáctame </Link>
          </div>
          <div className={style.btn_secondary}>
            <Link href="/Desarrollo-web"> Entérate cómo </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
