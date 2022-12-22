import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/illustrations/logo_black.svg"

const HeroPage2 = ({titulo, descripcion, illus, clase}) => {
  return (
    <section className="bg-white text-black">
    {/* Grid principal  */}
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      {/* titulos, texto e info  */}
      <div className="lg:p-4 lg:flex flex-col lg:bg-slate-100">
        <header className="hidden lg:flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="martin padron" className="w-[3.8rem]" />
          </Link>

          <nav className="flex gap-7 text-lg">
            <Link href="/sobre-mi">
              <div className="transition-colors hover:text-primary-100">
                Sobre mi
              </div>
            </Link>
            <Link href="/portfolio">
              <div className="transition-colors hover:text-primary-100">
                Portfolio
              </div>
            </Link>
            <Link href="/#servicios">
              <div className="transition-colors hover:text-primary-100">
                Servicios
              </div>
            </Link>
            <Link href="/precios">
              <div className="transition-colors hover:text-primary-100">
                Precios
              </div>
            </Link>
          </nav>
        </header>
        
        <div className="w-11/12 mx-auto flex flex-col gap-4 my-[4rem] max-w-xl lg:w-full lg:max-w-none lg:my-0 lg:h-full lg:justify-center lg:pl-5">
          <h1 className="font-bold text-4xl md:text-5xl 2xl:text-6xl">
            {titulo}
          </h1>
          <h2 className="text-lg md:text-xl 2xl:text-2xl">
           {descripcion}
          </h2>
          <button className="bg-primary-100 text-white w-max p-3 px-4 rounded-lg  text-lg md:text-xl 2xl:text-2xl">
            <Link href="#contactopage">Empieza hoy mismo</Link>
          </button>
        </div>
      </div>

      {/* Fotos  */}
      <div className={clase}>
        <Image src={illus} alt="" className="mx-auto"  priority placeholder="blur" />
      </div>
    </div>
  </section>
  )
}

export default HeroPage2