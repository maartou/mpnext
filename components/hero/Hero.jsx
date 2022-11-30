import Link from "next/link";
import Image from "next/image";
import liquid from "../../public/img/liquid.jpg";
import collage from '../../public/img/collage.jpg'

const Hero = () => {
  return (
    <section>
      {/* Foto principal y H1  */}
      <div className="relative h-[35rem]">
        <h1 className="absolute top-[50%] left-[1.5rem]  -translate-y-[50%] uppercase font-bold text-5xl leading-[3rem] ">
          Diseño y Desarrollo web
        </h1>
        <Image src={liquid} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative h-[18rem]">
        <p className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] uppercase font-light z-10 text-white">Portfolio</p>
        <Image src={collage} alt='' className="brightness-[0.3] w-full h-full object-cover" />
      </div>


    </section>
  );
};

export default Hero;
