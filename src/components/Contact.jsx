import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 px-4 text-zinc-50 py-96 "
    >
      <div className="flex flex-col px-4 pt-32 justify-center max-w-screen-lg mx-auto h-full">
        <div className="py-5">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-500">
            Contacto
          </p>
          <p className="py-6">
            envíe el siguiente formulario para ponerse en contacto conmigo
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/efeea79b-a749-4cde-8bcb-6dadf720f029"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Ingresa tu email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              placeholder="Deja tu mensaje"
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-zinc-50 bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3  mt-2 mb-40 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
