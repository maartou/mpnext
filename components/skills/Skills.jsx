import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="w-11/12 mx-auto">
      <h2 className="text-center mb-5 tracking-[.5em] uppercase font-light text-xl">
        Skills
      </h2>
      <p className="text-neutral-400 text-center text-lg lg:max-w-xl lg:mx-auto ">
        Estoy al día con las ultimas técnologias y tendencias del mercado,
        aunque me especializo más en código también puedo trabajar con
        plataformas no-code. Teniendo como objetivo mejorar mis habilidades cada
        día un poco más para ofrecer mis servicios con la mejor calidad y trato
        posible.
      </p>

      <div className="grid grid-cols-3 mt-10 gap-y-10 lg:mx-auto lg:w-3/5">
        <div className="flex flex-col items-center gap-2">
          <AiFillHtml5 className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">html 5</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <DiCss3 className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">css 3</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <SiJavascript className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">Javascript</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <BsBootstrap className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">Bootstrap</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <SiTailwindcss className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">Tailwind</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaFigma className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">Figma</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <DiJqueryLogo className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">jquery</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <DiReact className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">React js</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <SiNextdotjs className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">next js</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <DiGit className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">git</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <SiTypescript className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">typescript</h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <SiVercel className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">vercel</h3>
        </div>

        <div className="flex flex-col items-center gap-2 col-span-3">
          <GrGoogle className="text-4xl lg:text-5xl" />
          <h3 className="uppercase text-lg lg:text-xl">seo</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
