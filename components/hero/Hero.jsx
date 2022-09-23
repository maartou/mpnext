import style from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import yo from "../../public/img/personas/martin_padron.png";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className={style.section}>
      <div className={style.banner}>
        <div className={style.content}>
          <h1>Martín Padrón</h1>
          <h2>Desarrollador Frontend y diseñador UI/UX</h2>
          <Link href="#contacto"> Hablemos </Link>
        </div>
        <div className={style.foto}>
          <Image src={yo} alt="Martin Padron Desarrollador web" />
        </div>
      </div>

      <div className={style.linker}>
        <Link href="/Sobre-mi"> Más de mi </Link>
      </div>
    </section>
  );
};

export default Hero;
