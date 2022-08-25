import Image from "next/image";
import logo from "../../public/img/mp_logo.svg";
import Link from "next/link";
import style from "./Header.module.scss";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  function prueba() {
    alert("Funciona");
  }

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image src={logo} alt="Martin Padron logo" />
      </div>

      <nav className={style.wide_nav}>
        <Link href="/"> Home </Link>
        <Link href="/Portfolio"> Portfolio </Link>
        <Link href="/Sobre-mi"> Sobre mi </Link>
      </nav>

      <nav className={style.responsive_nav}>
        <GoThreeBars className={style.burger} onClick={prueba} />
      </nav>
    </header>
  );
};

export default Header;
