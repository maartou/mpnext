import Link from "next/link";
import Image from "next/image";
import liquid from "../../public/img/liquid.jpg";
import liquidw from "../../public/img/liquid_w.jpg";
import logo from "../../public/img/mp_logo.svg";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="flex lg:h-screen">
      {/* Aside  */}
      <div className="hidden lg:flex flex-col items-center justify-between bg-primary-100 w-72 py-8">
        <div className="flex flex-col items-center gap-2">
          <Image src={logo} alt="martin padron" className="w-20" />
          <h2 className="font-bold text-lg">Martín Padrón</h2>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Link href="/#servicios">
            <button className="bg-primary-200 p-3 w-[11rem] rounded-lg transition-all hover:scale-105">
              Servicios
            </button>
          </Link>

          <Link href="/precios">
            <button className="bg-primary-200 p-3 w-[11rem] rounded-lg transition-all hover:scale-105">
              Cotizaciones
            </button>
          </Link>

          <Link href="/sobre-mi">
            <button className="bg-primary-200 p-3 w-[11rem] rounded-lg transition-all hover:scale-105">
              Sobre mi
            </button>
          </Link>
        </div>

        <div>
          <Link href="/#contacto">
            <button className="bg-primary-200 p-3 w-[11rem] rounded-lg transition-all hover:scale-105 border border-white">
              Asesoría GRATIS
            </button>
          </Link>

          <div className="flex gap-7 justify-center mt-5">
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
      </div>

      <div className="w-full lg:grid lg:grid-rows-2">
        {/* Foto principal y H1  */}
        <div className="h-[35rem] flex justify-center items-center px-5 fondi lg:h-auto lg:px-0">

          <div className="flex flex-col gap-3 md:max-w-xl lg:max-w-[90%]">
            <h1 className="font-bold text-5xl leading-[3.3rem] md:text-6xl 2xl:text-7xl">
              Lleva tu negocio al siguiente nivel con tu propio y potente sitio
              web &#128293;
            </h1>
            <h2 className="text-neutral-400 text-lg md:text-xl">
              Soy <strong className="text-white">Martín Padrón</strong>, desarrollador frontend y
              diseñador de interfaces. Estoy aquí para ayudarte crear el sitio
              web ideal que tu negocio, empresa o emprendimiento necesitan,
              ¿listo para comenzar?
            </h2>
          </div>

        </div>

        {/* Portfolio y botones  */}
        <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
          <div className="col-span-2 lg:order-2">
            <Link href="/portfolio">
              <div className=" bg-black h-[18rem] relative lg:h-full flex items-center justify-center group transition-all hover:bg-white">
                <p className="uppercase font-light text-white tracking-[.8em] text-2xl border border-white py-10 px-5 group-hover:text-black group-hover:border-black">
                  Portfolio
                </p>
                <div className="absolute top-14 right-4 w-60 h-14 border border-white group-hover:border-black 2xl:top-[9rem] 2xl:right-[5rem]"></div>
              </div>
            </Link>
          </div>

          <div className="relative text-white flex justify-center items-center py-20 lg:order-1">
            <Link href="/#experiencia">
              <button className="uppercase tracking-widest font-light border py-2 w-[10rem]  text-xl z-10 lg:w-[12rem] lg:py-4 hover:bg-white hover:text-black transition-all">
                Skills
              </button>
            </Link>
            <Image
              src={liquid}
              alt=""
              fill
              className="object-cover -z-10 brightness-[0.2] saturate-0"
              placeholder="blur"
            />
          </div>

          <div className="relative text-black flex justify-center items-center py-20 lg:order-3">
            <Link href="/#contacto">
              <button className="uppercase tracking-widest font-light border border-black py-2 w-[10rem] text-xl z-10 lg:w-[12rem] lg:py-4 hover:bg-black hover:text-white transition-all">
                Contacto
              </button>
            </Link>
            <Image
              src={liquidw}
              alt=""
              fill
              className="object-cover -z-10"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
