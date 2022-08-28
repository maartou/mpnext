import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/img/mp_logo.svg";
import Link from "next/link";
import style from "./Header.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";

const Header = ({ services, portfolio, servi_nav, contacto_nav }) => {
  function prueba() {
    alert("Funciona");
  }

  const [showMenu, setShowMenu] = useState(false);

  let menu;
  let menuMask;

  if (showMenu) {
    menu = (
      <div className={style.inside_menu}>
        <ul>
          <li>
            <Link href="/"> Inicio </Link>
          </li>

          <li>
            <Link href="/Sobre-mi"> Sobre mi </Link>
          </li>

          <li>
            <Link href="/Portfolio"> Portfolio </Link>
          </li>

          <li>
            <Link href={servi_nav}> Servicios </Link>
          </li>

          <li>
            <Link href={contacto_nav}> Contacto </Link>
          </li>
        </ul>
      </div>
    );
    menuMask = (
      <AiFillCloseCircle
        className={style.icon}
        onClick={() => setShowMenu(false)}
      />
    );
  }

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link href="/">
          <Image src={logo} alt="Martin Padron logo" />
        </Link>
      </div>

      <nav className={style.wide_nav}>
        <Link href="/"> Home </Link>
        <Link href="/Sobre-mi"> Sobre mi </Link>
        <Link href={services}> Servicios </Link>
        <Link href={portfolio}> Portfolio </Link>
      </nav>

      <nav className={style.responsive_nav}>
        <GoThreeBars
          className={style.burger}
          onClick={() => setShowMenu(!showMenu)}
        />
        {menuMask}
        {menu}
      </nav>
    </header>
  );
};

export default Header;
