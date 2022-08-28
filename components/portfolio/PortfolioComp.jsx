import style from "./pc.module.scss";
import Image from "next/image";
import risup from "../../public/img/portfolio/risup.png";
import modu from "../../public/img/portfolio/modu.png";
import jh from "../../public/img/portfolio/jh.png";
import venecia from "../../public/img/portfolio/venecia.jpg";
import Link from "next/link";

const PortfolioComp = () => {
  return (
    <section className={style.psection}>
      <h2 id="portfolio">Trabajos recientes</h2>

      <div className={style.container}>
        <article className={style.p_item}>
          <Image src={risup} alt="Right-sup tecnical services" />
          <h3>Right-sup servicios técnicos</h3>
          <a
            className={style.btn}
            href="https://risuptec.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visitar sitio
          </a>
        </article>

        <article className={style.p_item}>
          <Image src={modu} alt="Estructura Modular" />
          <h3>Estructura modular</h3>
          <a
            className={style.btn}
            href="https://esmodularweb.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visitar sitio
          </a>
        </article>

        <div className={style.figma}>
          <Image src={venecia} alt="venecia branding" />
        </div>

        <div className={style.figma}>
          <Image src={jh} alt="Juan Hernandez" />
        </div>
      </div>

      <div className={style.link}>
        <Link href="/Portfolio"> Ver portfolio completo </Link>
      </div>
    </section>
  );
};

export default PortfolioComp;
