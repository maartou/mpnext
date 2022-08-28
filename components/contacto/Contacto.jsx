import style from "./Contacto.module.scss";

import Image from 'next/image';
import illus from "../../public/img/illustrations/end_illustration.svg";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mk6s0on",
        "template_hztts1a",
        form.current,
        "RobI50TcH8Bfmvpe_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className={style.section}>
      <div className={style.title}>
        <h2 id="contacto">Hablemos</h2>
        <p>
          Ponte en contácto conmigo; cúentame qué necesitas y los detalles del
          servicio que requieres. ¡Trabajemos juntos! y consigamos cumplir todos
          tus objetivos, te espero para comenzar :)
        </p>
      </div>

      <div className={style.container_contact}>
        <form ref={form} onSubmit={sendEmail}>
          <div className="nombre">
            <h4>Puedes colocar tu nombre acá</h4>
            <input type="text" name="name" placeholder="Nombre" required />
          </div>

          <div className="correo">
            <h4>Tu correo electrónico por aquí</h4>
            <input type="email" name="email" placeholder="Email" required />
          </div>

          <div className="texto">
            <h4>
              El mensaje que deseés aquí, te responderé en la mayor brevedad
              posible
            </h4>
            <textarea
              name="mensaje"
              rows="7"
              placeholder="Cuéntame qué necesitas..."
              required
            ></textarea>

            <button type="submit" className={style.btn}>
              {" "}
              Enviar{" "}
            </button>
          </div>
        </form>

        <div className={style.socials}>
          <a
            href="https://www.instagram.com/programarto/"
            target="_blank"
            rel="noreferrer"
            className={style.item}
          >
            <AiOutlineInstagram className={style.icon} />
            <h4>@programarto</h4>
          </a>

          <a
            href="https://wa.me/+584144245029"
            target="_blank"
            rel="noreferrer"
            className={style.item}
          >
            <BsWhatsapp className={style.icon} />
            <h4>+58 - 414 4245 029</h4>
          </a>

          <a
            href="https://www.linkedin.com/in/martineduardop/"
            target="_blank"
            rel="noreferrer"
            className={style.item}
          >
            <AiFillLinkedin className={style.icon} />
            <h4>Martín Eduardo</h4>
          </a>
        </div>

        <div className={style.illus}>
          <Image src={illus} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
