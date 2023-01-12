import React from "react";

const Pcard = (props) => {
  return (
    <article className="border rounded-xl border-white cursor-default">
      {/* Header del card  */}
      <div className="border-b border-white p-4">
        <p>{props.plan}</p>
      </div>

      {/* Body del card  */}
      <div className="p-4 flex flex-col gap-5 md:h-[32rem] md:justify-between">
        <div className="flex flex-col gap-5">
          {/* Titulos  */}
          <div className="flex flex-col gap-2">
            <small className="text-neutral-400">Desde...</small>
            <p className="text-5xl">{props.precio}</p>
            <p className="text-neutral-400">{props.desc}</p>
          </div>

          {/* Caracteristicas  */}
          <div className="flex flex-col gap-4">{props.children}</div>
        </div>

        {/* Boton  */}
          <a
            href="https://wa.me/+584144245029"
            target="_blank"
            rel="noreferrer"
            className="bg-primary-100 p-3 rounded-xl text-center"
          >
            {props.plan}
          </a>
      </div>
    </article>
  );
};

export default Pcard;
