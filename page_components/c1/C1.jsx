import Image from "next/image";
import Link from "next/link";
import style from "./c1.module.scss";

const C1 = ({ foto, title, content }) => {
  return (
    <section className={style.c1_container}>
      <div className={style.illustracion}>
        <Image src={foto} alt="" />
      </div>
      <div className={style.content}>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className={style.btn}>
          <Link href="#contacto">Me interesa</Link>
        </div>
      </div>
    </section>
  );
};

export default C1;
