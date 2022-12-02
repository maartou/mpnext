import Link from "next/link";
import Image from "next/image";
import liquid from "../../public/img/liquid.jpg";
import collage from "../../public/img/collage.jpg";
import logo from "../../public/img/mp_logo.svg";

const Hero = () => {
  return (
    <section className="flex lg:h-screen">
      <div className="hidden lg:flex flex-col items-center justify-between bg-primary-100 w-72 py-8">
        <div className="flex flex-col items-center gap-2">
          <Image src={logo} alt="martin padron" className="w-20" />
          <h2 className="font-bold text-lg">Martín Padrón</h2>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Link href="/">
            <button className="bg-primary-200 p-3 w-[11rem] rounded-lg transition-all hover:scale-105">Servicios</button>
          </Link>

          <Link href="/">
            <button className="bg-primary-200 p-3 w-[11rem] rounded-lg transition-all hover:scale-105">Cotizaciones</button>
          </Link>

          <Link href="/">
            <button className="bg-primary-200 p-3 w-[11rem] rounded-lg transition-all hover:scale-105">Sobre mi</button>
          </Link>
        </div>

        <div>
          <Link href='/'>
            <button className="bg-primary-200 p-3 w-[11rem] rounded-lg transition-all hover:scale-105 border border-white">Asesoría GRATIS</button>
          </Link>
        </div>
      </div>

      <div className="w-full lg:grid lg:grid-rows-2">
        {/* Foto principal y H1  */}
        <div className="relative h-[35rem] lg:h-auto flex justify-center items-center px-4">
          <h1 className="z-10 uppercase font-bold text-5xl leading-[3rem] lg:text-7xl ">
            Diseño y Desarrollo web
          </h1>
          <Image src={liquid} alt="" fill className="object-cover -z-10" />
        </div>

        {/* Portfolio y botones  */}
        <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
          <div className="col-span-2 lg:order-2">
            <Link href="/portfolio">
              <div className="relative h-[18rem] lg:h-full flex items-center justify-center">
                <p className=" uppercase font-light z-10 text-white tracking-[.8em] text-2xl transition-all hover:scale-110">
                  Portfolio
                </p>
                <Image
                  src={collage}
                  alt=""
                  className="brightness-[0.3] object-cover -z-10"
                  fill
                />
              </div>
            </Link>
          </div>

          <div className="bg-black text-white flex justify-center items-center py-20 lg:order-1">
            <Link href="/">
              <button className="uppercase tracking-widest font-light border py-2 px-8  text-xl hover:bg-white hover:text-black transition-all">
                Skills
              </button>
            </Link>
          </div>

          <div className="bg-white text-black flex justify-center items-center py-20 lg:order-3">
            <Link href="/">
              <button className="uppercase tracking-widest font-light border border-black py-2 px-8  text-xl hover:bg-black hover:text-white transition-all">
                Contacto
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
