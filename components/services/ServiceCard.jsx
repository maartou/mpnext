import React from "react";

const ServiceCard = ({ title, content, icon }) => {
  return (
    <div className="flex flex-col gap-6 border border-white p-7 transition-all group hover:bg-white ">
      <span className=" text-primary-100 text-6xl">{icon}</span>
      <h2 className="text-3xl group-hover:text-black">{title}</h2>
      <p className="text-lg text-neutral-400 group-hover:text-black">{content}</p>
    </div>
  );
};

export default ServiceCard;
