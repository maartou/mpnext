import React from "react";

const ServiceCard = ({ title, content, icon }) => {
  return (
    <div className="flex flex-col gap-4 border border-white p-4 h-[29rem] transition-all group hover:bg-white ">
      <span className=" text-primary-100 text-5xl">{icon}</span>
      <h3 className="text-3xl group-hover:text-black">{title}</h3>
      <p className="text-lg text-neutral-400 group-hover:text-black">{content}</p>
    </div>
  );
};

export default ServiceCard;
