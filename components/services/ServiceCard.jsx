import React from "react";
import Link from "next/link";

const ServiceCard = ({ title, content, icon, link }) => {
  return (
    <div className="flex flex-col gap-4 border border-white p-4 h-[31rem] transition-all group hover:bg-white ">
      <span className=" text-primary-100 text-5xl lg:text-4xl 2xl:text-5xl">
        {icon}
      </span>
      <h3 className="text-3xl group-hover:text-black lg:text-2xl 2xl:text-3xl">
        {title}
      </h3>
      <p className="text-lg text-neutral-400 group-hover:text-black">
        {content}
      </p>
      <div>
        <Link href={link}>
          <button className="bg-primary-100 p-3 px-5 rounded-lg">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
