import style from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/img/mp_logo.svg'

const Footer = ({servicios, experiencia, portfolio, contacto}) => {
  return (
    <footer className={style.footer}>

        <div className={style.logo}>
        <Image src={logo} alt="Martin Padron Logo" />
      </div>
      
      <div className={style.links}>
        <Link href="/">Home</Link>
        <Link href={servicios}>Servicios</Link>
        <Link href={experiencia}>Experiencia</Link>
        <Link href={portfolio}>Portfolio</Link>
        <Link href={contacto}>Contacto</Link>
      </div>

      <div className={style.copy}>
        <small> &copy; Martin Padrón 2022 todos los derechos reservados. </small>
      </div>

    </footer>
  )
}

export default Footer