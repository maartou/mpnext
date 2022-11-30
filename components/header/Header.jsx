import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/img/mp_logo.svg";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";

const Header = () => {

  return (
    <header className="bg-primary-100 flex justify-between items-center p-4">
      <Image src={logo} alt="martin padron" className="w-[3.8rem]" />
      <GoThreeBars className="text-[2.2rem]" />
    </header>
  );
};

export default Header;
