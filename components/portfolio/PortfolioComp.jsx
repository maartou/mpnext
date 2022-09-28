import style from "./pc.module.scss";
import Image from "next/image";
import risup from "../../public/img/portfolio/risup.png";
import modu from "../../public/img/portfolio/modu.png";
import manu from "../../public/img/portfolio/manu.jpg";
import venecia from "../../public/img/portfolio/venecia.jpg";
import sized from "../../public/img/portfolio/sized.jpg";
import Link from "next/link";

const PortfolioComp = () => {
  return (
    <section className={style.psection}>
      <h2 id="portfolio">Trabajos recientes</h2>

      <div className={style.container}>
        <article className={style.p_item}>
          <Image src={risup} alt="Right-sup tecnical services" placeholder="blur" />
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
          <Image src={modu} alt="Estructura Modular" placeholder="blur" />
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

        <article className={style.p_item}>
          <Image src={manu} alt="Manuela Serrano" placeholder="blur" />
          <h3>Manuela Serrano</h3>
          <a
            className={style.btn}
            href="https://www.manuelaserranoc.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visitar sitio
          </a>
        </article>

        <article className={style.p_item}>
          <Image src={sized} alt="Sized franelas" placeholder="blur" />
          <h3>SIZED clothing</h3>
          <a
            className={style.btn}
            href="https://www.sizedstore.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visitar sitio
          </a>
        </article>




      </div>

      <div className={style.link}>
        <Link href="/Portfolio"> Ver portfolio completo </Link>
      </div>
    </section>
  );
};

export default PortfolioComp;
