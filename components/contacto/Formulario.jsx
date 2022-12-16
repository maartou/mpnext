import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mk6s0on",
        "template_hztts1a",
        form.current,
        "RobI50TcH8Bfmvpe_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10 max-w-lg lg:max-w-none mx-auto lg:w-full">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-2xl">Tu nombre</label>
        <input className="text-neutral-400 bg-black border-b pt-3 focus:outline-none" id="name" type="text" name="name" required />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-2xl">Correo electrónico</label>
        <input className="text-neutral-400 bg-black border-b pt-3 focus:outline-none" id="email" type="email" name="email" required />
      </div>

      <div className="flex flex-col">
        <label htmlFor="msg" className="text-2xl">Detalles del servicio que requieres</label>
        <textarea
        id="msg"
        className="bg-black text-neutral-400 mt-3 p-2 border border-white focus:outline-none"
          name="mensaje"
          rows="7"
          required
        ></textarea>

        <button type="submit" className="bg-primary-100 mt-3 py-3 uppercase">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
