import style from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import yo from "../../public/img/personas/martin_padron.png";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className={style.heroSection}>
      <div className={style.banner}>
        <div className={style.titles}>
          <h1>
            Martín <br /> Padrón
          </h1>
          <h2>Desarrollador Front-end</h2>
          <Link href="#contacto"> Hablemos </Link>
        </div>

        <div className={style.img_container}>
          <Image src={yo} alt="Martin Padrón" />
        </div>
      </div>

      <Socials />

      <div className={style.conoceme}>
        <Link href="/Sobre-mi"> Conóceme </Link>
      </div>

      <hr className={style.separator}/>

      <div className={style.intro}>
        <p>Hola! Encantado de tenerte por aquí, espero que tu experiencia por acá sea de lo más agradable... Si quieres saber más de mi dale  <Link href="/Sobre-mi">click a este enlace</Link></p>
      </div>

    </section>
  );
};

export default Hero;
