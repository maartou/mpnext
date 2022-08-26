import style from "./Skills.module.scss";
import stylex from "./Wave.module.scss";

const Skills = () => {
  return (
    <section className={style.skillscont}>
      <h2>Calidad garantizada</h2>

      <div className={stylex.wave_animation}>
        <div className={stylex.wave}></div>
      </div>

      <div className={style.container}>
        <div className={style.inner}>
          <p>
            Estoy al día con las ultimas técnologias y tendencias del mercado,
            aunque me especializo más en código también puedo trabajar con
            plataformas no-code. Teniendo como objetivo mejorar mis habilidades
            cada día un poco más para ofrecer mis servicios con la mejor calidad
            y trato posible.
          </p>
        </div>

        <div className={style.skills}>

        </div>


      </div>
    </section>
  );
};

export default Skills;
