import Head from "next/head";
import Header from "../components/header/Header";
import style from "../page_components/contenido/Contenido.module.scss";

import C1 from "../page_components/c1/C1";
import illus from "../public/img/illustrations/marketing_illus.svg";

import Contenido from "../page_components/contenido/Contenido";

import C2 from "../page_components/c2/C2";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaChessPawn } from "react-icons/fa";

import Title2 from "../page_components/title_2/Title2";

import GridMarketing from "../page_components/grid_marketing/GridMarketing";

import Contacto from "../components/contacto/Contacto";

import Footer from "../components/footer/Footer";

const Marketing = () => {
  return (
    <>
      <Head>
        <title>
          Marketing digital y gestión de redes sociales en Venezuela | Martín
          Padrón
        </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta
          name="description"
          content="Marketing digital para que empieces a ganar clientes a traves de internet con las mejores estrategias adaptadas a las necesidades de tu marca o empresa."
        />
        <meta
          name="keywords"
          content="marketing, marketing digital, gestion de redes sociales en venezuela, community manager, social media, martin padron, redes sociales estrategias"
        />
        <meta
          property="og:image"
          content="https://www.martineduardo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog_image.d303d898.jpg&w=3840&q=75"
        />
      </Head>

      <Header
        services="/#servicios"
        portfolio="/Portfolio"
        servi_nav="/#servicios"
        contacto_nav="#contacto"
      />

      <C1
        foto={illus}
        title="Marketing digital y gestión de redes sociales, estrategias adaptadas a las neceidades de tu marca "
        content="Conoceremos a tu audiencia y estableceremos objetivos claros para crear contenido relevante, que entretenga y que sea frecuente. Además de medir los resultados de todas las redes sociales para fidelizar tus usuarios y generar conversiones."
      />

      <section>
        <Contenido title="¿Qué es el marketing digital?">
          <p>
            El Marketing Digital, también llamado mercadotecnia online o
            mercadeo en línea, se define como una forma de marketing que utiliza
            los nuevos medios y canales publicitarios tecnológicos y digitales
            como internet o el móvil. Gracias al poder de la tecnología, permite
            crear experiencias únicas y personalizadas para medir y registrar
            todo lo que ocurre con el objetivo de mejorar la experiencia del
            usuario.
          </p>
        </Contenido>

        <Contenido title="Ventajas del marketing digital">
          <p>
            Debido a las características que internet aporta al Marketing
            Digital podemos atribuirle claramente las siguientes ventajas:
          </p>
          <ul className={style.marketing_list}>
            <li>
              <strong>Global:</strong> Una vez posicionado tu producto en
              internet, cualquier persona de cualquier parte del mundo podrá
              acceder a él.
            </li>
            <li>
              <strong>Interactivo:</strong> Internet es un canal de comunicación
              bidireccional por lo tanto el Marketing Digital también lo es. De
              esta manera, la comunicación entre empresas y consumidores se ha
              maximizado sobre todo desde la irrupción de las RRSS.
            </li>
            <li>
              <strong>Perfectamente medible:</strong> Los datos ya no se basan
              en estudios de mercado, lentos de realizar y de elevado coste.
              Ahora, se recogen de manera inmediata a través del seguimiento de
              las acciones que el usuario realiza directamente en internet.
              Permite obtener datos personales, de preferencias y usabilidad
              que, analizados y gestionados adecuadamente, permiten la creación
              de acciones más eficientes.
            </li>

            <li>
              <strong>Hiper segmentable:</strong> Gracias a la gran cantidad de
              información recogida sobre los usuarios de internet, es posible
              diversificar mucho más las acciones de marketing. Podemos apuntar
              a objetivos cada vez más perfilados y definidos. Hoy en día,
              segmentamos las campañas incorporando nuevas variables
              geográficas, horarias y en función del dispositivo de acceso.
            </li>
          </ul>
        </Contenido>

        <Contenido title="diferencias entre marketing digital y diseño gráfico">
          <p>
            En vista de la importancia que tienen ambas en la difusión de la
            información y dar a conocer un producto o servicio, es indispensable
            conocer sus diferencias. Aunque son disciplinas muy relacionadas,
            existen aspectos que las diferencian entre sí dentro de los cuales
            se pueden mencionar:
          </p>
          <ul className={style.diferencias_list}>
            <li>
              Las estrategias de diseño gráfico conforman una composición única
              con el fin de transmitir un mensaje visual con múltiples
              objetivos. Por su parte, las estrategias de marketing tienen como
              finalidad mantenerse comunicado con sus clientes para generar
              ganancias.
            </li>
            <li>
              El marketing digital tiene como fundamento los estudios de
              mercado, los análisis y estrategias anteriores para lograr
              posición de la marca. El diseño se basa en la creatividad para
              formular conceptos para llegar a un público determinado.
            </li>
            <li>
              El publicista usa las ventajas del marketing tradicional para
              integrarlas con estrategias digitales y así lograr resultados. La
              función del diseño recae sobre la figura del diseñador quien
              combina distintas herramientas visuales, digitales, de forma,
              color y tamaño para lograr la composición.
            </li>
            <li>
              El diseño gráfico busca generar un cambio en el pensamiento para
              promover una idea o vender un producto. Las estrategias digitales
              buscan visibilidad y ganancias en ventas.
            </li>
          </ul>
        </Contenido>
      </section>

      <C2
        icon1={<AiOutlineUser className="icon" />}
        servi1="Community manager"
        content1="Construiremos, ampliaremos y administraremos tu comunidad
        online."
        icon2={<BsSearch className="icon" />}
        servi2="Análisis"
        content2="Analizaremos tú audiencia para optimizar tus resultados."
        icon3={<AiOutlineSchedule className="icon" />}
        servi3="Planificación"
        content3="Mantenernos organizados y con los objetivos en mente es la clave para conseguir resultados."
        icon4={<FaChessPawn className="icon" />}
        servi4="Estrategia"
        content4="Nos enfocaremos en la creación y distribución de contenido relevante y
        de calidad, para dotar de valor y significado a la marca."
        title="Nuestros servicios"
      />

      <Title2
        small="Lleva tu negocio a lo más alto"
        title="Pasos y metodología de trabajo"
      />

      <GridMarketing />

      <Contacto
        title="¿Comenzamos?"
        content="No esperes más y empieza a ganar clientes a través de internet"
      />

      <Footer
        servicios="/#servicios"
        experiencia="/#experiencia"
        portfolio="/Portfolio"
        contacto="#contacto"
      />
    </>
  );
};

export default Marketing;
