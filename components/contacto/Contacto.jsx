import Image from "next/image";
import mockup from "../../public/img/illustrations/mokup.png";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Formulario from "./Formulario";

const Contacto = () => {
  return (
    <section id="contacto">
      <h2 className="titulos">Contacto</h2>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[90vh] ">
        {/* Formulario  */}
        <div>
          <p>formualario</p>
        </div>

        {/* mockup  */}
        <div className="bg-white overflow-hidden pt-5 2xl:relative">
          <div>
            <Image src={mockup} alt="" className="relative left-[4rem] md:w-[60%] md:left-[15rem] lg:left-[13rem] 2xl:w-[70%] 2xl:left-[18rem]" />
          </div>

          <div className="flex gap-5 justify-center text-black 2xl:absolute 2xl:bottom-5 2xl:right-10">
            <a
              href="https://www.github.com/maartou"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="text-4xl" />
            </a>

            <a
              href="https://www.instagram.com/programarto/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="text-4xl" />
            </a>

            <a
              href="https://wa.me/+584144245029"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
