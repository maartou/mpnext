import Head from "next/head";
import Image from "next/image";

import Header from "../components/header/Header";

import yo from "../public/img/personas/selfie.jpg";
import logo from "../public/img/mp_logo.svg";

import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import style from "../styles/About.module.scss";

const SobreMi = () => {
  return (
    <>
      <Head>
        <title> Sobre mi - Martin Padrón </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <div className={style.hero}>
        <h2>
          Sobre <br /> mi.
        </h2>
      </div>

      <section className={style.section}>
        <div className={style.container}>
          <div className={style.foto}>
            <Image src={yo} alt="Martín Padrón selfie" />
          </div>

          <div className={style.descri}>
            <h4>Cónoceme un poco más...</h4>
            <h3>Desde mis inicios hasta hoy</h3>
            <p>
              Un placer, soy Martín; desarrollador frontend (pronto full-stack)
              y diseñador UI/UX... <br /> <br/> Soy una persona hambrienta por el
              conocimiento, intento aprender algo nuevo y dar lo mejor de mi
              cada día, para que mi versión de hoy siempre supere a mi versión
              de ayer. Mi primer contacto con la programación fué en la
              universidad; empecé con Java, sin embargo, esté no fué el inicio
              de mi carrera como programador. <br/> <br/> Realmente me tomé en serio la
              programación en Diciembre del 2021 y no he parado de aprender
              desde entonces, empecé con una página súper sencilla hecha
              solamente con HTML y CSS y desde allí he ido expandiendo mis
              horizontes, cada vez haciendo programas y diseños más complejos,
              siempre entregando lo mejor de lo mejor en cada uno de mis
              proyectos.
            </p>
            <div className={style.logo}>
              <Image src={logo} alt="Martin Padron logo" />
            </div>
            <div className={style.socials}>
              <a
                href="https://www.instagram.com/programarto/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className={style.icon} />
              </a>

              <a
                href="https://wa.me/+584144245029"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp className={style.icon} />
              </a>

              <a
                href="https://www.linkedin.com/in/martineduardop/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className={style.icon} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreMi;
