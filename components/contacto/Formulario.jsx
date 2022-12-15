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
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <h4>Puedes colocar tu nombre acá</h4>
        <input className="text-black" type="text" name="name" placeholder="Nombre" required />
      </div>

      <div>
        <h4>Tu correo electrónico por aquí</h4>
        <input className="text-black" type="email" name="email" placeholder="Email" required />
      </div>

      <div>
        <h4>
          El mensaje que deseés aquí, te responderé en la mayor brevedad posible
        </h4>
        <textarea
        className="text-cyan-500"
          name="mensaje"
          rows="7"
          placeholder="Cuéntame qué necesitas..."
          required
        ></textarea>

        <button type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
