import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import manu from "../../public/img/portfolio/manu.jpg";
import sized from "../../public/img/portfolio/sized.jpg";
import taxes from "../../public/img/portfolio/taxes.png";
import upay from "../../public/img/portfolio/urbanapay.png";
import PortfolioItem from "./PortfolioItem";

const PortfolioComp = () => {
  return (
    <section className="w-11/12 mx-auto">
      <h2 className="titulos">Trabajos recientes</h2>

      {/* Grid de los trabajos  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PortfolioItem
          img={taxes}
          alt="taxes jmj"
          titulo="Taxes jmj"
          enlace="https://www.taxesjmj.com/"
        />

        <PortfolioItem
          img={sized}
          alt="sized store"
          titulo="Sized store"
          enlace="https://www.sizedstore.com/"
        />

        <PortfolioItem
          img={manu}
          alt="manuela serrano"
          titulo="Manuela Serrano"
          enlace="https://www.manuelaserranoc.com/"
        />

        <PortfolioItem
          img={upay}
          alt="urbana pay"
          titulo="Urbana pay"
          enlace="https://www.urbanapay.com/"
        />
      </div>

      <button className="flex items-center gap-2 bg-primary-100 py-3 px-4 rounded-lg mt-5 border border-transparent transition-colors hover:border-white ml-auto lg:text-xl">
        <Link href="/portfolio">Ver portfolio completo</Link>
        <span>
          <IoIosArrowForward className="text-xl" />
        </span>
      </button>
    </section>
  );
};

export default PortfolioComp;
