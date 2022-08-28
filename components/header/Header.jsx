import Image from "next/image";
import logo from "../../public/img/mp_logo.svg";
import Link from "next/link";
import style from "./Header.module.scss";
import { GoThreeBars } from "react-icons/go";

const Header = ({services, portfolio}) => {
  function prueba() {
    alert("Funciona");
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
        <GoThreeBars className={style.burger} onClick={prueba} />
      </nav>
    </header>
  );
};

export default Header;
