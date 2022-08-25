import style from "./Hero.module.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Socials = () => {
  return (
    <div className={style.redes}>
      <a href="https://www.instagram.com/programarto/" target="_blank" rel="noreferrer">
        <AiOutlineInstagram className={style.icon}/>
      </a>

      <a href="https://wa.me/+584144245029" target="_blank" rel="noreferrer">
        <AiOutlineWhatsApp className={style.icon}/>
      </a>

      <a href="https://www.linkedin.com/in/martineduardop/" target="_blank" rel="noreferrer">
        <AiFillLinkedin className={style.icon}/>
      </a>
    </div>
  );
};

export default Socials;
