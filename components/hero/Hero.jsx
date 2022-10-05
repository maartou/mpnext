import style from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import yo from "../../public/img/personas/martin_padron.png";

const Hero = () => {
  return (
    <section className={style.section}>
      <div className={style.banner}>
        <div className={style.content}>
          <h1>Martín Padrón</h1>
          <h2>Desarrollador frontend y diseñador UI/UX</h2>
          <Link href="#contacto"> Hablemos </Link>
        </div>

        <div className={style.foto}>
          <Image src={yo} alt="Martin Padron" priority/>
        </div>
      <div className={style.square}></div>

      </div>

      <article className={style.intro}>
        <p>Bienvenid@, soy Martín Padrón; programador web, desarrollador frontend, diseñador de interfaces y un también le meto un poco al marketing digital. </p>
        <p>Principalmente hago páginas webs y sitios webs, pero también me gusta hacer otras cosas, <Link href="/Sobre-mi" > averigúalo aquí </Link></p>
      </article>
    </section>
  );
};

export default Hero;
