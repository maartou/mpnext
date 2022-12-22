import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/illustrations/logo_black.svg";
import { GoThreeBars } from "react-icons/go";
import Aside from "../header/Aside";

const HeaderPage = () => {
  const [open, setOpen] = useState(false);
  const trigger = () => {
    setOpen(!open);
  };

  return(
    <>
    <header className="sticky left-0 top-0 z-[20] bg-white flex justify-between items-center p-4 lg:hidden">
      <Link href="/">
        <Image src={logo} alt="martin padron" className="w-[3.8rem]" />
      </Link>
      <GoThreeBars
        onClick={trigger}
        className="text-[2.2rem] text-black cursor-pointer md:hidden"
      />
      <nav className="hidden md:flex gap-7 text-lg text-black">
        <Link href="/sobre-mi">
          <div className="transition-colors hover:text-primary-100">Sobre mi</div>
        </Link>
        <Link href="/portfolio">
          <div className="transition-colors hover:text-primary-100">Portfolio</div>
        </Link>
        <Link href="/#servicios">
          <div className="transition-colors hover:text-primary-100">Servicios</div>
        </Link>
        <Link href="/precios">
          <div className="transition-colors hover:text-primary-100">Precios</div>
        </Link>
      </nav>
    </header>

    {open && (
      <Aside
        activador={trigger}
        about="/sobre-mi"
        portfolio="/portfolio"
        servicios="/#servicios"
        cotizaciones="/precios"
      />
    )}
  </>
  );
};

export default HeaderPage;
