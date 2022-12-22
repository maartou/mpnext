import Image from "next/legacy/image";
import Link from "next/link";
import logo from "../../public/img/mp_logo.svg";

const FooterPage = ({ servicios, experiencia, portfolio, contacto }) => {
  return (
    <footer className="bg-primary-100 py-10">
    <div className="flex flex-col gap-12 items-center">
      <div className="w-[8rem]">
        <Link href="/">
          <Image src={logo} alt="martin padron" />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-5 md:flex-row text-xl">
        <Link href="/">
          <div>Volver al inicio</div>
        </Link>
        <Link href={servicios}>
          <div>Servicios</div>
        </Link>
        <Link href={experiencia}>
          <div>Experiencia</div>
        </Link>
        <Link href={portfolio}>
          <div>Portfolio</div>
        </Link>
        <Link href={contacto}>
          <div>Contacto</div>
        </Link>
      </div>

      <div>
        <p>&copy; Martín Padrón 2022 todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
  )
}

export default FooterPage