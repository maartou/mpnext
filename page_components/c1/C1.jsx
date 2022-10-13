import Image from "next/image";
import Link from "next/link";
import style from "./c1.module.scss";

const C1 = ({ foto, title, content }) => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        
        {/* Illustracion  */}
        <div className={style.img_container}>
          <Image src={foto} alt="Martin Padron" priority />
        </div>

        {/* Contenido  */}
        <div className={style.content}>
          <h1>{title}</h1>
          <p>{content}</p>
          <div className={style.btn}>
            <Link href="#contacto">Me interesa</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default C1;
