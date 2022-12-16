import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/illustrations/logo_black.svg";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Aside = ({ activador, about, portfolio, servicios, cotizaciones }) => {
  return (
    <>
      <div className="w-[70%] h-full flex flex-col items-center justify-between py-8 bg-white text-black fixed top-0 left-0 z-[30]">
        {/* Loguito en la parte de arriba  */}
        <div className="w-[5rem]">
          <Image src={logo} alt="" />
        </div>

        {/* Navegacion  */}
        <div className="flex flex-col items-center gap-6">
            <div onClick={activador} className="tracking-[.5em] uppercase font-light text-xl">
                <Link href="/">Home</Link>
            </div>

            <div onClick={activador} className="tracking-[.5em] uppercase font-light text-xl">
                <Link href={about}>sobre mi</Link>
            </div>

            <div onClick={activador} className="tracking-[.5em] uppercase font-light text-xl">
                <Link href={portfolio}>portfolio</Link>
            </div>

            <div onClick={activador} className="tracking-[.5em] uppercase font-light text-xl">
                <Link href={servicios}>servicios</Link>
            </div>

            <div onClick={activador} className="tracking-[.5em] uppercase font-light text-xl">
                <Link href={cotizaciones}>precios</Link>
            </div>
        </div>

        {/* Redes sociales  */}
        <div className="flex gap-7">
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

      <div
        onClick={activador}
        className="w-[30%] h-full fixed top-0 right-0 bg-black opacity-40 z-[30]"
      ></div>
    </>
  );
};

export default Aside;
