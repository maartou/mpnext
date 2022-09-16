import Head from "next/head";
import Image from "next/image";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

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
        <meta name="description" content="Soy Martin Padron, desarrollador frontend y diseñador ui/ux. Entra y conóceme un poco más." />
        <meta name="keywords" content="martin padron, martin eduardo, martin padron programador, martin padron desarrollador web, martin padron desarrollador, frontend" />
        <meta
          property="og:image"
          content="https://www.martineduardo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog_image.d303d898.jpg&w=3840&q=75"
        />
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
              y diseñador UI/UX... <br /> <br /> Soy una persona hambrienta por
              el conocimiento, intento aprender algo nuevo y dar lo mejor de mi
              cada día, para que mi versión de hoy siempre supere a mi versión
              de ayer. Mi primer contacto con la programación fué en la
              universidad; empecé con Java, sin embargo, esté no fué el inicio
              de mi carrera como programador. <br /> <br /> Realmente me tomé en
              serio la programación en Diciembre del 2021 y no he parado de
              aprender desde entonces, empecé con una página súper sencilla
              hecha solamente con HTML y CSS y desde allí he ido expandiendo mis
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

      <div className={style.curiosidades_container}>
        <h4>Algunos datos curiosos</h4>

        <ul className={style.list}>
          <li>
            Soy una persona muy atlética, me gusta el baloncesto y pasar las
            tardes haciendo ejercicio.
          </li>
          <li>
            Soy muy fan de los juegos de From Software (Dark souls, Sekiro,
            Elden Ring, etc...)
          </li>
          <li>
            No veo series porque me parecen muy largos los cápitulos de 1 hora o
            más.
          </li>
          <li>
            Tengo una perra que se llama Maya y ha mordido a varios amigos, pero
            es una dulzura.
          </li>
        </ul>

        <ul className={style.list}>
          <li>
            Soy autodidacta, intento aprender cosas nuevas todos los días.
          </li>
          <li>
            Soy más de día que de noche, me levanto temprano y me acuesto a
            dormir temprano.
          </li>
          <li>Creo que se me dá bastante bien explicar cosas y enseñar</li>
          <li>
            Me gusta mucho ayudar y colaborar en cualquier lado, no me gusta que
            la gente haga las cosas por mí.
          </li>
        </ul>
      </div>

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/Portfolio"
        contacto="/#contacto"
      />
    </>
  );
};

export default SobreMi;
