import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/img/mp_logo.svg";
import { GoThreeBars } from "react-icons/go";
import Aside from "./Aside";

const Header = () => {
  const [open, setOpen] = useState(false);
  const trigger = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="sticky left-0 top-0 z-[20] bg-black flex justify-between items-center p-4 ">
        <Image src={logo} alt="martin padron" className="w-[3.8rem]" />
        <GoThreeBars onClick={trigger} className="text-[2.2rem] cursor-pointer" />
      </header>
      {open && <Aside activador={trigger} about="/sobre-mi" portfolio="/portfolio" servicios="/#servicios" cotizaciones="/precios" />}
    </>
  );
};

export default Header;
