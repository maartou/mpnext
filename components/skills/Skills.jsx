import style from "./Skills.module.scss";
import stylex from "./Wave.module.scss";

import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { DiSass } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { BsWordpress } from "react-icons/bs";
import { FaElementor } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVercel } from "react-icons/si";

const Skills = () => {
  return (
    <section className={style.skcontainer}>
      <h2 id="experiencia">Calidad garantizada</h2>

      <div className={stylex.wave_animation}>
        <div className={stylex.wave}></div>
      </div>

      <div className={style.container}>
        <div className={style.inner}>
          <p>
            Estoy al día con las ultimas técnologias y tendencias del mercado,
            aunque me especializo más en código también puedo trabajar con
            plataformas no-code. Teniendo como objetivo mejorar mis habilidades
            cada día un poco más para ofrecer mis servicios con la mejor calidad
            y trato posible.
          </p>
        </div>

        <div className={style.skills}>
          <div className={style.box}>
            <div className={style.item}>
              <AiFillHtml5 className={style.icon} />
              <h4>HTML 5</h4>
            </div>

            <div className={style.item}>
              <DiSass className={style.icon} />
              <h4>SASS</h4>
            </div>

            <div className={style.item}>
              <SiJavascript className={style.icon} />
              <h4>JAVASCRIPT</h4>
            </div>

            <div className={style.item}>
              <BsBootstrap className={style.icon} />
              <h4>BOOTSTRAP</h4>
            </div>

            <div className={style.item}>
              <GrGoogle className={style.icon} />
              <h4>SEO</h4>
            </div>

            <div className={style.item}>
              <FaFigma className={style.icon} />
              <h4>FIGMA</h4>
            </div>

            <div className={style.item}>
              <FaNodeJs className={style.icon} />
              <h4>NODE.JS</h4>
            </div>

            <div className={style.item}>
              <BsWordpress className={style.icon} />
              <h4>WORDPRESS</h4>
            </div>

            <div className={style.item}>
              <FaElementor className={style.icon} />
              <h4>ELEMENTOR</h4>
            </div>

            <div className={style.item}>
              <DiReact className={style.icon} />
              <h4>REACT.JS</h4>
            </div>

            <div className={style.item}>
              <DiGit className={style.icon} />
              <h4>GIT</h4>
            </div>

            <div className={style.item}>
              <DiJqueryLogo className={style.icon} />
              <h4>JQUERY</h4>
            </div>

            <div className={style.item}>
              <SiTailwindcss className={style.icon} />
              <h4>TAILWIND</h4>
            </div>

            <div className={style.item}>
              <SiNextdotjs className={style.icon} />
              <h4>NEXT.JS</h4>
            </div>

            <div className={style.item}>
              <SiVercel className={style.icon} />
              <h4>VERCEL</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
