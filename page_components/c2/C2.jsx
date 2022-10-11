import style from "./C2.module.scss";

const C2 = ({
  servi1,
  servi2,
  servi3,
  servi4,
  content1,
  content2,
  content3,
  content4,
  icon1,
  icon2,
  icon3,
  icon4,
  title
}) => {
  return (
    <>
    {/* Titulo  */}
      <h2 className={style.title}>{title}</h2>

      {/* Contenido  */}
      <div className={style.container}>
        <article className={style.box}>
          {icon1}
          <h3>{servi1}</h3>
          <p>{content1}</p>
        </article>

        <article className={style.box}>
          {icon2}
          <h3>{servi2}</h3>
          <p>{content2}</p>
        </article>

        <article className={style.box}>
          {icon3}
          <h3>{servi3}</h3>
          <p>{content3}</p>
        </article>

        <article className={style.box}>
          {icon4}
          <h3>{servi4}</h3>
          <p>{content4}</p>
        </article>
      </div>
    </>
  );
};

export default C2;
