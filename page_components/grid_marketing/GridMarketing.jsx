import style from "./GridMarketing.module.scss";

const GridMarketing = () => {
  return (
    <div className={style.grid}>
      <div className={style.item}>
        <h3>Analizamos el entorno</h3>
        <p>
          Antes de comenzar es esencial conocer el estado de tu negocio en el
          universo digital. Analizaremos el alcance, la visibilidad y las
          herramientas con las que cuenta.
        </p>
      </div>

      <div className={`${style.item} ${style.item2}`}>
        <h3>Definimos los objetivos</h3>
        <p>
          Definir objetivos claros, precisos y realizables, permite construir
          una estrategia, establecer prioridades, formular presupuestos y
          evaluar permanentemente si lo que hacemos nos acerca eficientemente al
          logro de nuestras metas.
        </p>
      </div>

      <div className={style.item}>
        <h3>Preparamos la estrategia</h3>
        <p>
          Hacemos un Plan de Marketing en el que se reflejen el análisis del
          entorno, los objetivos, los pasos a seguir para lograr esas metas y
          los indicadores que permitirán evaluar el éxito o fracaso.
        </p>
      </div>

      <div className={`${style.item} ${style.item2}`}>
        <h3>Aumentamos la presencia de tu marca</h3>
        <p>
          Es útil generar contenido de calidad y relevante, para que las
          publicaciones de tu empresa sean interesantes y generen engagement.
        </p>
      </div>

      <div className={style.item}>
        <h3>Mostramos lo que haces</h3>
        <p>
          Apunta de una forma directa y concisa, demostrando que tienes
          experiencia en lo que haces, que ofreces la mejor solución y que tu
          oferta es la más atractiva.
        </p>
      </div>

      <div className={`${style.item} ${style.item2}`}>
        <h3>Promocionamos la oferta y medimos los resultados</h3>
        <p>
          El punto en el que tus campañas se desarrollan al máximo es cuando
          inviertes para desarrollar campañas exitosas. Esto permite incrementar
          exponencialmente la exposición de tus productos y servicios.
        </p>
      </div>
    </div>
  );
};

export default GridMarketing;
