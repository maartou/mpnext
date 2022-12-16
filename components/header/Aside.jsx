import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/illustrations/logo_black.svg";

const Aside = ({ activador, about, portfolio, servicios, cotizaciones }) => {
  return (
    <>
      <div className="w-[70%] h-full bg-white text-black fixed top-0 left-0 z-[30]">
        {/* Loguito en la parte de arriba  */}
        <div className="absolute top-3 left-3 w-[5rem]">
          <Image src={logo} alt="" />
        </div>

        {/* Navegacion  */}
        <div className="flex flex-col gap-6 items-center justify-center h-full w-11/12 mx-auto">
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
      </div>

      <div
        onClick={activador}
        className="w-[30%] h-full fixed top-0 right-0 bg-black opacity-40 z-[30]"
      ></div>
    </>
  );
};

export default Aside;
