import React from "react";

const InfoCard = ({titulo, desc, icon}) => {
  return (
    <article className="border border-black rounded-xl p-4 flex flex-col items-center cursor-default transition-colors group hover:bg-primary-100 hover:border-primary-100 lg:gap-2">
      <div className="text-4xl group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-bold text-2xl group-hover:text-white">{titulo}</h3>
      <p className="text-lg group-hover:text-white text-center">{desc}</p>
    </article>
  );
};

export default InfoCard;
