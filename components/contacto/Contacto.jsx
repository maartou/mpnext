import Image from "next/image";
import Formulario from "./Formulario";
import fondo from "../../public/img/liquid_hero.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Contacto = () => {
  return (
    <section id="contacto">
      {/* Grid principal */}
      <div className="grid gap-7 grid-cols-1 lg:grid-cols-2 lg:h-[100vh] ">
        {/* foto  */}
        <div className="relative w-full h-[40rem] lg:h-full flex items-center justify-center">
          <Image src={fondo} alt="" fill className="-z-10 object-cover object-center brightness-50 saturate-0" />
          <div>
            <p className="font-thin text-xl 2xl:text-2xl">¿Tienes algun proyecto o idea en mente?</p>
            <p className="text-center font-bold text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">Hagámoslo.</p>
          </div>

          
          <div className="absolute bottom-4 right-[50%] translate-x-[50%] flex gap-7">
            <a
              href="https://www.github.com/maartou"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="text-3xl" />
            </a>

            <a
              href="https://www.instagram.com/programarto/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="text-3xl" />
            </a>

            <a
              href="https://wa.me/+584144245029"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Formulario  */}
        <div className="px-4 lg:flex items-center justify-center lg:px-6 2xl:px-[4rem]">
          <Formulario />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
