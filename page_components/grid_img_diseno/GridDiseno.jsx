import Image from "next/image";
import style from "./GridDiseno.module.scss";

import catfe from "../../public/img/designs/catfe.jpg";
import futux from "../../public/img/designs/futux.jpg";
import menu from "../../public/img/designs/menu.png";
import piel from "../../public/img/designs/piel.jpg";
import tarjetas from "../../public/img/designs/tarjetas.png";
import venecia from "../../public/img/designs/venecia.jpg";

const GridDiseno = () => {
  return (
    <div className={style.grid}>
      <div className={style.img_container}>
        <Image src={catfe} alt="catfe" />
      </div>

      <div className={style.img_container}>
        <Image src={futux} alt="futux" />
      </div>

      <div className={style.img_container}>
        <Image src={menu} alt="menu perros de rocko" />
      </div>

      <div className={style.img_container}>
        <Image src={piel} alt="Piel branding" />
      </div>

      <div className={style.img_container}>
        <Image src={tarjetas} alt="tarjetas tododesechables" />
      </div>

      <div className={style.img_container}>
        <Image src={venecia} alt="venecia branding" />
      </div>
    </div>
  );
};

export default GridDiseno;
