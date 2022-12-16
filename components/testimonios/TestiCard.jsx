import React from "react";
import Image from "next/image";
import AVATAR1 from "../../public/img/personas/novia.jpg";

const TestiCard = ({ foto, nombre, cargo, p1, p2 }) => {
  return (
    <article className="bg-transparent border border-white rounded-lg p-5 cursor-default h-[34rem] transition-colors hover:bg-primary-100 hover:border-transparent group">
      {/* Foto y nombre  */}
      <div className="flex items-center flex-col gap-2">
        <div className="w-[5rem] rounded-full border-2 border-white">
          <Image src={foto} alt="" className="rounded-full" />
        </div>
        <h3 className="font-bold text-lg">{nombre}</h3>
        <small className="text-sm text-center">{cargo}</small>
      </div>

      {/* Contenido  */}
      <div className="text-neutral-400 flex flex-col gap-3 mt-2 group-hover:text-neutral-300">
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </article>
  );
};

export default TestiCard;
