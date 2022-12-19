import React from "react";
import Image from "next/image";
import yo from "../../public/img/personas/selfie.jpg";
import logo from "../../public/img/mp_logo.svg";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const AboutHero = () => {
  return (
    <>
      <section>
        <div className="w-11/12 mx-auto mt-10 2xl:w-[75%]">
          <h1 className="titulos">Sobre mi</h1>

          {/* Contenedor principal  */}
          <div className="flex flex-col gap-10 lg:flex-row lg:mt-10">
            {/* Contenedor de foto  */}
            <div className="p-5 border border-white rounded-full max-w-md mx-auto flex items-center justify-center lg:max-w-lg">
              <Image src={yo} alt="Martín Padrón" className="rounded-full" />
            </div>

            {/* Contenedor de textos  */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl text-center lg:text-3xl">
                Desde mis inicios hasta hoy
              </h2>
              <p className="text-neutral-400 lg:text-lg">
                Un placer, soy Martín Padrón; desarrollador frontend y diseñador
                UI/UX.
              </p>
              <p className="text-neutral-400 lg:text-lg">
                Soy una persona hambrienta por el conocimiento, intento aprender
                algo nuevo y dar lo mejor de mi cada día, para que mi versión de
                hoy siempre supere a mi versión de ayer. Mi primer contacto con
                la programación fué en la universidad; empecé con Java, sin
                embargo, esté no fué el inicio de mi carrera como programador.
              </p>
              <p className="text-neutral-400 lg:text-lg">
                Realmente me tomé en serio la programación en Diciembre del 2021
                y no he parado de aprender desde entonces, empecé con una página
                súper sencilla hecha solamente con HTML y CSS y desde allí he
                ido expandiendo mis horizontes, cada vez haciendo programas y
                diseños más complejos, siempre entregando lo mejor de lo mejor
                en cada uno de mis proyectos.
              </p>
              <div className="flex gap-3 my-4">
                <a
                  href="https://www.github.com/maartou"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="text-4xl p-2 box-content border border-white rounded-full transition-colors hover:bg-white hover:text-black" />
                </a>

                <a
                  href="https://www.instagram.com/programarto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram className="text-4xl p-2 box-content border border-white rounded-full transition-colors hover:bg-white hover:text-black" />
                </a>

                <a
                  href="https://wa.me/+584144245029"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineWhatsApp className="text-4xl p-2 box-content border border-white rounded-full transition-colors hover:bg-white hover:text-black" />
                </a>
              </div>
              <div className="w-[4rem]">
                <Image src={logo} alt="martin padron" />
              </div>
            </div>
          </div>

          {/* Tabla de curiosidades  */}
          <div className="mt-10 border w-[95%] mx-auto  border-white p-5 shadow-[8px_8px_0px_#ffffff]">
            <h2 className="text-center text-2xl lg:text-3xl">Algunos datos curiosos</h2>
            <div className="text-neutral-400 mt-5 lg:text-lg flex flex-col lg:flex-row gap-3 lg:gap-5">
              <ul className="list-disc ml-4 flex flex-col gap-3 lg:gap-5">
                <li>
                  Soy una persona muy atlética, me gusta el baloncesto y pasar
                  las tardes haciendo ejercicio.
                </li>
                <li>
                  Soy muy fan de los juegos de From Software (Dark souls,
                  Sekiro, Elden Ring, etc...)
                </li>
                <li>
                  No veo series porque me parecen muy largos los cápitulos de 1
                  hora o más.
                </li>
                <li>
                  Tengo una perra que se llama Maya y ha mordido a varios
                  amigos, pero es una dulzura.
                </li>
              </ul>
              <ul className="list-disc ml-4 flex flex-col gap-3 lg:gap-5">
                <li>
                  Soy autodidacta, intento aprender cosas nuevas todos los días.
                </li>
                <li>
                  Soy más de día que de noche, me levanto temprano y me acuesto
                  a dormir temprano.
                </li>
                <li>
                  Creo que se me dá bastante bien explicar cosas y enseñar
                </li>
                <li>
                  Me gusta mucho ayudar y colaborar en cualquier lado, no me
                  gusta que la gente haga las cosas por mí.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
