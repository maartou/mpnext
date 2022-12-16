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
        <div className="overflow-hidden">
          <p>ostiale</p>
          <video  controls autoPlay muted playsInline width={400}>
            <source src="../../public/liquid.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
