import Head from "next/head";
import Image from "next/image";

import Header from "../components/header/Header";
import Title from "../components/extra/title/Title";

import yo from "../public/img/personas/selfie.jpg";
import yo2 from "../public/img/personas/selfie2.jpg";

import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import style from "../styles/About.module.scss";

const SobreMi = () => {
  return (
    <>
      <Head>
        <title> Sobre mi - Martin Padrón </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Header services="/#servicios" portfolio="/Portfolio" />

      <Title
        title="Sobre mi"
        content="Bienvenid@ a está curiosa sección dónde puedes conocerme un poco más."
      />
      
    </>
  );
};

export default SobreMi;
